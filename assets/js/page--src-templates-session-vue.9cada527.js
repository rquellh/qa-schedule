(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{239:function(e){e.exports=JSON.parse('{"filterall":false,"sessions":[{"speaker":"Ingo Philipp","saved":false},{"speaker":"Joseph Ours","saved":false},{"speaker":"Sivakumar Anna","saved":false},{"speaker":"Puneet Arya","saved":false},{"speaker":"Brian Bayer","saved":false},{"speaker":"Mike Buening","saved":false},{"speaker":"Brendan Connolly","saved":false},{"speaker":"Erik Davis","saved":false},{"speaker":"Richard Douglass","saved":false},{"speaker":"Matthew Eakin","saved":false},{"speaker":"Joshua Eastman","saved":false},{"speaker":"Tim Grant","saved":false},{"speaker":"Thomas Haver","saved":false},{"speaker":"Anna Heiermann","saved":false},{"speaker":"Anne Hungate","saved":false},{"speaker":"Eran Kinsbruner","saved":false},{"speaker":"Jack Maher","saved":false},{"speaker":"Hadassah Mativesky","saved":false},{"speaker":"Jeff McKenzie","saved":false},{"speaker":"Andy Melichar","saved":false},{"speaker":"Paul Merrill","saved":false},{"speaker":"Sathish Natarajan","saved":false},{"speaker":"Sarala Pandey","saved":false},{"speaker":"Hayden Payne","saved":false},{"speaker":"Seth Petry-Johnson","saved":false},{"speaker":"Patrick Poulin","saved":false},{"speaker":"Akshita Puram","saved":false},{"speaker":"Dave Sadlon","saved":false},{"speaker":"Donavan Stanley","saved":false},{"speaker":"Raj Subramanian","saved":false},{"speaker":"Melissa Tondi","saved":false},{"speaker":"Jeff Van Fleet","saved":false}]}')},240:function(e,a){},244:function(e,a,s){e.exports=s.p+"assets/img/generic-profile.fb2c2b3c.png"},245:function(e,a,s){"use strict";var t=s(240),n=s.n(t);a.default=n.a},250:function(e,a,s){"use strict";s.r(a);var t=s(144),n=(s(152),s(153),s(239)),i={props:["speaker"],data:function(){return{favorites:n}},methods:{indexOf:function(e){return this.favorites.sessions.map(function(e){return e.speaker}).indexOf(e)},goback:function(){window.history.go(-1)}},mounted:function(){localStorage.favorites&&(console.log("mounted"),this.favorites=JSON.parse(localStorage.favorites))},watch:{favorites:{handler:function(){console.log("favorites changed"),localStorage.setItem("favorites",JSON.stringify(this.favorites))},deep:!0}}},r=s(1),l=Object(r.a)(i,function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-toolbar",{attrs:{flat:"",app:"",dense:"",dark:"",color:"#1b51aa"}},[s("v-btn",{staticClass:"text-capitalize",attrs:{flat:""},on:{click:function(a){return e.goback()}}},[s("v-icon",{attrs:{left:"",small:""}},[e._v("$vuetify.icons.chevron-left")]),e._v("Back\n  ")],1),s("v-spacer"),s("v-btn",{attrs:{flat:""},on:{click:function(a){e.favorites.sessions[e.indexOf(e.speaker)].saved=!e.favorites.sessions[e.indexOf(e.speaker)].saved}}},[e.favorites.sessions[e.indexOf(e.speaker)].saved?s("div",{staticClass:"text-capitalize"},[s("v-icon",{attrs:{left:"",small:"",color:"amber"}},[e._v("$vuetify.icons.star-solid")]),e._v("Saved\n    ")],1):s("div",{staticClass:"text-capitalize"},[s("v-icon",{attrs:{left:"",small:""}},[e._v("$vuetify.icons.star-outline")]),e._v("Save\n    ")],1)])],1)},[],!1,null,null,null).exports,o={props:["img","speaker","bio","linkUrl","twitUrl","webUrl"]},v=Object(r.a)(o,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-layout",{attrs:{"ma-0":"","pa-0":"",row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",sm4:"","pa-3":"","justify-center":"","align-center":"",layout:""}},[t("v-avatar",{attrs:{size:"300"}},[t("img",{attrs:{src:s(244),alt:e.speaker}})])],1),t("v-flex",{attrs:{xs12:"",sm8:"","pa-3":""}},[t("v-layout",{attrs:{"align-center":""}},[t("div",{staticClass:"headline font-weight-bold"},[e._v(e._s(e.speaker))]),t("v-spacer"),t("v-btn",{attrs:{flat:"",icon:"",color:"#1b51aa",href:e.linkUrl,title:e.speaker+" LinkedIn"}},[t("v-icon",[e._v("\n          $vuetify.icons.linkedin\n        ")])],1),t("v-btn",{attrs:{flat:"",icon:"",color:"#1b51aa",href:e.twitUrl,title:e.speaker+" Twitter"}},[t("v-icon",{staticClass:"custom-icon"},[e._v("$vuetify.icons.twitter")])],1),t("v-btn",{attrs:{flat:"",icon:"",color:"#1b51aa",href:e.webUrl,title:e.speaker+" Website"}},[t("v-icon",[e._v("$vuetify.icons.laptop")])],1)],1),t("div",{staticClass:"subheading"},[e._v(e._s(e.bio))])],1)],1)},[],!1,null,null,null).exports,f={components:{Layout:t.a,SessionNavbar:l,SpeakerBio:v},metaInfo:function(){return{title:this.$page.session.speaker}}},p=s(245),c=Object(r.a)(f,function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-app",[s("SessionNavbar",{attrs:{speaker:e.$page.session.speaker}}),s("Layout",[s("v-content",{staticClass:"my-1"},[s("v-container",{attrs:{"ma-0":"","pa-0":"",fluid:"","align-center":""}},[s("v-layout",{attrs:{"ma-0":"","pa-0":"",row:"",wrap:"","justify-space-between":"","fill-height":""}},[s("v-flex",{attrs:{xs12:"",md8:"","pa-3":""}},[s("div",{staticClass:"headline font-weight-bold"},[e._v(e._s(e.$page.session.title))]),s("div",{staticClass:"subheading"},[e._v(e._s(e.$page.session.abstract))])]),s("v-flex",{attrs:{xs12:"",md4:"","pa-3":""}},[s("div",{staticClass:"headline font-weight-bold"},[e._v("Session Information")]),s("div",{staticClass:"subheading"},[e._v("Time: "+e._s(e.$page.session.time))]),s("div",{staticClass:"subheading"},[e._v("Room: "+e._s(e.$page.session.room))])])],1),s("SpeakerBio",{attrs:{speaker:e.$page.session.speaker,bio:e.$page.session.bio}}),e.$page.session.speaker2?s("SpeakerBio",{attrs:{speaker:e.$page.session.speaker2,bio:e.$page.session.bio2}}):e._e()],1)],1)],1)],1)},[],!1,null,null,null);"function"==typeof p.default&&Object(p.default)(c);a.default=c.exports}}]);