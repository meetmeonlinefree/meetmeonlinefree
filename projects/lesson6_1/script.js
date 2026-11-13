/**
 * УРОК #6.1 ПРАКТИКА: Конструкция "I want / She wants"
 * Полная база из 37 предложений с учебным переводом и Google Translate
 */
const LESSON_6_1_DATA = [
    {
        id: 1,
        num: "1",
        en: "I want to improve my grammar",
        ru: "Я хочу улучшить мою грамматику",
        google: "Я хочу улучшить свою грамматику.",
        category: "infinitive",
        formula: "I want + to + V",
        hint: "После «I want» перед глаголом «improve» (улучшить) ставится частица «to»."
    },
    {
        id: 2,
        num: "2",
        en: "I want to go there one more time",
        ru: "Я хочу пойти туда ещё один раз",
        google: "Я хочу съездить туда еще раз.",
        category: "infinitive",
        formula: "I want + to + go there",
        hint: "Запомните: перед словом «there» (туда) предлог «to» НЕ ставится! «Ещё один раз» = one more time."
    },
    {
        id: 3,
        num: "3",
        en: "She wants to live in another place",
        ru: "Она хочет жить в другом месте",
        google: "Она хочет жить в другом месте.",
        category: "third_person",
        formula: "She wants + to + V",
        hint: "С местоимением «She» (она) к глаголу добавляется -s: She wants. «В другом месте» (где?) = in another place."
    },
    {
        id: 4,
        num: "4",
        en: "She wants to do it",
        ru: "Она хочет сделать это",
        google: "Она хочет это сделать.",
        category: "third_person",
        formula: "She wants + to + V",
        hint: "3-е лицо ед. числа: She wants (с окончанием -s) + to do it."
    },
    {
        id: 5,
        num: "5",
        en: "I want to know it",
        ru: "Я хочу знать это",
        google: "Я хочу это узнать.",
        category: "infinitive",
        formula: "I want + to + V",
        hint: "Между двумя глаголами «want» и «know» ставим частицу «to»."
    },
    {
        id: 6,
        num: "6",
        en: "I want to speak English without mistakes",
        ru: "Я хочу говорить по-английски без ошибок",
        google: "Я хочу говорить по-английски без ошибок.",
        category: "infinitive",
        formula: "I want + to + V",
        hint: "«Говорить по-английски» = speak English. «Без ошибок» = without mistakes."
    },
    {
        id: 7,
        num: "7",
        en: "She wants to see you right now",
        ru: "Она хочет увидеть тебя прямо сейчас",
        google: "Она хочет видеть тебя прямо сейчас.",
        category: "third_person",
        formula: "She wants + to + V",
        hint: "She wants (окончание -s!) + to see you. «Прямо сейчас» = right now."
    },
    {
        id: 8,
        num: "8",
        en: "I want this computer",
        ru: "Я хочу этот компьютер",
        google: "Мне нужен этот компьютер.",
        category: "noun",
        formula: "I want + предмет",
        hint: "Здесь нет второго глагола (мы хотим вещь), поэтому частица «to» НЕ нужна: I want this computer."
    },
    {
        id: 9,
        num: "9",
        en: "I want this dress",
        ru: "Я хочу это платье",
        google: "Я хочу это платье",
        category: "noun",
        formula: "I want + предмет",
        hint: "Желание предмета без действия — частица «to» не ставится: I want this dress."
    },
    {
        id: 10,
        num: "10",
        en: "I want a good car",
        ru: "Я хочу хорошую машину",
        google: "Я хочу хорошую машину.",
        category: "noun",
        formula: "I want + a + прил. + сущ.",
        hint: "Перед исчисляемым существительным в ед. числе «car» нужен неопределённый артикль «a»: a good car."
    },
    {
        id: 11,
        num: "11",
        en: "He wants to buy this thing",
        ru: "Он хочет купить эту вещь",
        google: "Он хочет купить эту вещь.",
        category: "third_person",
        formula: "He wants + to + V",
        hint: "С местоимением «He» (он) добавляем -s: He wants + to buy this thing."
    },
    {
        id: 12,
        num: "12",
        en: "I want to go there again",
        ru: "Я хочу идти туда снова",
        google: "Я хочу поехать туда снова.",
        category: "infinitive",
        formula: "I want + to + go there",
        hint: "«Пойти туда» = to go there (без предлога перед there!). «Снова» = again."
    },
    {
        id: 13,
        num: "13",
        en: "I want to have a good job",
        ru: "Я хочу иметь хорошую работу",
        google: "Я хочу иметь хорошую работу.",
        category: "infinitive",
        formula: "I want + to + have + a...",
        hint: "«Иметь хорошую работу» = to have a good job (не забудьте артикль «a»!)."
    },
    {
        id: 14,
        num: "14",
        en: "I want to speak English fluently and correctly",
        altEn: ["I want to speak english fluently and correctly"],
        ru: "Я хочу говорить на английском свободно и правильно",
        google: "Я хочу свободно и правильно говорить по-английски.",
        category: "infinitive",
        formula: "I want + to + V + наречия",
        hint: "«Свободно и правильно» = fluently and correctly (ставится после speak English)."
    },
    {
        id: 15,
        num: "15",
        en: "I really want it",
        ru: "Я действительно хочу это",
        google: "Я очень этого хочу",
        category: "noun",
        formula: "I + really + want + it",
        hint: "Слово «really» (действительно / очень) ставится перед глаголом «want»."
    },
    {
        id: 16,
        num: "16",
        en: "I want to do it",
        ru: "Я хочу это сделать",
        google: "Я хочу это сделать",
        category: "infinitive",
        formula: "I want + to + V",
        hint: "В английском строгий порядок слов: сначала глагол «to do» (сделать), затем «it» (это)."
    },
    {
        id: 17,
        num: "17",
        en: "I want to be happy",
        ru: "Я хочу быть счастливым",
        google: "Я хочу быть счастливым",
        category: "infinitive",
        formula: "I want + to be + прил.",
        hint: "«Быть счастливым» = to be happy."
    },
    {
        id: 18,
        num: "18",
        en: "I want to thank you",
        ru: "Я хочу сказать тебе спасибо",
        google: "Я хочу поблагодарить вас.",
        category: "infinitive",
        formula: "I want + to + V",
        hint: "Глагол «поблагодарить / сказать спасибо» = to thank you."
    },
    {
        id: 19,
        num: "19",
        en: "I want to know English better",
        ru: "Я хочу знать английский лучше",
        google: "Я хочу лучше выучить английский язык.",
        category: "infinitive",
        formula: "I want + to + V",
        hint: "«Лучше» = better (ставится в конце фразы: know English better)."
    },
    {
        id: 20,
        num: "20",
        en: "I really want to know it",
        ru: "Я действительно хочу знать это",
        google: "Мне очень хочется это узнать.",
        category: "infinitive",
        formula: "I really want + to + V",
        hint: "Усилитель «really» перед «want», а между «want» и «know» — частица «to»."
    },
    {
        id: 21,
        num: "21",
        en: "I want a new computer",
        ru: "Я хочу новый компьютер",
        google: "Я хочу новый компьютер.",
        category: "noun",
        formula: "I want + a + прил. + сущ.",
        hint: "Компьютер исчисляемый в ед. числе, поэтому ставим артикль «a»: a new computer."
    },
    {
        id: 22,
        num: "22",
        en: "I want to speak English better",
        ru: "Я хочу говорить на английском лучше",
        google: "Я хочу лучше говорить по-английски.",
        category: "infinitive",
        formula: "I want + to + V",
        hint: "Сначала «speak English», затем наречие «better» (лучше)."
    },
    {
        id: 23,
        num: "23",
        en: "I want to speak English correctly",
        ru: "Я хочу говорить на английском правильно",
        google: "Я хочу говорить по-английски правильно.",
        category: "infinitive",
        formula: "I want + to + V",
        hint: "«Правильно» = correctly."
    },
    {
        id: 24,
        num: "24",
        en: "My parents want to live in another place",
        ru: "Мои родители хотят жить в другом месте",
        google: "Мои родители хотят жить в другом месте.",
        category: "infinitive",
        formula: "My parents want + to + V",
        hint: "«My parents» (мои родители — они, мн. число), поэтому глагол БЕЗ окончания -s: want!"
    },
    {
        id: 25,
        num: "25",
        en: "I want to improve my English",
        ru: "Я хочу улучшить мой английский",
        google: "Я хочу улучшить свой английский.",
        category: "infinitive",
        formula: "I want + to + V",
        hint: "«Улучшить мой английский» = to improve my English."
    },
    {
        id: 26,
        num: "26",
        en: "I want to go to another place",
        ru: "Я хочу идти в другое место (в другом месте)",
        google: "Я хочу поехать в другое место",
        category: "infinitive",
        formula: "go + to another place",
        hint: "С глаголом движения «go» направление (куда?) передаётся предлогом «to»: go to another place."
    },
    {
        id: 27,
        num: "27 (a)",
        en: "I want a new flat (apartment)",
        builderWords: ["I", "want", "a", "new", "flat (apartment)"],
        altEn: [
            "I want a new flat",
            "I want a new apartment",
            "I want a new flat(apartment)"
        ],
        ru: "Я хочу новую квартиру (квартира)",
        google: "Я хочу новую квартиру.",
        category: "noun",
        formula: "I want + a + прил. + сущ.",
        hint: "Квартира: британский вариант — «flat», американский — «apartment». Оба с артиклем «a»!"
    },
    {
        id: 28,
        num: "28",
        en: "I want to buy a new flat (apartment)",
        builderWords: ["I", "want", "to", "buy", "a", "new", "flat (apartment)"],
        altEn: [
            "I want to buy a new flat",
            "I want to buy a new apartment",
            "I want to buy a new flat(apartment)"
        ],
        ru: "Я хочу купить новую квартиру (квартира)",
        google: "Я хочу купить новую квартиру.",
        category: "infinitive",
        formula: "I want + to buy + a...",
        hint: "Появляется действие «купить» → ставим «to buy», и перед «new flat/apartment» не забываем артикль «a»."
    },
    {
        id: 29,
        num: "29",
        en: "My friend wants to live abroad",
        ru: "Мой друг хочет жить за границей",
        google: "Мой друг хочет жить за границей.",
        category: "third_person",
        formula: "My friend wants + to + V",
        hint: "«My friend» (мой друг = он/она, ед. ч.) → глагол с окончанием -s: wants! «За границей» = abroad (без предлога)."
    },
    {
        id: 30,
        num: "30",
        en: "She wants to do it right now",
        ru: "Она хочет сделать это прямо сейчас",
        google: "Она хочет сделать это прямо сейчас.",
        category: "third_person",
        formula: "She wants + to + V",
        hint: "She wants (с -s!) + to do it right now."
    },
    {
        id: 31,
        num: "31",
        en: "My friend wants to check it one more time",
        ru: "Мой друг хочет проверить это ещё один раз",
        google: "Мой друг хочет проверить это ещё раз.",
        category: "third_person",
        formula: "My friend wants + to + V",
        hint: "«My friend» = 3-е лицо ед. ч. → wants to check it one more time."
    },
    {
        id: 32,
        num: "32",
        en: "I want it",
        ru: "Я хочу это",
        google: "Я хочу это",
        category: "noun",
        formula: "I want + it",
        hint: "Короткая базовая конструкция без второго глагола: I want it."
    },
    {
        id: 33,
        num: "33",
        en: "I want to go abroad",
        ru: "Я хочу поехать за границу",
        google: "Я хочу поехать за границу",
        category: "infinitive",
        formula: "I want + to go abroad",
        hint: "Запомните: перед словом «abroad» (за границу) предлог «to» НЕ ставится! Только «to go abroad»."
    },
    {
        id: 34,
        num: "34",
        en: "I want this thing",
        ru: "Я хочу эту вещь",
        google: "Я хочу эту вещь.",
        category: "noun",
        formula: "I want + this + сущ.",
        hint: "«Эту вещь» = this thing (слово «this» заменяет артикль)."
    },
    {
        id: 35,
        num: "35",
        en: "I want to have a good car",
        ru: "Я хочу иметь хорошую машину",
        google: "Я хочу иметь хорошую машину.",
        category: "infinitive",
        formula: "I want + to have + a...",
        hint: "Здесь есть глагол «иметь» (to have), поэтому: I want to have a good car."
    },
    {
        id: 36,
        num: "36",
        en: "I want to learn English fast",
        ru: "Я хочу изучить английский быстро",
        google: "Я хочу быстро выучить английский.",
        category: "infinitive",
        formula: "I want + to + V",
        hint: "«Выучить / изучить английский быстро» = to learn English fast."
    },
    {
        id: 37,
        num: "37",
        en: "We want to know English",
        ru: "Мы хотим знать английский",
        google: "Мы хотим знать английский",
        category: "infinitive",
        formula: "We want + to + V",
        hint: "С местоимением «We» (мы) глагол используется в базовой форме: We want to know English."
    }
];

