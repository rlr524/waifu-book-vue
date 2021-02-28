<template>
  <div class="my-waifu pl-2">
    <!-- <ul
      class="flex justify-between pt-4 pb-4 scrollbar overflow-x-auto xxl-no-scrollbar"
    > -->
    <div class="block">
      <a
        href="#"
        class="block mr-2 h-full rounded -bg-color-main hover:opacity-90 hover:shadow"
        aria-label="View my waifus"
      >
        <h3 class="uppercase text-3xl text-white font-bold px-2 py-2">
          {{ sectionTitle }}
        </h3>
      </a>
    </div>
    <ul
      class="flex justify-between scrollbar overflow-x-auto xxl-no-scrollbar pt-4 pb-4"
    >
      <li
        class="flex flex-row font-body relative rounded mr-5 text-xs hover:shadow"
      >
        <app-waifu-card v-for="waifu in getWaifus" :key="waifu.waifuId" />
      </li>
    </ul>
  </div>
</template>

<script>
import WaifuCard from "@/components/WaifuCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "WaifuSection",
  data: function () {
    return {};
  },
  components: {
    appWaifuCard: WaifuCard,
  },
  methods: {
    ...mapActions(["useWaifus"]),
    resolveImageURL: function (path) {
      let images = require.context("../img/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
  },
  computed: {
    ...mapGetters(["getWaifus"]),
  },
  created() {
    this.useWaifus();
  },
};
</script>

<style lang="scss" scoped>
</style>
