
function toggleHamburger() {
  let hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    if (hamburger.classList.contains("is-active")) {
      hamburger.classList.remove("is-active");
    } else {
      hamburger.classList.add("is-active");
    }
  }
  let navMenu = document.querySelector(".nav-menu");
  if (navMenu) {
    if (navMenu.classList.contains("is-active")) {
      navMenu.classList.remove("is-active");
    } else {
      navMenu.classList.add("is-active");
    }
  }
}

function changeColorScheme(colorScheme) {
  let tabula = document.querySelector(".tabula");
  if (tabula) {
    tabula.dataset.colorScheme = colorScheme;
  }
}

function toggleModal() {
  let modal = document.querySelector(".modal");
  if (modal) {
    if (modal.classList.contains("is-active")) {
      modal.classList.remove("is-active");
    } else {
      modal.classList.add("is-active");
    }
  }
}

function changeColor(color) {
  document.querySelectorAll(".header").forEach((elem) => {
    elem.className = `header is-sticky ${color}`;
  });

  document.querySelectorAll(".card").forEach((elem) => {
    elem.className = `card ${color}`;
  });

  document.querySelectorAll(".input").forEach((elem) => {
    elem.className = `input ${color}`;
  });

  document.querySelectorAll(".hamburger").forEach((elem) => {
    elem.className = `hamburger ${color}`;
  });

  document.querySelectorAll(".message").forEach((elem) => {
    elem.className = `message ${color}`;
  });

  document.querySelectorAll(".nav").forEach((elem) => {
    elem.className = `nav ${color}`;
  });

  document.querySelectorAll(".dot").forEach((elem) => {
    elem.className = `dot ${color} aspect-ratio-16-9`;
  });

  document.querySelectorAll(".gingham").forEach((elem) => {
    elem.className = `gingham ${color} aspect-ratio-16-9`;
  });

  document.querySelectorAll(".stripe").forEach((elem) => {
    elem.className = `stripe ${color} aspect-ratio-16-9`;
  });

  document.querySelectorAll(".accordion").forEach((elem) => {
    elem.className = `accordion ${color}`;
  });

  document.querySelectorAll(".dialogue.is-avatar-left").forEach((elem) => {
    elem.className = `dialogue is-avatar-left ${color}`;
  });

  document.querySelectorAll(".dialogue.is-avatar-right").forEach((elem) => {
    elem.className = `dialogue is-avatar-right ${color}`;
  });

  document.querySelectorAll(".modal").forEach((elem) => {
    elem.className = `modal ${color}`;
  });
}
