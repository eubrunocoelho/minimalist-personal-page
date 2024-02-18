<template>
    <section class="section">
        <VueHeading title="Contato" subtitle="Entre em Contato"></VueHeading>
        <div class="section__contact">
            <VueForm></VueForm>
            <VueInformation :items="items"></VueInformation>
        </div>
    </section>
</template>

<script>
import VueHeading from './Common/Heading.vue';
import VueForm from './Contact/Form.vue';
import VueInformation from './Contact/Information.vue';

export default {
    name: 'VueContact',
    components: { VueHeading, VueForm, VueInformation },
    data() {
        return {
            items: {
                whatsapp: `(41) 98738-9397`,
                email: `eu.brunocoelho94@gmail.com`,
                location: `São José dos Pinhais/PR - Brasil`
            }
        }
    }
}
</script>