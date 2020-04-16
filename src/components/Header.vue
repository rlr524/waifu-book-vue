<template>
<nav class="header flex items-center justify-between flex-wrap p-6 h-32">
    <div class="flex items-center flex-shrink-0 mr-6">
        <img src="./img/site-logo-192x192.png" alt="Site Logo" class="h-16 w-16 mr-2">
        <form action="" class="w-full max-w-small">
            <div class="flex items-center border-b border-b-2 border-white-500 py-2">
                <input type="text" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
            </div>
        </form>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="header__links text-xl lg:flex-grow">
            <a href="/" class="block mt-4 lg:inline-block lg:mt-0 hover:shadow-inner mr-4">
            Home
            </a>
            <a href="/login" class="block mt-4 lg:inline-block lg:mt-0 hover:shadow-inner mr-4">
            Login
            </a>
        </div>
    </div>
</nav>
  
</template>

<script>
export default {

}
</script>

<style>

</style>