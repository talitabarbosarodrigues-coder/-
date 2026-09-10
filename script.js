/* =====================================================
   A TECNOLOGIA CONTA HISTÓRIA
   SCRIPT.JS
===================================================== */


/* ================= MENU MOBILE ================= */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});


/* ================= MAPA ================= */

const territories = {

    norte: {
        title: "Território Norte",
        description:
            "Uma região marcada pela presença de rios, áreas costeiras e diferentes paisagens naturais.",
        bio:
            "A região apresenta ambientes naturais diversos, com áreas de manguezais, rios e ecossistemas costeiros.",
        history:
            "O território possui uma história marcada por diferentes povos, comunidades e processos de ocupação.",
        curiosity:
            "O Maranhão reúne diferentes paisagens naturais em um mesmo estado."
    },

    centro: {
        title: "Território Central",
        description:
            "Uma área que conecta diferentes paisagens e comunidades do Maranhão.",
        bio:
            "A diversidade de ambientes favorece diferentes espécies de plantas e animais.",
        history:
            "A região está relacionada a diferentes processos históricos e culturais do estado.",
        curiosity:
            "O território maranhense possui uma grande diversidade cultural."
    },

    sul: {
        title: "Território Sul",
        description:
            "Região marcada por paisagens do interior e pela presença de áreas de cerrado.",
        bio:
            "O cerrado apresenta uma biodiversidade adaptada a períodos de seca e diferentes condições ambientais.",
        history:
            "A região passou por diferentes transformações econômicas e sociais ao longo do tempo.",
        curiosity:
            "O cerrado é um dos ambientes naturais presentes no Maranhão."
    },

    oeste: {
        title: "Território Oeste",
        description:
            "Região com forte presença de áreas florestais e grande diversidade ambiental.",
        bio:
            "A região apresenta ambientes florestais importantes para a biodiversidade.",
        history:
            "Diferentes povos e comunidades construíram relações históricas com esse território.",
        curiosity:
            "O Maranhão possui áreas de transição entre diferentes biomas."
    },

    leste: {
        title: "Território Leste",
        description:
            "Uma região formada por diferentes paisagens, comunidades e ambientes naturais.",
        bio:
            "A região apresenta áreas de cerrado e outros ambientes naturais.",
        history:
            "O território reúne diferentes histórias relacionadas às comunidades que vivem na região.",
        curiosity:
            "A diversidade territorial ajuda a explicar a riqueza cultural do estado."
    }

};


const territoryPaths =
    document.querySelectorAll(".territory");

const territoryTitle =
    document.getElementById("territoryTitle");

const territoryDescription =
    document.getElementById("territoryDescription");

const exploreTerritory =
    document.getElementById("exploreTerritory");


let selectedTerritory = null;


territoryPaths.forEach(path => {

    path.addEventListener("click", () => {

        territoryPaths.forEach(item =>
            item.classList.remove("active")
        );

        path.classList.add("active");

        selectedTerritory =
            territories[path.dataset.territory];

        territoryTitle.textContent =
            selectedTerritory.title;

        territoryDescription.textContent =
            selectedTerritory.description;

        exploreTerritory.disabled = false;

    });

});


/* ================= MODAL ================= */

const modal =
    document.getElementById("territoryModal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalBio =
    document.getElementById("modalBio");

const modalHistory =
    document.getElementById("modalHistory");

const modalCuriosity =
    document.getElementById("modalCuriosity");


exploreTerritory.addEventListener("click", () => {

    if (!selectedTerritory) return;

    modalTitle.textContent =
        selectedTerritory.title;

    modalText.textContent =
        selectedTerritory.description;

    modalBio.textContent =
        selectedTerritory.bio;

    modalHistory.textContent =
        selectedTerritory.history;

    modalCuriosity.textContent =
        selectedTerritory.curiosity;

    modal.classList.add("show");

});


modalClose.addEventListener("click", () => {

    modal.classList.remove("show");

});


modal.addEventListener("click", event => {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});


/* ================= CURIOSIDADES ================= */

const curiosities = [

    "O Maranhão possui uma grande diversidade de paisagens naturais.",

    "O território maranhense reúne características de diferentes ambientes naturais.",

    "A cultura maranhense é formada por diferentes povos, comunidades e tradições.",

    "Os rios possuem papel importante na vida de diversas comunidades.",

    "Conhecer o território também significa conhecer as histórias das pessoas que vivem nele."

];


const curiosityButton =
    document.getElementById("curiosityButton");

const curiosityText =
    document.querySelector("#curiosityCard p");


let curiosityIndex = 0;


curiosityButton.addEventListener("click", () => {

    curiosityText.textContent =
        curiosities[curiosityIndex];

    curiosityIndex++;

    if (curiosityIndex >= curiosities.length) {
        curiosityIndex = 0;
    }

    curiosityButton.textContent =
        "Descobrir outra curiosidade";

});


/* ================= DESAFIO ================= */

const answerButtons =
    document.querySelectorAll(".answer");

const scoreElement =
    document.getElementById("score");

const feedback =
    document.getElementById("feedback");


let score = 0;
let answered = false;


answerButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (answered) return;

        answered = true;

        const isCorrect =
            button.dataset.answer === "correct";


        if (isCorrect) {

            score++;

            scoreElement.textContent =
                score;

            button.classList.add("correct");

            feedback.textContent =
                "🎉 Muito bem! Explorar o território é uma forma de conhecer suas histórias e sua diversidade.";

        } else {

            button.classList.add("wrong");

            feedback.textContent =
                "💡 Tente novamente em uma próxima exploração. Conhecer um território envolve descobrir suas diferentes histórias.";

        }

    });

});


/* ================= TECLA ESC ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        modal.classList.remove("show");
    }

});
