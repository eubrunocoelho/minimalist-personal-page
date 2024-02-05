<template>
    <section class="section">
        <VueHeading title="Habilidades" subtitle="Conhecimento Técnico"></VueHeading>
        <div class="section__skills">
            <!-- FRONT-END -->
            <div class="skills__category">
                <h2 class="skills__header">Front-End</h2>
                <!-- HTML -->
                <div class="skills__data">
                    <div class="skills__heading">
                        <span class="skills__icon">
                            <i class="skills__icon-inner icon--html"></i>
                        </span>
                        <h3 class="skills__title">HTML5</h3>
                        <span class="skills__level">85%</span>
                    </div>
                    <div class="skills__progress-bar">
                        <div class="skills__loaded" style="width: 85% !important;"></div>
                    </div>
                </div>
            </div>
            <!-- ENDS FRONT-END -->
            <!-- BACK-END -->
            <div class="skills__category">
                <h2 class="skills__header">Back-End</h2>
                <!-- PHP -->
                <div class="skills__data">
                    <div class="skills__heading">
                        <span class="skills__icon">
                            <i class="skills__icon-inner icon--php"></i>
                        </span>
                        <h3 class="skills__title">PHP</h3>
                        <span class="skills__level">69%</span>
                    </div>
                    <div class="skills__progress-bar">
                        <div class="skills__loaded" style="width: 69% !important;"></div>
                    </div>
                </div>
                <!-- ENDS PHP -->
            </div>
            <!-- ENDS BACK-END -->
            <!-- BANCO DE DADOS -->
            <div class="skills__category">
                <h2 class="skills__header">Banco de Dados</h2>
                <!-- MYSQL -->
                <div class="skills__data">
                    <div class="skills__heading">
                        <span class="skills__icon">
                            <i class="skills__icon-inner icon--mysql"></i>
                        </span>
                        <h3 class="skills__title">MySQL</h3>
                        <span class="skills__level">45%</span>
                    </div>
                    <div class="skills__progress-bar">
                        <div class="skills__loaded" style="width: 45% !important;"></div>
                    </div>
                </div>
                <!-- ENDS MYSQL -->
            </div>
            <!-- ENDS BANCO DE DADOS -->
            <!-- FRAMEWORKS -->
            <div class="skills__category">
                <h2 class="skills__header">Frameworks</h2>
                <!-- LARAVEL -->
                <div class="skills__data">
                    <div class="skills__heading">
                        <span class="skills__icon">
                            <i class="skills__icon-inner icon--laravel"></i>
                        </span>
                        <h3 class="skills__title">Laravel</h3>
                        <span class="skills__level">38%</span>
                    </div>
                    <div class="skills__progress-bar">
                        <div class="skills__loaded" style="width: 38% !important;"></div>
                    </div>
                </div>
                <!-- ENDS LARAVEL -->
            </div>
            <!-- ENDS FRAMEWORKS -->
        </div>
    </section>
</template>

<script>
import VueHeading from './Common/Heading.vue';

export default {
    name: 'VueSkills',
    components: { VueHeading }
};
</script>