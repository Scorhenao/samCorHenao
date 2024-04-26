// Inicialización del slider principal
var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1, // Número de slides visibles por vista
    spaceBetween: 20, // Espacio entre cada slide
    loop: true, // Habilita el modo de bucle infinito
    pagination: {
        el: ".swiper-pagination", // Selector del elemento de paginación
        clickable: true, // Permite la navegación a través de los puntos de paginación
    },
    navigation: {
        nextEl: ".swiper-button-next", // Selector del botón de siguiente
        prevEl: ".swiper-button-prev" // Selector del botón de anterior
    }
});

// Inicialización del slider de miniaturas

//var swiper = new Swiper(".mySwiper-2", {
    //slidesPerView: 3, // Número de slides visibles por vista
    //spaceBetween: 20, // Espacio entre cada slide
    //loop: true, // Habilita el modo de bucle infinito
    //navigation: {
        //nextEl: ".swiper-button-next", // Selector del botón de siguiente
        //prevEl: ".swiper-button-prev" // Selector del botón de anterior
    //},
    //breakpoints: { // Ajuste del número de slides visibles en diferentes tamaños de pantalla
        //768: { // Cuando el ancho de la pantalla es igual o mayor a 768px
            //slidesPerView: 2 // Cambia el número de slides visibles a 2
        //},
        //1200: { // Cuando el ancho de la pantalla es igual o mayor a 1200px
            //slidesPerView: 3 // Cambia el número de slides visibles a 3
        //}
    //}
//});
