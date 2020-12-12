<template>
  <div class="my-waifu pl-2 md:pl-5 lg:pl-0">
    <ul
      class="flex justify-between pt-4 pb-4 scrollbar overflow-x-auto xxl-no-scrollbar"
    >
      <li>
        <a
          href="#" 
          class="mr-4 py-6 h-full w-14 flex flex-col justify-center rounded hover:shadow-dark hover-transition -bg-color-main hover:-bg-color-light-main" 
          aria-label="View my waifus"
        >
          <aside class="transform -rotate-90">
            <h3 class="uppercase text-xl text-white font-bold">
              My Waifus
            </h3>
          </aside>
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
