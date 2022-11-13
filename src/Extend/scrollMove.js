export default {
  methods: {
    scrollMove(position) {
      const container = window;
      container.scroll({
        top: position,
        behavior: "smooth",
      });
    }
  },
}