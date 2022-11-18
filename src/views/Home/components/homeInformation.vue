<template>
  <div class="content">
    <div class="content__container">
      <p class="content__container__text">Hi, I'm</p>
      <ul class="content__container__list">
        <li class="content__container__list__item">Andres Camilo Gómez!</li>
        <li class="content__container__list__item">a Frontend Developer!</li>
      </ul>
    </div>
    <p class="content__information">
      Front-end developer, I like to teach what I know and learn new things from
      others. I consider myself a self-taught person and I enjoy being in
      constant learning, I like to work in a team and give continuous feedback
      and manage good practices.
    </p>
    <button class="button-content" @click="scrollTo('skills')">Skills</button>
    <!-- <div class="video-content">
      <Lottie :options="defaultOptions" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "HomeInformation",
};
</script>

<style lang="scss" scoped>
.content {
  &__information {
    font-size: 1rem;
    font-family: "Arial";
    width: 60%;
    line-height: 20px;
    margin: 15px 0px;
  }
  &__container {
    font-weight: 600;
    font-family: "Arial";
    overflow: hidden;
    height: 40px;
    &__text {
      display: inline;
      float: left;
      margin: 0;
    }
    &__list {
      margin-top: 0;
      padding-left: 110px;
      margin-left: 12px;
      text-align: left;
      list-style: none;
      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      &__item {
        line-height: 40px;
        margin: 0;
      }
    }
  }
}
.button-content {
  border: none;
  height: 35px;
  width: 100px;
  border-radius: 13px;
  background: rgb(246, 71, 85);
  color: white;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
}
@keyframes opacity {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
@keyframes change {
  0%,
  12.66%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  16.66%,
  29.32% {
    transform: translate3d(0, -50%, 0);
  }
  33.32%,
  45.98% {
    transform: translate3d(0, 0%, 0);
  }
  49.98%,
  62.64% {
    transform: translate3d(0, -50%, 0);
  }
  66.64%,
  79.3% {
    transform: translate3d(0, 0%, 0);
  }
  83.3%,
  95.96% {
    transform: translate3d(0, -50%, 0);
  }
}
</style>
