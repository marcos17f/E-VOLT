# E-VOLT Mobilidade — Landing page

Landing de uma página da E-VOLT | Motos Elétricas (Bom Jesus – PI), feita para gerar contatos pelo WhatsApp. Conteúdo base: Instagram @evoltmobilidade.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm test         # testes (Vitest)
npm run lint
npm run build
```

## Onde editar

- `src/content/site.ts` — nome, slogan, cidade, links de WhatsApp e Instagram, benefícios.
- `src/content/modelos.ts` — lista de modelos (nome, preço, foto). Vazia = 3 cards "Em breve".
- `public/videos/` — vídeos já recomprimidos (720p) e posters.
- `src/components/` — uma seção por componente.

## De onde veio o conteúdo

- Instagram @evoltmobilidade: endereço (post de inauguração, 04/11/2026), telefone (fachada, vídeo da loja), preço e especificações do **X20** (anúncio de 29/10/2026), fotos de entrega, vídeos e logo (foto de perfil).
- Os preços do X20 podem mudar: confirmar com o cliente antes de publicar.

## Conteúdo provisório (trocar antes de publicar)

- `public/ia/`: imagens geradas por IA (Gemini) só para o site ficar interativo. Aparecem com o selo "Imagem ilustrativa (IA)". Substituir pelas fotos reais dos modelos da loja antes de publicar.
- Vídeos do carrossel (`public/videos/hero-*.mp4`): reels da E-VOLT que mostram clientes e lojas de terceiros; confirmar autorização de imagem.

## Pendências com o cliente

- Horário de funcionamento.
- Demais modelos, fotos e preços (hoje só o X20 está no catálogo).
- Marca/fabricante dos modelos e fotos oficiais do fabricante (não identificamos a marca pelo Instagram).
- Condições de parcelamento dos outros modelos.
- Domínio.
- Autorização de uso de imagem das pessoas nas fotos de clientes e dos vídeos do Instagram.
- Reels em colaboração com @lucas.consorcioss (`DfrXu6aMq15`, `DfcU3GYgss1`, `DfKEpWzPb_x`) não baixados; `Df7hq40R59q` baixado mas não usado no site.

## Deploy

Não publicado. O deploy para produção é feito pelo tech lead.
