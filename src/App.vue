<template>
  <div id="app">
    <Header />
    <main class="main-layout">
      <section class="container-wide mx-auto mt-10 lg:mt-12 xl:mt-14">
        <MyWaifus />
        <WaifuDay />
        <WaifuTop />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import MyWaifus from "@/views/MyWaifus.vue";
import WaifuDay from "@/views/WaifuDay.vue";
import WaifuTop from "@/views/WaifuTop.vue";
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
  font-family: "Noto Sans JP", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-layout {
  width: 85%;
  margin: auto;
}

/* custom global styles */
.-bg-color-main {
  background-color: #ff971d;
}
.-bg-color-off-orange {
  background-color: #f9f6f7;
}
.-font-bold {
  font-weight: 700;
}
.-group-height {
  height: 24rem;
}

@media (max-width: 700px) {
  #app {
    margin: 0 auto;
  }
}
</style>
