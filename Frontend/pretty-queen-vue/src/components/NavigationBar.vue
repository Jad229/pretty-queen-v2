<script>
export default {
  name: "NavigationBar",
  data() {
    return {};
  },
};
</script>

<template>
  <header class="sticky-top">
    <div class="fullnav">
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">Pretty Queen</router-link>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" aria-current="page"
                >RSVP</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <router-link
                to="/services"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
                >Services</router-link
              >
              <ul class="dropdown-menu bg-dark">
                <li>
                  <router-link to="/services" class="dropdown-item btn btn-dark"
                    >Services</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="dropdown-item"
                    >Products</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link"
                >Contact Us</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="hamburger">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <router-link to="/" class="text-white">Pretty Queen</router-link>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" aria-current="page"
                >Book Appointment</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <router-link
                to="/services"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
                >Services</router-link
              >
              <ul class="dropdown-menu bg-dark">
                <li>
                  <router-link to="/services" class="dropdown-item btn btn-dark"
                    >Services</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="dropdown-item"
                    >Products</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link"
                >Contact Us</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
