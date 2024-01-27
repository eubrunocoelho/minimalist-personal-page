<template>
    <div class="section__heading">
        <h1 class="section__heading__title">{{ title }}</h1>
        <p class="section__heading__description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'VueHeading',
    props: {
        title: {
            required: true,
            type: String
        },
        description: {
            required: true,
            type: String
        }
    }
};
</script>