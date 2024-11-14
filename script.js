// Attendre que la page soit complètement chargée
window.addEventListener("load", function () {
  // Cacher le loader après 3 secondes
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 500);
});

//=========================Navbar Stickey animation==========================
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".lux-navbar");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= 100) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
});
//==============================Carousel animations============================

//------------------Empêcher la pause au "Hover" de la sourise----------------
var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 9000, // Défilement automatique toutes les 4 secondes
  wrap: true, // Le carousel revient à la première diapositive après la dernière
});

// Empêcher la pause du défilement automatique lorsque la souris survole le carousel
myCarousel.addEventListener("mouseover", function () {
  carousel.cycle();
});

//--------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour jouer l'animation du texte
  function playTextAnimation(element) {
    anime
      .timeline()
      .add({
        targets: element.querySelector(".ml8 .circle-white"),
        scale: [0, 3],
        opacity: [0, 1],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100,
      })
      .add({
        targets: element.querySelector(".ml8 .circle-container"),
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: "-=1000",
      })
      .add({
        targets: element.querySelector(".ml8 .circle-dark"),
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: "-=600",
      })
      .add({
        targets: element.querySelector(".ml8 .letters-left"),
        scale: [0, 1],
        duration: 1200,
        offset: "-=550",
      })
      .add({
        targets: element.querySelector(".ml8 .bang"),
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: "-=1000",
      });

    anime({
      targets: element.querySelector(".ml8 .circle-dark-dashed"),
      rotateZ: 360,
      duration: 10000,
      easing: "linear",
      loop: true,
    });
  }

  // Options pour l'observateur d'intersection
  const options = {
    root: null, // Utilise la fenêtre comme conteneur
    rootMargin: "0px", // Marge supplémentaire autour de la fenêtre
    threshold: 0.01, // Déclencher lorsque la moitié de l'élément est visible
  };

  // Créer un observateur d'intersection
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Si l'élément est visible à l'écran, jouer l'animation du texte
        playTextAnimation(entry.target);
      }
    });
  }, options);

  // Récupérer tous les éléments de diapositives du carousel
  const carouselItems = document.querySelectorAll(".carousel-item");

  // Observer chaque élément de diapositive
  carouselItems.forEach((item) => {
    observer.observe(item);
  });

  // Réinitialiser l'état de l'animation à chaque changement de diapositive
  const myCarousel = document.getElementById("myCarousel");
  myCarousel.addEventListener("slid.bs.carousel", function (event) {
    const activeSlide = event.relatedTarget;
    observer.observe(activeSlide);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour jouer l'animation du texte avec Anime.js
  function playAnimeTextAnimation(targets, animation) {
    anime(animation);
  }

  // Options pour l'observateur d'intersection
  const options = {
    root: null, // Utilise la fenêtre comme conteneur
    rootMargin: "0px", // Marge supplémentaire autour de la fenêtre
    threshold: 0.01, // Déclencher lorsque la moitié de l'élément est visible
  };

  // Créer un observateur d'intersection pour la première animation
  const observerAnime1 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Si l'élément est visible à l'écran, jouer l'animation Anime.js
        playAnimeTextAnimation(".ml15 .word", {
          targets: ".ml15 .word",
          scale: [14, 1],
          opacity: [0, 1],
          easing: "easeOutCirc",
          duration: 800,
          delay: (el, i) => 800 * i,
        });
      }
    });
  }, options);

  // Observer l'élément de la première animation
  const textAnimation1 = document.querySelector(".ml15 .word");
  observerAnime1.observe(textAnimation1);

  // Créer un observateur d'intersection pour la deuxième animation
  const observerAnime2 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Si l'élément est visible à l'écran, jouer l'animation Anime.js
        playAnimeTextAnimation(".ml3 .letter", {
          targets: ".ml3 .letter",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i + 1),
        });
      }
    });
  }, options);

  // Observer l'élément de la deuxième animation
  const textAnimation2 = document.querySelector(".ml3");
  observerAnime2.observe(textAnimation2);
});

