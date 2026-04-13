<template>
  <div id="app-wrapper">
    <!-- Background decorations -->
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
    <div class="grid-overlay"></div>

    <!-- Header -->
    <header class="app-header">
      <div class="logo-area">
        <span class="logo-icon">🌍</span>
        <span class="logo-text">GeoQuest</span>
      </div>
      <div class="lang-selector-wrap">
        <span class="lang-label">{{ t('language') }}:</span>
        <div class="lang-scroll-container">
          <div class="lang-scroll-inner">
            <button
              v-for="lang in languages"
              :key="lang.code"
              class="lang-btn"
              :class="{ active: currentLang === lang.code }"
              @click="changeLang(lang.code)"
            >
              <span class="lang-flag">{{ lang.flag }}</span>
              <span class="lang-name">{{ lang.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="app-main">

      <!-- SELECTION PHASE -->
      <Transition name="phase">
        <div v-if="phase === 'selection'" class="phase-screen" key="selection">
          <div class="title-block">
            <p class="subtitle">{{ t('selectContinent') }}</p>
            <h1 class="main-title">{{ t('chooseCard') }}</h1>
          </div>

          <div class="card-grid">
            <div
              v-for="(card, idx) in cardDeck"
              :key="card.continent"
              class="card-wrapper"
              :class="{ locked: anyRevealed && !card.revealed }"
              @click="revealCard(card)"
            >
              <div class="card-inner" :class="{ flipped: card.revealed }">
                <!-- Card Back -->
                <div class="card-face card-back">
                  <div class="card-shimmer"></div>
                  <div class="card-back-number">{{ ['I','II','III','IV','V','VI'][idx] }}</div>
                  <div class="card-back-pattern">
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="30" y="10" width="20" height="20" stroke="currentColor" stroke-width="1" transform="rotate(45 40 20)"/>
                      <circle cx="40" cy="40" r="15" stroke="currentColor" stroke-width="0.8"/>
                      <line x1="40" y1="5" x2="40" y2="75" stroke="currentColor" stroke-width="0.5"/>
                      <line x1="5" y1="40" x2="75" y2="40" stroke="currentColor" stroke-width="0.5"/>
                      <circle cx="40" cy="40" r="3" fill="currentColor"/>
                    </svg>
                  </div>
                  <p class="card-back-hint">{{ t('tapToReveal') }}</p>
                </div>

                <!-- Card Front -->
                <div class="card-face card-front" :style="continentStyle(card.continent)">
                  <div class="card-front-emoji">{{ continentEmoji(card.continent) }}</div>
                  <div class="card-front-name">{{ translateContinent(card.continent) }}</div>
                  <div class="card-front-divider"></div>
                  <div class="card-front-info">{{ t('questionsAwait') }}</div>
                </div>
              </div>
            </div>
          </div>

          <p class="instructions-text">{{ t('instructions') }}</p>
        </div>
      </Transition>

      <!-- QUIZ PHASE -->
      <Transition name="phase">
        <div v-if="phase === 'quiz'" class="phase-screen" key="quiz">
          <div class="quiz-container">

            <!-- Quiz header -->
            <div class="quiz-header" :style="continentStyle(activeContinent)">
              <div class="quiz-continent-info">
                <span class="quiz-emoji">{{ continentEmoji(activeContinent) }}</span>
                <span class="quiz-continent-name">{{ translateContinent(activeContinent) }}</span>
              </div>
              <div class="quiz-progress-text">
                {{ t('question') }} {{ currentIndex + 1 }} / {{ roundQuestions.length }}
              </div>
            </div>

            <!-- Progress bar -->
            <div class="progress-bar-track">
              <div class="progress-bar-fill" :style="{ width: ((currentIndex) / roundQuestions.length * 100) + '%' }"></div>
            </div>

            <!-- Question -->
            <div class="quiz-body">
              <Transition name="q-slide" mode="out-in">
                <div :key="currentIndex" class="question-section">
                  <p class="question-text">{{ translatedQuestion }}</p>

                  <!-- Answer grid -->
                  <div class="answers-grid">
                    <button
                      v-for="(option, i) in displayedOptions"
                      :key="option"
                      class="answer-btn"
                      :class="answerClass(option)"
                      :disabled="answered"
                      @click="selectAnswer(option)"
                    >
                      <span class="answer-letter">{{ ['A','B','C','D'][i] }}</span>
                      <span class="answer-text">{{ option }}</span>
                    </button>
                  </div>
                </div>
              </Transition>

              <!-- Feedback bar -->
              <Transition name="feedback">
                <div v-if="answered" class="feedback-bar" :class="isCorrect ? 'feedback-correct' : 'feedback-wrong'">
                  <div class="feedback-left">
                    <span class="feedback-icon">{{ isCorrect ? '✓' : '✗' }}</span>
                    <span class="feedback-msg">
                      {{ isCorrect ? t('correct') : t('wrongAnswer') + ' ' + translatedCorrect }}
                    </span>
                  </div>
                  <button class="next-btn" @click="nextQuestion">
                    {{ currentIndex < roundQuestions.length - 1 ? t('next') : t('seeResults') }}
                    <span class="next-arrow">→</span>
                  </button>
                </div>
              </Transition>
            </div>

            <!-- Pips -->
            <div class="quiz-pips">
              <div
                v-for="(pip, i) in pipResults"
                :key="i"
                class="pip"
                :class="{
                  'pip-active': i === currentIndex,
                  'pip-correct': pip === true,
                  'pip-wrong': pip === false
                }"
              ></div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- RESULT PHASE -->
      <Transition name="phase">
        <div v-if="phase === 'result'" class="phase-screen" key="result">
          <div class="result-card">
            <div class="result-banner" :style="continentStyle(activeContinent)">
              <span class="result-emoji">{{ continentEmoji(activeContinent) }}</span>
              <span class="result-continent">{{ translateContinent(activeContinent) }}</span>
            </div>

            <div class="result-body">
              <p class="result-label">{{ t('roundComplete') }}</p>
              <div class="stars-row">
                <span
                  v-for="n in 4"
                  :key="n"
                  class="star"
                  :class="{ lit: n <= score }"
                >★</span>
              </div>
              <div class="score-display">
                <span class="score-number">{{ score }}</span>
                <span class="score-slash">/</span>
                <span class="score-total">{{ roundQuestions.length }}</span>
              </div>
              <p class="score-comment">{{ scoreComment }}</p>

              <div class="pip-results-row">
                <div
                  v-for="(pip, i) in pipResults"
                  :key="i"
                  class="result-pip"
                  :class="pip ? 'result-pip-correct' : 'result-pip-wrong'"
                >
                  {{ pip ? '✓' : '✗' }}
                </div>
              </div>

              <button class="return-btn" @click="returnToMap">
                ◂ {{ t('returnToMap') }}
              </button>
            </div>
          </div>
        </div>
      </Transition>

    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { questions } from './data/questions.js'

// ─── LANGUAGES ───────────────────────────────────────────────
const languages = [
  { code: 'sr', name: 'Srpski', flag: '🇷🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
]

const currentLang = ref('sr')

// ─── UI TRANSLATIONS ─────────────────────────────────────────
const uiStrings = {
  sr: {
    language: 'Jezik',
    selectContinent: 'Odaberi kontinent',
    chooseCard: 'Odaberi kartu i počni kviz!',
    tapToReveal: 'Klikni da otkriješ',
    questionsAwait: '4 pitanja te čekaju',
    instructions: 'Klikni na jednu od 6 karata da počneš',
    question: 'Pitanje',
    correct: 'Tačno! Bravo!',
    wrongAnswer: 'Tačan odgovor:',
    next: 'Sledeće',
    seeResults: 'Pogledaj rezultate',
    roundComplete: 'Runda završena!',
    returnToMap: 'Vrati se na mapu',
    score0: 'Pokušaj ponovo! Možeš bolje. 💪',
    score1: 'Dobar početak! Uči dalje. 📚',
    score2: 'Solidno! Polako napreduje. 🌍',
    score3: 'Odlično! Gotovo savršeno! 🎯',
    score4: 'Savršeno! Geografski genije! 🏆',
    continents: {
      'Europa': 'Evropa',
      'Azija': 'Azija',
      'Afrika': 'Afrika',
      'Severna Amerika': 'Severna Amerika',
      'Južna Amerika': 'Južna Amerika',
      'Australija': 'Australija',
    }
  },
  en: {
    language: 'Language',
    selectContinent: 'Select a continent',
    chooseCard: 'Pick a card and start the quiz!',
    tapToReveal: 'Click to reveal',
    questionsAwait: '4 questions await',
    instructions: 'Click one of the 6 cards to begin',
    question: 'Question',
    correct: 'Correct! Well done!',
    wrongAnswer: 'Correct answer:',
    next: 'Next',
    seeResults: 'See Results',
    roundComplete: 'Round Complete!',
    returnToMap: 'Return to Map',
    score0: 'Try again! You can do better. 💪',
    score1: 'Good start! Keep studying. 📚',
    score2: 'Solid! You\'re improving. 🌍',
    score3: 'Excellent! Almost perfect! 🎯',
    score4: 'Perfect! Geography genius! 🏆',
    continents: {
      'Europa': 'Europe',
      'Azija': 'Asia',
      'Afrika': 'Africa',
      'Severna Amerika': 'North America',
      'Južna Amerika': 'South America',
      'Australija': 'Australia',
    }
  },
  de: {
    language: 'Sprache',
    selectContinent: 'Kontinent auswählen',
    chooseCard: 'Wähle eine Karte und starte das Quiz!',
    tapToReveal: 'Klicken zum Aufdecken',
    questionsAwait: '4 Fragen warten',
    instructions: 'Klicke eine der 6 Karten um zu beginnen',
    question: 'Frage',
    correct: 'Richtig! Gut gemacht!',
    wrongAnswer: 'Richtige Antwort:',
    next: 'Weiter',
    seeResults: 'Ergebnisse sehen',
    roundComplete: 'Runde abgeschlossen!',
    returnToMap: 'Zurück zur Karte',
    score0: 'Versuch es nochmal! 💪',
    score1: 'Guter Start! Weitermachen. 📚',
    score2: 'Solide! Du verbesserst dich. 🌍',
    score3: 'Ausgezeichnet! Fast perfekt! 🎯',
    score4: 'Perfekt! Geographie-Genie! 🏆',
    continents: {
      'Europa': 'Europa',
      'Azija': 'Asien',
      'Afrika': 'Afrika',
      'Severna Amerika': 'Nordamerika',
      'Južna Amerika': 'Südamerika',
      'Australija': 'Australien',
    }
  },
  fr: {
    language: 'Langue',
    selectContinent: 'Sélectionner un continent',
    chooseCard: 'Choisissez une carte et commencez !',
    tapToReveal: 'Cliquez pour révéler',
    questionsAwait: '4 questions vous attendent',
    instructions: 'Cliquez sur l\'une des 6 cartes pour commencer',
    question: 'Question',
    correct: 'Correct ! Bravo !',
    wrongAnswer: 'Bonne réponse :',
    next: 'Suivant',
    seeResults: 'Voir les résultats',
    roundComplete: 'Tour terminé !',
    returnToMap: 'Retour à la carte',
    score0: 'Essayez encore ! 💪',
    score1: 'Bon début ! Continuez. 📚',
    score2: 'Solide ! Vous progressez. 🌍',
    score3: 'Excellent ! Presque parfait ! 🎯',
    score4: 'Parfait ! Génie géographique ! 🏆',
    continents: {
      'Europa': 'Europe',
      'Azija': 'Asie',
      'Afrika': 'Afrique',
      'Severna Amerika': 'Amérique du Nord',
      'Južna Amerika': 'Amérique du Sud',
      'Australija': 'Australie',
    }
  },
  es: {
    language: 'Idioma',
    selectContinent: 'Seleccionar continente',
    chooseCard: '¡Elige una carta y empieza!',
    tapToReveal: 'Haz clic para revelar',
    questionsAwait: '4 preguntas te esperan',
    instructions: 'Haz clic en una de las 6 cartas para empezar',
    question: 'Pregunta',
    correct: '¡Correcto! ¡Bien hecho!',
    wrongAnswer: 'Respuesta correcta:',
    next: 'Siguiente',
    seeResults: 'Ver resultados',
    roundComplete: '¡Ronda completa!',
    returnToMap: 'Volver al mapa',
    score0: '¡Inténtalo de nuevo! 💪',
    score1: '¡Buen comienzo! Sigue estudiando. 📚',
    score2: '¡Sólido! Estás mejorando. 🌍',
    score3: '¡Excelente! ¡Casi perfecto! 🎯',
    score4: '¡Perfecto! ¡Genio geográfico! 🏆',
    continents: {
      'Europa': 'Europa',
      'Azija': 'Asia',
      'Afrika': 'África',
      'Severna Amerika': 'América del Norte',
      'Južna Amerika': 'América del Sur',
      'Australija': 'Australia',
    }
  },
  it: {
    language: 'Lingua',
    selectContinent: 'Seleziona un continente',
    chooseCard: 'Scegli una carta e inizia!',
    tapToReveal: 'Clicca per rivelare',
    questionsAwait: '4 domande ti aspettano',
    instructions: 'Clicca su una delle 6 carte per iniziare',
    question: 'Domanda',
    correct: 'Corretto! Bravo!',
    wrongAnswer: 'Risposta corretta:',
    next: 'Avanti',
    seeResults: 'Vedi risultati',
    roundComplete: 'Round completato!',
    returnToMap: 'Torna alla mappa',
    score0: 'Riprova! Puoi fare meglio. 💪',
    score1: 'Buon inizio! Continua a studiare. 📚',
    score2: 'Solido! Stai migliorando. 🌍',
    score3: 'Eccellente! Quasi perfetto! 🎯',
    score4: 'Perfetto! Genio della geografia! 🏆',
    continents: {
      'Europa': 'Europa',
      'Azija': 'Asia',
      'Afrika': 'Africa',
      'Severna Amerika': 'America del Nord',
      'Južna Amerika': 'America del Sud',
      'Australija': 'Australia',
    }
  },
  pt: {
    language: 'Idioma',
    selectContinent: 'Selecionar continente',
    chooseCard: 'Escolha uma carta e comece!',
    tapToReveal: 'Clique para revelar',
    questionsAwait: '4 perguntas esperam por você',
    instructions: 'Clique em um dos 6 cartões para começar',
    question: 'Pergunta',
    correct: 'Correto! Muito bem!',
    wrongAnswer: 'Resposta correta:',
    next: 'Próxima',
    seeResults: 'Ver resultados',
    roundComplete: 'Rodada completa!',
    returnToMap: 'Voltar ao mapa',
    score0: 'Tente novamente! 💪',
    score1: 'Bom começo! Continue estudando. 📚',
    score2: 'Sólido! Você está melhorando. 🌍',
    score3: 'Excelente! Quase perfeito! 🎯',
    score4: 'Perfeito! Gênio da geografia! 🏆',
    continents: {
      'Europa': 'Europa',
      'Azija': 'Ásia',
      'Afrika': 'África',
      'Severna Amerika': 'América do Norte',
      'Južna Amerika': 'América do Sul',
      'Australija': 'Austrália',
    }
  },
  ru: {
    language: 'Язык',
    selectContinent: 'Выберите континент',
    chooseCard: 'Выберите карту и начните викторину!',
    tapToReveal: 'Нажмите, чтобы открыть',
    questionsAwait: '4 вопроса ждут',
    instructions: 'Нажмите на одну из 6 карт, чтобы начать',
    question: 'Вопрос',
    correct: 'Правильно! Молодец!',
    wrongAnswer: 'Правильный ответ:',
    next: 'Далее',
    seeResults: 'Посмотреть результаты',
    roundComplete: 'Раунд завершён!',
    returnToMap: 'Вернуться к карте',
    score0: 'Попробуй снова! 💪',
    score1: 'Хорошее начало! Продолжай учиться. 📚',
    score2: 'Неплохо! Ты прогрессируешь. 🌍',
    score3: 'Отлично! Почти идеально! 🎯',
    score4: 'Идеально! Гений географии! 🏆',
    continents: {
      'Europa': 'Европа',
      'Azija': 'Азия',
      'Afrika': 'Африка',
      'Severna Amerika': 'Северная Америка',
      'Južna Amerika': 'Южная Америка',
      'Australija': 'Австралия',
    }
  },
  zh: {
    language: '语言',
    selectContinent: '选择大洲',
    chooseCard: '选一张牌，开始测验！',
    tapToReveal: '点击揭示',
    questionsAwait: '4道题目等待你',
    instructions: '点击6张牌中的一张开始',
    question: '问题',
    correct: '正确！干得好！',
    wrongAnswer: '正确答案：',
    next: '下一个',
    seeResults: '查看结果',
    roundComplete: '本轮结束！',
    returnToMap: '返回地图',
    score0: '再试一次！💪',
    score1: '好的开始！继续学习。📚',
    score2: '不错！你在进步。🌍',
    score3: '出色！几乎完美！🎯',
    score4: '完美！地理天才！🏆',
    continents: {
      'Europa': '欧洲',
      'Azija': '亚洲',
      'Afrika': '非洲',
      'Severna Amerika': '北美洲',
      'Južna Amerika': '南美洲',
      'Australija': '澳大利亚',
    }
  },
  ja: {
    language: '言語',
    selectContinent: '大陸を選択',
    chooseCard: 'カードを選んでクイズを始めよう！',
    tapToReveal: 'クリックして公開',
    questionsAwait: '4問があなたを待っています',
    instructions: '6枚のカードから1枚を選んでください',
    question: '問題',
    correct: '正解！よくできました！',
    wrongAnswer: '正解：',
    next: '次へ',
    seeResults: '結果を見る',
    roundComplete: 'ラウンド完了！',
    returnToMap: 'マップに戻る',
    score0: 'もう一度試してください！💪',
    score1: '良いスタート！学習を続けましょう。📚',
    score2: 'しっかりしています！成長しています。🌍',
    score3: '素晴らしい！ほぼ完璧！🎯',
    score4: '完璧！地理の天才！🏆',
    continents: {
      'Europa': 'ヨーロッパ',
      'Azija': 'アジア',
      'Afrika': 'アフリカ',
      'Severna Amerika': '北アメリカ',
      'Južna Amerika': '南アメリカ',
      'Australija': 'オーストラリア',
    }
  },
  ar: {
    language: 'اللغة',
    selectContinent: 'اختر قارة',
    chooseCard: 'اختر بطاقة وابدأ الاختبار!',
    tapToReveal: 'انقر للكشف',
    questionsAwait: '4 أسئلة في انتظارك',
    instructions: 'انقر على إحدى البطاقات الست للبدء',
    question: 'سؤال',
    correct: 'صحيح! أحسنت!',
    wrongAnswer: 'الإجابة الصحيحة:',
    next: 'التالي',
    seeResults: 'عرض النتائج',
    roundComplete: 'اكتملت الجولة!',
    returnToMap: 'العودة إلى الخريطة',
    score0: 'حاول مرة أخرى! 💪',
    score1: 'بداية جيدة! استمر في التعلم. 📚',
    score2: 'متين! أنت تتحسن. 🌍',
    score3: 'ممتاز! تقريبًا مثالي! 🎯',
    score4: 'مثالي! عبقري الجغرافيا! 🏆',
    continents: {
      'Europa': 'أوروبا',
      'Azija': 'آسيا',
      'Afrika': 'أفريقيا',
      'Severna Amerika': 'أمريكا الشمالية',
      'Južna Amerika': 'أمريكا الجنوبية',
      'Australija': 'أستراليا',
    }
  },
  tr: {
    language: 'Dil',
    selectContinent: 'Kıta seçin',
    chooseCard: 'Bir kart seç ve quizi başlat!',
    tapToReveal: 'Açmak için tıkla',
    questionsAwait: '4 soru sizi bekliyor',
    instructions: 'Başlamak için 6 karttan birine tıklayın',
    question: 'Soru',
    correct: 'Doğru! Aferin!',
    wrongAnswer: 'Doğru cevap:',
    next: 'Sonraki',
    seeResults: 'Sonuçları Gör',
    roundComplete: 'Tur Tamamlandı!',
    returnToMap: 'Haritaya Dön',
    score0: 'Tekrar deneyin! 💪',
    score1: 'İyi başlangıç! Öğrenmeye devam et. 📚',
    score2: 'Güçlü! Gelişiyorsunuz. 🌍',
    score3: 'Mükemmel! Neredeyse mükemmel! 🎯',
    score4: 'Mükemmel! Coğrafya dahisi! 🏆',
    continents: {
      'Europa': 'Avrupa',
      'Azija': 'Asya',
      'Afrika': 'Afrika',
      'Severna Amerika': 'Kuzey Amerika',
      'Južna Amerika': 'Güney Amerika',
      'Australija': 'Avustralya',
    }
  },
}

// Translation helper
function t(key) {
  return uiStrings[currentLang.value]?.[key] || uiStrings['en'][key] || key
}

// ─── TRANSLATION CACHE ────────────────────────────────────────
const translationCache = ref({})
const isTranslating = ref(false)

async function translateWithAPI(texts, targetLang) {
  const cacheKey = `${targetLang}:${texts.join('|||')}`
  if (translationCache.value[cacheKey]) return translationCache.value[cacheKey]

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Translate these geographic quiz questions/answers from Serbian to ${targetLang}. Keep proper nouns (country names, city names, geographic features) in the target language convention. Return ONLY a JSON array of translated strings in the same order, no explanation, no markdown:

${JSON.stringify(texts)}`
        }]
      })
    })
    const data = await response.json()
    const text = data.content?.[0]?.text || '[]'
    const clean = text.replace(/```json|```/g, '').trim()
    const result = JSON.parse(clean)
    translationCache.value[cacheKey] = result
    return result
  } catch (e) {
    console.error('Translation error:', e)
    return texts
  }
}

// ─── GAME STATE ───────────────────────────────────────────────
const phase = ref('selection')
const cardDeck = ref([])
const activeContinent = ref('')
const roundQuestions = ref([])
const currentIndex = ref(0)
const score = ref(0)
const answered = ref(false)
const isCorrect = ref(false)
const pipResults = ref([null, null, null, null])
const displayedOptions = ref([])

// Translated current question & answers
const translatedQuestion = ref('')
const translatedOptions = ref([])
const translatedCorrect = ref('')

const continentKeys = ['Europa', 'Azija', 'Afrika', 'Severna Amerika', 'Južna Amerika', 'Australija']

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
  setTimeout(startQuiz, 1200)
}

async function startQuiz() {
  const pool = questions.filter(q => q.continent === activeContinent.value)
  const picked = shuffle(pool).slice(0, 4)
  roundQuestions.value = picked
  currentIndex.value = 0
  score.value = 0
  pipResults.value = [null, null, null, null]
  await loadQuestion()
  phase.value = 'quiz'
}

async function loadQuestion() {
  const q = roundQuestions.value[currentIndex.value]
  answered.value = false
  isCorrect.value = false

  const lang = currentLang.value

  if (lang === 'sr') {
    // Native Serbian - no translation needed
    const wrongs = shuffle(q.wrong).slice(0, 3)
    displayedOptions.value = shuffle([q.correct, ...wrongs])
    translatedQuestion.value = q.question
    translatedOptions.value = displayedOptions.value
    translatedCorrect.value = q.correct
  } else {
    isTranslating.value = true
    const wrongs = shuffle(q.wrong).slice(0, 3)
    const rawOptions = [q.correct, ...wrongs]
    const toTranslate = [q.question, ...rawOptions]
    const langName = languages.find(l => l.code === lang)?.name || 'English'
    const translated = await translateWithAPI(toTranslate, langName)
    translatedQuestion.value = translated[0] || q.question
    const tOptions = translated.slice(1)
    const shuffled = shuffle(tOptions.map((t, i) => ({ t, isCorrect: i === 0 })))
    displayedOptions.value = shuffled.map(x => x.t)
    translatedOptions.value = displayedOptions.value
    translatedCorrect.value = shuffled.find(x => x.isCorrect)?.t || translated[1]
    isTranslating.value = false
  }
}

function answerClass(option) {
  if (!answered.value) return ''
  if (option === translatedCorrect.value) return 'correct'
  if (option === selectedOption.value) return 'wrong'
  return 'dimmed'
}

const selectedOption = ref('')

function selectAnswer(option) {
  if (answered.value) return
  selectedOption.value = option
  answered.value = true
  isCorrect.value = option === translatedCorrect.value
  pipResults.value[currentIndex.value] = isCorrect.value
  if (isCorrect.value) score.value++
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

const scoreComment = computed(() => {
  const s = score.value
  if (s === 0) return t('score0')
  if (s === 1) return t('score1')
  if (s === 2) return t('score2')
  if (s === 3) return t('score3')
  return t('score4')
})

// ─── CONTINENT HELPERS ────────────────────────────────────────
function continentEmoji(name) {
  const map = {
    'Europa': '🏰',
    'Azija': '🏯',
    'Afrika': '🦁',
    'Severna Amerika': '🗽',
    'Južna Amerika': '🌿',
    'Australija': '🦘',
  }
  return map[name] || '🌍'
}

function translateContinent(name) {
  return uiStrings[currentLang.value]?.continents?.[name] || uiStrings['en'].continents[name] || name
}

function continentStyle(name) {
  const map = {
    'Europa': { bg: 'linear-gradient(135deg, #1a237e 0%, #283593 60%, #3949ab 100%)', accent: '#7986cb' },
    'Azija': { bg: 'linear-gradient(135deg, #b71c1c 0%, #c62828 60%, #e53935 100%)', accent: '#ef9a9a' },
    'Afrika': { bg: 'linear-gradient(135deg, #e65100 0%, #ef6c00 60%, #fb8c00 100%)', accent: '#ffcc80' },
    'Severna Amerika': { bg: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #388e3c 100%)', accent: '#a5d6a7' },
    'Južna Amerika': { bg: 'linear-gradient(135deg, #006064 0%, #00838f 60%, #0097a7 100%)', accent: '#80deea' },
    'Australija': { bg: 'linear-gradient(135deg, #bf360c 0%, #d84315 60%, #e64a19 100%)', accent: '#ffab91' },
  }
  const style = map[name] || { bg: 'linear-gradient(135deg, #37474f, #546e7a)', accent: '#b0bec5' }
  return { background: style.bg, '--cf-accent': style.accent }
}

// ─── LANGUAGE CHANGE ─────────────────────────────────────────
async function changeLang(code) {
  currentLang.value = code
  if (phase.value === 'quiz') {
    await loadQuestion()
  }
}

onMounted(() => {
  buildCardDeck()
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ─── CSS Variables ─── */
:root {
  --ink: #0d1117;
  --ink-2: #161b22;
  --ink-3: #21262d;
  --surface: #1a1f2e;
  --gold: #f5c842;
  --gold-dim: rgba(245, 200, 66, 0.15);
  --gold-border: rgba(245, 200, 66, 0.35);
  --text: #c9d1d9;
  --text-dim: #8b949e;
  --text-h: #f0f6fc;
  --correct: #3fb950;
  --wrong: #f85149;
  --correct-bg: rgba(63, 185, 80, 0.12);
  --wrong-bg: rgba(248, 81, 73, 0.12);
  --border: rgba(240, 246, 252, 0.08);
  --radius: 16px;
  --shadow: 0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3);
  --font-body: 'DM Sans', system-ui, sans-serif;
  --font-display: 'Playfair Display', Georgia, serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--ink);
  color: var(--text);
  font-family: var(--font-body);
  min-height: 100vh;
  overflow-x: hidden;
}

/* ─── Background ─── */
#app-wrapper {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.bg-blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  pointer-events: none;
  z-index: 0;
}
.blob-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, #1a6b4a, transparent);
  top: -200px; left: -200px;
}
.blob-2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, #f5c842, transparent);
  bottom: -150px; right: -150px;
}
.grid-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(240,246,252,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(240,246,252,0.03) 1px, transparent 1px);
  background-size: 48px 48px;
}

/* ─── Header ─── */
.app-header {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 32px;
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.logo-icon { font-size: 26px; }
.logo-text {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  color: var(--gold);
  letter-spacing: 0.5px;
}

.lang-selector-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  flex: 1;
  justify-content: flex-end;
}
.lang-label {
  font-size: 13px;
  color: var(--text-dim);
  white-space: nowrap;
  flex-shrink: 0;
}

/* Cross-browser scrollable language row */
.lang-scroll-container {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--gold-border) transparent;
  max-width: 600px;
  flex: 1;
  min-width: 0;
  /* Force scroll on all browsers */
  display: block;
}
.lang-scroll-container::-webkit-scrollbar {
  height: 4px;
}
.lang-scroll-container::-webkit-scrollbar-track {
  background: transparent;
}
.lang-scroll-container::-webkit-scrollbar-thumb {
  background: var(--gold-border);
  border-radius: 2px;
}

.lang-scroll-inner {
  display: flex;
  gap: 6px;
  padding: 4px 2px;
  /* Prevent wrapping so scroll works */
  flex-wrap: nowrap;
  width: max-content;
}

.lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: transparent;
  color: var(--text-dim);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
}
.lang-btn:hover {
  background: var(--gold-dim);
  border-color: var(--gold-border);
  color: var(--gold);
}
.lang-btn.active {
  background: var(--gold-dim);
  border-color: var(--gold);
  color: var(--gold);
  font-weight: 600;
}
.lang-flag { font-size: 16px; }
.lang-name { font-size: 13px; }

/* ─── Main ─── */
.app-main {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 40px 24px;
}

.phase-screen {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

/* ─── Phase transitions ─── */
.phase-enter-active, .phase-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.phase-enter-from { opacity: 0; transform: translateY(20px); }
.phase-leave-to { opacity: 0; transform: translateY(-20px); }

/* ─── Title Block ─── */
.title-block { text-align: center; }
.subtitle {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 10px;
}
.main-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  color: var(--text-h);
  letter-spacing: -0.5px;
}

/* ─── Card Grid ─── */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
}
@media (max-width: 600px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
}
@media (max-width: 380px) {
  .card-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
}

.card-wrapper {
  perspective: 1200px;
  cursor: pointer;
  transition: opacity 0.35s ease, filter 0.35s ease;
  aspect-ratio: 3/4;
}
.card-wrapper.locked {
  pointer-events: none;
  opacity: 0.22;
  filter: blur(2px);
}
.card-wrapper:not(.locked):hover .card-inner {
  transform: translateY(-8px) rotateY(5deg);
  box-shadow: 0 24px 48px rgba(0,0,0,0.5);
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.75s cubic-bezier(0.4, 0.2, 0.2, 1), box-shadow 0.3s ease;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.card-inner.flipped { transform: rotateY(180deg); }

.card-face {
  position: absolute;
  inset: 0;
  border-radius: var(--radius);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
}

/* Card Back */
.card-back {
  background: linear-gradient(145deg, #1a1f2e 0%, #0f1319 50%, #1e2433 100%);
  border: 1px solid var(--gold-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  position: relative;
}
.card-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(245, 200, 66, 0.06) 50%,
    transparent 60%
  );
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
  pointer-events: none;
}
@keyframes shimmer {
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
}
.card-back-number {
  font-family: var(--font-display);
  font-size: clamp(22px, 4vw, 32px);
  color: var(--gold);
  font-weight: 600;
}
.card-back-pattern {
  width: 60px;
  height: 60px;
  color: rgba(245, 200, 66, 0.3);
}
.card-back-hint {
  font-size: 11px;
  color: var(--text-dim);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
}

/* Card Front */
.card-front {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  text-align: center;
}
.card-front-emoji { font-size: clamp(32px, 6vw, 48px); }
.card-front-name {
  font-family: var(--font-display);
  font-size: clamp(14px, 2.5vw, 20px);
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
}
.card-front-divider {
  width: 40px; height: 2px;
  background: rgba(255,255,255,0.4);
  border-radius: 1px;
}
.card-front-info {
  font-size: 11px;
  color: rgba(255,255,255,0.7);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.instructions-text {
  font-size: 14px;
  color: var(--text-dim);
  text-align: center;
}

/* ─── Quiz ─── */
.quiz-container {
  width: 100%;
  max-width: 720px;
  background: var(--ink-2);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.quiz-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  gap: 12px;
}
.quiz-continent-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.quiz-emoji { font-size: 22px; }
.quiz-continent-name {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}
.quiz-progress-text {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.8);
  white-space: nowrap;
}

.progress-bar-track {
  height: 3px;
  background: rgba(255,255,255,0.1);
}
.progress-bar-fill {
  height: 100%;
  background: var(--gold);
  transition: width 0.4s ease;
}

.quiz-body { padding: 28px 24px 20px; }

.q-slide-enter-active, .q-slide-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}
.q-slide-enter-from { opacity: 0; transform: translateX(20px); }
.q-slide-leave-to { opacity: 0; transform: translateX(-20px); }

.question-text {
  font-family: var(--font-display);
  font-size: clamp(17px, 2.5vw, 22px);
  font-weight: 500;
  color: var(--text-h);
  line-height: 1.45;
  margin-bottom: 24px;
  text-align: center;
}

.answers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}
@media (max-width: 500px) {
  .answers-grid { grid-template-columns: 1fr; }
}

.answer-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--ink-3);
  border: 1.5px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  line-height: 1.4;
}
.answer-btn:not(:disabled):hover {
  background: var(--gold-dim);
  border-color: var(--gold-border);
  color: var(--text-h);
  transform: translateY(-2px);
}
.answer-btn:disabled { cursor: default; }
.answer-btn.correct {
  background: var(--correct-bg);
  border-color: var(--correct);
  color: var(--correct);
}
.answer-btn.wrong {
  background: var(--wrong-bg);
  border-color: var(--wrong);
  color: var(--wrong);
}
.answer-btn.dimmed {
  opacity: 0.35;
}

.answer-letter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: 8px;
  background: rgba(255,255,255,0.06);
  font-size: 12px;
  font-weight: 700;
  color: var(--text-dim);
  font-family: var(--font-body);
}
.answer-btn.correct .answer-letter { background: rgba(63,185,80,0.2); color: var(--correct); }
.answer-btn.wrong .answer-letter { background: rgba(248,81,73,0.2); color: var(--wrong); }

/* Feedback bar */
.feedback-enter-active, .feedback-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.feedback-enter-from { opacity: 0; transform: translateY(8px); }
.feedback-leave-to { opacity: 0; transform: translateY(8px); }

.feedback-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 12px;
  margin-top: 4px;
  flex-wrap: wrap;
}
.feedback-correct { background: var(--correct-bg); border: 1px solid rgba(63,185,80,0.3); }
.feedback-wrong { background: var(--wrong-bg); border: 1px solid rgba(248,81,73,0.3); }

.feedback-left {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.feedback-icon {
  font-size: 18px;
  font-weight: 700;
  flex-shrink: 0;
}
.feedback-correct .feedback-icon { color: var(--correct); }
.feedback-wrong .feedback-icon { color: var(--wrong); }
.feedback-msg {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-h);
  line-height: 1.3;
}

.next-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  background: var(--gold);
  border: none;
  border-radius: 8px;
  color: #000;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
}
.next-btn:hover { background: #e8bb36; transform: translateY(-1px); }
.next-arrow { font-size: 16px; }

/* Pips */
.quiz-pips {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 16px 24px 20px;
}
.pip {
  height: 5px;
  flex: 1;
  max-width: 80px;
  border-radius: 3px;
  background: var(--ink-3);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}
.pip-active {
  background: var(--gold);
  border-color: var(--gold);
  transform: scaleY(1.6);
}
.pip-correct { background: var(--correct); border-color: var(--correct); }
.pip-wrong { background: var(--wrong); border-color: var(--wrong); }

/* ─── Result ─── */
.result-card {
  width: 100%;
  max-width: 480px;
  background: var(--ink-2);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.result-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 28px;
}
.result-emoji { font-size: 36px; }
.result-continent {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.result-body {
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.result-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
}

.stars-row { display: flex; gap: 10px; }
.star {
  font-size: 32px;
  color: var(--ink-3);
  filter: drop-shadow(0 0 0 transparent);
  transition: all 0.3s ease;
}
.star.lit {
  color: var(--gold);
  filter: drop-shadow(0 0 8px rgba(245, 200, 66, 0.6));
}

.score-display {
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.score-number {
  font-family: var(--font-display);
  font-size: 72px;
  font-weight: 700;
  color: var(--text-h);
  line-height: 1;
}
.score-slash {
  font-size: 40px;
  color: var(--text-dim);
  font-weight: 300;
}
.score-total {
  font-family: var(--font-display);
  font-size: 40px;
  color: var(--text-dim);
  font-weight: 400;
}

.score-comment {
  font-size: 15px;
  color: var(--text-dim);
  text-align: center;
  font-style: italic;
}

.pip-results-row {
  display: flex;
  gap: 10px;
}
.result-pip {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
}
.result-pip-correct {
  background: var(--correct-bg);
  border: 1.5px solid var(--correct);
  color: var(--correct);
}
.result-pip-wrong {
  background: var(--wrong-bg);
  border: 1.5px solid var(--wrong);
  color: var(--wrong);
}

.return-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  background: transparent;
  border: 1.5px solid var(--gold-border);
  border-radius: 10px;
  color: var(--gold);
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.3px;
}
.return-btn:hover {
  background: var(--gold-dim);
  border-color: var(--gold);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(245, 200, 66, 0.15);
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .app-header {
    padding: 12px 16px;
    gap: 10px;
  }
  .app-main { padding: 24px 16px; }
  .quiz-body { padding: 20px 16px 16px; }
  .quiz-header { padding: 14px 16px; }
  .quiz-pips { padding: 12px 16px 16px; }
  .result-body { padding: 24px 20px; }
}
</style>