import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";
import { Hero } from "./Hero";
import { site } from "@/content/site";

beforeEach(() => vi.useFakeTimers());
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

const pontos = () => screen.getAllByRole("button", { name: /ir para o banner/i });

test("Hero: um único h1 de campanha 'Black da E-VOLT' e sem vídeo", () => {
  const { container } = render(<Hero />);
  const h1 = screen.getAllByRole("heading", { level: 1 });
  expect(h1).toHaveLength(1);
  expect(h1[0].textContent).toBe("Black da E-VOLT");
  expect(container.querySelector("video")).toBeNull();
});

test("Hero: banner Black mostra as duas motos com os preços da loja", () => {
  const { container } = render(<Hero />);
  const black = container.querySelector("[data-slide]")!;
  expect(black.textContent).toContain("New Bike 1000W");
  expect(black.textContent).toContain("R$ 7.200");
  expect(black.textContent).toContain("R$ 6.900");
  expect(black.textContent).toContain("X20");
  expect(black.textContent).toContain("R$ 9.900");
  expect(black.querySelectorAll("img")).toHaveLength(2);
});

test("Hero: banner Black tem as motos recortadas sobre o cenário e a chamada 'Já começou' para o WhatsApp", () => {
  const { container } = render(<Hero />);
  const black = container.querySelector("[data-slide]")!;
  const srcs = [...black.querySelectorAll("img")].map((i) => decodeURIComponent(i.getAttribute("src") ?? ""));
  expect(srcs.some((s) => s.includes("new-bike-recorte"))).toBe(true);
  expect(srcs.some((s) => s.includes("x20-recorte"))).toBe(true);
  const chamada = [...black.querySelectorAll("a")].find((a) => /quero aproveitar a black da e-volt/i.test(a.textContent ?? ""));
  expect(chamada).toBeTruthy();
  expect(chamada).toHaveAttribute("href", site.whatsapp);
  expect(black.textContent).toMatch(/já começou/i);
});

test("Hero: 4 banners promocionais", () => {
  const { container } = render(<Hero />);
  expect(container.querySelectorAll("[data-slide]")).toHaveLength(4);
  expect(pontos()).toHaveLength(4);
  expect(pontos()[0]).toHaveAttribute("aria-current", "true");
  const titulos = [...container.querySelectorAll("[data-slide] :is(h1,h2)")].map((h) => h.textContent);
  expect(titulos.join(" | ")).toMatch(/Black da E-VOLT/);
  expect(titulos.join(" | ")).toMatch(/NPrime/);
  expect(titulos.join(" | ")).toMatch(/Economia, praticidade e liberdade/);
  expect(titulos.join(" | ")).toMatch(/E-VOLT em Bom Jesus/);
});

test("Hero: botões de ação levam ao WhatsApp e às seções", () => {
  const { container } = render(<Hero />);
  const hrefs = [...container.querySelectorAll("[data-slide] a")].map((a) => a.getAttribute("href"));
  expect(hrefs).toEqual(expect.arrayContaining([site.whatsapp, "#modelos", "#endereco"]));
  for (const a of container.querySelectorAll(`a[href="${site.whatsapp}"]`)) {
    expect(a.getAttribute("rel")).toContain("noopener");
  }
});

test("Hero: só o banner ativo fica acessível", () => {
  const { container } = render(<Hero />);
  const slides = [...container.querySelectorAll("[data-slide]")];
  expect(slides[0]).toHaveAttribute("aria-hidden", "false");
  expect(slides[1]).toHaveAttribute("aria-hidden", "true");
});

test("Hero: setas, pontos e volta ao início", () => {
  render(<Hero />);
  fireEvent.click(pontos()[2]);
  expect(pontos()[2]).toHaveAttribute("aria-current", "true");
  fireEvent.click(screen.getByRole("button", { name: /próximo/i }));
  expect(pontos()[3]).toHaveAttribute("aria-current", "true");
  fireEvent.click(screen.getByRole("button", { name: /próximo/i }));
  expect(pontos()[0]).toHaveAttribute("aria-current", "true");
  fireEvent.click(screen.getByRole("button", { name: /anterior/i }));
  expect(pontos()[3]).toHaveAttribute("aria-current", "true");
});

test("Hero: dois cliques seguidos avançam dois banners", () => {
  render(<Hero />);
  const proximo = screen.getByRole("button", { name: /próximo/i });
  act(() => {
    proximo.click();
    proximo.click();
  });
  expect(pontos()[2]).toHaveAttribute("aria-current", "true");
});

test("Hero: troca sozinho a cada 6 s e pausa com o mouse em cima", () => {
  render(<Hero />);
  act(() => vi.advanceTimersByTime(6000));
  expect(pontos()[1]).toHaveAttribute("aria-current", "true");

  const secao = screen.getByRole("region", { name: /banners/i });
  fireEvent.mouseEnter(secao);
  act(() => vi.advanceTimersByTime(20000));
  expect(pontos()[1]).toHaveAttribute("aria-current", "true");

  fireEvent.mouseLeave(secao);
  act(() => vi.advanceTimersByTime(6000));
  expect(pontos()[2]).toHaveAttribute("aria-current", "true");
});

test("Hero: não troca sozinho se o usuário prefere menos movimento", () => {
  vi.stubGlobal("matchMedia", (q: string) => ({
    matches: q.includes("reduce"),
    media: q,
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
  render(<Hero />);
  act(() => vi.advanceTimersByTime(30000));
  expect(pontos()[0]).toHaveAttribute("aria-current", "true");
});

test("Hero: imagens de IA e de fabricante têm selo", () => {
  render(<Hero />);
  expect(screen.getAllByText(/imagem ilustrativa \(ia\)/i).length).toBeGreaterThanOrEqual(1);
  expect(screen.getAllByText(/foto do fabricante/i).length).toBeGreaterThanOrEqual(1);
});

test("Hero: fundo de campanha aparece só no banner Black", () => {
  const { container } = render(<Hero />);
  const fundo = container.querySelector("[data-fundo-black]")!;
  expect(fundo).toHaveAttribute("data-ativo", "true");
  fireEvent.click(pontos()[1]);
  expect(fundo).toHaveAttribute("data-ativo", "false");
  fireEvent.click(pontos()[0]);
  expect(fundo).toHaveAttribute("data-ativo", "true");
});
