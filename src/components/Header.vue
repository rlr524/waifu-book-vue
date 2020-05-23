<template>
  <!-- TODO: [WAIF-8] Make the navbar responsive with TW -->
  <nav class="header flex mb-4 items-center h-32 -bg-color-main">
    <div class="flex items-center w-1/3">
      <img
        src="./img/site-logo-192x192.png"
        alt="Site Logo"
        class="h-16 w-16 ml-4 mr-2"
      />
      <span
        class="header-title -font-family-main text-white text-3xl font-bold lg:flex-grow lg:flex hidden"
      >
        WaifuBook
      </span>
    </div>
    <div class="flex sm:w-1/2">
      <form action="" class="md:w-full">
        <div class="">
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            class="h-8 md:w-full"
          />
        </div>
      </form>
    </div>
    <div class="flex w-1/3">
      <div
        class="header-links -font-family-main text-white text-xl sm:flex-grow sm:flex sm:justify-end hidden"
      >
        <a
          href="/"
          class="block mt-4 sm:inline-block sm:mt-0 hover:shadow-inner mr-4"
        >
          Home
        </a>
        <a
          href="/login"
          class="block mt-4 sm:inline-block sm:mt-0 hover:shadow-inner mr-4"
        >
          Login
        </a>
      </div>
    </div>
    <div class="menu-vertical-responsive">
      <i class="material-icons mt-2 md-light sm:hidden cursor-pointer static">
        more_vert
      </i>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.material-icons.md-light {
  color: rgba(255, 255, 255, 1);
}
</style>
