import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "@/App";

it("should render App component", () => {
  const { getByText } = render(<App />);
  const result = getByText(/Your TODOs/i);
  expect(result).toBeInTheDocument();
});
