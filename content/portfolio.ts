export type Project = {
  slug: string;
  title: string;
  date: string;
  dateIso: string;
  image: string;
  summary: string;
  industry: string;
};

export const projects: Project[] = [
  {
    slug: "pdm-atach-7",
    title: "Погрузочно-доставочная машина ПДМ «Атач-7»",
    date: "12 марта 2025",
    dateIso: "2025-03-12",
    image: "https://steel-prom.ru/i/publications/9/DDA80387-4F3E-4C5B-91E8-106A55FB40BD.jpg",
    summary:
      "Поставка погрузочно-доставочной машины для горных работ. Импортозамещающая конструкция, сервисное сопровождение.",
    industry: "Горнорудная отрасль",
  },
  {
    slug: "grejfer",
    title: "Грейфер для сыпучих грузов",
    date: "18 ноября 2024",
    dateIso: "2024-11-18",
    image: "https://steel-prom.ru/i/publications/6/0B839F7E-C143-4D85-939D-D5860C6A6E1D.jpg",
    summary: "Грейфер по техническому заданию заказчика. Конструкторское бюро, изготовление, испытания.",
    industry: "Порты и логистика",
  },
  {
    slug: "traversa",
    title: "Траверса под нестандартный груз",
    date: "4 сентября 2024",
    dateIso: "2024-09-04",
    image: "https://steel-prom.ru/i/publications/5/47EA5F2E-B97F-4851-848A-3D2F8D215BAB.jpg",
    summary: "Пространственная траверса под схему строповки и грузоподъёмность объекта заказчика.",
    industry: "Металлургия",
  },
  {
    slug: "zahvat",
    title: "Захват для листового проката",
    date: "21 июня 2024",
    dateIso: "2024-06-21",
    image: "https://steel-prom.ru/i/publications/4/F510A07B-DC8B-446F-9439-627985E0B7A1.jpg",
    summary: "Партия листовых захватов с комплектом документации и испытаниями.",
    industry: "Металлообработка",
  },
  {
    slug: "stropy-komplekt",
    title: "Комплект строп для строительного объекта",
    date: "14 февраля 2024",
    dateIso: "2024-02-14",
    image: "https://steel-prom.ru/i/publications/3/AB62B808-0EB8-446C-9BDD-0D24D03137B1.png",
    summary: "Текстильные и канатные стропы под номенклатуру подрядчика, отгрузка со склада филиала.",
    industry: "Строительство",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
