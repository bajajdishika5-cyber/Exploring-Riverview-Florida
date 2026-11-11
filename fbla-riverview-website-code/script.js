// Explore Riverview, Florida — script.js
// This file is the ACTIONS of the website. Read it top to bottom.
// It does 5 simple jobs. Every job is in plain words, so you can explain it.

// ---- Job 1: highlight the menu link for the page you are on ----
// Each page is its own file now, so we match the menu link to this page's file name.
const links = document.querySelectorAll("nav a");
const here = (location.pathname.split("/").pop() || "index.html").split("?")[0].split("#")[0];
links.forEach((link) => {
  if (link.closest(".logo")) return; // the logo is not a menu item
  const href = link.getAttribute("href") || "";
  if (href.includes("#")) return; // "All Pages" link carries a #fragment
  const target = href.split("/").pop();
  if (target && target === here) link.classList.add("active");
});

// ---- Job 2: Secret Map filter — search, quest, and how far you will go ----
// Each secret spot is a <li> with data-quest="forest" and data-miles="5".
// We hide the spots that do not match, and count the ones that do.
const secretSearch = document.getElementById("secret-search");
const maxMiles = document.getElementById("max-miles");
const questButtons = document.querySelectorAll("[data-quest-btn]");
const secretCount = document.getElementById("secret-count");
let activeQuest = "all";

function filterSecrets() {
  const word = (secretSearch ? secretSearch.value : "").toLowerCase().trim();
  const limit = maxMiles ? Number(maxMiles.value) : 200;
  let shown = 0;
  let total = 0;
  document.querySelectorAll("#secret-map .card").forEach((card) => {
    let cardShown = 0;
    card.querySelectorAll("li").forEach((spot) => {
      total++;
      const questOk = activeQuest === "all" || spot.dataset.quest === activeQuest;
      const milesOk = Number(spot.dataset.miles || 200) <= limit;
      const textOk = !word || spot.textContent.toLowerCase().includes(word);
      const show = questOk && milesOk && textOk;
      spot.style.display = show ? "" : "none";
      if (show) { shown++; cardShown++; }
    });
    // Hide a whole quest card if none of its spots match.
    card.style.display = cardShown ? "" : "none";
  });
  if (secretCount) secretCount.textContent = "Showing " + shown + " secret spots";
  return shown;
}

if (secretSearch) secretSearch.addEventListener("input", filterSecrets);
if (maxMiles) maxMiles.addEventListener("change", filterSecrets);
questButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeQuest = btn.dataset.questBtn;
    questButtons.forEach((b) => b.classList.toggle("active", b === btn));
    filterSecrets();
  });
});

// ---- Job 3: My Trip list — tap + to save a spot, tap again to remove it ----
// The list is saved in the browser, so it is still there if you reload the page.
const TRIP_KEY = "riverview-my-trip";
let myTrip = [];
try { myTrip = JSON.parse(localStorage.getItem(TRIP_KEY) || "[]"); } catch (e) { myTrip = []; }
const myTripList = document.getElementById("my-trip-list");
const myTripCount = document.getElementById("my-trip-count");

function saveTrip() {
  try { localStorage.setItem(TRIP_KEY, JSON.stringify(myTrip)); } catch (e) {}
}
function renderTrip() {
  if (!myTripList) return;
  myTripList.innerHTML = "";
  if (myTrip.length === 0) {
    myTripList.innerHTML = "<li>No spots saved yet — tap <strong>+ My Trip</strong> on a secret spot.</li>";
  } else {
    myTrip.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name + " ";
      const remove = document.createElement("button");
      remove.textContent = "Remove";
      remove.className = "mini-btn";
      remove.addEventListener("click", () => toggleTrip(name));
      li.appendChild(remove);
      myTripList.appendChild(li);
    });
  }
  if (myTripCount) myTripCount.textContent = "My Trip: " + myTrip.length + " spot" + (myTrip.length === 1 ? "" : "s");
  // Keep every + button in sync: saved spots say "Saved ✓".
  document.querySelectorAll("#secret-map .add-btn").forEach((btn) => {
    const saved = myTrip.includes(btn.dataset.name);
    btn.textContent = saved ? "Saved ✓" : "+ My Trip";
    btn.classList.toggle("saved", saved);
  });
}
function toggleTrip(name) {
  myTrip = myTrip.includes(name) ? myTrip.filter((n) => n !== name) : [...myTrip, name];
  saveTrip();
  renderTrip();
}
// Add a "+ My Trip" button to every secret spot. The spot name is its bold title.
document.querySelectorAll("#secret-map .card li").forEach((spot) => {
  const title = spot.querySelector("strong");
  const name = title ? title.textContent.trim() : spot.textContent.slice(0, 40).trim();
  const btn = document.createElement("button");
  btn.className = "mini-btn add-btn";
  btn.dataset.name = name;
  btn.type = "button";
  btn.addEventListener("click", () => toggleTrip(name));
  spot.appendChild(document.createTextNode(" "));
  spot.appendChild(btn);
});
const clearTrip = document.getElementById("clear-trip");
if (clearTrip) clearTrip.addEventListener("click", () => { myTrip = []; saveTrip(); renderTrip(); });
renderTrip();
filterSecrets();

// ---- Job 4: Day Trip finder — type a place name, the table shows only matches ----
// Example: type "beach" and you only see beach day trips.
const tripSearch = document.getElementById("trip-search");
if (tripSearch) {
  tripSearch.addEventListener("input", () => {
    const word = tripSearch.value.toLowerCase().trim();
    document.querySelectorAll("#day-trips table tr").forEach((row, i) => {
      if (i === 0) return; // keep the header row
      row.style.display = !word || row.textContent.toLowerCase().includes(word) ? "" : "none";
    });
  });
}

// ---- Job 5: Back to top button — it appears after you scroll down ----
const topBtn = document.createElement("button");
topBtn.textContent = "↑ Top";
topBtn.id = "back-to-top";
topBtn.type = "button";
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.body.appendChild(topBtn);
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 600 ? "block" : "none";
});
topBtn.style.display = "none";
