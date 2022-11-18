<template>
  <div class="contact-me">
    <div class="contact-me-content">
      <div class="content">
        <div class="content-form">
          <h2 class="content__title">CONTACT WITH ME</h2>
          <input class="input-content" type="text" placeholder="FULL NAME" />
          <input class="input-content" type="email" placeholder="EMAIL" />
          <input class="input-content" type="text" placeholder="COMPANY NAME" />
          <textarea
            class="input-content"
            name=""
            id=""
            rows="7"
            placeholder="MESSAGE"
          ></textarea>
          <button class="button-content">Send</button>
        </div>
        <!-- <div class="contact-animation" v-if="true">
          <Lottie
            :options="defaultOptions"
            v-on:animCreated="handleAnimation"
          />
          <button @click="stopAnimation()">stop</button>
          <button @click="play()">play</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Lottie from "vue-lottie/src/lottie.vue";
// import * as animationData from "@/assets/animations/email-send.json";

export default {
  name: "ContactMe",
  components: {
    // Lottie,
  },
  data() {
    return {
      // defaultOptions: {
      //   animationData: animationData.default,
      // },
      // animationSpeed: 1,
    };
  },
  methods: {
    // handleAnimation(anim) {
    //   this.anim = anim;
    // },
    // play() {
    //   this.anim.play();
    // },
    // stopAnimation() {
    //   this.anim.stop();
    // },
  },
};
</script>

<style lang="scss" scoped>
.contact-me {
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
  flex-direction: row;
  height: 100%;
  font-family: "Arial";
  margin: 25px;
  position: relative;
  &__title {
    width: 50%;
    margin: 10px 0px;
    color: white;
    font-size: 1.8rem;
    text-decoration: underline;
    font-weight: bold;
  }
}
.content-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}
.contact-animation {
  width: 100%;
  height: 100%;
  /* centrado vertical */
  position: absolute;
}
.input-content {
  border-radius: 7px;
  outline: none;
  margin: 10px 0px;
  background: rgb(43, 44, 62);
  border: none;
  padding: 8px;
  font-family: "Arial";
  color: white;
  resize: none;
}
.button-content {
  border: none;
  height: 35px;
  width: 100px;
  border-radius: 13px;
  background: rgb(246, 71, 85);
  color: white;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
}
</style>
