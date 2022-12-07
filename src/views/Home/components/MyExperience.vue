<template>
  <div class="my-experience">
    <div class="content">
      <h3 class="content__title">My Experience</h3>
      <ul class="content-information">
        <li class="content-information__item">
          <span>Begginer developer in Guane Enterpise</span>
          <p>Nov. 2021 - Dic. 2021 (2 months)</p>
        </li>
        <li class="content-information__item">
          <span>Frontend Web Developer in Guane Enterpise</span>
          <p>Nov. 2021 - Current employment</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyExperience",
};
</script>

<style lang="scss" scoped>
.my-experience {
  height: 225px;
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Arial";
  font-size: 1rem;
  margin-left: 25px;
  &__title {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 15px;
    color: rgb(246, 71, 85);
    text-decoration: underline;
  }
  &-information {
    list-style: inside;
    &__item {
      p {
        margin-left: 22px;
        font-style: italic;
      }
    }
  }
}
</style>
