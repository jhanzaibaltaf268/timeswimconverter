import fs from 'fs';

const slugs = [
  'swim-time-converter-100-im',
  'swim-time-converter-25-yards-to-meters',
  'asa-swim-time-conversion-calculator',
  'swim-time-converter-50-yards-to-meters',
  'swim-time-converter-yards-to-meters',
  'long-course-to-short-course-conversion-calculator',
  'asa-swim-time-conversion-calculator-pdf',
  'meters-to-yards-time-conversion'
];

for (const slug of slugs) {
  const filePath = `dist/blog/${slug}/index.html`;
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${filePath}`);
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf-8');
  const title = (html.match(/<title>([^<]+)<\/title>/) || [])[1];
  const desc = (html.match(/<meta name="description" content="([^"]+)"/) || [])[1];
  const keywords = (html.match(/<meta name="keywords" content="([^"]+)"/) || [])[1];
  const ogImg = (html.match(/<meta property="og:image" content="([^"]+)"/) || [])[1];
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];

  console.log(`\n=== SLUG: ${slug} ===`);
  console.log(`Title: ${title}`);
  console.log(`Keywords: ${keywords}`);
  console.log(`OG Image: ${ogImg}`);
  console.log(`Canonical: ${canonical}`);
  console.log(`Desc: ${desc ? desc.substring(0, 80) + '...' : 'NONE'}`);
}
