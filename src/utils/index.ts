import { LineColor } from "../components/EsubTable/EsubTable.types";

export const getLineColor = (lineId: string): LineColor | undefined => {
  switch (lineId) {
    case "bakerloo":
      return "bakerloo";

    case "central":
      return "central";

    case "circle":
      return "circle";

    case "district":
      return "district";

    case "hammersmith-city":
      return "hammersmith-city";

    case "jubilee":
      return "jubilee";

    case "metropolitan":
      return "metropolitan";

    case "northern":
      return "northern";

    case "piccadilly":
      return "piccadilly";

    case "victoria":
      return "victoria";

    case "waterloo-city":
      return "waterloo-city";

    default:
      return undefined;
  }
};
