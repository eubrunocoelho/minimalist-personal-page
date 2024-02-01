<template>
    <section class="section">
        <VueHeading title="Contato" description="Entre em Contato"></VueHeading>
        <div class="section__contact">
            <div class="contact__form">
                <form action="">
                    <input type="text" class="form__input-text" placeholder="Digite seu nome...">
                    <input type="text" class="form__input-text" placeholder="Digite seu telefone/whatsapp...">
                    <input type="text" class="form__input-text" placeholder="Digite seu endereço de e-mail...">
                    <input type="text" class="form__input-text" placeholder="Digite o assunto...">
                    <textarea class="form__textarea" placeholder="Escreva sua mensagem..."></textarea>
                    <div class="form__button-area">
                        <button class="button button--icon">Enviar<i class="fa-regular fa-paper-plane button__icon"></i></button>
                    </div>
                </form>
                <div class="form__alerts">
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
            <div class="contact__information">
                <!-- WHATSAPP -->
                <div class="contact__data">
                    <span class="contact__icon"><i class="fa-brands fa-whatsapp"></i></span>
                    <div class="contact__description">
                        <h2 class="contact__title">WhatsApp</h2>
                        <p class="contact__subtitle">(41) 98738-9397</p>
                    </div>
                </div>
                <!-- ENDS WHATSAPP -->
                <!-- E-MAIL -->
                <div class="contact__data">
                    <span class="contact__icon"><i class="fa-regular fa-envelope"></i></span>
                    <div class="contact__description">
                        <h2 class="contact__title">E-mail</h2>
                        <p class="contact__subtitle">eu.brunocoelho94@gmail.com</p>
                    </div>
                </div>
                <!-- ENDS E-MAIL -->
                <!-- LOCATION -->
                <div class="contact__data">
                    <span class="contact__icon"><i class="fa-solid fa-location-dot"></i></span>
                    <div class="contact__description">
                        <h2 class="contact__title">Localização</h2>
                        <p class="contact__subtitle">São José dos Pinhais/PR - Brasil</p>
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