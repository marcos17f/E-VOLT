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

## Pendências com o cliente

- Endereço exato e horário de funcionamento (o mapa hoje busca só a cidade).
- Lista de modelos, fotos e preços.
- Condições de parcelamento.
- Domínio.
- Autorização para usar os vídeos do Instagram.
- Outros 4 reels não baixados; foto/logo oficial para favicon.

## Deploy

Não publicado. O deploy para produção é feito pelo tech lead.
