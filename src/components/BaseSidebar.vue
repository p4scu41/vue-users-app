<template>
  <div class="w-full lg:w-1/5 lg:px-6 text-gray-800">
    <!-- <p class="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p> -->
    <div class="block lg:hidden sticky inset-0">
      <button
        @click="toggleMenu()"
        class="flex w-full justify-end px-3 py-3 bg-white border rounded border-gray-600 hover:border-purple-500 focus:outline-none"
      >
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          size="lg"
          class="text-small"
          style="font-size: medium"
        />
      </button>
    </div>
    <div
      class="w-full sticky inset-0 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-x-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent"
      :class="{ hidden: isHidden }"
    >
      <ul>
        <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
          <router-link
            to="/"
            class="block pl-4 align-middle text-gray-700 hover:text-purple-500 border-l-4 border-transparent lg:hover:border-purple-400"
            active-class="lg:border-purple-500 text-gray-900 font-bold"
            exact
          >
            <span class="block" @click="hideMenu()">Home</span>
          </router-link>
        </li>
        <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
          <router-link
            to="/about"
            class="block pl-4 align-middle text-gray-700 hover:text-purple-500 border-l-4 border-transparent lg:hover:border-purple-400"
            active-class="lg:border-purple-500 text-gray-900 font-bold"
            exact
          >
            <span class="block" @click="hideMenu()">About</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true
    };
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
