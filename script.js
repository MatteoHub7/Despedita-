alert("SCRIPT CARICATO");
/* =========================================================
   DESPEDIDA
   SCRIPT.JS
========================================================= */


/* =========================================================
   VERITÀ
========================================================= */

const truthCards = [

    "Qual è stata la tua peggiore figura di merda da ubriaco?",

    "Qual è la persona a cui non dovresti scrivere ma a cui scriveresti dopo altri due drink?",

    "Qual è stata la trombata peggiore della tua vita?",

    "Qual è la bugia più grossa che hai raccontato per rimorchiare?",

    "Chi del gruppo presenteresti meno volentieri ai tuoi genitori?",

    "Qual è la cosa più imbarazzante che hai fatto per qualcuno che ti piaceva?",

    "Mostra l'ultima persona che hai cercato su Instagram.",

    "Qual è una cosa che non hai mai confessato a questo gruppo?",

    "Qual è il messaggio che più ti penti di aver mandato?",

    "Qual è la cosa più strana che hai chiesto a letto?",

    "A chi del gruppo affideresti meno volentieri 1.000 euro?",

    "C'è qualcuno con cui ti penti di essere andato/a?",

    "Hai mai avuto una cotta per qualcuno che uno dei presenti conosce?",

    "Qual è il posto più assurdo in cui hai baciato qualcuno?",

    "Qual è la scusa peggiore che hai usato per evitare un appuntamento?",

    "A che età hai perso la verginità?",

    "Qual è la cosa più infantile che fai ancora?",

    "Hai mai usato sex toys?",

    "Qual è la cosa più assurda che hai fatto per gelosia?",

    "Quale ex o vecchia fiamma non vorresti assolutamente incontrare stasera?",

    "Qual è il tuo body count?",

    "Chi del gruppo sarebbe il peggior coinquilino?",

    "Qual è stata la tua sbronza più memorabile?",

    "Qual è una cosa che hai finto di capire per non fare brutta figura?",

    "Ti sei mai cagato addosso?",

    "Qual è la tua red flag più evidente?",

    "Qual è la cosa più imbarazzante presente nella tua cronologia recente?",

    "Chi del gruppo chiameresti per tirarti fuori da un guaio alle 4 del mattino?",

    "Qual è la cosa più strana che ti hanno chiesto a letto?",

    "Se dovessi scambiare la tua vita con quella di una persona del gruppo per un mese, chi sceglieresti?"

];


/* =========================================================
   OBBLIGHI
========================================================= */

const dareCards = [

    "Convinci uno sconosciuto che il festeggiato è una celebrità italiana.",

    "Ottieni una dedica scritta da uno sconosciuto per la nuova vita in Svizzera.",

    "Fatti una foto con uno sconosciuto entro 5 minuti.",

    "Prova a vendere un oggetto scelto dal gruppo a uno sconosciuto. Sono accettati anche uno shot o un drink come pagamento.",

    "Canta una serenata a uno sconosciuto o una sconosciuta.",

    "Fino alla prossima carta, ogni volta che finisci una frase devi fare il verso di Michael Jackson. Se te ne dimentichi, penitenza.",

    "Intervista seriamente uno sconosciuto. Durante l'intervista, a un certo punto chiedigli di che colore ha le mutande.",

    "Manda a un contatto scelto dal gruppo un vocale innocuo ma completamente senza contesto.",

    "Fatti scrivere addosso il numero di telefono di uno sconosciuto. Se ci riesci, ti risparmi il prossimo shot.",

    "Canta una canzone a tua scelta dal punto più alto che riesci a trovare.",

    "Chiedi a uno sconosciuto qual è il suo body count.",

    "Ottieni un complimento da qualcuno che non conosci.",

    "Chiedi a uno sconosciuto di sposarti.",

    "Trova un gruppo di sconosciuti e convincili a giocare a Bomba o Passi con voi.",

    "Dai il tuo numero di telefono a uno sconosciuto accompagnandolo con una dedica.",

    "Il gruppo sceglie la tua foto profilo. Devi tenerla per 24 ore.",

    "Trova qualcuno con un cane. Chiedi «Posso accarezzarlo?» e, se il padrone sta al gioco e acconsente, accarezza scherzosamente il padrone invece del cane.",

    "Trova qualcuno che registri un video rivolto a Matteo dicendo con estrema serietà: «Spero che la prostata guarisca presto, Matteo.»",

    "Non puoi parlare fino al prossimo Tequila Time. Se parli, scatta la penitenza.",

    "Indossa gli occhiali scuri e usa il bastone preparato per la serata fino alla prossima carta, facendoti guidare dagli altri.",

    "Vai da uno sconosciuto scelto dal gruppo e sussurragli all'orecchio: «Ho tre capezzoli.» Poi vattene senza dare spiegazioni.",

    "Fai un brindisi solenne alla sorella del Cini. Il Cini dovrà registrarlo e mandarglielo.",

    "Convinci uno sconosciuto a cantare una canzone con te. Hai due tentativi, altrimenti penitenza.",

    "Vai da uno sconosciuto e chiedigli di fare una foto insieme. Subito prima della foto digli con assoluta serietà: «Questa è la mia ultima foto da uomo/donna.» Non dare ulteriori spiegazioni.",

    "Vai da uno sconosciuto e digli qualcosa di volutamente poco chiaro. Quando risponde «Ah?», rispondi semplicemente: «Suca.» Poi vattene.",

    "Fino al prossimo tequila time dovrai parlare come francesca imbruttita",

    "Vai da uno sconosciuto chiamandolo con il primo nome che ti viene in mente e fai finta di conoscerlo. Porta avanti la conversazione per almeno un minuto.",

    "Chiedi a uno sconosciuto di registrare un video di 10 secondi in cui racconta come vi siete conosciuti, lasciando che inventi completamente la storia.",

    "Vai da uno sconosciuto e chiedigli quale membro del gruppo sembra più probabilmente ricercato dalla polizia. Deve anche spiegare il motivo.",

    "Trova uno sconosciuto disposto a celebrare il funerale ufficiale della vita italiana di Matteo. Deve improvvisare un elogio funebre di almeno 20 secondi."

];

/* =========================================================
   QUIZ
========================================================= */

