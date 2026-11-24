import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";
import { site } from "@/content/site";

test("Hero: título com o slogan e botão de WhatsApp", () => {
  render(<Hero />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
    "Economia, praticidade e liberdade",
  );
  expect(screen.getByRole("link", { name: /whatsapp/i })).toHaveAttribute(
    "href",
    site.whatsapp,
  );
});

test("Hero: cena animada em vez de vídeo", () => {
  const { container } = render(<Hero />);
  expect(container.querySelector("video")).toBeNull();
  expect(screen.getByRole("img", { name: /scooter elétrica/i })).toBeInTheDocument();
  expect(container.querySelector(".ev-road")).not.toBeNull();
  expect(container.querySelectorAll(".ev-streak").length).toBeGreaterThanOrEqual(4);
  expect(container.querySelectorAll(".ev-particle").length).toBeGreaterThanOrEqual(10);
});

test("Hero: elementos decorativos ficam fora da acessibilidade", () => {
  const { container } = render(<Hero />);
  for (const sel of [".ev-road", ".ev-streaks", ".ev-particles"]) {
    expect(container.querySelector(sel)).toHaveAttribute("aria-hidden", "true");
  }
});

test("Hero: destaca as três palavras do slogan", () => {
  render(<Hero />);
  for (const palavra of ["Economia", "Praticidade", "Liberdade"]) {
    expect(screen.getAllByText(palavra).length).toBeGreaterThanOrEqual(1);
  }
});
