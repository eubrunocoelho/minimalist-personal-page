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
                        <a href="#" class="footer__link">Sobre</a>
                    </li>
                    <li>
                        <a href="#" class="footer__link">Habilidades</a>
                    </li>
                    <li>
                        <a href="#" class="footer__link">Contato</a>
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
                <p class="footer__text">© Copyright 2024 - Desenvolvido por <span class="footer__dev">Bruno Coelho</span>.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'VueFooter'
};
</script>