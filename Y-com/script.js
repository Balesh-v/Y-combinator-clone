let spacer = document.querySelector('.spacer');
let MobileOpen = document.querySelector('.Mobile-open');
let  faXmark = document.querySelector('.def')
let body = document.querySelector('body');  
let drop = document.querySelectorAll(".box")[0];
let drop1 = document.querySelectorAll(".box")[1];
let dropContent = document.querySelectorAll(".dropdown-content-mobile")[0]
let dropContent1 = document.querySelectorAll(".dropdown-content-mobile")[1]
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

drop1.addEventListener('click', function(){

    dropContent.style.display = "none"
    
    if(dropContent1.style.display === "none"){
        dropContent1.style.display = "block";
    } else {
        dropContent1.style.display = "none"
    }

})