<template>
  <v-app class="white">
    <Navbar />
    <Layout>
      <v-content>
        <SessionList :sessions="$page.session1" />
        <SessionList :sessions="$page.session2" />
        <SessionList :sessions="$page.session3" />
        <SessionList :sessions="$page.session4" />
        <SessionList :sessions="$page.session5" />
        <SessionList :sessions="$page.session6" />
        <SessionList :sessions="$page.session7" />
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import SessionList from "@/components/SessionList";
import Navbar from "@/components/IndexNavbar";
import favorites from "@/data/favorites.json";

export default {
  components: {
    SessionList,
    Navbar
  },
  data: function() {
    return {
      favorites
    };
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
