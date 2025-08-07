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

// Show the fullscreen loader
function showLoader() {
  document.getElementById('fullscreen-loader').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Hide the fullscreen loader
function hideLoader() {
  const loader = document.getElementById('fullscreen-loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }, 500);
}

// Automatically hide loader when page finishes loading
window.addEventListener('load', function() {
  setTimeout(hideLoader, 1000); 
});

// Show loader immediately when page starts loading
document.addEventListener('DOMContentLoaded', function() {
  showLoader();
});

// form
function handleFormSubmission(form, message) {
      form.addEventListener("submit", function (event) {
          event.preventDefault(); // stop default

          if (!form.checkValidity()) {
              form.reportValidity(); // show browser messages
              return;
          }

          alert(message);
          form.reset();
      });
  }

document.addEventListener("DOMContentLoaded", function () {
    const joinUsForm = document.querySelector("#joinUsForm");
    if (joinUsForm) {handleFormSubmission(joinUsForm, "Thank you for signing up with NYP SO! We will contact you shortly, we are excited to have you on board!");}
});

document.addEventListener("DOMContentLoaded", function () {
    const alumniForm = document.querySelector("#alumniForm");
    if (alumniForm) {handleFormSubmission(alumniForm, "Thank you for signing up with NYP Alumni Association! We will contact you shortly.");}
});

document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.querySelector("#feedbackForm");
    if (feedbackForm) {handleFormSubmission(feedbackForm, "Thank you for your feedback! We will look through it shortly and get back to you.");}
});
