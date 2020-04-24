import UsersService from "@/services/UsersService.js";

export const namespaced = true;

export const state = {
  users: [],
  pagination: {
    totalItems: null,
    perPage: null,
    limit: 5,
    currentPage: 1
  },
  loading: false
};

export const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_PAGINATION(state, pagination) {
    state.pagination = { ...state.pagination, ...pagination };
  }
};

export const actions = {
  getUsers({ commit }, page, filter) {
    commit("SET_LOADING", true);

    return UsersService.getUsers(page, filter)
      .then(response => {
        commit("SET_USERS", response.data.data);
        commit("SET_PAGINATION", {
          totalItems: response.data.meta.total,
          perPage: response.data.meta.per_page,
          currentPage: response.data.meta.current_page
        });
      })
      .finally(() => {
        commit("SET_LOADING", false);
      });
  },
  deleteUser(state, userId) {
    return UsersService.deleteUser(userId);
  },
  createUser(state, user) {
    return UsersService.createUser(user);
  },
  updateUser(state, user) {
    return UsersService.updateUser(user);
  }
};
