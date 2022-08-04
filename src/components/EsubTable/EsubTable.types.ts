export type LineColor =
  | "piccadilly"
  | "circle"
  | "hammersmith-city"
  | "bakerloo"
  | "jubilee"
  | "victoria"
  | "district"
  | "central"
  | "metropolitan"
  | "waterloo-city"
  | "northern";

export interface EsubTableProps {
  lineColor?: LineColor;
  lineName: string;
  lineStatus: string;
}