const quizQuestions = [

    {
        question:
            "Qual è il nome scientifico del genere di ragni sudamericani il cui veleno può provocare priapismo?",

        options: [
            "Latrodectus",
            "Phoneutria",
            "Loxosceles",
            "Atrax"
        ],

        correct: 1,

        explanation:
            "Phoneutria. Il veleno di alcune specie può provocare priapismo."
    },

    {
        question:
            "Ne Il Signore degli Anelli, qual è il nome della spada riforgiata dai frammenti di Narsil?",

        options: [
            "Glamdring",
            "Orcrist",
            "Andúril",
            "Anglachel"
        ],

        correct: 2,

        explanation:
            "Andúril, la spada di Aragorn riforgiata dai frammenti di Narsil."
    },

    {
        question:
            "Quale elemento chimico è indicato dal simbolo W?",

        options: [
            "Tungsteno",
            "Titanio",
            "Tantalio",
            "Vanadio"
        ],

        correct: 0,

        explanation:
            "Il simbolo W deriva dal nome Wolfram. L'elemento è il tungsteno."
    },

    {
        question:
            "Quale imperatore promulgò con Graziano e Valentiniano II l'Editto di Tessalonica del 380?",

        options: [
            "Costantino I",
            "Teodosio I",
            "Giustiniano I",
            "Diocleziano"
        ],

        correct: 1,

        explanation:
            "Teodosio I."
    },

    {
        question:
            "In 2001: Odissea nello spazio, cosa significa HAL?",

        options: [
            "Human Algorithmic Logic",
            "Heuristic Artificial Language",
            "Heuristically Programmed ALgorithmic Computer",
            "High-level Artificial Logic"
        ],

        correct: 2,

        explanation:
            "HAL significa Heuristically Programmed ALgorithmic Computer."
    },

    {
        question:
            "Quale di questi animali possiede tre canali vaginali?",

        options: [
            "Canguro",
            "Delfino",
            "Iena",
            "Ornitorinco"
        ],

        correct: 0,

        explanation:
            "Il canguro, come altri marsupiali, possiede una particolare anatomia riproduttiva."
    },

    {
        question:
            "Quale di questi NON è uno dei sette nani Disney?",

        options: [
            "Gongolo",
            "Mammolo",
            "Pisolo",
            "Timido"
        ],

        correct: 3,

        explanation:
            "Timido non è uno dei sette nani."
    },

    {
        question:
            "Quanto tempo servirebbe per percorrere la distanza media Terra-Luna viaggiando continuamente a 10 km/h?",

        options: [
            "Circa 44 giorni",
            "Circa 160 giorni",
            "Circa 4,4 anni",
            "Circa 44 anni"
        ],

        correct: 2,

        explanation:
            "Circa 4,4 anni."
    },

    {
        question:
            "Qual è la capitale della Birmania, oggi Myanmar?",

        options: [
            "Yangon",
            "Mandalay",
            "Naypyidaw",
            "Bago"
        ],

        correct: 2,

        explanation:
            "Naypyidaw."
    },

    {
        question:
            "Secondo la misura pubblicamente attribuita a Rocco Siffredi, quanto sarebbe lungo il suo pene in erezione?",

        options: [
            "19 cm",
            "21 cm",
            "24 cm",
            "28 cm"
        ],

        correct: 2,

        explanation:
            "La cifra comunemente riportata è circa 24 cm."
    },

    {
        question:
            "Un uomo guarda una fotografia e dice: «Non ho fratelli né sorelle, ma il padre di quest'uomo è figlio di mio padre». Chi c'è nella fotografia?",

        options: [
            "Suo padre",
            "Suo figlio",
            "Lui stesso",
            "Suo cugino"
        ],

        correct: 1,

        explanation:
            "Suo figlio."
    },

    {
        question:
            "Quale di questi è l'unico numero primo pari?",

        options: [
            "0",
            "1",
            "2",
            "4"
        ],

        correct: 2,

        explanation:
            "2 è l'unico numero primo pari."
    },

    {
        question:
            "In Dark Souls, chi è il boss finale della storia principale?",

        options: [
            "Artorias",
            "Gwyn",
            "Ornstein",
            "Manus"
        ],

        correct: 1,

        explanation:
            "Gwyn, Lord of Cinder."
    },

    {
        question:
            "Quale pianeta del Sistema Solare ha il periodo di rotazione siderale più lungo?",

        options: [
            "Mercurio",
            "Venere",
            "Marte",
            "Nettuno"
        ],

        correct: 1,

        explanation:
            "Venere."
    },

    {
        question:
            "Quale di queste è la parola più lunga?",

        options: [
            "Kraftfahrzeughaftpflichtversicherung",
            "Aufmerksamkeitsdefizit-Hyperaktivitätsstörung",
            "Donaudampfschifffahrtsgesellschaft",
            "Finanzdienstleistungsunternehmen"
        ],

        correct: 1,

        explanation:
            "Aufmerksamkeitsdefizit-Hyperaktivitätsstörung."
    },

    {
        question:
            "Come si chiama la nave comandata da Shepard all'inizio del primo Mass Effect?",

        options: [
            "Normandy SR-1",
            "Normandy SR-2",
            "Tempest",
            "Destiny Ascension"
        ],

        correct: 0,

        explanation:
            "SSV Normandy SR-1."
    },

    {
        question:
            "Quale paese possiede più piramidi antiche conosciute?",

        options: [
            "Egitto",
            "Messico",
            "Sudan",
            "Perù"
        ],

        correct: 2,

        explanation:
            "Il Sudan."
    },

    {
        question:
            "Quale numero romano rappresenta 500?",

        options: [
            "L",
            "C",
            "D",
            "M"
        ],

        correct: 2,

        explanation:
            "D rappresenta 500."
    },

    {
        question:
            "In ordine di grandezza, quanti normali rotoli di carta igienica servirebbero per occupare il volume del Sole?",

        options: [
            "10²⁵",
            "10³⁰",
            "10³⁵",
            "10⁴⁰"
        ],

        correct: 1,

        explanation:
            "L'ordine di grandezza è circa 10³⁰ rotoli."
    },

    {
        question:
            "Nel primo The Legend of Zelda, come si chiama la principessa che Link deve salvare?",

        options: [
            "Hylia",
            "Zelda",
            "Midna",
            "Ruto"
        ],

        correct: 1,

        explanation:
            "Zelda."
    },

    {
        question:
            "Sul foglio Excel di Cri, a quanto ammonta il mio ritardo?",

        options: [
            "17 minuti",
            "43 minuti",
            "1 ora e 12 minuti",
            "2 ore e 6 minuti"
        ],

        correct: null,

        explanation:
            "Il foglio Excel di Cri custodisce una verità più oscura."
    },

    {
        question:
            "Qual è il mio soprannome?",

        options: [
            "Duca di Rifredi",
            "Principe di Rifredi",
            "Conte di Rifredi",
            "Marchese di Rifredi"
        ],

        correct: 1,

        explanation:
            "Principe di Rifredi."
    },

    {
        question:
            "Qual è la mia colazione preferita?",

        options: [
            "Cornetto e cappuccino",
            "Uova e bacon",
            "Pancarrè e Nutella",
            "Caffè e sigaretta"
        ],

        correct: 2,

        explanation:
            "Pancarrè e Nutella."
    },

    {
        question:
            "Cosa è successo realmente al Pavo la sera in cui Cristiano si è ubriacato?",

        options: [],

        correct: "open",

        explanation:
            "La verità è ancora oggetto di indagine."
    },

    {
        question:
            "Qual è il mio drink preferito?",

        options: [
            "Negroni",
            "Moscow Mule",
            "Old Fashioned",
            "Gin Tonic"
        ],

        correct: 2,

        explanation:
            "Old Fashioned."
    },

    {
        question:
            "Di quale locale è la barista che mi ha rubato il cuore?",

        options: [
            "Red Garter",
            "Post Office",
            "YAB",
            "Space"
        ],

        correct: 1,

        explanation:
            "Post Office."
    },

    {
        question:
            "Come si chiama la futura signora Furnari?",

        options: [
            "Beatrice",
            "Giulia",
            "Eleonora",
            "Federica"
        ],

        correct: 2,

        explanation:
            "Eleonora."
    },

    {
        question:
            "Che lavoro faccio?",

        options: [
            "Instrumentation Engineer",
            "Automation Engineer",
            "Lead Engineer",
            "Un cazzo"
        ],

        correct: 3,

        explanation:
            "Un cazzo. Instrumentation Engineer era soltanto la risposta professionalmente sensata."
    },

    {
        question:
            "Come si chiama il mio kebabbaro di fiducia?",

        options: [
            "Ahmed",
            "Karim",
            "Mohamed",
            "Mustafa"
        ],

        correct: 2,

        explanation:
            "Mohamed."
    },

    {
        question:
            "Qual è la prima cosa che guardo in una ragazza?",

        options: [
            "Gli occhi",
            "Il sorriso",
            "Il carattere",
            "Dipende se è di spalle"
        ],

        correct: 3,

        explanation:
            "Dipende se è di spalle."
    }

];


