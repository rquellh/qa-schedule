<template>
  <v-toolbar flat app dense>
    <v-btn flat @click="goBack()">
      <v-icon>arrow_back_ios</v-icon>Back
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn flat @click="goBack()">
      <v-icon left>star_border</v-icon>Favorite
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

