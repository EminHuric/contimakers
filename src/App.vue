<template>
  <div id="cm-root" :data-theme="isDark ? 'dark' : 'light'" :dir="currentLang === 'ar' ? 'rtl' : 'ltr'">

    <!-- ░░ BACKGROUND ░░ -->
    <div class="bg-layer" aria-hidden="true">
      <div class="bg-mesh"></div>
      <div class="bg-glow g1"></div>
      <div class="bg-glow g2"></div>
      <div class="bg-glow g3"></div>
    </div>

    <!-- ░░ THEME TOGGLE ░░ -->
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

    <!-- ░░░░░░░░░░░░░░ LOGIN SCREEN ░░░░░░░░░░░░░░ -->
    <Transition name="page">
      <div v-if="phase === 'login'" class="login-root" key="login">
        <div class="login-card">

          <!-- Logo -->
          <div class="login-logo">
            <svg class="globe-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          <!-- Language pick -->
          <div class="login-lang-row">
            <button
              v-for="l in loginLanguages"
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

          <!-- Fields -->
          <div class="login-fields">
            <div class="login-field">
              <label class="login-label">{{ loginT('username') }}</label>
              <input
                v-model="loginUsername"
                class="login-input"
                type="text"
                :placeholder="loginT('usernamePh')"
                @keyup.enter="doLogin"
                autocomplete="username"
              />
            </div>
            <div class="login-field">
              <label class="login-label">{{ loginT('password') }}</label>
              <input
                v-model="loginPassword"
                class="login-input"
                :type="showPass ? 'text' : 'password'"
                :placeholder="loginT('passwordPh')"
                @keyup.enter="doLogin"
                autocomplete="current-password"
              />
              <button class="login-eye" @click="showPass = !showPass" type="button" :title="showPass ? 'Sakrij' : 'Prikaži'">
                <svg v-if="!showPass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              </button>
            </div>

            <!-- Error -->
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

    <!-- ░░░░░░░░░░░░░░ START SCREEN ░░░░░░░░░░░░░░ -->
    <Transition name="page">
      <div v-if="phase === 'start'" class="start-root" key="start">

        <!-- HERO: Logo + START button -->
        <div class="hero" :class="{ 'hero-shrunk': startStep >= 1 }">
          <!-- Globe SVG Logo -->
          <div class="logo-orb" :class="{ 'orb-sm': startStep >= 1 }">
            <svg class="globe-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          <!-- Wordmark -->
          <div class="logo-words" :class="{ 'words-sm': startStep >= 1 }">
            <h1 class="cm-title">CONTIMAKERS</h1>
            <Transition name="fade-down">
              <p v-if="startStep === 0" class="cm-tagline">{{ t('tagline') }}</p>
            </Transition>
          </div>
        </div>

        <!-- START button (visible only on step 0) -->
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

        <!-- SELECTORS PANEL (slides in on step 1) -->
        <Transition name="panel-drop">
          <div v-if="startStep >= 1" class="selectors-panel" key="selectors">

            <!-- 01 Country -->
            <div class="sel-block">
              <div class="sel-head">
                <span class="sel-num">01</span>
                <h3 class="sel-label">{{ t('whereFrom') }}</h3>
              </div>
              <div class="country-grid">
                <button
                  v-for="c in countries"
                  :key="c.code"
                  class="c-btn"
                  :class="{ 'c-active': selectedCountry === c.code }"
                  @click="pickCountry(c)"
                >
                  <span class="c-flag">{{ c.flag }}</span>
                  <span class="c-name">{{ c.name }}</span>
                </button>
              </div>
            </div>

            <!-- 02 Language -->
            <div class="sel-block">
              <div class="sel-head">
                <span class="sel-num">02</span>
                <h3 class="sel-label">{{ t('chooseLanguage') }}</h3>
              </div>
              <div class="lang-grid">
                <button
                  v-for="l in languages"
                  :key="l.code"
                  class="l-btn"
                  :class="{ 'l-active': currentLang === l.code }"
                  @click="currentLang = l.code"
                >
                  <span class="l-flag">{{ l.flag }}</span>
                  <span class="l-name">{{ l.name }}</span>
                </button>
              </div>
            </div>

            <!-- PLAY button -->
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

    <!-- ░░░░░░░░░░░░░░ SELECTION SCREEN ░░░░░░░░░░░░░░ -->
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
            <button
              v-for="l in languages"
              :key="l.code"
              class="bar-lang"
              :class="{ active: currentLang === l.code }"
              @click="currentLang = l.code"
              :title="l.name"
            >{{ l.flag }}</button>
          </div>
        </header>

        <div class="sel-content">
          <div class="sel-intro">
            <p class="sup-text">{{ t('selectContinent') }}</p>
            <h2 class="sel-heading">{{ t('chooseCard') }}</h2>
          </div>

          <div class="card-grid-6">
            <div
              v-for="(card, idx) in cardDeck"
              :key="card.continent"
              class="flip-wrap"
              :class="{ locked: anyRevealed && !card.revealed }"
              @click="revealCard(card)"
            >
              <div class="flip-inner" :class="{ flipped: card.revealed }">
                <!-- Back face -->
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
                <!-- Front face -->
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

    <!-- ░░░░░░░░░░░░░░ QUIZ SCREEN ░░░░░░░░░░░░░░ -->
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
            <button
              v-for="l in languages"
              :key="l.code"
              class="bar-lang"
              :class="{ active: currentLang === l.code }"
              @click="changeLang(l.code)"
              :title="l.name"
            >{{ l.flag }}</button>
          </div>
        </header>

        <div class="quiz-area">
          <div class="quiz-card">

            <!-- Continent band -->
            <div class="quiz-band" :style="continentStyle(activeContinent)">
              <div class="band-left">
                <span class="band-emoji">{{ continentEmoji(activeContinent) }}</span>
                <span class="band-cname">{{ translateContinent(activeContinent) }}</span>
              </div>
              <span class="band-counter">{{ t('question') }} {{ currentIndex + 1 }}&thinsp;/&thinsp;{{ roundQuestions.length }}</span>
            </div>

            <!-- Progress bar -->
            <div class="progress-rail">
              <div class="progress-fill" :style="{ width: (currentIndex / roundQuestions.length * 100) + '%' }"></div>
            </div>

            <!-- Question body -->
            <div class="quiz-body">
              <Transition name="q-slide" mode="out-in">
                <div :key="currentIndex" class="q-block">

                  <div v-if="isTranslating" class="loading-state">
                    <div class="dots"><span></span><span></span><span></span></div>
                    <p class="loading-txt">{{ t('translating') }}</p>
                  </div>

                  <template v-else>
                    <p class="q-text">{{ translatedQuestion }}</p>
                    <div class="answers-grid">
                      <button
                        v-for="(opt, i) in displayedOptions"
                        :key="i + '-' + opt"
                        class="ans-btn"
                        :class="answerClass(opt)"
                        :disabled="answered"
                        @click="selectAnswer(opt)"
                      >
                        <span class="ans-letter">{{ ['A','B','C','D'][i] }}</span>
                        <span class="ans-text">{{ opt }}</span>
                      </button>
                    </div>
                  </template>

                </div>
              </Transition>

              <!-- Feedback bar -->
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

            <!-- Pip row -->
            <div class="pip-row">
              <div
                v-for="(pip, i) in pipResults"
                :key="i"
                class="pip"
                :class="{
                  'pip-active': i === currentIndex,
                  'pip-ok': pip === true,
                  'pip-err': pip === false
                }"
              ></div>
            </div>

          </div>
        </div>

      </div>
    </Transition>

    <!-- ░░░░░░░░░░░░░░ WRONG ANSWER MODAL ░░░░░░░░░░░░░░ -->
    <Transition name="modal-fade">
      <div v-if="showWrongModal" class="modal-overlay" @click.self="null">
        <div class="modal-card">
          <div class="modal-icon">😬</div>
          <h2 class="modal-title">Nažalost, odgovor nije tačan!</h2>
          <p class="modal-body">Ako želite da nastavite igru, potrebno je da uradite <strong>izazov</strong>. U suprotnom ispadate iz igre.</p>
          <div class="modal-actions">
            <button class="btn-end-game" @click="endGame">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              Kraj igre
            </button>
            <button class="btn-do-challenge" @click="openChallenge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Uradi izazov!
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ░░░░░░░░░░░░░░ CHALLENGE CARD ░░░░░░░░░░░░░░ -->
    <Transition name="challenge-pop">
      <div v-if="showChallengeCard" class="modal-overlay" @click.self="null">
        <div class="challenge-card">
          <div class="challenge-header">
            <span class="challenge-badge">⚡ IZAZOV</span>
          </div>
          <div class="challenge-emoji">{{ currentChallenge.emoji }}</div>
          <p class="challenge-text">{{ currentChallenge.text }}</p>
          <p class="challenge-hint">Uradi izazov i nastavi igru!</p>
          <button class="btn-challenge-done" @click="challengeDone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            Završeno! Nastavi igru →
          </button>
        </div>
      </div>
    </Transition>

    <!-- ░░░░░░░░░░░░░░ RESULT SCREEN ░░░░░░░░░░░░░░ -->
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
        </header>

        <div class="result-area">
          <div class="result-card">

            <!-- Continent band -->
            <div class="result-band" :style="continentStyle(activeContinent)">
              <span class="result-emoji">{{ continentEmoji(activeContinent) }}</span>
              <span class="result-cname">{{ translateContinent(activeContinent) }}</span>
            </div>

            <div class="result-body">
              <p class="result-kicker">{{ t('roundComplete') }}</p>

              <!-- Stars -->
              <div class="stars">
                <span v-for="n in 5" :key="n" class="star" :class="{ lit: n <= resultStars }">★</span>
              </div>

              <!-- Score -->
              <div class="score-disp">
                <span class="score-big">{{ score }}</span>
                <span class="score-sep">/</span>
                <span class="score-tot">{{ roundQuestions.length }}</span>
              </div>

              <p class="score-comment">{{ scoreComment }}</p>

              <!-- Pip grid -->
              <div class="result-pips">
                <div
                  v-for="(pip, i) in pipResults"
                  :key="i"
                  class="rpip"
                  :class="pip ? 'rpip-ok' : 'rpip-err'"
                >{{ pip ? '✓' : '✗' }}</div>
              </div>

              <!-- Actions -->
              <div class="result-actions">
                <button class="btn-back" @click="returnToMap">
                  ◂ {{ t('returnToMap') }}
                </button>
                <button class="btn-restart" @click="restartSame">
                  ↺ {{ t('playAgain') }}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import rawQuestions from './data/questions.js'