/* =========================================================
   STATO GENERALE
========================================================= */

let currentMode = null;

let usedTruthCards = [];
let usedDareCards = [];
let usedQuizQuestions = [];

let currentQuizIndex = null;
let selectedQuizAnswer = null;
let quizRevealed = false;


/* =========================
   GIOCATORI
========================= */

let players = [];

let celebrantId = null;

let lastSelectedPlayerId = null;


/* =========================
   EVENTO ATTIVO
========================= */

let activeEventPlayerId = null;

let eventAwaitingCompletion = false;


/* =========================================================
   TIMER
========================================================= */

/*
    TEQUILA:
    ogni 30 minuti
*/

const TEQUILA_INTERVAL =
    30 * 60 * 1000;


/*
    EVENTO:
    casuale tra 8 e 18 minuti
*/

const EVENT_MIN =
    8 * 60 * 1000;

const EVENT_MAX =
    18 * 60 * 1000;


let nightRunning = false;

let tequilaTarget = null;

let eventTarget = null;

let tequilaAlertOpen = false;

let eventAlertOpen = false;


/* =========================================================
   DOM
========================================================= */

const homeScreen =
    document.getElementById(
        "home-screen"
    );

const gameScreen =
    document.getElementById(
        "game-screen"
    );

const quizScreen =
    document.getElementById(
        "quiz-screen"
    );

const playersScreen =
    document.getElementById(
        "players-screen"
    );


/* GAME */

const card =
    document.getElementById(
        "card"
    );

const cardType =
    document.getElementById(
        "card-type"
    );

const cardText =
    document.getElementById(
        "card-text"
    );

const cardNumber =
    document.getElementById(
        "card-number"
    );

const cardIcon =
    document.getElementById(
        "card-icon"
    );

const gameTitle =
    document.getElementById(
        "game-title"
    );

const drawButton =
    document.getElementById(
        "draw-button"
    );


/* QUIZ */

const quizQuestion =
    document.getElementById(
        "quiz-question"
    );

const quizOptions =
    document.getElementById(
        "quiz-options"
    );

const quizResult =
    document.getElementById(
        "quiz-result"
    );

const quizNumber =
    document.getElementById(
        "quiz-number"
    );

const quizMainButton =
    document.getElementById(
        "quiz-main-button"
    );

const quizCard =
    document.querySelector(
        ".quiz-card"
    );


/* PLAYERS */

const playersList =
    document.getElementById(
        "players-list"
    );

const celebrantSelect =
    document.getElementById(
        "celebrant-select"
    );

const playersError =
    document.getElementById(
        "players-error"
    );

const playersHomeCount =
    document.getElementById(
        "players-home-count"
    );


/* TIMER */

const tequilaTimer =
    document.getElementById(
        "tequila-timer"
    );

const eventTimer =
    document.getElementById(
        "event-timer"
    );

const nightButton =
    document.getElementById(
        "night-button"
    );


/* OVERLAY */

const eventOverlay =
    document.getElementById(
        "event-overlay"
    );

const tequilaOverlay =
    document.getElementById(
        "tequila-overlay"
    );

const eventPlayerName =
    document.getElementById(
        "event-player-name"
    );


/* PLAYER BANNERS */

const activePlayerBanner =
    document.getElementById(
        "active-player-banner"
    );

const quizPlayerBanner =
    document.getElementById(
        "quiz-player-banner"
    );


/* =========================================================
   CARICAMENTO
========================================================= */

