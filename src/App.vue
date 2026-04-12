<template>
  <div class="game-wrapper" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="bg-grid" aria-hidden="true"></div>
    <div class="compass-rose" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="60,4 66,54 60,58 54,54" fill="currentColor" opacity="0.6"/>
        <polygon points="60,116 66,66 60,62 54,66" fill="currentColor" opacity="0.3"/>
        <polygon points="4,60 54,54 58,60 54,66" fill="currentColor" opacity="0.3"/>
        <polygon points="116,60 66,54 62,60 66,66" fill="currentColor" opacity="0.3"/>
        <polygon points="60,4 66,54 60,58 54,54" fill="currentColor" opacity="0.6" transform="rotate(45,60,60)"/>
        <polygon points="60,116 66,66 60,62 54,66" fill="currentColor" opacity="0.3" transform="rotate(45,60,60)"/>
        <polygon points="4,60 54,54 58,60 54,66" fill="currentColor" opacity="0.3" transform="rotate(45,60,60)"/>
        <polygon points="116,60 66,54 62,60 66,66" fill="currentColor" opacity="0.3" transform="rotate(45,60,60)"/>
        <circle cx="60" cy="60" r="7" fill="currentColor" opacity="0.5"/>
        <circle cx="60" cy="60" r="3" fill="currentColor"/>
      </svg>
    </div>

    <!-- ═══════════════════════════════════════════════ -->
    <!--  PHASE: WELCOME                                  -->
    <!-- ═══════════════════════════════════════════════ -->
    <Transition name="screen">
      <div v-if="phase === 'welcome'" class="welcome-screen" key="welcome">
        <div class="welcome-card">
          <div class="title-rule"><span></span><span class="rule-diamond">◆</span><span></span></div>
          <h1 class="game-title">ContiMakers</h1>
          <p class="welcome-tagline">{{ t.welcomeSubtitle }}</p>
          <div class="title-rule"><span></span><span class="rule-diamond">◆</span><span></span></div>

          <div class="country-selector-block">
            <p class="selector-label">{{ t.chooseCountry }}</p>
            <div class="country-grid">
              <button
                v-for="country in COUNTRIES"
                :key="country.name"
                class="country-btn"
                :class="{ selected: selectedCountry?.name === country.name }"
                @click="selectCountry(country)"
              >
                <span class="country-flag">{{ country.flag }}</span>
                <span class="country-label">{{ country.name }}</span>
              </button>
            </div>
          </div>

          <button class="start-btn" @click="startGame">
            {{ t.startBtn }}
          </button>
        </div>
      </div>
    </Transition>

    <!-- ═══════════════════════════════════════════════ -->
    <!--  PHASE: SELECTION                               -->
    <!-- ═══════════════════════════════════════════════ -->
    <Transition name="screen">
      <div v-if="phase === 'selection'" class="selection-screen" key="selection">

        <div class="game-title-block">
          <div class="title-rule"><span></span><span class="rule-diamond">◆</span><span></span></div>
          <h1 class="game-title">ContiMakers</h1>
          <p class="game-subtitle">{{ t.selectionSubtitle }}</p>
          <div class="title-rule"><span></span><span class="rule-diamond">◆</span><span></span></div>
        </div>

        <div class="cards-grid">
          <div
            v-for="(card, i) in cardDeck"
            :key="card.continent"
            class="mystery-card"
            :class="{ flipped: card.revealed, locked: anyRevealed && !card.revealed }"
            @click="revealCard(card)"
          >
            <div class="card-inner">

              <!-- BACK FACE -->
              <div class="card-back" :style="cardBackStyle(i)">
                <div class="cb-frame">
                  <div class="cb-corner cb-corner--tl"></div>
                  <div class="cb-corner cb-corner--tr"></div>
                  <div class="cb-corner cb-corner--bl"></div>
                  <div class="cb-corner cb-corner--br"></div>
                  <div class="cb-center">
                    <svg class="cb-pattern" viewBox="0 0 80 80">
                      <polygon points="40,6 74,40 40,74 6,40" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.5"/>
                      <polygon points="40,18 62,40 40,62 18,40" stroke="currentColor" stroke-width="1" fill="none" opacity="0.4"/>
                      <line x1="40" y1="6" x2="40" y2="74" stroke="currentColor" stroke-width="0.6" opacity="0.2"/>
                      <line x1="6" y1="40" x2="74" y2="40" stroke="currentColor" stroke-width="0.6" opacity="0.2"/>
                      <circle cx="40" cy="6"  r="2" fill="currentColor" opacity="0.6"/>
                      <circle cx="74" cy="40" r="2" fill="currentColor" opacity="0.6"/>
                      <circle cx="40" cy="74" r="2" fill="currentColor" opacity="0.6"/>
                      <circle cx="6"  cy="40" r="2" fill="currentColor" opacity="0.6"/>
                      <circle cx="40" cy="40" r="10" stroke="currentColor" stroke-width="1" fill="none" opacity="0.5"/>
                      <circle cx="40" cy="40" r="3"  fill="currentColor" opacity="0.7"/>
                    </svg>
                    <div class="cb-roman">{{ ROMAN[i] }}</div>
                  </div>
                </div>
                <div class="cb-shimmer"></div>
              </div>

              <!-- FRONT FACE -->
              <div class="card-front" :style="continentStyle(card.continent)">
                <div class="cf-glow"></div>
                <div class="cf-icon">{{ ICONS[card.continent] }}</div>
                <div class="cf-name">{{ t.continents[card.continent] }}</div>
                <div class="cf-divider"></div>
                <div class="cf-sub">{{ t.questionsAwait }}</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ═══════════════════════════════════════════════ -->
    <!--  PHASE: QUIZ                                    -->
    <!-- ═══════════════════════════════════════════════ -->
    <Transition name="screen">
      <div v-if="phase === 'quiz'" class="quiz-container" key="quiz">

        <main class="game-card" :class="{ 'card-exit': isTransitioning }">

          <header class="card-header">
            <div class="continent-tag">
              <span class="continent-icon">{{ ICONS[activeContinent] }}</span>
              <span class="continent-name">{{ t.continents[activeContinent] }}</span>
            </div>
            <div class="progress-info">
              <span class="progress-label">{{ t.questionLabel }}</span>
              <span class="progress-count">{{ currentIndex + 1 }}<span class="progress-total"> / 4</span></span>
            </div>
          </header>

          <section class="question-section">
            <p class="question-text">{{ currentQ?.question }}</p>
          </section>

          <section class="answers-section">
            <button
              v-for="(option, idx) in displayedOptions"
              :key="option + idx"
              class="answer-btn"
              :class="answerClass(option)"
              :disabled="answered"
              @click="selectAnswer(option)"
            >
              <span class="answer-letter">{{ LETTERS[idx] }}</span>
              <span class="answer-text">{{ option }}</span>
            </button>
          </section>

          <Transition name="feedback">
            <div
              v-if="answered"
              class="feedback-bar"
              :class="isCorrect ? 'feedback-correct' : 'feedback-wrong'"
            >
              <span class="feedback-icon">{{ isCorrect ? '✓' : '✗' }}</span>
              <span class="feedback-msg">
                {{ isCorrect ? t.correctFeedback : `${t.answerPrefix} ${currentQ?.correct}` }}
              </span>
              <button class="next-btn" @click="nextQuestion">
                {{ currentIndex < 3 ? t.nextBtn : t.resultsBtn }}
              </button>
            </div>
          </Transition>

        </main>

        <!-- 4-pip track -->
        <div class="quiz-pips">
          <div
            v-for="n in 4"
            :key="n"
            class="pip"
            :class="{
              done:    n <= currentIndex,
              active:  n === currentIndex + 1,
              correct: answered && n === currentIndex + 1 && pipResults[n-1] === true,
              wrong:   answered && n === currentIndex + 1 && pipResults[n-1] === false,
              'past-correct': n <= currentIndex && pipResults[n-1] === true,
              'past-wrong':   n <= currentIndex && pipResults[n-1] === false,
            }"
          ></div>
        </div>

      </div>
    </Transition>

    <!-- ═══════════════════════════════════════════════ -->
    <!--  PHASE: RESULT                                  -->
    <!-- ═══════════════════════════════════════════════ -->
    <Transition name="screen">
      <div v-if="phase === 'result'" class="result-screen" key="result">
        <div class="result-card">

          <div class="result-continent-banner" :style="continentStyle(activeContinent)">
            <span class="result-icon">{{ ICONS[activeContinent] }}</span>
            <span class="result-continent">{{ t.continents[activeContinent] }}</span>
          </div>

          <div class="result-body">
            <p class="result-headline">{{ t.roundComplete }}</p>

            <div class="result-stars">
              <span v-for="n in 4" :key="n" class="star" :class="{ lit: n <= score }">★</span>
            </div>

            <p class="result-score">{{ score }} / 4 {{ t.correctLabel }}</p>
            <p class="result-comment">{{ scoreComment }}</p>

            <div class="result-pip-row">
              <div
                v-for="(res, i) in pipResults"
                :key="i"
                class="result-pip"
                :class="res === true ? 'correct' : 'wrong'"
              >{{ res === true ? '✓' : '✗' }}</div>
            </div>

            <button class="return-btn" @click="returnToMap">{{ t.returnBtn }}</button>
          </div>

        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { questions } from "./data/questions.js";

