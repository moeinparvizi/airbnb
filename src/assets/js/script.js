// header
document.querySelector('.setting-user-button').addEventListener('click', () => {
  const sub = document.querySelector('.setting-user-subbutton')
  sub.style.transition = '.4s'
  sub.classList.toggle('transform-none')
  const sett = document.querySelector('.setting-user-button')
  sett.classList.toggle('hover-setting-effect')
})

const curtain = document.querySelector('.black-curtain')
const cutrainChecker = () => {
  curtain.style.transition = '1s'
  if (curtain.classList.contains('hidden')) {
    curtain.classList.remove('hidden')
    curtain.style.opacity = '0.7'
  } else {
    curtain.classList.add('hidden')
    curtain.style.opacity = '0'
  }
}
document.querySelector('.search').addEventListener('click', () => {
  document.querySelector('.navigation-megamenu').style.transition = '1s'
  const sub = document.querySelector('.search-sub')
  const search = document.querySelector('.search')
  const mega = document.querySelector('.navigation-megamenu-search')
  mega.style.border = 'none'
  mega.style.boxShadow = 'none'
  search.style.transition = '.4s'
  search.style.transform = 'scale(1)'
  search.opacity = '0'
  document.querySelector('.search').style.opacity = '0'
  document.querySelector('.search-anywhere').opacity = '0'
  document.querySelector('.search-anyweek').opacity = '0'
  document.querySelector('.guests').opacity = '0'
  sub.style.transition = '.4s'
  sub.style.transform = 'translateX(-50%)scale(1)'
  sub.style.opacity = '1'
  document.querySelector('.navigation-megamenu').style.height = '200px'
  document.querySelector('.text-airbnb-dark').focus()
  cutrainChecker()
})

document.querySelector('.close-sub-search').addEventListener('click', () => {
  const sub = document.querySelector('.search-sub')
  const search = document.querySelector('.search')
  const mega = document.querySelector('.navigation-megamenu-search')
  mega.style.border = '1px solid $gray'
  mega.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)'
  search.style.transition = '.4s'
  search.style.transform = 'scale(1)'
  search.style.opacity = '0'
  document.querySelector('.search').style.opacity = '1'
  document.querySelector('.search-anywhere').opacity = '1'
  document.querySelector('.search-anyweek').opacity = '1'
  document.querySelector('.guests').opacity = '1'
  sub.style.transition = '.4s'
  sub.style.transform = 'translateX(-50%)scale(0)'
  sub.style.opacity = '0'
  document.querySelector('.navigation-megamenu').style.height = '80px'
  cutrainChecker()
})

let flag = 0
document.querySelector('.search-sub-box-where').addEventListener('click', () => {
  const subWhere = document.querySelector('.sub-where')
  const box = document.querySelector('.search-sub-box-where')
  subWhere.style.transition = '.4s'
  if (flag == 0) {
    subWhere.style.opacity = '1'
    box.style.background = '#fff'
    flag++
  } else {
    subWhere.style.opacity = '0'
    box.style.background = 'none'
    flag--
  }
})
