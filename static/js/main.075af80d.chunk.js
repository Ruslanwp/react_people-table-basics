(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(16),c=n.n(r),u=n(6),m=n(1),o=function(){return l.a.createElement("nav",null,l.a.createElement("div",null,l.a.createElement(u.b,{to:"/"},"HomePage")),l.a.createElement("div",null,l.a.createElement(u.b,{to:"/people"},"PeoplePage")),l.a.createElement("div",null,l.a.createElement(u.b,{to:"/"},"NotFoundPage")))},p=function(){return l.a.createElement("h2",null,"HomePage")},E=n(19),i=n(12),h=n.n(i),f=n(13),s=n(18);function d(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}))}function b(){return(b=Object(s.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:return t=e.sent,n=t.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{mother:t.find((function(t){return e.motherName===t.name})),father:t.find((function(t){return e.fatherName===t.name}))})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){var t=e.person;return l.a.createElement("tr",{className:"person"},l.a.createElement("td",null,t.name),l.a.createElement("td",null,"f"===t.sex?"Female":"Male"),l.a.createElement("td",null,t.born),l.a.createElement("td",null,t.died),l.a.createElement("td",null,t.motherName||"undefined"),l.a.createElement("td",null,t.fatherName||"undefined"))},g=function(e){var t=e.people;return l.a.createElement("table",{className:"peopleTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"name"),l.a.createElement("th",null,"sex"),l.a.createElement("th",null,"born"),l.a.createElement("th",null,"died"),l.a.createElement("th",null,"motherName"),l.a.createElement("th",null,"fatherName"))),l.a.createElement("tbody",null,t.length&&t.map((function(e){return l.a.createElement(v,{key:e.slug,person:e})}))))},N=function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){(function(){return b.apply(this,arguments)})().then(r)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"People Page"),l.a.createElement(g,{people:n}))},P=function(){return l.a.createElement("h2",null,"NotFoundPage")},j=(n(31),function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"People table"),l.a.createElement(o,null),l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/",exact:!0},l.a.createElement(p,null)),l.a.createElement(m.b,{path:"/people"},l.a.createElement(N,null)),l.a.createElement(m.a,{path:"/home",to:"/"}),l.a.createElement(P,null)))});c.a.render(l.a.createElement(u.a,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.075af80d.chunk.js.map