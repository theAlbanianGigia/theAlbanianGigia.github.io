const carousel1 = document.getElementById("container1")
const carousel2 = document.getElementById("container2")
const el = document.getElementById("box")
const all = document.getElementById("tutto")
const caption1 = document.getElementById("caption-1")
const caption2 = document.getElementById("caption-2")

const updateCaption = ({ carouselNum, description, title, date }) => {
  const caption = carouselNum == 0 ? caption1 : caption2
  caption.classList.add("hide")

  setTimeout(() => {
    caption.innerHTML = `
      <div class="text-white">
        <h5 class="text-white">${title}</h5>
        <p class="text-white">
          ${description && description + "<br>" }
          ${date && `<cite>${date}</cite>`}
        </p>
      </div>`
    caption.classList.remove("hide")

  }, 500)
}

const updateCarousel = ({ src, title, description = "", date = "", carouselNum, active }) => {
  (carouselNum == 0 ? carousel1 : carousel2)
    .innerHTML += `
      <div class="carousel-item ${active && "active"}">
        <img src="${src}" alt="" class="d-block w-75 mx-auto bordi">
      </div>`

  if (active) {
    updateCaption({ carouselNum, description, title, date })
  }
}

const handleCarouselChange = ({ e: { to }, carouselNum }) => {
  const [_, title, description, date] = data[carouselNum][to]
  updateCaption({ carouselNum, description, title, date })
}
