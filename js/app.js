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

console.log('==================================');
console.log(navbar);
console.log('==================================');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const createNavbarList = () => {
  for (const section of sections) {
    let navItem = document.createElement('li');
    navItem.setAttribute('class', 'menu__link');
    navItem.setAttribute('data-nav-to', section.id);
    navItem.innerText = section.dataset.nav;
    navbar.appendChild(navItem);
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
createNavbarList();
// Scroll to section on link click

// Set sections as active
