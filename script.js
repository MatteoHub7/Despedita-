/* ==================================================
   DESPEDIDA
   30 VERITÀ + 30 OBBLIGHI
================================================== */


// ==================================================
// CARTE VERITÀ
// ==================================================

const truthCards = [

    "Qual è stata la tua peggiore figura di merda da ubriaco?",

    "Qual è la persona a cui non dovresti scrivere ma a cui scriveresti dopo altri due drink?",

    "Qual è stato il tuo peggior appuntamento di sempre?",

    "Qual è la bugia più grossa che hai raccontato per rimorchiare?",

    "Chi del gruppo presenteresti meno volentieri ai tuoi genitori?",

    "Qual è la cosa più imbarazzante che hai fatto per qualcuno che ti piaceva?",

    "Mostra l'ultima persona che hai cercato su Instagram.",

    "Qual è una cosa che non hai mai confessato a questo gruppo?",

    "Qual è il messaggio che più ti penti di aver mandato?",

    "Con chi del gruppo andresti più volentieri in vacanza per un mese?",

    "A chi del gruppo affideresti meno volentieri 1.000 euro?",

    "Qual è stata la tua scelta sentimentale più stupida?",

    "Hai mai avuto una cotta per qualcuno che uno dei presenti conosce?",

    "Qual è il posto più assurdo in cui hai baciato qualcuno?",

    "Qual è la scusa peggiore che hai usato per evitare un appuntamento?",

    "Chi del gruppo sopravviverebbe meno a una settimana senza telefono?",

    "Qual è la cosa più infantile che fai ancora?",

    "Qual è stato il tuo acquisto più stupido?",

    "Qual è la cosa più assurda che hai fatto per gelosia?",

    "Quale ex o vecchia fiamma non vorresti assolutamente incontrare stasera?",

    "Qual è il segreto più innocente ma ridicolo che tieni nascosto?",

    "Chi del gruppo sarebbe il peggior coinquilino?",

    "Qual è stata la tua sbronza più memorabile?",

    "Qual è una cosa che hai finto di capire per non fare brutta figura?",

    "Qual è la persona famosa per cui faresti un'eccezione a qualsiasi regola?",

    "Qual è la tua red flag più evidente?",

    "Qual è la cosa più imbarazzante presente nella tua cronologia recente?",

    "Chi del gruppo chiameresti per tirarti fuori da un guaio alle 4 del mattino?",

    "Qual è una cosa che speri succeda stanotte ma che normalmente non ammetteresti?",

    "Se dovessi scambiare la tua vita con quella di una persona del gruppo per un mese, chi sceglieresti?"

];


// ==================================================
// CARTE OBBLIGO
// ==================================================

const dareCards = [

    "Convincete uno sconosciuto che il festeggiato è una celebrità italiana.",

    "Ottieni una dedica scritta da uno sconosciuto per la nuova vita in Svizzera.",

    "Fatti una foto con uno sconosciuto entro 5 minuti.",

    "Chiedi a uno sconosciuto un consiglio matrimoniale spiegando che Matteo sta sposando la Svizzera.",

    "Fai un elogio funebre di 30 secondi alla vita italiana di Matteo.",

    "Parla con un accento scelto dal gruppo fino alla prossima carta.",

    "Trova qualcuno disposto a partecipare per 10 secondi alla processione funebre.",

    "Manda a un contatto scelto dal gruppo un vocale innocuo ma completamente senza contesto.",

    "Convincete qualcuno a firmare simbolicamente il certificato di matrimonio con la Svizzera.",

    "Chiedi a uno sconosciuto di sceglierti un nuovo nome svizzero.",

    "Indossa il Velo della Vergogna fino alla prossima carta.",

    "Ottieni un complimento da qualcuno che non conosci.",

    "Fai una proposta di matrimonio teatrale a un membro del gruppo.",

    "Recita un discorso di 30 secondi iniziando con: «Quando conobbi Matteo, capii immediatamente che...»",

    "Chiedi con assoluta serietà a uno sconosciuto: «Secondo te sembro fiscalmente residente in Svizzera?»",

    "Il gruppo sceglie la tua foto profilo per i prossimi 30 minuti.",

    "Fai una foto da album matrimoniale con il festeggiato.",

    "Trova qualcuno che registri un video dicendo: «Buona fortuna in Svizzera, Matteo!»",

    "Fino alla prossima carta puoi rispondere solamente con: Ja, Nein oppure Fondue.",

    "Improvvisa per 30 secondi una pubblicità turistica della Svizzera.",

    "Fatti dare un soprannome da uno sconosciuto e usalo fino alla prossima carta.",

    "Fai un brindisi solenne al franco svizzero davanti al gruppo.",

    "Cammina fino al prossimo locale come se stessi partecipando a un funerale di Stato.",

    "Chiedi a uno sconosciuto di fare da testimone al matrimonio simbolico con la Svizzera.",

    "Fai scegliere a uno sconosciuto la posa della prossima foto di gruppo.",

    "Inventati una storia assurda su come hai ottenuto la cittadinanza svizzera e raccontala con assoluta serietà.",

    "Fai una dichiarazione d'amore di almeno 30 secondi alla Svizzera.",

    "Il gruppo sceglie una parola che non puoi pronunciare fino alla prossima carta.",

    "Trova uno sconosciuto e chiedigli quale sia la prima cosa che dovrebbe fare Matteo appena arrivato in Svizzera.",

    "Organizza una cerimonia di 60 secondi per celebrare ufficialmente la morte della vita italiana del festeggiato."

];


