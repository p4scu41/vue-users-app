import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function catchError(error) {
  if (error.response) {
    console.warn("Response error");
    console.log(error.response.status + " " + error.response.statusText);
  } else if (error.request) {
    console.warn("Request error");
  }

  console.error(error.name + ": " + error.message);

  return Promise.reject(error); // throw error;
}

export default {
  getUsers(page, filter) {
    return apiClient
      .get("users", {
        params: { page: page, filter: filter }
      })
      .catch(catchError);
  },
  deleteUser(userId) {
    return apiClient.delete("users/" + userId).catch(catchError);
  },
  createUser(user) {
    return apiClient.post("users", user).catch(catchError);
  },
  updateUser(user) {
    return apiClient.put("users/" + user.id, user).catch(catchError);
  }
};
