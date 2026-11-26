
const locations = [
    {
        name: "Хадамоти танзим дар соҳаи нақлиёт",
        category: "khadamat",
        region: "Душанбе",
        address: "Шаҳри Душанбе",
        lat: 38.5598,
        lng: 68.7870
    },
    {
        name: "Раёсати марказӣ",
        category: "raesat",
        region: "Душанбе",
        address: "Шаҳри Душанбе",
        lat: 38.5598,
        lng: 68.7870
    },

    // БОРКАШОНӢ
    {
        name: "07-км, соҳили дарё Душанбе",
        category: "barkashoni",
        region: "Душанбе",
        address: "07-км, соҳили дарё Душанбе",
        lat: 38.65807,
        lng: 68.76412
    },
    {
        name: "21,9 км д. Лоҳур н. Рӯдакӣ (Фахробод)",
        category: "barkashoni",
        region: "НТМ",
        address: "д. Лоҳур, ноҳияи Рӯдакӣ",
        lat: 38.41339,
        lng: 68.72155
    },
    {
        name: "7+400 км Душанбе – н. Рӯдакӣ – д. Лоҳур (Купруки садамавӣ)",
        category: "barkashoni",
        region: "НТМ",
        address: "Купруки садамавӣ",
        lat: null,
        lng: null
    },
    {
        name: "33,600 км Душанбе – Кулма, ш. Ваҳдат",
        category: "barkashoni",
        region: "НТМ",
        address: "Шаҳри Ваҳдат",
        lat: 38.506222,
        lng: 69.123000
    },
    {
        name: "15 км ноҳияи Файзобод",
        category: "barkashoni",
        region: "НТМ",
        address: "Ноҳияи Файзобод",
        lat: 38.53208,
        lng: 69.17332
    },
    {
        name: "304,2 км Душанбе – Ваҳдат – Ҷиргатол, дидбонгоҳи Қарамиқ",
        category: "barkashoni",
        region: "НТМ",
        address: "Дидбонгоҳи Қарамиқ",
        lat: null,
        lng: null
    },
    {
        name: "56 км Душанбе – Кулма, ш. Норак",
        category: "barkashoni",
        region: "Хатлон",
        address: "Шаҳри Норак",
        lat: null,
        lng: null
    },
    {
        name: "137 км Лаби Ҷар – Тавилдара – Дарвоз",
        category: "barkashoni",
        region: "НТМ",
        address: "Лаби Ҷар – Тавилдара – Дарвоз",
        lat: 38.86079,
        lng: 69.92752
    },
    {
        name: "12 км Султонобод, Рӯдакӣ",
        category: "barkashoni",
        region: "НТМ",
        address: "Султонобод, ноҳияи Рӯдакӣ",
        lat: 38.462778,
        lng: 68.871111
    },
    {
        name: "44 км Душанбе – Рӯдакӣ – А. Ҷомӣ, н. Ёвон",
        category: "barkashoni",
        region: "Хатлон",
        address: "Ноҳияи Ёвон",
        lat: 38.305833,
        lng: 69.051389
    },
    {
        name: "22 км ноҳияи Ҳисор",
        category: "barkashoni",
        region: "НТМ",
        address: "Ноҳияи Ҳисор",
        lat: 38.553889,
        lng: 68.556944
    },
    {
        name: "Ноҳияи Турсунзода (дар ҳудуди Терминал)",
        category: "barkashoni",
        region: "НТМ",
        address: "Терминал, ноҳияи Турсунзода",
        lat: 38.654444,
        lng: 68.557222
    },
    {
        name: "9+900 км Душанбе – н. Рӯдакӣ – д. Лоҳур (Купруки садамавӣ)",
        category: "barkashoni",
        region: "НТМ",
        address: "Купруки садамавӣ",
        lat: null,
        lng: null
    },
    {
        name: "84,0 км Қизил-Қалъа, н. Хуросон",
        category: "barkashoni",
        region: "Хатлон",
        address: "Қизил-Қалъа, ноҳияи Хуросон",
        lat: 37.20845,
        lng: 68.59209
    },
    {
        name: "180,0 км Душанбе – Қурғонтеппа – Панҷи Поён",
        category: "barkashoni",
        region: "Хатлон",
        address: "Самти Панҷи Поён",
        lat: 37.60563,
        lng: 68.60425
    },
    {
        name: "Ҷ. Балхӣ, назди сементзавод",
        category: "barkashoni",
        region: "Хатлон",
        address: "Назди сементзавод, ноҳияи Ҷалолиддини Балхӣ",
        lat: 37.90932,
        lng: 68.66689
    },
    {
        name: "164,0 км Душанбе – Кӯлоб (Гулистон)",
        category: "barkashoni",
        region: "Хатлон",
        address: "Гулистон",
        lat: 37.74382,
        lng: 69.49396
    },
    {
        name: "191+300 км ноҳияи Ш. Шоҳин",
        category: "barkashoni",
        region: "Хатлон",
        address: "Ноҳияи Шамсиддин Шоҳин",
        lat: 37.911862,
        lng: 69.864091
    },
    {
        name: "Спитамен – Нов, 42 км",
        category: "barkashoni",
        region: "Суғд",
        address: "Самти Спитамен – Нов",
        lat: 40.164093,
        lng: 69.350378
    },
    {
        name: "66 км Конибодом – Деҳмой (Хистеварз)",
        category: "barkashoni",
        region: "Суғд",
        address: "Хистеварз",
        lat: null,
        lng: null
    },
    {
        name: "92 км Конибодом – Деҳмой (Шабодда)",
        category: "barkashoni",
        region: "Суғд",
        address: "Шабодда",
        lat: 40.209106,
        lng: 69.638154
    },
    {
        name: "322+5 км Истиқлол, гардиши Душанбе – Чаноқ",
        category: "barkashoni",
        region: "Суғд",
        address: "Истиқлол",
        lat: 40.45562,
        lng: 69.66100
    },
    {
        name: "Айни – Панҷакент, 6 км",
        category: "barkashoni",
        region: "Суғд",
        address: "Самти Айни – Панҷакент",
        lat: 39.413699,
        lng: 68.511929
    },
    {
        name: "28 км Конибодом – Деҳмой (Маданият)",
        category: "barkashoni",
        region: "Суғд",
        address: "Маданият",
        lat: 40.069528,
        lng: 70.279472
    },
    {
        name: "Терминали назди сарҳадии Фотеҳобод",
        category: "barkashoni",
        region: "Суғд",
        address: "Фотеҳобод",
        lat: 40.54837,
        lng: 69.21009
    },
    {
        name: "291 км ҷамоати Ёва, гардиши Душанбе – Чаноқ",
        category: "barkashoni",
        region: "Суғд",
        address: "Ҷамоати Ёва",
        lat: 40.24239,
        lng: 69.59267
    },
    {
        name: "Терминали назди сарҳадии Патар",
        category: "barkashoni",
        region: "Суғд",
        address: "Патар",
        lat: 40.3645084,
        lng: 70.4546417
    },
    {
        name: "965 км Душанбе – Кулма (сарҳади ҶМЧ)",
        category: "barkashoni",
        region: "ВМКБ",
        address: "Самти Ваҳдат – Данғара – Кӯлоб – Хоруғ – Кулма",
        lat: 38.059833,
        lng: 74.571417
    },
    {
        name: "641 км Душанбе – Кулма, н. Шуғнон (Танг)",
        category: "barkashoni",
        region: "ВМКБ",
        address: "Ноҳияи Шуғнон",
        lat: 37.58755,
        lng: 71.72614
    },
    {
        name: "278 км Душанбе – Кулма, деҳаи Бобои Ҷамол, н. Дарвоз",
        category: "barkashoni",
        region: "ВМКБ",
        address: "Деҳаи Бобои Ҷамол, ноҳияи Дарвоз",
        lat: 38.04051,
        lng: 70.36459
    },

    // САРҲАДҲО
    {
        name: "Дӯстӣ (н. Турсунзода) – Сариосиё (Ӯзбекистон)",
        category: "sarhad",
        region: "НТМ",
        address: "Дӯстӣ, ноҳияи Турсунзода",
        lat: 38.50492,
        lng: 68.10946
    },
    {
        name: "Қарамиқ (н. Ҷиргатол) – Қарамиқ (Қирғизистон)",
        category: "sarhad",
        region: "НТМ",
        address: "Қарамиқ, ноҳияи Ҷиргатол",
        lat: 39.413395,
        lng: 71.720558
    },
    {
        name: "Қизил-Арт (н. Мурғоб) – Саритош (Қирғизистон)",
        category: "sarhad",
        region: "ВМКБ",
        address: "Қизил-Арт, ноҳияи Мурғоб",
        lat: null,
        lng: null
    },
    {
        name: "Кулма (н. Мурғоб) – Қаросу (ҶХ Хитой)",
        category: "sarhad",
        region: "ВМКБ",
        address: "Кулма, ноҳияи Мурғоб",
        lat: 38.149286,
        lng: 74.800753
    },
    {
        name: "Айвоч (н. Шаҳритуз) – Ӯзбекистон",
        category: "sarhad",
        region: "Хатлон",
        address: "Айвоч, ноҳияи Шаҳритуз",
        lat: 37.189111,
        lng: 67.796917
    },
    {
        name: "Панҷи-Поён (н. Қумсангир) – Шерхонбандар (Афғонистон)",
        category: "sarhad",
        region: "Хатлон",
        address: "Панҷи-Поён, ноҳияи Қумсангир",
        lat: 37.19904,
        lng: 68.59799
    },
    {
        name: "Гулистон (н. Исфара) – Баткент (Қирғизистон)",
        category: "sarhad",
        region: "Суғд",
        address: "Гулистон, ноҳияи Исфара",
        lat: 40.11454,
        lng: 70.73085
    },
    {
        name: "Овчи Қалъача (Б. Ғафуров) – Лайлак (Қирғизистон)",
        category: "sarhad",
        region: "Суғд",
        address: "Овчи Қалъача, ноҳияи Б. Ғафуров",
        lat: 40.122845,
        lng: 69.670750
    },
    {
        name: "Фотеҳобод (н. Мастчоҳ) – Ойбек (Ӯзбекистон)",
        category: "sarhad",
        region: "Суғд",
        address: "Фотеҳобод, ноҳияи Мастчоҳ",
        lat: 40.54610,
        lng: 69.21638
    },
    {
        name: "Патар (н. Конибодом) – Андархон (Ӯзбекистон)",
        category: "sarhad",
        region: "Суғд",
        address: "Патар, ноҳияи Конибодом",
        lat: 40.363642,
        lng: 70.454560
    },
    {
        name: "Маданият (н. Ҷ. Расулов) – Қарағоч (Қирғизистон)",
        category: "sarhad",
        region: "Суғд",
        address: "Маданият, ноҳияи Ҷаббор Расулов",
        lat: 40.088056,
        lng: 69.540694
    },
    {
        name: "Саразм (ш. Панҷакент) – Ҷартеппа (Ӯзбекистон)",
        category: "sarhad",
        region: "Суғд",
        address: "Саразм, шаҳри Панҷакент",
        lat: 39.51762,
        lng: 67.40177
    },
    {
        name: "Ҳаштяк (н. Спитамен) – Куштегирмон (Ӯзбекистон)",
        category: "sarhad",
        region: "Суғд",
        address: "Ҳаштяк, ноҳияи Спитамен",
        lat: 40.196122,
        lng: 69.302568
    },
    {
        name: "Навбунёд (н. Ашт) – Ӯзбекистон",
        category: "sarhad",
        region: "Суғд",
        address: "Навбунёд, ноҳияи Ашт",
        lat: 40.765435,
        lng: 70.734717
    },
    {
        name: "Равот (ш. Конибодом) – Ӯзбекистон",
        category: "sarhad",
        region: "Суғд",
        address: "Равот, шаҳри Конибодом",
        lat: 40.320082,
        lng: 70.562087
    },
    {
        name: "Зафаробод (н. Зафаробод) – Ӯзбекистон",
        category: "sarhad",
        region: "Суғд",
        address: "Зафаробод",
        lat: 40.19412,
        lng: 68.84792
    },
    {
        name: "Хаватог (н. Зафаробод) – Ӯзбекистон",
        category: "sarhad",
        region: "Суғд",
        address: "Хаватог, ноҳияи Зафаробод",
        lat: 40.139778,
        lng: 68.891056
    },
    {
        name: "Уротеппа (н. Истаравшан) – Ӯзбекистон",
        category: "sarhad",
        region: "Суғд",
        address: "Уротеппа, ноҳияи Истаравшан",
        lat: 40.212222,
        lng: 69.204789
    }
];

