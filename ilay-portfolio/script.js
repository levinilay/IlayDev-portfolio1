// Language toggle (Hebrew / English)
const TRANSLATIONS = {
    he: {
        navHome: 'בית',
        navAbout: 'אודותיי',
        navServices: 'שירותים',
        navProjects: 'פרויקטים',
        navPricing: 'מחירים',
        navTestimonials: 'המלצות',
        navContact: 'יצירת קשר',
        heroTitle: 'עילאי לווין',
        heroSubtitle: 'מפתח תוכנה ומעצב דיגיטלי',
        heroDesc: 'יוצר חוויות דיגיטליות עם דגש על פרטים, ביצועים ועיצוב מודרני. משלב קוד נקי עם חוויית משתמש מעולה.',
        heroBtn: 'יצירת קשר',
        heroBtnFirst: 'רוצים להיות ראשוניים לעבוד איתי?',
        navFirstClients: 'הצעה ראשונים',
        firstClientsLabel: 'הצעה',
        firstClientsTitle: 'רוצים להיות בין הראשונים?',
        firstClientsText: 'אני יכול לפתח לכם אתר תדמית או אתר מכירות בחינם — כדי להתנסות ולהראות מה אני יודע. מתאים למי שמוכן להיות בין הלקוחות הראשונים שלי.',
        firstClientsBtn: 'מעוניין? צור קשר',
        sectionAbout: 'אודות',
        sectionAboutTitle: 'אודותיי',
        aboutMeta: 'מתכנת מזה שנתיים • בן 13',
        aboutP1: 'אני מפתח תוכנה מקצועי עם תשוקה ליצירת פתרונות דיגיטליים חדשניים ואיכותיים. אני מתמחה ביצירת אתרי תדמית ובתחזוקה שוטפת שלהם, בבניית אתרי מכירות, ובתחזוקה שותפת לאתרי מכירות עם database. אתרי מכירות שאני לא מתחזק — אכוון אתכם לחברות מקצועיות שמתמחות בתחזוקת אתרי מסחר.',
        aboutDifferentLabel: 'מה מייחד אותי:',
        aboutDifferentText: 'לומד מהר, כותב קוד מסודר וקריא, זמין ללקוחות, ומביא גישה צעירה ורעננה לפרויקטים.',
        aboutP3: 'הגישה שלי משלבת בין יצירתיות טכנית לבין הבנה עמוקה של צרכי המשתמשים, תוך שמירה על קוד נקי, יעיל וניתן לתחזוקה.',
        sectionServices: 'שירותים',
        sectionServicesTitle: 'מה אני מציע',
        service1Title: 'אתרי תדמית',
        service1Desc: 'בניית אתרי תדמית מקצועיים ותחזוקה שוטפת — עדכונים, גיבויים ושדרוגים. מתאים לעסקים ולחברות.',
        service2Title: 'אתרי מכירות',
        service2Desc: 'בניית אתרי מסחר ואי־קומרס. גם תחזוקה שותפת לאתרי מכירות עם database. כשאני לא מתחזק — אכוון אתכם לחברות שמתמחות בתחזוקת אתרי מכירות.',
        service3Title: 'עיצוב UI/UX',
        service3Desc: 'ממשקים ברורים ואינטואיטיביים עם דגש על חוויית משתמש ונגישות.',
        sectionProjects: 'עבודות',
        sectionProjectsTitle: 'פרויקטים',
        project1Title: 'משק פרחים',
        project1Problem: 'הבעיה: משק פרחים נדרש לאתר שמציג את המוצרים, מאפשר יצירת קשר ונותן נוכחות דיגיטלית מקצועית.',
        project1Solution: 'הפתרון: אתר תדמית עם גלריה, דפי שירותים, טופס יצירת קשר ו־RTL. רספונסיבי ומותאם למובייל.',
        project1Tech: 'טכנולוגיות: HTML5, CSS3, JavaScript (וונילה).',
        project2Title: 'מערכת ניהול בית ספר',
        project2Problem: 'הבעיה: בית ספר צריך מערכת להתחברות משתמשים, הרשמה וניהול תלמידים בצורה מסודרת.',
        project2Solution: 'הפתרון: מערכת עם דף התחברות והרשמה, ממשק ניהול וניהול גישה. מתאים להדגמה (Demo).',
        project2Tech: 'טכנולוגיות: HTML, CSS, JavaScript, Backend (Node/דומה).',
        project3Title: 'Class-Man',
        project3Problem: 'הבעיה: מותג אופנה גברית צריך חנות אונליין עם קטגוריות, עגלת קניות ומראה פרימיום.',
        project3Solution: 'הפתרון: אתר מסחרי עם דף בית, קטגוריות, עגלת קניות, דפי אודות וצור קשר. עיצוב מודרני ורספונסיבי.',
        project3Tech: 'טכנולוגיות: HTML, CSS, JavaScript. עגלת קניות וממשק מוצרים.',
        projectLink: 'צפה בפרויקט →',
        pricingBadge: 'פופולרי',
        pricing1Title: 'אתר תדמית',
        pricing1Desc: 'דף נחיתה או אתר תדמית עד 5 דפים, עיצוב מודרני, טופס יצירת קשר.',
        pricing1Price: 'החל מ־₪750',
        pricing1F1: 'עיצוב רספונסיבי',
        pricing1F2: 'טופס יצירת קשר',
        pricing1F3: 'תחזוקה חודשית (אופציונלי)',
        pricing2Title: 'אתר תדמית + תחזוקה',
        pricing2Desc: 'אתר תדמית מלא כולל עדכונים, גיבויים ותחזוקה שוטפת.',
        pricing2Price: 'החל מ־₪1,750',
        pricing2F1: 'כל מה שבחבילת תדמית',
        pricing2F2: 'תחזוקה שוטפת חודשית',
        pricing2F3: 'עדכוני תוכן וגיבויים',
        pricing3Title: 'אתר מכירות',
        pricing3Desc: 'אתר מסחר עם קטגוריות, עגלת קניות וממשק ניהול. אפשרות לתחזוקה שותפת עם database; אחרת אכוון לחברת תחזוקה.',
        pricing3Price: 'החל מ־₪2,750',
        pricing3F1: 'עגלת קניות',
        pricing3F2: 'קטגוריות מוצרים',
        pricing3F3: 'תחזוקה שותפת עם database או הכוונה לחברת תחזוקה',
        testimonial1Text: '"עילאי בנה לי אתר יפה ומקצועי. הגיע מוכן בזמן והסביר הכל בצורה ברורה. ממליץ."',
        testimonial1Author: '— מורה / מנהל פרויקט',
        testimonial2Text: '"האתר שעילאי יצר עבורנו נראה מעולה ועובד מצוין. תקשורת נעימה ועבודה מסודרת."',
        testimonial2Author: '— לקוח / מכר משפחה',
        testimonial3Text: '"הפתיע ברמת המקצועיות לגיל. קוד מסודר והבנה טובה של מה שצריך. שווה לנסות."',
        testimonial3Author: '— מנטור / הורה',
        testimonialsNote: 'מלא את ההמלצות למעלה — ערוך את שלושת הכרטיסים ב-index.html (חפש "המלצה 1").',
        sectionPricing: 'מחירים',
        sectionPricingTitle: 'חבילות שירות',
        pricingIntro: 'מחירים להתחלה — כל פרויקט מותאם אישית. ללא התחייבות לפני שיחה.',
        sectionTestimonials: 'המלצות',
        sectionTestimonialsTitle: 'מה אומרים על העבודה שלי',
        sectionContact: 'יצירת קשר',
        sectionContactTitle: 'בואו נדבר',
        contactSubtitle: 'פרטי התקשרות',
        contactIntro: 'מעוניינים בפרויקט משותף או בשאלה? אשמח לתשובה.',
        formName: 'שם *',
        formEmail: 'אימייל *',
        formMessage: 'הודעה *',
        formSubmit: 'שלח הודעה',
        footer: '© 2026 עילאי. כל הזכויות שמורות.',
        errRequired: 'שדה חובה',
        errEmailInvalid: 'כתובת אימייל לא תקינה',
        errMessageMin: 'ההודעה חייבת להכיל לפחות 10 תווים'
    },
    en: {
        navHome: 'Home',
        navAbout: 'About',
        navServices: 'Services',
        navProjects: 'Projects',
        navPricing: 'Pricing',
        navTestimonials: 'Testimonials',
        navContact: 'Contact',
        heroTitle: 'Ilay Levin',
        heroSubtitle: 'Full Stack Developer & Digital Designer',
        heroDesc: 'I build digital experiences with a focus on detail, performance, and modern design. Clean code and great UX.',
        heroBtn: 'Get in Touch',
        heroBtnFirst: 'Want to be among the first to work with me?',
        navFirstClients: 'First clients offer',
        firstClientsLabel: 'Offer',
        firstClientsTitle: 'Want to be among the first?',
        firstClientsText: 'I can build you a free corporate or e‑commerce site — to gain experience and show what I can do. For anyone willing to be among my first clients.',
        firstClientsBtn: 'Interested? Get in touch',
        sectionAbout: 'About',
        sectionAboutTitle: 'About Me',
        aboutMeta: 'Coding for 2 years • Age 13',
        aboutP1: 'I\'m a professional developer with a passion for building innovative digital solutions. I specialize in corporate sites and their maintenance, building e‑commerce sites, and shared maintenance for e‑commerce sites with a database. When I don\'t maintain a sales site, I\'ll point you to companies that specialize in e‑commerce maintenance.',
        aboutDifferentLabel: 'What makes me different:',
        aboutDifferentText: 'I learn fast, write clean and readable code, stay available to clients, and bring a fresh perspective to every project.',
        aboutP3: 'I combine technical creativity with a deep understanding of user needs, and keep code clean, efficient, and maintainable.',
        sectionServices: 'Services',
        sectionServicesTitle: 'What I Offer',
        service1Title: 'Corporate Websites',
        service1Desc: 'Professional corporate sites and ongoing maintenance — updates, backups, and upgrades. For businesses and companies.',
        service2Title: 'E‑commerce / Sales Sites',
        service2Desc: 'Online stores and e‑commerce. I also offer shared maintenance for e‑commerce sites with a database. When I don\'t maintain — I\'ll direct you to companies that specialize in e‑commerce maintenance.',
        service3Title: 'UI/UX Design',
        service3Desc: 'Clear, intuitive interfaces with a focus on user experience and accessibility.',
        sectionProjects: 'Work',
        sectionProjectsTitle: 'Projects',
        project1Title: 'Flower Farm',
        project1Problem: 'The problem: A flower farm needed a site to showcase products, enable contact, and present a professional digital presence.',
        project1Solution: 'The solution: A corporate site with a gallery, service pages, contact form, and RTL. Responsive and mobile-friendly.',
        project1Tech: 'Technologies: HTML5, CSS3, vanilla JavaScript.',
        project2Title: 'School Management System',
        project2Problem: 'The problem: A school needed a system for user login, registration, and organized student management.',
        project2Solution: 'The solution: A system with login and signup, admin interface, and access control. Suitable as a demo.',
        project2Tech: 'Technologies: HTML, CSS, JavaScript, backend (Node/similar).',
        project3Title: 'Class-Man',
        project3Problem: 'The problem: A men\'s fashion brand needed an online store with categories, cart, and a premium look.',
        project3Solution: 'The solution: An e‑commerce site with homepage, categories, shopping cart, about and contact. Modern, responsive design.',
        project3Tech: 'Technologies: HTML, CSS, JavaScript. Shopping cart and product interface.',
        projectLink: 'View project →',
        pricingBadge: 'Popular',
        pricing1Title: 'Corporate Website',
        pricing1Desc: 'Landing page or corporate site up to 5 pages, modern design, contact form.',
        pricing1Price: 'From ₪750',
        pricing1F1: 'Responsive design',
        pricing1F2: 'Contact form',
        pricing1F3: 'Monthly maintenance (optional)',
        pricing2Title: 'Corporate Site + Maintenance',
        pricing2Desc: 'Full corporate site including updates, backups, and ongoing maintenance.',
        pricing2Price: 'From ₪1,750',
        pricing2F1: 'Everything in corporate package',
        pricing2F2: 'Ongoing monthly maintenance',
        pricing2F3: 'Content updates and backups',
        pricing3Title: 'E‑commerce Site',
        pricing3Desc: 'Online store with categories, cart, and admin. Option for shared maintenance with database; otherwise I\'ll direct you to a maintenance company.',
        pricing3Price: 'From ₪2,750',
        pricing3F1: 'Shopping cart',
        pricing3F2: 'Product categories',
        pricing3F3: 'Shared maintenance with database or direction to maintenance company',
        testimonial1Text: '"Ilay built me a beautiful, professional site. Delivered on time and explained everything clearly. Recommended."',
        testimonial1Author: '— Teacher / Project manager',
        testimonial2Text: '"The site Ilay created for us looks great and works perfectly. Pleasant communication and organized work."',
        testimonial2Author: '— Client / Family acquaintance',
        testimonial3Text: '"Impressive professionalism for his age. Clean code and a good grasp of what\'s needed. Worth trying."',
        testimonial3Author: '— Mentor / Parent',
        testimonialsNote: 'Fill in the testimonials above — edit the three cards in index.html (search for "Testimonial 1").',
        sectionPricing: 'Pricing',
        sectionPricingTitle: 'Service Packages',
        pricingIntro: 'Starting prices — every project is custom. No commitment before we talk.',
        sectionTestimonials: 'Testimonials',
        sectionTestimonialsTitle: 'What People Say',
        sectionContact: 'Contact',
        sectionContactTitle: "Let's Talk",
        contactSubtitle: 'Contact Details',
        contactIntro: 'Have a project or question? I\'d love to hear from you.',
        formName: 'Name *',
        formEmail: 'Email *',
        formMessage: 'Message *',
        formSubmit: 'Send Message',
        footer: '© 2026 Ilay. All rights reserved.',
        errRequired: 'Required field',
        errEmailInvalid: 'Invalid email address',
        errMessageMin: 'Message must be at least 10 characters'
    }
};

