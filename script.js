/* =========================================
   DESPEDIDA - PARTY EVENTS V2
========================================= */


/* =========================================
   CONFIGURAZIONE
========================================= */

const TEQUILA_INTERVAL = 30 * 60 * 1000;
const QUIZ_INTERVAL = 10 * 60 * 1000;

const EVENT_MIN_INTERVAL = 8 * 60 * 1000;
const EVENT_MAX_INTERVAL = 18 * 60 * 1000;


/* =========================================
   MAZZI
========================================= */

const DEFAULT_TRUTHS = [
    "Qual è la cosa più imbarazzante che hai fatto da ubriaco?",
    "Chi di questa stanza conosci meno di quanto vorresti ammettere?",
    "Qual è stata la tua peggior figura di merda?",
    "Hai mai mentito a qualcuno presente qui?",
    "Qual è il tuo peggior difetto in una relazione?",
    "Chi chiameresti per primo se finissi nei guai stanotte?",
    "Qual è una cosa che non hai mai confessato ai tuoi amici?",
    "Qual è stata la tua peggior decisione sentimentale?",
    "Con chi dei presenti andresti più volentieri in viaggio?",
    "Qual è la bugia più assurda che hai raccontato?"
];

const DEFAULT_DARES = [
    "Fai un brindisi drammatico alla partenza di Matteo.",
    "Imita una persona presente finché qualcuno indovina.",
    "Lascia che il gruppo scelga una foto dalla tua galleria da mostrare.",
    "Parla con un accento assurdo fino al prossimo turno.",
    "Fai 15 squat mentre reciti un discorso motivazionale.",
    "Manda un vocale di 10 secondi scelto dal gruppo.",
    "Fai una dichiarazione d'amore a un oggetto nella stanza.",
    "Lascia che qualcuno ti faccia una domanda a cui devi rispondere sinceramente.",
    "Racconta una storia imbarazzante come se fosse un'impresa eroica.",
    "Fai una passerella drammatica davanti a tutti."
];

const DEFAULT_QUIZZES = [
    {
        question: "Qual è la capitale dell'Australia?",
        options: [
            "Sydney",
            "Melbourne",
            "Canberra",
            "Perth"
        ],
        correct: 2
    },
    {
        question: "Quanti cuori ha un polpo?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correct: 2
    },
    {
        question: "Quale pianeta è il più grande del Sistema Solare?",
        options: [
            "Saturno",
            "Giove",
            "Nettuno",
            "Terra"
        ],
        correct: 1
    },
    {
        question: "In che anno cadde il Muro di Berlino?",
        options: [
            "1987",
            "1988",
            "1989",
            "1991"
        ],
        correct: 2
    },
    {
        question: "Quale animale ha le impronte digitali molto simili a quelle umane?",
        options: [
            "Koala",
            "Gorilla",
            "Panda",
            "Bradipo"
        ],
        correct: 0
    },
    {
        question: "Qual è l'elemento chimico con simbolo Au?",
        options: [
            "Argento",
            "Oro",
            "Alluminio",
            "Rame"
        ],
        correct: 1
    },
    {
        question: "Quale oceano è il più grande?",
        options: [
            "Atlantico",
            "Indiano",
            "Pacifico",
            "Artico"
        ],
        correct: 2
    },
    {
        question: "Quante ossa ha normalmente un adulto?",
        options: [
            "186",
            "196",
            "206",
            "216"
        ],
        correct: 2
    },
    {
        question: "Quale di questi NON è uno dei sette nani Disney in italiano?",
        options: [
            "Gongolo",
            "Mammolo",
            "Pisolo",
            "Timido"
        ],
        correct: 3
    },
    {
        question: "Qual è il mammifero più grande del mondo?",
        options: [
            "Elefante africano",
            "Balenottera azzurra",
            "Orca",
            "Capodoglio"
        ],
        correct: 1
    }
];


/* =========================================
   POTERI
========================================= */

const SPECIAL_POWERS = [
    {
        id: "bounce",
        name: "🔄 RIMBALZO",
        description:
            "Puoi passare una futura Verità o un futuro Obbligo a un altro giocatore."
    },
    {
        id: "revenge",
        name: "😈 VENDETTA",
        description:
            "Puoi scegliere la vittima di un futuro evento."
    },
    {
        id: "immunity",
        name: "🛡 IMMUNITÀ",
        description:
            "Puoi rifiutare un futuro Obbligo."
    },
    {
        id: "double",
        name: "💀 DOPPIO GUAIO",
        description:
            "Puoi scegliere una persona che affronti con te un futuro evento."
    }
];


/* =========================================
   STATO
========================================= */

let truths = [];
let dares = [];
let quizzes = [];

let truthIndex = 0;
let dareIndex = 0;
let quizIndex = 0;

let players = [];
let celebrantId = null;

let currentMode = null;
let currentQuiz = null;
let currentQuizRevealed = false;

let nightRunning = false;

let tequilaTarget = null;
let quizTarget = null;
let eventTarget = null;

let lastSelectedPlayerId = null;


/* =========================================
   EVENTI AUTOMATICI
========================================= */

let eventQueue = [];

let currentAutomaticEvent = null;

let activeEventPlayerId = null;

