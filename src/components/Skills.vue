<template>
    <section class="section">
        <VueHeading title="Habilidades" description="Conhecimento Técnico"></VueHeading>
        <div class="section__skills">
            <div class="section__skills__item">
                <h2 class="section__skills__item__title">Front-End</h2>
                <div class="section__skills__item__content">
                    <div class="section__skills__item__content__heading">
                        <span class="section__skills__item__content__heading__icon">
                            <i class="section__skills__item__content__heading__icon-inner"></i>
                        </span>
                        <h3 class="section__skills__item__content__heading__title">HTML5</h3>
                        <span class="section__skills__item__content__heading__level">80%</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueHeading from './Heading.vue';

export default {
    name: 'VueSkills',
    components: { VueHeading }
};
</script>