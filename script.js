$('.image-wrapper').on("mouseover", function() {
    $(this).children("p").fadeIn(500)
    $(this).children(".back").fadeIn(300)
})

$('.image-wrapper').on("mouseleave", function() {
    $(this).children("p").fadeOut(200)
    $(this).children(".back").fadeOut(300)
})