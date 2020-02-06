<template>
  <v-toolbar flat app dense dark color="#1b51aa">
    <v-btn flat @click="goback()" class="text-capitalize">
      <v-icon left small>$vuetify.icons.chevron-left</v-icon>Back
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      flat
      @click="favorites.sessions[indexOf(speaker)].saved = !favorites.sessions[indexOf(speaker)].saved"
    >
      <div v-if="favorites.sessions[indexOf(speaker)].saved" class="text-capitalize">
        <v-icon left small color="amber">$vuetify.icons.star-solid</v-icon>Saved
      </div>
      <div v-else class="text-capitalize">
        <v-icon left small>$vuetify.icons.star-outline</v-icon>Save
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
    },
    goback: function() {
      window.history.go(-1);
    }
  },
  //This is checking if there is any information in local storage and saving to favorites
  mounted() {
    if (localStorage.favorites) {
      console.log("mounted");
      this.favorites = { ...this.favorites, ...JSON.parse(localStorage.favorites) };;
    }
  },
  //This is watching for changes in favorites and saving them to local storage
  watch: {
    favorites: {
      handler() {
        console.log("favorites changed");
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
      },
      deep: true
    }
  }
};
</script>

