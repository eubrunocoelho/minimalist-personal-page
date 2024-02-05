<template>
    <section class="section">
        <VueHeading title="Habilidades" subtitle="Conhecimento Técnico"></VueHeading>
        <div class="section__skills">
            <div class="skills__category">
                <h2 class="skills__header">Front-End</h2>
                <VueSkill :skills="frontend"></VueSkill>
            </div>
            <div class="skills__category">
                <h2 class="skills__header">Back-End</h2>
                <VueSkill :skills="backend"></VueSkill>
            </div>
            <!-- ENDS BACK-END -->
            <!-- BANCO DE DADOS -->
            <div class="skills__category">
                <h2 class="skills__header">Banco de Dados</h2>
                <VueSkill :skills="database"></VueSkill>
            </div>
            <!-- ENDS BANCO DE DADOS -->
            <!-- FRAMEWORKS -->
            <div class="skills__category">
                <h2 class="skills__header">Frameworks</h2>
                <VueSkill :skills="frameworks"></VueSkill>
            </div>
            <!-- ENDS FRAMEWORKS -->
        </div>
    </section>
</template>

<script>
import VueHeading from './Common/Heading.vue';
import VueSkill from './Skill/Skill.vue';

export default {
    name: 'VueSkills',
    components: { VueHeading, VueSkill },
    data() {
        return {
            frontend: {
                items: [
                    {
                        name: 'HTML5',
                        classIcon: 'icon--html',
                        level: '85%'
                    },
                    {
                        name: 'CSS3',
                        classIcon: 'icon--css',
                        level: '73%'
                    },
                    {
                        name: 'JavaScript',
                        classIcon: 'icon--javascript',
                        level: '64%'
                    },
                    {
                        name: 'TypeScript',
                        classIcon: 'icon--typescript',
                        level: '14%'
                    }
                ]
            },
            backend: {
                items: [
                    {
                        name: 'PHP',
                        classIcon: 'icon--php',
                        level: '69%'
                    },
                    {
                        name: 'Node.js',
                        classIcon: 'icon--nodejs',
                        level: '35%'
                    },
                    {
                        name: 'Java',
                        classIcon: 'icon--java',
                        level: '13%'
                    }
                ]
            },
            database: {
                items: [
                    {
                        name: 'MySQL',
                        classIcon: 'icon--mysql',
                        level: '49%'
                    },
                    {
                        name: 'SQL Server',
                        classIcon: 'icon--sqlserver',
                        level: '35%'
                    }
                ]
            },
            frameworks: {
                items: [
                    {
                        name: 'Laravel',
                        classIcon: 'icon--laravel',
                        level: '39%'
                    },
                    {
                        name: 'Vue.js',
                        classIcon: 'icon--vuejs',
                        level: '45%'
                    },
                    {
                        name: 'Express.js',
                        classIcon: 'icon--expressjs',
                        level: '31%'
                    }
                ]
            }
        }
    }
};
</script>