let currentLang = 'he';

function applyLanguage(lang) {
    currentLang = lang;
    const t = TRANSLATIONS[lang];
    if (!t) return;
    document.documentElement.lang = lang === 'en' ? 'en' : 'he';
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.body.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    }

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
    });
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in-up elements
document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoader = submitBtn.querySelector('.btn-loader');
const formMessage = document.getElementById('formMessage');

// Clear form message after 5 seconds
function clearFormMessage() {
    setTimeout(() => {
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
    }, 5000);
}

// Show form message
function showMessage(type, text) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    clearFormMessage();
}

// Validate form
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.he;
    
    // Validate name
    if (!name) {
        document.getElementById('nameError').textContent = t.errRequired;
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = t.errRequired;
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = t.errEmailInvalid;
        isValid = false;
    }
    
    // Validate message
    if (!message) {
        document.getElementById('messageError').textContent = t.errRequired;
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = t.errMessageMin;
        isValid = false;
    }
    
    return isValid;
}

// Handle form submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        
        try {
            // Send form data to API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Success
                showMessage('success', currentLang === 'en' ? 'Message sent! I\'ll get back to you soon.' : 'ההודעה נשלחה בהצלחה! אחזור אליך בהקדם.');
                contactForm.reset();
            } else {
                // Error from server
                showMessage('error', data.error || (currentLang === 'en' ? 'Something went wrong. Please try again later.' : 'אירעה שגיאה בשליחת ההודעה. נסה שוב מאוחר יותר.'));
            }
        } catch (error) {
            // Network or other error
            console.error('Error:', error);
            showMessage('error', currentLang === 'en' ? 'Something went wrong. Please try again later.' : 'אירעה שגיאה בשליחת ההודעה. נסה שוב מאוחר יותר.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    });
}

// Real-time validation
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

if (nameInput) {
    nameInput.addEventListener('blur', () => {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.he;
        if (!nameInput.value.trim()) {
            document.getElementById('nameError').textContent = t.errRequired;
        } else {
            document.getElementById('nameError').textContent = '';
        }
    });
}

if (emailInput) {
    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.he;
        if (!emailInput.value.trim()) {
            document.getElementById('emailError').textContent = t.errRequired;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById('emailError').textContent = t.errEmailInvalid;
        } else {
            document.getElementById('emailError').textContent = '';
        }
    });
}

if (messageInput) {
    messageInput.addEventListener('blur', () => {
        const t = TRANSLATIONS[currentLang] || TRANSLATIONS.he;
        if (!messageInput.value.trim()) {
            document.getElementById('messageError').textContent = t.errRequired;
        } else if (messageInput.value.trim().length < 10) {
            document.getElementById('messageError').textContent = t.errMessageMin;
        } else {
            document.getElementById('messageError').textContent = '';
        }
    });
}
