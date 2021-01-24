<template>
  <div>
    <Packages />
    <Footer />
  </div>
</template>

<script>
import Packages from "./components/Packages";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Packages, Footer },
};
</script>

<style>
body{
    margin: 0;
}
</style>
