function validateForm() {
    let x = document.forms["myForm"]["firstName3"].value;
    if (x=="") {
        alert("Name must be filled out");
        return false;
    }
}