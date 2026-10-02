import { categories } from "./catalog";
import { directions } from "./directions";

export const companyMenu = [
  { href: "/company/", label: "О компании" },
  { href: "/company/production/", label: "Производство" },
  { href: "/company/history/", label: "История" },
  { href: "/company/portfolio/", label: "Портфолио" },
  { href: "/company/awards/", label: "Награды" },
  { href: "/company/vacancy/", label: "Вакансии" },
  { href: "/company/documents/", label: "Разрешительная документация" },
  { href: "/company/gallery/", label: "Галерея" },
  { href: "/company/news/", label: "Новости" },
  { href: "/company/articles/", label: "Статьи" },
];

export const navItems = [
  {
    href: "/catalog/",
    label: "Каталог",
    children: categories.map((c) => ({
      href: `/catalog/${c.slug}/`,
      label: c.shortTitle,
    })),
  },
  {
    href: "/directions/",
    label: "Направления",
    children: directions.map((d) => ({
      href: `/directions/${d.slug}/`,
      label: d.title,
    })),
  },
  {
    href: "/company/",
    label: "О компании",
    children: companyMenu,
  },
  { href: "/suppliers/", label: "Поставщикам" },
  { href: "/contacts/", label: "Контакты" },
];
