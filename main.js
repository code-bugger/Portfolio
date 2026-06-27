// Owl initializer
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap offcanvas
    var offcanvasElement = document.getElementById('offcanvasNavbar');
    var offcanvas = new bootstrap.Offcanvas(offcanvasElement);

    // Close offcanvas when a nav-link is clicked
    document.querySelectorAll('#offcanvasNavbar .nav-link').forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            offcanvas.hide();
        });
    });

    // Navbar active state on scroll
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    function navbarScrollspy() {
        let fromTop = window.scrollY + 200;

        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    window.addEventListener('scroll', navbarScrollspy);


    // Initialize Typed.js
    var options = {
        strings: document.querySelector('.typed').getAttribute('data-typed-items').split(','),
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    };
    new Typed('.typed', options);

    // Scroll-to-top icon visibility
    function toggleScrollTopIcon() {
        let scrollTopIcon = document.getElementById('scroll-top');
        if (window.scrollY > 100) {
            scrollTopIcon.classList.add('show');
        } else {
            scrollTopIcon.classList.remove('show');
        }
    }
    window.addEventListener('scroll', toggleScrollTopIcon);
});

//EmailJS Code
(function () {
    emailjs.init({
        publicKey: "jyEtxwtl8-2WGzQx4",
    });
})();

function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    // Show loading message
    let submitButton = document.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_mdr10n9", "template_b80akpr", params)
        .then(() => {
            alert("Email Sent Successfully!");
            // Clear the form after successful submission
            event.target.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send email: "+error.text);
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = "Send Message";
        });
}