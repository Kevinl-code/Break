function burn(button) {
    let img = button.closest(".photo").querySelector("img");
    img.classList.add("burn");
}

function cut(button) {
    let img = button.closest(".photo").querySelector("img");
    img.classList.add("cut");
}

function bury(button) {
    let img = button.closest(".photo").querySelector("img");
    img.classList.add("bury");
}
