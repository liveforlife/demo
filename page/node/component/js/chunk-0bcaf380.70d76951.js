(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bcaf380"],{"27f1":function(e,t,n){},"8b12":function(e,t,n){!function(t,n){e.exports=n()}("undefined"!=typeof self&&self,function(){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"MxVueAliplayer",props:{playerStyle:{type:String,default:""},autoplay:{type:Boolean,default:!1},isLive:{type:Boolean,default:!1},playsinline:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"320px"},controlBarVisibility:{type:String,default:"hover"},useH5Prism:{type:Boolean,default:!1},useFlashPrism:{type:Boolean,default:!1},source:{type:String,default:""},cover:{type:String,default:""},x5_video_position:{type:String,default:"top"},x5_type:{type:String,default:"auto"},x5_fullscreen:{type:Boolean,default:!1},x5_orientation:{type:Number,default:2},autoPlayDelay:{type:Number,default:0},autoPlayDelayDisplayText:{type:String},skinLayout:{type:Array}},data:function(){return{sdkId:"aliplayer_Script",playerId:"aliplayer_"+Math.random().toString(36).substr(2),instance:null}},created:function(){void 0===window.Aliplayer?this.insertScript():this.initAliplayer()},methods:{insertScript:function(){var e=this,t=document.getElementById(this.sdkId);null===t&&(t=document.createElement("script"),t.id=this.sdkId,t.src="http://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js",document.head.appendChild(t)),t.addEventListener("load",function(){e.initAliplayer()})},initAliplayer:function(){var e=this;null===this.instance&&(this.instance&&this.instance.dispose(),this.$nextTick(function(){e.instance=window.Aliplayer({id:e.playerId,autoplay:e.autoplay,isLive:e.isLive,playsinline:e.playsinline,width:e.width,height:e.height,controlBarVisibility:e.controlBarVisibility,useH5Prism:e.useH5Prism,useFlashPrism:e.useFlashPrism,source:e.source,cover:e.cover,x5_video_position:e.x5_video_position,x5_type:e.x5_type,x5_fullscreen:e.x5_fullscreen,x5_orientation:e.x5_orientation,autoPlayDelay:e.autoPlayDelay,autoPlayDelayDisplayText:e.autoPlayDelayDisplayText,skinLayout:e.skinLayout}),e.instance.on("ready",function(){e.$emit("ready")}),e.instance.on("play",function(){e.$emit("play")}),e.instance.on("pause",function(){e.$emit("pause")}),e.instance.on("ended",function(){e.$emit("ended")}),e.instance.on("liveStreamStop",function(){e.$emit("liveStreamStop")}),e.instance.on("m3u8Retry",function(){e.$emit("m3u8Retry")}),e.instance.on("hideBar",function(){e.$emit("hideBar")}),e.instance.on("waiting",function(){e.$emit("waiting")}),e.instance.on("error",function(t){e.$emit("error",t)}),e.instance.on("cancelFullScreen",function(t){e.$emit("cancelFullScreen",t)}),e.instance.on("requestFullScreen",function(t){e.$emit("requestFullScreen",t)})}))},play:function(){this.instance.play()},pause:function(){this.instance.pause()},replay:function(){this.instance.replay()},seek:function(e){this.instance.seek(e)},getCurrentTime:function(){return this.instance.getCurrentTime()},getDuration:function(){return this.instance.getDuration()},getVolume:function(){return this.instance.getVolume()},setVolume:function(e){this.instance.setVolume(e)},loadByUrl:function(e,t){this.instance.loadByUrl(e,t)},setPlayerSize:function(e,t){this.instance.setPlayerSize(e,t)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);t.default=i.a},function(e,t,n){"use strict";function i(e){n(3)}var a=n(0),r=n(9),o=n(8),s=i,l=o(a.a,r.a,!1,s,null,null);t.a=l.exports},function(e,t,n){var i=n(4);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),n(6)("5dc88e3a",i,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,"@import url(http://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css);",""]),t.push([e.i,"",""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=i(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=c[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(r(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(r(n.parts[a]));c[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function r(e){var t,n,i=document.querySelector("style["+v+'~="'+e.id+'"]');if(i){if(y)return m;i.parentNode.removeChild(i)}if(g){var r=f++;i=p||(p=a()),t=o.bind(null,i,r,!1),n=o.bind(null,i,r,!0)}else i=a(),t=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function o(e,t,n,i){var a=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var r=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function s(e,t){var n=t.css,i=t.media,a=t.sourceMap;if(i&&e.setAttribute("media",i),h.ssrId&&e.setAttribute(v,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(7),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,y=!1,m=function(){},h=null,v="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,a){y=n,h=a||{};var r=u(e,t);return i(r),function(t){for(var n=[],a=0;a<r.length;a++){var o=r[a],s=c[o.id];s.refs--,n.push(s)}t?(r=u(e,t),i(r)):r=[];for(a=0;a<n.length;a++){s=n[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],i={},a=0;a<t.length;a++){var r=t[a],o=r[0],s=r[1],l=r[2],u=r[3],c={id:e+":"+a,css:s,media:l,sourceMap:u};i[o]?i[o].parts.push(c):n.push(i[o]={id:o,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,i,a,r){var o,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,s=e.default);var u,c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId=a),r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=u):i&&(u=i),u){var d=c.functional,p=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(e,t){return u.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,u):[u]}return{esModule:o,exports:s,options:c}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"prism-player",style:e.playerStyle,attrs:{id:e.playerId}})},a=[],r={render:i,staticRenderFns:a};t.a=r}])})},ad55:function(e,t,n){"use strict";var i=n("27f1"),a=n.n(i);a.a},f712:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"play-box"},[n("div",{staticClass:"title"},[e._v(" 这是放直播标题 ")]),e._v(" "),n("div",{staticClass:"center"},[n("div",{staticClass:"player"},[e.loaded?n("MxVueAliplayer",{attrs:{source:e.m3u8,width:"100%",height:"100%",cover:e.cover,language:"zh-cn","control-bar-visibility":"hover","use-h5prism":"true","skin-layout":e.skinLayout}}):e._e()],1),e._v(" "),n("div",{staticClass:"info"},[n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"聊天",name:"talk"}},[n("div",{staticClass:"tab-content"},e._l(e.comments,function(t){return n("p",{key:t.id},[e._v(e._s(t.user_name)+":"+e._s(t.content))])}),0)]),e._v(" "),n("el-tab-pane",{attrs:{label:"热力",name:"hot"}},[e._v("热力")]),e._v(" "),n("el-tab-pane",{attrs:{label:"提示",name:"tips"}},[e._v("提示")]),e._v(" "),n("el-tab-pane",{attrs:{label:"回看",name:"playback"}},[e._v("回看")])],1)],1)])])])])},a=[],r=n("8b12"),o=n.n(r),s=n("b775"),l=n("83d6"),u={components:{MxVueAliplayer:o.a},data:function(){return{activeName:"talk",comments:[],cover:"",m3u8:"",loaded:!1,skinLayout:[{name:"bigPlayButton",align:"blabs",x:30,y:80},{name:"errorDisplay",align:"tlabs",x:0,y:0},{name:"infoDisplay"},{name:"controlBar",align:"blabs",x:0,y:0,children:[{name:"playButton",align:"tl",x:10,y:12},{name:"progress",align:"blabs",x:0,y:44},{name:"fullScreenButton",align:"tr",x:10,y:10},{name:"volume",align:"tr",x:5,y:10}]}]}},mounted:function(){var e=this;Object(s["a"])({url:"/comment/findComment.htm",method:"get",params:{worksid:"102",workstype:"1",index:0,size:1e5}}).then(function(t){e.comments=t.result}),Object(s["a"])({url:"/live/selLiveById.htm",method:"get",params:{id:"102"}}).then(function(t){e.m3u8=t.result.m3u8,e.cover=l.web_base_url+t.result.img,e.loaded=!0})},methods:{}},c=u,d=(n("ad55"),n("2877")),p=Object(d["a"])(c,i,a,!1,null,"6fe17c87",null);t["default"]=p.exports}}]);