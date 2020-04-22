<template>
  <div>
    <h1 class="font-sans break-normal text-gray-900 pb-2 text-xl">
      Users
    </h1>
    <hr class="border-b border-gray-400" />

    <div
      class="w-full flex-grow lg:flex lg:justify-end lg:items-center lg:w-auto lg:block pt-5"
    >
      <div class="flex-1 w-full mx-auto content-center py-2">
        <div class="relative pr-10">
          <input
            type="search"
            placeholder="Search"
            class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded pl-10  py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
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
          <td>{{ user.registered }}</td>
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

    <users-form ref="modalForm" @saved="save" :user="userEdit" />
  </div>
</template>

<script>
import UsersConfirmDelete from "@/components/UsersConfirmDelete.vue";
import UsersForm from "@/components/UsersForm.vue";

export default {
  components: {
    UsersConfirmDelete,
    UsersForm
  },
  data() {
    return {
      deleteId: 0,
      userEdit: {},
      pagination: {
        totalItems: 100,
        perPage: 10,
        limit: 5,
        currentPage: 1
      },
      users: [
        {
          id: 1,
          name: "User",
          email: "user@email.com",
          registered: "today"
        },
        {
          id: 2,
          name: "User",
          email: "user@email.com",
          registered: "today"
        },
        {
          id: 3,
          name: "User",
          email: "user@email.com",
          registered: "today"
        },
        {
          id: 4,
          name: "User",
          email: "user@email.com",
          registered: "today"
        },
        {
          id: 5,
          name: "User",
          email: "user@email.com",
          registered: "today"
        },
        {
          id: 6,
          name: "User",
          email: "user@email.com",
          registered: "today"
        },
        {
          id: 7,
          name: "User",
          email: "user@email.com",
          registered: "today"
        },
        {
          id: 8,
          name: "User",
          email: "user@email.com",
          registered: "today"
        },
        {
          id: 9,
          name: "User",
          email: "user@email.com",
          registered: "today"
        },
        {
          id: 10,
          name: "User",
          email: "user@email.com",
          registered: "today"
        }
      ]
    };
  },
  methods: {
    confirmRemove(userId) {
      this.deleteId = userId;
      this.$refs.modalConfirmDelete.show();
    },
    remove(userId) {
      // TODO: axios.delete
      console.log("remove " + userId);

      this.$refs.modalConfirmDelete.hide();
    },
    showForm(user) {
      // Clone original object
      // to avoid modify original
      this.userEdit = { ...user };
      this.$refs.modalForm.show();
    },
    save(user) {
      console.log("save", user);

      // TODO: axios.put
      this.$refs.modalForm.hide();
    }
  }
};
</script>
