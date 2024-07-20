document.addEventListener('DOMContentLoaded', function () {
    const menuContainers = document.querySelectorAll('.menu-container');

    menuContainers.forEach(menuContainer => {
        const menuItem = menuContainer.querySelector('.menu-item');
        const innerMenu = menuContainer.querySelector('.inner-menu');

        function handleMouseEnter() {
            menuContainer.classList.add('hover');
        }

        function handleMouseLeave(event) {
            if (!menuItem.contains(event.relatedTarget) && !innerMenu.contains(event.relatedTarget)) {
                menuContainer.classList.remove('hover');
            }
        }

        menuItem.addEventListener('mouseenter', handleMouseEnter);
        menuItem.addEventListener('mouseleave', handleMouseLeave);

        innerMenu.addEventListener('mouseenter', handleMouseEnter);
        innerMenu.addEventListener('mouseleave', handleMouseLeave);
    });
});