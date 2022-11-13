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

<style>
@import url("../src/assets/css/style.css");

#app {
  height: 100vh;
  width: 100%;
  background: rgb(34,36,56);
  position: relative;
}
.section-selector {
  position: absolute;
  top: 35%;
  left: 4%;
}
</style>
