"use strict";(self.webpackChunkwallet_application=self.webpackChunkwallet_application||[]).push([[323],{87384:function(e,n,t){t.d(n,{y:function(){return o}});var a="Balance_balance__tUx3D",r="Balance_title__aUwwk",s="Balance_amount__t4xet",i=t(80184),o=function(){return(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)("p",{className:r,children:"YOUR BALANCE"}),(0,i.jsx)("p",{className:s,children:"PLN 0.00"})]})}},20820:function(e,n,t){t.d(n,{w:function(){return d}});var a=t(15861),r=t(29439),s=t(64687),i=t.n(s),o=t(72791),c=t(55294),l={tableBg:"CurrencyTable_tableBg__nplZ5",currencyTable:"CurrencyTable_currencyTable__1iH+4",currencyTableHead:"CurrencyTable_currencyTableHead__0L-k0"},u=t(80184),d=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=localStorage.getItem("authToken")){e.next=5;break}return console.error("No auth token found"),e.abrupt("return");case 5:return e.next=7,c.Z.get("http://localhost:3000/api/currencies",{headers:{Authorization:"Bearer ".concat(n)}});case 7:t=e.sent,s(t.data.data.currencies),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching currencies",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,u.jsx)("div",{className:l.tableBg,children:(0,u.jsxs)("table",{className:l.currencyTable,children:[(0,u.jsx)("thead",{className:l.currencyTableHead,children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Currency"}),(0,u.jsx)("th",{children:"Purchase"}),(0,u.jsx)("th",{children:"Sell"})]})}),(0,u.jsx)("tbody",{className:l.currencyTableBody,children:t.map((function(e){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e.code}),(0,u.jsx)("td",{children:e.bid}),(0,u.jsx)("td",{children:e.ask})]},e._id)}))})]})})}},52959:function(e,n,t){t.d(n,{Z:function(){return d}});t(72791);var a=t(57689),r=t(11087),s="ActiveNavLink_link__Srke3",i="ActiveNavLink_active__uzCgI",o=t(80184),c=function(e){var n=e.to,t=e.children,c=(0,a.WU)(n),l=(0,a.bS)({path:c.pathname,end:!0})?i:s;return(0,o.jsx)(r.OL,{to:n,className:l,children:t})},l={icon:"Navigation_icon__lPT0N"},u=t(13439),d=function(){return(0,o.jsx)("nav",{children:(0,o.jsxs)("ul",{className:l.navigation,children:[(0,o.jsx)("li",{children:(0,o.jsxs)(c,{to:"/home",children:[(0,o.jsx)("svg",{className:l.icon,width:"38px",height:"38px",children:(0,o.jsx)("use",{href:"".concat(u.Z,"#icon-home3")})}),"Home"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)(c,{to:"/statistics",children:[(0,o.jsx)("svg",{className:l.icon,width:"38px",height:"38px",children:(0,o.jsx)("use",{href:"".concat(u.Z,"#icon-baseline-timeline")})}),"Statistics"]})})]})})}},48541:function(e,n,t){t.d(n,{Aq:function(){return j},xu:function(){return g},zx:function(){return h},II:function(){return B},U0:function(){return b},TR:function(){return q.T},GG:function(){return d}});var a=t(55705),r=t(8007),s=t(57689),i=t(59434),o=t(18071),c=t(47380),l="RegistrationForm_registration-form__tvXg0",u=t(80184),d=function(){var e,n,t,d,m=(0,i.I0)(),p=(0,s.s0)(),x=(0,i.v9)(c.up),f=null!==x&&void 0!==x&&null!==(e=x.namePattern)&&void 0!==e&&e.pattern?new RegExp(x.namePattern.pattern):null,v=null!==x&&void 0!==x&&null!==(n=x.passwordPattern)&&void 0!==n&&n.pattern?new RegExp(x.passwordPattern.pattern):null,b=r.Ry().shape({name:r.Z_().matches(f,(null===x||void 0===x||null===(t=x.namePattern)||void 0===t?void 0:t.description)||"Invalid name format").required("Name is required").min(3,"Name should be at least 3 characters").max(20,"Name should be at most 20 characters"),email:r.Z_().email("Invalid email").required("Email is required"),password:r.Z_().matches(v,(null===x||void 0===x||null===(d=x.passwordPattern)||void 0===d?void 0:d.description)||"Invalid password format").required("Password is required").min(6,"Password should be at least 6 characters").max(20,"Password should be at most 20 characters"),confirmPassword:r.Z_().oneOf([r.iH("password"),null],"Passwords must match").required("Confirm password is required")});return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.J9,{initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:b,onSubmit:function(e,n){n.setSubmitting;var t=n.resetForm;m((0,o.y1)({name:e.name,email:e.email,password:e.password})),t()},children:function(){return(0,u.jsxs)(a.l0,{className:l,autoComplete:"off",children:[(0,u.jsx)(B,{type:"text",name:"name",placeholder:"First name",iconID:"icon-baseline-account_box"}),(0,u.jsx)(B,{type:"email",name:"email",placeholder:"E-mail",iconID:"icon-baseline-email"}),(0,u.jsx)(B,{type:"password",name:"password",placeholder:"Password",autoComplete:"off",iconID:"icon-baseline-lock"}),(0,u.jsx)(B,{type:"password",name:"confirmPassword",placeholder:"Confirm password",autoComplete:"off",iconID:"icon-baseline-lock"}),(0,u.jsx)(h,{type:"submit",theme:"color",children:"Register"}),(0,u.jsx)(h,{type:"button",theme:"white",onClick:function(){return p("/login")},children:"Log in"})]})}})})},m={button:"Button_button__JBBzO","button-white":"Button_button-white__8-Y8O","button-color":"Button_button-color__qDUYL"},h=function(e){var n=e.children,t=e.type,a=void 0===t?"button":t,r=e.theme,s=e.className,i=e.onClick,o="color"===r?m["button-color"]:"white"===r?m["button-white"]:"";return(0,u.jsx)("button",{className:"".concat(m.Button," ").concat(o," ").concat(s),type:a,onClick:i,children:n})},p=t(15861),x=t(64687),f=t.n(x),v="LoginForm_login-form__o6Oo+",b=function(){var e,n,t=(0,i.I0)(),l=(0,s.s0)(),d=(0,i.v9)(c.up),m=null!==d&&void 0!==d&&null!==(e=d.passwordPattern)&&void 0!==e&&e.pattern?new RegExp(d.passwordPattern.pattern):null,x=r.Ry().shape({email:r.Z_().email("Invalid email").required("Email is required"),password:r.Z_().matches(m,(null===d||void 0===d||null===(n=d.passwordPattern)||void 0===n?void 0:n.description)||"Invalid password format").required("Password is required").min(6,"Password should be at least 6 characters").max(20,"Password should be at most 20 characters")}),b=function(){var e=(0,p.Z)(f().mark((function e(n,a){var r,s,i,c;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.setSubmitting,s=a.resetForm,e.prev=1,e.next=4,t((0,o.zB)({email:n.email,password:n.password})).unwrap();case 4:i=e.sent,c=i.token,localStorage.setItem("authToken",c),s(),l("/home"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("B\u0142\u0105d logowania:",e.t0);case 14:return e.prev=14,r(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.J9,{initialValues:{email:"",password:""},validationSchema:x,onSubmit:b,children:function(){return(0,u.jsxs)(a.l0,{className:v,autoComplete:"off",children:[(0,u.jsx)(B,{type:"email",name:"email",placeholder:"E-mail",iconID:"icon-baseline-email"}),(0,u.jsx)(B,{type:"password",name:"password",placeholder:"Password",autoComplete:"off",iconID:"icon-baseline-lock"}),(0,u.jsx)(h,{type:"submit",theme:"color",children:"Log in"}),(0,u.jsx)(h,{type:"button",theme:"white",onClick:function(){return l("/register")},children:"Register"})]})}})})},_="Background_background__syS0M",j=function(){return(0,u.jsx)("div",{className:_})},w="Box_box__YJIlx",g=function(e){var n=e.children,t=e.className;return(0,u.jsx)("div",{className:"".concat(w," ").concat(t),children:n})},y=t(1413),N=t(29439),k=t(44925),I=t(13439),S="Input_box__8gunV",C="Input_form-input__IGnal",P="Input_error-message__98oTL",Z=["iconID"],B=function(e){var n=e.iconID,t=(0,k.Z)(e,Z),r=(0,a.U$)(t),s=(0,N.Z)(r,2),i=s[0],o=s[1];return(0,u.jsxs)("div",{className:S,children:[(0,u.jsx)("input",(0,y.Z)((0,y.Z)({className:C},i),t)),(0,u.jsx)("svg",{width:"20px",height:"20px",children:(0,u.jsx)("use",{href:"".concat(I.Z,"#").concat(n)})}),o.touched&&o.error?(0,u.jsx)("div",{className:P,children:o.error}):null]})},q=t(35222)},31323:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(29439),r={statsContainer:"Stats_statsContainer__0UttW",charts:"Stats_charts__cVmoi",selectors:"Stats_selectors__S6SvL"},s=t(72791),i=t(35967),o=t(43623),c=t(80184);i.kL.register(i.qi,i.u,i.De);var l=function(){return(0,c.jsx)("div",{style:{width:"350px",height:"350px"},children:(0,c.jsx)(o.$I,{options:{plugins:{legend:{position:"top"},title:{display:!0,text:"Statistics in total"}}},data:{labels:["Expenses","Incomes"],datasets:[{label:"Amount",data:[5e3,4300],backgroundColor:["rgba(255, 99, 132)","rgba(75, 192, 192)"],hoverBackgroundColor:["rgba(255, 99, 162)","rgba(75, 192, 202)"],borderColor:["rgba(255, 99, 132, 1)","rgba(75, 192, 192, 1)"],borderWidth:1}]}})})},u=t(90740),d=t.n(u);i.kL.register(i.uw,i.f$,i.ZL,i.Dx,i.u,i.De);var m=function(){var e=["January","February","March","April","May","June","July"],n={labels:e,datasets:[{label:"Expenses",data:e.map((function(){return d().datatype.number({min:0,max:1e4})})),backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Incomes",data:e.map((function(){return d().datatype.number({min:0,max:1e4})})),backgroundColor:"rgba(75, 192, 192)"}]};return(0,c.jsx)("div",{style:{width:"450px",height:"450px"},children:(0,c.jsx)(o.$Q,{options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Statistics in months"}}},data:n})})},h=t(80534),p=function(){var e=(0,s.useState)(null),n=(0,a.Z)(e,2),t=n[0],i=n[1];return(0,c.jsxs)("div",{className:r.statsContainer,children:["Statistics",(0,c.jsxs)("div",{className:r.charts,children:[(0,c.jsx)(l,{}),(0,c.jsx)(m,{})]}),(0,c.jsxs)("div",{className:r.selections,children:["Select values",(0,c.jsx)("div",{className:r.selectors,children:(0,c.jsx)(h.ZP,{options:[{value:"expenses",label:"Expenses"},{value:"incomes",label:"Incomes"}],value:t,onChange:function(e){i(e)}})})]})]})},x={container:"Statistics_container__88ahX",sidebar:"Statistics_sidebar__Qylm+",main:"Statistics_main__LSNEX"},f=t(20820),v=t(87384),b=t(52959),_=t(48541),j=t(54270),w=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(j.q,{children:(0,c.jsx)("title",{children:"Statistics"})}),(0,c.jsx)(_.Aq,{}),(0,c.jsx)("section",{className:x.dashboard_container,children:(0,c.jsxs)("div",{className:x.container,children:[(0,c.jsxs)("div",{className:x.sidebar,children:[(0,c.jsx)(b.Z,{}),(0,c.jsx)(v.y,{}),(0,c.jsx)(f.w,{})]}),(0,c.jsx)("div",{className:x.main,children:(0,c.jsx)(p,{})})]})})]})}},47380:function(e,n,t){t.d(n,{IZ:function(){return a},up:function(){return r}});var a=function(e){return e.global.isModalAddTransactionOpen},r=function(e){return e.global.patterns}}}]);
//# sourceMappingURL=323.7d89a3c1.chunk.js.map