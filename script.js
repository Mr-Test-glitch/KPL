document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".show-players1").forEach(button => {
        button.addEventListener("click", function () {
            let teamDiv = this.parentElement;
            let playersList = teamDiv.querySelector(".players-list");

            if (!playersList) {
                playersList = document.createElement("div");
                playersList.classList.add("players-list");
                playersList.innerHTML = `
                    <ul>
                        <li>Saif</li>
                        <li>Joj</li>
                        <li>Rifat</li>
                        <li>Rajib</li>
                        <li>Nayeem</li>
                        <li>Rafi</li>
                        <li>Saif(junior)</li>
                        <li>Saydi</li>
                    </ul>
                `;
                teamDiv.appendChild(playersList);
            }

            playersList.style.display = playersList.style.display === "block" ? "none" : "block";
        });
    });
    document.querySelectorAll(".show-players2").forEach(button => {
        button.addEventListener("click", function () {
            let teamDiv = this.parentElement;
            let playersList = teamDiv.querySelector(".players-list");
            //The Dominators
            if (!playersList) {
                playersList = document.createElement("div");
                playersList.classList.add("players-list");
                playersList.innerHTML = `
                    <ul>
                        <li>Rana M.</li>
                        <li>S.R. Sojib</li>
                        <li>MD. Shawon</li>
                        <li>Sayem</li>
                        <li>MD. Ashik</li>
                        <li>MD. Robin</li>
                        <li>MD. Sorif</li>
                        <li>MD. Rahim</li>
                    </ul>
                `;
                teamDiv.appendChild(playersList);
            }

            playersList.style.display = playersList.style.display === "block" ? "none" : "block";
        });
    });
    document.querySelectorAll(".show-players3").forEach(button => {
        button.addEventListener("click", function () {
            let teamDiv = this.parentElement;
            let playersList = teamDiv.querySelector(".players-list");
            //Senior Fighters
            if (!playersList) {
                playersList = document.createElement("div");
                playersList.classList.add("players-list");
                playersList.innerHTML = `
                    <ul>
                        <li>Tarek</li>
                        <li>Sazzad</li>
                        <li>Kazimolla</li>
                        <li>Mehedi</li>
                        <li>Kamrul</li>
                        <li>Tipu</li>
                        <li>Sujat</li>
                        <li>Shamim</li>
                        <li>MD. Dilowar</li>
                        <li>Himel</li>
                    </ul>
                `;
                teamDiv.appendChild(playersList);
            }

            playersList.style.display = playersList.style.display === "block" ? "none" : "block";
        });
    });
    document.querySelectorAll(".show-players4").forEach(button => {
        button.addEventListener("click", function () {
            let teamDiv = this.parentElement;
            let playersList = teamDiv.querySelector(".players-list");
            //Roaring Jaguar
            if (!playersList) {
                playersList = document.createElement("div");
                playersList.classList.add("players-list");
                playersList.innerHTML = `
                    <ul>
                        <li>MD Sumon</li>
                        <li>M.H. Opi</li>
                        <li>Arijit Singh</li>
                        <li>F. Rabbi</li>
                        <li>MD. Torikul</li>
                        <li>MD Sabbir</li>
                        <li>MD. Riaz</li>
                        <li>MD. Sumon</li>
                        <li>Hussain</li>
                    </ul>
                `;
                teamDiv.appendChild(playersList);
            }

            playersList.style.display = playersList.style.display === "block" ? "none" : "block";
        });
    });
    document.querySelectorAll(".show-players5").forEach(button => {
        button.addEventListener("click", function () {
            let teamDiv = this.parentElement;
            let playersList = teamDiv.querySelector(".players-list");
            //Deccan Fighters
            if (!playersList) {
                playersList = document.createElement("div");
                playersList.classList.add("players-list");
                playersList.innerHTML = `
                    <ul>
                        <li>Afif</li>
                        <li>Tomal</li>
                        <li>Shah Alom</li>
                        <li>Bijoy</li>
                        <li>Mursalin</li>
                        <li>Azaharul</li>
                        <li>Sunny</li>
                        <li>Onik</li>
                    </ul>
                `;
                teamDiv.appendChild(playersList);
            }

            playersList.style.display = playersList.style.display === "block" ? "none" : "block";
        });
    });
    document.querySelectorAll(".show-players6").forEach(button => {
        button.addEventListener("click", function () {
            let teamDiv = this.parentElement;
            let playersList = teamDiv.querySelector(".players-list");
            //Desert Eagles
            if (!playersList) {
                playersList = document.createElement("div");
                playersList.classList.add("players-list");
                playersList.innerHTML = `
                    <ul>
                        <li>MD. Anis</li>
                        <li>Tamim</li>
                        <li>K. Babu</li>
                        <li>Safayet</li>
                        <li>Siam</li>
                        <li>TT Tanvir</li>
                        <li>Robiul</li>
                        <li>Rahul</li>
                    </ul>
                `;
                teamDiv.appendChild(playersList);
            }

            playersList.style.display = playersList.style.display === "block" ? "none" : "block";
        });
    });
    document.querySelectorAll(".show-players7").forEach(button => {
        button.addEventListener("click", function () {
            let teamDiv = this.parentElement;
            let playersList = teamDiv.querySelector(".players-list");
            //Fearless Fighters
            if (!playersList) {
                playersList = document.createElement("div");
                playersList.classList.add("players-list");
                playersList.innerHTML = `
                    <ul>
                        <li>M. Murad</li>
                        <li>T. Rejuan</li>
                        <li>Nibir</li>
                        <li>Sultan</li>
                        <li>Hazi</li>
                        <li>Akash</li>
                        <li>Arafat</li>
                        <li>M.S. Mazharul</li>
                    </ul>
                `;
                teamDiv.appendChild(playersList);
            }

            playersList.style.display = playersList.style.display === "block" ? "none" : "block";
        });
    });
});