let quizTimeQuestion = null;
let quizTimeRevealed = false;


/* =========================================
   ELEMENTI DOM
========================================= */

const playersScreen =
    document.getElementById("players-screen");

const homeScreen =
    document.getElementById("home-screen");

const gameScreen =
    document.getElementById("game-screen");

const quizScreen =
    document.getElementById("quiz-screen");


const playersList =
    document.getElementById("players-list");

const celebrantSelect =
    document.getElementById("celebrant-select");

const playersError =
    document.getElementById("players-error");


const tequilaTimer =
    document.getElementById("tequila-timer");

const quizTimer =
    document.getElementById("quiz-timer");

const eventTimer =
    document.getElementById("event-timer");

const nightButton =
    document.getElementById("night-button");


const playersHomeCount =
    document.getElementById("players-home-count");

const truthHomeCounter =
    document.getElementById("truth-home-counter");

const dareHomeCounter =
    document.getElementById("dare-home-counter");

const quizHomeCounter =
    document.getElementById("quiz-home-counter");


const gameTitle =
    document.getElementById("game-title");

const activePlayerBanner =
    document.getElementById("active-player-banner");

const cardIcon =
    document.getElementById("card-icon");

const cardType =
    document.getElementById("card-type");

const cardText =
    document.getElementById("card-text");

const cardNumber =
    document.getElementById("card-number");

const drawButton =
    document.getElementById("draw-button");


const quizPlayerBanner =
    document.getElementById("quiz-player-banner");

const quizQuestion =
    document.getElementById("quiz-question");

const quizOptions =
    document.getElementById("quiz-options");

const quizResult =
    document.getElementById("quiz-result");

const quizNumber =
    document.getElementById("quiz-number");

const quizMainButton =
    document.getElementById("quiz-main-button");


const eventOverlay =
    document.getElementById("event-overlay");

const eventOverlayIcon =
    document.getElementById("event-overlay-icon");

const eventOverlayLabel =
    document.getElementById("event-overlay-label");

const eventPlayerName =
    document.getElementById("event-player-name");

const eventDescription =
    document.getElementById("event-description");

const eventStandardActions =
    document.getElementById("event-standard-actions");

const eventSpecialActions =
    document.getElementById("event-special-actions");

const eventSpecialButton =
    document.getElementById("event-special-button");


const tequilaOverlay =
    document.getElementById("tequila-overlay");

const shotSaversContainer =
    document.getElementById("shot-savers-container");


const quizTimeOverlay =
    document.getElementById("quiz-time-overlay");

const quizTimeQuestionElement =
    document.getElementById("quiz-time-question");

const quizTimeOptions =
    document.getElementById("quiz-time-options");

const quizTimeResult =
    document.getElementById("quiz-time-result");

const quizTimeButton =
    document.getElementById("quiz-time-button");


const powerOverlay =
    document.getElementById("power-overlay");

const powerPlayerName =
    document.getElementById("power-player-name");

const powerName =
    document.getElementById("power-name");

const powerDescription =
    document.getElementById("power-description");


/* =========================================
   UTILITY
========================================= */

function generateId()
{
    return (
        Date.now().toString(36) +
        Math.random().toString(36).slice(2)
    );
}


function shuffle(array)
{
    const copy = [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    )
    {
        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];
    }

    return copy;
}


function randomEventDelay()
{
    return (
        EVENT_MIN_INTERVAL +
        Math.floor(
            Math.random() *
            (
                EVENT_MAX_INTERVAL -
                EVENT_MIN_INTERVAL +
                1
            )
        )
    );
}


function formatTime(milliseconds)
{
    const totalSeconds =
        Math.max(
            0,
            Math.ceil(milliseconds / 1000)
        );

    const minutes =
        Math.floor(totalSeconds / 60);

    const seconds =
        totalSeconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0")
    );
}


function vibrate()
{
    if (navigator.vibrate)
    {
        navigator.vibrate(150);
    }
}


function vibratePattern()
{
    if (navigator.vibrate)
    {
        navigator.vibrate([
            150,
            100,
            150,
            100,
            300
        ]);
    }
}


function hideAllScreens()
{
    playersScreen.classList.remove("active");
    homeScreen.classList.remove("active");
    gameScreen.classList.remove("active");
    quizScreen.classList.remove("active");
}


function hidePlayerBanners()
{
    activePlayerBanner.classList.remove("active");
    quizPlayerBanner.classList.remove("active");

    activePlayerBanner.textContent = "";
    quizPlayerBanner.textContent = "";
}


function getPlayerById(id)
{
    return players.find(
        player => player.id === id
    );
}


/* =========================================
   LOCAL STORAGE
========================================= */

