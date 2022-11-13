<template>
  <main class="main">
    <home></home>
    <about></about>
    <projects></projects>
    <skills></skills>
    <contact></contact>
    <sectionSelector class="section-selector"></sectionSelector>
  </main>
</template>

<script>
import home from "@/views/Home/Index.vue";
import about from "@/views/AboutMe/Index.vue";
import projects from "@/views/Projects/Index.vue";
import skills from "@/views/Skills/Index.vue";
import contact from "@/views/ContactMe/Index.vue";
import sectionSelector from '@/components/sectionSelector.vue';
import scrollMove from "@/Extend/scrollMove";

export default {
  name: "MainContent",
  mixins: [scrollMove],
  components: {
    home,
    about,
    sectionSelector,
    projects,
    skills,
    contact
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
}
.section-selector {
  position: fixed;
  top: 35%;
  left: 4%;
}
</style>
