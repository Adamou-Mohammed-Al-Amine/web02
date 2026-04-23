// ===== TRANSLATIONS =====
const translations = {
  en: {
    nav_home: "Home", nav_about: "About", nav_services: "Services",
    nav_work: "Work", nav_contact: "Contact",
    hero_sub: "Creative Video Editor",
    hero_desc: "Crafting cinematic stories that leave a lasting impression.",
    hero_btn1: "View My Work", hero_btn2: "Let's Work Together",
    about_label: "About Me", about_title: "The Editor Behind the Frame",
    about_p1: "I'm Adamou Mohammed Al Amine — a passionate video editor with years of experience crafting compelling visual narratives for brands, creators, and filmmakers worldwide.",
    about_p2: "My work spans cinematic long-form documentaries to fast-paced short-form content, always driven by storytelling, rhythm, and emotion.",
    stat1: "Projects Done", stat2: "Years Experience", stat3: "Happy Clients",
    services_label: "What I Do", services_title: "Services",
    s1_title: "Cinematic Editing", s1_desc: "Long-form cinematic edits for films, documentaries, and brand stories with powerful narrative flow.",
    s2_title: "Short-Form Content", s2_desc: "Reels, TikToks, and YouTube Shorts crafted for maximum engagement and viral potential.",
    s3_title: "Color Grading", s3_desc: "Professional color grading that gives your footage a distinct cinematic look and feel.",
    s4_title: "Sound Design", s4_desc: "Immersive audio mixing and sound design to complement and elevate your visuals.",
    s5_title: "Subtitles & Captions", s5_desc: "Multilingual subtitles and animated captions for global reach and accessibility.",
    s6_title: "Motion Graphics", s6_desc: "Eye-catching motion graphics and animated titles that enhance your brand identity.",
    lf_label: "Cinematic Work", lf_title: "Long Form Videos",
    lf_v1: "Documentary — Desert Journey", lf_v2: "Brand Film — Vision 2025", lf_v3: "Short Film — Echoes",
    lw_label: "Portfolio", lw_title: "Latest Work",
    sf_label: "Social Media", sf_title: "Short Form Videos",
    sf_v1: "Reel — Brand Identity", sf_v2: "TikTok — Travel Vibes",
    sf_v3: "YouTube Short — Product Launch", sf_v4: "Reel — Event Highlight",
    why_label: "The Difference", why_title: "Why Work With Me?",
    why1_title: "Cinematic Eye", why1_desc: "Every cut, transition, and color choice is intentional — crafted to tell your story visually.",
    why2_title: "On-Time Delivery", why2_desc: "I respect deadlines. Your project will be delivered on time, every time — without compromising quality.",
    why3_title: "Clear Communication", why3_desc: "I keep you in the loop at every stage of the editing process so there are no surprises.",
    why4_title: "Unlimited Revisions", why4_desc: "Your satisfaction is my priority. I'll revise until the final cut is exactly what you envisioned.",
    contact_label: "Get In Touch", contact_title: "Let's Create Together",
    contact_desc: "Have a project in mind? I'd love to hear about it. Send me a message and let's bring your vision to life.",
    form_name: "Your Name", form_email: "Your Email",
    form_service: "Select a Service", form_message: "Your Message",
    form_send: "Send Message", form_wa: "Chat on WhatsApp",
    footer_tagline: "Crafting cinematic stories.", footer_rights: "All rights reserved."
  },
  ar: {
    nav_home: "الرئيسية", nav_about: "عني", nav_services: "الخدمات",
    nav_work: "أعمالي", nav_contact: "تواصل",
    hero_sub: "مونتير فيديو إبداعي",
    hero_desc: "أصنع قصصاً سينمائية تترك أثراً لا يُنسى.",
    hero_btn1: "شاهد أعمالي", hero_btn2: "لنعمل معاً",
    about_label: "عني", about_title: "المونتير خلف الكادر",
    about_p1: "أنا آدم محمد الأمين — مونتير فيديو شغوف بسنوات من الخبرة في صياغة روايات بصرية مقنعة للعلامات التجارية والمبدعين وصانعي الأفلام حول العالم.",
    about_p2: "يمتد عملي من الأفلام الوثائقية السينمائية الطويلة إلى المحتوى القصير سريع الإيقاع، مدفوعاً دائماً بالسرد والإيقاع والعاطفة.",
    stat1: "مشروع منجز", stat2: "سنوات خبرة", stat3: "عميل سعيد",
    services_label: "ما أقدمه", services_title: "الخدمات",
    s1_title: "مونتاج سينمائي", s1_desc: "تحرير سينمائي طويل للأفلام والوثائقيات وقصص العلامات التجارية بتدفق سردي قوي.",
    s2_title: "محتوى قصير", s2_desc: "ريلز وتيك توك ويوتيوب شورتس مصممة لأقصى تفاعل وإمكانية انتشار.",
    s3_title: "تدرج الألوان", s3_desc: "تدرج ألوان احترافي يمنح لقطاتك مظهراً سينمائياً مميزاً.",
    s4_title: "تصميم الصوت", s4_desc: "مزج صوتي غامر وتصميم صوت يكمل مرئياتك ويرفع مستواها.",
    s5_title: "الترجمة والتعليقات", s5_desc: "ترجمات متعددة اللغات وتعليقات متحركة للوصول العالمي وإمكانية الوصول.",
    s6_title: "موشن جرافيك", s6_desc: "رسوم متحركة جذابة وعناوين متحركة تعزز هوية علامتك التجارية.",
    lf_label: "العمل السينمائي", lf_title: "فيديوهات طويلة",
    lf_v1: "وثائقي — رحلة الصحراء", lf_v2: "فيلم علامة تجارية — رؤية 2025", lf_v3: "فيلم قصير — أصداء",
    lw_label: "معرض الأعمال", lw_title: "أحدث الأعمال",
    sf_label: "وسائل التواصل", sf_title: "فيديوهات قصيرة",
    sf_v1: "ريل — هوية العلامة", sf_v2: "تيك توك — أجواء السفر",
    sf_v3: "يوتيوب شورت — إطلاق منتج", sf_v4: "ريل — تغطية حدث",
    why_label: "الفارق", why_title: "لماذا تعمل معي؟",
    why1_title: "عين سينمائية", why1_desc: "كل قطعة وانتقال واختيار لون مقصود — مصمم لرواية قصتك بصرياً.",
    why2_title: "التسليم في الوقت المحدد", why2_desc: "أحترم المواعيد النهائية. سيتم تسليم مشروعك في الوقت المحدد دون المساس بالجودة.",
    why3_title: "تواصل واضح", why3_desc: "أبقيك على اطلاع في كل مرحلة من مراحل عملية التحرير حتى لا تكون هناك مفاجآت.",
    why4_title: "تعديلات غير محدودة", why4_desc: "رضاك هو أولويتي. سأراجع حتى يكون المنتج النهائي بالضبط ما تصورته.",
    contact_label: "تواصل معي", contact_title: "لنبدع معاً",
    contact_desc: "هل لديك مشروع في ذهنك؟ أود سماع المزيد عنه. أرسل لي رسالة ولنحول رؤيتك إلى واقع.",
    form_name: "اسمك", form_email: "بريدك الإلكتروني",
    form_service: "اختر خدمة", form_message: "رسالتك",
    form_send: "أرسل الرسالة", form_wa: "تواصل عبر واتساب",
    footer_tagline: "نصنع قصصاً سينمائية.", footer_rights: "جميع الحقوق محفوظة."
  },
  fr: {
    nav_home: "Accueil", nav_about: "À propos", nav_services: "Services",
    nav_work: "Travaux", nav_contact: "Contact",
    hero_sub: "Monteur Vidéo Créatif",
    hero_desc: "Créer des histoires cinématographiques qui laissent une impression durable.",
    hero_btn1: "Voir mes travaux", hero_btn2: "Travaillons ensemble",
    about_label: "À propos", about_title: "Le monteur derrière le cadre",
    about_p1: "Je suis Adamou Mohammed Al Amine — un monteur vidéo passionné avec des années d'expérience dans la création de récits visuels convaincants pour les marques, les créateurs et les cinéastes du monde entier.",
    about_p2: "Mon travail va des documentaires cinématographiques longs au contenu court dynamique, toujours guidé par la narration, le rythme et l'émotion.",
    stat1: "Projets réalisés", stat2: "Ans d'expérience", stat3: "Clients satisfaits",
    services_label: "Ce que je fais", services_title: "Services",
    s1_title: "Montage cinématographique", s1_desc: "Montages longs cinématographiques pour films, documentaires et histoires de marques.",
    s2_title: "Contenu court", s2_desc: "Reels, TikToks et YouTube Shorts conçus pour un engagement maximal.",
    s3_title: "Étalonnage des couleurs", s3_desc: "Étalonnage professionnel qui donne à vos images un look cinématographique distinctif.",
    s4_title: "Design sonore", s4_desc: "Mixage audio immersif et design sonore pour compléter vos visuels.",
    s5_title: "Sous-titres", s5_desc: "Sous-titres multilingues et légendes animées pour une portée mondiale.",
    s6_title: "Motion Graphics", s6_desc: "Animations accrocheuses et titres animés qui renforcent votre identité de marque.",
    lf_label: "Travail cinématographique", lf_title: "Vidéos longues",
    lf_v1: "Documentaire — Voyage dans le désert", lf_v2: "Film de marque — Vision 2025", lf_v3: "Court métrage — Échos",
    lw_label: "Portfolio", lw_title: "Derniers travaux",
    sf_label: "Réseaux sociaux", sf_title: "Vidéos courtes",
    sf_v1: "Reel — Identité de marque", sf_v2: "TikTok — Ambiances voyage",
    sf_v3: "YouTube Short — Lancement produit", sf_v4: "Reel — Temps forts événement",
    why_label: "La différence", why_title: "Pourquoi travailler avec moi?",
    why1_title: "Œil cinématographique", why1_desc: "Chaque coupe, transition et choix de couleur est intentionnel — conçu pour raconter votre histoire visuellement.",
    why2_title: "Livraison dans les délais", why2_desc: "Je respecte les délais. Votre projet sera livré à temps, à chaque fois — sans compromettre la qualité.",
    why3_title: "Communication claire", why3_desc: "Je vous tiens informé à chaque étape du processus de montage.",
    why4_title: "Révisions illimitées", why4_desc: "Votre satisfaction est ma priorité. Je réviserai jusqu'à ce que le résultat final soit exactement ce que vous avez imaginé.",
    contact_label: "Contactez-moi", contact_title: "Créons ensemble",
    contact_desc: "Vous avez un projet en tête? J'aimerais en savoir plus. Envoyez-moi un message et donnons vie à votre vision.",
    form_name: "Votre nom", form_email: "Votre email",
    form_service: "Choisir un service", form_message: "Votre message",
    form_send: "Envoyer le message", form_wa: "Discuter sur WhatsApp",
    footer_tagline: "Créer des histoires cinématographiques.", footer_rights: "Tous droits réservés."
  }
};

