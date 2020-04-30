<template>
  <div id="app" class="container">
    <Header />
    <WaifuDay />
  </div>
</template>

<script>
import Header from "./components/Header";
import WaifuDay from "@/components/WaifuDay.vue";

export default {
  name: "App",
  components: {
    Header,
    WaifuDay
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2rem auto;
}

@media (max-width: 700px) {
  #app {
    margin: 0 auto;
  }
}
</style>
