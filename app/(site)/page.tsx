import CtaButton from "@/components/site/cta-button";

export default function Home() {
  return (
    <>
      <section className="hero container section">
        <p className="kicker">MÍDIA KIT</p>
        <h1>Busdoor e Outdoor para marcas que precisam aparecer.</h1>
        <p>
          Planejamento, produção e veiculação com foco em presença constante nas
          ruas e resultado comercial.
        </p>
        <CtaButton />
      </section>

      <section className="container section">
        <h2>Serviços principais</h2>
        <div className="card-grid">
          <article className="card">
            <h3>Busdoor</h3>
            <p>Alta circulação, cobertura de bairros e frequência diária.</p>
          </article>
          <article className="card">
            <h3>Outdoor</h3>
            <p>Impacto visual em pontos estratégicos de grande tráfego.</p>
          </article>
          <article className="card">
            <h3>Gestão completa</h3>
            <p>Da criação da arte à comprovação fotográfica da campanha.</p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>Mini portfólio</h2>
        <div className="card-grid">
          <article className="card">
            <div className="photo-placeholder" aria-hidden="true" />
            <p>Campanha local com 20 ônibus em Campinas.</p>
          </article>
          <article className="card">
            <div className="photo-placeholder" aria-hidden="true" />
            <p>Outdoor de lançamento em corredor comercial.</p>
          </article>
        </div>
      </section>

      <section className="container section">
        <h2>Prova social</h2>
        <p className="quote">
          “A Focooh elevou nossa visibilidade em 30 dias e gerou mais visitas na
          loja física.”
        </p>
        <p className="muted">— Cliente do segmento varejista</p>
        <CtaButton />
      </section>

      <section className="container section">
        <h2>Atendemos em</h2>
        <p>São Paulo, Campinas, Sorocaba, Jundiaí e região metropolitana.</p>
      </section>
    </>
  );
}
