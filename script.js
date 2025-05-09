// Ajouter un écouteur d'événement au chargement du script
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      registerUser();
    });
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      loginUser();
    });
  }
  const logoutButton = document.getElementById("btnLogout");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      logoutUser();
    });
  }
});

// ---------------------Fonctionnalité register---------------------
function registerUser() {
  // Récupération des données du formulaire
  let registerName = document.getElementById("nameRegister").value;
  let passwordRegister = document.getElementById("passwordRegister").value;
  let passwordConfirm = document.getElementById("passwordConfirm").value;

  // Vérification du mot de passe identique
  if (passwordRegister !== passwordConfirm) {
    alert("Les mots de passe ne correspondent pas !");
    return;
  } else {
    // Stocker les données en local
    const userData = {
      name: registerName,
      password: passwordRegister,
    };
    localStorage.setItem("name", registerName);
    localStorage.setItem("password", passwordRegister);
    // console.log(userData);

    alert("Inscription réussie ! Vous pouvez vous connecter.");
    // Redirection vers la page de connexion
    window.location.href = "login.html";
  }
}
// ---------------------Fonctionnalité login---------------------
function loginUser() {
  // Récupération des données du formulaire
  let loginName = document.getElementById("nameLogin").value;
  let passwordLogin = document.getElementById("passwordLogin").value;

  // Récupération des données stockées
  const storedName = localStorage.getItem("name");
  const storedPassword = localStorage.getItem("password");

  // Vérification des données

  if (loginName === storedName && passwordLogin === storedPassword) {
    alert("Connexion réussie ! Bienvenue " + loginName + " !");
    // met à jour le statut de connexion
    localStorage.setItem("islogged", "true");
    // Redirection vers la page d'accueil
    window.location.href = "home.html";
  } else {
    alert("Nom d'utilisateur ou mot de passe incorrect !");
  }
}
// ---------------------Fonctionnalité logout---------------------
function logoutUser() {
  // Supprimer les données de connexion
  localStorage.removeItem("islogged");
  alert("Déconnexion réussie !");
  // Redirection vers la page de connexion
  window.location.href = "login.html";
}
// fonctionnalité animation scroll text --------------------------

let selection = Splitting();
// console.log(selection);

gsap.registerPlugin(ScrollTrigger);
// selection du premier paragraphe "synopsys"---------

gsap.from(selection[0].chars, {
  y: 100,
  rotation: 90,
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".text-reveal1", // Déclencheur : 'élément original
    start: "top 50%", // Affiche les marqueurs de début et de fin
    end: "bottom 50%",
    scrub: true, // Permet de contrôler l'animation avec le scroll
  },
});
// selction le deuxième paragraphe Pourquoi ?---------

gsap.from(selection[1].chars, {
  // x: 100,
  opacity: 0,
  stagger: 0.5, // Délai entre chaque caractère
  scrollTrigger: {
    trigger: ".text-reveal2", // Déclencheur : 'élément original
    // markers: true,
    start: "top 60%", // Affiche les marqueurs de début et de fin
    end: "bottom 100%",
    scrub: true, // Permet de contrôler l'animation avec le scroll
  },
});

// -----------smooth with lenis-------------

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 600); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
