const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});



document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    var navItems = document.getElementById('nav-itm');
    if (navItems.style.display === "flex") {
        navItems.style.display = "";
    } else {
        navItems.style.display = "flex";
    }
});

