<template>
  <div class="my-waifu w-full h-64 mb-4 -bg-color-off-orange">
    My Waifus
    <WaifuCard />
  </div>
</template>

<script>
import WaifuCard from "@/components/WaifuCard.vue";
export default {
  name: "MyWaifus",
  components: {
    WaifuCard
  }
};
</script>

<style lang="scss" scoped></style>
