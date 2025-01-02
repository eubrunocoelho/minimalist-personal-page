<template>
    <section class="section">
        <div class="section__presentation">
            <img src="./../assets/img/profile-img.jpg" class="presentation__profile-img">
            <div class="presentation__summary">
                <h1 class="presentation__title">Olá, sou o Bruno</h1>
                <p class="presentation__text">Desenvolvedor Full-Stack,<br /> criando <span class="text--assent-color">{</span> soluções para a web <span class="text--assent-color">}</span>.</p>
                <div class="presentation__button-area">
                    <button class="button" @click="scrollToId('contact')">Contato</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'VuePresentation',
    methods: {
        scrollToId(elementId) {
            this.$emit('scrollToId', elementId);
        }
    }
};
</script>