const buttons = document.querySelectorAll('[data-carousel-button]')
const dots = document.querySelectorAll('.dot')

// initial render
dotImgMatch()
setInterval(changeImg, 5000)

// make arrows change slides accordingly
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]')

    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active

    refreshAutoSlider()

    dotImgMatch()
  })
})

// make dots go to correct page when clicked
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slide1 = document.querySelector('.slide.one')
    const slide2 = document.querySelector('.slide.two')
    const slide3 = document.querySelector('.slide.three')

    if (dot.classList.contains('one')) {
      // delete active dataset of previous image
      const activeSlide = document.querySelector('[data-active]')
      delete activeSlide.dataset.active
      // assign active dataset to new image
      slide1.dataset.active = true
      dotImgMatch()
    } else if (dot.classList.contains('two')) {
      // delete active dataset of previous image
      const activeSlide = document.querySelector('[data-active]')
      delete activeSlide.dataset.active
      // assign active dataset to new image
      slide2.dataset.active = true
      dotImgMatch()
    } else if (dot.classList.contains('three')) {
      const activeSlide = document.querySelector('[data-active]')
      delete activeSlide.dataset.active
      // assign active dataset to new image
      slide3.dataset.active = true
      dotImgMatch()
    }

    refreshAutoSlider()

    dotImgMatch()
  })
})

// make the dot that is associated with current slide more opaque
function dotImgMatch () {
  const activeSlide = document.querySelector('[data-active]')

  const dot1 = document.querySelector('.dot.one')
  const dot2 = document.querySelector('.dot.two')
  const dot3 = document.querySelector('.dot.three')

  if (activeSlide.classList.contains('one')) {
    const activeDot = document.querySelector('.active')
    if (activeDot) {
      activeDot.classList.remove('active')
    }
    dot1.classList.add('active')
  } else if (activeSlide.classList.contains('two')) {
    const activeDot = document.querySelector('.active')
    if (activeDot) {
      activeDot.classList.remove('active')
    }
    dot2.classList.add('active')
  } else if (activeSlide.classList.contains('three')) {
    const activeDot = document.querySelector('.active')
    if (activeDot) {
      activeDot.classList.remove('active')
    }
    dot3.classList.add('active')
  }
}

function changeImg () {
  // select img with data-active
  const activeSlide = document.querySelector('[data-active]')
  // give name to all 3 slides
  const slide1 = document.querySelector('.slide.one')
  const slide2 = document.querySelector('.slide.two')
  const slide3 = document.querySelector('.slide.three')

  if (activeSlide.classList.contains('one')) {
    delete activeSlide.dataset.active
    slide2.dataset.active = true
    dotImgMatch()
  } else if (activeSlide.classList.contains('two')) {
    delete activeSlide.dataset.active
    slide3.dataset.active = true
    dotImgMatch()
  } else if (activeSlide.classList.contains('three')) {
    delete activeSlide.dataset.active
    slide1.dataset.active = true
    dotImgMatch()
  }
}

// refresh 5sec slide change interval (when user change slides)
function refreshAutoSlider () {
  for (let i = 0; i < 100; i++) {
    window.clearInterval(i)
  }
  setInterval(changeImg, 5000)
}
