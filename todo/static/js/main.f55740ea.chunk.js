(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(35)},,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),c=n.n(i),l=(n(17),n(19),n(8)),r=n(7),s=n(2),u=n(3),d=n(5),b=n(4),m=n(6),f=n(1),p=(n(21),function(e){var t=e.liked,n=e.allPosts;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"React App"),o.a.createElement("h2",null,n," postid, meeldisid neist ",t))}),h=(n(23),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={term:""},n.onUpdateSearch=n.onUpdateSearch.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onUpdateSearch",value:function(e){var t=e.target.value;this.setState({term:t}),this.props.onUpdateSearch(t)}},{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"Otsi posti",onChange:this.onUpdateSearch})}}]),t}(a.Component)),g=(n(25),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).buttons=[{name:"all",label:"K\xf5ik"},{name:"like",label:"Meeldis"}],n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.buttons.map(function(t){var n=t.name,a=t.label,i=e.props,c=i.filter,l=i.onFilterSelect,r="btn"+(c===n?" btn-info":" btn-outline-secondary");return o.a.createElement("button",{key:n,type:"button",className:r,onClick:function(){return l(n)}},a)});return o.a.createElement("div",{className:"btn-group"},t)}}]),t}(a.Component)),j=n(11),O=(n(27),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDelete,a=e.onToggleImportant,i=e.onToggleLiked,c=e.onToggleDone,l=e.done,r=e.like,s=e.important,u="app-list-item d-flex justify-content-between";return s&&(u+=" important"),r&&(u+=" like"),l&&(u+=" done"),o.a.createElement("div",{className:u},o.a.createElement("span",{className:"app-list-item-label",onClick:i},t),o.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},o.a.createElement("button",{type:"button",className:"btn-star btn-sm ".concat(s?"active":""),onClick:a},o.a.createElement("i",{className:"fa fa-star"})),o.a.createElement("button",{type:"button",className:"btn-trash btn-sm",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("i",{className:"fa fa-heart"}),o.a.createElement("button",{type:"button",className:"btn-done",onClick:c},o.a.createElement("i",{className:"fa fa-check"}))))}}]),t}(a.Component)),k=(n(29),function(e){var t=e.posts,n=e.onDelete,a=e.onToggleImportant,i=e.onToggleLiked,c=e.onToggleDone,l=t.map(function(e){var t=e.id,l=Object(j.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(O,Object.assign({},l,{onDelete:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleLiked:function(){return i(t)},onToggleDone:function(){return c(t)}})))});return o.a.createElement("ul",{className:"app-list list-group"},l)}),v=(n(31),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={text:""},n.onValueChange=n.onValueChange.bind(Object(f.a)(Object(f.a)(n))),n.onSubmit=n.onSubmit.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onValueChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return o.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",placeholder:"Millest sa praegu m\xf5tled?",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),o.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),t}(a.Component)),y=(n(33),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={data:[{label:"Going to learn React",important:!0,like:!1,done:!0,id:1},{label:"That is so good",important:!1,like:!1,done:!1,id:2},{label:"I need a break",important:!1,like:!1,done:!1,id:3}],term:"",filter:"all"},n.deleteItem=n.deleteItem.bind(Object(f.a)(Object(f.a)(n))),n.addItem=n.addItem.bind(Object(f.a)(Object(f.a)(n))),n.onToggleImportant=n.onToggleImportant.bind(Object(f.a)(Object(f.a)(n))),n.onToggleLiked=n.onToggleLiked.bind(Object(f.a)(Object(f.a)(n))),n.onUpdateSearch=n.onUpdateSearch.bind(Object(f.a)(Object(f.a)(n))),n.onFilterSelect=n.onFilterSelect.bind(Object(f.a)(Object(f.a)(n))),n.onToggleDone=n.onToggleDone.bind(Object(f.a)(Object(f.a)(n))),n.maxId=4,n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"deleteItem",value:function(e){this.setState(function(t){var n=t.data,a=n.findIndex(function(t){return t.id===e});return{data:[].concat(Object(r.a)(n.slice(0,a)),Object(r.a)(n.slice(a+1)))}})}},{key:"addItem",value:function(e){var t={label:e,important:!1,id:this.maxId++};this.setState(function(e){var n=e.data;return{data:[].concat(Object(r.a)(n),[t])}})}},{key:"onToggleImportant",value:function(e){this.setState(function(t){var n=t.data,a=n.findIndex(function(t){return t.id===e}),o=n[a],i=Object(l.a)({},o,{important:!o.important});return{data:[].concat(Object(r.a)(n.slice(0,a)),[i],Object(r.a)(n.slice(a+1)))}})}},{key:"onToggleLiked",value:function(e){this.setState(function(t){var n=t.data,a=n.findIndex(function(t){return t.id===e}),o=n[a],i=Object(l.a)({},o,{like:!o.like});return{data:[].concat(Object(r.a)(n.slice(0,a)),[i],Object(r.a)(n.slice(a+1)))}})}},{key:"seachPosts",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.indexOf(t)>-1})}},{key:"filterPosts",value:function(e,t){return"like"===t?e.filter(function(e){return e.like}):e}},{key:"onUpdateSearch",value:function(e){this.setState({term:e})}},{key:"onFilterSelect",value:function(e){this.setState({filter:e})}},{key:"onToggleDone",value:function(e){this.setState(function(t){var n=t.data,a=n.findIndex(function(t){return t.id===e}),o=n[a],i=Object(l.a)({},o,{done:!o.done});return{data:[].concat(Object(r.a)(n.slice(0,a)),[i],Object(r.a)(n.slice(a+1)))}})}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,i=t.filter(function(e){return e.like}).length,c=t.length,l=this.filterPosts(this.seachPosts(t,n),a);return o.a.createElement("div",{className:"app"},o.a.createElement(p,{liked:i,allPosts:c}),o.a.createElement("div",{className:"search-panel d-flex"},o.a.createElement(h,{onUpdateSearch:this.onUpdateSearch}),o.a.createElement(g,{filter:a,onFilterSelect:this.onFilterSelect})),o.a.createElement(k,{posts:l,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked,onToggleDone:this.onToggleDone}),o.a.createElement(v,{onAdd:this.addItem}))}}]),t}(a.Component));c.a.render(o.a.createElement(y,null),document.getElementById("root"))}],[[12,2,1]]]);
//# sourceMappingURL=main.f55740ea.chunk.js.map