function loadGame()
{

    try
    {

        usedTruthCards =
            JSON.parse(
                localStorage.getItem(
                    "despedida_truth"
                )
            ) || [];


        usedDareCards =
            JSON.parse(
                localStorage.getItem(
                    "despedida_dare"
                )
            ) || [];


        usedQuizQuestions =
            JSON.parse(
                localStorage.getItem(
                    "despedida_quiz"
                )
            ) || [];


        players =
            JSON.parse(
                localStorage.getItem(
                    "despedida_players"
                )
            ) || [];

    }
    catch (error)
    {

        usedTruthCards = [];

        usedDareCards = [];

        usedQuizQuestions = [];

        players = [];

    }


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
        Number(
            localStorage.getItem(
                "despedida_tequila_target"
            )
        ) || null;


    eventTarget =
        Number(
            localStorage.getItem(
                "despedida_event_target"
            )
        ) || null;


    /*
        Se la pagina viene aggiornata
        mentre la serata è attiva
        ma manca uno dei timestamp,
        lo ricreiamo.
    */

    if (nightRunning)
    {

        const now =
            Date.now();


        if (!tequilaTarget)
        {

            tequilaTarget =
                now +
                TEQUILA_INTERVAL;

        }


        if (!eventTarget)
        {

            eventTarget =
                now +
                randomEventDelay();

        }

    }


    updateHomeCounters();

    updatePlayersHome();

    updateNightUI();

}


/* =========================================================
   SALVATAGGIO
========================================================= */

function saveGame()
{

    localStorage.setItem(
        "despedida_truth",
        JSON.stringify(
            usedTruthCards
        )
    );


    localStorage.setItem(
        "despedida_dare",
        JSON.stringify(
            usedDareCards
        )
    );


    localStorage.setItem(
        "despedida_quiz",
        JSON.stringify(
            usedQuizQuestions
        )
    );


    localStorage.setItem(
        "despedida_players",
        JSON.stringify(
            players
        )
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
        String(
            nightRunning
        )
    );


    if (tequilaTarget)
    {

        localStorage.setItem(
            "despedida_tequila_target",
            String(
                tequilaTarget
            )
        );

    }
    else
    {

        localStorage.removeItem(
            "despedida_tequila_target"
        );

    }


    if (eventTarget)
    {

        localStorage.setItem(
            "despedida_event_target",
            String(
                eventTarget
            )
        );

    }
    else
    {

        localStorage.removeItem(
            "despedida_event_target"
        );

    }

}


/* =========================================================
   SCREEN MANAGEMENT
========================================================= */

function hideScreens()
{

    homeScreen.classList.remove(
        "active"
    );

    gameScreen.classList.remove(
        "active"
    );

    quizScreen.classList.remove(
        "active"
    );

    playersScreen.classList.remove(
        "active"
    );

}


function goHome()
{

    hideScreens();


    homeScreen.classList.add(
        "active"
    );


    currentMode = null;


    updateHomeCounters();

    updatePlayersHome();

}


/* =========================================================
   AVVIO VERITÀ / OBBLIGO / QUIZ
========================================================= */

function startGame(mode)
{

    currentMode = mode;


    hideScreens();


    /*
        QUIZ
    */

    if (mode === "quiz")
    {

        quizScreen.classList.add(
            "active"
        );


        resetQuizDisplay();


        showActivePlayer(
            quizPlayerBanner
        );


        return;

    }


    /*
        VERITÀ / OBBLIGO
    */

    gameScreen.classList.add(
        "active"
    );


    showActivePlayer(
        activePlayerBanner
    );


    if (mode === "truth")
    {

        gameTitle.textContent =
            "VERITÀ";


        cardType.textContent =
            "VERITÀ";


        cardIcon.textContent =
            "†";


        drawButton.classList.remove(
            "dare-mode"
        );

    }
    else
    {

        gameTitle.textContent =
            "OBBLIGO";


        cardType.textContent =
            "OBBLIGO";


        cardIcon.textContent =
            "⚰";


        drawButton.classList.add(
            "dare-mode"
        );

    }


    cardText.textContent =
        "Premi il pulsante per pescare.";


    updateCardCounter();

}


/* =========================================================
   PESCA CARTA
========================================================= */

function drawCard()
{

    let deck;

    let used;


    if (currentMode === "truth")
    {

        deck =
            truthCards;

        used =
            usedTruthCards;

    }
    else
    {

        deck =
            dareCards;

        used =
            usedDareCards;

    }


    /*
        MAZZO FINITO
    */

    if (
        used.length >=
        deck.length
    )
    {

        const restart =
            confirm(
                "Il mazzo è terminato. Vuoi ricominciarlo?"
            );


        if (restart)
        {

            resetCurrentDeck();

        }


        return;

    }


    /*
        CARTE DISPONIBILI
    */

    const available = [];


    for (
        let i = 0;
        i < deck.length;
        i++
    )
    {

        if (
            !used.includes(i)
        )
        {

            available.push(i);

        }

    }


    /*
        PESCA RANDOM
    */

    const randomPosition =
        Math.floor(
            Math.random() *
            available.length
        );


    const cardIndex =
        available[
            randomPosition
        ];


    used.push(
        cardIndex
    );


    /*
        MOSTRA CARTA
    */

    cardText.textContent =
        deck[
            cardIndex
        ];


    card.classList.remove(
        "animate"
    );


    void card.offsetWidth;


    card.classList.add(
        "animate"
    );


    vibrate();


    /*
        Se questa carta deriva
        da un evento automatico,
        il turno è concluso.
    */

    completeEventTurn(
        currentMode
    );


    saveGame();

    updateCardCounter();

    updateHomeCounters();

}


/* =========================================================
   CONTATORE CARTE
========================================================= */

function updateCardCounter()
{

    let used;

    let total;


    if (
        currentMode ===
        "truth"
    )
    {

        used =
            usedTruthCards.length;

        total =
            truthCards.length;

    }
    else
    {

        used =
            usedDareCards.length;

        total =
            dareCards.length;

    }


    cardNumber.textContent =
        "CARTA " +
        used +
        " / " +
        total;


    if (
        used === total
    )
    {

        drawButton.textContent =
            "MAZZO TERMINATO";

    }
    else if (
        used === 0
    )
    {

        drawButton.textContent =
            "PESCA UNA CARTA";

    }
    else
    {

        drawButton.textContent =
            "PESCA ANCORA";

    }

}


/* =========================================================
   RESET VERITÀ / OBBLIGO
========================================================= */

function resetCurrentDeck()
{

    if (!currentMode)
    {

        return;

    }


    let name;


    if (
        currentMode ===
        "truth"
    )
    {

        name =
            "delle Verità";

    }
    else
    {

        name =
            "degli Obblighi";

    }


    const reset =
        confirm(
            "Vuoi davvero resettare il mazzo " +
            name +
            "?"
        );


    if (!reset)
    {

        return;

    }


    if (
        currentMode ===
        "truth"
    )
    {

        usedTruthCards = [];

    }
    else
    {

        usedDareCards = [];

    }


    cardText.textContent =
        "Mazzo resettato. Il disastro può ricominciare.";


    saveGame();

    updateCardCounter();

    updateHomeCounters();

}


