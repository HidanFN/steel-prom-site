import { categories } from "@/content/catalog";
import { directions } from "@/content/directions";
import { news, articles } from "@/content/news";
import { projects } from "@/content/portfolio";
import { companyMenu } from "@/content/navigation";

export type SearchItem = {
  title: string;
  href: string;
  excerpt: string;
  group: string;
};

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [
    { title: "Главная", href: "/", excerpt: "СтальПром — грузоподъёмное оборудование", group: "Страницы" },
    { title: "Каталог", href: "/catalog/", excerpt: "Стропы, канаты, стяжные системы, оборудование", group: "Страницы" },
    { title: "Контакты", href: "/contacts/", excerpt: "Телефоны, филиалы, форма заявки", group: "Страницы" },
    { title: "Поставщикам", href: "/suppliers/", excerpt: "Сотрудничество с поставщиками сырья", group: "Страницы" },
    { title: "Политика обработки персональных данных", href: "/privacy-policy/", excerpt: "Персональные данные", group: "Документы" },
    { title: "Пользовательское соглашение", href: "/user-agreement/", excerpt: "Условия использования сайта", group: "Документы" },
  ];

  for (const c of categories) {
    items.push({ title: c.title, href: `/catalog/${c.slug}/`, excerpt: c.description, group: "Каталог" });
    for (const s of c.children) {
      items.push({
        title: s.title,
        href: `/catalog/${c.slug}/${s.slug}/`,
        excerpt: s.description,
        group: "Каталог",
      });
      for (const p of s.products) {
        items.push({
          title: p.title,
          href: `/catalog/${c.slug}/${s.slug}/${p.slug}/`,
          excerpt: p.description,
          group: "Товары",
        });
      }
    }
  }

  for (const d of directions) {
    items.push({ title: d.title, href: `/directions/${d.slug}/`, excerpt: d.lead, group: "Направления" });
  }

  for (const m of companyMenu) {
    items.push({ title: m.label, href: m.href, excerpt: "Раздел о компании", group: "О компании" });
  }

  for (const n of news) {
    items.push({ title: n.title, href: `/company/news/${n.slug}/`, excerpt: n.excerpt, group: "Новости" });
  }
  for (const n of articles) {
    items.push({ title: n.title, href: `/company/articles/${n.slug}/`, excerpt: n.excerpt, group: "Статьи" });
  }
  for (const p of projects) {
    items.push({
      title: p.title,
      href: `/company/portfolio/${p.slug}/`,
      excerpt: p.summary,
      group: "Портфолио",
    });
  }

  return items;
}

export function searchItems(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return buildSearchIndex().filter(
    (item) =>
      item.title.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q),
  );
}
