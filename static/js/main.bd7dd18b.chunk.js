(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(t,e,o){t.exports=o(35)},28:function(t,e,o){},34:function(t,e,o){},35:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(19),l=o.n(r),c=(o(28),o(16)),i=o(3),s=o(4),u=o(6),d=o(5),p=o(12),m=o(9),f=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("header",{style:h},a.a.createElement("h1",null,"ToDoList"),a.a.createElement(p.b,{to:"/"}," Home "),"|",a.a.createElement(p.b,{to:"/about"}," About "))}}]),o}(n.Component),h={background:"#000",color:"#fff",padding:"10px",textAlign:"center"},b=f,g=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{textDecoration:t.props.todo.completed?"line-through":"none",background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted"}},t.markComplete=function(e){console.log(t.props)},t}return Object(s.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),o,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:v},"x"))}}]),o}(n.Component),v={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right",outline:"none"},y=g,O=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.filter((function(t){return null!==t.id})).sort((function(t,e){return t.title.toLowerCase()!==e.title.toLowerCase()?t.title.toLowerCase()<e.title.toLowerCase()?-1:1:0})).map((function(e){return a.a.createElement(y,{key:e.id,todo:e,delTodo:t.props.delTodo,markComplete:t.props.markComplete})}))}}]),o}(n.Component),j=o(22),C=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){return t.setState(Object(j.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.Addtodo(t.state.title),t.setState({title:""})},t}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),o}(n.Component),E=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the ToDoList v1.0.0. It is part of a react crash course "))}}]),o}(n.Component),k=o(37),S=(o(34),function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){var o=Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})));t.updateTodos(o)},t.Addtodo=function(e){var o={id:Object(k.a)(),title:e,completed:!1},n=[].concat(Object(c.a)(t.state.todos),[o]).sort((function(t,e){return t.title.toLowerCase()!==e.title.toLowerCase()?t.title.toLowerCase()<e.title.toLowerCase()?-1:1:0}));t.updateTodos(n)},t.updateTodos=function(e){localStorage.setItem("todos",JSON.stringify(e)),t.setState({todos:e})},t}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var t=null;null===localStorage.getItem("todos")?(t=[{id:null,title:"placeholder",completed:!0},{id:1,title:"Set up meeting",completed:!1},{id:2,title:"Do grooceries",completed:!1},{id:3,title:"Take out trash",completed:!1}],localStorage.setItem("todos",JSON.stringify(t))):t=JSON.parse(localStorage.getItem("todos")),this.setState({todos:t})}},{key:"render",value:function(){var t=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(b,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{Addtodo:t.Addtodo}),a.a.createElement(O,{todos:t.state.todos,delTodo:t.delTodo,markComplete:t.markComplete}))}}),a.a.createElement(m.a,{path:"/about",component:E}))))}}]),o}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.bd7dd18b.chunk.js.map