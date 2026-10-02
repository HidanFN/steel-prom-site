export type Direction = {
  slug: string;
  title: string;
  lead: string;
  image: string;
  points: string[];
  catalogHref: string;
};

export const directions: Direction[] = [
  {
    slug: "stropy",
    title: "Стропы и лента из полиэстера",
    lead: "Собственное текстильное производство. Сертифицированная продукция, контроль качества на каждом этапе.",
    image: "https://steel-prom.ru/i/slider/1/02.jpg",
    points: [
      "Производственная мощность — один из крупнейших объёмов выпуска в РФ",
      "Вся продукция сертифицирована и задекларирована",
      "Многоуровневый контроль качества",
      "Доставка по филиальной сети",
    ],
    catalogHref: "/catalog/stropy/",
  },
  {
    slug: "kanaty",
    title: "Канаты",
    lead: "Стальные и полипропиленовые канаты. Отгрузка от 1 метра, сжатые сроки.",
    image: "https://steel-prom.ru/i/slider/1/03.jpg",
    points: [
      "Более 500 т каната в наличии и в ассортименте",
      "Реализация от 1 м",
      "Сжатые сроки отгрузки",
      "Сортамент ГОСТ, ТУ и DIN",
    ],
    catalogHref: "/catalog/kanaty/",
  },
  {
    slug: "stiazhnye-sistemy",
    title: "Стяжные системы и автотросы",
    lead: "Текстильная лента собственного производства, ремни и буксировочные тросы.",
    image: "https://steel-prom.ru/i/slider/1/04.jpg",
    points: [
      "Собственное производство текстильной ленты",
      "Возможность изготовления по европейскому стандарту",
      "Многоуровневый контроль качества",
    ],
    catalogHref: "/catalog/stiazhnye-sistemy/",
  },
  {
    slug: "oborudovanie",
    title: "Оборудование",
    lead: "Траверсы, захваты, тара и нестандартные изделия по техническому заданию.",
    image: "https://steel-prom.ru/i/slider/1/05.jpg",
    points: [
      "Собственные производственные мощности",
      "Полный производственный цикл",
      "Изготовление оборудования по ТЗ и чертежам заказчика",
    ],
    catalogHref: "/catalog/oborudovanie/",
  },
  {
    slug: "pdm",
    title: "Погрузочно-доставочные машины",
    lead: "Программа импортозамещения. Простая конструкция, доступное обслуживание.",
    image: "https://steel-prom.ru/i/slider/1/06.jpg",
    points: [
      "Меньшие габариты при сохранении грузоподъёмности",
      "Доступность технического обслуживания",
      "Высокие параметры производительности",
    ],
    catalogHref: "/catalog/oborudovanie/",
  },
];

export function getDirection(slug: string) {
  return directions.find((d) => d.slug === slug);
}