function saveGame()
{
    localStorage.setItem(
        "despedida_truth",
        JSON.stringify(truths)
    );

    localStorage.setItem(
        "despedida_dare",
        JSON.stringify(dares)
    );

    localStorage.setItem(
        "despedida_quiz",
        JSON.stringify(quizzes)
    );

    localStorage.setItem(
        "despedida_players",
        JSON.stringify(players)
    );

    if (celebrantId)
    {
        localStorage.setItem(
            "despedida_celebrant",
            celebrantId
        );
    }
    else
    {
        localStorage.removeItem(
            "despedida_celebrant"
        );
    }

    if (lastSelectedPlayerId)
    {
        localStorage.setItem(
            "despedida_last_player",
            lastSelectedPlayerId
        );
    }
    else
    {
        localStorage.removeItem(
            "despedida_last_player"
        );
    }

    localStorage.setItem(
        "despedida_night_running",
        String(nightRunning)
    );


    saveTarget(
        "despedida_tequila_target",
        tequilaTarget
    );

    saveTarget(
        "despedida_quiz_target",
        quizTarget
    );

    saveTarget(
        "despedida_event_target",
        eventTarget
    );


    localStorage.setItem(
        "despedida_event_queue",
        JSON.stringify(eventQueue)
    );

    if (currentAutomaticEvent)
    {
        localStorage.setItem(
            "despedida_current_event",
            JSON.stringify(
                currentAutomaticEvent
            )
        );
    }
    else
    {
        localStorage.removeItem(
            "despedida_current_event"
        );
    }
}


function saveTarget(key, value)
{
    if (value)
    {
        localStorage.setItem(
            key,
            String(value)
        );
    }
    else
    {
        localStorage.removeItem(key);
    }
}


function loadGame()
{
    truths =
        loadArray(
            "despedida_truth",
            DEFAULT_TRUTHS
        );

    dares =
        loadArray(
            "despedida_dare",
            DEFAULT_DARES
        );

    quizzes =
        loadArray(
            "despedida_quiz",
            DEFAULT_QUIZZES
        );


    const storedPlayers =
        localStorage.getItem(
            "despedida_players"
        );

    if (storedPlayers)
    {
        try
        {
            players =
                JSON.parse(storedPlayers);
        }
        catch
        {
            players = [];
        }
    }


    players =
        players.map(
            player => ({
                id:
                    player.id ||
                    generateId(),

                name:
                    player.name ||
                    "Giocatore",

                turns:
                    Number(
                        player.turns
                    ) || 0,

                quizCorrect:
                    Number(
                        player.quizCorrect
                    ) || 0,

                saveShot:
                    Number(
                        player.saveShot
                    ) || 0,

                powers:
                    Array.isArray(
                        player.powers
                    )
                        ? player.powers
                        : []
            })
        );


    celebrantId =
        localStorage.getItem(
            "despedida_celebrant"
        );


    lastSelectedPlayerId =
        localStorage.getItem(
            "despedida_last_player"
        );


    nightRunning =
        localStorage.getItem(
            "despedida_night_running"
        ) === "true";


    tequilaTarget =
        loadTarget(
            "despedida_tequila_target"
        );

    quizTarget =
        loadTarget(
            "despedida_quiz_target"
        );

    eventTarget =
        loadTarget(
            "despedida_event_target"
        );


    const storedQueue =
        localStorage.getItem(
            "despedida_event_queue"
        );

    if (storedQueue)
    {
        try
        {
            eventQueue =
                JSON.parse(storedQueue);

            if (!Array.isArray(eventQueue))
            {
                eventQueue = [];
            }
        }
        catch
        {
            eventQueue = [];
        }
    }


    const storedCurrent =
        localStorage.getItem(
            "despedida_current_event"
        );

    if (storedCurrent)
    {
        try
        {
            currentAutomaticEvent =
                JSON.parse(storedCurrent);
        }
        catch
        {
            currentAutomaticEvent = null;
        }
    }


    if (nightRunning)
    {
        const now = Date.now();

        if (!tequilaTarget)
        {
            tequilaTarget =
                now + TEQUILA_INTERVAL;
        }

        if (!quizTarget)
        {
            quizTarget =
                now + QUIZ_INTERVAL;
        }

        if (
            !eventTarget &&
            !currentAutomaticEvent
        )
        {
            eventTarget =
                now + randomEventDelay();
        }
    }


    updateHomeCounters();
    updatePlayersHome();
    updateNightUI();
}


function loadArray(key, fallback)
{
    const stored =
        localStorage.getItem(key);

    if (!stored)
    {
        return shuffle(fallback);
    }

    try
    {
        const parsed =
            JSON.parse(stored);

        if (
            Array.isArray(parsed) &&
            parsed.length > 0
        )
        {
            return parsed;
        }
    }
    catch
    {
        /* niente */
    }

    return shuffle(fallback);
}


function loadTarget(key)
{
    const value =
        Number(
            localStorage.getItem(key)
        );

    return value || null;
}


/* =========================================
   GIOCATORI
========================================= */

function openPlayersScreen()
{
    hideAllScreens();

    playersScreen.classList.add("active");

    renderPlayerInputs();
}


function renderPlayerInputs()
{
    playersList.innerHTML = "";

    if (players.length === 0)
    {
        addPlayerInput();
        addPlayerInput();

        updateCelebrantSelect();
        return;
    }


    players.forEach(
        player =>
        {
            createPlayerInput(
                player.name,
                player.id
            );
        }
    );

    updateCelebrantSelect();
}


function addPlayerInput()
{
    createPlayerInput("", generateId());

    updateCelebrantSelect();
}


