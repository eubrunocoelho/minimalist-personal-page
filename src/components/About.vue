<template>
    <section class="section">
        <VueHeading title="Sobre Mim" subtitle="Bruno Coelho"></VueHeading>
        <div class="section__about">
            <div class="about__summary">
                <p class="about__text">Olá, meu nome é Bruno Coelho. Atualmente atuo como Desenvolvedor Full-Stack com sede de conhecimento por tecnologia. Embarquei na programação em 2021, desde então me dedico a aprender e aprimorar minhas habilidades nesse campo dinâmico. Estou sempre entusiasmado com as invovações tecnológicas e os desafios que a programação oferece.</p>
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