document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
    const langIcon = document.getElementById("lang-icon");
 
    // Theme icon URLs
    const sunIcon = "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png";
    const moonIcon = "https://img.icons8.com/ios-filled/50/moon-symbol.png";
    
    // Language flag URLs
    const ukFlag = "https://cdn3.iconfinder.com/data/icons/world-flags-square-vol-3/48/United_Kingdom-512.png";
    const latvianFlag = "https://myflag.com.au/wp-content/uploads/latvia-national-flag.jpg";
    
    // Get current page from URL or title
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        if (filename === 'programesana.html' || document.title.includes('Programmēšanas')) return 'programming';
        if (filename === 'os.html' || document.title.includes('Operētājsistēmas')) return 'os';
        if (filename === 'tikli.html' || document.title.includes('Tīkla')) return 'network';
        if (filename === 'admin.html' || document.title.includes('Administrēšana')) return 'admin';
        return 'home';
    }
    
    // Translation data
    const translations = {
        lv: {
            // Common navigation and footer
            nav: {
                home: "Sākums",
                programming: "Programmēšanas valodas",
                os: "Operētājsistēmas",
                network: "Tīkla iekārtas",
                admin: "Administrēšana"
            },
            footer: "Sekojiet man:",
            
            // Home page
            home: {
                title: "Mana izaugsme Latvijas Universitātē",
                heading: "Mana izaugsme <br/>Latvijas Universitātē",
                aboutTitle: "Par mani",
                aboutText: "Mani sauc Alise Misiņa un es pašlaik studēju bakalaura programmā \"Datorzinātnes\" trešajā kursā. Esmu ieguvusi profesionālo izglītibu Datortīklu un datorsistēmu administrēšanā. Pašlaik arī bakalaura programmā studēju Informācijas tehnoloģiju novirzienā. <br><br> Esmu aktīva studentu pārstāvniecībā, patīk galda spēles un taisīt pasākumus. Esmu entuziastiska un gatava jaunām idejām un jauniem izaicinājumiem."
            },
            
            // Programming page
            programming: {
                title: "Programmēšanas valodas",
                heading: "Programmēšanas valodas",
                intro: "Sava novirziena izvēles dēļ, daudz ar programmēšanu nenodarbojos, bet tas, ko programmēšana spēj sniegt ar loģiskās domāšanas attīstīšanu ir vērtīgi. Studiju laikā es esmu apguvusi vairāku programmēšanas valodu pamatus uz kuriem man būs iespēja būvēt nākotnē.",
                sections: {
                    python: {
                        title: "Python",
                        text: "Python ir augsta līmeņa, daudzpusīga valoda, ko izmanto datu zinātnē, tīmekļa izstrādē un mākslīgajā intelektā. Šo valodu pirmo reizi sāku apgūt jau vidusskolas laikā, toties iespēju nostiprināt pamatus man sniedza kursi kā \"Algoritmi un programmēšanu\" un \"Dziļās mašīnmācīšanās pamati\""
                    },
                    javascript: {
                        title: "JavaScript",
                        text: "JavaScript ir galvenā valoda dinamisku tīmekļa vietņu veidošanai un ir būtiska frontend izstrādē. Mājaslapu izstrādē vidusskolā biju darbojusies tikai ar HTML un CSS, tāpēc tieši universitātē apgūstot \"Tīmekļu tehnoloģijas I\", tiku vairāk iegūt pamatus Javascript."
                    },
                    java: {
                        title: "Java",
                        text: "Java ir objektorientēta valoda, ko bieži izmanto lielu sistēmu un Android lietotņu izstrādē. Tieši šīs valodas apgūšanu es uzsāku tikai trešajā kursā. Par Java bija iespēja pamatus iegūt \"Objektorientētā programmēšana\" kursā."
                    },
                    cpp: {
                        title: "C++",
                        text: "C++ ir augstas veiktspējas valoda, ideāli piemērota sistēmu programmēšanai un spēļu izstrādei. Šī valoda ir tā, kuru visi mani kursabiedri un es pati uzsākām programmēšanas gaitas studiju ietvaros. C++ tika mums mācīts vairākos kursos, tādēļ šīs valodas pamati mums ir kārtīgi nostiprināti."
                    },
                    c: {
                        title: "C",
                        text: "C ir zema līmeņa programmēšanas valoda. Ar C valodu pirmo reizi saskāros kursā \"Linux sistēmu programmēšana\". C ir sarežģīta valoda, tāpēc esmu pateicīga, ka bija iespēja iegūt tieši šīs valodas pamatus studiju ietvaros. Tālāk ar šo valodu saskāros jau kursā \"Bezvadu sensoru tīkli\"."
                    }
                }
            },
            
            // Operating Systems page
            os: {
                title: "Operētājsistēmas",
                heading: "Operētājsistēmas",
                intro: "Operētājsistēmas ir pamata programmatūra, kas pārvalda datora resursus un atvieglo lietotāja mijiedarbību ar ierīci. Studiju un ārpus studiju aktivitātēm esmu izmantojusi dažādas operētājsistēmas, kur katrai ir savs mērķis.",
                sections: {
                    windows: {
                        title: "Windows",
                        text: "Populāra operētājsistēma, kas tiek izmantota gan personālajos datoros, gan uzņēmumos. Ar šo operētājsistēmu es strādāju ikdienā. Microsoft programmatūras tiek regulāri izmantotas gan studiju ietvaros, gan darba ietvaros. Windows piedāvā ļoti daudz dažādas ērtas iespējas, toties ir lietas, kuras es nevaru realizēt un nākas vērsties pie citām operētājsistēmām."
                    },
                    ubuntu: {
                        title: "Ubuntu Linux",
                        text: "Ubuntu Linux ir standarta Linux operētājsistēmas versija. Esmu ne tikai ar Ubuntu parasto versiju strādājusi, bet arī ar Ubuntu serveri. Ubuntu serveri izmantoju kursā \"Datortīklu administrēšana\". Ubuntu Linux parasto versiju es lietoju kursā \"Operētājsistēmas\" un \"Bezvadu sensoru tīkli\". Lai varētu darboties ar šīm operētājsistēmām, es lietoju Virtual Machine."
                    },
                    kali: {
                        title: "Kali Linux",
                        text: "Kali Linux ir viens no Linux operētājsistēmas veidiem. Šis veids nāk ar ļoti daudz papildus programmatūrām, kuras ar izmantot Capture the Flag sacensībās, kā arī vispārīgi kiberdrošības nozarē."
                    }
                }
            },
            
            // Network page
            network: {
                title: "Tīkla iekārtas",
                heading: "Tīkla iekārtas",
                intro: "Tīkla iekārtas ir ierīces, kas nodrošina datu pārraidi starp dažādām ierīcēm un tīkliem. Lai tīkla iekārtas šo varētu realizēt, šajās iekārtās darbojas visāda veida protokoli, kas nodrošina realizāciju.",
                sections: {
                    router: {
                        title: "Maršrutētājs",
                        text: "Nodrošina savienojumu starp dažādiem tīkliem un pārvalda datu pārsūtīšanu. Maršrutētājs ir trešā līmeņa tīkla iekārta, kura virza IP paketes."
                    },
                    switch: {
                        title: "Komutators",
                        text: "Pievieno vairākas ierīces vienā tīklā un nodrošina to savstarpējo saziņu. Komutators ir otrā līmeņa tīkla iekārta. Eksistē komutatori, kuri arī spēj darboties trešajā OSI līmenī."
                    }
                }
            },
            
            // Admin page
            admin: {
                title: "Administrēšana",
                heading: "Administrēšana",
                intro: "Sistēmu administrēšana ietver serveru, lietotāju, tīklu un drošības pārvaldību. Pati es esmu strādājusi uzņēmumā kā IT Service desk pusgadu. Tādā darbā liels uzsvars ir uz komunikāciju ar lietotājiem, kā arī spēju izprast dažādas sistēmas ar kurām var paveikt uzdotos uzdevumus.",
                sections: {
                    ad: {
                        title: "Active directory",
                        text: "Active directory es lietoju sava darba ietvaros pusgadu. Caur šo programmatūru ir iespēja veidot lietotājkontus, grupas utml. Active directory ir iespēja norādīt visāda veida informāciju par lietotāju."
                    },
                    sap: {
                        title: "SAP",
                        text: "Arī SAP tika lietots mana darba ietvaros, kur arī es lielākoties strādāju ar piekļuvu piešķiršanu attiecīgiem kontiem, kā arī kontu izveide."
                    },
                    communication: {
                        title: "Komunikācija ar lietotājiem",
                        text: "Vislielākais darbs esot administratoram vai arī IT service desk, ir komunikācija ar lietotājiem. Ir jāspēj ļoti skaidri uzdot jautājumus, lai varētu veiksmīgi atrast problēmu saknes, kā arī nodrošināt risinājumu. Bieži vien ir jāveic papildus komunikācija, lai varētu noskaidrot detaļas, kuras bieži vien Ticketing sistēmā netiek norādītas."
                    }
                }
            }
        },
        
        en: {
            // Common navigation and footer
            nav: {
                home: "Home",
                programming: "Programming Languages",
                os: "Operating Systems",
                network: "Network Devices",
                admin: "Administration"
            },
            footer: "Follow me:",
            
            // Home page
            home: {
                title: "My Growth at the University of Latvia",
                heading: "My Growth <br/>at the University of Latvia",
                aboutTitle: "About me",
                aboutText: "My name is Alise Misiņa and I am currently studying in the third year of the bachelor's program \"Computer Science\". I have obtained professional education in Computer Networks and Computer Systems Administration. Currently, I am also studying in the bachelor's program in Information Technology direction. <br><br> I am active in student representation, I enjoy board games and organizing events. I am enthusiastic and ready for new ideas and new challenges."
            },
            
            // Programming page
            programming: {
                title: "Programming Languages",
                heading: "Programming Languages",
                intro: "Due to my field of study choice, I don't work much with programming, but what programming can provide in developing logical thinking is valuable. During my studies, I have learned the basics of several programming languages that I will be able to build upon in the future.",
                sections: {
                    python: {
                        title: "Python",
                        text: "Python is a high-level, versatile language used in data science, web development, and artificial intelligence. I first started learning this language in high school, but I had the opportunity to strengthen my foundations through courses like \"Algorithms and Programming\" and \"Deep Learning Fundamentals\"."
                    },
                    javascript: {
                        title: "JavaScript",
                        text: "JavaScript is the main language for creating dynamic websites and is essential in frontend development. In high school, I had only worked with HTML and CSS in website development, so it was specifically at university while taking \"Web Technologies I\" that I gained more JavaScript fundamentals."
                    },
                    java: {
                        title: "Java",
                        text: "Java is an object-oriented language often used for large system and Android application development. I only started learning this language in my third year. I had the opportunity to learn Java basics in the \"Object-Oriented Programming\" course."
                    },
                    cpp: {
                        title: "C++",
                        text: "C++ is a high-performance language ideally suited for systems programming and game development. This is the language that all my coursemates and I started our programming journey with during our studies. C++ was taught to us in several courses, so our foundations in this language are well established."
                    },
                    c: {
                        title: "C",
                        text: "C is a low-level programming language. I first encountered the C language in the \"Linux System Programming\" course. C is a complex language, so I am grateful that I had the opportunity to learn the basics of this particular language during my studies. I later encountered this language again in the \"Wireless Sensor Networks\" course."
                    }
                }
            },
            
            // Operating Systems page
            os: {
                title: "Operating Systems",
                heading: "Operating Systems",
                intro: "Operating systems are fundamental software that manages computer resources and facilitates user interaction with the device. For my studies and extracurricular activities, I have used various operating systems, each with its own purpose.",
                sections: {
                    windows: {
                        title: "Windows",
                        text: "A popular operating system used in both personal computers and businesses. I work with this operating system daily. Microsoft software is regularly used both in studies and at work. Windows offers many different convenient features, but there are things I cannot accomplish and have to turn to other operating systems."
                    },
                    ubuntu: {
                        title: "Ubuntu Linux",
                        text: "Ubuntu Linux is a standard version of the Linux operating system. I have worked not only with the regular Ubuntu version but also with Ubuntu Server. I used Ubuntu Server in the \"Computer Network Administration\" course. I used the regular Ubuntu Linux version in the \"Operating Systems\" and \"Wireless Sensor Networks\" courses. To work with these operating systems, I use Virtual Machine."
                    },
                    kali: {
                        title: "Kali Linux",
                        text: "Kali Linux is one of the Linux operating system types. This type comes with many additional software programs that can be used in Capture the Flag competitions, as well as generally in the cybersecurity field."
                    }
                }
            },
            
            // Network page
            network: {
                title: "Network Devices",
                heading: "Network Devices",
                intro: "Network devices are equipment that ensure data transmission between various devices and networks. For network devices to accomplish this, various types of protocols operate in these devices that ensure implementation.",
                sections: {
                    router: {
                        title: "Router",
                        text: "Provides connection between different networks and manages data forwarding. A router is a third-layer network device that forwards IP packets."
                    },
                    switch: {
                        title: "Switch",
                        text: "Connects multiple devices in one network and ensures their mutual communication. A switch is a second-layer network device. There are switches that can also operate at the third OSI layer."
                    }
                }
            },
            
            // Admin page
            admin: {
                title: "Administration",
                heading: "Administration",
                intro: "System administration includes server, user, network, and security management. I myself have worked at a company as IT Service desk for half a year. In such work, great emphasis is placed on communication with users, as well as the ability to understand various systems with which assigned tasks can be accomplished.",
                sections: {
                    ad: {
                        title: "Active Directory",
                        text: "I used Active Directory in my work for half a year. Through this software, it is possible to create user accounts, groups, etc. Active Directory allows you to specify various types of information about the user."
                    },
                    sap: {
                        title: "SAP",
                        text: "SAP was also used in my work, where I mostly worked with granting access to respective accounts, as well as account creation."
                    },
                    communication: {
                        title: "User Communication",
                        text: "The biggest job of being an administrator or IT service desk is communication with users. You need to be able to ask very clear questions in order to successfully find the root of the problem, as well as provide a solution. Often additional communication is needed to clarify details that are often not specified in the Ticketing system."
                    }
                }
            }
        }
    };
    
    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeIcon.src = sunIcon;
    }
    
    // Load saved language
    const savedLang = localStorage.getItem("language") || "lv";
    if (savedLang === "en") {
        translatePage("en");
        langIcon.src = latvianFlag;
    }
 
    // Theme toggle functionality
    document.getElementById("theme-toggle").addEventListener("click", () => {
        const isDark = body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeIcon.src = isDark ? sunIcon : moonIcon;
    });
    
    // Language toggle functionality
    document.getElementById("lang").addEventListener("click", () => {
        const currentLang = localStorage.getItem("language") || "lv";
        const newLang = currentLang === "lv" ? "en" : "lv";
        
        translatePage(newLang);
        localStorage.setItem("language", newLang);
        
        // Update flag icon
        langIcon.src = newLang === "en" ? latvianFlag : ukFlag;
    });
    
    // Translation function
    function translatePage(lang) {
        const t = translations[lang];
        const currentPage = getCurrentPage();
        
        // Update page title
        if (currentPage === 'home') {
            document.title = t.home.title;
        } else {
            document.title = t[currentPage].title;
        }
        
        // Update navigation (common to all pages)
        const navLinks = document.querySelectorAll('.nav-text a');
        const navTexts = Object.values(t.nav);
        navLinks.forEach((link, index) => {
            if (navTexts[index]) {
                link.textContent = navTexts[index];
            }
        });
        
        // Update footer (common to all pages)
        const footerText = document.querySelector('footer p');
        if (footerText) {
            footerText.textContent = t.footer;
        }
        
        // Page-specific translations
        if (currentPage === 'home') {
            // Home page specific elements
            const mainHeading = document.querySelector('.virsraksts h1 b');
            if (mainHeading) {
                mainHeading.innerHTML = t.home.heading;
            }
            
            const aboutTitle = document.querySelector('main h3 b');
            if (aboutTitle) {
                aboutTitle.textContent = t.home.aboutTitle;
            }
            
            const aboutText = document.querySelector('main p');
            if (aboutText) {
                aboutText.innerHTML = t.home.aboutText;
            }
        } else {
            // Other pages structure
            const pageTranslation = t[currentPage];
            
            // Update main heading
            const mainHeading = document.querySelector('.nosaukums');
            if (mainHeading) {
                mainHeading.textContent = pageTranslation.heading;
            }
            
            // Update intro text
            const introText = document.querySelector('.prieksvards p');
            if (introText) {
                introText.textContent = pageTranslation.intro;
            }
            
            // Update sections based on page type
            if (currentPage === 'programming') {
                const sections = document.querySelectorAll('.row');
                const sectionKeys = ['python', 'javascript', 'java', 'cpp', 'c'];
                
                sections.forEach((section, index) => {
                    const sectionKey = sectionKeys[index];
                    if (sectionKey && pageTranslation.sections[sectionKey]) {
                        const title = section.querySelector('h2');
                        const text = section.querySelector('p');
                        if (title) title.textContent = pageTranslation.sections[sectionKey].title;
                        if (text) text.textContent = pageTranslation.sections[sectionKey].text;
                    }
                });
            } else if (currentPage === 'os') {
                const sections = document.querySelectorAll('.row');
                const sectionKeys = ['windows', 'ubuntu', 'kali'];
                
                sections.forEach((section, index) => {
                    const sectionKey = sectionKeys[index];
                    if (sectionKey && pageTranslation.sections[sectionKey]) {
                        const title = section.querySelector('h2');
                        const text = section.querySelector('p');
                        if (title) title.textContent = pageTranslation.sections[sectionKey].title;
                        if (text) text.textContent = pageTranslation.sections[sectionKey].text;
                    }
                });
            } else if (currentPage === 'network') {
                const sections = document.querySelectorAll('.row');
                const sectionKeys = ['router', 'switch'];
                
                sections.forEach((section, index) => {
                    const sectionKey = sectionKeys[index];
                    if (sectionKey && pageTranslation.sections[sectionKey]) {
                        const title = section.querySelector('h2');
                        const text = section.querySelector('p');
                        if (title) title.textContent = pageTranslation.sections[sectionKey].title;
                        if (text) text.textContent = pageTranslation.sections[sectionKey].text;
                    }
                });
            } else if (currentPage === 'admin') {
                const sections = document.querySelectorAll('.row');
                const sectionKeys = ['ad', 'sap', 'communication'];
                
                sections.forEach((section, index) => {
                    const sectionKey = sectionKeys[index];
                    if (sectionKey && pageTranslation.sections[sectionKey]) {
                        const title = section.querySelector('h2');
                        const text = section.querySelector('p');
                        if (title) title.textContent = pageTranslation.sections[sectionKey].title;
                        if (text) text.textContent = pageTranslation.sections[sectionKey].text;
                    }
                });
            }
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
});