// header
document.querySelector('.setting-user-button').addEventListener('click', () => {
  const sub = document.querySelector('.setting-user-subbutton')
  sub.style.transition = '.4s'
  sub.classList.toggle('transform-none')
  const sett = document.querySelector('.setting-user-button')
  sett.classList.toggle('hover-setting-effect')
})

const cutrainChecker = () => {
  const curtain = document.querySelector('.black-curtain')
  curtain.style.transition = '1s'
  if (curtain.classList.contains('hidden')) {
    curtain.classList.remove('hidden')
    curtain.style.opacity = '0.5'
  } else {
    curtain.classList.add('hidden')
    curtain.style.opacity = '0'
  }
}

const sub = document.querySelector('.search-sub')
const search = document.querySelector('.search')
const mega = document.querySelector('.navigation-megamenu-search')
document.querySelector('.navigation-megamenu').style.transition = '1s'

const closeOrOpenSearchChecker = (checker) => {
  sub.style.transition = '.4s'
  if (checker == 1) {
    document.querySelector('.search').style.opacity = '0'
    mega.style.border = 'none'
    mega.style.boxShadow = 'none'
    search.style.transition = '.4s'
    search.style.transform = 'scale(2)'
    search.style.opacity = '0'
    sub.style.transform = 'translateX(-50%)scale(1)'
    sub.style.opacity = '1'
    setTimeout(() => {
      search.style.display = 'none'
    }, 1000)
    document.querySelector('.navigation-megamenu').style.height = '200px'
    document.querySelector('.text-airbnb-dark').focus()
    cutrainChecker()
  } else {
    document.querySelector('.search').style.opacity = '1'
    mega.style.border = '1px solid $gray'
    mega.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)'
    search.style.display = 'flex'
    search.style.transform = 'scale(1)'
    search.style.opacity = '1'
    sub.style.transition = '.4s'
    sub.style.transform = 'translateX(-50%)scale(0)'
    sub.style.opacity = '0'
    document.querySelector('.navigation-megamenu').style.height = '80px'
    cutrainChecker()
  }
}
document.querySelector('.search').addEventListener('click', () => {
  closeOrOpenSearchChecker(1)
})

document.querySelector('.close-sub-search').addEventListener('click', () => {
  closeOrOpenSearchChecker(0)
})

let flag = 0
const subChecker = (sub, box) => {
  sub.style.flexDirection = 'column'
  sub.style.transition = '.4s'
  if (flag == 0) {
    sub.style.opacity = '1'
    sub.style.display = 'flex'
    box.style.background = '#fff'
    flag++
  } else {
    sub.style.opacity = '0'
    sub.style.display = 'none'
    box.style.background = 'none'
    flag--
  }
}

const subReseting = () => {
  const divs = document.querySelectorAll('.search-sub-box>li>.subreseting')
  const lis = document.querySelectorAll('.search-sub-box>li')
  divs.forEach((val) => {
    val.style.display = 'none'
  })
  lis.forEach((val) => {
    val.style.background = 'none'
  })
}

const subwhere = document.querySelector('.sub-where')
const boxi = document.querySelector('.search-sub-box-where')
subwhere.style.display = 'none'
document.querySelector('.search-sub-box-where').addEventListener('click', (event) => {
  // for not close children
  if (document.querySelector('.search-sub-box-where') !== event.target) return;

  subReseting()
  subChecker(subwhere, boxi)
})
const boxo = boxi.children[0]
boxo.addEventListener('click', () => {
  subReseting()
  subChecker(subwhere, boxi)
})
const boxoo = boxo.nextElementSibling
boxoo.addEventListener('click', () => {
  subReseting()
  subChecker(subwhere, boxi)
})

const subwhen = document.querySelector('.when-sub')
const boxii = document.querySelector('.search-sub-box-date')
subwhen.style.display = 'none'
boxii.addEventListener('click', (event) => {
  // for not close children
  if (document.querySelector('.search-sub-box-date') !== event.target) return;

  subReseting()
  subChecker(subwhen, boxii)
})
const boxiii = boxii.children[0]
boxiii.addEventListener('click', () => {
  subReseting()
  subChecker(subwhen, boxii)
})
const boxiiii = boxiii.nextElementSibling
boxiiii.addEventListener('click', () => {
  subReseting()
  subChecker(subwhen, boxii)
})

