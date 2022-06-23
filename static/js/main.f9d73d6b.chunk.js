(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{13:function(e,t,n){e.exports={header:"Header_header__3mObx"}},14:function(e,t,n){e.exports={profile:"UserProfile_profile__1BiAu"}},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(10),i=n.n(r),o=(n(22),n(7)),s=n.n(o),u=n(2),a=n(3),j=Object(a.b)({name:"counter",initialState:{counter:0,showCounter:!0},reducers:{increment:function(e){e.counter++},decrement:function(e){e.counter--},increase:function(e,t){e.counter+=t.payload},toggleCounter:function(e){e.showCounter=!e.showCounter}}}),l=j.actions,b=j.reducer,d=n(1),h=function(){var e=Object(u.c)((function(e){return e.counter.counter})),t=Object(u.b)(),n=Object(u.c)((function(e){return e.counter.showCounter}));return Object(d.jsxs)("main",{className:s.a.counter,children:[Object(d.jsx)("h1",{children:"Redux Counter"}),n&&Object(d.jsx)("div",{className:s.a.value,children:e}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){t(l.increment())},children:"Increment"}),Object(d.jsx)("button",{onClick:function(){t(l.increase(10))},children:"Increase By 10"}),Object(d.jsx)("button",{onClick:function(){t(l.decrement())},children:"Decrement"})]}),Object(d.jsx)("button",{onClick:function(){t(l.toggleCounter())},children:"Toggle Counter"})]})},O=n(13),x=n.n(O),f=Object(a.b)({name:"authentication",initialState:{isAuthenticated:!1},reducers:{login:function(e){e.isAuthenticated=!0},logout:function(e){e.isAuthenticated=!1}}}),m=f.actions,p=f.reducer,_=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth.isAuthenticated}));return Object(d.jsxs)("header",{className:x.a.header,children:[Object(d.jsx)("h1",{children:"Redux Auth"}),t&&Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",children:"My Products"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",children:"My Sales"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){e(m.logout())},children:"Logout"})})]})})]})},v=n(4),C=n.n(v),g=function(){var e=Object(u.b)();return Object(d.jsx)("main",{className:C.a.auth,children:Object(d.jsx)("section",{children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(m.login())},children:[Object(d.jsxs)("div",{className:C.a.control,children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{type:"email",id:"email"})]}),Object(d.jsxs)("div",{className:C.a.control,children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",id:"password"})]}),Object(d.jsx)("button",{children:"Login"})]})})})},w=n(14),A=n.n(w),k=function(){return Object(d.jsx)("main",{className:A.a.profile,children:Object(d.jsx)("h2",{children:"My User Profile"})})};var y=function(){var e=Object(u.c)((function(e){return e.auth.isAuthenticated}));return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(_,{}),!e&&Object(d.jsx)(g,{}),e&&Object(d.jsx)(k,{}),Object(d.jsx)(h,{})]})},N=Object(a.a)({reducer:{counter:b,auth:p}});i.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(u.a,{store:N,children:Object(d.jsx)(y,{})}))},4:function(e,t,n){e.exports={auth:"Auth_auth__3QLaR",control:"Auth_control__3bkp4"}},7:function(e,t,n){e.exports={counter:"Counter_counter__1U4hj",value:"Counter_value__2JpT-"}}},[[29,1,2]]]);
//# sourceMappingURL=main.f9d73d6b.chunk.js.map