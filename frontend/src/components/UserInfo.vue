<template>
  <v-card
    elevation="9"
    outlined
  >
    <v-card-title>userinfo</v-card-title>
    <v-card-text><pre>{{ userInfo }}</pre></v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'UserInfo',

    data: () => ({
      userInfo: null,
    }),

    created() {
      fetch('/api/userinfo')
        .then(response => response.json())
        .then(data => (this.userInfo = JSON.stringify(data, null, 2)));
    },
  }
</script>
