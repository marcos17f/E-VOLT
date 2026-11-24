export type VideoHero = { src: string; poster: string; legenda: string };

// Reels da E-VOLT (Instagram), recomprimidos. Ordem = ordem do carrossel.
// Alguns mostram clientes: confirmar autorização de imagem antes de publicar.
export const videosHero: VideoHero[] = [
  { src: "/videos/inauguracao.mp4", poster: "/videos/inauguracao.jpg", legenda: "Inauguração da E-VOLT" },
  { src: "/videos/hero-02.mp4", poster: "/videos/hero-02.jpg", legenda: "Cliente com a moto elétrica" },
  { src: "/videos/hero-03.mp4", poster: "/videos/hero-03.jpg", legenda: "Modelos disponíveis na loja" },
  { src: "/videos/hero-04.mp4", poster: "/videos/hero-04.jpg", legenda: "Mobilidade elétrica no dia a dia" },
  { src: "/videos/hero-05.mp4", poster: "/videos/hero-05.jpg", legenda: "Passeando pela cidade" },
  { src: "/videos/hero-06.mp4", poster: "/videos/hero-06.jpg", legenda: "Adeus, posto de gasolina" },
  { src: "/videos/hero-07.mp4", poster: "/videos/hero-07.jpg", legenda: "Moto elétrica para o dia a dia" },
];
