<template>
    <section class="sidebar">
        <div class="sidebar-container">
            <div class="sidebar__button-wrapper">
                <div class="sidebar__close-box" @click="$emit('closeSidebar')">
                    <span class="close-box__line"></span>
                    <span class="close-box__line"></span>
                </div>
            </div>
            <ul class="sidebar__menu">
                <li>
                    <a href="javascript:void(0)" class="sidebar__link" @click="handleClick('header')">Home</a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="sidebar__link" @click="handleClick('about')">Sobre</a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="sidebar__link" @click="handleClick('skills')">Habilidades</a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="sidebar__link" @click="handleClick('contact')">Contato</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'VueSidebar',
    methods: {
        handleClick(elementId) {
            this.scrollToId(elementId);
            this.$emit('closeSidebar');
        },
        scrollToId(elementId) {
            this.$emit('scrollToId', elementId);
        }
    }
};
</script>