/* ==========================================================
   KONFIGURASI — ubah bagian ini saja untuk mengganti isi web
   ========================================================== */
const CONFIG = {
  // Nama yang tampil di beranda
  names: "Rizqi Chika",

  // Tanggal jadian (format: TAHUN-BULAN-TANGGAL). Bisa juga diubah lewat tombol "Ubah tanggal".
  startDate: "2023-10-29T00:00:00",

  // Video permanen: taruh file di assets/video.mp4 lalu isi "assets/video.mp4"
  // atau isi dengan link YouTube. Kosongkan jika ingin diatur lewat tombol "Ganti video".
  videoSrc: "assets/OUR.mp4",
  videoTitle: "A glimpse of our US",

  // Musik latar: taruh file di assets/musik.mp3 (atau pilih file lewat tombol musik)
  musicSrc: "assets/musik.mp3",

  greeting: "Teruntuk Sayangku,",

  // Isi surat. Pakai baris kosong untuk memisahkan paragraf.
  letters: [
    "Happy Anniversary, sayang!\n\n3 tahun sudah… nggak berasa ya. Masih seumur jagung, tapi sudah banyak banget kenangan indah yang kita lewatin bareng.\n\nSemoga kita bisa terus bareng sampai tua nanti, dan semoga cinta kita selalu mekar seperti bunga favorit aku, LILY, ABVIOUSLY😜.",
    "Terimakasih ya sayang sudah hadir dihidup aku dan ngasih aku arahan dan mengingatkan aku untuk jadi lebih baik. Aku sangat beruntung punya kamu, kepribadian kamu setiap membimbing aku yang bikin aku selalu amaze ke kamu dan aku selalu merasa dicintai. WALAUPUN, suka bikin aku kesel karna ayang terlalu galak MWEHEHE. Tapi aku tau arahan yang ayang kasih ke aku itu semua pasti demi kebaikan aku juga🥺",
    "Terus jadiin hubungan kita sebagai booster semangat kita untuk menghadapi rintangan kedepan untuk mencapai kesuksesan dan cita2 kita juga cita2 kita buat bahagiain keluarga ya sayangg🥰🫶🏻",
    "Terimakasih sayang sudah menjadi sebagaimana mestinya pria sejati itu, yang bertanggung jawab, mengayomi, selalu bikin aku merasa kalau aku ga sendiri, selalu paham apa yang aku butuhkan. AND THANK YOU SAYANG FOR ALWAYS BEING SO STEADY IN EVERY SITUATION🪐",
    "Sayangg…. Semangat yaa ayang, aku tau setelah kelulusan ini masuk ke fase terserius buat kamu. Gapapa sayang, ga semuanya pasti berjalan mulus. Aku selalu bangga sama semua yang ayang coba dan lakukan apapun itu hasilnya. Jalan masih panjang sayang, dan semua orang punya jalan dan garis finish nya masing2.Yang terpenting, kamu harus tau aku bakal selalu di samping kamu. Aku percaya kamu bakal sukses dalam jangka waktu yang cepat tetapi tidak bisa dipastikannya kapan. Semangat berjuang sayangkuu. Inget tujuan2 mulia ayang kenapa ayang harus sukses🥰🖤🫶🏻"
  ],

  // Album kenangan. Isi "src" dengan foto, misalnya "assets/foto1.jpg". Kosong = tampil bunga lily.
  photos: [
    { title: "2023", caption: "Tahun pertama kita dimana kita masih menunjukan sifat kita yang baik2 which is bertopeng🤭", src: "assets/red.jpg" },
    { title: "2024", caption: "Tahun kedua kita dimana kita mulai menunjukkan sifat asli kita (ayang lebih tepatnya wkwk). Quite melelahkan ditahun itu aku mikir apa hubungan kayak gini tuh wajar?", src: "assets/lari.jpg" },
    { title: "2025-2026", caption: "Tahun ketiga kita dimana kita semakin paham sifat jelek masing-masing dan makin yakin kita cocok. Kerennya kita terkadang bisa saling memahami kapan yang harus jadi peredam emosi dan kapan yang boleh meluapkan emosi", src: "assets/poto.jpg" }
  ],

  // Linimasa perjalanan
  timeline: [
    { date: "29 Oktober 2023", title: "Hari kita dimulai", text: "Setelah kita sempet ragu memulai hubungan karena kita sama2 gatau tujuan pacaran. Dihari ini lah kita memutuskan untuk jadi pasangan." },
    { date: "29 Oktober 2024", title: "Anniversary pertama", text: "Satu tahun pertama penuh pelatihan emosi dan keluarnya semua sifat jelek kita." },
    { date: "29 Oktober 2025", title: "Anniversary kedua", text: "Makin paham, makin dewasa, dan makin yakin kita cocok." },
    { date: "29 Oktober 2026", title: "Anniversary ketiga", text: "Tiga tahun, dan aku masih memilih kamu setiap hari.", now: true }
  ],

  // Kuis. Setiap pilihan punya balasan manis, jadi tidak ada jawaban yang salah.
  quiz: [
    {
      q: "Siapa yang paling sering bilang “terserah” kalau ditanya mau makan apa?",
      options: [
        { t: "Kamu pasti!", reply: "Hehe karnaaa biar ga ikut kemauan aku terus ayangnya🤭" },
        { t: "Aku sih kayaknya…", reply: "Dasar ayangg" },
        { t: "Dua-duanya sama aja!", reply: "iya lagi iya lagi" }
      ]
    },
    {
      q: "Apa nama cafe pertama kita setelah jadian?",
      options: [
        { t: "Boho", reply: "SALAH! Itu pertama kali nongkrong dongg." },
        { t: "XYL", reply: "TET NOT!" },
        { t: "Diatap", reply: "YEYY BENARRR" }
      ]
    },
    {
      q: "Cinta kita itu ibarat angka berapa?",
      options: [
        { t: "100 pas", reply: "Kurang" },
        { t: "1000++", reply: "Mendekati" },
        { t: "Tak terhingga", reply: "YEYY CINTAI AKU DENGAM BRUTAL MASSS🫶🏻" }
      ]
    }
  ],

  surpriseMessage: "Terimakasih sayang, udah meyakinkan aku kalau ada lelaki seperti kamu yang bisa bikin aku nyaman, aman, dan bahagia. Jangan kecewain aku ya sayang, aku percayain seluruh perasaan aku di kamu. Jangan jadiin kamu seperti laki2 yang pernah aku temui dihidup aku. Kamu udah bikin aku percaya bahwa ga semua laki itu sama. I love you always, My Love🥺🫶🏻"
};

