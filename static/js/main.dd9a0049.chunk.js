(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c.n(s),n=c(7),o=c(4),l=c(5),r=c(8),i=c(6),d=c(1),b=(c(13),c(14),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(e){Object(r.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"Jam",selected:!0,symbols:{Jam:"-"}},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.selectedGood,s=t.selected,a=t.symbols;return Object(b.jsxs)("main",{className:"section container",children:[s?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(c," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){Object.keys(a).forEach((function(e){a[e]="+"})),e.setState({selected:!1,symbols:a})}})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:j.map((function(t){return Object(b.jsxs)("tr",{"data-cy":"Good",className:c===t&&"-"===a[t]?"has-background-success-light":"",children:[Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":c===t&&"-"===a[t]?"RemoveButton":"AddButton",type:"button",className:"button ".concat(c===t&&"-"===a[t]?"is-info":""),onClick:function(){var s=Object(n.a)({},a);c===t?s[t]="-"===a[t]?"+":"-":(s[t]="-",s[c]="+"),e.setState({selectedGood:t,selected:"-"===s[t],symbols:s})},children:c===t?a[t]:"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})}}]),c}(d.Component);a.a.render(Object(b.jsx)(u,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dd9a0049.chunk.js.map