// ── Constants ─────────────────────────────────────────────────
const CONTINENTS = ["Europe", "Asia", "Africa", "North America", "South America", "Australia"];
const ROMAN      = ["I", "II", "III", "IV", "V", "VI"];
const LETTERS    = ["A", "B", "C", "D"];

const ICONS = {
  "Europe":        "🏰",
  "Asia":          "🏯",
  "Africa":        "🌍",
  "North America": "🗽",
  "South America": "🌎",
  "Australia":     "🦘",
};

// Continent front-face gradient colours (unchanged)
const CONTINENT_COLORS = {
  "Europe":        { from: "#1a2e6e", to: "#2a4fa8", accent: "#7ba3e8" },
  "Asia":          { from: "#6e1a1a", to: "#a82a2a", accent: "#e87b7b" },
  "Africa":        { from: "#6e3d00", to: "#a85e00", accent: "#e8b060" },
  "North America": { from: "#1a4e2e", to: "#2a7a48", accent: "#7be8a8" },
  "South America": { from: "#0a3e5a", to: "#1a6a8a", accent: "#60c8e8" },
  "Australia":     { from: "#5a2a0a", to: "#8a4a1a", accent: "#e8a060" },
};

// Six distinct colours for the mystery card BACKS (one per position)
const CARD_BACK_COLORS = [
  { from: "#1e3a7a", to: "#2d5db8", accent: "#90b8f0" }, // Royal Blue
  { from: "#6e1e3a", to: "#a82d5e", accent: "#f0a0c0" }, // Crimson Rose
  { from: "#1e5a30", to: "#2d8a48", accent: "#80e0a0" }, // Forest Green
  { from: "#5a3e0a", to: "#8a6020", accent: "#f0c868" }, // Amber
  { from: "#0a4a5e", to: "#1e7a8a", accent: "#70d0e8" }, // Deep Teal
  { from: "#4a1e6e", to: "#7a2da8", accent: "#d090f0" }, // Violet
];

