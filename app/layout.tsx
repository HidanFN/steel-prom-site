import type { Metadata } from "next";
import { Manrope, Cuprum } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/content/company";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const cuprum = Cuprum({
  subsets: ["latin", "cyrillic"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://steel-prom.ru"),
  title: {
    default: `${company.shortName} — ${company.tagline}`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: company.shortName,
    title: `${company.shortName} — ${company.tagline}`,
    description: company.description,
    images: [{ url: "https://steel-prom.ru/i/slider/1/01.jpg", width: 1200, height: 630, alt: company.shortName }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${cuprum.variable}`}>
        <JsonLd />
        <a className="skip-link" href="#main">
          К содержанию
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
