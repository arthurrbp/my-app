import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/site/whatsapp-float";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
