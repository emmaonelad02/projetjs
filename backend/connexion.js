document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Validation des informations de connexion (vous pouvez ajouter votre propre logique de validation ici)
    if (username === "utilisateur" && password === "motdepasse") {
        alert("Connexion réussie!");
        // Redirection vers une page après la connexion réussie
        window.location.href = "page_accueil.html";
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect!");
    }
});
