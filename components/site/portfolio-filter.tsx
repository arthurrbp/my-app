"use client";

import { useMemo, useState } from "react";
import CtaButton from "@/components/site/cta-button";

type CaseItem = {
  title: string;
  city: string;
  type: "busdoor" | "outdoor";
};

const cases: CaseItem[] = [
  { title: "Campanha Varejo Centro", city: "Campinas", type: "busdoor" },
  { title: "Lançamento de Condomínio", city: "Sorocaba", type: "outdoor" },
  { title: "Ação de Volta às Aulas", city: "São Paulo", type: "busdoor" },
  { title: "Campanha de Saúde", city: "Jundiaí", type: "outdoor" },
];

export default function PortfolioFilter() {
  const [filter, setFilter] = useState<"todos" | "busdoor" | "outdoor">("todos");

  const filteredCases = useMemo(() => {
    if (filter === "todos") {
      return cases;
    }

    return cases.filter((item) => item.type === filter);
  }, [filter]);

  return (
    <section className="container section">
      <h1>Portfólio e cases</h1>
      <p className="muted">Galeria com filtro simples por formato.</p>

      <div className="filter-row">
        {(["todos", "busdoor", "outdoor"] as const).map((type) => (
          <button
            key={type}
            type="button"
            className={filter === type ? "pill active" : "pill"}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filteredCases.map((item) => (
          <article key={item.title} className="card">
            <div className="photo-placeholder" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>
              {item.city} • {item.type}
            </p>
          </article>
        ))}
      </div>

      <CtaButton />
    </section>
  );
}
