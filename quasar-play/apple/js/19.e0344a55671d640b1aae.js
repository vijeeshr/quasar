webpackJsonp([19],{120:function(e,t,i){var a=i(13)(i(193),i(320),null,null);e.exports=a.exports},193:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{loremipsum:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},methods:{bounceImage:function(e){e.classList.add("animate-bounce"),setTimeout(function(){document.body.contains(e)&&e.classList.remove("animate-bounce")},2050)}}}},320:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"layout-padding"},[i("p",{staticClass:"caption"},[e._v("Please scroll down to see the image and Scroll Fire being called with a nice Velocity effect.")]),e._v(" "),e._l(6,function(t){return i("p",[e._v(e._s(e.loremipsum))])}),e._v(" "),i("p",{staticClass:"caption"},[e._v("Scroll Fire below. Reload page to see the effect again.")]),e._v(" "),i("p",{staticClass:"text-center"},[i("img",{directives:[{name:"scroll-fire",rawName:"v-scroll-fire",value:e.bounceImage,expression:"bounceImage"}],staticStyle:{width:"200px"},attrs:{src:"statics/quasar.jpg"}})]),e._v(" "),e._l(3,function(t){return i("p",[e._v(e._s(e.loremipsum))])})],2)])},staticRenderFns:[]}}});