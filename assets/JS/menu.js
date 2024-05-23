document.addEventListener('DOMContentLoaded', (event) => {
    let mobile_btn = document.querySelector('.navbar-mobile-btn');
    let mobile_menu = document.querySelector('.navbar-mobile-list');

    mobile_btn.addEventListener('click', () => {
        if (mobile_menu.classList.contains('menu-open')) {
            mobile_menu.classList.remove('menu-open');
        } else {
            mobile_menu.classList.add('menu-open');
        }
    });

    const submenu = (boton, submenu, className) => {
        boton.addEventListener('click', () => {
            if (submenu.classList.contains(className)) {
                submenu.classList.remove(className);
            } else {
                submenu.classList.add(className);
            }
        });
    }

    // Primer submenu
    let dropdown1_btn = document.querySelector('#icon1');
    let dropdown1_submenu = document.querySelector('#submenu1');

    // Segundo submenu
    let dropdown2_btn = document.querySelector('#icon2');
    let dropdown2_submenu = document.querySelector('#submenu2');

    // Pasar funcion
    submenu(dropdown1_btn, dropdown1_submenu, 'drop1');
    submenu(dropdown2_btn, dropdown2_submenu, 'drop2');
});
