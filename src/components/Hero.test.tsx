import { act, fireEvent, render, screen } from "@testing-library/react";
import { Hero } from "./Hero";
import { videosHero } from "@/content/videos";
import { site } from "@/content/site";

test("Hero: título e WhatsApp", () => {
  render(<Hero />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
    "Economia, praticidade e liberdade",
  );
  expect(screen.getByRole("link", { name: /whatsapp/i })).toHaveAttribute(
    "href",
    site.whatsapp,
  );
});

test("Hero: um vídeo mudo, inline e com poster por slide", () => {
  const { container } = render(<Hero />);
  const videos = [...container.querySelectorAll("video")];
  expect(videos).toHaveLength(videosHero.length);
  expect(videosHero.length).toBeGreaterThanOrEqual(5);
  videos.forEach((v, i) => {
    expect(v.muted).toBe(true);
    expect(v).toHaveAttribute("playsinline");
    expect(v).toHaveAttribute("poster", videosHero[i].poster);
  });
  expect(videos[0]).toHaveAttribute("src", "/videos/inauguracao.mp4");
});

test("Hero: carrossel navega pelos pontos, setas e dá a volta", () => {
  render(<Hero />);
  const pontos = screen.getAllByRole("button", { name: /ir para o vídeo/i });
  expect(pontos).toHaveLength(videosHero.length);
  expect(pontos[0]).toHaveAttribute("aria-current", "true");

  fireEvent.click(pontos[2]);
  expect(pontos[2]).toHaveAttribute("aria-current", "true");
  expect(pontos[0]).not.toHaveAttribute("aria-current");

  fireEvent.click(screen.getByRole("button", { name: /próximo/i }));
  expect(pontos[3]).toHaveAttribute("aria-current", "true");

  fireEvent.click(pontos[0]);
  fireEvent.click(screen.getByRole("button", { name: /anterior/i }));
  expect(pontos[videosHero.length - 1]).toHaveAttribute("aria-current", "true");
});

test("Hero: dois cliques seguidos em próximo avançam dois slides", () => {
  render(<Hero />);
  const pontos = screen.getAllByRole("button", { name: /ir para o vídeo/i });
  const proximo = screen.getByRole("button", { name: /próximo/i });
  act(() => {
    proximo.click();
    proximo.click();
  });
  expect(pontos[2]).toHaveAttribute("aria-current", "true");
});

test("Hero: ao terminar um vídeo, avança para o próximo", () => {
  const { container } = render(<Hero />);
  const pontos = screen.getAllByRole("button", { name: /ir para o vídeo/i });
  fireEvent.ended(container.querySelector("video")!);
  expect(pontos[1]).toHaveAttribute("aria-current", "true");
});
