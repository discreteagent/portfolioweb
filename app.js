const translations = {
  en: {
    nav_bio:     "Bio",
    nav_edu:     "Education",
    nav_exp:     "Experience",
    nav_projects:"Projects",
    nav_lang:    "Languages",
    nav_skills:  "Skills",
    nav_contact: "Contact",

    role:        "Business & Economics Student",
    bio_heading: "Professional Summary",
    bio_text:    "Bachelor student at WU Wien with 2+ years of hands-on experience in multinational corporate environments. Highly interested in financial modeling, statistics and quantitative finance. Proven track record in process automation and managing complex B2B operations with high precision.",

    edu1_degree: "Bachelor in Business & Economics",
    edu1_focus:  "Focus: Macrofinance and Economic Modeling",
    edu2_degree: "High School Diploma (AHS Matura)",
    edu2_school: "Austrian School Prague",
    edu2_focus:  "Specialization: History and Mathematics",

    exp1_title: "Order Management Specialist",
    exp1_b1: "Managed large-scale B2B order flows, ensuring compliance with internal logistics protocols and delivery timelines.",
    exp1_b2: "Implemented a project for automated order confirmations, significantly reducing manual errors and improving data integrity.",
    exp1_b3: "Conducted performance evaluations for promotional campaigns, focusing on data-driven reporting.",

    exp2_title: "Customer Experience Specialist",
    exp2_b1: "Handled high-volume customer inquiries, developing efficient problem-solving strategies in a fast-paced environment.",
    exp2_b2: "Ensured high satisfaction levels through meticulous attention to detail and adherence to company service standards.",

    exp3_title:   "Front Office Receptionist",
    exp3_company: "Hotel Anette, Prague",
    exp3_b1: "Executed high-volume check-ins/outs, guest billing, and reservation management for an international clientele.",
    exp3_b2: "Proficient use of Cloudbeds and Oracle OPERA for room inventory, guest profiles, and financial reporting.",
    exp3_b3: "Reconciled daily transactions (night audit) and managed lobby bar service & POS transactions.",

    lng_russian: "Russian",
    lng_czech:   "Czech",
    lng_english: "English",
    lng_german:  "German",

    sl_advanced:   "Advanced",
    sl_proficient: "Proficient",
    sl_basic_1:    "Basic",
    sl_basic_2:    "Basic",
    sl_basic_3:    "Basic",

    contact_location: "Vienna, Austria",

    proj_lead:     "Selected academic work from my studies at WU Wien. Each entry links to the full written report.",
    proj1_title:   "Quantitative Methods II — Case Study",
    proj1_meta:    "WU – Wirtschaftsuniversität Wien · Group B3, Course 4902",
    proj1_intro:   "A four-person group project for the Quantitative Methods II course, carried out entirely in R. The brief consisted of two independent cases — one in computational finance, one in applied statistics — each requiring reproducible R code, careful interpretation of the output, and a formal written report.",
    proj1_case1_h: "Case I — Monte Carlo Valuation of a Leveraged Barrier Certificate",
    proj1_case1_p: "We estimated the fair value of a structured product whose payoff has no closed-form solution. Starting from 1,260 historical prices, we computed daily log-returns and estimated the drift and volatility of the underlying asset. We then simulated tens of thousands of possible year-end prices under a log-normal model, applied the certificate's payoff rule (a leveraged gain above the barrier, a fixed rebate below it), and approximated the value as the mean simulated payoff. We quantified the precision of that estimate through its variance and standard error, and showed empirically that the error decreases at a 1/n rate across sample sizes from 100 to 100,000 — connecting the result to the Central Limit Theorem. Finally, we computed investor risk metrics, including expected profit/loss and the 5% Value-at-Risk.",
    proj1_case2_h: "Case II — Lifestyle & Sleep-Quality Analysis",
    proj1_case2_p: "Using a dataset of 374 individuals, we produced a full descriptive analysis — distributions, frequency tables and visualisations — and then examined the relationships within the data. We compared sleep quality and stress across occupations and genders, built contingency tables of sleep disorders, and found a strong negative correlation (r ≈ −0.9) between stress and sleep quality. We formally tested two claims made by a sleep doctor using a one-sample proportion test and a one-sample t-test, rejecting both at the 5% level. Finally, we compared mean sleep duration and age across the three sleep-disorder categories using 99% confidence intervals to identify which group differences were statistically significant.",
    proj_link:     "View full report",
  },

  de: {
    nav_bio:     "Bio",
    nav_edu:     "Ausbildung",
    nav_exp:     "Berufserfahrung",
    nav_projects:"Projekte",
    nav_lang:    "Sprachen",
    nav_skills:  "Technische Kenntnisse",
    nav_contact: "Kontakt",

    role:        "Student der Betriebswirtschaft & Volkswirtschaft",
    bio_heading: "Professionelles Profil",
    bio_text:    "Bachelorstudent an der Wirtschaftsuniversität Wien mit über 2 Jahren Praxiserfahrung in multinationalen Konzernumgebungen. Starkes Interesse an Finanzmodellierung, Statistik und quantitativer Finanzwirtschaft. Nachgewiesene Erfolge in der Prozessautomatisierung und der präzisen Abwicklung komplexer B2B-Operationen.",

    edu1_degree: "Bachelor in Business & Economics",
    edu1_focus:  "Schwerpunkt: Makrofinanzen und ökonomische Modellierung",
    edu2_degree: "Reifezeugnis (AHS Matura)",
    edu2_school: "Österreichische Schule Prag",
    edu2_focus:  "Spezialisierung: Geschichte und Mathematik",

    exp1_title: "Spezialist für Auftragsmanagement",
    exp1_b1: "Verantwortung für großvolumige B2B-Bestellflüsse unter Einhaltung interner Logistikprotokolle und Lieferfristen.",
    exp1_b2: "Implementierung eines Projekts zur automatisierten Auftragsbestätigung, was manuelle Fehler signifikant reduzierte und die Datenintegrität verbesserte.",
    exp1_b3: "Durchführung von Leistungsbewertungen für Werbekampagnen mit Fokus auf datengestütztes Reporting.",

    exp2_title: "Spezialist für Customer Experience",
    exp2_b1: "Bearbeitung zahlreicher Kundenanfragen und Entwicklung effizienter Problemlösungsstrategien in einem dynamischen Umfeld.",
    exp2_b2: "Sicherstellung hoher Kundenzufriedenheit durch Detailgenauigkeit und Einhaltung von Servicestandards.",

    exp3_title:   "Rezeptionist im Front Office",
    exp3_company: "Hotel Anette, Prag",
    exp3_b1: "Durchführung von Check-ins/outs, Gästenabrechnungen und Reservierungsmanagement für internationale Gäste.",
    exp3_b2: "Sicherer Umgang mit Cloudbeds und Oracle OPERA für Zimmerkontingente, Gästeprofile und Finanzberichte.",
    exp3_b3: "Durchführung des Tagesabschlusses (Night Audit) sowie Betreuung des Lobby-Bar-Services und Kassenvorgänge.",

    lng_russian: "Russisch",
    lng_czech:   "Tschechisch",
    lng_english: "Englisch",
    lng_german:  "Deutsch",

    sl_advanced:   "Fortgeschritten",
    sl_proficient: "Versiert",
    sl_basic_1:    "Grundkenntnisse",
    sl_basic_2:    "Grundkenntnisse",
    sl_basic_3:    "Grundkenntnisse",

    contact_location: "Wien, Österreich",

    proj_lead:     "Ausgewählte akademische Arbeiten aus meinem Studium an der WU Wien. Jeder Eintrag verlinkt auf den vollständigen Bericht.",
    proj1_title:   "Quantitative Methoden II — Fallstudie",
    proj1_meta:    "WU – Wirtschaftsuniversität Wien · Gruppe B3, Kurs 4902",
    proj1_intro:   "Ein Gruppenprojekt mit vier Personen für den Kurs Quantitative Methoden II, vollständig in R umgesetzt. Die Aufgabenstellung bestand aus zwei unabhängigen Fällen — einem aus der computergestützten Finanzwirtschaft, einem aus der angewandten Statistik — die jeweils reproduzierbaren R-Code, eine sorgfältige Interpretation der Ergebnisse und einen formalen schriftlichen Bericht erforderten.",
    proj1_case1_h: "Fall I — Monte-Carlo-Bewertung eines Leveraged Barrier Certificate",
    proj1_case1_p: "Wir schätzten den fairen Wert eines strukturierten Produkts, dessen Auszahlung keine geschlossene Lösung besitzt. Ausgehend von 1.260 historischen Kursen berechneten wir tägliche Log-Renditen und schätzten Drift und Volatilität des Basiswerts. Anschließend simulierten wir Zehntausende möglicher Jahresendkurse unter einem lognormalen Modell, wendeten die Auszahlungsregel des Zertifikats an (ein gehebelter Gewinn oberhalb der Barriere, eine feste Rückzahlung darunter) und näherten den Wert als mittlere simulierte Auszahlung an. Wir quantifizierten die Genauigkeit dieser Schätzung über ihre Varianz und ihren Standardfehler und zeigten empirisch, dass der Fehler über Stichprobengrößen von 100 bis 100.000 mit einer Rate von 1/n abnimmt — was das Ergebnis mit dem Zentralen Grenzwertsatz verbindet. Abschließend berechneten wir Risikokennzahlen für Anleger, darunter den erwarteten Gewinn/Verlust und den 5%-Value-at-Risk.",
    proj1_case2_h: "Fall II — Analyse von Lebensstil & Schlafqualität",
    proj1_case2_p: "Mit einem Datensatz von 374 Personen erstellten wir eine vollständige deskriptive Analyse — Verteilungen, Häufigkeitstabellen und Visualisierungen — und untersuchten anschließend die Zusammenhänge in den Daten. Wir verglichen Schlafqualität und Stress über Berufe und Geschlechter hinweg, erstellten Kontingenztabellen zu Schlafstörungen und stellten eine starke negative Korrelation (r ≈ −0,9) zwischen Stress und Schlafqualität fest. Wir prüften zwei Behauptungen eines Schlafmediziners formal mit einem Ein-Stichproben-Anteilstest und einem Ein-Stichproben-t-Test und verwarfen beide auf dem 5%-Niveau. Schließlich verglichen wir die durchschnittliche Schlafdauer und das Alter über die drei Kategorien von Schlafstörungen hinweg mithilfe von 99%-Konfidenzintervallen, um statistisch signifikante Gruppenunterschiede zu identifizieren.",
    proj_link:     "Vollständigen Bericht ansehen",
  },

  cs: {
    nav_bio:     "Bio",
    nav_edu:     "Vzdělání",
    nav_exp:     "Pracovní zkušenosti",
    nav_projects:"Projekty",
    nav_lang:    "Jazyky",
    nav_skills:  "Technické dovednosti",
    nav_contact: "Kontakt",

    role:        "Student hospodářských věd a ekonomie",
    bio_heading: "Profesní shrnutí",
    bio_text:    "Student bakalářského studia na Vídeňské univerzitě ekonomie a obchodní administrativy (WU Wien) s více než dvouletou praxí v mezinárodním korporátním prostředí. Hluboký zájem o finanční modelování, statistiku a kvantitativní finance. Prokazatelné výsledky v oblasti automatizace procesů a precizního řízení komplexních B2B operací.",

    edu1_degree: "Bakalář v oboru Business & Economics",
    edu1_focus:  "Zaměření: Makrofinance a ekonomické modelování",
    edu2_degree: "Maturitní vysvědčení",
    edu2_school: "Rakouské gymnázium v Praze",
    edu2_focus:  "Specializace: Dějepis a matematika",

    exp1_title: "Specialista správy objednávek (Order Management Specialist)",
    exp1_b1: "Správa rozsáhlých B2B toků objednávek při zajištění souladu s interními logistickými protokoly a dodacími termíny.",
    exp1_b2: "Implementace projektu pro automatizované potvrzování objednávek, což vedlo k výraznému snížení manuálních chyb a zlepšení integrity dat.",
    exp1_b3: "Provádění analýz výkonnosti reklamních kampaní se zaměřením na reportování založené na datech.",

    exp2_title: "Specialista zákaznické zkušenosti (Customer Experience Specialist)",
    exp2_b1: "Vyřizování velkého objemu zákaznických dotazů a vývoj efektivních strategií řešení problémů v dynamickém prostředí.",
    exp2_b2: "Zajišťování vysoké úrovně spokojenosti skrze pečlivost a dodržování servisních standardů společnosti.",

    exp3_title:   "Recepční",
    exp3_company: "Hotel Anette, Praha",
    exp3_b1: "Zajišťování příjezdů a odjezdů hostů (check-in/out), fakturace a správa rezervací pro mezinárodní klientelu.",
    exp3_b2: "Pokročilé využití systémů Cloudbeds a Oracle OPERA pro správu pokojové kapacity, profilů hostů a finanční reporting.",
    exp3_b3: "Provádění denních uzávěrek (night audit) a obsluha lobby baru včetně správy pokladních transakcí.",

    lng_russian: "Ruština",
    lng_czech:   "Čeština",
    lng_english: "Angličtina",
    lng_german:  "Němčina",

    sl_advanced:   "Pokročilý",
    sl_proficient: "Zkušený",
    sl_basic_1:    "Základy",
    sl_basic_2:    "Základy",
    sl_basic_3:    "Základy",

    contact_location: "Vídeň, Rakousko",

    proj_lead:     "Vybrané akademické práce z mého studia na WU Wien. Každá položka odkazuje na úplnou zprávu.",
    proj1_title:   "Kvantitativní metody II — Případová studie",
    proj1_meta:    "WU – Wirtschaftsuniversität Wien · Skupina B3, Kurz 4902",
    proj1_intro:   "Skupinový projekt čtyř osob pro předmět Kvantitativní metody II, realizovaný kompletně v jazyce R. Zadání se skládalo ze dvou nezávislých případů — jednoho z výpočetních financí a jednoho z aplikované statistiky — z nichž každý vyžadoval reprodukovatelný kód v R, pečlivou interpretaci výsledků a formální písemnou zprávu.",
    proj1_case1_h: "Případ I — Ocenění pákového bariérového certifikátu metodou Monte Carlo",
    proj1_case1_p: "Odhadovali jsme reálnou hodnotu strukturovaného produktu, jehož výplata nemá uzavřené řešení. Vycházeli jsme z 1 260 historických cen, vypočítali denní logaritmické výnosy a odhadli drift a volatilitu podkladového aktiva. Poté jsme simulovali desetitisíce možných cen na konci roku v lognormálním modelu, aplikovali výplatní pravidlo certifikátu (pákový zisk nad bariérou, pevná náhrada pod ní) a hodnotu jsme aproximovali jako průměrnou simulovanou výplatu. Přesnost tohoto odhadu jsme kvantifikovali pomocí jeho rozptylu a standardní chyby a empiricky ukázali, že chyba klesá tempem 1/n napříč velikostmi vzorku od 100 do 100 000 — což výsledek propojuje s centrální limitní větou. Nakonec jsme vypočítali rizikové ukazatele pro investora, včetně očekávaného zisku/ztráty a 5% Value-at-Risk.",
    proj1_case2_h: "Případ II — Analýza životního stylu a kvality spánku",
    proj1_case2_p: "S datovou sadou 374 jedinců jsme vytvořili úplnou popisnou analýzu — rozdělení, frekvenční tabulky a vizualizace — a poté zkoumali vztahy v datech. Porovnali jsme kvalitu spánku a stres napříč povoláními a pohlavími, sestavili kontingenční tabulky poruch spánku a zjistili silnou zápornou korelaci (r ≈ −0,9) mezi stresem a kvalitou spánku. Dvě tvrzení spánkového lékaře jsme formálně otestovali jednovýběrovým testem podílu a jednovýběrovým t-testem a obě jsme na 5% hladině zamítli. Nakonec jsme porovnali průměrnou délku spánku a věk napříč třemi kategoriemi poruch spánku pomocí 99% intervalů spolehlivosti, abychom určili statisticky významné rozdíly mezi skupinami.",
    proj_link:     "Zobrazit celou zprávu",
  },
};

function setLang(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  const sel = document.getElementById("langSelect");
  if (sel) sel.value = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(localStorage.getItem("lang") || "en");
});
