import { render, screen } from "@testing-library/react";
import { EsubTable } from "../EsubTable";

describe("EsubTable", () => {
  it("displays content correctly", async () => {
    const lineName = "Central";
    const LineStatus = "Good Service";

    render(<EsubTable lineName={lineName} lineStatus={LineStatus} />);

    expect(screen.getByText(lineName)).toBeTruthy();
    expect(screen.getByText(LineStatus)).toBeTruthy();
  });
});
