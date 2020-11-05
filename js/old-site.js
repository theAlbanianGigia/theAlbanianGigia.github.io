const car = {
      1: [
        [1, "Il nostro primo(secondo) bacio", "Che primo bacio pazzesco al compleanno della sveva", "7 Giugno 2019"],
        [2, "Come eravamo belli", "(Io, te sei sempre stata inferiore)", "20 Agosto 2019"],
        [3, "The photogenig", "Direi che traspare la nostra fotogenicità(voglio almeno un punto in più per questa parola...)", "20 Agosto 2019"],
        [4, "L'intesa che conta", "Che intesa, e che sguardi commoventi", "20 Agosto 2019"],
        [5, "2 coglioni felici pt. 1", "", ""],
        [6, "2 coglioni felici pt. 2", "", ""],
        [7, "Un mona e una lingua", "Quanto cazzo è bella la mia lingua? ", ""],
        [9, "Fescion bloggher confirmed", "Il titolo è autoesplicativo... ", ""],
        [19, "Una donna e un'ascella", "Dio va... Ho un botto di peli, mi sa che devo iniziare a tagliarmeli", "29 Agosto 2019"],
        [20, "Un mona con dei capelli", "Ci sono più capelli che tua faccia", ""],
        [22, "Un nero e la sua finta ragazza nera", "Non sei nera come me... Nè dentro nè fuori, è inutile che provi a farl con quelle pose", ""],
        [33, "Il trash", "Quella serata direi che è stat la più bella e la più pazza, tra ascensore e il resto... Wow...", "26 Ottobre 2019"]
      ],
      2: [
        [15, "Cazzetto", "Come al solito parli male di ABjr... Stronza....", "29 Luglio 2019"],
        [16, "Primi diti medi", "Credo sia tra i primi diti medi che tu mi abbia mai mandato", "11 Luglio 2019"],
        [17, "Faccina da culo", "Dio va che faccia da schiaffi che hai qua", "13 Agosto 2019"],
        [18, "Vaffanculo + Bacio", "Direi che sei riuscita a unire un fantastico sguardo ammagliante e seducente, con tanto di bacino a un dito medio da urlo ", "21 Agosto 2019"],
        [26, "La 'superiortà' (di quella che fa il moro)", "E' palese che tu abbia qualcosa da ridire ma non puoi farlo se non sei al mio livello", "9 Settembre 2019"],
        [27, "La panterona", "Ti dona quel copleto, però lo preferisco senza quel brutto dito medio", "16 Settembre 2019"],
        [35, "L'intellettuale lvl base", "Dio va se sembri cattiva e minacciosa, mi tremano le gambe a vedere questa foto", "29 Ottobre 2019"],
        [36, "L'intellettuale super Sayan", "Qua sei proprio salita di livello rispetto a quella precedente, si vede che ti sei impegnata di più", "29 Ottobre 2019"]
      ]
    }
    const desc = {
      1: document.getElementById("descriptions-1"),
      2: document.getElementById("descriptions-2")
    }
    const c = {
      1: document.getElementById(`container1`),
      2: document.getElementById(`container2`)
    }
    const current = {
      1: 0,
      2: 0
    }


    const prev = n => {
      console.log("Prev")
      let cur = current[n]
      current[n] = cur === 0 ? (car[n].length - 1) : (cur - 1)

      const [t, p, d] = [car[n][current[n]][1], car[n][current[n]][2], car[n][current[n]][3]]
      desc[n].innerHTML =
        `<h5>${t}</h5>
              <p>
                ${p}
                <br/>
                ${d ? `<cite title="Source Title">${d}</cite>` : ""}
              </p>`
    }

    const next = n => {
      console.log("next")
      let cur = current[n]
      current[n] = cur === (car[n].length - 1) ? 0 : (cur + 1)

      const [t, p, d] = [car[n][current[n]][1], car[n][current[n]][2], car[n][current[n]][3]]
      desc[n].innerHTML =
        `<h5>${t}</h5>
              <p>
                ${p}
                <br/>
                ${d ? `<cite title="Source Title">${d}</cite>` : ""}
              </p>`
    }

    const buildC = (s, t, p = "", d = "", n, f) => {
      const a =
        `<div class="carousel-item ${f ? "active" : ""}">
            <img class="d-block w-100 img-fluid" src="${s}" />
          </div>`

      c[n].innerHTML += a
    }
