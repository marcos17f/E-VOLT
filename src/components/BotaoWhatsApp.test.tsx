import { render, screen } from "@testing-library/react";
import { BotaoWhatsApp } from "./BotaoWhatsApp";
import { site } from "@/content/site";

test("aponta para o WhatsApp da loja com rel seguro", () => {
  render(<BotaoWhatsApp />);
  const link = screen.getByRole("link", { name: /whatsapp/i });
  expect(link).toHaveAttribute("href", site.whatsapp);
  expect(link.getAttribute("rel")).toContain("noopener");
});
