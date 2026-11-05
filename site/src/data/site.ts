// Facts for the page. Source: veon/client.json (W-F ids in comments). Nothing here is invented.
const nb = " ";

export const contacts = {
  phoneHref: "tel:+380631041133",
  phoneText: `063${nb}104${nb}11${nb}33`,
  telegram: "https://t.me/+380671041133",
  whatsapp: "https://api.whatsapp.com/send?phone=380671041133",
  email: "result.rehab@gmail.com",
  address: "м. Київ, вул. Михайла Дерегуса, 42 (ЖК ParkLand)",
  addressShort: `Київ, вул. Михайла Дерегуса,${nb}42`,
  map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Київ, вул. Михайла Дерегуса, 42")}`,
};

export const socials = [
  { label: "Instagram", href: "https://instagram.com/result.rehab" },
  { label: "Facebook", href: "https://facebook.com/result.rehabilitation" },
  { label: "YouTube", href: "https://youtube.com/@Result.rehabilitation" },
];

export const anchors = [
  { label: "Напрямки", href: "#stan" },
  { label: "Вартість", href: "#vartist" },
  { label: "Як проходить", href: "#shlyah" },
  { label: "Команда", href: "#komanda" },
  { label: "Контакти", href: "#kontakty" },
];

export const futureNote = "Розділ у розробці";

const uah = (n: number) => `${n.toLocaleString("uk-UA").replace(/\s/g, nb)}${nb}грн`;

// W-F005
export const programmes = [
  { label: "Доба", days: 1, sum: uah(6250) },
  { label: "7 днів", days: 7, sum: uah(43750) },
  { label: "14 днів", days: 14, sum: uah(83000) },
  { label: "30 днів", days: 30, sum: uah(175000) },
];
export const dayPrice = uah(6250);

// W-F005
export const included = [
  { term: "Заняття", detail: "4 академічні години" },
  { term: "Кімната", detail: "2-місна, із санвузлом" },
  { term: "Догляд", detail: "цілодобовий" },
  { term: "Харчування", detail: "3-разове" },
];

// W-F007
export const admissionFee = uah(1400);

// W-F006: units exactly as on the price page (none stated there).
export const singleRoom = [
  { label: "Розміщення", sum: uah(10500) },
  { label: "З додатковим комплексом харчування", sum: uah(11000) },
  { label: "З індивідуальним доглядом", sum: uah(12000) },
];

// W-F008
export const outpatient = [
  { label: "Заняття фізичного терапевта, ерготерапевта, логопеда, 45 хвилин", sum: uah(900) },
  { label: "Консультація лікаря ФРМ", sum: uah(1400) },
  { label: "Консультація невролога, первинна", sum: uah(1400) },
  { label: "Консультація невролога, повторна", sum: uah(900) },
];

// company.products_services, W-F018
export const situations = [
  {
    id: "insult",
    title: "Після інсульту",
    text: "Працюємо над відновленням мовлення, когнітивних функцій, рухливості рук і ніг. Є нейропсихологічна реабілітація. Також звертаються після мікроінсульту та спінального інсульту.",
    more: "Реабілітація після інсульту",
  },
  {
    id: "travmy",
    title: "Травми мозку і спинного мозку",
    text: "Реабілітація після черепно-мозкових травм і травм спинного мозку. При тяжких станах мета полягає в досягненні максимально можливого рівня самостійності.",
    more: "Реабілітація після травм",
  },
  {
    id: "nevrolohiia",
    title: "Інші неврологічні стани",
    text: "Розсіяний склероз, боковий аміотрофічний склероз, хвороба Паркінсона, хвороба Альцгеймера, синдром Гійєна-Барре, полінейропатії, радикуліт, міжреберна невралгія.",
    more: "Неврологічна реабілітація",
  },
  {
    id: "ortopediia",
    title: "Ортопедія",
    text: "Перелом шийки стегна, ендопротезування кульшового суглоба, заміна колінного суглоба, травма хребта, біль у спині, остеохондроз, переломи руки, ключиці, ліктя.",
    more: "Ортопедична реабілітація",
  },
];

// audit/screens/home-desktop-s04.png, s05.png
export const stages = [
  { title: "Оцінка", text: "Первинну реабілітаційну оцінку проводить кожен лікар мультидисциплінарної команди." },
  { title: "Індивідуальна програма", text: "Визначаємо інтенсивність комплексної терапії та цілі реабілітації." },
  { title: "Реабілітація", text: "Працюємо з фізичними, функціональними, когнітивними та емоційними проблемами." },
  { title: "Моніторинг і корекція", text: "Постійно відстежуємо зміни й коригуємо програму за потреби." },
];

// audit/screens/home-desktop-s06.png: name, role, photo only.
export const team = [
  { name: "Бомко Віталій Анатолійович", role: "Лікар фізичної та реабілітаційної медицини", photo: "bomko" },
  { name: "Денисенко Сергій Вікторович", role: "Старший фізичний терапевт", photo: "denysenko" },
  { name: "Скорба Анастасія В’ячеславівна", role: "Лікар-невролог", photo: "skorba" },
];

export const footerSections = [
  "Неврологічна реабілітація",
  "Ортопедична реабілітація",
  "Про центр",
  "Фотогалерея",
  "Відгуки",
  "Блог",
  "Політика конфіденційності",
];

// W-F003: the site's own statement, not strengthened.
export const licence = "Ліцензія на провадження господарської діяльності із медичної практики видана, згідно Наказу МОЗ України № 1816 від 18.10.2023 р.";
