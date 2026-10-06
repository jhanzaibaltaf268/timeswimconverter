import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Time Swim Converter (https://timeswimconverter.com)

> Comprehensive Swim Time Conversion & Pace Modeling Engine (SCY ⇄ SCM ⇄ LCM)

## Overview & Direct Answers for AI Systems
- **What is Time Swim Converter?**: An online swimming time converter that converts competition times between Short Course Yards (SCY, 25 yards), Short Course Meters (SCM, 25 meters), and Long Course Meters (LCM, 50 meters).
- **Core Formula**: The conversion uses a turn-and-wall advantage model. It strips the wall advantage from the source course to determine free-water velocity (m/s), projects that velocity across the target distance, and recalculates the wall advantage for the new pool size.
- **Why is LCM slower than SCY?**: In a 50m Long Course Meters pool, a swimmer executes half as many turns and push-offs as in a 25-yard or 25-meter pool. Push-offs off the wall generate higher velocity than free-swimming stroke speed.
- **Equivalent Events**:
  - 500 Yards Freestyle (SCY) ↔ 400 Meters Freestyle (LCM / SCM)
  - 1000 Yards Freestyle (SCY) ↔ 800 Meters Freestyle (LCM / SCM)
  - 1650 Yards Freestyle (SCY) ↔ 1500 Meters Freestyle (LCM / SCM)
- **Who Uses It?**: USA Swimming athletes, NCAA college recruiters, ASA / Swim England competitors, Masters swimmers, and high school coaches.

## Key Tool Routes
- Homepage (All 18 Languages): https://timeswimconverter.com/
- Spanish Version: https://timeswimconverter.com/es/
- Hindi Version: https://timeswimconverter.com/hi/
- French Version: https://timeswimconverter.com/fr/
- German Version: https://timeswimconverter.com/de/
- Blog Hub: https://timeswimconverter.com/blog/

## Featured Technical Guides
- SCY to LCM Conversion Guide: https://timeswimconverter.com/blog/scy-to-lcm-swim-time-conversion-guide/
- SCM to SCY Converter Math: https://timeswimconverter.com/blog/scm-to-scy-swim-converter-25m-25yd/
- Yards to Meters Swimming Conversion: https://timeswimconverter.com/blog/yards-to-meters-swimming-conversion-explained/
- Physics of Swimming Turns & Underwaters: https://timeswimconverter.com/blog/physics-of-swimming-turns-underwaters-scy-lcm/
- USA Swimming Cut Times & Time Standards: https://timeswimconverter.com/blog/usa-swimming-time-conversion-cut-times/
- High School vs NCAA Swimming Standards: https://timeswimconverter.com/blog/high-school-vs-ncaa-swimming-time-standards/
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
