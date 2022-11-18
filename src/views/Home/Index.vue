<template>
  <div class="home">
    <div class="home-content">
      <div class="content">
        <div class="content-component" id="content-component">
          <HomeInformation ref="home-information" />
          <MyEducation ref="my-education" />
        </div>
      </div>
      <StepBar
        class="step-bar"
        :items="components"
        :componentActive="componentActive"
        @scrollHomeInformation="scrollHomeInformation"
      />
    </div>
  </div>
</template>

<script>
// import Lottie from "vue-lottie/src/lottie.vue";
// import * as animationData from "@/assets/animations/programmer.json";
import scrollMove from "@/Extend/scrollMove";
import StepBar from "@/components/stepBar.vue";
import HomeInformation from "./components/homeInformation.vue";
import MyEducation from "./components/myEducation.vue";

export default {
  name: "Home",
  mixins: [scrollMove],
  components: {
    // Lottie,
    StepBar,
    HomeInformation,
    MyEducation,
  },
  data() {
    return {
      // defaultOptions: {
      //   animationData: animationData.default,
      // },
      // animationSpeed: 1,
      componentActive: 'home-information',
      components: [
        { component: 'home-information' },
        { component: 'my-education' }
      ]
    };
  },
  methods: {
    scrollHomeInformation(refName) {
      this.componentActive = refName;
      const e = document.getElementById("content-component");
      if (refName === "my-education") {
        e.scroll({
          top: 225,
          left: 0,
          behavior: "smooth",
        });
      } else {
        e.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    },
    scrollTo(refName) {
      this.$emit("animatedScrollCard", refName);
    },
  },
};
</script>

<style lang="scss" scoped>
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
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 25px;
  position: relative;
  &-component {
    overflow: hidden;
    height: 225px;
  }
}
.step-bar {
  position: absolute;
  right: 25%;
  top: 35%;
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
