<template>
    <div class="skills__data" v-for="(item, id) in skills.items" :key="id">
        <div class="skills__heading">
            <span class="skills__icon">
                <i class="skills__icon-inner" :class="item.classIcon"></i>
            </span>
            <h3 class="skills__title">{{ item.name }}</h3>
            <span class="skills__level">{{ item.level + '%' }}</span>
        </div>
        <div class="skills__progress-bar">
            <div class="skills__loaded" :style="{ width: item.beforeLevel + '%', 'important': true, 'transition': 'width 0.6s ease-in' }"></div>
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
    }
};
</script>