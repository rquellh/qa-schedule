<template>
  <v-app class="white">
    <IndexNavbar :favorites="favorites" />
    <Layout>
      <v-content>
        <SessionList :sessions="$page.session1" :favorites="favorites" />
        <SessionList :sessions="$page.session2" :favorites="favorites" />
        <SessionList :sessions="$page.session3" :favorites="favorites" />
        <SessionList :sessions="$page.session4" :favorites="favorites" />
        <SessionList :sessions="$page.session5" :favorites="favorites" />
        <SessionList :sessions="$page.session6" :favorites="favorites" />
        <SessionList :sessions="$page.session7" :favorites="favorites" />
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import SessionList from "@/components/SessionList";
import IndexNavbar from "@/components/IndexNavbar";
import favorites from "@/data/favorites.json";

export default {
  components: {
    SessionList,
    IndexNavbar
  },
  data: function() {
    return {
      favorites
    };
  },

  created() {
    //This is to install the service worker. Change the directory if the website changes
    if (process.isClient) {
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
          navigator.serviceWorker.register("/qa-schedule/sw.js");
        });
      }
    }
  },
  //This is checking if there is any information in local storage and saving to favorites
  mounted() {
    if (localStorage.favorites) {
      console.log("mounted");
      this.favorites = JSON.parse(localStorage.favorites);
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
  },
  metaInfo() {
    return {
      title: "Schedule"
    };
  }
};
</script>

<page-query>
query currentSessions {
  session1: allSession(
    filter: { time: { eq: "8:00 - 9:00" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        speaker2
        title
        abstract
        time
        room
      }
    }
  },
  session2: allSession(
    filter: { time: { eq: "9:15 - 10:15" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        speaker2
        title
        abstract
        time
        room
      }
    }
  },
  session3: allSession(
    filter: { time: { eq: "10:30 - 11:30" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        speaker2
        title
        abstract
        time
        room
      }
    }
  },
  session4: allSession(
    filter: { time: { eq: "12:45 - 1:45" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        speaker2
        title
        abstract
        time
        room
      }
    }
  },
  session5: allSession(
    filter: { time: { eq: "1:55 - 2:55" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        speaker2
        title
        abstract
        time
        room
      }
    }
  },
  session6: allSession(
    filter: { time: { eq: "3:05 - 4:05" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        speaker2
        title
        abstract
        time
        room
      }
    }
  }
  session7: allSession(
    filter: { time: { eq: "4:15 - 5:15" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        speaker2
        title
        abstract
        time
        room
      }
    }
  }
}
</page-query>

<style scoped>
</style>
