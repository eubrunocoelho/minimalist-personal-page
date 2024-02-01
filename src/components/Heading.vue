<template>
    <div class="section__heading">
        <h1 class="heading__title">{{ title }}</h1>
        <p class="heading__subtitle">{{ subtitle }}</p>
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