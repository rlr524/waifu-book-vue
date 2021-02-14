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
        <app-waifu-card />
        <app-waifu-card
          :waifu-card-profile-image="'100001_profile.png'"
          :waifu-card-profile-name="'Akane Tsunemori'"
          :waifu-card-profile-summary="'Akane Tsunemori (常守 朱 Tsunemori Akane) is the main heroine and point-of-view character in Psycho-Pass, the main protagonist in Psycho-Pass 2 and she serves as a behind-the-scenes force in Psycho-Pass 3.'"
          :waifu-card-profile-tags="[
            'psychological thriller',
            'cyberpunk',
            'crime',
          ]"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WaifuCard from "@/components/WaifuCard.vue";

export default {
  name: "WaifuSection",
  data: function () {
    return {
      cards: [],
    };
  },
  components: {
    appWaifuCard: WaifuCard,
  },
  computed: {
    ...mapGetters(["getWaifus"]),
  },
  props: {
    sectionTitle: String,
  },
  created() {
    console.log(this.getWaifus);
  },
};
</script>

<style lang="scss" scoped>
</style>
