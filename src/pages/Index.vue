<template>
  <v-app>
    <Navbar />
    <Layout>
      <v-content>
          <SessionList :sessions="$page.session1"/>
          <SessionList :sessions="$page.session2"/>
          <SessionList :sessions="$page.session3"/>
          <SessionList :sessions="$page.session4"/>
          <SessionList :sessions="$page.session5"/>
          <SessionList :sessions="$page.session6"/>
          <SessionList :sessions="$page.session7"/>
          <div>{{favorites}}</div>
      </v-content>
    </Layout>
  </v-app>
</template>

<script>
import SessionList from "@/components/SessionList";
import Navbar from "@/components/IndexNavbar";
import favorites from '@/data/favorites.json';

export default {
  components: {
    SessionList,
    Navbar
  },
  data: function(){
    return {
      favorites
    }
  }
};
</script>

<page-query>
query currentSessions {
  session1: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "8:00 - 9:00" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  },
  session2: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "9:15 - 10:15" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  },
  session3: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "10:30 - 11:30" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  },
  session4: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "12:45 - 1:45" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  },
  session5: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "1:55 - 2:55" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  },
  session6: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "3:05 - 4:05" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  }
  session7: allSession(
    filter: { year: { dteq: "2019" }, time: { eq: "4:15 - 5:15" } }
    sortBy: "room"
    order: ASC
  ) {
    edges {
      node {
        speaker
        title
        abstract
        time
        room
        year
      }
    }
  }
}
</page-query>

<style scoped>

</style>