/* =====================================================
   STATE & STORAGE
   ===================================================== */
const STORAGE_KEY = "english_lesson6_1_3d_state_v1";

let appState = {
    xp: 0,
    streak: 0,
    masteredIds: [],
    soundEnabled: true,
    showGoogleTr: true,
    currentFilter: "all",
    currentMode: "builder", // 'builder' | 'quiz' | 'flashcards' | 'typing'
    deck: [...LESSON_6_1_DATA],
    currentIndex: 0,
    answeredCurrent: false,
    builderSelectedTokens: [],
    builderBankTokens: [],
    typingHintCount: 0
};

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            appState.xp = parsed.xp || 0;
            appState.streak = parsed.streak || 0;
            appState.masteredIds = Array.isArray(parsed.masteredIds) ? parsed.masteredIds : [];
            if (typeof parsed.soundEnabled === "boolean") appState.soundEnabled = parsed.soundEnabled;
        }
    } catch (e) {
        console.warn("Could not load state:", e);
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            xp: appState.xp,
            streak: appState.streak,
            masteredIds: appState.masteredIds,
            soundEnabled: appState.soundEnabled
        }));
    } catch (e) {
        console.warn("Could not save state:", e);
    }
}

/* =====================================================
   WEB AUDIO SYNTHESIZER & SPEECH SYNTHESIS
   ===================================================== */
