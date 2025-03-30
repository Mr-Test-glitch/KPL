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
                        <li>A.M. Saif</li>
                        <li>Md.Joj</li>
                        <li>Rifat</li>
                        <li>Rajib</li>
                        <li>Nayeem</li>
                        <li>Rafi</li>
                        <li>Saif Hassan</li>
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
                        <li>Rana Mahmud</li>
                        <li>Md Sojib Mia</li>
                        <li>MD Laden Mia</li>
                        <li>Md Sayem Mia</li>
                        <li>MD. Dipu</li>
                        <li>MD. Robin</li>
                        <li>MD. Mishuk Mia</li>
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
                        <li>Md. Tarek Mia</li>
                        <li>Sazzad Hossain</li>
                        <li>Md. Kazimolla</li>
                        <li>Mehedi Hasan</li>
                        <li>Kamrul Hasan</li>
                        <li>Tipu Sultan</li>
                        <li>Sujat Mia</li>
                        <li>Shamim Ahmed</li>
                        <li>MD.Dilowar</li>
                        <li>Md.Himel</li>
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
                        <li>M.H. Opi</li>
                        <li>Md.Sumon(jr)</li>
                        <li>Md.Arijit</li>
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
                        <li>Mustakim</li>
                        <li>Md.Tomal</li>
                        <li>Shah Alom</li>
                        <li>Md.Bijoy</li>
                        <li>Mursalin</li>
                        <li>Md.Azaharul</li>
                        <li>Md.Shorif</li>
                        <li>Md.Onik</li>
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
                        <li>Azad Hossain</li>
                        <li>MD.Kawser</li>
                        <li>Md. Robiul</li>
                        <li>Safayet</li>
                        <li>Md.Siam</li>
                        <li>MD.Tanvir</li>
                        <li>Md.Anis</li>
                        <li>Md.Rahul</li>
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
                        <li>Md. Murad</li>
                        <li>Md.Rejuan</li>
                        <li>Md.Nibir</li>
                        <li>Nasir Hossain</li>
                        <li>Md.Momen</li>
                        <li>Md.Akash</li>
                        <li>Md.Arafat</li>
                        <li>M.S. Mazharul</li>
                    </ul>
                `;
                teamDiv.appendChild(playersList);
            }

            playersList.style.display = playersList.style.display === "block" ? "none" : "block";
        });
    });
});
