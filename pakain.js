
const scenes = [
  {
    id: "scene-1",
    bg: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/greenhapag.png",
    bgColor: "#111111",
    music: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/Eerie5.MP3",
    volume: 1.0,
    textPosition: "top",
    textStyle: "",
    textColor: "#6BFF72",
    textOffsetY: "1.35rem",
    uiTopPadding: "3.4rem",
    text: "Tinig: Hindi mo pagsisihan ang iyong desisyong saluhan kami sa kabusugang magpakailanman!",
    typing: true,
    showRitual: true,
    ritualQuestion: "Para sa iyong ikalawang kakanin, ialay sa ibaba ang pangalan ng iyong pinakamamahal (maaaring humihinga o hindi).",
    ritualPlaceholder: "Sagot",
    hideButton: true,
    noFog: true
  },

  {
    id: "scene-2",
    bg: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/greenhapag.png",
    bgColor: "#111111",
    music: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/Eerie5.MP3",
    volume: 1.0,
    textPosition: "bottom",
    textStyle: "",
    textColor: "#6BFF72",
    tinigAnimate: true,
    text: "Tinig: Salamat sa iyong alay. Mula ngayon ay sa akin na ang alaalang ito",
    typing: true,
    startEffectImmediately: true,
    sfx: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/evaporate.mp3",
    sfxVolume: 1.0,
    sfxLoop: false,
    sfxDelayMs: 3000,
    buttonText: "SUNOD",
    buttonMode: "arrow",
    showButtonAfterEffect: true,
    postTypingEffect: "dissipateRitualAnswer",
    dissipateHoldMs: 3000,
    dissipateSuckMs: 5000,
    hideButton: false
  },
  {
    id: "scene-3",
    bg: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/greenhapag.png",
    bgColor: "#111111",
    music: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/Eerie2.mp3",
    volume: 1.0,
    textPosition: "top",
    textStyle: "",
    textColor: "#6BFF72",
    tinigAnimate: true,
    textOffsetY: "1.35rem",
    uiTopPadding: "3.6rem",
    text: "Tinig: Nananalig kaming ‘di mo lilisanin ang Hapag. At dahil diyan, narito naman ang iyong ikalawang kakanin. ang pambansang paborito. Tikman mo ang aming sisig na may init at sarap na nananatili, bagay sa panlasang hindi mapatahimik.",
    showCloche: true,
    showMeal: true,
    postTypingEffect: "clocheLift",
    clocheLiftDelayMs: 340,
    clocheLiftSfx: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/cloche-animate.MP3",
    clocheLiftSfxVolume: 0.9,
    clocheLiftSfxRate: 1.5,
    clocheLiftDurationMs: 3000,
    hideButton: true
  },
  {
    id: "scene-4",
    bg: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/greenhapag.png",
    bgColor: "#111111",
    music: "",
    volume: 1.0,
    textPosition: "top",
    textStyle: "italic",
    textColor: "#ffffff",
    textOffsetY: "1.35rem",
    uiTopPadding: "3.6rem",
    text: "Hindi ko maintindihan. Ako na hamak na bisita lamang? Ay hinintay? Sa . . . Hapag?",
    buttonText: "SUNOD",
    buttonMode: "arrow",
    showButtonAfterTyping: true,
    hideButton: false
  },
  {
    id: "scene-5",
    bg: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/greenhapag.png",
    bgColor: "#111111",
    music: "",
    volume: 1.0,
    textPosition: "top",
    textStyle: "",
    textColor: "#6BFF72",
    textOffsetY: "1.35rem",
    uiTopPadding: "3.6rem",
    text: "Tinig: Simple lamang ito. Naghanda kami para sa iyo. Nawa’y matumbasan ang aming kaloob.",
    buttonText: "SUNOD",
    buttonMode: "arrow",
    showButtonAfterTyping: true,
    hideButton: false
  },
  {
    id: "scene-6",
    bg: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/greenhapag.png",
    bgColor: "#111111",
    music: "",
    volume: 1.0,
    textPosition: "top",
    textStyle: "",
    textColor: "#6BFF72",
    textOffsetY: "1.35rem",
    uiTopPadding: "3.6rem",
    text: "Tinig: Isang alay para sa isang kakanin.",
    buttonText: "“Anong alay?”",
    buttonMode: "text",
    buttonFont: "regular",
    buttonPlacement: "center-screen",
    showButtonAfterTyping: true,
    hideButton: false
  },
  {
    id: "scene-7-break",
    bg: "",
    bgColor: "#000000",
    music: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/grandfather-clock.MP3",
    volume: 0.7,
    textPosition: "center",
    textStyle: "break-text",
    textHtml:
      "<span class=\"break-time\">6:15 N.U.</span>" +
      "<span class=\"break-line\">Kinaroroonan: sa Hapag</span>" +
      "<span class=\"break-line\">Suliranin: Mas tumitinding pagkalam ng sikmura</span>" +
      "<span class=\"kabusugan-row\"><span class=\"kabusugan-label\">Kabusugan:</span>" +
      "<span class=\"kabusugan-icons\">" +
      "<svg class=\"drumstick active\" viewBox=\"0 0 64 64\" aria-hidden=\"true\"><ellipse class=\"meat\" cx=\"25\" cy=\"36\" rx=\"20\" ry=\"15\" transform=\"rotate(-28 25 36)\"></ellipse><circle class=\"bone\" cx=\"50\" cy=\"13\" r=\"5\"></circle><circle class=\"bone\" cx=\"56\" cy=\"19\" r=\"5\"></circle><rect class=\"bone\" x=\"45\" y=\"14\" width=\"9\" height=\"9\" rx=\"3\" transform=\"rotate(40 49.5 18.5)\"></rect></svg>" +
      "<svg class=\"drumstick active\" viewBox=\"0 0 64 64\" aria-hidden=\"true\"><ellipse class=\"meat\" cx=\"25\" cy=\"36\" rx=\"20\" ry=\"15\" transform=\"rotate(-28 25 36)\"></ellipse><circle class=\"bone\" cx=\"50\" cy=\"13\" r=\"5\"></circle><circle class=\"bone\" cx=\"56\" cy=\"19\" r=\"5\"></circle><rect class=\"bone\" x=\"45\" y=\"14\" width=\"9\" height=\"9\" rx=\"3\" transform=\"rotate(40 49.5 18.5)\"></rect></svg>" +
      "<svg class=\"drumstick\" viewBox=\"0 0 64 64\" aria-hidden=\"true\"><ellipse class=\"meat\" cx=\"25\" cy=\"36\" rx=\"20\" ry=\"15\" transform=\"rotate(-28 25 36)\"></ellipse><circle class=\"bone\" cx=\"50\" cy=\"13\" r=\"5\"></circle><circle class=\"bone\" cx=\"56\" cy=\"19\" r=\"5\"></circle><rect class=\"bone\" x=\"45\" y=\"14\" width=\"9\" height=\"9\" rx=\"3\" transform=\"rotate(40 49.5 18.5)\"></rect></svg>" +
      "<svg class=\"drumstick\" viewBox=\"0 0 64 64\" aria-hidden=\"true\"><ellipse class=\"meat\" cx=\"25\" cy=\"36\" rx=\"20\" ry=\"15\" transform=\"rotate(-28 25 36)\"></ellipse><circle class=\"bone\" cx=\"50\" cy=\"13\" r=\"5\"></circle><circle class=\"bone\" cx=\"56\" cy=\"19\" r=\"5\"></circle><rect class=\"bone\" x=\"45\" y=\"14\" width=\"9\" height=\"9\" rx=\"3\" transform=\"rotate(40 49.5 18.5)\"></rect></svg>" +
      "<svg class=\"drumstick\" viewBox=\"0 0 64 64\" aria-hidden=\"true\"><ellipse class=\"meat\" cx=\"25\" cy=\"36\" rx=\"20\" ry=\"15\" transform=\"rotate(-28 25 36)\"></ellipse><circle class=\"bone\" cx=\"50\" cy=\"13\" r=\"5\"></circle><circle class=\"bone\" cx=\"56\" cy=\"19\" r=\"5\"></circle><rect class=\"bone\" x=\"45\" y=\"14\" width=\"9\" height=\"9\" rx=\"3\" transform=\"rotate(40 49.5 18.5)\"></rect></svg>" +
      "</span></span>",
    buttonText: "GUMISING",
    hideButton: true,
    optionButtons: [
      { text: "Magpatuloy", redirect: "https://www.matanglawin-ateneo.com/ang-hapag/patikim" },
      { text: "Tumakas", redirect: "https://www.matanglawin-ateneo.com/ang-hapag/paninindigan" }
    ],
    buttonPlacement: "below",
    overlayMode: "intro-break",
    noFog: true,
    typing: false
  },
];

