<template>
  <ul class="section-selector">
    <li
      v-for="item in items"
      :key="item.key"
      class="section-selector__item"
      :class="item.isActive ? 'active' : ''"
      @click="scrollCard(item.ref)"
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
    activeCard: String,
  },
  data() {
    return {
      items: [
        { icon: "home-outline", isActive: true, ref: "home" },
        {
          icon: "person-circle-outline",
          isActive: false,
          ref: "about",
        },
        {
          icon: "albums-outline",
          isActive: false,
          ref: "projects",
        },
        {
          icon: "flash-outline",
          isActive: false,
          ref: "skills",
        },
        {
          icon: "mail-outline",
          isActive: false,
          ref: "contact",
        },
      ],
    };
  },
  watch: {
    activeCard() {
      return this.items.map((item) => {
        if (item.ref === this.activeCard) {
          item.isActive = true;
          item.key += 1;
        } else {
          item.isActive = false;
        }
      })
    }
  },
  methods: {
    scrollCard(ref) {
      this.$emit('animatedScrollCard', ref);
    }
  }
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