/* ==========================================================
   Util
   ========================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const pad = n => String(n).padStart(2, "0");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* diabaikan */ } },
  del(k) { try { localStorage.removeItem(k); } catch { /* diabaikan */ } }
};

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3400);
}

function formatDate(d) {
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

/* ==========================================================
   Navigasi tab
   ========================================================== */
const TABS = ["beranda", "surat", "video", "perjalanan", "tebak", "jupiter"];

function switchTab(id, pushHash = true) {
  if (!TABS.includes(id)) id = "beranda";
  $$(".tab").forEach(t => t.classList.toggle("is-active", t.id === id));
  $$(".nav a").forEach(a => {
    const on = a.dataset.tab === id;
    a.classList.toggle("is-active", on);
    if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
  if (pushHash && location.hash !== "#" + id) history.replaceState(null, "", "#" + id);
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  closeMenu();
}

$$("[data-tab]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); switchTab(a.dataset.tab); }));
$$("[data-go]").forEach(b => b.addEventListener("click", () => switchTab(b.dataset.go)));
window.addEventListener("hashchange", () => switchTab(location.hash.slice(1), false));

const nav = $("#nav"), menuBtn = $("#menuBtn");
function closeMenu() { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

/* ==========================================================
   Penghitung waktu bersama
   ========================================================== */
let startDate = new Date(store.get("anniv.start") || CONFIG.startDate);
if (isNaN(startDate)) startDate = new Date(CONFIG.startDate);

function updateSinceText() {
  const future = startDate > new Date();
  $("#sinceText").textContent = (future ? "Menuju: " : "Sejak: ") + formatDate(startDate);
  $("#counterTitle").textContent = future ? "Menghitung mundur menuju hari spesial" : "Sudah berapa lama kita bersama";
}

function tick() {
  let diff = Math.abs(new Date() - startDate);
  const s = Math.floor(diff / 1000);
  $("#cDays").textContent = Math.floor(s / 86400).toLocaleString("id-ID");
  $("#cHours").textContent = pad(Math.floor(s / 3600) % 24);
  $("#cMinutes").textContent = pad(Math.floor(s / 60) % 60);
  $("#cSeconds").textContent = pad(s % 60);
}

const dateModal = $("#dateModal");
$("#editDateBtn").addEventListener("click", () => {
  const y = startDate.getFullYear(), m = pad(startDate.getMonth() + 1), d = pad(startDate.getDate());
  $("#dateInput").value = `${y}-${m}-${d}`;
  dateModal.showModal();
});
$("#dateSave").addEventListener("click", e => {
  e.preventDefault();
  const v = $("#dateInput").value;
  if (!v) { $("#dateInput").focus(); return; }
  const parsed = new Date(v + "T00:00:00");
  if (isNaN(parsed)) return;
  startDate = parsed;
  store.set("anniv.start", v + "T00:00:00");
  updateSinceText();
  tick();
  dateModal.close();
});

/* ==========================================================
   Surat (efek mengetik)
   ========================================================== */
const letterEl = $("#letter"), bodyEl = $("#letterBody"), skipBtn = $("#skipTyping");
let presetIdx = 0, letterOpen = false, typer = null, typedLen = 0;

function stopTyping() { clearInterval(typer); typer = null; bodyEl.classList.remove("typing"); skipBtn.hidden = true; }

function typeLetter(text) {
  stopTyping();
  typedLen = 0;
  bodyEl.textContent = "";
  if (reduceMotion) { bodyEl.textContent = text; return; }

  bodyEl.classList.add("typing");
  skipBtn.hidden = false;
  typer = setInterval(() => {
    typedLen++;
    // slice dari teks asli: spasi di akhir tidak hilang (penyebab huruf "nempel" sebelumnya)
    bodyEl.textContent = text.slice(0, typedLen);
    if (typedLen >= text.length) stopTyping();
  }, 32);
}

function openLetter() {
  if (letterOpen) return;
  letterOpen = true;
  $("#envelope").hidden = true;
  $("#letterHint").textContent = "Semoga kamu suka";
  letterEl.hidden = false;
  typeLetter(CONFIG.letters[presetIdx]);
}

$("#envelope").addEventListener("click", openLetter);
skipBtn.addEventListener("click", () => { stopTyping(); bodyEl.textContent = CONFIG.letters[presetIdx]; });

$$("[data-preset]").forEach(btn => btn.addEventListener("click", () => {
  presetIdx = Number(btn.dataset.preset);
  $$("[data-preset]").forEach(b => b.classList.toggle("is-on", b === btn));
  if (letterOpen) typeLetter(CONFIG.letters[presetIdx]); else openLetter();
}));

/* ==========================================================
   Video
   ========================================================== */
const yt = $("#ytPlayer"), local = $("#localPlayer"), empty = $("#playerEmpty");
const videoModal = $("#videoModal");
let localObjectUrl = null;

function parseYouTubeId(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|v\/))([\w-]{11})/);
  return m ? m[1] : null;
}

function showYouTube(id, title) {
  local.pause(); local.hidden = true; local.removeAttribute("src");
  yt.src = `https://www.youtube.com/embed/${id}?rel=0`;
  yt.hidden = false; empty.hidden = true;
  $("#videoTitle").textContent = title || CONFIG.videoTitle;
}

function showLocal(src, title) {
  yt.hidden = true; yt.removeAttribute("src");
  local.src = src; local.hidden = false; empty.hidden = true;
  $("#videoTitle").textContent = title || CONFIG.videoTitle;
}

function initVideo() {
  const saved = store.get("anniv.yt");
  if (saved) return showYouTube(saved);
  const src = CONFIG.videoSrc.trim();
  if (!src) return;
  const id = parseYouTubeId(src);
  if (id) showYouTube(id, CONFIG.videoTitle);
  else showLocal(src, CONFIG.videoTitle);
}

function openVideoModal() { $("#videoError").hidden = true; videoModal.showModal(); }
$("#videoBtn").addEventListener("click", openVideoModal);
$("#videoBtn2").addEventListener("click", openVideoModal);

$("#videoApply").addEventListener("click", e => {
  e.preventDefault();
  const err = $("#videoError");
  const url = $("#ytInput").value.trim();
  const file = $("#fileInput").files[0];

  if (url) {
    const id = parseYouTubeId(url);
    if (!id) { err.textContent = "Link YouTube tidak dikenali. Salin link lengkap dari bilah alamat atau tombol Bagikan."; err.hidden = false; return; }
    store.set("anniv.yt", id);
    showYouTube(id, "Video kenangan");
  } else if (file) {
    if (!file.type.startsWith("video/")) { err.textContent = "File yang dipilih bukan video."; err.hidden = false; return; }
    if (localObjectUrl) URL.revokeObjectURL(localObjectUrl);
    localObjectUrl = URL.createObjectURL(file);
    store.del("anniv.yt");
    showLocal(localObjectUrl, file.name);
    local.play().catch(() => {});
  } else {
    err.textContent = "Isi link YouTube atau pilih file video terlebih dahulu."; err.hidden = false; return;
  }
  videoModal.close();
});

/* Album */
function renderAlbum() {
  const wrap = $("#album");
  wrap.innerHTML = "";
  CONFIG.photos.forEach(p => {
    const fig = document.createElement("figure");
    fig.className = "photo";
    const box = document.createElement("div");
    box.className = "photo-img";
    if (p.src) {
      const img = document.createElement("img");
      img.src = p.src; img.alt = p.title; img.loading = "lazy";
      img.addEventListener("error", () => { img.remove(); box.innerHTML = '<svg aria-hidden="true"><use href="#lily"/></svg>'; });
      box.appendChild(img);
    } else {
      box.innerHTML = '<svg aria-hidden="true"><use href="#lily"/></svg>';
    }
    const cap = document.createElement("figcaption");
    const h = document.createElement("h4"); h.textContent = p.title;
    const t = document.createElement("p"); t.textContent = p.caption;
    cap.append(h, t);
    fig.append(box, cap);
    wrap.appendChild(fig);
  });
}

/* ==========================================================
   Linimasa
   ========================================================== */
function renderTimeline() {
  const ol = $("#timeline");
  ol.innerHTML = "";
  CONFIG.timeline.forEach(it => {
    const li = document.createElement("li");
    li.className = "tl-item" + (it.now ? " is-now" : "");
    li.innerHTML = '<span class="tl-dot" aria-hidden="true"></span>';
    const d = document.createElement("span"); d.className = "tl-date"; d.textContent = it.date;
    const card = document.createElement("div"); card.className = "tl-card";
    const h = document.createElement("h3"); h.textContent = it.title;
    const p = document.createElement("p"); p.textContent = it.text;
    card.append(h, p);
    li.append(d, card);
    ol.appendChild(li);
  });
}

/* ==========================================================
   Kuis
   ========================================================== */
let qi = 0, locked = false;
let selectedAnswers = [];

function renderQuestion() {
  const item = CONFIG.quiz[qi];
  locked = false;
  $("#quizProgress").textContent = `Pertanyaan ${qi + 1} dari ${CONFIG.quiz.length}`;
  $("#quizBar").style.width = `${(qi / CONFIG.quiz.length) * 100}%`;
  $("#quizQuestion").textContent = item.q;
  $("#quizFeedback").textContent = "";

  const box = $("#quizOptions");
  box.innerHTML = "";
  item.options.forEach(o => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "option"; b.textContent = o.t;
    b.addEventListener("click", () => answer(b, o));
    box.appendChild(b);
  });
}


function answer(btn, opt) {
  if (locked) return;

  locked = true;

  // Simpan pertanyaan dan jawaban yang dipilih
  selectedAnswers[qi] = {
    question: CONFIG.quiz[qi].q,
    answer: opt.t
  };

  $$(".option").forEach(b => {
    b.disabled = true;

    if (b !== btn) {
      b.classList.add("is-dim");
    }
  });

  btn.classList.add("is-picked");
  $("#quizFeedback").textContent = opt.reply;

  setTimeout(() => {
    if (qi < CONFIG.quiz.length - 1) {
      qi++;
      renderQuestion();
      return;
    }

    $("#quizBar").style.width = "100%";
    $("#quizProgress").textContent = "Kuis selesai";
    $("#quizStage").hidden = true;
    $("#reward").hidden = false;

    burst(0.5, 0.55, 90);
  }, 1500);
}



$("#quizRestart").addEventListener("click", () => {
  qi = 0;
  selectedAnswers = [];

  $("#reward").hidden = true;
  $("#quizStage").hidden = false;

  renderQuestion();
});


$("#surpriseBtn").addEventListener("click", () => {
  const hasil = selectedAnswers.map((item, index) => {
    return `${index + 1}. ${item.question}\n   ♡ ${item.answer}`;
  }).join("\n\n");

  $("#surpriseText").textContent =
    `OUR LITTLE QUIZ ♡\n\n${hasil}\n\n` +
    `Macciii sudah menjawab semuanya, ayang!🩷`;

  $("#surpriseModal").showModal();

  burst(0.5, 0.45, 160);
});


/* ==========================================================
   Musik
   ========================================================== */
const music = $("#bgMusic"), musicBtn = $("#musicBtn"), musicFile = $("#musicFile");

const welcomeScreen = $("#welcomeScreen");
const enterWebsite = $("#enterWebsite");

let videoIsPlaying = false;
let musicShouldResume = false;

// Mulai musik setelah pengunjung menekan tombol pembuka
enterWebsite.addEventListener("click", async () => {
  welcomeScreen.classList.add("is-hidden");

  if (!music.src && CONFIG.musicSrc) {
    music.src = CONFIG.musicSrc;
  }

  musicReady = true;

  try {
    await music.play();
    setPlaying(true);
  } catch (error) {
    setPlaying(false);
    toast("Musik belum bisa diputar. Coba tekan tombol musik.");
  }
});

// Simpan kondisi musik sebelum video mulai
function pauseMusicForVideo() {
  videoIsPlaying = true;
  musicShouldResume = !music.paused;

  if (!music.paused) {
    music.pause();
  }

  setPlaying(false);
}

// Lanjutkan musik jika video berhenti atau selesai
function resumeMusicAfterVideo() {
  videoIsPlaying = false;

  if (!musicShouldResume) return;

  music.play()
    .then(() => setPlaying(true))
    .catch(() => setPlaying(false));

  musicShouldResume = false;
}

// Video lokal: play, pause, selesai
local.addEventListener("play", pauseMusicForVideo);

local.addEventListener("pause", () => {
  if (!local.ended) {
    resumeMusicAfterVideo();
  }
});

local.addEventListener("ended", resumeMusicAfterVideo);

let musicReady = false;

function setPlaying(on) {
  musicBtn.setAttribute("aria-pressed", String(on));
  musicBtn.setAttribute("aria-label", on ? "Jeda musik" : "Putar musik");
}

music.addEventListener("error", () => {
  if (!musicReady) return;
  musicReady = false; setPlaying(false);
  toast("File musik belum ada. Pilih file musik dari perangkatmu.");
  musicFile.click();
});

musicBtn.addEventListener("click", async () => {
  if (!music.paused) { music.pause(); setPlaying(false); return; }
  if (!music.src && CONFIG.musicSrc) { music.src = CONFIG.musicSrc; }
  musicReady = true;
  try { await music.play(); setPlaying(true); }
  catch { setPlaying(false); }
});

musicFile.addEventListener("change", async () => {
  const f = musicFile.files[0];
  if (!f) return;
  music.src = URL.createObjectURL(f);
  musicReady = true;
  try { await music.play(); setPlaying(true); } catch { setPlaying(false); }
});


/* ==========================================================
   Efek: kelopak lily & serbuk sari
   ========================================================== */
const canvas = $("#fx"), ctx = canvas.getContext("2d");
let W = 0, H = 0, dpr = 1;
const PETALS = ["#7a1230", "#4a0a1c", "#5c0b24", "#9a1d3c", "#240812"];
let particles = [], bursts = [];

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth; H = window.innerHeight;
  canvas.width = W * dpr; canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function makeParticle(initial) {
  const pollen = Math.random() > 0.7;
  return {
    pollen,
    x: Math.random() * W,
    y: initial ? Math.random() * H : (pollen ? H + 10 : -20),
    size: pollen ? Math.random() * 1.6 + 0.8 : Math.random() * 9 + 7,
    vy: pollen ? -(Math.random() * 0.35 + 0.12) : Math.random() * 0.55 + 0.25,
    vx: Math.random() * 0.4 - 0.2,
    a: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.015,
    sway: Math.random() * Math.PI * 2,
    color: pollen ? "#c9a45c" : PETALS[(Math.random() * PETALS.length) | 0],
    alpha: pollen ? Math.random() * 0.6 + 0.25 : Math.random() * 0.4 + 0.25
  };
}

function drawPetal(s) {
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.quadraticCurveTo(s * 0.8, -s * 0.3, s * 0.4, s);
  ctx.quadraticCurveTo(0, s * 1.25, -s * 0.4, s);
  ctx.quadraticCurveTo(-s * 0.8, -s * 0.3, 0, -s);
  ctx.fill();
}

function burst(nx, ny, count) {
  if (reduceMotion) return;
  for (let i = 0; i < count; i++) {
    const ang = Math.random() * Math.PI * 2, sp = Math.random() * 7 + 2;
    const gold = Math.random() > 0.7;
    bursts.push({
      x: nx * W, y: ny * H,
      vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - 3,
      size: gold ? Math.random() * 2 + 1.5 : Math.random() * 6 + 4,
      gold, a: Math.random() * 6, spin: (Math.random() - 0.5) * 0.3,
      color: gold ? "#e6c98a" : PETALS[(Math.random() * 4) | 0],
      life: 1
    });
  }
}

function frame() {
  ctx.clearRect(0, 0, W, H);

  for (const p of particles) {
    p.y += p.vy; p.sway += 0.01;
    p.x += Math.sin(p.sway) * 0.35 + p.vx; p.a += p.spin;
    if (!p.pollen && p.y > H + 24) Object.assign(p, makeParticle(false));
    if (p.pollen && p.y < -12) Object.assign(p, makeParticle(false));
    ctx.save();
    ctx.translate(p.x, p.y); ctx.rotate(p.a);
    ctx.globalAlpha = p.alpha; ctx.fillStyle = p.color;
    if (p.pollen) {
      ctx.shadowBlur = 8; ctx.shadowColor = "#c9a45c";
      ctx.beginPath(); ctx.arc(0, 0, p.size, 0, Math.PI * 2); ctx.fill();
    } else drawPetal(p.size);
    ctx.restore();
  }

  for (let i = bursts.length - 1; i >= 0; i--) {
    const b = bursts[i];
    b.vy += 0.18; b.vx *= 0.99; b.x += b.vx; b.y += b.vy; b.a += b.spin; b.life -= 0.011;
    if (b.life <= 0 || b.y > H + 30) { bursts.splice(i, 1); continue; }
    ctx.save();
    ctx.translate(b.x, b.y); ctx.rotate(b.a);
    ctx.globalAlpha = Math.max(b.life, 0); ctx.fillStyle = b.color;
    if (b.gold) { ctx.beginPath(); ctx.arc(0, 0, b.size, 0, Math.PI * 2); ctx.fill(); }
    else drawPetal(b.size);
    ctx.restore();
  }

  raf = requestAnimationFrame(frame);
}

let raf;
function initFx() {
  resize();
  const count = Math.round(Math.min(48, Math.max(22, (W * H) / 30000)));
  particles = Array.from({ length: count }, () => makeParticle(true));
  if (reduceMotion) { particles.length = 0; return; }
  frame();
}
window.addEventListener("resize", resize);
document.addEventListener("visibilitychange", () => {
  if (reduceMotion) return;
  if (document.hidden) cancelAnimationFrame(raf); else frame();
});

/* ==========================================================
   Mulai
   ========================================================== */
function init() {
  $("#coupleNames").textContent = CONFIG.names;
  $("#letterGreet").textContent = CONFIG.greeting;
  $("#videoTitle").textContent = CONFIG.videoTitle;
  updateSinceText();
  tick();
  setInterval(tick, 1000);
  renderAlbum();
  renderTimeline();
  renderQuestion();
  initVideo();
  initFx();
  switchTab(location.hash.slice(1) || "beranda", false);
}

init();


/* ===== POLAROID LETTER POPUP ===== */

const polaroidLetterModal = document.getElementById("polaroidLetterModal");
const polaroidLetterTitle = document.getElementById("polaroidLetterTitle");
const polaroidLetterText = document.getElementById("polaroidLetterText");
const closePolaroidLetter = document.getElementById("closePolaroidLetter");

document.querySelectorAll(".polaroid-envelope-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.letterTarget;
    const letterSource = document.getElementById(targetId);

    if (!letterSource || !polaroidLetterModal) return;

    polaroidLetterTitle.textContent =
      button.dataset.letterTitle || "A Little Letter for You";

    polaroidLetterText.textContent = letterSource.textContent.trim();
    polaroidLetterModal.showModal();
  });
});

