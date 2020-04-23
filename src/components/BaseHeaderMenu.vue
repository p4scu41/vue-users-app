<template>
  <ul class="lg:flex justify-end items-center">
    <li class="mr-3 py-2 lg:py-0">
      <router-link
        :to="{ name: 'home' }"
        class="inline-block py-2 px-4 text-gray-900"
        active-class="font-bold"
        exact
      >
        <span class="block" @click="hideMenu()">Login</span>
      </router-link>
    </li>
    <li class="mr-3 py-2 lg:py-0">
      <router-link
        :to="{ name: 'about' }"
        class="inline-block py-2 px-4 text-gray-900"
        active-class="font-bold"
      >
        <span class="block" @click="hideMenu()">Register</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    hideMenu() {
      this.$emit("hideMenu");
    }
  }
};
</script>