// Countries → language mapping (ordered: Serbian first / default)
const COUNTRIES = [
  // Serbian
  { name: "Srbija",              lang: "sr", flag: "🇷🇸" },
  { name: "Crna Gora",           lang: "sr", flag: "🇲🇪" },
  // English
  { name: "United Kingdom",      lang: "en", flag: "🇬🇧" },
  { name: "United States",       lang: "en", flag: "🇺🇸" },
  { name: "Australia",           lang: "en", flag: "🇦🇺" },
  { name: "Canada",              lang: "en", flag: "🇨🇦" },
  { name: "Ireland",             lang: "en", flag: "🇮🇪" },
  { name: "New Zealand",         lang: "en", flag: "🇳🇿" },
  { name: "South Africa",        lang: "en", flag: "🇿🇦" },
  // German
  { name: "Deutschland",         lang: "de", flag: "🇩🇪" },
  { name: "Österreich",          lang: "de", flag: "🇦🇹" },
  { name: "Schweiz",             lang: "de", flag: "🇨🇭" },
  // Bosnian
  { name: "Bosna i Hercegovina", lang: "bs", flag: "🇧🇦" },
  // Croatian
  { name: "Hrvatska",            lang: "hr", flag: "🇭🇷" },
  // French
  { name: "France",              lang: "fr", flag: "🇫🇷" },
  { name: "Belgique",            lang: "fr", flag: "🇧🇪" },
  { name: "Suisse (FR)",         lang: "fr", flag: "🇨🇭" },
  // Spanish
  { name: "España",              lang: "es", flag: "🇪🇸" },
  { name: "México",              lang: "es", flag: "🇲🇽" },
  { name: "Argentina",           lang: "es", flag: "🇦🇷" },
  { name: "Colombia",            lang: "es", flag: "🇨🇴" },
  { name: "Chile",               lang: "es", flag: "🇨🇱" },
  { name: "Perú",                lang: "es", flag: "🇵🇪" },
  { name: "Venezuela",           lang: "es", flag: "🇻🇪" },
  // Portuguese
  { name: "Portugal",            lang: "pt", flag: "🇵🇹" },
  { name: "Brasil",              lang: "pt", flag: "🇧🇷" },
  // Arabic
  { name: "السعودية",           lang: "ar", flag: "🇸🇦" },
  { name: "مصر",                lang: "ar", flag: "🇪🇬" },
  { name: "المغرب",             lang: "ar", flag: "🇲🇦" },
  { name: "الإمارات",           lang: "ar", flag: "🇦🇪" },
  { name: "الأردن",             lang: "ar", flag: "🇯🇴" },
  { name: "تونس",               lang: "ar", flag: "🇹🇳" },
  // Macedonian
  { name: "Северна Македонија",  lang: "mk", flag: "🇲🇰" },
  // Russian
  { name: "Россия",              lang: "ru", flag: "🇷🇺" },
  { name: "Беларусь",            lang: "ru", flag: "🇧🇾" },
  { name: "Казахстан",           lang: "ru", flag: "🇰🇿" },
];

