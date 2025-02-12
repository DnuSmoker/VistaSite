// Function to open the sidebar
function openNav() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.transform = "translateX(-340px)"; // Move the sidebar into view
}

// Function to close the sidebar
function closeNav() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.transform = "translateX(0)"; // Move the sidebar out of view
}

// Translations for dynamic language switching
const translations = {
  ro: {
    title: "REGULILE SERVER-ULUI",
    description: "Mai jos sunt toate regulile pentru server-ul de minecraft!",
    home_rectangle_text: "Acasa",
    language_title: "| LIMBA |",
    language_ro: "Română",
    language_en: "Engleza",
    settings_sidebar: "SETĂRI",
    retain: "RETINE!",
    retaindescription: "Prin jucarea pe VistaStudios, accepți automat aceste reguli și ești de acord să le urmezi. De asemenea, înțelegi că regulile pot suferi modificări în viitor. Toți jucătorii trebuie să respecte EULA-ul Minecraft înainte de a juca. Pedepsele vor fi aplicate în funcție de gravitatea încălcării regulilor și istoricul jucătorului. Nu vor exista excepții pentru nimeni, inclusiv pentru membrii staff-ului sau jucătorii cu rank. Pentru mai multe informații despre tichetele de suport, aplicarea regulilor și apeluri, te rugăm să consulți Discord-ul nostru de Suport.",
    playerbehavior: "Comportament al Jucătorului - 1",
    chat_comunication: "Chat & Comunicare - 1.1",
    chat_comunicationdescription: "Injuraturile ușoare sunt permise, dar folosirea excesivă a cuvintelor vulgare, discursurile de ură și limbajul ofensator nu sunt tolerate. Hărțuirea, bullying-ul și atacurile personale asupra altor jucători sau membri ai personalului sunt interzise. Spamming-ul, utilizarea excesivă a literelor mari și comportamentul disruptiv în chat nu sunt permise. Publicitatea altor servere Minecraft, servere Discord sau conținut extern fără permisiune este interzisă.",
    impersonation: "Uzurparea identității - 1.2",
    impersonationdescription: "Este strict interzis să te dai drept membru al staff-ului, administrator sau alt jucător, iar utilizarea unor nume de utilizator, titluri sau skin-uri asemănătoare în scop de imitare va duce la sancțiuni severe.",
    toxicity_unwantedbehavior: "Toxicitate & Comportament nedorit - 1.3",
    toxicity_unwantedbehaviordescription: "Toxicitatea extremă, inclusiv trolling-ul excesiv, amenințările și incitarea la violență, nu sunt tolerate, iar încurajarea autovătămării, sinuciderii sau violenței în viața reală va duce la ban permanent. De asemenea, orice formă de discriminare bazată pe rasă, gen, religie, naționalitate sau orientare sexuală este strict interzisă.",
    personalinformation_privacy: "Informații personale & Confidențialitate - 1.4",
    personalinformation_privacydescription: "Distribuirea informațiilor personale, (fie că sunt ale tale sau ale altora) pe chat, Discord, sau orice altă platformă legată de server, nu este permisă, iar doxxing-ul (scurgerea de date personale) va duce la un ban permanent imediat.",
    gameplay_fairplay: "Joc Corect şi Echitabil - 2",
    useofcheatshacks_exploits: "Utilizarea cheat-urilor, hack-urilor & exploatărilor - 2.1",
    useofcheatshacks_exploitsdescription: "Este strict interzisă utilizarea clienților hack, cheat-urilor, macro-urilor, pachetelor X-ray sau a oricărui alt avantaj incorect, iar orice mod care permite vizualizarea prin pereți, urmărirea jucătorilor invizibili sau oferă beneficii nejustificate nu este permis. De asemenea, jucătorii prinși exploatând bug-uri sau mecanici neintenționate pentru a obține un avantaj vor fi sever sancționați.",
    alternateaccounts: "Conturi alternative (Conturi Secundare) - 2.2",
    alternateaccountsdescription: "Fiecare jucător este limitat la un singur cont, iar conturile alternative sunt strict interzise. Dacă mai multe persoane joacă de la aceeași adresă IP, este obligatoriu să deschidă un tichet de suport pentru o excepție. În plus, utilizarea unui cont alternativ pentru a evita o pedeapsă va duce la un ban permanent pentru toate conturile asociate.",
    bugabuse_exploits: "Abuz de bug-uri & exploatări - 2.3",
    bugabuse_exploitsdescription: "Dacă descoperi un bug sau o exploatare, trebuie să îl raportezi imediat echipei staff, iar utilizarea glitch-urilor serverului, mecanicilor neintenționate sau exploatărilor de duplicare pentru câștig personal este strict interzisă. Jucătorii prinși abuzând de astfel de exploatări vor primi sancțiuni severe, inclusiv eliminarea itemelor și ban-uri.",
    afk_automaticfarms: "AFK & ferme automate - 2.4",
    afk_automaticfarmsdescription: "Fermele AFK care generează iteme, experiență sau bani nu sunt permise, iar mecanismele redstone ce cauzează lag pot fi dezactivate sau eliminate. De asemenea, jucătorii prinși folosind metode excesive de auto-clicking vor fi sancționați.",
    serverrules_landmanagement: "Regulile serverului & Gestionarea terenului - 3",
    town_nationrules: "Reguli pentru orașe & națiuni - 3.1",
    town_nationrulesdescription: "Jucătorii trebuie să respecte alte orașe și națiuni, iar revendicarea terenurilor pentru a bloca expansiunea sau a hărțui alți jucători nu este permisă. De asemenea, revendicarea terenurilor fără utilizare reală (hollow claiming) este interzisă. Disputele legate de terenuri vor fi soluționate de staff de la caz la caz.",
    griefing_stealing: "Griefing & furt - 3.2",
    griefing_stealingdescription: "Griefing-ul intenționat sau distrugerea muncii altui jucător este strict interzisă. Furtul în interiorul unui oraș este permis, cu excepția cazului în care orașul are reguli clare împotriva acestuia. Dacă liderul unui oraș nu își protejează cuferele sau terenul, furtul nu va fi considerat o infracțiune. Totuși, distrugerea în masă, griefing-ul extrem sau intenția malițioasă vor fi pedepsite.",
    artificialislands_mapmodifications: "Insule artificiale & modificări ale hărții - 3.3",
    artificialislands_mapmodificationsdescription: "Jucătorii nu au voie să creeze insule artificiale, însă extinderea insulelor existente este permisă, dar proiectele mari pot necesita aprobarea staff-ului. În plus, eliminarea sau modificarea insulelor mari din viața reală (precum Cipru, Madagascar etc.) este strict interzisă.",
    portal_spawntrapping: "Portal trapping & spawn trapping - 3.4",
    portal_spawntrappingdescription: "Jucătorii nu au voie să blocheze alți jucători în interiorul portalurilor sau să le împiedice teleportarea dintr-un oraș. Uciderea repetată a jucătorilor blocați este considerată hărțuire și va fi sancționată.",
    economy_trade: "Economie & tranzacții - 4",
    realmoneytransaction: "Tranzacții cu bani reali - 4.1",
    realmoneytransactiondescription: "Vânzarea itemelor din joc, a terenurilor sau a rank-urilor pentru bani reali este strict interzisă.",
    scamming_fraud: "Înșelătorie & fraudă - 4.2",
    scamming_frauddescription: "Înșelarea altor jucători în orice formă, inclusiv schimburi false sau acorduri înșelătoare, nu este permisă, iar orice tranzacții frauduloase în joc vor duce la sancțiuni.",
    punishment_appeals: "Sancțiuni & Apeluri - 5",
    warning_bansystem: "Sistemul de avertizări & ban-uri - 5.1",
    warning_bansystemdescription: "Jucătorii primesc avertismente pentru încălcări minore, iar acumularea mai multor avertismente poate duce la ban-uri temporare sau permanente. Încălcările severe, cum ar fi hacking-ul, doxxing-ul sau griefing-ul major, vor duce la ban imediat.",
    appeals_tickets: "Apeluri & tichete - 5.2",
    appeals_ticketsdescription: "Jucătorii pot contesta mute-urile, ban-urile și alte sancțiuni prin serverul de suport Discord. Apelurile trebuie să includă dovezi (screenshots, clipuri video etc.) pentru a contesta o sancțiune, iar raportările false sau spam-ul cu tichete vor duce la sancțiuni suplimentare.",
    finalnotes: "IMPORTANT!",
    finalnotesdescription: "Regulile pot fi modificate în orice moment în funcție de nevoile serverului. Dacă nu ești sigur dacă ceva este permis, întreabă staff-ul înainte de a face acel lucru. Încălcarea regulilor poate duce la mute, avertismente, ban-uri temporare sau ban-uri permanente, în funcție de gravitatea faptei. Pentru suport, apeluri și mai multe informații, vizitează serverul nostru de suport pe Discord.",
  },
  en: {
    title: "SERVER RULES",
    description: "Below are all the rules for the minecraft server!",
    home_rectangle_text: "Home",
    language_title: "| LANGUAGE |",
    language_ro: "Romanian",
    language_en: "English",
    settings_sidebar: "SETTINGS",
    retain: "RETAIN!",
    retaindescription: "By playing on VistaStudios, you automatically acknowledge these rules and agree to follow them. You also understand that rules may change in the future. All players must follow the Minecraft EULA before playing. Punishments will be issued based on the severity of the rule violation and the player’s history. No exceptions will be made for anyone, including staff members or ranked players. For more information about support tickets, rule enforcement, and appeals, please refer to our Support Discord.",
    playerbehavior: "Player Behavior - 1",
    chat_comunication: "Chat & Communication - 1.1",
    chat_comunicationdescription: "Light cursing is allowed, but excessive swearing, hate speech, and offensive language are not tolerated. Harassment, bullying, and personal attacks on other players or staff are forbidden. Spamming, excessive use of caps, and disruptive behavior in chat are not allowed. Advertising other Minecraft servers, Discord servers, or external content without permission is forbidden.",
    impersonation: "Impersonation - 1.2",
    impersonationdescription: "Pretending to be a staff member, admin, or another player is strictly forbidden. Using similar usernames, titles, or disguises to impersonate someone else will result in severe punishment.",
    toxicity_unwantedbehavior: "Toxicity & Unwanted Behavior - 1.3",
    toxicity_unwantedbehaviordescription: "Severe toxicity, including excessive trolling, threats, and incitement of violence, is not tolerated. Encouraging self-harm, suicide, or real-life violence will lead to permanent bans. Any form of discrimination based on race, gender, religion, nationality, or sexual orientation is strictly prohibited.",
    personalinformation_privacy: "Personal Information & Privacy - 1.4",
    personalinformation_privacydescription: "Sharing personal information (yours or others) in chat, Discord, or any other server-related platform is not allowed. Doxxing (leaking personal data) will lead to immediate and permanent bans.",
    gameplay_fairplay: "Gameplay & Fair Play - 2",
    useofcheatshacks_exploits: "Use of Cheats, Hacks & Exploits - 2.1",
    useofcheatshacks_exploitsdescription: "Using hacked clients, cheats, macros, X-ray packs, or any unfair advantage is strictly forbidden. Any mod that gives unfair advantages (such as seeing through walls or tracking invisible players) is not allowed. Players caught using exploits or unintended mechanics to gain an unfair edge will be severely punished.",
    alternateaccounts: "Alternate Accounts ( Second Accounts ) - 2.2",
    alternateaccountsdescription: "Each player is limited to one account. Alternate accounts are strictly forbidden. If multiple people are playing from the same IP address, they must open a support ticket for an exception. Using an alt account to bypass a punishment will result in a permanent ban on all associated accounts.",
    bugabuse_exploits: "Bug Abuse & Exploits - 2.3",
    bugabuse_exploitsdescription: "If you discover a bug or exploit, you must report it to the staff team immediately. Using server glitches, unintended mechanics, or duplication exploits for personal gain is strictly forbidden. Players found abusing exploits will face severe punishments, including item removal and bans.",
    afk_automaticfarms: "AFK & Automatic Farms - 2.4",
    afk_automaticfarmsdescription: "AFK farms that generate items, experience, or money are not allowed. Redstone contraptions that cause lag may be disabled or removed. Players caught using excessive auto-clicking methods will be punished.", 
    serverrules_landmanagement: "Server Rules & Land Management - 3",
    town_nationrules: "Town & Nation Rules - 3.1",
    town_nationrulesdescription: "Players must respect other towns and nations. Claiming land to block expansion or harass other players is not allowed. Hollow claiming (claiming land in a way that blocks others without actual usage) is forbidden. Land disputes will be settled by staff on a case-by-case basis.",
    griefing_stealing: "Griefing & Stealing - 3.2",
    griefing_stealingdescription: "Intentional griefing or destroying another player’s work is strictly forbidden. Stealing inside a town is allowed unless the town has clear internal rules against it. If a town leader fails to protect their chests or land, theft will not be considered an offense. However, mass destruction, extreme griefing, or malicious intent will lead to punishments.",
    artificialislands_mapmodifications: "Artificial Islands & Map Modifications - 3.3",
    artificialislands_mapmodificationsdescription: "Players are not allowed to create artificial islands. Expanding existing islands is permitted, but staff approval may be required for large projects. Removing or modifying major real-world islands (such as Cyprus, Madagascar, etc.) is strictly forbidden",
    portal_spawntrapping: "Portal & Spawn Trapping - 3.4",
    portal_spawntrappingdescription: "Players may not trap others inside portals or prevent them from teleporting out of a town. Killing trapped players repeatedly is considered harassment and will be punished",
    economy_trade: "Economy & Trade - 4",
    realmoneytransaction: "Real Money Transactions - 4.1",
    realmoneytransactiondescription: "Selling in-game items, land, or ranks for real money is strictly prohibited.",
    scamming_fraud: " Scamming & Fraud - 4.2",
    scamming_frauddescription: "Scamming other players is not allowed in any form, including fake trades or misleading agreements. Any fraudulent in-game transactions will result in punishments.",
    punishment_appeals: "Punishments & Appeals - 5",
    warning_bansystem: "Warning & Ban System - 5.1",
    warning_bansystemdescription: "Players receive warnings for minor infractions. Accumulating multiple warnings may result in temporary or permanent bans. Severe violations (such as hacking, doxxing, or major griefing) will result in immediate bans",
    appeals_tickets: "Appeals & Tickets - 5.2",
    appeals_ticketsdescription: "Players may appeal mutes, bans, and other punishments via the Support Discord. Appeals must include evidence (screenshots, video clips, etc.) when disputing a punishment. False reports or spam tickets will lead to further punishment.",
    finalnotes: "IMPORTANT!",
    finalnotesdescription: "Rules are subject to change at any time based on server needs. If you are unsure whether something is allowed, ask staff before doing it. Breaking the rules may result in mutes, warnings, temporary bans, or permanent bans, depending on the severity of the offense. For support, appeals, and more information, please visit our Support Discord",
  }
};

