import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const blogs = [
  {
    filename: 'blog-swim-time-converter-100-im.png',
    tag: '100 INDIVIDUAL MEDLEY CONVERSION',
    title: 'Swim Time Converter 100 IM',
    subtitle: 'SCY (25yd) to SCM (25m) & 200 IM Projections',
    metric1: 'FLY • BACK • BREAST • FREE',
    metric2: '4 Wall Transitions & Turn Splits',
    accentColor: '#38bdf8'
  },
  {
    filename: 'blog-swim-time-converter-25-yards-to-meters.png',
    tag: 'POOL LENGTH CONVERSION',
    title: 'Swim Time Converter 25 Yards to Meters',
    subtitle: '22.86m (25yd) vs 25.00m (25m) Distance Delta',
    metric1: '+2.14m Distance per Lap Gap',
    metric2: 'Wall Push-Off Velocity Modeling',
    accentColor: '#06b6d4'
  },
  {
    filename: 'blog-asa-swim-time-conversion-calculator.png',
    tag: 'SWIM ENGLAND / ASA STANDARDS',
    title: 'ASA Swim Time Conversion Calculator',
    subtitle: 'Official SCM (25m) to LCM (50m) British Equivalent Algorithms',
    metric1: 'Stroke Coefficients (a, b, c)',
    metric2: 'National Qualification Tables',
    accentColor: '#10b981'
  },
  {
    filename: 'blog-swim-time-converter-50-yards-to-meters.png',
    tag: 'SPRINT EVENT CONVERSION',
    title: 'Swim Time Converter 50 Yards to Meters',
    subtitle: '50 SCY (1 Turn) vs 50 LCM (0 Turns) Sprint Splits',
    metric1: 'Reaction Time & Start Weighting',
    metric2: 'Speed Decay & Wall Turn Boost',
    accentColor: '#f59e0b'
  },
  {
    filename: 'blog-swim-time-converter-yards-to-meters.png',
    tag: 'SCY TO METERS MASTER CONVERTER',
    title: 'Swim Time Converter Yards to Meters',
    subtitle: 'SCY (25yd) to SCM (25m) & LCM (50m) Across All Events',
    metric1: '1.11x Metric Ratio & Wall Friction',
    metric2: 'USA Swimming Standards',
    accentColor: '#00c6ff'
  },
  {
    filename: 'blog-long-course-to-short-course-conversion-calculator.png',
    tag: '50M LCM TO SHORT COURSE',
    title: 'Long Course to Short Course Conversion Calculator',
    subtitle: 'Translating 50m Olympic Pools to 25m SCM & 25yd SCY',
    metric1: 'Turn Density Gain (+0.4s to +0.8s/turn)',
    metric2: 'Fatigue Curve Reversal',
    accentColor: '#8b5cf6'
  },
  {
    filename: 'blog-asa-swim-time-conversion-calculator-pdf.png',
    tag: 'ASA PRINTABLE CONVERSION TABLES',
    title: 'ASA Swim Time Conversion Calculator PDF',
    subtitle: 'Downloadable Equivalent Charts & Interactive Calculator Comparison',
    metric1: 'Swim England Lookups vs Dynamic AI',
    metric2: 'Personalized Turn Efficiency',
    accentColor: '#ec4899'
  },
  {
    filename: 'blog-meters-to-yards-time-conversion.png',
    tag: 'METRIC TO SCY CONVERSION',
    title: 'Meters to Yards Time Conversion',
    subtitle: 'Converting SCM (25m) and LCM (50m) to SCY (25yd)',
    metric1: 'NCAA Division I/II/III Cuts',
    metric2: 'International Recruit Standards',
    accentColor: '#14b8a6'
  }
];

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function generateSvg(item) {
  const width = 1200;
  const height = 675;

  const tag = escapeXml(item.tag);
  const title = escapeXml(item.title);
  const subtitle = escapeXml(item.subtitle);
  const metric1 = escapeXml(item.metric1);
  const metric2 = escapeXml(item.metric2);

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#050d1a" />
        <stop offset="40%" stop-color="#0a192f" />
        <stop offset="100%" stop-color="#020813" />
      </linearGradient>

      <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${item.accentColor}" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#00c6ff" stop-opacity="0.3" />
      </linearGradient>

      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1e293b" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#0f172a" stop-opacity="0.8" />
      </linearGradient>

      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="40" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
      </pattern>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    <rect width="${width}" height="${height}" fill="url(#grid)" />

    <!-- Ambient Glowing Orbs -->
    <circle cx="1050" cy="150" r="220" fill="${item.accentColor}" opacity="0.18" filter="url(#glow)" />
    <circle cx="150" cy="550" r="260" fill="#0072ff" opacity="0.14" filter="url(#glow)" />

    <!-- Lane Lines Wave Simulation -->
    <path d="M-50 480 Q 300 420, 600 480 T 1250 450" fill="none" stroke="rgba(56, 189, 248, 0.15)" stroke-width="3" stroke-dasharray="10 15" />
    <path d="M-50 540 Q 300 480, 600 540 T 1250 510" fill="none" stroke="rgba(56, 189, 248, 0.22)" stroke-width="4" stroke-dasharray="15 20" />
    <path d="M-50 600 Q 300 540, 600 600 T 1250 570" fill="none" stroke="rgba(56, 189, 248, 0.15)" stroke-width="3" stroke-dasharray="10 15" />

    <!-- Central Glass Container Card -->
    <rect x="80" y="70" width="1040" height="535" rx="24" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />

    <!-- Top Badge -->
    <rect x="130" y="115" width="370" height="38" rx="19" fill="${item.accentColor}" fill-opacity="0.15" stroke="${item.accentColor}" stroke-opacity="0.4" stroke-width="1" />
    <circle cx="152" cy="134" r="5" fill="${item.accentColor}" />
    <text x="168" y="139" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="${item.accentColor}" letter-spacing="2">${tag}</text>

    <!-- Main Title -->
    <text x="130" y="225" font-family="system-ui, -apple-system, sans-serif" font-size="40" font-weight="800" fill="#ffffff" letter-spacing="-0.5">
      ${title}
    </text>

    <!-- Subtitle -->
    <text x="130" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="rgba(255,255,255,0.75)">
      ${subtitle}
    </text>

    <!-- Decorative Divider -->
    <line x1="130" y1="325" x2="1010" y2="325" stroke="rgba(255,255,255,0.1)" stroke-width="1" />

    <!-- Feature Metric Box 1 -->
    <g transform="translate(130, 360)">
      <rect width="420" height="110" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
      <circle cx="35" cy="55" r="18" fill="${item.accentColor}" fill-opacity="0.2" />
      <path d="M28 55 L33 60 L42 50" fill="none" stroke="${item.accentColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="70" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.4)" letter-spacing="1">METRIC ANALYSIS</text>
      <text x="70" y="75" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">${metric1}</text>
    </g>

    <!-- Feature Metric Box 2 -->
    <g transform="translate(580, 360)">
      <rect width="430" height="110" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
      <circle cx="35" cy="55" r="18" fill="#38bdf8" fill-opacity="0.2" />
      <path d="M27 47 L43 47 M27 55 L43 55 M27 63 L38 63" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
      <text x="70" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.4)" letter-spacing="1">PHYSICS &amp; STANDARDS</text>
      <text x="70" y="75" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#ffffff">${metric2}</text>
    </g>

    <!-- Bottom Footer Brand Bar -->
    <g transform="translate(130, 520)">
      <text x="0" y="25" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="rgba(255,255,255,0.45)">
        TIME SWIM CONVERTER • HIGH PRECISION ATHLETIC TOOLS
      </text>
      <text x="880" y="25" text-anchor="end" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="${item.accentColor}">
        timeswimconverter.com
      </text>
    </g>
  </svg>
  `;
}

async function run() {
  for (const blog of blogs) {
    const svg = generateSvg(blog);
    const dest = path.join(outputDir, blog.filename);
    await sharp(Buffer.from(svg))
      .png({ quality: 90 })
      .toFile(dest);
    console.log(`Generated: ${dest}`);
  }
  console.log('All 8 blog images successfully created.');
}

run().catch(console.error);
