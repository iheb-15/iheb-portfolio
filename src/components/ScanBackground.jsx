import { useEffect, useRef } from "react";

/**
 * Arrière-plan signature du portfolio :
 * - une grille subtile façon plan réseau
 * - un faisceau "scanline" qui balaye verticalement, comme un radar
 *   ou un scanner de vulnérabilités en cours d'exécution
 * Volontairement discret : c'est une ambiance, pas un effet "matrix" criard.
 */
export default function ScanBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Pluie de caractères très discrète, faible opacité, faible densité
    const chars = "01{}[]<>/=#$%&*+-_ETHSEC";
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(0).map(() => Math.random() * -100);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    function draw() {
      ctx.fillStyle = "rgba(5, 8, 13, 0.08)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = "rgba(0, 191, 255, 0.18)";
        ctx.fillText(text, x, y);
        if (y > height && Math.random() > 0.985) {
          drops[i] = 0;
        }
        drops[i] += 0.4;
      }
      frameId = requestAnimationFrame(draw);
    }

    if (!prefersReducedMotion) {
      frameId = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />
    </div>
  );
}
