<template>
  <v-container py-0 fluid>
    <v-layout row wrap fluid>
      <v-flex>
        <v-list two-line>
          <v-subheader class="title font-weight-bold pa-0">{{sessions.edges[0].node.time}}</v-subheader>
          <div
            v-show="favorites.sessions[indexOf(session.node.speaker)].saved || !favorites.filterall"
            v-for="(session, index) in sessions.edges"
            :key="index"
          >
            <v-list-tile :class="timeFiltered" :href="`./${removeSpaces(session.node.speaker)}`">
              <v-list-tile-content>
                <v-list-tile-title>{{session.node.title}}</v-list-tile-title>
                <v-list-tile-sub-title>
                  <v-layout ma-0 pa-0 wrap>
                    <v-flex xs12 sm6>
                      {{session.node.speaker}}
                      <span
                        v-if="session.node.speaker2"
                      >& {{session.node.speaker2}}</span>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-icon small :class="roomFiltered([index])">$vuetify.icons.circle-solid</v-icon>
                      {{session.node.room}}
                    </v-flex>
                  </v-layout>
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn
                  icon
                  ripple
                  @click.prevent.stop="favorites.sessions[indexOf(session.node.speaker)].saved = !favorites.sessions[indexOf(session.node.speaker)].saved"
                >
                  <v-icon
                    v-if="favorites.sessions[indexOf(session.node.speaker)].saved"
                    small
                    color="amber"
                  >$vuetify.icons.star-solid</v-icon>
                  <v-icon v-else small color="grey">$vuetify.icons.star-outline</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </div>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
export default {
  props: ["sessions", "favorites"],
  data: function() {
    return {
      timeFiltered: `t${this.sessions.edges[0].node.time.replace(
        /:|-| /g,
        ""
      )}`,
      filter: false
    };
  },
  methods: {
    indexOf: function(speakerName) {
      var indexPos = this.$props.favorites.sessions
        .map(function(instance) {
          return instance.speaker;
        })
        .indexOf(speakerName);
      return indexPos;
    },
    roomFiltered: function(index) {
      return this.sessions.edges[index].node.room
        .replace(/:|-| |&/g, "")
        .toLowerCase();
    },
    removeSpaces: function(text) {
      return text.replace(/\s/g, "");
    }
  }
};
</script>

<style scoped>
.small-icon {
  font-size: 0.75rem;
  vertical-align: middle;
}

.t800900 {
  position: relative;
}
.t800900::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #9c27b0;
}
.t9151015 {
  position: relative;
}

.t9151015::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #4caf50;
}
.t10301130 {
  position: relative;
}
.t10301130::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #03a9f4;
}
.t1245145 {
  position: relative;
}
.t1245145::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #3f51b5;
}
.t155255 {
  position: relative;
}
.t155255::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #f44336;
}
.t305405 {
  position: relative;
}
.t305405::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #ffc107;
}
.t415515 {
  position: relative;
}
.t415515::after {
  content: "";
  height: 90%;
  width: 0.25rem;
  position: absolute;
  left: 0;
  top: 5%;
  background-color: #e91e63;
}
.cartoonroom {
  color: #90caf9;
}
.greathall12 {
  color: #b39ddb;
}
.greathall3 {
  color: #a5d6a7;
}
.interfaithroom {
  color: #fff59d;
}
.studentalumniroom {
  color: #ef9a9a;
}
.westballroom {
  color: #ffcc80;
}
.eastballroom {
  color: #80cbc4;
}
.right {
  right: 5%;
  bottom: 1rem;
  position: absolute;
}
.time-font {
  font-size: 2rem;
}
</style>