const whoi = document.querySelector('.search-sub-box-who')
const whosub = document.querySelector('.search-sub-box-who-text-sub')
whosub.style.display = 'none'
whoi.addEventListener('click', (event) => {
  // for not close children
  if (document.querySelector('.search-sub-box-who') !== event.target) return;

  subReseting()
  subChecker(whosub, whoi)
})
const whoo = document.querySelector('.search-sub-box-who-text-head').children[0]
whoo.addEventListener('click', () => {
  subReseting()
  subChecker(whosub, whoi)
})
const whooo = whoo.nextElementSibling
whooo.addEventListener('click', () => {
  subReseting()
  subChecker(whosub, whoi)
})

// when sub search tabs
const _li = document.querySelectorAll('.when-sub-menu-ul>li')
const _sub = document.querySelectorAll('.when-sub-submenu>div')
_li.forEach((val) => {
  const datesul = document.querySelector('.when-sub-menu-ul-dates')
  const datesdatadash = datesul.getAttribute('data-tab', 'sub1')
  datesul.style.background = '#fff'
  document.querySelector('.when-sub-submenu>#' + datesdatadash).style.display = 'flex'
  val.addEventListener('click', () => {
    // for not close children
    subReseting()
    subChecker(subwhen, boxii)
    // reseting
    tabResetting()
    // opening
    const tem = val.getAttribute('data-tab')
    val.style.background = '#fff'
    subChecker(subwhen, boxii)
    document.querySelector('.when-sub-submenu').style.display = 'flex'
    document.querySelector('.when-sub-submenu>#' + tem).style.display = 'flex'
  }, true)
})
const tabResetting = () => {
  _li.forEach((val) => {
    val.style.background = 'none'
  })
  _sub.forEach((val) => {
    val.style.display = 'none'
    document.querySelector('.when-sub-submenu').style.display = 'flex'
  })
}


// circle month progress
const circle = document.getElementById('circle');
const input = document.getElementById('percent');
const number = document.querySelector('.card__number');
const tooltip = document.querySelector('.tooltip');

function circlePercent() {
  let change = 565.49 - (565.49 * input.value) / 12;
  circle.style.strokeDashoffset = change;
};

function isNumeric(event) {
  if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode > 31)) {
    return false;
  }
  if (event.keyCode == 13) {
    changePercent();
  }
};
function writeOnTop() {
  document.querySelector('.inner-dates').innerHTML = input.value + ' month'
}

function changePercent() {
  if (input.value > 12) {
    tooltip.style.opacity = 1;
    tooltip.classList.add('fade-in');
    input.value = '';

  } else {
    tooltip.style.opacity = 0;
    tooltip.classList.remove('fade-in');
    number.innerHTML = Number(input.value) + ' month';
    circlePercent();
    writeOnTop()
    input.value = '';
  }
};

// calendar
const senderDates = (days) => {
  let swiperActive = document.querySelector('.swiper-slide-active')
  swiperActive = swiperActive.innerText.slice(2);
  document.querySelector('.inner-dates').innerHTML = days + ' ' + swiperActive
}
const daysOfMonth = document.querySelectorAll('td')
daysOfMonth.forEach((val) => {
  val.addEventListener('click', (e) => {
    resettingTd()
    e.target.style.background = '#ff385c'
    e.target.style.color = '#fff'
    senderDates(e.target.innerText)
  })
})
// resetting td
const resettingTd = () => {
  daysOfMonth.forEach((i) => {
    i.style.background = '#fff'
    i.style.color = '#555'
  })
}


// who operations
const dash = (s) => {
  const counterElement = s.nextElementSibling
  let counter = counterElement.innerText
  counter--
  underZero(counter, counterElement, s)
  counterElement.innerText = counter
}
const plus = (s) => {
  const counterElement = s.previousElementSibling
  let counter = counterElement.innerText
  counter++
  underZero(counter, counterElement, s)
  lightIcon(s)
  counterElement.innerText = counter
}

// TODO: add new operations for dash and plus

const underZero = (c, ce, s) => {
  s.style.transition = '.4s'
  if (c <= 0) {
    s.classList.add('text-airbnb-gray')
    s.classList.remove('text-airbnb-dark')
    ce.innerHTML = 0
    s.preventDefault()
  } if (c > 0) {
    s.classList.remove('text-airbnb-gray')
    s.classList.add('text-airbnb-dark')
  }
}
const lightIcon = (s) => {
  const firsticon = s.previousElementSibling.previousElementSibling
  firsticon.classList.remove('text-airbnb-gray')
  firsticon.classList.add('text-airbnb-dark')
}


// flexible tab in when
document.querySelectorAll('.flexible-sub-any').forEach((val) => {
  val.addEventListener('click', (e) => {
    const inneri = document.querySelector('.inner-dates')
    const flexsub = e.target.innerText
    inneri.innerText = 'any' + ' ' + flexsub
  })
})

