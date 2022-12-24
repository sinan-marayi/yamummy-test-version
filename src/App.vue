<template>
  <Navbar></Navbar>
  <Home></Home>
</template>

<script>
import "./assets/tailwind.css";
import Navbar from "./components/navbar.vue";
import Home from "./pages/Home.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
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
