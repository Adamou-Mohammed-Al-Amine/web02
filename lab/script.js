// 1. Translations Object
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_services: "Services", nav_videos: "Videos", nav_contact: "Contact",
        btn_hire: "Hire Me", btn_work: "View My Work", btn_send: "Send Message",
        hero_accent: "Cinematic Storytelling",
        hero_title: "AMINE — Video Editor",
        hero_subtitle: "I create high-performing video content for creators, brands, and businesses.",
        hero_support: "Cinematic edits. Clear storytelling. Strong results.",
        about_title: "About Me",
        about_p1: "I’m Adamou Mohammed Al Amine, a professional video editor with over 5 years of experience in creating high-quality short-form and long-form content.",
        about_p2: "I help brands, creators, and businesses turn their ideas into engaging visual stories that capture attention and drive results.",
        stat_1: "Years Experience", stat_2: "Short & Long Form",
        services_title: "Services",
        ser_1_title: "Short Form Video", ser_1_desc: "High-retention edits for TikTok, Reels, and Shorts.",
        ser_2_title: "Long Form Video", ser_2_desc: "Professional YouTube content and documentaries.",
        ser_3_title: "Brand Storytelling", ser_3_desc: "Visual content that builds brand identity.",
        long_form_title: "Long Form Projects",
        short_title: "Short Form Edits",
        reel_placeholder: "Click a card to see details",
        why_title: "Why Work With Me",
        why_1: "Clean Editing Style", why_2: "Focus on Retention", why_3: "Fast Delivery",
        contact_title: "Let's Work Together",
        ph_fname: "First Name", ph_lname: "Last Name", ph_type: "Type of Work", ph_details: "Project Details",
        footer_role: "Professional Video Editor",
        rights: "All rights reserved."
    },
    ar: {
        nav_home: "الرئيسية", nav_about: "عني", nav_services: "خدماتي", nav_videos: "أعمالي", nav_contact: "اتصل بي",
        btn_hire: "وظفني", btn_work: "شاهد أعمالي", btn_send: "إرسال الرسالة",
        hero_accent: "سرد قصصي سينمائي",
        hero_title: "أمين — مونتير فيديو",
        hero_subtitle: "أصنع محتوى فيديو عالي الأداء لصناع المحتوى، العلامات التجارية، والشركات.",
        hero_support: "مونتاج سينمائي. سرد واضح. نتائج قوية.",
        about_title: "من أنا",
        about_p1: "أنا أدامو محمد الأمين، مونتير محترف بخبرة تزيد عن 5 سنوات في إنشاء محتوى عالي الجودة.",
        about_p2: "أساعد العلامات التجارية والمبدعين على تحويل أفكارهم إلى قصص بصرية جذابة تحقق نتائج.",
        stat_1: "سنوات خبرة", stat_2: "محتوى قصير وطويل",
        services_title: "الخدمات",
        ser_1_title: "الفيديوهات القصيرة", ser_1_desc: "مونتاج عالي الاحتفاظ لمنصات تيك توك وريلز.",
        ser_2_title: "الفيديوهات الطويلة", ser_2_desc: "محتوى يوتيوب احترافي وأفلام وثائقية.",
        ser_3_title: "سرد قصصي للعلامات", ser_3_desc: "محتوى بصري يبني هوية العلامة التجارية.",
        long_form_title: "مشاريع الطويلة",
        short_title: "مقاطع قصيرة",
        reel_placeholder: "اضغط على بطاقة لرؤية التفاصيل",
        why_title: "لماذا تختارني؟",
        why_1: "أسلوب مونتاج نظيف", why_2: "التركيز على الاحتفاظ بالمشاهد", why_3: "سرعة في التسليم",
        contact_title: "لنعمل معاً",
        ph_fname: "الاسم الأول", ph_lname: "اللقب", ph_type: "نوع العمل", ph_details: "تفاصيل المشروع",
        footer_role: "مونتير فيديو محترف",
        rights: "جميع الحقوق محفوظة."
    },
    fr: {
        nav_home: "Accueil", nav_about: "À Propos", nav_services: "Services", nav_videos: "Vidéos", nav_contact: "Contact",
        btn_hire: "Engagez-moi", btn_work: "Mes Travaux", btn_send: "Envoyer Message",
        hero_accent: "Storytelling Cinématographique",
        hero_title: "AMINE — Monteur Vidéo",
        hero_subtitle: "Je crée du contenu vidéo performant pour les créateurs et les marques.",
        hero_support: "Montage cinématographique. Storytelling clair. Résultats forts.",
        about_title: "À Propos",
        about_p1: "Je suis Adamou Mohammed Al Amine, monteur professionnel avec plus de 5 ans d'expérience.",
        about_p2: "J'aide les marques à transformer leurs idées en histoires visuelles captivantes.",
        stat_1: "Ans d'Expérience", stat_2: "Court & Long Format",
        services_title: "Services",
        ser_1_title: "Vidéos Courtes", ser_1_desc: "Montages TikTok et Reels à haute rétention.",
        ser_2_title: "Vidéos Longues", ser_2_desc: "Contenu YouTube professionnel et documentaires.",
        ser_3_title: "Storytelling de Marque", ser_3_desc: "Contenu visuel qui bâtit l'identité de marque.",
        long_form_title: "Projets Long Format",
        short_title: "Edits Courts",
        reel_placeholder: "Cliquez pour voir les détails",
        why_title: "Pourquoi Moi?",
        why_1: "Style de Montage Propre", why_2: "Focus sur la Rétention", why_3: "Livraison Rapide",
        contact_title: "Travaillons Ensemble",
        ph_fname: "Prénom", ph_lname: "Nom", ph_type: "Type de Travail", ph_details: "Détails du Projet",
        footer_role: "Monteur Vidéo Professionnel",
        rights: "Tous droits réservés."
    }
};

// 2. Language Switcher Logic
const langSwitcher = document.getElementById('langSwitcher');

function updateContent(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    localStorage.setItem('selectedLang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        el.placeholder = translations[lang][key];
    });
}

langSwitcher.addEventListener('change', (e) => updateContent(e.target.value));

// 3. Reveal on Scroll
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 4. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

// 5. Video Modal
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('modalIframe');

function openModal(url) {
    iframe.src = url;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

document.querySelector('.close-modal').onclick = () => {
    modal.style.display = 'none';
    iframe.src = "";
    document.body.style.overflow = 'auto';
};

// 6. Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const track = document.getElementById('carouselTrack');

function moveSlide(dir) {
    currentSlide = (currentSlide + dir + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
}

document.getElementById('nextBtn').onclick = () => moveSlide(1);
document.getElementById('prevBtn').onclick = () => moveSlide(-1);

// 7. Contact Form Logic
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const type = document.getElementById('workType').value;
    const details = document.getElementById('details').value;
    const method = document.querySelector('input[name="method"]:checked').value;

    const message = `First Name: ${fname}\nLast Name: ${lname}\nType: ${type}\nDetails: ${details}`;

    if (method === 'whatsapp') {
        window.open(`https://wa.me/213782955961?text=${encodeURIComponent(message)}`, '_blank');
    } else {
        window.location.href = `mailto:mohalaminadamou@gmail.com?subject=Project Inquiry&body=${encodeURIComponent(message)}`;
    }
});

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    langSwitcher.value = savedLang;
    updateContent(savedLang);
    document.body.classList.remove('loading');
});
