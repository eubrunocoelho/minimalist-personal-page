<template>
    <main id="app-container">
        <header class="header">
            <div class="header__toggle-box">
                <span class="header__toggle-box__line"></span>
                <span class="header__toggle-box__line"></span>
                <span class="header__toggle-box__line"></span>
            </div>
            <div class="header__nav">
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