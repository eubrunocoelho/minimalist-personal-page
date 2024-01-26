<template>
    <section class="section">
        <VueHeading></VueHeading>
        <div class="section__about">
            <p class="section__about__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, debitis quo. Iste eos, perspiciatis aspernatur dignissimos cumque, non accusamus saepe vel voluptates unde deserunt vitae? Qui itaque beatae laudantium dolorem.</p>
        </div>
    </section>
</template>

<script>
import VueHeading from './Heading.vue';

export default {
    name: 'VueAbout',
    components: { VueHeading }
};
</script>