let currentSceneIndex = 0;
let typingInterval = null;
let isTyping = false;
let currentFullText = "";
const typingSpeedMs = 28;

const gameScreen = document.getElementById("gameScreen");
const sceneUI = document.getElementById("sceneUI");
const actionBtn = document.getElementById("actionBtn");
const narrativeText = document.getElementById("narrativeText");
const sceneCloche = document.getElementById("sceneCloche");
const sceneMeal = document.getElementById("sceneMeal");
const sceneMealGlow = document.getElementById("sceneMealGlow");
const hallucinationOverlay = document.getElementById("hallucinationOverlay");
const hallucinationCanvas = document.getElementById("hallucinationCanvas");
const hallucinationCtx = hallucinationCanvas.getContext("2d");
const mealGlowCanvas = document.getElementById("mealGlowCanvas");
const mealGlowCtx = mealGlowCanvas.getContext("2d");
const blackoutOverlay = document.getElementById("blackoutOverlay");
const ritualWrap = document.getElementById("ritualWrap");
const ritualPanel = document.getElementById("ritualPanel");
const ritualQuestion = document.getElementById("ritualQuestion");
const ritualInput = document.getElementById("ritualInput");
const ritualBtn = document.getElementById("ritualBtn");
const choiceButtons = document.getElementById("choiceButtons");
const bgm = document.getElementById("bgm");
const sfx = document.getElementById("sfx");
const clocheLiftSfx = document.getElementById("clocheLiftSfx");
const hypnoSfxEl = document.getElementById("hypnoSfx");
const passoutOverlay = document.getElementById("passoutOverlay");
const passoutDarkness = document.getElementById("passoutDarkness");
const passoutTop = document.getElementById("passoutTop");
const passoutBottom = document.getElementById("passoutBottom");
const dissipateLayer = document.getElementById("dissipateLayer");
const dissipateCanvas = document.getElementById("dissipateCanvas");
const dissipateCtx = dissipateCanvas.getContext("2d", { alpha: true });
const infoBtn = document.getElementById("infoBtn");
const infoModalOverlay = document.getElementById("infoModalOverlay");
const infoCloseBtn = document.getElementById("infoCloseBtn");
const infoReadBtn = document.getElementById("infoReadBtn");
bgm.volume = 0.7;
sfx.volume = 0.6;
let passoutTimeouts = [];
let volumeFadeInterval = null;
let bgLoadToken = 0;
let hasPlayedWakeup = false;
let pendingShowActionAfterTyping = false;
let pendingPostTypingEffect = "";
let sfxStartTimeout = null;
let wakeupTypingTimeout = null;
let clocheLiftTimeout = null;
let clocheLiftSfxStopTimeout = null;
let mealPromptTimeout = null;
let hallucinationTimeout = null;
let dissipateRafId = null;
let dissipateToken = 0;
let hallucinationRafId = null;
let mealGlowRafId = null;
const PASSOUT_PLAN = [
  { startAt: 1500, closeLid: 16, closeDarkness: 0.14, closeHoldMs: 250, openLid: 0, openDarkness: 0.06 },
  { startAt: 3400, closeLid: 23, closeDarkness: 0.24, closeHoldMs: 230, openLid: 0, openDarkness: 0.1 },
  { startAt: 5000, closeLid: 30, closeDarkness: 0.38, closeHoldMs: 210, openLid: 1, openDarkness: 0.16 },
  { startAt: 6300, closeLid: 37, closeDarkness: 0.56, closeHoldMs: 190, openLid: 2, openDarkness: 0.23 },
  { startAt: 7400, closeLid: 43, closeDarkness: 0.73, closeHoldMs: 170, openLid: 4, openDarkness: 0.34 },
  { startAt: 8200, closeLid: 47, closeDarkness: 0.88, closeHoldMs: 155, openLid: 6, openDarkness: 0.48 },
  { startAt: 8700, closeLid: 50, closeDarkness: 1, closeHoldMs: 260, openLid: 50, openDarkness: 1 }
];

function clearPassoutSequence() {
  passoutTimeouts.forEach((id) => clearTimeout(id));
  passoutTimeouts = [];
  if (wakeupTypingTimeout) {
    clearTimeout(wakeupTypingTimeout);
    wakeupTypingTimeout = null;
  }
  if (sfxStartTimeout) {
    clearTimeout(sfxStartTimeout);
    sfxStartTimeout = null;
  }
  passoutOverlay.style.setProperty("--lid-size", "0%");
  passoutOverlay.style.setProperty("--darkness", "0");
}

