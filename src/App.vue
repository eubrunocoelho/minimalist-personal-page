<template>
    <div id="app">
        <p>Olá, mundo!</p>
    </div>
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