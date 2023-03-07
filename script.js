const aboutUs = document.querySelector(".about-us");
const services = document.querySelector(".services");
const aboutUsImage = document.querySelectorAll(
  ".about-us__wrapper__container__image img"
);
const aboutUsTitleAndContent = document.querySelectorAll(
  ".about-us__wrapper__container__title-content"
);
const aboutUsTitle = document.querySelector("#about-us-title");
const servicesWomenImg = document.querySelector(".services__image__women-img");
const servicesBgImg = document.querySelector(".services__image__bg-img");
const servicesCircle1 = document.querySelector(".services__circles__circle-1");
const servicesCircle2 = document.querySelector(".services__circles__circle-2");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutUsTitle.classList.add("scale");

        aboutUsImage.forEach((e) => {
          e.classList.add("moveLeft");
        });

        aboutUsTitleAndContent.forEach((e) => {
          e.classList.add("moveRight");
        });
      } else {
        aboutUsTitle.classList.remove("scale");

        aboutUsImage.forEach((e) => {
          e.classList.remove("moveLeft");
        });

        aboutUsTitleAndContent.forEach((e) => {
          e.classList.remove("moveRight");
        });
      }
    });
  },
  { rootMargin: "-250px" }
);

observer.observe(aboutUs);

const observerServices = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        servicesWomenImg.classList.add("moveLeftServices");
        servicesBgImg.classList.add("scale");
        servicesCircle1.classList.add("moveRight");
        servicesCircle2.classList.add("moveRight");
      } else {
        servicesWomenImg.classList.remove("moveLeftServices");
        servicesBgImg.classList.remove("scale");
        servicesCircle1.classList.remove("moveRight");
        servicesCircle2.classList.remove("moveRight");
      }
    });
  },
  { rootMargin: "-250px" }
);

observerServices.observe(services);
