import { render, screen } from "@testing-library/react";
import Home from "./page";
import { site } from "@/content/site";

test("a home compõe as seções na ordem da spec", () => {
  const { container } = render(<Home />);
  expect(screen.getByRole("main")).toBeInTheDocument();
  const ids = [...container.querySelectorAll("section[id]")].map((s) => s.id);
  expect(ids).toEqual([
    "beneficios",
    "modelos",
    "parcelamento",
    "clientes",
    "endereco",
  ]);
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});

test("há exatamente um botão de WhatsApp fixo", () => {
  render(<Home />);
  const fixos = screen
    .getAllByRole("link", { name: /whatsapp/i })
    .filter((a) => a.className.split(" ").includes("fixed"));
  expect(fixos).toHaveLength(1);
  expect(fixos[0]).toHaveAttribute("href", site.whatsapp);
});

test("nenhum link de WhatsApp aponta para URL diferente da constante", () => {
  render(<Home />);
  for (const a of screen.getAllByRole("link", { name: /whatsapp/i })) {
    expect(a).toHaveAttribute("href", site.whatsapp);
  }
});
