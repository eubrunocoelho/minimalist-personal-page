<template>
    <footer class="footer">
        <div class="footer-container">
            <nav class="footer__nav">
                <div class="footer__heading">
                    <h1 class="footer__title">Bruno Coelho</h1>
                    <p class="footer__subtitle">Desenvolvedor Full-Stack</p>
                </div>
                <ul class="footer__menu">
                    <li>
                        <a href="javascript:void(0)" class="footer__link" @click="scrollToId('about')">Sobre</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" class="footer__link" @click="scrollToId('skills')">Habilidades</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" class="footer__link" @click="scrollToId('contact')">Contato</a>
                    </li>
                </ul>
                <ul class="footer__socials">
                    <li class="footer__socials-item">
                        <a href="#" class="footer__socials-link">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li class="footer__socials-item">
                        <a href="#" class="footer__socials-link">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li class="footer__socials-item">
                        <a href="#" class="footer__socials-link">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="footer__copy">
                <p class="footer__text">© Copyright 2024 - Desenvolvido por <span class="footer__dev">Bruno Coelho</span>.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'VueFooter',
    methods: {
        scrollToId(elementId) {
            this.$emit('scrollToId', elementId);
        }
    }
};
</script>