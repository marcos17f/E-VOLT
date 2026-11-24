# Landing E-VOLT Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Landing page de uma página da E-VOLT Mobilidade (Bom Jesus – PI) que gera contatos pelo WhatsApp.

**Architecture:** Next.js App Router, uma seção por componente em `src/components/`, todo texto/link/modelo em `src/content/`. Vídeos recomprimidos em `public/videos/`. Sem backend.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Vitest + Testing Library, ffmpeg.

**Spec:** `docs/superpowers/specs/2026-11-24-evolt-landing-design.md`

## Global Constraints

- Slogan exato: "O futuro da mobilidade chegou! Economia, praticidade e liberdade."
- WhatsApp: `https://wa.me/message/43435QYQ5CMQJ1`; Instagram: `https://www.instagram.com/evoltmobilidade/`
- Cor de destaque: `#22c55e`; fundo escuro; mobile-first.
- Nenhum preço, autonomia ou modelo inventado: dados não confirmados ficam como espaço reservado.
- Textos em PT-BR. Sem menção a Claude/Anthropic em commits ou arquivos.
- Sem deploy: parar no commit local.
- Vídeos de origem: `C:\Users\okiss\Desktop\EVOLT - Instagram\evolt_DfV6W3lu8D1.mp4` (inauguração) e `evolt_DfXI4gGOvmo.mp4` ("Não podia faltar").

## Review Focus

- Vídeo não carrega/autoplay bloqueado (iOS, economia de dados): `poster` aparece e a página segue usável.
- Lista de modelos vazia: a seção mostra cards reservados, não quebra.
- Tela de 320 px: sem rolagem horizontal; botão fixo não cobre o conteúdo do rodapé.
- JS desligado/lento: links de WhatsApp são `<a href>` comuns e funcionam.
- Link de WhatsApp único em uma constante: nenhum componente tem URL solta.

---

### Task 1: Scaffold do projeto

**Files:**
- Create: `package.json`, `src/app/layout.tsx`, `src/app/page.tsx`, `vitest.config.ts`, `src/app/globals.css`
- Test: `src/app/page.test.tsx`

**Interfaces:**
- Produces: projeto Next.js rodando com `npm run dev|build|lint|test`; tokens Tailwind `brand` = `#22c55e` em `globals.css`.

- [ ] **Step 1:** Em `C:\Users\okiss\Desktop\evolt-site` (já com `.git`, `.specify`, `docs/`), rodar `npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --use-npm --yes`.
- [ ] **Step 2:** Instalar `vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom` e criar `vitest.config.ts` (ambiente `jsdom`, alias `@` → `src`) e o script `"test": "vitest run"`.
- [ ] **Step 3: Teste que falha** em `src/app/page.test.tsx`: renderiza `<Home />` e espera `screen.getByRole("main")`.
- [ ] **Step 4:** Rodar `npm test` → FAIL (page padrão sem `<main>` ou sem teste de ambiente). Ajustar `page.tsx` para `export default function Home()` retornando `<main />`.
- [ ] **Step 5:** `npm test` → PASS; `npm run build` → sucesso.
- [ ] **Step 6: Commit** `git add -A && git commit -m "chore: scaffold next.js com vitest"`

### Task 2: Conteúdo centralizado

**Files:**
- Create: `src/content/site.ts`, `src/content/modelos.ts`
- Test: `src/content/site.test.ts`

**Interfaces:**
- Produces:
  - `site: { nome: string; slogan: string; cidade: string; whatsapp: string; instagram: string }` com os valores das Global Constraints.
  - `type Modelo = { id: string; nome: string; preco?: string; foto?: string }`
  - `modelos: Modelo[]` (vazio ou com `nome: "Em breve"` reservados, sem preço).
  - `beneficios: { titulo: string; texto: string }[]` com 4 itens: economia, praticidade, liberdade, sem combustível.

- [ ] **Step 1: Teste que falha:** `site.whatsapp` é exatamente `https://wa.me/message/43435QYQ5CMQJ1`; `site.slogan` é exatamente o slogan da spec; `beneficios` tem 4 itens; nenhum `Modelo` tem `preco` inventado (todos `undefined`).
- [ ] **Step 2:** `npm test` → FAIL (módulos inexistentes).
- [ ] **Step 3:** Criar os arquivos com os tipos acima. Textos dos benefícios curtos e genéricos, sem números.
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5: Commit** `git commit -am "feat: conteudo centralizado"` (após `git add`).

### Task 3: BotaoWhatsApp e vídeos

**Files:**
- Create: `src/components/BotaoWhatsApp.tsx`, `public/videos/inauguracao.mp4`, `public/videos/inauguracao.jpg`, `public/videos/clientes.mp4`, `public/videos/clientes.jpg`
- Test: `src/components/BotaoWhatsApp.test.tsx`

**Interfaces:**
- Consumes: `site.whatsapp` de Task 2.
- Produces: `BotaoWhatsApp({ fixo?: boolean; children?: ReactNode }): JSX.Element` — `<a href={site.whatsapp} target="_blank" rel="noopener noreferrer">`; com `fixo` fica `position: fixed` no canto inferior direito.

