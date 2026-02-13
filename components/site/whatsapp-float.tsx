import Link from "next/link";

export default function WhatsAppFloat() {
  return (
    <Link
      className="whatsapp-float"
      href="https://wa.me/5511999990000?text=Ol%C3%A1!%20Quero%20pedir%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      WhatsApp
    </Link>
  );
}