// ===== LANGUAGE =====
let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });
}

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ===== REVEAL ON SCROLL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== VIDEO MODAL =====
function openModal(url) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  iframe.src = url + '?autoplay=1';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('videoModal') && !e.target.closest('.modal-close')) return;
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  modal.classList.remove('active');
  iframe.src = '';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== CAROUSEL =====
let carouselIndex = 0;
const track = document.getElementById('carouselTrack');
const items = document.querySelectorAll('.carousel-item');
const dotsContainer = document.getElementById('carouselDots');
const visibleItems = () => window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

function buildDots() {
  dotsContainer.innerHTML = '';
  const total = Math.ceil(items.length / visibleItems());
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }
}

function updateCarousel() {
  const vi = visibleItems();
  const maxIndex = Math.ceil(items.length / vi) - 1;
  carouselIndex = Math.max(0, Math.min(carouselIndex, maxIndex));
  const itemWidth = track.parentElement.offsetWidth / vi;
  const gap = 20;
  track.style.transform = `translateX(-${carouselIndex * (itemWidth + gap) * vi}px)`;
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === carouselIndex);
  });
}

function moveCarousel(dir) {
  const vi = visibleItems();
  const maxIndex = Math.ceil(items.length / vi) - 1;
  carouselIndex = Math.max(0, Math.min(carouselIndex + dir, maxIndex));
  updateCarousel();
}

function goToSlide(i) {
  carouselIndex = i;
  updateCarousel();
}

window.addEventListener('resize', () => {
  buildDots();
  updateCarousel();
});

// ===== SMOOTH CLOSE MODAL ON OVERLAY CLICK =====
document.getElementById('videoModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ===== CONTACT FORM =====
function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById('fname').value;
  const email = document.getElementById('femail').value;
  const service = document.getElementById('fservice').value;
  const message = document.getElementById('fmessage').value;
  const subject = encodeURIComponent(`Project Inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`);
  window.location.href = `mailto:amine@example.com?subject=${subject}&body=${body}`;
}

function sendWhatsApp() {
  const name = document.getElementById('fname').value || 'there';
  const service = document.getElementById('fservice').value || 'your services';
  const message = document.getElementById('fmessage').value || '';
  const text = encodeURIComponent(`Hi AMINE! My name is ${name}. I'm interested in ${service}.\n\n${message}`);
  window.open(`https://wa.me/1234567890?text=${text}`, '_blank');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  buildDots();
  updateCarousel();
});
