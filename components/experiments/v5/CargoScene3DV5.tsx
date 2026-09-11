"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface CargoScene3DV5Props {
  className?: string;
}

export function CargoScene3DV5({ className = "" }: CargoScene3DV5Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040914);
    scene.fog = new THREE.FogExp2(0x040914, 0.035);

    // Camera
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 5, 14);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Lighting: Subtle architectural dusk setup
    const ambientLight = new THREE.AmbientLight(0x94a3b8, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff3e0, 2.0);
    dirLight.position.set(10, 15, 8);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0xe1390f, 1.2);
    rimLight.position.set(-10, 6, -8);
    scene.add(rimLight);

    // Ground Plane
    const groundGeo = new THREE.PlaneGeometry(80, 80);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x060e1c,
      roughness: 0.9,
      metalness: 0.1,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    scene.add(ground);

    // Minimal Container Yard Group
    const containerGroup = new THREE.Group();
    scene.add(containerGroup);

    // Standard 40ft Container Dimensions in 3D scene (scale: 1 unit ~ 3 meters)
    const boxGeo = new THREE.BoxGeometry(4.2, 1.3, 1.4);
    const containerColors = [0x0f172a, 0x1e293b, 0x334155, 0x1e3a8a, 0xe1390f];

    // Build sparse architectural container stacks
    const containerCoords = [
      { x: -3.5, y: 0.15, z: 0, rot: 0, color: containerColors[0] },
      { x: -3.5, y: 1.45, z: 0, rot: 0, color: containerColors[1] },
      { x: 1.5, y: 0.15, z: -2, rot: 0.1, color: containerColors[2] },
      { x: 1.5, y: 1.45, z: -2, rot: 0.1, color: containerColors[4] }, // Freyer Orange accent
      { x: 5.5, y: 0.15, z: 1, rot: -0.05, color: containerColors[3] },
      { x: -1.0, y: 0.15, z: 3, rot: 0.3, color: containerColors[0] },
    ];

    containerCoords.forEach((c) => {
      const mat = new THREE.MeshStandardMaterial({
        color: c.color,
        roughness: 0.5,
        metalness: 0.4,
      });
      const mesh = new THREE.Mesh(boxGeo, mat);
      mesh.position.set(c.x, c.y, c.z);
      mesh.rotation.y = c.rot;
      containerGroup.add(mesh);

      // Wireframe Edge Accent for architectural precision
      const edgeGeo = new THREE.EdgesGeometry(boxGeo);
      const edgeMat = new THREE.LineBasicMaterial({
        color: c.color === 0xe1390f ? 0xffffff : 0x64748b,
        linewidth: 1,
        transparent: true,
        opacity: 0.35,
      });
      const edges = new THREE.LineSegments(edgeGeo, edgeMat);
      edges.position.copy(mesh.position);
      edges.rotation.copy(mesh.rotation);
      containerGroup.add(edges);
    });

    // Transit Spline / Vector Route Line
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-8, 0.2, -4),
      new THREE.Vector3(-3.5, 2.5, 0),
      new THREE.Vector3(1.5, 2.8, -2),
      new THREE.Vector3(6, 1.0, 2),
      new THREE.Vector3(10, 0.2, 5),
    ]);
    const points = curve.getPoints(60);
    const splineGeo = new THREE.BufferGeometry().setFromPoints(points);
    const splineMat = new THREE.LineDashedMaterial({
      color: 0xf59e0b,
      dashSize: 0.5,
      gapSize: 0.25,
      linewidth: 2,
    });
    const spline = new THREE.Line(splineGeo, splineMat);
    spline.computeLineDistances();
    scene.add(spline);

    // Scroll-driven camera tracking
    let targetCameraY = 5;
    let targetCameraX = 0;
    let targetRotY = 0;

    const onScroll = () => {
      const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      targetCameraY = 4 + Math.sin(scrollFraction * Math.PI) * 3;
      targetCameraX = Math.cos(scrollFraction * Math.PI * 2) * 5;
      targetRotY = scrollFraction * 0.4;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Resize Handler
    const onResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera interpolation
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 1.2, 0);

      // Slow idle drift on container group
      containerGroup.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      groundGeo.dispose();
      boxGeo.dispose();
      splineGeo.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden bg-[#040914] ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-[520px] sm:h-[620px] block"
      />
      {/* Minimal Editorial Watermark */}
      <div className="absolute top-6 left-6 sm:left-10 z-10 pointer-events-none">
        <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-1">
          [Experiment E]
        </div>
        <div className="text-xl sm:text-2xl font-light text-white tracking-tight">
          3D Intermodal Terminal Geometry
        </div>
        <div className="text-xs text-slate-400 font-light mt-0.5">
          Scroll-steered perspective &bull; Pure Three.js Canvas
        </div>
      </div>
    </div>
  );
}
