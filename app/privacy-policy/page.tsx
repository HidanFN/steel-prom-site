import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/content/company";

export const metadata: Metadata = { title: "Политика обработки персональных данных" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Политика обработки персональных данных"
        crumbs={[{ href: "/", label: "Главная" }, { label: "Политика" }]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p>
            Оператор: {company.legalName}, {company.hq.fullAddress}, {company.email}.
          </p>
          <p>
            Персональные данные (ФИО, телефон, email, название компании, текст заявки) обрабатываются
            только для ответа на запрос и подготовки коммерческого предложения. Срок хранения — до
            завершения переписки и требований закона.
          </p>
          <p>
            Вы можете запросить уточнение, исправление или удаление данных по адресу {company.email}{" "}
            или по телефону <a href={company.phones.general.href}>{company.phones.general.display}</a>.
          </p>
          <p>Текст политики нужно заменить юридической версией заказчика перед запуском.</p>
        </div>
      </section>
    </>
  );
}