function resizeDissipateCanvas() {
  if (!dissipateCanvas || !dissipateCtx) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const dpr = Math.max(1, Math.floor((window.devicePixelRatio || 1) * 100) / 100);
  dissipateCanvas.width = Math.floor(width * dpr);
  dissipateCanvas.height = Math.floor(height * dpr);
  dissipateCanvas.style.width = `${width}px`;
  dissipateCanvas.style.height = `${height}px`;
  dissipateCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function resizeMealGlowCanvas() {
  const dpr = window.devicePixelRatio || 1;
  mealGlowCanvas.width = window.innerWidth * dpr;
  mealGlowCanvas.height = window.innerHeight * dpr;
  mealGlowCanvas.style.width = window.innerWidth + "px";
  mealGlowCanvas.style.height = window.innerHeight + "px";
  mealGlowCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawMealGlowFrame() {
  const W = window.innerWidth;
  const H = window.innerHeight;
  const cx = W / 2;
  // Meal sits at the bottom, center. Approximate its visual center.
  const mealRect = sceneMeal.getBoundingClientRect();
  const mealCx = mealRect.left + mealRect.width / 2;
  const mealCy = mealRect.top + mealRect.height * 0.38;

  mealGlowCtx.clearRect(0, 0, W, H);

  const now = performance.now();
  const pulse = 0.5 + 0.5 * Math.sin(now * 0.0032); // 0→1 smooth oscillation

  // Layer 1: wide soft ambient halo (warm golden + amber)
  const r1 = mealRect.width * (0.42 + pulse * 0.06);
  const g1 = mealGlowCtx.createRadialGradient(mealCx, mealCy, 0, mealCx, mealCy, r1);
  g1.addColorStop(0, `rgba(255, 240, 140, ${0.55 + pulse * 0.2})`);
  g1.addColorStop(0.18, `rgba(255, 200, 60, ${0.38 + pulse * 0.18})`);
  g1.addColorStop(0.45, `rgba(255, 140, 20, ${0.18 + pulse * 0.12})`);
  g1.addColorStop(0.75, `rgba(255, 90, 10, ${0.06 + pulse * 0.06})`);
  g1.addColorStop(1, `rgba(255, 60, 0, 0)`);
  mealGlowCtx.beginPath();
  mealGlowCtx.ellipse(mealCx, mealCy, r1, r1 * 0.68, 0, 0, Math.PI * 2);
  mealGlowCtx.fillStyle = g1;
  mealGlowCtx.fill();

  // Layer 2: tight bright core bloom (white-hot center)
  const r2 = mealRect.width * (0.18 + pulse * 0.04);
  const g2 = mealGlowCtx.createRadialGradient(mealCx, mealCy, 0, mealCx, mealCy, r2);
  g2.addColorStop(0, `rgba(255, 255, 220, ${0.72 + pulse * 0.25})`);
  g2.addColorStop(0.3, `rgba(255, 240, 160, ${0.5 + pulse * 0.18})`);
  g2.addColorStop(0.65, `rgba(255, 200, 80, ${0.22 + pulse * 0.1})`);
  g2.addColorStop(1, `rgba(255, 160, 40, 0)`);
  mealGlowCtx.beginPath();
  mealGlowCtx.ellipse(mealCx, mealCy, r2, r2 * 0.7, 0, 0, Math.PI * 2);
  mealGlowCtx.fillStyle = g2;
  mealGlowCtx.fill();

  // Layer 3: outer diffuse atmospheric scatter
  const r3 = mealRect.width * (0.7 + pulse * 0.08);
  const g3 = mealGlowCtx.createRadialGradient(mealCx, mealCy + mealRect.height * 0.05, r3 * 0.1, mealCx, mealCy, r3);
  g3.addColorStop(0, `rgba(255, 220, 100, ${0.12 + pulse * 0.1})`);
  g3.addColorStop(0.4, `rgba(255, 160, 40, ${0.07 + pulse * 0.06})`);
  g3.addColorStop(1, `rgba(200, 80, 0, 0)`);
  mealGlowCtx.beginPath();
  mealGlowCtx.ellipse(mealCx, mealCy, r3, r3 * 0.55, 0, 0, Math.PI * 2);
  mealGlowCtx.fillStyle = g3;
  mealGlowCtx.fill();

  // Layer 4: blue-white shimmer streaks (like heat shimmer / divine light)
  const shimmerCount = 6;
  for (let i = 0; i < shimmerCount; i++) {
    const angle = (i / shimmerCount) * Math.PI * 2 + now * 0.0004 * (i % 2 === 0 ? 1 : -0.7);
    const len = mealRect.width * (0.28 + pulse * 0.12) * (0.7 + (i % 3) * 0.2);
    const x2 = mealCx + Math.cos(angle) * len;
    const y2 = mealCy + Math.sin(angle) * len * 0.55;
    const shimmerAlpha = (0.08 + pulse * 0.12) * (0.6 + 0.4 * Math.sin(now * 0.003 + i * 1.3));
    const sg = mealGlowCtx.createLinearGradient(mealCx, mealCy, x2, y2);
    sg.addColorStop(0, `rgba(255, 255, 200, ${shimmerAlpha * 1.8})`);
    sg.addColorStop(0.5, `rgba(255, 220, 120, ${shimmerAlpha})`);
    sg.addColorStop(1, `rgba(255, 180, 60, 0)`);
    mealGlowCtx.beginPath();
    mealGlowCtx.moveTo(mealCx, mealCy);
    mealGlowCtx.lineTo(x2, y2);
    mealGlowCtx.strokeStyle = sg;
    mealGlowCtx.lineWidth = 2 + pulse * 3;
    mealGlowCtx.stroke();
  }

  mealGlowRafId = requestAnimationFrame(drawMealGlowFrame);
}

function startMealGlow() {
  if (mealGlowRafId) return;
  resizeMealGlowCanvas();
  mealGlowCanvas.classList.add("show");
  mealGlowRafId = requestAnimationFrame(drawMealGlowFrame);
}

function stopMealGlow() {
  if (mealGlowRafId) {
    cancelAnimationFrame(mealGlowRafId);
    mealGlowRafId = null;
  }
  mealGlowCanvas.classList.remove("show");
  mealGlowCtx.clearRect(0, 0, mealGlowCanvas.width, mealGlowCanvas.height);
}

function clearClocheLift() {
  if (clocheLiftTimeout) {
    clearTimeout(clocheLiftTimeout);
    clocheLiftTimeout = null;
  }
  if (clocheLiftSfxStopTimeout) {
    clearTimeout(clocheLiftSfxStopTimeout);
    clocheLiftSfxStopTimeout = null;
  }
  if (mealPromptTimeout) {
    clearTimeout(mealPromptTimeout);
    mealPromptTimeout = null;
  }
  sceneCloche.classList.remove("lift");
  clocheLiftSfx.pause();
  clocheLiftSfx.currentTime = 0;
  sceneMeal.classList.remove("prompt");
  sceneMealGlow.classList.remove("prompt");
  stopMealGlow();
}

function stopHallucination() {
  if (hallucinationTimeout) {
    clearTimeout(hallucinationTimeout);
    hallucinationTimeout = null;
  }
  if (hallucinationRafId) {
    cancelAnimationFrame(hallucinationRafId);
    hallucinationRafId = null;
  }
  hallucinationCtx.clearRect(0, 0, hallucinationCanvas.width, hallucinationCanvas.height);
  hallucinationCanvas.classList.remove("show");
  gameScreen.classList.remove("hallucinating");
  hallucinationOverlay.classList.remove("show");
  hallucinationOverlay.setAttribute("aria-hidden", "true");
  blackoutOverlay.classList.remove("show");
  blackoutOverlay.setAttribute("aria-hidden", "true");
  sceneMeal.classList.remove("prompt");
  sceneMealGlow.classList.remove("prompt");
}

function resizeHallucinationCanvas() {
  const dpr = window.devicePixelRatio || 1;
  hallucinationCanvas.width = window.innerWidth * dpr;
  hallucinationCanvas.height = window.innerHeight * dpr;
  hallucinationCanvas.style.width = window.innerWidth + "px";
  hallucinationCanvas.style.height = window.innerHeight + "px";
  hallucinationCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawHallucinationFrame(startTime) {
  const now = performance.now();
  const elapsed = now - startTime;
  const totalMs = 3000;
  const t = Math.min(elapsed / totalMs, 1); // 0 → 1 over 3 seconds

  const W = window.innerWidth;
  const H = window.innerHeight;
  const cx = W / 2;
  const cy = H / 2;

  hallucinationCtx.clearRect(0, 0, W, H);

  // ── Spiral rings ──────────────────────────────────────────────────
  // As t grows, rings spin faster and more rings appear
  const numRings = Math.floor(3 + t * 9);
  const baseAngle = elapsed * 0.0018; // rotation speed base
  const spinAccel = t * t * 4;        // accelerates toward the end

  for (let r = 0; r < numRings; r++) {
    const progress = r / numRings; // 0 inner → 1 outer
    const radius = (0.06 + progress * 0.46) * Math.min(W, H);
    const ringAlpha = (0.18 + t * 0.55) * (1 - progress * 0.4);
    const ringThickness = (2 + t * 6) * (1 - progress * 0.5);
    const angle = baseAngle * (1 + spinAccel) * (r % 2 === 0 ? 1 : -1.3);

    // Chromatic split — draw R, G, B rings slightly offset
    const offsets = [
      { dx: Math.cos(angle) * t * 6, dy: Math.sin(angle) * t * 6, color: `rgba(255,60,60,${ringAlpha * 0.85})` },
      { dx: 0, dy: 0, color: `rgba(255,255,255,${ringAlpha})` },
      { dx: Math.cos(angle + Math.PI) * t * 6, dy: Math.sin(angle + Math.PI) * t * 6, color: `rgba(60,255,200,${ringAlpha * 0.8})` },
    ];

    offsets.forEach(({ dx, dy, color }) => {
      hallucinationCtx.beginPath();
      hallucinationCtx.arc(cx + dx, cy + dy, radius, 0, Math.PI * 2);
      hallucinationCtx.strokeStyle = color;
      hallucinationCtx.lineWidth = ringThickness;
      hallucinationCtx.stroke();
    });
  }

  // ── Spiral arms (hypnosis swirl) ──────────────────────────────────
  const arms = 3;
  const spiralTurns = 2.5 + t * 3;
  const spiralAlpha = 0.12 + t * 0.45;
  for (let arm = 0; arm < arms; arm++) {
    const armOffset = (arm / arms) * Math.PI * 2;
    hallucinationCtx.beginPath();
    const steps = 280;
    for (let s = 0; s <= steps; s++) {
      const st = s / steps;
      const theta = st * Math.PI * 2 * spiralTurns + armOffset + baseAngle * (1 + spinAccel);
      const maxR = Math.min(W, H) * 0.52;
      const rr = st * maxR;
      const px = cx + Math.cos(theta) * rr;
      const py = cy + Math.sin(theta) * rr;
      if (s === 0) hallucinationCtx.moveTo(px, py);
      else hallucinationCtx.lineTo(px, py);
    }
    const hue = (arm * 120 + elapsed * 0.18) % 360;
    hallucinationCtx.strokeStyle = `hsla(${hue}, 100%, 70%, ${spiralAlpha})`;
    hallucinationCtx.lineWidth = 1.5 + t * 3;
    hallucinationCtx.stroke();
  }

  // ── Concentric pulsing halos ──────────────────────────────────────
  const pulseCount = 5;
  for (let p = 0; p < pulseCount; p++) {
    const pPhase = (p / pulseCount + elapsed * 0.0004) % 1;
    const pRadius = pPhase * Math.min(W, H) * 0.7;
    const pAlpha = (1 - pPhase) * (0.08 + t * 0.28);
    const grad = hallucinationCtx.createRadialGradient(cx, cy, pRadius * 0.7, cx, cy, pRadius);
    const hue = (elapsed * 0.12 + p * 60) % 360;
    grad.addColorStop(0, `hsla(${hue}, 100%, 65%, 0)`);
    grad.addColorStop(0.6, `hsla(${hue}, 100%, 65%, ${pAlpha})`);
    grad.addColorStop(1, `hsla(${hue}, 100%, 65%, 0)`);
    hallucinationCtx.beginPath();
    hallucinationCtx.arc(cx, cy, pRadius, 0, Math.PI * 2);
    hallucinationCtx.strokeStyle = grad;
    hallucinationCtx.lineWidth = 8 + t * 18;
    hallucinationCtx.stroke();
  }

  // ── Floating orbs ─────────────────────────────────────────────────
  const orbCount = Math.floor(4 + t * 10);
  for (let o = 0; o < orbCount; o++) {
    const seed = o * 1337;
    const orbAngle = elapsed * 0.0006 * (1 + o * 0.3) + (seed % 100) * 0.063;
    const orbRadius = (0.12 + (seed % 37) / 100 * 0.36) * Math.min(W, H);
    const ox = cx + Math.cos(orbAngle) * orbRadius;
    const oy = cy + Math.sin(orbAngle * 0.7) * orbRadius * 0.6;
    const orbSize = (6 + (seed % 17) * 1.4) * (0.5 + t * 0.9);
    const hue = (o * 53 + elapsed * 0.09) % 360;
    const orbAlpha = (0.35 + t * 0.55) * (0.6 + 0.4 * Math.sin(elapsed * 0.003 + o));
    const og = hallucinationCtx.createRadialGradient(ox, oy, 0, ox, oy, orbSize * 2.2);
    og.addColorStop(0, `hsla(${hue}, 100%, 90%, ${orbAlpha})`);
    og.addColorStop(0.5, `hsla(${hue}, 100%, 65%, ${orbAlpha * 0.5})`);
    og.addColorStop(1, `hsla(${hue}, 100%, 50%, 0)`);
    hallucinationCtx.beginPath();
    hallucinationCtx.arc(ox, oy, orbSize * 2.2, 0, Math.PI * 2);
    hallucinationCtx.fillStyle = og;
    hallucinationCtx.fill();
  }

  // ── Vignette pull — darkening edges that crush inward ─────────────
  if (t > 0.5) {
    const vigT = (t - 0.5) * 2; // 0→1 in last 1.5s
    const vigGrad = hallucinationCtx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.75);
    vigGrad.addColorStop(0, `rgba(0,0,0,0)`);
    vigGrad.addColorStop(0.55, `rgba(0,0,0,${vigT * 0.3})`);
    vigGrad.addColorStop(1, `rgba(0,0,0,${vigT * 0.88})`);
    hallucinationCtx.fillStyle = vigGrad;
    hallucinationCtx.fillRect(0, 0, W, H);
  }

  if (t < 1) {
    hallucinationRafId = requestAnimationFrame(() => drawHallucinationFrame(startTime));
  }
}

function startHallucinationRedirect() {
  stopHallucination();
  const scene = scenes[currentSceneIndex];
  if (!scene || scene.id !== "scene-3") return;

  actionBtn.classList.add("is-hidden");
  actionBtn.classList.add("waiting-text");
  sceneMeal.classList.remove("prompt");
  sceneMealGlow.classList.remove("prompt");
  stopMealGlow();

  resizeHallucinationCanvas();
  hallucinationCanvas.classList.add("show");
  gameScreen.classList.add("hallucinating");

  hypnoSfxEl.currentTime = 0;
  hypnoSfxEl.volume = 1.0;
  hypnoSfxEl.play().catch(() => {});
  fadeVolumeTo(0.08, 400);

  const startTime = performance.now();
  hallucinationRafId = requestAnimationFrame(() => drawHallucinationFrame(startTime));

  hallucinationTimeout = setTimeout(() => {
    blackoutOverlay.classList.add("show");
    blackoutOverlay.setAttribute("aria-hidden", "false");
  }, 2800);

  setTimeout(() => {
    window.location.href = "https://www.matanglawin-ateneo.com/ang-hapag/ikalawang-lunok";
  }, 3200);
}

function startClocheLift() {
  clearClocheLift();
  const scene = scenes[currentSceneIndex];
  if (!scene || !scene.showCloche) return;
  const duration = Math.max(0, Number(scene.clocheLiftDurationMs || 3000));
  const delay = Math.max(0, Number(scene.clocheLiftDelayMs || 0));

  // Start lift SFX right after the "Tinig" text finishes typing (i.e., when this is invoked),
  // even if the lift itself has a small delay.
  if (scene.clocheLiftSfx) {
    if (!clocheLiftSfx.src.endsWith(scene.clocheLiftSfx)) {
      clocheLiftSfx.src = scene.clocheLiftSfx;
    }
    if (typeof scene.clocheLiftSfxVolume === "number") {
      clocheLiftSfx.volume = scene.clocheLiftSfxVolume;
    }
    if (typeof scene.clocheLiftSfxRate === "number") {
      clocheLiftSfx.playbackRate = scene.clocheLiftSfxRate;
    }
    clocheLiftSfx.play().catch(() => {
      // Will retry on user gesture.
    });
    clocheLiftSfxStopTimeout = setTimeout(() => {
      clocheLiftSfxStopTimeout = null;
      if (scenes[currentSceneIndex] && scenes[currentSceneIndex].id === scene.id) {
        clocheLiftSfx.pause();
        clocheLiftSfx.currentTime = 0;
      }
    }, delay + duration + 60);
  }

  clocheLiftTimeout = setTimeout(() => {
    clocheLiftTimeout = null;
    if (scenes[currentSceneIndex] && scenes[currentSceneIndex].id === scene.id) {
      sceneCloche.classList.add("lift");

      // Arm meal click prompt once the cloche is fully lifted.
      mealPromptTimeout = setTimeout(() => {
        mealPromptTimeout = null;
        if (scenes[currentSceneIndex] && scenes[currentSceneIndex].id === scene.id) {
          sceneMeal.classList.add("prompt");
          startMealGlow();
        }
      }, duration + 20);
    }
  }, delay);
}

function stopDissipateEffect() {
  dissipateToken += 1;
  if (dissipateRafId) {
    cancelAnimationFrame(dissipateRafId);
    dissipateRafId = null;
  }
  if (dissipateCtx) {
    dissipateCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
  dissipateLayer.classList.remove("show");
  dissipateLayer.setAttribute("aria-hidden", "true");
}

function finishDissipateKeepWind() {
  dissipateToken += 1;
  if (dissipateRafId) {
    cancelAnimationFrame(dissipateRafId);
    dissipateRafId = null;
  }
  dissipateCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  dissipateLayer.classList.add("show");
  dissipateLayer.setAttribute("aria-hidden", "false");
}

function wrapCenteredText(ctx, text, centerX, centerY, maxWidth, lineHeight) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let currentLine = "";
  words.forEach((word) => {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(nextLine).width <= maxWidth) {
      currentLine = nextLine;
      return;
    }
    if (currentLine) lines.push(currentLine);
    currentLine = word;
  });
  if (currentLine) lines.push(currentLine);

  const startY = centerY - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((line, idx) => {
    ctx.fillText(line, centerX, startY + idx * lineHeight);
  });
  return lines.length;
}

function buildTextParticles(text) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const centerX = width * 0.46;
  const centerY = height * 0.42;
  const maxWidth = Math.min(width * 0.86, 980);

  const off = document.createElement("canvas");
  off.width = width;
  off.height = height;
  const octx = off.getContext("2d", { alpha: true });
  octx.clearRect(0, 0, width, height);
  octx.textAlign = "center";
  octx.textBaseline = "middle";

  const safeText = String(text || "").trim() || "…";
  const baseFont = Math.max(72, Math.min(154, Math.floor(width * 0.135)));
  const fontFamily = "Georgia, \"Times New Roman\", serif";
  octx.font = `700 ${baseFont}px ${fontFamily}`;
  if (octx.measureText(safeText).width > maxWidth) {
    octx.font = `700 ${Math.floor(baseFont * 0.78)}px ${fontFamily}`;
  }

  octx.shadowColor = "rgba(0, 0, 0, 0.92)";
  octx.shadowBlur = 12;
  octx.fillStyle = "#f3fff4";
  const lineHeight = Math.floor(baseFont * 1.06);
  wrapCenteredText(octx, safeText, centerX, centerY, maxWidth, lineHeight);

  octx.shadowColor = "rgba(107, 255, 114, 0.42)";
  octx.shadowBlur = 20;
  octx.fillStyle = "rgba(107, 255, 114, 0.22)";
  wrapCenteredText(octx, safeText, centerX, centerY, maxWidth, lineHeight);

  const imageData = octx.getImageData(0, 0, width, height).data;

  const sample = (sampleStep) => {
    const result = [];
    for (let y = 0; y < height; y += sampleStep) {
      for (let x = 0; x < width; x += sampleStep) {
        const idx = (y * width + x) * 4 + 3;
        const a = imageData[idx];
        if (a < 80) continue;
        result.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          phaseA: Math.random() * Math.PI * 2,
          phaseB: Math.random() * Math.PI * 2,
          wiggle: 0.65 + Math.random() * 1.25,
          alpha: Math.min(1, a / 255),
          size: Math.random() < 0.2 ? 2 : 1,
        });
      }
    }
    return result;
  };

  let particles = sample(9);
  if (particles.length > 5200) particles = sample(11);
  if (particles.length > 5200) particles = sample(13);
  return particles;
}

