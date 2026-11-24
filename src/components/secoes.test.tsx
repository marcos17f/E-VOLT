import { render, screen, within } from "@testing-library/react";
import { Hero } from "./Hero";
import { Beneficios } from "./Beneficios";
import { Modelos } from "./Modelos";
import { Parcelamento } from "./Parcelamento";
import { Clientes } from "./Clientes";
import { Endereco } from "./Endereco";
import { Rodape } from "./Rodape";
import { site } from "@/content/site";

test("Hero: título, vídeo de fundo com poster e WhatsApp", () => {
  const { container } = render(<Hero />);
  expect(
    screen.getByRole("heading", { level: 1 }).textContent,
  ).toContain("Economia, praticidade e liberdade");
  const video = container.querySelector("video")!;
  expect(video).toHaveAttribute("poster", "/videos/inauguracao.jpg");
  expect(video.muted).toBe(true);
  expect(video).toHaveAttribute("loop");
  expect(video).toHaveAttribute("playsinline");
  expect(screen.getByRole("link", { name: /whatsapp/i })).toHaveAttribute(
    "href",
    site.whatsapp,
  );
});

test("Beneficios: 4 cards", () => {
  render(<Beneficios />);
  expect(screen.getAllByRole("listitem")).toHaveLength(4);
});

test("Modelos: lista vazia mostra 3 cards 'Em breve' sem preço", () => {
  render(<Modelos />);
  expect(screen.getAllByText(/em breve/i).length).toBeGreaterThanOrEqual(3);
  expect(screen.queryByText(/R\$/)).toBeNull();
});

test("Modelos: exibe preço quando informado", () => {
  render(<Modelos itens={[{ id: "x", nome: "Modelo X", preco: "R$ 1.000" }]} />);
  expect(screen.getByText("Modelo X")).toBeInTheDocument();
  expect(screen.getByText("R$ 1.000")).toBeInTheDocument();
});

test("Parcelamento: título, WhatsApp e nenhum valor de parcela", () => {
  const { container } = render(<Parcelamento />);
  expect(screen.getByRole("heading", { name: /parcelamento/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /whatsapp/i })).toBeInTheDocument();
  expect(container.textContent).not.toMatch(/R\$|\d+\s*x/);
});

test("Clientes: vídeo com controles e poster", () => {
  const { container } = render(<Clientes />);
  const video = container.querySelector("video")!;
  expect(video).toHaveAttribute("controls");
  expect(video).toHaveAttribute("poster", "/videos/clientes.jpg");
});

test("Endereco: cidade e mapa com título", () => {
  render(<Endereco />);
  expect(screen.getByText(/Bom Jesus/)).toBeInTheDocument();
  expect(screen.getByTitle(/mapa/i).tagName).toBe("IFRAME");
});

test("Rodape: links de Instagram e WhatsApp", () => {
  render(<Rodape />);
  const footer = screen.getByRole("contentinfo");
  const hrefs = within(footer)
    .getAllByRole("link")
    .map((a) => a.getAttribute("href"));
  expect(hrefs).toContain(site.instagram);
  expect(hrefs).toContain(site.whatsapp);
});
