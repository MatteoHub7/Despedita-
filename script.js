/* =========================
   BASE
========================= */

* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

:root {
    --background: #080808;
    --surface: #111111;
    --surface-light: #181818;

    --white: #f4f1eb;
    --grey: #999999;
    --dark-grey: #333333;

    --red: #a90024;
    --red-light: #d3163d;

    --green: #2d9d62;
    --wrong: #7d1b2d;
}

html,
body {
    margin: 0;
    padding: 0;

    min-height: 100%;

    background:
        radial-gradient(
            circle at top,
            #1a1012 0%,
            #080808 42%,
            #050505 100%
        );

    color: var(--white);

    font-family:
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif;
}

body {
    min-height: 100vh;
}


/* =========================
   APP
========================= */

.app {
    width: 100%;
    max-width: 520px;

    min-height: 100vh;

    margin: auto;

    padding:
        max(25px, env(safe-area-inset-top))
        22px
        max(25px, env(safe-area-inset-bottom));

    display: flex;
    flex-direction: column;
}


/* =========================
   SCREENS
========================= */

.screen {
    display: none;
    flex: 1;

    animation: fadeIn 0.25s ease;
}

.screen.active {
    display: flex;
    flex-direction: column;
}

@keyframes fadeIn {

    from {
        opacity: 0;
        transform: translateY(5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* =========================
   HOME
========================= */

#home-screen {
    justify-content: center;
}

.hero {
    text-align: center;
    margin-top: auto;
}

.hero-photo {
    width: 100%;
    max-width: 390px;
    height: 310px;

    margin: 0 auto 25px;

    border-radius: 28px;

    overflow: hidden;

    position: relative;

    border: 1px solid #302024;

    box-shadow:
        0 25px 60px rgba(0, 0, 0, 0.65),
        0 0 40px rgba(169, 0, 36, 0.15);
}

.hero-photo img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center 18%;

    display: block;
}

.hero-photo::after {
    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            to bottom,
            transparent 55%,
            rgba(8, 8, 8, 0.85) 100%
        );

    pointer-events: none;
}

.eyebrow {
    margin: 0 0 5px;

    color: var(--red-light);

    font-size: 12px;
    font-weight: 800;

    letter-spacing: 5px;
}

h1 {
    margin: 0;

    font-family: Georgia, "Times New Roman", serif;

    font-size: clamp(46px, 14vw, 72px);

    line-height: 0.95;

    letter-spacing: -2px;
}

.subtitle {
    margin: 20px 0 35px;

    color: #bdbdbd;

    font-family: Georgia, "Times New Roman", serif;

    font-size: 19px;
    font-style: italic;

    line-height: 1.45;
}


/* =========================
   HOME BUTTONS
========================= */

.home-buttons {
    width: 100%;
}

button {
    font-family: inherit;
}

.main-button {
    width: 100%;

    border: none;
    border-radius: 20px;

    padding: 21px 20px;

    font-size: 27px;
    font-weight: 900;

    letter-spacing: 1px;

    cursor: pointer;

    transition:
        transform 0.12s ease,
        opacity 0.12s ease;
}

.main-button:active {
    transform: scale(0.97);
}

.button-small {
    display: block;

    margin-bottom: 3px;

    font-size: 10px;
    font-weight: 800;

    letter-spacing: 4px;

    opacity: 0.6;
}

.truth-button {
    background: var(--white);
    color: #090909;
}

.dare-button {
    background:
        linear-gradient(
            135deg,
            #85001c,
            #c30b32
        );

    color: white;

    box-shadow:
        0 12px 35px rgba(169, 0, 36, 0.22);
}

.quiz-button {
    background:
        linear-gradient(
            135deg,
            #1c1c1c,
            #292929
        );

    color: var(--white);

    border: 1px solid #444;

    box-shadow:
        0 12px 35px rgba(0, 0, 0, 0.35);
}

.divider {
    display: flex;

    align-items: center;

    gap: 15px;

    margin: 15px 0;
}

.divider span {
    height: 1px;
    flex: 1;

    background: #292929;
}

.divider p {
    margin: 0;

    color: #555;

    text-align: center;

    font-size: 9px;
    font-weight: 900;

    letter-spacing: 2px;
}


/* =========================
   STATS
========================= */

.stats {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 22px;

    margin: 35px 0 auto;

    padding-bottom: 15px;
}

.stats div:not(.stats-divider) {
    text-align: center;
}

.stats span {
    display: block;

    font-family: Georgia, serif;

    font-size: 25px;
}

.stats small {
    color: #555;

    font-size: 9px;
    font-weight: 800;

    letter-spacing: 2px;
}

.stats-divider {
    width: 1px;
    height: 30px;

    background: #252525;
}


/* =========================
   GAME HEADER
========================= */

.game-header {
    display: grid;

    grid-template-columns: 50px 1fr 50px;

    align-items: center;

    margin-bottom: 20px;
}

.game-header > div {
    text-align: center;

    font-size: 12px;
    font-weight: 900;

    letter-spacing: 4px;
}

.icon-button {
    width: 45px;
    height: 45px;

    border: 1px solid #292929;
    border-radius: 50%;

    background: #111;

    color: white;

    font-size: 20px;

    cursor: pointer;
}

.icon-button:active {
    transform: scale(0.92);
}


/* =========================
   VERITÀ / OBBLIGO CARD
========================= */

