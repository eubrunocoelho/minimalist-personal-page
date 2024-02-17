<template>
    <section class="section">
        <VueHeading title="Sobre Mim" subtitle="Bruno Coelho"></VueHeading>
        <div class="section__about">
            <div class="about__summary">
                <p class="about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <VueAboutSocials :socials="socials"></VueAboutSocials>
        </div>
    </section>
</template>

<script>
import VueHeading from './Common/Heading.vue';
import VueAboutSocials from './About/Socials.vue';

export default {
    name: 'VueAbout',
    components: { VueHeading, VueAboutSocials },
    data() {
        return {
            socials: {
                linkedin: { url: 'https://www.linkedin.com/in/eubrunocoelho', classIcon: 'fa-brands fa-linkedin' },
                github: { url: 'https://github.com/eubrunocoelho', classIcon: 'fa-brands fa-github' },
                whatsapp: { url: 'https://wa.me/5541987389397', classIcon: 'fa-brands fa-whatsapp' }
            }
        }
    }
};
</script>