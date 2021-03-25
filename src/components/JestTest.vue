<template>
  <div>
    <button v-show="loggedIn">Logout</button>
    <!-- The output we're testing -->
  </div>
</template>

<script>
export default {
  name: "JestTest",
  data() {
    return {
      loggedIn: false, // The input we're testing
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: aqua;
  height: 4em;
  width: 8em;
  padding: 2px;
}
</style>