const zebbi = () => {
  el.style.transform += "translateY(-50em)"
  el.classList.add("fadeIn")
}

const data = [
  [
    [1, "Il nostro primo(secondo) bacio", "Che primo bacio pazzesco al compleanno della sveva", "7 Giugno 2019"],
    [2, "Come eravamo belli", "(Io, te sei sempre stata inferiore)", "20 Agosto 2019"],
    [3, "L'intesa che conta pt. 1", "Che intesa, e che sguardi commoventi", "20 Agosto 2019"],
    [4, "L'intesa che conta pt. 2", "", "20 Agosto 2019"],
    [5, "2 coglioni felici pt. 1", "", ""],
    [6, "2 coglioni felici pt. 2", "", ""],
    [7, "Un mona e una lingua", "Quanto cazzo è bella la mia lingua? ", ""],
    [9, "Fescion bloggher confirmed", "Il titolo è autoesplicativo... ", ""],
    [20, "Un mona con dei capelli", "Ci sono più capelli che tua faccia", ""],
    [19, "Una donna e un'ascella", "Dio va... Ho un botto di peli, mi sa che devo iniziare a tagliarmeli", "29 Agosto 2019"],
    [22, "Un nero e la sua finta ragazza nera", "Non sei nera come me... Nè dentro nè fuori, è inutile che provi a farl con quelle pose", ""],
    [3, "The photogenic", "Direi che traspare la nostra fotogenicità(voglio almeno un punto in più per questa parola...)"],
    [33, "Il trash", "Quella serata direi che è stat la più bella e la più pazza, tra ascensore e il resto... Wow...", "26 Ottobre 2019"]
  ],
  [
    [11,"Fai finta che questo sia un titolo bellissimo", "Mentre questa è una descrizione ricca di amore", "6 Settembre 6969 😏"],
    [13,"Fai finta che questo sia un titolo bellissimo", "Mentre questa è una descrizione ricca di amore", "6 Settembre 6969 😏"],
    [15,"Fai finta che questo sia un titolo bellissimo", "Mentre questa è una descrizione ricca di amore", "6 Settembre 6969 😏"],
    [16, "Primi diti medi", "Credo sia tra i primi diti medi che tu mi abbia mai mandato", "11 Luglio 2019"],
    [15, "Cazzetto", "Come al solito parli male di ABjr... Stronza....", "29 Luglio 2019"],
    [17, "Faccina da culo", "Dio va che faccia da schiaffi che hai qua", "13 Agosto 2019"],
    [18, "Vaffanculo + Bacio", "Direi che sei riuscita a unire un fantastico sguardo ammagliante e seducente, con tanto di bacino a un dito medio da urlo ", "21 Agosto 2019"],
    [26, "La 'superiortà' (di quella che fa il moro)", "E' palese che tu abbia qualcosa da ridire ma non puoi farlo se non sei al mio livello", "9 Settembre 2019"],
    [27, "La panterona", "Ti dona quel copleto, però lo preferisco senza quel brutto dito medio", "16 Settembre 2019"],
    [35, "L'intellettuale lvl base", "Dio va se sembri cattiva e minacciosa, mi tremano le gambe a vedere questa foto", "29 Ottobre 2019"],
    [36, "L'intellettuale super Sayan", "Qua sei proprio salita di livello rispetto a quella precedente, si vede che ti sei impegnata di più", "29 Ottobre 2019"]
  ]
]


;(() => {
  for (let carouselNum in data) {
    let active = true
    for (let item of data[carouselNum]) {
      const [rawSrc, title, description, date] = item

      updateCarousel({
        src: `assets/photos/img${rawSrc}.jpg`,
        title,
        description,
        date,
        carouselNum,
        active
      })
      active = false
    }
  }

// TODO: uncomment this
  el.addEventListener('transitionend', () => {
    all.removeAttribute("hidden")
    document.getElementById("box").remove()
  })
})()




$("#carouselExampleCaptions").on('slide.bs.carousel',
  (e) => handleCarouselChange({ e, carouselNum: 0 })
)

$("#carouselExampleCaptions2").on('slide.bs.carousel',
  (e) => handleCarouselChange({ e, carouselNum: 1 })
)
