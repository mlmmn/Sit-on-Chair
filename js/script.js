document.addEventListener('DOMContentLoaded', function() {
    bindDropdownMenu();
    bindShowcaseCards();
});

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