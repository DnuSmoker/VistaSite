// Timer: Countdown to 20 April 2025, 15:00 Bucharest Time
const targetDate = new Date('2025-05-27T15:00:00+03:00').getTime(); // Bucharest time

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the countdown
  const countdownElement = document.getElementById('countdown');
  if (timeLeft > 0) {
    countdownElement.textContent = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  } else {
    // If the countdown is over
    countdownElement.textContent = "00:00:00:00";
    clearInterval(countdownInterval);
  }
}, 1000);

// Countdown for countdownsite
function updateCountdownSite() {
  const countdownSiteElement = document.getElementById('countdownsite');
  const targetDateSite = new Date('March 5, 2025 20:00:00 GMT+0200').getTime(); // Bucharest timezone

  function updateTime() {
    const now = new Date().getTime();
    const timeLeft = targetDateSite - now;

    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      countdownSiteElement.textContent = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
      countdownSiteElement.textContent = "00:00:00:00"; // Countdown finished
    }
  }

  setInterval(updateTime, 1000);
}

updateCountdownSite();

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
    title: "BUN VENIT",
    description: "Bun venit pe noul meniu principal unde poți explora diferite lucruri fenomenale! Descoperă aventuri captivante și bucură-te de experiențe unice.",
    server_opening: "DESCHIDEREA SERVER-ULUI DE MINECRAFT!",
    site_update: "UPDATE LA SITE! | V0.5 ⚙️",
    map: "/MAP",
    map_description: "Official mapa de pe server va fi mult mai detaliata! Vei putea vedea jucatori in timp real, sa vezi unde locuiesc fiecare si multe altele!",
    home: "/HOME",
    home_description: "Ai mai multe locuri mai speciale? Si iti pare rau sa le parasesti? Atunci solutia este aici! Descopera insfarsit optiunea de ati salva casele/locatile favorite! Ca sa te teleportezi oricand doresti.",
    sell: "/SELL",
    sell_description: "Descopera comanda in care poti vinde aproape orice item pentru bani virtuali in joc!",
    settings: "/SETTINGS",
    settings_description: "Preferinte? cu aceasta comanda poti opri/porni unele lucruri in joc (spre exemplu poti opri/opri sunetele de la bloc de note!)",
    language_title: "| LIMBA |",
    language_ro: "Română",
    language_en: "Engleza",
    settings_sidebar: "SETĂRI",
    countdown_site_text: "Timp rămas până la update-ul site-ului:",
    rules_rectangle_text: "Regulile Server-ului"
  },
  en: {
    title: "WELCOME",
    description: "Welcome to the new main menu where you can explore different phenomenal things! Discover captivating adventures and enjoy unique experiences.",
    server_opening: "MINECRAFT SERVER OPENING!",
    site_update: "SITE UPDATE! | V0.5 ⚙️",
    map: "/MAP",
    map_description: "The official map on the server will be much more detailed! You will be able to see players in real-time, see where everyone lives, and much more!",
    home: "/HOME",
    home_description: "Do you have more special places? And you feel sad to leave them? Then the solution is here! Discover the option to save your favorite homes/locations to teleport anytime you want.",
    sell: "/SELL",
    sell_description: "Discover the command where you can sell almost any item for virtual money in the game!",
    settings: "/SETTINGS",
    settings_description: "Preferences? With this command, you can turn things on/off in the game (for example, you can turn off/on note block sounds!)",
    language_title: "| LANGUAGE |",
    language_ro: "Romanian",
    language_en: "English",
    settings_sidebar: "SETTINGS",
    countdown_site_text: "Time remaining until site update:",
    rules_rectangle_text: "Server Rules"
  }
};

// Function to change language dynamically
function setLanguage(language) {
  const lang = translations[language];

  // Update the page content
  document.getElementById('title').textContent = lang.title;
  document.getElementById('description').textContent = lang.description;
  document.getElementById('server_opening').textContent = lang.server_opening;
  document.getElementById('site_update').textContent = lang.site_update;
  document.getElementById('map').textContent = lang.map;
  document.getElementById('map_description').textContent = lang.map_description;
  document.getElementById('home').textContent = lang.home;
  document.getElementById('home_description').textContent = lang.home_description;
  document.getElementById('sell').textContent = lang.sell;
  document.getElementById('sell_description').textContent = lang.sell_description;
  document.getElementById('settings').textContent = lang.settings;
  document.getElementById('settings_description').textContent = lang.settings_description;
  document.getElementById('language_title').textContent = lang.language_title;
  document.getElementById('language_ro').textContent = lang.language_ro;
  document.getElementById('language_en').textContent = lang.language_en;
  document.getElementById('settings_sidebar').textContent = lang.settings_sidebar;
  document.getElementById('rules_rectangle_text').textContent = lang.rules_rectangle_text;

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