// ── Translations ──────────────────────────────────────────────
// scoreComments[0]=4/4, [1]=3/4, [2]=2/4, [3]=1/4, [4]=0/4
const TRANSLATIONS = {
  sr: {
    welcomeSubtitle:   "Geografski kviz za znatiželjne umove",
    chooseCountry:     "Odakle ste?",
    startBtn:          "Počni",
    selectionSubtitle: "Šest teritorija skriveno iza karata. Izaberite jednu da otkrijete odredište.",
    questionsAwait:    "4 pitanja čekaju",
    questionLabel:     "Pitanje",
    correctFeedback:   "Tačno!",
    answerPrefix:      "Odgovor:",
    nextBtn:           "Sledeće →",
    resultsBtn:        "Vidi rezultate →",
    roundComplete:     "Runda završena",
    correctLabel:      "tačno",
    returnBtn:         "◂ Povratak na kartu",
    scoreComments: [
      "Savršen rezultat — svet nema tajni od tebe!",
      "Odlično — iskusan istraživač!",
      "Nije loše — nastavi da putuje i učiš.",
      "Mali početak — svako putovanje počinje ovde.",
      "Nema veze — svet nagrađuje radoznale.",
    ],
    continents: {
      "Europe": "Evropa", "Asia": "Azija", "Africa": "Afrika",
      "North America": "Severna Amerika", "South America": "Južna Amerika", "Australia": "Australija",
    },
  },

  en: {
    welcomeSubtitle:   "A geography quiz for curious minds",
    chooseCountry:     "Where are you from?",
    startBtn:          "Start",
    selectionSubtitle: "Six territories lie hidden beyond these cards. Choose one to reveal your destination.",
    questionsAwait:    "4 questions await",
    questionLabel:     "Question",
    correctFeedback:   "Correct!",
    answerPrefix:      "Answer:",
    nextBtn:           "Next →",
    resultsBtn:        "See Results →",
    roundComplete:     "Round Complete",
    correctLabel:      "correct",
    returnBtn:         "◂ Return to Map",
    scoreComments: [
      "Perfect score — the world holds no secrets from you!",
      "Excellent — a seasoned explorer!",
      "Not bad — keep wandering and learning.",
      "A small start — every great journey begins here.",
      "No worries — the world rewards the curious.",
    ],
    continents: {
      "Europe": "Europe", "Asia": "Asia", "Africa": "Africa",
      "North America": "North America", "South America": "South America", "Australia": "Australia",
    },
  },

  de: {
    welcomeSubtitle:   "Ein Geografie-Quiz für wissbegierige Köpfe",
    chooseCountry:     "Woher kommen Sie?",
    startBtn:          "Starten",
    selectionSubtitle: "Sechs Gebiete verbergen sich hinter diesen Karten. Wählen Sie eine, um Ihr Ziel zu enthüllen.",
    questionsAwait:    "4 Fragen warten",
    questionLabel:     "Frage",
    correctFeedback:   "Richtig!",
    answerPrefix:      "Antwort:",
    nextBtn:           "Weiter →",
    resultsBtn:        "Ergebnisse →",
    roundComplete:     "Runde abgeschlossen",
    correctLabel:      "richtig",
    returnBtn:         "◂ Zurück zur Karte",
    scoreComments: [
      "Perfektes Ergebnis — die Welt hat keine Geheimnisse vor dir!",
      "Ausgezeichnet — ein erfahrener Entdecker!",
      "Nicht schlecht — weiterwandern und lernen.",
      "Ein kleiner Anfang — jede große Reise beginnt hier.",
      "Kein Problem — die Welt belohnt Neugierige.",
    ],
    continents: {
      "Europe": "Europa", "Asia": "Asien", "Africa": "Afrika",
      "North America": "Nordamerika", "South America": "Südamerika", "Australia": "Australien",
    },
  },

  bs: {
    welcomeSubtitle:   "Geografski kviz za znatiželjna srca",
    chooseCountry:     "Odakle ste?",
    startBtn:          "Počni",
    selectionSubtitle: "Šest teritorija skriveno iza karata. Odaberite jednu da otkrijete odredište.",
    questionsAwait:    "4 pitanja čekaju",
    questionLabel:     "Pitanje",
    correctFeedback:   "Tačno!",
    answerPrefix:      "Odgovor:",
    nextBtn:           "Sljedeće →",
    resultsBtn:        "Pogledaj rezultate →",
    roundComplete:     "Runda završena",
    correctLabel:      "tačno",
    returnBtn:         "◂ Povratak na kartu",
    scoreComments: [
      "Savršen rezultat — svijet nema tajni od tebe!",
      "Izvrsno — iskusan istraživač!",
      "Nije loše — nastavi putovati i učiti.",
      "Mali početak — svako putovanje počinje ovdje.",
      "Nema veze — svijet nagrađuje radoznale.",
    ],
    continents: {
      "Europe": "Evropa", "Asia": "Azija", "Africa": "Afrika",
      "North America": "Sjeverna Amerika", "South America": "Južna Amerika", "Australia": "Australija",
    },
  },

  hr: {
    welcomeSubtitle:   "Geografski kviz za znatiželjna srca",
    chooseCountry:     "Odakle ste?",
    startBtn:          "Počni",
    selectionSubtitle: "Šest teritorija skriveno iza karata. Odaberite jednu da otkrijete odredište.",
    questionsAwait:    "4 pitanja čekaju",
    questionLabel:     "Pitanje",
    correctFeedback:   "Točno!",
    answerPrefix:      "Odgovor:",
    nextBtn:           "Sljedeće →",
    resultsBtn:        "Pogledaj rezultate →",
    roundComplete:     "Runda završena",
    correctLabel:      "točno",
    returnBtn:         "◂ Povratak na kartu",
    scoreComments: [
      "Savršen rezultat — svijet nema tajni od tebe!",
      "Izvrsno — iskusan istraživač!",
      "Nije loše — nastavi putovati i učiti.",
      "Mali početak — svako putovanje počinje ovdje.",
      "Nema veze — svijet nagrađuje radoznale.",
    ],
    continents: {
      "Europe": "Europa", "Asia": "Azija", "Africa": "Afrika",
      "North America": "Sjeverna Amerika", "South America": "Južna Amerika", "Australia": "Australija",
    },
  },

  fr: {
    welcomeSubtitle:   "Un quiz de géographie pour les esprits curieux",
    chooseCountry:     "D'où venez-vous ?",
    startBtn:          "Commencer",
    selectionSubtitle: "Six territoires se cachent derrière ces cartes. Choisissez-en un pour révéler votre destination.",
    questionsAwait:    "4 questions vous attendent",
    questionLabel:     "Question",
    correctFeedback:   "Correct !",
    answerPrefix:      "Réponse :",
    nextBtn:           "Suivant →",
    resultsBtn:        "Voir les résultats →",
    roundComplete:     "Tour terminé",
    correctLabel:      "correct",
    returnBtn:         "◂ Retour à la carte",
    scoreComments: [
      "Score parfait — le monde n'a aucun secret pour vous !",
      "Excellent — un explorateur chevronné !",
      "Pas mal — continuez à voyager et apprendre.",
      "Un petit début — tout grand voyage commence ici.",
      "Pas d'inquiétude — le monde récompense les curieux.",
    ],
    continents: {
      "Europe": "Europe", "Asia": "Asie", "Africa": "Afrique",
      "North America": "Amérique du Nord", "South America": "Amérique du Sud", "Australia": "Australie",
    },
  },

  es: {
    welcomeSubtitle:   "Un quiz de geografía para mentes curiosas",
    chooseCountry:     "¿De dónde eres?",
    startBtn:          "Comenzar",
    selectionSubtitle: "Seis territorios se esconden detrás de estas cartas. Elige una para revelar tu destino.",
    questionsAwait:    "4 preguntas te esperan",
    questionLabel:     "Pregunta",
    correctFeedback:   "¡Correcto!",
    answerPrefix:      "Respuesta:",
    nextBtn:           "Siguiente →",
    resultsBtn:        "Ver resultados →",
    roundComplete:     "Ronda completa",
    correctLabel:      "correctas",
    returnBtn:         "◂ Volver al mapa",
    scoreComments: [
      "¡Puntuación perfecta — el mundo no tiene secretos para ti!",
      "¡Excelente — un explorador experimentado!",
      "No está mal — sigue viajando y aprendiendo.",
      "Un pequeño comienzo — cada gran viaje comienza aquí.",
      "No te preocupes — el mundo recompensa a los curiosos.",
    ],
    continents: {
      "Europe": "Europa", "Asia": "Asia", "Africa": "África",
      "North America": "América del Norte", "South America": "América del Sur", "Australia": "Australia",
    },
  },

  pt: {
    welcomeSubtitle:   "Um quiz de geografia para mentes curiosas",
    chooseCountry:     "De onde você é?",
    startBtn:          "Começar",
    selectionSubtitle: "Seis territórios estão escondidos por trás dessas cartas. Escolha uma para revelar seu destino.",
    questionsAwait:    "4 perguntas aguardam",
    questionLabel:     "Pergunta",
    correctFeedback:   "Correto!",
    answerPrefix:      "Resposta:",
    nextBtn:           "Próxima →",
    resultsBtn:        "Ver resultados →",
    roundComplete:     "Rodada completa",
    correctLabel:      "correto",
    returnBtn:         "◂ Voltar ao mapa",
    scoreComments: [
      "Pontuação perfeita — o mundo não tem segredos para você!",
      "Excelente — um explorador experiente!",
      "Não está mal — continue viajando e aprendendo.",
      "Um pequeno começo — toda grande jornada começa aqui.",
      "Sem preocupações — o mundo recompensa os curiosos.",
    ],
    continents: {
      "Europe": "Europa", "Asia": "Ásia", "Africa": "África",
      "North America": "América do Norte", "South America": "América do Sul", "Australia": "Austrália",
    },
  },

  ar: {
    welcomeSubtitle:   "اختبار جغرافي للعقول الفضولية",
    chooseCountry:     "من أين أنت؟",
    startBtn:          "ابدأ",
    selectionSubtitle: "ستة أقاليم مخفية وراء هذه البطاقات. اختر واحدة للكشف عن وجهتك.",
    questionsAwait:    "٤ أسئلة تنتظرك",
    questionLabel:     "سؤال",
    correctFeedback:   "صحيح!",
    answerPrefix:      "الإجابة الصحيحة:",
    nextBtn:           "التالي ←",
    resultsBtn:        "انظر النتائج ←",
    roundComplete:     "الجولة مكتملة",
    correctLabel:      "صحيح",
    returnBtn:         "العودة إلى الخريطة ▸",
    scoreComments: [
      "نتيجة مثالية — العالم لا أسرار له أمامك!",
      "ممتاز — مستكشف متمرس!",
      "ليس بأس — واصل السفر والتعلم.",
      "بداية صغيرة — كل رحلة عظيمة تبدأ هنا.",
      "لا قلق — العالم يكافئ الفضوليين.",
    ],
    continents: {
      "Europe": "أوروبا", "Asia": "آسيا", "Africa": "أفريقيا",
      "North America": "أمريكا الشمالية", "South America": "أمريكا الجنوبية", "Australia": "أستراليا",
    },
  },

  mk: {
    welcomeSubtitle:   "Географски квиз за љубопитни умови",
    chooseCountry:     "Од каде сте?",
    startBtn:          "Почни",
    selectionSubtitle: "Шест територии скриени зад овие карти. Изберете една за да го откриете одредиштето.",
    questionsAwait:    "4 прашања чекаат",
    questionLabel:     "Прашање",
    correctFeedback:   "Точно!",
    answerPrefix:      "Одговор:",
    nextBtn:           "Следно →",
    resultsBtn:        "Погледај резултати →",
    roundComplete:     "Рундата е завршена",
    correctLabel:      "точно",
    returnBtn:         "◂ Назад на картата",
    scoreComments: [
      "Совршен резултат — светот нема тајни пред тебе!",
      "Одлично — искусен истражувач!",
      "Не е лошо — продолжи да патуваш и учиш.",
      "Мал почеток — секое патување почнува тука.",
      "Нема проблем — светот ги наградува љубопитните.",
    ],
    continents: {
      "Europe": "Европа", "Asia": "Азија", "Africa": "Африка",
      "North America": "Северна Америка", "South America": "Јужна Америка", "Australia": "Австралија",
    },
  },

  ru: {
    welcomeSubtitle:   "Географическая викторина для любознательных умов",
    chooseCountry:     "Откуда вы?",
    startBtn:          "Начать",
    selectionSubtitle: "Шесть территорий скрыты за этими картами. Выберите одну, чтобы раскрыть пункт назначения.",
    questionsAwait:    "4 вопроса ждут",
    questionLabel:     "Вопрос",
    correctFeedback:   "Правильно!",
    answerPrefix:      "Ответ:",
    nextBtn:           "Далее →",
    resultsBtn:        "Результаты →",
    roundComplete:     "Раунд завершён",
    correctLabel:      "правильно",
    returnBtn:         "◂ Назад к карте",
    scoreComments: [
      "Идеальный результат — мир не имеет секретов от тебя!",
      "Отлично — опытный исследователь!",
      "Неплохо — продолжай путешествовать и учиться.",
      "Маленькое начало — каждое великое путешествие начинается здесь.",
      "Не беспокойся — мир вознаграждает любопытных.",
    ],
    continents: {
      "Europe": "Европа", "Asia": "Азия", "Africa": "Африка",
      "North America": "Северная Америка", "South America": "Южная Америка", "Australia": "Австралия",
    },
  },
};

