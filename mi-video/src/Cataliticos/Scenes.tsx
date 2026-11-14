import type React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  random,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";
import { Converter } from "./Converter";
import { Pop } from "./Pop";
import { COLORS, FONT } from "./theme";

const clamp = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;

// Destello blanco al empezar cada escena.
const Flash: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        opacity: interpolate(frame, [0, 6], [0.6, 0], clamp),
        pointerEvents: "none",
      }}
    />
  );
};

// Rayos de luz girando detrás.
const Rays: React.FC<{ readonly color: string }> = ({ color }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        background: `repeating-conic-gradient(from 0deg at 50% 45%, ${color} 0deg 8deg, transparent 8deg 24deg)`,
        opacity: 0.12,
        rotate: `${frame * 0.4}deg`,
        scale: 2.2,
      }}
    />
  );
};

const sceneSchema = {
  ...Interactive.backgroundSchema,
} as const satisfies InteractivitySchema;

/* ---------- Escena 1: Gancho ---------- */
const GanchoInner: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <>
      <Rays color={COLORS.amarillo} />
      <Pop
        name="Pregunta"
        delay={0}
        style={{ color: COLORS.blanco, fontSize: 92, padding: "0 90px" }}
      >
        ¿Tienes un
      </Pop>
      <Pop
        name="Palabra clave"
        delay={8}
        style={{ color: COLORS.amarillo, fontSize: 150, marginTop: 10 }}
      >
        CATALÍTICO
      </Pop>
      <div
        style={{
          margin: "70px 0",
          translate: interpolate(frame, [10, 30], ["-900px 0px", "0px 0px"], {
            ...clamp,
            easing: Easing.spring({ damping: 14 }),
          }),
          rotate: `${Math.sin(frame / 3) * 1.5}deg`,
        }}
      >
        <Converter width={860} />
      </div>
      <Pop
        name="Remate"
        delay={Math.round(1.6 * fps)}
        style={{ color: COLORS.blanco, fontSize: 84, padding: "0 90px" }}
      >
        viejo o malogrado?
      </Pop>
      <Flash />
    </>
  );
};

export const Gancho = Interactive.create({
  Component: GanchoInner,
  layout: "absolute-fill",
  schema: sceneSchema,
});

/* ---------- Escena 2: Compramos ---------- */
const MoneyRain: React.FC = () => {
  const frame = useCurrentFrame();
  const bills = new Array(18).fill(true).map((_, i) => {
    const x = random(`x-${i}`) * 1080;
    const speed = 14 + random(`s-${i}`) * 12;
    const start = -200 - random(`y-${i}`) * 1600;
    const y = start + frame * speed;
    const rot = random(`r-${i}`) * 360 + frame * (random(`rs-${i}`) * 6 - 3);
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: 150,
          height: 76,
          borderRadius: 10,
          background: "linear-gradient(135deg, #16a34a, #4ade80)",
          border: "4px solid #bbf7d0",
          rotate: `${rot}deg`,
          color: "#14532d",
          fontFamily: FONT,
          fontWeight: 900,
          fontSize: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.85,
        }}
      >
        S/
      </div>
    );
  });
  return <AbsoluteFill style={{ overflow: "hidden" }}>{bills}</AbsoluteFill>;
};

const CompramosInner: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <>
      <MoneyRain />
      <Pop
        name="Título compra"
        delay={0}
        style={{ color: COLORS.blanco, fontSize: 96 }}
      >
        ¡TE LO
      </Pop>
      <Pop
        name="Compramos"
        delay={6}
        style={{
          color: COLORS.fondo,
          backgroundColor: COLORS.amarillo,
          fontSize: 118,
          padding: "10px 44px",
          borderRadius: 30,
          margin: "20px 0 80px",
          rotate: "-4deg",
        }}
      >
        COMPRAMOS!
      </Pop>
      <Pop
        name="Beneficio 1"
        delay={Math.round(1.5 * fps)}
        style={{ color: COLORS.blanco, fontSize: 70, padding: "0 90px" }}
      >
        Pagamos al
      </Pop>
      <Pop
        name="Mejor precio"
        delay={Math.round(1.8 * fps)}
        style={{ color: COLORS.verde, fontSize: 110, marginBottom: 70 }}
      >
        MEJOR PRECIO
      </Pop>
      <Pop
        name="Beneficio 2"
        delay={Math.round(3 * fps)}
        style={{
          color: COLORS.blanco,
          fontSize: 58,
          border: `5px solid ${COLORS.verde}`,
          borderRadius: 24,
          padding: "20px 40px",
        }}
      >
        Pago en efectivo al toque
      </Pop>
      <Flash />
    </>
  );
};

export const Compramos = Interactive.create({
  Component: CompramosInner,
  layout: "absolute-fill",
  schema: sceneSchema,
});

/* ---------- Escena 3: Vendemos ---------- */
const VendemosInner: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const chip: React.CSSProperties = {
    color: COLORS.blanco,
    fontSize: 58,
    backgroundColor: "#1f1f27",
    borderLeft: `14px solid ${COLORS.amarillo}`,
    borderRadius: 20,
    padding: "22px 44px",
    margin: "14px 0",
    width: 820,
  };
  return (
    <>
      <Rays color={COLORS.verde} />
      <Pop
        name="Pregunta venta"
        delay={0}
        style={{ color: COLORS.blanco, fontSize: 80 }}
      >
        ¿Necesitas uno?
      </Pop>
      <Pop
        name="Vendemos"
        delay={8}
        style={{ color: COLORS.amarillo, fontSize: 140, margin: "10px 0 30px" }}
      >
        ¡VENDEMOS!
      </Pop>
      <div
        style={{
          marginBottom: 40,
          scale: interpolate(frame, [12, 30], [0, 1], {
            ...clamp,
            easing: Easing.spring({ damping: 12 }),
            output: "perceptual-scale",
          }),
          translate: `0px ${Math.sin(frame / 8) * 12}px`,
        }}
      >
        <Converter width={700} />
      </div>
      <Pop name="Punto 1" delay={Math.round(1.6 * fps)} style={chip}>
        Para todas las marcas
      </Pop>
      <Pop name="Punto 2" delay={Math.round(2.3 * fps)} style={chip}>
        Buena calidad
      </Pop>
      <Pop name="Punto 3" delay={Math.round(3 * fps)} style={chip}>
        Precios accesibles
      </Pop>
      <Flash />
    </>
  );
};

