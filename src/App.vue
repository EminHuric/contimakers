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
                  <button class="btn-next" @click="isCorrect ? openPuzzle() : nextQuestion()">
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

    <!-- ░░ PUZZLE / SLAGALICA ░░ -->
    <Transition name="modal-fade">
      <div v-if="showPuzzleModal" class="modal-overlay puzzle-overlay">
        <div class="puzzle-card">
          <!-- Header -->
          <div class="puzzle-header">
            <span class="puzzle-badge">🧩 {{ t('puzzleLabel') }}</span>
            <span class="puzzle-continent-name">{{ isFinale ? (finaleCountry === 'gb' ? t('finaleGB') : t('finaleSerbia')) : translateContinent(activeContinent) }}</span>
          </div>

          <!-- Progress dots -->
          <div class="puzzle-progress-row">
            <span class="puzzle-progress-label">{{ t('puzzleProgress') }}</span>
            <div class="puzzle-dots">
              <div v-for="i in puzzleTotalSlots" :key="i" class="puzzle-dot"
                :class="{ placed: puzzlePlacedSlots[i-1], target: (i-1) === puzzleTargetSlot && !puzzlePlacedSlots[i-1] }">
              </div>
            </div>
          </div>

          <!-- Continent board: dynamic grid -->
          <div class="puzzle-board">
            <div class="puzzle-grid" :class="isFinale ? 'puzzle-grid-3' : 'puzzle-grid-4'">
              <div v-for="slotIdx in puzzleSlotIndices" :key="slotIdx"
                class="puzzle-cell"
                :class="{
                  'cell-placed':  puzzlePlacedSlots[slotIdx] || (slotIdx === puzzleTargetSlot && puzzleCorrect === true),
                  'cell-target':  slotIdx === puzzleTargetSlot && !puzzlePlacedSlots[slotIdx] && puzzleCorrect === null,
                  'cell-success': slotIdx === puzzleTargetSlot && puzzleCorrect === true,
                  'cell-empty':   !puzzlePlacedSlots[slotIdx] && slotIdx !== puzzleTargetSlot,
                }">
                <!-- Filled piece (already placed or just correctly placed) -->
                <img v-if="puzzlePlacedSlots[slotIdx] || (slotIdx === puzzleTargetSlot && puzzleCorrect === true)"
                  :src="getPuzzleImage(activeContinent, slotIdx)"
                  class="cell-img" />
                <!-- Target slot (empty, pulsing) -->
                <div v-else-if="slotIdx === puzzleTargetSlot" class="cell-question">
                  <div class="cell-q-mark">?</div>
                </div>
                <!-- Other empty slots (grayed outline only) -->
                <img v-else
                  :src="getPuzzleImage(activeContinent, slotIdx)"
                  class="cell-img cell-img-ghost" />
              </div>
            </div>
            <!-- Divider lines overlay -->
            <template v-if="isFinale">
              <div class="puzzle-divider-h puzzle-divider-h1"></div>
              <div class="puzzle-divider-h puzzle-divider-h2"></div>
            </template>
            <template v-else>
              <div class="puzzle-divider-h"></div>
              <div class="puzzle-divider-v"></div>
            </template>
          </div>

          <!-- Instruction -->
          <p class="puzzle-instruction">{{ t('puzzleInstruction') }}</p>

          <!-- Piece options -->
          <div class="puzzle-pieces" :class="isFinale ? 'puzzle-pieces-3' : 'puzzle-pieces-4'">
            <button v-for="pieceIdx in puzzleShuffledPieces" :key="pieceIdx"
              class="puzzle-piece-btn"
              :class="{
                'piece-selected': puzzleSelectedPiece === pieceIdx && puzzleCorrect === null,
                'piece-correct':  puzzleCorrect === true  && pieceIdx === puzzleTargetSlot,
                'piece-wrong':    puzzleCorrect === false && puzzleSelectedPiece === pieceIdx,
                'piece-reveal':   puzzleCorrect !== null  && pieceIdx === puzzleTargetSlot && puzzleSelectedPiece !== pieceIdx,
              }"
              :disabled="puzzleCorrect !== null"
              @click="selectPuzzlePiece(pieceIdx)">
              <img :src="getPuzzleImage(activeContinent, pieceIdx)" class="piece-img" />
              <span class="piece-label">{{ getPieceLabel(pieceIdx) }}</span>
            </button>
          </div>

          <!-- Feedback message -->
          <Transition name="fb-slide">
            <div v-if="puzzleCorrect !== null" class="puzzle-feedback"
              :class="puzzleCorrect ? 'pf-ok' : 'pf-err'">
              <span>{{ puzzleCorrect ? t('puzzleSuccess') : '❌ ' + t('wrongAnswer') }}</span>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>

    <!-- ░░ FINALE ░░ -->
    <Transition name="page">
      <div v-if="phase === 'finale'" class="main-root finale-root" key="finale">
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

        <div class="finale-area">
          <div class="finale-trophy-anim">🏆</div>
          <h1 class="finale-title-text">{{ t('finaleTitle') }}</h1>
          <p class="finale-subtitle-text">{{ t('finaleSubtitle') }}</p>

          <div class="finale-cards-row">
            <!-- GB Card -->
            <button class="finale-country-card" :class="{ 'finale-card-selected': finaleCountry === 'gb' }"
              @click="finaleCountry = 'gb'">
              <div class="finale-card-flag">🇬🇧</div>
              <div class="finale-card-name">{{ t('finaleGB') }}</div>
              <div v-if="finaleCountry === 'gb'" class="finale-card-check">✓</div>
            </button>

            <!-- Serbia Card -->
            <button class="finale-country-card" :class="{ 'finale-card-selected': finaleCountry === 'serbia' }"
              @click="finaleCountry = 'serbia'">
              <div class="finale-card-flag">🇷🇸</div>
              <div class="finale-card-name">{{ t('finaleSerbia') }}</div>
              <div v-if="finaleCountry === 'serbia'" class="finale-card-check">✓</div>
            </button>
          </div>

          <Transition name="pop-in">
            <button v-if="finaleCountry" class="btn-finale-start" @click="startFinaleQuiz">
              <span>{{ t('finaleStart') }}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </Transition>

          <p class="finale-notice">{{ t('finaleNotice') }}</p>
        </div>
      </div>
    </Transition>

    <!-- ░░ FINALE WINNER MODAL ░░ -->
    <Transition name="modal-fade">
      <div v-if="showFinaleWinner" class="modal-overlay finale-winner-overlay">
        <div class="finale-winner-card">
          <div class="finale-winner-trophies">🏆🏆🏆</div>
          <h2 class="finale-winner-title">{{ t('finaleWinnerTitle') }}</h2>
          <div class="finale-winner-flag">{{ finaleCountry === 'gb' ? '🇬🇧' : '🇷🇸' }}</div>
          <p class="finale-winner-country">{{ finaleCountry === 'gb' ? t('finaleGB') : t('finaleSerbia') }}</p>
          <p class="finale-winner-msg">{{ t('finaleWinnerMsg') }}</p>
          <div class="finale-winner-confetti">🎉🎊🎉🎊🎉</div>
          <button class="btn-finale-winner-back" @click="endGame">{{ t('finaleWinnerBtn') }}</button>
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

