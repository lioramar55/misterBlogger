'use strict'

function init() {
  document.querySelector('header button').onclick = toggleMenu
  document.querySelector('.main-screen').onclick = toggleMenu
}

function toggleMenu() {
  document.body.classList.toggle('menu-open')
}