function drawDevilMouth(ctx, x, y, pulse) {
  const outer = 62 + pulse * 18;
  const inner = 20 + pulse * 10;
  const grad = ctx.createRadialGradient(x, y, inner, x, y, outer);
  grad.addColorStop(0, "rgba(0, 0, 0, 0.92)");
  grad.addColorStop(0.38, "rgba(40, 0, 0, 0.18)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(x, y, outer, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function startDissipateRitualAnswer() {
  stopDissipateEffect();
  resizeDissipateCanvas();

  const currentScene = scenes[currentSceneIndex];
  if (!currentScene || currentScene.postTypingEffect !== "dissipateRitualAnswer") return;

  const token = dissipateToken + 1;
  dissipateToken = token;
  const holdMs = Math.max(0, Number(currentScene.dissipateHoldMs || 0));
  const suckMs = Math.max(1, Number(currentScene.dissipateSuckMs || currentScene.dissipateDurationMs || 5000));
  const text = sessionStorage.getItem("hapag_patikim_ritual_answer") || "";
  const particles = buildTextParticles(text);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const sourceX = width * 0.46;
  const sourceY = height * 0.42;
  const targetX = width * 0.5;
  const targetY = -height * 0.14;

  dissipateLayer.classList.add("show");
  dissipateLayer.setAttribute("aria-hidden", "false");

  const start = performance.now();
  const ctx = dissipateCtx;
  const baseWind = 0.85;

  const tick = (now) => {
    if (token !== dissipateToken) return;
    const activeScene = scenes[currentSceneIndex];
    if (!activeScene || activeScene.id !== currentScene.id) return;
    const elapsed = now - start;
    const inHold = elapsed < holdMs;
    const suckElapsed = Math.max(0, elapsed - holdMs);
    const t = Math.min(suckElapsed / suckMs, 1);

    ctx.clearRect(0, 0, width, height);

    // Intentionally no extra "suction lines" overlay during pull (keeps it cleaner + faster).

    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    particles.forEach((p) => {
      if (inHold) {
        const wobble =
          Math.sin(now * 0.006 + p.phaseA) * p.wiggle +
          Math.sin(now * 0.009 + p.phaseB) * (p.wiggle * 0.65);
        const wobble2 =
          Math.cos(now * 0.005 + p.phaseB) * (p.wiggle * 0.8) +
          Math.sin(now * 0.011 + p.phaseA) * (p.wiggle * 0.5);
        p.x = p.ox + wobble * 0.9;
        p.y = p.oy + wobble2 * 0.9;
        p.vx = 0;
        p.vy = 0;
        const shimmer = 0.88 + Math.sin(now * 0.004 + p.phaseA) * 0.12;
        const alpha = Math.max(0, Math.min(1, p.alpha * shimmer));
        if (alpha <= 0.02) return;
        ctx.fillStyle = `rgba(110, 255, 128, ${alpha * 0.5})`;
        ctx.fillRect(p.x, p.y, p.size + 1, p.size + 1);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.64})`;
        ctx.fillRect(p.x + 0.4, p.y + 0.2, p.size, p.size);
        return;
      }

      const dx = targetX - p.x;
      const dy = targetY - p.y;
      const dist = Math.max(1, Math.hypot(dx, dy));
      const inv = 1 / dist;
      const ease = t * t * (3 - 2 * t);
      const pull = inHold ? 0 : (0.42 + ease * 2.05) * inv * 88;
      const swirl = inHold ? 0 : (0.06 + ease * 0.26) * inv * 52;
      const wind = baseWind + (inHold ? 0 : ease * 2.2);
      const noise =
        Math.sin((p.y + now * 0.4) * 0.01) +
        Math.cos((p.x - now * 0.35) * 0.012);

      const ax =
        dx * inv * pull +
        (-dy * inv) * swirl +
        wind * 0.12 +
        noise * 0.045;
      const ay =
        dy * inv * pull +
        (dx * inv) * swirl +
        (-0.06 - t * 0.1) +
        noise * 0.04;

      const damp = inHold ? 0.86 : (0.84 - t * 0.06);
      p.vx = (p.vx + ax) * damp;
      p.vy = (p.vy + ay) * damp;
      p.x += p.vx;
      p.y += p.vy;

      const edgeFade = dist < 70 ? (dist / 70) : 1;
      const fade = Math.max(0, 1 - ease * 1.08) * edgeFade;
      const alpha = Math.max(0, Math.min(1, p.alpha * fade));
      if (alpha <= 0.02) return;

      ctx.fillStyle = `rgba(110, 255, 128, ${alpha * 0.55})`;
      ctx.fillRect(p.x, p.y, p.size + 1, p.size + 1);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.62})`;
      ctx.fillRect(p.x + 0.4, p.y + 0.2, p.size, p.size);
    });
    ctx.restore();

    if (inHold || t < 1) {
      dissipateRafId = requestAnimationFrame(tick);
      return;
    }

    // Instantly clear the sucked text/portal, but keep the wind lines overlay.
    finishDissipateKeepWind();
    if (activeScene && activeScene.showButtonAfterEffect) {
      actionBtn.classList.remove("waiting-text");
      actionBtn.classList.remove("is-hidden");
    }
  };

  dissipateRafId = requestAnimationFrame(tick);
}

