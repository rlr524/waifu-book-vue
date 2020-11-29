<template>
  <div class="waifu-top w-full h-64 mb-4">
    Top 7 Waifus
    <WaifuCard />
  </div>
</template>

<script>
import WaifuCard from "@/components/WaifuCard";

export default {
  name: "WaifuTop",
  components: {
    WaifuCard
  }
};
</script>

<style lang="scss" scoped></style>
