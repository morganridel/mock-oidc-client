<template>
  <v-app>
    <v-main>
      <OpenId/>
    </v-main>
  </v-app>
</template>

<script>
import OpenId from './components/OpenId';

export default {
  name: 'App',

  components: {
    OpenId,
  },

  data: () => ({
    //
  }),
};
</script>
