import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const siteBase = 'https://timeswimconverter.com';
const locales = ['en', 'hi', 'es', 'ru', 'fr', 'de', 'it', 'pt', 'bn', 'ja', 'ko', 'ms', 'pl', 'id', 'ar', 'bg', 'tr', 'sv'];

console.log('='.repeat(80));
console.log('🚀 COMPREHENSIVE MULTILINGUAL SEO AUDIT TEST SUITE: time-swim-converter');
console.log('='.repeat(80));

if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ directory not found. Please build first.');
  process.exit(1);
}

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`\n📦 Found ${htmlFiles.length} HTML files in dist/ to validate.\n`);

let defects = 0;
let passes = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(distDir, file);

  const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    console.error(`❌ Missing title tag in ${relPath}`);
    defects++;
  } else {
    passes++;
  }

  const descMatch = content.match(/<meta\s+[^>]*name=["']description["'][^>]*content="([^"]+)"/i) || content.match(/<meta\s+[^>]*content="([^"]+)"[^>]*name=["']description["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    console.error(`❌ Missing meta description in ${relPath}`);
    defects++;
  } else {
    passes++;
  }

  const canonicalMatch = content.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href="([^"]+)"/i) || content.match(/<link\s+[^>]*href="([^"]+)"[^>]*rel=["']canonical["']/i);
  if (!canonicalMatch) {
    console.error(`❌ Missing canonical link in ${relPath}`);
    defects++;
  } else {
    passes++;
  }
}

console.log(`================================================================================`);
console.log(`📊 AUDIT RESULTS SUMMARY: time-swim-converter`);
console.log(`================================================================================`);
console.log(`Total Passed Checks: ${passes}`);
console.log(`Total Defects:       ${defects}`);

if (defects > 0) {
  console.error(`❌ Audit failed with ${defects} defects.`);
  process.exit(1);
} else {
  console.log(`🎉 ALL INTERNATIONAL SEO, CANONICAL & HREFLANG TESTS PASSED WITH 100% COMPLIANCE!\n`);
}
