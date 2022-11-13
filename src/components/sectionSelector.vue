<template>
  <ul class="section-selector">
    <li
      v-for="item in items"
      :key="item.isActive"
      class="section-selector__item"
      :class="item.isActive ? 'active' : ''"
    >
      <ion-icon :name="item.icon" title></ion-icon>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SectionSelector",
  props: {
    ActiveCard: String
  },
  data() {
    return {
      items: [
        { icon: "home-outline", isActive: true, text: "Home" },
        { icon: "person-circle-outline", isActive: false, text: "About me" },
        { icon: "albums-outline", isActive: false, text: "Projects" },
        { icon: "flash-outline", isActive: false, text: "Skills" },
        { icon: "mail-outline", isActive: false, text: "Contact me" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-selector {
  font-family: "Arial";
  background: rgb(34, 36, 56);
  color: white;
  display: inline-block;
  border-radius: 13px;
  text-align: center;
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
