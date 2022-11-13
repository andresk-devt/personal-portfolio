<template>
  <div class="projects">
    <div class="projects-content">
      Projects
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style lang="scss" scoped>
.projects{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: rgb(34,36,56);
  &-content {
    background: rgb(34, 36, 56);
    filter: brightness(0.9);
    width: 80%;
    height: 80%;
    margin: auto;
    padding: 13px;
    border-radius: 14px;
    position: relative;
  }
}
</style>
