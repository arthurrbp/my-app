import CtaButton from "@/components/site/cta-button";

const steps = [
  "Diagnóstico rápido da marca e público-alvo.",
  "Definição dos formatos (busdoor, outdoor ou mix).",
  "Seleção de rotas e pontos com foco em circulação.",
  "Produção das peças com validação de qualidade.",
  "Instalação, monitoramento e relatório fotográfico.",
];

export default function ComoFuncionaPage() {
  return (
    <section className="container section">
      <h1>Como funciona</h1>
      <p className="muted">Processo simples para colocar sua marca na rua rapidamente.</p>

      <div className="timeline">
        {steps.map((step, index) => (
          <article key={step} className="card timeline-item">
            <span className="step">{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>

      <CtaButton />
    </section>
  );
}
