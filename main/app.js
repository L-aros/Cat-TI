const API_BASE = "/api";
const THEME_STORAGE_KEY = "cat-ti-theme";
const SEEN_QUESTION_IDS_STORAGE_KEY = "cat-ti-seen-question-ids";
const MAX_SEEN_QUESTION_IDS = 240;

let questions = [];
let quizAnswers = [];
let currentResult = null;
let consentState = "pending";
let currentQ = 0;
let selectedOpt = null;
let currentResultCode = null;
let lastQuizCatKey = null;

const dom = {
  themeToggles: document.querySelectorAll(".theme-toggle"),
  startBtn: document.getElementById("btn-start"),
  noticeEntry: document.getElementById("home-notice-entry"),
  noticeReopen: document.getElementById("btn-notice-reopen"),
  noticeOverlay: document.getElementById("notice-overlay"),
  noticeAgree: document.getElementById("btn-notice-agree"),
  noticeDecline: document.getElementById("btn-notice-decline"),
  backBtn: document.getElementById("btn-back"),
  nextBtn: document.getElementById("btn-next"),
  retryBtn: document.getElementById("btn-retry"),
  optionsWrap: document.getElementById("options-wrap"),
  quizCounter: document.getElementById("quiz-counter"),
  progressFill: document.getElementById("progress-fill"),
  quizQuestionId: document.getElementById("quiz-question-id"),
  questionText: document.getElementById("question-text"),
  quizCatBubble: document.getElementById("quiz-cat-bubble"),
  quizCatIcon: document.getElementById("quiz-cat-icon"),
  resultType: document.getElementById("result-type"),
  resultSubname: document.getElementById("result-subname"),
  resultQuote: document.getElementById("result-quote-text"),
  resultDesc: document.getElementById("result-desc"),
  resultCatFrame: document.getElementById("result-cat-frame"),
  resultDate: document.getElementById("result-date"),
  traitList: document.getElementById("trait-list")
};

function updateThemeToggle(theme) {
  const nextLabel = theme === "dark" ? "浅色" : "深色";
  const ariaLabel = theme === "dark" ? "切换到浅色模式" : "切换到深色模式";
  dom.themeToggles.forEach(toggle => {
    toggle.textContent = nextLabel;
    toggle.setAttribute("aria-label", ariaLabel);
  });
}

function setTheme(theme, persist = true) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  updateThemeToggle(nextTheme);

  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {}
  }
}

function initTheme() {
  let storedTheme = "light";
  try {
    storedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "light";
  } catch {}
  setTheme(storedTheme, false);
}

function toggleTheme() {
  const currentTheme = document.documentElement.dataset.theme || "light";
  setTheme(currentTheme === "dark" ? "light" : "dark");
}

