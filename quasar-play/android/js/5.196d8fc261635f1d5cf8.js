webpackJsonp([5],{146:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{border:!1}}}},232:function(t,i,s){i=t.exports=s(30)(void 0),i.push([t.i,"#view-flexbox{margin-top:30px;max-width:95vw}#view-flexbox .column>div>div,#view-flexbox .flex>div>div,#view-flexbox .row>div>div{padding:10px;border-radius:3px;background:hsla(31,15%,50%,.1);text-align:center}#view-flexbox.with-border .column,#view-flexbox.with-border .flex,#view-flexbox.with-border .row{border:2px solid teal}#view-flexbox.with-border .column>div,#view-flexbox.with-border .flex>div,#view-flexbox.with-border .row>div{border:1px dashed orange}",""])},241:function(t,i,s){var e=s(232);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(31)("7b6d53ea",e,!0)},307:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"layout-padding"},[s("label",[s("q-toggle",{model:{value:t.border,callback:function(i){t.border=i},expression:"border"}}),t._v("\n      Grid Borders\n    ")],1),t._v(" "),s("div",{class:{"with-border":t.border},attrs:{id:"view-flexbox"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",{staticClass:"caption"},[t._v("Grid in Grid in Grid")]),t._v(" "),t._m(4),t._v(" "),s("p",{staticClass:"caption"},[t._v("Top-aligned Row Cells")]),t._v(" "),t._m(5),t._v(" "),s("p",{staticClass:"caption"},[t._v("Bottom-aligned Row Cells")]),t._v(" "),t._m(6),t._v(" "),s("p",{staticClass:"caption"},[t._v("Vertically Centered Row Cells")]),t._v(" "),t._m(7),t._v(" "),s("p",{staticClass:"caption"},[t._v("Mixed Vertical Alignment")]),t._v(" "),t._m(8),t._v(" "),s("p",{staticClass:"caption"},[t._v("Small Gutter")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("p",{staticClass:"caption"},[t._v("Medium Gutter")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",{staticClass:"caption"},[t._v("Big Gutter")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",{staticClass:"caption"},[t._v("Large Gutter")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",{staticClass:"caption"},[t._v("Responsive Gutter")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("p",{staticClass:"caption"},[t._v("Responsive")]),t._v(" "),t._m(19)])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter"},[s("div",{staticClass:"sm"},[t._v("SM")]),t._v(" "),s("div",{staticClass:"md"},[t._v("MD")]),t._v(" "),s("div",{staticClass:"bg"},[t._v("BG")]),t._v(" "),s("div",{staticClass:"lg"},[t._v("LG")]),t._v(" "),s("div",{staticClass:"lt-md"},[t._v("lt-MD")]),t._v(" "),s("div",{staticClass:"lt-bg"},[t._v("lt-BG")]),t._v(" "),s("div",{staticClass:"lt-lg"},[t._v("lt-LG")]),t._v(" "),s("div",{staticClass:"gt-sm"},[t._v("gt-SM")]),t._v(" "),s("div",{staticClass:"gt-md"},[t._v("gt-MD")]),t._v(" "),s("div",{staticClass:"gt-bg"},[t._v("gt-BG")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter wrap justify-stretch content-center text-center"},[s("div",{staticClass:"sm-width-2of3 bg-width-1of7 auto"},[s("div",[t._v("2/3")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("auto")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("auto")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter wrap justify-stretch content-center text-center"},[s("div",{staticClass:"width-2of3"},[s("div",[t._v("2/3")])]),t._v(" "),s("div",{staticClass:"width-1of5"},[s("div",[t._v("1/5")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("auto")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("auto")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter wrap"},[s("div",{staticClass:"offset-1of3"},[s("div",[t._v("offset 1/3")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("auto")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter"},[s("div",[s("div",[s("div",{staticClass:"row gutter"},[s("div",{staticClass:"width-1of3"},[s("div",[t._v("1/3")])]),t._v(" "),s("div",[s("div",[s("div",{staticClass:"row gutter"},[s("div",[s("div",[t._v("1/2")])]),t._v(" "),s("div",[s("div",[t._v("1/2")])])])])])])])]),t._v(" "),s("div",{staticClass:"width-1of3"},[s("div",[t._v("1/3")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter items-start"},[s("div",[s("div",[t._v("This cell should be top-aligned.")])]),t._v(" "),s("div",{staticClass:"width-1of2"},[s("div",[t._v("Pellentesque sagittis vel erat ac laoreet. Phasellus ac aliquet enim, eu aliquet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar porta leo, eu ultricies nunc sollicitudin vitae. Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh.")])]),t._v(" "),s("div",[s("div",[t._v("This cell should be top-aligned.")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter items-end"},[s("div",{staticClass:"auto"},[s("div",[t._v("This cell should be bottom-aligned.")])]),t._v(" "),s("div",[s("div",[t._v("Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in.")])]),t._v(" "),s("div",[s("div",[t._v("This cell should be bottom-aligned.")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter items-center"},[s("div",[s("div",[t._v("This cell should be vertically-centered with the cell to its right.")])]),t._v(" "),s("div",[s("div",[t._v("Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus. Nullam vel facilisis libero. Duis semper lobortis elit, vitae dictum erat.")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter"},[s("div",{staticClass:"self-start"},[s("div",[t._v("This cell should be top aligned.")])]),t._v(" "),s("div",[s("div",[t._v("Curabitur pulvinar dolor lectus, quis porta turpis ullamcorper nec. Quisque eget varius turpis, quis iaculis nibh. Ut interdum ligula id metus hendrerit cursus. Integer eu leo felis. Aenean commodo ultrices nunc, sit amet blandit elit gravida in. Sed est ligula, ornare ac nisi adipiscing, iaculis facilisis tellus.")])]),t._v(" "),s("div",{staticClass:"self-center"},[s("div",[t._v("This cell should be center-aligned.")])]),t._v(" "),s("div",{staticClass:"self-end"},[s("div",[t._v("This cell should be bottom-aligned.")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row small-gutter"},[s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row small-gutter"},[s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter"},[s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter"},[s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row big-gutter"},[s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row big-gutter"},[s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row large-gutter"},[s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row large-gutter"},[s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row sm-small-gutter md-gutter gt-md-large-gutter"},[s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row sm-small-gutter md-gutter gt-md-large-gutter"},[s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("1/2")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"row gutter sm-column"},[s("div",{staticClass:"width-2of3"},[s("div",[t._v("2/3")])]),t._v(" "),s("div",{staticClass:"width-1of5"},[s("div",[t._v("1/5")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("auto")])]),t._v(" "),s("div",{staticClass:"auto"},[s("div",[t._v("auto")])])])}]}},52:function(t,i,s){s(241);var e=s(13)(s(146),s(307),null,null);t.exports=e.exports}});