function setChoiceButtons(scene) {
  choiceButtons.innerHTML = "";
  choiceButtons.classList.remove("show");
  const options = Array.isArray(scene.optionButtons) ? scene.optionButtons : [];
  if (!options.length) return;

  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.textContent = option.text || "Piliin";
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (option.redirect) {
        window.location.href = option.redirect;
      }
    });
    choiceButtons.appendChild(btn);
  });

  choiceButtons.classList.add("show");
}

function setRitualPanel(scene) {
  const shouldShow = Boolean(scene.showRitual);
  ritualWrap.classList.toggle("show", shouldShow);
  if (!shouldShow) {
    ritualInput.classList.remove("is-invalid");
    return;
  }
  ritualQuestion.textContent = scene.ritualQuestion || "";
  ritualInput.placeholder = scene.ritualPlaceholder || "Sagot";
  ritualInput.value = "";
  ritualInput.classList.remove("is-invalid");
}

function setPassoutState(lidPercent, darkness) {
  const safeLid = Math.max(0, Math.min(50, lidPercent));
  const safeDark = Math.max(0, Math.min(1, darkness));
  passoutOverlay.style.setProperty("--lid-size", `${safeLid}%`);
  passoutOverlay.style.setProperty("--darkness", String(safeDark));
}

function schedulePassoutBlink(delayMs, options) {
  const timeoutId = setTimeout(() => {
    setPassoutState(options.closeLid, options.closeDarkness);
    const reopenTimeout = setTimeout(() => {
      setPassoutState(options.openLid, options.openDarkness);
    }, options.closeHoldMs);
    passoutTimeouts.push(reopenTimeout);
  }, delayMs);
  passoutTimeouts.push(timeoutId);
}

