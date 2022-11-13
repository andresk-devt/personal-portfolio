<template>
  <main class="main">
    <home></home>
    <about></about>
  </main>
</template>

<script>
import home from "@/views/Home/Index.vue";
import about from "@/views/AboutMe/Index.vue"

export default {
  name: "MainContent",
  components: {
    home,
    about
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
}
</style>