// ==================================================
// STATO DEL GIOCO
// ==================================================

let currentMode = null;

let usedTruthCards = [];
let usedDareCards = [];


// ==================================================
// ELEMENTI HTML
// ==================================================

const homeScreen =
    document.getElementById("home-screen");

const gameScreen =
    document.getElementById("game-screen");

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


// ==================================================
// LOCAL STORAGE
// Salva le carte già uscite anche se Safari viene chiuso.
// ==================================================

function loadGame() {

    const savedTruth =
        localStorage.getItem("despedida_truth");

    const savedDare =
        localStorage.getItem("despedida_dare");


    if (savedTruth) {

        try {

            usedTruthCards =
                JSON.parse(savedTruth);

        } catch {

            usedTruthCards = [];

        }

    }


    if (savedDare) {

        try {

            usedDareCards =
                JSON.parse(savedDare);

        } catch {

            usedDareCards = [];

        }

    }


    updateHomeCounters();

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

}


// ==================================================
// HOME
// ==================================================

function startGame(mode) {

    currentMode = mode;

    homeScreen.classList.remove("active");

    gameScreen.classList.add("active");


    if (mode === "truth") {

        gameTitle.textContent = "VERITÀ";

        cardType.textContent = "VERITÀ";

        cardIcon.textContent = "†";

        drawButton.classList.remove("dare-mode");

    } else {

        gameTitle.textContent = "OBBLIGO";

        cardType.textContent = "OBBLIGO";

        cardIcon.textContent = "⚰";

        drawButton.classList.add("dare-mode");

    }


    cardText.textContent =
        "Premi il pulsante per pescare.";

    updateCardCounter();

}


function goHome() {

    gameScreen.classList.remove("active");

    homeScreen.classList.add("active");

    updateHomeCounters();

}


// ==================================================
// PESCA
// ==================================================

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


    // Se sono uscite tutte le carte
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


    // Trova le carte ancora disponibili
    const availableCards =
        deck
            .map((card, index) => index)
            .filter(index => !used.includes(index));


    // Indice casuale
    const randomPosition =
        Math.floor(
            Math.random() *
            availableCards.length
        );


    const cardIndex =
        availableCards[randomPosition];


    // Segna carta come usata
    used.push(cardIndex);


    // Testo
    cardText.textContent =
        deck[cardIndex];


    // Animazione
    card.classList.remove("animate");

    void card.offsetWidth;

    card.classList.add("animate");


    // Vibrazione leggera su smartphone
    if (navigator.vibrate) {

        navigator.vibrate(40);

    }


    saveGame();

    updateCardCounter();

    updateHomeCounters();

}


// ==================================================
// CONTATORI
// ==================================================

function updateCardCounter() {

    let used;
    let total;


    if (currentMode === "truth") {

        used = usedTruthCards.length;
        total = truthCards.length;

    } else {

        used = usedDareCards.length;
        total = dareCards.length;

    }


    cardNumber.textContent =
        `CARTA ${used} / ${total}`;


    if (used === total) {

        drawButton.textContent =
            "MAZZO TERMINATO";

    } else if (used === 0) {

        drawButton.textContent =
            "PESCA UNA CARTA";

    } else {

        drawButton.textContent =
            "PESCA ANCORA";

    }

}


function updateHomeCounters() {

    const truthRemaining =
        truthCards.length -
        usedTruthCards.length;

    const dareRemaining =
        dareCards.length -
        usedDareCards.length;


    document
        .getElementById("truth-home-counter")
        .textContent =
        truthRemaining;


    document
        .getElementById("dare-home-counter")
        .textContent =
        dareRemaining;

}


// ==================================================
// RESET
// ==================================================

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


    if (currentMode === "truth") {

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


// ==================================================
// AVVIO
// ==================================================

loadGame();
