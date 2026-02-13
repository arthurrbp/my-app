import CtaButton from "@/components/site/cta-button";

export default function ContatoPage() {
  return (
    <section className="container section">
      <h1>Contato</h1>
      <p className="muted">Fale com a equipe pelo canal que preferir.</p>

      <div className="card-grid">
        <article className="card">
          <h2>WhatsApp</h2>
          <p>(11) 99999-0000</p>
          <CtaButton href="https://wa.me/5511999990000" >Abrir WhatsApp</CtaButton>
        </article>

        <article className="card">
          <h2>E-mail</h2>
          <p>contato@focooh.com</p>
        </article>
      </div>

      <form className="card form-grid">
        <label>
          Nome
          <input type="text" name="name" placeholder="Seu nome" />
        </label>
        <label>
          Empresa
          <input type="text" name="company" placeholder="Nome da empresa" />
        </label>
        <label>
          Telefone
          <input type="tel" name="phone" placeholder="(11) 99999-9999" />
        </label>
        <label>
          Mensagem
          <textarea name="message" rows={4} placeholder="Como podemos ajudar?" />
        </label>
        <button className="cta-button" type="submit">
          Pedir orçamento
        </button>
      </form>
    </section>
  );
}
