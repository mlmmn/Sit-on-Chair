document.addEventListener('DOMContentLoaded', function() {
    bindHeroCarousel();
    bindDropdownMenu();
    bindShowcaseCards();
});

function bindHeroCarousel() {
    var counter = 0;
    var prevButton = document.querySelector('.carousel__arrow[data-dir=prev]');
    var nextButton = document.querySelector('.carousel__arrow[data-dir=next]');

    prevButton.addEventListener('mousedown', prevElement);
    nextButton.addEventListener('mousedown', nextElement);

    function prevElement() {
        var list = this.parentElement.querySelector('.carousel__list');
        var firstElement = list.firstElementChild;
        var secondElement = list.lastElementChild;
        var temp;

        firstElement.classList.remove('carousel__list__element--active');
        secondElement.classList.add('carousel__list__element--active');

        temp = secondElement.cloneNode(true);
        list.removeChild(secondElement);
        list.insertBefore(temp, firstElement);
    }

    function nextElement() {
        var list = this.parentElement.querySelector('.carousel__list');
        var firstElement = list.firstElementChild;
        var secondElement = firstElement.nextElementSibling;
        var temp;

        firstElement.classList.remove('carousel__list__element--active');
        secondElement.classList.add('carousel__list__element--active');

        temp = firstElement.cloneNode(true);
        list.removeChild(firstElement);
        list.appendChild(temp);
    }
}

function bindDropdownMenu() {
    var dropdownMenus = document.querySelectorAll('.site-menu__dropdown');

    for (var i = 0; i < dropdownMenus.length; i++) {
        var currentMenu = dropdownMenus[i];
        var currentParent = currentMenu.parentElement;

        currentParent.addEventListener('mouseenter', function() {
            currentMenu.classList.add('site-menu__dropdown--visible');
        });

        currentParent.addEventListener('mouseleave', function () {
            currentMenu.classList.remove('site-menu__dropdown--visible');
        });
    }
}

function bindShowcaseCards() {
    var showcaseCards = document.querySelectorAll('.showcase__card:not(.showcase__card--informative)');

    for (var i = 0; i < showcaseCards.length; i++) {
        var currentCard = showcaseCards[i];

        currentCard.addEventListener('mouseenter', function () {
            var currentCardTitle = this.querySelector('.showcase__card__title');
            currentCardTitle.classList.add('showcase__card__title--visible');
        });

        currentCard.addEventListener('mouseleave', function () {
            var currentCardTitle = this.querySelector('.showcase__card__title');
            currentCardTitle.classList.remove('showcase__card__title--visible');
        });
    }
}