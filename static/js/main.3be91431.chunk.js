(this["webpackJsonpreact-redux-thunk-blog"]=this["webpackJsonpreact-redux-thunk-blog"]||[]).push([[0],{29:function(e,t,n){e.exports=n(58)},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),s=n.n(c),i=n(3),u=n(6),o=n(26),l=n(8),d=n(9),p=n(11),m=n(10),f=n(12),h=n(5),v=n.n(h),b=n(27),y=n.n(b).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),E=function(e){return function(t){var n;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(y.get("/users/".concat(e)));case 2:n=a.sent,t({type:"FETCH_USER",payload:n.data});case 4:case"end":return a.stop()}}))}},j=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.user;return e?r.a.createElement("span",null,e.name):null}}]),t}(r.a.Component),O=Object(u.b)((function(e,t){return{user:e.users.find((function(e){return e.id===t.userId}))}}))(j),g=["tom","christian","helen","elliot","daniel","stevie","matt","jenny","veronika"],w=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map((function(e){var t=e.id,n=e.userId,a=e.title,c=e.body,s=g[n%g.length];return r.a.createElement("div",{className:"ui item",key:t},r.a.createElement("div",{className:"ui tiny image"},r.a.createElement("img",{src:"https://semantic-ui.com/images/avatar/large/".concat(s,".jpg"),alt:""})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},a),r.a.createElement("div",{className:"meta"},r.a.createElement(O,{userId:n})),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,c))))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui relaxed divided items"},this.renderList())}}]),t}(r.a.Component),k=Object(u.b)((function(e){return{posts:e.posts}}),{fetchPostsAndUsers:function(){return function(e,t){var n,a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v.a.awrap(e((function(e){var t;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(y.get("/posts"));case 2:t=n.sent,e({type:"FETCH_POSTS",payload:t.data});case 4:case"end":return n.stop()}}))})));case 2:n=t(),a=n.posts,new Set(a.map((function(e){return e.userId}))).forEach((function(t){return e(E(t))}));case 5:case"end":return r.stop()}}))}}})(w),x=function(){return r.a.createElement("div",{className:"ui raised container segment"},r.a.createElement(k,null))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"FETCH_POSTS":return a;default:return e}},S=n(28),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"FETCH_USER":return[].concat(Object(S.a)(e),[a]);default:return e}},T=Object(i.c)({posts:N,users:C}),I=Object(i.d)(T,Object(i.a)(o.a));s.a.render(r.a.createElement(u.a,{store:I},r.a.createElement(x,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.3be91431.chunk.js.map