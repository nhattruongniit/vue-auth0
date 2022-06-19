<template>
  <div>
    <h1>Home</h1>

    <div v-if="!isLogged" >
      <button type="button" @click="handleLogin()">Login</button>
    </div>
    <div v-else>
       <button type="button" @click="handleLogout()">Logout</button>
    </div>

  </div>
</template>

<script>
import { login, logout, isLogged } from '../utils/auth';

export default {
  name: "Home",
  methods: {
    handleLogin() {
      login();
    },
    handleLogout() {
      this.isLogged = false;
      logout();
    }
  },
  data() {
    return {
      isLogged: isLogged()
    }
  },
}
</script>