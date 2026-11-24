import { render, screen, within } from "@testing-library/react";
import { Cabecalho } from "./Cabecalho";
import { Beneficios } from "./Beneficios";
import { Modelos } from "./Modelos";
import { Parcelamento } from "./Parcelamento";
import { Loja } from "./Loja";
import { Clientes } from "./Clientes";
import { Endereco } from "./Endereco";
import { Rodape } from "./Rodape";
import { site } from "@/content/site";

test("Cabecalho: logo, navegação por âncoras e WhatsApp", () => {
  render(<Cabecalho />);
  const header = screen.getByRole("banner");
  const hrefs = within(header)
    .getAllByRole("link")
    .map((a) => a.getAttribute("href"));
  expect(hrefs).toEqual(
    expect.arrayContaining(["#modelos", "#parcelamento", "#endereco", site.whatsapp]),
  );
});


test("Beneficios: 4 cards", () => {
  render(<Beneficios />);
  expect(screen.getAllByRole("listitem")).toHaveLength(4);
});

test("Modelos: lista vazia mostra 3 cards 'Em breve' sem preço", () => {
  render(<Modelos itens={[]} />);
  expect(screen.getAllByText(/em breve/i).length).toBeGreaterThanOrEqual(3);
  expect(screen.queryByText(/R\$/)).toBeNull();
});

test("Modelos: padrão mostra o X20 com preço, parcelamento e especificações", () => {
  render(<Modelos />);
  expect(screen.getByRole("heading", { name: "X20" })).toBeInTheDocument();
  expect(screen.getByText("R$ 9.900,00 à vista")).toBeInTheDocument();
  expect(screen.getByText("12x de R$ 938,00 sem juros")).toBeInTheDocument();
  expect(screen.getByText("1000W")).toBeInTheDocument();
  expect(screen.getByText("55 a 63 km")).toBeInTheDocument();
});

test("Parcelamento: título, WhatsApp e condição real do X20", () => {
  const { container } = render(<Parcelamento />);
  expect(screen.getByRole("heading", { name: /parcelamento/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /whatsapp/i })).toBeInTheDocument();
  expect(container.textContent).toContain("12x de R$ 938,00 sem juros");
});

test("Loja: vídeo da fachada com controles e o que a loja vende", () => {
  const { container } = render(<Loja />);
  const video = container.querySelector("video")!;
  expect(video).toHaveAttribute("controls");
  expect(video).toHaveAttribute("poster", "/videos/loja.jpg");
  expect(container.textContent).toMatch(/bicicletas elétricas/i);
  expect(container.textContent).toMatch(/acessórios/i);
});

test("Clientes: 2 fotos de entrega e vídeo com poster", () => {
  const { container } = render(<Clientes />);
  expect(screen.getAllByRole("img").length).toBeGreaterThanOrEqual(2);
  const video = container.querySelector("video")!;
  expect(video).toHaveAttribute("controls");
  expect(video).toHaveAttribute("poster", "/videos/clientes.jpg");
});

test("Endereco: rua, referência, telefone e mapa com título", () => {
  render(<Endereco />);
  expect(screen.getByText(/Rua Tabelião Raimundo José Rocha/)).toBeInTheDocument();
  expect(screen.getByText(/Van Fitness/)).toBeInTheDocument();
  expect(screen.getByText(site.telefone)).toBeInTheDocument();
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
