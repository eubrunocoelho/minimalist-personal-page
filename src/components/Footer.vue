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
                <VueFooterSocials :socials="socials"></VueFooterSocials>
            </nav>
            <div class="footer__copy">
                <p class="footer__text">© Copyright 2024 - Desenvolvido por <span class="footer__dev">Bruno Coelho</span>.</p>
            </div>
        </div>
    </footer>
</template>

<script>
import VueFooterSocials from './Footer/Socials.vue';

export default {
    name: 'VueFooter',
    components: { VueFooterSocials },
    data() {
        return {
            socials: {
                linkedin: { url: 'https://www.linkedin.com/in/eubrunocoelho', classIcon: 'fa-brands fa-linkedin' },
                github: { url: 'https://github.com/eubrunocoelho', classIcon: 'fa-brands fa-github' },
                whatsapp: { url: 'https://wa.me/5541987389397', classIcon: 'fa-brands fa-whatsapp' }
            }
        }
    },
    methods: {
        scrollToId(elementId) {
            this.$emit('scrollToId', elementId);
        }
    }
};
</script>