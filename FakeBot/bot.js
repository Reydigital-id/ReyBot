const pertanyaan = document.getElementById('pertanyaan')
const jawaban = document.getElementById('jawaban')

let init = 0

const botSay = (data) => {
    return [
        "Halo perkenalkan nama saya ReyBot, siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Oh ${data?.usia} tahun, hobi kamu apa  ya?`,
        `Wow sama dong, hobi aku juga ${data?.hobi}, btw punya pacar gak?`,
        `Ohhhh ${data?.pacar} okelah udahan ya?`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({nama: jawaban.value})
    } else if (init === 2) {
        botDelay({usia: jawaban.value})
    } else if (init === 3) {
        botDelay({hobi: jawaban.value})
    } else if (init === 4) {
        botDelay({pacar: jawaban.value})  
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    console.log({userData: userData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [500])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Baiklah, terima kasih ${userData[0]} telah menggunakan ReyBot, sampai jumpa lagi :), 
    kapan-kapan kita ${userData[2]} bareng yaa`
    jawaban.value = "siap, makasih juga :)"
}


function botEnd() {
    window.location.reload()
}

document.getElementById('nameForm').addEventListener('submit', function(e) {
  e.preventDefault()
  const name = this.username.value.trim();
  if (!name) return; 
});

