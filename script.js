const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

const openIcon = document.querySelector('.icon-open');

navToggle.onclick = () => {
    primaryNav.hasAttribute('data-visible') 
        ? navToggle.setAttribute('aria-expanded', false) 
        : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
    openIcon.className === 'icon-open'
        ? openIcon.classList.replace('icon-open', 'on')
        : openIcon.classList.replace('on', 'icon-open')
}