let audioCtx = null;

function playTone(type) {
    if (!appState.soundEnabled) return;
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === "suspended") audioCtx.resume();

        const now = audioCtx.currentTime;
        if (type === "click") {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(520, now);
            osc.frequency.exponentialRampToValueAtTime(680, now + 0.06);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.06);
        } else if (type === "success") {
            const notes = [523.25, 659.25, 783.99, 1046.5];
            notes.forEach((freq, idx) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = "triangle";
                osc.frequency.setValueAtTime(freq, now + idx * 0.07);
                gain.gain.setValueAtTime(0.12, now + idx * 0.07);
                gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.25);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(now + idx * 0.07);
                osc.stop(now + idx * 0.07 + 0.25);
            });
        } else if (type === "error") {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(190, now);
            osc.frequency.linearRampToValueAtTime(130, now + 0.25);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.28);
        } else if (type === "flip") {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(340, now);
            osc.frequency.exponentialRampToValueAtTime(600, now + 0.11);
            gain.gain.setValueAtTime(0.07, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.11);
        }
    } catch (e) {
        // Ignore audio errors
    }
}

function speakEnglish(text, rate = 1.0) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    // Clean parenthetical explanation like "flat (apartment)" -> "flat, or apartment"
    const cleanText = text.replace(/\(apartment\)/gi, "or apartment");
    const utter = new SpeechSynthesisUtterance(cleanText);
    utter.lang = "en-US";
    utter.rate = rate;

    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Zira") || v.name.includes("David"))) || voices.find(v => v.lang.startsWith("en"));
    if (preferred) utter.voice = preferred;

    window.speechSynthesis.speak(utter);
}

/* =====================================================
   THREE.JS 3D INTERACTIVE BACKGROUND & KNOWLEDGE CORE
   ===================================================== */
let threeScene = null;
let crystalGroup = null;
let innerCrystal = null;
let outerWire = null;
let ringMesh = null;
let pulseState = { color: 0x00e5ff, boost: 0 };

