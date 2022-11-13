<template>
  <div class="home">
    <div class="home-content"></div>
    <sectionSelector class="section-selector"></sectionSelector>
  </div>
</template>

<script>
import sectionSelector from '@/components/sectionSelector.vue'
export default {
  components: { sectionSelector },
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
.section-selector {
  position: absolute;
  top: 35%;
  left: 4%;
}
</style>