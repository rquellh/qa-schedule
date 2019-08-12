<template>
  <v-toolbar flat app dense>
    <v-btn flat href="/">
      <v-icon left>fas fa-chevron-left</v-icon>Back
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn flat @click="goBack()">
      <v-icon left>far fa-star</v-icon>Save
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

<style scoped>
.navigation a {
  margin-right: 1rem;
  text-decoration: none;
  color: black;
  background: transparent;
}
</style>

