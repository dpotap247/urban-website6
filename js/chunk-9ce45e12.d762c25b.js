(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ce45e12"],{"0548":function(t,e,i){},"0b42":function(t,e,i){var n=i("da84"),s=i("e8b5"),a=i("68ee"),o=i("861d"),r=i("b622"),c=r("species"),u=n.Array;t.exports=function(t){var e;return s(t)&&(e=t.constructor,a(e)&&(e===u||s(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"159b":function(t,e,i){var n=i("da84"),s=i("fdbc"),a=i("785a"),o=i("17c2"),r=i("9112"),c=function(t){if(t&&t.forEach!==o)try{r(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in s)s[u]&&c(n[u]&&n[u].prototype);c(a)},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,s=i("a640"),a=s("forEach");t.exports=a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,i){var n=i("d039"),s=i("b622"),a=i("2d00"),o=s("species");t.exports=function(t){return a>=51||!n((function(){var e=[],i=e.constructor={};return i[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3aed":function(t,e,i){},"3bed":function(t,e,i){},"4de4":function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").filter,a=i("1dde"),o=a("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"65a7":function(t,e,i){"use strict";i("0548")},"65f0":function(t,e,i){var n=i("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"6cdf":function(t,e,i){},"7f94":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("MainScreen"),i("SecondScreen"),i("IconsScreen"),i("WorksScreen")],1)},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main_screen content-grid"},[i("div",{staticClass:"main_screen__video"},[i("video",{attrs:{autoplay:"autoplay",muted:"",src:t.$router.options.base+"media/main/main.mp4"},domProps:{muted:!0}})]),i("h1",{staticClass:"main_screen__title"},[t._v(t._s(t.$t("main.title")))]),i("MainButton",{staticClass:"main_screen__btn",attrs:{type:"main",text:t.$t("header.projects")},nativeOn:{click:function(e){return t.$router.push({name:"project"})}}})],1)},o=[],r=i("a0f4"),c={components:{MainButton:r["a"]}},u=c,l=(i("acaa"),i("2877")),d=Object(l["a"])(u,a,o,!1,null,"6307a982",null),f=d.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"second_screen content-grid",attrs:{id:"about_us"}},[i("img",{staticClass:"second_screen__img",attrs:{src:"/urban-website6/media/main/teatr-animation-main-icon.gif",alt:""}}),i("span",{staticClass:"second_screen__span",domProps:{innerHTML:t._s(t.$t("main.desc_second_screen"))}})])},m=[],v=(i("c503"),{}),_=Object(l["a"])(v,p,m,!1,null,"093293b0",null),b=_.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons_screen content-grid"},t._l(t.items,(function(e,n){return i("Icon",{key:n,ref:"items",refInFor:!0,attrs:{item:e,allActive:t.allActive},on:{onClick:function(e){return t.updActiveIcon(n)}}})})),1)},$=[],g=(i("4de4"),i("d3b7"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon_wrapper",on:{mouseenter:function(e){t.isHover=!0},mouseleave:function(e){t.isHover=!1}}},[i("div",{staticClass:"icon"},[t.isHover?t._e():i("img",{staticClass:"icon__active",attrs:{src:t.item[t.type],alt:""}}),t.isHover?i("div",{on:{click:t.startPlay}},[t.item.clicked?i("img",{staticClass:"icon__pause_btn",attrs:{src:t.$router.options.base+"media/main/pause.svg",alt:"pause"}}):i("img",{staticClass:"icon__play_btn",attrs:{src:t.$router.options.base+"media/main/play.svg",alt:"play"}})]):t._e()]),i("audio",{ref:"audio",staticClass:"icon__audio",attrs:{src:t.item.audio}})])}),y=[],k=i("1da1"),x=(i("96cf"),{props:["item","allActive"],data:function(){return{isHover:!1}},computed:{type:function(){return this.allActive?"active":this.item.clicked?"play":"stop"}},methods:{startPlay:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$emit("onClick");case 2:t.item.clicked?t.$refs.audio.play():t.$refs.audio.pause();case 3:case"end":return e.stop()}}),e)})))()}}}),C=x,w=(i("fc47"),Object(l["a"])(C,g,y,!1,null,"0bbb8818",null)),E=w.exports,j={components:{Icon:E},data:function(){return{items:[{active:this.$router.options.base+"media/main/icons_active/1.gif",play:this.$router.options.base+"media/main/icons_play/1.gif",stop:this.$router.options.base+"media/main/icons_stop/1.svg",audio:this.$router.options.base+"media/main/audio/track_1.mp3",clicked:!1},{active:this.$router.options.base+"media/main/icons_active/2.gif",play:this.$router.options.base+"media/main/icons_play/2.gif",stop:this.$router.options.base+"media/main/icons_stop/2.svg",audio:this.$router.options.base+"media/main/audio/track_2.mp3",clicked:!1},{active:this.$router.options.base+"media/main/icons_active/3.gif",play:this.$router.options.base+"media/main/icons_play/3.gif",stop:this.$router.options.base+"media/main/icons_stop/3.svg",audio:this.$router.options.base+"media/main/audio/track_3.mp3",clicked:!1},{active:this.$router.options.base+"media/main/icons_active/4.gif",play:this.$router.options.base+"media/main/icons_play/4.gif",stop:this.$router.options.base+"media/main/icons_stop/4.svg",audio:this.$router.options.base+"media/main/audio/track_4.mp3",clicked:!1},{active:this.$router.options.base+"media/main/icons_active/5.gif",play:this.$router.options.base+"media/main/icons_play/5.gif",stop:this.$router.options.base+"media/main/icons_stop/5.svg",audio:this.$router.options.base+"media/main/audio/track_5.mp3",clicked:!1},{active:this.$router.options.base+"media/main/icons_active/6.gif",play:this.$router.options.base+"media/main/icons_play/6.gif",stop:this.$router.options.base+"media/main/icons_stop/6.svg",audio:this.$router.options.base+"media/main/audio/track_6.mp3",clicked:!1}]}},computed:{allActive:function(){return this.items.filter((function(t){return!t.clicked})).length==this.items.length}},methods:{updActiveIcon:function(t){var e=this,i=this.items[t].clicked;this.items[t].clicked=!i,this.items.forEach((function(i,n){n!==t&&(i.clicked=!1,e.$refs.items[n].$refs.audio.pause())}))}}},A=j,S=(i("db6a"),Object(l["a"])(A,h,$,!1,null,"55fc7f76",null)),O=S.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"works_screen content-grid"},[i("router-link",{attrs:{to:"/project"},domProps:{innerHTML:t._s(t.$t("main.link_to_project"))}})],1)},H=[],M=(i("fc95"),{}),P=Object(l["a"])(M,I,H,!1,null,"21fb6585",null),B=P.exports,R={components:{MainScreen:f,SecondScreen:b,IconsScreen:O,WorksScreen:B}},J=R,L=Object(l["a"])(J,n,s,!1,null,null,null);e["default"]=L.exports},"824d":function(t,e,i){},a0f4:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn",class:"btn_"+t.type},[t._v(t._s(t.text))])},s=[],a={props:["text","type"]},o=a,r=(i("65a7"),i("2877")),c=Object(r["a"])(o,n,s,!1,null,"d0802266",null);e["a"]=c.exports},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},acaa:function(t,e,i){"use strict";i("3bed")},b727:function(t,e,i){var n=i("0366"),s=i("e330"),a=i("44ad"),o=i("7b0b"),r=i("07fa"),c=i("65f0"),u=s([].push),l=function(t){var e=1==t,i=2==t,s=3==t,l=4==t,d=6==t,f=7==t,p=5==t||d;return function(m,v,_,b){for(var h,$,g=o(m),y=a(g),k=n(v,_),x=r(y),C=0,w=b||c,E=e?w(m,x):i||f?w(m,0):void 0;x>C;C++)if((p||C in y)&&(h=y[C],$=k(h,C,g),t))if(e)E[C]=$;else if($)switch(t){case 3:return!0;case 5:return h;case 6:return C;case 2:u(E,h)}else switch(t){case 4:return!1;case 7:u(E,h)}return d?-1:s||l?l:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c503:function(t,e,i){"use strict";i("f992")},db6a:function(t,e,i){"use strict";i("6cdf")},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f992:function(t,e,i){},fc47:function(t,e,i){"use strict";i("824d")},fc95:function(t,e,i){"use strict";i("3aed")}}]);
//# sourceMappingURL=chunk-9ce45e12.d762c25b.js.map