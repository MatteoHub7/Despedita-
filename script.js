/* ==================================================
   DESPEDIDA
   30 VERITÀ + 30 OBBLIGHI + 30 QUIZ
   + SISTEMA GIOCATORI
================================================== */


/* ==================================================
   VERITÀ
================================================== */

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


/* ==================================================
   OBBLIGHI
================================================== */

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

    "Il gruppo sceglie uno sconosciuto. Avvicinati e chiedigli molto seriamente: «Scusa, secondo te noi due abbiamo già litigato in passato?»",

    "Vai da uno sconosciuto chiamandolo con il primo nome che ti viene in mente e fai finta di conoscerlo. Porta avanti la conversazione per almeno un minuto.",

    "Chiedi a uno sconosciuto di registrare un video di 10 secondi in cui racconta come vi siete conosciuti, lasciando che inventi completamente la storia.",

    "Vai da uno sconosciuto e chiedigli quale membro del gruppo sembra più probabilmente ricercato dalla polizia. Deve anche spiegare il motivo.",

    "Trova uno sconosciuto disposto a celebrare il funerale ufficiale della vita italiana di Matteo. Deve improvvisare un elogio funebre di almeno 20 secondi."

];


/* ==================================================
   QUIZ
================================================== */

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
            "Zelda. Il titolo, per una volta, collaborava."
    },


    /* =========================
       QUIZ DEL GRUPPO
    ========================= */

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


/* ==================================================
   STATO DEL GIOCO
================================================== */

let currentMode = null;

let usedTruthCards = [];
let usedDareCards = [];
let usedQuizQuestions = [];

let currentQuizIndex = null;
let selectedQuizAnswer = null;
let quizRevealed = false;


/* ==================================================
   GIOCATORI
================================================== */

let players = [];

let celebrantId = null;

let lastSelectedPlayerId = null;


/* ==================================================
   ELEMENTI HTML
================================================== */

const homeScreen =
    document.getElementById("home-screen");

