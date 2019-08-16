<template>
  <v-toolbar flat app dense dark color="primary">
    <v-avatar size="25">
      <img :src="require('@/assets/images/header.png')" />
    </v-avatar>
    <div class="pl-3">QA or the Highway</div>
    <v-spacer></v-spacer>
    <v-btn flat @click="favorites.filterall = !favorites.filterall">
      <div v-if="favorites.filterall" class="text-capitalize">
        Filtered
        <v-icon right small color="amber">fas fa-star</v-icon>
      </div>
      <div v-else class="text-capitalize">
        Filter
        <v-icon right small>far fa-star</v-icon>
      </div>
    </v-btn>
  </v-toolbar>
</template>


<script>;

export default {
  props: ["favorites"]
};
</script>

