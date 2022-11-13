export default {
  data() {
    return {
      window: null,
      scrollY: 0,
      screenWidth: null,
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    this.scrollY = window.scrollY;
    window.addEventListener("resize", this.onReSize);
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    scrollMove(position) {
      const container = window;
      container.scroll({
        top: position,
        behavior: "smooth",
      });
    },
    onScroll() {
      this.scrollY = window.scrollY;
    },
    onReSize() {
      this.screenWidth = window.innerWidth;
    },
  },
}