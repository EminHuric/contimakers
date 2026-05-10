<template>
  <div id="cm-root" :data-theme="isDark ? 'dark' : 'light'" :dir="currentLang === 'ar' ? 'rtl' : 'ltr'">

    <div class="bg-layer" aria-hidden="true">
      <div class="bg-mesh"></div>
      <div class="bg-glow g1"></div>
      <div class="bg-glow g2"></div>
      <div class="bg-glow g3"></div>
    </div>

    <button class="theme-btn" @click="isDark = !isDark" :title="isDark ? 'Light mode' : 'Dark mode'">
      <svg v-if="isDark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </button>

    <!-- ░░ LOGIN ░░ -->
    <Transition name="page">
      <div v-if="phase === 'login'" class="login-root" key="login">
        <div class="login-card">
          <div class="login-logo">
            <svg class="globe-svg" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="46" stroke="currentColor" stroke-width="2.5" opacity="0.9"/>
              <ellipse cx="50" cy="50" rx="22" ry="46" stroke="currentColor" stroke-width="1.6" opacity="0.7"/>
              <ellipse cx="50" cy="50" rx="9" ry="46" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M4 50 Q25 38 50 50 Q75 62 96 50" stroke="currentColor" stroke-width="1.4" opacity="0.6"/>
              <path d="M11 32 Q30 24 50 32 Q70 40 89 32" stroke="currentColor" stroke-width="1" opacity="0.45"/>
              <path d="M11 68 Q30 60 50 68 Q70 76 89 68" stroke="currentColor" stroke-width="1" opacity="0.45"/>
              <circle cx="50" cy="50" r="4.5" fill="currentColor" opacity="0.85"/>
              <circle cx="50" cy="50" r="2" fill="var(--gold)" opacity="1"/>
            </svg>
            <h1 class="login-title">CONTIMAKERS</h1>
          </div>

          <div class="login-lang-row">
            <button
              v-for="l in languages"
              :key="l.code"
              class="login-lang-btn"
              :class="{ 'login-lang-active': currentLang === l.code }"
              @click="currentLang = l.code"
              :title="l.name"
            >
              <span>{{ l.flag }}</span>
              <span class="login-lang-name">{{ l.name }}</span>
            </button>
          </div>

          <div class="login-fields">
            <div class="login-field">
              <label class="login-label">{{ loginT('username') }}</label>
              <input v-model="loginUsername" class="login-input" type="text"
                :placeholder="loginT('usernamePh')" @keyup.enter="doLogin" autocomplete="username"/>
            </div>
            <div class="login-field">
              <label class="login-label">{{ loginT('password') }}</label>
              <input v-model="loginPassword" class="login-input"
                :type="showPass ? 'text' : 'password'"
                :placeholder="loginT('passwordPh')" @keyup.enter="doLogin" autocomplete="current-password"/>
              <button class="login-eye" @click="showPass = !showPass" type="button">
                <svg v-if="!showPass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>
            <Transition name="fb-slide">
              <p v-if="loginError" class="login-error">⚠ {{ loginT('wrongCreds') }}</p>
            </Transition>
            <button class="btn-login" @click="doLogin">
              <span>{{ loginT('enter') }}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ░░ START ░░ -->
    <Transition name="page">
      <div v-if="phase === 'start'" class="start-root" key="start">
        <div class="hero" :class="{ 'hero-shrunk': startStep >= 1 }">
          <div class="logo-orb" :class="{ 'orb-sm': startStep >= 1 }">
            <svg class="globe-svg" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="46" stroke="currentColor" stroke-width="2.5" opacity="0.9"/>
              <ellipse cx="50" cy="50" rx="22" ry="46" stroke="currentColor" stroke-width="1.6" opacity="0.7"/>
              <ellipse cx="50" cy="50" rx="9" ry="46" stroke="currentColor" stroke-width="1" opacity="0.5"/>
              <path d="M4 50 Q25 38 50 50 Q75 62 96 50" stroke="currentColor" stroke-width="1.4" opacity="0.6"/>
              <path d="M11 32 Q30 24 50 32 Q70 40 89 32" stroke="currentColor" stroke-width="1" opacity="0.45"/>
              <path d="M11 68 Q30 60 50 68 Q70 76 89 68" stroke="currentColor" stroke-width="1" opacity="0.45"/>
              <circle cx="50" cy="50" r="4.5" fill="currentColor" opacity="0.85"/>
              <circle cx="50" cy="50" r="2" fill="var(--gold)" opacity="1"/>
            </svg>
          </div>
          <div class="logo-words" :class="{ 'words-sm': startStep >= 1 }">
            <h1 class="cm-title">CONTIMAKERS</h1>
            <Transition name="fade-down">
              <p v-if="startStep === 0" class="cm-tagline">{{ t('tagline') }}</p>
            </Transition>
          </div>
        </div>

        <Transition name="btn-morph">
          <button v-if="startStep === 0" class="btn-launch" @click="openSelectors">
            <span class="btn-launch-text">{{ t('startBtn') }}</span>
            <span class="btn-launch-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </button>
        </Transition>

        <Transition name="panel-drop">
          <div v-if="startStep >= 1" class="selectors-panel" key="selectors">
            <div class="sel-block">
              <div class="sel-head">
                <span class="sel-num">01</span>
                <h3 class="sel-label">{{ t('whereFrom') }}</h3>
              </div>
              <div class="country-grid">
                <button v-for="c in countries" :key="c.code" class="c-btn"
                  :class="{ 'c-active': selectedCountry === c.code }" @click="pickCountry(c)">
                  <span class="c-flag">{{ c.flag }}</span>
                  <span class="c-name">{{ c.name }}</span>
                </button>
              </div>
            </div>

            <div class="sel-block">
              <div class="sel-head">
                <span class="sel-num">02</span>
                <h3 class="sel-label">{{ t('chooseLanguage') }}</h3>
              </div>
              <div class="lang-grid">
                <button v-for="l in languages" :key="l.code" class="l-btn"
                  :class="{ 'l-active': currentLang === l.code }" @click="currentLang = l.code">
                  <span class="l-flag">{{ l.flag }}</span>
                  <span class="l-name">{{ l.name }}</span>
                </button>
              </div>
            </div>

            <Transition name="pop-in">
              <button v-if="selectedCountry" class="btn-play" @click="goToSelection">
                <span>{{ t('playBtn') }}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </Transition>
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- ░░ SELECTION ░░ -->
    <Transition name="page">
      <div v-if="phase === 'selection'" class="main-root" key="sel">
        <header class="top-bar">
          <button class="logo-mark" @click="returnToStart">
            <svg class="mark-globe" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="46" stroke="currentColor" stroke-width="3"/>
              <ellipse cx="50" cy="50" rx="22" ry="46" stroke="currentColor" stroke-width="2"/>
              <path d="M4 50 Q25 38 50 50 Q75 62 96 50" stroke="currentColor" stroke-width="1.8"/>
              <circle cx="50" cy="50" r="4" fill="var(--gold)"/>
            </svg>
            <span class="mark-name">CONTIMAKERS</span>
          </button>
          <div class="bar-langs">
            <button v-for="l in languages" :key="l.code" class="bar-lang"
              :class="{ active: currentLang === l.code }"
              @click="currentLang = l.code" :title="l.name">{{ l.flag }}</button>
          </div>
        </header>

        <div class="sel-content">
          <div class="sel-intro">
            <p class="sup-text">{{ t('selectContinent') }}</p>
            <h2 class="sel-heading">{{ t('chooseCard') }}</h2>
          </div>

          <div class="card-grid-6">
            <div v-for="(card, idx) in cardDeck" :key="card.continent"
              class="flip-wrap" :class="{ locked: anyRevealed && !card.revealed }"
              @click="revealCard(card)">
              <div class="flip-inner" :class="{ flipped: card.revealed }">
                <div class="flip-face flip-back">
                  <div class="flip-shimmer"></div>
                  <div class="flip-numeral">{{ ['I','II','III','IV','V','VI'][idx] }}</div>
                  <div class="flip-globe-icon">
                    <svg viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="28" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
                      <circle cx="40" cy="40" r="14" stroke="currentColor" stroke-width="0.6" opacity="0.4"/>
                      <line x1="40" y1="5" x2="40" y2="75" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
                      <line x1="5" y1="40" x2="75" y2="40" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
                      <line x1="12" y1="12" x2="68" y2="68" stroke="currentColor" stroke-width="0.4" opacity="0.3"/>
                      <line x1="68" y1="12" x2="12" y2="68" stroke="currentColor" stroke-width="0.4" opacity="0.3"/>
                      <circle cx="40" cy="40" r="3.5" fill="currentColor"/>
                    </svg>
                  </div>
                  <p class="flip-hint">{{ t('tapToReveal') }}</p>
                </div>
                <div class="flip-face flip-front" :style="continentStyle(card.continent)">
                  <div class="flip-emoji">{{ continentEmoji(card.continent) }}</div>
                  <div class="flip-cname">{{ translateContinent(card.continent) }}</div>
                  <div class="flip-divider"></div>
                  <div class="flip-qlabel">{{ t('questionsAwait') }}</div>
                </div>
              </div>
            </div>
          </div>

          <p class="sel-hint">{{ t('instructions') }}</p>
        </div>
      </div>
    </Transition>

    <!-- ░░ QUIZ ░░ -->
    <Transition name="page">
      <div v-if="phase === 'quiz'" class="main-root" key="quiz">
        <header class="top-bar">
          <button class="logo-mark" @click="returnToMap">
            <svg class="mark-globe" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="46" stroke="currentColor" stroke-width="3"/>
              <ellipse cx="50" cy="50" rx="22" ry="46" stroke="currentColor" stroke-width="2"/>
              <path d="M4 50 Q25 38 50 50 Q75 62 96 50" stroke="currentColor" stroke-width="1.8"/>
              <circle cx="50" cy="50" r="4" fill="var(--gold)"/>
            </svg>
            <span class="mark-name">CONTIMAKERS</span>
          </button>
          <div class="bar-langs">
            <button v-for="l in languages" :key="l.code" class="bar-lang"
              :class="{ active: currentLang === l.code }"
              @click="changeLang(l.code)" :title="l.name">{{ l.flag }}</button>
          </div>
        </header>

        <div class="quiz-area">
          <div class="quiz-card">
            <div class="quiz-band" :style="continentStyle(activeContinent)">
              <div class="band-left">
                <span class="band-emoji">{{ continentEmoji(activeContinent) }}</span>
                <span class="band-cname">{{ translateContinent(activeContinent) }}</span>
              </div>
              <span class="band-counter">{{ t('question') }} {{ currentIndex + 1 }}&thinsp;/&thinsp;{{ roundQuestions.length }}</span>
            </div>

            <div class="progress-rail">
              <div class="progress-fill" :style="{ width: (currentIndex / roundQuestions.length * 100) + '%' }"></div>
            </div>

            <div class="quiz-body">
              <Transition name="q-slide" mode="out-in">
                <div :key="currentIndex + '-' + currentLang" class="q-block">
                  <p class="q-text">{{ translatedQuestion }}</p>
                  <div class="answers-grid">
                    <button v-for="(opt, i) in displayedOptions" :key="i + '-' + opt"
                      class="ans-btn" :class="answerClass(opt)"
                      :disabled="answered" @click="selectAnswer(opt)">
                      <span class="ans-letter">{{ ['A','B','C','D'][i] }}</span>
                      <span class="ans-text">{{ opt }}</span>
                    </button>
                  </div>
                </div>
              </Transition>

              <Transition name="fb-slide">
                <div v-if="answered" class="fb-bar" :class="isCorrect ? 'fb-ok' : 'fb-err'">
                  <div class="fb-left">
                    <span class="fb-icon">{{ isCorrect ? '✓' : '✗' }}</span>
                    <span class="fb-msg">
                      {{ isCorrect ? t('correct') : t('wrongAnswer') + ' ' + translatedCorrect }}
                    </span>
                  </div>
                  <button class="btn-next" @click="nextQuestion">
                    {{ currentIndex < roundQuestions.length - 1 ? t('next') : t('seeResults') }}
                    <span>→</span>
                  </button>
                </div>
              </Transition>
            </div>

            <div class="pip-row">
              <div v-for="(pip, i) in pipResults" :key="i" class="pip"
                :class="{ 'pip-active': i === currentIndex, 'pip-ok': pip === true, 'pip-err': pip === false }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ░░ WRONG ANSWER MODAL ░░ -->
    <Transition name="modal-fade">
      <div v-if="showWrongModal" class="modal-overlay">
        <div class="modal-card">
          <div class="modal-icon">😬</div>
          <h2 class="modal-title">{{ t('wrongModalTitle') }}</h2>
          <p class="modal-body" v-html="t('wrongModalBody')"></p>
          <div class="modal-actions">
            <button class="btn-end-game" @click="endGame">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              {{ t('endGame') }}
            </button>
            <button class="btn-do-challenge" @click="openChallenge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              {{ t('doChallenge') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ░░ CHALLENGE CARD ░░ -->
    <Transition name="challenge-pop">
      <div v-if="showChallengeCard" class="modal-overlay">
        <div class="challenge-card">
          <div class="challenge-header">
            <span class="challenge-badge">⚡ {{ t('challengeLabel') }}</span>
          </div>
          <div class="challenge-emoji">{{ currentChallenge.emoji }}</div>
          <p class="challenge-text">{{ currentChallenge.text }}</p>
          <p class="challenge-hint">{{ t('challengeHint') }}</p>
          <div class="challenge-actions">
            <button class="btn-challenge-skip" @click="endGame">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              {{ t('challengeSkip') }}
            </button>
            <button class="btn-challenge-done" @click="challengeDone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {{ t('challengeDone') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ░░ RESULT ░░ -->
    <Transition name="page">
      <div v-if="phase === 'result'" class="main-root" key="result">
        <header class="top-bar">
          <button class="logo-mark" @click="returnToMap">
            <svg class="mark-globe" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="46" stroke="currentColor" stroke-width="3"/>
              <ellipse cx="50" cy="50" rx="22" ry="46" stroke="currentColor" stroke-width="2"/>
              <path d="M4 50 Q25 38 50 50 Q75 62 96 50" stroke="currentColor" stroke-width="1.8"/>
              <circle cx="50" cy="50" r="4" fill="var(--gold)"/>
            </svg>
            <span class="mark-name">CONTIMAKERS</span>
          </button>
          <div class="bar-langs">
            <button v-for="l in languages" :key="l.code" class="bar-lang"
              :class="{ active: currentLang === l.code }"
              @click="currentLang = l.code" :title="l.name">{{ l.flag }}</button>
          </div>
        </header>

        <div class="result-area">
          <div class="result-card">
            <div class="result-band" :style="continentStyle(activeContinent)">
              <span class="result-emoji">{{ continentEmoji(activeContinent) }}</span>
              <span class="result-cname">{{ translateContinent(activeContinent) }}</span>
            </div>
            <div class="result-body">
              <p class="result-kicker">{{ t('roundComplete') }}</p>
              <div class="stars">
                <span v-for="n in 5" :key="n" class="star" :class="{ lit: n <= resultStars }">★</span>
              </div>
              <div class="score-disp">
                <span class="score-big">{{ score }}</span>
                <span class="score-sep">/</span>
                <span class="score-tot">{{ roundQuestions.length }}</span>
              </div>
              <p class="score-comment">{{ scoreComment }}</p>
              <div class="result-pips">
                <div v-for="(pip, i) in pipResults" :key="i" class="rpip"
                  :class="pip ? 'rpip-ok' : 'rpip-err'">{{ pip ? '✓' : '✗' }}</div>
              </div>
              <div class="result-actions">
                <button class="btn-back" @click="returnToMap">◂ {{ t('returnToMap') }}</button>
                <button class="btn-restart" @click="restartSame">↺ {{ t('playAgain') }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import rawQuestions from './data/questions_translated.json'

// ─── THEME ────────────────────────────────────────────────────────────────────
const isDark = ref(false)

// ─── LANGUAGES (5 only) ───────────────────────────────────────────────────────
const languages = [
  { code: 'en', name: 'English',  flag: '🇬🇧' },
  { code: 'sr', name: 'Srpski',   flag: '🇷🇸' },
  { code: 'ru', name: 'Русский',  flag: '🇷🇺' },
  { code: 'tr', name: 'Türkçe',   flag: '🇹🇷' },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
]

const currentLang = ref('en')

// ─── COUNTRIES ────────────────────────────────────────────────────────────────
const countries = [
  { code: 'US', name: 'United States',  flag: '🇺🇸', lang: 'en' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', lang: 'en' },
  { code: 'AU', name: 'Australia',      flag: '🇦🇺', lang: 'en' },
  { code: 'CA', name: 'Canada',         flag: '🇨🇦', lang: 'en' },
  { code: 'IN', name: 'India',          flag: '🇮🇳', lang: 'en' },
  { code: 'RS', name: 'Serbia',         flag: '🇷🇸', lang: 'sr' },
  { code: 'BA', name: 'Bosnia',         flag: '🇧🇦', lang: 'sr' },
  { code: 'ME', name: 'Montenegro',     flag: '🇲🇪', lang: 'sr' },
  { code: 'RU', name: 'Russia',         flag: '🇷🇺', lang: 'ru' },
  { code: 'TR', name: 'Turkey',         flag: '🇹🇷', lang: 'tr' },
  { code: 'LV', name: 'Latvia',         flag: '🇱🇻', lang: 'lv' },
  { code: 'OTHER', name: 'Other',       flag: '🌍',  lang: 'en' },
]

// ─── UI STRINGS (5 languages) ─────────────────────────────────────────────────
const uiStrings = {
  en: {
    tagline: 'Conquer every continent, one question at a time',
    startBtn: 'START',
    playBtn: 'Play Game',
    whereFrom: 'Where are you from?',
    chooseLanguage: 'Choose your language',
    selectContinent: 'Choose a continent',
    chooseCard: 'Flip a card to begin your challenge!',
    tapToReveal: 'Click to reveal',
    questionsAwait: '20 questions await',
    instructions: 'Click one of the 6 cards to start',
    question: 'Question',
    correct: 'Correct! Well done!',
    wrongAnswer: 'Correct answer:',
    next: 'Next',
    seeResults: 'See Results',
    roundComplete: 'Round Complete!',
    returnToMap: 'Return to Map',
    playAgain: 'Play Again',
    score0: 'Keep exploring — you can do better! 💪',
    score1: 'Good start! Keep learning. 📚',
    score2: 'Solid knowledge! You\'re improving. 🌍',
    score3: 'Excellent! Almost perfect! 🎯',
    score4: 'Perfect! Geography master! 🏆',
    wrongModalTitle: 'Unfortunately, wrong answer!',
    wrongModalBody: 'To continue playing you must complete a <strong>challenge</strong>. Otherwise you\'re out!',
    endGame: 'End Game',
    doChallenge: 'Do the Challenge!',
    challengeLabel: 'CHALLENGE',
    challengeHint: 'Complete the challenge in front of everyone and continue!',
    challengeSkip: 'I didn\'t do it — End',
    challengeDone: 'Done! Continue →',
    continents: {
      Europa: 'Europe',
      Azija: 'Asia',
      Afrika: 'Africa',
      'Severna Amerika': 'North America',
      'Južna Amerika': 'South America',
      Australija: 'Australia / Oceania',
    },
  },
  sr: {
    tagline: 'Osvoji svaki kontinent, jedno pitanje po jedno',
    startBtn: 'POČNI',
    playBtn: 'Igraj',
    whereFrom: 'Odakle si?',
    chooseLanguage: 'Odaberi jezik',
    selectContinent: 'Odaberi kontinent',
    chooseCard: 'Otvori kartu i počni izazov!',
    tapToReveal: 'Klikni da otkriješ',
    questionsAwait: '20 pitanja te čeka',
    instructions: 'Klikni na jednu od 6 karata da počneš',
    question: 'Pitanje',
    correct: 'Tačno! Bravo!',
    wrongAnswer: 'Tačan odgovor:',
    next: 'Sledeće',
    seeResults: 'Pogledaj rezultate',
    roundComplete: 'Runda završena!',
    returnToMap: 'Vrati se na mapu',
    playAgain: 'Igraj ponovo',
    score0: 'Pokušaj ponovo! Možeš bolje. 💪',
    score1: 'Dobar početak! Uči dalje. 📚',
    score2: 'Solidno znanje! Napredujete. 🌍',
    score3: 'Odlično! Gotovo savršeno! 🎯',
    score4: 'Savršeno! Majstor geografije! 🏆',
    wrongModalTitle: 'Nažalost, odgovor nije tačan!',
    wrongModalBody: 'Ako želite da nastavite igru, potrebno je da uradite <strong>izazov</strong>. U suprotnom ispadate iz igre.',
    endGame: 'Kraj igre',
    doChallenge: 'Uradi izazov!',
    challengeLabel: 'IZAZOV',
    challengeHint: 'Uradi izazov pred svima i nastavi igru!',
    challengeSkip: 'Nisam uradio — Kraj',
    challengeDone: 'Uradio sam! Nastavi →',
    continents: {
      Europa: 'Evropa',
      Azija: 'Azija',
      Afrika: 'Afrika',
      'Severna Amerika': 'Severna Amerika',
      'Južna Amerika': 'Južna Amerika',
      Australija: 'Australija / Okeanija',
    },
  },
  ru: {
    tagline: 'Покори каждый континент, один вопрос за раз',
    startBtn: 'СТАРТ',
    playBtn: 'Играть',
    whereFrom: 'Откуда вы?',
    chooseLanguage: 'Выберите язык',
    selectContinent: 'Выберите континент',
    chooseCard: 'Переверни карту и начни испытание!',
    tapToReveal: 'Нажмите, чтобы открыть',
    questionsAwait: '20 вопросов ждут',
    instructions: 'Нажмите на одну из 6 карт, чтобы начать',
    question: 'Вопрос',
    correct: 'Правильно! Молодец!',
    wrongAnswer: 'Правильный ответ:',
    next: 'Далее',
    seeResults: 'Результаты',
    roundComplete: 'Раунд завершён!',
    returnToMap: 'Вернуться к карте',
    playAgain: 'Играть снова',
    score0: 'Попробуй снова! Ты можешь лучше. 💪',
    score1: 'Хорошее начало! Продолжай. 📚',
    score2: 'Неплохо! Ты прогрессируешь. 🌍',
    score3: 'Отлично! Почти идеально! 🎯',
    score4: 'Идеально! Мастер географии! 🏆',
    wrongModalTitle: 'К сожалению, неправильный ответ!',
    wrongModalBody: 'Чтобы продолжить игру, нужно выполнить <strong>испытание</strong>. Иначе вы выбываете!',
    endGame: 'Конец игры',
    doChallenge: 'Принять испытание!',
    challengeLabel: 'ИСПЫТАНИЕ',
    challengeHint: 'Выполни испытание перед всеми и продолжай!',
    challengeSkip: 'Не сделал — Конец',
    challengeDone: 'Сделал! Продолжить →',
    continents: {
      Europa: 'Европа',
      Azija: 'Азия',
      Afrika: 'Африка',
      'Severna Amerika': 'Северная Америка',
      'Južna Amerika': 'Южная Америка',
      Australija: 'Австралия / Океания',
    },
  },
  tr: {
    tagline: 'Her kıtayı fethet, soru soru',
    startBtn: 'BAŞLA',
    playBtn: 'Oyna',
    whereFrom: 'Nerelisiniz?',
    chooseLanguage: 'Dilinizi seçin',
    selectContinent: 'Kıta seçin',
    chooseCard: 'Bir kart çevir ve meydan okumaya başla!',
    tapToReveal: 'Açmak için tıklayın',
    questionsAwait: '20 soru sizi bekliyor',
    instructions: 'Başlamak için 6 karttan birine tıklayın',
    question: 'Soru',
    correct: 'Doğru! Aferin!',
    wrongAnswer: 'Doğru cevap:',
    next: 'Sonraki',
    seeResults: 'Sonuçları Gör',
    roundComplete: 'Tur Tamamlandı!',
    returnToMap: 'Haritaya Dön',
    playAgain: 'Tekrar Oyna',
    score0: 'Tekrar deneyin! Daha iyisini yapabilirsiniz. 💪',
    score1: 'İyi başlangıç! Öğrenmeye devam et. 📚',
    score2: 'Güçlü! Gelişiyorsunuz. 🌍',
    score3: 'Mükemmel! Neredeyse mükemmel! 🎯',
    score4: 'Mükemmel! Coğrafya ustası! 🏆',
    wrongModalTitle: 'Ne yazık ki, yanlış cevap!',
    wrongModalBody: 'Oyuna devam etmek için bir <strong>meydan okuma</strong> yapmanız gerekiyor. Aksi takdirde oyundan çıkıyorsunuz!',
    endGame: 'Oyunu Bitir',
    doChallenge: 'Meydan Okumayı Yap!',
    challengeLabel: 'MEYDAN OKUMA',
    challengeHint: 'Meydan okumayı herkesin önünde tamamla ve devam et!',
    challengeSkip: 'Yapmadım — Bitti',
    challengeDone: 'Yaptım! Devam Et →',
    continents: {
      Europa: 'Avrupa',
      Azija: 'Asya',
      Afrika: 'Afrika',
      'Severna Amerika': 'Kuzey Amerika',
      'Južna Amerika': 'Güney Amerika',
      Australija: 'Avustralya / Okyanusya',
    },
  },
  lv: {
    tagline: 'Iekarot katru kontinentu, vienu jautājumu reizē',
    startBtn: 'SĀKT',
    playBtn: 'Spēlēt',
    whereFrom: 'No kurienes tu esi?',
    chooseLanguage: 'Izvēlies valodu',
    selectContinent: 'Izvēlies kontinentu',
    chooseCard: 'Apgriez karti un sāc izaicinājumu!',
    tapToReveal: 'Noklikšķini, lai atklātu',
    questionsAwait: '20 jautājumi gaida',
    instructions: 'Noklikšķini uz kādas no 6 kartēm, lai sāktu',
    question: 'Jautājums',
    correct: 'Pareizi! Labi izdarīts!',
    wrongAnswer: 'Pareizā atbilde:',
    next: 'Tālāk',
    seeResults: 'Skatīt rezultātus',
    roundComplete: 'Kārta pabeigta!',
    returnToMap: 'Atgriezties uz karti',
    playAgain: 'Spēlēt vēlreiz',
    score0: 'Mēģini vēlreiz — tu vari labāk! 💪',
    score1: 'Labs sākums! Turpini mācīties. 📚',
    score2: 'Stabili! Tu uzlabojies. 🌍',
    score3: 'Lieliski! Gandrīz perfekti! 🎯',
    score4: 'Perfekti! Ģeogrāfijas meistars! 🏆',
    wrongModalTitle: 'Diemžēl nepareiza atbilde!',
    wrongModalBody: 'Lai turpinātu spēli, jums jāizpilda <strong>izaicinājums</strong>. Pretējā gadījumā jūs izkritat!',
    endGame: 'Beigt spēli',
    doChallenge: 'Izpildīt izaicinājumu!',
    challengeLabel: 'IZAICINĀJUMS',
    challengeHint: 'Izpildi izaicinājumu visu priekšā un turpini!',
    challengeSkip: 'Neizdarīju — Beigas',
    challengeDone: 'Izdarīju! Turpināt →',
    continents: {
      Europa: 'Eiropa',
      Azija: 'Āzija',
      Afrika: 'Āfrika',
      'Severna Amerika': 'Ziemeļamerika',
      'Južna Amerika': 'Dienvidamerika',
      Australija: 'Austrālija / Okeānija',
    },
  },
}

function t(key) {
  return uiStrings[currentLang.value]?.[key] ?? uiStrings['en'][key] ?? key
}

// ─── LOGIN ────────────────────────────────────────────────────────────────────
const VALID_USER = 'ekonomska1'
const VALID_PASS = '522026'

const loginUsername = ref('')
const loginPassword = ref('')
const loginError    = ref(false)
const showPass      = ref(false)

const loginStrings = {
  en: { username: 'Username',        usernamePh: 'Enter your username',    password: 'Password',  passwordPh: 'Enter your password',    wrongCreds: 'Incorrect username or password.', enter: 'Enter'   },
  sr: { username: 'Korisničko ime',  usernamePh: 'Unesite korisničko ime', password: 'Lozinka',   passwordPh: 'Unesite lozinku',         wrongCreds: 'Pogrešno korisničko ime ili lozinka.', enter: 'Uđi' },
  ru: { username: 'Логин',           usernamePh: 'Введите логин',          password: 'Пароль',    passwordPh: 'Введите пароль',          wrongCreds: 'Неверный логин или пароль.',      enter: 'Войти'   },
  tr: { username: 'Kullanıcı adı',   usernamePh: 'Kullanıcı adını girin',  password: 'Şifre',     passwordPh: 'Şifrenizi girin',         wrongCreds: 'Yanlış kullanıcı adı veya şifre.', enter: 'Giriş' },
  lv: { username: 'Lietotājvārds',   usernamePh: 'Ievadi lietotājvārdu',   password: 'Parole',    passwordPh: 'Ievadi paroli',           wrongCreds: 'Nepareizs lietotājvārds vai parole.', enter: 'Ieiet' },
}

function loginT(key) {
  return loginStrings[currentLang.value]?.[key] ?? loginStrings['en'][key]
}

function doLogin() {
  loginError.value = false
  if (loginUsername.value.trim() === VALID_USER && loginPassword.value === VALID_PASS) {
    buildCardDeck()
    phase.value = 'selection'
  } else {
    loginError.value = true
    setTimeout(() => { loginError.value = false }, 3000)
  }
}

// ─── START SCREEN ─────────────────────────────────────────────────────────────
const startStep       = ref(0)
const selectedCountry = ref('')

function openSelectors() { startStep.value = 1 }

function pickCountry(country) {
  selectedCountry.value = country.code
  const matched = languages.find(l => l.code === country.lang)
  if (matched) currentLang.value = country.lang
}

function returnToStart() { phase.value = 'selection'; buildCardDeck() }

// ─── GAME STATE ───────────────────────────────────────────────────────────────
const phase            = ref('login')
const cardDeck         = ref([])
const activeContinent  = ref('')
const roundQuestions   = ref([])
const currentIndex     = ref(0)
const score            = ref(0)
const answered         = ref(false)
const isCorrect        = ref(false)
const pipResults       = ref([])
const displayedOptions = ref([])
const translatedQuestion = ref('')
const translatedCorrect  = ref('')
const selectedOption     = ref('')

const continentKeys = ['Europa', 'Azija', 'Afrika', 'Severna Amerika', 'Južna Amerika', 'Australija']

const continentToIdPrefix = {
  'Europa':          'eu',
  'Azija':           'as',
  'Afrika':          'af',
  'Severna Amerika': 'na',
  'Južna Amerika':   'sa',
  'Australija':      'au',
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildCardDeck() {
  cardDeck.value = shuffle(continentKeys).map(c => ({ continent: c, revealed: false }))
}

const anyRevealed = computed(() => cardDeck.value.some(c => c.revealed))

function revealCard(card) {
  if (anyRevealed.value) return
  card.revealed = true
  activeContinent.value = card.continent
  setTimeout(startQuiz, 1100)
}

function startQuiz() {
  const prefix = continentToIdPrefix[activeContinent.value]
  const pool   = rawQuestions.filter(q => q.id.startsWith(prefix + '-'))
  const picked = shuffle(pool).slice(0, 20)
  roundQuestions.value       = picked
  currentIndex.value         = 0
  score.value                = 0
  pipResults.value           = new Array(picked.length).fill(null)
  showWrongModal.value       = false
  showChallengeCard.value    = false
  usedChallengeIndices.value = []
  currentChallengeIndex.value = -1
  loadQuestion()
  phase.value = 'quiz'
}

function loadQuestion() {
  const q = roundQuestions.value[currentIndex.value]
  answered.value       = false
  isCorrect.value      = false
  selectedOption.value = ''

  const lang = currentLang.value
  const src  = q.translations?.[lang]
            ?? q.translations?.['sr']
            ?? q.translations?.['en']

  if (!src) return

  const wrongs  = shuffle(src.wrong).slice(0, 3)
  const options = shuffle([src.correct, ...wrongs])

  translatedQuestion.value = src.question
  translatedCorrect.value  = src.correct
  displayedOptions.value   = options
}

// Reload when language is switched mid-quiz (only if not yet answered)
watch(currentLang, () => {
  if (phase.value === 'quiz' && roundQuestions.value.length > 0 && !answered.value) {
    loadQuestion()
  }
})

function answerClass(option) {
  if (!answered.value) return ''
  if (option === translatedCorrect.value) return 'ans-correct'
  if (option === selectedOption.value)    return 'ans-wrong'
  return 'ans-dim'
}

function selectAnswer(option) {
  if (answered.value) return
  selectedOption.value = option
  answered.value  = true
  isCorrect.value = option === translatedCorrect.value
  pipResults.value[currentIndex.value] = isCorrect.value
  if (isCorrect.value) {
    score.value++
  } else {
    setTimeout(() => { showWrongModal.value = true }, 800)
  }
}

function nextQuestion() {
  if (currentIndex.value < roundQuestions.value.length - 1) {
    currentIndex.value++
    loadQuestion()
  } else {
    phase.value = 'result'
  }
}

function returnToMap()   { phase.value = 'selection'; buildCardDeck() }
function goToSelection() { phase.value = 'selection'; buildCardDeck() }
function restartSame()   { startQuiz() }
function changeLang(code) { currentLang.value = code }

const resultStars = computed(() => {
  const total = roundQuestions.value.length
  if (!total) return 0
  const pct = score.value / total
  if (pct >= 1)   return 5
  if (pct >= 0.8) return 4
  if (pct >= 0.6) return 3
  if (pct >= 0.4) return 2
  if (pct >= 0.2) return 1
  return 0
})

const scoreComment = computed(() => {
  const total = roundQuestions.value.length
  if (!total) return ''
  const pct = score.value / total
  if (pct === 0)  return t('score0')
  if (pct < 0.5)  return t('score1')
  if (pct < 0.75) return t('score2')
  if (pct < 1.0)  return t('score3')
  return t('score4')
})

// ─── CONTINENT HELPERS ────────────────────────────────────────────────────────
function continentEmoji(name) {
  const map = {
    'Europa':         '🏰',
    'Azija':          '🏯',
    'Afrika':         '🦁',
    'Severna Amerika':'🗽',
    'Južna Amerika':  '🌿',
    'Australija':     '🦘',
  }
  return map[name] || '🌍'
}

function translateContinent(name) {
  return uiStrings[currentLang.value]?.continents?.[name]
      || uiStrings['en'].continents[name]
      || name
}

function continentStyle(name) {
  const map = {
    'Europa':         'linear-gradient(135deg,#1a237e,#283593,#3949ab)',
    'Azija':          'linear-gradient(135deg,#b71c1c,#c62828,#e53935)',
    'Afrika':         'linear-gradient(135deg,#e65100,#ef6c00,#fb8c00)',
    'Severna Amerika':'linear-gradient(135deg,#1b5e20,#2e7d32,#388e3c)',
    'Južna Amerika':  'linear-gradient(135deg,#006064,#00838f,#0097a7)',
    'Australija':     'linear-gradient(135deg,#bf360c,#d84315,#e64a19)',
  }
  return { background: map[name] || 'linear-gradient(135deg,#37474f,#546e7a)' }
}

// ─── CHALLENGES (all 5 languages) ────────────────────────────────────────────
// Each language array must have the same number of entries in the same order.
// currentChallengeIndex stores which challenge is active; currentChallenge is
// a computed so the card text updates instantly when the user switches language.

const challengesByLang = {
  en: [
    { emoji: '😄', text: 'Tell a joke you know — everyone must laugh!' },
    { emoji: '🎤', text: 'Sing the first 15 seconds of your favourite song!' },
    { emoji: '🌍', text: 'Name 5 capitals of European countries in 20 seconds!' },
    { emoji: '💬', text: 'Give a sincere compliment to every player at the table.' },
    { emoji: '🧠', text: 'Name 5 countries in Africa in 15 seconds!' },
    { emoji: '🗺️', text: 'Describe a country without naming it — others guess!' },
    { emoji: '📢', text: 'Give a speech about the most interesting country in the world — 30 seconds!' },
    { emoji: '🏔️', text: 'Name 4 mountain ranges from different continents!' },
    { emoji: '🌊', text: 'Name the 4 largest oceans and one interesting fact about one of them!' },
    { emoji: '🗣️', text: 'Say "Hello, how are you?" in 4 different languages!' },
    { emoji: '🧭', text: 'Name 3 rivers that flow through more than one country!' },
    { emoji: '✈️', text: 'Name 5 famous tourist destinations in Asia!' },
    { emoji: '🏛️', text: 'Name 3 UNESCO World Heritage Sites!' },
    { emoji: '📖', text: 'Share an interesting fact about a country that few people know!' },
    { emoji: '🎭', text: 'Imitate a famous world leader or historical figure — others guess who it is!' },
    { emoji: '💡', text: 'Name 3 inventions that changed the world and the countries they came from!' },
    { emoji: '🎯', text: 'Name 5 countries whose flag has a star on it!' },
    { emoji: '🤝', text: 'Shake hands with every player and say one positive thing to each.' },
    { emoji: '🌐', text: 'Explain the difference between a continent and a country — in one sentence!' },
    { emoji: '🎵', text: 'Sing a national anthem or recognisable music from a country — others guess!' },
    { emoji: '📊', text: 'Name the 3 most populous cities in the world!' },
    { emoji: '🏆', text: 'Name who hosted the last three Olympic Games and in which cities!' },
    { emoji: '🔤', text: 'Name as many countries starting with "K" as you can — you have 20 seconds!' },
    { emoji: '🌴', text: 'Name 4 countries that are located on islands!' },
    { emoji: '🎓', text: 'Explain why geography is important in modern life — you have 30 seconds!' },
    { emoji: '🌺', text: 'Name the national symbol (plant or animal) of three different countries!' },
    { emoji: '🧩', text: 'Which continent has no countries? Explain something about it!' },
    { emoji: '⚽', text: 'Name 4 countries that have hosted the FIFA World Cup!' },
    { emoji: '🗼', text: 'Name 5 famous architectural wonders and which countries they are in!' },
    { emoji: '💰', text: 'Name the currencies of 4 different European countries!' },
    { emoji: '📍', text: 'Which city has more people — Cairo or Lagos? Guess and explain why!' },
    { emoji: '🤓', text: 'Name 3 Nobel Prize winners and what country they are from!' },
    { emoji: '🌋', text: 'Name 3 famous volcanoes and which continent they are on!' },
    { emoji: '🧊', text: 'Which is the only country entirely within the Arctic Circle? One try!' },
    { emoji: '🦁', text: 'Name 4 African countries from memory, without repeating!' },
    { emoji: '🏙️', text: 'Name 3 capitals that are NOT the largest city in their country!' },
    { emoji: '🌞', text: 'Which country is known for the most sunshine hours? Explain!' },
    { emoji: '🤔', text: 'Which two continents share the same landmass? (Eurasia) — explain!' },
    { emoji: '🎪', text: 'Give a short presentation about a country — gestures only, no words!' },
    { emoji: '🔢', text: 'How many countries does South America have? Try to name them all!' },
  ],
  sr: [
    { emoji: '😄', text: 'Ispričaj vic koji znaš — svi moraju da se nasmiju!' },
    { emoji: '🎤', text: 'Otpevaj prvih 15 sekundi omiljene pesme!' },
    { emoji: '🌍', text: 'Nabrojati 5 glavnih gradova evropskih zemalja za 20 sekundi!' },
    { emoji: '💬', text: 'Udeli iskreni kompliment svakom igraču za stolom.' },
    { emoji: '🧠', text: 'Imenuj 5 zemalja u Africi za 15 sekundi!' },
    { emoji: '🗺️', text: 'Opiši neku državu bez imenovanja — ostali pogađaju!' },
    { emoji: '📢', text: 'Drži govor o najzanimljivijoj zemlji na svetu — 30 sekundi!' },
    { emoji: '🏔️', text: 'Imenuj 4 planinska lanca s različitih kontinenata!' },
    { emoji: '🌊', text: 'Imenuj 4 najveća okeana i jedan zanimljiv podatak o jednom od njih!' },
    { emoji: '🗣️', text: 'Reci "Zdravo, kako si?" na 4 različita jezika!' },
    { emoji: '🧭', text: 'Imenuj 3 reke koje teku kroz više od jedne države!' },
    { emoji: '✈️', text: 'Reci 5 poznatih turističkih destinacija u Aziji!' },
    { emoji: '🏛️', text: 'Imenuj 3 svjetska nasljeđa UNESCO-a!' },
    { emoji: '📖', text: 'Ispričaj zanimljivost o nekoj zemlji koju malo ko zna!' },
    { emoji: '🎭', text: 'Imitiraj poznatog svjetskog vođu ili istorijsku ličnost — ostali pogađaju ko je!' },
    { emoji: '💡', text: 'Navedi 3 izuma ili pronalaska koji su promijenili svijet i državu iz koje dolaze!' },
    { emoji: '🎯', text: 'Imenuj 5 zemalja čija zastava ima zvijezdu na njoj!' },
    { emoji: '🤝', text: 'Rukuj se sa svim igračima i svakom reci jednu pozitivnu stvar.' },
    { emoji: '🌐', text: 'Objasni razliku između kontinenta i države — u jednoj rečenici!' },
    { emoji: '🎵', text: 'Otpevaj himnu ili prepoznatljiv dio muzike neke zemlje — ostali pogađaju!' },
    { emoji: '📊', text: 'Imenuj 3 najmnogoljudnija grada na svijetu!' },
    { emoji: '🏆', text: 'Reci ko je bio domaćin posljednja tri Olimpijska igra i u kojim gradovima!' },
    { emoji: '🔤', text: 'Imenuj što više zemalja koje počinju na slovo "K" — imaš 20 sekundi!' },
    { emoji: '🌴', text: 'Nabrojati 4 države koje se nalaze na otocima!' },
    { emoji: '🎓', text: 'Objasni zašto je geografija važna u modernom životu — imaš 30 sekundi!' },
    { emoji: '🌺', text: 'Reci koji je nacionalni simbol (biljka ili životinja) tri različite države!' },
    { emoji: '🧩', text: 'Koji kontinent nema nijedne države? Objasni nešto o njemu!' },
    { emoji: '⚽', text: 'Imenuj 4 države koje su bile domaćini FIFA Svjetskog Kupa!' },
    { emoji: '🗼', text: 'Imenuj 5 čuvenih arhitektonskih čuda i u kojim se zemljama nalaze!' },
    { emoji: '💰', text: 'Reci valute 4 različite evropske države!' },
    { emoji: '📍', text: 'Koji grad ima više stanovnika — Kairo ili Lagos? Pogodi i objasni zašto!' },
    { emoji: '🤓', text: 'Imenuj 3 nobelovca i iz koje su države!' },
    { emoji: '🌋', text: 'Imenuj 3 poznata vulkana i na kom su kontinentu!' },
    { emoji: '🧊', text: 'Koja je jedina država u potpunosti na Arktičkom krugu? Imaš jedan pokušaj!' },
    { emoji: '🦁', text: 'Nabrojati 4 afričke države po sjećanju, bez ponavljanja!' },
    { emoji: '🏙️', text: 'Imenuj 3 prijestolnice koje NISU najveći grad te države!' },
    { emoji: '🌞', text: 'Koja je zemlja poznata po najvećem broju sunčanih sati? Obrazloži!' },
    { emoji: '🤔', text: 'Koja dva kontinenta dijele isti kopneni masiv? (Euroazija) — objasni!' },
    { emoji: '🎪', text: 'Napravi kratku prezentaciju o jednoj državi — samo gestama, bez riječi!' },
    { emoji: '🔢', text: 'Koliko država ima Južna Amerika? Pokušaj da ih sve imenuje!' },
  ],
  ru: [
    { emoji: '😄', text: 'Расскажи анекдот — все должны засмеяться!' },
    { emoji: '🎤', text: 'Спой первые 15 секунд любимой песни!' },
    { emoji: '🌍', text: 'Назови 5 столиц европейских стран за 20 секунд!' },
    { emoji: '💬', text: 'Сделай искренний комплимент каждому игроку за столом.' },
    { emoji: '🧠', text: 'Назови 5 стран Африки за 15 секунд!' },
    { emoji: '🗺️', text: 'Опиши страну, не называя её — остальные угадывают!' },
    { emoji: '📢', text: 'Произнеси речь о самой интересной стране мира — 30 секунд!' },
    { emoji: '🏔️', text: 'Назови 4 горных хребта с разных континентов!' },
    { emoji: '🌊', text: 'Назови 4 крупнейших океана и один интересный факт об одном из них!' },
    { emoji: '🗣️', text: 'Скажи «Привет, как дела?» на 4 разных языках!' },
    { emoji: '🧭', text: 'Назови 3 реки, текущие через несколько стран!' },
    { emoji: '✈️', text: 'Назови 5 известных туристических направлений в Азии!' },
    { emoji: '🏛️', text: 'Назови 3 объекта Всемирного наследия ЮНЕСКО!' },
    { emoji: '📖', text: 'Расскажи интересный факт о стране, который мало кто знает!' },
    { emoji: '🎭', text: 'Изобрази мирового лидера или историческую личность — остальные угадывают!' },
    { emoji: '💡', text: 'Назови 3 изобретения, изменивших мир, и страны, откуда они пришли!' },
    { emoji: '🎯', text: 'Назови 5 стран, на флаге которых есть звезда!' },
    { emoji: '🤝', text: 'Пожми руку каждому игроку и скажи каждому что-то положительное.' },
    { emoji: '🌐', text: 'Объясни разницу между континентом и государством — в одном предложении!' },
    { emoji: '🎵', text: 'Спой гимн или узнаваемую мелодию какой-либо страны — остальные угадывают!' },
    { emoji: '📊', text: 'Назови 3 самых густонаселённых города мира!' },
    { emoji: '🏆', text: 'Скажи, кто принимал последние три Олимпийские игры и в каких городах!' },
    { emoji: '🔤', text: 'Назови как можно больше стран на букву «К» — у тебя 20 секунд!' },
    { emoji: '🌴', text: 'Назови 4 страны, расположенные на островах!' },
    { emoji: '🎓', text: 'Объясни, почему география важна в современной жизни — у тебя 30 секунд!' },
    { emoji: '🌺', text: 'Назови национальный символ (растение или животное) трёх разных стран!' },
    { emoji: '🧩', text: 'Какой континент не имеет ни одной страны? Расскажи о нём что-нибудь!' },
    { emoji: '⚽', text: 'Назови 4 страны, принимавшие чемпионат мира по футболу ФИФА!' },
    { emoji: '🗼', text: 'Назови 5 известных архитектурных чудес и в каких странах они находятся!' },
    { emoji: '💰', text: 'Назови валюты 4 разных европейских стран!' },
    { emoji: '📍', text: 'В каком городе больше жителей — Каире или Лагосе? Угадай и объясни!' },
    { emoji: '🤓', text: 'Назови 3 нобелевских лауреата и из каких они стран!' },
    { emoji: '🌋', text: 'Назови 3 известных вулкана и на каком они континенте!' },
    { emoji: '🧊', text: 'Какая единственная страна полностью за Полярным кругом? Одна попытка!' },
    { emoji: '🦁', text: 'Назови 4 африканские страны по памяти, не повторяясь!' },
    { emoji: '🏙️', text: 'Назови 3 столицы, которые НЕ являются крупнейшим городом своей страны!' },
    { emoji: '🌞', text: 'Какая страна известна наибольшим числом солнечных часов? Объясни!' },
    { emoji: '🤔', text: 'Какие два континента делят один массив суши? (Евразия) — объясни!' },
    { emoji: '🎪', text: 'Представь страну — только жестами, без слов!' },
    { emoji: '🔢', text: 'Сколько стран в Южной Америке? Попробуй назвать их все!' },
  ],
  tr: [
    { emoji: '😄', text: 'Bildiğin bir fıkra anlat — herkes gülmeli!' },
    { emoji: '🎤', text: 'En sevdiğin şarkının ilk 15 saniyesini söyle!' },
    { emoji: '🌍', text: '20 saniyede 5 Avrupa ülkesinin başkentini say!' },
    { emoji: '💬', text: 'Masadaki her oyuncuya samimi bir iltifat yap.' },
    { emoji: '🧠', text: '15 saniyede Afrika\'da 5 ülke say!' },
    { emoji: '🗺️', text: 'Bir ülkeyi adını söylemeden tanımla — diğerleri tahmin eder!' },
    { emoji: '📢', text: 'Dünyanın en ilginç ülkesi hakkında konuşma yap — 30 saniye!' },
    { emoji: '🏔️', text: 'Farklı kıtalardan 4 dağ sırası say!' },
    { emoji: '🌊', text: '4 büyük okyanusu say ve birinden ilginç bir bilgi söyle!' },
    { emoji: '🗣️', text: '4 farklı dilde "Merhaba, nasılsın?" de!' },
    { emoji: '🧭', text: 'Birden fazla ülkeden geçen 3 nehir say!' },
    { emoji: '✈️', text: 'Asya\'da 5 ünlü turistik destinasyon say!' },
    { emoji: '🏛️', text: '3 UNESCO Dünya Mirası Alanı say!' },
    { emoji: '📖', text: 'Çok az kişinin bildiği bir ülke hakkında ilginç bir gerçek paylaş!' },
    { emoji: '🎭', text: 'Ünlü bir dünya liderini taklit et — diğerleri kim olduğunu tahmin eder!' },
    { emoji: '💡', text: 'Dünyayı değiştiren 3 icat ve bunların geldiği ülkeleri say!' },
    { emoji: '🎯', text: 'Bayrağında yıldız bulunan 5 ülke say!' },
    { emoji: '🤝', text: 'Her oyuncuyla el sık ve her birine olumlu bir şey söyle.' },
    { emoji: '🌐', text: 'Kıta ile ülke arasındaki farkı bir cümlede açıkla!' },
    { emoji: '🎵', text: 'Bir ülkenin marşını söyle — diğerleri hangi ülke olduğunu tahmin eder!' },
    { emoji: '📊', text: 'Dünyanın en kalabalık 3 şehrini say!' },
    { emoji: '🏆', text: 'Son üç Olimpiyat Oyunları\'na hangi şehirlerin ev sahipliği yaptığını söyle!' },
    { emoji: '🔤', text: '"K" harfiyle başlayan mümkün olduğunca çok ülke say — 20 sanijen var!' },
    { emoji: '🌴', text: 'Adalarda bulunan 4 ülke say!' },
    { emoji: '🎓', text: 'Coğrafyanın modern hayatta neden önemli olduğunu açıkla — 30 sanijen var!' },
    { emoji: '🌺', text: 'Üç farklı ülkenin ulusal sembolünü (bitki veya hayvan) söyle!' },
    { emoji: '🧩', text: 'Hangi kıtanın hiç ülkesi yok? Onun hakkında bir şey anlat!' },
    { emoji: '⚽', text: 'FIFA Dünya Kupası\'na ev sahipliği yapan 4 ülke say!' },
    { emoji: '🗼', text: '5 ünlü mimari harikayı ve hangi ülkelerde olduklarını say!' },
    { emoji: '💰', text: '4 farklı Avrupa ülkesinin para birimlerini söyle!' },
    { emoji: '📍', text: 'Kahire mi Lagos mu daha kalabalık? Tahmin et ve neden olduğunu açıkla!' },
    { emoji: '🤓', text: '3 Nobel ödüllüyü ve hangi ülkeden olduklarını say!' },
    { emoji: '🌋', text: '3 ünlü yanardağı ve hangi kıtada olduklarını say!' },
    { emoji: '🧊', text: 'Kuzey Kutup Dairesi\'nin tamamında olan tek ülke hangisi? Bir hakkın var!' },
    { emoji: '🦁', text: 'Hafızandan 4 Afrika ülkesi say, tekrar etmeden!' },
    { emoji: '🏙️', text: 'Kendi ülkelerinin en büyük şehri OLMAYAN 3 başkent say!' },
    { emoji: '🌞', text: 'En fazla güneşli saatiyle bilinen ülke hangisi? Açıkla!' },
    { emoji: '🤔', text: 'Hangi iki kıta aynı kara kütlesini paylaşıyor? (Avrasya) — açıkla!' },
    { emoji: '🎪', text: 'Bir ülke hakkında kısa sunum yap — sadece jestlerle, kelimesiz!' },
    { emoji: '🔢', text: 'Güney Amerika\'da kaç ülke var? Hepsini saymaya çalış!' },
  ],
  lv: [
    { emoji: '😄', text: 'Pastāsti joku, ko zini — visiem jāsmajas!' },
    { emoji: '🎤', text: 'Nodziedā savas mīļākās dziesmas pirmās 15 sekundes!' },
    { emoji: '🌍', text: 'Nosaki 5 Eiropas valstu galvaspilsētas 20 sekundēs!' },
    { emoji: '💬', text: 'Dod sirsnīgu komplimentu katram spēlētājam pie galda.' },
    { emoji: '🧠', text: 'Nosaki 5 Āfrikas valstis 15 sekundēs!' },
    { emoji: '🗺️', text: 'Apraksti kādu valsti, neminot tās nosaukumu — pārējie min!' },
    { emoji: '📢', text: 'Uztur runu par interesantāko valsti pasaulē — 30 sekundes!' },
    { emoji: '🏔️', text: 'Nosaki 4 kalnu grēdas no dažādiem kontinentiem!' },
    { emoji: '🌊', text: 'Nosaki 4 lielākos okeānus un vienu interesantu faktu par kādu no tiem!' },
    { emoji: '🗣️', text: 'Pasaki "Sveiki, kā jums klājas?" 4 dažādās valodās!' },
    { emoji: '🧭', text: 'Nosaki 3 upes, kas tek caur vairākām valstīm!' },
    { emoji: '✈️', text: 'Nosaki 5 slavenas tūrisma galamērķus Āzijā!' },
    { emoji: '🏛️', text: 'Nosaki 3 UNESCO Pasaules mantojuma vietas!' },
    { emoji: '📖', text: 'Pastāsti interesantu faktu par kādu valsti, ko maz kas zina!' },
    { emoji: '🎭', text: 'Atdarini slavenu pasaules vadītāju vai vēsturisku personību — pārējie min!' },
    { emoji: '💡', text: 'Nosaki 3 izgudrojumus, kas mainīja pasauli, un valstis, no kurām tie nāk!' },
    { emoji: '🎯', text: 'Nosaki 5 valstis, kuru karogā ir zvaigzne!' },
    { emoji: '🤝', text: 'Paspiedi roku katram spēlētājam un katram pasaki kaut ko pozitīvu.' },
    { emoji: '🌐', text: 'Paskaidro atšķirību starp kontinentu un valsti — vienā teikumā!' },
    { emoji: '🎵', text: 'Nodziedā kādas valsts himnu — pārējie min, kura valsts!' },
    { emoji: '📊', text: 'Nosaki 3 apdzīvotākās pilsētas pasaulē!' },
    { emoji: '🏆', text: 'Pasaki, kuras pilsētas uzņēma pēdējās trīs Olimpiskās spēles!' },
    { emoji: '🔤', text: 'Nosaki pēc iespējas vairāk valstu ar burtu "K" — tev ir 20 sekundes!' },
    { emoji: '🌴', text: 'Nosaki 4 valstis, kas atrodas uz salām!' },
    { emoji: '🎓', text: 'Paskaidro, kāpēc ģeogrāfija ir svarīga mūsdienās — tev ir 30 sekundes!' },
    { emoji: '🌺', text: 'Nosaki trīs dažādu valstu nacionālo simbolu (augs vai dzīvnieks)!' },
    { emoji: '🧩', text: 'Kurš kontinents nav nevienas valsts? Pastāsti kaut ko par to!' },
    { emoji: '⚽', text: 'Nosaki 4 valstis, kas uzņēmušas FIFA Pasaules kausu!' },
    { emoji: '🗼', text: 'Nosaki 5 slavenas arhitektūras brīnumus un kurās valstīs tie atrodas!' },
    { emoji: '💰', text: 'Nosaki 4 dažādu Eiropas valstu valūtas!' },
    { emoji: '📍', text: 'Kurā pilsētā vairāk iedzīvotāju — Kairā vai Lagosā? Uzmin un paskaidro!' },
    { emoji: '🤓', text: 'Nosaki 3 Nobela prēmijas laureātus un no kurām valstīm viņi ir!' },
    { emoji: '🌋', text: 'Nosaki 3 slavenos vulkānus un uz kura kontinenta tie atrodas!' },
    { emoji: '🧊', text: 'Kura valsts pilnībā atrodas Arktiskajā lokā? Tev ir viens mēģinājums!' },
    { emoji: '🦁', text: 'Nosaki 4 Āfrikas valstis no atmiņas, neatkārtojoties!' },
    { emoji: '🏙️', text: 'Nosaki 3 galvaspilsētas, kas NAV savas valsts lielākā pilsēta!' },
    { emoji: '🌞', text: 'Kura valsts ir pazīstama ar vislielāko saules stundu skaitu? Paskaidro!' },
    { emoji: '🤔', text: 'Kuri divi kontinenti dala vienu sauszemes masu? (Eirāzija) — paskaidro!' },
    { emoji: '🎪', text: 'Prezentē kādu valsti — tikai ar žestiem, bez vārdiem!' },
    { emoji: '🔢', text: 'Cik valstu ir Dienvidamerikā? Mēģini nosaukt tās visas!' },
  ],
}

// ─── CHALLENGE STATE ──────────────────────────────────────────────────────────
const showWrongModal        = ref(false)
const showChallengeCard     = ref(false)
const currentChallengeIndex = ref(-1)
const usedChallengeIndices  = ref([])

// Computed so the card text updates immediately when the user switches language
const currentChallenge = computed(() => {
  if (currentChallengeIndex.value < 0) return { emoji: '', text: '' }
  const pool = challengesByLang[currentLang.value] ?? challengesByLang['en']
  return pool[currentChallengeIndex.value] ?? { emoji: '', text: '' }
})

function pickChallenge() {
  const total     = challengesByLang['en'].length          // all langs same length
  const available = Array.from({ length: total }, (_, i) => i)
    .filter(i => !usedChallengeIndices.value.includes(i))
  if (available.length === 0) {
    usedChallengeIndices.value = []
    return pickChallenge()
  }
  const idx = available[Math.floor(Math.random() * available.length)]
  usedChallengeIndices.value.push(idx)
  currentChallengeIndex.value = idx
}

function openChallenge() { pickChallenge(); showWrongModal.value = false; showChallengeCard.value = true }
function endGame()       { showWrongModal.value = false; showChallengeCard.value = false; phase.value = 'selection'; buildCardDeck() }
function challengeDone() { showChallengeCard.value = false; nextQuestion() }

onMounted(() => { buildCardDeck() })
</script>


<style src="./style.css"/>