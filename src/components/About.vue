<template>
    <section class="section">
        <VueHeading title="Sobre Mim" subtitle="Bruno Coelho"></VueHeading>
        <div class="section__about">
            <div class="about__summary">
                <p class="about__text">Meu nome é Bruno, atualmente atuo como Desenvolvedor Full-Stack e Web Designer. Tenho sede de conhecimento por tecnologia. Embarquei na programação em 2021 com o objetivo de colocar em prática os meu projetos de Web Designer, desde então me dedico a aprender e aprimorar cada vez mais minhas habilidades nesse campo dinâmico que é a programação. Estou sempre entusiasmado com as inovações tecnológicas e os desafios que ela proporciona.</p>
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