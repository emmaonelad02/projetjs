document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    
    // Enregistrement de nouveaux utilisateurs (vous pouvez ajouter votre propre logique d'enregistrement ici)
    alert("Inscription réussie pour l'utilisateur: " + newUsername);
    // Redirection vers la page de connexion après l'inscription réussie
    window.location.href = "connexion.html";
});