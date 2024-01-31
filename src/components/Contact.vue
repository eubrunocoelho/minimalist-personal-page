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
                <div class="section__contact__form__alerts">
                    <div class="alert">
                        <p>Mensagem padrão.</p>
                    </div>
                    <div class="alert alert--danger">
                        <p>Mensagem de erro.</p>
                    </div>
                    <div class="alert alert--success">
                        <p>Mensagem de sucesso.</p>
                    </div>
                </div>
            </div>
            <div class="section__contact__items">
                <!-- WHATSAPP -->
                <div class="section__contact__items__item">
                    <span class="section__contact__items__item__icon"><i class="fa-brands fa-whatsapp"></i></span>
                    <div class="section__contact__items__item__description">
                        <h2 class="section__contact__items__item__description__title">WhatsApp</h2>
                        <p class="section__contact__items__item__description__description">(41) 98738-9397</p>
                    </div>
                </div>
                <!-- ENDS WHATSAPP -->
                <!-- E-MAIL -->
                <div class="section__contact__items__item">
                    <span class="section__contact__items__item__icon"><i class="fa-regular fa-envelope"></i></span>
                    <div class="section__contact__items__item__description">
                        <h2 class="section__contact__items__item__description__title">E-mail</h2>
                        <p class="section__contact__items__item__description__description">eu.brunocoelho94@gmail.com</p>
                    </div>
                </div>
                <!-- ENDS E-MAIL -->
                <!-- LOCATION -->
                <div class="section__contact__items__item">
                    <span class="section__contact__items__item__icon"><i class="fa-solid fa-location-dot"></i></span>
                    <div class="section__contact__items__item__description">
                        <h2 class="section__contact__items__item__description__title">Localização</h2>
                        <p class="section__contact__items__item__description__description">São José dos Pinhais/PR - Brasil</p>
                    </div>
                </div>
                <!-- END LOCATION -->
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