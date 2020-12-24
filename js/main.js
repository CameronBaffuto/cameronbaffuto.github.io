function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function submitForm(form) {
    location.href ="mailto:cambaffuto@gmail.com?subject=Hi%20Cam!&body=Hi%20my%20name%20is%20" + form.name.value + "%0D%0A" + "%20My%20message%20is...%20" + form.comment.value;
    return false;
}

