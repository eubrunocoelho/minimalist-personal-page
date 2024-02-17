<template>
    <ul class="about__socials">
        <li class="about__socials-item" v-for="(item, id) in socials" :key="id">
            <a :href="item.url" target="_blank" class="about__socials-link">
                <i :class="item.classIcon"></i>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'VueSocials',
    props: {
        socials: {
            required: true,
            type: Object
        }
    },
    mounted() {
        console.log(this.socials);
    }
}
</script>