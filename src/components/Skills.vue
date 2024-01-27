<template>
    <section class="section">
        <VueHeading title="Habilidades" description="Conhecimento Técnico"></VueHeading>
        <div class="section__skills">
            <div class="section__skills__category">
                <h2 class="section__skills__category__title">Front-End</h2>
                <div class="section__skills__category__item">
                    <div class="section__skills__category__item__heading">
                        <span class="section__skills__category__item__heading__icon">
                            <i class="section__skills__category__item__heading__icon-inner icon--html"></i>
                        </span>
                        <h3 class="section__skills__category__item__heading__title">HTML5</h3>
                        <span class="section__skills__category__item__heading__level">80%</span>
                    </div>
                    <div class="section__skills__category__item__progress-bar">
                        <div class="section__skills__category__item__progress-bar__loaded" style="width: 80% !important;"></div>
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

<style scoped>
.icon--html {
    background: url(../assets/img/icons/html.svg);
}
</style>