<template>
    <main id="app-container">
        <header class="header">
            <div class="header__toggle-box">
                <span class="header__toggle-box-line"></span>
                <span class="header__toggle-box-line"></span>
                <span class="header__toggle-box-line"></span>
            </div>
            <a href="#" class="header__logo">Bruno Coelho</a>
            <div class="header__nav">
                <ul class="header__nav__menu">
                    <li>
                        <a href="#" class="header__nav__menu-link">Home</a>
                    </li>
                    <li>
                        <a href="#" class="header__nav__menu-link">Sobre</a>
                    </li>
                    <li>
                        <a href="#" class="header__nav__menu-link">Habilidades</a>
                    </li>
                    <li>
                        <a href="#" class="header__nav__menu-link">Contato</a>
                    </li>
                </ul>
                <div class="header__nav__theme-switch">
                    <ion-icon name="sunny" class="header__nav__theme-switch__icon"></ion-icon>
                </div>
            </div>
        </header>
    </main>
</template>

<script>
// precast
export default {
    name: 'App',
    data() {
        return {
            darkMode: false
        };
    },
    mounted() {
        let bodyElement = document.body;
        bodyElement.classList.add('app-container');

        let htmlElement = document.documentElement;
        let theme = localStorage.getItem('theme');

        if (theme === 'dark') {
            htmlElement.setAttribute('theme', 'dark');

            this.darkMode = true;
        } else {
            htmlElement.setAttribute('theme', 'light');

            this.darkMode = false;
        }
    },
    watch: {
        darkMode: function () {
            let htmlElement = document.documentElement;

            if (this.darkMode) {
                localStorage.setItem('theme', 'dark');
                htmlElement.setAttribute('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
                htmlElement.setAttribute('theme', 'light');
            }
        }
    }
}
</script>