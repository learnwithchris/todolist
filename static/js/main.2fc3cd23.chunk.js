(window.webpackJsonptodolist=window.webpackJsonptodolist||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(5),s=a.n(l),c=a(9),m=a(6),r=a(7),d=a(10),o=a(8),u=a(11),h=function(e){return i.a.createElement("li",{className:"list-group-item text-capitalize d-flex justify-content-between my-2"},i.a.createElement("h6",null,e.title),i.a.createElement("div",{className:"todo-icon"},i.a.createElement("span",{className:"mx-2 text-success",onClick:e.handleEdit},i.a.createElement("i",{className:"fas fa-pen"})),i.a.createElement("span",{className:"mx-2 text-danger",onClick:e.handleDelete},i.a.createElement("i",{className:"fas fa-trash"}))))},p=function(e){return i.a.createElement("ul",{className:"list-group my-5"},i.a.createElement("h3",{className:"text-capitalize text-center"},"todo list"),e.items.map((function(t){return i.a.createElement(h,{key:t.id,title:t.title,handleEdit:function(){e.handleEdit(t.id)},handleDelete:function(){return e.handleDelete(t.id)}})})),0===e.items.length?i.a.createElement("p",null,"No items"):i.a.createElement("button",{type:"button",className:"btn btn-danger btn-block text-uppercase mt-5",onClick:e.clearList},"clear list"))},f=a(1),E=a.n(f),b=function(e){return i.a.createElement("div",{className:"card card-body my-3"},i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("div",{className:"input-group-text bg-success text-white"},i.a.createElement("i",{className:"fas fa-book"}))),i.a.createElement("input",{type:"text",className:"form-control text-capitalize",placeholder:"Add item",value:e.item,onChange:e.handleChange})),i.a.createElement("button",{type:"submit",disabled:!e.item,className:"btn btn-block mt-3 text-uppercase ".concat(e.editItem?"btn-success":"btn-primary")},e.editItem?"edit item":"add item")))},N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(o.a)(t).call(this,e))).clearList=function(){a.setState({items:[]})},a.handleChange=function(e){a.setState({item:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t={id:a.state.id,title:a.state.item},n=[].concat(Object(c.a)(a.state.items),[t]);a.setState({items:n,item:"",id:E()(),editItem:!1})},a.handleDelete=function(e){var t=a.state.items.filter((function(t){return t.id!==e}));a.setState({items:t})},a.handleEdit=function(e){var t=a.state.items.filter((function(t){return t.id!==e})),n=a.state.items.find((function(t){return t.id===e}));a.setState({items:t,item:n.title,id:e,editItem:!0})},a.state={items:[{id:1,title:"Learn React"},{id:2,title:"Use functional components"},{id:3,title:"Use state"}],item:"",id:E()(),editItem:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-5"},i.a.createElement(p,{items:this.state.items,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit}),i.a.createElement(b,{item:this.state.item,handleChange:this.handleChange,handleSubmit:this.handleSubmit,editItem:this.state.editItem}))))}}]),t}(i.a.Component);a(19),a(20);s.a.render(i.a.createElement(N,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2fc3cd23.chunk.js.map