import { company } from "@/content/company";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    url: company.siteUrl,
    email: company.email,
    telephone: [company.phones.sales.href.replace("tel:", ""), company.phones.general.href.replace("tel:", "")],
    foundingDate: String(company.foundedYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: company.hq.city,
      streetAddress: company.hq.address,
      addressCountry: "RU",
    },
    description: company.description,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
