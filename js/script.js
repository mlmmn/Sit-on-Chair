document.addEventListener('DOMContentLoaded', function() {
    bindDropdownMenu();
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