import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pl: {
    translation: {
      about_me_nav: "O mnie",
      tech_nav: "Technologie",
      projects_nav: "Projekty",
      contact_nav: "Kontakt",
      learn_more: "Dowiedz się więcej",
      download_cv: "Pobierz CV",
      about_me_title: "O mnie",
      about_me_subtitle: "Cześć!",
      about_me_description:
        "Nazywam się Łukasz Męcała i jestem frontend developerem z zamiłowaniem do tworzenia nowoczesnych i dynamicznych stron internetowych. Moją główną specjalizacją jest React, Next.js, JavaScript (ES6+), HTML i CSS, ale równie dobrze odnajduję się w pracy z WordPressem, gdzie modyfikuję motywy, buduję customowe wtyczki i optymalizuję strony pod kątem wydajności. Rozwój to dla mnie kluczowa wartość – stale poszerzam swoje umiejętności w React Hooks, Redux, Tailwind CSS i TypeScript, aby tworzyć jeszcze lepsze i bardziej interaktywne interfejsy. Jednocześnie zgłębiam backendowe aspekty aplikacji, co pozwala mi lepiej rozumieć cały proces tworzenia stron i aplikacji webowych. Zwracam uwagę na czysty, wydajny kod i dobrą optymalizację, a każdy projekt traktuję jako okazję do nauki i doskonalenia swoich umiejętności. Łączę świat frontendu z WordPressem, dzięki czemu mogę dostarczać klientom nowoczesne i funkcjonalne rozwiązania.",
      hero_description:
        "Tworzę responsywne i estetyczne strony internetowe. Z pasją do kodowania przekształcam pomysły w dynamiczne rozwiązania. Sprawdź moje projekty, pobierz moje CV lub skontaktuj się ze mną!",
      services_title: "Usługi",

      frontend_title: "Nowoczesny Frontend",
      frontend_desc:
        "Tworzę dynamiczne i interaktywne aplikacje webowe z React.js i Next.js. Dbam o optymalizację wydajności, responsywność i dostępność stron.",
      wordpress_title: "WordPress i Optymalizacja",
      wordpress_desc:
        "Tworzę i personalizuję strony na WordPressie, dbając o ich szybkość, wydajność i zgodność z nowoczesnymi standardami.",
      uxui_title: "UX/UI i Projektowanie Interfejsów",
      uxui_desc:
        "Projektuję intuicyjne interfejsy i makiety stron, które poprawiają doświadczenia użytkowników i zwiększają zaangażowanie.",
      maintenance_title: "Optymalizacja i Utrzymanie Stron",
      maintenance_desc:
        "Zajmuję się bieżącą administracją stron, dbając o bezpieczeństwo, wydajność i aktualizacje.",
      tech_title: "Technologie",
      tech_subtitle:
        "Umiejętności, technologie, narzędzia z których korzystam:",
      contact_btn_text: "Skontaktuj się ze mną",
      projects_title: "Projekty",
      contact_title: "Kontakt",

      project_react_worldwise_app_title: "React Worldwise App",
      project_react_worldwise_app_description:
        "Aplikacja webowa umożliwiająca użytkownikom oznaczanie odwiedzonych miast na interaktywnej mapie. Zbudowana w React, zapewnia intuicyjny interfejs oraz dynamiczne aktualizowanie danych.",

      project_clothing_app_title: "Clothing App",
      project_clothing_app_description:
        "Prosta aplikacja e-commerce dla sklepu odzieżowego, umożliwiająca przeglądanie produktów oraz dodawanie ich do koszyka. Zbudowana w React z wykorzystaniem Firebase do przechowywania danych.",

      project_quiz_app_react_title: "Quiz Math",
      project_quiz_app_react_description:
        "Interaktywna aplikacja quizowa stworzona w React do nauki matematyki, wykorzystująca Firebase do przechowywania danych. Umożliwia użytkownikom odpowiadanie na pytania, śledzenie wyników oraz tworzenie własnych quizów. Posiada dynamiczny interfejs oraz system podpowiedzi, gdy użytkownik udzieli błędnej odpowiedzi.",

      project_portfolio_react_title: "Portfolio React",
      project_portfolio_react_description:
        "Moje pierwsze portfolio stworzone w React, prezentujące projekty, umiejętności oraz doświadczenie. Zawiera responsywny design oraz interaktywne animacje.",

      project_pupil_title: "Pupil",
      project_pupil_description:
        "Aplikacja webowa dla petsitterów i właścicieli zwierząt, pomagająca znaleźć zaufanych opiekunów dla swoich pupili. Zbudowana w React z wykorzystaniem Firebase do zarządzania danymi użytkowników. Projekt został wykonany do zaliczenia studiów podyplomowych, gdzie ja wykonałem część frontendową",

      project_react_quiz_usereducer_hook_title: "React Quiz",
      project_react_quiz_usereducer_hook_description:
        "Aplikacja quizowa w React, wykorzystująca hook useReducer do zarządzania stanem aplikacji. Posiada dynamiczny interfejs oraz funkcję śledzenia wyników użytkownika.",

      project_pizza_app_title: "Pizza App",
      project_pizza_app_description:
        "Aplikacja do zamawiania pizzy, stworzona w React. Umożliwia personalizację zamówień, śledzenie statusu realizacji oraz korzysta z API geolokalizacyjnego.",

      project_usepopcorn_title: "UsePopcorn",
      project_usepopcorn_description:
        "Prosta aplikacja filmowa stworzona w React, pozwalająca użytkownikom oznaczać obejrzane filmy i wystawiać im oceny w postaci gwiazdek. Wykorzystuje własne custom hooki, które usprawniają zarządzanie stanem aplikacji. Integruje się z API filmowym, umożliwiając wyszukiwanie tytułów i dodawanie ich do listy obejrzanych.",

      project_rekrutacja_adrespect_title: "Rekrutacja AdRespect",
      project_rekrutacja_adrespect_description:
        "Strona internetowa stworzona przy użyciu HTML, Bootrstrap(SCSS) i JavaScript, wykorzystująca bibliotekę Masonry do dynamicznej galerii zdjęć. W pełni responsywna, wykonana na potrzeby rekrutacyjne firmy AdRespect.",

      project_omnifood_title: "Omnifood",
      project_omnifood_description:
        "Landing page dla firmy cateringowej, stworzony z użyciem HTML, CSS i JavaScript. Charakteryzuje się nowoczesnym designem i pełną responsywnością.",

      project_bankist_app_title: "Bankist App",
      project_bankist_app_description:
        "Prosta aplikacja bankowa stworzona w HTML, CSS i JavaScript, oferująca podstawowe funkcjonalności zarządzania finansami.",

      project_forkify_title: "Forkify",
      project_forkify_description:
        "Aplikacja do wyszukiwania i zapisywania przepisów kulinarnych, wykorzystująca API przepisów. Zbudowana w JavaScript z nowoczesnym, przejrzystym interfejsem.",

      project_mapty_title: "Mapty",
      project_mapty_description:
        "Aplikacja do rejestrowania aktywności sportowych na mapie, wykorzystująca JavaScript oraz API geolokalizacyjne.",

      project_geotras_malbork_title: "GeoTras Malbork",
      project_geotras_malbork_description:
        "Strona internetowa firmy GeoTras Malbork, zajmującej się usługami geodezyjnymi. Zbudowana na WordPressie, zoptymalizowana pod SEO oraz w pełni responsywna.",

      project_medsal_title: "Medsal",
      project_medsal_description:
        "Strona internetowa firmy Medsal, oferującej usługi medyczne. Stworzona w WordPressie, zoptymalizowana pod SEO i dostosowana do urządzeń mobilnych.",

      project_plugin_title: "Wtyczka koła fortuny dla WordPress",
      project_plugin_description:
        "Dedykowana wtyczka WordPress stworzona w PHP i JavaScript dla strony promocyjnej centrów handlowych w Polsce i na Słowacji. Wtyczka umożliwia użytkownikom kręcenie Kołem Fortuny z dynamicznie zmniejszającą się liczbą nagród. Wtyczka blokuje możliwość wielokrotnego podawania tego samego numeru telefonu w formularzu oraz pozwala na dodawanie własnych kategorii nagród wraz z ich opisami i liczbą dostępnych sztuk.",
      show_code: "Zobacz kod",
      show_more_projects: "Pokaż więcej",
      hide_more_projects: "Pokaż mniej",
      contact_me_title: "Skontaktuj się!",
      contact_email: "E-mail",
      contact_phone: "Telefon",
      contact_resume: "CV",
      avaliable_status: "Dostępny 24/7",
      download_pdf: "Pobierz PDF",
      last_update_cv: "Ostatnia aktualizacaja: Październik 2025",
      contact_reply: "Odpowiadam w cigu 24h",
      contact_location: "Wrocław, Polska | Dostępny Zdalnie",
      title: "Łukasz Męcała - Frontend Developer | React, Next.js, WordPress",
      description:
        "Jestem frontend developerem specjalizującym się w React, Next.js i WordPressie. Tworzę dynamiczne, responsywne strony internetowe i aplikacje webowe.",
      keywords:
        "frontend developer, React, Next.js, WordPress, programowanie, strony internetowe, optymalizacja SEO, UX/UI",
    },
  },
  en: {
    translation: {
      about_me_nav: "About",
      tech_nav: "Technologies",
      projects_nav: "Projects",
      contact_nav: "Contact",
      learn_more: "Learn More",
      download_cv: "Download CV",
      about_me_title: "About Me",
      about_me_subtitle: "Hi!",
      about_me_description: `Hi, my name is Łuaksz Męcala and I am a frontend developer with a passion for creating modern and dynamic websites. My main specialization is React, Next.js, JavaScript (ES6+), HTML and CSS, but I'm equally comfortable working with WordPress, where I modify themes, build custom plugins and optimize sites for performance. Development is a key value for me - I'm constantly expanding my skills in React Hooks, Redux, Tailwind CSS and TypeScript to create even better and more interactive interfaces. At the same time, I'm exploring the backend aspects of applications, which allows me to better understand the entire process of developing websites and web applications. I pay attention to clean, efficient code and good optimization, and I treat every project as an opportunity to learn and improve my skills. I combine the world of frontend with WordPress, so I can deliver modern and functional solutions to clients. Translated with DeepL.com (free version)`,
      hero_description:
        "I create responsive and aesthetic websites. With a passion for coding, I transform ideas into dynamic solutions. Check out my projects, download my CV or contact me!",
      services_title: "Services",

      frontend_title: "Modern Frontend",
      frontend_desc:
        "I create dynamic and interactive web applications using React.js and Next.js. I ensure performance optimization, responsiveness, and accessibility.",
      wordpress_title: "WordPress and Optimization",
      wordpress_desc:
        "I create and customize WordPress-based websites, ensuring their speed, efficiency, and compliance with modern standards.",
      uxui_title: "UX/UI and Interface Design",
      uxui_desc:
        "I design intuitive interfaces and website mockups that improve user experience and engagement.",
      maintenance_title: "Optimization and Maintenance",
      maintenance_desc:
        "I handle ongoing website management, ensuring security, performance, and regular updates.",
      tech_title: "Technologies",
      tech_subtitle: "Skills, technologies, tools I use:",
      contact_btn_text: "Contact me",
      projects_title: "Projects",
      contact_title: "Contact",

      project_react_worldwise_app_title: "React Worldwise App",
      project_react_worldwise_app_description:
        "A web application that allows users to mark visited cities on an interactive map. Built in React, it provides an intuitive interface and dynamic data updates.",

      project_clothing_app_title: "Clothing App",
      project_clothing_app_description:
        "A simple e-commerce application for a clothing store, allowing users to browse products and add them to the cart. Built in React with Firebase for data storage.",

      project_quiz_app_react_title: "Quiz Math",
      project_quiz_app_react_description:
        "An interactive quiz application built in React for learning mathematics, using Firebase for data storage. It allows users to answer questions, track scores, and create their own quizzes. It features a dynamic interface and a hint system for incorrect answers.",

      project_portfolio_react_title: "Portfolio React",
      project_portfolio_react_description:
        "My first portfolio built in React, showcasing projects, skills, and experience. It features a responsive design and interactive animations.",

      project_pupil_title: "Pupil",
      project_pupil_description:
        "A web application for petsitters and pet owners to help find trusted caregivers for their pets. Built in React using Firebase to manage user data. The project was done for postgraduate credit, where I did the front-end part",

      project_react_quiz_usereducer_hook_title: "React Quiz",
      project_react_quiz_usereducer_hook_description:
        "A quiz application in React using the useReducer hook for state management. It features a dynamic interface and user score tracking.",

      project_pizza_app_title: "Pizza App",
      project_pizza_app_description:
        "A pizza ordering application built in React. It allows order customization, order tracking, and integrates with a geolocation API.",

      project_usepopcorn_title: "UsePopcorn",
      project_usepopcorn_description:
        "A simple movie application built in React, allowing users to mark watched movies and rate them with stars. It utilizes custom hooks for state management and integrates with a movie API for searching and adding titles to the watchlist.",

      project_rekrutacja_adrespect_title: "Rekrutacja AdRespect",
      project_rekrutacja_adrespect_description:
        "A website created using HTML, Bootstrap(SCSS), and JavaScript, featuring the Masonry library for a dynamic image gallery. Fully responsive and developed for AdRespect recruitment purposes.",

      project_omnifood_title: "Omnifood",
      project_omnifood_description:
        "A landing page for a catering company, built using HTML, CSS, and JavaScript. It features a modern design and full responsiveness.",

      project_bankist_app_title: "Bankist App",
      project_bankist_app_description:
        "A simple banking application built with HTML, CSS, and JavaScript, offering basic financial management functionalities.",

      project_forkify_title: "Forkify",
      project_forkify_description:
        "A recipe search and bookmarking application using a recipe API. Built in JavaScript with a modern, clean interface.",

      project_mapty_title: "Mapty",
      project_mapty_description:
        "An application for recording sports activities on a map, using JavaScript and a geolocation API.",

      project_geotras_malbork_title: "GeoTras Malbork",
      project_geotras_malbork_description:
        "The website of GeoTras Malbork, a company providing geodetic services. Built on WordPress, optimized for SEO, and fully responsive.",

      project_medsal_title: "Medsal",
      project_medsal_description:
        "The website of Medsal, a medical services company. Created in WordPress, optimized for SEO, and adapted for mobile devices.",

      project_plugin_title: "WordPress Fortune Wheel Plugin",
      project_plugin_description:
        "A custom WordPress plugin developed in PHP and JavaScript for a promotional campaign in shopping centers in Poland and Slovakia. The plugin allows users to spin a Fortune Wheel with dynamically decreasing prizes. It prevents multiple phone number submissions in the form and enables custom prize categories with descriptions and stock management.",
      show_code: "Code",
      show_more_projects: "Show more",
      hide_more_projects: "Hide",
      contact_me_title: "Get in touch!",
      contact_email: "E-mail",
      contact_phone: "Phone",
      contact_resume: "Resume",
      avaliable_status: "Available 24/7",
      download_pdf: "Download PDF",
      last_update_cv: "Last update: October 2025",
      contact_reply: "Reply within 24h",
      contact_location: "Wrocław, Poland | Remote Avaliable",
      title: "Łukasz Męcała - Frontend Developer | React, Next.js, WordPress",
      description:
        "I am a frontend developer specializing in React, Next.js, and WordPress. I create dynamic, responsive websites and web applications.",
      keywords:
        "frontend developer, React, Next.js, WordPress, programming, websites, SEO optimization, UX/UI",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
