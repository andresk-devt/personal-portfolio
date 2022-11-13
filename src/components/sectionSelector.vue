<template>
  <ul class="section-selector">
    <li
      v-for="item in items"
      :key="item.text"
      class="section-selector__item"
      :class="item.isActive ? 'active' : ''"
      @click="scrollMove(item.position)"
    >
      <ion-icon :name="item.icon" title></ion-icon>
    </li>
  </ul>
</template>

<script>
import scrollMove from "@/Extend/scrollMove";

export default {
  name: "SectionSelector",
  mixins: [scrollMove],
  props: {
    ActiveCard: String,
  },
  data() {
    return {
      items: [
        { icon: "home-outline", isActive: false, text: "Home", position: 0 },
        {
          icon: "person-circle-outline",
          isActive: false,
          text: "About me",
          position: 770,
        },
        {
          icon: "albums-outline",
          isActive: false,
          text: "Projects",
          position: 1540,
        },
        {
          icon: "flash-outline",
          isActive: false,
          text: "Skills",
          position: 2310,
        },
        {
          icon: "mail-outline",
          isActive: false,
          text: "Contact me",
          position: 3080,
        },
      ],
    };
  },
  watch: {
    scrollY: {
      immediate: true,
      handler() {
        if (this.scrollY === 0 || this.scrollY < 770) {
          this.items[0].isActive = true;
          this.items[1].isActive = false;
          this.items[2].isActive = false;
          this.items[3].isActive = false;
          this.items[4].isActive = false;
        } else if (this.scrollY < 1540) {
          this.items[0].isActive = false;
          this.items[1].isActive = true;
          this.items[2].isActive = false;
          this.items[3].isActive = false;
          this.items[4].isActive = false;
        } else if (this.scrollY < 2310) {
          this.items[0].isActive = false;
          this.items[1].isActive = false;
          this.items[2].isActive = true;
          this.items[3].isActive = false;
          this.items[4].isActive = false;
        } else if (this.scrollY < 3080) {
          this.items[0].isActive = false;
          this.items[1].isActive = false;
          this.items[2].isActive = false;
          this.items[3].isActive = true;
          this.items[4].isActive = false;
        } else {
          this.items[0].isActive = false;
          this.items[1].isActive = false;
          this.items[2].isActive = false;
          this.items[3].isActive = false;
          this.items[4].isActive = true;
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.section-selector {
  font-family: "Arial";
  background: rgb(34, 36, 56);
  filter: brightness(0.7);
  color: white;
  display: inline-block;
  border-radius: 13px;
  text-align: center;
  z-index: 10;
  &__item {
    padding: 10px;
    cursor: pointer;
  }
}
ion-icon {
  font-size: 24px;
}
::v-deep .active {
  color: rgb(246, 71, 85);
}
</style>
