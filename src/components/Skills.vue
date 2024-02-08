<template>
    <section class="section">
        <VueHeading title="Habilidades" subtitle="Conhecimento Técnico"></VueHeading>
        <div class="section__skills">
            <div class="skills__category">
                <h2 class="skills__header" ref="frontend">Front-End</h2>
                <VueSkill :skills="frontend"></VueSkill>
            </div>
            <div class="skills__category">
                <h2 class="skills__header" ref="backend">Back-End</h2>
                <VueSkill :skills="backend"></VueSkill>
            </div>
            <div class="skills__category">
                <h2 class="skills__header" ref="database">Banco de Dados</h2>
                <VueSkill :skills="database"></VueSkill>
            </div>
            <div class="skills__category" ref="frameworks">
                <h2 class="skills__header">Frameworks</h2>
                <VueSkill :skills="frameworks"></VueSkill>
            </div>
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
                        beforeLevel: 1,
                        name: 'HTML5',
                        classIcon: 'icon--html',
                        level: 85
                    },
                    {
                        beforeLevel: 1,
                        name: 'CSS3',
                        classIcon: 'icon--css',
                        level: 75
                    },
                    {
                        beforeLevel: 1,
                        name: 'JavaScript',
                        classIcon: 'icon--javascript',
                        level: 69
                    },
                    {
                        beforeLevel: '1',
                        name: 'TypeScript',
                        classIcon: 'icon--typescript',
                        level: 17
                    }
                ]
            },
            backend: {
                items: [
                    {
                        beforeLevel: 1,
                        name: 'PHP',
                        classIcon: 'icon--php',
                        level: 72
                    },
                    {
                        beforeLevel: '1',
                        name: 'Node.js',
                        classIcon: 'icon--nodejs',
                        level: 35
                    },
                    {
                        beforeLevel: '1',
                        name: 'Java',
                        classIcon: 'icon--java',
                        level: 13
                    }
                ]
            },
            database: {
                items: [
                    {
                        beforeLevel: 1,
                        name: 'MySQL',
                        classIcon: 'icon--mysql',
                        level: 49
                    },
                    {
                        beforeLevel: '1',
                        name: 'SQL Server',
                        classIcon: 'icon--sqlserver',
                        level: 36
                    }
                ]
            },
            frameworks: {
                items: [
                    {
                        beforeLevel: 1,
                        name: 'Laravel',
                        classIcon: 'icon--laravel',
                        level: 42
                    },
                    {
                        beforeLevel: 1,
                        name: 'Vue.js',
                        classIcon: 'icon--vuejs',
                        level: 47
                    },
                    {
                        beforeLevel: '1',
                        name: 'Express.js',
                        classIcon: 'icon--expressjs',
                        level: 31
                    }
                ]
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scroll);
    },
    methods: {
        scroll() {
            const visibleHeight = window.innerHeight + window.scrollY;

            const items = {
                frontend: this.$refs.frontend,
                backend: this.$refs.backend,
                database: this.$refs.database,
                frameworks: this.$refs.frameworks
            };

            if (
                items['frontend'] &&
                items['backend'] &&
                items['database'] &&
                items['frameworks']
            ) {
                const
                    frontendPosition = (items['frontend'].getBoundingClientRect().top + window.scrollY) + 180,
                    backendPosition = (items['backend'].getBoundingClientRect().top + window.scrollY) + 180,
                    databasePosistion = (items['database'].getBoundingClientRect().top + window.scrollY) + 180,
                    frameworksPosition = (items['frameworks'].getBoundingClientRect().top + window.scrollY) + 180;

                if (visibleHeight > frontendPosition) {
                    this.skillAnimation(this.frontend.items);
                }

                if (visibleHeight > backendPosition) {
                    this.skillAnimation(this.backend.items);
                }

                if (visibleHeight > databasePosistion) {
                    this.skillAnimation(this.database.items);
                }

                if (visibleHeight > frameworksPosition) {
                    this.skillAnimation(this.frameworks.items);
                }
            }
        },

        skillAnimation(item) {
            item.forEach(item => {
                item.beforeLevel = item.level;
            });
        }
    }
};
</script>