// ── State ─────────────────────────────────────────────────────
const phase            = ref("welcome");
const selectedCountry  = ref(COUNTRIES[0]);   // default: Srbija / Serbian
const currentLang      = ref("sr");
const cardDeck         = ref([]);
const activeContinent  = ref("");
const roundQuestions   = ref([]);
const currentIndex     = ref(0);
const displayedOptions = ref([]);
const selectedAnswer   = ref(null);
const answered         = ref(false);
const isCorrect        = ref(false);
const isTransitioning  = ref(false);
const score            = ref(0);
const pipResults       = ref([null, null, null, null]);

// ── Computed ──────────────────────────────────────────────────
const t           = computed(() => TRANSLATIONS[currentLang.value] ?? TRANSLATIONS.en);
const isRTL       = computed(() => currentLang.value === "ar");
const currentQ    = computed(() => roundQuestions.value[currentIndex.value] ?? null);
const anyRevealed = computed(() => cardDeck.value.some(c => c.revealed));
const scoreComment = computed(() => {
  const idx = Math.max(0, Math.min(4, 4 - score.value));
  return t.value.scoreComments[idx];
});

// ── Helpers ───────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildOptions(q) {
  return shuffle([q.correct, ...shuffle(q.wrong).slice(0, 3)]);
}

function continentStyle(name) {
  const c = CONTINENT_COLORS[name] ?? { from: "#1a1a2e", to: "#2a2a4e", accent: "#8888cc" };
  return {
    background: `linear-gradient(145deg, ${c.from}, ${c.to})`,
    "--cf-accent": c.accent,
  };
}

function cardBackStyle(i) {
  const c = CARD_BACK_COLORS[i % CARD_BACK_COLORS.length];
  return {
    background: `linear-gradient(160deg, ${c.from} 0%, ${c.to} 100%)`,
    borderColor: `${c.accent}55`,
    color: c.accent,
  };
}

function answerClass(option) {
  if (!answered.value) return "";
  if (option === currentQ.value?.correct) return "correct";
  if (option === selectedAnswer.value)    return "wrong";
  return "dimmed";
}

// ── Welcome ───────────────────────────────────────────────────
function selectCountry(country) {
  selectedCountry.value = country;
  currentLang.value = country.lang;
}

function startGame() {
  buildCardDeck();
  phase.value = "selection";
}

// ── Selection ─────────────────────────────────────────────────
function buildCardDeck() {
  cardDeck.value = shuffle(CONTINENTS).map(c => ({ continent: c, revealed: false }));
}

function revealCard(card) {
  if (card.revealed || anyRevealed.value) return;
  card.revealed = true;
  activeContinent.value = card.continent;
  setTimeout(startQuiz, 1200);
}

// ── Quiz ──────────────────────────────────────────────────────
function startQuiz() {
  const pool = questions.filter(q => q.continent === activeContinent.value);
  roundQuestions.value  = shuffle(pool).slice(0, 4);
  currentIndex.value    = 0;
  score.value           = 0;
  pipResults.value      = [null, null, null, null];
  loadQuestion();
  phase.value = "quiz";
}

function loadQuestion() {
  const q = currentQ.value;
  if (!q) return;
  displayedOptions.value = buildOptions(q);
  selectedAnswer.value   = null;
  answered.value         = false;
  isCorrect.value        = false;
}