function initThreeJS() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas || typeof THREE === "undefined") return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 26;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0x8a9eff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00e5ff, 2.2, 80);
    pointLight1.position.set(15, 15, 18);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff4ecd, 1.8, 80);
    pointLight2.position.set(-18, -12, 12);
    scene.add(pointLight2);

    // Central 3D Knowledge Crystal Group (positioned nicely on the right/top-right in 3D space)
    crystalGroup = new THREE.Group();
    crystalGroup.position.set(14, 4, -4);
    scene.add(crystalGroup);

    const icoGeo = new THREE.IcosahedronGeometry(3.2, 0);
    const icoMat = new THREE.MeshStandardMaterial({
        color: 0x6c5ce7,
        emissive: 0x1b1464,
        roughness: 0.2,
        metalness: 0.7,
        flatShading: true
    });
    innerCrystal = new THREE.Mesh(icoGeo, icoMat);
    crystalGroup.add(innerCrystal);

    const wireGeo = new THREE.IcosahedronGeometry(4.3, 1);
    const wireMat = new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.35
    });
    outerWire = new THREE.Mesh(wireGeo, wireMat);
    crystalGroup.add(outerWire);

    const torusGeo = new THREE.TorusGeometry(5.6, 0.08, 16, 90);
    const torusMat = new THREE.MeshBasicMaterial({
        color: 0xffd166,
        transparent: true,
        opacity: 0.5
    });
    ringMesh = new THREE.Mesh(torusGeo, torusMat);
    ringMesh.rotation.x = Math.PI / 3;
    crystalGroup.add(ringMesh);

    // Floating 3D mini-cubes & octahedrons across space
    const floatingShapes = [];
    const miniGeo1 = new THREE.OctahedronGeometry(0.65, 0);
    const miniGeo2 = new THREE.BoxGeometry(0.85, 0.85, 0.85);

    for (let i = 0; i < 28; i++) {
        const mat = new THREE.MeshStandardMaterial({
            color: i % 2 === 0 ? 0x00e5ff : 0x8e7cff,
            roughness: 0.3,
            metalness: 0.6,
            transparent: true,
            opacity: 0.45
        });
        const mesh = new THREE.Mesh(i % 2 === 0 ? miniGeo1 : miniGeo2, mat);
        mesh.position.set(
            (Math.random() - 0.5) * 55,
            (Math.random() - 0.5) * 35,
            (Math.random() - 0.5) * 25 - 8
        );
        mesh.userData = {
            rotSpeedX: (Math.random() - 0.5) * 0.02,
            rotSpeedY: (Math.random() - 0.5) * 0.02,
            floatOffset: Math.random() * Math.PI * 2
        };
        scene.add(mesh);
        floatingShapes.push(mesh);
    }

    // Starfield particles
    const starCount = 350;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
        starPositions[i] = (Math.random() - 0.5) * 90;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
        color: 0xa9c6ff,
        size: 0.18,
        transparent: true,
        opacity: 0.65
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    });

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    let clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        // Decay boost
        pulseState.boost *= 0.94;
        const speedMult = 1 + pulseState.boost * 8;

        if (innerCrystal && outerWire && ringMesh) {
            innerCrystal.rotation.y += 0.007 * speedMult;
            innerCrystal.rotation.x += 0.004 * speedMult;
            outerWire.rotation.y -= 0.005 * speedMult;
            ringMesh.rotation.z += 0.01 * speedMult;
            crystalGroup.position.y = 4 + Math.sin(elapsed * 1.4) * 0.8;
            const scale = 1 + pulseState.boost * 0.35;
            crystalGroup.scale.set(scale, scale, scale);
        }

        floatingShapes.forEach((m) => {
            m.rotation.x += m.userData.rotSpeedX * speedMult;
            m.rotation.y += m.userData.rotSpeedY * speedMult;
            m.position.y += Math.sin(elapsed + m.userData.floatOffset) * 0.008;
        });

        stars.rotation.y = elapsed * 0.015;

        // Smooth camera parallax
        camera.position.x += (mouseX * 2.2 - camera.position.x) * 0.04;
        camera.position.y += (mouseY * 1.6 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
    }
    animate();
}

function trigger3DPulse(isSuccess) {
    pulseState.boost = 1.0;
    if (outerWire && innerCrystal) {
        outerWire.material.color.setHex(isSuccess ? 0x06d6a0 : 0xff5c77);
        innerCrystal.material.emissive.setHex(isSuccess ? 0x055a43 : 0x6e1423);
        setTimeout(() => {
            if (outerWire && innerCrystal) {
                outerWire.material.color.setHex(0x00e5ff);
                innerCrystal.material.emissive.setHex(0x1b1464);
            }
        }, 700);
    }
}

/* =====================================================
   UI & HUD UPDATES
   ===================================================== */
function updateHUD() {
    document.getElementById("hud-xp").textContent = appState.xp;
    document.getElementById("hud-streak").textContent = appState.streak;
    document.getElementById("hud-mastered").textContent = appState.masteredIds.length;

    const pct = Math.round((appState.masteredIds.length / LESSON_6_1_DATA.length) * 100);
    document.getElementById("menu-progress-percent").textContent = `${pct}% (${appState.masteredIds.length} из ${LESSON_6_1_DATA.length})`;
    document.getElementById("menu-progress-fill").style.width = `${pct}%`;

    const soundBtn = document.getElementById("btn-sound");
    soundBtn.textContent = appState.soundEnabled ? "🔊" : "🔇";
}

function switchView(viewName) {
    document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(`view-${viewName}`);
    if (target) target.classList.add("active");

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.view === viewName);
    });

    if (viewName === "play") {
        renderCurrentQuestion();
    } else if (viewName === "table") {
        renderFullTable();
    }
}

/* =====================================================
   DECK FILTERING & SHUFFLING
   ===================================================== */
