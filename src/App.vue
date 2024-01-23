<template>
    <main id="app-container">
        <VueHeader></VueHeader>
        <footer class="footer">
            <div class="footer-container">
                <nav class="footer__nav">
                    <div class="footer__nav__title">
                        <h1 class="footer__nav__title__heading">Bruno Coelho</h1>
                        <p class="footer__nav__title__description">Desenvolvedor Full-Stack</p>
                    </div>
                    <ul class="footer__nav__menu">
                        <li>
                            <a href="#" class="footer__nav__menu__link">Sobre</a>
                        </li>
                        <li>
                            <a href="#" class="footer__nav__menu__link">Habilidades</a>
                        </li>
                        <li>
                            <a href="#" class="footer__nav__menu__link">Contato</a>
                        </li>
                    </ul>
                    <ul class="footer__nav__socials">
                        <li class="footer__nav__socials__item">
                            <a href="#" class="footer__nav__socials__item__link">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li class="footer__nav__socials__item">
                            <a href="#" class="footer__nav__socials__item__link">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li class="footer__nav__socials__item">
                            <a href="#" class="footer__nav__socials__item__link">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="footer__copy">
                    <p class="footer__copy__text">© Copyright 2024 - Desenvolvido por Bruno Coelho</p>
                </div>
            </div>
        </footer>
    </main>
</template>

<script>
import VueHeader from './components/Header.vue';

// precast
export default {
    name: 'App',
    components: { VueHeader },
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