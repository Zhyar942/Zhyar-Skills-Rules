---
name: shaders
description: Integrate, customize, and compose production-grade WebGPU and WebGL visual effects using the Shaders platform (shaders.com), Shaders MCP, and TypeGPU. Use when adding interactive shaders, gradient meshes, liquid distortions, particle simulations, noise backdrops, or canvas effects in React, Vue, Svelte, or Vanilla JS.
---

# Shaders (shaders.com) — WebGPU & Visual Effects Skill

A complete engineering and design guide for discovering, customizing, and embedding high-performance WebGPU and WebGL shaders into web applications using **[shaders.com](https://shaders.com)**, the **Shaders MCP Server**, and modern GPU runtimes.

---

## Quick Reference & MCP Setup

Shaders connects directly to Antigravity and coding agents via the Model Context Protocol (MCP):

```bash
# Global MCP server installation (Antigravity supported)
npx -y shaders@latest install-mcp -a antigravity -g -y
```

MCP Config entry (`~/.gemini/config/mcp_config.json`):
```json
{
  "mcpServers": {
    "shaders": {
      "serverUrl": "https://shaders.com/mcp"
    }
  }
}
```

When connected to the MCP server, the agent can:
- Query available presets from the 750+ shader catalog (`search_presets`, `get_preset_details`).
- Retrieve framework-specific component code (React, Vue, Svelte, Solid, Vanilla).
- Tweak uniform parameters (speed, frequency, color palettes, noise octaves, grain, mouse reactivity).

---

## Core Principles & Technology Stack

1. **Engine**: Shaders.com utilizes **TypeGPU** and raw WGSL/GLSL, providing up to 4x better runtime performance and lower battery consumption compared to heavy three.js canvas bundles.
2. **Framework Agnostic**: Exportable as clean, zero-dependency components for:
   - React / Next.js (`<ShaderCanvas />`)
   - Vue / Nuxt
   - Svelte / SvelteKit
   - Vanilla HTML/JS (`<canvas>` + WebGPU context)
   - Framer & Webflow embeds
3. **Hardware Acceleration & Fallback**:
   - Primary: **WebGPU** (`navigator.gpu`) with WGSL compute & fragment shaders.
   - Fallback: High-precision WebGL2 fragment shaders when WebGPU is disabled or unsupported.

---

## Common Shader Categories & Presets

| Category | Typical Presets | Ideal Use Case |
| :--- | :--- | :--- |
| **Liquid & Fluid** | Chromatic fluid, organic wave, viscous ripple | Hero backgrounds, interactive pointer trails |
| **Noise & Gradients** | Perlin mesh, simplex aura, dynamic holographic gradients | Subtle backdrop grounding, dark-mode card highlights |
| **Particles & Fields** | Vector field, constellation flow, floating dust | Tech landing pages, AI agent visualization |
| **Glass & Refraction** | Frosted dispersion, caustics, lens distortion | Glassmorphic cards, modal backdrops |
| **Retro & CRT** | Scanline glitch, halftone raster, phosphor dot matrix | Industrial / brutalist interfaces, terminal aesthetics |

---

## Implementation Guidelines

### 1. Hero Background Integration (React Example)

```tsx
import React, { useEffect, useRef } from 'react';

interface ShaderHeroProps {
  palette?: [string, string, string];
  speed?: number;
  grainIntensity?: number;
}

export const ShaderHero: React.FC<ShaderHeroProps> = ({
  palette = ['#0f172a', '#1e1b4b', '#3b0764'],
  speed = 0.5,
  grainIntensity = 0.08
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize in browser environment with WebGPU / WebGL2
    if (typeof window === 'undefined') return;

    let isMounted = true;
    let animationFrameId: number;

    const initShader = async () => {
      // Setup WebGPU or WebGL context with DPR clamp
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75); // Cap DPR to prevent GPU bottleneck
      // Mount canvas and bind uniforms...
    };

    initShader();

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, [palette, speed, grainIntensity]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[600px] overflow-hidden bg-slate-950"
      style={{ isolation: 'isolate' }}
    >
      {/* Fallback gradient while shader compiles */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, ${palette[1]} 0%, ${palette[0]} 70%)`
        }} 
      />
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl font-bold tracking-tight text-white">Next-Gen Interface</h1>
      </div>
    </div>
  );
};
```

### 2. Golden Performance Rules
- **Device Pixel Ratio (DPR) Clamping**: Never run full-screen shaders at 3x DPR (common on Apple Retina / Super Retina). Always clamp to `Math.min(window.devicePixelRatio, 1.5)` or `1.75`. Running at 3x triples fragment calculations with zero visible gain.
- **Intersection Observer Pausing**: Always suspend the render loop (`cancelAnimationFrame`) when the shader canvas scrolls offscreen.
- **Pointer Debouncing**: Pass smoothed mouse coordinates via linear interpolation (lerp) to prevent jittery shader reactions.
- **Resource Disposal**: On component unmount, explicitly release textures, buffer allocations, and GPU device queues.
