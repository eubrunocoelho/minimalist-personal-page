<template>
    <header class="header">
        <div class="header-container">
            <div class="header__toggle-box">
                <span class="header__toggle-box__line"></span>
                <span class="header__toggle-box__line"></span>
                <span class="header__toggle-box__line"></span>
            </div>
            <a href="#" class="header__logo">Bruno Coelho</a>
            <nav class="header__nav">
                <ul class="header__nav__menu">
                    <li>
                        <a href="#" class="header__nav__menu__link">Home</a>
                    </li>
                    <li>
                        <a href="#" class="header__nav__menu__link">Sobre</a>
                    </li>
                    <li>
                        <a href="#" class="header__nav__menu__link">Habilidades</a>
                    </li>
                    <li>
                        <a href="#" class="header__nav__menu__link">Contato</a>
                    </li>
                </ul>
                <div class="header__nav__theme-switch">
                    <ion-icon name="sunny" class="header__nav__theme-switch__icon"></ion-icon>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'VueHeader'
};
</script>