/*
 * hero-3d.js — the animated 3D scene behind the home page hero panel.
 *
 * Built with Three.js (https://threejs.org). The scene is:
 *   - a glowing wireframe "core" (an icosahedron) in the middle,
 *   - a tilted orbit ring with one small shape per item in the tech stack,
 *   - a soft field of particles in the background.
 * The whole thing turns slowly and leans towards the mouse pointer.
 *
 * Accessibility / performance:
 *   - If the visitor prefers reduced motion, we draw ONE still frame only.
 *   - Animation pauses while the hero is scrolled off screen.
 *   - If WebGL is not available, the canvas is removed and the page looks
 *     exactly like it did before.
 */
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";

const canvas = document.getElementById("hero-3d");

if (canvas) {
  try {
    start(canvas);
  } catch (error) {
    // No WebGL (old device, disabled GPU…): quietly fall back to the 2D design.
    console.warn("3D hero disabled:", error);
    canvas.remove();
  }
}

function start(canvas) {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Renderer, scene and camera ---------- */
  // alpha: true -> transparent background, so the page's own background shows through.
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap for performance

  const scene = new THREE.Scene();
  // PerspectiveCamera(field of view, aspect ratio, near clip, far clip)
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  /* ---------- 2. Lights ---------- */
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const keyLight = new THREE.PointLight(0xffffff, 40);
  keyLight.position.set(4, 4, 6);
  scene.add(keyLight);

  /* ---------- 3. Colours from the site's CSS variables ---------- */
  // Reading --accent / --accent-2 keeps the 3D scene in sync with the CSS theme.
  const readColor = (name, fallback) =>
    new THREE.Color(getComputedStyle(root).getPropertyValue(name).trim() || fallback);
  const accent = readColor("--accent", "#55e6a5");
  const accent2 = readColor("--accent-2", "#46a5ff");

  // Everything that moves together goes into one group, so we can rotate it all at once.
  const world = new THREE.Group();
  scene.add(world);

  /* ---------- 4. The core: wireframe + translucent solid ---------- */
  const coreGeometry = new THREE.IcosahedronGeometry(1.25, 1);
  const coreSolid = new THREE.Mesh(
    coreGeometry,
    new THREE.MeshStandardMaterial({
      color: accent2,
      emissive: accent2,
      emissiveIntensity: 0.25,
      flatShading: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.4,
    })
  );
  const coreWire = new THREE.LineSegments(
    new THREE.EdgesGeometry(coreGeometry),
    new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.9 })
  );
  const core = new THREE.Group();
  core.add(coreSolid, coreWire);
  // Sit the core behind the panel's top-right corner so it peeks out.
  core.position.set(2.3, 1.6, -1);
  world.add(core);

  /* ---------- 5. Orbit ring with the tech-stack "satellites" ---------- */
  const orbit = new THREE.Group();
  orbit.rotation.set(Math.PI * 0.36, 0, Math.PI * 0.1); // tilt the whole orbit
  world.add(orbit);

  const ORBIT_RADIUS = 3.4; // wider than the panel, so satellites pass around its edges
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(ORBIT_RADIUS, 0.012, 8, 160),
    new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.35 })
  );
  orbit.add(ring);

  // One satellite per tag in the "stack-cloud" (Java, JavaScript, Python…).
  const stackCount = document.querySelectorAll(".stack-cloud span").length || 6;
  const satelliteShapes = [
    new THREE.OctahedronGeometry(0.24),
    new THREE.BoxGeometry(0.32, 0.32, 0.32),
    new THREE.TetrahedronGeometry(0.3),
  ];
  const satellites = [];
  for (let i = 0; i < stackCount; i++) {
    const color = i % 2 === 0 ? accent : accent2;
    const mesh = new THREE.Mesh(
      satelliteShapes[i % satelliteShapes.length],
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.45, flatShading: true })
    );
    // Spread them evenly around the circle; store the angle for animation.
    mesh.userData.angle = (i / stackCount) * Math.PI * 2;
    orbit.add(mesh);
    satellites.push(mesh);
  }

  /* ---------- 6. Background particles ---------- */
  const PARTICLES = 260;
  const positions = new Float32Array(PARTICLES * 3);
  for (let i = 0; i < PARTICLES; i++) {
    // Random point inside a hollow sphere (radius 3.5 – 6).
    const r = 3.5 + Math.random() * 2.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particleMaterial = new THREE.PointsMaterial({
    color: accent2,
    size: 0.04,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
  });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  world.add(particles);

  /* ---------- 7. Light / dark theme tweaks ---------- */
  // global.js toggles the "dark" class on <html>; watch for it and adjust.
  function applyTheme() {
    const dark = root.classList.contains("dark");
    particleMaterial.opacity = dark ? 0.7 : 0.45;
    coreSolid.material.opacity = dark ? 0.35 : 0.5;
    ring.material.opacity = dark ? 0.35 : 0.55;
    render();
  }
  new MutationObserver(applyTheme).observe(root, { attributes: true, attributeFilter: ["class"] });

  /* ---------- 8. Keep the canvas the right size ---------- */
  function resize() {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false); // false = don't touch the CSS size
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    render();
  }
  new ResizeObserver(resize).observe(canvas);

  /* ---------- 9. Mouse parallax ---------- */
  // pointer.x / pointer.y go from -1 to 1 across the window.
  const pointer = { x: 0, y: 0 };
  window.addEventListener("pointermove", (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
  });

  /* ---------- 10. The animation loop ---------- */
  const clock = new THREE.Clock();

  function update(time) {
    core.rotation.x = time * 0.25;
    core.rotation.y = time * 0.35;
    core.scale.setScalar(1 + Math.sin(time * 1.6) * 0.04); // gentle "breathing"

    satellites.forEach((mesh, i) => {
      const angle = mesh.userData.angle + time * 0.35;
      // The orbit group is tilted, so moving in its local X/Y plane follows the ring.
      mesh.position.set(Math.cos(angle) * ORBIT_RADIUS, Math.sin(angle) * ORBIT_RADIUS, 0);
      mesh.rotation.x = time * (0.8 + i * 0.1);
      mesh.rotation.y = time * 0.9;
    });

    particles.rotation.y = time * 0.03;

    // Ease (lerp) the world towards the pointer instead of snapping to it.
    world.rotation.y += (pointer.x * 0.35 - world.rotation.y) * 0.05;
    world.rotation.x += (pointer.y * 0.25 - world.rotation.x) * 0.05;
  }

  function render() {
    renderer.render(scene, camera);
  }

  let running = false;
  let elapsed = 0; // our own timer, so pausing/resuming doesn't make things jump
  function loop() {
    if (!running) return;
    elapsed += Math.min(clock.getDelta(), 0.1);
    update(elapsed);
    render();
    requestAnimationFrame(loop);
  }

  resize();
  applyTheme();
  canvas.classList.add("ready"); // CSS fades the canvas in

  if (reducedMotion) {
    // One nicely-posed still frame, no movement.
    update(1.2);
    render();
    return;
  }

  // Only animate while the hero is actually visible — saves battery and CPU.
  new IntersectionObserver(([entry]) => {
    const visible = entry.isIntersecting;
    if (visible && !running) {
      running = true;
      clock.getDelta(); // throw away the time spent paused
      loop();
    } else if (!visible) {
      running = false;
    }
  }).observe(canvas);
}
