(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n(20),c=n.n(a),r=n(8),i=n(13),s=n(10),l=n.n(s),u=n(12),d=n(16),b=n(7),j=(n(28),n(1)),m=function(e){var t=e.value,n=e.onSearch;return Object(j.jsx)("input",{className:"form-control search-input",placeholder:"Search",onChange:function(e){return n(e.target.value)},value:t})},f=n(22),p=(n(30),function(e){var t=e.label,n=e.onDelete,o=e.onToggleDone,a=e.onToggleImportant,c=e.important,r=e.done,i=e.darkmode,s=i?"todo-list-item darkmode":"todo-list-item";r&&(s+=" done"),c&&(s+=" important");var l=c?"btn btn-outline-danger btn-sm float-right mr-2 active":"btn btn-outline-danger btn-sm float-right mr-2";return Object(j.jsxs)("div",{className:s,"data-todoitem":!0,children:[Object(j.jsx)("div",{className:"todo-list-item-label",onClick:o,children:t}),Object(j.jsxs)("div",{className:"todo-btn-group",children:[Object(j.jsx)("button",{type:"button",className:i?l+" darkmode":l,onClick:a,children:Object(j.jsx)("i",{className:"fa fa-exclamation"})}),Object(j.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-sm float-right",onClick:n,children:Object(j.jsx)("i",{className:"fa fa-trash-o"})})]})]})}),h=(n(31),function(e){var t=e.items,n=e.onDelete,o=e.onToggleDone,a=e.onToggleImportant,c=e.darkmode;return Object(j.jsx)("ul",{className:"list-group todo-list",children:t.map((function(e){var t=e.id,i=Object(f.a)(e,["id"]);return Object(j.jsx)("li",{className:c?"list-group-item darkmode":"list-group-item",children:Object(j.jsx)(p,Object(r.a)(Object(r.a)({},i),{},{onDelete:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return o(t)},darkmode:c}))},t)}))})}),O=(n(32),function(e){var t=e.toDo,n=e.done;return Object(j.jsxs)("div",{className:"app-header d-flex",children:[Object(j.jsx)("h1",{children:"ToDo List"}),Object(j.jsxs)("h2",{children:[n," done, ",t," pending"]})]})}),x=(n(33),function(e){return Object(j.jsx)("div",{className:"btn-group",children:[{name:"all",label:"All"},{name:"active",label:"Pending"},{name:"done",label:"Done"}].map((function(t){var n=e.filter===t.name?"btn btn-info":"btn btn-outline-secondary";return Object(j.jsx)("button",{type:"button",id:t.name,className:n,onClick:function(t){e.onSwitch(t.target.id)},children:t.label},t.name)}))})}),g=(n(34),function(e){var t=Object(o.useState)(""),n=Object(b.a)(t,2),a=n[0],c=n[1];return Object(j.jsxs)("form",{className:"item-add-form d-flex",onSubmit:function(t){t.preventDefault(),e.onAdd(a),c("")},children:[Object(j.jsx)("input",{required:!0,type:"text",className:"form-control",onChange:function(e){c(e.target.value)},placeholder:"What needs to be done?",value:a}),Object(j.jsx)("button",{className:"btn btn-outline-secondary",children:"Add item"})]})}),v=(n(35),n(36),function(e){var t=Object(o.useState)(""),n=Object(b.a)(t,2),a=n[0],c=n[1];return Object(j.jsxs)("form",{className:"item-add-form d-flex",onSubmit:function(t){t.preventDefault(),e.onLogin(a),c("")},children:[Object(j.jsx)("input",{required:!0,type:"text",className:"form-control",onChange:function(e){c(e.target.value)},placeholder:"Enter your name",value:a}),Object(j.jsx)("button",{className:"btn btn-outline-secondary",children:"Login"})]})}),N=n(17);n(41);N.a.initializeApp({apiKey:"AIzaSyDwUxxk_ce9eeG2OCgpHJnXB63LqRarWvk",authDomain:"todo-app-c1a38.firebaseapp.com",databaseURL:"https://todo-app-c1a38-default-rtdb.europe-west1.firebasedatabase.app",projectId:"todo-app-c1a38",storageBucket:"todo-app-c1a38.appspot.com",messagingSenderId:"449895565577",appId:"1:449895565577:web:5c9aad265847e3de21abd8"});var k=N.a.firestore(),w=(N.a,n(38),function(e){var t=e.darkmode;return Object(j.jsxs)("div",{className:t?"footer darkmode":"footer",children:[Object(j.jsx)("div",{className:"footer_social_title",children:"Find us on social media:"}),Object(j.jsxs)("div",{className:"footer_social_icons",children:[Object(j.jsx)("a",{href:"https://github.com/ssmirnovacode/ToDo-App",target:"blank",children:Object(j.jsx)("i",{className:"sm-icon fa fa-facebook-square"})}),Object(j.jsx)("a",{href:"https://github.com/ssmirnovacode/ToDo-App",target:"blank",children:Object(j.jsx)("i",{className:"sm-icon fa fa-linkedin-square"})}),Object(j.jsx)("a",{href:"https://github.com/ssmirnovacode/ToDo-App",target:"blank",children:Object(j.jsx)("i",{className:"sm-icon fa fa-github-square"})})]})]})}),y=function(){var e=localStorage.getItem("user")||"",t=Object(o.useState)([]),n=Object(b.a)(t,2),a=n[0],c=n[1],s=Object(o.useState)(""),f=Object(b.a)(s,2),p=f[0],N=f[1],y=Object(o.useState)("all"),S=Object(b.a)(y,2),D=S[0],I=S[1],T=Object(o.useState)(!1),C=Object(b.a)(T,2),A=C[0],L=C[1],q=Object(o.useState)(!1),E=Object(b.a)(q,2),F=E[0],_=E[1];Object(o.useEffect)((function(){k.collection("items").get().then((function(e){var t=function(e){var t=[];return e.forEach((function(e){t.push(Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id}))})),t}(e);c(t)})).catch((function(e){return console.error(e.message)}))}),[]);var B=function(e){return{label:e,important:!1,done:!1,owner:localStorage.getItem("user"),id:(1e8*Math.random()).toString()}},J=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=B(t),e.next=3,k.collection("items").doc(n.id).set(n);case 3:c((function(e){return[].concat(Object(u.a)(e),[n])}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this item?")){e.next=6;break}return e.next=3,k.doc("items/".concat(t)).delete();case 3:n=a.findIndex((function(e){return e.id===t})),o=[].concat(Object(u.a)(a.slice(0,n)),Object(u.a)(a.slice(n+1))),c(o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(l.a.mark((function e(t,n,o){var s,d,b,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.find((function(e){return e.id===n})),e.next=3,k.doc("items/".concat(n)).update(Object(i.a)({},o,!s[o]),(function(e){throw new Error(e)}));case 3:d=t.findIndex((function(e){return e.id===n})),b=Object(r.a)(Object(r.a)({},a[d]),{},Object(i.a)({},o,!s[o])),j=[].concat(Object(u.a)(a.slice(0,d)),[b],Object(u.a)(a.slice(d+1))),c(j);case 7:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}(),H=a&&a.filter((function(t){return t.owner===e})).filter((function(e){return e.label.toLowerCase().indexOf(p.toLowerCase())>-1})).filter((function(e){return"done"===D?!0===e.done:"active"===D?!1===e.done:e})),R=a.filter((function(t){return t.owner===e})),U=R.filter((function(e){return!0===e.done})).length,W=R.length-U,G=A?Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"user-panel d-flex",children:[Object(j.jsxs)("div",{className:"greeting mr-2",children:["Hello, ",e]}),Object(j.jsx)("button",{className:"btn btn-outline-secondary logout",onClick:function(){return L(!1)},children:"Log out"})]})}):null,K=A?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{toDo:W,done:U}),Object(j.jsxs)("div",{className:"top-panel d-flex",children:[Object(j.jsx)(m,{value:p,onSearch:function(e){N(e)}}),Object(j.jsx)(x,{filter:D,onSwitch:function(e){I(e)}})]}),Object(j.jsx)(h,{darkmode:F,items:H,onDelete:P,onToggleDone:function(e){z(a,e,"done")},onToggleImportant:function(e){z(a,e,"important")}}),Object(j.jsx)(g,{onAdd:J})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"ToDo List"}),Object(j.jsx)(v,{onLogin:function(e){localStorage.setItem("user",e),L(!0)}}),Object(j.jsxs)("div",{className:"descr mt-2",children:["Please log in. No password required.",Object(j.jsx)("br",{}),"To create a new user just type your username.",Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:"Please note that our todo items will be available to anyone who logs in with your username"})]})]});return Object(j.jsxs)("div",{className:F?"todo-app darkmode":"todo-app",children:[G,Object(j.jsxs)("div",{className:"dark-toggle custom-control custom-switch mt-3 mb-2",children:[Object(j.jsx)("label",{className:"custom-control-label",htmlFor:"customSwitch1",children:"Dark mode"}),Object(j.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customSwitch1",value:F,onChange:function(){_(!F)}})]}),K,Object(j.jsx)(w,{darkmode:F})]})};n(39);c.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8d4c4ce8.chunk.js.map