- [ ] **Step 1: Teste que falha:** renderiza e espera link com `href === site.whatsapp`, `rel` contendo `noopener`, e com `fixo` a classe `fixed`.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implementar `BotaoWhatsApp` (fundo `brand`, texto padrão "Falar no WhatsApp").
- [ ] **Step 4:** Recomprimir vídeos com ffmpeg: `ffmpeg -i "<origem>" -vf scale=-2:720 -c:v libx264 -crf 28 -preset slow` — manter áudio no vídeo de clientes (`-c:a aac -b:a 96k`), tirar áudio do hero (`-an`); `-movflags +faststart`. Extrair poster: `ffmpeg -i <saida> -frames:v 1 -q:v 3 <poster>.jpg`. Verificar com `ffprobe` que cada saída tem < 6 MB.
- [ ] **Step 5:** `npm test` → PASS.
- [ ] **Step 6: Commit** `git commit -m "feat: botao whatsapp e videos otimizados"`

### Task 4: Hero

**Files:**
- Create: `src/components/Hero.tsx`
- Test: `src/components/Hero.test.tsx`

**Interfaces:**
- Consumes: `site`, `BotaoWhatsApp`, `/videos/inauguracao.mp4` e `.jpg`.
- Produces: `Hero(): JSX.Element`.

- [ ] **Step 1: Teste que falha:** `<h1>` contém "Economia, praticidade e liberdade"; existe `<video>` com atributos `muted`, `loop`, `playsInline`, `poster="/videos/inauguracao.jpg"`; existe link de WhatsApp.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implementar com vídeo de fundo, overlay escuro, `preload="metadata"`, `autoPlay`.
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5: Commit** `git commit -m "feat: hero com video"`

### Task 5: Benefícios e Modelos

**Files:**
- Create: `src/components/Beneficios.tsx`, `src/components/Modelos.tsx`
- Test: `src/components/Beneficios.test.tsx`, `src/components/Modelos.test.tsx`

**Interfaces:**
- Consumes: `beneficios`, `modelos`, `Modelo` de Task 2.
- Produces: `Beneficios()`, `Modelos()`.

- [ ] **Step 1: Testes que falham:** `Beneficios` renderiza 4 cards; `Modelos` com lista vazia renderiza ao menos 3 cards reservados com texto "Em breve" e nenhum símbolo `R$`; com um `Modelo` que tem `preco`, o preço aparece.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implementar grades responsivas (1 coluna no mobile, 2–4 no desktop).
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5: Commit** `git commit -m "feat: secoes beneficios e modelos"`

### Task 6: Parcelamento, Clientes, Endereço, Rodapé

**Files:**
- Create: `src/components/Parcelamento.tsx`, `Clientes.tsx`, `Endereco.tsx`, `Rodape.tsx` (em `src/components/`)
- Test: um `.test.tsx` por componente

**Interfaces:**
- Consumes: `site`, `BotaoWhatsApp`, `/videos/clientes.mp4` e `.jpg`.
- Produces: `Parcelamento()`, `Clientes()`, `Endereco()`, `Rodape()`.

- [ ] **Step 1: Testes que falham:** `Parcelamento` tem título e link de WhatsApp, sem valores numéricos de parcela; `Clientes` tem `<video controls>` com `poster="/videos/clientes.jpg"`; `Endereco` mostra "Bom Jesus – PI" e um `<iframe>` de mapa com `title`; `Rodape` tem links para `site.instagram` e `site.whatsapp`.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implementar. Mapa: `<iframe loading="lazy">` do Google Maps com busca "Bom Jesus, PI" (endereço exato pendente, comentar o que falta).
- [ ] **Step 4:** `npm test` → PASS.
- [ ] **Step 5: Commit** `git commit -m "feat: parcelamento, clientes, endereco e rodape"`

### Task 7: Página, SEO e acabamento

**Files:**
- Modify: `src/app/page.tsx`, `src/app/layout.tsx`
- Create: `src/app/icon.png` (logo do perfil, se disponível) 
- Test: `src/app/page.test.tsx` (de Task 1)

**Interfaces:**
- Consumes: todos os componentes das Tasks 3–6.

- [ ] **Step 1: Teste que falha:** `<Home />` renderiza, em ordem, Hero, Beneficios, Modelos, Parcelamento, Clientes, Endereco e Rodape (checar por títulos/landmarks) e exatamente um `BotaoWhatsApp` com `fixo`.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Compor `page.tsx`. Em `layout.tsx`: `lang="pt-BR"`, `metadata` (título, descrição, Open Graph) e JSON-LD `LocalBusiness` com nome, cidade, telefone/WhatsApp e `sameAs` do Instagram.
- [ ] **Step 4:** `npm test` → PASS; `npm run lint` e `npm run build` sem erros.
- [ ] **Step 5: Commit** `git commit -m "feat: pagina completa e seo"`

### Task 8: Verificação final

- [ ] **Step 1:** `npm run dev`, abrir em 390 px e 1280 px (Chrome) e conferir: sem rolagem horizontal em 320 px, hero com vídeo, botão fixo não cobre o rodapé, WhatsApp abre.
- [ ] **Step 2:** `npm run build && npm test` → tudo passando.
- [ ] **Step 3:** Rodar Lighthouse mobile e anotar a nota (meta: Desempenho ≥ 85).
- [ ] **Step 4:** Atualizar o `README.md` (PT-BR) com como rodar e as pendências com o cliente da spec. Commit local `git commit -m "docs: readme e pendencias"`. **Não subir para produção.**
