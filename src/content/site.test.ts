import { site, beneficios } from "./site";
import { modelos } from "./modelos";

test("links e slogan batem com a spec", () => {
  expect(site.whatsapp).toBe("https://wa.me/message/43435QYQ5CMQJ1");
  expect(site.instagram).toBe("https://www.instagram.com/evoltmobilidade/");
  expect(site.slogan).toBe(
    "O futuro da mobilidade chegou! Economia, praticidade e liberdade.",
  );
});

test("há 4 benefícios", () => {
  expect(beneficios).toHaveLength(4);
});

test("nenhum modelo tem preço inventado", () => {
  for (const m of modelos) expect(m.preco).toBeUndefined();
});