const gameScreen =
    document.getElementById("game-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const playersScreen =
    document.getElementById("players-screen");

const card =
    document.getElementById("card");

const cardType =
    document.getElementById("card-type");

const cardText =
    document.getElementById("card-text");

const cardNumber =
    document.getElementById("card-number");

const cardIcon =
    document.getElementById("card-icon");

const gameTitle =
    document.getElementById("game-title");

const drawButton =
    document.getElementById("draw-button");

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

const quizCard =
    document.querySelector(".quiz-card");

const playersList =
    document.getElementById("players-list");

const celebrantSelect =
    document.getElementById("celebrant-select");

const playersError =
    document.getElementById("players-error");

const playersHomeCount =
    document.getElementById("players-home-count");


/* ==================================================
   LOCAL STORAGE
================================================== */

function loadGame() {

    try {

        usedTruthCards =
            JSON.parse(
                localStorage.getItem("despedida_truth")
            ) || [];

        usedDareCards =
            JSON.parse(
                localStorage.getItem("despedida_dare")
            ) || [];

        usedQuizQuestions =
            JSON.parse(
                localStorage.getItem("despedida_quiz")
            ) || [];

        players =
            JSON.parse(
                localStorage.getItem("despedida_players")
            ) || [];

    } catch {

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


    updateHomeCounters();

    updatePlayersHome();

}


function saveGame() {

    localStorage.setItem(
        "despedida_truth",
        JSON.stringify(usedTruthCards)
    );

    localStorage.setItem(
        "despedida_dare",
        JSON.stringify(usedDareCards)
    );

    localStorage.setItem(
        "despedida_quiz",
        JSON.stringify(usedQuizQuestions)
    );

    localStorage.setItem(
        "despedida_players",
        JSON.stringify(players)
    );


    if (celebrantId) {

        localStorage.setItem(
            "despedida_celebrant",
            celebrantId
        );

    } else {

        localStorage.removeItem(
            "despedida_celebrant"
        );

    }


    if (lastSelectedPlayerId) {

        localStorage.setItem(
            "despedida_last_player",
            lastSelectedPlayerId
        );

    }

}


/* ==================================================
   HOME / MODALITÀ
================================================== */

function startGame(mode) {

    currentMode = mode;

    homeScreen.classList.remove("active");
    gameScreen.classList.remove("active");
    quizScreen.classList.remove("active");

    if (playersScreen) {
        playersScreen.classList.remove("active");
    }


    if (mode === "quiz") {

        quizScreen.classList.add("active");

        resetQuizDisplay();

        return;

    }


    gameScreen.classList.add("active");


    if (mode === "truth") {

        gameTitle.textContent =
            "VERITÀ";

        cardType.textContent =
            "VERITÀ";

        cardIcon.textContent =
            "†";

        drawButton.classList.remove(
            "dare-mode"
        );

    } else {

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


function goHome() {

    gameScreen.classList.remove(
        "active"
    );

    quizScreen.classList.remove(
        "active"
    );

    if (playersScreen) {

        playersScreen.classList.remove(
            "active"
        );

    }

    homeScreen.classList.add(
        "active"
    );

    currentMode = null;

    updateHomeCounters();

    updatePlayersHome();

}


/* ==================================================
   VERITÀ / OBBLIGO
================================================== */

function drawCard() {

    let deck;
    let used;


    if (currentMode === "truth") {

        deck = truthCards;
        used = usedTruthCards;

    } else {

        deck = dareCards;
        used = usedDareCards;

    }


    if (used.length >= deck.length) {

        const reset =
            confirm(
                "Il mazzo è terminato. Vuoi ricominciarlo?"
            );

        if (reset) {

            resetCurrentDeck();

        }

        return;

    }


    const availableCards =
        deck
            .map((item, index) => index)
            .filter(
                index =>
                    !used.includes(index)
            );


    const randomPosition =
        Math.floor(
            Math.random() *
            availableCards.length
        );


    const cardIndex =
        availableCards[
            randomPosition
        ];


    used.push(
        cardIndex
    );


    cardText.textContent =
        deck[cardIndex];


    card.classList.remove(
        "animate"
    );

    void card.offsetWidth;

    card.classList.add(
        "animate"
    );


    vibrate();

    saveGame();

    updateCardCounter();

    updateHomeCounters();

}


/* ==================================================
   QUIZ
================================================== */

function handleQuizButton() {

    if (
        currentQuizIndex === null ||
        quizRevealed
    ) {

        drawQuizQuestion();

    } else {

        revealQuizAnswer();

    }

}


function drawQuizQuestion() {

    if (
        usedQuizQuestions.length >=
        quizQuestions.length
    ) {

        const reset =
            confirm(
                "Hai terminato tutte le domande. Vuoi ricominciare?"
            );

        if (reset) {

            resetQuizDeck();

        }

        return;

    }


    const available =
        quizQuestions
            .map(
                (item, index) =>
                    index
            )
            .filter(
                index =>
                    !usedQuizQuestions.includes(
                        index
                    )
            );


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


    if (
        quiz.correct !== "open"
    ) {

        quiz.options.forEach(
            (option, index) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "quiz-option";


                button.textContent =
                    `${String.fromCharCode(
                        65 + index
                    )}) ${option}`;


                button.onclick =
                    () =>
                        selectQuizAnswer(
                            index,
                            button
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


function selectQuizAnswer(
    index,
    button
) {

    if (quizRevealed) {
        return;
    }


    selectedQuizAnswer =
        index;


    document
        .querySelectorAll(
            ".quiz-option"
        )
        .forEach(option => {

            option.classList.remove(
                "selected"
            );

        });


    button.classList.add(
        "selected"
    );

}


function revealQuizAnswer() {

    if (
        currentQuizIndex === null
    ) {
        return;
    }


    const quiz =
        quizQuestions[
            currentQuizIndex
        ];


    if (
        quiz.correct === "open"
    ) {

        quizResult.innerHTML =
            `<strong>VERDETTO</strong><br>${quiz.explanation}`;

        quizResult.classList.add(
            "visible"
        );

        quizRevealed =
            true;

        quizMainButton.textContent =
            "PROSSIMA DOMANDA";

        vibrate();

        return;

    }


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    if (
        quiz.correct === null
    ) {

        buttons.forEach(
            button => {

                button.classList.add(
                    "wrong",
                    "disabled"
                );

            }
        );


        quizResult.innerHTML =
            `<strong>NESSUNA DELLE PRECEDENTI</strong><br>${quiz.explanation}`;

    } else {

        buttons.forEach(
            (button, index) => {

                button.classList.add(
                    "disabled"
                );


                if (
                    index ===
                    quiz.correct
                ) {

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
                ) {

                    button.classList.add(
                        "wrong"
                    );

                }

            }
        );


        const letter =
            String.fromCharCode(
                65 + quiz.correct
            );


        const answer =
            quiz.options[
                quiz.correct
            ];


        quizResult.innerHTML =
            `<strong>${letter}) ${answer}</strong><br>${quiz.explanation}`;

    }


    quizResult.classList.add(
        "visible"
    );


    quizRevealed =
        true;


    quizMainButton.textContent =
        "PROSSIMA DOMANDA";


    vibrate();

}


/* ==================================================
   CONTATORI
================================================== */

function updateCardCounter() {

    let used;
    let total;


    if (
        currentMode === "truth"
    ) {

        used =
            usedTruthCards.length;

        total =
            truthCards.length;

    } else {

        used =
            usedDareCards.length;

        total =
            dareCards.length;

    }


    cardNumber.textContent =
        `CARTA ${used} / ${total}`;


    if (
        used === total
    ) {

        drawButton.textContent =
            "MAZZO TERMINATO";

    } else if (
        used === 0
    ) {

        drawButton.textContent =
            "PESCA UNA CARTA";

    } else {

        drawButton.textContent =
            "PESCA ANCORA";

    }

}


function updateQuizCounter() {

    quizNumber.textContent =
        `QUIZ ${usedQuizQuestions.length} / ${quizQuestions.length}`;

}


function updateHomeCounters() {

    const truthCounter =
        document.getElementById(
            "truth-home-counter"
        );

    const dareCounter =
        document.getElementById(
            "dare-home-counter"
        );

    const quizCounter =
        document.getElementById(
            "quiz-home-counter"
        );


    if (truthCounter) {

        truthCounter.textContent =
            truthCards.length -
            usedTruthCards.length;

    }


    if (dareCounter) {

        dareCounter.textContent =
            dareCards.length -
            usedDareCards.length;

    }


    if (quizCounter) {

        quizCounter.textContent =
            quizQuestions.length -
            usedQuizQuestions.length;

    }

}


/* ==================================================
   RESET VERITÀ / OBBLIGO
================================================== */

function resetCurrentDeck() {

    if (!currentMode) {
        return;
    }


    const deckName =
        currentMode === "truth"
            ? "delle Verità"
            : "degli Obblighi";


    const confirmation =
        confirm(
            `Vuoi davvero resettare il mazzo ${deckName}?`
        );


    if (!confirmation) {
        return;
    }


    if (
        currentMode === "truth"
    ) {

        usedTruthCards = [];

    } else {

        usedDareCards = [];

    }


    cardText.textContent =
        "Mazzo resettato. Il disastro può ricominciare.";


    saveGame();

    updateCardCounter();

    updateHomeCounters();

}


/* ==================================================
   RESET QUIZ
================================================== */

function resetQuizDeck() {

    const confirmation =
        confirm(
            "Vuoi davvero resettare tutte le domande del Quiz?"
        );


    if (!confirmation) {
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


/* ==================================================
   RESET DISPLAY QUIZ
================================================== */

function resetQuizDisplay() {

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


/* ==================================================
   APERTURA GIOCATORI
================================================== */

function openPlayersScreen() {

    homeScreen.classList.remove(
        "active"
    );

    gameScreen.classList.remove(
        "active"
    );

    quizScreen.classList.remove(
        "active"
    );

    playersScreen.classList.add(
        "active"
    );


    renderPlayersEditor();

}


/* ==================================================
   EDITOR GIOCATORI
================================================== */

function renderPlayersEditor() {

    playersList.innerHTML =
        "";

    playersError.textContent =
        "";


    if (
        players.length === 0
    ) {

        for (
            let i = 0;
            i < 4;
            i++
        ) {

            createPlayerRow("");

        }

    } else {

        players.forEach(
            player => {

                createPlayerRow(
                    player.name,
                    player.id
                );

            }
        );

    }


    updateCelebrantSelect();

}


/* ==================================================
   CREA RIGA GIOCATORE
================================================== */

function createPlayerRow(
    name = "",
    existingId = null
) {

    const row =
        document.createElement(
            "div"
        );


    row.className =
        "player-row";


    if (existingId) {

        row.dataset.playerId =
            existingId;

    }


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


    input.addEventListener(
        "input",
        updateCelebrantSelect
    );


    const removeButton =
        document.createElement(
            "button"
        );


    removeButton.className =
        "remove-player-button";

    removeButton.type =
        "button";

    removeButton.textContent =
        "×";


    removeButton.onclick =
        function () {

            row.remove();

            updateCelebrantSelect();

        };


    row.appendChild(
        input
    );

    row.appendChild(
        removeButton
    );


    playersList.appendChild(
        row
    );

}


/* ==================================================
   AGGIUNGI GIOCATORE
================================================== */

function addPlayerInput() {

    createPlayerRow("");


    const inputs =
        playersList.querySelectorAll(
            ".player-input"
        );


    const lastInput =
        inputs[
            inputs.length - 1
        ];


    if (lastInput) {

        lastInput.focus();

    }

}


/* ==================================================
   SELECT FESTEGGIATO
================================================== */

function updateCelebrantSelect() {

    if (!celebrantSelect) {
        return;
    }


    const previousName =
        celebrantSelect
            .options[
                celebrantSelect
                    .selectedIndex
            ]
            ?.textContent;


    celebrantSelect.innerHTML =
        "";


    const rows =
        Array.from(
            playersList.querySelectorAll(
                ".player-row"
            )
        );


    rows.forEach(
        (row, index) => {

            const input =
                row.querySelector(
                    ".player-input"
                );


            const name =
                input.value.trim();


            if (!name) {
                return;
            }


            const option =
                document.createElement(
                    "option"
                );


            option.value =
                String(index);

            option.textContent =
                name;


            celebrantSelect.appendChild(
                option
            );

        }
    );


    /*
       Prima proviamo a mantenere
       la selezione appena effettuata.
    */

    if (previousName) {

        const matching =
            Array.from(
                celebrantSelect.options
            )
            .find(
                option =>
                    option.textContent ===
                    previousName
            );


        if (matching) {

            celebrantSelect.value =
                matching.value;

            return;

        }

    }


    /*
       Altrimenti recuperiamo
       il festeggiato salvato.
    */

    const oldCelebrant =
        players.find(
            player =>
                player.id ===
                celebrantId
        );


    if (oldCelebrant) {

        const matching =
            Array.from(
                celebrantSelect.options
            )
            .find(
                option =>
                    option.textContent ===
                    oldCelebrant.name
            );


        if (matching) {

            celebrantSelect.value =
                matching.value;

        }

    }

}


/* ==================================================
   GENERA ID GIOCATORE
================================================== */

function generatePlayerId() {

    return (
        Date.now()
            .toString(36) +
        Math.random()
            .toString(36)
            .substring(2, 8)
    );

}


/* ==================================================
   SALVA GIOCATORI
================================================== */

function savePlayers() {

    const rows =
        Array.from(
            playersList.querySelectorAll(
                ".player-row"
            )
        );


    const validRows =
        rows.filter(
            row => {

                const input =
                    row.querySelector(
                        ".player-input"
                    );


                return (
                    input.value
                        .trim() !== ""
                );

            }
        );


    if (
        validRows.length < 2
    ) {

        playersError.textContent =
            "Servono almeno 2 giocatori.";

        return;

    }


    const names =
        validRows.map(
            row =>
                row
                    .querySelector(
                        ".player-input"
                    )
                    .value
                    .trim()
        );


    const normalizedNames =
        names.map(
            name =>
                name.toLowerCase()
        );


    if (
        new Set(
            normalizedNames
        ).size !==
        normalizedNames.length
    ) {

        playersError.textContent =
            "Due giocatori hanno lo stesso nome.";

        return;

    }


    const selectedName =
        celebrantSelect
            .options[
                celebrantSelect
                    .selectedIndex
            ]
            ?.textContent;


    const oldPlayers =
        [...players];


    const newPlayers =
        [];


    validRows.forEach(
        row => {

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
                    player =>
                        player.id ===
                        existingId
                );


            if (oldPlayer) {

                newPlayers.push({

                    ...oldPlayer,

                    name: name

                });

            } else {

                newPlayers.push({

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

                });

            }

        }
    );


    players =
        newPlayers;


    const selectedPlayer =
        players.find(
            player =>
                player.name ===
                selectedName
        );


    celebrantId =
        selectedPlayer
            ? selectedPlayer.id
            : players[0].id;


    playersError.textContent =
        "";


    saveGame();

    updatePlayersHome();


    playersScreen.classList.remove(
        "active"
    );


    homeScreen.classList.add(
        "active"
    );

}


/* ==================================================
   CONTATORE GIOCATORI HOME
================================================== */

function updatePlayersHome() {

    if (!playersHomeCount) {
        return;
    }


    const total =
        players.length;


    playersHomeCount.textContent =
        total === 1
            ? "1 GIOCATORE"
            : `${total} GIOCATORI`;

}


/* ==================================================
   FESTEGGIATO
================================================== */

function getCelebrant() {

    return (
        players.find(
            player =>
                player.id ===
                celebrantId
        ) || null
    );

}


/* ==================================================
   SELEZIONE RANDOM BILANCIATA
================================================== */

function selectNextPlayer() {

    if (
        players.length === 0
    ) {

        return null;

    }


    if (
        players.length === 1
    ) {

        return players[0];

    }


    const minimumTurns =
        Math.min(
            ...players.map(
                player =>
                    player.turns || 0
            )
        );


    let candidates =
        players.filter(
            player =>
                (player.turns || 0) <=
                minimumTurns + 1
        );


    /*
       Evita la stessa persona
       due volte consecutive.
    */

    const withoutPrevious =
        candidates.filter(
            player =>
                player.id !==
                lastSelectedPlayerId
        );


    if (
        withoutPrevious.length > 0
    ) {

        candidates =
            withoutPrevious;

    }


    const randomIndex =
        Math.floor(
            Math.random() *
            candidates.length
        );


    const selected =
        candidates[
            randomIndex
        ];


    lastSelectedPlayerId =
        selected.id;


    saveGame();


    return selected;

}


/* ==================================================
   VIBRAZIONE
================================================== */

function vibrate() {

    if (
        navigator.vibrate
    ) {

        navigator.vibrate(40);

    }

}


/* ==================================================
   AVVIO
================================================== */

loadGame();


if (
    players.length === 0 &&
    playersScreen
) {

    homeScreen.classList.remove(
        "active"
    );

    playersScreen.classList.add(
        "active"
    );

    renderPlayersEditor();

}
