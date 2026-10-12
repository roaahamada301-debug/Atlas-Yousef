
const places = [
  {
    title: "المكتبة المنسية",
    story: "بين الكتب القديمة، وجدت رسالة مشفّرة. أول خطوة في الرحلة تبدأ من الحروف.",
    question: "إذا كان A = 1 و B = 2 وهكذا، فما الكلمة التي تمثلها الأرقام 13 - 1 - 16؟",
    answers: ["MAP", "خريطة", "the map"],
    hint: "حوّل كل رقم إلى الحرف المقابل له في الأبجدية الإنجليزية.",
    clue: "أول دليل: MAP — خريطة.",
    success: "بداية موفقة يا Youfox! أول مكان اتكشف."
  },
  {
    title: "المطبخ الغريب",
    story: "ثلاثة أوعية أمامك. واحد فيه ملح، والثاني فيه سكر، والثالث فيه خليط من الاثنين. كل الملصقات على الأوعية خاطئة.",
    question: "مسموح لك تذوق حبة واحدة من وعاء واحد فقط. من أي وعاء تبدأ لتقدر تحدد محتويات الأوعية الثلاثة؟",
    answers: [
      "الثالث",
      "الوعاء الثالث",
      "ملح وسكر",
      "الملح والسكر",
      "وعاء الملح والسكر",
      "الوعاء المكتوب عليه ملح وسكر",
      "الذي مكتوب عليه ملح وسكر",
      "وعاء الملح والسكر المكتوب عليه",
      "الوعاء المكتوب عليه ملح+سكر",
      "ابدأ بالوعاء المكتوب عليه ملح وسكر",
      "الوعاء الذي مكتوب عليه ملح وسكر",
      "اللي مكتوب عليه ملح وسكر",
      "اللي عليه ملصق ملح وسكر"
    ],
    hint: "ابدأ بالوعاء المكتوب عليه «ملح وسكر»؛ افتكر إن كل الملصقات غلط.",
    clue: "دليل المطبخ: كل الملصقات خاطئة.",
    success: "اختيار ذكي! دلوقتي عرفت منين تبدأ."
  },
  {
    title: "المدينة البعيدة",
    story: "وصلت إلى مدينة أوروبية هادئة، لكن اسمها ناقص حرفًا واحدًا.",
    question: "أكمل اسم المدينة: B _ R N",
    answers: ["BERN", "برن", "BERNE"],
    hint: "الحرف الناقص هو الحرف الثاني في كلمة BED.",
    clue: "دليل المدينة: برن (Bern)، عاصمة سويسرا.",
    success: "أحسنت! محطة جديدة اتكشفت على الخريطة."
  },
  {
    title: "غابة الثعلب",
    story: "ثعلب وغراب وقطة يتجادلون حول مكان المفتاح. واحد فقط منهم يقول الحقيقة.",
    question: "الثعلب يقول: المفتاح مع الغراب. الغراب يقول: المفتاح مش معايا. القطة تقول: المفتاح مش مع الثعلب. إذا كانت عبارة واحدة فقط صحيحة، فمن معه المفتاح؟",
    answers: ["الثعلب", "مع الثعلب", "fox", "the fox"],
    hint: "جرّب افتراض أن المفتاح مع الثعلب، ثم اختبر العبارات الثلاث.",
    clue: "دليل الغابة: المفتاح كان مع الثعلب.",
    success: "يا سلام! عرفت تحل لغز الكلام المتناقض."
  },
  {
    title: "غرفة الساعات",
    story: "أربع ساعات تحمل الأرقام 1 و2 و3 و4. لازم ترتبها وفق القواعد المكتوبة على الحائط.",
    question: "الرقم 4 يأتي مباشرة قبل الرقم 1، والرقم 1 يأتي قبل الرقم 3، والرقم 2 يأتي بعد الرقم 3. ما الترتيب الصحيح؟",
    answers: ["4132"],
    hint: "ابدأ بالرقمين 4 و1 لأنهما لازم يكونا متجاورين بهذا الترتيب.",
    clue: "دليل الساعات: الترتيب الصحيح هو 4132.",
    success: "تك تك... فتح باب المرصد!"
  },
  {
    title: "المرصد",
    story: "وصلت إلى المرصد، حيث يجمع المستكشفون المعلومات قبل أن يصلوا إلى استنتاجاتهم.",
    question: "ما اسم المعلومات التي نجمعها لتساعدنا في الوصول إلى استنتاج؟",
    answers: ["الأدلة", "دليل", "الدليل", "أدلة", "clues", "evidence"],
    hint: "فكّر في الأشياء التي تجمعها خلال تحقيق لتثبت صحة فكرة.",
    clue: "دليل المرصد: الأدلة تساعدنا على الوصول إلى استنتاج.",
    success: "ممتاز! كل دليل قربك خطوة من السر."
  },
  {
    title: "الغرفة المخفية",
    story: "أمامك باب أخير، وعليه عبارة من بداية الرحلة. حاول تتذكر ما قيل لك.",
    question: "ما الشيء الذي طُلب منك ألا تتجاهله في بداية المغامرة؟",
    answers: ["التفاصيل", "التفاصيل الصغيرة", "التفاصيل الصغيره", "small details", "the details", "little details"],
    hint: "ارجع بذاكرتك إلى وصف الأطلس في بداية الرحلة.",
    clue: "دليل الغرفة: التفاصيل الصغيرة تستحق الانتباه.",
    success: "وصلت إلى آخر باب قبل التحدي النهائي!"
  },
  {
    title: "التحدي الأخير",
    story: "وصلت للنهاية يا Youfox، لكن آخر قفل لسه مستني إجابتك.",
    question: "اجمع الرقم المميز لصاحب الأطلس مع الرقم الأخير في ترتيب غرفة الساعات (4132). ما الناتج؟",
    answers: ["27", "سبعة وعشرون", "سبعه وعشرين"],
    hint: "مفيش تلميح هنا يا يوسف 👀🤎 ولا تحاول تستخدم ال AI، وعد؟ عايزك توصل للإجابة بنفسك المرة دي. ثق في دماغك شوية.",
    clue: "التحدي الأخير: تم حل القفل الأخير.",
    success: "وصلت للنهاية فعلًا يا Youfox! 🦊"
  }
];

