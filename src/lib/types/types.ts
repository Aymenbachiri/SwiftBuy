import type { JSX } from "react";

export interface Feature {
  label: string;
  description: string;
  icon: JSX.Element;
}

export type MarqueeProps = {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: unknown;
};
