<script>
import NavigationBar from "./NavigationBar.vue";
import Footer from "./Footer.vue";

export default {
  name: "AboutPage",
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
  <h1>Hello About Us</h1>
  <Footer />
</template>
<style scoped></style>
