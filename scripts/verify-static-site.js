#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const OFFICIAL_LOGO = '/fishfull.jpg';
const COPYRIGHT = 'Copyright © 2026Fishfull漁有料版權所有';
const BRAND_LOGO_CLASS = 'brand-logo-img';
const GLOBAL_FOOTER_CLASS = 'fishfull-global-footer';
const TEXT_EXTENSIONS = new Set(['.html', '.js', '.css', '.json']);

function normalizeRelative(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function read(relativePath) {
  const target = path.join(ROOT, relativePath);
  if (!fs.existsSync(target)) {
    throw new Error(`Missing required file: ${relativePath}`);
  }
  return fs.readFileSync(target, 'utf8');
}

function assertContains(relativePath, needle, reason) {
  if (!read(relativePath).includes(needle)) {
    throw new Error(`${relativePath}: missing ${reason}: ${needle}`);
  }
}

function walkTextFiles(dir = ROOT, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const target = path.join(dir, entry.name);
    const relativeParts = normalizeRelative(target).split('/');
    if (relativeParts.includes('.git') || relativeParts.includes('node_modules')) continue;

    if (entry.isDirectory()) {
      walkTextFiles(target, results);
      continue;
    }

    if (entry.isFile() && TEXT_EXTENSIONS.has(path.extname(entry.name))) {
      results.push(target);
    }
  }
  return results;
}

function listHtmlFiles() {
  return walkTextFiles().filter((filePath) => filePath.endsWith('.html')).sort();
}

function assertValidVercelConfig() {
  const config = JSON.parse(read('vercel.json'));
  const rewrites = Array.isArray(config.rewrites) ? config.rewrites : [];
  for (const destination of ['/pages/about.html', '/pages/map.html', '/pages/sustainability.html']) {
    if (!rewrites.some((rewrite) => rewrite.destination === destination)) {
      throw new Error(`vercel.json: missing rewrite destination ${destination}`);
    }
  }
}

function assertNoLegacyBrandLogoSvg() {
  const offenders = [];
  const legacySvgClass = new RegExp(`<svg[^>]*class=["'][^"']*\\b${BRAND_LOGO_CLASS}\\b`, 'i');

  for (const filePath of walkTextFiles()) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (legacySvgClass.test(content)) offenders.push(normalizeRelative(filePath));
  }

  if (offenders.length) {
    throw new Error(`Remove legacy svg.${BRAND_LOGO_CLASS} markup from: ${offenders.join(', ')}`);
  }
}

function assertNoGlobalFooterMarkup() {
  const offenders = [];
  const footerMarkup = new RegExp(`<footer[^>]*class=["'][^"']*\\b${GLOBAL_FOOTER_CLASS}\\b`, 'i');

  for (const filePath of listHtmlFiles()) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (footerMarkup.test(content)) offenders.push(normalizeRelative(filePath));
  }

  if (offenders.length) {
    throw new Error(`Remove static footer.${GLOBAL_FOOTER_CLASS} markup from: ${offenders.join(', ')}`);
  }
}

function assertOfficialLogoGuard() {
  const shell = read('fishfull-site-shell.js');
  for (const term of [
    `var logoSrc = '${OFFICIAL_LOGO}'`,
    'generatedTrademarkSelector',
    'removeGeneratedTrademarkVisuals',
    'removeAlternateTrademarkVisuals',
    'dedupeBrandLogos',
    'removeDuplicateCopyrightText',
    COPYRIGHT,
  ]) {
    if (!shell.includes(term)) {
      throw new Error(`fishfull-site-shell.js missing official-logo guard term: ${term}`);
    }
  }

  for (const filePath of listHtmlFiles()) {
    const content = fs.readFileSync(filePath, 'utf8');
    const rel = normalizeRelative(filePath);
    const logoTags = content.match(/<img[^>]+(?:brand|logo|商標)[^>]*>/gi) || [];
    for (const tag of logoTags) {
      if (!tag.includes(OFFICIAL_LOGO)) {
        throw new Error(`${rel}: brand/logo image must use ${OFFICIAL_LOGO}: ${tag}`);
      }
    }

    const copyrightCount = content.split(COPYRIGHT).length - 1;
    if (copyrightCount > 1) {
      throw new Error(`${rel}: static copyright statement appears ${copyrightCount} times`);
    }
  }
}

function assertArEntryIsPrimary() {
  assertContains('ar.html', 'data-page="ar-game"', 'root-level AR game page marker');
  assertContains('ar.html', '/pages/ar-mobile-fish-fit.css', 'mobile AR full-fish fit guard');
  assertContains('ar.html', '/pages/ar-ultra-small-phone.css', 'ultra-small phone and landscape AR guard');
  assertContains('ar.html', '/pages/ar-safe-view.css', 'AR safe-view frame');
  assertContains('ar.html', '/pages/ar-stall-tap-safe.css', 'fish-stall tap-safe mobile controls');
  assertContains('ar.html', '/pages/ar-official-model-only.css', 'AR official 3D model only styles');
  assertContains('ar.html', '/pages/ar-official-model-only.js', 'AR official 3D model only behavior');
  assertContains('ar.html', '/pages/ar-no-generated-fish-visuals.css', 'AR generated fish visual guard');
  assertContains('ar.html', 'Back to the full 3D fish', 'English full-fish return action');

  if (!read('pages/ar-ultra-small-phone.css').includes('orientation: landscape')) {
    throw new Error('pages/ar-ultra-small-phone.css must protect mobile landscape AR view');
  }
  if (!read('pages/ar-stall-tap-safe.css').includes('touch-action: manipulation')) {
    throw new Error('pages/ar-stall-tap-safe.css must keep mobile controls tappable');
  }
  if (!read('pages/ar-official-model-only.js').includes('removeFallbackFish')) {
    throw new Error('pages/ar-official-model-only.js must remove substitute fish art');
  }
  if (!read('pages/ar-no-generated-fish-visuals.css').includes('.phone-fish')) {
    throw new Error('pages/ar-no-generated-fish-visuals.css must guard generated hero fish visuals');
  }
  if (!read('home.js').includes('ar.html')) {
    throw new Error('home.js must expose the root-level AR game entry');
  }
}

function main() {
  for (const requiredPath of [
    'index.html',
    'ar.html',
    'home.js',
    'fishfull.jpg',
    'fishfull-brand.css',
    'fishfull-site-shell.js',
    'site-i18n.js',
    'vercel.json',
    'pages/ar-mobile-fish-fit.css',
    'pages/ar-ultra-small-phone.css',
    'pages/ar-safe-view.css',
    'pages/ar-stall-tap-safe.css',
    'pages/ar-official-model-only.css',
    'pages/ar-official-model-only.js',
    'pages/ar-no-generated-fish-visuals.css',
  ]) {
    read(requiredPath);
  }

  assertValidVercelConfig();
  assertNoLegacyBrandLogoSvg();
  assertNoGlobalFooterMarkup();
  assertOfficialLogoGuard();
  assertArEntryIsPrimary();
  console.log('FishFull static check passed.');
}

try {
  main();
} catch (error) {
  console.error(`FishFull static check failed: ${error.message}`);
  process.exit(1);
}
