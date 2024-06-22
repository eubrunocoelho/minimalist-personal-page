<template>
    <section class="section">
        <VueHeading title="Sobre Mim" subtitle="Bruno Coelho"></VueHeading>
        <div class="section__about">
            <div class="about__summary">
                <p class="about__text">Meu nome é Bruno e atualmente sou Desenvolvedor Full-Stack e Web Designer. Minha jornada na programação começou em 2021 com a meta de implementar meus projetos de Web Design. Desde então, dedico-me a aprimorar constantemente minhas habilidades nesse campo dinâmico, motivado pela sede de conhecimento em tecnologia e pelo entusiasmo com as inovações e desafios que a área oferece.</p>
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
