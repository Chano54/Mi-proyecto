import type React from "react";
import {
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  type InteractivitySchema,
} from "remotion";
import { FONT } from "./theme";

type PopProps = {
  readonly children: React.ReactNode;
  readonly delay: number;
  readonly style?: React.CSSProperties;
};

// Texto que "salta" hacia adentro con un pequeño rebote.
const PopInner: React.FC<PopProps> = ({ children, delay, style }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        fontFamily: FONT,
        fontWeight: 900,
        textAlign: "center",
        lineHeight: 1.05,
        ...style,
      }}
    >
      <span
        style={{
          display: "inline-block",
          opacity: interpolate(frame, [delay, delay + 6], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [delay, delay + 14], [0.4, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 12 }),
            output: "perceptual-scale",
          }),
        }}
      >
        {children}
      </span>
    </div>
  );
};

const popSchema = {
  ...Interactive.textSchema,
  ...Interactive.childrenSchema,
  delay: {
    type: "number",
    default: 0,
    min: 0,
    step: 1,
    integer: true,
    description: "Retraso de entrada (frames)",
    keyframable: false,
    hiddenFromList: false,
  },
} as const satisfies InteractivitySchema;

export const Pop = Interactive.create({
  Component: PopInner,
  layout: "none",
  schema: popSchema,
});