// ─── THEME (LIGHT DEFAULT) ────────────────────────────────────────────────────
const isDark = ref(false)

// ─── LANGUAGES ────────────────────────────────────────────────────────────────
const languages = [
  { code: 'en', name: 'English',    flag: '🇬🇧' },
  { code: 'sr', name: 'Srpski',     flag: '🇷🇸' },
  { code: 'de', name: 'Deutsch',    flag: '🇩🇪' },
  { code: 'fr', name: 'Français',   flag: '🇫🇷' },
  { code: 'es', name: 'Español',    flag: '🇪🇸' },
  { code: 'it', name: 'Italiano',   flag: '🇮🇹' },
  { code: 'pt', name: 'Português',  flag: '🇵🇹' },
  { code: 'ru', name: 'Русский',    flag: '🇷🇺' },
  { code: 'zh', name: '中文',        flag: '🇨🇳' },
  { code: 'ja', name: '日本語',      flag: '🇯🇵' },
  { code: 'ar', name: 'العربية',    flag: '🇸🇦' },
  { code: 'tr', name: 'Türkçe',     flag: '🇹🇷' },
  { code: 'lv', name: 'Latviešu',   flag: '🇱🇻' },
]

const currentLang = ref('en')

// ─── COUNTRIES ────────────────────────────────────────────────────────────────
const countries = [
  { code: 'US', name: 'United States',   flag: '🇺🇸', lang: 'en' },
  { code: 'GB', name: 'United Kingdom',  flag: '🇬🇧', lang: 'en' },
  { code: 'RS', name: 'Serbia',          flag: '🇷🇸', lang: 'sr' },
  { code: 'DE', name: 'Germany',         flag: '🇩🇪', lang: 'de' },
  { code: 'FR', name: 'France',          flag: '🇫🇷', lang: 'fr' },
  { code: 'ES', name: 'Spain',           flag: '🇪🇸', lang: 'es' },
  { code: 'IT', name: 'Italy',           flag: '🇮🇹', lang: 'it' },
  { code: 'PT', name: 'Portugal',        flag: '🇵🇹', lang: 'pt' },
  { code: 'BR', name: 'Brazil',          flag: '🇧🇷', lang: 'pt' },
  { code: 'RU', name: 'Russia',          flag: '🇷🇺', lang: 'ru' },
  { code: 'CN', name: 'China',           flag: '🇨🇳', lang: 'zh' },
  { code: 'JP', name: 'Japan',           flag: '🇯🇵', lang: 'ja' },
  { code: 'SA', name: 'Saudi Arabia',    flag: '🇸🇦', lang: 'ar' },
  { code: 'TR', name: 'Turkey',          flag: '🇹🇷', lang: 'tr' },
  { code: 'LV', name: 'Latvia',          flag: '🇱🇻', lang: 'lv' },
  { code: 'AU', name: 'Australia',       flag: '🇦🇺', lang: 'en' },
  { code: 'CA', name: 'Canada',          flag: '🇨🇦', lang: 'en' },
  { code: 'IN', name: 'India',           flag: '🇮🇳', lang: 'en' },
  { code: 'AR', name: 'Argentina',       flag: '🇦🇷', lang: 'es' },
  { code: 'MX', name: 'Mexico',          flag: '🇲🇽', lang: 'es' },
  { code: 'KR', name: 'South Korea',     flag: '🇰🇷', lang: 'en' },
  { code: 'SE', name: 'Sweden',          flag: '🇸🇪', lang: 'en' },
  { code: 'NO', name: 'Norway',          flag: '🇳🇴', lang: 'en' },
  { code: 'FI', name: 'Finland',         flag: '🇫🇮', lang: 'en' },
  { code: 'PL', name: 'Poland',          flag: '🇵🇱', lang: 'en' },
  { code: 'NL', name: 'Netherlands',     flag: '🇳🇱', lang: 'en' },
  { code: 'CH', name: 'Switzerland',     flag: '🇨🇭', lang: 'de' },
  { code: 'AT', name: 'Austria',         flag: '🇦🇹', lang: 'de' },
  { code: 'GR', name: 'Greece',          flag: '🇬🇷', lang: 'en' },
  { code: 'UA', name: 'Ukraine',         flag: '🇺🇦', lang: 'en' },
  { code: 'EE', name: 'Estonia',         flag: '🇪🇪', lang: 'en' },
  { code: 'LT', name: 'Lithuania',       flag: '🇱🇹', lang: 'en' },
  { code: 'HU', name: 'Hungary',         flag: '🇭🇺', lang: 'en' },
  { code: 'CZ', name: 'Czech Rep.',      flag: '🇨🇿', lang: 'en' },
  { code: 'RO', name: 'Romania',         flag: '🇷🇴', lang: 'en' },
  { code: 'HR', name: 'Croatia',         flag: '🇭🇷', lang: 'en' },
  { code: 'SK', name: 'Slovakia',        flag: '🇸🇰', lang: 'en' },
  { code: 'SI', name: 'Slovenia',        flag: '🇸🇮', lang: 'en' },
  { code: 'BA', name: 'Bosnia',          flag: '🇧🇦', lang: 'sr' },
  { code: 'ME', name: 'Montenegro',      flag: '🇲🇪', lang: 'sr' },
  { code: 'MK', name: 'N. Macedonia',    flag: '🇲🇰', lang: 'en' },
  { code: 'AL', name: 'Albania',         flag: '🇦🇱', lang: 'en' },
  { code: 'DK', name: 'Denmark',         flag: '🇩🇰', lang: 'en' },
  { code: 'BE', name: 'Belgium',         flag: '🇧🇪', lang: 'fr' },
  { code: 'ZA', name: 'South Africa',    flag: '🇿🇦', lang: 'en' },
  { code: 'NG', name: 'Nigeria',         flag: '🇳🇬', lang: 'en' },
  { code: 'EG', name: 'Egypt',           flag: '🇪🇬', lang: 'ar' },
  { code: 'OTHER', name: 'Other',        flag: '🌍', lang: 'en' },
]

