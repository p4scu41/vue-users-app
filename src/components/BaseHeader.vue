<template>
  <nav class="fixed w-full z-10 top-0 bg-white border-b border-gray-400">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between py-4"
    >
      <div class="pl-4">
        <font-awesome-icon
          :icon="['fab', 'black-tie']"
          size="lg"
          class="text-purple-400 mr-3"
        />
        <router-link
          to="/"
          class="text-gray-700 font-extrabold hover:text-black"
        >
          Home
        </router-link>
      </div>

      <div class="block lg:hidden pr-4">
        <button
          @click="toggleMenu()"
          class="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-900 hover:border-purple-500 focus:outline-none"
        >
          <font-awesome-icon
            :icon="['fas', 'bars']"
            size="lg"
            class="text-small"
            style="font-size: medium"
          />
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:justify-end lg:items-center lg:w-auto lg:block z-20"
        :class="{ hidden: isHidden }"
      >
        <!-- <div
          class="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0"
        >
          <div class="relative pl-4 pr-4 md:pr-0">
            <input
              type="search"
              placeholder="Search"
              class="w-full bg-gray-100 text-gray-800 border focus:outline-none focus:border-purple-500 rounded py-1 px-2 pl-10"
            />
            <font-awesome-icon
              :icon="['fas', 'search']"
              size="lg"
              class="absolute"
              style="top: 0.5rem; left: 1.75rem; font-size: medium"
            />
          </div>
        </div> -->

        <base-header-menu @hideMenu="hideMenu()" />
      </div>
    </div>
  </nav>
</template>

<script>
import BaseHeaderMenu from "@/components/BaseHeaderMenu.vue";

export default {
  data() {
    return {
      isHidden: true
    };
  },
  components: {
    BaseHeaderMenu
  },
  methods: {
    toggleMenu() {
      this.isHidden = !this.isHidden;
    },
    hideMenu() {
      this.isHidden = true;
    }
  }
};
</script>
