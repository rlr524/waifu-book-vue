<template>
  <div class="max-w-xs h-full rounded overflow-hidden shadow-lg ml-2 mr-2">
    <img :src="profileImgURL" alt="Waifu Card Profile" class="-card-img-size" />
    <div class="px-6 py-2">
      <div class="font-bold text-xs text-center">
        <p class="text-gray-700">{{}}</p>
      </div>
    </div>
    <div class="px-6 py-2">
      <div class="font-bold text-xs mb-2">
        <p class="text-gray-700">
          {{ fullNameEn }}
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          v-for="(tag, index) in waifuCardProfileTags"
          :key="index"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr2"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "WaifuCard",
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
.-card-img-size {
  height: 45%;
  width: 100%;
}
</style>
