<template>
    <section class="section">
        <div class="section__presentation">
            <img src="./../assets/img/profile-img.png" class="presentation__profile-img">
            <div class="presentation__summary">
                <h1 class="presentation__title">Olá, sou o Bruno</h1>
                <p class="presentation__text">Desenvolvedor Full-Stack,<br /> criando <span class="text--assent-color">{</span> soluções para a web <span class="text--assent-color">}</span>.</p>
                <div class="presentation__button-area">
                    <button class="button button--icon">Contato<i class="fa-regular fa-paper-plane button__icon"></i></button>
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