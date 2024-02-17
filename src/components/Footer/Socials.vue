<template>
    <ul class="footer__socials">
        <li class="footer__socials-item" v-for="(item, id) in socials" :key="id">
            <a :href="item.url" class="footer__socials-link">
                <i :class="item.classIcon"></i>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'VueFooterSocials',
    props: {
        socials: {
            required: true,
            type: Object
        }
    }
};
</script>