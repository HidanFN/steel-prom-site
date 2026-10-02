import Link from "next/link";

type Crumb = { href?: string; label: string };

export function PageHero({
  title,
  text,
  crumbs,
}: {
  title: string;
  text?: string;
  crumbs?: Crumb[];
}) {
  return (
    <div className="page-hero">
      <div className="container">
        {crumbs && crumbs.length > 0 && (
          <nav className="breadcrumb" aria-label="Хлебные крошки">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`}>
                {i > 0 && " / "}
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}