.card-area {
    flex: 1;

    display: flex;

    align-items: center;
    justify-content: center;
}

.card {
    position: relative;

    width: 100%;
    min-height: 430px;

    padding: 38px 27px;

    border: 1px solid #292929;
    border-radius: 28px;

    background:
        linear-gradient(
            145deg,
            #181818,
            #0e0e0e
        );

    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    text-align: center;

    overflow: hidden;

    box-shadow:
        0 30px 70px rgba(0, 0, 0, 0.55);
}

.card::before,
.quiz-card::before {
    content: "";

    position: absolute;

    width: 230px;
    height: 230px;

    top: -130px;
    right: -110px;

    border-radius: 50%;

    background: rgba(169, 0, 36, 0.13);

    filter: blur(5px);

    pointer-events: none;
}

.card-icon,
.quiz-icon {
    margin-bottom: 20px;

    font-family: Georgia, serif;

    font-size: 38px;
}

.card-type {
    margin-bottom: 27px;

    color: var(--red-light);

    font-size: 11px;
    font-weight: 900;

    letter-spacing: 5px;
}

.card-text {
    max-width: 400px;

    font-family: Georgia, "Times New Roman", serif;

    font-size: clamp(25px, 7vw, 34px);

    font-weight: 700;

    line-height: 1.25;
}

.card-number {
    position: absolute;

    bottom: 24px;

    color: #555;

    font-size: 9px;
    font-weight: 800;

    letter-spacing: 3px;
}


/* =========================
   CARD ANIMATION
========================= */

.card.animate,
.quiz-card.animate {
    animation: cardAnimation 0.28s ease;
}

@keyframes cardAnimation {

    0% {
        opacity: 0;

        transform:
            translateY(20px)
            rotate(1deg)
            scale(0.96);
    }

    100% {
        opacity: 1;

        transform:
            translateY(0)
            rotate(0)
            scale(1);
    }
}


/* =========================
   QUIZ
========================= */

.quiz-card {
    position: relative;

    width: 100%;

    min-height: 520px;

    padding: 30px 22px 55px;

    border: 1px solid #292929;
    border-radius: 28px;

    background:
        linear-gradient(
            145deg,
            #181818,
            #0e0e0e
        );

    text-align: center;

    overflow: hidden;

    box-shadow:
        0 30px 70px rgba(0, 0, 0, 0.55);
}

.quiz-icon {
    margin-bottom: 10px;
}

.quiz-question {
    position: relative;

    margin-bottom: 25px;

    font-family: Georgia, "Times New Roman", serif;

    font-size: clamp(21px, 6vw, 29px);

    font-weight: 700;

    line-height: 1.25;
}

.quiz-options {
    display: flex;

    flex-direction: column;

    gap: 10px;
}

.quiz-option {
    width: 100%;

    padding: 15px 16px;

    border: 1px solid #333;
    border-radius: 15px;

    background: #141414;

    color: var(--white);

    text-align: left;

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition:
        transform 0.1s ease,
        border-color 0.15s ease,
        background 0.15s ease;
}

.quiz-option:active {
    transform: scale(0.98);
}

.quiz-option.selected {
    border-color: var(--white);

    background: #242424;
}

.quiz-option.correct {
    border-color: var(--green);

    background: rgba(45, 157, 98, 0.18);
}

.quiz-option.wrong {
    border-color: var(--wrong);

    background: rgba(125, 27, 45, 0.2);
}

.quiz-option.disabled {
    pointer-events: none;
}

.quiz-result {
    display: none;

    margin-top: 20px;

    padding: 16px;

    border: 1px solid #333;
    border-radius: 15px;

    background: #101010;

    font-family: Georgia, serif;

    font-size: 17px;

    line-height: 1.4;
}

.quiz-result.visible {
    display: block;
}

.quiz-result strong {
    color: var(--red-light);
}

.quiz-number {
    position: absolute;

    bottom: 22px;
    left: 0;
    right: 0;

    color: #555;

    font-size: 9px;
    font-weight: 800;

    letter-spacing: 3px;
}


/* =========================
   DRAW BUTTON
========================= */

.draw-button {
    width: 100%;

    margin-top: 20px;

    padding: 19px;

    border: none;
    border-radius: 18px;

    background: var(--white);

    color: #080808;

    font-size: 17px;
    font-weight: 900;

    letter-spacing: 1px;

    cursor: pointer;
}

.draw-button.dare-mode {
    background: var(--red);
    color: white;
}

.quiz-draw-button {
    background: var(--white);
    color: #080808;
}

.draw-button:active {
    transform: scale(0.98);
}

.deck-info {
    margin: 12px 20px 0;

    color: #555;

    text-align: center;

    font-size: 10px;

    line-height: 1.4;
}


/* =========================
   FOOTER
========================= */

footer {
    display: flex;

    justify-content: center;

    gap: 12px;

    margin-top: 24px;

    color: #3d3d3d;

    font-family: Georgia, serif;

    font-size: 9px;

    letter-spacing: 3px;
}


/* =========================
   SMALL PHONES
========================= */

@media (max-height: 700px) {

    .hero-photo {
        height: 230px;
    }

    h1 {
        font-size: 48px;
    }

    .subtitle {
        margin: 12px 0 20px;
    }

    .stats {
        margin-top: 20px;
    }

    .card {
        min-height: 350px;
    }

    .card-text {
        font-size: 25px;
    }

    .quiz-card {
        min-height: 450px;
    }
}
