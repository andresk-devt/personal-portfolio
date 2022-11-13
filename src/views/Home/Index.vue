<template>
  <div class="home">
    <div class="home-content"></div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  &-content {
    background: rgb(34,36,56);
    filter: brightness(.7);
    width: 80%;
    height: 80%;
    margin: auto;
    padding: 13px;
    border-radius: 14px;
  }
}

</style>