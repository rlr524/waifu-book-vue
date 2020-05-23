<template>
  <div id="app" class="container">
    <Header />
    <MyWaifus />
    <WaifuDay />
    <WaifuTop />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import MyWaifus from "@/components/MyWaifus.vue";
import WaifuDay from "@/components/WaifuDay.vue";
import WaifuTop from "@/components/WaifuTop.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    MyWaifus,
    WaifuDay,
    WaifuTop,
    Footer
  }
};
</script>

<style lang="scss">
/* color palette:
main orange: ff971d,
light orange: ffe8d6,
orange off white: f9f6f7,
white: ffffff */

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2rem auto;
}

/* custom global styles */
.-bg-color-main {
  background-color: #ff971d;
}
.-bg-color-off-orange {
  background-color: #f9f6f7;
}

@media (max-width: 700px) {
  #app {
    margin: 0 auto;
  }
}
</style>
