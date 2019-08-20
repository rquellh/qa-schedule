<template>
  <v-footer absolute app height="auto" dark color="#1b51aa">
    <div class="ml-3 caption">Created by Ryan Quellhorst</div>
    <v-spacer />
    <v-btn
      v-for="(site, index) in social"
      :key="index"
      class="mx-3"
      :href="site.url"
      :title="site.title"
      rel="noreferrer"
      dark
      icon
      target="_blank"
    >
      <v-icon>{{ site.icon }}</v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          icon: "$vuetify.icons.linkedin",
          url: "https://www.linkedin.com/in/ryanquellhorst/",
          title: "Ryan Quellhorst LinkedIn"
        },
        {
          icon: "$vuetify.icons.github",
          url: "https://github.com/rquellh",
          title: "Ryan Quellhorst Github"
        },
        {
          icon: "$vuetify.icons.bug",
          url:
            "https://github.com/rquellh/qa-schedule/issues/new?assignees=&labels=&template=bug_report.md&title=",
          title: "Issue Report"
        }
      ]
    };
  }
};
</script>


