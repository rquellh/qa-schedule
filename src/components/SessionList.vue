<template>
  <div class="pb-3">
    <div class="pl-4 time-font font-weight-bold">{{sessions.edges[0].node.time}}</div>
    <v-expansion-panel popout>
      <v-expansion-panel-content
        v-for="(session, index) in sessions.edges"
        :key="index"
        :class="timeFiltered"
      >
        <div slot="header">
          <v-container ma-0 pa-1 fluid>
            <v-layout row ma-0 align-center wrap>
              <v-flex xs12 md8>{{session.node.title}}</v-flex>
              <v-flex xs12 md2 :class="['grey--text text--darken-1', {'pt-2' : $vuetify.breakpoint.smAndDown}]">{{session.node.speaker}}</v-flex>
              <v-flex xs12 md2 :class="['text-md-right', {'pt-2' : $vuetify.breakpoint.smAndDown}]"  pr-3 >
                <v-chip :class="roomFiltered([index])">{{session.node.room}}</v-chip>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
        <v-card>
          <v-card-text class="grey lighten-4">
            <p>{{session.node.abstract}}</p>
            <v-spacer />
            <div class="ma-5">
              <v-btn class="right" :href="`./${session.node.year}/${removeSpaces(session.node.speaker)}`" outline small color="primary">More Information</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  props: ["sessions"],
  data: function() {
    return {
      timeFiltered: `t${this.sessions.edges[0].node.time.replace(/:|-| /g, "")}`
    };
  },
  methods: {
    roomFiltered: function(index) {
      return this.sessions.edges[index].node.room
        .replace(/:|-| |&/g, "")
        .toLowerCase();
    },
    removeSpaces: function(text) {
      return text.replace(/\s/g, "")
    }
  }
};
</script>

<style scoped>
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
  background: #90caf9;
}
.greathall12 {
  background: #b39ddb;
}
.greathall3 {
  background: #a5d6a7;
}
.interfaithroom {
  background: #fff59d;
}
.studentalumniroom {
  background: #ef9a9a;
}
.westballroom {
  background: #ffcc80;
}
.eastballroom {
  background: #80cbc4;
}
.right {
  right: 5%;
  bottom: 1rem;
  position: absolute;
}
.time-font {
  font-size: 2rem
}
</style>


