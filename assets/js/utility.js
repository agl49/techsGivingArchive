function navToBurger() {
    let x = document.getElementById("NAV");
    if (x.className === "navBar") {
        x.className = "responsive";
    } else {
        x.className = "navBar";
    }
}