<template>
  <Navbar></Navbar>
  <pdpListing></pdpListing>
</template>

<script>
import "./assets/tailwind.css";
import Navbar from "./components/navbar.vue";
// import Home from "./pages/Home.vue";
// import Dashboard from "./pages/Dashboard.vue";
import pdpListing from "./pages/pdpListing.vue";

export default {
  name: "App",
  components: {
    Navbar,
    // Home,
    // Dashboard
    pdpListing
  },
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  font-family: "inter";
}
</style>