function buildFilteredDeck(filterName) {
    appState.currentFilter = filterName;
    let filtered = [...LESSON_6_1_DATA];

    if (filterName === "infinitive") {
        filtered = LESSON_6_1_DATA.filter(item => item.category === "infinitive");
    } else if (filterName === "third_person") {
        filtered = LESSON_6_1_DATA.filter(item => item.category === "third_person");
    } else if (filterName === "noun") {
        filtered = LESSON_6_1_DATA.filter(item => item.category === "noun");
    } else if (filterName === "unmastered") {
        filtered = LESSON_6_1_DATA.filter(item => !appState.masteredIds.includes(item.id));
        if (filtered.length === 0) {
            filtered = [...LESSON_6_1_DATA];
        }
    }

    appState.deck = filtered;
    appState.currentIndex = 0;
}

function shuffleDeck() {
    for (let i = appState.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [appState.deck[i], appState.deck[j]] = [appState.deck[j], appState.deck[i]];
    }
    appState.currentIndex = 0;
    playTone("flip");
    renderCurrentQuestion();
}

/* =====================================================
   GAMEPLAY ENGINE (ALL 4 MODES)
   ===================================================== */
function setGameMode(modeName) {
    appState.currentMode = modeName;
    document.querySelectorAll(".mini-mode-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.switchMode === modeName);
    });

    document.getElementById("zone-builder").classList.toggle("hidden", modeName !== "builder");
    document.getElementById("zone-quiz").classList.toggle("hidden", modeName !== "quiz");
    document.getElementById("zone-flashcards").classList.toggle("hidden", modeName !== "flashcards");
    document.getElementById("zone-typing").classList.toggle("hidden", modeName !== "typing");

    // In flashcards mode, hide top prompt card to focus on the 3D flip card
    document.getElementById("question-card-3d").classList.toggle("hidden", modeName === "flashcards");

    renderCurrentQuestion();
}

function getCurrentItem() {
    if (!appState.deck.length) appState.deck = [...LESSON_6_1_DATA];
    if (appState.currentIndex >= appState.deck.length) appState.currentIndex = 0;
    if (appState.currentIndex < 0) appState.currentIndex = appState.deck.length - 1;
    return appState.deck[appState.currentIndex];
}

function renderCurrentQuestion() {
    const item = getCurrentItem();
    appState.answeredCurrent = false;
    appState.typingHintCount = 0;

    // Hide feedback banner
    const fb = document.getElementById("feedback-banner");
    fb.classList.add("hidden");
    fb.classList.remove("wrong");

    // Update top progress
    const total = appState.deck.length;
    const curr = appState.currentIndex + 1;
    document.getElementById("question-counter").textContent = `Фраза ${curr} из ${total}`;
    document.getElementById("session-progress-fill").style.width = `${Math.round((curr / total) * 100)}%`;

    // Update Prompt Card
    document.getElementById("q-num-badge").textContent = `№ ${item.num}`;
    document.getElementById("q-grammar-badge").textContent = item.formula;
    const isMastered = appState.masteredIds.includes(item.id);
    const masteryBadge = document.getElementById("q-mastery-badge");
    masteryBadge.textContent = isMastered ? "★ Изучено" : "В процессе";
    masteryBadge.classList.toggle("mastered", isMastered);

    document.getElementById("q-ru-text").textContent = item.ru;
    document.getElementById("q-google-text").textContent = item.google;
    document.getElementById("q-google-box").classList.toggle("hidden", !appState.showGoogleTr);
    document.getElementById("q-hint-text").innerHTML = item.hint;

    // Render specific mode UI
    if (appState.currentMode === "builder") {
        setupBuilderMode(item);
    } else if (appState.currentMode === "quiz") {
        setupQuizMode(item);
    } else if (appState.currentMode === "flashcards") {
        setupFlashcardMode(item);
    } else if (appState.currentMode === "typing") {
        setupTypingMode(item);
    }
}

/* ----- MODE 1: 3D WORD BUILDER ----- */
function setupBuilderMode(item) {
    const tray = document.getElementById("builder-answer-tray");
    tray.classList.remove("correct-glow", "wrong-glow");

    const words = item.builderWords ? [...item.builderWords] : item.en.split(" ");
    // Add 1 or 2 smart distractor words to make it a real grammatical exercise!
    const distractorsPool = ["wants", "want", "to", "a", "in", "at", "is"];
    const lowerWords = words.map(w => w.toLowerCase());
    const extra = distractorsPool.filter(d => !lowerWords.includes(d)).slice(0, 2);

    const allTokens = [...words, ...extra].map((word, idx) => ({
        id: `tok-${idx}-${Math.random().toString(36).slice(2, 6)}`,
        text: word,
        used: false
    }));

    // Shuffle bank tokens
    for (let i = allTokens.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allTokens[i], allTokens[j]] = [allTokens[j], allTokens[i]];
    }

    appState.builderBankTokens = allTokens;
    appState.builderSelectedTokens = [];
    renderBuilderTokens();
}

function renderBuilderTokens() {
    const tray = document.getElementById("builder-answer-tray");
    const bank = document.getElementById("builder-word-bank");

    tray.innerHTML = "";
    if (appState.builderSelectedTokens.length === 0) {
        const ph = document.createElement("span");
        ph.className = "tray-placeholder";
        ph.textContent = "Нажмите на 3D-блоки слов ниже, чтобы собрать фразу...";
        tray.appendChild(ph);
    } else {
        appState.builderSelectedTokens.forEach((tok) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "word-tile-3d in-tray";
            btn.textContent = tok.text;
            btn.addEventListener("click", () => {
                if (appState.answeredCurrent) return;
                playTone("click");
                tok.used = false;
                appState.builderSelectedTokens = appState.builderSelectedTokens.filter(t => t.id !== tok.id);
                renderBuilderTokens();
            });
            tray.appendChild(btn);
        });
    }

    bank.innerHTML = "";
    appState.builderBankTokens.forEach((tok) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `word-tile-3d ${tok.used ? "used" : ""}`;
        btn.textContent = tok.text;
        btn.addEventListener("click", () => {
            if (tok.used || appState.answeredCurrent) return;
            playTone("click");
            tok.used = true;
            appState.builderSelectedTokens.push(tok);
            renderBuilderTokens();
        });
        bank.appendChild(btn);
    });
}

