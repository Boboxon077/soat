let yil = document.getElementById("year")

let hozir = new Date()


const months = [
    "Yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyul",
    "iyun",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr"
]

const days = [
    "dushanba",
    "seshanba",
    "chorshanba",
    "payshanba",
    "juma",
    "shanba",
    "yakshanba"
]


function kuchaydi() {
    let year = hozir.getFullYear()
    let month = hozir.getMonth()
    let kun = hozir.getDay()

    let oyLar = months[month]
    let kunLar = days[kun]


    let result = "yil: " + year + " | Oy: " + oyLar + " | hafta kuni: " + kunLar

    yil.textContent = result
}

setInterval(kuchaydi, 1000)






function watch(soat) {
    return soat < 10 ? '0' + soat : soat;
}

let soat = document.getElementById('soat')

function kuchayish() {
    let soatlar = new Date();
    let hours = soatlar.getHours();
    let minutes = soatlar.getMinutes();
    let seconds = soatlar.getSeconds();

    let format = watch(hours) + ":" + watch(minutes) + ":" + watch(seconds);
    soat.textContent = format;
}

setInterval(kuchayish, 1000);
















