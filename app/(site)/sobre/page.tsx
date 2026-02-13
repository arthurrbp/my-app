import CtaButton from "@/components/site/cta-button";

export default function SobrePage() {
  return (
    <section className="container section">
      <h1>Sobre a Focooh</h1>
      <article className="card">
        <h2>Quem é a Focooh</h2>
        <p>
          Somos uma operação especializada em mídia exterior para marcas que
          precisam de presença constante em rotas urbanas e corredores de alto
          fluxo.
        </p>
      </article>

      <div className="card-grid">
        <article className="card">
          <h3>Diferencial</h3>
          <p>
            Atendimento consultivo, plano tático por região e acompanhamento
            próximo da campanha.
          </p>
        </article>
        <article className="card">
          <h3>Área de atuação</h3>
          <p>Atuação no interior e capital de São Paulo, com expansão regional.</p>
        </article>
      </div>

      <CtaButton />
    </section>
  );
}
