---
name: contentcore
description: Fast 3D motion design, screen showcases, and short-form video/image generation workflows inspired by ContentCore (contentcore.xyz). Use when creating 3D product reveals, animated phone/laptop screen showcases, social Reels/Shorts motion graphics, Three.js 3D camera staging, and high-impact visual content without heavy 3D suites.
---

# ContentCore (ContentCore.xyz) — 3D Motion & Social Showcases Skill

A rapid 3D motion design, product reveal, and social showcase workflow inspired by **[ContentCore.xyz](https://contentcore.xyz)**.

---

## When to Use This Skill

Activate this skill when you need to:
- Generate or code high-impact **3D product reveals** and animated hardware mockups.
- Stage interactive **Three.js / WebGL 3D screens** inside browser interfaces.
- Create short-form motion templates (9:16 vertical for Instagram Reels / TikTok / YouTube Shorts, 16:9 for X / YouTube / Hero).
- Animate camera sweeps, field-of-view (FOV) transitions, and spring-damped model rotations.
- Build modern, Awwwards-caliber motion graphics for SaaS product launches without requiring Blender or Cinema4D.

---

## Core Principles & Motion Vocabulary

1. **Short-Form Velocity**:
   - Social hooks occur in the first **1.2 seconds**.
   - Start mid-motion with a camera tilt or scale-in; never begin with a static pause.
2. **Camera FOV Dynamics**:
   - Wide FOV ($60^\circ - 75^\circ$): High perspective distortion, dynamic tech aesthetic, dramatic close-up corners.
   - Telephoto FOV ($25^\circ - 35^\circ$): Flat isometric look, editorial clarity, minimal perspective vanishing points.
3. **Three-Tier Lighting Setup**:
   - Key Light: Cool directional light ($6500\text{ K}$) from top-left.
   - Fill Light: Soft ambient bounce ($4500\text{ K}$) at $30\%$ intensity.
   - Rim / Accent Light: Saturated brand accent (Violet, Cyan, or Amber) grazing the back edges to separate the model from the background.

---

## Three.js 3D Screen Staging Recipe

This template projects interactive HTML/canvas textures directly onto an authentic 3D mobile screen:

```typescript
import * as THREE from 'three';

export interface ContentCoreSceneConfig {
  canvas: HTMLCanvasElement;
  aspectRatio: '9:16' | '16:9' | '1:1';
  enableAutoRotate?: boolean;
}

export class ContentCoreMotionStage {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private modelGroup: THREE.Group;
  private clock: THREE.Clock;

  constructor(config: ContentCoreSceneConfig) {
    this.scene = new THREE.Scene();
    this.modelGroup = new THREE.Group();
    this.scene.add(this.modelGroup);
    this.clock = new THREE.Clock();

    // Camera setup with editorial FOV
    const fov = 35; // Telephoto crispness
    const aspect = config.aspectRatio === '9:16' ? 9 / 16 : 16 / 9;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 100);
    this.camera.position.set(0, 0, 8);

    // Renderer configuration
    this.renderer = new THREE.WebGLRenderer({
      canvas: config.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    this.setupLighting();
    this.animate();
  }

  private setupLighting(): void {
    // Ambient fill
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);

    // Main Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(5, 8, 6);
    this.scene.add(keyLight);

    // Dynamic Rim Light for edge separation
    const rimLight = new THREE.DirectionalLight(0x818cf8, 2.0); // Violet rim
    rimLight.position.set(-6, -4, -4);
    this.scene.add(rimLight);
  }

  public animate = (): void => {
    requestAnimationFrame(this.animate);
    const elapsedTime = this.clock.getElapsedTime();

    // Subtle breathing orbit motion
    this.modelGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.25;
    this.modelGroup.rotation.x = Math.cos(elapsedTime * 0.4) * 0.08;

    this.renderer.render(this.scene, this.camera);
  };

  public dispose(): void {
    this.renderer.dispose();
  }
}
```

---

## Social Motion Video Delivery Matrix

| Format | Resolution | Duration | Frame Rate | Key Rule |
| :--- | :--- | :--- | :--- | :--- |
| **Vertical Reel / Short** | 1080 × 1920 (9:16) | 5–15 sec | 60 fps | Safe zones: keep text 150px clear of top/bottom |
| **Landscape Showcase** | 1920 × 1080 (16:9) | 10–30 sec | 60 fps | Dynamic camera traveling along Z-axis |
| **Interactive 3D Web** | Fluid responsive | Real-time | 60–120 fps | Clamp DPR to 1.5x, pause on scroll out |

---

## Quality Checklist
- [ ] No stiff linear easing: always use smooth ease-out-cubic or spring dynamics (`stiffness: 120, damping: 14`).
- [ ] Contrast guard: Ensure the 3D model stands out with a subtle vignette or rim light.
- [ ] Responsive framing: On mobile screens, scale the 3D camera distance so the model is never cropped.
