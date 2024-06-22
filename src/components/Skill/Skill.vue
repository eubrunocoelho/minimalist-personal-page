<template>
    <div class="skills__data" v-for="(item, id) in skills.items" :key="id">
        <div class="skills__heading">
            <span class="skills__icon">
                <i class="skills__icon-inner" :class="item.classIcon"></i>
            </span>
            <h3 class="skills__title">{{ item.name }}</h3>
            <span class="skills__level">{{ getSkillLevel(item.level) }}</span>
        </div>
        <div class="skills__progress-bar">
            <div class="skills__loaded" :style="{ width: item.beforeLevel + '%', important: true, transition: 'width 0.6s linear' }"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueSkill',
    props: {
        skills: {
            required: true,
            type: Object
        }
    },
    methods: {
        getSkillLevel(level) {
            const parsedLevel = parseInt(level);

            const levelMappings = [
                { threshold: 80, label: 'Avançado'},
                { threshold: 60, label: 'Intermediário'},
                { threshold: 30, label: 'Básico'},
                { threshold: 0, label: 'Iniciante'},
            ];

            for (let i = 0; i < levelMappings.length; i++) {
                if (parsedLevel > levelMappings[i].threshold) {
                    return levelMappings[i].label;
                }
            }

            return 'Iniciante';
        }
    }
};
</script>