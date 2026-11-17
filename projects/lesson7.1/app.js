// ============================================================================
// TOBISH · MOON OUTPOST — LESSON 7.1 QUIZ GAME ("I like ..." & "I'd like ...")
// All 40 phrases from the attached Excel sheet (English, User RU, Google RU)
// ============================================================================

const PHRASES = [
  {
    id: 1,
    en: "I like this video",
    rawEn: "I like this video",
    ruUser: "Мне нравится это видео",
    ruGoogle: "Мне нравится это видео.",
    cat: "like",
    pattern: "I like + this ...",
    patternSub: "Мне нравится (вообще / в целом)",
    rule: "Используем «I like + предмет», когда говорим о том, что нам нравится вообще. Для единственного числа «это/этот/эта» используем слово this.",
    hint: "«Мне нравится» = I like, «это видео» = this video (без to и без would).",
    distractors: ["I'd like this video", "I likes this video"]
  },
  {
    id: 2,
    en: "I like this thing",
    rawEn: "I like this thing",
    ruUser: "Мне нравится это вешь",
    ruGoogle: "Мне это нравится",
    cat: "like",
    pattern: "this thing",
    patternSub: "эта вещь (конкретный предмет)",
    rule: "Слово «thing» переводится как «вещь». Ваш перевод тожнее передаёт слово thing («эта вещь»), тогда как Google Translate упростил фразу до «Мне это нравится».",
    note: "Обратите внимание: в русском пишется «эта вещь» (женский род, с мягким знаком).",
    hint: "Вещь по-английски — thing: I like this thing.",
    distractors: ["I like it thing", "I'd like this thing"]
  },
  {
    id: 3,
    en: "I'd like to drink a cup of coffee",
    rawEn: "I`d like to drink a cup of coffee",
    ruUser: "Я хотел бы выпить чашку кофе",
    ruGoogle: "Я бы хотел выпить чашечку кофе.",
    cat: "would_like",
    pattern: "I'd like to + V",
    patternSub: "Я хотел бы + сделать что-то",
    rule: "«I'd like» = «I would like» (Я хотел бы). Если дальше идёт действие (глагол «выпить» — drink), между ними обязательно ставится частица TO: I'd like to drink...",
    hint: "После I'd like перед глаголом drink нужна частица to, а «чашка кофе» — a cup of coffee.",
    distractors: ["I like to drink a cup of coffee", "I'd like drink a cup of coffee"]
  },
  {
    id: 4,
    en: "I like this playlist",
    rawEn: "I like this playlist",
    ruUser: "Мне нравится этот плейлист",
    ruGoogle: "Мне нравится этот плейлист.",
    cat: "like",
    pattern: "I like + this ...",
    patternSub: "Мне нравится этот плейлист",
    rule: "Простая конструкция симпатии: I like (мне нравится) + this playlist (этот плейлист).",
    hint: "«Мне нравится» (постоянно) = I like, а не I'd like.",
    distractors: ["I'd like this playlist", "I like these playlist"]
  },
  {
    id: 5,
    en: "I'd like to do it",
    rawEn: "I`d like to do it",
    ruUser: "Я хотел бы сделать это",
    ruGoogle: "Я бы хотел это сделать.",
    cat: "would_like",
    pattern: "I'd like to do it",
    patternSub: "Я хотел бы сделать это",
    rule: "Когда есть слово «бы» (хотел бы) + действие (сделать = do), используем связку I'd like to + глагол: I'd like to do it.",
    hint: "«Я хотел бы» = I'd like, «сделать это» = to do it.",
    distractors: ["I like to do it", "I'd like do it"]
  },
  {
    id: 6,
    en: "I'd like to visit this place",
    rawEn: "I`d like to visit this place",
    ruUser: "Я хотел бы посещать это место",
    ruGoogle: "Я хотел бы посетить это место.",
    cat: "would_like",
    pattern: "I'd like to visit",
    patternSub: "Я хотел бы посетить",
    rule: "«I'd like to visit this place» чаще означает разовое желание («Я хотел бы посетить это место», как в Google Translate).",
    note: "Сравнение: «посетить» (совершенный вид) звучит естественнее для I'd like to visit.",
    hint: "После I'd like перед глаголом visit ставим to: I'd like to visit this place.",
    distractors: ["I'd like visit this place", "I like to visit this place"]
  },
  {
    id: 7,
    en: "I'd like a cup of coffee",
    rawEn: "I`d like a cup of coffee",
    ruUser: "Я хотел бы чашку кофе",
    ruGoogle: "Я бы хотел чашечку кофе.",
    cat: "would_like",
    pattern: "I'd like + a noun",
    patternSub: "Я хотел бы + предмет (без to!)",
    rule: "Важное правило! Если после «I'd like» сразу идёт предмет («чашку кофе» — a cup of coffee), а НЕ глагол, то частица TO НЕ ставится!",
    hint: "Здесь нет глагола «выпить» (drink), поэтому to не нужно: I'd like a cup of coffee.",
    distractors: ["I'd like to a cup of coffee", "I like a cup of coffee"]
  },
  {
    id: 8,
    en: "I'd like to become a businessman",
    rawEn: "I`d like to become a businessman",
    ruUser: "Я хотел бы стать бизнесменом",
    ruGoogle: "Я хотел бы стать бизнесменом.",
    cat: "become",
    pattern: "to become a ...",
    patternSub: "стать + профессия (с артиклем a!)",
    rule: "«Стать кем-то по профессии» = to become a + профессия. Перед названием профессии в единственном числе обязательно ставим артикль «a»!",
    hint: "Не забудьте to перед become и артикль a перед businessman!",
    distractors: ["I'd like to become businessman", "I'd like become a businessman"]
  },
  {
    id: 9,
    en: "She'd like to become a teacher",
    rawEn: "She`d like to become a teacher",
    ruUser: "Она хотела бы стать учительницей",
    ruGoogle: "Она хотела бы стать учительницей.",
    cat: "become",
    pattern: "She'd like to ...",
    patternSub: "She would like (без -s у like!)",
    rule: "«She'd like» = «She would like». После модального глагола would глагол like всегда остаётся в базовой форме (никакого likes!).",
    hint: "She'd like (без -s!) + to become + a teacher.",
    distractors: ["She'd likes to become a teacher", "She likes to become a teacher"]
  },
  {
    id: 10,
    en: "He likes this dress",
    rawEn: "He likes this dress",
    ruUser: "Ему нравится это платье",
    ruGoogle: "Ему нравится это платье.",
    cat: "pronouns",
    pattern: "He / She likes",
    patternSub: "Добавляем окончание -s!",
    rule: "В Present Simple с местоимениями He (он), She (она), It (оно) к глаголу like обязательно добавляется окончание -s: He likes!",
    hint: "«Ему нравится» = He likes (с окончанием -s!).",
    distractors: ["He like this dress", "He'd like this dress"]
  },
  {
    id: 11,
    en: "I see you really like English",
    rawEn: "I see you really like English",
    ruUser: "Я вижу тебе реально нравиться Английский",
    ruGoogle: "Я вижу, вам очень нравится английский.",
    cat: "really",
    pattern: "I see + you really like",
    patternSub: "Я вижу, тебе очень нравится...",
    rule: "Слово «really» (действительно / реально / очень) ставится ПЕРЕД глаголом like: you really like.",
    note: "В русском: «тебе (что делает?) нравится» пишется без мягкого знака.",
    hint: "Слово really ставится перед глаголом like: I see you really like English.",
    distractors: ["I see you like really English", "I see you really likes English"]
  },
  {
    id: 12,
    en: "My friend likes this hotel",
    rawEn: "My friend likes this hotel",
    ruUser: "Моему другу нравится этот отель",
    ruGoogle: "Моему другу нравится этот отель.",
    cat: "pronouns",
    pattern: "My friend likes",
    patternSub: "Мой друг = он/она (He/She) → likes",
    rule: "«My friend» (мой друг) — это единственное число (можно заменить на he или she), поэтому к глаголу like добавляем -s: My friend likes!",
    hint: "My friend = он/она, поэтому нужен глагол с -s: likes.",
    distractors: ["My friend like this hotel", "My friends likes this hotel"]
  },
  {
    id: 13,
    en: "I like English",
    rawEn: "I like English",
    ruUser: "Мне нравится Английский",
    ruGoogle: "Мне нравится английский",
    cat: "like",
    pattern: "I like English",
    patternSub: "Названия языков — с большой буквы!",
    rule: "В английском языке названия языков и национальностей (English) ВСЕГДА пишутся с заглавной буквы, а артикль перед ними не ставится.",
    hint: "Просто I like English (без артикля the/a).",
    distractors: ["I like an English", "I'd like English"]
  },
  {
    id: 14,
    en: "I really like this playlist",
    rawEn: "I really like this playlist",
    ruUser: "Мне действительно нравится этот плейлист",
    ruGoogle: "Мне очень нравится этот плейлист.",
    cat: "really",
    pattern: "I really like ...",
    patternSub: "Мне действительно (очень) нравится",
    rule: "«I really like» переводится и как «Мне действительно нравится», и как «Мне очень нравится». Слово really стоит между I и like.",
    hint: "Поставьте really перед like: I really like this playlist.",
    distractors: ["I very like this playlist", "I like really this playlist"]
  },
  {
    id: 15,
    en: "I like this channel",
    rawEn: "I like this channel",
    ruUser: "Мне нравится этот канал",
    ruGoogle: "Мне нравится этот канал.",
    cat: "like",
    pattern: "this channel",
    patternSub: "этот канал (ед. число)",
    rule: "Базовая фраза: I like (мне нравится) + this channel (этот канал).",
    hint: "«Мне нравится этот канал» = I like this channel.",
    distractors: ["I'd like this channel", "I like these channel"]
  },
  {
    id: 16,
    en: "She likes this place",
    rawEn: "She likes this place",
    ruUser: "Ей нравится это место",
    ruGoogle: "Ей нравится это место.",
    cat: "pronouns",
    pattern: "She likes ...",
    patternSub: "Ей нравится (She + глагол с -s)",
    rule: "По-русски мы говорим «Ей нравится», а по-английски подлежащее в именительном падеже: «Она любит/ей нравится» — She likes!",
    hint: "С местоимением She обязательно добавляем -s: She likes this place.",
    distractors: ["She like this place", "Her likes this place"]
  },
  {
    id: 17,
    en: "You like it",
    rawEn: "You like it",
    ruUser: "Тебе это нравится",
    ruGoogle: "Вам нравится это",
    cat: "pronouns",
    pattern: "You like it",
    patternSub: "Тебе / Вам это нравится",
    rule: "Местоимение «You» означает и «ты», и «вы/Вам». Окончание -s с You НЕ добавляется: You like it.",
    hint: "С местоимением You глагол без -s: You like it.",
    distractors: ["You likes it", "Your like it"]
  },
  {
    id: 18,
    en: "She likes it",
    rawEn: "She likes it",
    ruUser: "Ей это нравится",
    ruGoogle: "Ей это нравится",
    cat: "pronouns",
    pattern: "She likes it",
    patternSub: "Ей это нравится (-s!)",
    rule: "Короткая и частая фраза: She (она/ей) + likes (нравится, с -s) + it (это).",
    hint: "She требует окончания -s у глагола: She likes it.",
    distractors: ["She like it", "She'd like it"]
  },
  {
    id: 19,
    en: "I see he really likes it",
    rawEn: "I see he really likes it",
    ruUser: "Я вижу тебе это действительно нравится",
    ruGoogle: "Я вижу, ему это очень нравится.",
    cat: "really",
    pattern: "he really likes it",
    patternSub: "ему это очень нравится (he → likes!)",
    rule: "Даже когда перед глаголом стоит усилитель really, окончание -s для he/she сохраняется: he really likes it!",
    note: "Внимание к местоимению: «he» — это «он / ему» (в Google Translate: «ему это очень нравится», а «тебе» было бы you).",
    hint: "С местоимением he глагол like получает окончание -s даже после really: he really likes it.",
    distractors: ["I see he really like it", "I see him really likes it"]
  },
  {
    id: 20,
    en: "I really like this channel",
    rawEn: "I really like this channel",
    ruUser: "Мне действительно нравится этот канал",
    ruGoogle: "Мне очень нравится этот канал.",
    cat: "really",
    pattern: "I really like ...",
    patternSub: "Усиление с really (не very!)",
    rule: "В английском нельзя сказать «I very like»! Вместо этого перед глаголом ставится «really»: I really like this channel.",
    hint: "Используем really перед like: I really like this channel.",
    distractors: ["I very like this channel", "I really likes this channel"]
  },
  {
    id: 21,
    en: "I'd like to know English very well",
    rawEn: "I`d like to know English very well",
    ruUser: "Я хотел бы  знать английский очень хорошо",
    ruGoogle: "Я бы хотел очень хорошо знать английский язык.",
    cat: "would_like",
    pattern: "I'd like to know ... very well",
    patternSub: "Я хотел бы знать ... очень хорошо",
    rule: "В английском порядке слов сначала идёт глагол + дополнение (know English), а наречие «очень хорошо» (very well) ставится в самом конце!",
    hint: "Порядок слов: I'd like to know English very well (very well в конце!).",
    distractors: ["I'd like to very well know English", "I'd like know English very well"]
  },
  {
    id: 22,
    en: "They like it",
    rawEn: "They like it",
    ruUser: "Им это нравится",
    ruGoogle: "Им это нравится.",
    cat: "pronouns",
    pattern: "They like it",
    patternSub: "Им это нравится (без -s)",
    rule: "«Им» в роли подлежащего переводится как «They» (они). С I / You / We / They окончание -s НЕ ставится: They like it.",
    hint: "«Им это нравится» = They like it (без -s).",
    distractors: ["They likes it", "Them like it"]
  },
  {
    id: 23,
    en: "I like it",
    rawEn: "I like it",
    ruUser: "Мне это нравится",
    ruGoogle: "Мне это нравится",
    cat: "like",
    pattern: "I like it",
    patternSub: "Мне это нравится (базовая фраза)",
    rule: "Когда мы говорим просто «Мне это нравится» без существительного, используем местоимение «it» (оно/это): I like it! (Не «I like this»).",
    hint: "«Мне это нравится» = I like it.",
    distractors: ["I like", "I'd like it"]
  },
  {
    id: 24,
    en: "I'd like to drink a cup of coffee",
    rawEn: "I`d like to drink a cup of coffee",
    ruUser: "Я хотел бы выпить чашку кофе",
    ruGoogle: "Я бы хотел выпить чашечку кофе.",
    cat: "would_like",
    pattern: "I'd like to drink ...",
    patternSub: "Повторение для закрепления (#3 и #24)",
    rule: "Отличная тренировка! «Я хотел бы выпить чашку кофе» = I'd like to drink a cup of coffee.",
    hint: "I'd like + to drink + a cup of coffee.",
    distractors: ["I'd like a cup of coffee to drink", "I like to drink a cup of coffee"]
  },
  {
    id: 25,
    en: "I know they like it",
    rawEn: "I know they like it",
    ruUser: "Я знаю им это нравится",
    ruGoogle: "Я знаю, им это нравится.",
    cat: "really",
    pattern: "I know + they like it",
    patternSub: "Сложное предложение без союза",
    rule: "Две части предложения соединяются напрямую: I know (Я знаю) + they like it (им это нравится).",
    hint: "I know + they like it (без окончания -s у like).",
    distractors: ["I know they likes it", "I know them like it"]
  },
  {
    id: 26,
    en: "I like this method",
    rawEn: "I like this method",
    ruUser: "Мне нравится этот метод",
    ruGoogle: "Мне нравится этот метод.",
    cat: "like",
    pattern: "this method",
    patternSub: "этот метод",
    rule: "Слово «method» читается с межзубным звуком [θ]: I like this method (Мне нравится этот метод).",
    hint: "«Мне нравится этот метод» = I like this method.",
    distractors: ["I'd like this method", "I like these method"]
  },
  {
    id: 27,
    en: "We like it",
    rawEn: "We like it",
    ruUser: "Нам это нравится",
    ruGoogle: "Нам это нравится",
    cat: "pronouns",
    pattern: "We like it",
    patternSub: "Нам это нравится (We + like)",
    rule: "«Нам» в начале такого предложения переводится местоимением «We» (мы): We like it.",
    hint: "«Нам это нравится» = We like it.",
    distractors: ["We likes it", "Us like it"]
  },
  {
    id: 28,
    en: "I'd like a cup of tea",
    rawEn: "I`d like a cup of tea",
    ruUser: "Я хотел бы чашку чая",
    ruGoogle: "Я бы хотел чашку чая.",
    cat: "would_like",
    pattern: "I'd like + a cup of tea",
    patternSub: "Я хотел бы чашку чая (без to!)",
    rule: "Здесь после «хотел бы» сразу идёт существительное «чашку чая» (a cup of tea), поэтому частица to НЕ нужна: I'd like a cup of tea.",
    hint: "Без глагола drink частица to не ставится: I'd like a cup of tea.",
    distractors: ["I'd like to a cup of tea", "I like a cup of tea"]
  },
  {
    id: 29,
    en: "I also like this channel",
    rawEn: "I also like this channel",
    ruUser: "Мне также нравится этот канал",
    ruGoogle: "Мне тоже нравится этот канал.",
    cat: "really",
    pattern: "I also like ...",
    patternSub: "also ставится ПЕРЕД глаголом like",
    rule: "Слово «also» (также / тоже) ставится в середине предложения — между подлежащим (I) и глаголом (like): I also like this channel.",
    hint: "Слово also ставится перед глаголом like: I also like this channel.",
    distractors: ["I like also this channel", "I too like this channel"]
  },
  {
    id: 30,
    en: "I like this channel, too",
    rawEn: "I like this channel, too",
    ruUser: "Мне нравится этот канал, также",
    ruGoogle: "Мне тоже нравится этот канал.",
    cat: "really",
    pattern: "..., too",
    patternSub: "too ставится в самом КОНЦЕ фразы",
    rule: "В отличие от «also» (которое стоит перед глаголом), слово «too» (тоже/также) ставится в самом КОНЦЕ предложения: I like this channel, too.",
    hint: "Слово too всегда ставится в конце предложения!",
    distractors: ["I too like this channel", "I like this channel also"]
  },
  {
    id: 31,
    en: "I really like this place",
    rawEn: "I really like this place",
    ruUser: "Мне действительно нравится это место",
    ruGoogle: "Мне очень нравится это место.",
    cat: "really",
    pattern: "I really like this place",
    patternSub: "Мне очень / действительно нравится это место",
    rule: "Усилитель «really» стоит прямо перед глаголом «like»: I really like this place.",
    hint: "I really like this place.",
    distractors: ["I very like this place", "I really likes this place"]
  },
  {
    id: 32,
    en: "I really like it",
    rawEn: "I really like it",
    ruUser: "Мне реально это нравится",
    ruGoogle: "Мне это очень нравится",
    cat: "really",
    pattern: "I really like it",
    patternSub: "Мне реально / очень это нравится",
    rule: "Короткая разговорная фраза восхищения: I really like it! (Мне это очень/реально нравится!).",
    hint: "Сначала I really like, а в конце — it.",
    distractors: ["I really it like", "I very like it"]
  },
  {
    id: 33,
    en: "He'd like to become a doctor",
    rawEn: "He`s like to become a doctor",
    ruUser: "Ему нравится стать доктором",
    ruGoogle: "Он, скорее всего, станет врачом.",
    cat: "become",
    pattern: "He'd like to become a ...",
    patternSub: "Он хотел бы стать врачом ('d = would)",
    rule: "В уроке 7.1 эта фраза — «He'd like to become a doctor» (Он хотел бы стать врачом). В вашей таблице случайно написано «He's like», из-за чего Google Translate перевёл её как «Он, скорее всего, станет врачом»!",
    note: "Важная находка! Сокращение от would — это 'd (He'd like = He would like), а не 's (He's = He is).",
    hint: "Используйте конструкцию урока 7.1 со словом become a doctor (принимается и He'd like, и вариант из таблицы).",
    distractors: ["He like to become a doctor", "He'd like become doctor"]
  },
  {
    id: 34,
    en: "I like your lessons",
    rawEn: "I like your lessons",
    ruUser: "Мне нравится твои уроки",
    ruGoogle: "Мне нравятся ваши уроки.",
    cat: "like",
    pattern: "your lessons",
    patternSub: "твои / ваши уроки (мн. число -s)",
    rule: "«Your» означает и «твои», и «ваши». Уроки во множественном числе — lessons (с окончанием -s).",
    hint: "«Твои/ваши уроки» = your lessons: I like your lessons.",
    distractors: ["I like you lessons", "I'd like your lessons"]
  },
  {
    id: 35,
    en: "I'd like to become a businessman",
    rawEn: "I`d like to become a businessman",
    ruUser: "Я хотел бы стать бизнесменом",
    ruGoogle: "Я хотел бы стать бизнесменом.",
    cat: "become",
    pattern: "I'd like to become a ...",
    patternSub: "Повторение конструкции с профессией (#8 и #35)",
    rule: "Закрепляем: I'd like (Я хотел бы) + to become (стать) + a businessman (бизнесменом).",
    hint: "I'd like to become a businessman (с частицей to и артиклем a!).",
    distractors: ["I'd like become a businessman", "I like to become a businessman"]
  },
  {
    id: 36,
    en: "I really like these lessons",
    rawEn: "I really like these lessons",
    ruUser: "Мне действительно нравится эти уроки",
    ruGoogle: "Мне очень нравятся эти уроки.",
    cat: "really",
    pattern: "these lessons",
    patternSub: "ЭТИ уроки (множественное число = these!)",
    rule: "Очень важное отличие! Единственное число («этот урок») — this lesson, а множественное число («эти уроки») — THESE lessons!",
    hint: "Для множественного числа «эти уроки» используем слово these: I really like these lessons.",
    distractors: ["I really like this lessons", "I very like these lessons"]
  },
  {
    id: 37,
    en: "I'd like to become a manager",
    rawEn: "I`d like to become a manager",
    ruUser: "Я хотел бы стать менеджером",
    ruGoogle: "Я хотел бы стать менеджером.",
    cat: "become",
    pattern: "to become a manager",
    patternSub: "стать менеджером (с артиклем a)",
    rule: "По аналогии с businessman и teacher: перед профессией manager обязательно ставим артикль «a» — I'd like to become a manager.",
    hint: "I'd like + to become + a manager.",
    distractors: ["I'd like to become manager", "I'd like become a manager"]
  },
  {
    id: 38,
    en: "I like this idea",
    rawEn: "I like this idea",
    ruUser: "Мне нравится эта идея",
    ruGoogle: "Мне нравится эта идея.",
    cat: "like",
    pattern: "this idea",
    patternSub: "эта идея [aɪˈdɪə]",
    rule: "Слово «idea» произносится [ай-ДИ-а]. «Мне нравится эта идея» = I like this idea.",
    hint: "«Мне нравится эта идея» = I like this idea.",
    distractors: ["I'd like this idea", "I like these idea"]
  },
  {
    id: 39,
    en: "I'd like to go abroad",
    rawEn: "I`d like to go abroad",
    ruUser: "Я хотел бы поехать за границу",
    ruGoogle: "Я бы хотел поехать за границу.",
    cat: "would_like",
    pattern: "go abroad",
    patternSub: "поехать за границу (БЕЗ предлога to!)",
    rule: "Запомните устойчивое выражение: «поехать за границу» = go abroad! Между go и abroad предлог to НИКОГДА не ставится (потому что abroad — это наречие «за границей / за границу»).",
    hint: "Между go и abroad предлог to НЕ ставится: I'd like to go abroad.",
    distractors: ["I'd like to go to abroad", "I'd like go abroad"]
  },
  {
    id: 40,
    en: "She'd like to go to another place",
    rawEn: "She`d like to go to another place",
    ruUser: "Она хотела бы пойти в другое место",
    ruGoogle: "Она хотела бы поехать в другое место.",
    cat: "would_like",
    pattern: "go to another place",
    patternSub: "пойти/поехать в другое место",
    rule: "В этой фразе два «to»: первое — частица перед глаголом (to go), а второе — предлог направления «куда? в...» (to another place): She'd like to go to another place.",
    hint: "She'd like + to go + to another place.",
    distractors: ["She'd like to go another place", "She'd likes to go to another place"]
  }
];