// ─── PUZZLE IMAGE PATHS (iz public/assets/) ───────────────────────────────────

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
    puzzleLabel: 'PUZZLE',
    puzzleInstruction: 'Choose the piece that fits the missing spot!',
    puzzleSuccess: 'Perfect! Piece placed! 🎉',
    pieceNW: 'Northwest', pieceNE: 'Northeast', pieceSW: 'Southwest', pieceSE: 'Southeast',
    pieceTop: 'North', pieceMid: 'Middle', pieceBot: 'South',
    puzzleProgress: 'Continent Assembly',
    finaleTitle: 'FINALE',
    finaleSubtitle: 'Choose a country to assemble!',
    finaleGB: 'Great Britain',
    finaleSerbia: 'Serbia',
    finaleStart: 'START',
    finaleNotice: 'In the finale, choose Great Britain or Serbia. The first player to complete the assembly wins!',
    finaleWinnerTitle: '🏆 WINNER! 🏆',
    finaleWinnerMsg: 'Congratulations! You assembled the country first!',
    finaleWinnerBtn: 'Back to menu',
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
    puzzleLabel: 'SLAGALICA',
    puzzleInstruction: 'Izaberi deo koji odgovara praznom mjestu!',
    puzzleSuccess: 'Tačno! Deo postavljen! 🎉',
    pieceNW: 'Sjeverozapad', pieceNE: 'Sjeveroistok', pieceSW: 'Jugozapad', pieceSE: 'Jugoistok',
    pieceTop: 'Sever', pieceMid: 'Sredina', pieceBot: 'Jug',
    puzzleProgress: 'Sklapanje kontinenta',
    finaleTitle: 'FINALE',
    finaleSubtitle: 'Izaberi zemlju za sklapanje!',
    finaleGB: 'Velika Britanija',
    finaleSerbia: 'Srbija',
    finaleStart: 'START',
    finaleNotice: 'U finalu možeš birati Veliku Britaniju ili Srbiju. Ko prvi sklopi jednu od ova dva, on je pobedio!',
    finaleWinnerTitle: '🏆 POBEDNIK! 🏆',
    finaleWinnerMsg: 'Čestitamo! Sklopi/la si zemlju pre svih!',
    finaleWinnerBtn: 'Nazad na meni',
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
    puzzleLabel: 'ПАЗЛ',
    puzzleInstruction: 'Выбери кусок, который подходит на пустое место!',
    puzzleSuccess: 'Верно! Кусок установлен! 🎉',
    pieceNW: 'Северо-запад', pieceNE: 'Северо-восток', pieceSW: 'Юго-запад', pieceSE: 'Юго-восток',
    pieceTop: 'Север', pieceMid: 'Середина', pieceBot: 'Юг',
    puzzleProgress: 'Сборка континента',
    finaleTitle: 'ФИНАЛ',
    finaleSubtitle: 'Выбери страну для сборки!',
    finaleGB: 'Великобритания',
    finaleSerbia: 'Сербия',
    finaleStart: 'СТАРТ',
    finaleNotice: 'В финале выбери Великобританию или Сербию. Кто первым соберёт пазл — победил!',
    finaleWinnerTitle: '🏆 ПОБЕДИТЕЛЬ! 🏆',
    finaleWinnerMsg: 'Поздравляем! Ты собрал страну первым!',
    finaleWinnerBtn: 'Вернуться в меню',
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
    puzzleLabel: 'BULMACA',
    puzzleInstruction: 'Boş yere uyan parçayı seç!',
    puzzleSuccess: 'Harika! Parça yerleştirildi! 🎉',
    pieceNW: 'Kuzeybatı', pieceNE: 'Kuzeydoğu', pieceSW: 'Güneybatı', pieceSE: 'Güneydoğu',
    pieceTop: 'Kuzey', pieceMid: 'Orta', pieceBot: 'Güney',
    puzzleProgress: 'Kıta Birleştirme',
    finaleTitle: 'FİNAL',
    finaleSubtitle: 'Bir ülke seç ve birleştir!',
    finaleGB: 'Büyük Britanya',
    finaleSerbia: 'Sırbistan',
    finaleStart: 'BAŞLA',
    finaleNotice: 'Finalde Büyük Britanya veya Sırbistan\'ı seçebilirsin. İlk birleştiren kazanır!',
    finaleWinnerTitle: '🏆 KAZANAN! 🏆',
    finaleWinnerMsg: 'Tebrikler! Ülkeyi ilk sen birleştirdin!',
    finaleWinnerBtn: 'Menüye dön',
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
    puzzleLabel: 'MĪKLA',
    puzzleInstruction: 'Izvēlies gabalu, kas der tukšajai vietai!',
    puzzleSuccess: 'Pareizi! Gabals novietots! 🎉',
    pieceNW: 'Ziemeļrietumi', pieceNE: 'Ziemeļaustrumi', pieceSW: 'Dienvidrietumi', pieceSE: 'Dienvidaustrumi',
    pieceTop: 'Ziemeļi', pieceMid: 'Vidus', pieceBot: 'Dienvidi',
    puzzleProgress: 'Kontinenta Saliekšana',
    finaleTitle: 'FINĀLS',
    finaleSubtitle: 'Izvēlies valsti saliekšanai!',
    finaleGB: 'Lielbritānija',
    finaleSerbia: 'Serbija',
    finaleStart: 'SĀKT',
    finaleNotice: 'Finālā izvēlies Lielbritāniju vai Serbiju. Kurš pirmais saliek — uzvar!',
    finaleWinnerTitle: '🏆 UZVARĒTĀJS! 🏆',
    finaleWinnerMsg: 'Apsveicam! Tu pirmais saliki valsti!',
    finaleWinnerBtn: 'Atpakaļ uz izvēlni',
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
  puzzlePlacedSlots.value    = [false, false, false, false]
  puzzleCorrect.value        = null
  showPuzzleModal.value      = false
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
  advanceQuestion()
}

function returnToMap()   { isFinale.value = false; finaleCountry.value = ''; showFinaleWinner.value = false; phase.value = 'selection'; buildCardDeck() }
function goToSelection() { isFinale.value = false; finaleCountry.value = ''; phase.value = 'selection'; buildCardDeck() }
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
function endGame()       { showWrongModal.value = false; showChallengeCard.value = false; showFinaleWinner.value = false; isFinale.value = false; finaleCountry.value = ''; phase.value = 'selection'; buildCardDeck() }
function challengeDone() { showChallengeCard.value = false; advanceQuestion() }

// ─── PUZZLE / SLAGALICA STATE ─────────────────────────────────────────────────
const showPuzzleModal      = ref(false)
const puzzlePlacedSlots    = ref([false, false, false, false])
const puzzleTargetSlot     = ref(0)
const puzzleShuffledPieces = ref([0, 1, 2, 3])
const puzzleSelectedPiece  = ref(null)
const puzzleCorrect        = ref(null)

// ─── PUZZLE IMAGES ───────────────────────────────────────────────────────────
// Slike se nalaze u public/assets/ folder
const puzzleImages = {
  'Europa':          ['/assets/eu1.png', '/assets/eu4.png', '/assets/eu3.png', '/assets/eu2.png'],
  'Australija':      ['/assets/au1.png', '/assets/au2.png', '/assets/au3.png', '/assets/au4.png'],
  'Afrika':          ['/assets/af1.png', '/assets/af2.png', '/assets/af3.png', '/assets/af4.png'],
  'Južna Amerika':   ['/assets/ja1.png', '/assets/ja2.png', '/assets/ja3.png', '/assets/ja4.png'],
  'Azija':           ['/assets/az1.png', '/assets/az2.png', '/assets/az3.png', '/assets/az4.png'],
  'Severna Amerika': ['/assets/sa1.png', '/assets/sa2.png', '/assets/sa3.png', '/assets/sa4.png'],
}

function getPuzzleImage(continent, slotIdx) {
  if (isFinale.value) {
    return finalePuzzleImages[finaleCountry.value]?.[slotIdx] ?? ''
  }
  return puzzleImages[continent]?.[slotIdx] ?? ''
}

// ─── FINALE PUZZLE IMAGES ─────────────────────────────────────────────────────
const finalePuzzleImages = {
  gb:      ['/assets/gb1.png', '/assets/gb2.png', '/assets/gb3.png'],
  serbia:  ['/assets/sr1.png', '/assets/sr2.png', '/assets/sr3.png'],
}

