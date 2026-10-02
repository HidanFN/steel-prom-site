import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/content/company";

export const metadata: Metadata = { title: "Пользовательское соглашение" };

export default function AgreementPage() {
  return (
    <>
      <PageHero
        title="Пользовательское соглашение"
        crumbs={[{ href: "/", label: "Главная" }, { label: "Соглашение" }]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p>
            Используя сайт {company.shortName}, вы соглашаетесь с правилами публикации информации и
            отправки заявок. Материалы каталога носят ознакомительный характер. Цены и наличие
            подтверждает менеджер.
          </p>
          <p>
            Обратная связь: <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
          <p>Замените этот текст утверждённой редакцией юриста компании.</p>
        </div>
      </section>
    </>
  );
}