function getSeenQuestionIds() {
  try {
    const raw = localStorage.getItem(SEEN_QUESTION_IDS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return [...new Set(parsed.filter(id => typeof id === "string"))].slice(-MAX_SEEN_QUESTION_IDS);
  } catch {
    return [];
  }
}

function setSeenQuestionIds(ids) {
  try {
    const nextIds = [...new Set(ids.filter(id => typeof id === "string"))].slice(-MAX_SEEN_QUESTION_IDS);
    localStorage.setItem(SEEN_QUESTION_IDS_STORAGE_KEY, JSON.stringify(nextIds));
  } catch {}
}

function rememberSeenQuestions(items) {
  const currentIds = getSeenQuestionIds();
  const nextIds = [...currentIds, ...items.map(item => item?.id).filter(id => typeof id === "string")];
  setSeenQuestionIds(nextIds);
}

function makeCatSVG({ size = 84, eye = "round", mouth = "flat", accessory = "none", body = "#111", accent = "#666" } = {}) {
  const eyes = {
    round: '<circle cx="50" cy="48" r="4" fill="#fff"></circle><circle cx="78" cy="48" r="4" fill="#fff"></circle>',
    dot: '<circle cx="50" cy="48" r="3" fill="#fff"></circle><circle cx="78" cy="48" r="3" fill="#fff"></circle>',
    sleepy: '<rect x="44" y="46" width="12" height="4" rx="2" fill="#fff"></rect><rect x="72" y="46" width="12" height="4" rx="2" fill="#fff"></rect>',
    stern: '<path d="M43 47 L57 44" stroke="#fff" stroke-width="4" stroke-linecap="round"></path><path d="M71 44 L85 47" stroke="#fff" stroke-width="4" stroke-linecap="round"></path>',
    wide: '<circle cx="50" cy="48" r="5" fill="#fff"></circle><circle cx="78" cy="48" r="5" fill="#fff"></circle><circle cx="50" cy="48" r="2" fill="#111"></circle><circle cx="78" cy="48" r="2" fill="#111"></circle>',
    spark: '<path d="M50 41 L53 46 L58 48 L53 50 L50 55 L47 50 L42 48 L47 46 Z" fill="#fff"></path><path d="M78 41 L81 46 L86 48 L81 50 L78 55 L75 50 L70 48 L75 46 Z" fill="#fff"></path>',
    wink: '<rect x="44" y="46" width="12" height="4" rx="2" fill="#fff"></rect><circle cx="78" cy="48" r="4" fill="#fff"></circle>'
  };

  const mouths = {
    flat: '<rect x="58" y="63" width="12" height="3" rx="1.5" fill="#fff"></rect>',
    smile: '<path d="M56 62 Q64 70 72 62" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"></path>',
    smirk: '<path d="M57 64 Q66 68 74 61" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"></path>',
    o: '<circle cx="64" cy="64" r="4" fill="#fff"></circle>',
    tiny: '<circle cx="64" cy="63" r="2.5" fill="#fff"></circle>',
    grin: '<path d="M54 62 Q64 74 74 62" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"></path><rect x="56" y="67" width="16" height="3" fill="#fff"></rect>'
  };

  const accessories = {
    none: "",
    crown: `<path d="M40 28 L47 16 L57 28 L64 13 L71 28 L81 16 L88 28 Z" fill="${accent}"></path><rect x="40" y="28" width="48" height="6" rx="2" fill="${accent}"></rect>`,
    bolt: `<path d="M84 20 L72 42 L82 42 L70 62" stroke="${accent}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>`,
    heart: `<path d="M64 84 C60 78 52 74 52 66 C52 60 56 56 61 56 C63 56 65 57 66 59 C67 57 69 56 71 56 C76 56 80 60 80 66 C80 74 72 78 68 84 Z" fill="${accent}"></path>`,
    star: `<path d="M96 22 L99 30 L108 30 L101 35 L104 43 L96 38 L88 43 L91 35 L84 30 L93 30 Z" fill="${accent}"></path>`,
    bow: `<path d="M48 77 C40 68 34 69 34 76 C34 82 39 84 46 82 L54 80 Z" fill="${accent}"></path><path d="M80 77 C88 68 94 69 94 76 C94 82 89 84 82 82 L74 80 Z" fill="${accent}"></path><circle cx="64" cy="79" r="6" fill="${accent}"></circle>`,
    moon: `<path d="M28 26 C34 14 48 11 60 18 C50 20 43 28 43 39 C43 47 47 54 54 58 C40 60 28 49 28 35 C28 32 28 29 28 26 Z" fill="${accent}"></path>`,
    tie: `<path d="M58 70 L70 70 L67 82 L64 92 L61 82 Z" fill="${accent}"></path>`,
    glasses: `<rect x="38" y="42" width="20" height="14" rx="4" stroke="${accent}" stroke-width="4" fill="none"></rect><rect x="70" y="42" width="20" height="14" rx="4" stroke="${accent}" stroke-width="4" fill="none"></rect><line x1="58" y1="49" x2="70" y2="49" stroke="${accent}" stroke-width="4"></line>`,
    bell: `<circle cx="64" cy="80" r="7" fill="${accent}"></circle><rect x="58" y="71" width="12" height="5" rx="2" fill="${accent}"></rect>`,
    badge: `<rect x="84" y="70" width="18" height="18" rx="4" fill="${accent}"></rect><path d="M88 79 L92 83 L98 75" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>`,
    halo: `<ellipse cx="64" cy="18" rx="22" ry="7" fill="none" stroke="${accent}" stroke-width="5"></ellipse>`
  };

  return `<svg viewBox="0 0 128 128" width="${size}" height="${size}" aria-hidden="true">
    <path d="M36 33 L48 14 L58 34 Z" fill="${body}"></path>
    <path d="M70 34 L80 14 L92 33 Z" fill="${body}"></path>
    <circle cx="64" cy="48" r="28" fill="${body}"></circle>
    <rect x="29" y="66" width="70" height="30" rx="15" fill="${body}"></rect>
    <rect x="36" y="90" width="10" height="20" rx="4" fill="${body}"></rect>
    <rect x="82" y="90" width="10" height="20" rx="4" fill="${body}"></rect>
    <path d="M97 74 C111 72 115 84 112 95 C109 106 98 108 92 103" stroke="${body}" stroke-width="10" fill="none" stroke-linecap="round"></path>
    <ellipse cx="64" cy="80" rx="15" ry="10" fill="${accent}"></ellipse>
    ${accessories[accessory] || ""}
    ${eyes[eye] || eyes.round}
    <circle cx="64" cy="58" r="3" fill="#fff"></circle>
    ${mouths[mouth] || mouths.flat}
    <path d="M54 61 L42 58" stroke="#fff" stroke-width="3" stroke-linecap="round"></path>
    <path d="M54 66 L42 68" stroke="#fff" stroke-width="3" stroke-linecap="round"></path>
    <path d="M74 61 L86 58" stroke="#fff" stroke-width="3" stroke-linecap="round"></path>
    <path d="M74 66 L86 68" stroke="#fff" stroke-width="3" stroke-linecap="round"></path>
  </svg>`;
}

const catPresets = {
  default: { eye: "round", mouth: "flat", accessory: "none" },
  mainecoon: { eye: "stern", mouth: "smirk", accessory: "crown" },
  oriental: { eye: "spark", mouth: "grin", accessory: "bolt" },
  ragdoll: { eye: "round", mouth: "smile", accessory: "heart" },
  abyssinian: { eye: "wide", mouth: "smile", accessory: "star" },
  americanshorthair: { eye: "stern", mouth: "flat", accessory: "tie" },
  bengal: { eye: "wide", mouth: "o", accessory: "bolt" },
  scottishfold: { eye: "round", mouth: "tiny", accessory: "bell" },
  siamese: { eye: "spark", mouth: "smile", accessory: "bow" },
  russianblue: { eye: "stern", mouth: "flat", accessory: "moon" },
  sphynx: { eye: "dot", mouth: "tiny", accessory: "glasses" },
  norwegianforest: { eye: "sleepy", mouth: "smile", accessory: "heart" },
  persian: { eye: "sleepy", mouth: "tiny", accessory: "star" },
  britishshorthair: { eye: "stern", mouth: "flat", accessory: "badge" },
  devonrex: { eye: "dot", mouth: "smirk", accessory: "glasses" },
  birman: { eye: "round", mouth: "smile", accessory: "bell" },
  exoticshorthair: { eye: "sleepy", mouth: "smile", accessory: "halo" },
  territory: { eye: "stern", mouth: "flat", accessory: "badge" },
  orbit: { eye: "spark", mouth: "smile", accessory: "star" },
  perch: { eye: "stern", mouth: "tiny", accessory: "moon" },
  radar: { eye: "wide", mouth: "tiny", accessory: "star" },
  huddle: { eye: "round", mouth: "smile", accessory: "heart" },
  route: { eye: "dot", mouth: "flat", accessory: "tie" },
  routine: { eye: "stern", mouth: "flat", accessory: "glasses" },
  stash: { eye: "dot", mouth: "smirk", accessory: "badge" },
  drift: { eye: "sleepy", mouth: "tiny", accessory: "halo" },
  sunspot: { eye: "round", mouth: "smile", accessory: "halo" }
};

const homeRows = {
  row1: ["mainecoon", "oriental", "ragdoll", "abyssinian", "americanshorthair", "bengal", "scottishfold", "siamese"],
  row2: ["russianblue", "sphynx", "norwegianforest", "persian", "britishshorthair", "devonrex", "birman", "exoticshorthair"],
  row3: ["mainecoon", "ragdoll", "bengal", "siamese", "russianblue", "persian", "devonrex", "birman"]
};

const STATIC_CAT_ASSETS = new Set([
  "default",
  "mainecoon",
  "oriental",
  "ragdoll",
  "abyssinian",
  "americanshorthair",
  "bengal",
  "scottishfold",
  "siamese",
  "russianblue",
  "sphynx",
  "norwegianforest",
  "persian",
  "britishshorthair",
  "devonrex",
  "birman",
  "exoticshorthair"
]);

const QUIZ_ART_ALIASES = {
  territory: "britishshorthair",
  orbit: "abyssinian",
  perch: "russianblue",
  radar: "oriental",
  huddle: "ragdoll",
  route: "americanshorthair",
  routine: "birman",
  stash: "bengal",
  drift: "persian",
  sunspot: "siamese"
};

function resolveCatAssetKey(key) {
  if (STATIC_CAT_ASSETS.has(key)) return key;
  if (QUIZ_ART_ALIASES[key]) return QUIZ_ART_ALIASES[key];
  return "default";
}

function getCatAssetUrl(key) {
  const assetKey = resolveCatAssetKey(key);
  return `assets/cats/${assetKey}.png`;
}

function renderCatArt(key, size) {
  const preset = catPresets[key] || catPresets.default;
  const fallback = encodeURIComponent(makeCatSVG({ ...preset, size }).replace("<svg ", '<svg class="cat-art-fallback" '));
  return `<img class="cat-art" src="${getCatAssetUrl(key)}" width="${size}" height="${size}" alt="" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='data:image/svg+xml;charset=UTF-8,${fallback}'">`;
}

function fillRow(id, keys) {
  const row = document.getElementById(id);
  const doubled = [...keys, ...keys];
  row.innerHTML = doubled.map(key => `<div class="animal-cell">${renderCatArt(key, 74)}</div>`).join("");
}

function renderHomeRows() {
  fillRow("home-row-1", homeRows.row1);
  fillRow("home-row-2", homeRows.row2);
  fillRow("home-row-3", homeRows.row3);
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function applyConsentState(state) {
  consentState = state;
  const allowStart = state === "agreed";
  dom.startBtn.classList.toggle("is-hidden", !allowStart);
  dom.noticeEntry.classList.toggle("is-visible", state === "declined");
}

function openNoticeDialog() {
  dom.noticeOverlay.classList.add("is-open");
}

function closeNoticeDialog() {
  dom.noticeOverlay.classList.remove("is-open");
}

function agreeNotice() {
  applyConsentState("agreed");
  closeNoticeDialog();
}

function declineNotice() {
  applyConsentState("declined");
  closeNoticeDialog();
}

function cleanQuoteText(text) {
  return typeof text === "string" ? text.replace(/[。．.]+$/u, "") : "";
}

function initHomeNotice() {
  applyConsentState("pending");
  openNoticeDialog();
}

async function parseApiError(response, fallbackMessage) {
  let errorMessage = fallbackMessage;

  try {
    const data = await response.json();
    if (data && typeof data.error === "string") {
      errorMessage = data.error;
    }
  } catch {}

  if (response.status === 429) {
    return "当前请求过于频繁，请稍后再试";
  }

  return errorMessage;
}

async function startQuiz() {
  if (consentState !== "agreed") {
    openNoticeDialog();
    return;
  }

  const originalText = dom.startBtn.innerHTML;
  dom.startBtn.disabled = true;
  dom.startBtn.innerHTML = '<span class="btn-start-icon"></span>加载中';

  try {
    const seenIds = getSeenQuestionIds();
    const query = seenIds.length ? `?seen=${encodeURIComponent(JSON.stringify(seenIds))}` : "";
    const response = await fetch(`${API_BASE}/start${query}`, {
      method: "GET",
      headers: {
        accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(await parseApiError(response, "题目加载失败"));
    }

    const data = await response.json();
    questions = Array.isArray(data.questions) ? data.questions : [];
    if (!questions.length) {
      throw new Error("没有可用题目");
    }

    rememberSeenQuestions(questions);
    currentQ = 0;
    quizAnswers = [];
    selectedOpt = null;
    currentResultCode = null;
    currentResult = null;
    renderQuestion();
    showPage("page-quiz");
  } catch (error) {
    alert(error instanceof Error ? error.message : "题目加载失败，请稍后再试");
  } finally {
    dom.startBtn.disabled = false;
    dom.startBtn.innerHTML = originalText;
  }
}

function pickQuizCat(key) {
  const fallbackKeys = Object.keys(catPresets).filter(item => item !== "default");
  let picked = key || fallbackKeys[Math.floor(Math.random() * fallbackKeys.length)];
  if (!key && picked === lastQuizCatKey && fallbackKeys.length > 1) {
    const nextIndex = (fallbackKeys.indexOf(picked) + 1) % fallbackKeys.length;
    picked = fallbackKeys[nextIndex];
  }
  lastQuizCatKey = picked;
  return picked;
}

function renderQuestion() {
  const q = questions[currentQ];
  if (!q) return;

  const savedAnswer = quizAnswers[currentQ];
  selectedOpt = savedAnswer ? q.options.findIndex(option => option.key === savedAnswer.optionKey) : null;
  dom.quizCounter.textContent = `${currentQ + 1} / ${questions.length}`;
  dom.progressFill.style.width = `${(currentQ / questions.length) * 100}%`;
  dom.quizQuestionId.textContent = q.id;
  dom.questionText.textContent = q.text;
  dom.quizCatBubble.textContent = q.hint;
  dom.quizCatIcon.innerHTML = renderCatArt(pickQuizCat(q.art), 40);
  dom.optionsWrap.innerHTML = q.options.map((opt, index) => `
    <button type="button" class="opt${index === selectedOpt ? " selected" : ""}" data-option-index="${index}">
      <span class="opt-key">${opt.key}</span>
      <span>${opt.text}</span>
    </button>
  `).join("");
  dom.nextBtn.classList.toggle("enabled", selectedOpt !== null);
  dom.nextBtn.textContent = currentQ === questions.length - 1 ? "查看结果 →" : "继续 →";
}

function selectOption(index) {
  const target = dom.optionsWrap.querySelector(`[data-option-index="${index}"]`);
  if (!target) return;

  dom.optionsWrap.querySelectorAll(".opt").forEach(button => button.classList.remove("selected"));
  target.classList.add("selected");
  selectedOpt = index;
  dom.nextBtn.classList.add("enabled");
}

function handleOptionClick(event) {
  const button = event.target.closest(".opt");
  if (!button || !dom.optionsWrap.contains(button)) return;
  selectOption(Number(button.dataset.optionIndex));
}

async function nextQuestion() {
  if (selectedOpt === null) return;

  const picked = questions[currentQ].options[selectedOpt];
  quizAnswers[currentQ] = {
    questionId: questions[currentQ].id,
    optionKey: picked.key
  };

  if (currentQ < questions.length - 1) {
    currentQ += 1;
    renderQuestion();
    return;
  }

  const originalText = dom.nextBtn.textContent;
  dom.nextBtn.classList.remove("enabled");
  dom.nextBtn.textContent = "生成结果中...";

  try {
    const response = await fetch(`${API_BASE}/finish`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({
        answers: quizAnswers
      })
    });

    if (!response.ok) {
      throw new Error(await parseApiError(response, "结果生成失败"));
    }

    const data = await response.json();
    if (!data.result) {
      throw new Error("结果生成失败");
    }

    showResult(data.result);
  } catch (error) {
    alert(error instanceof Error ? error.message : "结果生成失败，请重新测试一次");
    dom.nextBtn.textContent = originalText;
    if (selectedOpt !== null) {
      dom.nextBtn.classList.add("enabled");
    }
  }
}

function goBack() {
  if (currentQ === 0) {
    showPage("page-home");
    return;
  }

  quizAnswers[currentQ] = null;
  currentQ -= 1;
  renderQuestion();
}

function showResult(data) {
  currentResult = data;
  currentResultCode = data.code || null;
  dom.resultType.textContent = data.name;
  dom.resultSubname.textContent = data.subname;
  dom.resultQuote.textContent = cleanQuoteText(data.quote);
  dom.resultDesc.textContent = data.desc;
  dom.resultCatFrame.innerHTML = renderCatArt(data.art || "default", 112);

  const now = new Date();
  dom.resultDate.textContent = `${now.getMonth() + 1}月${now.getDate()}日`;
  dom.traitList.innerHTML = "";
  data.traits.forEach(trait => {
    const item = document.createElement("span");
    item.className = "trait";
    item.textContent = trait;
    dom.traitList.appendChild(item);
  });

  showPage("page-result");
}

function retryQuiz() {
  startQuiz();
}

function bindEvents() {
  dom.themeToggles.forEach(toggle => toggle.addEventListener("click", toggleTheme));
  dom.startBtn.addEventListener("click", startQuiz);
  dom.noticeReopen.addEventListener("click", openNoticeDialog);
  dom.noticeAgree.addEventListener("click", agreeNotice);
  dom.noticeDecline.addEventListener("click", declineNotice);
  dom.backBtn.addEventListener("click", goBack);
  dom.nextBtn.addEventListener("click", nextQuestion);
  dom.retryBtn.addEventListener("click", retryQuiz);
  dom.optionsWrap.addEventListener("click", handleOptionClick);
}

function initApp() {
  initTheme();
  bindEvents();
  renderHomeRows();
  initHomeNotice();
}

initApp();
