<template>
  <t-modal
    ref="modal"
    overlayClass="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-red-700 opacity-50"
    wrapperClass="bg-red-100 border-red-400 rounded shadow-lg border flex flex-col overflow-hidden"
    bodyClass="p-6 flex-grow text-red-700"
    footerClass="px-6 py-3 border-t flex justify-between"
    width="400"
    height="150"
    @closed="onProgress(false)"
  >
    <font-awesome-icon :icon="['fas', 'exclamation-triangle']" size="lg" />
    Are you sure you want to delete?

    <template v-slot:footer>
      <button title="Cancel" @click="$refs.modal.hide()" class="btn-option">
        Cancel
      </button>

      <button
        title="Confirm"
        @click="confirmed()"
        class="btn-option"
        :disabled="progressing"
      >
        <font-awesome-icon
          :icon="['far', 'trash-alt']"
          size="lg"
          v-show="!progressing"
        />
        <font-awesome-icon
          :icon="['fas', 'spinner']"
          size="lg"
          pulse
          v-show="progressing"
        />
        Confirm
      </button>
    </template>
  </t-modal>
</template>

<script>
export default {
  data() {
    return {
      progressing: false
    };
  },
  props: {
    userId: {
      type: Number
    }
  },
  methods: {
    onProgress(value) {
      this.progressing = value;
    },
    show() {
      this.$refs.modal.show();
    },
    hide() {
      this.onProgress(false);
      this.$refs.modal.hide();
    },
    confirmed() {
      this.onProgress(true);
      this.$emit("confirmed", this.userId);
    }
  }
};
</script>
