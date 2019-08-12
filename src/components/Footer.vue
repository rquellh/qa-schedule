<template>
  <v-footer app absolute dark height="auto">
    <v-card class="flex" flat tile color="primary">
      <v-card-title pa-0>
        <v-container ma-0 pa-0 fluid>
          <v-layout row align-center fill-height class="text-xs-center" ma-0 pa-0>
            <v-flex xs4 md4 :class="[{'caption' : $vuetify.breakpoint.smAndDown}]">
              <div>
                Website by 
                <a href="https://www.ineffable-solutions.com/" target="_blank" class="white--text">Ineffable Solutions</a> & 
                <a href="https://www.linkedin.com/in/ryanquellhorst/" target="_blank" class="white--text">Ryan Quellhorst</a>
              </div>
            </v-flex>
            <v-flex md4 class="hidden-sm-and-down">
              <div>&copy; {{ new Date().getFullYear() }} QA or the Highway</div>
            </v-flex>
            <v-flex xs8 md4>
              <v-btn
                v-for="(site, index) in social"
                :key="index"
                class="mx-3"
                :href="site.url"
                dark
                icon
                target="_blank"
              >
                <v-icon>{{ site.icon }}</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      social: [
        { icon: "fab fa-twitter", url: "https://twitter.com/QAortheHighway" },
        { icon: "fab fa-slideshare", url: "https://www.slideshare.net/qaoth" },
        {
          icon: "fab fa-linkedin",
          url:
            "https://www.linkedin.com/company/central-ohio-software-quality-assurance-and-management/"
        },
        { icon: "fas fa-envelope", url: "mailto:qaorthehighway@gmail.com" }
      ]
    };
  }
};
</script>


