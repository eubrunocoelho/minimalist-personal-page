<template>
    <section class="section">
        <VueHeading title="Contato" subtitle="Entre em Contato"></VueHeading>
        <div class="section__contact">
            <VueForm></VueForm>
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
import VueHeading from './Common/Heading.vue';
import VueForm from './Contact/Form.vue';

export default {
    name: 'VueContact',
    components: { VueHeading, VueForm }
}
</script>