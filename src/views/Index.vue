<template>
  <main class="main" @scroll="test()">
    <home ref="home" id="home" @animatedScrollCard="animatedScrollCard"></home>
    <skills ref="skills" id="skills"></skills>
    <projects ref="projects" id="projects"></projects>
    <contact ref="contact" id="contact"></contact>
    <sectionSelector
      class="section-selector"
      :activeCard="activeCard"
      @animatedScrollCard="animatedScrollCard"
    ></sectionSelector>
  </main>
</template>

<script>
import home from "@/views/Home/Index.vue";
import projects from "@/views/Projects/Index.vue";
import skills from "@/views/Skills/Index.vue";
import contact from "@/views/ContactMe/Index.vue";
import sectionSelector from "@/components/sectionSelector.vue";

export default {
  name: "MainContent",
  components: {
    home,
    projects,
    sectionSelector,
    skills,
    contact,
  },
  data() {
    return {
      activeCard: 'home',
      componentsPosition: null
    }
  },
  mounted() {
    this.onScroll;
    window.addEventListener("scroll", this.onScroll);
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
    onScroll() {
      this.calculatePositionOfBox();
    },
    calculatePositionOfBox() {
      const home = this.$refs['home'].$el.getBoundingClientRect().top;
      const skills = this.$refs['skills'].$el.getBoundingClientRect().top;
      const projects = this.$refs['projects'].$el.getBoundingClientRect().top;
      const contact = this.$refs['contact'].$el.getBoundingClientRect().top;

      this.componentsPosition = {
        home,
        skills,
        projects,
        contact
      }
      Object.entries(this.componentsPosition).forEach(([key, value]) => {
        if (value >= -760 && value <= 0) {
          this.activeCard = key;
        }
      })
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
