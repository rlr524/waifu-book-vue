<template>
  <div class="my-waifu pl-2 md:pl-5 lg:pl-0">
    <ul
      class="flex justify-between pt-4 pb-4 scrollbar overflow-x-auto xxl-no-scrollbar"
    >
      <li>
        <a
          href="#"
          class="mr-4 py-6 h-full w-16 flex flex-col justify-between items-center rounded hover:shadow-dark hover-transition bg-blue text-white hover:bg-orange-darker"
          aria-label="View my waifus"
        >
          <div flex flex-col items-center>
            <h3 class="font-light">
              My Waifus
            </h3>
          </div>
          </a>
      </li>
      <li
        class="flex flex-col font-body relative rounded mr-5 text-xs"
      >
        <WaifuCard />
      </li>
    </ul>
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

<style lang="scss" scoped>
</style>