/* =========================================================
   QUIZ
========================================================= */

function handleQuizButton()
{

    if (
        currentQuizIndex === null ||
        quizRevealed
    )
    {

        drawQuizQuestion();

    }
    else
    {

        revealQuizAnswer();

    }

}


/* =========================================================
   PESCA QUIZ
========================================================= */

function drawQuizQuestion()
{

    /*
        QUIZ TERMINATI
    */

    if (
        usedQuizQuestions.length >=
        quizQuestions.length
    )
    {

        const restart =
            confirm(
                "Hai terminato tutte le domande. Vuoi ricominciare?"
            );


        if (restart)
        {

            resetQuizDeck();

        }


        return;

    }


    /*
        DOMANDE DISPONIBILI
    */

    const available = [];


    for (
        let i = 0;
        i < quizQuestions.length;
        i++
    )
    {

        if (
            !usedQuizQuestions.includes(
                i
            )
        )
        {

            available.push(
                i
            );

        }

    }


    /*
        RANDOM
    */

    const randomPosition =
        Math.floor(
            Math.random() *
            available.length
        );


    currentQuizIndex =
        available[
            randomPosition
        ];


    usedQuizQuestions.push(
        currentQuizIndex
    );


    selectedQuizAnswer =
        null;


    quizRevealed =
        false;


    const quiz =
        quizQuestions[
            currentQuizIndex
        ];


    quizQuestion.textContent =
        quiz.question;


    quizOptions.innerHTML =
        "";


    quizResult.innerHTML =
        "";


    quizResult.classList.remove(
        "visible"
    );


    /*
        DOMANDA CON RISPOSTE
    */

    if (
        quiz.correct !==
        "open"
    )
    {

        quiz.options.forEach(
            function (
                option,
                index
            )
            {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "quiz-option";


                const letter =
                    String.fromCharCode(
                        65 + index
                    );


                button.textContent =
                    letter +
                    ") " +
                    option;


                button.addEventListener(
                    "click",
                    function ()
                    {

                        selectQuizAnswer(
                            index,
                            button
                        );

                    }
                );


                quizOptions.appendChild(
                    button
                );

            }
        );

    }


    quizMainButton.textContent =
        "SCOPRI LA VERITÀ";


    updateQuizCounter();


    quizCard.classList.remove(
        "animate"
    );


    void quizCard.offsetWidth;


    quizCard.classList.add(
        "animate"
    );


    vibrate();


    saveGame();

    updateHomeCounters();

}


/* =========================================================
   SELEZIONE RISPOSTA
========================================================= */

function selectQuizAnswer(
    index,
    button
)
{

    if (quizRevealed)
    {

        return;

    }


    selectedQuizAnswer =
        index;


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        function (option)
        {

            option.classList.remove(
                "selected"
            );

        }
    );


    button.classList.add(
        "selected"
    );

}


/* =========================================================
   MOSTRA RISPOSTA QUIZ
========================================================= */

function revealQuizAnswer()
{

    if (
        currentQuizIndex ===
        null
    )
    {

        return;

    }


    const quiz =
        quizQuestions[
            currentQuizIndex
        ];


    /*
        DOMANDA APERTA
    */

    if (
        quiz.correct ===
        "open"
    )
    {

        quizResult.innerHTML =
            "<strong>VERDETTO</strong><br>" +
            quiz.explanation;


        quizResult.classList.add(
            "visible"
        );


        quizRevealed =
            true;


        quizMainButton.textContent =
            "PROSSIMA DOMANDA";


        completeEventTurn(
            "quiz"
        );


        saveGame();

        vibrate();


        return;

    }


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    /*
        DOMANDA SENZA RISPOSTA
        CORRETTA DEFINITA
    */

    if (
        quiz.correct ===
        null
    )
    {

        buttons.forEach(
            function (button)
            {

                button.classList.add(
                    "disabled"
                );

            }
        );


        quizResult.innerHTML =
            "<strong>VERDETTO</strong><br>" +
            quiz.explanation;

    }
    else
    {

        buttons.forEach(
            function (
                button,
                index
            )
            {

                button.classList.add(
                    "disabled"
                );


                if (
                    index ===
                    quiz.correct
                )
                {

                    button.classList.add(
                        "correct"
                    );

                }


                if (
                    selectedQuizAnswer !== null &&
                    index ===
                    selectedQuizAnswer &&
                    index !==
                    quiz.correct
                )
                {

                    button.classList.add(
                        "wrong"
                    );

                }

            }
        );


        /*
            RISPOSTA CORRETTA
        */

        if (
            selectedQuizAnswer ===
            quiz.correct &&
            activeEventPlayerId
        )
        {

            const player =
                players.find(
                    function (item)
                    {

                        return (
                            item.id ===
                            activeEventPlayerId
                        );

                    }
                );


            if (player)
            {

                player.quizCorrect =
                    (
                        player.quizCorrect ||
                        0
                    ) + 1;

            }

        }


        const letter =
            String.fromCharCode(
                65 +
                quiz.correct
            );


        const answer =
            quiz.options[
                quiz.correct
            ];


        quizResult.innerHTML =
            "<strong>" +
            letter +
            ") " +
            answer +
            "</strong><br>" +
            quiz.explanation;

    }


    quizResult.classList.add(
        "visible"
    );


    quizRevealed =
        true;


    quizMainButton.textContent =
        "PROSSIMA DOMANDA";


    /*
        Ora il turno evento
        può essere considerato
        completato.
    */

    completeEventTurn(
        "quiz"
    );


    saveGame();

    vibrate();

}


/* =========================================================
   QUIZ COUNTER
========================================================= */

function updateQuizCounter()
{

    quizNumber.textContent =
        "QUIZ " +
        usedQuizQuestions.length +
        " / " +
        quizQuestions.length;

}


/* =========================================================
   RESET QUIZ
========================================================= */

function resetQuizDeck()
{

    const reset =
        confirm(
            "Vuoi davvero resettare tutte le domande del Quiz?"
        );


    if (!reset)
    {

        return;

    }


    usedQuizQuestions = [];


    currentQuizIndex =
        null;


    selectedQuizAnswer =
        null;


    quizRevealed =
        false;


    resetQuizDisplay();


    saveGame();

    updateHomeCounters();

}


/* =========================================================
   RESET DISPLAY QUIZ
========================================================= */

