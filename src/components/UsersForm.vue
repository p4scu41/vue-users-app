<template>
  <t-modal
    ref="modal"
    @closed="onProgress(false)"
    footerClass="px-6 py-3 border-t flex justify-center"
  >
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap">
        <div class="w-full px-3">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Name
          </label>
          <input
            class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            v-model="user.name"
          />
        </div>
        <div class="w-full px-3">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            E-mail
          </label>
          <input
            class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            v-model="user.email"
          />
        </div>
      </div>
    </form>

    <template v-slot:footer>
      <button title="Cancel" @click="$refs.modal.hide()" class="btn-option">
        Cancel
      </button>

      <button
        title="Save"
        @click="saved()"
        class="btn-option"
        :disabled="progressing"
      >
        <font-awesome-icon
          :icon="['far', 'save']"
          size="lg"
          v-show="!progressing"
        />
        <font-awesome-icon
          :icon="['fas', 'spinner']"
          size="lg"
          pulse
          v-show="progressing"
        />
        Save
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
    user: {
      type: Object
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
    saved() {
      this.onProgress(true);
      this.$emit("saved", this.user);
    }
  }
};
</script>