// ─── UI STRINGS ───────────────────────────────────────────────────────────────
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
    translating: 'Translating…',
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
    continents: { Europa:'Europe', Azija:'Asia', Afrika:'Africa', 'Severna Amerika':'North America', 'Južna Amerika':'South America', Australija:'Australia / Oceania' }
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
    translating: 'Prevođenje…',
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
    continents: { Europa:'Evropa', Azija:'Azija', Afrika:'Afrika', 'Severna Amerika':'Severna Amerika', 'Južna Amerika':'Južna Amerika', Australija:'Australija / Okeanija' }
  },
  de: {
    tagline: 'Erobere jeden Kontinent, eine Frage nach der anderen',
    startBtn: 'START',
    playBtn: 'Spielen',
    whereFrom: 'Woher kommst du?',
    chooseLanguage: 'Sprache wählen',
    selectContinent: 'Kontinent auswählen',
    chooseCard: 'Drehe eine Karte um und beginne die Herausforderung!',
    tapToReveal: 'Klicken zum Aufdecken',
    questionsAwait: '20 Fragen warten',
    instructions: 'Klicke eine der 6 Karten um zu beginnen',
    question: 'Frage',
    translating: 'Übersetzen…',
    correct: 'Richtig! Gut gemacht!',
    wrongAnswer: 'Richtige Antwort:',
    next: 'Weiter',
    seeResults: 'Ergebnisse sehen',
    roundComplete: 'Runde abgeschlossen!',
    returnToMap: 'Zurück zur Karte',
    playAgain: 'Nochmals spielen',
    score0: 'Versuch es nochmal! Du kannst es besser. 💪',
    score1: 'Guter Start! Weitermachen. 📚',
    score2: 'Solide! Du verbesserst dich. 🌍',
    score3: 'Ausgezeichnet! Fast perfekt! 🎯',
    score4: 'Perfekt! Geographie-Meister! 🏆',
    continents: { Europa:'Europa', Azija:'Asien', Afrika:'Afrika', 'Severna Amerika':'Nordamerika', 'Južna Amerika':'Südamerika', Australija:'Australien / Ozeanien' }
  },
  fr: {
    tagline: 'Conquiers chaque continent, une question à la fois',
    startBtn: 'DÉMARRER',
    playBtn: 'Jouer',
    whereFrom: 'D\'où venez-vous ?',
    chooseLanguage: 'Choisissez votre langue',
    selectContinent: 'Sélectionner un continent',
    chooseCard: 'Retournez une carte et relevez le défi !',
    tapToReveal: 'Cliquez pour révéler',
    questionsAwait: '20 questions vous attendent',
    instructions: 'Cliquez sur l\'une des 6 cartes pour commencer',
    question: 'Question',
    translating: 'Traduction…',
    correct: 'Correct ! Bravo !',
    wrongAnswer: 'Bonne réponse :',
    next: 'Suivant',
    seeResults: 'Voir les résultats',
    roundComplete: 'Tour terminé !',
    returnToMap: 'Retour à la carte',
    playAgain: 'Rejouer',
    score0: 'Essayez encore ! Vous pouvez faire mieux. 💪',
    score1: 'Bon début ! Continuez. 📚',
    score2: 'Solide ! Vous progressez. 🌍',
    score3: 'Excellent ! Presque parfait ! 🎯',
    score4: 'Parfait ! Maître de géographie ! 🏆',
    continents: { Europa:'Europe', Azija:'Asie', Afrika:'Afrique', 'Severna Amerika':'Amérique du Nord', 'Južna Amerika':'Amérique du Sud', Australija:'Australie / Océanie' }
  },
  es: {
    tagline: 'Conquista cada continente, una pregunta a la vez',
    startBtn: 'EMPEZAR',
    playBtn: 'Jugar',
    whereFrom: '¿De dónde eres?',
    chooseLanguage: 'Elige tu idioma',
    selectContinent: 'Seleccionar continente',
    chooseCard: '¡Voltea una carta y comienza el desafío!',
    tapToReveal: 'Haz clic para revelar',
    questionsAwait: '20 preguntas te esperan',
    instructions: 'Haz clic en una de las 6 cartas para empezar',
    question: 'Pregunta',
    translating: 'Traduciendo…',
    correct: '¡Correcto! ¡Bien hecho!',
    wrongAnswer: 'Respuesta correcta:',
    next: 'Siguiente',
    seeResults: 'Ver resultados',
    roundComplete: '¡Ronda completa!',
    returnToMap: 'Volver al mapa',
    playAgain: 'Jugar de nuevo',
    score0: '¡Inténtalo de nuevo! Puedes hacerlo mejor. 💪',
    score1: '¡Buen comienzo! Sigue estudiando. 📚',
    score2: '¡Sólido! Estás mejorando. 🌍',
    score3: '¡Excelente! ¡Casi perfecto! 🎯',
    score4: '¡Perfecto! ¡Maestro de geografía! 🏆',
    continents: { Europa:'Europa', Azija:'Asia', Afrika:'África', 'Severna Amerika':'América del Norte', 'Južna Amerika':'América del Sur', Australija:'Australia / Oceanía' }
  },
  it: {
    tagline: 'Conquista ogni continente, una domanda alla volta',
    startBtn: 'INIZIA',
    playBtn: 'Gioca',
    whereFrom: 'Da dove vieni?',
    chooseLanguage: 'Scegli la tua lingua',
    selectContinent: 'Seleziona un continente',
    chooseCard: 'Gira una carta e inizia la sfida!',
    tapToReveal: 'Clicca per rivelare',
    questionsAwait: '20 domande ti aspettano',
    instructions: 'Clicca su una delle 6 carte per iniziare',
    question: 'Domanda',
    translating: 'Traduzione…',
    correct: 'Corretto! Bravo!',
    wrongAnswer: 'Risposta corretta:',
    next: 'Avanti',
    seeResults: 'Vedi risultati',
    roundComplete: 'Round completato!',
    returnToMap: 'Torna alla mappa',
    playAgain: 'Gioca di nuovo',
    score0: 'Riprova! Puoi fare meglio. 💪',
    score1: 'Buon inizio! Continua. 📚',
    score2: 'Solido! Stai migliorando. 🌍',
    score3: 'Eccellente! Quasi perfetto! 🎯',
    score4: 'Perfetto! Maestro di geografia! 🏆',
    continents: { Europa:'Europa', Azija:'Asia', Afrika:'Africa', 'Severna Amerika':'America del Nord', 'Južna Amerika':'America del Sud', Australija:'Australia / Oceania' }
  },
  pt: {
    tagline: 'Conquiste cada continente, uma pergunta de cada vez',
    startBtn: 'COMEÇAR',
    playBtn: 'Jogar',
    whereFrom: 'De onde você é?',
    chooseLanguage: 'Escolha seu idioma',
    selectContinent: 'Selecionar continente',
    chooseCard: 'Vire uma carta e comece o desafio!',
    tapToReveal: 'Clique para revelar',
    questionsAwait: '20 perguntas esperam por você',
    instructions: 'Clique em um dos 6 cartões para começar',
    question: 'Pergunta',
    translating: 'Traduzindo…',
    correct: 'Correto! Muito bem!',
    wrongAnswer: 'Resposta correta:',
    next: 'Próxima',
    seeResults: 'Ver resultados',
    roundComplete: 'Rodada completa!',
    returnToMap: 'Voltar ao mapa',
    playAgain: 'Jogar novamente',
    score0: 'Tente novamente! Você pode fazer melhor. 💪',
    score1: 'Bom começo! Continue. 📚',
    score2: 'Sólido! Você está melhorando. 🌍',
    score3: 'Excelente! Quase perfeito! 🎯',
    score4: 'Perfeito! Mestre da geografia! 🏆',
    continents: { Europa:'Europa', Azija:'Ásia', Afrika:'África', 'Severna Amerika':'América do Norte', 'Južna Amerika':'América do Sul', Australija:'Austrália / Oceania' }
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
    translating: 'Перевод…',
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
    continents: { Europa:'Европа', Azija:'Азия', Afrika:'Африка', 'Severna Amerika':'Северная Америка', 'Južna Amerika':'Южная Америка', Australija:'Австралия / Океания' }
  },
  zh: {
    tagline: '征服每个大洲，一次一个问题',
    startBtn: '开始',
    playBtn: '开始游戏',
    whereFrom: '你来自哪里？',
    chooseLanguage: '选择你的语言',
    selectContinent: '选择大洲',
    chooseCard: '翻开一张牌，开始挑战！',
    tapToReveal: '点击揭示',
    questionsAwait: '20道题目等待你',
    instructions: '点击6张牌中的一张开始',
    question: '问题',
    translating: '翻译中…',
    correct: '正确！干得好！',
    wrongAnswer: '正确答案：',
    next: '下一个',
    seeResults: '查看结果',
    roundComplete: '本轮结束！',
    returnToMap: '返回地图',
    playAgain: '再次游戏',
    score0: '再试一次！你可以做得更好。💪',
    score1: '好的开始！继续学习。📚',
    score2: '不错！你在进步。🌍',
    score3: '出色！几乎完美！🎯',
    score4: '完美！地理大师！🏆',
    continents: { Europa:'欧洲', Azija:'亚洲', Afrika:'非洲', 'Severna Amerika':'北美洲', 'Južna Amerika':'南美洲', Australija:'澳大利亚 / 大洋洲' }
  },
  ja: {
    tagline: 'すべての大陸を制覇しよう、一問一答で',
    startBtn: 'スタート',
    playBtn: 'ゲームを始める',
    whereFrom: 'どこから来ましたか？',
    chooseLanguage: '言語を選んでください',
    selectContinent: '大陸を選択',
    chooseCard: 'カードをめくってチャレンジを始めよう！',
    tapToReveal: 'クリックして公開',
    questionsAwait: '20問があなたを待っています',
    instructions: '6枚のカードから1枚を選んでください',
    question: '問題',
    translating: '翻訳中…',
    correct: '正解！よくできました！',
    wrongAnswer: '正解：',
    next: '次へ',
    seeResults: '結果を見る',
    roundComplete: 'ラウンド完了！',
    returnToMap: 'マップに戻る',
    playAgain: 'もう一度プレイ',
    score0: 'もう一度試してください！💪',
    score1: '良いスタート！学習を続けましょう。📚',
    score2: 'しっかりしています！成長しています。🌍',
    score3: '素晴らしい！ほぼ完璧！🎯',
    score4: '完璧！地理の達人！🏆',
    continents: { Europa:'ヨーロッパ', Azija:'アジア', Afrika:'アフリカ', 'Severna Amerika':'北アメリカ', 'Južna Amerika':'南アメリカ', Australija:'オーストラリア・オセアニア' }
  },
  ar: {
    tagline: 'اغزُ كل قارة، سؤالاً في كل مرة',
    startBtn: 'ابدأ',
    playBtn: 'العب الآن',
    whereFrom: 'من أين أنت؟',
    chooseLanguage: 'اختر لغتك',
    selectContinent: 'اختر قارة',
    chooseCard: 'اقلب بطاقة وابدأ التحدي!',
    tapToReveal: 'انقر للكشف',
    questionsAwait: '20 سؤالاً تنتظرك',
    instructions: 'انقر على إحدى البطاقات الست للبدء',
    question: 'السؤال',
    translating: 'جارٍ الترجمة…',
    correct: 'صحيح! أحسنت!',
    wrongAnswer: 'الجواب الصحيح:',
    next: 'التالي',
    seeResults: 'عرض النتائج',
    roundComplete: 'انتهت الجولة!',
    returnToMap: 'العودة إلى الخريطة',
    playAgain: 'العب مرة أخرى',
    score0: 'حاول مرة أخرى! يمكنك أن تفعل أفضل. 💪',
    score1: 'بداية جيدة! استمر في التعلم. 📚',
    score2: 'ممتاز! أنت تتحسن. 🌍',
    score3: 'رائع! تقريباً مثالي! 🎯',
    score4: 'مثالي! سيد الجغرافيا! 🏆',
    continents: { Europa:'أوروبا', Azija:'آسيا', Afrika:'أفريقيا', 'Severna Amerika':'أمريكا الشمالية', 'Južna Amerika':'أمريكا الجنوبية', Australija:'أستراليا / أوقيانوسيا' }
  },
  tr: {
    tagline: 'Her kıtayı fethет, soru soru',
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
    translating: 'Çeviriliyor…',
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
    continents: { Europa:'Avrupa', Azija:'Asya', Afrika:'Afrika', 'Severna Amerika':'Kuzey Amerika', 'Južna Amerika':'Güney Amerika', Australija:'Avustralya / Okyanusya' }
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
    translating: 'Tulkošana…',
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
    continents: { Europa:'Eiropa', Azija:'Āzija', Afrika:'Āfrika', 'Severna Amerika':'Ziemeļamerika', 'Južna Amerika':'Dienvidamerika', Australija:'Austrālija / Okeānija' }
  },
}

