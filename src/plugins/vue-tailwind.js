import Vue from "vue";
import TModal from "vue-tailwind/src/components/TModal.vue";
import TPagination from "vue-tailwind/src/components/TPagination";

Vue.use(TModal, {
  overlayClass:
    "z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-gray-700 opacity-75"
});

Vue.use(TPagination);
