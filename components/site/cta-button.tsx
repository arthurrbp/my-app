import Link from "next/link";

export default function CtaButton({
  href = "/contato",
  children = "Pedir orçamento",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={href} className="cta-button">
      {children}
    </Link>
  );
}