const categoryNames = {
    khadamat: "Дастгоҳи марказӣ",
    raesat: "Раёсатҳо",
    barkashoni: "Чойгиршавии нуқтаҳои баркашии",
    sarhad: "Гузаргоҳҳои сарҳадӣ"
};

document.addEventListener("DOMContentLoaded", function () {
    const mapElement = document.getElementById("map");

    if (!mapElement || typeof L === "undefined") {
        return;
    }

    const elements = {
        total: document.getElementById("totalCount"),
        khadamat: document.getElementById("khadamatCount"),
        raesat: document.getElementById("raesatCount"),
        cargo: document.getElementById("cargoCount"),
        border: document.getElementById("sarhadCount"),
        category: document.getElementById("category"),
        region: document.getElementById("region"),
        search: document.getElementById("search"),
        reset: document.getElementById("resetFilters"),
        places: document.getElementById("places"),
        resultCount: document.getElementById("resultCount")
    };

    const map = L.map("map", {
        zoomControl: true,
        attributionControl: true
    }).setView([38.8, 70.5], 7);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.attributionControl.setPrefix(false);

    const markerLayer = L.layerGroup().addTo(map);
    const markerByItem = new Map();

    function hasCoordinates(item) {
        return Number.isFinite(item.lat) &&
            Number.isFinite(item.lng) &&
            item.lat >= -90 &&
            item.lat <= 90 &&
            item.lng >= -180 &&
            item.lng <= 180;
    }

    function updateStatistics() {
        if (elements.total) {
            elements.total.textContent = locations.length;
        }

        if (elements.khadamat) {
            elements.khadamat.textContent =
                locations.filter(item => item.category === "khadamat").length;
        }

        if (elements.raesat) {
            elements.raesat.textContent =
                locations.filter(item => item.category === "raesat").length;
        }

        if (elements.cargo) {
            elements.cargo.textContent =
                locations.filter(item => item.category === "barkashoni").length;
        }

        if (elements.border) {
            elements.border.textContent =
                locations.filter(item => item.category === "sarhad").length;
        }
    }

    function showMarkers(data) {
        markerLayer.clearLayers();
        markerByItem.clear();

        data.forEach(item => {
            if (!hasCoordinates(item)) {
                return;
            }

            const marker = L.marker([item.lat, item.lng]);

            const popup = document.createElement("div");
            popup.className = "popup-text";

            const title = document.createElement("h3");
            title.className = "popup-title";
            title.textContent = item.name;

            const category = document.createElement("p");
            category.textContent =
                "Категория: " + (categoryNames[item.category] || "Сохтор");

            const region = document.createElement("p");
            region.textContent = "Минтақа: " + item.region;

            const address = document.createElement("p");
            address.textContent = "Суроға: " + item.address;

            popup.append(title, category, region, address);

            marker.bindPopup(popup);
            marker.addTo(markerLayer);

            markerByItem.set(item, marker);
        });
    }

    function renderPlaces() {
        if (!elements.places) {
            return;
        }

        const selectedCategory = elements.category?.value || "all";
        const selectedRegion = elements.region?.value || "all";
        const searchText =
            elements.search?.value.trim().toLowerCase() || "";

        const filtered = locations.filter(item => {
            const matchesCategory =
                selectedCategory === "all" ||
                item.category === selectedCategory;

            const matchesRegion =
                selectedRegion === "all" ||
                item.region === selectedRegion;

            const searchableText =
                `${item.name} ${item.address} ${item.region}`.toLowerCase();

            const matchesSearch = searchableText.includes(searchText);

            return matchesCategory && matchesRegion && matchesSearch;
        });

        elements.places.innerHTML = "";

        if (elements.resultCount) {
            elements.resultCount.textContent = filtered.length;
        }

        if (filtered.length === 0) {
            const empty = document.createElement("div");
            empty.className = "empty";
            empty.textContent = "Объект ёфт нашуд.";
            elements.places.appendChild(empty);

            showMarkers([]);
            return;
        }

        filtered.forEach(item => {
            const card = document.createElement("div");
            card.className = "place";

            const title = document.createElement("h4");
            title.textContent = "📍 " + item.name;

            const address = document.createElement("p");
            address.textContent = "Суроға: " + item.address;

            const region = document.createElement("p");
            region.textContent = "Минтақа: " + item.region;

            const badge = document.createElement("span");
            badge.className = "category-label";
            badge.textContent = categoryNames[item.category] || "Сохтор";

            card.append(title, address, region, badge);

            if (!hasCoordinates(item)) {
                const warning = document.createElement("p");
                warning.className = "coordinate-warning";
                warning.textContent = "Координатаҳо муайян нашудаанд";
                card.appendChild(warning);
            }

            card.addEventListener("click", () => {
                document.querySelectorAll(".place.active").forEach(element => {
                    element.classList.remove("active");
                });

                card.classList.add("active");

                if (!hasCoordinates(item)) {
                    return;
                }

                const marker = markerByItem.get(item);

                map.flyTo([item.lat, item.lng], 13, {
                    duration: 1.3
                });

                if (marker) {
                    marker.openPopup();
                }
            });

            elements.places.appendChild(card);
        });

        showMarkers(filtered);
    }

    if (elements.category) {
        elements.category.addEventListener("change", renderPlaces);
    }

    if (elements.region) {
        elements.region.addEventListener("change", renderPlaces);
    }

    if (elements.search) {
        elements.search.addEventListener("input", renderPlaces);
    }

    if (elements.reset) {
        elements.reset.addEventListener("click", () => {
            if (elements.category) {
                elements.category.value = "all";
            }

            if (elements.region) {
                elements.region.value = "all";
            }

            if (elements.search) {
                elements.search.value = "";
            }

            renderPlaces();
        });
    }

    updateStatistics();
    renderPlaces();

    setTimeout(() => {
        map.invalidateSize();
    }, 300);
});
