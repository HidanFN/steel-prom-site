export type Product = {
  slug: string;
  title: string;
  description: string;
  image: string;
  gost?: string;
  capacity?: string;
  specs?: string[];
};

export type Subcategory = {
  slug: string;
  title: string;
  description: string;
  image: string;
  products: Product[];
};

export type Category = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  children: Subcategory[];
};

const IMG = {
  stropy: "https://steel-prom.ru/i/slider/1/02.jpg",
  kanaty: "https://steel-prom.ru/i/slider/1/03.jpg",
  remni: "https://steel-prom.ru/i/slider/1/04.jpg",
  equipment: "https://steel-prom.ru/i/slider/1/05.jpg",
  lenta: "https://steel-prom.ru/i/slider/1/07.jpg",
  pdm: "https://steel-prom.ru/i/slider/1/06.jpg",
  sttr: "https://steel-prom.ru/i/catalog/8656af1134a7e50d421944e4c1e9d354_xAk1KBU.jpg",
  odnoraz: "https://steel-prom.ru/i/catalog/891d0f4355511631ee3c4e7fa40633d1_prmLNzX.jpg",
  st4: "https://steel-prom.ru/i/catalog/789365397fa888b1d5e79c03ee99e53b_9t6Buoy.jpg",
  st2: "https://steel-prom.ru/i/slider/1/02.jpg",
  st1: "https://steel-prom.ru/i/slider/1/02.jpg",
  lks: "https://steel-prom.ru/i/slider/1/03.jpg",
  grejfer:
    "https://steel-prom.ru/i/publications/6/0B839F7E-C143-4D85-939D-D5860C6A6E1D.jpg",
};

export const PRICE_ON_REQUEST = "Цена предоставляется по запросу";