function resetQuizDisplay()
{

    currentQuizIndex =
        null;


    selectedQuizAnswer =
        null;


    quizRevealed =
        false;


    quizQuestion.textContent =
        "Premi il pulsante per iniziare.";


    quizOptions.innerHTML =
        "";


    quizResult.innerHTML =
        "";


    quizResult.classList.remove(
        "visible"
    );


    quizMainButton.textContent =
        "PESCA UNA DOMANDA";


    updateQuizCounter();

}


/* =========================================================
   HOME COUNTERS
========================================================= */

function updateHomeCounters()
{

    document.getElementById(
        "truth-home-counter"
    ).textContent =
        truthCards.length -
        usedTruthCards.length;


    document.getElementById(
        "dare-home-counter"
    ).textContent =
        dareCards.length -
        usedDareCards.length;


    document.getElementById(
        "quiz-home-counter"
    ).textContent =
        quizQuestions.length -
        usedQuizQuestions.length;

}


/* =========================================================
   GIOCATORI
========================================================= */

function openPlayersScreen()
{

    hideScreens();


    playersScreen.classList.add(
        "active"
    );


    renderPlayersEditor();

}


/* =========================================================
   RENDER GIOCATORI
========================================================= */

function renderPlayersEditor()
{

    playersList.innerHTML =
        "";


    playersError.textContent =
        "";


    /*
        PRIMO AVVIO:
        due campi.
    */

    if (
        players.length ===
        0
    )
    {

        createPlayerRow(
            ""
        );


        createPlayerRow(
            ""
        );

    }
    else
    {

        players.forEach(
            function (player)
            {

                createPlayerRow(
                    player.name,
                    player.id
                );

            }
        );

    }


    updateCelebrantSelect();

}


/* =========================================================
   CREA RIGA GIOCATORE
========================================================= */

function createPlayerRow(
    name = "",
    existingId = null
)
{

    const row =
        document.createElement(
            "div"
        );


    row.className =
        "player-row";


    if (existingId)
    {

        row.dataset.playerId =
            existingId;

    }


    /*
        INPUT
    */

    const input =
        document.createElement(
            "input"
        );


    input.type =
        "text";


    input.className =
        "player-input";


    input.placeholder =
        "Nome giocatore";


    input.value =
        name;


    input.maxLength =
        20;


    input.autocomplete =
        "off";


    input.addEventListener(
        "input",
        updateCelebrantSelect
    );


    /*
        REMOVE
    */

    const removeButton =
        document.createElement(
            "button"
        );


    removeButton.type =
        "button";


    removeButton.className =
        "remove-player-button";


    removeButton.textContent =
        "×";


    removeButton.addEventListener(
        "click",
        function ()
        {

            row.remove();

            updateCelebrantSelect();

        }
    );


    row.appendChild(
        input
    );


    row.appendChild(
        removeButton
    );


    playersList.appendChild(
        row
    );


    return row;

}


/* =========================================================
   AGGIUNGI GIOCATORE
========================================================= */

function addPlayerInput()
{

    const row =
        createPlayerRow(
            ""
        );


    const input =
        row.querySelector(
            ".player-input"
        );


    if (input)
    {

        input.focus();


        setTimeout(
            function ()
            {

                input.scrollIntoView(
                    {
                        behavior:
                            "smooth",

                        block:
                            "center"
                    }
                );

            },
            100
        );

    }

}


/* =========================================================
   FESTEGGIATO
========================================================= */

function updateCelebrantSelect()
{

    if (!celebrantSelect)
    {

        return;

    }


    /*
        Ricorda il nome
        attualmente selezionato.
    */

    let previousName =
        null;


    if (
        celebrantSelect.selectedIndex >=
        0
    )
    {

        const option =
            celebrantSelect.options[
                celebrantSelect.selectedIndex
            ];


        if (option)
        {

            previousName =
                option.textContent;

        }

    }


    celebrantSelect.innerHTML =
        "";


    const rows =
        Array.from(
            playersList.querySelectorAll(
                ".player-row"
            )
        );


    rows.forEach(
        function (
            row,
            index
        )
        {

            const input =
                row.querySelector(
                    ".player-input"
                );


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
                String(
                    index
                );


            option.textContent =
                name;


            celebrantSelect.appendChild(
                option
            );

        }
    );


    /*
        Ripristina selezione
        corrente.
    */

    if (previousName)
    {

        const options =
            Array.from(
                celebrantSelect.options
            );


        const match =
            options.find(
                function (option)
                {

                    return (
                        option.textContent ===
                        previousName
                    );

                }
            );


        if (match)
        {

            celebrantSelect.value =
                match.value;


            return;

        }

    }


    /*
        Oppure recupera
        il festeggiato salvato.
    */

    const oldCelebrant =
        players.find(
            function (player)
            {

                return (
                    player.id ===
                    celebrantId
                );

            }
        );


    if (oldCelebrant)
    {

        const options =
            Array.from(
                celebrantSelect.options
            );


        const match =
            options.find(
                function (option)
                {

                    return (
                        option.textContent ===
                        oldCelebrant.name
                    );

                }
            );


        if (match)
        {

            celebrantSelect.value =
                match.value;

        }

    }

}


/* =========================================================
   ID GIOCATORE
========================================================= */

function generatePlayerId()
{

    return (
        Date.now().toString(36) +
        Math.random()
            .toString(36)
            .substring(
                2,
                8
            )
    );

}


/* =========================================================
   SALVA GIOCATORI
========================================================= */

