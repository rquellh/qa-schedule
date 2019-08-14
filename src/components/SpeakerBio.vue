<template>
  <v-layout ma-0 pa-0 row wrap>
    <v-flex xs12 sm4 pa-3 justify-center align-center layout>
      <v-avatar size="300">
        <img :src="require('@/assets/images/generic-profile.png')" />
      </v-avatar>
    </v-flex>
    <v-flex xs12 sm8 pa-3>
      <v-layout align-center>
        <div class="headline font-weight-bold">{{ speaker }}</div>
        <v-spacer />
        <v-btn flat icon color="primary" :href="linkUrl">
          <v-icon>fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn flat icon color="primary" :href="twitUrl">
          <v-icon>fab fa-twitter</v-icon>
        </v-btn>
        <v-btn flat icon color="primary" :href="webUrl">
          <v-icon>fas fa-laptop</v-icon>
        </v-btn>
      </v-layout>

      <div class="subheading">{{ bio }}</div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["img", "speaker", "bio", "linkUrl", "twitUrl", "webUrl"]
};
</script>