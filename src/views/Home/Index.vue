<template>
  <div class="home">
    <div class="home-content">
      <div class="content">
        <div class="content__container">
          <p class="content__container__text">Hi, I'm</p>
          <ul class="content__container__list">
            <li class="content__container__list__item">Andres Camilo Gómez!</li>
            <li class="content__container__list__item">
              a Frontend Developer!
            </li>
          </ul>
        </div>
        <p class="content__information">
          Front-end developer, I like to teach what I know and learn new things
          from others. I consider myself a self-taught person and I enjoy being
          in constant learning, I like to work in a team and give continuous
          feedback and manage good practices.
        </p>
        <button class="button-content" @click="scrollMove(770)">
          About me
        </button>
        <div class="video-content">
          <Lottie :options="defaultOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scrollMove from "@/Extend/scrollMove";
import Lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "@/assets/animations/programmer.json";

export default {
  name: "Home",
  mixins: [scrollMove],
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default,
      },
      animationSpeed: 1,
    };
  },
};
</script>

<style lang="scss">
.home {
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
  font-size: 35px;
  line-height: 40px;
  color: #ecf0f1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 25px;
  position: relative;
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
.video-content {
  height: 260px;
  width: 260px;
  position: absolute;
  bottom: 15px;
  right: 30px;
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
