<template>
    <section class="section">
        <VueHeading title="Habilidades" subtitle="Conhecimento Técnico"></VueHeading>
        <div class="section__skills">
            <div class="skills__category" ref="frontend">
                <h2 class="skills__header">Front-End</h2>
                <VueSkill :skills="skills.frontend"></VueSkill>
            </div>
            <div class="skills__category" ref="backend">
                <h2 class="skills__header">Back-End</h2>
                <VueSkill :skills="skills.backend"></VueSkill>
            </div>
            <div class="skills__category" ref="frameworks">
                <h2 class="skills__header">Frameworks</h2>
                <VueSkill :skills="skills.frameworks"></VueSkill>
            </div>
            <div class="skills__category" ref="database">
                <h2 class="skills__header">Banco de Dados</h2>
                <VueSkill :skills="skills.database"></VueSkill>
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
            skills: {
                frontend: {
                    items: [
                        { beforeLevel: 1 /** do not modify */, name: 'HTML5', classIcon: 'icon--html', level: 89 },
                        { beforeLevel: 1 /** do not modify */, name: 'CSS3', classIcon: 'icon--css', level: 83 },
                        { beforeLevel: 1 /** do not modify */, name: 'JavaScript', classIcon: 'icon--javascript', level: 77 },
                        { beforeLevel: 1 /** do not modify */, name: 'TypeScript', classIcon: 'icon--typescript', level: 54 }
                    ]
                },
                backend: {
                    items: [
                        { beforeLevel: 1 /** do not modify */, name: 'PHP', classIcon: 'icon--php', level: 78 },
                        { beforeLevel: 1 /** do not modify */, name: 'Node.js', classIcon: 'icon--nodejs', level: 44 }
                    ]
                },
                frameworks: {
                    items: [
                        { beforeLevel: 1 /** do not modify */, name: 'Laravel', classIcon: 'icon--laravel', level: 61 },
                        { beforeLevel: 1 /** do not modify */, name: 'Express.js', classIcon: 'icon--expressjs', level: 35 },
                        { beforeLevel: 1 /** do not modify */, name: 'Vue.js', classIcon: 'icon--vuejs', level: 61 },
                        { beforeLevel: 1 /** do not modify */, name: 'jQuery', classIcon: 'icon--jquery', level: 60 },
                        { beforeLevel: 1 /** do not modify */, name: 'Sass', classIcon: 'icon--sass', level: 63 },
                    ]
                },
                database: {
                    items: [
                        { beforeLevel: 1 /** do not modify */, name: 'MySQL', classIcon: 'icon--mysql', level: 59 },
                        { beforeLevel: 1 /** do not modify */, name: 'SQL Server', classIcon: 'icon--sqlserver', level: 36 },
                        { beforeLevel: 1 /** do not modify */, name: 'PostgreSQL', classIcon: 'icon--postgresql', level: 25},
                        { beforeLevel: 1 /** do not modify */, name: 'MongoDB', classIcon: 'icon--mongodb', level: 21 }
                    ]
                }
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollPosition);
    },
    methods: {
        scrollPosition() {
            const visibleHeight = window.innerHeight + window.scrollY;

            for (const category in this.skills) {
                const categoryRef = this.$refs[category];

                if (!categoryRef) continue;

                const categoryPosition = categoryRef.getBoundingClientRect().top + window.scrollY + 110;

                if (visibleHeight > categoryPosition) {
                    this.loaderAnimation(this.skills[category].items);
                }
            }
        },
        loaderAnimation(items) {
            items.forEach((item) => {
                item.beforeLevel = item.level
            });
        }
    }
};
</script>