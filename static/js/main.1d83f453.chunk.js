(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),o=n(10),r=n.n(o),c=n(8),i=n(6),l=n(7),s=n(2),u=n(3),b=n(5),d=n(4),f=(n(16),n(0)),m=function(t){var e=t.value,n=t.onSearch;return Object(f.jsx)("input",{className:"form-control search-input",placeholder:"Search",onChange:function(t){return n(t.target.value)},value:e})},j=n(11),h=(n(18),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).onToggleStatus=function(e){t.props.onToggleImportant()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.label,a=e.onDelete,o=e.onToggleDone,r=e.important,c="todo-list-item";e.done&&(c+=" done"),r&&(c+=" important");var i=r?"btn btn-outline-danger btn-sm float-right mr-2 active":"btn btn-outline-danger btn-sm float-right mr-2";return Object(f.jsxs)("span",{className:c,children:[Object(f.jsx)("span",{className:"todo-list-item-label",onClick:o,children:n}),Object(f.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-sm float-right",onClick:a,children:Object(f.jsx)("i",{className:"fa fa-trash-o"})}),Object(f.jsx)("button",{type:"button",className:i,onClick:function(e){return t.onToggleStatus(e)},children:Object(f.jsx)("i",{className:"fa fa-exclamation"})})]})}}]),n}(a.Component)),p=(n(19),function(t){var e=t.items,n=t.onDelete,a=t.onToggleDone,o=t.onToggleImportant;return Object(f.jsx)("ul",{className:"list-group todo-list",children:e.map((function(t){var e=t.id,r=Object(j.a)(t,["id"]);return Object(f.jsx)("li",{className:"list-group-item",children:Object(f.jsx)(h,Object(i.a)(Object(i.a)({},r),{},{onDelete:function(){return n(e)},onToggleImportant:function(){return o(e)},onToggleDone:function(){return a(e)}}))},e)}))})}),g=(n(20),function(t){var e=t.toDo,n=t.done;return Object(f.jsxs)("div",{className:"app-header d-flex",children:[Object(f.jsx)("h1",{children:"Todo List"}),Object(f.jsxs)("h2",{children:[n," done, ",e," pending"]})]})}),O=(n(21),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsx)("div",{className:"btn-group",children:[{name:"all",label:"All"},{name:"active",label:"Pending"},{name:"done",label:"Done"}].map((function(e){var n=t.props.filter===e.name?"btn btn-info":"btn btn-outline-secondary";return Object(f.jsx)("button",{type:"button",id:e.name,className:n,onClick:function(e){t.props.onSwitch(e.target.id)},children:e.label})}))})}}]),n}(a.Component)),v=(n(22),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onAdd(t.state.label),t.setState({label:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit,children:[Object(f.jsx)("input",{required:!0,type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done?",value:this.state.label}),Object(f.jsx)("button",{className:"btn btn-outline-secondary",children:"Add item"})]})}}]),n}(a.Component)),x=(n(23),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={items:[t.createNewItem("Have coffee"),t.createNewItem("Eat lunch"),t.createNewItem("Code")],pattern:"",filter:"all"},t.deleteItem=function(e){t.setState((function(t){var n=t.items,a=n.findIndex((function(t){return t.id===e}));return{items:[].concat(Object(l.a)(n.slice(0,a)),Object(l.a)(n.slice(a+1)))}}))},t.addItem=function(e){var n=t.createNewItem(e);t.setState((function(t){var e=t.items;return{items:[].concat(Object(l.a)(e),[n])}}))},t.toggleStatus=function(t,e,n){var a=t.findIndex((function(t){return t.id===e})),o=t[a],r=Object(i.a)(Object(i.a)({},o),{},Object(c.a)({},n,!o[n]));return[].concat(Object(l.a)(t.slice(0,a)),[r],Object(l.a)(t.slice(a+1)))},t.toggleDone=function(e){t.setState((function(n){var a=n.items;return{items:t.toggleStatus(a,e,"done")}}))},t.toggleImportant=function(e){t.setState((function(n){var a=n.items;return{items:t.toggleStatus(a,e,"important")}}))},t.searchItems=function(e){t.setState((function(){return{pattern:e}}))},t.onSwitchFilter=function(e){t.setState({filter:e})},t}return Object(u.a)(n,[{key:"createNewItem",value:function(t){return{label:t,important:!1,done:!1,id:Math.random()}}},{key:"render",value:function(){var t=this.state,e=t.items,n=t.pattern,a=t.filter,o=e.filter((function(t){return!0===t.done})).length,r=e.length-o,c=e.filter((function(t){return t.label.toLowerCase().indexOf(n.toLowerCase())>-1})).filter((function(t){return"done"===a?!0===t.done:"active"===a?!1===t.done:t}));return Object(f.jsxs)("div",{className:"todo-app",children:[Object(f.jsx)(g,{toDo:r,done:o}),Object(f.jsxs)("div",{className:"top-panel d-flex",children:[Object(f.jsx)(m,{value:n,onSearch:this.searchItems}),Object(f.jsx)(O,{filter:a,onSwitch:this.onSwitchFilter})]}),Object(f.jsx)(p,{items:c,onDelete:this.deleteItem,onToggleDone:this.toggleDone,onToggleImportant:this.toggleImportant}),Object(f.jsx)(v,{onAdd:this.addItem})]})}}]),n}(a.Component));n(24);r.a.render(Object(f.jsx)(x,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.1d83f453.chunk.js.map