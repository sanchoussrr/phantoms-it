/* ============================================================
   Phantoms IT — main.js
   Features: preloader | header | burger | reveal | counter
             | contact form | lang switcher (EN/RU/UK) | video modal
   ============================================================ */

/* ---------- TRANSLATIONS ---------- */
const translations = {
  en: {
    'nav.home': 'Home', 'nav.services': 'Services', 'nav.about': 'About',
    'nav.portfolio': 'Portfolio', 'nav.contact': 'Contact', 'nav.cta': 'Get a Quote',
    'hero.badge': 'Available for New Projects',
    'hero.h1': 'We Build <span>Digital</span><br>Solutions That<br><span>Ghost</span> Your Competition',
    'hero.p': 'Phantoms IT delivers cutting-edge web, mobile and AI solutions. We work in the shadows — our results speak for themselves.',
    'hero.btn1': 'Explore Services', 'hero.btn2': 'View Our Work',
    'sec.services.tag': 'What We Do', 'sec.services.h2': 'Our <span>Services</span>',
    'sec.services.p': 'From concept to deployment — every layer of your digital transformation covered.',
    's1.h3': 'Web Development', 's1.p': 'High-performance websites and web apps built with React, Next.js, Vue, Laravel and more.',
    's1.li1': 'Custom Web Applications', 's1.li2': 'E-Commerce Platforms', 's1.li3': 'CMS & API Development', 's1.li4': 'AI Integration for Web',
    's2.h3': 'Mobile Development', 's2.p': 'Native and cross-platform iOS and Android apps delivering seamless user experiences.',
    's2.li1': 'iOS & Android Apps', 's2.li2': 'React Native / Flutter', 's2.li3': 'App Store Optimization', 's2.li4': 'AI Integration for Mobile',
    's3.h3': 'UI/UX Design', 's3.p': 'Pixel-perfect interfaces and intuitive experiences that convert visitors into loyal users.',
    's3.li1': 'Product Design', 's3.li2': 'Prototyping & Wireframes', 's3.li3': 'Design Systems',
    's.link': 'Get Started',
    'sec.about.tag': 'Who We Are',
    'about.h2': 'We Are The <span>Phantoms</span><br>Of The Digital World',
    'about.badge': 'Years of Excellence',
    'about.p1': "Phantoms IT is a premium technology company operating with precision and relentless drive. We don't just build software — we build digital legacies.",
    'about.p2': "Founded by passionate engineers and designers, we've grown into a full-service digital powerhouse trusted by startups and enterprises across the globe.",
    'about.feat1.t': 'Agile Development', 'about.feat1.d': 'Rapid iterations and continuous delivery for maximum value.',
    'about.feat2.t': 'Transparent Communication', 'about.feat2.d': 'Always in the loop — daily updates, weekly reports.',
    'about.feat3.t': 'Quality Guaranteed', 'about.feat3.d': 'Rigorous testing and code reviews on every project.',
    'about.feat4.t': '24/7 Support', 'about.feat4.d': 'Our phantoms never sleep — neither does our support team.',
    'about.btn': 'Work With Us',
    'sec.process.tag': 'How We Work', 'sec.process.h2': 'Our <span>Process</span>',
    'sec.process.p': 'A battle-tested workflow delivering exceptional results every single time.',
    'p1.h4': 'Discovery', 'p1.p': 'Deep dive into your goals, audience and technical requirements.',
    'p2.h4': 'Design', 'p2.p': 'Stunning prototypes and UI systems aligned with your brand identity.',
    'p3.h4': 'Development', 'p3.p': 'Clean, scalable code written by senior engineers with best practices.',
    'p4.h4': 'Launch', 'p4.p': 'Rigorous QA, smooth deployment, and ongoing post-launch support.',
    'sec.portfolio.tag': 'Our Work', 'sec.portfolio.h2': 'Featured <span>Project</span>',
    'sec.portfolio.p': 'Our latest product — live on the App Store and loved by users worldwide.',
    'rxm.tag': 'Available on App Store',
    'rxm.tagline': 'Improve your mood, track habits, and care for your mental health.',
    'rxm.desc': 'ReflexMe is your personal assistant for mental wellness, habit tracking, and self-development. Mindfulness tools for a better you — try it for free!',
    'rxm.f1': 'Mood and gratitude journal', 'rxm.f2': 'Habit and water tracker',
    'rxm.f3': 'Meditations and breathing exercises', 'rxm.f4': 'Affirmations and quotes',
    'rxm.f5': 'Personality tests and insights', 'rxm.f6': 'Reminders and progress tracking',
    'rxm.dl.small': 'Download on the', 'rxm.dl.strong': 'App Store', 'rxm.view': 'View on App Store',
    'sec.more.tag': 'More Projects', 'sec.more.h2': 'More of Our <span>Work</span>',
    'sec.more.p': 'Real projects for real business — watch the video presentations.',
    'vp1.cat': 'Web Development', 'vp1.title': 'Beauty Salon "Aura"', 'vp1.short': 'Elegant booking & brand presence for a premium beauty salon',
    'vp2.cat': 'Web Development', 'vp2.title': 'Café "Moka"', 'vp2.short': 'Cozy digital home with menu, atmosphere & online reservations',
    'vp3.cat': 'Web + Mobile', 'vp3.title': 'Quest Room "Phantom Zone"', 'vp3.short': 'Immersive escape room with team booking & leaderboards',
    'vp4.cat': 'Web Development', 'vp4.title': 'Restaurant "Bella Vista"', 'vp4.short': 'Premium restaurant with interactive menu & table reservations',
    'vp5.cat': 'Web Development', 'vp5.title': 'PrintCraft Typography', 'vp5.short': 'Full digital storefront with instant quote calculator',
    'sec.tech.tag': 'Tech Stack', 'sec.tech.h2': 'Technologies We <span>Master</span>',
    'cta.h2': 'Ready to Haunt Your Competition?',
    'cta.p': "Let's build something extraordinary together. Get a free consultation today.",
    'cta.btn': 'Start Your Project',
    'sec.contact.tag': 'Get In Touch', 'sec.contact.h2': 'Contact <span>Us</span>',
    'sec.contact.p': "Have a project in mind? We'd love to hear about it.",
    'contact.email': 'Email', 'contact.hours': 'Hours',
    'contact.hours.val': 'Mon – Fri: 10:00 AM – 5:00 PM',
    'form.name.label': 'Full Name *', 'form.name.ph': 'John Doe',
    'form.email.label': 'Email Address *', 'form.email.ph': 'john@example.com',
    'form.phone.label': 'Phone Number', 'form.phone.ph': '+1 (555) 000-0000',
    'form.service.label': 'Service Needed',
    'form.opt0': 'Select a service...', 'form.opt1': 'Web Development',
    'form.opt2': 'Mobile Development', 'form.opt3': 'UI/UX Design', 'form.opt4': 'Other',
    'form.msg.label': 'Project Details *', 'form.msg.ph': 'Tell us about your project...',
    'form.submit': 'Send Message', 'form.success': "Message sent! We'll respond within 24 hours.",
    'f.about.desc': 'We operate in the shadows, delivering digital excellence that leaves a lasting impression on your market.',
    'f.services': 'Services', 'f.s1': 'Web Development', 'f.s2': 'Mobile Apps', 'f.s3': 'UI/UX Design',
    'f.company': 'Company', 'f.c1': 'About Us', 'f.c2': 'Portfolio', 'f.c3': 'Contact',
    'f.copyright': '© 2026 Phantoms IT. All rights reserved.',
    'f.privacy': 'Privacy Policy', 'f.terms': 'Terms of Service',
    'vm.soon': 'Video coming soon',
  },
  ru: {
    'nav.home': 'Главная', 'nav.services': 'Услуги', 'nav.about': 'О нас',
    'nav.portfolio': 'Портфолио', 'nav.contact': 'Контакт', 'nav.cta': 'Получить цитату',
    'hero.badge': 'Принимаем новые проекты',
    'hero.h1': 'Создаём <span>Цифровые</span><br>Решения, Которые<br><span>Опережают</span> Конкурентов',
    'hero.p': 'Phantoms IT разрабатывает передовые веб, мобильные и AI решения. Мы работаем в тени — результаты говорят сами за себя.',
    'hero.btn1': 'Наши услуги', 'hero.btn2': 'Смотреть работы',
    'sec.services.tag': 'Что мы делаем', 'sec.services.h2': 'Наши <span>Услуги</span>',
    'sec.services.p': 'От идеи до запуска — каждый уровень вашей цифровой трансформации.',
    's1.h3': 'Веб-разработка', 's1.p': 'Высокопроизводительные сайты и веб-приложения на React, Next.js, Vue, Laravel и других технологиях.',
    's1.li1': 'Веб-приложения на заказ', 's1.li2': 'Платформы электронной коммерции', 's1.li3': 'CMS и API', 's1.li4': 'AI-интеграция для веба',
    's2.h3': 'Мобильная разработка', 's2.p': 'Нативные и кроссплатформенные iOS и Android приложения с безупречным пользовательским опытом.',
    's2.li1': 'iOS и Android приложения', 's2.li2': 'React Native / Flutter', 's2.li3': 'Оптимизация для App Store', 's2.li4': 'AI-интеграция для мобильных',
    's3.h3': 'UI/UX Дизайн', 's3.p': 'Пиксель-перфектные интерфейсы и интуитивный опыт, превращающий посетителей в лояльных пользователей.',
    's3.li1': 'Продуктовый дизайн', 's3.li2': 'Прототипы и wireframes', 's3.li3': 'Дизайн-системы',
    's.link': 'Начать',
    'sec.about.tag': 'Кто мы',
    'about.h2': 'Мы — <span>Призраки</span><br>Цифрового Мира',
    'about.badge': 'Лет совершенства',
    'about.p1': 'Phantoms IT — премиальная технологическая компания, работающая с точностью и неустанным стремлением к результату. Мы строим не просто программы — мы создаём цифровые легенды.',
    'about.p2': 'Основанная увлечёнными инженерами и дизайнерами, мы стали полноценной цифровой компанией, которой доверяют стартапы и корпорации по всему миру.',
    'about.feat1.t': 'Agile-разработка', 'about.feat1.d': 'Быстрые итерации и непрерывная поставка максимальной ценности.',
    'about.feat2.t': 'Прозрачная коммуникация', 'about.feat2.d': 'Всегда в курсе — ежедневные обновления, еженедельные отчёты.',
    'about.feat3.t': 'Гарантия качества', 'about.feat3.d': 'Строгое тестирование и код-ревью в каждом проекте.',
    'about.feat4.t': 'Поддержка 24/7', 'about.feat4.d': 'Наши призраки никогда не спят — и наша служба поддержки тоже.',
    'about.btn': 'Работать с нами',
    'sec.process.tag': 'Как мы работаем', 'sec.process.h2': 'Наш <span>Процесс</span>',
    'sec.process.p': 'Проверенный рабочий процесс, дающий исключительные результаты каждый раз.',
    'p1.h4': 'Анализ', 'p1.p': 'Глубокое погружение в ваши цели, аудиторию и технические требования.',
    'p2.h4': 'Дизайн', 'p2.p': 'Впечатляющие прототипы и UI-системы в соответствии с вашим брендом.',
    'p3.h4': 'Разработка', 'p3.p': 'Чистый, масштабируемый код от старших инженеров по лучшим практикам.',
    'p4.h4': 'Запуск', 'p4.p': 'Строгое QA, плавное развёртывание и поддержка после запуска.',
    'sec.portfolio.tag': 'Наши работы', 'sec.portfolio.h2': 'Избранный <span>Проект</span>',
    'sec.portfolio.p': 'Наш последний продукт — в App Store и любим пользователями по всему миру.',
    'rxm.tag': 'Доступно в App Store',
    'rxm.tagline': 'Улучшайте настроение, отслеживайте привычки и заботьтесь о ментальном здоровье.',
    'rxm.desc': 'ReflexMe — ваш персональный помощник для ментального благополучия, отслеживания привычек и саморазвития. Инструменты осознанности для лучшей версии вас — попробуйте бесплатно!',
    'rxm.f1': 'Журнал настроения и благодарности', 'rxm.f2': 'Трекер привычек и воды',
    'rxm.f3': 'Медитации и дыхательные упражнения', 'rxm.f4': 'Аффирмации и цитаты',
    'rxm.f5': 'Тесты личности и инсайты', 'rxm.f6': 'Напоминания и отслеживание прогресса',
    'rxm.dl.small': 'Скачать в', 'rxm.dl.strong': 'App Store', 'rxm.view': 'Смотреть в App Store',
    'sec.more.tag': 'Другие проекты', 'sec.more.h2': 'Больше наших <span>Работ</span>',
    'sec.more.p': 'Реальные проекты для реального бизнеса — смотрите видео-презентации.',
    'vp1.cat': 'Веб-разработка', 'vp1.title': 'Салон красоты «Aura»', 'vp1.short': 'Элегантное бронирование и имидж для премиального салона красоты',
    'vp2.cat': 'Веб-разработка', 'vp2.title': 'Кафе «Moka»', 'vp2.short': 'Уютный цифровой дом с меню, атмосферой и онлайн-бронированием',
    'vp3.cat': 'Веб + Мобайл', 'vp3.title': 'Квест-комната «Phantom Zone»', 'vp3.short': 'Иммерсивный квест с групповым бронированием и таблицей лидеров',
    'vp4.cat': 'Веб-разработка', 'vp4.title': 'Ресторан «Bella Vista»', 'vp4.short': 'Премиальный ресторан с интерактивным меню и бронированием столиков',
    'vp5.cat': 'Веб-разработка', 'vp5.title': 'Типография PrintCraft', 'vp5.short': 'Полноценный сайт с мгновенным калькулятором стоимости',
    'sec.tech.tag': 'Технологии', 'sec.tech.h2': 'Технологии, которыми мы <span>владеем</span>',
    'cta.h2': 'Готовы опередить конкурентов?',
    'cta.p': 'Давайте вместе создадим что-то выдающееся. Получите бесплатную консультацию сегодня.',
    'cta.btn': 'Начать проект',
    'sec.contact.tag': 'Связаться с нами', 'sec.contact.h2': 'Написать <span>нам</span>',
    'sec.contact.p': 'Есть проект? Мы будем рады услышать о нём.',
    'contact.email': 'Email', 'contact.hours': 'Часы работы',
    'contact.hours.val': 'Пн – Пт: 10:00 – 17:00',
    'form.name.label': 'Имя *', 'form.name.ph': 'Иван Иванов',
    'form.email.label': 'Электронная почта *', 'form.email.ph': 'ivan@example.com',
    'form.phone.label': 'Номер телефона', 'form.phone.ph': '+7 (999) 000-0000',
    'form.service.label': 'Нужная услуга',
    'form.opt0': 'Выберите услугу...', 'form.opt1': 'Веб-разработка',
    'form.opt2': 'Мобильная разработка', 'form.opt3': 'UI/UX Дизайн', 'form.opt4': 'Другое',
    'form.msg.label': 'Детали проекта *', 'form.msg.ph': 'Расскажите о вашем проекте...',
    'form.submit': 'Отправить', 'form.success': 'Сообщение отправлено! Ответим в течение 24 часов.',
    'f.about.desc': 'Мы работаем в тени, предоставляя цифровое совершенство, оставляющее неизгладимое впечатление на вашем рынке.',
    'f.services': 'Услуги', 'f.s1': 'Веб-разработка', 'f.s2': 'Мобильные приложения', 'f.s3': 'UI/UX Дизайн',
    'f.company': 'Компания', 'f.c1': 'О нас', 'f.c2': 'Портфолио', 'f.c3': 'Контакт',
    'f.copyright': '© 2026 Phantoms IT. Все права защищены.',
    'f.privacy': 'Политика конфиденциальности', 'f.terms': 'Условия использования',
    'vm.soon': 'Видео скоро будет',
  },
  uk: {
    'nav.home': 'Головна', 'nav.services': 'Послуги', 'nav.about': 'Про нас',
    'nav.portfolio': 'Портфоліо', 'nav.contact': 'Контакт', 'nav.cta': 'Отримати quote',
    'hero.badge': 'Приймаємо нові проекти',
    'hero.h1': 'Ми Будуємо <span>Цифрові</span><br>Рішення, що<br><span>Переважають</span> Конкурентів',
    'hero.p': 'Phantoms IT створює передові веб, мобільні та AI рішення. Ми працюємо у тіні — результати говорять самі за себе.',
    'hero.btn1': 'Наші послуги', 'hero.btn2': 'Переглянути роботи',
    'sec.services.tag': 'Що ми робимо', 'sec.services.h2': 'Наші <span>Послуги</span>',
    'sec.services.p': 'Від ідеї до запуску — кожен рівень вашої цифрової трансформації.',
    's1.h3': 'Веб-розробка', 's1.p': 'Високопродуктивні сайти та веб-додатки на React, Next.js, Vue, Laravel та інших технологіях.',
    's1.li1': 'Веб-додатки на замовлення', 's1.li2': 'Платформи електронної комерції', 's1.li3': 'CMS та API розробка', 's1.li4': 'AI-інтеграція для вебу',
    's2.h3': 'Мобільна розробка', 's2.p': 'Нативні та кросплатформенні iOS і Android додатки з бездоганним користувацьким досвідом.',
    's2.li1': 'iOS та Android додатки', 's2.li2': 'React Native / Flutter', 's2.li3': 'Оптимізація для App Store', 's2.li4': 'AI-інтеграція для мобільних',
    's3.h3': 'UI/UX Дизайн', 's3.p': 'Піксель-перфектні інтерфейси та інтуїтивний досвід, що перетворює відвідувачів на лояльних користувачів.',
    's3.li1': 'Продуктовий дизайн', 's3.li2': 'Прототипи та wireframes', 's3.li3': 'Дизайн-системи',
    's.link': 'Почати',
    'sec.about.tag': 'Хто ми',
    'about.h2': 'Ми — <span>Привиди</span><br>Цифрового Світу',
    'about.badge': 'Років досконалості',
    'about.p1': 'Phantoms IT — преміальна технологічна компанія, що працює з точністю та невтомним прагненням до результату. Ми будуємо не просто програми — ми створюємо цифрові легенди.',
    'about.p2': 'Заснована захопленими інженерами та дизайнерами, ми виросли у повноцінну цифрову компанію, якій довіряють стартапи та корпорації по всьому світу.',
    'about.feat1.t': 'Agile-розробка', 'about.feat1.d': 'Швидкі ітерації та безперервна поставка максимальної цінності.',
    'about.feat2.t': 'Прозора комунікація', 'about.feat2.d': 'Завжди в курсі — щоденні оновлення, щотижневі звіти.',
    'about.feat3.t': 'Гарантія якості', 'about.feat3.d': 'Суворе тестування та код-рев\u2019ю у кожному проекті.',
    'about.feat4.t': 'Підтримка 24/7', 'about.feat4.d': 'Наші привиди ніколи не сплять — і наша команда підтримки теж.',
    'about.btn': 'Працювати з нами',
    'sec.process.tag': 'Як ми працюємо', 'sec.process.h2': 'Наш <span>Процес</span>',
    'sec.process.p': 'Перевірений робочий процес, що дає виняткові результати щоразу.',
    'p1.h4': 'Аналіз', 'p1.p': 'Глибоке занурення у ваші цілі, аудиторію та технічні вимоги.',
    'p2.h4': 'Дизайн', 'p2.p': 'Вражаючі прототипи та UI-системи відповідно до вашого бренду.',
    'p3.h4': 'Розробка', 'p3.p': 'Чистий, масштабований код від старших інженерів за найкращими практиками.',
    'p4.h4': 'Запуск', 'p4.p': 'Суворе QA, плавне розгортання та підтримка після запуску.',
    'sec.portfolio.tag': 'Наші роботи', 'sec.portfolio.h2': 'Вибраний <span>Проект</span>',
    'sec.portfolio.p': 'Наш останній продукт — в App Store і улюблений користувачами по всьому світу.',
    'rxm.tag': 'Доступно в App Store',
    'rxm.tagline': 'Покращуйте настрій, відстежуйте звички та дбайте про ментальне здоров\u2019я.',
    'rxm.desc': 'ReflexMe — ваш особистий помічник для ментального благополуччя, відстеження звичок та саморозвитку. Інструменти усвідомленості для кращої версії вас — спробуйте безкоштовно!',
    'rxm.f1': 'Журнал настрою та вдячності', 'rxm.f2': 'Трекер звичок та води',
    'rxm.f3': 'Медитації та дихальні вправи', 'rxm.f4': 'Афірмації та цитати',
    'rxm.f5': 'Тести особистості та інсайти', 'rxm.f6': 'Нагадування та відстеження прогресу',
    'rxm.dl.small': 'Завантажити в', 'rxm.dl.strong': 'App Store', 'rxm.view': 'Переглянути в App Store',
    'sec.more.tag': 'Інші проекти', 'sec.more.h2': 'Більше наших <span>Робіт</span>',
    'sec.more.p': 'Реальні проекти для реального бізнесу — дивіться відео-презентації.',
    'vp1.cat': 'Веб-розробка', 'vp1.title': 'Салон краси «Aura»', 'vp1.short': 'Елегантне бронювання та бренд-присутність для преміального салону краси',
    'vp2.cat': 'Веб-розробка', 'vp2.title': 'Кафе «Moka»', 'vp2.short': 'Затишний цифровий дім з меню, атмосферою та онлайн-бронюванням',
    'vp3.cat': 'Веб + Мобайл', 'vp3.title': 'Квест-кімната «Phantom Zone»', 'vp3.short': 'Захоплюючий квест з груповим бронюванням та таблицею лідерів',
    'vp4.cat': 'Веб-розробка', 'vp4.title': 'Ресторан «Bella Vista»', 'vp4.short': 'Преміальний ресторан з інтерактивним меню та бронюванням столиків',
    'vp5.cat': 'Веб-розробка', 'vp5.title': 'Типографія PrintCraft', 'vp5.short': 'Повноцінний сайт з миттєвим калькулятором вартості',
    'sec.tech.tag': 'Технології', 'sec.tech.h2': 'Технології, якими ми <span>володіємо</span>',
    'cta.h2': 'Готові перевершити конкурентів?',
    'cta.p': 'Давайте разом створимо щось видатне. Отримайте безкоштовну консультацію сьогодні.',
    'cta.btn': 'Почати проект',
    'sec.contact.tag': 'Зв\u2019яжіться з нами', 'sec.contact.h2': 'Написати <span>нам</span>',
    'sec.contact.p': 'Є проект? Ми з радістю почуємо про нього.',
    'contact.email': 'Email', 'contact.hours': 'Години роботи',
    'contact.hours.val': 'Пн – Пт: 10:00 – 17:00',
    'form.name.label': 'Ім\u2019я *', 'form.name.ph': 'Іван Іваненко',
    'form.email.label': 'Електронна пошта *', 'form.email.ph': 'ivan@example.com',
    'form.phone.label': 'Номер телефону', 'form.phone.ph': '+38 (099) 000-0000',
    'form.service.label': 'Потрібна послуга',
    'form.opt0': 'Оберіть послугу...', 'form.opt1': 'Веб-розробка',
    'form.opt2': 'Мобільна розробка', 'form.opt3': 'UI/UX Дизайн', 'form.opt4': 'Інше',
    'form.msg.label': 'Деталі проекту *', 'form.msg.ph': 'Розкажіть про ваш проект...',
    'form.submit': 'Надіслати', 'form.success': 'Повідомлення надіслано! Відповімо протягом 24 годин.',
    'f.about.desc': 'Ми працюємо у тіні, надаючи цифрову досконалість, що залишає незгладиме враження на вашому ринку.',
    'f.services': 'Послуги', 'f.s1': 'Веб-розробка', 'f.s2': 'Мобільні додатки', 'f.s3': 'UI/UX Дизайн',
    'f.company': 'Компанія', 'f.c1': 'Про нас', 'f.c2': 'Портфоліо', 'f.c3': 'Контакт',
    'f.copyright': '© 2026 Phantoms IT. Усі права захищені.',
    'f.privacy': 'Політика конфіденційності', 'f.terms': 'Умови використання',
    'vm.soon': 'Відео незабаром',
  }
};