// ─── FINALE QUESTIONS ─────────────────────────────────────────────────────────
const finaleQuestionData = {
  gb: [
    { id:'gb-01', translations:{ sr:{ question:'Koji je glavni grad Velike Britanije?', correct:'London', wrong:['Mančester','Edinburg','Birmingem'] }, en:{ question:'What is the capital of Great Britain?', correct:'London', wrong:['Manchester','Edinburgh','Birmingham'] }, ru:{ question:'Какова столица Великобритании?', correct:'Лондон', wrong:['Манчестер','Эдинбург','Бирмингем'] }, tr:{ question:'Büyük Britanya\'nın başkenti nedir?', correct:'Londra', wrong:['Manchester','Edinburgh','Birmingham'] }, lv:{ question:'Kāda ir Lielbritānijas galvaspilsēta?', correct:'Londona', wrong:['Mančestra','Edinburga','Birmingema'] } } },
    { id:'gb-02', translations:{ sr:{ question:'Koja reka protiče kroz London?', correct:'Temza', wrong:['Severn','Tajn','Trent'] }, en:{ question:'Which river flows through London?', correct:'Thames', wrong:['Severn','Tyne','Trent'] }, ru:{ question:'Какая река протекает через Лондон?', correct:'Темза', wrong:['Северн','Тайн','Трент'] }, tr:{ question:'Londra\'dan hangi nehir geçer?', correct:'Thames', wrong:['Severn','Tyne','Trent'] }, lv:{ question:'Kura upe tek caur Londonu?', correct:'Temza', wrong:['Severna','Tainas','Trenta'] } } },
    { id:'gb-03', translations:{ sr:{ question:'Koji je najviši vrh u Velikoj Britaniji?', correct:'Ben Nevis', wrong:['Skofell Pajk','Snovdon','Ben Makdui'] }, en:{ question:'What is the highest peak in Great Britain?', correct:'Ben Nevis', wrong:['Scafell Pike','Snowdon','Ben Macdui'] }, ru:{ question:'Какова высшая точка Великобритании?', correct:'Бен-Невис', wrong:['Скофелл Пайк','Сноудон','Бен-Макдуи'] }, tr:{ question:'Büyük Britanya\'nın en yüksek tepesi hangisidir?', correct:'Ben Nevis', wrong:['Scafell Pike','Snowdon','Ben Macdui'] }, lv:{ question:'Kāds ir augstākais kalns Lielbritānijā?', correct:'Ben Neviss', wrong:['Skofela Pike','Snoudons','Ben Makdui'] } } },
    { id:'gb-04', translations:{ sr:{ question:'Koje more se nalazi istočno od Velike Britanije?', correct:'Severno more', wrong:['Irsko more','Keltsko more','Norveško more'] }, en:{ question:'Which sea lies to the east of Great Britain?', correct:'North Sea', wrong:['Irish Sea','Celtic Sea','Norwegian Sea'] }, ru:{ question:'Какое море находится к востоку от Великобритании?', correct:'Северное море', wrong:['Ирландское море','Кельтское море','Норвежское море'] }, tr:{ question:'Büyük Britanya\'nın doğusunda hangi deniz yer alır?', correct:'Kuzey Denizi', wrong:['İrlanda Denizi','Kelt Denizi','Norveç Denizi'] }, lv:{ question:'Kura jūra atrodas uz austrumiem no Lielbritānijas?', correct:'Ziemeļjūra', wrong:['Īrijas jūra','Ķeltu jūra','Norvēģijas jūra'] } } },
    { id:'gb-05', translations:{ sr:{ question:'Koji okean zapljuskuje zapadne obale Velike Britanije?', correct:'Atlantski okean', wrong:['Tihi okean','Indijski okean','Arktički okean'] }, en:{ question:'Which ocean washes the western shores of Great Britain?', correct:'Atlantic Ocean', wrong:['Pacific Ocean','Indian Ocean','Arctic Ocean'] }, ru:{ question:'Какой океан омывает западные берега Великобритании?', correct:'Атлантический океан', wrong:['Тихий океан','Индийский океан','Арктический океан'] }, tr:{ question:'Hangi okyanus Büyük Britanya\'nın batı kıyılarını yıkıyor?', correct:'Atlantik Okyanusu', wrong:['Pasifik Okyanusu','Hint Okyanusu','Arktik Okyanusu'] }, lv:{ question:'Kurš okeāns skalo Lielbritānijas rietumu krastus?', correct:'Atlantijas okeāns', wrong:['Klusais okeāns','Indijas okeāns','Arktiskais okeāns'] } } },
    { id:'gb-06', translations:{ sr:{ question:'Koji je drugi najveći grad u Velikoj Britaniji?', correct:'Birmingem', wrong:['Mančester','Lids','Glazgov'] }, en:{ question:'What is the second largest city in Great Britain?', correct:'Birmingham', wrong:['Manchester','Leeds','Glasgow'] }, ru:{ question:'Какой второй по величине город Великобритании?', correct:'Бирмингем', wrong:['Манчестер','Лидс','Глазго'] }, tr:{ question:'Büyük Britanya\'nın ikinci büyük şehri hangisidir?', correct:'Birmingham', wrong:['Manchester','Leeds','Glasgow'] }, lv:{ question:'Kāda ir Lielbritānijas otrā lielākā pilsēta?', correct:'Birmingema', wrong:['Mančestra','Lidsa','Glāzgova'] } } },
    { id:'gb-07', translations:{ sr:{ question:'Kako se zove planinski lanac u severnoj Engleskoj?', correct:'Penini', wrong:['Kambrijski planinski','Čevijot','Dartmur'] }, en:{ question:'What is the mountain range in northern England called?', correct:'The Pennines', wrong:['Cambrian Mountains','Cheviot Hills','Dartmoor'] }, ru:{ question:'Как называется горный хребет в северной Англии?', correct:'Пеннины', wrong:['Камбрийские горы','Чевиот','Дартмур'] }, tr:{ question:'Kuzey İngiltere\'deki dağ sırası nasıl adlandırılır?', correct:'Pennines', wrong:['Cambrian Dağları','Cheviot Tepeleri','Dartmoor'] }, lv:{ question:'Kā sauc kalnu grēdu ziemeļu Anglijā?', correct:'Penīni', wrong:['Kambrijas kalni','Čeviotu pakalni','Dartmūra'] } } },
    { id:'gb-08', translations:{ sr:{ question:'Koji je najveće jezero u Velikoj Britaniji po površini?', correct:'Lok Lomond', wrong:['Lok Nes','Lok Tah','Vejvoterskej'] }, en:{ question:'Which is the largest lake in Great Britain by surface area?', correct:'Loch Lomond', wrong:['Loch Ness','Loch Tay','Lake Windermere'] }, ru:{ question:'Какое озеро является крупнейшим в Великобритании по площади?', correct:'Лох-Ломонд', wrong:['Лох-Несс','Лох-Тэй','Уиндермир'] }, tr:{ question:'Yüzey alanına göre Büyük Britanya\'nın en büyük gölü hangisidir?', correct:'Loch Lomond', wrong:['Loch Ness','Loch Tay','Windermere Gölü'] }, lv:{ question:'Kāds ir lielākais ezers Lielbritānijā pēc platības?', correct:'Loh Lomonds', wrong:['Loh Nesa','Loh Teja','Vindermīra'] } } },
    { id:'gb-09', translations:{ sr:{ question:'Koji kanal razdvaja Veliku Britaniju od Francuske?', correct:'La Manš', wrong:['Kanal Kale','Moreuz Gibraltar','Skagerrak'] }, en:{ question:'Which channel separates Great Britain from France?', correct:'English Channel', wrong:['Strait of Calais','Strait of Gibraltar','Skagerrak'] }, ru:{ question:'Какой пролив отделяет Великобританию от Франции?', correct:'Ла-Манш', wrong:['Па-де-Кале','Гибралтарский пролив','Скагеррак'] }, tr:{ question:'Hangi kanal Büyük Britanya\'yı Fransa\'dan ayırır?', correct:'İngiliz Kanalı', wrong:['Kale Boğazı','Cebelitarık Boğazı','Skagerrak'] }, lv:{ question:'Kurš kanāls šķir Lielbritāniju no Francijas?', correct:'Lamanšs', wrong:['Kalē šaurums','Gibraltāra šaurums','Skagerraks'] } } },
    { id:'gb-10', translations:{ sr:{ question:'Koji je glavni grad Škotske?', correct:'Edinburg', wrong:['Glazgov','Aberdin','Dandee'] }, en:{ question:'What is the capital of Scotland?', correct:'Edinburgh', wrong:['Glasgow','Aberdeen','Dundee'] }, ru:{ question:'Какова столица Шотландии?', correct:'Эдинбург', wrong:['Глазго','Абердин','Данди'] }, tr:{ question:'İskoçya\'nın başkenti nedir?', correct:'Edinburgh', wrong:['Glasgow','Aberdeen','Dundee'] }, lv:{ question:'Kāda ir Skotijas galvaspilsēta?', correct:'Edinburga', wrong:['Glāzgova','Aberdīna','Dandī'] } } },
    { id:'gb-11', translations:{ sr:{ question:'Koji je glavni grad Velsa?', correct:'Kardif', wrong:['Svonsi','Njuport','Reksem'] }, en:{ question:'What is the capital of Wales?', correct:'Cardiff', wrong:['Swansea','Newport','Wrexham'] }, ru:{ question:'Какова столица Уэльса?', correct:'Кардифф', wrong:['Суонси','Ньюпорт','Рексем'] }, tr:{ question:'Galler\'in başkenti nedir?', correct:'Cardiff', wrong:['Swansea','Newport','Wrexham'] }, lv:{ question:'Kāda ir Velsas galvaspilsēta?', correct:'Kārdifa', wrong:['Svonsija','Njūporta','Rekshema'] } } },
    { id:'gb-12', translations:{ sr:{ question:'Koje ostrvo zapadno od VB je deo Ujedinjenog Kraljevstva?', correct:'Severna Irska', wrong:['Ostrvo Man','Džerzi','Gernzi'] }, en:{ question:'Which island to the west of GB is part of the UK?', correct:'Northern Ireland', wrong:['Isle of Man','Jersey','Guernsey'] }, ru:{ question:'Какой остров к западу от Великобритании является частью Соединённого Королевства?', correct:'Северная Ирландия', wrong:['Остров Мэн','Джерси','Гернси'] }, tr:{ question:'Büyük Britanya\'nın batısındaki hangi ada Birleşik Krallık\'ın parçasıdır?', correct:'Kuzey İrlanda', wrong:['Man Adası','Jersey','Guernsey'] }, lv:{ question:'Kura sala uz rietumiem no Lielbritānijas ir daļa no Apvienotās Karalistes?', correct:'Ziemeļīrija', wrong:['Menas sala','Džērsija','Gērnsija'] } } },
    { id:'gb-13', translations:{ sr:{ question:'Kako se zove poznata oblast jezera u severozapadnoj Engleskoj?', correct:'Lejk Distrikt', wrong:['Jorkšir Dejls','Dartmur','Egzur'] }, en:{ question:'What is the famous lake district in northwest England called?', correct:'Lake District', wrong:['Yorkshire Dales','Dartmoor','Exmoor'] }, ru:{ question:'Как называется знаменитый Озёрный край в северо-западной Англии?', correct:'Озёрный Край', wrong:['Йоркширские Дейлс','Дартмур','Эксмур'] }, tr:{ question:'Kuzeybatı İngiltere\'deki ünlü göl bölgesi nasıl adlandırılır?', correct:'Lake District', wrong:['Yorkshire Dales','Dartmoor','Exmoor'] }, lv:{ question:'Kā sauc slaveno ezeru rajonu ziemeļrietumu Anglijā?', correct:'Ezeru rajons', wrong:['Jorkšīras ielejās','Dartmūra','Eksmūra'] } } },
    { id:'gb-14', translations:{ sr:{ question:'Koja reka protiče kroz grad Mančester?', correct:'Irvel', wrong:['Mersi','Ribel','Dizveli'] }, en:{ question:'Which river flows through Manchester?', correct:'River Irwell', wrong:['Mersey','Ribble','Weaver'] }, ru:{ question:'Какая река протекает через Манчестер?', correct:'Ирвел', wrong:['Мерси','Риббл','Уивер'] }, tr:{ question:'Manchester\'dan hangi nehir akar?', correct:'Irwell Nehri', wrong:['Mersey','Ribble','Weaver'] }, lv:{ question:'Kura upe tek caur Mančestru?', correct:'Irvela upe', wrong:['Mersija','Ribla','Vīvera'] } } },
    { id:'gb-15', translations:{ sr:{ question:'Kako se zove more između Velike Britanije i Irske?', correct:'Irsko more', wrong:['Keltsko more','Severno more','Hebridsko more'] }, en:{ question:'What is the sea between Great Britain and Ireland called?', correct:'Irish Sea', wrong:['Celtic Sea','North Sea','Hebridean Sea'] }, ru:{ question:'Как называется море между Великобританией и Ирландией?', correct:'Ирландское море', wrong:['Кельтское море','Северное море','Гебридское море'] }, tr:{ question:'Büyük Britanya ile İrlanda arasındaki denize ne denir?', correct:'İrlanda Denizi', wrong:['Kelt Denizi','Kuzey Denizi','Hebridal Denizi'] }, lv:{ question:'Kā sauc jūru starp Lielbritāniju un Īriju?', correct:'Īrijas jūra', wrong:['Ķeltu jūra','Ziemeļjūra','Hebrīdu jūra'] } } },
    { id:'gb-16', translations:{ sr:{ question:'Koji je najveći grad u Škotskoj?', correct:'Glazgov', wrong:['Edinburg','Aberdin','Dandee'] }, en:{ question:'What is the largest city in Scotland?', correct:'Glasgow', wrong:['Edinburgh','Aberdeen','Dundee'] }, ru:{ question:'Какой крупнейший город Шотландии?', correct:'Глазго', wrong:['Эдинбург','Абердин','Данди'] }, tr:{ question:'İskoçya\'nın en büyük şehri hangisidir?', correct:'Glasgow', wrong:['Edinburgh','Aberdeen','Dundee'] }, lv:{ question:'Kāda ir lielākā pilsēta Skotijā?', correct:'Glāzgova', wrong:['Edinburga','Aberdīna','Dandī'] } } },
    { id:'gb-17', translations:{ sr:{ question:'Kako se zove poznata litica na jugu Engleske?', correct:'Seven Sisters', wrong:['Bijele litice Dovera','Beachy Head','Old Harry'] }, en:{ question:'What is the famous cliff on the south coast of England called?', correct:'Seven Sisters', wrong:['White Cliffs of Dover','Beachy Head','Old Harry Rocks'] }, ru:{ question:'Как называются знаменитые скалы на юге Англии?', correct:'Семь сестёр', wrong:['Белые скалы Дувра','Бичи-Хед','Олд-Гарри'] }, tr:{ question:'Güney İngiltere\'deki ünlü kayalık nasıl adlandırılır?', correct:'Seven Sisters', wrong:['Dover Beyaz Kayalıkları','Beachy Head','Old Harry Rocks'] }, lv:{ question:'Kā sauc slavenās klintis Anglijas dienvidu piekrastē?', correct:'Septiņas māsas', wrong:['Duvras baltās klintis','Bīčī Head','Vecais Harijs'] } } },
    { id:'gb-18', translations:{ sr:{ question:'Koji je najduži rečni tok u Velikoj Britaniji?', correct:'Severn', wrong:['Temza','Trent','Mersi'] }, en:{ question:'Which is the longest river in Great Britain?', correct:'River Severn', wrong:['Thames','Trent','Mersey'] }, ru:{ question:'Какая река является самой длинной в Великобритании?', correct:'Северн', wrong:['Темза','Трент','Мерси'] }, tr:{ question:'Büyük Britanya\'nın en uzun nehri hangisidir?', correct:'Severn Nehri', wrong:['Thames','Trent','Mersey'] }, lv:{ question:'Kura ir garākā upe Lielbritānijā?', correct:'Severna upe', wrong:['Temza','Trenta','Mersija'] } } },
    { id:'gb-19', translations:{ sr:{ question:'Kako se zove kraljevska rezidencija u Londonu?', correct:'Bakingemska palata', wrong:['Vindzorski dvorac','Sent Džejms palata','Kju palata'] }, en:{ question:'What is the royal residence in London called?', correct:'Buckingham Palace', wrong:['Windsor Castle','St James\'s Palace','Kew Palace'] }, ru:{ question:'Как называется королевская резиденция в Лондоне?', correct:'Букингемский дворец', wrong:['Виндзорский замок','Сент-Джеймсский дворец','Кью Палас'] }, tr:{ question:'Londra\'daki kraliyet rezidansı nasıl adlandırılır?', correct:'Buckingham Sarayı', wrong:['Windsor Şatosu','St. James Sarayı','Kew Sarayı'] }, lv:{ question:'Kā sauc karalisko rezidenci Londonā?', correct:'Bekingemas pils', wrong:['Vindzoras pils','Senktdžeimsa pils','Kju pils'] } } },
    { id:'gb-20', translations:{ sr:{ question:'Koja valuta se koristi u Velikoj Britaniji?', correct:'Britanska funta', wrong:['Evro','Dolar','Norveška kruna'] }, en:{ question:'What currency is used in Great Britain?', correct:'British Pound', wrong:['Euro','Dollar','Norwegian Krone'] }, ru:{ question:'Какая валюта используется в Великобритании?', correct:'Британский фунт', wrong:['Евро','Доллар','Норвежская крона'] }, tr:{ question:'Büyük Britanya\'da hangi para birimi kullanılır?', correct:'İngiliz Sterlini', wrong:['Euro','Dolar','Norveç Kronu'] }, lv:{ question:'Kādu valūtu izmanto Lielbritānijā?', correct:'Britu mārciņa', wrong:['Eiro','Dolārs','Norvēģijas krona'] } } },
  ],
  serbia: [
    { id:'sr-01', translations:{ sr:{ question:'Koji je najveći nacionalni park u Srbiji?', correct:'Đerdap', wrong:['Kopaonik','Tara','Fruška gora'] }, en:{ question:'What is the largest national park in Serbia?', correct:'Đerdap (Iron Gate)', wrong:['Kopaonik','Tara','Fruška Gora'] }, ru:{ question:'Какой крупнейший национальный парк в Сербии?', correct:'Джердап', wrong:['Копаоник','Тара','Фрушка Гора'] }, tr:{ question:'Sırbistan\'ın en büyük milli parkı hangisidir?', correct:'Đerdap', wrong:['Kopaonik','Tara','Fruška Gora'] }, lv:{ question:'Kāds ir lielākais nacionālais parks Serbijā?', correct:'Đerdaps', wrong:['Kopaniks','Tara','Frushka Gora'] } } },
    { id:'sr-02', translations:{ sr:{ question:'Kako se zove najveća peščara u Srbiji?', correct:'Deliblatska peščara', wrong:['Subotička peščara','Alibunarska peščara','Ramska peščara'] }, en:{ question:'What is the largest sand desert in Serbia called?', correct:'Deliblato Sands', wrong:['Subotica Sands','Alibunar Sands','Rama Sands'] }, ru:{ question:'Как называется крупнейшая песчаная пустыня Сербии?', correct:'Делиблатская пещера', wrong:['Суботицкие пески','Алибунарская пустыня','Рамская пустыня'] }, tr:{ question:'Sırbistan\'ın en büyük kum çölüne ne denir?', correct:'Deliblato Kumları', wrong:['Subotica Kumları','Alibunar Kumları','Rama Kumları'] }, lv:{ question:'Kā sauc lielāko smilšu tuksnesi Serbijā?', correct:'Deliblato smiltis', wrong:['Suboticas smiltis','Alibunaras smiltis','Ramas smiltis'] } } },
    { id:'sr-03', translations:{ sr:{ question:'Kako se zove poznata tvrđava na ušću Save u Dunav?', correct:'Beogradska tvrđava (Kalemegdan)', wrong:['Petrovaradinska tvrđava','Smederevska tvrđava','Golubačka tvrđava'] }, en:{ question:'What is the famous fortress at the confluence of the Sava and Danube called?', correct:'Belgrade Fortress (Kalemegdan)', wrong:['Petrovaradin Fortress','Smederevo Fortress','Golubac Fortress'] }, ru:{ question:'Как называется крепость в месте слияния Савы и Дуная?', correct:'Белградская крепость (Калемегдан)', wrong:['Петроварадинская крепость','Смедеревская крепость','Голубачская крепость'] }, tr:{ question:'Sava ve Tuna\'nın birleştiği yerdeki ünlü kale nasıl adlandırılır?', correct:'Belgrad Kalesi (Kalemegdan)', wrong:['Petrovaradin Kalesi','Smederevo Kalesi','Golubac Kalesi'] }, lv:{ question:'Kā sauc slaveno cietoksni Savas un Donavas satekā?', correct:'Belgradas cietoksnis (Kalemegdans)', wrong:['Petrovaradinas cietoksnis','Smederevas cietoksnis','Golubakas cietoksnis'] } } },
    { id:'sr-04', translations:{ sr:{ question:'U kom gradu se nalazi Petrovaradinska tvrđava?', correct:'Novi Sad', wrong:['Beograd','Sremska Mitrovica','Zrenjanin'] }, en:{ question:'In which city is the Petrovaradin Fortress located?', correct:'Novi Sad', wrong:['Belgrade','Sremska Mitrovica','Zrenjanin'] }, ru:{ question:'В каком городе находится Петроварадинская крепость?', correct:'Нови-Сад', wrong:['Белград','Сремска-Митровица','Зренянин'] }, tr:{ question:'Petrovaradin Kalesi hangi şehirde yer alır?', correct:'Novi Sad', wrong:['Belgrad','Sremska Mitrovica','Zrenjanin'] }, lv:{ question:'Kurā pilsētā atrodas Petrovaradinas cietoksnis?', correct:'Novi Sada', wrong:['Belgrade','Sremska Mitrovica','Zrenjanin'] } } },
    { id:'sr-05', translations:{ sr:{ question:'Kako se zove najveća ravnica u severnom delu Srbije?', correct:'Panonska nizija', wrong:['Mačvanska ravnica','Posavina','Podunavlje'] }, en:{ question:'What is the largest plain in northern Serbia called?', correct:'Pannonian Plain', wrong:['Mačva Plain','Posavina','Podunavlje'] }, ru:{ question:'Как называется крупнейшая равнина в северной Сербии?', correct:'Паннонская низменность', wrong:['Мачванская равнина','Посавина','Подунавле'] }, tr:{ question:'Kuzey Sırbistan\'ın en büyük ovasına ne denir?', correct:'Pannonya Ovası', wrong:['Mačva Ovası','Posavina','Podunavlje'] }, lv:{ question:'Kā sauc lielāko līdzenumu Serbijas ziemeļu daļā?', correct:'Pannonijas zemiene', wrong:['Mačvas līdzenums','Posavina','Podunavle'] } } },
    { id:'sr-06', translations:{ sr:{ question:'Koje je najveće veštačko jezero u Srbiji?', correct:'Đerdapsko jezero', wrong:['Vlasinsko jezero','Perućačko jezero','Gazivode'] }, en:{ question:'What is the largest artificial lake in Serbia?', correct:'Đerdap Lake', wrong:['Vlasina Lake','Perućac Lake','Gazivode'] }, ru:{ question:'Какое крупнейшее искусственное озеро в Сербии?', correct:'Джердапское озеро', wrong:['Власинское озеро','Перучацкое озеро','Газиводе'] }, tr:{ question:'Sırbistan\'ın en büyük yapay gölü hangisidir?', correct:'Đerdap Gölü', wrong:['Vlasina Gölü','Perućac Gölü','Gazivode'] }, lv:{ question:'Kāds ir lielākais mākslīgais ezers Serbijā?', correct:'Đerdapa ezers', wrong:['Vlasinas ezers','Perućacas ezers','Gazivode'] } } },
    { id:'sr-07', translations:{ sr:{ question:'Kako se zove memorijalni kompleks u Kragujevcu posvećen žrtvama Drugog svetskog rata?', correct:'Šumarice', wrong:['Sajmište','Jasenovac','Staro groblje'] }, en:{ question:'What is the memorial complex in Kragujevac dedicated to WWII victims called?', correct:'Šumarice', wrong:['Sajmište','Jasenovac','Old Cemetery'] }, ru:{ question:'Как называется мемориальный комплекс в Крагуевце, посвящённый жертвам Второй мировой войны?', correct:'Шумарице', wrong:['Саймиште','Ясеновац','Старое кладбище'] }, tr:{ question:'Kragujevac\'taki İkinci Dünya Savaşı kurbanlarına adanmış anıt kompleksi nasıl adlandırılır?', correct:'Šumarice', wrong:['Sajmište','Jasenovac','Eski Mezarlık'] }, lv:{ question:'Kā sauc memoriālo kompleksu Kragujevacā, kas veltīts II pasaules kara upuriem?', correct:'Šumarice', wrong:['Sajmište','Jasenovac','Vecā kapsēta'] } } },
    { id:'sr-08', translations:{ sr:{ question:'Koja planina je najviša u Srbiji?', correct:'Midžur (Stara planina)', wrong:['Kopaonik','Tara','Zlatibor'] }, en:{ question:'Which is the highest mountain in Serbia?', correct:'Midžur (Stara Planina)', wrong:['Kopaonik','Tara','Zlatibor'] }, ru:{ question:'Какая гора является самой высокой в Сербии?', correct:'Миджур (Стара-Планина)', wrong:['Копаоник','Тара','Златибор'] }, tr:{ question:'Sırbistan\'ın en yüksek dağı hangisidir?', correct:'Midžur (Stara Planina)', wrong:['Kopaonik','Tara','Zlatibor'] }, lv:{ question:'Kāds ir augstākais kalns Serbijā?', correct:'Midžurs (Stara Planina)', wrong:['Kopaniks','Tara','Zlatibors'] } } },
    { id:'sr-09', translations:{ sr:{ question:'Kako se zove najduža reka koja protiče kroz Srbiju?', correct:'Dunav', wrong:['Sava','Morava','Drina'] }, en:{ question:'What is the longest river flowing through Serbia?', correct:'Danube', wrong:['Sava','Morava','Drina'] }, ru:{ question:'Какая самая длинная река, протекающая через Сербию?', correct:'Дунай', wrong:['Сава','Морава','Дрина'] }, tr:{ question:'Sırbistan\'dan geçen en uzun nehir hangisidir?', correct:'Tuna', wrong:['Sava','Morava','Drina'] }, lv:{ question:'Kāda ir garākā upe, kas tek caur Serbiju?', correct:'Donava', wrong:['Sava','Morava','Drīna'] } } },
    { id:'sr-10', translations:{ sr:{ question:'Koje je najveće jezero u Srbiji?', correct:'Đerdapsko jezero', wrong:['Vlasinsko jezero','Perućačko jezero','Palićko jezero'] }, en:{ question:'What is the largest lake in Serbia?', correct:'Đerdap Lake', wrong:['Vlasina Lake','Perućac Lake','Palić Lake'] }, ru:{ question:'Какое крупнейшее озеро в Сербии?', correct:'Джердапское озеро', wrong:['Власинское озеро','Перучацкое озеро','Палицкое озеро'] }, tr:{ question:'Sırbistan\'ın en büyük gölü hangisidir?', correct:'Đerdap Gölü', wrong:['Vlasina Gölü','Perućac Gölü','Palić Gölü'] }, lv:{ question:'Kāds ir lielākais ezers Serbijā?', correct:'Đerdapa ezers', wrong:['Vlasinas ezers','Perućacas ezers','Paliča ezers'] } } },
    { id:'sr-11', translations:{ sr:{ question:'U kom delu Srbije se nalazi Fruška gora?', correct:'U Vojvodini (Srem)', wrong:['U centralnoj Srbiji','U južnoj Srbiji','Na Kosovu'] }, en:{ question:'In which part of Serbia is Fruška Gora located?', correct:'In Vojvodina (Syrmia)', wrong:['In central Serbia','In southern Serbia','In Kosovo'] }, ru:{ question:'В какой части Сербии находится Фрушка Гора?', correct:'В Воеводине (Срем)', wrong:['В центральной Сербии','На юге Сербии','В Косово'] }, tr:{ question:'Fruška Gora Sırbistan\'ın hangi bölümünde yer alır?', correct:'Voyvodina\'da (Srem)', wrong:['Orta Sırbistan\'da','Güney Sırbistan\'da','Kosova\'da'] }, lv:{ question:'Kurā Serbijas daļā atrodas Fruška Gora?', correct:'Vojvodinā (Srema)', wrong:['Centrālajā Serbijā','Dienvidu Serbijā','Kosovā'] } } },
    { id:'sr-12', translations:{ sr:{ question:'U kom gradu se sastaju Sava i Dunav?', correct:'Beograd', wrong:['Novi Sad','Sremska Mitrovica','Smederevo'] }, en:{ question:'In which city do the Sava and Danube rivers meet?', correct:'Belgrade', wrong:['Novi Sad','Sremska Mitrovica','Smederevo'] }, ru:{ question:'В каком городе сливаются реки Сава и Дунай?', correct:'Белград', wrong:['Нови-Сад','Сремска-Митровица','Смедерево'] }, tr:{ question:'Sava ve Tuna nehirleri hangi şehirde birleşir?', correct:'Belgrad', wrong:['Novi Sad','Sremska Mitrovica','Smederevo'] }, lv:{ question:'Kurā pilsētā satiekas Savas un Donavas upes?', correct:'Belgrada', wrong:['Novi Sada','Sremska Mitrovica','Smederevas'] } } },
    { id:'sr-13', translations:{ sr:{ question:'Koja je najpoznatija banja u Srbiji?', correct:'Vrnjačka Banja', wrong:['Bukovička Banja','Niška Banja','Sokobanja'] }, en:{ question:'What is the most famous spa town in Serbia?', correct:'Vrnjačka Banja', wrong:['Bukovička Banja','Niška Banja','Sokobanja'] }, ru:{ question:'Какой наиболее известный курорт в Сербии?', correct:'Врньячка-Баня', wrong:['Буковицкая Баня','Нишская Баня','Сокобаня'] }, tr:{ question:'Sırbistan\'ın en ünlü kaplıca şehri hangisidir?', correct:'Vrnjačka Banja', wrong:['Bukovička Banja','Niška Banja','Sokobanja'] }, lv:{ question:'Kāds ir slavenākais kūrorts Serbijā?', correct:'Vrnjačka Banja', wrong:['Bukovička Banja','Niška Banja','Sokobanja'] } } },
    { id:'sr-14', translations:{ sr:{ question:'Gde se nalazi najveći rudnik bakra u Srbiji?', correct:'Bor', wrong:['Majdanpek','Žagubica','Zaječar'] }, en:{ question:'Where is the largest copper mine in Serbia located?', correct:'Bor', wrong:['Majdanpek','Žagubica','Zaječar'] }, ru:{ question:'Где находится крупнейший медный рудник Сербии?', correct:'Бор', wrong:['Майданпек','Жагубица','Зайечар'] }, tr:{ question:'Sırbistan\'ın en büyük bakır madeni nerede yer alır?', correct:'Bor', wrong:['Majdanpek','Žagubica','Zaječar'] }, lv:{ question:'Kur atrodas lielākā vara raktuves Serbijā?', correct:'Bora', wrong:['Majdanpeks','Žagubica','Zaječāra'] } } },
    { id:'sr-15', translations:{ sr:{ question:'Koja od ovih planina pripada Dinarskim planinama u Srbiji?', correct:'Zlatibor', wrong:['Stara planina','Rtanj','Suva planina'] }, en:{ question:'Which of these mountains belongs to the Dinaric Alps in Serbia?', correct:'Zlatibor', wrong:['Stara Planina','Rtanj','Suva Planina'] }, ru:{ question:'Какая из этих гор относится к Динарским Альпам в Сербии?', correct:'Златибор', wrong:['Стара-Планина','Ртань','Сува-Планина'] }, tr:{ question:'Bu dağlardan hangisi Sırbistan\'daki Dinar Alpleri\'ne aittir?', correct:'Zlatibor', wrong:['Stara Planina','Rtanj','Suva Planina'] }, lv:{ question:'Kurš no šiem kalniem pieder Dināriskajiem Alpiem Serbijā?', correct:'Zlatibors', wrong:['Stara Planina','Rtanj','Suva Planina'] } } },
    { id:'sr-16', translations:{ sr:{ question:'Koja planina u Srbiji pripada Karpatsko-balkanskom sistemu?', correct:'Stara planina', wrong:['Zlatibor','Tara','Kopaonik'] }, en:{ question:'Which Serbian mountain belongs to the Carpathian-Balkan system?', correct:'Stara Planina', wrong:['Zlatibor','Tara','Kopaonik'] }, ru:{ question:'Какая гора в Сербии относится к Карпатско-Балканской системе?', correct:'Стара-Планина', wrong:['Златибор','Тара','Копаоник'] }, tr:{ question:'Sırbistan\'ın hangi dağı Karpatlar-Balkan sistemine aittir?', correct:'Stara Planina', wrong:['Zlatibor','Tara','Kopaonik'] }, lv:{ question:'Kurš Serbijas kalns pieder Karpatu-Balkānu sistēmai?', correct:'Stara Planina', wrong:['Zlatibors','Tara','Kopaniks'] } } },
    { id:'sr-17', translations:{ sr:{ question:'Koje su autonomne pokrajine Srbije?', correct:'Vojvodina i Kosovo i Metohija', wrong:['Vojvodina i Republika Srpska','Srem i Kosovo','Bačka i Metohija'] }, en:{ question:'What are the autonomous provinces of Serbia?', correct:'Vojvodina and Kosovo and Metohija', wrong:['Vojvodina and Republika Srpska','Syrmia and Kosovo','Bačka and Metohija'] }, ru:{ question:'Какие автономные края есть в Сербии?', correct:'Воеводина и Косово и Метохия', wrong:['Воеводина и Республика Сербская','Срем и Косово','Бачка и Метохия'] }, tr:{ question:'Sırbistan\'ın özerk bölgeleri hangileridir?', correct:'Voyvodina ve Kosova ve Metohija', wrong:['Voyvodina ve Republika Srpska','Srem ve Kosova','Bačka ve Metohija'] }, lv:{ question:'Kādas ir Serbijas autonomās provinces?', correct:'Vojvodina un Kosova un Metohija', wrong:['Vojvodina un Republika Srpska','Srems un Kosova','Bačka un Metohija'] } } },
    { id:'sr-18', translations:{ sr:{ question:'Kako se zove najduži kanalski sistem u Srbiji?', correct:'DTD kanal (Dunav-Tisa-Dunav)', wrong:['Sajanski kanal','Plovni Begej','Kanal Bečej-Bogojevo'] }, en:{ question:'What is the longest canal system in Serbia called?', correct:'DTD Canal (Danube-Tisa-Danube)', wrong:['Saján Canal','Plovni Begej','Bečej-Bogojevo Canal'] }, ru:{ question:'Как называется самая длинная канальная система Сербии?', correct:'Канал ДТД (Дунай-Тиса-Дунай)', wrong:['Саянский канал','Плавный Бегей','Канал Бечей-Богоево'] }, tr:{ question:'Sırbistan\'ın en uzun kanal sistemi nasıl adlandırılır?', correct:'DTD Kanalı (Tuna-Tisa-Tuna)', wrong:['Saján Kanalı','Plovni Begej','Bečej-Bogojevo Kanalı'] }, lv:{ question:'Kā sauc garāko kanālu sistēmu Serbijā?', correct:'DTD kanāls (Donava-Tisa-Donava)', wrong:['Sajana kanāls','Plovni Begeja','Bečeja-Bogojevas kanāls'] } } },
    { id:'sr-19', translations:{ sr:{ question:'Koliko okruga ima Srbija?', correct:'29', wrong:['25','31','27'] }, en:{ question:'How many districts does Serbia have?', correct:'29', wrong:['25','31','27'] }, ru:{ question:'Сколько округов в Сербии?', correct:'29', wrong:['25','31','27'] }, tr:{ question:'Sırbistan kaç ilçeye sahiptir?', correct:'29', wrong:['25','31','27'] }, lv:{ question:'Cik apgabalu ir Serbijā?', correct:'29', wrong:['25','31','27'] } } },
    { id:'sr-20', translations:{ sr:{ question:'Koja se poznata freska nalazi u Manastiru Mileševa kod Prijepolja?', correct:'Beli anđeo', wrong:['Bogorodica Perivleptos','Lazareva večera','Sretenje Gospodnje'] }, en:{ question:'Which famous fresco is found in Mileševa Monastery near Prijepolje?', correct:'White Angel', wrong:['Virgin Perivleptos','Last Supper of Lazar','Presentation of the Lord'] }, ru:{ question:'Какая знаменитая фреска находится в монастыре Милешева близ Прьеполя?', correct:'Белый ангел', wrong:['Богородица Перивлептос','Лазарева вечеря','Сретение Господне'] }, tr:{ question:'Prijepolje yakınlarındaki Mileševa Manastırı\'nda hangi ünlü fresk bulunmaktadır?', correct:'Beyaz Melek', wrong:['Bakire Perivleptos','Lazar\'ın Son Akşam Yemeği','Rabbın Sunumu'] }, lv:{ question:'Kāda slavena freska atrodas Mileševas klosterī pie Prijepoļes?', correct:'Baltais eņģelis', wrong:['Dievmāte Perivleptos','Lazara pēdējā vakariņa','Kunga atnešana'] } } },
  ],
}

