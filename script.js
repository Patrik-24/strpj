function openForm() {
    document.querySelector(".uvodT").style.display = "none";
    document.getElementById("myForm").style.display = "block";
}


function submitForm() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;

    // Zde můžeš upravit formátování výstupu podle svých potřeb
    var resultText = "tu nieco: " + firstName + "<br>aj tu: " + lastName + "<br>tu bude nieco: " + email;

    // Vloží vyplněné údaje do divu s id "result"
    document.getElementById("result").innerHTML = resultText;

    // Skryje formulář a zobrazí potvrzení
    document.getElementById("myForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}

