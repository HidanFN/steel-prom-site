import Link from "next/link";
import { company } from "@/content/company";
import { directions } from "@/content/directions";
import { projects } from "@/content/portfolio";
import { categories } from "@/content/catalog";
import { RemoteImage } from "@/components/RemoteImage";
import { RequestButton } from "@/components/RequestButton";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <RemoteImage
          src="https://steel-prom.ru/i/slider/1/01.jpg"
          alt="Производственная площадка СтальПром"
          fill
          priority
          className={styles.heroImg}
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>{company.legalName}</p>
          <h1>{company.tagline}</h1>
          <p>{company.mission}</p>
          <div className={styles.heroActions}>
            <Link href="/catalog/" className="btn">
              Перейти в каталог
            </Link>
            <RequestButton formId="home-hero" light>
              Отправить запрос
            </RequestButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.stats}>
            <div className={styles.stat}>
              <b>{company.foundedYear}</b>
              год основания
            </div>
            <div className={styles.stat}>
              <b>{company.stats.catalogItems}</b>
              наименований в каталоге
            </div>
            <div className={styles.stat}>
              <b>{company.stats.branches}</b>
              филиалов по России
            </div>
            <div className={styles.stat}>
              <b>{company.stats.complexArea}</b>
              производственно-складской комплекс
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <h2>Направления</h2>
          <p className="lead">Четыре основные линейки и нестандартное оборудование по вашему ТЗ.</p>
          <div className={styles.dirGrid}>
            {directions.slice(0, 4).map((d) => (
              <Link key={d.slug} href={`/directions/${d.slug}/`} className={styles.dir}>
                <div className={styles.dirMedia}>
                  <RemoteImage src={d.image} alt="" fill sizes="240px" />
                </div>
                <div className={styles.dirBody}>
                  <h3>{d.title}</h3>
                  <p>{d.lead}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Каталог</h2>
          <div className="grid-cards">
            {categories.map((c) => (
              <Link key={c.slug} href={`/catalog/${c.slug}/`} className="card">
                <div className="card-img">
                  <RemoteImage src={c.image} alt={c.title} fill sizes="400px" />
                </div>
                <div className="card-body">
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <h2>Наши проекты</h2>
          <p className="lead">Примеры работ конструкторского бюро и производства.</p>
          <div className="grid-cards">
            {projects.map((p) => (
              <Link key={p.slug} href={`/company/portfolio/${p.slug}/`} className="card">
                <div className="card-img">
                  <RemoteImage src={p.image} alt={p.title} fill sizes="400px" />
                </div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p>
                    {p.date} · {p.industry}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 22 }}>
            <Link href="/company/portfolio/" className="btn btn-outline">
              Все проекты
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{company.legalName}</h2>
          <p className="lead">
            Один из производителей съёмного грузоподъёмного оборудования в России. Работаем с{" "}
            {company.foundedYear} года. Собственный конструкторский департамент, {company.stats.workshops} цеха,{" "}
            {company.stats.sites} производственные площадки ({company.productionSites.join(" и ")}
            ), комплекс {company.stats.complexArea}.
          </p>
          <p>
            <Link href="/company/">Подробнее о компании</Link>
          </p>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2>Нужен расчёт или прайс?</h2>
            <p>Цены предоставляются по запросу. Менеджер подберёт позицию по ГОСТ, ТУ или чертежу.</p>
          </div>
          <RequestButton formId="home-cta">Запросить цену</RequestButton>
        </div>
      </section>
    </>
  );
}
