let spacer = document.querySelector('.spacer');
let MobileOpen = document.querySelector('.Mobile-open');
let  faXmark = document.querySelector('.def')

spacer.addEventListener('click', function() {
    if(MobileOpen.style.display === "block") {
        MobileOpen.style.display = "none";
    } else {
        MobileOpen.style.display = "block";
    }
});

faXmark.addEventListener('click', function() {
    MobileOpen.style.display = "none";
});