// Category metadata matching the 5 Moon Outpost resource bars
const CATEGORIES = {
  like: {
    key: "like",
    icon: "🫧",
    short: "I like...",
    name: "Oxygen · I like + this",
    color: "#4fd1ff"
  },
  really: {
    key: "really",
    icon: "⚡",
    short: "Really / Also",
    name: "Energy · really / also / too",
    color: "#ffd23f"
  },
  pronouns: {
    key: "pronouns",
    icon: "🛡️",
    short: "He/She likes",
    name: "Shield · He/She likes & They/We",
    color: "#3fe07e"
  },
  would_like: {
    key: "would_like",
    icon: "🥕",
    short: "I'd like...",
    name: "Food · I'd like (to)",
    color: "#ff9f43"
  },
  become: {
    key: "become",
    icon: "📡",
    short: "Become a...",
    name: "Comms · become a + job",
    color: "#ff6b9d"
  }
};

// Interactive Moon Outpost Stations
const STATIONS = {
  habitat: {
    id: "habitat",
    name: "Habitat",
    icon: "🏠",
    tone: "#ff9f43",
    x: 15,
    y: 69,
    astroX: 17,
    astroY: 82,
    desc: "Regolith Phrase Catcher (45s Arcade Mini-Game)"
  },
  greenhouse: {
    id: "greenhouse",
    name: "Greenhouse",
    icon: "🌱",
    tone: "#3fe07e",
    x: 21,
    y: 52,
    astroX: 25,
    astroY: 64,
    desc: "I'd like a cup of... & I'd like to... (Study + Quiz)"
  },
  solar: {
    id: "solar",
    name: "Solar Farm",
    icon: "⚡",
    tone: "#ffd23f",
    x: 58,
    y: 52,
    astroX: 55,
    astroY: 64,
    desc: "He/She likes (-s) & Really / Also / Too (Study + Quiz)"
  },
  shelter: {
    id: "shelter",
    name: "Shelter",
    icon: "🛡️",
    tone: "#4fd1ff",
    x: 49,
    y: 79,
    astroX: 46,
    astroY: 86,
    desc: "All 40 Excel Phrases Vault & Sequential Exam (1–40)"
  },
  lab: {
    id: "lab",
    name: "Lab",
    icon: "💻",
    tone: "#8b7bff",
    x: 88,
    y: 74,
    astroX: 82,
    astroY: 84,
    desc: "Core Lesson 7.1 Study → Quiz (All Constructions)"
  },
  radio: {
    id: "radio",
    name: "Radio",
    icon: "📡",
    tone: "#ff6b9d",
    x: 94,
    y: 48,
    astroX: 89,
    astroY: 63,
    desc: "Signal Word-Order Builder (Assemble English Phrases)"
  }
};