function normalizeSentence(str) {
    return str
        .toLowerCase()
        .replace(/[.!?]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function isAnswerMatchingItem(userStr, item) {
    const normUser = normalizeSentence(userStr);
    const validList = [item.en, ...(item.altEn || [])];
    return validList.some(valid => normalizeSentence(valid) === normUser);
}

function checkBuilderAnswer() {
    if (appState.answeredCurrent) {
        goToNextQuestion();
        return;
    }
    const item = getCurrentItem();
    const userPhrase = appState.builderSelectedTokens.map(t => t.text).join(" ");
    const tray = document.getElementById("builder-answer-tray");

    const isCorrect = isAnswerMatchingItem(userPhrase, item);
    if (isCorrect) {
        tray.classList.add("correct-glow");
        handleAnswerResult(true, item);
    } else {
        tray.classList.add("wrong-glow");
        setTimeout(() => tray.classList.remove("wrong-glow"), 500);
        handleAnswerResult(false, item);
    }
}

function giveBuilderHint() {
    if (appState.answeredCurrent) return;
    const item = getCurrentItem();
    const targetWords = item.builderWords ? item.builderWords : item.en.split(" ");

    // Find how many words at the start of builderSelectedTokens are already correct
    let matchCount = 0;
    for (let i = 0; i < appState.builderSelectedTokens.length; i++) {
        if (
            targetWords[i] &&
            appState.builderSelectedTokens[i].text.toLowerCase() === targetWords[i].toLowerCase()
        ) {
            matchCount++;
        } else {
            break;
        }
    }

    // Remove any wrongly placed trailing tokens
    while (appState.builderSelectedTokens.length > matchCount) {
        const popped = appState.builderSelectedTokens.pop();
        popped.used = false;
    }

    const nextWordNeeded = targetWords[matchCount];
    if (!nextWordNeeded) return;

    const candidate = appState.builderBankTokens.find(
        t => !t.used && t.text.toLowerCase() === nextWordNeeded.toLowerCase()
    );
    if (candidate) {
        playTone("click");
        candidate.used = true;
        appState.builderSelectedTokens.push(candidate);
        renderBuilderTokens();
    }
}

/* ----- MODE 2: MULTIPLE CHOICE 3D QUIZ ----- */
function setupQuizMode(item) {
    const grid = document.getElementById("quiz-options-grid");
    grid.innerHTML = "";

    // Build 3 believable distractors from other lesson sentences + grammar variations
    const syntheticDistractors = buildGrammarDistractors(item);
    const otherPhrases = LESSON_6_1_DATA
        .filter(x => x.id !== item.id)
        .map(x => x.en);

    // Shuffle other phrases
    for (let i = otherPhrases.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [otherPhrases[i], otherPhrases[j]] = [otherPhrases[j], otherPhrases[i]];
    }

    const chosenDistractors = [];
    for (const d of [...syntheticDistractors, ...otherPhrases]) {
        if (
            normalizeSentence(d) !== normalizeSentence(item.en) &&
            !chosenDistractors.some(existing => normalizeSentence(existing) === normalizeSentence(d))
        ) {
            chosenDistractors.push(d);
        }
        if (chosenDistractors.length === 3) break;
    }

    const options = [
        { text: item.en, isCorrect: true },
        ...chosenDistractors.map(d => ({ text: d, isCorrect: false }))
    ];

    // Shuffle options
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-option-card";
        btn.dataset.index = idx + 1;
        btn.innerHTML = `
            <span class="opt-key">${idx + 1}</span>
            <span>${opt.text}</span>
        `;
        btn.addEventListener("click", () => {
            if (appState.answeredCurrent) return;
            const allBtns = grid.querySelectorAll(".quiz-option-card");
            allBtns.forEach(b => (b.disabled = true));

            if (opt.isCorrect) {
                btn.classList.add("correct");
                handleAnswerResult(true, item);
            } else {
                btn.classList.add("wrong");
                // Highlight the right one
                allBtns.forEach((b, bIdx) => {
                    if (options[bIdx].isCorrect) b.classList.add("correct");
                });
                handleAnswerResult(false, item);
            }
        });
        grid.appendChild(btn);
    });
}

function buildGrammarDistractors(item) {
    const en = item.en;
    const list = [];

    // Common learner mistakes for Lesson 6.1:
    // 1. Missing 'to' or extra 'to'
    if (en.includes(" want to ")) {
        list.push(en.replace(" want to ", " want "));
        list.push(en.replace(" want to ", " wants to "));
    } else if (en.includes(" wants to ")) {
        list.push(en.replace(" wants to ", " want to "));
        list.push(en.replace(" wants to ", " wants "));
    } else if (en.startsWith("I want ")) {
        list.push(en.replace("I want ", "I want to "));
        list.push(en.replace("I want ", "I wants "));
    }

    // 2. Article mistakes ("a good car" -> "good car")
    if (en.includes(" a ")) {
        list.push(en.replace(" a ", " "));
    }
    if (en.includes("go there")) {
        list.push(en.replace("go there", "go to there"));
    }
    if (en.includes("go abroad")) {
        list.push(en.replace("go abroad", "go to abroad"));
    }

    return list;
}

