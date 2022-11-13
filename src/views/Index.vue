<template>
  <main class="main">
    <home ref="home" id="home"></home>
    <about ref="about" id="about"></about>
    <projects ref="projects" id="projects"></projects>
    <skills ref="skills" id="skills"></skills>
    <contact ref="contact" id="contact"></contact>
    <sectionSelector
      class="section-selector"
      @animatedScrollCard="animatedScrollCard"
      :activeCard="activeCard"
    ></sectionSelector>
  </main>
</template>

<script>
import home from "@/views/Home/Index.vue";
import about from "@/views/AboutMe/Index.vue";
import projects from "@/views/Projects/Index.vue";
import skills from "@/views/Skills/Index.vue";
import contact from "@/views/ContactMe/Index.vue";
import sectionSelector from "@/components/sectionSelector.vue";
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
    contact,
  },
  methods: {
    animatedScrollCard(refName) {
      this.activeCard = this.$refs[refName].$el.id;
      const element = this.$refs[refName].$el;
      const position = element.offsetTop;
      window.scrollTo({
        top: position,
        left: 0,
        behavior: "smooth",
      });
    },
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
