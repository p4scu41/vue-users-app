<template>
  <div id="app" class="bg-gray-100 tracking-wider">
    <base-header />

    <div
      class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16"
    >
      <base-sidebar />

      <div
        class="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 bg-white border border-gray-400"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseSidebar from "@/components/BaseSidebar.vue";

export default {
  components: {
    BaseHeader,
    BaseSidebar
  }
};
</script>
