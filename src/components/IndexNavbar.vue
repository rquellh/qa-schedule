<template>
  <v-toolbar flat app dense dark color="primary">
    <v-img
      :src="require('@/assets/images/header.png')"
      :aspect-ratio="1"
      max-width="25px"
      contain
    ></v-img>
    <div class="pl-3" >
      QA or the Highway
    </div>
    <v-spacer></v-spacer>
    <v-btn flat @click="goBack()">
      <v-icon left small>far fa-star</v-icon>Filter
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