function selectAnswer(option) {
  if (answered.value) return;
  selectedAnswer.value                  = option;
  answered.value                        = true;
  isCorrect.value                       = option === currentQ.value?.correct;
  pipResults.value[currentIndex.value]  = isCorrect.value;
  if (isCorrect.value) score.value++;
}

function nextQuestion() {
  if (currentIndex.value >= 3) {
    phase.value = "result";
    return;
  }
  isTransitioning.value = true;
  setTimeout(() => {
    currentIndex.value++;
    loadQuestion();
    isTransitioning.value = false;
  }, 280);
}

// ── Result ────────────────────────────────────────────────────
function returnToMap() {
  phase.value = "selection";
  buildCardDeck();
}

onMounted(() => {
  // Welcome screen shown first; deck built when user presses Start.
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
  --ink:        #1a2233;
  --ink-soft:   #2e3d55;
  --paper:      #f8f4ee;
  --bg:         #f0ece3;
  --gold:       #b8832e;
  --gold-lt:    #d4a850;
  --gold-dk:    #6e4a10;
  --gold-pale:  #f5e8cc;
  --teal:       #1a5f7a;
  --correct:    #2d7a4f;
  --correct-bg: #d4f0e2;
  --wrong:      #8b2635;
  --wrong-bg:   #fce4e7;
  --dim:        #7a7060;
  --card-bg:    #ffffff;
  --shadow:     rgba(26,34,51,.12);
  --radius:     1.1rem;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--ink);
}

/* ── Wrapper ────────────────────────────────────────────────── */
.game-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 1.6rem;
  position: relative;
  background:
    radial-gradient(ellipse 80% 60% at 15% 10%, rgba(26,95,122,.10) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 85% 90%, rgba(184,131,46,.12) 0%, transparent 55%),
    var(--bg);
}

.bg-grid {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background-image:
    linear-gradient(rgba(26,34,51,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26,34,51,.04) 1px, transparent 1px);
  background-size: 44px 44px;
}

.compass-rose {
  position: fixed; top: -60px; right: -60px;
  width: 280px; height: 280px;
  color: var(--gold); opacity: .12;
  pointer-events: none; z-index: 0;
  animation: spin 90s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── Screen transition ──────────────────────────────────────── */
.screen-enter-active { transition: opacity .38s ease, transform .38s ease; }
.screen-leave-active { transition: opacity .22s ease, transform .22s ease; position: absolute; width: 100%; }
.screen-enter-from   { opacity: 0; transform: translateY(18px); }
.screen-leave-to     { opacity: 0; transform: translateY(-10px); }

/* ── Shared title elements ──────────────────────────────────── */
.game-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.4rem, 6vw, 3.8rem);
  font-weight: 700; color: var(--gold-dk);
  letter-spacing: .05em; line-height: 1;
}

.title-rule {
  display: flex; align-items: center; gap: .55rem;
  width: 100%; max-width: 300px;
}
.title-rule span:first-child,
.title-rule span:last-child {
  flex: 1; height: 1px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
  opacity: .6;
}
.rule-diamond { color: var(--gold); font-size: .6rem; flex-shrink: 0; }

/* ══════════════════════════════════════════════════════════ */
/*  WELCOME SCREEN                                            */
/* ══════════════════════════════════════════════════════════ */
.welcome-screen {
  display: flex; align-items: center; justify-content: center;
  z-index: 1; width: 100%; padding: 1rem;
}

.welcome-card {
  width: 100%; max-width: 680px;
  background: var(--card-bg);
  border-radius: var(--radius);
  box-shadow: 0 2px 0 rgba(255,255,255,.8) inset, 0 20px 60px var(--shadow), 0 4px 16px rgba(0,0,0,.08);
  padding: 2.5rem 2rem 2rem;
  display: flex; flex-direction: column;
  align-items: center; gap: 1.2rem;
  border: 1px solid rgba(184,131,46,.15);
}

.welcome-tagline {
  font-size: clamp(.85rem, 2vw, 1rem);
  color: var(--dim); font-weight: 400;
  line-height: 1.6; letter-spacing: .02em;
  text-align: center;
}

/* Country selector */
.country-selector-block {
  width: 100%;
  margin-top: .4rem;
  display: flex; flex-direction: column; gap: .9rem;
}

.selector-label {
  font-size: .72rem; font-weight: 600;
  color: var(--dim); text-transform: uppercase;
  letter-spacing: .12em; text-align: center;
}

.country-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
  gap: .45rem;
  max-height: 280px;
  overflow-y: auto;
  padding: .5rem;
  border: 1px solid rgba(26,34,51,.08);
  border-radius: .75rem;
  background: var(--bg);
  scrollbar-width: thin;
  scrollbar-color: var(--gold-lt) transparent;
}
.country-grid::-webkit-scrollbar { width: 4px; }
.country-grid::-webkit-scrollbar-thumb { background: var(--gold-lt); border-radius: 4px; }

.country-btn {
  display: flex; align-items: center; gap: .5rem;
  padding: .55rem .75rem;
  border: 1.5px solid rgba(26,34,51,.10);
  border-radius: .55rem;
  background: var(--card-bg);
  cursor: pointer; text-align: left;
  font-family: 'DM Sans', sans-serif;
  font-size: .82rem; font-weight: 400; color: var(--ink);
  transition: border-color .15s, background .15s, transform .1s, box-shadow .15s;
  white-space: nowrap; overflow: hidden;
}
.country-btn:hover {
  border-color: var(--gold);
  background: var(--gold-pale);
  transform: translateY(-1px);
  box-shadow: 0 3px 10px rgba(184,131,46,.15);
}
.country-btn.selected {
  border-color: var(--gold);
  background: var(--gold-pale);
  font-weight: 600; color: var(--gold-dk);
  box-shadow: 0 0 0 2px rgba(184,131,46,.20);
}

.country-flag { font-size: 1.1rem; line-height: 1; flex-shrink: 0; }
.country-label { overflow: hidden; text-overflow: ellipsis; }

