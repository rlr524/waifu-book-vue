<template>
  <div class="max-w-xs h-full rounded overflow-hidden shadow-lg ml-2 mr-2">
    <img
      src="./img/100001_profile.png"
      alt="Waifu Card Profile"
      class="-card-img-size"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xs mb-2">
        <p class="text-gray-700">
          Akane Tsunemori (常守 朱 Tsunemori Akane) is the main heroine and
          point-of-view character in Psycho-Pass, the main protagonist in
          Psycho-Pass 2 and she serves as a behind-the-scenes force in
          Psycho-Pass 3.
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr2"
        >
          #psychological thriller
        </span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr2"
        >
          #crime
        </span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr2"
        >
          #cyberpunk
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaifuCard"
};
</script>

<style lang="scss" scoped>
.-card-img-size {
  height: 45%;
  width: 100%;
}
</style>
