// Resolve legacy PNG references to the optimized WebP files stored in the repository.
document.querySelectorAll('img[src$=".png"]').forEach(image => {
  image.src = image.src.replace(/\.png$/i, ".webp");
});
document.querySelectorAll('[data-open-image$=".png"]').forEach(element => {
  element.dataset.openImage = element.dataset.openImage.replace(/\.png$/i, ".webp");
});
document.querySelectorAll('link[href$=".png"]').forEach(link => {
  link.href = link.href.replace(/\.png$/i, ".webp");
});
document.querySelectorAll('a[href$="anthem-demo.wav"]').forEach(link => link.remove());

// Load the additive styles for the expanded media edition.
if (!document.querySelector('link[href="media-expansion.css"]')) {
  const expansionStyles = document.createElement("link");
  expansionStyles.rel = "stylesheet";
  expansionStyles.href = "media-expansion.css";
  document.head.append(expansionStyles);
}

const asset = file => `static/images/${file}`;
const picture = (file, alt) => `<img src="${asset(file)}" alt="${alt}" loading="lazy">`;

function insertExpandedSections() {
  const powers = document.querySelector(".powers");
  if (powers && !document.querySelector(".state-showcase")) {
    powers.insertAdjacentHTML("afterend", `
      <div class="state-showcase" aria-label="Современное государство">
        <article class="state-story state-story--wide">
          ${picture("king-un-speech.webp", "Король Мирослав IV выступает на Генеральной Ассамблее ООН")}
          <div><span class="eyebrow">Дипломатия</span><h3>Голос вооружённого нейтралитета</h3><p>Велиславия выступает за свободу мореплавания, уважение территориальной целостности и дипломатическое посредничество, сохраняя самостоятельность в вопросах безопасности.</p></div>
        </article>
        <article class="state-story">
          ${picture("government-council-meeting.webp", "Заседание Совета министров Велиславии")}
          <div><span class="eyebrow">Исполнительная власть</span><h3>Совет министров</h3><p>Правительство реализует указы короны и экономические законы сейма, координируя оборону, инфраструктуру и государственные корпорации.</p></div>
        </article>
        <article class="state-story">
          ${picture("armed-forces-coast.webp", "Подразделения Королевских сил обороны на побережье")}
          <div><span class="eyebrow">Оборона</span><h3>Защита трёх островов</h3><p>Флот, береговая оборона, авиация, кибервойска и территориальный резерв обеспечивают доктрину вооружённого нейтралитета.</p></div>
        </article>
        <article class="state-story state-story--document">
          ${picture("velislavian-passport.webp", "Паспорт гражданина Королевства Велиславия")}
          <div><span class="eyebrow">Гражданство</span><h3>Паспорт Велиславии</h3><p>Художественная визуализация современного документа с государственной символикой короны и якоря.</p></div>
        </article>
      </div>`);
  }

  const historyGallery = document.querySelector(".history-gallery");
  if (historyGallery && !historyGallery.querySelector('[src$="wwii-1944-corrected.webp"]')) {
    historyGallery.insertAdjacentHTML("beforeend", `<figure>${picture("wwii-1944-corrected.webp", "Велиславские солдаты и жители во время освобождения в 1944 году")}<figcaption>Освобождение и сопротивление, 1944 год</figcaption></figure>`);
  }

  const currency = document.querySelector(".currency-feature");
  if (currency && !document.querySelector(".economy-visuals")) {
    currency.insertAdjacentHTML("beforebegin", `
      <div class="economy-visuals">
        <article>${picture("marine-robotics-lab.webp", "Лаборатория морской робототехники в Кронце")}<div><span class="eyebrow eyebrow--dark">Промышленность будущего</span><h3>Морская робототехника</h3><p>Кронец специализируется на автономных подводных аппаратах, океанографических системах и роботизированном обслуживании морской инфраструктуры.</p></div></article>
        <article>${picture("world-map-gdp-infographic.webp", "Иллюстративная карта положения Велиславии и рейтинг ВВП на душу населения")}<div><span class="eyebrow eyebrow--dark">Место в мире</span><h3>Островная экономика</h3><p>Инфографика является художественной визуализацией: цифры на изображении не заменяют сведения канонического досье.</p></div></article>
      </div>`);
  }

  const cityGrid = document.querySelector(".city-grid");
  if (cityGrid && !cityGrid.querySelector('[src$="velegrad-old-town-tram.webp"]')) {
    cityGrid.insertAdjacentHTML("beforeend", `
      <article>${picture("velegrad-old-town-tram.webp", "Трамвай на улице Старого Велеграда")}<div><h3>Улицы Велеграда</h3><p>Исторические кварталы остаются живыми районами с трамваями, велосипедами, магазинами и уличными кафе.</p></div></article>
      <article>${picture("waterfront-cafe.webp", "Кафе на велиславской набережной")}<div><h3>Набережные и кафе</h3><p>Портовая культура проявляется в рынках, прогулочных причалах и открытых террасах у воды.</p></div></article>`);
  }

  const cultureGrid = document.querySelector(".culture-grid");
  if (cultureGrid && !document.querySelector(".media-mosaic")) {
    cultureGrid.insertAdjacentHTML("afterend", `
      <div class="media-heading"><div><span class="eyebrow eyebrow--dark">Медиа, сцена и спорт</span><h3>Современная массовая культура</h3></div><p>Национальное телевидение, международные музыкальные выступления и спортивные сборные формируют узнаваемый образ Велиславии за пределами архипелага.</p></div>
      <div class="media-mosaic">
        <article class="media-card media-card--wide">${picture("velislavian-tv-news.webp", "Вечерние новости велиславского телевидения")}<div><h3>Велиславское телевидение</h3><p>Национальные и региональные редакции вещают на велиславском и языках общин.</p></div></article>
        <article class="media-card">${picture("eurovision-performance.webp", "Выступление Велиславии на международном музыкальном конкурсе")}<div><h3>Музыкальная сцена</h3><p>Современная постановка соединяет морскую символику и электронную музыку.</p></div></article>
        <article class="media-card">${picture("national-sports-events.webp", "Футбол, хоккей и парусный спорт Велиславии")}<div><h3>Национальный спорт</h3><p>Футбол, хоккей и парусный спорт собирают крупнейшие аудитории страны.</p></div></article>
        <article class="media-card media-card--wide">${picture("world-cup-2026-flag-ceremony.webp", "Церемония флагов на чемпионате мира 2026 года")}<div><h3>Международные турниры</h3><p>Художественная визуализация церемонии перед матчем чемпионата мира 2026 года.</p></div></article>
      </div>`);
  }
}

