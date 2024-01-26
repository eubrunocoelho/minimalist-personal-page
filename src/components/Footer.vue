<template>
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
</template>

<script>
export default {
    name: 'VueFooter'
};
</script>