/* ---------- VIDEO PROJECT DATA ---------- */
const vpData = {
  vp1: { video: '', descKey: 'vp1' },
  vp2: { video: '', descKey: 'vp2' },
  vp3: { video: '', descKey: 'vp3' },
  vp4: { video: '', descKey: 'vp4' },
  vp5: { video: '', descKey: 'vp5' },
};

let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang === 'uk' ? 'uk' : lang === 'ru' ? 'ru' : 'en';
}

/* ---------- PRELOADER ---------- */
window.addEventListener('load', () => {
  const loader = document.getElementById('preloader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('done');
      setTimeout(() => loader.remove(), 600);
    }, 800);
  }
});

/* ---------- HEADER SCROLL ---------- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header && header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ---------- BURGER ---------- */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    nav.classList.remove('open');
  }));
}

/* ---------- ACTIVE NAV ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
function setActiveNav() {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}
window.addEventListener('scroll', setActiveNav, { passive: true });

/* ---------- REVEAL ---------- */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ---------- COUNTER (no counters currently but kept for future use) ---------- */

/* ---------- SMOOTH SCROLL ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  });
});

/* ---------- BACK TO TOP ---------- */
const btt = document.getElementById('btt');
window.addEventListener('scroll', () => btt && btt.classList.toggle('show', window.scrollY > 500), { passive: true });
btt && btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- CONTACT FORM ---------- */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('btnText');
    const success = document.getElementById('fSuccess');
    const orig = btn ? btn.textContent : 'Send Message';
    if (btn) btn.textContent = 'Sending...';
    const data = new FormData(form);
    const body = {};
    data.forEach((v, k) => body[k] = v);
    try {
      await fetch('https://formsubmit.co/ajax/reflexmeapp@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(body)
      });
      form.reset();
      if (success) { success.style.display = 'flex'; setTimeout(() => success.style.display = 'none', 5000); }
    } catch (_) {}
    if (btn) btn.textContent = orig;
  });
}

