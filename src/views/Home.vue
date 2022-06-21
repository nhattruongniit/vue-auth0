<template>
  <div>
    <h1>Home</h1>
    <br />
    ClientID: {{ auth0CliendId }}

    <div v-if="!isLogged">
      <button type="button" @click="handleLogin()">Login</button>
    </div>

    <div v-else>
      <button type="button" @click="handleLogout()">Logout</button>
    </div>
  </div>
</template>

<script>
import { login, logOut, isLogged } from "../utils/auth";

export default {
  name: "Home",
  methods: {
    handleLogin() {
      login();
    },
    handleLogout() {
      this.isLogged = false;
      logOut();
    },
  },
  data() {
    return {
      isLogged: isLogged(),
      auth0CliendId: process.env.VUE_APP_AUTHO_CLIENTID,
    };
  },
};
</script>
