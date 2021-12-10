// Selectors
const buttonArrowLeft = document.querySelector("#btn-left");
const buttonArrowRight = document.querySelector("#btn-right");
const testimonialBox = document.querySelector(".testimonial");
const testimonialName = document.querySelector(".testimonial__title");
const testimonialParagraph = document.querySelector(`#testimonial-paragraph`);

// Data
const testimonials = {
  names: [`Dave Jameson`, `Deborah Silva`, `Thamara Bauber`, `John Johnsons`],
  paragraph: [
    `Never in my life I would think that I needed this service so bad, is just unbelievable how good this service is and how necessary`,
    `I use the landings every day, it does not matter where I am or where I will be, there is always a landings waiting for me`,
    `Last week I landed in Mars and it was the best experience of my life, I cannot even imagine how I would have done that without this service`,
    `My kids are all safe with the kids landings plan, I can just leave then playing and they will always be safe, there will always be a safe place for then to land`,
  ],
};
let curTestimonial = 0;

// Handlers
buttonArrowLeft.addEventListener("click", prevTestimonial);
buttonArrowRight.addEventListener("click", nextTestimonial);

// Functions
function prevTestimonial() {
  btnArrowsDisabled();
  testimonialBox.style.animation = `slideLeft 0.5s ease 0s 1 reverse forwards`;

  // This timeout exists to allow two different animations after the button press
  setTimeout(() => {
    if (curTestimonial == 0) {
      curTestimonial = testimonials.names.length - 1;
    } else {
      curTestimonial--;
    }

    testimonialName.innerHTML = testimonials.names[curTestimonial];
    testimonialParagraph.innerHTML = testimonials.paragraph[curTestimonial];
    testimonialBox.style.animation = `slideRight 0.5s ease 0s 1 normal forwards`;
  }, 500);

  // This timeout exists to reset the testimonial box animation, without this reset the animations don't work properly
  setTimeout(() => {
    testimonialBox.style.animation = ``;
    btnArrowsDisabled(false);
  }, 1000);
}

function nextTestimonial() {
  btnArrowsDisabled();

  testimonialBox.style.animation = `slideRight 0.5s ease 0s 1 reverse forwards`;

  setTimeout(() => {
    if (curTestimonial == testimonials.names.length - 1) {
      curTestimonial = 0;
    } else {
      curTestimonial++;
    }

    testimonialName.innerHTML = testimonials.names[curTestimonial];
    testimonialParagraph.innerHTML = testimonials.paragraph[curTestimonial];
    testimonialBox.style.animation = `slideLeft 0.5s ease 0s 1 normal forwards`;
  }, 500);

  setTimeout(() => {
    testimonialBox.style.animation = ``;
    btnArrowsDisabled(false);
  }, 1000);
}

function btnArrowsDisabled(state = true) {
  buttonArrowLeft.disabled = state;
  buttonArrowRight.disabled = state;
}

// Plans carousel
document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    perPage: 3,
    gap: "3rem",
    speed: 1000,
    perMove: 1,
    pagination: false,
    drag: false,
    autoplay: true,
    interval: 5000,
    rewind: true,
    breakpoints: {
      1400: {
        perPage: 2,
        gap: "2rem",
        drag: true,
      },
      950: {
        perPage: 1,
        drag: true,
        pagination: true,
      },
    },
  });
  splide.mount();
});