function buildPassoutEvents(plan) {
  const events = [{ at: 0, lid: 0, dark: 0 }];
  plan.forEach((step) => {
    events.push({ at: step.startAt, lid: step.closeLid, dark: step.closeDarkness });
    events.push({ at: step.startAt + step.closeHoldMs, lid: step.openLid, dark: step.openDarkness });
  });
  events.sort((a, b) => a.at - b.at);
  return events;
}

function normalizePlanStart(plan) {
  if (!plan.length) return plan;
  const offset = plan[0].startAt;
  return plan.map((step) => ({ ...step, startAt: step.startAt - offset }));
}

function scheduleStateTimeline(events, startDelayMs = 0) {
  events.forEach((event) => {
    const id = setTimeout(() => {
      setPassoutState(event.lid, event.dark);
    }, startDelayMs + event.at);
    passoutTimeouts.push(id);
  });
}

function startPassoutSequence() {
  clearPassoutSequence();
  // Quick seamless fade right at Scene 2 start.
  fadeVolumeTo(0, 1400);
  PASSOUT_PLAN.forEach((step) => schedulePassoutBlink(step.startAt, step));

  const transitionToBreakScene = setTimeout(() => {
    if (scenes[currentSceneIndex] && scenes[currentSceneIndex].id === "scene-2-passout") {
      nextScene();
    }
  }, 10200);
  passoutTimeouts.push(transitionToBreakScene);
}

function startWakeupSequence() {
  clearPassoutSequence();
  // Exact reverse of passout timeline for seamless mirrored wake-up.
  passoutOverlay.classList.add("instant");
  setPassoutState(50, 1);
  requestAnimationFrame(() => {
    passoutOverlay.classList.remove("instant");
  });
  // Limit wake-up to 5 blinks (mirrored from the later, deeper passout phase).
  const wakeupPlan = normalizePlanStart(PASSOUT_PLAN.slice(-5));
  const events = buildPassoutEvents(wakeupPlan);
  const total = events[events.length - 1].at;
  const reverseEvents = events
    .map((event) => ({ at: total - event.at, lid: event.lid, dark: event.dark }))
    .sort((a, b) => a.at - b.at);
  scheduleStateTimeline(reverseEvents, 0);
  const forceOpenId = setTimeout(() => {
    // Ensure absolutely no eyelid black remains after the 5th blink.
    setPassoutState(0, 0);
  }, total + 260);
  passoutTimeouts.push(forceOpenId);
  return total + 260;
}

function clearTypingInterval() {
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }
}

function finishTyping() {
  clearTypingInterval();
  if (currentFullText) {
    narrativeText.textContent = currentFullText;
  }
  isTyping = false;
  if (pendingShowActionAfterTyping) {
    const currentScene = scenes[currentSceneIndex];
    if (currentScene && currentScene.showButtonAfterTyping) {
      actionBtn.classList.remove("waiting-text");
      actionBtn.classList.remove("is-hidden");
    }
    pendingShowActionAfterTyping = false;
  }
  if (pendingPostTypingEffect) {
    const currentScene = scenes[currentSceneIndex];
    if (currentScene && currentScene.postTypingEffect === pendingPostTypingEffect) {
      if (pendingPostTypingEffect === "dissipateRitualAnswer") {
        startDissipateRitualAnswer();
      } else if (pendingPostTypingEffect === "clocheLift") {
        startClocheLift();
      }
    }
    pendingPostTypingEffect = "";
  }
}

