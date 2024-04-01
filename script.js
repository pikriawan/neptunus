const rootElement = document.querySelector(':root')
rootElement.style.setProperty('--inner-height', `${window.innerHeight}px`)

const navbarNavElement = document.getElementById('navbarNav')
const navbarListButtonElement = document.getElementById('navbarListButton')
const navbarXbuttonElement = document.getElementById('navbarXbutton')
const navbarOverlayElement = document.getElementById('navbarOverlay')

function showNavbar() {
  navbarNavElement.classList.add('show')
  navbarOverlayElement.classList.add('show')
}

function hideNavbar() {
  navbarNavElement.classList.remove('show')
  navbarOverlayElement.classList.remove('show')
}

navbarListButtonElement.addEventListener('click', showNavbar)
navbarXbuttonElement.addEventListener('click', hideNavbar)
navbarOverlayElement.addEventListener('click', hideNavbar)

const sidebarElement = document.getElementById('sidebar')
const navbarThreeDotsButtonElement = document.getElementById('navbarThreeDotsButton')
const sidebarXbuttonElement = document.getElementById('sidebarXbutton')
const sidebarOverlayElement = document.getElementById('sidebarOverlay')

function showSidebar() {
  sidebarElement.classList.add('show')
  sidebarOverlayElement.classList.add('show')
}

function hideSidebar() {
  sidebarElement.classList.remove('show')
  sidebarOverlayElement.classList.remove('show')
}

navbarThreeDotsButtonElement.addEventListener('click', showSidebar)
sidebarXbuttonElement.addEventListener('click', hideSidebar)
sidebarOverlayElement.addEventListener('click', hideSidebar)