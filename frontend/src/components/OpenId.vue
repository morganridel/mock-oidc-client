<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn v-if="loggedIn == false"
          href="/api/login"
          elevation="7"
          x-large
        >Login</v-btn>
        <v-btn v-if="loggedIn == true"
          href="/api/logout"
          elevation="7"
          x-large
        >Logout</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
     <v-col  cols="10">
        <UserInfo v-if="loggedIn == true"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import UserInfo from './UserInfo';

  export default {
    name: 'OpenId',

    components: {
      UserInfo,
    },

    data: () => ({
      test: "test",
      userInfo: null,
      loggedIn: false,
    }),

    created() {
    // Simple GET request using fetch
    fetch('/api/isauth')
      .then(response => response.json())
      .then(data => (this.loggedIn = data.isAuthenticated));
    },
  }
</script>
