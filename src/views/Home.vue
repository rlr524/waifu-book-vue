<template>
  <div>
    <app-top-waifus :section-title="'Top Waifus'" />
  </div>
</template>

<script>
import TopWaifus from "@/components/TopWaifus.vue";

export default {
  name: "Home",
  components: {
    appTopWaifus: TopWaifus,
  },
};
</script>

<style lang="scss" scoped>
</style>