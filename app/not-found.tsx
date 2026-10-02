import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>Страница не найдена</h1>
        <p className="lead">Проверьте адрес или воспользуйтесь каталогом и поиском.</p>
        <p style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/" className="btn">
            На главную
          </Link>
          <Link href="/catalog/" className="btn btn-outline">
            Каталог
          </Link>
          <Link href="/search/" className="btn btn-outline">
            Поиск
          </Link>
        </p>
      </div>
    </section>
  );
}