// ─── FINALE STATE ─────────────────────────────────────────────────────────────
const finaleCountry   = ref('')   // 'gb' | 'serbia'
const isFinale        = ref(false)
const showFinaleWinner = ref(false)

// ─── LEGACY (kept for continent card colours) ─────────────────────────────────
const continentPaths = {
  'Europa': [
    'M 62 22', 'L 80 12', 'L 100 9',  'L 120 11', 'L 140 9',
    'L 155 19', 'L 163 34', 'L 165 50', 'L 158 65',
    'L 148 76', 'L 132 84', 'L 112 88', 'L 92 88',
    'L 72 83',  'L 52 73',  'L 38 60',  'L 31 46',
    'L 34 32',  'L 45 23',  'Z',
  ].join(' '),

  'Azija': [
    'M 18 20', 'L 55 9',  'L 100 5', 'L 148 9',  'L 182 22',
    'L 194 44', 'L 190 70', 'L 178 94', 'L 162 112',
    'L 135 124', 'L 108 129', 'L 80 124', 'L 55 110',
    'L 32 90',  'L 12 65',  'L 10 40',  'Z',
    // Indian sub-continent bump
    'M 120 100', 'L 130 112', 'L 120 128', 'L 105 130',
    'L 95 125',  'L 105 112', 'Z',
  ].join(' '),

  'Afrika': [
    'M 60 14', 'L 95 10',  'L 130 12', 'L 152 26',
    'L 164 50', 'L 167 78', 'L 162 106',
    'L 148 124', 'L 126 138', 'L 100 142',
    'L 74 138',  'L 52 124',  'L 36 106',
    'L 30 78',   'L 32 50',   'L 44 28',  'Z',
  ].join(' '),

  'Severna Amerika': [
    'M 28 14', 'L 72 8',  'L 112 10', 'L 152 18',
    'L 175 34', 'L 180 56', 'L 170 78',
    'L 155 94', 'L 132 107', 'L 108 111',
    'L 85 107',  'L 65 94',   'L 48 78',
    'L 36 60',   'L 26 42',   'L 28 28',  'Z',
    // Florida / Mexico tab
    'M 110 105', 'L 118 114', 'L 112 122', 'L 104 118', 'L 105 108', 'Z',
  ].join(' '),

  'Južna Amerika': [
    'M 68 14', 'L 108 10', 'L 136 18',
    'L 156 34', 'L 162 58', 'L 158 82',
    'L 148 105', 'L 130 122', 'L 108 135',
    'L 85 135',  'L 62 122',  'L 46 102',
    'L 40 78',   'L 44 52',   'L 54 32',  'Z',
  ].join(' '),

  'Australija': [
    'M 28 36', 'L 68 22', 'L 118 18', 'L 158 24',
    'L 178 40', 'L 180 64', 'L 172 88',
    'L 155 108', 'L 128 118', 'L 96 120',
    'L 65 115',  'L 38 100',  'L 18 78',
    'L 18 52',   'Z',
    // Tasmania
    'M 108 122', 'L 118 124', 'L 116 134', 'L 106 133', 'Z',
  ].join(' '),
}

