<template>
  <div>
    <h1>Login Succeeded!</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  middleware: [
    'auth',
  ],
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};
</script>
