<template>
    <div id="app-container">
        <transition name="window-overlay">
            <div class="window-overlay" v-show="overlayIsVisible" @click="isOverlay($event)" ref="windowOverlay">
                <transition name="sidebar">
                    <VueSidebar v-if="sidebarIsVisible" @closeSidebar="closeSidebar"></VueSidebar>
                </transition>
            </div>
        </transition>
        <VueHeader @openSidebar="openSidebar"></VueHeader>
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
import VueSidebar from './components/Sidebar.vue';
import VueHeader from './components/Header.vue';
import VuePresentation from './components/Presentation.vue';
import VueAbout from './components/About.vue';
import VueSkills from './components/Skills.vue';
import VueContact from './components/Contact.vue';
import VueFooter from './components/Footer.vue';

export default {
    name: 'App',
    components: { VueSidebar, VueHeader, VuePresentation, VueAbout, VueSkills, VueContact, VueFooter },
    data() {
        return {
            overlayIsVisible: false,
            sidebarIsVisible: false
        }
    },
    methods: {
        openSidebar() {
            this.overlayIsVisible = true;
            this.sidebarIsVisible = true;
        },
        closeSidebar() {
            this.overlayIsVisible = false;
            this.sidebarIsVisible = false;
        },
        isOverlay(event) {
            let windowOverlay = this.$refs.windowOverlay;

            if (windowOverlay && windowOverlay.contains(event.target)) {
                this.closeSidebar();
            }
        }
    }
}
</script>

<style>

/**
 * =================================================================================
 * VUE TRANSITIONS
 * =================================================================================
 */

.window-overlay-enter-active {
    animation: window-overlay .19s ease;
}

.window-overlay-leave-active {
    animation: window-overlay .19s ease reverse;
}

.sidebar-enter-active {
    animation: sidebar .3s ease;
}

.sidebar-leave-active {
    animation: sidebar .2s ease reverse;
}

@keyframes window-overlay {
    from {
        background: rgba(42, 42, 42, .0);
    }

    to {
        background: rgba(42, 42, 42, .4);
    }
}

@keyframes sidebar {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}
</style>