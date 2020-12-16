<template>
  <div class="my-waifu pl-2">
    <!-- <ul
      class="flex justify-between pt-4 pb-4 scrollbar overflow-x-auto xxl-no-scrollbar"
    > -->
    <div class="block">
              <a
          href="#" 
          class="block mr-2 h-full rounded hover:shadow-dark hover-transition -bg-color-main hover:-bg-color-light-main" 
          aria-label="View my waifus"
        >
          <h3 class="uppercase text-3xl text-white font-bold px-2 py-2">
            {{ sectionTitle }}
          </h3>
        </a>
    </div>
      <ul class="flex justify-between scrollbar overflow-x-auto xxl-no-scrollbar pt-4 pb-4">
      <li
        class="flex flex-row font-body relative rounded mr-5 text-xs"
        :v-for="(card, index) in cards" key="index"
      >
        <waifu-card />
      </li>
    </ul>
  </div>
</template>

<script>
import WaifuCard from "@/components/WaifuCard.vue";

export default {
  name: "WaifuSection",
  data: function() {
    return {
      cards: []
    }
  },
  components: {
    WaifuCard
  },
  props: {
    sectionTitle: String,
  }
};
</script>

<style lang="scss" scoped>
</style>
