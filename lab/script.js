// 1. Translations Object
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_services: "Services", nav_videos: "Videos", nav_contact: "Contact",
        btn_hire: "Hire Me", btn_work: "View My Work", btn_send: "Send Message",
        hero_title_premium: "Cinematic Storytelling",
        hero_main_title: "AMINE — Video Editor",
        hero_subtitle: "I create high-performing video content for creators, brands, and businesses.",
        hero_support: "Cinematic edits. Clear storytelling. Strong results.",
        about_title: "About Me",
        about_p1: "I’m Adamou Mohammed Al Amine, a professional video editor with over 5 years of experience in creating high-quality content.",
        about_p2: "I help brands and creators turn ideas into engaging visual stories. My goal is simple: create videos that perform.",
        stat_1: "Years Experience", stat_2: "Form Content", stat_2_val: "Short & Long",
        services_title: "Services",
        ser_1_title: "Short Form Editing", ser_1_desc: "Viral TikToks and Reels with high retention.",
        ser_2_title: "Long Form Editing", ser_2_desc: "Professional YouTube videos and documentaries.",
        ser_3_title: "Brand Content", ser_3_desc: "Luxury ads and promotional material.",
        long_form_title: "Long Form Projects",
        contact_title: "Let’s Work Together",
        p_fname: "First Name", p_lname: "Last Name", p_type: "Type of Work", p_details: "Project Details",
        footer_role: "Professional Video Editor"
    },
    ar: {
        nav_home: "الرئيسية", nav_about: "عني", nav_services: "خدماتي", nav_videos: "أعمالي", nav_contact: "اتصل بي",
        btn_hire: "وظفني", btn_work: "شاهد أعمالي", btn_send: "إرسال الرسالة",
        hero_title_premium: "سرد قصصي سينمائي",
        hero_main_title: "أمين — مونتير محترف",
        hero_subtitle: "أصنع محتوى فيديو عالي الأداء لصناع المحتوى، العلامات التجارية، والشركات.",
        hero_support: "مونتاج سينمائي. سرد واضح. نتائج قوية.",
        about_title: "من أنا",
        about_p1: "أنا أدامو محمد الأمين، مونتير محترف بخبرة تزيد عن 5 سنوات في إنشاء محتوى عالي الجودة.",
        about_p2: "أساعد العلامات التجارية والمبدعين على تحويل الأفكار إلى قصص بصرية جذابة. هدفي بسيط: إنشاء فيديوهات تحقق نتائج.",
        stat_1: "سنوات خبرة", stat_2: "صناعة محتوى", stat_2_val: "قصير وطويل",
        services_title: "الخدمات",
        ser_1_title: "الفيديوهات القصيرة", ser_1_desc: "تيك توك وريلز سريعة الانتشار وبنسبة احتفاظ عالية.",
        ser_2_title: "الفيديوهات الطويلة", ser_2_desc: "فيديوهات يوتيوب احترافية وأفلام وثائقية.",
        ser_3_title: "محتوى الشركات", ser_3_desc: "إعلانات فاخرة ومواد ترويجية.",
        long_form_title: "مشاريع الطويلة",
        contact_title: "لنعمل معاً",
        p_fname: " الاسم الأول", p_lname: "اللقب", p_type: "نوع العمل", p_details: "تفاصيل المشروع",
        footer_role: "مونتير فيديو محترف"
    },
    fr: {
        nav_home: "Accueil", nav_about: "À propos", nav_services: "Services", nav_videos: "Vidéos", nav_contact: "Contact",
        btn_hire: "Engagez-moi", btn_work: "Mes Travaux", btn_send: "Envoyer Message",
        hero_title_premium: "Storytelling Cinématographique",
        hero_main_title: "AMINE — Monteur Vidéo",
        hero_subtitle: "Je crée du contenu vidéo performant pour les créateurs et les marques.",
        hero_support: "Montage cinématographique. Storytelling clair. Résultats forts.",
        about_title: "À Propos",
        about_p1: "Je suis Adamou Mohammed Al Amine, monteur vidéo professionnel avec plus de 5 ans d'expérience.",
        about_p2: "J'aide les marques à transformer leurs idées en histoires visuelles captivantes.",
        stat_1: "Ans d'Expérience", stat_2: "Contenu Vidéo", stat_2_val: "Court & Long",
        services_title: "Services",
        ser_1_title: "Format Court", ser_1_desc: "TikToks et Reels viraux à forte rétention.",
        ser_2_title: "Format Long", ser_2_desc: "Vidéos YouTube professionnelles et documentaires.",
        ser_3_title: "Contenu de Marque", ser_3_desc: "Publicités de luxe et matériel promotionnel.",
        long_form_title: "Projets Long Format",
        contact_title: "Travaillons Ensemble",
        p_fname: "Prénom", p_lname: "Nom", p_type: "Type de Travail", p_details: "Détails du Projet",
        footer_role: "Monteur Vidéo Professionnel"
    }
};

// 2. Language Switcher Logic
const langSwitcher = document.getElementById('lang-switcher');
langSwitcher.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = translations[lang][key];
    });
}

// 3. Reveal on Scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 4. Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

// 5. Video Modal
function openModal(url) {
    document.getElementById('modalIframe').src = url;
    document.getElementById('videoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('modalIframe').src = '';
}

// 6. Contact Form Logic
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const type = document.getElementById('workType').value;
    const details = document.getElementById('details').value;
    const method = document.querySelector('input[name="method"]:checked').value;

    const message = `Name: ${fname} ${lname}%0AWork: ${type}%0ADetails: ${details}`;

    if (method === 'whatsapp') {
        window.open(`https://wa.me/213782955961?text=${message}`, '_blank');
    } else {
        window.location.href = `mailto:mohalaminadamou@gmail.com?subject=Project Inquiry&body=${message}`;
    }
});

// 7. Initial Load
window.onload = () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    langSwitcher.value = savedLang;
    setLanguage(savedLang);
};
