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
const digitalDesign = document.querySelector(".digital-design");
const digitalDesignImgeAnimation1 = document.querySelector(
  ".digital-design__image-1-animation"
);
const digitalDesignImgeAnimation2 = document.querySelector(
  ".digital-design__image-2-animation"
);
const digitalDesignImgeAnimation3 = document.querySelector(
  ".digital-design__image-3-animation"
);
const digitalDesignImgeAnimation4 = document.querySelector(
  ".digital-design__image-4-animation"
);
const digitalDesignImgeAnimation5 = document.querySelector(
  ".digital-design__image-5-animation"
);
const digitalDesignImgeAnimationCard = document.querySelector(
  ".digital-design__card"
);
const whatWeDO = document.querySelector(".what-we-do");
const whatWeDoImageAnimation1 = document.querySelector(
  ".what-we-do__second-section__first-img__animation"
);
const whatWeDoImageAnimation2 = document.querySelector(
  ".what-we-do__second-section__second-img__animation"
);
const whatWeDoImageAnimation3 = document.querySelector(
  ".what-we-do__second-section__third-img__animation"
);
const whatWeDoImageAnimation4 = document.querySelector(
  ".what-we-do__second-section__fourth-img__animation"
);
const whatWeDoImageAnimationCard = document.querySelector(
  ".what-we-do__second-section__card"
);
const weAreTeam = document.querySelector(".we-are-a-team");
const weAreTeamAnimationDiv1 = document.querySelector(".we-are-a-team__title");
const weAreTeamAnimationDiv2 = document.querySelector(
  ".we-are-a-team__content"
);
const contact = document.querySelector(".contact");
const contactImageAnimation1 = document.querySelector(
  ".contact__image-1__animation"
);
const contactImageAnimation5 = document.querySelector(
  ".contact__image-5__animation"
);
const contactImageAnimation2 = document.querySelector(
  ".contact__image-2__animation"
);
const contactImageAnimation3 = document.querySelector(
  ".contact__image-3__animation"
);
const contactImageAnimation4 = document.querySelector(
  ".contact__image-4__animation"
);
const contactImageAnimation6 = document.querySelector(
  ".contact__image-6__animation"
);
const servicesCard = document.querySelectorAll(
  ".services-card__wrapper__card:nth-child(odd)"
);
const servicesCard2 = document.querySelectorAll(
  ".services-card__wrapper__card:nth-child(even)"
);

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
  { rootMargin: "-120px" }
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

        servicesCard.forEach((e) => {
          e.classList.add("topToBottom");
        });

        servicesCard2.forEach((e) => {
          e.classList.add("bottomToTop");
        });
      } else {
        servicesWomenImg.classList.remove("moveLeftServices");
        servicesBgImg.classList.remove("scale");
        servicesCircle1.classList.remove("moveRight");
        servicesCircle2.classList.remove("moveRight");

        servicesCard.forEach((e) => {
          e.classList.remove("topToBottom");
        });

        servicesCard2.forEach((e) => {
          e.classList.remove("bottomToTop");
        });
      }
    });
  },
  { rootMargin: "-120px" }
);

observerServices.observe(services);

const observerDigitalDesign = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        digitalDesignImgeAnimation1.classList.add("moveLeft");
        digitalDesignImgeAnimation2.classList.add("moveRight");
        digitalDesignImgeAnimation3.classList.add("scale");
        digitalDesignImgeAnimation4.classList.add("bottomToTop");
        digitalDesignImgeAnimation5.classList.add("rotate");
        digitalDesignImgeAnimationCard.classList.add("moveLeftAbsolute");
      } else {
        digitalDesignImgeAnimation1.classList.remove("moveLeft");
        digitalDesignImgeAnimation2.classList.remove("moveRight");
        digitalDesignImgeAnimation3.classList.remove("scale");
        digitalDesignImgeAnimation4.classList.remove("bottomToTop");
        digitalDesignImgeAnimation5.classList.remove("rotate");
        digitalDesignImgeAnimationCard.classList.remove("moveLeftAbsolute");
      }
    });
  },
  { rootMargin: "-120px" }
);

observerDigitalDesign.observe(digitalDesign);

const observerWhatWeDo = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        whatWeDoImageAnimation1.classList.add("moveLeftWhatWiDo");
        whatWeDoImageAnimation2.classList.add("moveRight");
        whatWeDoImageAnimation3.classList.add("rotateWhatWeDo");
        whatWeDoImageAnimation4.classList.add("bottomToTop");
        whatWeDoImageAnimationCard.classList.add("moveRightAbsolute");
      } else {
        whatWeDoImageAnimation1.classList.remove("moveLeftWhatWiDo");
        whatWeDoImageAnimation2.classList.remove("moveRight");
        whatWeDoImageAnimation3.classList.remove("rotateWhatWeDo");
        whatWeDoImageAnimation4.classList.remove("bottomToTop");
        whatWeDoImageAnimationCard.classList.remove("moveRightAbsolute");
      }
    });
  },
  { rootMargin: "-120px" }
);

observerWhatWeDo.observe(whatWeDO);

const observerweAreTeam = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        weAreTeamAnimationDiv1.classList.add("rotateLeft");
        weAreTeamAnimationDiv2.classList.add("rotateRight");
      } else {
        weAreTeamAnimationDiv1.classList.remove("rotateLeft");
        weAreTeamAnimationDiv2.classList.remove("rotateRight");
      }
    });
  },
  { rootMargin: "-120px" }
);

observerweAreTeam.observe(weAreTeam);

observerWhatWeDo.observe(whatWeDO);

const observerContact = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        contactImageAnimation1.classList.add("bottomToTop");
        contactImageAnimation5.classList.add("scaleContact");
        contactImageAnimation2.classList.add("moveLeft");
        contactImageAnimation3.classList.add("moveLeft");
        contactImageAnimation4.classList.add("scaleContact");
        contactImageAnimation6.classList.add("rotate");
      } else {
        contactImageAnimation1.classList.remove("bottomToTop");
        contactImageAnimation5.classList.remove("scaleContact");
        contactImageAnimation2.classList.remove("moveLeft");
        contactImageAnimation3.classList.remove("moveLeft");
        contactImageAnimation4.classList.remove("scaleContact");
        contactImageAnimation6.classList.remove("rotate");
      }
    });
  },
  { rootMargin: "-120px" }
);

observerContact.observe(contact);
