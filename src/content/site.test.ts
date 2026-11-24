import { site, beneficios } from "./site";
import { modelos } from "./modelos";

test("links e slogan batem com a spec", () => {
  expect(site.whatsapp).toBe("https://wa.me/message/43435QYQ5CMQJ1");
  expect(site.instagram).toBe("https://www.instagram.com/evoltmobilidade/");
  expect(site.slogan).toBe(
    "O futuro da mobilidade chegou! Economia, praticidade e liberdade.",
  );
});

test("contato e endereço vêm da fachada e do Instagram da loja", () => {
  expect(site.telefone).toBe("(89) 98111-7097");
  expect(site.endereco).toContain("Rua Tabelião Raimundo José Rocha");
});

test("há 4 benefícios", () => {
  expect(beneficios).toHaveLength(4);
});

test("X20 tem os dados exatos do anúncio oficial", () => {
  const x20 = modelos.find((m) => m.id === "x20")!;
  expect(x20.nome).toBe("X20");
  expect(x20.preco).toBe("R$ 9.900,00 à vista");
  expect(x20.parcelamento).toBe("12x de R$ 938,00 sem juros");
  expect(x20.foto).toBe("/fotos/x20.jpg");
  const specs = Object.fromEntries(x20.specs!.map((s) => [s.rotulo, s.valor]));
  expect(specs["Motor"]).toBe("1000W");
  expect(specs["Bateria de lítio"]).toBe("60V / 21Ah");
  expect(specs["Autonomia"]).toBe("55 a 63 km");
  expect(specs["Velocidade máxima"]).toBe("até 32 km/h");
  expect(specs["Capacidade"]).toBe("até 220 kg");
});
