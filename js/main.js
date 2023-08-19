// slider code
$('#main-slider').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('#cat-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('#product-slider').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('#category-slider').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('#testimonial-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

$('#feature-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('#dropdown-slider1').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
$('#dropdown-slider2').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

// variant select
$('.firstvar').on('click', () => {
    $('.firstvar').addClass("selected");
    $('.secondvar').removeClass("selected");
})
$('.secondvar').on('click', () => {
    $('.secondvar').addClass("selected");
    $('.firstvar').removeClass("selected");
})

// product accordion open

// $('#accordion-1').on('click', ()=>{
//     $("#accordion-desc-1").toggleClass('expand');
//     $('#chevron-down1').toggleClass('rotate');
// })
// $('#accordion-2').on('click', ()=>{
//     $("#accordion-desc-2").toggleClass('expand');
//     $('#chevron-down2').toggleClass('rotate');
// })
// $('#accordion-3').on('click', ()=>{
//     $("#accordion-desc-3").toggleClass('expand');
//     $('#chevron-down3').toggleClass('rotate');
// })
// $('#accordion-4').on('click', ()=>{
//     $("#accordion-desc-4").toggleClass('expand');
// })

let acc = document.getElementsByClassName("accordion-head");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        let chevron = this.lastElementChild;
        chevron.classList.toggle('rotate');
        let accordionDesc = this.nextElementSibling;
        if (accordionDesc.style.display === "block") {
            accordionDesc.style.display = "none";
        } else {
            accordionDesc.style.display = "block";
        }
    });
}

// Saerch bar 

$('.search-btn').on('click', () => {
    $('.search-bar').css('display', 'flex');
})

$('main').on('click', () => {
    $('.search-bar').css('display', 'none');
})

// cart header btn
$('.cart').on('click', () => {
    $('.cart-slide').slideToggle();
})

// menu open and close code starts here

$('.menu-open').on("click", () => {
    $('.mobile-menu').toggleClass("open");
    $('.menu-open').toggleClass('hide');
    $('.menu-close').toggleClass('show');
})

$('.menu-close').on('click', () => {
    $('.mobile-menu').toggleClass("open");
    $('.menu-open').toggleClass('hide');
    $('.menu-close').toggleClass('show');
})

// menu open and close code ends here

// Category filter

// $(".cat-list").click(function(){
//     const value = $(this).attr('data-filter');
//     if (value == 'all') {
//         $('.item').show('1000');
//     } else {
//         $('.item').not('.' + value).hide('1000');
//         $('.item').filter('.' + value).show('1000');
//     }
// })

// add active class on selected item
$('.cat-list').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
})