const continentColors = {
  'Europa':          '#3f51b5',
  'Azija':           '#e53935',
  'Afrika':          '#fb8c00',
  'Severna Amerika': '#43a047',
  'Južna Amerika':   '#00acc1',
  'Australija':      '#f4511e',
}

// viewBox for each of the 4 quadrant slots (in 200x150 space)
function quadrantViewBox(slotIdx) {
  return ['0 0 100 75', '100 0 100 75', '0 75 100 75', '100 75 100 75'][slotIdx]
}

// Piece label: Top / Middle / Bottom (for finale 3-piece) or NW/NE/SW/SE (4-piece)
const pieceLabelKeys4 = ['pieceNW', 'pieceNE', 'pieceSW', 'pieceSE']
const pieceLabelKeys3 = ['pieceTop', 'pieceMid', 'pieceBot']
function getPieceLabel(idx) {
  if (isFinale.value) return t(pieceLabelKeys3[idx] ?? pieceLabelKeys3[0])
  return t(pieceLabelKeys4[idx] ?? pieceLabelKeys4[0])
}

// Dynamic slot helpers based on whether we are in finale (3 pieces) or regular (4 pieces)
const puzzleTotalSlots = computed(() => isFinale.value ? 3 : 4)
const puzzleSlotIndices = computed(() => isFinale.value ? [0, 1, 2] : [0, 1, 2, 3])

