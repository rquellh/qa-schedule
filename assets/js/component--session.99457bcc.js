(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{188:function(e){e.exports={filterall:!1,sessions:[{speaker:"Ingo Philipp",saved:!1},{speaker:"Joseph Ours",saved:!1},{speaker:"Sivakumar Anna",saved:!1},{speaker:"Puneet Arya",saved:!1},{speaker:"Brian Bayer",saved:!1},{speaker:"Mike Buening",saved:!1},{speaker:"Brendan Connolly",saved:!1},{speaker:"Erik Davis",saved:!1},{speaker:"Richard Douglass",saved:!1},{speaker:"Matthew Eakin",saved:!1},{speaker:"Joshua Eastman",saved:!1},{speaker:"Tim Grant",saved:!1},{speaker:"Thomas Haver",saved:!1},{speaker:"Anna Heiermann",saved:!1},{speaker:"Anne Hungate",saved:!1},{speaker:"Eran Kinsbruner",saved:!1},{speaker:"Jack Maher",saved:!1},{speaker:"Hadassah Mativesky",saved:!1},{speaker:"Jeff McKenzie",saved:!1},{speaker:"Andy Melichar",saved:!1},{speaker:"Paul Merrill",saved:!1},{speaker:"Sathish Natarajan",saved:!1},{speaker:"Sarala Pandey",saved:!1},{speaker:"Hayden Payne",saved:!1},{speaker:"Seth Petry-Johnson",saved:!1},{speaker:"Patrick Poulin",saved:!1},{speaker:"Akshita Puram",saved:!1},{speaker:"Dave Sadlon",saved:!1},{speaker:"Donavan Stanley",saved:!1},{speaker:"Raj Subramanian",saved:!1},{speaker:"Melissa Tondi",saved:!1},{speaker:"Jeff Van Fleet",saved:!1}]}},189:function(e,a,s){"use strict";s.d(a,"c",function(){return n}),s.d(a,"b",function(){return i}),s.d(a,"a",function(){return o});var t=s(0),r=t.default.observable({});function n(e,a){return t.default.set(r,e,a)}function i(e){return r[e]}function o(e,a){var s=a.matched[0],t=s?s.components.default:{};if(e.stringified&&t.__file)return console.error("An error occurred while executing "+"page-query for ".concat(t.__file,"\n\n")+"Error: ".concat(e.stringified));console.error(e.message)}},190:function(e,a,s){"use strict";var t=s(10),r=s(114)(1);t(t.P+t.F*!s(111)([].map,!0),"Array",{map:function(e){return r(this,e,arguments[1])}})},191:function(e,a,s){"use strict";var t=s(10),r=s(113)(!1),n=[].indexOf,i=!!n&&1/[1].indexOf(1,-0)<0;t(t.P+t.F*(i||!s(111)(n)),"Array",{indexOf:function(e){return i?n.apply(this,arguments)||0:r(this,e,arguments[1])}})},193:function(e,a,s){"use strict";var t=s(0),r=s(189),n=s(68),i=t.default.config.optionMergeStrategies;a.a=function(e){var a=e.options,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(a.__pageQuery)a.__pageQuery=t;else{a.__pageQuery=t,a.computed=i.computed({$page:function(){return Object(r.b)(this.$route.path)}},a.computed);var o=function(e){a[e]=i[e]([c(a)],a[e])},c=function(){return function(e,t,i){s.e(38).then(s.bind(null,196)).then(function(s){s.default(e,a.__pageQuery).then(function(a){404===a.code?i({name:n.b,params:{0:e.path}}):i()}).catch(function(a){a.code===n.a||404===a.code?(console.error(a),i({name:n.b,params:{0:e.path}})):Object(r.a)(a,e)})})}};o("beforeRouteEnter"),o("beforeRouteUpdate")}}},204:function(e,a,s){e.exports=s.p+"assets/img/generic-profile.fb2c2b3c.png"},255:function(e,a,s){"use strict";s.r(a);var t=s(102),r=(s(190),s(191),s(188)),n={props:["speaker"],data:function(){return{favorites:r}},methods:{indexOf:function(e){return this.favorites.sessions.map(function(e){return e.speaker}).indexOf(e)},goback:function(){window.history.go(-1)}}},i=s(31),o=Object(i.a)(n,function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-toolbar",{attrs:{flat:"",app:"",dense:"",dark:"",color:"primary"}},[s("v-btn",{staticClass:"text-capitalize",attrs:{flat:""},on:{click:function(a){return e.goback()}}},[s("v-icon",{attrs:{left:"",small:""}},[e._v("fas fa-chevron-left")]),e._v("Back\n  ")],1),s("v-spacer"),s("v-btn",{attrs:{flat:""},on:{click:function(a){e.favorites.sessions[e.indexOf(e.speaker)].saved=!e.favorites.sessions[e.indexOf(e.speaker)].saved}}},[e.favorites.sessions[e.indexOf(e.speaker)].saved?s("div",{staticClass:"text-capitalize"},[s("v-icon",{attrs:{left:"",small:"",color:"amber"}},[e._v("fas fa-star")]),e._v("Saved\n    ")],1):s("div",{staticClass:"text-capitalize"},[s("v-icon",{attrs:{left:"",small:""}},[e._v("far fa-star")]),e._v("Save\n    ")],1)])],1)},[],!1,null,null,null).exports,c={props:["img","speaker","bio","linkUrl","twitUrl","webUrl"]},p=Object(i.a)(c,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-layout",{attrs:{"ma-0":"","pa-0":"",row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",sm4:"","pa-3":"","justify-center":"","align-center":"",layout:""}},[t("v-avatar",{attrs:{size:"300"}},[t("img",{attrs:{src:s(204)}})])],1),t("v-flex",{attrs:{xs12:"",sm8:"","pa-3":""}},[t("v-layout",{attrs:{"align-center":""}},[t("div",{staticClass:"headline font-weight-bold"},[e._v(e._s(e.speaker))]),t("v-spacer"),t("v-btn",{attrs:{flat:"",icon:"",color:"primary",href:e.linkUrl}},[t("v-icon",[e._v("fab fa-linkedin")])],1),t("v-btn",{attrs:{flat:"",icon:"",color:"primary",href:e.twitUrl}},[t("v-icon",[e._v("fab fa-twitter")])],1),t("v-btn",{attrs:{flat:"",icon:"",color:"primary",href:e.webUrl}},[t("v-icon",[e._v("fas fa-laptop")])],1)],1),t("div",{staticClass:"subheading"},[e._v(e._s(e.bio))])],1)],1)},[],!1,null,null,null).exports,l={components:{Layout:t.a,SessionNavbar:o,SpeakerBio:p},metaInfo:function(){return{title:this.$page.session.speaker}}},v=s(193),f=function(e){Object(v.a)(e,void 0)},u=Object(i.a)(l,function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-app",[s("SessionNavbar",{attrs:{speaker:e.$page.session.speaker}}),s("Layout",[s("v-content",{staticClass:"my-1"},[s("v-container",{attrs:{"ma-0":"","pa-0":"",fluid:"","align-center":""}},[s("v-layout",{attrs:{"ma-0":"","pa-0":"",row:"",wrap:"","justify-space-between":"","fill-height":""}},[s("v-flex",{attrs:{xs12:"",md8:"","pa-3":""}},[s("div",{staticClass:"headline font-weight-bold"},[e._v(e._s(e.$page.session.title))]),s("div",{staticClass:"subheading"},[e._v(e._s(e.$page.session.abstract))])]),s("v-flex",{attrs:{xs12:"",md4:"","pa-3":""}},[s("div",{staticClass:"headline font-weight-bold"},[e._v("Session Information")]),s("div",{staticClass:"subheading"},[e._v("Time: "+e._s(e.$page.session.time))]),s("div",{staticClass:"subheading"},[e._v("Room: "+e._s(e.$page.session.room))])])],1),s("SpeakerBio",{attrs:{speaker:e.$page.session.speaker,bio:e.$page.session.bio}}),e.$page.session.speaker2?s("SpeakerBio",{attrs:{speaker:e.$page.session.speaker2,bio:e.$page.session.bio2}}):e._e()],1)],1)],1)],1)},[],!1,null,null,null);"function"==typeof f&&f(u);a.default=u.exports}}]);