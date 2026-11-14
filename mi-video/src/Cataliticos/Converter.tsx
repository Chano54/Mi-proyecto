import type React from "react";
import { COLORS } from "./theme";

// Dibujo simple de un convertidor catalítico (tubo + cuerpo + panal interior).
export const Converter: React.FC<{ readonly width: number }> = ({ width }) => {
  const cells: React.ReactNode[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 9; col++) {
      const x = 205 + col * 36 + (row % 2) * 18;
      const y = 112 + row * 30;
      cells.push(
        <polygon
          key={`${row}-${col}`}
          points={`${x},${y - 12} ${x + 12},${y - 6} ${x + 12},${y + 6} ${x},${y + 12} ${x - 12},${y + 6} ${x - 12},${y - 6}`}
          fill="none"
          stroke={COLORS.amarillo}
          strokeOpacity={0.55}
          strokeWidth={3}
        />,
      );
    }
  }

  return (
    <svg width={width} viewBox="0 0 700 300" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f4f5" />
          <stop offset="0.45" stopColor="#a1a1aa" />
          <stop offset="1" stopColor="#3f3f46" />
        </linearGradient>
        <linearGradient id="pipe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d4d4d8" />
          <stop offset="1" stopColor="#52525b" />
        </linearGradient>
      </defs>
      {/* Tubos */}
      <rect x={0} y={128} width={150} height={44} rx={10} fill="url(#pipe)" />
      <rect x={550} y={128} width={150} height={44} rx={10} fill="url(#pipe)" />
      {/* Conos */}
      <polygon points="140,120 190,60 190,240 140,180" fill="url(#metal)" />
      <polygon points="560,120 510,60 510,240 560,180" fill="url(#metal)" />
      {/* Cuerpo */}
      <rect x={180} y={50} width={340} height={200} rx={70} fill="url(#metal)" />
      <rect
        x={195}
        y={85}
        width={310}
        height={130}
        rx={40}
        fill="#18181b"
        stroke="#27272a"
        strokeWidth={4}
      />
      {cells}
      {/* Brillo */}
      <rect x={220} y={62} width={260} height={10} rx={5} fill="white" opacity={0.6} />
    </svg>
  );
};
