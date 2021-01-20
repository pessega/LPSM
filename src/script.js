//accordion

const accordionList = document.querySelectorAll('.js-accordion dt');
accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');

function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
});

//scroll suave

$('.containerMenu a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 50
	}, 500);
});

//menu


document.addEventListener("DOMContentLoaded", function(){        
    var menu = document.querySelector('.menuMobile');
    var overlay = document.querySelector('.overlay'); 
    var menuButton = document.querySelector('.menuButton');

    menuButton.onclick = ()=> toggleMenu();
    overlay.onclick = ()=> toggleMenu();
    menu.onclick = ()=> toggleMenu();

    function toggleMenu(){
        menu.classList.toggle('show');
        overlay.classList.toggle('show');
    }
});