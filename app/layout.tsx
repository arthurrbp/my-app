import "./globals.css";

export const metadata = {
  title: "Focooh",
  description: "Publicidade e Propaganda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
