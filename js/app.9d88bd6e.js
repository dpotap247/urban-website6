(function(e){function t(t){for(var o,r,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-422632c4":"1b8706cb","chunk-fbb194d4":"961a69df"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-422632c4":1,"chunk-fbb194d4":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-422632c4":"f97207c6","chunk-fbb194d4":"fa28ef8e"}[e]+".css",i=c.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===o||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],d.parentNode.removeChild(d),n(a)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1155:function(e,t,n){},"347e":function(e,t,n){},"547b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header content-grid"},[n("Logo",{staticClass:"header__logo"}),n("div",{staticClass:"header__right"},[n("Navigation",{staticClass:"header__nav header__nav_desktop"}),n("Social",{staticClass:"header__icons",attrs:{type:"header"}})],1),n("Navigation",{staticClass:"header__nav header__nav_mobile"})],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items?n("ul",{staticClass:"nav"},[e._l(e.items,(function(t){return[t.active?n("li",{key:""+t.text+e.$i18n.locale,staticClass:"nav__item"},[t.link.includes("#")?n("span",{on:{click:function(n){return e.scrollTo(t)}}},[e._v(e._s(e.$t(t.text)))]):n("router-link",{attrs:{to:t.link}},[e._v(e._s(e.$t(t.text)))])],1):e._e()]})),n("SwitchLang",{staticClass:"nav__item"})],2):e._e()},l=[],u=n("1da1"),f=(n("96cf"),n("b0c0"),n("9911"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"switch",on:{click:e.switchLang}},[e._v(" ["+e._s("ua"==this.$i18n.locale?"en":"ua")+"] ")])}),d=[],h={methods:{switchLang(){"en"==this.$i18n.locale?this.$i18n.locale="ua":this.$i18n.locale="en",this.$emit("switch")}}},p=h,m=(n("9d8f"),n("2877")),_=Object(m["a"])(p,f,d,!1,null,"9e023c4c",null),b=_.exports,v={props:["type"],mounted:function(){var e=this;setTimeout((function(){e.items=[{text:"header.home",link:"/",active:"mobile"!=e.type||"homepage"!=e.$route.name},{text:"header.projects",link:"/project",active:"mobile"!=e.type||"project"!=e.$route.name},{text:"header.about_us",link:"#about_us",page:"homepage",active:!0}]}),1e3)},data:function(){return{items:null}},components:{SwitchLang:b},methods:{scrollTo:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=document.querySelector(e.link),!o){n.next=5;break}t.scroll(o),n.next=8;break;case 5:return n.next=7,t.$router.push({name:e.page});case 7:setTimeout((function(){t.scroll(document.querySelector(e.link))}),1e3);case 8:case"end":return n.stop()}}),n)})))()},scroll:function(e){e.scrollIntoView({block:"center",behavior:"smooth"})}}},g=v,k=(n("ca89"),Object(m["a"])(g,c,l,!1,null,"13be1626",null)),y=k.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("img",{staticClass:"logo__img",attrs:{src:e.$router.options.base+"media/header/main-logo.gif",alt:"main-logo"}}),n("img",{staticClass:"logo__title",attrs:{src:e.$router.options.base+"media/header/main-logo-title.svg",alt:"main-logo-title"}})])},j=[],C=(n("8260"),{}),x=Object(m["a"])(C,w,j,!1,null,"2decc681",null),$=x.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icons"},e._l(e.items,(function(e){return n("a",{key:e.alt,staticClass:"icons__item",attrs:{href:e.link,target:"_blank"}},[n("img",{attrs:{src:e.icon,alt:e.alt}})])})),0)},E=[],O={props:["type"],data:function(){return{items:[{icon:this.$router.options.base+"media/".concat(this.type,"/telegram-icon.svg"),alt:"tg",link:"https://t.me/miskyitheatre_bot"},{icon:this.$router.options.base+"media/".concat(this.type,"/insta-icon.svg"),alt:"inst",link:"https://www.instagram.com/miskyi_theatre/"},{icon:this.$router.options.base+"media/".concat(this.type,"/fb-icon.svg"),alt:"fb",link:"https://facebook.com/miskyitheatre/"}]}}},P=O,T=(n("622f"),Object(m["a"])(P,S,E,!1,null,"ef8777de",null)),L=T.exports,A={components:{Navigation:y,Logo:$,Social:L}},N=A,K=(n("dc9f"),Object(m["a"])(N,a,s,!1,null,"447b3ea2",null)),M=K.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer content-grid"},[n("Copyright",{staticClass:"footer__copy"}),n("div",{staticClass:"footer__right"},[n("Address",{staticClass:"footer__address"}),n("Links")],1)],1)},D=[],F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"footer__item"},[e._v(e._s(e.$t("footer.address")))]),n("div",{staticClass:"footer__item"},[e._v(" "+e._s(e.$t("footer.house"))+" ")]),n("a",{staticClass:"footer__item",attrs:{href:"mailto:miskyitheatre@gmail.com"}},[e._v("miskyitheatre@gmail.com")])])},J=[],q={},U=Object(m["a"])(q,F,J,!1,null,null,null),H=U.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"copyright"},[n("div",{staticClass:"footer__item"},[e._v("© Copyright 2021 ")]),n("div",{staticClass:"footer__item"},[e._v("All rights reserved.")])])}],R={},V=Object(m["a"])(R,I,z,!1,null,null,null),W=V.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%"}},[n("Social",{staticClass:"footer__item footer__social",attrs:{type:"footer"}}),n("Navigation",{attrs:{type:"mobile"}})],1)},G=[],Q={components:{Social:L,Navigation:y}},X=Q,Z=(n("85be"),Object(m["a"])(X,Y,G,!1,null,"0c20d413",null)),ee=Z.exports,te={components:{Copyright:W,Address:H,Links:ee}},ne=te,oe=(n("6948"),Object(m["a"])(ne,B,D,!1,null,null,null)),re=oe.exports,ie={name:"App",components:{Header:M,Footer:re}},ae=ie,se=(n("5c0b"),Object(m["a"])(ae,r,i,!1,null,null,null)),ce=se.exports,le=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),ue=n("5f35");o["a"].use(le["a"]);var fe=new le["a"]({scrollBehavior:function(){return{y:0}},mode:"history",base:ue["publicPath"],routes:[{name:"homepage",path:"/",component:function(){return n.e("chunk-fbb194d4").then(n.bind(null,"7f94"))}},{name:"project",path:"/project",component:function(){return n.e("chunk-422632c4").then(n.bind(null,"616c"))}}]}),de=n("a925");o["a"].use(de["a"]);var he={en:{header:{home:"home",projects:"projects",about_us:"about us"},footer:{address:"Kyiv, Lviv Square 1-5",house:"Artist's house"},main:{title:"Theatre in the city",desc_second_screen:"Miskyi theater was founded in Kyiv in 2021.<br> With the hope that our cities will not become parking lots.",link_to_project:'works of participants of the course<br class="mobile"> on creation of audio walks'},project:{title:"Works of participants of the course on creation of audio walks ",desc:"Learn more by link:",btn:"Learn more",p_1:"\n            In November 2021, the Miskyi theatre conducted a course on creating audio walks in the urban environment. Participants learned the basics of sound design, urban practices and creating routes in the districts of Kyiv.\n            ",p_2:"The curator of the course is Dima Levitsky",p_3:"\n                Course lecturers:<br> culturologist Maria Borysova,<br> musician Jonny Fox (Sheffield, UK),<br> sound director Vasyl Yavtushenko (4Ears Sound Production)\n                Лектори курсу:<br>\n                культурологиня Марія Борисова,<br>\n                музикант Jonny Fox (Sheffield, UK),<br>\n                звукорежисер Василь Явтушенко (4Ears Sound Production)<br>\n            ",p_4:"The result of the course were works: ",works:{w_1:"Dmytro Tiazhlov (work title, link, audio file)",w_2:"Svitlana Dovhan (job title, link, audio file)",w_3:"Maryana Klochko (title of work, link, audio file)",w_4:"Pinchuk Dzvinka (job title, link, audio file)",w_5:"Ihor Babayev (title, link, audio file)",w_6:"Tetyana Pavliuk (work title, link, audio file)",w_7:"Konopliana Julia (title of work, link, audio file)",w_8:"Agadjanova Anaid (work title, link, audio file)"},friends:'The course is supported by  the European Union under the "House of Europe" programme. '}},ua:{header:{home:"головна",projects:"проєкти",about_us:"про нас"},footer:{address:"Київ, Львівська площа 1-5",house:"Будинок Художника"},main:{title:"ТЕАТР У МІСТІ",desc_second_screen:"Міський театр засновано у Києві у 2021 році.<br>\n            З надією, що наші міста не стануть парковками.",link_to_project:'pоботи учасниць/ків курсу<br class="mobile"> зі створення аудіопрогулянок'},project:{title:"Роботи учасниць/ків курсу<br>\n            зі створення аудіопрогулянок",desc:"дізнатись більше можна за посиланням:",btn:"Дізнатись більше",p_1:"\n            У листопаді 2021 року Міський театр провів курс зі створення аудіопрогулянок у міському середовищу. Учасниці та учасники навчались основам звукорежисури, урбаністичним практикам та створенню маршрутів у районах Києва. \n            ",p_2:"Куратор курсу - Діма Левицький",p_3:"\n                Лектори курсу:<br>\n                культурологиня Марія Борисова,<br>\n                музикант Jonny Fox (Sheffield, UK),<br>\n                звукорежисер Василь Явтушенко (4Ears Sound Production)<br>\n            ",p_4:"Результатом курсу стали роботи:  ",works:{w_1:"Дмитро Тяжлов, Назва роботи",w_2:"Світлана Довгань, Назва роботи",w_3:"Мар’яна Клочко, Назва роботи",w_4:"Дзвінка Пінчук, Назва роботи",w_5:"Ігор Бабаєв, Назва роботи",w_6:"Тетяна Павлюк, Назва роботи",w_7:"Юлія Конопляна, Назва роботи",w_8:"Анаід Агаджанова, Назва роботи"},friends:'Курс створено за підтримки Європейського Союзу в рамках програми “Дім Європи". '}}},pe=new de["a"]({locale:"uk",messages:he});o["a"].config.productionTip=!1,new o["a"]({router:fe,i18n:pe,render:function(e){return e(ce)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5f35":function(e,t,n){e.exports={publicPath:"/"}},"622f":function(e,t,n){"use strict";n("347e")},6948:function(e,t,n){"use strict";n("547b")},"6b2f":function(e,t,n){},8260:function(e,t,n){"use strict";n("dea3")},"85be":function(e,t,n){"use strict";n("1155")},"9c0c":function(e,t,n){},"9d8f":function(e,t,n){"use strict";n("6b2f")},b41a:function(e,t,n){},ca89:function(e,t,n){"use strict";n("cb77")},cb77:function(e,t,n){},dc9f:function(e,t,n){"use strict";n("b41a")},dea3:function(e,t,n){}});
//# sourceMappingURL=app.9d88bd6e.js.map