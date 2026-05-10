import fs from 'fs';
import translate from 'google-translate-api-x';
import rawQuestions from './src/data/questions.js';

const filePath = './src/data/questions_translated.json';
// Only your five requested languages
const targetLangs = ['en', 'ru', 'tr', 'lv']; 

async function run() {
    console.log("🚀 Starting fresh translation for English, Russian, Turkish, and Latvian...");
    
    let newQuestions = rawQuestions.map(q => ({
        id: q.id,
        translations: { sr: q.translations.sr }
    }));

    for (let lang of targetLangs) {
        console.log(`\n🌍 Translating to: [${lang.toUpperCase()}]`);

        for (let i = 0; i < newQuestions.length; i++) {
            const q = newQuestions[i];
            const src = q.translations.sr;
            const textToTranslate = `${src.question} |*| ${src.correct} |*| ${src.wrong.join(' |*| ')}`;

            try {
                const res = await translate(textToTranslate, { 
                    from: 'sr', 
                    to: lang, 
                    forceTo: true 
                });

                const parts = res.text.split('|*|').map(p => p.trim());

                if (parts.length >= 3) {
                    q.translations[lang] = {
                        language: lang,
                        continent: src.continent,
                        question: parts[0],
                        correct: parts[1],
                        wrong: parts.slice(2)
                    };
                }
                
                process.stdout.write("."); 
                await new Promise(r => setTimeout(r, 700));

            } catch (err) {
                console.error(`\n❌ Error on ${q.id} [${lang}]: ${err.message}`);
                if (err.message.includes('429')) {
                    console.log("\n⚠️ Rate limit. Waiting 60s...");
                    await new Promise(r => setTimeout(r, 60000));
                    i--; 
                }
            }

            if (i % 10 === 0) {
                fs.writeFileSync(filePath, JSON.stringify(newQuestions, null, 2));
            }
        }
        console.log(`\n✅ Finished ${lang}`);
        fs.writeFileSync(filePath, JSON.stringify(newQuestions, null, 2));
    }
    console.log("\n✨ DONE! Targeted translation complete.");
}

run();