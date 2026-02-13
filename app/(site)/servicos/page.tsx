import CtaButton from "@/components/site/cta-button";

export default function ServicosPage() {
  return (
    <section className="container section">
      <h1>Serviços</h1>
      <p className="muted">Busdoor e Outdoor com explicação clara de formatos, prazos e operação.</p>

      <div className="card-grid">
        <article className="card">
          <h2>Busdoor</h2>
          <p>
            Formato aplicado na traseira de ônibus, ideal para frequência e
            alcance urbano contínuo.
          </p>
          <p>
            <strong>Prazos:</strong> 7 a 12 dias entre briefing, produção e
            entrada em circulação.
          </p>
        </article>

        <article className="card">
          <h2>Outdoor</h2>
          <p>
            Painéis em vias estratégicas para impacto e reconhecimento rápido de
            marca.
          </p>
          <p>
            <strong>Prazos:</strong> reserva de ponto + impressão + instalação
            em ciclo de 10 a 15 dias.
          </p>
        </article>
      </div>

      <article className="card">
        <h2>Como funciona a contratação</h2>
        <ol>
          <li>Briefing e objetivo comercial.</li>
          <li>Plano de cobertura e investimento.</li>
          <li>Aprovação, produção e instalação.</li>
          <li>Comprovação fotográfica e acompanhamento.</li>
        </ol>
      </article>

      <CtaButton />
    </section>
  );
}
