import React, { useRef, useEffect } from "react";

/**
 * Interactive AI Neural Sphere – a 3D geodesic network of nodes
 * connected by synaptic edges that pulse with neon light.
 * Auto-rotates and responds to mouse drag / hover.
 */
export function InteractiveTorus() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef({ x: 0.4, y: 0.3 });
  const velocityRef = useRef({ x: 0.003, y: 0.005 });
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ── Build geodesic sphere (icosahedron subdivided once) ──
    const phi = (1 + Math.sqrt(5)) / 2; // golden ratio

    // 12 vertices of an icosahedron, normalised to unit sphere
    const icoVerts: [number, number, number][] = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ];
    icoVerts.forEach((v) => {
      const len = Math.hypot(...v);
      v[0] /= len; v[1] /= len; v[2] /= len;
    });

    // 20 triangular faces
    const icoFaces: [number, number, number][] = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
    ];

    // Subdivide once for ~42 vertices, ~80 faces
    type V3 = [number, number, number];
    const midCache = new Map<string, number>();
    const verts: V3[] = [...icoVerts];

    function getMidpoint(a: number, b: number): number {
      const key = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (midCache.has(key)) return midCache.get(key)!;
      const va = verts[a], vb = verts[b];
      const mid: V3 = [(va[0] + vb[0]) / 2, (va[1] + vb[1]) / 2, (va[2] + vb[2]) / 2];
      const len = Math.hypot(...mid);
      mid[0] /= len; mid[1] /= len; mid[2] /= len;
      const idx = verts.length;
      verts.push(mid);
      midCache.set(key, idx);
      return idx;
    }

    let faces: [number, number, number][] = [...icoFaces];
    // One subdivision pass
    const newFaces: [number, number, number][] = [];
    for (const [a, b, c] of faces) {
      const ab = getMidpoint(a, b);
      const bc = getMidpoint(b, c);
      const ca = getMidpoint(c, a);
      newFaces.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]);
    }
    faces = newFaces;

    // Collect unique edges
    const edgeSet = new Set<string>();
    const edges: [number, number][] = [];
    for (const [a, b, c] of faces) {
      for (const [p, q] of [[a, b], [b, c], [c, a]] as [number, number][]) {
        const key = p < q ? `${p}-${q}` : `${q}-${p}`;
        if (!edgeSet.has(key)) { edgeSet.add(key); edges.push([p, q]); }
      }
    }

    const N = verts.length; // ~42 nodes
    const sphereRadius = 110;

    // Node metadata: each node has a pulse phase & "active" probability
    const nodePulse = verts.map(() => Math.random() * Math.PI * 2);
    const nodeActive = verts.map(() => Math.random()); // 0-1

    // Synapse fire state: random edges "fire" periodically
    const edgeFire = edges.map(() => ({
      phase: Math.random() * Math.PI * 2,
      speed: 0.02 + Math.random() * 0.04,
      active: Math.random() > 0.6, // 40% of edges fire
    }));

    let frame = 0;

    // ── Render ──
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      // Rotation
      if (!isDraggingRef.current) {
        rotationRef.current.x += velocityRef.current.x;
        rotationRef.current.y += velocityRef.current.y;
        velocityRef.current.x += (0.002 - velocityRef.current.x) * 0.03;
        velocityRef.current.y += (0.004 - velocityRef.current.y) * 0.03;
      } else {
        rotationRef.current.x += velocityRef.current.x;
        rotationRef.current.y += velocityRef.current.y;
        velocityRef.current.x *= 0.94;
        velocityRef.current.y *= 0.94;
      }

      const rX = rotationRef.current.x;
      const rY = rotationRef.current.y;
      const cX = Math.cos(rX), sX = Math.sin(rX);
      const cY = Math.cos(rY), sY = Math.sin(rY);

      const vScale = Math.min(width, height) * 0.42;

      // Project all vertices
      const projected = verts.map((v) => {
        const x0 = v[0] * sphereRadius;
        const y0 = v[1] * sphereRadius;
        const z0 = v[2] * sphereRadius;

        const x1 = x0 * cY + z0 * sY;
        const z1 = -x0 * sY + z0 * cY;
        const y2 = y0 * cX - z1 * sX;
        const z2 = y0 * sX + z1 * cX;

        const d = 360, zOff = 320;
        const persp = d / (z2 + zOff);
        const s = persp * (vScale / (sphereRadius * (d / zOff)));

        return {
          x: x1 * s + width / 2,
          y: y2 * s + height / 2,
          z: z2,
        };
      });

      // Depth sort edges
      const sortedEdges = edges
        .map((e, i) => {
          const a = projected[e[0]], b = projected[e[1]];
          return { i, a, b, avgZ: (a.z + b.z) / 2 };
        })
        .sort((a, b) => b.avgZ - a.avgZ);

      // Depth sort nodes
      const sortedNodes = projected
        .map((p, i) => ({ ...p, i }))
        .sort((a, b) => b.z - a.z);

      // ── Draw edges ──
      sortedEdges.forEach(({ i, a, b, avgZ }) => {
        const depth = (avgZ + sphereRadius) / (2 * sphereRadius);
        const baseAlpha = Math.max(0.04, 0.5 - depth * 0.45);

        const ef = edgeFire[i];
        ef.phase += ef.speed;
        const fireBrightness = ef.active ? Math.max(0, Math.sin(ef.phase)) * 0.6 : 0;
        const alpha = Math.min(0.9, baseAlpha + fireBrightness);

        const lw = Math.max(0.4, (1.8 - depth * 1.2) + fireBrightness * 1.5);

        // Cyan → violet gradient based on depth + fire
        const hue = 190 + depth * 60 + fireBrightness * 40; // 190 (cyan) → 290 (violet)
        const sat = 80 + fireBrightness * 20;
        const light = 50 + fireBrightness * 20;

        ctx.strokeStyle = `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`;
        ctx.lineWidth = lw;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      // ── Draw nodes ──
      sortedNodes.forEach(({ x, y, z, i }) => {
        const depth = (z + sphereRadius) / (2 * sphereRadius);
        const pulse = Math.sin(frame * 0.03 + nodePulse[i]) * 0.5 + 0.5;
        const isActive = nodeActive[i] > 0.5;

        const baseR = Math.max(1.5, 3.5 - depth * 2);
        const r = baseR + (isActive ? pulse * 2 : 0);
        const alpha = Math.max(0.1, 0.9 - depth * 0.7);

        // Core node
        const hue = isActive ? 200 + pulse * 40 : 250;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r * 2.5);
        gradient.addColorStop(0, `hsla(${hue}, 90%, 75%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(${hue}, 85%, 55%, ${alpha * 0.7})`);
        gradient.addColorStop(1, `hsla(${hue}, 80%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, r * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Bright center dot
        ctx.fillStyle = `hsla(${hue}, 90%, 85%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, r * 0.6, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) {
      const canvas = canvasRef.current;
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left - rect.width / 2;
        const my = e.clientY - rect.top - rect.height / 2;
        velocityRef.current.x += (my * 0.00002 - velocityRef.current.x) * 0.05;
        velocityRef.current.y += (mx * 0.00002 - velocityRef.current.y) * 0.05;
      }
      return;
    }
    const dx = e.clientX - previousMousePosition.current.x;
    const dy = e.clientY - previousMousePosition.current.y;
    velocityRef.current.y = dx * 0.008;
    velocityRef.current.x = dy * 0.008;
    rotationRef.current.y += velocityRef.current.y;
    rotationRef.current.x += velocityRef.current.x;
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      <div className="absolute inset-0 pointer-events-none rounded-full bg-cyan-violet opacity-30 blur-3xl scale-75" />
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full h-full relative z-10 touch-none"
      />
    </div>
  );
}
