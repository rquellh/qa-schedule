<template>
  <v-toolbar flat app dense dark color="primary">
    <v-btn flat href="/">
      <v-icon left small>fas fa-chevron-left</v-icon>Back
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn flat @click="goBack()">
      <v-icon left small>far fa-star</v-icon>Save
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

