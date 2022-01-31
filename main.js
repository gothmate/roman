const hamburguer = document.querySelector('.hamburguer')
const modal = document.querySelector('#modal')
const links = document.querySelectorAll('.links')
const container = document.querySelector('.hamburguer_container')

hamburguer.addEventListener('click', e => {
  if (e.target.classList.value == 'hamburguer') {
    hamburguer.classList.add('animate')
    hamburguer.classList.remove('hamburguer')
    links.forEach(link => {
      console.log(link)
      link.classList.remove('disable')
    })

    modal.style.opacity = 1
  } else {
    hamburguer.classList.add('hamburguer')
    hamburguer.classList.remove('animate')
    modal.style.opacity = 0
    links.forEach(link => {
      link.classList.add('disable')
    })
  }
  modal.addEventListener('click', e => {
    hamburguer.classList.add('hamburguer')
    hamburguer.classList.remove('animate')
    modal.style.opacity = 0
    links.forEach(link => {
      link.classList.add('disable')
    })
  })
})