// Puzzle functions
function openPuzzle() {
  // If isCorrect is false, just advance (wrong-path "Next")
  if (!isCorrect.value) { advanceQuestion(); return }

  // Find an unfilled slot
  const empty = puzzlePlacedSlots.value
    .map((v, i) => (v ? null : i)).filter(i => i !== null)

  const total = puzzleTotalSlots.value
  if (empty.length === 0) {
    // Should not normally happen (handled in selectPuzzlePiece), but reset as safety
    puzzlePlacedSlots.value = new Array(total).fill(false)
    advanceQuestion()
    return
  }

  puzzleTargetSlot.value    = empty[Math.floor(Math.random() * empty.length)]
  puzzleSelectedPiece.value = null
  puzzleCorrect.value       = null

  // Shuffle piece buttons
  const arr = Array.from({ length: total }, (_, i) => i)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  puzzleShuffledPieces.value = arr
  showPuzzleModal.value = true
}

function startFinaleQuiz() {
  const pool   = finaleQuestionData[finaleCountry.value]
  const picked = shuffle(pool).slice(0, 20)
  roundQuestions.value        = picked
  currentIndex.value          = 0
  score.value                 = 0
  pipResults.value            = new Array(picked.length).fill(null)
  showWrongModal.value        = false
  showChallengeCard.value     = false
  usedChallengeIndices.value  = []
  currentChallengeIndex.value = -1
  puzzlePlacedSlots.value     = [false, false, false]
  puzzleCorrect.value         = null
  showPuzzleModal.value       = false
  showFinaleWinner.value      = false
  isFinale.value              = true
  // Set activeContinent to show a styled band in quiz header
  activeContinent.value = finaleCountry.value === 'gb' ? 'Europa' : 'Europa'
  loadQuestion()
  phase.value = 'quiz'
}

