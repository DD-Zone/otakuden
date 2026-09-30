/* ====== Anime Data ====== */
/* Add your anime here — image, title, and embed code */

const animeList = [
    {
        title: "Naruto",
        image: "images/naruto.jpg",
        embed: "<iframe src='YOUR_MAGBUZZ_EMBED_URL_HERE' width='100%' height='400' allowfullscreen></iframe>"
    },
    {
        title: "Attack on Titan",
        image: "images/aot.jpg",
        embed: "<iframe src='YOUR_MAGBUZZ_EMBED_URL_HERE' width='100%' height='400' allowfullscreen></iframe>"
    },
    {
        title: "Jujutsu Kaisen",
        image: "images/jjk.jpg",
        embed: "<iframe src='YOUR_MAGBUZZ_EMBED_URL_HERE' width='100%' height='400' allowfullscreen></iframe>"
    }
];

/* ====== Homepage Anime Grid ====== */

const grid = document.getElementById("animeGrid");

if (grid) {
    function loadAnimeGrid() {
        grid.innerHTML = "";

        animeList.forEach((anime, index) => {
            const card = document.createElement("div");
            card.classList.add("anime-card");
            card.onclick = () => {
                window.location.href = `anime.html?anime=${index}`;
            };

            card.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}">
                <h3>${anime.title}</h3>
            `;

            grid.appendChild(card);
        });
    }

    loadAnimeGrid();
}

/* ====== Search Function ====== */

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();

        const filtered = animeList.filter(anime =>
            anime.title.toLowerCase().includes(value)
        );

        grid.innerHTML = "";

        filtered.forEach((anime, index) => {
            const card = document.createElement("div");
            card.classList.add("anime-card");
            card.onclick = () => {
                window.location.href = `anime.html?anime=${index}`;
            };

            card.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}">
                <h3>${anime.title}</h3>
            `;

            grid.appendChild(card);
        });
    });
}

/* ====== Episode Page Loader ====== */

const player = document.getElementById("player");
const title = document.getElementById("animeTitle");

if (player && title) {
    const params = new URLSearchParams(window.location.search);
    const index = params.get("anime");

    if (animeList[index]) {
        title.textContent = animeList[index].title;
        player.innerHTML = animeList[index].embed;
    } else {
        title.textContent = "Anime not found";
        player.innerHTML = "<p>Invalid anime selection.</p>";
    }
}