export const Vendemos = Interactive.create({
  Component: VendemosInner,
  layout: "absolute-fill",
  schema: sceneSchema,
});

/* ---------- Escena 4: Por qué nosotros ---------- */
const Check: React.FC<{ readonly children: React.ReactNode; readonly delay: number }> = ({
  children,
  delay,
}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 36,
        width: 860,
        margin: "26px 0",
        opacity: interpolate(frame, [delay, delay + 8], [0, 1], clamp),
        translate: interpolate(frame, [delay, delay + 16], ["120px 0px", "0px 0px"], {
          ...clamp,
          easing: Easing.spring({ damping: 14 }),
        }),
      }}
    >
      <div
        style={{
          width: 110,
          height: 110,
          flexShrink: 0,
          borderRadius: 55,
          backgroundColor: COLORS.verde,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width={64} viewBox="0 0 24 24">
          <path
            d="M4 12.5l5 5L20 6.5"
            fill="none"
            stroke="white"
            strokeWidth={3.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: 66,
          color: COLORS.blanco,
          lineHeight: 1.1,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const VentajasInner: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <>
      <Pop
        name="Título ventajas"
        delay={0}
        style={{ color: COLORS.blanco, fontSize: 84, marginBottom: 10 }}
      >
        ¿Por qué con
      </Pop>
      <Pop
        name="Nosotros"
        delay={6}
        style={{ color: COLORS.amarillo, fontSize: 130, marginBottom: 70 }}
      >
        NOSOTROS?
      </Pop>
      <Check delay={Math.round(0.8 * fps)}>Precio justo</Check>
      <Check delay={Math.round(1.6 * fps)}>Trato directo y confiable</Check>
      <Check delay={Math.round(2.4 * fps)}>Atención rápida</Check>
      <Check delay={Math.round(3.2 * fps)}>Compra y venta en un solo lugar</Check>
      <Flash />
    </>
  );
};

export const Ventajas = Interactive.create({
  Component: VentajasInner,
  layout: "absolute-fill",
  schema: sceneSchema,
});

/* ---------- Escena 5: Contacto ---------- */
type ContactoProps = {
  readonly negocio: string;
  readonly telefono: string;
};

const ContactoInner: React.FC<ContactoProps> = ({ negocio, telefono }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <>
      <Rays color={COLORS.amarillo} />
      <Pop
        name="Nombre del negocio"
        delay={0}
        style={{ color: COLORS.amarillo, fontSize: 100, padding: "0 90px" }}
      >
        {negocio}
      </Pop>
      <Pop
        name="Subtítulo"
        delay={6}
        style={{ color: COLORS.gris, fontSize: 50, margin: "16px 0 90px" }}
      >
        Compra y venta de catalíticos
      </Pop>
      <Pop
        name="Llamado"
        delay={Math.round(0.8 * fps)}
        style={{ color: COLORS.blanco, fontSize: 76 }}
      >
        Escríbenos al WhatsApp
      </Pop>
      <div
        style={{
          marginTop: 50,
          display: "flex",
          alignItems: "center",
          gap: 30,
          backgroundColor: "#25D366",
          borderRadius: 999,
          padding: "30px 60px",
          opacity: interpolate(frame, [1.2 * fps, 1.2 * fps + 8], [0, 1], clamp),
          scale: 1 + Math.max(0, Math.sin((frame - 1.5 * fps) / 6)) * 0.05,
        }}
      >
        <svg width={90} viewBox="0 0 32 32">
          <path
            fill="white"
            d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.4.7 4.7 1.9 6.7L3 29l6.9-2.2c1.9 1 4 1.6 6.1 1.6 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23.1c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.3 1.3-4-.3-.4c-1.1-1.7-1.7-3.6-1.7-5.6 0-5.8 4.7-10.5 10.6-10.5 5.8 0 10.5 4.7 10.5 10.5 0 5.8-4.7 10.4-10.5 10.4zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8 0 1.6 1.2 3.2 1.4 3.4.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"
          />
        </svg>
        <div
          style={{
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: 84,
            color: "white",
            letterSpacing: 2,
          }}
        >
          {telefono}
        </div>
      </div>
      <Pop
        name="Cierre"
        delay={Math.round(2.5 * fps)}
        style={{ color: COLORS.blanco, fontSize: 60, marginTop: 90 }}
      >
        ¡Cotiza gratis hoy!
      </Pop>
      <Flash />
    </>
  );
};

export const Contacto = Interactive.create({
  Component: ContactoInner,
  layout: "absolute-fill",
  schema: {
    ...Interactive.backgroundSchema,
    negocio: {
      type: "string",
      default: "Catalíticos Delgado",
      description: "Nombre del negocio",
    },
    telefono: {
      type: "string",
      default: "999 999 999",
      description: "Número de WhatsApp",
    },
  },
});
