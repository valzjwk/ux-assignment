/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// our own js code 

// Loader
function showLoader() {
  document.getElementById('fullscreen-loader').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function hideLoader() {
  const loader = document.getElementById('fullscreen-loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Initialize ScrollSpy & Navbar AFTER Loader Hides
    initNavbar();
  }, 500);
}

// Delayed Initialization
function initNavbar() {
  // Shrink navbar on scroll
  const navbarShrink = () => {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) return;
    navbarCollapsible.classList.toggle('navbar-shrink', window.scrollY !== 0);
  };
  navbarShrink();
  document.addEventListener('scroll', navbarShrink);

  // Initialize ScrollSpy (with manual active state control)
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });

    // Manually handle active states for dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        // Remove active class from all dropdown items
        document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
      });
    });
  }

  // Close responsive navbar when clicking a link
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
  responsiveNavItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
}

// Loader Event Listeners
document.addEventListener('DOMContentLoaded', showLoader);
window.addEventListener('load', () => setTimeout(hideLoader, 1000));

// For switching between forms
const formTypeSelect = document.getElementById('formTypeSelect');
const signupSection = document.getElementById('signup');
const alumniSection = document.getElementById('join');
const feedbackSection = document.getElementById('feedback');

function showForm(formId) {
    const forms = [signupSection, alumniSection, feedbackSection];
    forms.forEach(section => {
        if (section) {
            const isVisible = section.id === formIdToId(formId);
            section.style.display = isVisible ? 'block' : 'none';

            // Disable required fields in hidden forms
            section.querySelectorAll('[required]').forEach(input => {
                input.disabled = !isVisible;
            });
        }
    });
}

function formIdToId(value) {
    if (value === 'joinUs') return 'signup';
    if (value === 'alumni') return 'join';
    if (value === 'feedback') return 'feedback';
}

if (formTypeSelect) {
    showForm(formTypeSelect.value);

    formTypeSelect.addEventListener('change', (e) => {
        showForm(e.target.value);
    });
}

// Form submission handling with validation and alert
function handleFormSubmission(form, message) {
    if (!form) return;

    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault(); // Stop form submission
            form.reportValidity();

            // Focus the first invalid element for convenience
            const firstInvalid = form.querySelector(":invalid");
            if (firstInvalid) {
                firstInvalid.focus({
                    preventScroll: false
                });
            }
            return;
        }

        event.preventDefault(); // valid form, prevent actual submission
        alert(message);
        form.reset();
    });
}

// Attach handlers to each form if exists
const joinUsForm = document.querySelector("#joinUsForm");
if (joinUsForm) handleFormSubmission(joinUsForm, "Thank you for signing up with NYP SO! We will contact you shortly, we are excited to have you on board!");

const alumniForm = document.querySelector("#alumniForm");
if (alumniForm) handleFormSubmission(alumniForm, "Thank you for signing up with NYP Alumni Association! We will contact you shortly.");

const feedbackForm = document.querySelector("#feedbackForm");
if (feedbackForm) handleFormSubmission(feedbackForm, "Thank you for your feedback! We will look through it shortly and get back to you.");