function t(key) {
  return uiStrings[currentLang.value]?.[key] ?? uiStrings['en'][key] ?? key
}

// ─── TRANSLATION CACHE + API ──────────────────────────────────────────────────
const translationCache = ref({})
const isTranslating = ref(false)

// MyMemory API — besplatno, bez kljuca, 5000 reci/dan
const LANG_CODES = {
  'English':   'en',
  'Deutsch':   'de',
  'Français':  'fr',
  'Español':   'es',
  'Italiano':  'it',
  'Português': 'pt',
  'Русский':   'ru',
  '中文':       'zh',
  '日本語':     'ja',
  'العربية':   'ar',
  'Türkçe':    'tr',
  'Latviešu':  'lv',
}

async function translateOne(text, targetCode) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=sr|${targetCode}`
  const res = await fetch(url)
  const data = await res.json()
  return data.responseData?.translatedText || text
}

async function translateWithAPI(texts, targetLang) {
  const cacheKey = `${targetLang}:${texts.join('|||')}`
  if (translationCache.value[cacheKey]) return translationCache.value[cacheKey]

  const targetCode = LANG_CODES[targetLang] || 'en'

  try {
    const results = await Promise.all(texts.map(t => translateOne(t, targetCode)))
    translationCache.value[cacheKey] = results
    return results
  } catch (e) {
    console.error('Translation error:', e)
    return texts
  }
}

// ─── LOGIN ────────────────────────────────────────────────────────────────────
const VALID_USER = 'ekonomska1'
const VALID_PASS = '522026'

const loginUsername = ref('')
const loginPassword = ref('')
const loginError = ref(false)
const showPass = ref(false)

const loginLanguages = [
  { code: 'sr', name: 'Srpski',   flag: '🇷🇸' },
  { code: 'en', name: 'English',   flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch',   flag: '🇩🇪' },
  { code: 'fr', name: 'Français',  flag: '🇫🇷' },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'es', name: 'Español',   flag: '🇪🇸' },
  { code: 'ru', name: 'Русский',   flag: '🇷🇺' },
]

const loginStrings = {
  sr: { username: 'Korisničko ime', usernamePh: 'Unesite korisničko ime', password: 'Lozinka', passwordPh: 'Unesite lozinku', wrongCreds: 'Pogrešno korisničko ime ili lozinka.', enter: 'Uđi' },
  en: { username: 'Username', usernamePh: 'Enter your username', password: 'Password', passwordPh: 'Enter your password', wrongCreds: 'Incorrect username or password.', enter: 'Enter' },
  de: { username: 'Benutzername', usernamePh: 'Benutzername eingeben', password: 'Passwort', passwordPh: 'Passwort eingeben', wrongCreds: 'Falscher Benutzername oder Passwort.', enter: 'Einloggen' },
  fr: { username: 'Nom d\'utilisateur', usernamePh: 'Entrez votre nom', password: 'Mot de passe', passwordPh: 'Entrez votre mot de passe', wrongCreds: 'Nom ou mot de passe incorrect.', enter: 'Entrer' },
  lv: { username: 'Lietotājvārds', usernamePh: 'Ievadi lietotājvārdu', password: 'Parole', passwordPh: 'Ievadi paroli', wrongCreds: 'Nepareizs lietotājvārds vai parole.', enter: 'Ieiet' },
  pt: { username: 'Utilizador', usernamePh: 'Insira o seu utilizador', password: 'Senha', passwordPh: 'Insira a sua senha', wrongCreds: 'Utilizador ou senha incorretos.', enter: 'Entrar' },
  es: { username: 'Usuario', usernamePh: 'Ingresa tu usuario', password: 'Contraseña', passwordPh: 'Ingresa tu contraseña', wrongCreds: 'Usuario o contraseña incorrectos.', enter: 'Entrar' },
  ru: { username: 'Логин', usernamePh: 'Введите логин', password: 'Пароль', passwordPh: 'Введите пароль', wrongCreds: 'Неверный логин или пароль.', enter: 'Войти' },
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

// ─── START SCREEN STATE ───────────────────────────────────────────────────────
const startStep = ref(0)
const selectedCountry = ref('')

function openSelectors() {
  startStep.value = 1
}

function pickCountry(country) {
  selectedCountry.value = country.code
  const matched = languages.find(l => l.code === country.lang)
  if (matched) currentLang.value = country.lang
}

function returnToStart() {
  phase.value = 'selection'
  buildCardDeck()
}

// ─── GAME STATE ───────────────────────────────────────────────────────────────
const phase = ref('login')
const cardDeck = ref([])
const activeContinent = ref('')
const roundQuestions = ref([])
const currentIndex = ref(0)
const score = ref(0)
const answered = ref(false)
const isCorrect = ref(false)
const pipResults = ref([])
const displayedOptions = ref([])
const translatedQuestion = ref('')
const translatedCorrect = ref('')
const selectedOption = ref('')

const continentKeys = ['Europa', 'Azija', 'Afrika', 'Severna Amerika', 'Južna Amerika', 'Australija']

// Maps internal continent keys → question ID prefixes in questions.js
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

async function startQuiz() {
  const prefix = continentToIdPrefix[activeContinent.value]
  const pool = rawQuestions.filter(q => q.id.startsWith(prefix + '-'))
  const picked = shuffle(pool).slice(0, 20)
  roundQuestions.value = picked
  currentIndex.value = 0
  score.value = 0
  pipResults.value = new Array(picked.length).fill(null)
  showWrongModal.value = false
  showChallengeCard.value = false
  usedChallengeIndices.value = []
  await loadQuestion()
  phase.value = 'quiz'
}

async function loadQuestion() {
  const q = roundQuestions.value[currentIndex.value]
  answered.value = false
  isCorrect.value = false
  selectedOption.value = ''

  // Always use Serbian source — it's the only fully-written translation
  const src = q.translations.sr
  const lang = currentLang.value

  if (lang === 'sr') {
    const wrongs = shuffle(src.wrong).slice(0, 3)
    displayedOptions.value = shuffle([src.correct, ...wrongs])
    translatedQuestion.value = src.question
    translatedCorrect.value = src.correct
  } else {
    isTranslating.value = true
    const wrongs = shuffle(src.wrong).slice(0, 3)
    const rawOptions = [src.correct, ...wrongs]
    const toTranslate = [src.question, ...rawOptions]
    const langName = languages.find(l => l.code === lang)?.name || 'English'
    const translated = await translateWithAPI(toTranslate, langName)
    translatedQuestion.value = translated[0] || src.question
    const tOpts = translated.slice(1)
    const shuffled = shuffle(tOpts.map((t, i) => ({ t, isCorrect: i === 0 })))
    displayedOptions.value = shuffled.map(x => x.t)
    translatedCorrect.value = shuffled.find(x => x.isCorrect)?.t || translated[1]
    isTranslating.value = false
  }
}

function answerClass(option) {
  if (!answered.value) return ''
  if (option === translatedCorrect.value) return 'ans-correct'
  if (option === selectedOption.value) return 'ans-wrong'
  return 'ans-dim'
}

function selectAnswer(option) {
  if (answered.value) return
  selectedOption.value = option
  answered.value = true
  isCorrect.value = option === translatedCorrect.value
  pipResults.value[currentIndex.value] = isCorrect.value
  if (isCorrect.value) {
    score.value++
  } else {
    // Show challenge modal on wrong answer
    setTimeout(() => { showWrongModal.value = true }, 800)
  }
}

async function nextQuestion() {
  if (currentIndex.value < roundQuestions.value.length - 1) {
    currentIndex.value++
    await loadQuestion()
  } else {
    phase.value = 'result'
  }
}

function returnToMap() {
  phase.value = 'selection'
  buildCardDeck()
}

function goToSelection() {
  phase.value = 'selection'
  buildCardDeck()
}

async function restartSame() {
  await startQuiz()
}

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
    'Australija':     '🦘'
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

// ─── LANG CHANGE IN QUIZ ──────────────────────────────────────────────────────
async function changeLang(code) {
  currentLang.value = code
  if (phase.value === 'quiz') await loadQuestion()
}

// ─── CHALLENGES ───────────────────────────────────────────────────────────────
const allChallenges = [
  { emoji: '🏋️', text: 'Uradi 10 čučnjeva!' },
  { emoji: '🎤', text: 'Otpevaj prvih 15 sekundi omiljene pesme!' },
  { emoji: '😂', text: 'Ispričaj vic koji znaš — svi moraju da se nasmiju!' },
  { emoji: '🙌', text: 'Udeli kompliment osobi sa tvoje desne strane.' },
  { emoji: '🤸', text: 'Uradi 10 skokova s raširenim rukama i nogama!' },
  { emoji: '🦁', text: 'Imitiraj neku životinju — ostali moraju da pogode koja je!' },
  { emoji: '😜', text: 'Napravi najsmiješniju grimasu i drži je 5 sekundi!' },
  { emoji: '💃', text: 'Pleši 30 sekundi bez muzike!' },
  { emoji: '🤖', text: 'Hodaj kao robot po sobi 15 sekundi!' },
  { emoji: '👏', text: 'Zareci se da ćeš učiti geografiju — reci to naglas!' },
  { emoji: '🧘', text: 'Ostani u položaju drveta (na jednoj nozi) 10 sekundi!' },
  { emoji: '🎭', text: 'Odglumi da si poznati glumac — reci nešto dramatično!' },
  { emoji: '👋', text: 'Pozdravi svakog igrača rukicom i reci im nešto lijepo!' },
  { emoji: '🔄', text: 'Reci abecedu naglas što brže možeš!' },
  { emoji: '🏃', text: 'Trči u mestu 20 sekundi što brže možeš!' },
  { emoji: '😁', text: 'Nasmij nekog igrača bez pričanja — samo mimikom!' },
  { emoji: '🤝', text: 'Stisnuti rukom i čestitaj susjedu za hrabrost!' },
  { emoji: '🌟', text: 'Reci 3 stvari koje te čine posebnim!' },
  { emoji: '🐸', text: 'Skači kao žaba 5 puta po sobi!' },
  { emoji: '🧩', text: 'Reci tri naziva kontinenta bez gledanja u ekran!' },
  { emoji: '🎯', text: 'Baci zamišljenu loptu i odigraj gol u vazduhu!' },
  { emoji: '🤣', text: 'Pričaj 20 sekundi kao da si robot — bez emocija!' },
  { emoji: '🌍', text: 'Imenuj 5 zemalja za 10 sekundi!' },
  { emoji: '🦅', text: 'Razmahi rukama kao ptica i leti po sobi 10 sekundi!' },
  { emoji: '💪', text: 'Uradi 5 sklekova — ili pokušaj!' },
  { emoji: '🎪', text: 'Izvedi cirkuski trik — bilo koji koji znaš!' },
  { emoji: '🙃', text: 'Reci kompliment sebi naglas, pred svima!' },
  { emoji: '🏄', text: 'Imitiraj da jahaš talase 10 sekundi!' },
  { emoji: '🎵', text: 'Napravi ritam pljeskajem i neka te ostali prate!' },
  { emoji: '🤔', text: 'Reci glavne gradove 3 države koje ti padnu na pamet!' },
  { emoji: '🐧', text: 'Hodaj kao pingvin do zida i nazad!' },
  { emoji: '🌈', text: 'Naboj 7 boja duge za 5 sekundi!' },
  { emoji: '🏆', text: 'Napravi pobjednički ples i proglasi se šampijonom!' },
  { emoji: '🤸‍♂️', text: 'Dodirni prste na nogama bez savijanja koljena — 3 puta!' },
  { emoji: '👀', text: 'Zatvor oči i uhvati imaginarni balon iz vazduha!' },
  { emoji: '🎬', text: 'Reci rečenicu iz svog omiljenog filma!' },
  { emoji: '🌊', text: 'Pravi zvuk talasa ustima 15 sekundi!' },
  { emoji: '🦊', text: 'Pričaj kao lisica — izmisli šta bi lisica rekla geografu!' },
  { emoji: '🤲', text: 'Drži dlani zajedno i stani na prste 10 sekundi!' },
  { emoji: '🎃', text: 'Napravi najstrašniji izraz lica koji možeš!' },
  { emoji: '🚀', text: 'Odbroji od 10 do 1 i odigraj lansiranje rakete!' },
  { emoji: '🐍', text: 'Puzi po podu kao zmija do suprotnog zida i nazad!' },
  { emoji: '🎉', text: 'Pravi zvuke slavlja — "HOORAY" 5 puta naglas!' },
  { emoji: '🧠', text: 'Imenuj 3 reke i 3 planine bilo gdje u svetu!' },
  { emoji: '🦴', text: 'Budi statua 10 sekundi — ni treptaj!' },
  { emoji: '👃', text: 'Zatvori oči i pokušaj da dotakneš nos malim prstom 3 puta!' },
  { emoji: '🌺', text: 'Zamišljaj da si cvijet koji cvjeta — napravi tu scenu!' },
  { emoji: '🎸', text: 'Sviraj zamišljenu gitaru 15 sekundi!' },
  { emoji: '🦒', text: 'Hodaj kao žirafa — teret na glavi zamišljaj!' },
  { emoji: '🌙', text: 'Recituj nešto što znaš napamet — pjesmu, izreku, reklamu!' },
  { emoji: '🤡', text: 'Napravi balon od imaginarnih materijala i "napuhaj" ga!' },
  { emoji: '🐻', text: 'Imitiraj medvjeda koji traži med 10 sekundi!' },
  { emoji: '🎲', text: 'Smisli i reci šalu o geografiji!' },
  { emoji: '🌵', text: 'Stoj nepomično kao kaktus — 15 sekundi!' },
  { emoji: '🦋', text: 'Leptirasto mahaj rukama dok hodaš po sobi!' },
  { emoji: '🎓', text: 'Drži zamišljeni govor kao predsjednik jedne minute!' },
  { emoji: '🌞', text: 'Osmijeh što širi možeš — i drži ga 10 sekundi!' },
  { emoji: '🦘', text: 'Skači kao kengur 8 puta kroz sobu!' },
  { emoji: '🧲', text: 'Imitiraj magnet — privlači ljude gestama!' },
  { emoji: '🍕', text: 'Napravi zamišljenu picu i ponudi je svim igračima!' },
]

const showWrongModal = ref(false)
const showChallengeCard = ref(false)
const currentChallenge = ref({ emoji: '', text: '' })
const usedChallengeIndices = ref([])

function pickChallenge() {
  const available = allChallenges
    .map((_, i) => i)
    .filter(i => !usedChallengeIndices.value.includes(i))

  if (available.length === 0) {
    // Reset if all used
    usedChallengeIndices.value = []
    return pickChallenge()
  }

  const randIdx = available[Math.floor(Math.random() * available.length)]
  usedChallengeIndices.value.push(randIdx)
  currentChallenge.value = allChallenges[randIdx]
}

function openChallenge() {
  pickChallenge()
  showWrongModal.value = false
  showChallengeCard.value = true
}

function endGame() {
  showWrongModal.value = false
  showChallengeCard.value = false
  phase.value = 'selection'
  buildCardDeck()
}

function challengeDone() {
  showChallengeCard.value = false
  nextQuestion()
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
onMounted(() => {
  buildCardDeck()
})
</script>

<style>
/* ─── FONTS ─── */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

/* ─── LIGHT (DEFAULT) ─── */
:root, [data-theme="light"] {
  --bg:              #f8f9fc;
  --bg-surface:      #ffffff;
  --bg-elevated:     #ffffff;
  --bg-glass:        rgba(255,255,255,0.85);
  --text:            #374151;
  --text-strong:     #0f172a;
  --text-muted:      #94a3b8;
  --border:          rgba(0,0,0,0.07);
  --border-med:      rgba(0,0,0,0.13);
  --shadow-xs:       0 1px 3px rgba(0,0,0,0.06);
  --shadow-sm:       0 2px 8px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05);
  --shadow-md:       0 8px 32px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.05);
  --shadow-lg:       0 24px 64px rgba(0,0,0,0.10), 0 8px 20px rgba(0,0,0,0.06);
  --card-back:       #18181b;
  --card-back-border:rgba(212,160,23,0.5);
  --gold:            #c9901a;
  --gold-dim:        rgba(201,144,26,0.09);
  --gold-border:     rgba(201,144,26,0.28);
  --gold-glow:       rgba(201,144,26,0.35);
  --correct:         #16a34a;
  --correct-bg:      rgba(22,163,74,0.08);
  --correct-border:  rgba(22,163,74,0.22);
  --wrong:           #dc2626;
  --wrong-bg:        rgba(220,38,38,0.08);
  --wrong-border:    rgba(220,38,38,0.22);
  --header-bg:       rgba(248,249,252,0.92);
  --header-border:   rgba(0,0,0,0.07);
  --mesh-color:      rgba(0,0,0,0.035);
  --glow1:           rgba(201,144,26,0.06);
  --glow2:           rgba(59,130,246,0.05);
  --glow3:           rgba(16,185,129,0.04);
}

/* ─── DARK ─── */
[data-theme="dark"] {
  --bg:              #070d1a;
  --bg-surface:      #0f1929;
  --bg-elevated:     #162032;
  --bg-glass:        rgba(15,25,41,0.90);
  --text:            #b8c5d9;
  --text-strong:     #e8f0fc;
  --text-muted:      #5a7398;
  --border:          rgba(232,240,252,0.07);
  --border-med:      rgba(232,240,252,0.13);
  --shadow-xs:       0 1px 3px rgba(0,0,0,0.4);
  --shadow-sm:       0 2px 8px rgba(0,0,0,0.4);
  --shadow-md:       0 8px 32px rgba(0,0,0,0.55);
  --shadow-lg:       0 24px 64px rgba(0,0,0,0.65), 0 8px 20px rgba(0,0,0,0.4);
  --card-back:       #0e1a2e;
  --card-back-border:rgba(245,200,66,0.4);
  --gold:            #f5c842;
  --gold-dim:        rgba(245,200,66,0.10);
  --gold-border:     rgba(245,200,66,0.28);
  --gold-glow:       rgba(245,200,66,0.45);
  --correct:         #3fb950;
  --correct-bg:      rgba(63,185,80,0.12);
  --correct-border:  rgba(63,185,80,0.3);
  --wrong:           #f85149;
  --wrong-bg:        rgba(248,81,73,0.12);
  --wrong-border:    rgba(248,81,73,0.3);
  --header-bg:       rgba(7,13,26,0.92);
  --header-border:   rgba(232,240,252,0.08);
  --mesh-color:      rgba(232,240,252,0.025);
  --glow1:           rgba(245,200,66,0.07);
  --glow2:           rgba(30,90,200,0.07);
  --glow3:           rgba(20,160,120,0.05);
}

/* ─── RESET ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, sans-serif;
  min-height: 100dvh;
  overflow-x: hidden;
  transition: background 0.4s ease, color 0.4s ease;
}

/* ─── ROOT ─── */
#cm-root {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* ─── BACKGROUND ─── */
.bg-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.bg-mesh {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--mesh-color) 1px, transparent 1px);
  background-size: 24px 24px;
}
.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
}
.g1 { width: 800px; height: 800px; background: radial-gradient(circle, var(--glow1), transparent 65%); top: -300px; left: -300px; }
.g2 { width: 700px; height: 700px; background: radial-gradient(circle, var(--glow2), transparent 65%); bottom: -200px; right: -200px; }
.g3 { width: 500px; height: 500px; background: radial-gradient(circle, var(--glow3), transparent 65%); top: 40%; left: 50%; transform: translateX(-50%); }

/* ─── THEME BUTTON ─── */
.theme-btn {
  position: fixed;
  top: 16px; right: 16px;
  z-index: 300;
  width: 44px; height: 44px;
  border-radius: 50%;
  border: 1.5px solid var(--border-med);
  background: var(--bg-elevated);
  color: var(--text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  transition: all 0.25s ease;
}
.theme-btn svg { width: 18px; height: 18px; }
.theme-btn:hover {
  transform: scale(1.1) rotate(15deg);
  border-color: var(--gold);
  color: var(--gold);
  box-shadow: 0 0 0 3px var(--gold-dim), var(--shadow-sm);
}

/* ─── PAGE TRANSITIONS ─── */
.page-enter-active, .page-leave-active { transition: opacity 0.45s ease, transform 0.45s ease; position: absolute; width: 100%; }
.page-enter-from { opacity: 0; transform: translateY(20px); }
.page-leave-to   { opacity: 0; transform: translateY(-20px); }

/* ─────────────────────────────────────
   START SCREEN
───────────────────────────────────── */
.start-root {
  position: relative;
  z-index: 10;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 80px;
  gap: 0;
}

/* Hero */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 80px 0 48px;
  transition: all 0.55s cubic-bezier(0.2,0.8,0.3,1);
}
.hero.hero-shrunk {
  padding: 32px 0 24px;
  gap: 10px;
}

/* Logo Orb */
.logo-orb {
  width: 110px; height: 110px;
  color: var(--gold);
  transition: all 0.55s cubic-bezier(0.2,0.8,0.3,1);
  animation: orb-float 5s ease-in-out infinite;
  filter: drop-shadow(0 8px 24px var(--gold-glow));
}
.logo-orb.orb-sm {
  width: 60px; height: 60px;
  animation: none;
  filter: drop-shadow(0 4px 12px var(--gold-glow));
}
@keyframes orb-float {
  0%,100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-10px) rotate(3deg); }
}
.globe-svg { width: 100%; height: 100%; }

/* Wordmark */
.logo-words {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: all 0.55s ease;
}
.logo-words.words-sm { gap: 4px; }
.cm-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(32px, 7vw, 76px);
  font-weight: 700;
  color: var(--text-strong);
  letter-spacing: -1.5px;
  line-height: 1;
  background: linear-gradient(135deg, var(--text-strong) 0%, var(--gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: font-size 0.55s ease;
}
.logo-words.words-sm .cm-title {
  font-size: clamp(22px, 4vw, 36px);
  letter-spacing: -0.5px;
}
.cm-tagline {
  font-size: clamp(13px, 2vw, 16px);
  color: var(--text-muted);
  font-weight: 400;
  letter-spacing: 0.2px;
  text-align: center;
  max-width: 380px;
}

/* Fade down transition for tagline */
.fade-down-enter-active, .fade-down-leave-active { transition: opacity 0.35s ease, transform 0.35s ease; }
.fade-down-enter-from { opacity: 0; transform: translateY(-8px); }
.fade-down-leave-to   { opacity: 0; transform: translateY(8px); }

/* START button */
.btn-launch {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 48px;
  background: linear-gradient(135deg, var(--gold), #e6a820);
  border: none;
  border-radius: 100px;
  color: #000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  box-shadow: 0 6px 30px var(--gold-glow), 0 2px 8px rgba(0,0,0,0.15);
  transition: all 0.3s cubic-bezier(0.2,0.8,0.3,1);
  animation: launch-pulse 3s ease-in-out infinite;
}
@keyframes launch-pulse {
  0%,100% { box-shadow: 0 6px 30px var(--gold-glow), 0 2px 8px rgba(0,0,0,0.15); }
  50%      { box-shadow: 0 8px 40px var(--gold-glow), 0 4px 12px rgba(0,0,0,0.2); transform: translateY(-2px); }
}
.btn-launch:hover {
  transform: translateY(-4px) scale(1.04);
  box-shadow: 0 12px 50px var(--gold-glow), 0 4px 16px rgba(0,0,0,0.2);
  animation: none;
}
.btn-launch:active { transform: scale(0.97); }
.btn-launch-text { font-size: 18px; font-weight: 700; letter-spacing: 3px; }
.btn-launch-icon { width: 22px; height: 22px; display: flex; align-items: center; }
.btn-launch-icon svg { width: 22px; height: 22px; }

/* Btn morph transition */
.btn-morph-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.btn-morph-leave-to { opacity: 0; transform: translateY(-16px) scale(0.9); }

/* Selectors Panel */
.panel-drop-enter-active { transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.2,0.8,0.3,1); }
.panel-drop-enter-from   { opacity: 0; transform: translateY(30px); }
.panel-drop-leave-active { transition: opacity 0.25s ease; }
.panel-drop-leave-to     { opacity: 0; }

.selectors-panel {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.sel-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.sel-head {
  display: flex;
  align-items: center;
  gap: 12px;
}
.sel-num {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 3px;
  padding: 3px 8px;
  border: 1px solid var(--gold-border);
  border-radius: 4px;
  background: var(--gold-dim);
}
.sel-label {
  font-family: 'Playfair Display', serif;
  font-size: clamp(17px,3vw,24px);
  font-weight: 600;
  color: var(--text-strong);
}

/* Country grid */
.country-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 7px;
}
.c-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 12px;
  background: var(--bg-surface);
  border: 1.5px solid var(--border);
  border-radius: 10px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 12.5px;
  font-weight: 500;
  color: var(--text);
  transition: all 0.2s ease;
  text-align: left;
  overflow: hidden;
}
.c-btn:hover {
  border-color: var(--border-med);
  background: var(--bg-elevated);
  transform: translateY(-1px);
  box-shadow: var(--shadow-xs);
}
.c-btn.c-active {
  border-color: var(--gold);
  background: var(--gold-dim);
  color: var(--text-strong);
  box-shadow: 0 0 0 2px var(--gold-dim);
}
.c-flag { font-size: 16px; flex-shrink: 0; }
.c-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px; }

/* Language grid */
.lang-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.l-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  background: var(--bg-surface);
  border: 1.5px solid var(--border);
  border-radius: 100px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  transition: all 0.2s ease;
}
.l-btn:hover {
  border-color: var(--border-med);
  transform: translateY(-1px);
  box-shadow: var(--shadow-xs);
}
.l-btn.l-active {
  border-color: var(--gold);
  background: var(--gold-dim);
  color: var(--text-strong);
  font-weight: 600;
}
.l-flag { font-size: 15px; }
.l-name { font-size: 13px; }

/* PLAY button */
.pop-in-enter-active { transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }
.pop-in-enter-from   { opacity: 0; transform: scale(0.7); }
.pop-in-leave-active { transition: opacity 0.2s ease; }
.pop-in-leave-to     { opacity: 0; }

.btn-play {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 52px;
  background: linear-gradient(135deg, var(--gold), #e6a820);
  border: none;
  border-radius: 100px;
  color: #000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  align-self: center;
  box-shadow: 0 6px 30px var(--gold-glow);
  transition: all 0.3s cubic-bezier(0.2,0.8,0.3,1);
}
.btn-play svg { width: 20px; height: 20px; }
.btn-play:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 12px 44px var(--gold-glow);
}
.btn-play:active { transform: scale(0.97); }

/* ─────────────────────────────────────
   SHARED: HEADER + MAIN ROOT
───────────────────────────────────── */
.main-root {
  position: relative;
  z-index: 10;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.top-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: var(--header-bg);
  border-bottom: 1px solid var(--header-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  gap: 12px;
}

.logo-mark {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-strong);
  padding: 4px;
  border-radius: 8px;
  transition: opacity 0.2s ease;
  text-decoration: none;
}
.logo-mark:hover { opacity: 0.75; }
.mark-globe { width: 32px; height: 32px; color: var(--gold); flex-shrink: 0; }
.mark-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--text-strong);
  white-space: nowrap;
}

.bar-langs {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  flex-wrap: nowrap;
  scrollbar-width: none;
  padding-right: 52px;
}
.bar-langs::-webkit-scrollbar { display: none; }
.bar-lang {
  width: 32px; height: 32px;
  border-radius: 8px;
  border: 1.5px solid transparent;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
}
.bar-lang:hover { background: var(--bg-surface); border-color: var(--border-med); }
.bar-lang.active { background: var(--gold-dim); border-color: var(--gold-border); }

/* ─────────────────────────────────────
   SELECTION SCREEN
───────────────────────────────────── */
.sel-content {
  flex: 1;
  padding: 40px 24px 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.sel-intro {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.sup-text {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  color: var(--gold);
}
.sel-heading {
  font-family: 'Playfair Display', serif;
  font-size: clamp(22px, 4vw, 38px);
  font-weight: 700;
  color: var(--text-strong);
}

/* Card grid */
.card-grid-6 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.flip-wrap {
  aspect-ratio: 2/3;
  cursor: pointer;
  perspective: 1000px;
  transition: transform 0.2s ease, opacity 0.3s ease;
}
.flip-wrap:hover:not(.locked) { transform: translateY(-4px); }
.flip-wrap.locked { opacity: 0.35; cursor: default; pointer-events: none; }

.flip-inner {
  position: relative;
  width: 100%; height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.75s cubic-bezier(0.4,0,0.2,1);
}
.flip-inner.flipped { transform: rotateY(180deg); }

.flip-face {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
}

/* Back */
.flip-back {
  background: var(--card-back);
  border: 1.5px solid var(--card-back-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: var(--shadow-md);
}
.flip-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(245,200,66,0.04) 50%, transparent 100%);
  pointer-events: none;
}
.flip-numeral {
  font-family: 'Playfair Display', serif;
  font-size: 13px;
  font-weight: 600;
  color: var(--gold);
  letter-spacing: 4px;
  opacity: 0.9;
}
.flip-globe-icon { width: 60px; height: 60px; color: rgba(255,255,255,0.25); }
.flip-hint {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.5px;
}

/* Front */
.flip-front {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: var(--shadow-md);
}
.flip-emoji { font-size: 42px; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3)); }
.flip-cname {
  font-family: 'Playfair Display', serif;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0,0,0,0.4);
  text-align: center;
  padding: 0 10px;
}
.flip-divider {
  width: 36px; height: 2px;
  background: rgba(255,255,255,0.35);
  border-radius: 1px;
}
.flip-qlabel {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.5px;
}

.sel-hint {
  font-size: 13px;
  color: var(--text-muted);
  text-align: center;
  font-style: italic;
}

/* ─────────────────────────────────────
   QUIZ SCREEN
───────────────────────────────────── */
.quiz-area {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 28px 20px 60px;
}
.quiz-card {
  width: 100%;
  max-width: 580px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

/* Band */
.quiz-band {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 22px;
}
.band-left { display: flex; align-items: center; gap: 10px; }
.band-emoji { font-size: 22px; }
.band-cname {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.35);
}
.band-counter {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.8);
  letter-spacing: 0.5px;
}

/* Progress */
.progress-rail {
  height: 3px;
  background: var(--border);
}
.progress-fill {
  height: 100%;
  background: var(--gold);
  transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
}

/* Body */
.quiz-body { padding: 28px 24px 20px; display: flex; flex-direction: column; gap: 16px; }

.q-slide-enter-active { transition: opacity 0.35s ease, transform 0.35s ease; }
.q-slide-enter-from   { opacity: 0; transform: translateX(20px); }
.q-slide-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.q-slide-leave-to     { opacity: 0; transform: translateX(-20px); }

.q-block { display: flex; flex-direction: column; gap: 20px; }

/* Loading */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 0;
}
.dots { display: flex; gap: 7px; }
.dots span {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--gold);
  animation: dot-bounce 1.2s ease-in-out infinite;
}
.dots span:nth-child(2) { animation-delay: 0.2s; }
.dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes dot-bounce {
  0%,80%,100% { transform: translateY(0); opacity: 0.4; }
  40%         { transform: translateY(-10px); opacity: 1; }
}
.loading-txt { font-size: 13px; color: var(--text-muted); font-style: italic; }

/* Question text */
.q-text {
  font-family: 'Playfair Display', serif;
  font-size: clamp(16px, 2.5vw, 20px);
  font-weight: 600;
  color: var(--text-strong);
  line-height: 1.45;
}

/* Answers */
.answers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.ans-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: var(--bg-surface);
  border: 1.5px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text);
  text-align: left;
  transition: all 0.2s ease;
  min-height: 54px;
}
.ans-btn:not(:disabled):hover {
  border-color: var(--border-med);
  background: var(--bg-elevated);
  transform: translateY(-1px);
  box-shadow: var(--shadow-xs);
}
.ans-btn:disabled { cursor: default; }

.ans-letter {
  width: 24px; height: 24px;
  border-radius: 6px;
  background: var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: all 0.2s ease;
}
.ans-text { line-height: 1.3; }

/* Answer states */
.ans-correct { background: var(--correct-bg); border-color: var(--correct-border); }
.ans-correct .ans-letter { background: var(--correct-bg); color: var(--correct); border: 1.5px solid var(--correct-border); }
.ans-wrong   { background: var(--wrong-bg);   border-color: var(--wrong-border);   }
.ans-wrong   .ans-letter { background: var(--wrong-bg);   color: var(--wrong);   border: 1.5px solid var(--wrong-border); }
.ans-dim     { opacity: 0.45; }

/* Feedback bar */
.fb-slide-enter-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fb-slide-enter-from   { opacity: 0; transform: translateY(12px); }
.fb-slide-leave-active { transition: opacity 0.2s ease; }
.fb-slide-leave-to     { opacity: 0; }

.fb-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  flex-wrap: wrap;
}
.fb-ok  { background: var(--correct-bg); border: 1px solid var(--correct-border); }
.fb-err { background: var(--wrong-bg);   border: 1px solid var(--wrong-border);   }
.fb-left { display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1; }
.fb-icon { font-size: 16px; font-weight: 700; flex-shrink: 0; }
.fb-ok  .fb-icon { color: var(--correct); }
.fb-err .fb-icon { color: var(--wrong); }
.fb-msg { font-size: 13px; font-weight: 500; color: var(--text-strong); line-height: 1.4; word-break: break-word; }

.btn-next {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  background: var(--text-strong);
  border: none;
  border-radius: 9px;
  color: var(--bg);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
}
.btn-next:hover { opacity: 0.82; transform: translateY(-1px); }

/* Pips */
.pip-row {
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 14px 22px 18px;
  flex-wrap: wrap;
}
.pip {
  height: 4px;
  flex: 1;
  max-width: 26px;
  min-width: 8px;
  border-radius: 2px;
  background: var(--border);
  border: 1px solid var(--border-med);
  transition: all 0.3s ease;
}
.pip-active { background: var(--gold); border-color: var(--gold); transform: scaleY(2); }
.pip-ok     { background: var(--correct); border-color: var(--correct-border); }
.pip-err    { background: var(--wrong); border-color: var(--wrong-border); }

/* ─────────────────────────────────────
   RESULT SCREEN
───────────────────────────────────── */
.result-area {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 20px 64px;
}
.result-card {
  width: 100%;
  max-width: 500px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  animation: result-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
}
@keyframes result-pop {
  from { opacity: 0; transform: translateY(32px) scale(0.93); }
  to   { opacity: 1; transform: none; }
}

.result-band {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 30px;
}
.result-emoji { font-size: 38px; }
.result-cname {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0,0,0,0.35);
}

.result-body {
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.result-kicker {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--gold);
}

.stars { display: flex; gap: 8px; }
.star { font-size: 30px; color: var(--border-med); transition: all 0.4s ease; }
.star.lit { color: var(--gold); filter: drop-shadow(0 0 10px rgba(245,200,66,0.55)); }

.score-disp { display: flex; align-items: baseline; gap: 5px; }
.score-big  {
  font-family: 'Playfair Display', serif;
  font-size: 76px;
  font-weight: 700;
  color: var(--text-strong);
  line-height: 1;
}
.score-sep  { font-size: 40px; color: var(--text-muted); font-weight: 300; }
.score-tot  { font-family: 'Playfair Display', serif; font-size: 40px; color: var(--text-muted); font-weight: 400; }

.score-comment {
  font-size: 14px;
  color: var(--text-muted);
  text-align: center;
  font-style: italic;
  line-height: 1.5;
}

.result-pips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  max-width: 400px;
}
.rpip {
  width: 32px; height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
}
.rpip-ok  { background: var(--correct-bg); border: 1.5px solid var(--correct-border); color: var(--correct); }
.rpip-err { background: var(--wrong-bg);   border: 1.5px solid var(--wrong-border);   color: var(--wrong); }

.result-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-back {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 24px;
  background: transparent;
  border: 1.5px solid var(--border-med);
  border-radius: 11px;
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}
.btn-back:hover { border-color: var(--gold); color: var(--gold); transform: translateY(-2px); box-shadow: var(--shadow-sm); }

.btn-restart {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 24px;
  background: var(--gold);
  border: 1.5px solid var(--gold);
  border-radius: 11px;
  color: #000;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
}
.btn-restart:hover { opacity: 0.85; transform: translateY(-2px); box-shadow: 0 6px 24px var(--gold-glow); }

/* ─── RESPONSIVE ─── */
@media (max-width: 768px) {
  .top-bar { padding: 10px 14px; }
  .sel-content { padding: 24px 14px 48px; }
  .quiz-area { padding: 16px 12px 48px; }
  .quiz-body { padding: 20px 16px 16px; }
  .result-area { padding: 20px 12px 48px; }
  .result-body { padding: 24px 18px; }
  .card-grid-6 { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
  .answers-grid { grid-template-columns: 1fr; }
  .hero { padding: 60px 0 36px; }
  .country-grid { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); }
}

/* ─────────────────────────────────────
   LOGIN SCREEN
───────────────────────────────────── */
.login-root {
  position: relative;
  z-index: 10;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
}

.login-card {
  width: 100%;
  max-width: 420px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 40px 36px;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 28px;
  animation: result-pop 0.55s cubic-bezier(0.34,1.56,0.64,1) both;
}

.login-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.login-logo .globe-svg {
  width: 56px;
  height: 56px;
  color: var(--gold);
}

.login-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 4px;
  color: var(--text-strong);
}

/* Language strip */
.login-lang-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
}

.login-lang-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 11px;
  border-radius: 20px;
  border: 1.5px solid var(--border-med);
  background: transparent;
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.login-lang-btn:hover { border-color: var(--gold); color: var(--gold); }
.login-lang-active {
  background: var(--gold-dim);
  border-color: var(--gold);
  color: var(--gold);
  font-weight: 700;
}
.login-lang-name { font-size: 11px; }

/* Fields */
.login-fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.login-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
}

.login-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-muted);
}

.login-input {
  width: 100%;
  padding: 13px 44px 13px 16px;
  border-radius: 12px;
  border: 1.5px solid var(--border-med);
  background: var(--bg-surface);
  color: var(--text-strong);
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.login-input:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px var(--gold-dim);
}
.login-input::placeholder { color: var(--text-muted); }

.login-eye {
  position: absolute;
  right: 12px;
  bottom: 10px;
  width: 28px; height: 28px;
  display: flex; align-items: center; justify-content: center;
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s;
}
.login-eye:hover { color: var(--gold); }
.login-eye svg { width: 18px; height: 18px; }

.login-error {
  font-size: 13px;
  font-weight: 600;
  color: var(--wrong);
  background: var(--wrong-bg);
  border: 1px solid var(--wrong-border);
  padding: 10px 14px;
  border-radius: 10px;
}

.btn-login {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--gold);
  border: none;
  border-radius: 13px;
  color: #000;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 4px;
}
.btn-login svg { width: 18px; height: 18px; }
.btn-login:hover { opacity: 0.85; transform: translateY(-2px); box-shadow: 0 6px 24px var(--gold-glow); }
.btn-login:active { transform: translateY(0); }

/* ─────────────────────────────────────
   WRONG ANSWER MODAL
───────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-card {
  width: 100%;
  max-width: 440px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-med);
  border-radius: 28px;
  padding: 40px 32px 36px;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.modal-icon {
  font-size: 56px;
  line-height: 1;
  animation: modal-bounce 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
}

@keyframes modal-bounce {
  from { transform: scale(0.4); opacity: 0; }
  to   { transform: scale(1);   opacity: 1; }
}

.modal-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--wrong);
  line-height: 1.3;
}

.modal-body {
  font-size: 15px;
  color: var(--text);
  line-height: 1.6;
  max-width: 340px;
}

.modal-body strong {
  color: var(--gold);
  font-weight: 700;
}

.modal-actions {
  display: flex;
  gap: 10px;
  width: 100%;
  margin-top: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-end-game {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 22px;
  background: transparent;
  border: 1.5px solid var(--wrong-border);
  border-radius: 13px;
  color: var(--wrong);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  flex: 1;
  justify-content: center;
  min-width: 130px;
}
.btn-end-game svg { width: 16px; height: 16px; }
.btn-end-game:hover { background: var(--wrong-bg); transform: translateY(-2px); }

.btn-do-challenge {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 22px;
  background: var(--gold);
  border: 1.5px solid var(--gold);
  border-radius: 13px;
  color: #000;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  flex: 1;
  justify-content: center;
  min-width: 150px;
}
.btn-do-challenge svg { width: 16px; height: 16px; }
.btn-do-challenge:hover { opacity: 0.85; transform: translateY(-2px); box-shadow: 0 6px 24px var(--gold-glow); }

/* ─────────────────────────────────────
   CHALLENGE CARD
───────────────────────────────────── */
.challenge-card {
  width: 100%;
  max-width: 420px;
  background: linear-gradient(145deg, #1a0a2e, #2d1060);
  border: 1.5px solid rgba(245,200,66,0.35);
  border-radius: 28px;
  padding: 40px 32px 36px;
  box-shadow: 0 0 60px rgba(245,200,66,0.15), var(--shadow-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
  animation: challenge-pop-in 0.55s cubic-bezier(0.34,1.56,0.64,1) both;
}

@keyframes challenge-pop-in {
  from { transform: scale(0.5) rotate(-8deg); opacity: 0; }
  to   { transform: scale(1)   rotate(0deg);  opacity: 1; }
}

.challenge-header {
  width: 100%;
}

.challenge-badge {
  display: inline-block;
  background: var(--gold);
  color: #000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  padding: 5px 14px;
  border-radius: 20px;
}

.challenge-emoji {
  font-size: 72px;
  line-height: 1;
  animation: emoji-spin 0.7s cubic-bezier(0.34,1.56,0.64,1) both 0.15s;
}

@keyframes emoji-spin {
  from { transform: scale(0.3) rotate(-30deg); opacity: 0; }
  to   { transform: scale(1)   rotate(0deg);   opacity: 1; }
}

.challenge-text {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.45;
  max-width: 320px;
}

.challenge-hint {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  font-style: italic;
}

.btn-challenge-done {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--gold);
  border: none;
  border-radius: 13px;
  color: #000;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 4px;
}
.btn-challenge-done svg { width: 18px; height: 18px; }
.btn-challenge-done:hover { opacity: 0.85; transform: translateY(-2px); box-shadow: 0 6px 24px rgba(245,200,66,0.5); }

/* Modal transitions */
.modal-fade-enter-active { transition: opacity 0.3s ease; }
.modal-fade-leave-active { transition: opacity 0.25s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }

.challenge-pop-enter-active { transition: opacity 0.35s ease; }
.challenge-pop-leave-active { transition: opacity 0.25s ease; }
.challenge-pop-enter-from, .challenge-pop-leave-to { opacity: 0; }

</style>