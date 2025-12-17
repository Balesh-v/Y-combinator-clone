let spacer = document.querySelector('.spacer');
let MobileOpen = document.querySelector('.Mobile-open');
let  faXmark = document.querySelector('.def')
let body = document.querySelector('body');  
let drop = document.querySelectorAll(".box");
console.log(drop)
let dropContent = document.querySelectorAll(".dropdown-content-mobile")
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



drop[0].addEventListener('click', function(){
    if(dropContent[0].style.display === "none"){
        dropContent[0].style.display = "block";
    } else {
        dropContent[0].style.display = "none"
    }
})

drop[1].addEventListener('click', function(){
    if(dropContent[1].style.display === "none"){
        dropContent[1].style.display = "block";
    } else {
        dropContent[1].style.display = "none"
    }
    dropContent[0].style.display = "none";
})

