<template>
    <div id="app-container">
        <transition name="window-overlay" ref="windowOverlay">
            <div class="window-overlay" v-show="overlayIsVisible" @click="isOverlay($event)">
                <transition name="sidebar">
                    <VueSidebar v-if="sidebarIsVisible" @closeSidebar="closeSidebar" @scrollToId="scrollToId"></VueSidebar>
                </transition>
            </div>
        </transition>
        <VueHeader @openSidebar="openSidebar" @scrollToId="scrollToId" id="header"></VueHeader>
        <main class="main">
            <VuePresentation @scrollToId="scrollToId"></VuePresentation>
            <VueAbout id="about"></VueAbout>
            <VueSkills id="skills"></VueSkills>
            <VueContact id="contact"></VueContact>
        </main>
        <VueFooter @scrollToId="scrollToId"></VueFooter>
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
    el: '#app',
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
            [this.overlayIsVisible, this.sidebarIsVisible] = [true, true];
        },
        closeSidebar() {
            [this.overlayIsVisible, this.sidebarIsVisible] = [false, false];
        },
        isOverlay(event) {
            const windowOverlay = this.$refs.windowOverlay;

            if (windowOverlay && (event.target == windowOverlay)) {
                this.closeSidebar();
            }
        },
        scrollToId(elementId) {
            const element = this.$el.querySelector('#' + elementId);
            const offset = (58 /** heading max height size */ + 26);

            if (element) {
                const position = element.getBoundingClientRect().top + window.scrollY;
                var scrollPosition = position - offset;
            }

            if (elementId == 'header') {
                scrollPosition = 0;
            }

            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
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