<template>
  <div class="max-w-xs h-full rounded overflow-hidden shadow-lg ml-2 mr-2">
    <img
      v-for="waifu in getWaifus"
      :key="waifu.waifuId"
      :src="waifu.profileImgURL"
      alt="Waifu Card Profile"
      class="-card-img-size"
    />
    <!-- <div class="px-6 py-2">
      <div class="font-bold text-xs text-center">
        <p class="text-gray-700">
          {{ waifuCardProfileName }}
        </p>
      </div>
    </div> -->
    <!-- <div class="px-6 py-2">
      <div class="font-bold text-xs mb-2">
        <p class="text-gray-700">
          {{ waifuCardProfileSummary }}
        </p>
      </div>
      <div class="px-6 py-4">
        <span v-for="(tag, index) in waifuCardProfileTags" :key="index"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr2"
        >
        {{ tag }}
        </span>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "WaifuCard",
  props: {
    waifuCardProfileImage: {
      type: String,
      default: "yukino_default_waifu.png",
    },
    waifuCardProfileName: {
      type: String,
      default: "Your Waifu's Name",
    },
    waifuCardProfileSummary: {
      type: String,
      default:
        "Your Waifu's profile information would go here if you had a Waifu. This would be information about your Waifu's shows, manga, exploits, and overall reasons for superior waifu status.",
    },
    waifuCardProfileTags: {
      type: Array,
      default: () => ["tag1", "tag2", "tag3"],
    },
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
.-card-img-size {
  height: 45%;
  width: 100%;
}
</style>
