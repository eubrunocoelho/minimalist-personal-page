<template>
    <section class="section">
        <VueHeading title="Sobre Mim" subtitle="Bruno Coelho"></VueHeading>
        <div class="section__about">
            <div class="about__summary">
                <p class="about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <ul class="about__socials">
                <li class="about__socials-item">
                    <a href="#" class="about__socials-link">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li class="about__socials-item">
                    <a href="#" class="about__socials-link">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </li>
                <li class="about__socials-item">
                    <a href="#" class="about__socials-link">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import VueHeading from './Heading.vue';

export default {
    name: 'VueAbout',
    components: { VueHeading }
};
</script>