function createPlayerInput(
    value,
    id
)
{
    const row =
        document.createElement("div");

    row.className =
        "player-input-row";

    row.dataset.playerId = id;


    const input =
        document.createElement("input");

    input.type = "text";
    input.placeholder =
        "Nome giocatore";

    input.value = value;

    input.addEventListener(
        "input",
        updateCelebrantSelect
    );


    const removeButton =
        document.createElement("button");

    removeButton.type = "button";

    removeButton.className =
        "remove-player-button";

    removeButton.textContent = "✕";

    removeButton.onclick =
        function ()
        {
            row.remove();

            updateCelebrantSelect();
        };


    row.appendChild(input);
    row.appendChild(removeButton);

    playersList.appendChild(row);
}


function updateCelebrantSelect()
{
    const oldValue =
        celebrantSelect.value ||
        celebrantId;


    celebrantSelect.innerHTML = "";


    const rows =
        [
            ...playersList.querySelectorAll(
                ".player-input-row"
            )
        ];


    rows.forEach(
        row =>
        {
            const input =
                row.querySelector("input");

            const name =
                input.value.trim();

            if (!name)
            {
                return;
            }

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                row.dataset.playerId;

            option.textContent =
                name;

            celebrantSelect.appendChild(
                option
            );
        }
    );


    if (
        oldValue &&
        [
            ...celebrantSelect.options
        ].some(
            option =>
                option.value === oldValue
        )
    )
    {
        celebrantSelect.value =
            oldValue;
    }
}


function savePlayers()
{
    const rows =
        [
            ...playersList.querySelectorAll(
                ".player-input-row"
            )
        ];


    const newPlayers = [];


    rows.forEach(
        row =>
        {
            const input =
                row.querySelector("input");

            const name =
                input.value.trim();

            if (!name)
            {
                return;
            }


            const oldPlayer =
                getPlayerById(
                    row.dataset.playerId
                );


            newPlayers.push({
                id:
                    row.dataset.playerId,

                name: name,

                turns:
                    oldPlayer
                        ? oldPlayer.turns
                        : 0,

                quizCorrect:
                    oldPlayer
                        ? oldPlayer.quizCorrect
                        : 0,

                saveShot:
                    oldPlayer
                        ? oldPlayer.saveShot
                        : 0,

                powers:
                    oldPlayer
                        ? oldPlayer.powers
                        : []
            });
        }
    );


    if (newPlayers.length < 2)
    {
        playersError.textContent =
            "Servono almeno 2 giocatori.";

        return;
    }


    players = newPlayers;

    celebrantId =
        celebrantSelect.value ||
        players[0].id;


    playersError.textContent = "";

    saveGame();

    updatePlayersHome();

    goHome();
}


function updatePlayersHome()
{
    playersHomeCount.textContent =
        players.length;
}


/* =========================================
   HOME
========================================= */

function goHome()
{
    hideAllScreens();

    homeScreen.classList.add("active");

    currentMode = null;

    hidePlayerBanners();

    updateHomeCounters();
    updatePlayersHome();

    processEventQueue();
}


function updateHomeCounters()
{
    truthHomeCounter.textContent =
        truths.length;

    dareHomeCounter.textContent =
        dares.length;

    quizHomeCounter.textContent =
        quizzes.length;
}


/* =========================================
   AVVIO / STOP SERATA
========================================= */

function toggleNight()
{
    if (players.length < 2)
    {
        alert(
            "Prima salva almeno 2 giocatori."
        );

        openPlayersScreen();

        return;
    }


    if (!nightRunning)
    {
        nightRunning = true;

        const now = Date.now();

        tequilaTarget =
            now + TEQUILA_INTERVAL;

        quizTarget =
            now + QUIZ_INTERVAL;

        eventTarget =
            now + randomEventDelay();


        eventQueue = [];
        currentAutomaticEvent = null;


        saveGame();

        updateNightUI();
        updateTimers();

        vibrate();

        return;
    }


    const stop =
        confirm(
            "Vuoi fermare la serata e azzerare tutti i timer?"
        );


    if (!stop)
    {
        return;
    }


    nightRunning = false;

    tequilaTarget = null;
    quizTarget = null;
    eventTarget = null;

    eventQueue = [];
    currentAutomaticEvent = null;

    activeEventPlayerId = null;

    closeAllAutomaticOverlays();

    saveGame();

    updateNightUI();
    updateTimers();
}


function updateNightUI()
{
    if (nightRunning)
    {
        nightButton.textContent =
            "■ FERMA LA SERATA";

        nightButton.classList.add(
            "running"
        );
    }
    else
    {
        nightButton.textContent =
            "☠ INIZIA LA SERATA";

        nightButton.classList.remove(
            "running"
        );
    }
}


/* =========================================
   TIMER
========================================= */

function updateTimers()
{
    if (!nightRunning)
    {
        tequilaTimer.textContent =
            "30:00";

        quizTimer.textContent =
            "10:00";

        eventTimer.textContent =
            "???";

        return;
    }


    const now = Date.now();


    checkExpiredTimers(now);


    if (tequilaTarget)
    {
        tequilaTimer.textContent =
            formatTime(
                tequilaTarget - now
            );
    }
    else
    {
        tequilaTimer.textContent =
            "00:00";
    }


    if (quizTarget)
    {
        quizTimer.textContent =
            formatTime(
                quizTarget - now
            );
    }
    else
    {
        quizTimer.textContent =
            "00:00";
    }


    eventTimer.textContent = "???";


    processEventQueue();
}


