document.addEventListener('DOMContentLoaded', function () {
    bindSlider();
    bindDropdownMenu();
    bindShowcaseCards();
    initCalc();
});

function bindSlider() {
    var slider = document.querySelector('#slider');
    var sliderItems = slider.querySelectorAll('.slider__item');
    var prevButton = slider.querySelector('button[data-slide=prev]');
    var nextButton = slider.querySelector('button[data-slide=next]');
    var currentIndex = 0;

    prevButton.addEventListener('mousedown', prevElement);
    nextButton.addEventListener('mousedown', nextElement);

    function prevElement() {
        var nextIndex = currentIndex - 1;

        nextIndex = (nextIndex < 0) ? sliderItems.length - 1 : nextIndex;
        sliderItems[currentIndex].classList.remove('slider__item--active');
        sliderItems[nextIndex].classList.add('slider__item--active');
        currentIndex = nextIndex;
    }

    function nextElement() {
        var nextIndex = currentIndex + 1;

        nextIndex = (nextIndex > (sliderItems.length - 1)) ? 0 : nextIndex;
        sliderItems[currentIndex].classList.remove('slider__item--active');
        sliderItems[nextIndex].classList.add('slider__item--active');
        currentIndex = nextIndex;
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

function initCalc() {
    var form = document.querySelector('#calc');
    var summary = form.querySelector('#calc__table');
    var allInputs = form.querySelectorAll('input');
    var allSelectInputs = form.querySelectorAll('.form__input.form__select');

    for (var i = 0; i < allSelectInputs.length; i++) {
        var selectInput = allSelectInputs[i];
        var selectInputAllItems = selectInput.querySelectorAll('.form__select-item');

        selectInput.setAttribute('tabindex', 0); // Dzięki temu element reaguje na zdarzenie focus

        selectInput.addEventListener('click', function() {
            this.classList.toggle('form__select--focus');
        });

        selectInput.addEventListener('blur', function() {
            this.classList.remove('form__select--focus');
        });

        for (var j = 0; j < selectInputAllItems.length; j++) {
            var selectInputItem = selectInputAllItems[j];

            selectInputItem.addEventListener('click', function(event) {
                var placeholder = this.parentElement.parentElement.querySelector('.form__placeholder');
                var textInput = this.parentElement.parentElement.querySelector('input');
                var name = this.textContent;
                var value = this.dataset.value;

                placeholder.classList.remove('form__placeholder--color--initial')
                placeholder.innerHTML = name;
                textInput.name = name;
                textInput.value = value;
                updateSummary();
            });
        }
    }


    for (var i = 0; i < allInputs.length; i++) {
        allInputs[i].addEventListener('change', updateSummary);
    }

    function updateSummary() {
        var tbody = '';
        var tfoot = '';
        var sum = 0;

        console.log(this.value);

        for (var i = 0; i < allInputs.length; i++) {
            var currentInput = allInputs[i];
            var currentType = currentInput.type;
            var currentText = currentInput.name;
            var currentValue = currentInput.value;

            if (currentType === 'checkbox' && !currentInput.checked) {
                currentValue = "";
            }

            if (currentText !== "" && currentValue !== "") {
                tbody += (i !== 0) ? '<tr>' : '<tr class="text-primary">';
                tbody += '<td class="col">' + currentText + '</td>';
                tbody += '<td class="col">' + currentValue + '</td>';
                tbody += '</tr>';
            }

            sum += 1 * currentValue;
        }

        summary.querySelector('tbody').innerHTML = tbody;

        tfoot += '<tr>';
        tfoot += '<td class="col">Sum</td>';
        tfoot += '<td class="col">' + sum + '</td>';
        tfoot += '</tr>';

        summary.querySelector('tfoot').innerHTML = tfoot;
    }
}