<script>
import NavigationBar from "./NavigationBar.vue";
import Footer from "./Footer.vue";
export default {
  name: "ServicePage",
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
  <body>
    <NavigationBar />
    <h1>Hello Services</h1>
    <Footer />
  </body>
</template>

<style scoped></style>