function checkExpiredTimers(now)
{
    if (
        tequilaTarget &&
        now >= tequilaTarget
    )
    {
        tequilaTarget = null;

        enqueueAutomaticEvent({
            type: "tequila"
        });
    }


    if (
        quizTarget &&
        now >= quizTarget
    )
    {
        quizTarget = null;

        enqueueAutomaticEvent({
            type: "quiz-time"
        });
    }


    if (
        eventTarget &&
        now >= eventTarget
    )
    {
        eventTarget = null;

        enqueueAutomaticEvent({
            type: "random"
        });
    }


    saveGame();
}


/* =========================================
   CODA EVENTI
========================================= */

function enqueueAutomaticEvent(event)
{
    const alreadyQueued =
        eventQueue.some(
            item =>
                item.type === event.type
        );


    if (alreadyQueued)
    {
        return;
    }


    if (
        currentAutomaticEvent &&
        currentAutomaticEvent.type ===
            event.type
    )
    {
        return;
    }


    eventQueue.push(event);
}


function processEventQueue()
{
    if (!nightRunning)
    {
        return;
    }


    if (currentAutomaticEvent)
    {
        restoreCurrentAutomaticEvent();

        return;
    }


    if (eventQueue.length === 0)
    {
        return;
    }


    /*
       PRIORITÀ:
       1 Tequila
       2 Quiz
       3 Random
    */

    const priorities = {
        tequila: 1,
        "quiz-time": 2,
        random: 3
    };


    eventQueue.sort(
        (a, b) =>
            priorities[a.type] -
            priorities[b.type]
    );


    currentAutomaticEvent =
        eventQueue.shift();


    saveGame();


    restoreCurrentAutomaticEvent();
}


function restoreCurrentAutomaticEvent()
{
    if (!currentAutomaticEvent)
    {
        return;
    }


    closeAllAutomaticOverlays();


    if (
        currentAutomaticEvent.type ===
        "tequila"
    )
    {
        showTequilaTime();

        return;
    }


    if (
        currentAutomaticEvent.type ===
        "quiz-time"
    )
    {
        showQuizTime();

        return;
    }


    if (
        currentAutomaticEvent.type ===
        "random"
    )
    {
        showRandomEvent();
    }
}


function finishAutomaticEvent()
{
    currentAutomaticEvent = null;

    saveGame();

    setTimeout(
        processEventQueue,
        150
    );
}


function closeAllAutomaticOverlays()
{
    eventOverlay.classList.remove(
        "active"
    );

    tequilaOverlay.classList.remove(
        "active"
    );

    quizTimeOverlay.classList.remove(
        "active"
    );

    powerOverlay.classList.remove(
        "active"
    );
}


/* =========================================
   SELEZIONE GIOCATORE BILANCIATA
========================================= */

function selectNextPlayer()
{
    if (players.length === 0)
    {
        return null;
    }


    const minimumTurns =
        Math.min(
            ...players.map(
                player =>
                    player.turns
            )
        );


    let candidates =
        players.filter(
            player =>
                player.turns <=
                minimumTurns + 1
        );


    if (
        candidates.length > 1 &&
        lastSelectedPlayerId
    )
    {
        const withoutLast =
            candidates.filter(
                player =>
                    player.id !==
                    lastSelectedPlayerId
            );

        if (withoutLast.length > 0)
        {
            candidates =
                withoutLast;
        }
    }


    const player =
        candidates[
            Math.floor(
                Math.random() *
                candidates.length
            )
        ];


    lastSelectedPlayerId =
        player.id;


    saveGame();


    return player;
}


/* =========================================
   RANDOM EVENT
========================================= */

function pickRandomEventType()
{
    const roll =
        Math.random() * 100;


    if (roll < 60)
    {
        return "victim";
    }


    if (roll < 75)
    {
        return "choose-victim";
    }


    if (roll < 85)
    {
        return "drink-with";
    }


    if (roll < 95)
    {
        return "special-power";
    }


    return "save-shot";
}


function showRandomEvent()
{
    /*
       Se l'evento è stato già generato
       prima di un refresh, lo recuperiamo.
    */

    if (
        currentAutomaticEvent.randomData
    )
    {
        renderRandomEvent(
            currentAutomaticEvent.randomData
        );

        return;
    }


    const player =
        selectNextPlayer();


    if (!player)
    {
        scheduleNextRandomEvent();

        finishAutomaticEvent();

        return;
    }


    const eventType =
        pickRandomEventType();


    const data = {
        eventType: eventType,
        playerId: player.id
    };


    currentAutomaticEvent.randomData =
        data;


    activeEventPlayerId =
        player.id;


    saveGame();


    renderRandomEvent(data);

    vibratePattern();
}


