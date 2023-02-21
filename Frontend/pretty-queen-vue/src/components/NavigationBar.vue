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
          <a href="index.html" class="navbar-brand">Pretty Queen</a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="contact.html"
                >RSVP
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="services.html"
                role="button"
                aria-expanded="false"
                >Services
              </a>
              <ul class="dropdown-menu bg-dark">
                <li>
                  <a class="dropdown-item btn btn-dark" href="services.html"
                    >Services</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="products.html">Products</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="hamburger">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <a href="index.html" class="text-white">Pretty Queen</a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="contact.html"
                >Book Appointment</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                >Services</a
              >
              <ul class="dropdown-menu bg-dark">
                <li>
                  <a class="dropdown-item btn btn-dark" href="services.html"
                    >Services</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="products.html">Products</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
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
