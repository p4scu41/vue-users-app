<template>
  <t-modal
    ref="modal"
    @closed="onClosed"
    footerClass="px-6 py-3 border-t flex justify-center"
  >
    <form class="form-full" @submit.prevent="saved">
      <div class="form-full-container">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            v-model="user.name"
            :class="{
              valid: !hasError('name'),
              invalid: hasError('name')
            }"
          />
          <div v-if="hasError('name')" class="invalid-feedback">
            {{ getError("name") }}
          </div>
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            id="email"
            type="email"
            v-model="user.email"
            :class="{
              valid: !hasError('email'),
              invalid: hasError('email')
            }"
          />
          <div v-if="hasError('email')" class="invalid-feedback">
            {{ getError("email") }}
          </div>
        </div>
        <div class="form-group" v-if="createMode">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            v-model="user.password"
            :class="{
              valid: !hasError('password'),
              invalid: hasError('password')
            }"
          />
          <div v-if="hasError('password')" class="invalid-feedback">
            {{ getError("password") }}
          </div>
        </div>
        <div class="form-group" v-if="createMode">
          <label for="password_confirmation">Password Confirmation</label>
          <input
            id="password_confirmation"
            type="password"
            v-model="user.password_confirmation"
            :class="{
              valid: !hasError('password_confirmation'),
              invalid: hasError('password_confirmation')
            }"
          />
          <div
            v-if="hasError('password_confirmation')"
            class="invalid-feedback"
          >
            {{ getError("password_confirmation") }}
          </div>
        </div>
        <div v-if="feedback.message" class="alert-danger">
          {{ feedback.message }}
        </div>
      </div>
    </form>

    <template v-slot:footer>
      <button title="Cancel" @click="$refs.modal.hide()" class="btn-option">
        Cancel
      </button>

      <button
        type="submit"
        title="Save"
        @click="saved"
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
    },
    feedback: null
  },
  computed: {
    createMode() {
      return typeof this.user.id == "undefined";
    }
  },
  methods: {
    hasError(field) {
      if (typeof this.feedback.errors == "undefined") {
        return false;
      }

      if (typeof this.feedback.errors[field] == "undefined") {
        return false;
      }

      return this.feedback.errors[field].length > 0;
    },
    getError(field) {
      return this.feedback.errors[field][0];
    },
    onClosed() {
      this.onProgress(false);
      this.$emit("closed");
    },
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
