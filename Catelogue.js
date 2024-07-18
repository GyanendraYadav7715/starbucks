document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.querySelector('.menu-container');
    const menuItem = document.querySelector('.menu-item');
    const innerMenu = document.querySelector('.inner-menu');

    function handleMouseEnter() {
        menuContainer.classList.add('hover');
    }

    function handleMouseLeave() {
        menuContainer.classList.remove('hover');
    }

    menuItem.addEventListener('mouseenter', handleMouseEnter);
    menuItem.addEventListener('mouseleave', function (event) {
        if (!innerMenu.contains(event.relatedTarget)) {
            handleMouseLeave();
        }
    });

    innerMenu.addEventListener('mouseenter', handleMouseEnter);
    innerMenu.addEventListener('mouseleave', function (event) {
        if (!menuItem.contains(event.relatedTarget)) {
            handleMouseLeave();
        }
    });
});
