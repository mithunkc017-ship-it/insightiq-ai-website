import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Bot } from 'lucide-react';

export default function HeroSplineContainer() {
  const [activeTab, setActiveTab] = useState('spline'); // 'spline' (NexBot 3D robot) or 'neural' (Canvas)
  const [isLoading, setIsLoading] = useState(true);
  const splineRobotUrl = "https://my.spline.design/nexbotrobotcharacterconcept-Eh6MTm9rDffYXWwwfklReBT3/";

  const canvasRef = useRef(null);

  // Fallback interactive canvas neural core if user toggles
  useEffect(() => {
    if (activeTab !== 'neural') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement.clientHeight || 550);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 600;
      height = canvas.height = canvas.parentElement.clientHeight || 550;
    };

    window.addEventListener('resize', handleResize);

    const numParticles = 80;
    const particles = [];
    const radius = Math.min(width, height) * 0.35;

    for (let i = 0; i < numParticles; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.random() * Math.PI * 2;
      particles.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
        baseSize: Math.random() * 2 + 1.2,
      });
    }

    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;
      targetRotY = (mouseX / width) * 1.5;
      targetRotX = -(mouseY / height) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const render = () => {
      time += 0.012;
      rotX += (targetRotX - rotX) * 0.05 + 0.002;
      rotY += (targetRotY - rotY) * 0.05 + 0.005;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Ambient radial sky glow
      const radialGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius * 1.4);
      radialGlow.addColorStop(0, 'rgba(14, 165, 233, 0.25)');
      radialGlow.addColorStop(0.5, 'rgba(56, 189, 248, 0.1)');
      radialGlow.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Project particles
      const projected = particles.map((p) => {
        let x1 = p.x * Math.cos(rotY) - p.z * Math.sin(rotY);
        let z1 = p.x * Math.sin(rotY) + p.z * Math.cos(rotY);

        let y2 = p.y * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = p.y * Math.sin(rotX) + z1 * Math.cos(rotX);

        const fov = 400;
        const scale = fov / (fov + z2 + 250);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        const alpha = Math.max(0.2, Math.min(1, (z2 + radius) / (2 * radius)));

        return { x: px, y: py, z: z2, scale, alpha, baseSize: p.baseSize };
      });

      // Draw connections
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 60) * 0.4})`;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of projected) {
        ctx.beginPath();
        const size = p.baseSize * p.scale * 1.6;
        ctx.arc(p.x, p.y, Math.max(1, size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha * 0.95})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeTab]);

  return (
    <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[680px] xl:h-[720px] rounded-3xl overflow-hidden border-2 border-sky-300 bg-slate-950 shadow-2xl shadow-sky-500/15 group flex items-center justify-center">
      {/* Background ambient lighting aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-sky-500/25 via-cyan-400/20 to-blue-600/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Top Floating Control Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/95 border border-sky-300 backdrop-blur-xl shadow-md">
          <button
            onClick={() => setActiveTab('spline')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === 'spline'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-800 hover:text-sky-600'
            }`}
          >
            <Bot className="w-4 h-4 text-white" />
            <span>NexBot 3D Robot</span>
          </button>

          <button
            onClick={() => setActiveTab('neural')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === 'neural'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-800 hover:text-sky-600'
            }`}
          >
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span className="hidden sm:inline">Neural Core</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-sky-300 text-xs font-bold font-mono text-slate-800 backdrop-blur-xl shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive 3D WebGL</span>
          </span>
        </div>
      </div>

      {/* Main 3D Viewport Area */}
      <div className="w-full h-full relative">
        {activeTab === 'spline' ? (
          <div className="w-full h-full relative">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm z-10 transition-opacity">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-3 border-sky-500/30 border-t-sky-400 animate-spin" />
                  <Bot className="w-5 h-5 text-sky-400 absolute inset-0 m-auto animate-pulse" />
                </div>
                <span className="text-xs font-mono text-white mt-4 tracking-wider uppercase font-bold">
                  Initializing NexBot 3D Agent...
                </span>
                <span className="text-xs text-sky-200 mt-1">
                  Streaming WebGL scene from Spline Cloud
                </span>
              </div>
            )}

            {/* Spline Embedded WebGL 3D Robot */}
            <iframe
              src={splineRobotUrl}
              frameBorder="0"
              width="100%"
              height="100%"
              onLoad={() => setIsLoading(false)}
              className="w-full h-full rounded-3xl pointer-events-auto bg-transparent relative z-0"
              title="NexBot 3D Robot Character Concept"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-950">
            <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing block" />
          </div>
        )}
      </div>

      {/* Bottom Floating Interactive Indicator Pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 border-2 border-sky-300 backdrop-blur-xl text-xs text-slate-900 shadow-xl pointer-events-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
        </span>
        <span className="font-mono text-xs font-bold text-slate-900">
          Move cursor or drag to interact with NexBot
        </span>
      </div>
    </div>
  );
}