document.querySelectorAll('.flexible-sub-month').forEach((val) => {
  val.addEventListener('click', (e) => {
    const inneri = document.querySelector('.inner-dates')
    const flexsub = e.target.innerText
    inneri.innerText = flexsub
  })
})

// mobile navigation menu
document.querySelector('.mobile-search-sub').style.transition = '1s'
document.querySelector('.mobile-search').style.transition = '1s'
const mobileSearch = () => {
  document.querySelector('.mobile-search-sub').classList.remove('top-[3000px]')
  document.querySelector('.mobile-search').style.transform = 'scale(0)'
}

document.querySelector('.mobile-search').addEventListener('click', (val) => {
  // for not close children
  if (document.querySelector('.mobile-search') !== val.target) return;

  mobileSearch()
})

const searchmobileicon = document.querySelector('.mobile-search').children[0].children[0]
searchmobileicon.addEventListener('click', () => {
  mobileSearch()
})
document.querySelector('.mobile-search').children[1].addEventListener('click', (val) => {
  mobileSearch()
})

document.querySelector('.mobile-search-sub-close').addEventListener('click', (val) => {
  document.querySelector('.mobile-search-sub').classList.add('top-[3000px]')
  document.querySelector('.mobile-search').style.transform = 'scale(1)'
})

// acc
let rowacc = document.querySelectorAll('.row')
for (let i = 0; i < rowacc.length; i++) {
  let temp = rowacc[i].nextElementSibling.clientHeight
  rowacc[i].nextElementSibling.setAttribute('data-h', temp)
  rowacc[i].nextElementSibling.style.height = '0'
}

const resetAccTitle = () => {
  document.querySelectorAll('.row').forEach((val) => {
    val.children[0].style.fontSize = '16px'
    val.children[0].style.fontWeight = 'normal'
  })
}

const toggle = (s) => {
  const h = s.nextElementSibling.getAttribute('data-h')
  const status = s.nextElementSibling.getAttribute('data-status')
  resetAccTitle()
  if (status == 'off') {
    s.nextElementSibling.style.height = h + 'px'
    s.nextElementSibling.setAttribute('data-status', 'on')
    s.children[0].style.fontSize = '30px'
    s.children[0].style.fontWeight = 'bold'
  } else {
    s.nextElementSibling.style.height = '0px'
    s.nextElementSibling.setAttribute('data-status', 'off')
    s.children[0].style.fontSize = '16px'
    s.children[0].style.fontWeight = 'normal'
  }
  resetAcc(s)

}

const resetAcc = (s) => {
  let num = s.getAttribute('data-num')
  for (let k = 0; k < rowacc.length; k++) {
    if (k != num) {
      rowacc[k].nextElementSibling.style.height = '0px'
      rowacc[k].nextElementSibling.setAttribute('data-status', 'off')
    }
  }
}



const limo = document.querySelectorAll('.when-sub-menu-ul-mobile>li')
const submo = document.querySelectorAll('.when-sub-submenu-mobile>div')
limo.forEach((val) => {
  const datesul = document.querySelector('.when-sub-menu-ul-dates-mobile')
  const datesdatadash = datesul.getAttribute('data-tab', 'sub1')
  datesul.style.background = '#fff'
  datesul.style.borderRadius = '40px'
  document.querySelector('.when-sub-submenu-mobile>#' + datesdatadash).style.display = 'flex'
  val.addEventListener('click', () => {
    // for not close children
    subReseting()
    subChecker(subwhen, boxii)
    // reseting
    tabResettingMo()
    // opening
    const tem = val.getAttribute('data-tab')
    val.style.background = '#fff'
    subChecker(subwhen, boxii)
    document.querySelector('.when-sub-submenu-mobile').style.display = 'flex'
    document.querySelector('.when-sub-submenu-mobile>#' + tem).style.display = 'flex'
  }, true)
})
const tabResettingMo = () => {
  limo.forEach((val) => {
    val.style.background = 'none'
  })
  submo.forEach((val) => {
    val.style.display = 'none'
    document.querySelector('.when-sub-submenu-mobile').style.display = 'flex'
  })
}

// header slider icone
const sliderIcon = document.querySelectorAll('.header-slider-icon>figure')

const sliderIconReset = () => {
  sliderIcon.forEach((val) => {
    val.style.transition = '.4s'
    val.children[0].style.transition = '.4s'
    val.classList.remove('border-b')
    val.classList.remove('border-airbnb-dark')
    val.children[0].classList.remove('!opacity-100')
  })
}

sliderIcon.forEach((val) => {
  val.addEventListener('click', () => {
    sliderIconReset()
    val.classList.add('border-b')
    val.classList.add('border-airbnb-dark')
    val.children[0].classList.add('!opacity-100')
  })
})
