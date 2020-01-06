<template>
  <v-app class="pre-formatted">
    <SessionNavbar :speaker="$page.session.speaker" />
    <Layout>
      <v-content class="my-1">
        <v-container ma-0 pa-0 fluid align-center>
          <v-layout ma-0 pa-0 row wrap justify-space-between fill-height>
            <v-flex xs12 md8 pa-3>
              <div class="headline font-weight-bold mb-2">{{$page.session.title}}</div>
              <div class="subheading pre-formatted">{{$page.session.abstract}}</div>
            </v-flex>
            <v-flex xs12 md4 pa-3>
              <div class="headline font-weight-bold">Session Information</div>
              <div class="subheading">Time: {{$page.session.time}}</div>
              <div class="subheading">Room: {{$page.session.room}}</div>
            </v-flex>
          </v-layout>
          <SpeakerBio
            :speaker="$page.session.speaker"
            :bio="$page.session.bio"
            :linkUrl="$page.session.linkedin"
            :twitUrl="$page.session.twitter"
            :webUrl="$page.session.website"
          />
          <SpeakerBio
            v-if="$page.session.speaker2"
            :speaker="$page.session.speaker2"
            :bio="$page.session.bio2"
            :linkUrl="$page.session.linkedin2"
            :twitUrl="$page.session.twitter2"
            :webUrl="$page.session.website2"
          />
        </v-container>
      </v-content>
    </Layout>
  </v-app>
</template>

<page-query>
query Session ($path: String!) {
  session (path: $path) {
    speaker
    speaker2
    bio
    bio2
    title
    abstract
    time
    room
    linkedin
    twitter
    website
    linkedin2
    twitter2
    website2
  }
}
</page-query>

<script>
import Layout from "@/layouts/Default";
import SessionNavbar from "@/components/SessionNavbar";
import SpeakerBio from "@/components/SpeakerBio";

export default {
  components: {
    Layout,
    SessionNavbar,
    SpeakerBio
  },
  metaInfo() {
    return {
      title: this.$page.session.speaker
    };
  }
};
</script>

<style scoped>
.pre-formatted {
  white-space: pre-wrap;
}
</style>

