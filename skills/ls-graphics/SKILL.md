---
name: ls-graphics
description: Guidelines, asset structures, and best practices for realistic device mockups, UI kit presentation, and 3D device staging based on LS Graphics standards (ls.graphics). Use when presenting web and mobile designs inside clay, isometric, or photorealistic device frames (iPhone, iPad, MacBook, Studio Display, packaging), framing product showcases, or building high-converting landing page hero visuals.
---

# LS Graphics (ls.graphics) — Device Mockups & UI Staging Skill

A comprehensive design engineering and presentation guide for showcasing digital products using the craft, realism, and spatial standards of **[LS Graphics](https://ls.graphics)** (founded by Ruslan Latypov).

---

## When to Use This Skill

Activate this skill whenever the task involves:
- Presenting a web app, dashboard, or mobile interface inside a device mockup.
- Choosing between **Clay**, **Photorealistic**, or **Isometric 3D** device frames.
- Designing high-converting landing page hero visuals with layered device cascades.
- Creating clean CSS/SVG device mockups that scale responsively without heavy raster assets.
- Avoiding generic AI mockup slop (bad aspect ratios, missing camera cutouts, fake bezels, incorrect screen radii).

---

## Mockup Classification & Aesthetic Directives

### 1. Clay Mockups (Minimalist & Timeless)
- **Style**: Matte, monochromatic device body (White, Graphite, Off-Black, or Pastel Stone) with zero brand logos or visible antenna lines.
- **Purpose**: Keeps 100% of the viewer's focus on the UI interface without distraction from hardware colors.
- **Lighting**: Soft ambient top-left lighting ($45^\circ$), diffuse ambient occlusion (AO) under the bottom edge, and no hard specular highlights.

### 2. Photorealistic Mockups (Flagship & High-End)
- **Style**: Exact metallic chamfers (Titanium, Space Black, Silver), authentic glass reflections, and micro-textures.
- **Screen Radii**: Precision corner radiuses matching real hardware (e.g. iPhone 16 Pro = 55px radius at standard viewport; MacBook Pro = top rounded, bottom square).
- **Display Reflections**: A subtle linear gradient sheen ($135^\circ$, 2% to 6% white opacity) across the glass screen to indicate glass depth.

### 3. Isometric & Multi-Device Cascades
- **Arrangement**: Staggered depth layering where primary screen sits elevated in front with secondary screens receding behind.
- **Parallax Shadowing**: Multi-tier drop shadows:
  - Tight contact shadow: `0 4px 12px rgba(0, 0, 0, 0.15)`
  - Medium floating shadow: `0 16px 32px rgba(0, 0, 0, 0.12)`
  - Deep ambient floor shadow: `0 48px 96px rgba(0, 0, 0, 0.08)`

---

## Device Framing Standards & Dimensions

| Device Target | Aspect Ratio | Authentic Viewport (px) | Corner Radius | Hardware Elements |
| :--- | :--- | :--- | :--- | :--- |
| **iPhone 16 Pro / Max** | ~9:19.5 | 393 × 852 / 430 × 932 | 54px | Dynamic Island (125 × 35px), Home Indicator |
| **iPad Pro 13" (M4)** | ~4:3 | 1024 × 1366 | 28px | Symmetric slim bezel, FaceID sensor |
| **MacBook Pro 16"** | 16:10 | 1728 × 1117 (scaled) | 16px (top corners) | Camera notch (centered), aluminum notch base, chiclet keyboard base |
| **Apple Studio Display** | 16:9 | 2560 × 1440 (scaled) | 8px | Sleek aluminum stand, bottom chin (symmetric slim bezel) |

---

## Web Implementation: Responsive CSS Device Container

```tsx
import React from 'react';

interface DeviceFrameProps {
  children: React.ReactNode;
  type?: 'iphone' | 'macbook';
  className?: string;
}

export const LSPhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative mx-auto w-full max-w-[380px] aspect-[393/840] rounded-[52px] p-[10px] bg-neutral-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)_inset]">
      {/* Outer Titanium Rim */}
      <div className="relative w-full h-full rounded-[44px] overflow-hidden bg-black border-[3px] border-neutral-800">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-950 border border-neutral-800" />
        </div>
        
        {/* Screen Content */}
        <div className="w-full h-full overflow-y-auto scrollbar-none">
          {children}
        </div>

        {/* Subtle Screen Glass Sheen */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent z-20" />
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-30 pointer-events-none" />
      </div>
    </div>
  );
};
```

---

## Craft Checklist Before Publishing
1. **Never stretch screenshots**: Viewports must match exact CSS pixels of the device profile.
2. **Include real UI states**: Avoid blank placeholder boxes. Display realistic typography, actual charts, and authentic micro-interactions.
3. **Respect dark and light mode grounding**: If the page is dark mode, ensure device shadows don't create harsh grey halos. Use semi-transparent black shadows (`rgba(0,0,0,0.4)`).
