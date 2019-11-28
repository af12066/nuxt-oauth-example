<template>
  <div>
    <h1>Hello World</h1>
    <button @click="authenticate">Login</button>
    <button @click="authenticate_4sq">Login with Foursquare</button>
  </div>
</template>

<script>
export default {
  middleware: [
    'auth',
  ],
  methods: {
    authenticate() {
      this.$auth.loginWith('github');
    },
    authenticate_4sq() {
      this.$auth.loginWith('foursquare');
    },
  },
};
</script>
