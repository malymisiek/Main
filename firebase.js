import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqG4Kll4xRi0JhdPIdzoO4JzoE9ZWL_24",
  authDomain: "polacyrodacydatabase.firebaseapp.com",
  databaseURL: "https://polacyrodacydatabase-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "polacyrodacydatabase",
  storageBucket: "polacyrodacydatabase.firebasestorage.app",
  messagingSenderId: "339075928168",
  appId: "1:339075928168:web:b39b8351cee072eeb8ebdd",
  measurementId: "G-Z8X920B1YP"
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Pobieranie turniejów
export function loadTournaments() {
    const tournamentsRef = ref(db, "turnieje"); 
    const tournamentsList = document.getElementById("tournament-list");

    onValue(tournamentsRef, (snapshot) => {
        const data = snapshot.val();
        tournamentsList.innerHTML = ""; 

        for (let key in data) {
            let div = document.createElement("div");
            div.classList.add("tournament-item");

            let link = document.createElement("a");
            link.href = data[key].link;
            link.textContent = `${data[key].nazwa} - ${data[key].data}`;

            div.appendChild(link);
            tournamentsList.appendChild(div);
        }
    });
}
