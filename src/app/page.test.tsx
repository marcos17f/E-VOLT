import { render, screen } from "@testing-library/react";
import Home from "./page";

test("a home renderiza o conteúdo principal", () => {
  render(<Home />);
  expect(screen.getByRole("main")).toBeInTheDocument();
});
