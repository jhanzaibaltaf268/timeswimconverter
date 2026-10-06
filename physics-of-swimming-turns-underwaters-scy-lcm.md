---
title: "Physics of Swimming Turns & Underwaters: SCY vs LCM Guide"
description: "Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid dynamics, wall push-off forces, and velocity spikes."
image: "/images/blog-physics-turns.png"
date: 2026-07-06
author: "Shahab Dev"
category: "Pool Engineering"
---

The **physics of swimming turns and underwaters in SCY vs LCM** explains why short-course swimming times are dramatically faster than long-course times. While distance units explain part of the difference between yards and metres, the fluid dynamics of wall push-offs and underwater streamlined gliding account for the remainder. Calculate exact course conversions using our [SCY to LCM Swim Converter](/scy-to-lcm/) and [LCM to SCY Swim Converter](/lcm-to-scy/).

In modern competitive swimming, the underwater dolphin kick off walls is often referred to as the "fifth stroke." Understanding the fluid dynamics of wall advantage explains why simple multiplier conversions fail.

---

## Analyzing the Physics of Swimming Turns and Underwaters in SCY vs LCM

The hydrodynamics of wall push-offs depends on three key biomechanical phases:

1. **Leg Extensor Contraction**: Coiled leg muscles generate an explosive push-off force against a solid concrete wall.
2. **Velocity Spike**: Instantaneous velocity off the wall reaches **2.2 to 2.8 m/s**—far higher than maximum surface swimming speed ($1.6\text{--}1.8\text{ m/s}$).
3. **Underwater Drag Reduction**: By maintaining a tight streamline 1–1.5 metres below the surface, the swimmer avoids surface wave drag (bow waves).

$$\text{Wave Drag Force: } F_{\text{drag}} \propto v^2$$

Because wave drag is highest at the water-air interface, staying underwater off walls preserves momentum far more effectively than surface swimming.

```
Wall Push-Off (Velocity ~2.5 m/s) ---> Streamline Glide ---> Surface Transition (~1.7 m/s)
[WALL]====================>>>>>>>>>>>>>>>>---------------------------------------->
```

---

## Comparing Wall Frequency: SCY vs. SCM vs. LCM

Consider a 200-metre/yard race across pool formats:

- **SCY (25yd Pool)**: 8 lengths = **7 turns + 1 start = 8 wall pushes**.
- **SCM (25m Pool)**: 8 lengths = **7 turns + 1 start = 8 wall pushes**.
- **LCM (50m Pool)**: 4 lengths = **3 turns + 1 start = 4 wall pushes**.

In short-course yards (SCY), a swimmer spends nearly **40% to 50% of the race underwater** if executing maximum allowable 15-metre underwaters on every turn. Test short-course meter conversions with our [SCM to SCY Swim Converter](/scm-to-scy/). In long-course meters (LCM), underwater distance drops to under **25% of total race distance**.

---

## Modeling Per-Wall Advantage

In quantitative models engineered by a specialized [CRM developer](https://www.shahabdev.com/) or data scientist, per-wall advantage ($W_a$) is represented as:

$$W_a = t_{\text{wall\_glide}} \times \left(1 - \frac{v_{\text{surface}}}{v_{\text{wall\_avg}}}\right)$$

- **SCY Average Wall Advantage**: $\sim 0.55\text{ seconds per wall}$.
- **SCM Average Wall Advantage**: $\sim 0.40\text{ seconds per wall}$.
- **LCM Average Wall Advantage**: $\sim 0.25\text{ seconds per wall}$.

---

## Hydrodynamic Performance Across Technical Industries

Mathematical modeling of physical systems powers modern technology. Digital platforms run a [Google Maps lead finder](https://www.instantseoscan.com/) to analyze spatial business metrics, perform [SVG conversion](https://jpegtosvg.com/) for scalable graphics, build online [website authority](https://backlink.shahabdev.com/) via links, or solve complex [linear algebra](https://www.determinantsolver.com/) equations using matrix determinants.

---

## Wall Count & Speed Comparison Table (200m Race)

| Course Type | Lap Length | Total Laps | Wall Count | Est. Underwater Distance | Surface Distance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SCY (25yd)** | 22.86 m | 8 | 8 | ~80 m (43.7%) | ~102.8 m |
| **SCM (25m)** | 25.00 m | 8 | 8 | ~80 m (40.0%) | ~120.0 m |
| **LCM (50m)** | 50.00 m | 4 | 4 | ~40 m (20.0%) | ~160.0 m |

Track split times using our [Swim Split Calculator](/split-calculator/).

---

## Frequently Asked Questions

### What is the 15-meter rule in competitive swimming?
World Aquatics (FINA) and USA Swimming rules mandate that a swimmer's head must break the surface of the water at or before the 15-meter mark following starts and every turn (for Butterfly, Backstroke, and Freestyle).

### Why do some swimmers lose more time in LCM than others?
Swimmers with exceptional underwater dolphin kicks gain huge advantages from wall push-offs. When moving to long-course meters, they lose half their turns and suffer a greater time penalty than swimmers with weaker underwaters.
