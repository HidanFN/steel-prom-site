export type Branch = {
  slug: string;
  city: string;
  isHq?: boolean;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  note?: string;
};

/** Актуальный список с селектора филиалов steel-prom.ru (без Волгограда — он был только в старом тексте). */
export const branches: Branch[] = [
  {
    slug: "beloretsk",
    city: "Белорецк",
    isHq: true,
    address: "ул. Блюхера, д. 139",
    phone: "+7 (34792) 4-19-00",
    phoneHref: "tel:+73479241900",
    email: "bel-zapros@steel-prom.ru",
    note: "Головное предприятие и офис продаж",
  },
  {
    slug: "ekaterinburg",
    city: "Екатеринбург",
    address: "Склад временного хранения (адрес уточняется)",
    phone: "8 (800) 700-34-56",
    phoneHref: "tel:+78007003456",
    email: "bel-zapros@steel-prom.ru",
  },
  {
    slug: "kazan",
    city: "Казань",
    address: "Производственная площадка и склад (адрес уточняется)",
    phone: "8 (800) 700-34-56",
    phoneHref: "tel:+78007003456",
    email: "bel-zapros@steel-prom.ru",
    note: "Вторая производственная площадка",
  },
  {
    slug: "naberezhnye-chelny",
    city: "Набережные Челны",
    address: "Склад временного хранения (адрес уточняется)",
    phone: "8 (800) 700-34-56",
    phoneHref: "tel:+78007003456",
    email: "bel-zapros@steel-prom.ru",
  },
  {
    slug: "saint-petersburg",
    city: "Санкт-Петербург",
    address: "Склад временного хранения (адрес уточняется)",
    phone: "8 (800) 700-34-56",
    phoneHref: "tel:+78007003456",
    email: "bel-zapros@steel-prom.ru",
  },
  {
    slug: "surgut",
    city: "Сургут",
    address: "Склад временного хранения (адрес уточняется)",
    phone: "8 (800) 700-34-56",
    phoneHref: "tel:+78007003456",
    email: "bel-zapros@steel-prom.ru",
  },
  {
    slug: "ufa",
    city: "Уфа",
    address: "Склад временного хранения (адрес уточняется)",
    phone: "8 (800) 700-34-56",
    phoneHref: "tel:+78007003456",
    email: "bel-zapros@steel-prom.ru",
  },
  {
    slug: "chelyabinsk",
    city: "Челябинск",
    address: "Склад временного хранения (адрес уточняется)",
    phone: "8 (800) 700-34-56",
    phoneHref: "tel:+78007003456",
    email: "bel-zapros@steel-prom.ru",
  },
  {
    slug: "vladivostok",
    city: "Владивосток",
    address: "Склад временного хранения (адрес уточняется)",
    phone: "8 (800) 700-34-56",
    phoneHref: "tel:+78007003456",
    email: "bel-zapros@steel-prom.ru",
  },
];

export function getBranch(slug?: string | null) {
  if (!slug) return branches[0];
  return branches.find((b) => b.slug === slug) ?? branches[0];
}
