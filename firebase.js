onValue(tournamentsRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
        tournamentsList.innerHTML = "<p>Brak turniejów do wyświetlenia.</p>";
        return;
    }
    tournamentsList.innerHTML = "";
    Object.keys(data).forEach((key) => {
        let div = document.createElement("div");
        div.classList.add("tournament-item");
        let link = document.createElement("a");
        link.href = data[key].link;
        link.textContent = `${data[key].nazwa} - ${data[key].data}`;
        div.appendChild(link);
        tournamentsList.appendChild(div);
    });
}, (error) => {
    console.error("Błąd Firebase:", error);
    tournamentsList.innerHTML = "<p>Nie udało się pobrać turniejów.</p>";
});
