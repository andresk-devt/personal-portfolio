export default {
  data() {
    return {
      window: null,
      scrollY: 0,
      screenWidth: null,
      activeCard: "home"
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    this.scrollY = window.scrollY;
    window.addEventListener("resize", this.onReSize);
    window.addEventListener("scroll", this.onScroll);
  },
  watch: {
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
      // como analizar cual es el $el que esta en el momento
    },
    onReSize() {
      this.screenWidth = window.innerWidth;
    },
  },
}