<script>
import NavigationBar from "./NavigationBar.vue";
import Footer from "./Footer.vue";

export default {
  name: "ProductsPage",
  components: {
    NavigationBar,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <NavigationBar />
  <h1>ProductsPage</h1>
  <Footer />
</template>

<style scoped></style>
