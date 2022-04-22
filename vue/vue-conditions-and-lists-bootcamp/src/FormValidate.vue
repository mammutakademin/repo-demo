<template>
  <div>
    <form @submit.prevent="validate">
      <input v-model="username" type="text" placeholder="Name" />
      <input v-model="password" type="password" placeholder="Password" />
      <button>Submit</button>
    </form>
    <img
      v-if="img"
      src="./assets/gronsaker.jpg"
      alt="Grönsaker är också godis"
      width="400"
    />
    <p v-if="error">FEEEEEEEEL</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      correctUsername: "David",
      correctPassword: "grillkorv",
      img: false,
      error: false,
    };
  },
  methods: {
    validate() {
      if (
        this.username == this.correctUsername &&
        this.password == this.correctPassword
      ) {
        this.img = true;
        localStorage.setItem("login", "true");
      } else {
        this.error = true;
      }
    },
  },
  created() {
    let login = localStorage.login;
    if (login) {
      this.img = true;
    }
  },
};
</script>

<style></style>