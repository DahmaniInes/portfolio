import React, { useEffect, useRef } from 'react';

const MouseTrail = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ 
    x: window.innerWidth / 2, 
    y: window.innerHeight / 2,
    prevX: window.innerWidth / 2,
    prevY: window.innerHeight / 2,
    velocity: 0
  });
  const trailsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuration
    const config = {
      numberOfTrails: 12,      // Nombre de lignes
      trailLength: 50,         // Longueur de chaque queue
      smoothness: 0.12,        // Fluidité du mouvement
      lineWidth: 1.2,          // Épaisseur des lignes
      glowIntensity: 10,       // Intensité de la lueur
      spreadFactor: 15,        // Facteur d'écartement selon la vélocité
      spiralSpeed: 0.08,       // Vitesse de rotation spirale
      convergenceSpeed: 0.25,  // Vitesse de convergence vers la tête
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialiser les queues avec angles différents
    for (let i = 0; i < config.numberOfTrails; i++) {
      const trail = [];
      const angle = (i / config.numberOfTrails) * Math.PI * 2;
      
      for (let j = 0; j < config.trailLength; j++) {
        trail.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          baseAngle: angle,
          spiralAngle: 0,
        });
      }
      trailsRef.current.push({
        points: trail,
        hue: 260 + (i * 8),
        baseAngle: angle,
      });
    }

    const handleMouseMove = (e) => {
      const dx = e.clientX - mouseRef.current.x;
      const dy = e.clientY - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Calculer la vélocité (vitesse de déplacement)
      mouseRef.current.velocity = distance;
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const animate = () => {
      // Effacer le canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Réduire progressivement la vélocité
      mouseRef.current.velocity *= 0.95;

      trailsRef.current.forEach((trail, trailIndex) => {
        const targetX = mouseRef.current.x;
        const targetY = mouseRef.current.y;
        
        // Calculer l'écartement basé sur la vélocité
        const spread = Math.min(mouseRef.current.velocity * config.spreadFactor, 80);
        
        // Angle de rotation pour l'effet spiral
        trail.baseAngle += config.spiralSpeed;
        
        // Position de la tête avec écartement
        const headOffsetX = Math.cos(trail.baseAngle) * spread;
        const headOffsetY = Math.sin(trail.baseAngle) * spread;
        
        trail.points[0].x += (targetX + headOffsetX - trail.points[0].x) * config.smoothness;
        trail.points[0].y += (targetY + headOffsetY - trail.points[0].y) * config.smoothness;
        trail.points[0].spiralAngle = trail.baseAngle;

        // Chaque point suit le précédent avec convergence progressive vers la tête
        for (let i = 1; i < trail.points.length; i++) {
          const point = trail.points[i];
          const prevPoint = trail.points[i - 1];
          
          // Facteur de convergence : plus on est loin, plus on converge vers la tête
          const convergenceFactor = i / trail.points.length;
          const lerpSpeed = 0.25 + (convergenceFactor * config.convergenceSpeed);
          
          // Suivre le point précédent
          point.x += (prevPoint.x - point.x) * lerpSpeed;
          point.y += (prevPoint.y - point.y) * lerpSpeed;
          
          // Rotation spirale progressive
          point.spiralAngle += config.spiralSpeed * (1 - convergenceFactor);
        }

        // Dessiner la ligne fluide avec gradient
        ctx.beginPath();
        ctx.moveTo(trail.points[0].x, trail.points[0].y);

        // Courbes quadratiques pour fluidité
        for (let i = 1; i < trail.points.length - 1; i++) {
          const xc = (trail.points[i].x + trail.points[i + 1].x) / 2;
          const yc = (trail.points[i].y + trail.points[i + 1].y) / 2;
          ctx.quadraticCurveTo(trail.points[i].x, trail.points[i].y, xc, yc);
        }

        // Gradient du début (tête) à la fin (queue)
        const gradient = ctx.createLinearGradient(
          trail.points[0].x,
          trail.points[0].y,
          trail.points[trail.points.length - 1].x,
          trail.points[trail.points.length - 1].y
        );
        
        // Opacité basée sur la vélocité
        const baseOpacity = 0.6 + Math.min(mouseRef.current.velocity / 100, 0.4);
        
        gradient.addColorStop(0, `hsla(${trail.hue}, 80%, 65%, ${baseOpacity})`);
        gradient.addColorStop(0.4, `hsla(${trail.hue + 15}, 75%, 60%, ${baseOpacity * 0.7})`);
        gradient.addColorStop(0.7, `hsla(${trail.hue + 25}, 70%, 55%, ${baseOpacity * 0.4})`);
        gradient.addColorStop(1, `hsla(${trail.hue + 35}, 65%, 50%, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = config.lineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Lueur dynamique selon la vélocité
        const glowAmount = config.glowIntensity + Math.min(mouseRef.current.velocity / 5, 10);
        ctx.shadowBlur = glowAmount;
        ctx.shadowColor = `hsla(${trail.hue}, 85%, 65%, ${baseOpacity * 0.5})`;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 50,
      }}
    />
  );
};

export default MouseTrail;