function renderRandomEvent(data)
{
    const player =
        getPlayerById(
            data.playerId
        );


    if (!player)
    {
        scheduleNextRandomEvent();

        finishAutomaticEvent();

        return;
    }


    activeEventPlayerId =
        player.id;


    eventOverlay.classList.add(
        "active"
    );


    eventStandardActions.classList.add(
        "hidden"
    );

    eventSpecialActions.classList.add(
        "hidden"
    );


    if (data.eventType === "victim")
    {
        eventOverlayIcon.textContent =
            "☠";

        eventOverlayLabel.textContent =
            "PROSSIMA VITTIMA";

        eventPlayerName.textContent =
            player.name.toUpperCase();

        eventDescription.textContent =
            "Scegli come affrontare il tuo destino.";

        eventStandardActions.classList.remove(
            "hidden"
        );

        return;
    }


    if (
        data.eventType ===
        "choose-victim"
    )
    {
        eventOverlayIcon.textContent =
            "🎯";

        eventOverlayLabel.textContent =
            "SCEGLI UNA VITTIMA";

        eventPlayerName.textContent =
            player.name.toUpperCase();

        eventDescription.textContent =
            "Scegli un'altra persona. Sarà lei a decidere tra Verità e Obbligo.";

        eventSpecialButton.textContent =
            "HO SCELTO LA VITTIMA";

        eventSpecialActions.classList.remove(
            "hidden"
        );

        return;
    }


    if (
        data.eventType ===
        "drink-with"
    )
    {
        eventOverlayIcon.textContent =
            "🍻";

        eventOverlayLabel.textContent =
            "BEVI CON X";

        eventPlayerName.textContent =
            player.name.toUpperCase();

        eventDescription.textContent =
            "Scegli una persona con cui bere.";

        eventSpecialButton.textContent =
            "🍻 FATTO";

        eventSpecialActions.classList.remove(
            "hidden"
        );

        return;
    }


    if (
        data.eventType ===
        "special-power"
    )
    {
        giveSpecialPower(player);

        return;
    }


    if (
        data.eventType ===
        "save-shot"
    )
    {
        giveSaveShot(player);
    }
}


/* =========================================
   RANDOM: VERITÀ / OBBLIGO
========================================= */

function chooseEventMode(mode)
{
    const player =
        getPlayerById(
            activeEventPlayerId
        );


    eventOverlay.classList.remove(
        "active"
    );


    if (player)
    {
        player.turns += 1;
    }


    scheduleNextRandomEvent();

    saveGame();


    currentAutomaticEvent = null;


    startGame(
        mode,
        player
            ? player.id
            : null,
        true
    );
}


/* =========================================
   EVENTI SPECIALI
========================================= */

function completeSpecialEvent()
{
    if (
        !currentAutomaticEvent ||
        !currentAutomaticEvent.randomData
    )
    {
        return;
    }


    const data =
        currentAutomaticEvent.randomData;


    const player =
        getPlayerById(
            data.playerId
        );


    if (player)
    {
        player.turns += 1;
    }


    /*
       SCEGLI VITTIMA:
       dopo averla scelta fisicamente,
       apriamo scelta Verità / Obbligo.
    */

    if (
        data.eventType ===
        "choose-victim"
    )
    {
        eventOverlayLabel.textContent =
            "LA VITTIMA È STATA SCELTA";

        eventPlayerName.textContent =
            "VERITÀ O OBBLIGO?";

        eventDescription.textContent =
            "La persona scelta decide il proprio destino.";

        eventSpecialActions.classList.add(
            "hidden"
        );

        eventStandardActions.classList.remove(
            "hidden"
        );

        /*
           Nessun giocatore specifico:
           la vittima è scelta dal gruppo.
        */

        activeEventPlayerId = null;

        saveGame();

        return;
    }


    eventOverlay.classList.remove(
        "active"
    );


    scheduleNextRandomEvent();

    saveGame();

    finishAutomaticEvent();
}


/* =========================================
   SALVA-SHOT
========================================= */

function giveSaveShot(player)
{
    /*
       Max 1 per giocatore.
       Se lo possiede già, non accumula.
    */

    player.saveShot = 1;

    player.turns += 1;


    eventOverlayIcon.textContent =
        "🛡️";

    eventOverlayLabel.textContent =
        "SALVA-SHOT";

    eventPlayerName.textContent =
        player.name.toUpperCase();

    eventDescription.textContent =
        "Hai ottenuto un Salva-Shot. Potrai saltare un futuro Tequila Time.";

    eventSpecialButton.textContent =
        "PRENDI IL SALVA-SHOT";

    eventSpecialActions.classList.remove(
        "hidden"
    );


    scheduleNextRandomEvent();

    saveGame();
}


/* =========================================
   POTERI SPECIALI
========================================= */

function giveSpecialPower(player)
{
    const power =
        SPECIAL_POWERS[
            Math.floor(
                Math.random() *
                SPECIAL_POWERS.length
            )
        ];


    player.powers.push(
        power.id
    );


    player.turns += 1;


    eventOverlay.classList.remove(
        "active"
    );


    powerPlayerName.textContent =
        player.name.toUpperCase();

    powerName.textContent =
        power.name;

    powerDescription.textContent =
        power.description;


    powerOverlay.classList.add(
        "active"
    );


    scheduleNextRandomEvent();

    saveGame();
}


function closePowerOverlay()
{
    powerOverlay.classList.remove(
        "active"
    );

    finishAutomaticEvent();
}


/* =========================================
   PROGRAMMA PROSSIMO RANDOM
========================================= */