/* Start button */
.start-btn {
  margin-top: .4rem;
  width: 100%; max-width: 260px;
  padding: .9rem 2.5rem;
  border: none; border-radius: .75rem;
  background: var(--ink); color: var(--gold-lt);
  font-family: 'DM Sans', sans-serif; font-weight: 600;
  font-size: 1.05rem; letter-spacing: .06em; text-transform: uppercase;
  cursor: pointer;
  transition: background .18s, transform .12s, box-shadow .18s;
  box-shadow: 0 4px 18px rgba(26,34,51,.20);
}
.start-btn:hover {
  background: var(--teal);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(26,95,122,.30);
}
.start-btn:active { transform: translateY(0); }

/* ══════════════════════════════════════════════════════════ */
/*  SELECTION SCREEN                                          */
/* ══════════════════════════════════════════════════════════ */
.selection-screen {
  display: flex; flex-direction: column;
  align-items: center; gap: 2.2rem;
  z-index: 1; width: 100%; max-width: 720px;
}

.game-title-block {
  text-align: center; display: flex;
  flex-direction: column; gap: .75rem; align-items: center;
}

.game-subtitle {
  font-size: clamp(.82rem, 2vw, .97rem);
  color: var(--dim); font-weight: 400;
  line-height: 1.65; letter-spacing: .02em;
}

/* ── Cards grid ─────────────────────────────────────────── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
  width: 100%; max-width: 600px;
}
@media (max-width: 520px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); gap: .8rem; }
}

/* ── Mystery card ───────────────────────────────────────── */
.mystery-card {
  aspect-ratio: 3 / 4;
  perspective: 1000px;
  cursor: pointer;
  transition: opacity .3s, filter .3s;
}
.mystery-card.locked {
  pointer-events: none;
  opacity: .28;
  filter: blur(1.5px);
}

.card-inner {
  width: 100%; height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform .75s cubic-bezier(.4, 0, .2, 1);
  border-radius: 1rem;
}
.mystery-card.flipped .card-inner { transform: rotateY(180deg); }

.mystery-card:not(.flipped):not(.locked):hover .card-inner {
  transform: translateY(-7px) rotateY(6deg);
}

.card-back,
.card-front {
  position: absolute; inset: 0;
  border-radius: 1rem;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* Back — color comes from inline cardBackStyle() */
.card-back {
  border: 1px solid transparent;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,.30), inset 0 1px 0 rgba(255,255,255,.06);
}
.cb-frame {
  position: absolute; inset: 10px;
  border: 1px solid rgba(255,255,255,.15);
  border-radius: .55rem;
  display: flex; align-items: center; justify-content: center;
}
.cb-corner {
  position: absolute; width: 11px; height: 11px;
  border-color: currentColor; border-style: solid; opacity: .6;
}
.cb-corner--tl { top:-1px; left:-1px;   border-width: 2px 0 0 2px; border-radius: 3px 0 0 0; }
.cb-corner--tr { top:-1px; right:-1px;  border-width: 2px 2px 0 0; border-radius: 0 3px 0 0; }
.cb-corner--bl { bottom:-1px; left:-1px;  border-width: 0 0 2px 2px; border-radius: 0 0 0 3px; }
.cb-corner--br { bottom:-1px; right:-1px; border-width: 0 2px 2px 0; border-radius: 0 0 3px 0; }
.cb-center {
  display: flex; flex-direction: column;
  align-items: center; gap: .6rem;
}
.cb-pattern { width: 52px; height: 52px; }
.cb-roman {
  font-family: 'Playfair Display', serif;
  font-size: .95rem; font-weight: 600;
  letter-spacing: .2em; opacity: .8;
}
.cb-shimmer {
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,.07) 50%, transparent 70%);
  background-size: 200% 100%;
  animation: shimmer 3.5s ease-in-out infinite;
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Front */
.card-front {
  transform: rotateY(180deg);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: .45rem; padding: 1rem;
  border: 1px solid rgba(255,255,255,.1);
  box-shadow: 0 8px 30px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.08);
}
.cf-glow {
  position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: radial-gradient(ellipse at 50% 25%, rgba(255,255,255,.14) 0%, transparent 65%);
}
.cf-icon   { font-size: 2.5rem; line-height: 1; }
.cf-name   {
  font-family: 'Playfair Display', serif;
  font-size: clamp(.8rem, 2vw, 1rem); font-weight: 700;
  color: #fff; text-align: center; line-height: 1.2;
  text-shadow: 0 1px 4px rgba(0,0,0,.4);
}
.cf-divider {
  width: 26px; height: 1px;
  background: var(--cf-accent, rgba(255,255,255,.4));
  margin: .1rem 0;
}
.cf-sub {
  font-size: .68rem; font-weight: 500;
  color: var(--cf-accent, rgba(255,255,255,.55));
  text-transform: uppercase; letter-spacing: .1em;
}

/* ══════════════════════════════════════════════════════════ */
/*  QUIZ SCREEN                                               */
/* ══════════════════════════════════════════════════════════ */
.quiz-container {
  display: flex; flex-direction: column;
  align-items: center; gap: 1rem;
  z-index: 1; width: 100%;
}

.game-card {
  width: 100%; max-width: 680px;
  background: var(--card-bg);
  border-radius: var(--radius);
  box-shadow: 0 2px 0 rgba(255,255,255,.8) inset, 0 20px 60px var(--shadow), 0 4px 16px rgba(0,0,0,.08);
  overflow: hidden;
  border: 1px solid rgba(26,34,51,.06);
  transition: opacity .28s ease, transform .28s ease;
}
.card-exit { opacity: 0; transform: translateY(12px) scale(.98); }

.card-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: .9rem 1.5rem;
  background: var(--ink);
  border-bottom: 2px solid var(--gold);
}
.continent-tag { display: flex; align-items: center; gap: .55rem; }
.continent-icon { font-size: 1.35rem; line-height: 1; }
.continent-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem; font-weight: 700;
  color: var(--gold-lt); letter-spacing: .03em;
}
.progress-info { display: flex; align-items: baseline; gap: .35rem; }
.progress-label {
  font-size: .72rem; font-weight: 500;
  color: rgba(255,255,255,.4); text-transform: uppercase; letter-spacing: .08em;
}
.progress-count {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem; font-weight: 700; color: var(--gold-lt);
}
.progress-total { color: rgba(255,255,255,.4); font-size: .85rem; }

.question-section {
  padding: 2rem 2rem 1.5rem;
  border-bottom: 1px solid rgba(26,34,51,.07);
}
.question-text {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.15rem, 2.5vw, 1.42rem);
  font-weight: 600; line-height: 1.48; color: var(--ink);
}