// Missions to guide the player just like Tobish
const MISSIONS = [
  {
    id: 1,
    tag: "MISSION 1",
    title: "First Breath · I like vs I'd like",
    goalText: "🎯 Complete 1 Study→Quiz card in the Lab or Greenhouse and 1 Arcade/Signal task to master «I like» vs «I'd like»!",
    targetQuiz: 2,
    targetGame: 1,
    recommendedStation: "lab"
  },
  {
    id: 2,
    tag: "MISSION 2",
    title: "Solar Grammar · He/She likes (-s)",
    goalText: "🎯 Visit the Solar Farm & Radio Dish to master «He/She likes», «really», «also», and «too»!",
    targetQuiz: 5,
    targetGame: 2,
    recommendedStation: "solar"
  },
  {
    id: 3,
    tag: "MISSION 3",
    title: "Moon Commander · Master All 40 Phrases",
    goalText: "🎯 Practice across all stations or open the Shelter to master all 40 phrases from Lesson 7.1!",
    targetQuiz: 12,
    targetGame: 3,
    recommendedStation: "radio"
  }
];

// ============================================================================
// STATE & PERSISTENCE
// ============================================================================
const state = {
  rank: "cadet", // 'cadet' | 'specialist'
  soundOn: true,
  day: 1,
  actionsLeft: 4,
  scienceScore: 0,
  quizDoneCount: 0,
  gameDoneCount: 0,
  missionExpanded: false,
  resources: {
    like: 60,
    really: 58,
    pronouns: 56,
    would_like: 62,
    become: 60
  },
  masteredIds: new Set(),
  currentPhraseIndex: 0, // For sequential 1..40 mode
  SequentialMode: false,
  activeStation: "habitat",
  arcadeTimer: null
};

