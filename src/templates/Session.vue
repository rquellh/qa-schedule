<template>
  <v-app>
    <SessionNavbar />
    <Layout>
      <v-content class="my-1">
        <v-container ma-0 pa-0 fluid align-center>
          <v-layout ma-0 pa-0 row wrap justify-space-between fill-height>
            <v-flex xs12 md8 pa-3>
              <div class="headline font-weight-bold">{{$page.session.title}}</div>
              <div class="subheading">{{$page.session.abstract}}</div>
            </v-flex>
            <v-flex xs12 md4 pa-3>
              <div class="headline font-weight-bold">Session Information</div>
              <div class="subheading">Time: {{$page.session.time}}</div>
              <div class="subheading">Room: {{$page.session.room}}</div>
            </v-flex>
          </v-layout>
          <v-layout ma-0 pa-0 row wrap>
            <v-flex xs12 sm4 pa-3 align-self-center>
              <v-img
                :src="require('@/assets/images/generic-profile.png')"
                :aspect-ratio="1"
                max-height="300px"
                contain
              ></v-img>
            </v-flex>
            <v-flex xs12 sm8 pa-3>
              <div>
                <div class="headline font-weight-bold">
                  {{ $page.session.speaker }}
                  <span class="pl-5">
                    <v-btn flat icon color="primary" class="px-3">
                      <v-icon class="px-3">fab fa-linkedin</v-icon>
                    </v-btn>
                    <v-btn flat icon color="primary" class="px-3">
                      <v-icon class="px-3">fab fa-twitter</v-icon>
                    </v-btn>
                    <v-btn flat icon color="primary" class="px-3">
                      <v-icon class="px-3">fas fa-globe</v-icon>
                    </v-btn>
                  </span>
                </div>
              </div>
              <div class="subheading">{{ $page.session.bio }}</div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </Layout>
  </v-app>
</template>

<page-query>
query Session ($path: String!) {
  session (path: $path) {
    speaker
    bio
    title
    abstract
    time
    room
  }
}
</page-query>

<script>
import Layout from "@/layouts/Default";
import SessionNavbar from "@/components/SessionNavbar";

export default {
  components: {
    Layout,
    SessionNavbar
  },
  metaInfo() {
    return {
      title: this.$page.session.speaker
    };
  }
};
</script>

