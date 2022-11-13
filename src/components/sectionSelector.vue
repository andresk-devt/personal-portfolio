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
    ActiveCard: String
  },
  data() {
    return {
      items: [
        { icon: "home-outline", isActive: true, text: "Home", position: 0 },
        { icon: "person-circle-outline", isActive: false, text: "About me", position: 1000 },
        { icon: "albums-outline", isActive: false, text: "Projects", position: 2000 },
        { icon: "flash-outline", isActive: false, text: "Skills", position: 3000 },
        { icon: "mail-outline", isActive: false, text: "Contact me", position: 4000 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-selector {
  font-family: "Arial";
  background: rgb(34, 36, 56);
  filter: brightness(.7); 
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
