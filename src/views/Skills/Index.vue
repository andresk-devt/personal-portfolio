<template>
  <div class="skills">
    <div class="skills-content">
      <div class="content">
        <h2 class="content__title">Skill-Set</h2>
        <div class="content-container">
          <div class="content-container__item"></div>
          <div class="content-container__item"></div>
          <div class="content-container__item"></div>
          <div class="content-container__item"></div>
          <div class="content-container__item"></div>
          <div class="content-container__item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style lang="scss" scoped>
.skills {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: rgb(34, 36, 56);
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
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 25px;
  font-family: "Arial";
  &__title {
    color: white;
    font-size: 1.8rem;
    text-decoration: underline;
    font-weight: bold;
  }
}
.content-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 10px;
  &__item {
    width: 100%;
    height: 180px;
    background: rgb(43, 44, 62);
  }
}
</style>