.answers-section {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: .75rem; padding: 1.4rem 1.5rem 1.5rem;
}
@media (max-width: 520px) { .answers-section { grid-template-columns: 1fr; } }

.answer-btn {
  display: flex; align-items: center; gap: .75rem;
  padding: .85rem 1rem;
  border: 2px solid rgba(26,34,51,.12); border-radius: .7rem;
  background: white; cursor: pointer; text-align: left;
  transition: border-color .16s, background .16s, transform .12s, box-shadow .16s;
  font-family: 'DM Sans', sans-serif; font-size: .94rem; font-weight: 400;
  color: var(--ink); line-height: 1.35;
}
.answer-btn:not(:disabled):hover {
  border-color: var(--teal); background: rgba(26,95,122,.05);
  transform: translateY(-1px); box-shadow: 0 4px 14px rgba(26,95,122,.12);
}
.answer-btn:not(:disabled):active { transform: translateY(0); }
.answer-letter {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 1.8rem; height: 1.8rem; border-radius: .4rem;
  background: var(--ink); color: var(--paper);
  font-weight: 700; font-size: .78rem; letter-spacing: .04em;
  flex-shrink: 0; transition: background .16s;
}
.answer-btn.correct { border-color: var(--correct); background: var(--correct-bg); }
.answer-btn.correct .answer-letter { background: var(--correct); }
.answer-btn.wrong   { border-color: var(--wrong); background: var(--wrong-bg); }
.answer-btn.wrong   .answer-letter { background: var(--wrong); }
.answer-btn.dimmed  { opacity: .38; cursor: default; }
.answer-btn:disabled { cursor: default; }

.feedback-bar {
  display: flex; align-items: center; gap: .9rem;
  padding: 1rem 1.5rem; border-top: 2px solid transparent;
  font-weight: 500; font-size: .95rem;
}
.feedback-correct { background: var(--correct-bg); border-color: var(--correct); color: var(--correct); }
.feedback-wrong   { background: var(--wrong-bg);   border-color: var(--wrong);   color: var(--wrong); }
.feedback-icon { font-size: 1.3rem; font-weight: 700; flex-shrink: 0; }
.feedback-msg  { flex: 1; }
.next-btn {
  margin-left: auto; flex-shrink: 0;
  padding: .5rem 1.1rem; border: none; border-radius: .55rem;
  background: var(--ink); color: var(--gold-lt);
  font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: .85rem;
  cursor: pointer; letter-spacing: .02em;
  transition: background .15s, transform .12s;
}
.next-btn:hover { background: var(--teal); transform: translateX(2px); }

[dir="rtl"] .next-btn:hover { transform: translateX(-2px); }

.feedback-enter-active { transition: all .22s ease; }
.feedback-leave-active { transition: all .15s ease; }
.feedback-enter-from   { opacity: 0; transform: translateY(6px); }
.feedback-leave-to     { opacity: 0; transform: translateY(4px); }

/* Pip track */
.quiz-pips { display: flex; gap: .6rem; align-items: center; }
.pip {
  width: 38px; height: 7px; border-radius: 4px;
  background: rgba(26,34,51,.14);
  transition: background .3s, transform .2s;
}
.pip.active       { background: var(--gold); transform: scaleY(1.4); }
.pip.correct      { background: var(--correct); }
.pip.wrong        { background: var(--wrong); }
.pip.past-correct { background: var(--correct); opacity: .65; }
.pip.past-wrong   { background: var(--wrong);   opacity: .65; }

/* ══════════════════════════════════════════════════════════ */
/*  RESULT SCREEN                                             */
/* ══════════════════════════════════════════════════════════ */
.result-screen {
  display: flex; align-items: center; justify-content: center;
  z-index: 1; width: 100%; padding: 1rem;
}
.result-card {
  width: 100%; max-width: 440px;
  background: var(--card-bg); border-radius: var(--radius); overflow: hidden;
  box-shadow: 0 20px 60px var(--shadow), 0 4px 16px rgba(0,0,0,.08);
  border: 1px solid rgba(26,34,51,.06);
}
.result-continent-banner {
  display: flex; align-items: center; justify-content: center;
  gap: .8rem; padding: 1.7rem 1.5rem; position: relative; overflow: hidden;
}
.result-continent-banner::after {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,.15) 0%, transparent 65%);
}
.result-icon     { font-size: 2.2rem; line-height: 1; position: relative; z-index: 1; }
.result-continent {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem; font-weight: 700; color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,.4); position: relative; z-index: 1;
}
.result-body {
  padding: 1.8rem 2rem 1.7rem;
  display: flex; flex-direction: column; align-items: center; gap: .9rem;
}
.result-headline {
  font-family: 'Playfair Display', serif;
  font-size: .9rem; font-weight: 600;
  color: var(--dim); text-transform: uppercase; letter-spacing: .15em;
}
.result-stars { display: flex; gap: .3rem; }
.star {
  font-size: 2rem; color: rgba(26,34,51,.12);
  transition: color .3s, transform .3s;
}
.star.lit { color: var(--gold); transform: scale(1.12); }
.result-score {
  font-family: 'Playfair Display', serif;
  font-size: 2.4rem; font-weight: 700; color: var(--ink); line-height: 1;
}
.result-comment {
  font-size: .88rem; color: var(--dim); text-align: center;
  font-style: italic; line-height: 1.55; max-width: 280px;
}
.result-pip-row { display: flex; gap: .5rem; margin-top: .15rem; }
.result-pip {
  width: 38px; height: 38px; border-radius: .45rem;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; font-weight: 700;
}
.result-pip.correct { background: var(--correct-bg); color: var(--correct); }
.result-pip.wrong   { background: var(--wrong-bg);   color: var(--wrong); }
.return-btn {
  margin-top: .4rem;
  padding: .75rem 2rem; border: 2px solid var(--ink); border-radius: .65rem;
  background: var(--ink); color: var(--gold-lt);
  font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: .95rem;
  letter-spacing: .03em; cursor: pointer;
  transition: background .18s, border-color .18s, transform .12s;
}
.return-btn:hover {
  background: var(--teal); border-color: var(--teal);
  transform: translateY(-2px);
}
</style>