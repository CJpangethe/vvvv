$('.owl-carousel').owlCarousel({
    loop:false,
    margin:5,
    nav:false,
    center: false,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:3
        }
    }
})

$(function () {


    let nav = $('#nav');
    let navToggle = $('#navToggle');
    let navLink = $('.nav__link');

    navToggle.on('click', (e) => {
        nav.toggleClass('nav-show');

    })

    navLink.on('click', (e) => {
        nav.toggleClass('nav-show');
    })

})






function toggleButton() {
    let button = document.getElementById('videoButton');
    button.addEventListener('click', () => {
        button.style.display = "none";
    })
}

toggleButton();

function modal() {
    let buttonOpen = document.getElementById('orderButton');
    let buttonOpen2 = document.getElementById('orderButton2');
    let buttonOpen3 = document.getElementById('orderButton3');
    let buttonOpen4 = document.getElementById('orderButton4');
    
    let buttonClose = document.getElementById('buttonClose');
    let modal = document.getElementById('modal');

    buttonOpen.addEventListener('click', () => {
        modal.style.display = 'block';
    })
    buttonOpen2.addEventListener('click', () => {
        modal.style.display = 'block';
    })
    buttonOpen3.addEventListener('click', () => {
        modal.style.display = 'block';
    })
    buttonOpen4.addEventListener('click', () => {
        modal.style.display = 'block';
    })

    buttonClose.addEventListener('click', () => {
        modal.style.display = 'none';
    })

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    })


}

modal();
