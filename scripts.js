$(document).ready(function() {

    // SLIDER
    let index = 0;
    const slides = $(".slides img");
    const total = slides.length;

    function showSlide() {
        $(".slides").css("transform", `translateX(${-index * 100}%)`);
    }

    $(".next").click(function() {
        index = (index + 1) % total;
        showSlide();
    });

    $(".prev").click(function() {
        index = (index - 1 + total) % total;
        showSlide();
    });

    // AUTO-SLIDE
    setInterval(function() {
        index = (index + 1) % total;
        showSlide();
    }, 4000);

    // FORMULARIO
    $("#formContacto").submit(function(e) {
        e.preventDefault();
        alert("Gracias por tu mensaje. Pronto nos comunicaremos contigo.");
        this.reset();
    });

});