function selectPuzzlePiece(pieceIdx) {
  if (puzzleCorrect.value !== null) return
  puzzleSelectedPiece.value = pieceIdx
  puzzleCorrect.value       = pieceIdx === puzzleTargetSlot.value

  if (puzzleCorrect.value) {
    // Mark slot as placed
    const newSlots = puzzlePlacedSlots.value.map((v, i) =>
      i === puzzleTargetSlot.value ? true : v
    )
    puzzlePlacedSlots.value = newSlots
    const allPlaced = newSlots.every(v => v)
    setTimeout(() => {
      showPuzzleModal.value = false
      if (allPlaced) {
        if (isFinale.value) {
          // Finale complete — show winner screen!
          showFinaleWinner.value = true
        } else {
          // All 4 continental pieces placed — go to FINALE selection
          phase.value = 'finale'
        }
      } else {
        advanceQuestion()
      }
    }, 1400)
  } else {
    // Wrong piece → challenge
    setTimeout(() => {
      showPuzzleModal.value = false
      showWrongModal.value  = true
    }, 900)
  }
}

function advanceQuestion() {
  answered.value = false
  isCorrect.value = false
  selectedOption.value = ''
  if (currentIndex.value < roundQuestions.value.length - 1) {
    currentIndex.value++
    loadQuestion()
  } else {
    phase.value = 'result'
  }
}

onMounted(() => { buildCardDeck() })
</script>


<style src="./style.css"/>

<style>
/* ══════════════════════════════════════════════
   PUZZLE / SLAGALICA STYLES
   ══════════════════════════════════════════════ */

.puzzle-overlay {
  z-index: 300;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.95) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.puzzle-card {
  background: #1a1a1a;
  border: 1px solid #444;
  border-radius: 20px;
  padding: 24px 22px 20px;
  width: min(500px, 96vw);
  max-height: 92vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 24px 64px rgba(0,0,0,.9);
  position: relative;
  color: #fff;
}

/* Header */
.puzzle-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}
.puzzle-badge {
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  color: #fff;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .08em;
  padding: 4px 12px;
  border-radius: 20px;
}
.puzzle-continent-name {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
}

/* Progress dots */
.puzzle-progress-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.puzzle-progress-label {
  font-size: .72rem;
  font-weight: 600;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: .06em;
  white-space: nowrap;
}
.puzzle-dots {
  display: flex;
  gap: 7px;
}
.puzzle-dot {
  width: 13px; height: 13px;
  border-radius: 50%;
  border: 2px solid var(--border);
  background: var(--surface);
  transition: all .35s;
}
.puzzle-dot.placed {
  background: #43a047;
  border-color: #43a047;
  box-shadow: 0 0 8px #43a04766;
}
.puzzle-dot.target {
  border-color: var(--gold);
  animation: dot-pulse 1.2s infinite;
}
@keyframes dot-pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(255,196,0,.5); }
  50%      { box-shadow: 0 0 0 5px rgba(255,196,0,0); }
}