document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour jouer l'animation du texte
  function playTextAnimation() {
    var textWrapper = document.querySelector(".ml11 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline()
      .add({
        targets: ".ml11 .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
      })
      .add({
        targets: ".ml11 .line",
        translateX: [
          0,
          document.querySelector(".ml11 .letters").getBoundingClientRect()
            .width + 10,
        ],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100,
      })
      .add({
        targets: ".ml11 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: (el, i) => 34 * (i + 1),
      });
  }

  // Fonction pour observer les changements de diapositives et jouer l'animation
  function observeCarousel() {
    const myCarousel = document.getElementById("myCarousel");
    let isAnimationPlayed = false; // Indique si l'animation a déjà été jouée sur la diapositive active

    // Options pour l'observateur d'intersection
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.01, // Se déclenche lorsque 25% de la cible est visible
    };

    // Créer un observateur d'intersection
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeSlide = entry.target;
          const ml11Element = activeSlide.querySelector(".ml11");

          if (ml11Element && !isAnimationPlayed) {
            playTextAnimation();
            isAnimationPlayed = true; // Marque l'animation comme jouée pour la diapositive active
          }
        }
      });
    }, options);

    // Observer chaque élément de diapositive
    const carouselItems = document.querySelectorAll(".carousel-item");
    carouselItems.forEach((item) => {
      observer.observe(item);
    });

    // Réinitialiser l'état de l'animation à chaque changement de diapositive
    myCarousel.addEventListener("slid.bs.carousel", function (event) {
      const activeSlide = event.relatedTarget;
      isAnimationPlayed = false; // Réinitialiser l'état de l'animation
    });
  }

  // Exécuter la fonction pour observer le carousel
  observeCarousel();
});

//Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // Lorsque la largeur de l'écran est inférieure à 1000px, passez à 2 colonnes
    1120: {
      slidesPerView: 3,
    },
    // Lorsque la largeur de l'écran est inférieure à 450px, passez à 1 colonne
    780: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

// Navbar background changing
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".lux-navbar");
  const toggler = document.getElementById("toggler");

  // Scroll event for sticky navbar
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= 100) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  // Toggler click event for changing background color
  toggler.addEventListener("click", function () {
    var isExpanded = this.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      navbar.style.background = "#000050";
    } else {
      navbar.style.background = "transparent";
    }
  });
});

// Counter (LPSIC en quelques chiffres)
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");
  const section = document.querySelector(".compteur");

  // Options pour l'observateur d'intersection
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25, // Se déclenche lorsque 25% de la cible est visible
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Lorsque la section est visible à 25% ou plus
        counters.forEach(function (counter) {
          // Réinitialiser l'indicateur de réinitialisation
          counter.dataset.reset = "true";
        });
        // Déclencher les compteurs
        triggerCounters();
      }
    });
  }, options);

  // Observer la section .compteur
  observer.observe(section);

  // Fonction pour déclencher les compteurs
  function triggerCounters() {
    counters.forEach(function (counter) {
      const target = parseInt(counter.getAttribute("data-target"));
      const speed = 10; // Vitesse de comptage
      let count = 0;
      let reset = counter.dataset.reset === "true";

      const updateCounter = function () {
        if (count < target) {
          count++; // Incrémentation de count de 1
          counter.innerText = count;
          setTimeout(updateCounter, speed); // Vitesse de comptage
        }
      };

      if (reset) {
        // Réinitialiser le compteur si reset est true
        count = 0;
        counter.innerText = count;
        counter.dataset.reset = "false";
      }
      updateCounter();
    });
  }
});

// Script pour faire apparaître les informations de façon dynamique et animé

const sr = ScrollReveal({
  reset: false,
  distance: "45px",
  duration: 2000,
  delay: 100,
});
sr.reveal(".visible-bottom", { origin: "bottom" });

// Variable pour détecter le dernier positionnement de défilement
let lastScrollTop = 0;

// Détecter la direction du défilement
window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  // Si l'utilisateur fait défiler vers le bas, activer ScrollReveal
  if (scrollTop < lastScrollTop) {
    sr.reveal(".visible-bottom", { origin: "bottom" });
  }

  lastScrollTop = scrollTop;
});
