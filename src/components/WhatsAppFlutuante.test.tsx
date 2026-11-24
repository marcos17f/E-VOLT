import { fireEvent, render, screen, within } from "@testing-library/react";
import { WhatsAppFlutuante } from "./WhatsAppFlutuante";
import { site } from "@/content/site";

const gatilho = () => screen.getByRole("button", { name: /abrir opções de whatsapp/i });

test("começa fechado, com o botão flutuante do WhatsApp", () => {
  render(<WhatsAppFlutuante />);
  expect(gatilho()).toHaveAttribute("aria-expanded", "false");
  expect(screen.queryByRole("dialog")).toBeNull();
});

test("ao clicar abre a tela com 'Falar com atendente' e 'Agendar test ride'", () => {
  render(<WhatsAppFlutuante />);
  fireEvent.click(gatilho());
  expect(gatilho()).toHaveAttribute("aria-expanded", "true");
  const painel = screen.getByRole("dialog", { name: /opções de atendimento/i });
  const links = within(painel).getAllByRole("link");
  expect(links).toHaveLength(2);

  const atendente = within(painel).getByRole("link", { name: /falar com atendente/i });
  const testRide = within(painel).getByRole("link", { name: /agendar test ride/i });
  const prefixo = `https://wa.me/${site.whatsappNumero}?text=`;
  expect(atendente.getAttribute("href")!.startsWith(prefixo)).toBe(true);
  expect(testRide.getAttribute("href")!.startsWith(prefixo)).toBe(true);
  expect(decodeURIComponent(atendente.getAttribute("href")!.slice(prefixo.length))).toMatch(/atendente/i);
  expect(decodeURIComponent(testRide.getAttribute("href")!.slice(prefixo.length))).toMatch(/test ride/i);
  for (const a of links) {
    expect(a).toHaveAttribute("target", "_blank");
    expect(a.getAttribute("rel")).toContain("noopener");
  }
});

test("fecha pelo botão de fechar, pelo Escape e ao clicar fora, devolvendo o foco", () => {
  render(<WhatsAppFlutuante />);

  fireEvent.click(gatilho());
  fireEvent.click(screen.getByRole("button", { name: /fechar/i }));
  expect(screen.queryByRole("dialog")).toBeNull();

  fireEvent.click(gatilho());
  fireEvent.keyDown(document, { key: "Escape" });
  expect(screen.queryByRole("dialog")).toBeNull();
  expect(gatilho()).toHaveFocus();

  fireEvent.click(gatilho());
  fireEvent.mouseDown(document.body);
  expect(screen.queryByRole("dialog")).toBeNull();
});

test("clicar dentro da tela não fecha", () => {
  render(<WhatsAppFlutuante />);
  fireEvent.click(gatilho());
  fireEvent.mouseDown(screen.getByRole("dialog"));
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});
