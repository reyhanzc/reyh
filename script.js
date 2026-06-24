const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

let size = 18;

noBtn.addEventListener("click", () => {
    size += 10;

    yesBtn.style.fontSize = size + "px";
    yesBtn.style.padding = (12 + size/3) + "px " + (25 + size/2) + "px";

    const texts = [
        "yakin nggak mau? 🥺",
        "coba pikir lagi sayang 😭",
        "aku janji nggak ngulangin lagi 🥹",
        "ayoo maafin aku ❤️",
        "pliss amaafin aku 🥺👉👈",
        "aku sayang kamu banget ❤️"
    ];

    let randomText = texts[Math.floor(Math.random() * texts.length)];
    noBtn.innerText = randomText;
});

yesBtn.addEventListener("click", () => {
    document.querySelector(".buttons").style.display = "none";

    result.innerHTML = `
        ❤️ YEAYYY ❤️ <br><br>
        makasih ya cantik udah mau maafin aku. 🥹<br>
        aku janji akan belajar dari kesalahanku dan berusaha menjadi yang lebih baik untuk kamu. ❤️<br><br>
        aku sayang kamu hari ini, besok, dan seterusnya. 💖
    `;
});