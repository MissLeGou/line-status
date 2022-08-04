import { render, screen } from "@testing-library/react";
import ReactTestRenderer from "react-test-renderer";
import App from "./App";

describe("When app starts up", () => {
  it("renders correctly", () => {
    const renderer = ReactTestRenderer.create(<App />).toJSON();
    expect(renderer).toMatchSnapshot();
  });

  it("renders the App", async () => {
    render(<App />);

    await screen.findByText(/Line Status Board/);
  });

  it("fetches and displays line status data", async () => {
    render(<App />);

    const lineData = await screen.findByText("Bakerloo");
    expect(lineData).toBeInTheDocument();
  });
});
