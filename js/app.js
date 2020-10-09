/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const createMenuItem = (section) => {
  let navItem = document.createElement('li');
  navItem.setAttribute('class', 'menu__link');
  navItem.setAttribute('data-nav-to', section.id);
  navItem.innerText = section.dataset.nav;
  return navItem;
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
};

const getSectionInView = () => {
  return document.querySelector('.active');
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const createNavbarList = () => {
  for (const section of sections) {
    const navItem = createMenuItem(section);
    navbar.appendChild(navItem);
  }
};
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

const onNavClickHandler = () => {
  navbar.addEventListener('click', (event) => {
    if (event.target.dataset.navTo) {
      scrollToSection(event.target.dataset.navTo);
    }
  });
};
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
createNavbarList();
// Scroll to section on link click
onNavClickHandler();
// Set sections as active
window.onscroll = function () {
  for (const section of sections) {
    const distanceToTop = section.getBoundingClientRect().top;
    const activeSection = getSectionInView();
    if (distanceToTop > -300) {
      if (section.classList.contains('active')) {
        break;
      } else {
        section.classList.add('active');
        if (activeSection) {
          activeSection.classList.remove('active');
        }
      }
      break;
    }
  }
};
