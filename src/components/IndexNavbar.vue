<template>
  <v-toolbar flat app dense dark color="#1b51aa">
    <v-avatar size="25">
      <img :src="require('@/assets/images/header.png')" alt="QA or the Highway logo"/>
    </v-avatar>
    <div class="pl-3 branded_font">QA or the Highway</div>
    <v-spacer></v-spacer>
    <v-btn flat @click="favorites.filterall = !favorites.filterall">
      <div v-if="favorites.filterall" class="text-capitalize">
        Filtered
        <v-icon right small color="amber">$vuetify.icons.star-solid</v-icon>
      </div>
      <div v-else class="text-capitalize">
        Filter
        <v-icon right small>$vuetify.icons.star-outline</v-icon>
      </div>
    </v-btn>
  </v-toolbar>
</template>


<script>;

export default {
  props: ["favorites"]
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
.branded_font {
  font-family: 'Montserrat', 'Roboto', sans-serif; 
}
</style>

