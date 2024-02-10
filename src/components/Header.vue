<template>
    <header class="header">
        <div class="header-container">
            <div class="header__toggle-box" @click="$emit('openSidebar')">
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
                <div class="header__theme-switch" @click="switchTheme">
                    <ion-icon name="sunny" class="theme-switch__icon" v-if="darkMode === false"></ion-icon>
                    <ion-icon name="moon" class="theme-switch__icon" v-else></ion-icon>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'VueHeader',
    data() {
        return {
            darkMode: false
        };
    },
    mounted() {
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
    methods: {
        switchTheme() {
            let htmlElement = document.documentElement;

            if (this.darkMode) {
                localStorage.setItem('theme', 'light');
                htmlElement.setAttribute('theme', 'light');

                this.darkMode = false;
            } else {
                localStorage.setItem('theme', 'dark');
                htmlElement.setAttribute('theme', 'dark');

                this.darkMode = true;
            }
        }
    }
};
</script>