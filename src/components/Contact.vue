<template>
    <section class="section">
        <VueHeading title="Contato" description="Entre em Contato"></VueHeading>
        <div class="section__contact">
            <div class="section__contact__form">
                <form action="">
                    <input type="text" class="section__contact__form__input-text" placeholder="Digite seu nome...">
                    <input type="text" class="section__contact__form__input-text" placeholder="Digite seu telefone/whatsapp...">
                    <input type="text" class="section__contact__form__input-text" placeholder="Digite seu endereço de e-mail...">
                    <input type="text" class="section__contact__form__input-text" placeholder="Digite o assunto...">
                    <textarea class="section__contact__form__textarea" placeholder="Escreva sua mensagem..."></textarea>
                    <div class="section__contact__form__button-area">
                        <button class="button button--icon">Enviar<i class="fa-regular fa-paper-plane button__icon"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import VueHeading from './Heading.vue';

export default {
    name: 'VueContact',
    components: { VueHeading }
}
</script>