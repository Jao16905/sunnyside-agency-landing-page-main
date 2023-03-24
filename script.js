let hamburger = document.querySelector(".hamburguer");
let ul = document.querySelector("nav ul");
//IMG selections
let standOut = document.querySelector(".standOut img")
let transform = document.querySelector(".transform img")
let galleryImages = document.querySelectorAll(".galleryImages img")

addEventListener("resize", () => {

    if(window.screen.width >= "500" ){
        standOut.setAttribute("src", "./images/desktop/image-stand-out.jpg");
        transform.setAttribute("src" , "./images/desktop/image-transform.jpg");
        galleryImages[0].setAttribute("src", "./images/desktop/image-gallery-milkbottles.jpg")
        galleryImages[1].setAttribute("src", "./images/desktop/image-gallery-orange.jpg")
        galleryImages[2].setAttribute("src", "./images/desktop/image-gallery-cone.jpg")
        galleryImages[3].setAttribute("src", "./images/desktop/image-gallery-sugarcubes.jpg")

    }

})

hamburger.addEventListener("click" , () => {

    hamburger.classList.toggle("active");
    ul.classList.toggle("active")
})
