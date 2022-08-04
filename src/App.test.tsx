import { render, screen } from "@testing-library/react";
import App from "./App";

describe("When app starts up", () => {
  it("renders the App", async () => {
    render(<App />);

    await screen.findByText(/Line Status Board/);
  });

  it("fetches and displays line status data", async () => {
    render(<App />);
    const text = await screen.findByText("Bakerloo");
    expect(text).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