// Load saved progress from localStorage if available
function loadProgress() {
  try {
    const raw = localStorage.getItem("tobish_lesson7_1_save");
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.rank) state.rank = saved.rank;
    if (typeof saved.soundOn === "boolean") state.soundOn = saved.soundOn;
    if (saved.day) state.day = saved.day;
    if (typeof saved.scienceScore === "number") state.scienceScore = saved.scienceScore;
    if (saved.resources) Object.assign(state.resources, saved.resources);
    if (Array.isArray(saved.masteredIds)) {
      state.masteredIds = new Set(saved.masteredIds);
    }
    if (typeof saved.quizDoneCount === "number") state.quizDoneCount = saved.quizDoneCount;
    if (typeof saved.gameDoneCount === "number") state.gameDoneCount = saved.gameDoneCount;
  } catch (e) {
    console.warn("Could not load saved state:", e);
  }
}

function saveProgress() {
  try {
    localStorage.setItem("tobish_lesson7_1_save", JSON.stringify({
      rank: state.rank,
      soundOn: state.soundOn,
      day: state.day,
      scienceScore: state.scienceScore,
      resources: state.resources,
      masteredIds: Array.from(state.masteredIds),
      quizDoneCount: state.quizDoneCount,
      gameDoneCount: state.gameDoneCount
    }));
  } catch (e) {}
}

// ============================================================================
// WEB AUDIO SYNTH SFX & WEB SPEECH API (ENGLISH TTS)
// ============================================================================
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSfx(type) {
  if (!state.soundOn) return;
  const ctx = getAudioCtx();
  if (!ctx) return;

  const now = ctx.currentTime;
  if (type === "click") {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(780, now + 0.06);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.07);
  } else if (type === "walk") {
    [0, 0.16, 0.32, 0.48].forEach((offset, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(idx % 2 === 0 ? 220 : 270, now + offset);
      gain.gain.setValueAtTime(0.07, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + offset);
      osc.stop(now + offset + 0.09);
    });
  } else if (type === "wrong") {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(210, now);
    osc.frequency.linearRampToValueAtTime(140, now + 0.24);
    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.26);
  } else if (type === "right") {
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + i * 0.07);
      gain.gain.setValueAtTime(0.15, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.26);
    });
  }
}