function startTyping(text) {
  clearTypingInterval();
  currentFullText = text || "";
  narrativeText.textContent = "";

  if (!currentFullText) {
    isTyping = false;
    return;
  }

  isTyping = true;
  let i = 0;

  typingInterval = setInterval(() => {
    i += 1;
    narrativeText.textContent = currentFullText.slice(0, i);

    if (i >= currentFullText.length) {
      finishTyping();
    }
  }, typingSpeedMs);
}

function tryStartMusic() {
  if (!bgm.src) return;
  bgm.play().catch(() => {
    // Will retry on user gesture.
  });
  if (sfx.src) {
    sfx.play().catch(() => {
      // Will retry on user gesture.
    });
  }
}

function bindMusicUnlock() {
  const unlock = () => {
    tryStartMusic();
  };
  document.addEventListener("click", unlock, { once: true });
  document.addEventListener("touchstart", unlock, { once: true });
  document.addEventListener("keydown", unlock, { once: true });
}

function fadeVolumeTo(targetVolume, durationMs) {
  if (volumeFadeInterval) {
    clearInterval(volumeFadeInterval);
    volumeFadeInterval = null;
  }

  const startVolume = bgm.volume;
  const safeTarget = Math.max(0, Math.min(1, targetVolume));
  const total = Math.max(1, durationMs);
  const tickMs = 80;
  let elapsed = 0;

  volumeFadeInterval = setInterval(() => {
    elapsed += tickMs;
    const t = Math.min(elapsed / total, 1);
    bgm.volume = startVolume + (safeTarget - startVolume) * t;
    if (t >= 1) {
      clearInterval(volumeFadeInterval);
      volumeFadeInterval = null;
    }
  }, tickMs);
}

function toMainBranchRawUrl(url) {
  const match = String(url || "").match(
    /^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)$/
  );
  if (!match) return url;
  return `https://raw.githubusercontent.com/${match[1]}/${match[2]}/main/${match[3]}`;
}

function applySceneBackground(scene) {
  bgLoadToken += 1;
  const myToken = bgLoadToken;

  if (!scene.bg) {
    gameScreen.style.backgroundImage = "none";
    return;
  }

  const primary = scene.bg;
  const fallback = scene.bgFallback || toMainBranchRawUrl(primary);

  const primaryImg = new Image();
  primaryImg.onload = () => {
    if (myToken !== bgLoadToken) return;
    gameScreen.style.backgroundImage = `url("${primary}")`;
  };
  primaryImg.onerror = () => {
    if (myToken !== bgLoadToken) return;
    if (fallback && fallback !== primary) {
      const fallbackImg = new Image();
      fallbackImg.onload = () => {
        if (myToken !== bgLoadToken) return;
        gameScreen.style.backgroundImage = `url("${fallback}")`;
      };
      fallbackImg.onerror = () => {
        if (myToken !== bgLoadToken) return;
        gameScreen.style.backgroundImage = "none";
      };
      fallbackImg.src = fallback;
    } else {
      gameScreen.style.backgroundImage = "none";
    }
  };
  primaryImg.src = primary;
}

function setScene(index) {
  const scene = scenes[index];
  if (!scene) return;
  clearPassoutSequence();
  stopDissipateEffect();
  clearClocheLift();
  stopHallucination();
  stopMealGlow();
  pendingPostTypingEffect = "";
  if (volumeFadeInterval) {
    clearInterval(volumeFadeInterval);
    volumeFadeInterval = null;
  }

  applySceneBackground(scene);
  gameScreen.style.backgroundColor = scene.bgColor || "#111";

  sceneUI.className = `scene-ui ${scene.textPosition}`;
  sceneUI.classList.toggle("button-below", scene.buttonPlacement === "below");
  sceneUI.style.paddingTop = scene.uiTopPadding || "";
  gameScreen.classList.toggle("no-fog", !Boolean(scene.fog));
  gameScreen.classList.toggle("intro-break-overlay", scene.overlayMode === "intro-break");
  setChoiceButtons(scene);
  setRitualPanel(scene);
  sceneCloche.classList.toggle("show", Boolean(scene.showCloche));
  sceneMeal.classList.toggle("show", Boolean(scene.showMeal));
  sceneMeal.classList.remove("prompt");
  sceneMealGlow.classList.toggle("show", Boolean(scene.showMeal));
  sceneMealGlow.classList.remove("prompt");
  narrativeText.className = `text-box ${scene.textStyle === "italic" ? "italic" : ""}`.trim();
  narrativeText.style.color = scene.textColor || "#ffffff";
  narrativeText.style.transform = scene.textOffsetY ? `translateY(${scene.textOffsetY})` : "";
  if (scene.textStyle && scene.textStyle !== "italic") {
    narrativeText.classList.add(scene.textStyle);
  }
  narrativeText.classList.toggle("tinig-animate", Boolean(scene.tinigAnimate));

  const shouldDelayTypingForWakeup = scene.effect === "wakeup" && !hasPlayedWakeup;
  if (scene.typing === false) {
    clearTypingInterval();
    isTyping = false;
    currentFullText = scene.text || "";
    if (scene.textHtml) {
      narrativeText.innerHTML = scene.textHtml;
    } else {
      narrativeText.textContent = scene.text || "";
    }
  } else {
    narrativeText.innerHTML = "";
    if (shouldDelayTypingForWakeup) {
      clearTypingInterval();
      isTyping = false;
      currentFullText = scene.text || "";
      narrativeText.textContent = "";
    } else {
      startTyping(scene.text || "");
    }
  }
  actionBtn.textContent = scene.buttonText || "SUNOD";
  actionBtn.classList.toggle("arrow-btn", scene.buttonMode === "arrow");
  actionBtn.classList.toggle("regular-font", scene.buttonFont === "regular");
  actionBtn.classList.toggle("center-screen", scene.buttonPlacement === "center-screen");
  const hideAtStart = Boolean(
    scene.hideButton || scene.showButtonAfterTyping || scene.showButtonAfterEffect
  );
  actionBtn.classList.toggle("is-hidden", hideAtStart);
  pendingShowActionAfterTyping = Boolean(scene.showButtonAfterTyping);
  actionBtn.classList.toggle(
    "waiting-text",
    Boolean(scene.showButtonAfterTyping || scene.showButtonAfterEffect)
  );
  const startEffectImmediately = Boolean(scene.startEffectImmediately);
  if (scene.postTypingEffect && scene.typing !== false && !startEffectImmediately) {
    pendingPostTypingEffect = scene.postTypingEffect;
  } else if (scene.postTypingEffect) {
    if (scene.postTypingEffect === "dissipateRitualAnswer") {
      startDissipateRitualAnswer();
    } else if (scene.postTypingEffect === "clocheLift") {
      startClocheLift();
    }
  }

  if (typeof scene.music === "string" && scene.music.length > 0) {
    if (!bgm.src.endsWith(scene.music)) {
      bgm.src = scene.music;
    }
    if (typeof scene.volume === "number") {
      bgm.volume = scene.volume;
    }
    tryStartMusic();
  } else if (scene.music === null) {
    bgm.pause();
    bgm.removeAttribute("src");
  }

  if (scene.sfx) {
    if (!sfx.src.endsWith(scene.sfx)) {
      sfx.src = scene.sfx;
    }
    sfx.loop = Boolean(scene.sfxLoop);
    if (typeof scene.sfxVolume === "number") {
      sfx.volume = scene.sfxVolume;
    }
    if (sfxStartTimeout) {
      clearTimeout(sfxStartTimeout);
      sfxStartTimeout = null;
    }
    const delay = Math.max(0, Number(scene.sfxDelayMs || 0));
    if (delay > 0) {
      sfx.pause();
      sfx.currentTime = 0;
      sfxStartTimeout = setTimeout(() => {
        sfxStartTimeout = null;
        if (scenes[currentSceneIndex] && scenes[currentSceneIndex].id === scene.id) {
          sfx.play().catch(() => {
            // Will retry on user gesture.
          });
        }
      }, delay);
    } else {
      tryStartMusic();
    }
  } else {
    sfx.pause();
    sfx.removeAttribute("src");
  }

  if (scene.effect === "passout") {
    startPassoutSequence();
  } else if (scene.effect === "wakeup") {
    if (!hasPlayedWakeup) {
      hasPlayedWakeup = true;
      const wakeDuration = startWakeupSequence();
      if (scene.typing !== false) {
        wakeupTypingTimeout = setTimeout(() => {
          wakeupTypingTimeout = null;
          if (scenes[currentSceneIndex] && scenes[currentSceneIndex].id === scene.id) {
            startTyping(scene.text || "");
          }
        }, wakeDuration + 140);
        passoutTimeouts.push(wakeupTypingTimeout);
      }
    } else {
      clearPassoutSequence();
    }
  }
}