if (closePolaroidLetter && polaroidLetterModal) {
  closePolaroidLetter.addEventListener("click", () => {
    polaroidLetterModal.close();
  });

  polaroidLetterModal.addEventListener("click", (event) => {
    if (event.target === polaroidLetterModal) {
      polaroidLetterModal.close();
    }
  });
}


/* ==========================================
   FITUR OUR LOVE STORY
   ========================================== */
(() => {
  // Tambahkan tab navigasi
  if (!TABS.includes("cerita")) TABS.push("cerita");

  const nav = document.querySelector(".nav");

  if (nav && !nav.querySelector('[data-tab="cerita"]')) {
    const link = document.createElement("a");
    link.href = "#cerita";
    link.dataset.tab = "cerita";
    link.textContent = "Cerita Kita";
    nav.appendChild(link);

    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("cerita");
    });
  }

  // Buat halaman cerita
  if (document.getElementById("cerita")) return;

  const section = document.createElement("section");
  section.className = "tab";
  section.id = "cerita";

  section.innerHTML = `
    <div class="love-container">
      <div class="love-heading">
        <p>A LITTLE PIECE OF US</p>
        <h2>Our Love Story ♡</h2>
        <span>Aku mau ayang tulis yang mau ayang curahkan buat aku dan hubungan kita</span>
      </div>

      <div class="love-grid">
        <form id="loveForm" class="love-form">
          <label for="loveTitle">Judul cerita</label>
          <input id="loveTitle"
            placeholder="Our Little Forever" maxlength="100">

          <label for="loveNames">Nama kalian</label>
          <input id="loveNames"
            placeholder="Rizqi & Chika" maxlength="100">

          <label for="loveDate">Tanggal spesial</label>
          <input id="loveDate" type="date">

          <label for="loveText">Cerita tentang kita</label>
          <textarea id="loveText" rows="9"
            placeholder="Coba ayang tulis awal kita bertemu, kenangan favorit, hal yang kamu syukuri, dan harapan untuk masa depan..."></textarea>

          <div class="love-buttons">
            <button type="button" id="lovePrint">
              Print / Simpan PDF
            </button>
            <button type="button" id="loveDownload">
              Download TXT
            </button>
          </div>

          <p class="love-note">
            Cerita tersimpan otomatis di browser perangkat ini.
            Untuk PDF, langsung kirim ke 085162804959 yaa...
          </p>
        </form>

        <article id="lovePaper" class="love-paper">
          <p class="love-eyebrow">OUR STORY, OUR MEMORIES</p>
          <h3 id="lovePreviewTitle">Our Little Forever</h3>
          <p id="lovePreviewMeta">Cerita yang ditulis dengan cinta ♡</p>
          <div id="lovePreviewText">Setiap hubungan punya cerita yang unik.

Mulai tulis cerita kalian di kolom sebelah kiri,
dan kata-katamu akan muncul di sini.</div>
        </article>
      </div>
    </div>
  `;

  document.querySelector(".tab").parentElement.appendChild(section);

  // Styling
  const style = document.createElement("style");
  style.textContent = `
    #cerita { padding: 35px 20px; }
    .love-container { max-width: 1000px; margin: auto; }
    .love-heading { text-align: center; margin-bottom: 30px; }
    .love-heading > p, .love-eyebrow {
      color: #c9a45c; letter-spacing: 3px; font-size: 11px;
    }
    .love-heading h2 { color: #f5e7d0; margin: 10px 0; }
    .love-heading span { color: #c8b8b8; font-size: 14px; }
    .love-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 22px; align-items: start;
    }
    .love-form {
      padding: 24px; border-radius: 16px;
      background: #280a14; border: 1px solid #70402e;
    }
    .love-form label {
      display: block; color: #ead7c0;
      margin: 0 0 8px; font-size: 14px;
    }
    .love-form input, .love-form textarea {
      box-sizing: border-box; width: 100%;
      padding: 12px; margin-bottom: 18px;
      border: 1px solid #70402e; border-radius: 9px;
      background: #1b0a10; color: #fff4e8;
      font: inherit;
    }
    .love-form textarea { resize: vertical; line-height: 1.8; }
    .love-buttons { display: flex; flex-wrap: wrap; gap: 10px; }
    .love-buttons button {
      padding: 11px 15px; border: 1px solid #c9a45c;
      border-radius: 25px; background: #6c1833;
      color: white; cursor: pointer;
    }
    .love-buttons button:hover { background: #8b2848; }
    .love-note { color: #c8b8b8; font-size: 12px; line-height: 1.6; }
    .love-paper {
      box-sizing: border-box; padding: 30px;
      min-height: 360px; border-radius: 16px;
      background: #f7efe4; color: #38212a;
      overflow-wrap: anywhere;
    }
    .love-paper h3 {
      color: #642039; font: 28px Georgia, serif;
      margin: 18px 0 10px;
    }
    #lovePreviewMeta { color: #8a6b68; font-size: 13px; }
    #lovePreviewText { white-space: pre-wrap; line-height: 1.9; }
    @media(max-width:700px) {
      .love-grid { grid-template-columns: 1fr; }
      .love-paper, .love-form { padding: 20px; }
    }
    
@media print {
  @page {
    size: A4;
    margin: 18mm;
  }

  body.love-print * {
    visibility: hidden !important;
  }

  body.love-print #lovePaper,
  body.love-print #lovePaper * {
    visibility: visible !important;
  }

  body.love-print #lovePaper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 0;
    padding: 35px 30px;
    overflow: visible;
    border: 1px solid #d9c4a3;
    outline: 1px solid #d9c4a3;
    outline-offset: -7px;
    border-radius: 0;
    box-shadow: none;
    background: #fbf5eb !important;
    color: #49343a !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  body.love-print #lovePaper h3 {
    color: #642039 !important;
  }

  body.love-print #lovePreviewText {
    color: #554047 !important;
  }

  body.love-print #fx,
  body.love-print .nav,
  body.love-print header,
  body.love-print footer {
    display: none !important;
  }
}

      body.love-print #lovePaper h3 { color: #642039 !important; }
      body.love-print #fx,
      body.love-print .nav,
      body.love-print header,
      body.love-print footer { display: none !important; }
    }

    
/* ===== AESTHETIC LOVE LETTER ===== */

.love-paper {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  box-sizing: border-box;
  min-height: 530px;
  padding: 52px 42px;
  border: 1px solid #d9c4a3;
  border-radius: 3px;
  outline: 1px solid rgba(201, 164, 92, .45);
  outline-offset: -9px;

  background:
    radial-gradient(ellipse at top left,
      rgba(201,164,92,.12), transparent 38%),
    radial-gradient(ellipse at bottom right,
      rgba(112,35,57,.07), transparent 40%),
    #fbf5eb;

  color: #49343a;
  box-shadow: 0 18px 45px rgba(0,0,0,.20);
}

/* Ornamen sudut */
.love-paper::before,
.love-paper::after {
  position: absolute;
  z-index: -1;
  color: rgba(166, 126, 66, .20);
  font-family: Georgia, serif;
  font-size: 90px;
  line-height: 1;
  pointer-events: none;
}

.love-paper::before {
  content: "❧";
  top: 9px;
  left: 17px;
  transform: rotate(-35deg);
}

.love-paper::after {
  content: "❧";
  right: 17px;
  bottom: 9px;
  transform: rotate(145deg);
}

.love-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #a0804b;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 3px;
  text-align: center;
}

.love-eyebrow::before,
.love-eyebrow::after {
  content: "";
  display: inline-block;
  width: 24px;
  height: 1px;
  background: #c9a45c;
}

.love-paper h3 {
  margin: 30px 0 14px;
  color: #642039;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(30px, 4vw, 43px);
  font-weight: 500;
  line-height: 1.12;
  text-align: center;
  overflow-wrap: anywhere;
}

#lovePreviewMeta {
  margin: 0 0 27px;
  padding-bottom: 22px;
  border-bottom: 1px solid #e4d3bb;
  color: #967b70;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  letter-spacing: 1px;
  line-height: 1.8;
  text-align: center;
}

#lovePreviewText {
  color: #554047;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 19px;
  line-height: 1.95;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

#lovePreviewText::first-letter {
  color: #8d3b51;
}

.love-heading h2 {
  color: #f4e6d4;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(35px, 5vw, 48px);
  font-weight: 500;
  letter-spacing: .5px;
}

.love-heading > p {
  font-size: 9px;
  letter-spacing: 4px;
}

.love-heading span {
  color: #d0bdbb;
  line-height: 1.8;
}

.love-form {
  background: linear-gradient(145deg, #32101c, #210912);
  border: 1px solid rgba(201,164,92,.38);
  border-radius: 5px;
  padding: 28px;
  box-shadow: 0 15px 40px rgba(0,0,0,.14);
}

.love-form label {
  color: #ead9c3;
  font-size: 12px;
  letter-spacing: .4px;
}

.love-form input,
.love-form textarea {
  border: 1px solid rgba(201,164,92,.25);
  border-radius: 3px;
  background: rgba(15,5,10,.55);
  color: #fff6ed;
  font-size: 13px;
  transition: border-color .25s, box-shadow .25s;
}

.love-form input:focus,
.love-form textarea:focus {
  outline: none;
  border-color: #c9a45c;
  box-shadow: 0 0 0 3px rgba(201,164,92,.10);
}

.love-form input::placeholder,
.love-form textarea::placeholder {
  color: #a89194;
}

.love-buttons button {
  border: 1px solid #b89557;
  border-radius: 2px;
  background: #70233b;
  font-size: 11px;
  letter-spacing: .3px;
  transition: .25s ease;
}

.love-buttons button:hover {
  background: #8d3852;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0,0,0,.15);
}

.love-note {
  margin-top: 16px;
  color: #bda7aa;
  line-height: 1.8;
}

@media(max-width: 700px) {
  .love-paper {
    min-height: 400px;
    padding: 38px 28px;
  }

  #lovePreviewText {
    font-size: 17px;
  }

  .love-form {
    padding: 22px;
  }
}

  `;
  document.head.appendChild(style);

  // Ambil elemen input
  const title = document.getElementById("loveTitle");
  const names = document.getElementById("loveNames");
  const date = document.getElementById("loveDate");
  const story = document.getElementById("loveText");

  const previewTitle = document.getElementById("lovePreviewTitle");
  const previewMeta = document.getElementById("lovePreviewMeta");
  const previewText = document.getElementById("lovePreviewText");

  // Ambil tulisan yang tersimpan
  const storageKey = "anniv.loveStory";

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    title.value = saved.title || "";
    names.value = saved.names || "";
    date.value = saved.date || "";
    story.value = saved.story || "";
  } catch (error) {
    console.log("Data cerita belum tersedia.");
  }

  function updatePreview() {
    previewTitle.textContent =
      title.value.trim() || "Our Little Forever";

    const formattedDate = date.value
      ? new Date(date.value + "T00:00:00")
          .toLocaleDateString("id-ID", {
            day: "numeric", month: "long", year: "numeric"
          })
      : "";

    previewMeta.textContent =
      [names.value.trim(), formattedDate].filter(Boolean).join(" • ")
      || "Cerita yang ditulis dengan cinta ♡";

    previewText.textContent = story.value.trim()
      || "Coba tulis cerita kita di sini ♡";

    try {
      localStorage.setItem(storageKey, JSON.stringify({
        title: title.value,
        names: names.value,
        date: date.value,
        story: story.value
      }));
    } catch (error) {
      // Tetap bisa digunakan jika penyimpanan browser tidak tersedia.
    }
  }

  [title, names, date, story].forEach(input => {
    input.addEventListener("input", updatePreview);
    input.addEventListener("change", updatePreview);
  });

  // Print atau simpan PDF
  document.getElementById("lovePrint").addEventListener("click", () => {
    updatePreview();
    document.body.classList.add("love-print");

    window.print();

    const cleanup = () =>
      document.body.classList.remove("love-print");

    window.addEventListener("afterprint", cleanup, { once: true });
    setTimeout(cleanup, 3000);
  });

  // Download tulisan sebagai TXT
  document.getElementById("loveDownload").addEventListener("click", () => {
    updatePreview();

    const content =
      `${title.value.trim() || "Our Little Forever"}\n` +
      `${names.value.trim()}\n${date.value}\n\n` +
      `${story.value}\n`;

    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download =
      (title.value.trim() || "our-love-story")
        .replace(/[\\/:*?"<>|]+/g, "-") + ".txt";

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  updatePreview();
})();
