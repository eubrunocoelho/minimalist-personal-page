<template>
    <div class="contact__information">
        <div class="contact__data">
            <span class="contact__icon"><i class="fa-brands fa-whatsapp"></i></span>
            <div class="contact__description">
                <h2 class="contact__title">WhatsApp</h2>
                <p class="contact__subtitle">{{ items.whatsapp }}</p>
            </div>
        </div>
        <div class="contact__data">
            <span class="contact__icon"><i class="fa-regular fa-envelope"></i></span>
            <div class="contact__description">
                <h2 class="contact__title">E-mail</h2>
                <p class="contact__subtitle">{{ items.email }}</p>
            </div>
        </div>
        <div class="contact__data">
            <span class="contact__icon"><i class="fa-solid fa-location-dot"></i></span>
            <div class="contact__description">
                <h2 class="contact__title">Localização</h2>
                <p class="contact__subtitle">{{ items.location }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueInformation',
    props: {
        items: {
            required: true,
            type: Object
        }
    }
};
</script>