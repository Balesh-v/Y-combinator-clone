let spacer = document.querySelector('.spacer');
let MobileOpen = document.querySelector('.Mobile-open');
let  faXmark = document.querySelector('.def')
let body = document.querySelector('body');  
let drop = document.querySelectorAll(".box")[0];
let dropContent = document.querySelectorAll(".dropdown-content-mobile")[0]
console.log(dropContent)


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



drop.addEventListener('click', function(){
    if(dropContent.style.display === "none"){
        dropContent.style.display = "block";
    } else {
        dropContent.style.display = "none"
    }


})
