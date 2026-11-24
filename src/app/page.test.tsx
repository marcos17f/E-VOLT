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
    "loja",
    "clientes",
    "duvidas",
    "endereco",
  ]);
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});

test("há exatamente um botão flutuante que abre o menu de WhatsApp", () => {
  render(<Home />);
  expect(screen.getAllByRole("button", { name: /abrir opções de whatsapp/i })).toHaveLength(1);
  expect(screen.queryByRole("dialog")).toBeNull();
});

test("nenhum link de WhatsApp aponta para URL diferente da constante", () => {
  render(<Home />);
  for (const a of screen.getAllByRole("link", { name: /whatsapp/i })) {
    expect(a).toHaveAttribute("href", site.whatsapp);
  }
});
