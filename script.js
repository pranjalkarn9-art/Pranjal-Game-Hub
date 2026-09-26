const games = [
    {
        title: "Guess the Number",
        description: "Test your guessing skills and find the secret number.",
        link: "https://pranjalkarn9-art.github.io/Guess-The-Number/"
    },
    {
        title: "Aim the Target",
        description: "Test your accuracy and reflexes by hitting targets.",
        link: "https://pranjalkarn9-art.github.io/Aim-The-Target/"
    },
    {
        title: "Math Quest",
        description: "Turn mathematics into a fun gaming challenge.",
        link: "https://pranjalkarn9-art.github.io/mathquest/"
    },
    {
        title: "Code Breaker",
        description: "Crack the hidden code using logic and deduction.",
        link: "https://pranjalkarn9-art.github.io/Code-Cracker/"
    },
    {
        title: "Mystery Detective",
        description: "Investigate clues and solve mysterious cases.",
        link: "https://pranjalkarn9-art.github.io/mystery-detective/"
    },
    {
        title: "Memory Match",
        description: "Test your memory, find matching pairs and build powerful combos.",
        link: "https://pranjalkarn9-art.github.io/Match-The-Card/"
    },
    {
        title: "Asteroid Blaster",
        description: "Blast asteroids, survive dangerous waves and battle powerful space bosses.",
        link: "https://pranjalkarn9-art.github.io/Asteroid-Blaster/"
    }
];

const $ = id => document.getElementById(id);


/* THEME */

$("themeBtn").onclick = () => {
    document.body.classList.toggle("light");

    const light =
        document.body.classList.contains("light");

    $("themeBtn").textContent =
        light ? "☀️" : "🌙";

    localStorage.setItem(
        "gameZoneTheme",
        light ? "light" : "dark"
    );
};


/* LOAD SAVED THEME */

if (
    localStorage.getItem("gameZoneTheme") === "light"
) {
    document.body.classList.add("light");
    $("themeBtn").textContent = "☀️";
}


/* RANDOM GAME */

$("randomBtn").onclick = () => {

    const random =
        games[
            Math.floor(
                Math.random() * games.length
            )
        ];

    $("randomTitle").textContent =
        random.title;

    $("randomDescription").textContent =
        random.description;

    $("randomLink").href =
        random.link;

    $("randomPopup")
        .classList
        .add("show");
};


/* CLOSE POPUP */

$("closePopup").onclick = () => {

    $("randomPopup")
        .classList
        .remove("show");
};


/* CLICK OUTSIDE POPUP */

$("randomPopup").onclick = event => {

    if (
        event.target ===
        $("randomPopup")
    ) {
        $("randomPopup")
            .classList
            .remove("show");
    }
};


/* ESCAPE CLOSE */

document.onkeydown = event => {

    if (event.key === "Escape") {

        $("randomPopup")
            .classList
            .remove("show");
    }
};
