<template>
  <div>
    <h1 class="font-sans break-normal text-gray-900 pb-2 text-xl">
      Users
    </h1>
    <hr class="border-b border-gray-400" />

    <div class="flex items-center pt-5">
      <div class="flex-1 w-full mx-auto content-center py-2">
        <div class="relative pr-10">
          <input
            type="search"
            placeholder="Search"
            class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded pl-10  py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
            v-model="filter"
          />
          <font-awesome-icon
            :icon="['fas', 'search']"
            size="lg"
            class="absolute"
            style="top: 0.75rem; left: 0.75rem; font-size: medium"
          />
        </div>
      </div>

      <button title="Add" class="btn-option" @click="showForm({})">
        <font-awesome-icon :icon="['fas', 'user-plus']" size="lg" />
      </button>
    </div>

    <table class="simple-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>E-mail</th>
          <th>Registered</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.created_at }}</td>
          <td class="text-center">
            <button
              title="Delete"
              @click="confirmRemove(user.id)"
              class="btn-option"
            >
              <font-awesome-icon :icon="['far', 'trash-alt']" size="lg" />
            </button>
            <button title="Edit" @click="showForm(user)" class="btn-option">
              <font-awesome-icon :icon="['far', 'edit']" size="lg" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="text-center py-3" v-if="loadingUsers">
      <font-awesome-icon :icon="['fas', 'spinner']" size="2x" pulse />
    </div>

    <t-pagination
      wrapperClass="t-pagination table border-collapse mx-auto m-5"
      controlButtonClass="text-gray-600 hover:text-gray-800 hover:bg-gray-200"
      activeButtonClass="bg-gray-500 text-white"
      inactiveButtonClass="text-gray-600 hover:text-gray-800 hover:bg-gray-200"
      :total-items="pagination.totalItems"
      :per-page="pagination.perPage"
      :limit="pagination.limit"
      v-model="pagination.currentPage"
    />

    <users-confirm-delete
      ref="modalConfirmDelete"
      :userId="deleteId"
      @confirmed="remove"
    />

    <users-form
      ref="modalForm"
      @saved="save"
      @closed="resetFeedback"
      :user="userEdit"
      :feedback="feedback"
    />
  </div>
</template>

<script>
import UsersConfirmDelete from "@/components/UsersConfirmDelete.vue";
import UsersForm from "@/components/UsersForm.vue";
import UsersService from "@/services/UsersService.js";

export default {
  components: {
    UsersConfirmDelete,
    UsersForm
  },
  data() {
    return {
      deleteId: 0,
      userEdit: {},
      filter: "",
      pagination: {
        totalItems: 100,
        perPage: 10,
        limit: 5,
        currentPage: 1
      },
      users: [],
      loadingUsers: false,
      feedback: {
        message: false,
        errors: []
      }
    };
  },
  methods: {
    confirmRemove(userId) {
      this.deleteId = userId;
      this.$refs.modalConfirmDelete.show();
    },
    remove(userId) {
      UsersService.deleteUser(userId).then(() => {
        this.$refs.modalConfirmDelete.hide();
        this.getUsers();
      });
    },
    showForm(user) {
      // Clone original object
      // to avoid modify original
      this.userEdit = { ...user };
      this.$refs.modalForm.show();
    },
    resetFeedback() {
      this.feedback = {
        message: false,
        errors: []
      };
    },
    save(user) {
      let request = null;
      this.resetFeedback();

      if (typeof user.id != "undefined") {
        request = UsersService.updateUser(user);
      } else {
        request = UsersService.createUser(user);
      }

      request
        .then(() => {
          this.$refs.modalForm.hide();
          this.getUsers();
        })
        .catch(error => {
          if (error.response) {
            this.feedback.message = error.response.data.message;

            if (typeof error.response.data.errors != undefined) {
              this.feedback.errors = error.response.data.errors;
            }
          }
        })
        .finally(() => {
          this.$refs.modalForm.onProgress(false);
        });
    },
    getUsers() {
      this.loadingUsers = true;

      UsersService.getUsers(this.pagination.currentPage, this.filter).then(
        response => {
          this.users = response.data.data;

          this.pagination.totalItems = response.data.meta.total;
          this.pagination.perPage = response.data.meta.per_page;
          this.pagination.currentPage = response.data.meta.current_page;

          this.loadingUsers = false;
        }
      );
    }
  },
  watch: {
    "pagination.currentPage": function() {
      this.getUsers();
    }
  },
  created() {
    this.getUsers();
  }
};
</script>
