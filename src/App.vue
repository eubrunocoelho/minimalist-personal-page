<template>
    <main id="app-container">
        <VueHeader></VueHeader>
        <section class="section">
            <div class="section__presentation">
                <img src="./assets/img/profile-img.png" class="section__presentation__profile-img">
                <div class="section__presentation__summary">
                    <h1 class="section__presentation__summary__title">Olá, sou o Bruno</h1>
                    <p class="section__presentation__summary__text">Desenvolvedor Full-Stack,<br /> criando <span class="text--assent-color">{</span> soluções para a web <span class="text--assent-color">}</span>.</p>
                    <div class="section__presentation__summary__button-area">
                        <button class="button button--icon">Contato<i class="fa-regular fa-paper-plane button__icon"></i></button>
                    </div>
                </div>
            </div>
        </section>
        <VueFooter></VueFooter>
    </main>
</template>

<script>
import VueHeader from './components/Header.vue';
import VueFooter from './components/Footer.vue';

// precast
export default {
    name: 'App',
    components: { VueHeader, VueFooter },
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