function scheduleNextRandomEvent()
{
    if (!nightRunning)
    {
        eventTarget = null;

        return;
    }


    eventTarget =
        Date.now() +
        randomEventDelay();
}


/* =========================================
   TEQUILA TIME
========================================= */

function showTequilaTime()
{
    renderShotSavers();

    tequilaOverlay.classList.add(
        "active"
    );

    vibratePattern();
}


function renderShotSavers()
{
    shotSaversContainer.innerHTML = "";


    const eligiblePlayers =
        players.filter(
            player =>
                player.saveShot > 0
        );


    if (eligiblePlayers.length === 0)
    {
        return;
    }


    const title =
        document.createElement("div");

    title.className =
        "shot-savers-title";

    title.textContent =
        "🛡 SALVA-SHOT DISPONIBILI";

    shotSaversContainer.appendChild(
        title
    );


    eligiblePlayers.forEach(
        player =>
        {
            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "shot-saver-button";

            button.textContent =
                "🛡 " +
                player.name +
                " USA SALVA-SHOT";


            button.onclick =
                function ()
                {
                    useSaveShot(
                        player.id
                    );
                };


            shotSaversContainer.appendChild(
                button
            );
        }
    );
}


function useSaveShot(playerId)
{
    const player =
        getPlayerById(playerId);


    if (
        !player ||
        player.saveShot <= 0
    )
    {
        return;
    }


    const use =
        confirm(
            player.name +
            " vuole usare il Salva-Shot?"
        );


    if (!use)
    {
        return;
    }


    player.saveShot = 0;


    saveGame();

    renderShotSavers();


    alert(
        "🛡 " +
        player.name +
        " salta questo Tequila Time."
    );
}


function acknowledgeTequila()
{
    tequilaOverlay.classList.remove(
        "active"
    );


    if (nightRunning)
    {
        tequilaTarget =
            Date.now() +
            TEQUILA_INTERVAL;
    }


    saveGame();

    finishAutomaticEvent();
}


/* =========================================
   TEQUILA -> VERITÀ / OBBLIGO
========================================= */

function replaceTequilaWith(mode)
{
    tequilaOverlay.classList.remove(
        "active"
    );


    if (nightRunning)
    {
        tequilaTarget =
            Date.now() +
            TEQUILA_INTERVAL;
    }


    currentAutomaticEvent = null;


    saveGame();


    startGame(
        mode,
        null,
        false
    );
}


/* =========================================
   QUIZ TIME COLLETTIVO
========================================= */

function showQuizTime()
{
    if (!quizTimeQuestion)
    {
        quizTimeQuestion =
            quizzes[
                Math.floor(
                    Math.random() *
                    quizzes.length
                )
            ];
    }


    quizTimeRevealed = false;


    quizTimeQuestionElement.textContent =
        quizTimeQuestion.question;


    quizTimeOptions.innerHTML = "";


    quizTimeQuestion.options.forEach(
        (option, index) =>
        {
            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "quiz-option";

            element.textContent =
                String.fromCharCode(
                    65 + index
                ) +
                ". " +
                option;

            element.dataset.index =
                index;

            quizTimeOptions.appendChild(
                element
            );
        }
    );


    quizTimeResult.textContent = "";

    quizTimeButton.textContent =
        "👁 MOSTRA RISPOSTA";


    quizTimeOverlay.classList.add(
        "active"
    );


    vibratePattern();
}


function quizTimeAction()
{
    if (!quizTimeQuestion)
    {
        return;
    }


    if (!quizTimeRevealed)
    {
        quizTimeRevealed = true;


        const options =
            [
                ...quizTimeOptions.querySelectorAll(
                    ".quiz-option"
                )
            ];


        options.forEach(
            option =>
            {
                const index =
                    Number(
                        option.dataset.index
                    );


                if (
                    index ===
                    quizTimeQuestion.correct
                )
                {
                    option.classList.add(
                        "correct"
                    );
                }
            }
        );


        quizTimeResult.textContent =
            "Chi ha sbagliato beve.";


        quizTimeButton.textContent =
            "CONTINUA";


        return;
    }


    quizTimeOverlay.classList.remove(
        "active"
    );


    quizTimeQuestion = null;
    quizTimeRevealed = false;


    if (nightRunning)
    {
        quizTarget =
            Date.now() +
            QUIZ_INTERVAL;
    }


    saveGame();

    finishAutomaticEvent();
}


/* =========================================
   GIOCHI MANUALI
========================================= */

function startGame(
    mode,
    forcedPlayerId = null,
    fromAutomaticEvent = false
)
{
    currentMode = mode;


    if (mode === "quiz")
    {
        startManualQuiz(
            forcedPlayerId
        );

        return;
    }


    hideAllScreens();

    gameScreen.classList.add(
        "active"
    );


    if (mode === "truth")
    {
        gameTitle.textContent =
            "VERITÀ";

        cardIcon.textContent =
            "👁";

        cardType.textContent =
            "VERITÀ";
    }
    else
    {
        gameTitle.textContent =
            "OBBLIGO";

        cardIcon.textContent =
            "⚰";

        cardType.textContent =
            "OBBLIGO";
    }


    cardText.textContent =
        "Premi il pulsante per pescare.";

    cardNumber.textContent = "";

    drawButton.textContent =
        "PESCA";


    if (forcedPlayerId)
    {
        const player =
            getPlayerById(
                forcedPlayerId
            );

        if (player)
        {
            activePlayerBanner.textContent =
                "☠ " +
                player.name.toUpperCase();

            activePlayerBanner.classList.add(
                "active"
            );
        }
    }
    else
    {
        activePlayerBanner.classList.remove(
            "active"
        );
    }
}


