<template>
  <!-- TODO: [WAIF-8] Make the navbar responsive with TW -->
  <nav class="header flex mb-4 items-center h-32">
    <div class="flex items-center w-1/3">
      <img
        src="./img/site-logo-192x192.png"
        alt="Site Logo"
        class="h-16 w-16 ml-4 mr-2"
      />
      <span class="header__title text-3xl font-bold">WaifuBook</span>
    </div>
    <div class="flex w-1/3">
      <form action="" class="w-full">
        <div class="">
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            class="w-full h-8"
          />
        </div>
      </form>
    </div>
    <div class="flex w-1/3">
      <div class="header__links text-xl lg:flex-grow flex justify-end">
        <div class="menu-btn">
          <i class="fas fa-bars fa-2x"></i>
        </div>
        <a
          href="/"
          class="block mt-4 lg:inline-block lg:mt-0 hover:shadow-inner mr-4"
        >
          Home
        </a>
        <a
          href="/login"
          class="block mt-4 lg:inline-block lg:mt-0 hover:shadow-inner mr-4"
        >
          Login
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu-btn {
  cursor: pointer;
  position: absolute;
  z-index: 2;
  display: none;
}

@media (max-width: 1023px) {
  .header__title {
    visibility: hidden;
  }
  .menu-btn {
    display: block;
  }

  .menu-btn:hover {
    opacity: 0.5;
  }
}
</style>
