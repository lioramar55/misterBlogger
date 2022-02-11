'use strict'

function init() {
  document.querySelector('header button').onclick = toggleMenu
  document.querySelector('body .main-screen').onclick = toggle
  document.querySelectorAll('.post-content button').forEach((btn) => (btn.onclick = toggleModal))
  document.querySelector('.btns .close').onclick = toggleModal
  document.querySelector('.btns .submit').onclick = submitEmail
}

function toggleMenu() {
  document.body.classList.toggle('menu-open')
}

function toggleModal() {
  document.body.classList.toggle('modal-open')
}

function submitEmail() {
  var email = document.querySelector('.modal [type=email]').value
  console.log('Hello', email)
}

function toggle() {
  if (document.body.classList.contains('menu-open')) toggleMenu()
  else toggleModal()
}
