<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer class="sticky-bottom">
    <nav class="footer-content navbar bg-dark">
      <div>
        <p>&copy {{ year }} Justin Diaz</p>
      </div>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  z-index: 1000;
}
footer {
  margin-top: auto;
}

footer .navbar {
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: #ffe05d;
}
</style>
