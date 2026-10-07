import Link from "next/link";
import { company } from "@/content/company";
import { directions } from "@/content/directions";
import { projects } from "@/content/portfolio";
import { categories } from "@/content/catalog";
import { news } from "@/content/news";
import { RemoteImage } from "@/components/RemoteImage";
import { RequestButton } from "@/components/RequestButton";
import styles from "./page.module.css";

const reasons = [
  {
    title: "Своё производство",
    text: `${company.stats.workshops} цеха и ${company.stats.sites} площадки (${company.productionSites.join(" и ")}). Полный цикл — от ленты до нестандартного оборудования.`,
  },
  {
    title: "ГОСТ, ТУ и DIN",
    text: "Сертифицированная продукция, контроль на каждом этапе. Подберём позицию по стандарту или чертежу.",
  },
  {
    title: "Конструкторское бюро",
    text: "Нестандартные траверсы, захваты и тара по техническому заданию заказчика.",
  },
  {
    title: "Филиальная сеть",
    text: `${company.stats.branches} филиалов по России. Отгрузка со склада ближе к объекту.`,
  },
];

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
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{company.legalName}</p>
            <h1>{company.tagline}</h1>
            <p>{company.mission}</p>
            <div className={styles.heroActions}>
              <Link href="/catalog/" className="btn btn-light">
                Перейти в каталог
              </Link>
              <RequestButton formId="home-hero">Отправить запрос</RequestButton>
            </div>
          </div>
          <div className={styles.heroDirs} aria-label="Направления">
            {directions.slice(0, 4).map((d) => (
              <Link key={d.slug} href={`/directions/${d.slug}/`} className={styles.heroDir}>
                <span className={styles.heroDirMedia}>
                  <RemoteImage src={d.image} alt="" fill sizes="88px" />
                </span>
                <span>{d.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.statsBand}>
        <div className={`container ${styles.stats}`}>
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
          <div className={styles.stat}>
            <b>{company.stats.workshops}</b>
            цеха собственного производства
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-kicker">Продукция</p>
          <h2>Каталог</h2>
          <div className={styles.tiles}>
            {categories.map((c, i) => (
              <Link
                key={c.slug}
                href={`/catalog/${c.slug}/`}
                className={`${styles.tile} ${i < 2 ? styles.tileWide : ""}`}
              >
                <RemoteImage src={c.image} alt={c.title} fill sizes="560px" />
                <span className={styles.tileCaption}>{c.shortTitle}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <p className="section-kicker">О предприятии</p>
          <h2>Почему СтальПром</h2>
          <div className={styles.reasons}>
            {reasons.map((item) => (
              <article key={item.title} className={styles.reason}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-kicker">Практика</p>
          <h2>Наши проекты</h2>
          <p className="lead">Примеры работ конструкторского бюро и производства.</p>
          <div className="grid-cards">
            {projects.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/company/portfolio/${p.slug}/`} className="card">
                <div className="card-img">
                  <RemoteImage src={p.image} alt={p.title} fill sizes="400px" />
                </div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <span className="card-meta">
                    {p.date} · {p.industry}
                  </span>
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

      <section className="section section-muted">
        <div className="container">
          <p className="section-kicker">События</p>
          <h2>Новости</h2>
          <div className="grid-cards">
            {news.slice(0, 3).map((n) => (
              <Link key={n.slug} href={`/company/news/${n.slug}/`} className="card">
                <div className="card-img">
                  <RemoteImage src={n.image} alt={n.title} fill sizes="400px" />
                </div>
                <div className="card-body">
                  <time dateTime={n.dateIso}>{n.date}</time>
                  <h3>{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 22 }}>
            <Link href="/company/news/" className="btn btn-outline">
              Все новости
            </Link>
          </p>
        </div>
      </section>

      <section className={styles.industries}>
        <div className="container">
          <p className="section-kicker">Отрасли</p>
          <ul>
            {company.industries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
