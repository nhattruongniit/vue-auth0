<template>
  <div>
    <h1>Loading...</h1>
  </div>
</template>

<script>
import { handleAuth } from '../utils/auth';

export default {
  name: "Callback",
  beforeMount() {
    handleAuth(error => {
      if(error) {
        console.log("error: ", error);
        return;
      }
      console.log("loged in");
      this.$router.push("/private")
    })
  }
}
</script>