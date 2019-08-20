<template>
  <v-layout ma-0 pa-0 row wrap>
    <v-flex xs12 sm4 pa-3 justify-center align-center layout>
      <v-avatar size="300">
        <img :src="require('@/assets/images/generic-profile.png')" :alt="speaker"/>
      </v-avatar>
    </v-flex>
    <v-flex xs12 sm8 pa-3>
      <v-layout align-center>
        <div class="headline font-weight-bold">{{ speaker }}</div>
        <v-spacer />
        <v-btn flat icon color="#1b51aa" :href="linkUrl" :title="`${speaker} LinkedIn`">
          <v-icon>
            $vuetify.icons.linkedin
          </v-icon>
        </v-btn>
        <v-btn flat icon color="#1b51aa" :href="twitUrl" :title="`${speaker} Twitter`">
          <v-icon class="custom-icon">$vuetify.icons.twitter</v-icon>
        </v-btn>
        <v-btn flat icon color="#1b51aa" :href="webUrl" :title="`${speaker} Website`">
          <v-icon>$vuetify.icons.laptop</v-icon>
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