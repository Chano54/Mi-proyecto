import type React from "react";
import { Track, useVideoConfig } from "remotion";
import { Compramos, Contacto, Gancho, Vendemos, Ventajas } from "./Scenes";
import { COLORS } from "./theme";

export type CataliticosProps = {
  readonly negocio: string;
  readonly telefono: string;
};

export const Cataliticos: React.FC<CataliticosProps> = ({ negocio, telefono }) => {
  const { fps } = useVideoConfig();
  const centered = {
    backgroundColor: COLORS.fondo,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  } as const;

  return (
    <Track name="Escenas">
      <Gancho name="1. Gancho" durationInFrames={4 * fps} style={centered} />
      <Compramos
        name="2. Compramos"
        from={4 * fps}
        durationInFrames={7 * fps}
        style={centered}
      />
      <Vendemos
        name="3. Vendemos"
        from={11 * fps}
        durationInFrames={7 * fps}
        style={centered}
      />
      <Ventajas
        name="4. Por qué nosotros"
        from={18 * fps}
        durationInFrames={6 * fps}
        style={centered}
      />
      <Contacto
        name="5. Contacto"
        from={24 * fps}
        durationInFrames={6 * fps}
        negocio={negocio}
        telefono={telefono}
        style={centered}
      />
    </Track>
  );
};
