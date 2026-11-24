# Site E-VOLT Mobilidade — Design

Data: 24/11/2026 · Status: aguardando revisão

## Objetivo
Landing page profissional de uma página para a **E-VOLT | Motos Elétricas** (Bom Jesus – PI), voltada a **gerar contatos pelo WhatsApp**. Conteúdo vem do Instagram @evoltmobilidade.

## Dados reais disponíveis
- Slogan: "O futuro da mobilidade chegou! Economia, praticidade e liberdade."
- Cidade: Bom Jesus – PI
- WhatsApp: https://wa.me/message/43435QYQ5CMQJ1
- Instagram: https://www.instagram.com/evoltmobilidade/
- Seções do perfil: Clientes, Parcelamento, Endereço
- Vídeos (em `Desktop\EVOLT - Instagram`): `evolt_DfV6W3lu8D1.mp4` (inauguração, 48 s, 720x1280), `evolt_DfXI4gGOvmo.mp4` ("Não podia faltar")

## Fora do escopo
Carrinho, login, painel, catálogo multipágina. Nenhum preço, autonomia ou modelo é inventado: o que não for confirmado fica como espaço reservado.

## Stack
Next.js (App Router) + TypeScript + Tailwind, como nos sites da Dra. Gabriela e da MED Hospitalar. Sem deploy: o tech lead sobe para produção.

## Seções (ordem)
1. **Hero** — vídeo da inauguração ao fundo (poster, muted, loop, `playsinline`), título com o slogan, botão "Falar no WhatsApp".
2. **Por que moto elétrica** — 4 cards: economia, praticidade, liberdade, sem combustível.
3. **Modelos** — grade de cards com foto/nome/preço como espaço reservado, alimentada por um arquivo de dados (`src/content/modelos.ts`), facilitando preencher depois.
4. **Parcelamento** — bloco explicativo; texto só com o que o cliente confirmar.
5. **Clientes** — vídeo "Não podia faltar" e espaço para fotos de entregas.
6. **Endereço** — mapa de Bom Jesus – PI (endereço exato pendente) e horário.
7. **Rodapé** — Instagram, WhatsApp, cidade.
- **Botão fixo de WhatsApp** em todas as telas.

## Visual
Fundo escuro, verde elétrico (`#22c55e`) vindo do logo verde e preto, tipografia forte, mobile-first.

## Desempenho e SEO
- Vídeos recomprimidos com `ffmpeg` (H.264, ~720p) em `public/videos/`, com `poster` e carregamento sob demanda.
- Metadados, Open Graph e JSON-LD `LocalBusiness`.
- Imagens com `next/image`.

## Estrutura
- `src/app/page.tsx` compõe as seções.
- `src/components/` — uma seção por componente (Hero, Beneficios, Modelos, Parcelamento, Clientes, Endereco, Rodape, BotaoWhatsApp).
- `src/content/` — textos, links e modelos em arquivos de dados, sem texto solto nos componentes.

## Tratamento de erros e testes
- Vídeo falha ao carregar: o `poster` permanece e a página continua utilizável.
- Link do WhatsApp centralizado em uma constante.
- Verificação: `npm run build` e `npm run lint` passando; checagem visual em 390 px e 1280 px; Lighthouse mobile.

## Pendências com o cliente
Endereço e horário exatos, lista de modelos e preços, condições de parcelamento, domínio, autorização para usar os vídeos e os outros 4 reels (não baixados).