/* ----- MODE 3: 3D FLASHCARDS ----- */
function setupFlashcardMode(item) {
    const card = document.getElementById("flashcard-3d");
    card.classList.remove("is-flipped");

    document.getElementById("fc-num-front").textContent = `№ ${item.num}`;
    document.getElementById("fc-ru-main").textContent = item.ru;
    document.getElementById("fc-ru-google").textContent = `Google: ${item.google}`;
    document.getElementById("fc-en-main").textContent = item.en;
    document.getElementById("fc-grammar-note").textContent = `${item.formula} — ${item.hint}`;
}

/* ----- MODE 4: TYPING CHALLENGE ----- */
function setupTypingMode(item) {
    const input = document.getElementById("typing-input");
    input.value = "";
    input.disabled = false;
    document.getElementById("typing-letter-hint").textContent = "";
    setTimeout(() => input.focus(), 50);
}

function checkTypingAnswer() {
    if (appState.answeredCurrent) {
        goToNextQuestion();
        return;
    }
    const item = getCurrentItem();
    const input = document.getElementById("typing-input");
    const userVal = input.value.trim();
    if (!userVal) return;

    const isCorrect = isAnswerMatchingItem(userVal, item);
    if (isCorrect) {
        input.disabled = true;
        handleAnswerResult(true, item);
    } else {
        handleAnswerResult(false, item);
    }
}

function giveTypingHint() {
    const item = getCurrentItem();
    const words = item.en.split(" ");
    appState.typingHintCount = Math.min(words.length, appState.typingHintCount + 1);
    const revealed = words.slice(0, appState.typingHintCount).join(" ");
    const masked = words.slice(appState.typingHintCount).map(w => "•".repeat(w.length)).join(" ");
    document.getElementById("typing-letter-hint").textContent = `Подсказка: ${revealed} ${masked}`;
    playTone("click");
}

/* ----- SHARED RESULT HANDLER ----- */
function handleAnswerResult(isCorrect, item) {
    appState.answeredCurrent = true;
    const fb = document.getElementById("feedback-banner");
    const icon = document.getElementById("feedback-icon");
    const title = document.getElementById("feedback-title");
    const correctEn = document.getElementById("feedback-correct-en");

    fb.classList.remove("hidden");
    correctEn.textContent = `${item.en} — «${item.ru}»`;

    if (isCorrect) {
        fb.classList.remove("wrong");
        icon.textContent = "🎉";
        appState.streak += 1;
        const bonus = Math.min(20, appState.streak * 2);
        const gained = 15 + bonus;
        appState.xp += gained;

        if (!appState.masteredIds.includes(item.id)) {
            appState.masteredIds.push(item.id);
        }

        title.textContent = `Безупречно! +${gained} XP (Серия: ${appState.streak} 🔥)`;
        playTone("success");
        trigger3DPulse(true);
        speakEnglish(item.en, 1.0);
    } else {
        fb.classList.add("wrong");
        icon.textContent = "💡";
        appState.streak = 0;
        title.textContent = "Обратите внимание на правильный ответ:";
        playTone("error");
        trigger3DPulse(false);
        speakEnglish(item.en, 0.92);
    }

    saveState();
    updateHUD();
}

function goToNextQuestion() {
    appState.currentIndex = (appState.currentIndex + 1) % appState.deck.length;
    renderCurrentQuestion();
}

function goToPrevQuestion() {
    appState.currentIndex = (appState.currentIndex - 1 + appState.deck.length) % appState.deck.length;
    renderCurrentQuestion();
}

/* =====================================================
   FULL TABLE VIEW (ALL 37 SENTENCES)
   ===================================================== */
function renderFullTable() {
    const tbody = document.getElementById("lesson-table-body");
    const searchQuery = (document.getElementById("table-search").value || "").toLowerCase().trim();
    const catFilter = document.getElementById("table-filter-select").value;

    tbody.innerHTML = "";

    const filtered = LESSON_6_1_DATA.filter(item => {
        const matchesCat = catFilter === "all" || item.category === catFilter;
        const matchesSearch =
            !searchQuery ||
            item.en.toLowerCase().includes(searchQuery) ||
            item.ru.toLowerCase().includes(searchQuery) ||
            item.google.toLowerCase().includes(searchQuery) ||
            item.num.toLowerCase().includes(searchQuery);
        return matchesCat && matchesSearch;
    });

    filtered.forEach(item => {
        const tr = document.createElement("tr");
        const isMastered = appState.masteredIds.includes(item.id);

        tr.innerHTML = `
            <td><strong>${item.num}</strong></td>
            <td>
                <button class="btn-table-mini btn-row-speak" title="Прослушать">🔊</button>
            </td>
            <td class="td-en">${item.en}</td>
            <td class="td-ru">${item.ru}</td>
            <td class="td-google">${item.google}</td>
            <td>
                <span class="mastery-badge ${isMastered ? "mastered" : ""}">
                    ${isMastered ? "★ Изучено" : "Новое"}
                </span>
            </td>
            <td>
                <button class="btn-table-mini btn-row-practice">Тренировать →</button>
            </td>
        `;

        tr.querySelector(".btn-row-speak").addEventListener("click", () => {
            speakEnglish(item.en, 1.0);
        });

        tr.querySelector(".btn-row-practice").addEventListener("click", () => {
            appState.deck = [...LESSON_6_1_DATA];
            appState.currentIndex = LESSON_6_1_DATA.findIndex(x => x.id === item.id);
            switchView("play");
        });

        tbody.appendChild(tr);
    });
}

