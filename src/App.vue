<template>
  <div id="app">
    <sectionSelector class="section-selector"></sectionSelector>
    <router-view/>
  </div>
</template>

<script>
import sectionSelector from '@/components/sectionSelector.vue'
export default {
  components: { sectionSelector },
}
</script>

<style lang="scss">
@import url("../src/assets/css/style.css");

#app {
  height: 100vh;
  width: 100%;
  position: relative;
}
.section-selector {
  position: fixed;
  top: 35%;
  left: 4%;
}
</style>
