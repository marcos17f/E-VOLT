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
- `public/videos/` — vídeos da loja e de clientes (720p) com posters. O hero não usa vídeo: é um carrossel de 4 banners (`Hero.tsx`) com o banner de campanha **"Black da E-VOLT"** em primeiro, feito de HTML/CSS (textos e preços editáveis no componente). Troca a cada 6 s, pausa com o mouse e não troca sozinho se o usuário prefere menos movimento.
- `src/components/` — uma seção por componente.

## De onde veio o conteúdo

- Instagram @evoltmobilidade: endereço (post de inauguração, 04/11/2026), telefone (fachada, vídeo da loja), preço e especificações do **X20** (anúncio de 29/10/2026), fotos de entrega, vídeos e logo (foto de perfil).
- Os preços do X20 podem mudar: confirmar com o cliente antes de publicar.

## Conteúdo provisório (trocar antes de publicar)

- `public/ia/`: imagens geradas por IA (Gemini) (scooter retrô e cena de estilo de vida) só para o site ficar interativo. Aparecem com o selo "Imagem ilustrativa (IA)". Substituir pelas fotos reais dos modelos da loja antes de publicar.
- Vídeos `loja.mp4` e `clientes.mp4`: reels da E-VOLT; confirmar autorização de imagem das pessoas que aparecem.

- `public/nprime/`: fotos de 4 modelos (Brisa, Brutal, Q-Star II, Vast Universe) tiradas do site do fabricante **NPrime Motor** (nprimemotor.com.br), com selo "Foto do fabricante". Confirmar com a loja quais modelos ela vende e pedir autorização/kit de imprensa ao fabricante. Faltam Fuling, Impacto, Ling Yue e Trovão (ficha: Fuling/Impacto/Ling Yue/Trovão = 1000W, até 75 km, 150 kg).

## Conferir antes de publicar

- **Parcela do X20 diverge:** o anúncio do feed diz "12x de R$ 938,00 sem juros" e o story diz "12x de R$ 983,30". O site usa R$ 938,00 (faixa do topo, parcelamento e dúvidas). Confirmar qual é o valor correto.
- Banner Black: preços New Bike 1000W (de R$ 7.200 por R$ 6.900 à vista) e X20 (R$ 9.900 à vista) vêm dos stories da loja; confirmar validade da campanha.

## Pendências com o cliente

- Horário de funcionamento.
- Demais modelos, fotos e preços (hoje só o X20 está no catálogo).
- Confirmar fabricante e lista de modelos vendidos (NPrime Motor aparece em fotos e reels; os modelos X20 e Paris não constam no site da NPrime).
- Condições de parcelamento dos outros modelos.
- Domínio.
- Autorização de uso de imagem das pessoas nas fotos de clientes e dos vídeos do Instagram.
- Reels em colaboração com @lucas.consorcioss (`DfrXu6aMq15`, `DfcU3GYgss1`, `DfKEpWzPb_x`) não baixados; `Df7hq40R59q` baixado mas não usado no site.

## Deploy

Não publicado. O deploy para produção é feito pelo tech lead.
