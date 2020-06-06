<template>
  <div class="my-waifu w-full -group-height p-2 mb-4 -bg-color-off-orange">
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
