<template>
    <header class="header">
        <div class="header-container">
            <div class="header__toggle-box">
                <span class="toggle-box__line"></span>
                <span class="toggle-box__line"></span>
                <span class="toggle-box__line"></span>
            </div>
            <a href="#" class="header__logo">Bruno Coelho</a>
            <nav class="header__nav">
                <ul class="header__menu">
                    <li>
                        <a href="#" class="header__link">Home</a>
                    </li>
                    <li>
                        <a href="#" class="header__link">Sobre</a>
                    </li>
                    <li>
                        <a href="#" class="header__link">Habilidades</a>
                    </li>
                    <li>
                        <a href="#" class="header__link">Contato</a>
                    </li>
                </ul>
                <div class="header__theme-switch">
                    <ion-icon name="sunny" class="theme-switch__icon"></ion-icon>
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