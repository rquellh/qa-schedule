<template>
  <v-toolbar flat app dense dark color="primary">
    <v-btn flat href="/">
      <v-icon left small>fas fa-chevron-left</v-icon>Back
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      flat
      @click="favorites.sessions[indexOf(speaker)].saved = !favorites.sessions[indexOf(speaker)].saved"
    >
      <div v-if="favorites.sessions[indexOf(speaker)].saved" class="text-capitalize">
        <v-icon left small color="amber">fas fa-star</v-icon>Saved
      </div>
      <div v-else class="text-capitalize">
        <v-icon left small>far fa-star</v-icon>Save
      </div>
    </v-btn>
  </v-toolbar>
</template>

<script>
import favorites from "@/data/favorites.json";

export default {
  props: ["speaker"],
  data() {
    return {
      favorites
    };
  },
  methods: {
    indexOf: function(speakerName) {
      var indexPos = this.favorites.sessions
        .map(function(instance) {
          return instance.speaker;
        })
        .indexOf(speakerName);
      return indexPos;
    }
  }
};
</script>

