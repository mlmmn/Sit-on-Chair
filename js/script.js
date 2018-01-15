document.addEventListener('DOMContentLoaded', function () {
    bindSlider();
    bindDropdownMenu();
    bindShowcaseCards();
});

function bindSlider() {
    var slider = document.querySelector('#slider');
    var prevButton = slider.querySelector('button[data-slide=prev]');
    var nextButton = slider.querySelector('button[data-slide=next]');

    prevButton.addEventListener('mousedown', prevElement);
    nextButton.addEventListener('mousedown', nextElement);

    function prevElement() {
        var sliderItems = this.parentElement.querySelectorAll('.slider__item');
        var firstItem = sliderItems[0];
        var nextItem = sliderItems[sliderItems.length - 1];

        firstItem.classList.remove('slider__item--active');
        nextItem.classList.add('slider__item--active');

        firstItem.before(nextItem.cloneNode(true));
        nextItem.remove();
    }

    function nextElement() {
        var sliderItems = this.parentElement.querySelectorAll('.slider__item');
        var firstItem = sliderItems[0];
        var nextItem = sliderItems[1];
        var lastItem = sliderItems[sliderItems.length - 1];

        firstItem.classList.remove('slider__item--active');
        nextItem.classList.add('slider__item--active');

        lastItem.after(firstItem.cloneNode(true));
        firstItem.remove();
    }
}

function bindDropdownMenu() {
    var dropdownMenus = document.querySelectorAll('.nav__list--dropdown');

    for (var i = 0; i < dropdownMenus.length; i++) {
        var currentMenu = dropdownMenus[i];
        var currentParent = currentMenu.parentElement;

        currentParent.addEventListener('mouseenter', function () {
            currentMenu.classList.add('nav__list--dropdown--visible');
        });

        currentParent.addEventListener('mouseleave', function () {
            currentMenu.classList.remove('nav__list--dropdown--visible');
        });
    }
}

function bindShowcaseCards() {
    var showcaseCards = document.querySelectorAll('.showcase-card:not(.showcase-card--informative)');

    for (var i = 0; i < showcaseCards.length; i++) {
        var currentCard = showcaseCards[i];

        currentCard.addEventListener('mouseenter', function () {
            var currentCardTitle = this.querySelector('.showcase-card__title');
            currentCardTitle.classList.add('showcase-card__title--hidden');
        });

        currentCard.addEventListener('mouseleave', function () {
            var currentCardTitle = this.querySelector('.showcase-card__title');
            currentCardTitle.classList.remove('showcase-card__title--hidden');
        });
    }
}