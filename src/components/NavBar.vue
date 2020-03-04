<template>
  <div class="nav-bar">
    <header class="header" :class="{ scrolled: scrolled }">
      <div class="header-logo">
        <a class="logo-link">
          <img
            class="logo-image"
            src="../assets/logo-lateral.png"
            width="160"
            height="28"
          />
        </a>
      </div>
      <nav class="header-menu">
        <router-link class="nav-link" to="/services">services</router-link>
        <router-link class="nav-link" to="/"
          ><span class="link-slash">/</span> projects</router-link
        >
        <router-link class="nav-link" to="/"
          ><span class="link-slash">/</span> news</router-link
        >
        <router-link class="nav-link" to="/careers"
          ><span class="link-slash">/</span> careers</router-link
        >
        <router-link class="nav-link" to="/about"
          ><span class="link-slash">/</span> about us</router-link
        >
        <div class="mobile-menu">
          <div
            class="bar-container"
            :class="{ toggleMenu: toggleMenu }"
            @click="mobileMenu()"
          >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
        <div class="sidebar-mobile" :class="{ sideBarToogle: toggleMenu }">
          <ul>
            <li>
              <router-link class="nav-link-mobile" to="/services"
                >services</router-link
              >
            </li>
            <li>
              <router-link class="nav-link-mobile" to="/">projects</router-link>
            </li>
            <li>
              <router-link class="nav-link-mobile" to="/">news</router-link>
            </li>
            <li>
              <router-link class="nav-link-mobile" to="/careers"
                >careers</router-link
              >
            </li>
            <li>
              <router-link class="nav-link-mobile" to="/about"
                >about us</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      scrolled: false,
      toggleMenu: false
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? (this.scrolled = true) : (this.scrolled = false);
    });
  },
  methods: {
    mobileMenu() {
      this.toggleMenu = !this.toggleMenu;
    }
  }
};
</script>
<style lang="scss">
@import "../styles/header.scss";
</style>