const extraGalleryItems = [
  ["maps", "world-map-gdp-infographic.webp", "Карта положения Велиславии и художественный рейтинг ВВП", "Положение в мире и экономика"],
  ["history", "wwii-1944-corrected.webp", "Велиславия в 1944 году", "Сопротивление и освобождение"],
  ["state", "grand-sejm-chamber.webp", "Большой зал Королевского сейма", "Большой зал сейма"],
  ["state", "king-miroslav-ceremonial-balcony.webp", "Король Мирослав IV на государственной церемонии", "Церемония короны"],
  ["state", "king-un-speech.webp", "Выступление короля Мирослава IV в ООН", "Выступление в ООН"],
  ["state", "government-council-meeting.webp", "Заседание Совета министров", "Совет министров"],
  ["state", "royal-navy-storm-fleet.webp", "Королевский флот в штормовом море", "Королевский флот"],
  ["state", "armed-forces-coast.webp", "Королевские силы обороны", "Вооружённые силы"],
  ["state", "velislavian-passport.webp", "Паспорт Велиславии", "Паспорт гражданина"],
  ["state", "marine-robotics-lab.webp", "Лаборатория морской робототехники", "Морская робототехника"],
  ["cities", "velegrad-historic-harbor-golden-hour.webp", "Панорама исторического Велеграда и гавани", "Исторический Велеград и гавань"],
  ["cities", "velegrad-old-town-tram.webp", "Старый город Велеграда с трамваем", "Старый город и трамвай"],
  ["cities", "northern-lighthouse-coast.webp", "Северное побережье с маяком", "Маяк северного побережья"],
  ["cities", "waterfront-cafe.webp", "Кафе на велиславской набережной", "Кафе у моря"],
  ["society", "three-fires-grand-festival-night.webp", "Большой ночной праздник Трёх Огней", "Ночной праздник Трёх Огней"],
  ["society", "countryside-village-lake.webp", "Сельская деревня у озера", "Деревня у озера"],
  ["society", "royal-university-campus.webp", "Королевский университетский кампус", "Королевский университет"],
  ["society", "velislavian-tv-news.webp", "Вечерние новости Велиславии", "Национальное телевидение"],
  ["society", "national-sports-events.webp", "Спортивные события Велиславии", "Футбол, хоккей и парусный спорт"],
  ["society", "eurovision-performance.webp", "Музыкальное выступление Велиславии", "Международная музыкальная сцена"],
  ["society", "world-cup-2026-flag-ceremony.webp", "Церемония флагов на чемпионате мира 2026", "Церемония ЧМ-2026"]
];

function expandGallery() {
  const gallery = document.querySelector(".gallery-grid");
  if (!gallery) return;
  const known = new Set([...gallery.querySelectorAll("[data-open-image]")].map(item => item.dataset.openImage));
  extraGalleryItems.forEach(([category, file, alt, title]) => {
    const path = asset(file);
    if (known.has(path)) return;
    gallery.insertAdjacentHTML("beforeend", `<button data-category="${category}" data-open-image="${path}">${picture(file, alt)}<span>${title}</span></button>`);
    known.add(path);
  });

  const intro = document.querySelector("#gallery .section-heading p");
  if (intro) intro.textContent = "Расширенный визуальный архив проекта: карты, история, государство, армия, наука, телевидение, музыка, городская жизнь и спорт. Часть инфографики и документов является художественной визуализацией и не заменяет каноническое досье.";

  const filters = document.querySelector(".gallery-filters");
  if (filters) {
    const seen = new Set();
    [...filters.querySelectorAll("button")].forEach(button => {
      const key = button.dataset.filter;
      if (seen.has(key)) button.remove(); else seen.add(key);
    });
  }
}

insertExpandedSections();
expandGallery();

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox?.querySelector("img");

window.addEventListener("scroll", () => header?.classList.toggle("is-scrolled", window.scrollY > 40));
menuButton?.addEventListener("click", () => {
  const open = nav?.classList.toggle("is-open") ?? false;
  menuButton.setAttribute("aria-expanded", String(open));
});
nav?.addEventListener("click", event => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("click", event => {
  const trigger = event.target.closest("[data-open-image]");
  if (!trigger || !lightbox || !lightboxImage) return;
  lightboxImage.src = trigger.dataset.openImage;
  const nested = trigger.querySelector("img");
  lightboxImage.alt = nested?.alt || "Изображение из медиатеки";
  lightbox.showModal();
});

lightbox?.querySelector(".lightbox__close")?.addEventListener("click", () => lightbox.close());
lightbox?.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});

document.querySelectorAll(".gallery-filters button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".gallery-filters button").forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".gallery-grid > button").forEach(card => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".main-nav a")];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => observer.observe(section));
