/* =====================================================
   MOBILE MENU
====================================================== */

const menuButton =
    document.querySelector(".mobile-menu-btn");

const mobileNav =
    document.querySelector(".mobile-nav");


menuButton.addEventListener("click", function () {

    mobileNav.classList.toggle("open");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".mobile-nav a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("open");

        });

    });



/* =====================================================
   GALLERY FILTER
====================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        /* Remove active from all buttons */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Add active to clicked button */

        button.classList.add("active");


        const filter =
            button.dataset.filter;


        galleryItems.forEach(function (item) {

            const category =
                item.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                item.classList.remove("hidden");

            } else {

                item.classList.add("hidden");

            }

        });

    });

});



/* =====================================================
   LIGHTBOX
====================================================== */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxTitle =
    document.getElementById("lightbox-title");

const lightboxCategory =
    document.getElementById("lightbox-category");


const closeButton =
    document.querySelector(".lightbox-close");

const previousButton =
    document.querySelector(".lightbox-prev");

const nextButton =
    document.querySelector(".lightbox-next");



let currentImage = 0;


/*
    Convert NodeList into an array.
*/

let visibleImages = [];



/* =====================================================
   OPEN LIGHTBOX
====================================================== */

function openLightbox(index) {

    visibleImages =
        Array.from(
            document.querySelectorAll(
                ".gallery-item:not(.hidden)"
            )
        );


    currentImage = index;


    showImage();


    lightbox.classList.add("open");


    document.body.style.overflow = "hidden";

}



/* =====================================================
   SHOW IMAGE
====================================================== */

function showImage() {

    if (visibleImages.length === 0) {
        return;
    }


    const item =
        visibleImages[currentImage];


    const image =
        item.querySelector("img");


    lightboxImage.src =
        image.src;


    lightboxImage.alt =
        image.alt;


    lightboxTitle.textContent =
        item.dataset.title;


    lightboxCategory.textContent =
        item.dataset.category;


}



/* =====================================================
   GALLERY CLICK EVENTS
====================================================== */

galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const visible =
            Array.from(
                document.querySelectorAll(
                    ".gallery-item:not(.hidden)"
                )
            );


        const index =
            visible.indexOf(item);


        openLightbox(index);

    });

});



/* =====================================================
   CLOSE LIGHTBOX
====================================================== */

function closeLightbox() {

    lightbox.classList.remove("open");

    document.body.style.overflow = "";

}


closeButton.addEventListener(
    "click",
    closeLightbox
);



/* =====================================================
   NEXT IMAGE
====================================================== */

function nextImage() {

    if (visibleImages.length === 0) {
        return;
    }


    currentImage++;


    if (
        currentImage >=
        visibleImages.length
    ) {

        currentImage = 0;

    }


    showImage();

}


nextButton.addEventListener(
    "click",
    nextImage
);



/* =====================================================
   PREVIOUS IMAGE
====================================================== */

function previousImage() {

    if (visibleImages.length === 0) {
        return;
    }


    currentImage--;


    if (currentImage < 0) {

        currentImage =
            visibleImages.length - 1;

    }


    showImage();

}


previousButton.addEventListener(
    "click",
    previousImage
);



/* =====================================================
   KEYBOARD CONTROLS
====================================================== */

document.addEventListener(
    "keydown",
    function (event) {


        if (
            !lightbox.classList.contains("open")
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowRight") {

            nextImage();

        }


        if (event.key === "ArrowLeft") {

            previousImage();

        }

    }
);



/* =====================================================
   CLICK OUTSIDE IMAGE
====================================================== */

lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);



/* =====================================================
   HERO IMAGE ROTATION
====================================================== */

const hero =
    document.querySelector(".hero");


const heroImages = [

    "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=2000&q=80",

    "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?auto=format&fit=crop&w=2000&q=80",

    "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=2000&q=80"

];


let heroIndex = 0;


setInterval(function () {

    heroIndex++;


    if (
        heroIndex >= heroImages.length
    ) {

        heroIndex = 0;

    }


    hero.style.backgroundImage =
        `url("${heroImages[heroIndex]}")`;

}, 5000);



/* =====================================================
   CONTACT FORM
====================================================== */

const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        alert(
            "Thank you! Your message has been received."
        );


        contactForm.reset();

    }
);