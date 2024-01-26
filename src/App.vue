<template>
    <div id="app-container">
        <VueHeader></VueHeader>
        <main class="main">
            <VuePresentation></VuePresentation>
            <VueAbout></VueAbout>
        </main>
        <VueFooter></VueFooter>
    </div>
</template>

<script>
import VueHeader from './components/Header.vue';
import VuePresentation from './components/Presentation.vue';
import VueAbout from './components/About.vue';
import VueFooter from './components/Footer.vue';

// precast
export default {
    name: 'App',
    components: { VueHeader, VuePresentation, VueAbout, VueFooter },
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