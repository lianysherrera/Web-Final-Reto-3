// Get the modal element
var modal = document.getElementById("modal");

// Get the button that opens the modal

var openModalButtons = document.getElementsByClassName("botones");

// Get the <span> element that closes the modal
var closeModalButton = document.getElementsByClassName("close")[0];

// Get the form element
var bookingForm = document.getElementById("booking-form");

// Get the confirmation message element
var confirmationMessage = document.getElementById("confirmation-message");

// Get the confirmation details elements
var confirmationName = document.getElementById("confirmation-name");
var confirmationPhone = document.getElementById("confirmation-phone");
var confirmationEmail = document.getElementById("confirmation-email");
var confirmationDate = document.getElementById("confirmation-date");
var confirmationTime = document.getElementById("confirmation-time");
var confirmationGroupSize = document.getElementById("confirmation-group-size");

// When the user clicks on the button, open the modal
for(openModalButton of openModalButtons) { 
    openModalButton.onclick = function() {
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
closeModalButton.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

function showConfirmation() {
    const form = document.getElementById("booking-form");
    const confirmationMessage = document.getElementById("confirmation-message");
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const groupSize = document.getElementById("group-size").value;
    
    // Aquí puede agregar la lógica para enviar los datos del formulario a su backend o almacenamiento.
    
    // Muestre el mensaje de confirmación
    confirmationMessage.style.display = "block";
    bookingForm.style.display = "none";
    confirmationMessage.style.display = "block";
    
    // Actualice los detalles de confirmación con los valores del formulario.
    document.getElementById("confirmation-name").innerText = name;
    document.getElementById("confirmation-phone").innerText = phone;
    document.getElementById("confirmation-email").innerText = email;
    document.getElementById("confirmation-date").innerText = date;
    document.getElementById("confirmation-time").innerText = time;
    document.getElementById("confirmation-group-size").innerText = groupSize;
    
    // Restablezca los valores del formulario.
    form.reset();
    }

