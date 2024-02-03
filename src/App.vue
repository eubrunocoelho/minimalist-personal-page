<template>
    <div id="app-container">
        <VueHeader></VueHeader>
        <main class="main">
            <VuePresentation></VuePresentation>
            <VueAbout></VueAbout>
            <VueSkills></VueSkills>
            <VueContact></VueContact>
        </main>
        <VueFooter></VueFooter>
    </div>
</template>

<script>
import VueHeader from './components/Header.vue';
import VuePresentation from './components/Presentation.vue';
import VueAbout from './components/About.vue';
import VueSkills from './components/Skills.vue';
import VueContact from './components/Contact.vue';
import VueFooter from './components/Footer.vue';

export default {
    name: 'App',
    components: { VueHeader, VuePresentation, VueAbout, VueSkills, VueContact, VueFooter }
}
</script>