function drawCard()
{
    if (currentMode === "truth")
    {
        if (truths.length === 0)
        {
            truths =
                shuffle(DEFAULT_TRUTHS);
        }


        const card =
            truths[
                truthIndex %
                truths.length
            ];


        cardText.textContent =
            card;


        cardNumber.textContent =
            "VERITÀ " +
            (
                (
                    truthIndex %
                    truths.length
                ) + 1
            ) +
            " / " +
            truths.length;


        truthIndex =
            (
                truthIndex + 1
            ) %
            truths.length;


        updateHomeCounters();

        return;
    }


    if (currentMode === "dare")
    {
        if (dares.length === 0)
        {
            dares =
                shuffle(DEFAULT_DARES);
        }


        const card =
            dares[
                dareIndex %
                dares.length
            ];


        cardText.textContent =
            card;


        cardNumber.textContent =
            "OBBLIGO " +
            (
                (
                    dareIndex %
                    dares.length
                ) + 1
            ) +
            " / " +
            dares.length;


        dareIndex =
            (
                dareIndex + 1
            ) %
            dares.length;


        updateHomeCounters();
    }
}


/* =========================================
   QUIZ MANUALE
========================================= */

function startManualQuiz(
    forcedPlayerId = null
)
{
    currentMode = "quiz";

    hideAllScreens();

    quizScreen.classList.add(
        "active"
    );


    if (forcedPlayerId)
    {
        const player =
            getPlayerById(
                forcedPlayerId
            );

        if (player)
        {
            quizPlayerBanner.textContent =
                "🧠 " +
                player.name.toUpperCase();

            quizPlayerBanner.classList.add(
                "active"
            );
        }
    }
    else
    {
        quizPlayerBanner.classList.remove(
            "active"
        );
    }


    loadManualQuiz();
}


function loadManualQuiz()
{
    if (quizzes.length === 0)
    {
        quizzes =
            shuffle(DEFAULT_QUIZZES);
    }


    currentQuiz =
        quizzes[
            quizIndex %
            quizzes.length
        ];


    currentQuizRevealed = false;


    quizQuestion.textContent =
        currentQuiz.question;


    quizOptions.innerHTML = "";


    currentQuiz.options.forEach(
        (option, index) =>
        {
            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "quiz-option";

            element.textContent =
                String.fromCharCode(
                    65 + index
                ) +
                ". " +
                option;

            element.dataset.index =
                index;

            quizOptions.appendChild(
                element
            );
        }
    );


    quizResult.textContent = "";


    quizNumber.textContent =
        "QUIZ " +
        (
            (
                quizIndex %
                quizzes.length
            ) + 1
        ) +
        " / " +
        quizzes.length;


    quizMainButton.textContent =
        "👁 MOSTRA RISPOSTA";
}


function quizMainAction()
{
    if (!currentQuiz)
    {
        return;
    }


    if (!currentQuizRevealed)
    {
        currentQuizRevealed = true;


        const options =
            [
                ...quizOptions.querySelectorAll(
                    ".quiz-option"
                )
            ];


        options.forEach(
            option =>
            {
                const index =
                    Number(
                        option.dataset.index
                    );


                if (
                    index ===
                    currentQuiz.correct
                )
                {
                    option.classList.add(
                        "correct"
                    );
                }
            }
        );


        quizResult.textContent =
            "Risposta corretta: " +
            currentQuiz.options[
                currentQuiz.correct
            ];


        quizMainButton.textContent =
            "PROSSIMO QUIZ";


        return;
    }


    quizIndex =
        (
            quizIndex + 1
        ) %
        quizzes.length;


    loadManualQuiz();
}


/* =========================================
   RIPRISTINO DOPO SAFARI / LOCK
========================================= */

function resumeApplication()
{
    updateTimers();


    if (
        currentAutomaticEvent
    )
    {
        setTimeout(
            restoreCurrentAutomaticEvent,
            100
        );
    }
    else
    {
        setTimeout(
            processEventQueue,
            100
        );
    }
}


document.addEventListener(
    "visibilitychange",
    function ()
    {
        if (!document.hidden)
        {
            resumeApplication();
        }
    }
);


window.addEventListener(
    "focus",
    resumeApplication
);


/* =========================================
   AVVIO
========================================= */

loadGame();

updateTimers();


setInterval(
    updateTimers,
    1000
);


if (players.length === 0)
{
    openPlayersScreen();
}
else
{
    goHome();
}


/* =========================================
   RIPRISTINO EVENTO PENDENTE
========================================= */

if (
    nightRunning &&
    (
        currentAutomaticEvent ||
        eventQueue.length > 0
    )
)
{
    setTimeout(
        processEventQueue,
        250
    );
}