/* ---------- LANG SWITCHER ---------- */
document.getElementById('langSwitcher') && document.getElementById('langSwitcher').addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  applyLang(btn.dataset.lang);
});

/* ---------- VIDEO MODAL ---------- */
const modal = document.getElementById('videoModal');
const vmIframe = document.getElementById('vmIframe');
const vmNoVideo = document.getElementById('vmNoVideo');
const vmCat = document.getElementById('vmCat');
const vmTitle = document.getElementById('vmTitle');
const vmDesc = document.getElementById('vmDesc');

function openModal(key) {
  const d = vpData[key];
  if (!d) return;
  const t = translations[currentLang];
  const catKey  = d.descKey + '.cat';
  const titleKey = d.descKey + '.title';
  const shortKey = d.descKey + '.short';
  if (vmCat)   vmCat.textContent   = t[catKey]   || '';
  if (vmTitle) vmTitle.textContent = t[titleKey] || '';
  if (vmDesc)  vmDesc.textContent  = t[shortKey] || '';
  if (d.video) {
    vmIframe.src = d.video;
    vmIframe.style.display = 'block';
    if (vmNoVideo) vmNoVideo.style.display = 'none';
  } else {
    vmIframe.src = '';
    vmIframe.style.display = 'none';
    if (vmNoVideo) vmNoVideo.style.display = 'flex';
  }
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { if (vmIframe) vmIframe.src = ''; }, 300);
}

document.querySelectorAll('.vp-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.key));
});

document.getElementById('vmClose') && document.getElementById('vmClose').addEventListener('click', closeModal);
document.getElementById('vmOverlay') && document.getElementById('vmOverlay').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* initial language */
applyLang('en');
