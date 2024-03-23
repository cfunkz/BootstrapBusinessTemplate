var services = [
    {
        dayId: 'dayService4',
        priceId: 'priceService4',
        slider: 'daySlider4',
        price: 60
    },
    {
        dayId: 'dayService3',
        priceId: 'priceService3',
        slider: 'daySlider3',
        price: 55
    },
    {
        dayId: 'dayService2',
        priceId: 'priceService2',
        slider: 'daySlider2',
        price: 50
    },
    {
        dayId: 'dayService1',
        priceId: 'priceService1',
        slider: 'daySlider1',
        price: 35
    }
];

var discountWeek = 0.7;
var discountMonth = 0.6;

document.addEventListener('DOMContentLoaded', function() {
    var sliders = document.querySelectorAll('.form-range');
    sliders.forEach(function(slider) { //For each slider in sliders (slider)
        slider.addEventListener('input', function() { //Add event listener to the "input"
            var sliderValue = this.value; //Gets the slider value 
            var sliderId = this.id; //Gets the "ID" name of the slider which changed value
            updatePrice(sliderValue, sliderId); //Call updatePrice
        });
    });

    function updatePrice(sliderValue, sliderId) {
        services.forEach(function(service) { //For each service in services (service)
            if (service.slider === sliderId) { // If service.slider equals sliderId recieved from updatePrice call
                if (sliderValue >= 28) {
                    totalPrice = sliderValue * (service.price * discountMonth); //get price and update priceService1 with 40% discount 28 days
                }
                else if (sliderValue >= 7) {
                    totalPrice = sliderValue * (service.price * discountWeek); //get price and update priceService1 with 30% discount 7 days
                }
                else {
                    totalPrice = sliderValue * service.price; 
                }
                document.getElementById(service.dayId).textContent = sliderValue + ' Days'; // get slider and update dayService1
                document.getElementById(service.priceId).textContent = '£' + totalPrice.toFixed(2); //update the UI component to 2 decimals
            }
        });
    }
});
$(document).ready(function() {
    $('a.nav-link').on('click', function(clickevent) {
        clickevent.preventDefault(); // Prevent default link
        var targetId = $(this).attr('href'); // Get the target section ID from the "href" of the clicked link
        var offsetTop = $(targetId).offset().top; // Calculate the top offset of the target section
        $('html, body').animate({
            scrollTop: offsetTop // Scroll effect
        }, 800); // Duration
    });

    $(window).on('scroll', function() {
        var navHeight = $('.navbar').outerHeight();
        var scrollTop = $(this).scrollTop();
        if (scrollTop > navHeight) {
            $('.navbar').fadeOut();
            $('#backToTopBtn').fadeIn();
        } else {
            $('.navbar').fadeIn();
            $('#backToTopBtn').fadeOut();
        }
    });
    
    $('#backToTopBtn').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $('.carousel-control-prev').click(function() {
        $('#pics').carousel('prev');
    });

    $('.carousel-control-next').click(function() {
        $('#pics').carousel('next');
    });
});