function speakEnglish(text) {
  if (!("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.94;
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang && v.lang.startsWith("en-") && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Zira") || v.name.includes("David"))) || voices.find(v => v.lang && v.lang.startsWith("en"));
    if (enVoice) utter.voice = enVoice;
    window.speechSynthesis.speak(utter);
  } catch (e) {}
}

// Confetti burst helper
function launchConfetti() {
  const layer = document.getElementById("confettiLayer");
  if (!layer) return;
  const colors = ["#3fe07e", "#ffd23f", "#4fd1ff", "#ff6b9d", "#ff9f43", "#8b7bff"];
  for (let i = 0; i < 42; i++) {
    const el = document.createElement("div");
    el.className = "mconf";
    el.style.left = `${45 + (Math.random() - 0.5) * 20}%`;
    el.style.top = `${45 + (Math.random() - 0.5) * 15}%`;
    el.style.background = colors[i % colors.length];
    const angle = Math.random() * Math.PI * 2;
    const dist = 120 + Math.random() * 260;
    el.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    el.style.setProperty("--dy", `${Math.sin(angle) * dist - 60}px`);
    el.style.setProperty("--rot", `${(Math.random() - 0.5) * 720}deg`);
    layer.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }
}

// ============================================================================
// HUD & MAP RENDERING
// ============================================================================
function getCurrentMission() {
  for (const m of MISSIONS) {
    if (state.quizDoneCount < m.targetQuiz || state.gameDoneCount < m.targetGame) {
      return m;
    }
  }
  return MISSIONS[MISSIONS.length - 1];
}

function updateHUD() {
  // 1. Update 5 resource meters
  const resGrid = document.getElementById("resGrid");
  if (resGrid) {
    resGrid.innerHTML = Object.values(CATEGORIES).map(cat => {
      const val = Math.min(100, Math.max(0, Math.round(state.resources[cat.key] || 60)));
      const masteredInCat = PHRASES.filter(p => p.cat === cat.key && state.masteredIds.has(p.id)).length;
      const totalInCat = PHRASES.filter(p => p.cat === cat.key).length;
      return `
        <div class="res-pill" onclick="openCategoryQuiz('${cat.key}')" title="Click to practice ${cat.name} (${masteredInCat}/${totalInCat} mastered)">
          <div class="res-pill__top">
            <span class="res-pill__label"><span>${cat.icon}</span> ${cat.short}</span>
            <span class="res-pill__val">${val}</span>
          </div>
          <div class="res-bar">
            <div class="res-bar__fill" style="width:${val}%; background:${cat.color}; box-shadow: 0 0 10px ${cat.color}80;"></div>
          </div>
        </div>
      `;
    }).join("");
  }

  // 2. Update Day, Action Dots, Score, Sound, Rank
  const dayEl = document.getElementById("hudDay");
  if (dayEl) dayEl.textContent = `Day ${state.day}`;

  const dotsEl = document.getElementById("hudDots");
  if (dotsEl) {
    let dotsHtml = "";
    for (let i = 0; i < 4; i++) {
      dotsHtml += `<span class="action-dot ${i < state.actionsLeft ? "is-on" : ""}"></span>`;
    }
    dotsHtml += `<span class="action-left-txt">${state.actionsLeft} left</span>`;
    dotsEl.innerHTML = dotsHtml;
  }

  const scoreEl = document.getElementById("hudScore");
  if (scoreEl) {
    scoreEl.innerHTML = `🔬 ${state.scienceScore} <span style="font-size:13px;color:#9db5dc;font-weight:600;">(${state.masteredIds.size}/40)</span>`;
  }

  const soundBtn = document.getElementById("hudSoundBtn");
  if (soundBtn) {
    soundBtn.innerHTML = state.soundOn ? "🔊" : "🔇";
    soundBtn.title = state.soundOn ? "Sound ON (Click to mute)" : "Sound OFF (Click to unmute)";
  }

  const rankBtn = document.getElementById("hudRankBtn");
  if (rankBtn) {
    rankBtn.innerHTML = state.rank === "cadet" ? "🧑‍🚀 Cadet" : "🚀 Specialist";
  }

  // 3. Update Mission Pill
  const mission = getCurrentMission();
  const missionBox = document.getElementById("missionPill");
  if (missionBox) {
    const qDone = Math.min(state.quizDoneCount, mission.targetQuiz);
    const gDone = Math.min(state.gameDoneCount, mission.targetGame);
    missionBox.innerHTML = `
      <div class="mission-pill__head">
        <span class="mission-tag">${mission.tag}</span>
        <span class="mission-title">${mission.title}</span>
        <span class="mission-badge ${qDone >= mission.targetQuiz ? "is-done" : ""}">🤔 ${qDone}/${mission.targetQuiz}</span>
        <span class="mission-badge ${gDone >= mission.targetGame ? "is-done" : ""}">🏠 ${gDone}/${mission.targetGame}</span>
        <span style="font-size:12px;color:#9db5dc;">${state.missionExpanded ? "▲" : "▼"}</span>
      </div>
      ${state.missionExpanded ? `<div class="mission-body">${mission.goalText}</div>` : ""}
    `;
  }

  // 4. Update Station Hotspots & Recommended pointer
  const mapLayer = document.getElementById("mapLayer");
  if (mapLayer) {
    mapLayer.innerHTML = Object.values(STATIONS).map(st => {
      const isRec = mission.recommendedStation === st.id;
      return `
        <div class="station-hotspot ${isRec ? "is-recommended" : ""}"
             style="left:${st.x}%; top:${st.y}%;"
             onclick="visitStation('${st.id}')">
          ${isRec ? `<div class="station-pointer">▼</div>` : ""}
          <div class="station-pill">
            <span>${st.icon}</span>
            <span>${st.name}</span>
          </div>
          <div class="station-click-zone" title="${st.desc}"></div>
        </div>
      `;
    }).join("");
  }

  // 5. Update Bottom Toast
  const toastEl = document.getElementById("bottomToastText");
  if (toastEl) {
    const recSt = STATIONS[mission.recommendedStation];
    toastEl.innerHTML = `👆 Tap <strong>${recSt.icon} ${recSt.name}</strong> or any Moon station to practice Lesson 7.1 (${state.masteredIds.size}/40 phrases mastered)`;
  }

  saveProgress();
}

// Walk Tobish the Astronaut across the Moon surface to the clicked station
function visitStation(stationId) {
  const st = STATIONS[stationId];
  if (!st) return;

  playSfx("walk");
  const astro = document.getElementById("astronautWrap");
  if (astro) {
    const curX = parseFloat(astro.style.left) || 17;
    if (st.astroX < curX - 2) {
      astro.classList.add("face-left");
    } else if (st.astroX > curX + 2) {
      astro.classList.remove("face-left");
    }
    astro.classList.add("is-walking");
    astro.style.left = `${st.astroX}%`;
    astro.style.top = `${st.astroY}%`;
  }

  state.activeStation = stationId;
  setTimeout(() => {
    if (astro) astro.classList.remove("is-walking");
    openStationModal(stationId);
  }, 620);
}

function openStationModal(stationId) {
  if (stationId === "lab") {
    openStudyQuizCard({ stationId: "lab", filterCat: null });
  } else if (stationId === "greenhouse") {
    openStudyQuizCard({ stationId: "greenhouse", filterCat: ["would_like", "become"] });
  } else if (stationId === "solar") {
    openStudyQuizCard({ stationId: "solar", filterCat: ["pronouns", "really", "like"] });
  } else if (stationId === "radio") {
    openSignalBuilderModal();
  } else if (stationId === "habitat") {
    openHabitatArcadeModal();
  } else if (stationId === "shelter") {
    openShelterVaultModal();
  }
}

function openCategoryQuiz(catKey) {
  playSfx("click");
  openStudyQuizCard({ stationId: "lab", filterCat: [catKey] });
}

// ============================================================================
// PICK NEXT PHRASE HELPER
// ============================================================================
function pickPhrase(filterCat = null, specificId = null) {
  if (specificId) {
    const found = PHRASES.find(p => p.id === specificId);
    if (found) return found;
  }
  if (state.SequentialMode) {
    const p = PHRASES[state.currentPhraseIndex % PHRASES.length];
    return p;
  }
  let pool = PHRASES;
  if (Array.isArray(filterCat) && filterCat.length > 0) {
    pool = PHRASES.filter(p => filterCat.includes(p.cat));
  }
  // Prefer unmastered phrases first
  const unmastered = pool.filter(p => !state.masteredIds.has(p.id));
  const targetPool = unmastered.length > 0 ? unmastered : pool;
  return targetPool[Math.floor(Math.random() * targetPool.length)];
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ============================================================================
// MODE A: TWO-STEP STUDY → QUIZ MODAL (Exact Tobish Flow!)
// ============================================================================
let activeQuizState = null;

function openStudyQuizCard({ stationId = "lab", filterCat = null, specificId = null, step = 1 }) {
  const st = STATIONS[stationId] || STATIONS.lab;
  const phrase = pickPhrase(filterCat, specificId);
  const catMeta = CATEGORIES[phrase.cat];

  // Build 3 multiple-choice options (1 right + 2 distractors)
  const options = shuffleArray([
    { text: phrase.en, isCorrect: true },
    { text: phrase.distractors[0], isCorrect: false },
    { text: phrase.distractors[1], isCorrect: false }
  ]);

  // Also prepare word-builder tokens if player switches to or uses Specialist Word Builder
  const cleanWords = phrase.en.replace(/,/g, " ,").split(/\s+/).filter(Boolean);
  const extraTrapWords = ["to", "likes", "a", "very", "also"].filter(w => !cleanWords.includes(w)).slice(0, 2);
  const wordPool = shuffleArray([...cleanWords, ...extraTrapWords].map((w, idx) => ({ id: idx, word: w })));

  activeQuizState = {
    station: st,
    filterCat,
    phrase,
    catMeta,
    step, // 1 = STUDY, 2 = QUIZ
    peekOpen: false,
    quizSubMode: state.rank === "specialist" ? "builder" : "mcq", // 'mcq' | 'builder'
    options,
    wrongIndices: new Set(),
    triesUsed: 0,
    completed: false,
    // Word builder state
    targetWords: cleanWords,
    wordPool,
    selectedWordIds: []
  };

  renderStudyQuizModal();
}

function renderStudyQuizModal() {
  const q = activeQuizState;
  if (!q) return;
  const { station, phrase, catMeta, step } = q;

  const modalRoot = document.getElementById("modalRoot");
  if (!modalRoot) return;

  if (step === 1) {
    // STEP 1: 📖 STUDY CARD (Exact match to final_step_65.png)
    modalRoot.innerHTML = `
      <div class="msheet" onclick="if(event.target===this) closeModal()">
        <div class="msheet__card" style="--tone: ${catMeta.color};">
          <div class="ms__top">
            <div class="ms__badge">
              <span>${station.icon}</span>
              <span>${station.name} · Phrase #${phrase.id}/40</span>
            </div>
            <div class="ms__top-right">
              <div class="ms__steps" title="Step 1 of 2: Study">
                <span class="ms__step-dash is-active"></span>
                <span class="ms__step-dash"></span>
              </div>
              <button class="ms__close" onclick="closeModal()" title="Close">✕</button>
            </div>
          </div>

          <div class="ms__kicker">📖 STUDY · ${catMeta.name}</div>
          <h2 class="ms__title" style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
            <span>${phrase.en}</span>
            <button class="mbtn mbtn--blue mbtn--sm" onclick="speakEnglish('${phrase.en.replace(/'/g, "\\'")}')">
              🔊 Listen
            </button>
          </h2>

          <div class="ms__stat">
            <div class="ms__stat-main">
              <span class="ms__stat-big">${phrase.pattern}</span>
              <span class="ms__stat-sub">${phrase.patternSub}</span>
            </div>
          </div>

          <div class="trans-grid">
            <div class="trans-box">
              <div class="trans-box__lbl">✍️ Ваш перевод (Excel #${phrase.id})</div>
              <div class="trans-box__txt">${phrase.ruUser}</div>
            </div>
            <div class="trans-box">
              <div class="trans-box__lbl">🌐 Google Translate Русский</div>
              <div class="trans-box__txt">${phrase.ruGoogle}</div>
            </div>
          </div>

          <p class="ms__desc">${phrase.rule}</p>

          ${phrase.note ? `
            <div class="ms__source">
              💡 <strong>Заметка к таблице (Фраза #${phrase.id}):</strong> ${phrase.note}
            </div>
          ` : `
            <div class="ms__source">
              🛰️ <strong>Lesson 7.1 Construction:</strong> Сравните <em>I like</em> (мне нравится вообще) и <em>I'd like</em> = <em>I would like</em> (я хотел бы сейчас / мечта).
            </div>
          `}

          <div class="ms__footer">
            <button class="mbtn mbtn--ghost mbtn--sm" onclick="openStudyQuizCard({stationId:'${station.id}', filterCat: activeQuizState.filterCat, specificId: ${phrase.id > 1 ? phrase.id - 1 : 40}})">
              ← Prev (#${phrase.id > 1 ? phrase.id - 1 : 40})
            </button>
            <button class="mbtn" onclick="goToQuizStep()">
              I'm ready for the question →
            </button>
          </div>
        </div>
      </div>
    `;
  } else {
    // STEP 2: ❓ QUIZ CARD (Exact match to step_36.png & step_41.png)
    const letters = ["A", "B", "C"];
    const optsHtml = q.options.map((opt, idx) => {
      const isWrong = q.wrongIndices.has(idx);
      const isRight = q.completed && opt.isCorrect;
      const isDim = q.completed && !opt.isCorrect && !isWrong;
      let stateClass = "";
      let badgeTxt = letters[idx];
      if (isWrong) {
        stateClass = "is-wrong";
        badgeTxt = "✕";
      } else if (isRight) {
        stateClass = "is-right";
        badgeTxt = "✓";
      } else if (isDim) {
        stateClass = "is-dim";
      }
      return `
        <button class="ms__opt ${stateClass}"
                ${isWrong || q.completed ? "disabled" : ""}
                onclick="selectMcqOption(${idx})">
          <span class="ms__opt-let">${badgeTxt}</span>
          <span>${opt.text}</span>
        </button>
      `;
    }).join("");

    // Word builder HTML if in 'builder' sub-mode
    const selectedChips = q.selectedWordIds.map(id => {
      const item = q.wordPool.find(w => w.id === id);
      return `<button class="wb-chip wb-chip--slot" ${q.completed ? "disabled" : ""} onclick="removeBuilderWord(${id})">${item.word}</button>`;
    }).join("");

    const poolChips = q.wordPool.filter(w => !q.selectedWordIds.includes(w.id)).map(item => {
      return `<button class="wb-chip" ${q.completed ? "disabled" : ""} onclick="addBuilderWord(${item.id})">${item.word}</button>`;
    }).join("");

    modalRoot.innerHTML = `
      <div class="msheet" onclick="if(event.target===this) closeModal()">
        <div class="msheet__card" style="--tone: ${catMeta.color};">
          <div class="ms__top">
            <div class="ms__badge">
              <span>${station.icon}</span>
              <span>${station.name} · Phrase #${phrase.id}/40</span>
            </div>
            <div class="ms__top-right">
              <div class="ms__steps" title="Step 2 of 2: Quiz">
                <span class="ms__step-dash"></span>
                <span class="ms__step-dash is-active"></span>
              </div>
              <button class="ms__close" onclick="closeModal()" title="Close">✕</button>
            </div>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:8px;">
            <div class="ms__kicker" style="margin-bottom:0;">❓ QUIZ · TRANSLATE TO ENGLISH</div>
            <div style="display:flex;gap:6px;">
              <button class="mbtn mbtn--sm ${q.quizSubMode === "mcq" ? "mbtn--blue" : "mbtn--ghost"}" onclick="switchQuizSubMode('mcq')">
                A/B/C Choice
              </button>
              <button class="mbtn mbtn--sm ${q.quizSubMode === "builder" ? "mbtn--blue" : "mbtn--ghost"}" onclick="switchQuizSubMode('builder')">
                🧩 Word Builder
              </button>
            </div>
          </div>

          <button class="ms__peek" onclick="togglePeekCard()">
            📖 Look at the card again ${q.peekOpen ? "▲" : "▼"}
          </button>

          ${q.peekOpen ? `
            <div class="ms__peekbox">
              <div class="ms__peekbox-hl">${phrase.pattern} — ${phrase.patternSub}</div>
              <div style="font-size:15px;font-weight:700;color:#dce8ff;line-height:1.45;">
                ${phrase.rule}
              </div>
            </div>
          ` : ""}

          <div class="ms__q">
            «${phrase.ruUser}»
            <div style="font-size:14.5px;font-weight:700;color:#9db5dc;margin-top:4px;">
              🌐 Google Translate: «${phrase.ruGoogle}»
            </div>
          </div>

          ${q.quizSubMode === "mcq" ? `
            <div class="ms__opts">
              ${optsHtml}
            </div>
          ` : `
            <div>
              <div class="wb-slots">
                ${selectedChips || `<span style="color:#7d97c4;font-weight:700;font-size:15px;">Tap English words below in the right order...</span>`}
              </div>
              <div class="wb-pool">
                ${poolChips}
              </div>
              ${!q.completed ? `
                <div style="display:flex;gap:10px;margin-bottom:14px;">
                  <button class="mbtn mbtn--ghost mbtn--sm" onclick="clearBuilderWords()">↺ Clear</button>
                  <button class="mbtn mbtn--sm" onclick="checkBuilderAnswer()">✓ Check Sentence</button>
                </div>
              ` : ""}
            </div>
          `}

          ${q.triesUsed > 0 && !q.completed ? `
            <div class="ms__hint">
              <div class="ms__hint-title">💡 Hint: ${phrase.hint}</div>
              <div class="ms__hint-sub">Try again — you have 1 more try!</div>
            </div>
          ` : ""}

          ${q.completed ? `
            <div class="ms__done">
              <div class="ms__done-head">
                <div class="ms__done-title">
                  ${q.triesUsed === 0 ? "🎉 Perfect! Right on the first try!" : "✨ Great job! You got it on the 2nd try!"}
                </div>
                <span class="ms__rw">+${q.triesUsed === 0 ? 10 : 5} Science 🔬 · +12 ${catMeta.icon}</span>
              </div>
              <div style="font-size:16px;font-weight:800;color:#e6fff0;margin-bottom:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
                <span>✅ <strong>${phrase.en}</strong></span>
                <button class="mbtn mbtn--blue mbtn--sm" onclick="speakEnglish('${phrase.en.replace(/'/g, "\\'")}')">🔊 Hear Again</button>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">
                <button class="mbtn mbtn--ghost mbtn--sm" onclick="openSupplyAllocationModal('${phrase.cat}')">
                  🎁 Allocate Supplies
                </button>
                <button class="mbtn" onclick="nextPhraseInModal()">
                  Next Phrase (#${(phrase.id % 40) + 1}) →
                </button>
              </div>
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }
}

function goToQuizStep() {
  if (!activeQuizState) return;
  playSfx("click");
  activeQuizState.step = 2;
  renderStudyQuizModal();
}

function togglePeekCard() {
  if (!activeQuizState) return;
  playSfx("click");
  activeQuizState.peekOpen = !activeQuizState.peekOpen;
  renderStudyQuizModal();
}

function switchQuizSubMode(mode) {
  if (!activeQuizState) return;
  playSfx("click");
  activeQuizState.quizSubMode = mode;
  renderStudyQuizModal();
}

function selectMcqOption(idx) {
  const q = activeQuizState;
  if (!q || q.completed) return;
  const chosen = q.options[idx];
  if (chosen.isCorrect) {
    handleQuizSuccess();
  } else {
    playSfx("wrong");
    q.wrongIndices.add(idx);
    q.triesUsed++;
    renderStudyQuizModal();
  }
}

function addBuilderWord(id) {
  const q = activeQuizState;
  if (!q || q.completed) return;
  playSfx("click");
  q.selectedWordIds.push(id);
  renderStudyQuizModal();
}

function removeBuilderWord(id) {
  const q = activeQuizState;
  if (!q || q.completed) return;
  playSfx("click");
  q.selectedWordIds = q.selectedWordIds.filter(x => x !== id);
  renderStudyQuizModal();
}

function clearBuilderWords() {
  const q = activeQuizState;
  if (!q || q.completed) return;
  playSfx("click");
  q.selectedWordIds = [];
  renderStudyQuizModal();
}

function checkBuilderAnswer() {
  const q = activeQuizState;
  if (!q || q.completed) return;
  const built = q.selectedWordIds
    .map(id => q.wordPool.find(w => w.id === id)?.word || "")
    .join(" ")
    .replace(/\s+,/g, ",")
    .trim();

  const normBuilt = built.toLowerCase().replace(/`/g, "'");
  const normTarget = q.phrase.en.toLowerCase().replace(/`/g, "'");
  const normRaw = q.phrase.rawEn.toLowerCase().replace(/`/g, "'");

  if (normBuilt === normTarget || normBuilt === normRaw) {
    handleQuizSuccess();
  } else {
    playSfx("wrong");
    q.triesUsed++;
    renderStudyQuizModal();
  }
}

function handleQuizSuccess() {
  const q = activeQuizState;
  if (!q || q.completed) return;
  q.completed = true;
  q.peekOpen = false;
  playSfx("right");
  launchConfetti();
  speakEnglish(q.phrase.en);

  state.masteredIds.add(q.phrase.id);
  state.scienceScore += q.triesUsed === 0 ? 10 : 5;
  state.quizDoneCount++;
  state.actionsLeft = Math.max(0, state.actionsLeft - 1);
  state.resources[q.phrase.cat] = Math.min(100, (state.resources[q.phrase.cat] || 60) + 12);

  updateHUD();
  renderStudyQuizModal();
}

function nextPhraseInModal() {
  const q = activeQuizState;
  if (!q) return;
  playSfx("click");
  const nextId = (q.phrase.id % 40) + 1;
  openStudyQuizCard({
    stationId: q.station.id,
    filterCat: q.filterCat,
    specificId: state.SequentialMode ? nextId : null
  });
}

// ============================================================================
// MODE B: SUPPLY ALLOCATION MODAL (Matches step_49.png!)
// ============================================================================
function openSupplyAllocationModal(bonusCatKey = "would_like") {
  playSfx("click");
  const modalRoot = document.getElementById("modalRoot");
  if (!modalRoot) return;

  const rowsHtml = Object.values(CATEGORIES).map(cat => {
    const cur = Math.round(state.resources[cat.key] || 60);
    const isBest = cat.key === bonusCatKey;
    const gain = isBest ? 15 : 10;
    const nextVal = Math.min(100, cur + gain);
    return `
      <div class="trans-box" style="display:flex;align-items:center;justify-content:space-between;gap:14px;cursor:pointer;border-color:${isBest ? cat.color : "rgba(255,255,255,0.14)"};"
           onclick="applySupplyBoost('${cat.key}', ${gain})">
        <div style="flex:1;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <span style="font-size:20px;">${cat.icon}</span>
            <strong style="font-family:'Fredoka',sans-serif;font-size:17px;">${cat.name}</strong>
            ${isBest ? `<span class="mission-badge" style="background:#ffd23f;color:#1e1400;font-weight:800;">BEST +15</span>` : `<span class="mission-badge">+10</span>`}
          </div>
          <div class="res-bar" style="height:12px;">
            <div class="res-bar__fill" style="width:${nextVal}%;background:repeating-linear-gradient(45deg, ${cat.color}, ${cat.color} 8px, #ffffff55 8px, #ffffff55 16px);"></div>
          </div>
        </div>
        <div style="font-family:'Fredoka',sans-serif;font-size:18px;font-weight:700;color:${cat.color};">
          ${cur} → ${nextVal}
        </div>
      </div>
    `;
  }).join("");

  modalRoot.innerHTML = `
    <div class="msheet" onclick="if(event.target===this) closeModal()">
      <div class="msheet__card" style="--tone: #3fe07e;">
        <div class="ms__top">
          <div class="ms__badge">🎁 SUPPLIES EARNED</div>
          <button class="ms__close" onclick="closeModal()">✕</button>
        </div>
        <h2 class="ms__title">Where should they go, Commander?</h2>
        <p class="ms__desc">Click any grammar system below to boost its station meter on the Moon Outpost:</p>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px;">
          ${rowsHtml}
        </div>
      </div>
    </div>
  `;
}

function applySupplyBoost(catKey, gain) {
  playSfx("right");
  state.resources[catKey] = Math.min(100, (state.resources[catKey] || 60) + gain);
  updateHUD();
  closeModal();
}

// ============================================================================
// MODE C: RADIO DISH — SIGNAL WORD-ORDER BUILDER
// ============================================================================
function openSignalBuilderModal(specificId = null) {
  const phrase = pickPhrase(null, specificId);
  state.rank = "specialist"; // temporary builder view
  openStudyQuizCard({ stationId: "radio", specificId: phrase.id, step: 2 });
  activeQuizState.quizSubMode = "builder";
  renderStudyQuizModal();
}

// ============================================================================
// MODE D: HABITAT — REGOLITH PHRASE BLOCKS MINI-GAME (45s Arcade!)
// ============================================================================
let arcadeState = null;

function openHabitatArcadeModal() {
  stopArcadeTimer();
  const modalRoot = document.getElementById("modalRoot");
  if (!modalRoot) return;

  modalRoot.innerHTML = `
    <div class="msheet" onclick="if(event.target===this) closeModal()">
      <div class="msheet__card" style="--tone: #ff9f43; text-align:center;">
        <div class="ms__top">
          <div class="ms__badge">🏠 Habitat · Regolith Blocks</div>
          <button class="ms__close" onclick="closeModal()">✕</button>
        </div>
        <h2 class="ms__title" style="font-size:32px;">Regolith Phrase Printer</h2>
        <p class="ms__desc">
          Tobish's 3D printer drops Moon-dust phrase bricks! Match <strong>6 Russian phrases</strong> to their exact English construction before the <strong>45s</strong> timer runs out to build <strong>3 Shield Layers</strong>!
        </p>
        <div class="ms__source" style="text-align:left;">
          <strong>🚀 GRAMMAR RADAR:</strong><br>
          • <strong>I like ...</strong> — Мне нравится (вообще)<br>
          • <strong>He / She likes ...</strong> — Ему / Ей нравится (окончание <strong>-s</strong>)<br>
          • <strong>I'd like + noun</strong> — Я хотел бы чашку кофе / чая (без to)<br>
          • <strong>I'd like to + verb</strong> — Я хотел бы сделать / поехать / стать (с <strong>to</strong>)
        </div>
        <button class="mbtn mbtn--big" onclick="startHabitatArcade()">
          Start printing ▶
        </button>
      </div>
    </div>
  `;
}

function startHabitatArcade() {
  playSfx("click");
  arcadeState = {
    timeLeft: 45,
    score: 0,
    targetScore: 6,
    lives: 3,
    currentPhrase: null,
    choices: [],
    finished: false
  };
  nextArcadeQuestion();
  arcadeState.timerId = setInterval(() => {
    if (!arcadeState || arcadeState.finished) return;
    arcadeState.timeLeft -= 1;
    const timerEl = document.getElementById("arcadeTimeTxt");
    const fillEl = document.getElementById("arcadeTimeFill");
    if (timerEl) timerEl.textContent = `⏱️ ${arcadeState.timeLeft}s`;
    if (fillEl) fillEl.style.width = `${(arcadeState.timeLeft / 45) * 100}%`;
    if (arcadeState.timeLeft <= 0) {
      finishHabitatArcade(false);
    }
  }, 1000);
}

function stopArcadeTimer() {
  if (arcadeState && arcadeState.timerId) {
    clearInterval(arcadeState.timerId);
    arcadeState.timerId = null;
  }
}

function nextArcadeQuestion() {
  if (!arcadeState) return;
  const p = PHRASES[Math.floor(Math.random() * PHRASES.length)];
  arcadeState.currentPhrase = p;
  arcadeState.choices = shuffleArray([
    { text: p.en, isCorrect: true },
    { text: p.distractors[0], isCorrect: false },
    { text: p.distractors[1], isCorrect: false }
  ]);
  renderHabitatArcadePlay();
}

function renderHabitatArcadePlay() {
  const a = arcadeState;
  if (!a) return;
  const modalRoot = document.getElementById("modalRoot");
  if (!modalRoot) return;

  const shieldLayers = Math.min(3, Math.floor(a.score / 2));

  modalRoot.innerHTML = `
    <div class="msheet" onclick="if(event.target===this) closeModal()">
      <div class="msheet__card" style="--tone: #ff9f43;">
        <div class="ms__top">
          <div class="ms__badge">🏠 Regolith Blocks · Shield ${shieldLayers}/3</div>
          <button class="ms__close" onclick="closeModal()">✕</button>
        </div>

        <div class="arcade-box">
          <div class="arcade-hud">
            <span id="arcadeTimeTxt">⏱️ ${a.timeLeft}s</span>
            <span style="color:#3fe07e;">🧱 Bricks: ${a.score}/${a.targetScore}</span>
            <span style="color:#ff6b81;">❤️ ${"●".repeat(a.lives)}${"○".repeat(3 - a.lives)}</span>
          </div>
          <div class="arcade-timer-bar">
            <div id="arcadeTimeFill" class="arcade-timer-fill" style="width:${(a.timeLeft / 45) * 100}%;"></div>
          </div>

          <div class="arcade-meteor">
            <div style="font-size:12px;font-weight:800;color:#ffd23f;text-transform:uppercase;margin-bottom:4px;">
              Incoming Phrase #${a.currentPhrase.id}
            </div>
            <div style="font-family:'Fredoka',sans-serif;font-size:24px;font-weight:700;margin-bottom:4px;">
              «${a.currentPhrase.ruUser}»
            </div>
            <div style="font-size:13.5px;color:#ffd8b0;">
              🌐 ${a.currentPhrase.ruGoogle}
            </div>
          </div>

          <div class="ms__opts" style="margin-bottom:0;">
            ${a.choices.map((c, i) => `
              <button class="ms__opt" onclick="answerArcadeChoice(${i})">
                <span class="ms__opt-let">${["A", "B", "C"][i]}</span>
                <span>${c.text}</span>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function answerArcadeChoice(idx) {
  const a = arcadeState;
  if (!a || a.finished) return;
  const chosen = a.choices[idx];
  if (chosen.isCorrect) {
    playSfx("right");
    speakEnglish(a.currentPhrase.en);
    state.masteredIds.add(a.currentPhrase.id);
    a.score++;
    if (a.score >= a.targetScore) {
      finishHabitatArcade(true);
    } else {
      nextArcadeQuestion();
    }
  } else {
    playSfx("wrong");
    a.lives--;
    if (a.lives <= 0) {
      finishHabitatArcade(false);
    } else {
      renderHabitatArcadePlay();
    }
  }
}

function finishHabitatArcade(won) {
  stopArcadeTimer();
  if (!arcadeState) return;
  arcadeState.finished = true;

  if (won) {
    launchConfetti();
    state.scienceScore += 20;
    state.gameDoneCount++;
    state.resources.pronouns = Math.min(100, state.resources.pronouns + 15);
    state.resources.like = Math.min(100, state.resources.like + 12);
    updateHUD();
  }

  const modalRoot = document.getElementById("modalRoot");
  if (!modalRoot) return;
  modalRoot.innerHTML = `
    <div class="msheet" onclick="if(event.target===this) closeModal()">
      <div class="msheet__card" style="--tone: ${won ? "#3fe07e" : "#ff9f43"}; text-align:center;">
        <div class="ms__top">
          <div class="ms__badge">🏠 Habitat Result</div>
          <button class="ms__close" onclick="closeModal()">✕</button>
        </div>
        <h2 class="ms__title" style="font-size:32px;">
          ${won ? "🛡️ 3/3 Shield Layers Built!" : "☄️ Shield Incomplete!"}
        </h2>
        <p class="ms__desc">
          You printed <strong>${arcadeState.score}/${arcadeState.targetScore}</strong> Moon-dust phrase bricks with <strong>${arcadeState.timeLeft}s</strong> remaining!
        </p>
        <div style="display:flex;justify-content:center;gap:14px;flex-wrap:wrap;margin-top:16px;">
          <button class="mbtn mbtn--ghost" onclick="closeModal()">Back to base</button>
          <button class="mbtn" onclick="startHabitatArcade()">Play again ↻</button>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// MODE E: SHELTER — ALL 40 EXCEL PHRASES VAULT & EXAM LAUNCHER
// ============================================================================
let vaultFilterCat = "all";
let vaultSearchQuery = "";

function openShelterVaultModal() {
  playSfx("click");
  renderShelterVaultModal();
}

function renderShelterVaultModal() {
  const modalRoot = document.getElementById("modalRoot");
  if (!modalRoot) return;

  const filtered = PHRASES.filter(p => {
    if (vaultFilterCat !== "all" && p.cat !== vaultFilterCat) return false;
    if (vaultSearchQuery.trim() !== "") {
      const q = vaultSearchQuery.toLowerCase();
      return (
        String(p.id).includes(q) ||
        p.en.toLowerCase().includes(q) ||
        p.ruUser.toLowerCase().includes(q) ||
        p.ruGoogle.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const rowsHtml = filtered.map(p => {
    const cat = CATEGORIES[p.cat];
    const isMastered = state.masteredIds.has(p.id);
    return `
      <div class="vault-row">
        <span class="vault-num">${p.id}</span>
        <div>
          <div style="font-family:'Fredoka',sans-serif;font-size:17px;font-weight:700;color:#ffffff;display:flex;align-items:center;gap:6px;">
            <span>${p.en}</span>
            ${isMastered ? `<span title="Mastered!" style="color:#3fe07e;">✓</span>` : ""}
          </div>
          <div style="font-size:12px;color:${cat.color};font-weight:800;">${cat.icon} ${p.pattern}</div>
        </div>
        <div>
          <div style="font-size:11px;color:#8ab4f8;text-transform:uppercase;">Ваш перевод</div>
          <div style="font-size:14px;font-weight:700;">${p.ruUser}</div>
        </div>
        <div class="vault-row__gt">
          <div style="font-size:11px;color:#9db5dc;text-transform:uppercase;">Google Translate</div>
          <div style="font-size:14px;font-weight:700;color:#cfe0ff;">${p.ruGoogle}</div>
        </div>
        <div style="display:flex;gap:6px;">
          <button class="mbtn mbtn--blue mbtn--sm" onclick="speakEnglish('${p.en.replace(/'/g, "\\'")}')" title="Listen">🔊</button>
          <button class="mbtn mbtn--sm" onclick="openStudyQuizCard({stationId:'shelter', specificId:${p.id}})" title="Practice phrase #${p.id}">▶ Quiz</button>
        </div>
      </div>
    `;
  }).join("");

  modalRoot.innerHTML = `
    <div class="msheet" onclick="if(event.target===this) closeModal()">
      <div class="msheet__card msheet__card--wide" style="--tone: #4fd1ff;">
        <div class="ms__top">
          <div class="ms__badge">🛡️ Shelter · All 40 Lesson 7.1 Phrases (${state.masteredIds.size}/40 Mastered)</div>
          <button class="ms__close" onclick="closeModal()">✕</button>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px;">
          <h2 class="ms__title" style="margin-bottom:0;font-size:24px;">Lesson 7.1 Excel Phrase Vault</h2>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button class="mbtn mbtn--sm ${state.SequentialMode ? "mbtn--warn" : "mbtn--blue"}" onclick="startSequentialExam()">
              🎯 Practice 1 → 40 in Order
            </button>
          </div>
        </div>

        <div class="vault-controls">
          <input type="text" class="vault-search" placeholder="🔍 Search English or Russian phrase (1–40)..."
                 value="${vaultSearchQuery.replace(/"/g, "&quot;")}"
                 oninput="updateVaultSearch(this.value)">
          <button class="mbtn mbtn--sm ${vaultFilterCat === "all" ? "mbtn--blue" : "mbtn--ghost"}" onclick="setVaultCat('all')">All (40)</button>
          ${Object.values(CATEGORIES).map(c => `
            <button class="mbtn mbtn--sm ${vaultFilterCat === c.key ? "mbtn--blue" : "mbtn--ghost"}" onclick="setVaultCat('${c.key}')">
              ${c.icon} ${c.short}
            </button>
          `).join("")}
        </div>

        <div class="vault-list">
          ${rowsHtml || `<div style="padding:24px;text-align:center;color:#9db5dc;">No phrases match your search.</div>`}
        </div>
      </div>
    </div>
  `;
}

function updateVaultSearch(val) {
  vaultSearchQuery = val;
  renderShelterVaultModal();
  const input = document.querySelector(".vault-search");
  if (input) {
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
}

function setVaultCat(cat) {
  playSfx("click");
  vaultFilterCat = cat;
  renderShelterVaultModal();
}

function startSequentialExam() {
  playSfx("click");
  state.SequentialMode = true;
  state.currentPhraseIndex = 0;
  openStudyQuizCard({ stationId: "lab", specificId: 1 });
}

// ============================================================================
// DAY CYCLE & SPACE WEATHER MODAL
// ============================================================================
function endDayCycle() {
  playSfx("click");
  state.day += 1;
  state.actionsLeft = 4;
  // Slight daily upkeep just like Tobish
  Object.keys(state.resources).forEach(k => {
    state.resources[k] = Math.max(25, state.resources[k] - 4);
  });
  updateHUD();

  const randomTip = PHRASES[Math.floor(Math.random() * PHRASES.length)];
  const modalRoot = document.getElementById("modalRoot");
  if (!modalRoot) return;

  modalRoot.innerHTML = `
    <div class="msheet" onclick="if(event.target===this) closeModal()">
      <div class="msheet__card" style="--tone: #3a9bff; text-align:center;">
        <div class="ms__top">
          <div class="ms__badge">🌙 Day ${state.day} · Space Weather Report</div>
          <button class="ms__close" onclick="closeModal()">✕</button>
        </div>
        <h2 class="ms__title" style="font-size:30px;">☀️ Quiet Sun · Actions Recharged!</h2>
        <p class="ms__desc">
          A new lunar day begins on the Moon Outpost! You have <strong>4 fresh Action Dots</strong> to practice Lesson 7.1 constructions.
        </p>
        <div class="ms__stat" style="text-align:left;">
          <div>
            <div style="font-size:12px;color:#ffd23f;font-weight:800;text-transform:uppercase;">Daily Grammar Transmission (#${randomTip.id})</div>
            <div style="font-family:'Fredoka',sans-serif;font-size:22px;font-weight:700;margin:4px 0;">${randomTip.en}</div>
            <div style="font-size:15px;color:#dce8ff;">✍️ ${randomTip.ruUser} · 🌐 ${randomTip.ruGoogle}</div>
          </div>
        </div>
        <button class="mbtn mbtn--big" onclick="closeModal()">Start Day ${state.day} →</button>
      </div>
    </div>
  `;
}

// ============================================================================
// SPLASH & RANK SELECTOR FLOW
// ============================================================================
function showRankSelector() {
  playSfx("click");
  const splash = document.getElementById("splashOverlay");
  if (!splash) return;
  splash.innerHTML = `
    <div class="splash-center">
      <div class="splash-pill">🧑‍🚀 Choose Your Astronaut Rank</div>
      <h1 class="splash-title" style="font-size:38px;">How would you like to practice?</h1>
      <p class="splash-sub" style="margin-bottom:18px;">You can switch between Multiple Choice and Word Builder at any time!</p>
      <div class="rank-grid">
        <div class="rank-card" style="--rc: #4fd1ff;" onclick="selectRankAndStart('cadet')">
          <div class="rank-card__emoji">🧑‍🚀</div>
          <div class="rank-card__title">Cadet</div>
          <div class="rank-card__tag">Study Card + A/B/C Quiz</div>
          <p style="font-size:15px;color:#cfe1ff;font-weight:700;line-height:1.4;">
            Read the grammar card with your Excel & Google translations, then pick the right English sentence from 3 options!
          </p>
        </div>
        <div class="rank-card" style="--rc: #ff9f43;" onclick="selectRankAndStart('specialist')">
          <div class="rank-card__emoji">🚀</div>
          <div class="rank-card__title">Specialist</div>
          <div class="rank-card__tag">Study Card + Word Builder</div>
          <p style="font-size:15px;color:#cfe1ff;font-weight:700;line-height:1.4;">
            Assemble full English sentences word-by-word from Russian prompts (` + "`I'd like to...`" + `, ` + "`He likes...`" + `)!
          </p>
        </div>
      </div>
    </div>
  `;
}

function selectRankAndStart(rank) {
  playSfx("right");
  state.rank = rank;
  const splash = document.getElementById("splashOverlay");
  if (splash) splash.style.display = "none";
  updateHUD();
}

function toggleRankFromHud() {
  playSfx("click");
  state.rank = state.rank === "cadet" ? "specialist" : "cadet";
  updateHUD();
}

function toggleSound() {
  state.soundOn = !state.soundOn;
  if (state.soundOn) playSfx("click");
  updateHUD();
}

function toggleMissionExpand() {
  playSfx("click");
  state.missionExpanded = !state.missionExpanded;
  updateHUD();
}

function closeModal() {
  stopArcadeTimer();
  playSfx("click");
  const modalRoot = document.getElementById("modalRoot");
  if (modalRoot) modalRoot.innerHTML = "";
}

// Initialize on DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  updateHUD();
});
