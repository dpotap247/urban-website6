(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,r=1;r<o.length;r++){var s=o[r];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-01100d17":"c90ee5c7","chunk-4f1494c3":"71dbdd05"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o={"chunk-01100d17":1,"chunk-4f1494c3":1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-01100d17":"ed9f68e0","chunk-4f1494c3":"08980829"}[e]+".css",a=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===n||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],d.parentNode.removeChild(d),o(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,o[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"347e":function(e,t,o){},"50e6":function(e,t,o){"use strict";o("c562")},"547b":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view"),o("Footer")],1)},a=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",{staticClass:"header content-grid"},[o("Logo",{staticClass:"header__logo"}),o("div",{staticClass:"header__right"},[o("Navigation",{staticClass:"header__nav header__nav_desktop"}),o("Social",{staticClass:"header__icons",attrs:{type:"header"}})],1),o("Navigation",{staticClass:"header__nav header__nav_mobile"})],1)},s=[],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.items?o("ul",{staticClass:"nav"},[e._l(e.items,(function(t){return[t.active?o("li",{key:""+t.text+e.$i18n.locale,staticClass:"nav__item"},[t.link.includes("#")?o("span",{on:{click:function(o){return e.scrollTo(t)}}},[e._v(e._s(e.$t(t.text)))]):o("router-link",{attrs:{to:t.link}},[e._v(e._s(e.$t(t.text)))])],1):e._e()]})),o("SwitchLang",{staticClass:"nav__item"})],2):e._e()},l=[],u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"switch",on:{click:e.switchLang}},[e._v(" ["+e._s("ua"==this.$i18n.locale?"en":"ua")+"] ")])},f=[],d={methods:{switchLang(){"en"==this.$i18n.locale?this.$i18n.locale="ua":this.$i18n.locale="en",this.$emit("switch")}}},h=d,p=(o("9d8f"),o("2877")),m=Object(p["a"])(h,u,f,!1,null,"9e023c4c",null),_=m.exports,v={props:["type"],mounted(){setTimeout(()=>{this.items=[{text:"header.home",link:"/",active:"mobile"!=this.type||"homepage"!=this.$route.name},{text:"header.projects",link:"/project",active:"mobile"!=this.type||"project"!=this.$route.name},{text:"header.about_us",link:"#about_us",page:"homepage",active:!0}]},1e3)},data(){return{items:null}},components:{SwitchLang:_},methods:{async scrollTo(e){const t=document.querySelector(e.link);t?this.scroll(t):(await this.$router.push({name:e.page}),setTimeout(()=>{this.scroll(document.querySelector(e.link))},1e3))},scroll(e){e.scrollIntoView({block:"center",behavior:"smooth"})}}},b=v,g=(o("ca89"),Object(p["a"])(b,c,l,!1,null,"13be1626",null)),y=g.exports,k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"logo"},[o("img",{staticClass:"logo__img",attrs:{src:e.$router.options.base+"media/header/main-logo.gif",alt:"main-logo"}}),o("img",{staticClass:"logo__title",attrs:{src:e.$router.options.base+"media/header/main-logo-title.svg",alt:"main-logo-title"}})])},w=[],C=(o("8260"),{}),j=Object(p["a"])(C,k,w,!1,null,"2decc681",null),$=j.exports,x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"icons"},e._l(e.items,(function(e){return o("a",{key:e.alt,staticClass:"icons__item",attrs:{href:e.link,target:"_blank"}},[o("img",{attrs:{src:e.icon,alt:e.alt}})])})),0)},E=[],S={props:["type"],data(){return{items:[{icon:this.$router.options.base+`media/${this.type}/telegram-icon.svg`,alt:"tg",link:"https://t.me/miskyitheatre_bot"},{icon:this.$router.options.base+`media/${this.type}/insta-icon.svg`,alt:"inst",link:"https://www.instagram.com/miskyi_theatre/"},{icon:this.$router.options.base+`media/${this.type}/fb-icon.svg`,alt:"fb",link:"https://facebook.com/miskyitheatre/"}]}}},O=S,T=(o("622f"),Object(p["a"])(O,x,E,!1,null,"ef8777de",null)),P=T.exports,L={components:{Navigation:y,Logo:$,Social:P}},A=L,M=(o("dc9f"),Object(p["a"])(A,i,s,!1,null,"447b3ea2",null)),N=M.exports,K=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer content-grid"},[o("Copyright",{staticClass:"footer__copy"}),o("div",{staticClass:"footer__right"},[o("Address",{staticClass:"footer__address"}),o("Links")],1)],1)},D=[],B=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("div",{staticClass:"footer__item"},[e._v(e._s(e.$t("footer.address")))]),o("div",{staticClass:"footer__item"},[e._v(" "+e._s(e.$t("footer.house"))+" ")]),o("a",{staticClass:"footer__item",attrs:{href:"mailto:miskyitheatre@gmail.com"}},[e._v("miskyitheatre@gmail.com")])])},F=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer__payments"},[o("img",{attrs:{src:"/media/footer/visa.svg",alt:"visa"}}),o("img",{attrs:{src:"/media/footer/mc.svg",alt:"mc"}})])}],q={},H=Object(p["a"])(q,B,F,!1,null,null,null),J=H.exports,z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"copyright"},[o("div",{staticClass:"footer__item"},[e._v("© Copyright 2021 ")]),o("div",{staticClass:"footer__item"},[e._v("All rights reserved.")])])}],U={},V=Object(p["a"])(U,z,I,!1,null,null,null),R=V.exports,W=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{width:"100%"}},[o("Social",{staticClass:"footer__item footer__social",attrs:{type:"footer"}}),o("a",{staticClass:"nav__item",staticStyle:{"margin-bottom":"10px"},attrs:{target:"_blank",href:"https://docs.google.com/document/d/1Yoh15czREeRyfxuAMC7iPZnkAH9mVFeECwdzEMwbnMw/edit"}},[e._v(e._s(e.$t("header.offer")))]),o("Navigation",{attrs:{type:"mobile"}})],1)},Y=[],Z={components:{Social:P,Navigation:y}},G=Z,Q=(o("50e6"),Object(p["a"])(G,W,Y,!1,null,"3f2ff0d5",null)),X=Q.exports,ee={components:{Copyright:R,Address:J,Links:X}},te=ee,oe=(o("6948"),Object(p["a"])(te,K,D,!1,null,null,null)),ne=oe.exports,re={name:"App",components:{Header:N,Footer:ne}},ae=re,ie=(o("5c0b"),Object(p["a"])(ae,r,a,!1,null,null,null)),se=ie.exports,ce=o("8c4f"),le=o("5f35");n["a"].use(ce["a"]);var ue=new ce["a"]({scrollBehavior:()=>({y:0}),mode:"history",base:le["publicPath"],routes:[{name:"homepage",path:"/",component:()=>o.e("chunk-01100d17").then(o.bind(null,"7f94"))},{name:"project",path:"/project",component:()=>o.e("chunk-4f1494c3").then(o.bind(null,"616c"))}]}),fe=o("a925");n["a"].use(fe["a"]);const de={en:{header:{home:"home",projects:"projects",about_us:"about us",offer:"offer document"},footer:{address:"Kyiv, Lviv Square 1-5",house:"Artist's house"},main:{title:"Theatre in the city",desc_second_screen:"Miskyi theatre was founded in Kyiv in 2021.<br> With the hope that our cities will not become parking lots.",link_to_project:'works of participants of the course<br class="mobile"> on creation of audio walks'},project:{title:"Works of participants of the course on creation of audio walks ",desc:"Learn more by link:",btn:"Learn more",p_1:"\n            In November 2021, the Miskyi theatre conducted a course on creating audio walks in the urban environment. Participants learned the basics of sound design, urban practices and creating routes in the districts of Kyiv.\n            ",p_2:"The curator of the course is Dima Levitsky",p_3:"\n                Course lecturers:<br> culturologist Maria Borysova,<br> musician Jonny Fox (Sheffield, UK),<br> sound director Vasyl Yavtushenko (4Ears Sound Production)\n            ",p_4:"The result of the course were works: ",works:{w_1:"Dmytro Tiazhlov (work title, link, audio file)",w_2:"Svitlana Dovhan, City-72",w_3:"Maryana Klochko, The walk on the surface",w_4:"Pinchuk Dzvinka (job title, link, audio file)",w_5:"Ihor Babayev, Did you want to return to a place of which was afraid as a child?",w_6:"Tetyana Pavliuk, The walk we take before having a cup of tea",w_7:"Konopliana Julia (title of work, link, audio file)",w_8:"Agadjanova Anaid (work title, link, audio file)"},friends:'The course is supported by  the European Union under the "House of Europe" programme. '}},ua:{header:{home:"головна",projects:"проєкти",about_us:"про нас",offer:"оферта"},footer:{address:"Київ, Львівська площа 1-5",house:"Будинок Художника"},main:{title:"ТЕАТР У МІСТІ",desc_second_screen:"Міський театр засновано у Києві у 2021 році.<br>\n            З надією, що наші міста не стануть парковками.",link_to_project:'pоботи учасниць/ків курсу<br class="mobile"> зі створення аудіопрогулянок'},project:{title:"Роботи учасниць/ків курсу<br>\n            зі створення аудіопрогулянок",desc:"дізнатись більше можна за посиланням:",btn:"Дізнатись більше",p_1:"\n            У листопаді 2021 року Міський театр провів курс зі створення аудіопрогулянок у міському середовищі. Учасниці та учасники навчались основам звукорежисури, урбаністичним практикам та створенню маршрутів у районах Києва. \n            ",p_2:"Куратор курсу - Діма Левицький",p_3:"\n                Лектори курсу:<br>\n                культурологиня Марія Борисова,<br>\n                музикант Jonny Fox (Sheffield, UK),<br>\n                звукорежисер Василь Явтушенко (4Ears Sound Production)<br>\n            ",p_4:"Результатом курсу стали роботи:  ",works:{w_1:"Дмитро Тяжлов, Назва роботи",w_2:"Світлана Довгань, Місто-72",w_3:"Мар’яна Клочко, Прогулянка по поверхні",w_4:"Дзвінка Пінчук, Назва роботи",w_5:"Ігор Бабаєв, Чи ти хотів повернутись в місце, якого боявся у дитинстві?",w_6:"Тетяна Павлюк, Прогулянка перед горнятком чаю",w_7:"Юлія Конопляна, Назва роботи",w_8:"Анаід Агаджанова, Назва роботи"},friends:'Курс створено за підтримки Європейського Союзу в рамках програми “Дім Європи". '}}};var he=new fe["a"]({locale:"uk",messages:de});n["a"].config.productionTip=!1,new n["a"]({router:ue,i18n:he,render:e=>e(se)}).$mount("#app")},"5c0b":function(e,t,o){"use strict";o("9c0c")},"5f35":function(e,t,o){e.exports={publicPath:"/"}},"622f":function(e,t,o){"use strict";o("347e")},6948:function(e,t,o){"use strict";o("547b")},"6b2f":function(e,t,o){},8260:function(e,t,o){"use strict";o("dea3")},"9c0c":function(e,t,o){},"9d8f":function(e,t,o){"use strict";o("6b2f")},b41a:function(e,t,o){},c562:function(e,t,o){},ca89:function(e,t,o){"use strict";o("cb77")},cb77:function(e,t,o){},dc9f:function(e,t,o){"use strict";o("b41a")},dea3:function(e,t,o){}});
//# sourceMappingURL=app.92a074b9.js.map