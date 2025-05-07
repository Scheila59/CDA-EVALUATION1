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
});
// ----------------Fonctionnalité is loggedIn---------------------
// verification de l'état de connexion

document.addEventListener("DOMContentLoaded") {
    if (window.location.pathname = "home.html" && localStorage.getItem("islogged") === false || null) {
      alert("Vous devez vous connecter pour voir cette page !");
  }
}

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

//   if (loginName === storedName && passwordLogin === storedPassword) {
//     alert("Connexion réussie ! Bienvenue " + loginName + " !");
//     // met à jour le statut de connexion
//     localStorage.setItem("islogged", "true");
//     let islogged = true;
//     // Redirection vers la page d'accueil
//     window.location.href = "home.html";
//   } else {
//     alert("Nom d'utilisateur ou mot de passe incorrect !");
//   }
// }


