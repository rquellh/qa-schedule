<template>
  <v-footer absolute app height="auto" dark color="primary">
    <div class="ml-3 caption">
      Created by Ryan Quellhorst
    </div>
    <v-spacer/>
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
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      social: [
        { icon: "fab fa-github", url: "https://github.com/rquellh" },
        { icon: "fas fa-bug", url: "https://github.com/rquellh/qa-schedule/issues/new?assignees=&labels=&template=bug_report.md&title=" },
        {
          icon: "fab fa-linkedin",
          url:
            "https://www.linkedin.com/in/ryanquellhorst/"
        },
      ]
    };
  }
};
</script>