/* =====================================================
   EVENT LISTENERS & INITIALIZATION
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    updateHUD();
    initThreeJS();
    renderFullTable();

    // Navigation Tabs
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            playTone("click");
            switchView(btn.dataset.view);
        });
    });

    document.getElementById("btn-home").addEventListener("click", () => {
        switchView("menu");
    });

    // Sound Toggle
    document.getElementById("btn-sound").addEventListener("click", () => {
        appState.soundEnabled = !appState.soundEnabled;
        saveState();
        updateHUD();
    });

    // Filter Chips on Main Menu
    document.querySelectorAll("#deck-filter-chips .chip").forEach(chip => {
        chip.addEventListener("click", () => {
            playTone("click");
            document.querySelectorAll("#deck-filter-chips .chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            buildFilteredDeck(chip.dataset.filter);
        });
    });

    // 4 Mode Cards on Menu
    document.querySelectorAll(".mode-card-3d").forEach(card => {
        card.addEventListener("click", () => {
            playTone("click");
            const mode = card.dataset.mode;
            setGameMode(mode);
            switchView("play");
        });
    });

    // Mode Switcher Pills inside Arena
    document.querySelectorAll(".mini-mode-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            playTone("click");
            setGameMode(btn.dataset.switchMode);
        });
    });

    // Audio Controls
    document.getElementById("btn-speak-current").addEventListener("click", () => {
        speakEnglish(getCurrentItem().en, 1.0);
    });
    document.getElementById("btn-speak-slow").addEventListener("click", () => {
        speakEnglish(getCurrentItem().en, 0.72);
    });
    document.getElementById("toggle-google-tr").addEventListener("change", (e) => {
        appState.showGoogleTr = e.target.checked;
        document.getElementById("q-google-box").classList.toggle("hidden", !appState.showGoogleTr);
    });

    // Builder Controls
    document.getElementById("btn-builder-check").addEventListener("click", checkBuilderAnswer);
    document.getElementById("btn-builder-clear").addEventListener("click", () => {
        if (appState.answeredCurrent) return;
        playTone("click");
        appState.builderBankTokens.forEach(t => (t.used = false));
        appState.builderSelectedTokens = [];
        renderBuilderTokens();
    });
    document.getElementById("btn-builder-hint").addEventListener("click", giveBuilderHint);

    // Flashcard Controls
    const flashcardEl = document.getElementById("flashcard-3d");
    flashcardEl.addEventListener("click", (e) => {
        if (e.target.closest("#btn-fc-speak")) return;
        playTone("flip");
        flashcardEl.classList.toggle("is-flipped");
    });
    document.getElementById("btn-fc-speak").addEventListener("click", (e) => {
        e.stopPropagation();
        speakEnglish(getCurrentItem().en, 1.0);
    });
    document.getElementById("btn-fc-know").addEventListener("click", () => {
        const item = getCurrentItem();
        if (!appState.masteredIds.includes(item.id)) {
            appState.masteredIds.push(item.id);
        }
        appState.xp += 15;
        appState.streak += 1;
        playTone("success");
        trigger3DPulse(true);
        saveState();
        updateHUD();
        goToNextQuestion();
    });
    document.getElementById("btn-fc-hard").addEventListener("click", () => {
        playTone("flip");
        goToNextQuestion();
    });

    // Typing Controls
    document.getElementById("btn-typing-check").addEventListener("click", checkTypingAnswer);
    document.getElementById("btn-typing-hint").addEventListener("click", giveTypingHint);
    document.getElementById("typing-input").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            checkTypingAnswer();
        }
    });

    // Feedback Banner Controls
    document.getElementById("btn-next-question").addEventListener("click", goToNextQuestion);
    document.getElementById("btn-feedback-listen").addEventListener("click", () => {
        speakEnglish(getCurrentItem().en, 1.0);
    });

    // Stage Navigation
    document.getElementById("btn-prev-item").addEventListener("click", goToPrevQuestion);
    document.getElementById("btn-next-item").addEventListener("click", goToNextQuestion);
    document.getElementById("btn-shuffle-deck").addEventListener("click", shuffleDeck);

    // Table Filters
    document.getElementById("table-search").addEventListener("input", renderFullTable);
    document.getElementById("table-filter-select").addEventListener("change", renderFullTable);

    // Reset Progress
    document.getElementById("btn-reset-progress").addEventListener("click", () => {
        if (confirm("Сбросить весь прогресс, очки XP и изученные фразы урока 6.1?")) {
            appState.xp = 0;
            appState.streak = 0;
            appState.masteredIds = [];
            saveState();
            updateHUD();
            renderFullTable();
        }
    });

    // Global Keyboard Shortcuts for Arena
    window.addEventListener("keydown", (e) => {
        const playViewActive = document.getElementById("view-play").classList.contains("active");
        if (!playViewActive) return;

        // Avoid intercepting typing input
        if (document.activeElement && document.activeElement.id === "typing-input") return;

        if (e.key === "Enter" && appState.answeredCurrent) {
            e.preventDefault();
            goToNextQuestion();
        } else if (appState.currentMode === "quiz" && !appState.answeredCurrent && ["1", "2", "3", "4"].includes(e.key)) {
            const idx = parseInt(e.key, 10) - 1;
            const btns = document.querySelectorAll("#quiz-options-grid .quiz-option-card");
            if (btns[idx]) btns[idx].click();
        } else if (appState.currentMode === "flashcards" && e.code === "Space") {
            e.preventDefault();
            playTone("flip");
            flashcardEl.classList.toggle("is-flipped");
        }
    });
});
