<template>
  <div id="app" class="container">
    <Header />
    <MyWaifus />
    <WaifuDay />
    <WaifuTop />
  </div>
</template>

<script>
import Header from "@/components/Header";
import MyWaifus from "@/components/MyWaifus.vue";
import WaifuDay from "@/components/WaifuDay.vue";
import WaifuTop from "@/components/WaifuTop.vue";

export default {
  name: "App",
  components: {
    Header,
    MyWaifus,
    WaifuDay,
    WaifuTop
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