function savePlayers()
{

    const rows =
        Array.from(
            playersList.querySelectorAll(
                ".player-row"
            )
        );


    const validRows =
        rows.filter(
            function (row)
            {

                const input =
                    row.querySelector(
                        ".player-input"
                    );


                return (
                    input.value.trim() !==
                    ""
                );

            }
        );


    /*
        ALMENO DUE
    */

    if (
        validRows.length <
        2
    )
    {

        playersError.textContent =
            "Servono almeno 2 giocatori.";


        return;

    }


    /*
        NOMI
    */

    const names =
        validRows.map(
            function (row)
            {

                return (
                    row
                        .querySelector(
                            ".player-input"
                        )
                        .value
                        .trim()
                );

            }
        );


    const normalizedNames =
        names.map(
            function (name)
            {

                return (
                    name.toLowerCase()
                );

            }
        );


    /*
        NO DUPLICATI
    */

    if (
        new Set(
            normalizedNames
        ).size !==
        normalizedNames.length
    )
    {

        playersError.textContent =
            "Due giocatori hanno lo stesso nome.";


        return;

    }


    /*
        NOME FESTEGGIATO
    */

    let selectedName =
        null;


    if (
        celebrantSelect.selectedIndex >=
        0
    )
    {

        const selectedOption =
            celebrantSelect.options[
                celebrantSelect.selectedIndex
            ];


        if (selectedOption)
        {

            selectedName =
                selectedOption.textContent;

        }

    }


    /*
        PRESERVA STATISTICHE
    */

    const oldPlayers =
        [...players];


    const freshPlayers =
        [];


    validRows.forEach(
        function (row)
        {

            const name =
                row
                    .querySelector(
                        ".player-input"
                    )
                    .value
                    .trim();


            const existingId =
                row.dataset.playerId;


            const oldPlayer =
                oldPlayers.find(
                    function (player)
                    {

                        return (
                            player.id ===
                            existingId
                        );

                    }
                );


            if (oldPlayer)
            {

                freshPlayers.push(
                    {
                        ...oldPlayer,
                        name:
                            name
                    }
                );

            }
            else
            {

                freshPlayers.push(
                    {

                        id:
                            generatePlayerId(),

                        name:
                            name,

                        turns:
                            0,

                        truths:
                            0,

                        dares:
                            0,

                        quizzes:
                            0,

                        quizCorrect:
                            0

                    }
                );

            }

        }
    );


    players =
        freshPlayers;


    /*
        FESTEGGIATO
    */

    const selectedCelebrant =
        players.find(
            function (player)
            {

                return (
                    player.name ===
                    selectedName
                );

            }
        );


    if (selectedCelebrant)
    {

        celebrantId =
            selectedCelebrant.id;

    }
    else
    {

        celebrantId =
            players[0].id;

    }


    playersError.textContent =
        "";


    saveGame();

    updatePlayersHome();


    /*
        TORNA HOME
    */

    playersScreen.classList.remove(
        "active"
    );


    homeScreen.classList.add(
        "active"
    );

}


/* =========================================================
   PLAYER HOME COUNT
========================================================= */

function updatePlayersHome()
{

    if (!playersHomeCount)
    {

        return;

    }


    if (
        players.length ===
        1
    )
    {

        playersHomeCount.textContent =
            "1 GIOCATORE";

    }
    else
    {

        playersHomeCount.textContent =
            players.length +
            " GIOCATORI";

    }

}


/* =========================================================
   SELEZIONE VITTIMA
========================================================= */

function selectNextPlayer()
{

    if (
        players.length ===
        0
    )
    {

        return null;

    }


    if (
        players.length ===
        1
    )
    {

        return players[0];

    }


    /*
        Trova il numero minimo
        di turni giocati.
    */

    const minimumTurns =
        Math.min(
            ...players.map(
                function (player)
                {

                    return (
                        player.turns ||
                        0
                    );

                }
            )
        );


    /*
        Diamo priorità a chi
        ha giocato meno.
    */

    let candidates =
        players.filter(
            function (player)
            {

                return (
                    (
                        player.turns ||
                        0
                    ) <=
                    minimumTurns + 1
                );

            }
        );


    /*
        Evita la stessa persona
        due volte di seguito.
    */

    const withoutPrevious =
        candidates.filter(
            function (player)
            {

                return (
                    player.id !==
                    lastSelectedPlayerId
                );

            }
        );


    if (
        withoutPrevious.length >
        0
    )
    {

        candidates =
            withoutPrevious;

    }


    /*
        RANDOM
    */

    const selected =
        candidates[
            Math.floor(
                Math.random() *
                candidates.length
            )
        ];


    lastSelectedPlayerId =
        selected.id;


    saveGame();


    return selected;

}


/* =========================================================
   TIMER
========================================================= */


/* =========================
   RANDOM 8-18 MIN
========================= */

function randomEventDelay()
{

    return Math.floor(

        EVENT_MIN +

        Math.random() *
        (
            EVENT_MAX -
            EVENT_MIN +
            1
        )

    );

}


/* =========================================================
   INIZIA / RESETTA SERATA
========================================================= */
function toggleNight()
{
    if (players.length < 2)
    {
        alert("Prima salva almeno 2 giocatori.");
        openPlayersScreen();
        return;
    }

    /*
        SE LA SERATA NON È ATTIVA:
        AVVIALA
    */
    if (!nightRunning)
    {
        nightRunning = true;

        const now = Date.now();

        tequilaTarget =
            now + TEQUILA_INTERVAL;

        eventTarget =
            now + randomEventDelay();

        saveGame();

        updateNightUI();

        updateTimers();

        vibrate();

        return;
    }


    /*
        SE È GIÀ ATTIVA:
        CHIEDI SE RESETTARE
    */
    const stop = confirm(
        "Vuoi fermare la serata e azzerare i timer?"
    );

    if (!stop)
    {
        return;
    }

    nightRunning = false;

    tequilaTarget = null;
    eventTarget = null;

    tequilaAlertOpen = false;
    eventAlertOpen = false;

    activeEventPlayerId = null;
    eventAwaitingCompletion = false;

    if (eventOverlay)
    {
        eventOverlay.classList.remove("active");
    }

    if (tequilaOverlay)
    {
        tequilaOverlay.classList.remove("active");
    }

    hidePlayerBanners();

    saveGame();
   
    updateNightUI();

    updateTimers();

}


   

    


/* =========================================================
   UI SERATA
========================================================= */