function nextScene() {
  if (currentSceneIndex < scenes.length - 1) {
    currentSceneIndex += 1;
    setScene(currentSceneIndex);
  } else {
    actionBtn.disabled = true;
    actionBtn.textContent = "WAKAS";
  }
}

actionBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  if (isTyping) {
    finishTyping();
    return;
  }
  const currentScene = scenes[currentSceneIndex];
  if (currentScene && currentScene.redirect) {
    window.location.href = currentScene.redirect;
    return;
  }
  nextScene();
});

ritualBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  const answer = ritualInput.value.trim();
  if (!answer) {
    ritualInput.classList.add("is-invalid");
    ritualInput.focus();
    return;
  }
  ritualInput.classList.remove("is-invalid");
  sessionStorage.setItem("hapag_patikim_ritual_answer", answer);
  nextScene();
});

ritualInput.addEventListener("input", () => {
  if (ritualInput.classList.contains("is-invalid")) {
    ritualInput.classList.remove("is-invalid");
  }
});

sceneMeal.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!sceneMeal.classList.contains("prompt")) return;
  startHallucinationRedirect();
});

function openInfoModal() {
  infoModalOverlay.classList.add("show");
  infoModalOverlay.setAttribute("aria-hidden", "false");
}

function closeInfoModal() {
  infoModalOverlay.classList.remove("show");
  infoModalOverlay.setAttribute("aria-hidden", "true");
}

infoBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  openInfoModal();
});

infoCloseBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  closeInfoModal();
});

infoModalOverlay.addEventListener("click", (event) => {
  if (event.target === infoModalOverlay) {
    closeInfoModal();
  }
});

infoReadBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  window.open("https://www.matanglawin-ateneo.com/", "_blank", "noopener,noreferrer");
});

gameScreen.addEventListener("click", () => {
  if (isTyping) {
    finishTyping();
  }
});

gameScreen.addEventListener("mousemove", (event) => {
  const rect = gameScreen.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  gameScreen.style.setProperty("--spot-x", `${x}%`);
  gameScreen.style.setProperty("--spot-y", `${y}%`);
});

gameScreen.addEventListener("mouseleave", () => {
  gameScreen.style.setProperty("--spot-x", "50%");
  gameScreen.style.setProperty("--spot-y", "52%");
});

gameScreen.addEventListener("touchmove", (event) => {
  const touch = event.touches && event.touches[0];
  if (!touch) return;
  const rect = gameScreen.getBoundingClientRect();
  const x = ((touch.clientX - rect.left) / rect.width) * 100;
  const y = ((touch.clientY - rect.top) / rect.height) * 100;
  gameScreen.style.setProperty("--spot-x", `${x}%`);
  gameScreen.style.setProperty("--spot-y", `${y}%`);
}, { passive: true });

window.addEventListener("resize", () => {
  resizeDissipateCanvas();
  resizeMealGlowCanvas();
});

resizeDissipateCanvas();

/* ── PRELOADER ── */
(function () {
  const loaderScreen   = document.getElementById("loadingScreen");
  const loaderBar      = document.getElementById("loaderBar");
  const loaderPct      = document.getElementById("loaderPct");
  const loaderEnterBtn = document.getElementById("loaderEnterBtn");

  const ASSETS = [
    { type: "image", url: "https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png" },
    { type: "image", url: "https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png" },
    { type: "image", url: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/greenhapag.png" },
    { type: "image", url: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/sisig.png" },
    { type: "image", url: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/cloche.png" },
    { type: "audio", url: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/Eerie5.MP3" },
    { type: "audio", url: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/Eerie2.mp3" },
    { type: "audio", url: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/evaporate.mp3" },
    { type: "audio", url: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/cloche-animate.MP3" },
    { type: "audio", url: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/hypnosis.MP3" },
    { type: "audio", url: "https://raw.githubusercontent.com/MatanglawinAteneo/anghapag-assets/main/grandfather-clock.MP3" },
  ];

  const total = ASSETS.length;
  let loaded  = 0;

  function setProgress(n) {
    const pct = Math.round((n / total) * 100);
    loaderBar.style.width = pct + "%";
    loaderPct.textContent = pct + "%";
  }

  function onAssetLoaded() {
    loaded += 1;
    setProgress(loaded);
    if (loaded >= total) finishLoading();
  }

  function dismissLoader() {
    loaderScreen.classList.add("fade-out");
    loaderScreen.addEventListener("transitionend", () => {
      loaderScreen.remove();
    }, { once: true });
    bindMusicUnlock();
    setScene(currentSceneIndex);
  }

  function finishLoading() {
    loaderPct.textContent = "100%";
    loaderBar.style.width = "100%";
    setTimeout(() => {
      loaderEnterBtn.classList.add("show");
      loaderEnterBtn.addEventListener("click", dismissLoader, { once: true });
    }, 300);
  }

  function preloadImage(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = img.onerror = () => { onAssetLoaded(); resolve(); };
      img.src = url;
    });
  }

  function preloadAudio(url) {
    return new Promise((resolve) => {
      const tmp = new Audio(url);
      const done = () => { onAssetLoaded(); resolve(); };
      tmp.addEventListener("canplaythrough", done, { once: true });
      tmp.addEventListener("error", done, { once: true });
      tmp.load();
    });
  }

  setProgress(0);

  const promises = ASSETS.map((a) => {
    if (a.type === "image") return preloadImage(a.url);
    if (a.type === "audio") return preloadAudio(a.url);
    return Promise.resolve().then(onAssetLoaded);
  });

  const safetyTimer = setTimeout(() => {
    if (loaded < total) {
      loaded = total;
      finishLoading();
    }
  }, 12000);

  Promise.all(promises).then(() => clearTimeout(safetyTimer));
})();
