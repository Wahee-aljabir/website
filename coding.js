function deployment() {
    $("#Deploymentsteps").toggle()
}

function installation() {
    $("#installsteps").toggle()
}

function coding() {
    $("#codingsteps").toggle()
}

document.querySelector('button').addEventListener('click', function() {
    document.body.classList.toggle('cover-background');
});