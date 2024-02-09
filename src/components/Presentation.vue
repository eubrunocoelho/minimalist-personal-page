<template>
    <section class="section">
        <div class="section__presentation">
            <img src="./../assets/img/profile-img.png" class="presentation__profile-img">
            <div class="presentation__summary">
                <h1 class="presentation__title">Olá, sou o Bruno</h1>
                <p class="presentation__text">Desenvolvedor Full-Stack,<br /> criando <span class="text--assent-color">{</span> <VueWriter :array="['soluções para a web']" :typeSpeed="99" :iterations="1" :style="{ display: 'inline' }" /> <span class="text--assent-color">}</span>.</p>
                <div class="presentation__button-area">
                    <button class="button button--icon">Contato</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'VuePresentation'
};
</script>

<style>
span.cursor {
    display: none !important;
}
</style>