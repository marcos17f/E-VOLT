export const site = {
  nome: "E-VOLT Mobilidade",
  slogan: "O futuro da mobilidade chegou! Economia, praticidade e liberdade.",
  cidade: "Bom Jesus – PI",
  endereco: "Rua Tabelião Raimundo José Rocha, Bom Jesus – PI",
  referencia: "Ao lado da loja Van Fitness",
  telefone: "(89) 98111-7097",
  // Mesmo número da fachada (WhatsApp): permite mensagem pré-preenchida, o que o link curto do perfil não permite.
  whatsappNumero: "5589981117097",
  whatsapp: "https://wa.me/message/43435QYQ5CMQJ1",
  instagram: "https://www.instagram.com/evoltmobilidade/",
};

export function linkWhatsApp(texto: string): string {
  return `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(texto)}`;
}

export const beneficios: { titulo: string; texto: string }[] = [
  {
    titulo: "Economia",
    texto: "Rode mais gastando menos no dia a dia, sem parar em posto.",
  },
  {
    titulo: "Praticidade",
    texto: "Carregue na tomada de casa e saia pronto para o trabalho.",
  },
  {
    titulo: "Liberdade",
    texto: "Mobilidade ágil para a cidade, no seu ritmo.",
  },
  {
    titulo: "Sem combustível",
    texto: "Silenciosa e limpa: zero gasolina e menos manutenção.",
  },
];