export const categories: Category[] = [
  {
    slug: "stropy",
    title: "Стропы и лента из полиэстера",
    shortTitle: "Стропы",
    description:
      "Текстильные, канатные и цепные стропы собственного производства. Изготовление по ГОСТ, ТУ и индивидуальному заказу.",
    image: IMG.stropy,
    children: [
      {
        slug: "lenta-poliester",
        title: "Лента из полиэстера ЛТПС",
        description: "Лента ЛТПС для производства строп. Различные ширины и цвета.",
        image: IMG.lenta,
        products: [
          {
            slug: "lenta-ltps",
            title: "Лента ЛТПС полиэстеровая",
            description:
              "Текстильная лента для пошива грузовых строп. Собственное ткацкое производство, контроль ширины и разрывной нагрузки.",
            image: IMG.lenta,
            gost: "ТУ производителя",
            specs: ["Материал: полиэстер (PES)", "Ширина по запросу", "Цвета: стандартные и заказные"],
          },
        ],
      },
      {
        slug: "lentochnye-stropy",
        title: "Текстильные ленточные стропы",
        description: "Стропы СТП, СТК, 1СТ–4СТ для бережного подъёма грузов.",
        image: IMG.stropy,
        products: [
          {
            slug: "setka-gruzovaya-sttr",
            title: "Сетка грузовая СТТр",
            description:
              "Грузовая сетка для подъёма и перемещения штучных и пакетированных грузов, в том числе при вертолётных работах.",
            image: IMG.sttr,
            capacity: "до 20 т",
            specs: ["Исполнение: сетка", "Документация в комплекте"],
          },
          {
            slug: "strop-tekstilnyy-odnorazovyy",
            title: "Строп текстильный одноразовый",
            description:
              "Петлевые и кольцевые одноразовые стропы для одной операции погрузки-разгрузки. Каждый комплект сопровождается документацией.",
            image: IMG.odnoraz,
            gost: "ТУ",
          },
          {
            slug: "strop-4st",
            title: "Строп текстильный ленточный четырёхветвевой 4СТ",
            description: "Для грузов, требующих равномерного захвата в четырёх точках.",
            image: IMG.st4,
            gost: "ГОСТ 25573 / ТУ",
            capacity: "по заявке",
          },
          {
            slug: "strop-2st",
            title: "Строп текстильный ленточный двухветвевой 2СТ",
            description: "Универсальный строп для подъёма с двух точек крепления.",
            image: IMG.st2,
            gost: "ГОСТ 25573 / ТУ",
            capacity: "до 32 т",
          },
          {
            slug: "strop-1st",
            title: "Строп текстильный ленточный одноветвевой 1СТ",
            description: "Одноветвевой ленточный строп для вертикального подъёма.",
            image: IMG.st1,
            gost: "ГОСТ 25573 / ТУ",
            capacity: "до 32 т",
          },
          {
            slug: "strop-stk",
            title: "Строп текстильный кольцевой СТК",
            description: "Кольцевой строп для захвата и обвязки груза.",
            image: IMG.stropy,
          },
          {
            slug: "strop-stp",
            title: "Строп текстильный петлевой СТП",
            description: "Петлевой строп, в том числе по индивидуальным длинам.",
            image: IMG.stropy,
          },
        ],
      },
      {
        slug: "tsepnye-stropy",
        title: "Цепные стропы",
        description: "Стропы из легированной цепи классов прочности 8 и 10.",
        image: IMG.stropy,
        products: [
          {
            slug: "strop-cepnoy-1sc",
            title: "Строп цепной 1СЦ",
            description: "Одноветвевой цепной строп для вертикального подъёма.",
            image: IMG.stropy,
            gost: "ГОСТ 30441 / ТУ",
          },
          {
            slug: "strop-cepnoy-4sc",
            title: "Строп цепной 4СЦ",
            description: "Четырёхветвевой цепной строп для крупногабаритных грузов.",
            image: IMG.stropy,
            gost: "ГОСТ 30441 / ТУ",
          },
        ],
      },
      {
        slug: "kanatnye-stropy",
        title: "Канатные стропы",
        description: "Стропы из стального каната, в том числе большой грузоподъёмности.",
        image: IMG.kanaty,
        products: [
          {
            slug: "lentochnyi-kanatnyi-strop-lks",
            title: "Ленточный канатный строп ЛКС",
            description: "Комбинированный строп для специальных схем строповки.",
            image: IMG.lks,
          },
          {
            slug: "strop-kanatnyy-usk",
            title: "Строп канатный УСК",
            description: "Универсальный строп канатный из каната диаметром до 72 мм.",
            image: IMG.kanaty,
            capacity: "канат до Ø 72 мм",
          },
        ],
      },
      {
        slug: "kruglopriadnye",
        title: "Круглопрядные текстильные стропы",
        description: "Мягкие круглопрядные стропы высокой грузоподъёмности.",
        image: IMG.stropy,
        products: [
          {
            slug: "strop-kruglopryadnyy",
            title: "Строп круглопрядный",
            description: "Круглопрядный строп для бережного подъёма с высокой разрывной нагрузкой.",
            image: IMG.stropy,
          },
        ],
      },
      {
        slug: "montazhnye-polotentsa",
        title: "Полотенца монтажные",
        description: "Монтажные полотенца для подъёма и перемещения оборудования.",
        image: IMG.stropy,
        products: [
          {
            slug: "polotence-montazhnoe",
            title: "Полотенце монтажное",
            description: "Текстильное монтажное полотенце по размерам заказчика.",
            image: IMG.stropy,
          },
        ],
      },
      {
        slug: "spetsialnyie-stropyi",
        title: "Специальные стропы",
        description: "Нестандартные схемы и материалы по техническому заданию.",
        image: IMG.stropy,
        products: [
          {
            slug: "strop-specialnyy",
            title: "Строп специальный по ТЗ",
            description: "Разработка и изготовление строп нестандартной конструкции.",
            image: IMG.stropy,
          },
        ],
      },
      {
        slug: "komplektuiushchie",
        title: "Комплектующие к стропам и канатам",
        description: "Скобы, коуши, зажимы, крюки и соединительные элементы.",
        image: IMG.stropy,
        products: [
          {
            slug: "skoba-gruzovaya",
            title: "Скоба грузовая",
            description: "Грузовые скобы различных классов прочности.",
            image: IMG.stropy,
          },
        ],
      },
    ],
  },
  {
    slug: "kanaty",
    title: "Канаты",
    shortTitle: "Канаты",
    description:
      "Стальные канаты ГОСТ, ТУ и DIN, полипропиленовые канаты. Реализация от 1 м, более 500 т в наличии.",
    image: IMG.kanaty,
    children: [
      {
        slug: "gost",
        title: "Стальной канат ГОСТ",
        description: "Канаты по российским государственным стандартам.",
        image: IMG.kanaty,
        products: [
          {
            slug: "kanat-gost-2688",
            title: "Канат стальной ГОСТ 2688",
            description: "Двойной свивки, конструкции 6×19(1+6+12)+1 о.с.",
            image: IMG.kanaty,
            gost: "ГОСТ 2688",
          },
          {
            slug: "kanat-gost-7668",
            title: "Канат стальной ГОСТ 7668",
            description: "Канат двойной свивки с органическим сердечником.",
            image: IMG.kanaty,
            gost: "ГОСТ 7668",
          },
        ],
      },
      {
        slug: "tu",
        title: "Стальной канат ТУ",
        description: "Канаты по техническим условиям производителя.",
        image: IMG.kanaty,
        products: [
          {
            slug: "kanat-tu",
            title: "Канат стальной по ТУ",
            description: "Изготовление и поставка каната по согласованным ТУ.",
            image: IMG.kanaty,
          },
        ],
      },
      {
        slug: "din",
        title: "Стальной канат DIN",
        description: "Европейский сортамент стальных канатов.",
        image: IMG.kanaty,
        products: [
          {
            slug: "kanat-din-3055",
            title: "Канат стальной DIN 3055",
            description: "Канат по европейскому стандарту DIN.",
            image: IMG.kanaty,
            gost: "DIN 3055",
          },
        ],
      },
      {
        slug: "kanaty-polipropilenovye",
        title: "Канаты полипропиленовые",
        description: "Лёгкие синтетические канаты для такелажа и обвязки.",
        image: IMG.lenta,
        products: [
          {
            slug: "kanat-pp",
            title: "Канат полипропиленовый",
            description: "Полипропиленовый канат различных диаметров.",
            image: IMG.lenta,
          },
        ],
      },
    ],
  },
  {
    slug: "stiazhnye-sistemy",
    title: "Стяжные системы и автотросы",
    shortTitle: "Стяжные системы",
    description: "Текстильные стяжные ремни, системы Faster, буксировочные тросы.",
    image: IMG.remni,
    children: [
      {
        slug: "stiazhnye-remni",
        title: "Стяжной ремень текстильный",
        description: "Ремни для крепления грузов на транспорте.",
        image: IMG.remni,
        products: [
          {
            slug: "remen-styazhnoy",
            title: "Ремень стяжной текстильный",
            description: "Комплект лента + храповик. Изготовление по длине заказчика.",
            image: IMG.remni,
          },
        ],
      },
      {
        slug: "styazhnyie-remni-faster",
        title: "Стяжные ремни Faster",
        description: "Стяжные системы Faster европейского образца.",
        image: IMG.remni,
        products: [
          {
            slug: "remen-faster",
            title: "Стяжной ремень Faster",
            description: "Система крепления груза Faster.",
            image: IMG.remni,
          },
        ],
      },
      {
        slug: "tros-avtomobilnyij-buksirovochnyij",
        title: "Трос автомобильный буксировочный",
        description: "Буксировочные тросы для легкового и коммерческого транспорта.",
        image: IMG.remni,
        products: [
          {
            slug: "tros-buksir",
            title: "Трос буксировочный",
            description: "Автомобильный буксировочный трос с крюками.",
            image: IMG.remni,
          },
        ],
      },
    ],
  },
  {
    slug: "oborudovanie",
    title: "Оборудование",
    shortTitle: "Оборудование",
    description:
      "Траверсы, захваты, грузоподъёмная тара и нестандартное оборудование по чертежам заказчика.",
    image: IMG.equipment,
    children: [
      {
        slug: "traversy",
        title: "Траверсы",
        description: "Линейные, пространственные и специальные траверсы.",
        image: IMG.equipment,
        products: [
          {
            slug: "traversa-lineynaya",
            title: "Траверса линейная",
            description: "Линейная траверса под грузоподъёмность и габарит груза заказчика.",
            image: IMG.equipment,
          },
        ],
      },
      {
        slug: "zahvaty",
        title: "Захваты",
        description: "Захваты для листа, труб, рулонов и специальных грузов.",
        image: IMG.equipment,
        products: [
          {
            slug: "zahvat-listovoy",
            title: "Захват листовой",
            description: "Захват для подъёма листового металла.",
            image: IMG.equipment,
          },
        ],
      },
      {
        slug: "tara",
        title: "Грузоподъёмная тара",
        description: "Контейнеры, ящики и тара для хранения и перемещения.",
        image: IMG.equipment,
        products: [
          {
            slug: "tara-gruzovaya",
            title: "Тара грузоподъёмная",
            description: "Производство тары по ТЗ: объём, нагрузка, схема строповки.",
            image: IMG.equipment,
          },
        ],
      },
      {
        slug: "grejfer",
        title: "Грейфер",
        description: "Грейферы для сыпучих и кусковых грузов.",
        image: IMG.grejfer,
        products: [
          {
            slug: "grejfer-dvuhchelustnoy",
            title: "Грейфер двухчелюстной",
            description: "Грейфер по техническому заданию заказчика.",
            image: IMG.grejfer,
          },
        ],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getSubcategory(categorySlug: string, subSlug: string) {
  return getCategory(categorySlug)?.children.find((s) => s.slug === subSlug);
}

export function getProduct(categorySlug: string, subSlug: string, productSlug: string) {
  return getSubcategory(categorySlug, subSlug)?.products.find((p) => p.slug === productSlug);
}

export function allProducts() {
  return categories.flatMap((c) =>
    c.children.flatMap((s) =>
      s.products.map((p) => ({
        ...p,
        categorySlug: c.slug,
        categoryTitle: c.title,
        subcategorySlug: s.slug,
        subcategoryTitle: s.title,
        href: `/catalog/${c.slug}/${s.slug}/${p.slug}/`,
      })),
    ),
  );
}
