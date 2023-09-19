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