function updateNightUI()
{

    const timerPanel =
        document.querySelector(
            ".timer-panel"
        );


    if (nightRunning)
    {

        nightButton.textContent =
            "■ FERMA / RESETTA SERATA";


        nightButton.classList.add(
            "running"
        );


        timerPanel.classList.add(
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


        timerPanel.classList.remove(
            "running"
        );

    }

}


/* =========================================================
   FORMATTA TEMPO
========================================================= */

function formatRemaining(
    milliseconds
)
{

    const totalSeconds =
        Math.max(
            0,
            Math.ceil(
                milliseconds /
                1000
            )
        );


    const minutes =
        Math.floor(
            totalSeconds /
            60
        );


    const seconds =
        totalSeconds %
        60;


    return (
        String(
            minutes
        ).padStart(
            2,
            "0"
        )
        +
        ":"
        +
        String(
            seconds
        ).padStart(
            2,
            "0"
        )
    );

}


/* =========================================================
   AGGIORNA TIMER
========================================================= */

function updateTimers()
{

    /*
        SERATA NON AVVIATA
    */

    if (!nightRunning)
    {

        tequilaTimer.textContent =
            "30:00";


        eventTimer.textContent =
            "???";


        return;

    }


    const now =
        Date.now();


    /*
        TEQUILA
    */

    if (tequilaTarget)
    {

        tequilaTimer.textContent =
            formatRemaining(
                tequilaTarget -
                now
            );

    }
    else
    {

        tequilaTimer.textContent =
            "30:00";

    }


    /*
        Il timer evento
        rimane volontariamente
        nascosto.
    */

    eventTimer.textContent =
        "???";


    /*
        TEQUILA SCADUTO
    */

    if (
        tequilaTarget &&
        now >= tequilaTarget &&
        !tequilaAlertOpen
    )
    {

        tequilaAlertOpen =
            true;


        showTequilaAlert();

    }


    /*
        EVENTO SCADUTO
    */

    if (
        eventTarget &&
        now >= eventTarget &&
        !eventAlertOpen &&
        !eventAwaitingCompletion
    )
    {

        eventAlertOpen =
            true;


        showRandomEvent();

    }

}


/* =========================================================
   TEQUILA TIME
========================================================= */

function showTequilaAlert()
{

    tequilaOverlay.classList.add(
        "active"
    );


    vibratePattern();

}


/* =========================================================
   TEQUILA FATTO
========================================================= */

function acknowledgeTequila()
{

    tequilaOverlay.classList.remove(
        "active"
    );


    tequilaAlertOpen =
        false;


    /*
        Riparte da 30 minuti
        dal momento della conferma.
    */

    tequilaTarget =
        Date.now() +
        TEQUILA_INTERVAL;


    saveGame();

    updateTimers();

}


/* =========================================================
   EVENTO RANDOM
========================================================= */

function showRandomEvent()
{

    const player =
        selectNextPlayer();


    /*
        Nessun giocatore.
    */

    if (!player)
    {

        eventAlertOpen =
            false;


        eventTarget =
            Date.now() +
            randomEventDelay();


        saveGame();


        return;

    }


    /*
        Memorizza la vittima.
    */

    activeEventPlayerId =
        player.id;


    eventAwaitingCompletion =
        true;


    /*
        Finché il turno
        non viene completato,
        nessun altro evento
        viene programmato.
    */

    eventTarget =
        null;


    eventPlayerName.textContent =
        player.name.toUpperCase();


    eventOverlay.classList.add(
        "active"
    );


    saveGame();

    vibratePattern();

}


/* =========================================================
   SCELTA EVENTO
========================================================= */

function chooseEventMode(
    mode
)
{

    eventOverlay.classList.remove(
        "active"
    );


    eventAlertOpen =
        false;


    /*
        Apri la modalità scelta.
    */

    startGame(
        mode
    );

}


/* =========================================================
   COMPLETA TURNO EVENTO
========================================================= */

function completeEventTurn(
    mode
)
{

    /*
        Se il giocatore sta usando
        manualmente Verità/Obbligo/Quiz,
        non dobbiamo modificare
        le statistiche evento.
    */

    if (
        !activeEventPlayerId ||
        !eventAwaitingCompletion
    )
    {

        return;

    }


    const player =
        players.find(
            function (item)
            {

                return (
                    item.id ===
                    activeEventPlayerId
                );

            }
        );


    if (player)
    {

        player.turns =
            (
                player.turns ||
                0
            ) + 1;


        if (
            mode ===
            "truth"
        )
        {

            player.truths =
                (
                    player.truths ||
                    0
                ) + 1;

        }


        if (
            mode ===
            "dare"
        )
        {

            player.dares =
                (
                    player.dares ||
                    0
                ) + 1;

        }


        if (
            mode ===
            "quiz"
        )
        {

            player.quizzes =
                (
                    player.quizzes ||
                    0
                ) + 1;

        }

    }


    /*
        Turno terminato.
    */

    eventAwaitingCompletion =
        false;


    activeEventPlayerId =
        null;


    /*
        Programma il prossimo
        evento 8-18 minuti
        da ADESSO.
    */

    if (nightRunning)
    {

        eventTarget =
            Date.now() +
            randomEventDelay();

    }


    hidePlayerBanners();


    saveGame();

}


/* =========================================================
   PLAYER BANNER
========================================================= */

function showActivePlayer(
    element
)
{

    if (!element)
    {

        return;

    }


    const player =
        players.find(
            function (item)
            {

                return (
                    item.id ===
                    activeEventPlayerId
                );

            }
        );


    if (player)
    {

        element.textContent =
            "☠ TOCCA A " +
            player.name.toUpperCase();


        element.classList.remove(
            "hidden"
        );

    }
    else
    {

        element.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   NASCONDI PLAYER BANNERS
========================================================= */

function hidePlayerBanners()
{

    if (activePlayerBanner)
    {

        activePlayerBanner.classList.add(
            "hidden"
        );

    }


    if (quizPlayerBanner)
    {

        quizPlayerBanner.classList.add(
            "hidden"
        );

    }

}


/* =========================================================
   VIBRAZIONE
========================================================= */

function vibrate()
{

    if (
        navigator.vibrate
    )
    {

        navigator.vibrate(
            40
        );

    }

}


function vibratePattern()
{

    if (
        navigator.vibrate
    )
    {

        navigator.vibrate(
            [
                120,
                80,
                120,
                80,
                220
            ]
        );

    }

}


/* =========================================================
   RIPRESA APP
========================================================= */

/*
    Non ci affidiamo a setInterval
    per sapere quanto tempo è passato.

    Il timer usa sempre Date.now()
    confrontato con i timestamp salvati.

    Quindi:
    - schermo bloccato
    - Safari sospeso
    - cambio app
    - refresh pagina

    non fanno "fermare" il tempo.
*/


document.addEventListener(
    "visibilitychange",
    function ()
    {

        if (
            !document.hidden
        )
        {

            updateTimers();

        }

    }
);


window.addEventListener(
    "focus",
    function ()
    {

        updateTimers();

    }
);


/* =========================================================
   AVVIO APP
========================================================= */

loadGame();


updateTimers();


/*
    Aggiornamento grafico
    ogni secondo.
*/

setInterval(
    updateTimers,
    1000
);


/*
    Se non ci sono ancora
    giocatori, apri direttamente
    la configurazione.
*/

if (
    players.length === 0
)
{

    homeScreen.classList.remove(
        "active"
    );


    playersScreen.classList.add(
        "active"
    );


    renderPlayersEditor();

}