// Function to change language dynamically
function setLanguage(language) {
  const lang = translations[language];

  // Update the page content
  document.getElementById('title').textContent = lang.title;
  document.getElementById('description').textContent = lang.description;
  document.getElementById('home_rectangle_text').textContent = lang.home_rectangle_text
  document.getElementById('settings_sidebar').textContent = lang.settings_sidebar;
  document.getElementById('language_title').textContent = lang.language_title;
  document.getElementById('language_ro').textContent = lang.language_ro;
  document.getElementById('language_en').textContent = lang.language_en;
  document.getElementById('retain').textContent = lang.retain   
  document.getElementById('retaindescription').textContent = lang.retaindescription
  document.getElementById('playerbehavior').textContent = lang.playerbehavior
  document.getElementById('chat_comunication').textContent = lang.chat_comunication
  document.getElementById('chat_comunicationdescription').textContent = lang.chat_comunicationdescription
  document.getElementById('impersonation').textContent = lang.impersonation
  document.getElementById('impersonationdescription').textContent = lang.impersonationdescription
  document.getElementById('toxicity_unwantedbehavior').textContent = lang.toxicity_unwantedbehavior
  document.getElementById('toxicity_unwantedbehaviordescription').textContent = lang.toxicity_unwantedbehaviordescription
  document.getElementById('personalinformation_privacy').textContent = lang.personalinformation_privacy
  document.getElementById('personalinformation_privacydescription').textContent = lang.personalinformation_privacydescription
  document.getElementById('gameplay_fairplay').textContent = lang.gameplay_fairplay
  document.getElementById('useofcheatshacks_exploits').textContent = lang.useofcheatshacks_exploits
  document.getElementById('useofcheatshacks_exploitsdescription').textContent = lang.useofcheatshacks_exploitsdescription
  document.getElementById('alternateaccounts').textContent = lang.alternateaccounts
  document.getElementById('alternateaccountsdescription').textContent = lang.alternateaccountsdescription
  document.getElementById('bugabuse_exploits').textContent = lang.bugabuse_exploits
  document.getElementById('bugabuse_exploitsdescription').textContent = lang.bugabuse_exploitsdescription
  document.getElementById('afk_automaticfarms').textContent = lang.afk_automaticfarms
  document.getElementById('afk_automaticfarmsdescription').textContent = lang.afk_automaticfarmsdescription
  document.getElementById('serverrules_landmanagement').textContent = lang.serverrules_landmanagement
  document.getElementById('town_nationrules').textContent = lang.town_nationrules
  document.getElementById('town_nationrulesdescription').textContent = lang.town_nationrulesdescription
  document.getElementById('griefing_stealing').textContent = lang.griefing_stealing
  document.getElementById('griefing_stealingdescription').textContent = lang.griefing_stealingdescription
  document.getElementById('artificialislands_mapmodifications').textContent = lang.artificialislands_mapmodifications
  document.getElementById('artificialislands_mapmodificationsdescription').textContent = lang.artificialislands_mapmodificationsdescription
  document.getElementById('portal_spawntrapping').textContent = lang.portal_spawntrapping
  document.getElementById('portal_spawntrappingdescription').textContent = lang.portal_spawntrappingdescription
  document.getElementById('economy_trade').textContent = lang.economy_trade
  document.getElementById('realmoneytransaction').textContent = lang.realmoneytransaction
  document.getElementById('realmoneytransactiondescription').textContent = lang.realmoneytransactiondescription
  document.getElementById('scamming_fraud').textContent = lang.scamming_fraud
  document.getElementById('scamming_frauddescription').textContent = lang.scamming_frauddescription
  document.getElementById('punishment_appeals').textContent = lang.punishment_appeals
  document.getElementById('warning_bansystem').textContent = lang.warning_bansystem
  document.getElementById('warning_bansystemdescription').textContent = lang.warning_bansystemdescription
  document.getElementById('appeals_tickets').textContent = lang.appeals_tickets
  document.getElementById('appeals_ticketsdescription').textContent = lang.appeals_ticketsdescription
  document.getElementById('finalnotes').textContent = lang.finalnotes
  document.getElementById('finalnotesdescription').textContent = lang.finalnotesdescription
}


// Function to save selected language to localStorage
function saveLanguage(language) {
  localStorage.setItem('selectedLanguage', language); // Save language in browser storage
  console.log(`Language "${language}" has been saved.`);
}

// Function to load saved language from localStorage
function loadLanguage() {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    setLanguage(savedLanguage); // Apply the saved language
    console.log(`Loaded saved language: "${savedLanguage}"`);
  } else {
    console.log("No language was saved previously. Default language will be used.");
  }
}

// Attach event listeners to language buttons
document.getElementById('language_ro').addEventListener('click', () => {
  saveLanguage('ro');
  setLanguage('ro');
});

document.getElementById('language_en').addEventListener('click', () => {
  saveLanguage('en');
  setLanguage('en');
});

document.addEventListener('DOMContentLoaded', () => {
  loadLanguage();
});