<template>
  <main class="main">
    <home></home>
    <about></about>
    <sectionSelector class="section-selector"></sectionSelector>
  </main>
</template>

<script>
import home from "@/views/Home/Index.vue";
import about from "@/views/AboutMe/Index.vue";
import sectionSelector from '@/components/sectionSelector.vue';

export default {
  name: "MainContent",
  components: {
    home,
    about,
    sectionSelector
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