const screenIds = [
  "intro",
  "map-screen",
  "puzzle-screen",
  "notebook-screen",
  "ending-screen"
];

const solved = new Set();
const hintsUsed = new Set();
const cluesFound = new Set();

let currentPlace = 0;
let endingTimers = [];

const $ = (id) => document.getElementById(id);

function showScreen(id) {
  screenIds.forEach((screenId) => {
    const screen = $(screenId);
    screen.classList.toggle("hidden", screenId !== id);
    screen.classList.toggle("active", screenId === id);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function normalizeAnswer(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[.,!?،؛:'"“”‘’\-+]/g, "")
    .replace(/\s+/g, " ");
}

function updateMap() {
  document.querySelectorAll(".map-point").forEach((button) => {
    const index = Number(button.dataset.place);
    const unlocked = index === 0 || solved.has(index - 1);
    const isSolved = solved.has(index);

    button.disabled = !unlocked || isSolved;
    button.classList.toggle("locked", !unlocked);
    button.classList.toggle("solved", isSolved);

    const icons = ["📚", "🍯", "🏙️", "🦊", "🕰️", "🔭", "🗝️", "✦"];
    const icon = button.querySelector(".point-icon");

    if (icon) icon.textContent = isSolved ? "✓" : icons[index];

    if (index === 7) {
      button.classList.toggle("hidden", !solved.has(6));
    }
  });

  $("map-progress").textContent =
    `الأماكن المكتشفة: ${solved.size} / ${places.length}`;
}

function openPlace(index) {
  if (index < 0 || index >= places.length) return;
  if (index > 0 && !solved.has(index - 1)) return;
  if (solved.has(index)) return;

  currentPlace = index;
  const place = places[index];

  $("place-number").textContent = `المكان ${index + 1} من ${places.length}`;
  $("place-title").textContent = place.title;
  $("place-story").textContent = place.story;
  $("puzzle-question").textContent = place.question;

  $("answer-input").value = "";
  $("answer-input").disabled = false;
  $("submit-answer").disabled = false;
  $("feedback").textContent = "";
  $("success-message").textContent = "";
  $("success-actions").classList.add("hidden");

  $("hint-text").textContent = "";
  $("hint-text").classList.add("hidden");
  $("hint-btn").hidden = false;

  const usedHint = hintsUsed.has(index);
  $("hint-btn").disabled = usedHint;

  if (usedHint) {
    $("hint-text").textContent = place.hint;
    $("hint-text").classList.remove("hidden");
  }

  showScreen("puzzle-screen");
}

function addClue(index) {
  if (cluesFound.has(index)) return;
  cluesFound.add(index);

  const empty = $("empty-clues");
  if (empty) empty.remove();

  const item = document.createElement("li");
  item.textContent = places[index].clue;
  $("clue-list").appendChild(item);
}

function finishPlace() {
  const place = places[currentPlace];

  solved.add(currentPlace);
  addClue(currentPlace);
  updateMap();

  $("feedback").textContent = "";
  $("answer-input").disabled = true;
  $("submit-answer").disabled = true;
  $("hint-btn").hidden = true;

  $("success-message").textContent = place.success;
  $("success-actions").classList.remove("hidden");

  $("continue-btn").textContent =
    currentPlace === places.length - 1
      ? "اكتشف المفاجأة الأخيرة ✨"
      : "متابعة الرحلة ←";
}

function revealEnding() {
  showScreen("ending-screen");

  const message = $("ending-message");
  const elements = Array.from(message.children);

  endingTimers.forEach(clearTimeout);
  endingTimers = [];

  elements.forEach((element) => element.classList.remove("revealed"));

  elements.forEach((element, index) => {
    const timer = setTimeout(() => {
      element.classList.add("revealed");
    }, 350 + index * 650);

    endingTimers.push(timer);
  });
}

$("start-btn").addEventListener("click", () => {
  showScreen("map-screen");
  updateMap();
});

document.querySelectorAll(".map-point").forEach((button) => {
  button.addEventListener("click", () => {
    openPlace(Number(button.dataset.place));
  });
});

$("answer-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const answer = normalizeAnswer($("answer-input").value);
  const place = places[currentPlace];

  if (!answer) {
    $("feedback").textContent = "اكتب إجابتك الأول يا Youfox. 👀";
    return;
  }

  const correct = place.answers.some(
    (accepted) => normalizeAnswer(accepted) === answer
  );

  if (correct) {
    finishPlace();
  } else {
    $("feedback").textContent =
      "مش دي الإجابة المطلوبة... جرّب تفكّر فيها مرة تانية يا Youfox. 🦊";
  }
});

$("hint-btn").addEventListener("click", () => {
  if (hintsUsed.has(currentPlace)) return;

  hintsUsed.add(currentPlace);
  $("hint-text").textContent = places[currentPlace].hint;
  $("hint-text").classList.remove("hidden");
  $("hint-btn").disabled = true;
});

$("back-btn").addEventListener("click", () => {
  showScreen("map-screen");
  updateMap();
});

$("continue-btn").addEventListener("click", () => {
  if (currentPlace === places.length - 1) {
    revealEnding();
  } else {
    showScreen("map-screen");
    updateMap();
  }
});

$("notebook-btn").addEventListener("click", () => {
  showScreen("notebook-screen");
});

$("notebook-back-btn").addEventListener("click", () => {
  showScreen("map-screen");
  updateMap();
});

$("restart-btn").addEventListener("click", () => {
  endingTimers.forEach(clearTimeout);
  endingTimers = [];

  solved.clear();
  hintsUsed.clear();
  cluesFound.clear();

  $("clue-list").innerHTML =
    '<li id="empty-clues">لم تُكتشف أدلة بعد.</li>';

  document.querySelectorAll(".map-point").forEach((button) => {
    button.classList.remove("solved");
    button.classList.add("locked");

    const icons = ["📚", "🍯", "🏙️", "🦊", "🕰️", "🔭", "🗝️", "✦"];
    const icon = button.querySelector(".point-icon");
    if (icon) icon.textContent = icons[Number(button.dataset.place)];
  });

  updateMap();
  showScreen("intro");
});

updateMap();
showScreen("intro");