/* Board */
.puzzle-board {
  position: relative;
  border: 2px solid #444;
  border-radius: 14px;
  overflow: hidden;
  background: #111;
}
.puzzle-grid {
  display: grid;
}
/* 4-piece: 2×2 landscape */
.puzzle-grid-4 {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  aspect-ratio: 4 / 3;
}
/* 3-piece: 1×3 portrait (A4 format) */
.puzzle-grid-3 {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  aspect-ratio: 1 / 1.5;
  max-height: 55vh;
}
.puzzle-cell {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background .3s;
  background: #111;
}
.puzzle-cell.cell-placed  { background: rgba(67,160,71,.15); }
.puzzle-cell.cell-target  { background: rgba(255,196,0,.1); border: 2px dashed rgba(255,196,0,.5); }
.puzzle-cell.cell-success { background: rgba(67,160,71,.25); animation: cell-pop .4s ease; }
.puzzle-cell.cell-empty   { background: #111; }

@keyframes cell-pop {
  0%   { transform: scale(.94); }
  60%  { transform: scale(1.03); }
  100% { transform: scale(1); }
}

.cell-svg { width: 100%; height: 100%; }
.cell-ghost { opacity: .35; }

/* Image-based puzzle pieces */
.cell-img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}
.cell-img-ghost {
  opacity: 0.2;
  filter: grayscale(80%);
}
.piece-img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 6px;
  display: block;
}

.cell-question {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
}
.cell-q-mark {
  font-size: 2.2rem;
  color: var(--gold);
  font-weight: 800;
  animation: q-pulse 1.4s ease-in-out infinite;
  user-select: none;
}
@keyframes q-pulse {
  0%,100% { opacity: .6; transform: scale(1); }
  50%     { opacity: 1;   transform: scale(1.15); }
}

/* Divider lines on the board */
.puzzle-divider-h, .puzzle-divider-v {
  position: absolute;
  background: var(--border);
  pointer-events: none;
}
.puzzle-divider-h {
  left: 0; right: 0; top: 50%;
  height: 1px;
  transform: translateY(-50%);
  border-top: 1px dashed var(--border);
  background: none;
}
/* 3-piece mode: two horizontal dividers at 33% and 66% */
.puzzle-divider-h1 {
  left: 0; right: 0; top: 33.33%;
  height: 1px;
  transform: translateY(-50%);
  border-top: 1px dashed var(--border);
  background: none;
}
.puzzle-divider-h2 {
  left: 0; right: 0; top: 66.66%;
  height: 1px;
  transform: translateY(-50%);
  border-top: 1px dashed var(--border);
  background: none;
}
.puzzle-divider-v {
  top: 0; bottom: 0; left: 50%;
  width: 1px;
  transform: translateX(-50%);
  border-left: 1px dashed var(--border);
  background: none;
}

/* Instruction text */
.puzzle-instruction {
  text-align: center;
  font-size: .82rem;
  color: #aaa;
  margin: 0;
}

/* Piece options */
.puzzle-pieces {
  display: grid;
  gap: 10px;
}
.puzzle-pieces-4 {
  grid-template-columns: repeat(4, 1fr);
}
.puzzle-pieces-3 {
  grid-template-columns: repeat(3, 1fr);
}
.puzzle-piece-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  border: 2px solid #444;
  border-radius: 12px;
  background: #222;
  padding: 8px 4px 6px;
  cursor: pointer;
  transition: all .2s;
  color: #fff;
}
.puzzle-piece-btn:hover:not(:disabled) {
  border-color: var(--gold);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,.5);
}
.puzzle-piece-btn:disabled { cursor: not-allowed; opacity: .7; }

.puzzle-piece-btn.piece-correct {
  border-color: #43a047;
  background: rgba(67,160,71,.12);
  animation: piece-bounce .45s ease;
}
.puzzle-piece-btn.piece-wrong {
  border-color: #e53935;
  background: rgba(229,57,53,.1);
  animation: piece-shake .4s ease;
}
.puzzle-piece-btn.piece-reveal {
  border-color: #43a047;
  background: rgba(67,160,71,.08);
  opacity: .8;
}

@keyframes piece-bounce {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.1); }
  70%  { transform: scale(.97); }
  100% { transform: scale(1); }
}
@keyframes piece-shake {
  0%,100% { transform: translateX(0); }
  25%     { transform: translateX(-5px); }
  75%     { transform: translateX(5px); }
}

.piece-svg {
  width: 100%;
  aspect-ratio: 100 / 75;
  border-radius: 6px;
  overflow: hidden;
}
.piece-label {
  font-size: .62rem;
  font-weight: 700;
  letter-spacing: .05em;
  text-transform: uppercase;
  color: #aaa;
}

/* Feedback bar */
.puzzle-feedback {
  border-radius: 10px;
  padding: 10px 16px;
  text-align: center;
  font-weight: 700;
  font-size: .88rem;
}
.pf-ok  { background: rgba(67,160,71,.15); color: #43a047; border: 1px solid #43a04744; }
.pf-err { background: rgba(229,57,53,.12); color: #e53935; border: 1px solid #e5393544; }

/* Responsive: smaller screens */
@media (max-width: 400px) {
  .puzzle-pieces { grid-template-columns: repeat(4, 1fr); gap: 6px; }
  .piece-label   { font-size: .55rem; }
  .puzzle-card   { padding: 18px 14px 16px; gap: 12px; }
}

/* ══════════════════════════════════════════════
   FINALE STYLES
   ══════════════════════════════════════════════ */

.finale-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.finale-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px 40px;
  gap: 18px;
  text-align: center;
}

.finale-trophy-anim {
  font-size: 3.5rem;
  animation: trophy-bounce 1.2s ease-in-out infinite alternate;
}
@keyframes trophy-bounce {
  from { transform: scale(1) rotate(-5deg); }
  to   { transform: scale(1.15) rotate(5deg); }
}

.finale-title-text {
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: .15em;
  background: linear-gradient(135deg, var(--gold), #ff9f43, var(--gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  text-shadow: none;
}

.finale-subtitle-text {
  font-size: 1rem;
  color: var(--muted);
  margin: 0;
}

.finale-cards-row {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 8px 0;
}

.finale-country-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 2.5px solid var(--border);
  border-radius: 20px;
  background: var(--surface);
  padding: 24px 28px 20px;
  cursor: pointer;
  transition: all .25s;
  color: var(--text);
  position: relative;
  min-width: 130px;
}
.finale-country-card:hover {
  border-color: var(--gold);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,.35);
}
.finale-card-selected {
  border-color: var(--gold) !important;
  background: rgba(255,196,0,.08) !important;
  box-shadow: 0 0 0 4px rgba(255,196,0,.18), 0 12px 32px rgba(0,0,0,.35) !important;
}
.finale-card-flag {
  font-size: 3.2rem;
  line-height: 1;
}
.finale-card-name {
  font-size: .95rem;
  font-weight: 700;
  letter-spacing: .04em;
}
.finale-card-check {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 22px; height: 22px;
  border-radius: 50%;
  background: var(--gold);
  color: #000;
  font-size: .8rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-finale-start {
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, var(--gold), #ff9f43);
  color: #000;
  border: none;
  border-radius: 14px;
  padding: 14px 36px;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: .08em;
  cursor: pointer;
  transition: all .2s;
  box-shadow: 0 6px 24px rgba(255,196,0,.35);
}
.btn-finale-start svg { width: 20px; height: 20px; }
.btn-finale-start:hover { transform: scale(1.04); box-shadow: 0 10px 32px rgba(255,196,0,.5); }

.finale-notice {
  font-size: .82rem;
  color: var(--muted);
  max-width: 360px;
  line-height: 1.55;
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
  margin: 0;
}

/* Winner modal */
.finale-winner-overlay {
  background: rgba(0,0,0,.97) !important;
  z-index: 400 !important;
}

.finale-winner-card {
  background: linear-gradient(160deg, #1a1a2e, #16213e, #0f3460);
  border: 2px solid var(--gold);
  border-radius: 24px;
  padding: 36px 32px 28px;
  width: min(440px, 94vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
  box-shadow: 0 0 60px rgba(255,196,0,.3), 0 30px 80px rgba(0,0,0,.9);
  animation: winner-pop .5s cubic-bezier(.34,1.56,.64,1);
}
@keyframes winner-pop {
  from { transform: scale(.6); opacity: 0; }
  to   { transform: scale(1);  opacity: 1; }
}

.finale-winner-trophies {
  font-size: 2.2rem;
  letter-spacing: .3em;
  animation: trophy-bounce 1s infinite alternate;
}
.finale-winner-title {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: .1em;
  background: linear-gradient(135deg, var(--gold), #fff, var(--gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}
.finale-winner-flag {
  font-size: 4rem;
  line-height: 1;
}
.finale-winner-country {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--gold);
  margin: 0;
}
.finale-winner-msg {
  font-size: .95rem;
  color: #ccc;
  margin: 0;
}
.finale-winner-confetti {
  font-size: 1.8rem;
  letter-spacing: .25em;
  animation: confetti-spin 2s infinite linear;
}
@keyframes confetti-spin {
  0%   { letter-spacing: .25em; }
  50%  { letter-spacing: .5em;  }
  100% { letter-spacing: .25em; }
}
.btn-finale-winner-back {
  background: var(--gold);
  color: #000;
  border: none;
  border-radius: 12px;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all .2s;
  margin-top: 4px;
}
.btn-finale-winner-back:hover { transform: scale(1.04); }
</style>