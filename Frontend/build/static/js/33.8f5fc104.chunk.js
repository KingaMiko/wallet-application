"use strict";(self.webpackChunkwallet_application=self.webpackChunkwallet_application||[]).push([[33],{87384:function(e,s,a){a.d(s,{y:function(){return o}});var n="Balance_balance__tUx3D",r="Balance_title__aUwwk",t="Balance_amount__t4xet",i=a(80184),o=function(){return(0,i.jsxs)("div",{className:n,children:[(0,i.jsx)("p",{className:r,children:"YOUR BALANCE"}),(0,i.jsx)("p",{className:t,children:"PLN 0.00"})]})}},20820:function(e,s,a){a.d(s,{w:function(){return t}});var n={tableBg:"CurrencyTable_tableBg__nplZ5",currencyTable:"CurrencyTable_currencyTable__1iH+4",currencyTableHead:"CurrencyTable_currencyTableHead__0L-k0"},r=a(80184),t=function(){return(0,r.jsx)("div",{className:n.tableBg,children:(0,r.jsxs)("table",{className:n.currencyTable,children:[(0,r.jsx)("thead",{className:n.currencyTableHead,children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Currency"}),(0,r.jsx)("th",{children:"Purchase"}),(0,r.jsx)("th",{children:"Sell"})]})}),(0,r.jsxs)("tbody",{className:n.currencyTableBody,children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"USD"}),(0,r.jsx)("td",{children:"3,9077"}),(0,r.jsx)("td",{children:"3,9867"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"EUR"}),(0,r.jsx)("td",{children:"4,2895"}),(0,r.jsx)("td",{children:"4,3761"})]})]})]})})}},86017:function(e,s,a){a.d(s,{Aq:function(){return p},zx:function(){return u},U0:function(){return x},GG:function(){return d}});var n=a(55705),r=a(8007),t=a(11087),i={"registration-form":"RegistrationForm_registration-form__tvXg0","error-message":"RegistrationForm_error-message__xXzPo",box:"RegistrationForm_box__y2CqE"},o=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=[]{}'\"\\|,.<>/?~])"),c=new RegExp("^[a-zA-Z\u0105\u0107\u0119\u0142\u0144\xf3\u015b\u017c\u017a\u0104\u0106\u0118\u0141\u0143\xd3\u015a\u017b\u0179]+$"),l=a(80184),d=function(){var e=r.Ry().shape({name:r.Z_().matches(c,"Name can only contains letters").required("Name is required").max(12,"Name should be at most 12 characters"),email:r.Z_().email("Invalid email").required("Email is required"),password:r.Z_().matches(o,"The password should contain at least one uppercase letter, one special character, and one digit").required("Password is required").min(6,"Password should be at least 6 characters").max(12,"Password should be at most 12 characters"),confirmPassword:r.Z_().oneOf([r.iH("password"),null],"Passwords must match").required("Confirm password is required")});return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.J9,{initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:e,onSubmit:function(e,s){s.setSubmitting;alert(JSON.stringify(e))},children:function(){return(0,l.jsxs)(n.l0,{className:i["registration-form"],children:[(0,l.jsxs)("div",{className:i.box,children:[(0,l.jsx)(n.gN,{className:i["form-input"],type:"text",name:"name",placeholder:"First name"}),(0,l.jsx)(n.Bc,{className:i["error-message"],name:"name",component:"div"})]}),(0,l.jsxs)("div",{className:i.box,children:[(0,l.jsx)(n.gN,{className:i["form-input"],type:"email",name:"email",placeholder:"E-mail"}),(0,l.jsx)(n.Bc,{className:i["error-message"],name:"email",component:"div"})]}),(0,l.jsxs)("div",{className:i.box,children:[(0,l.jsx)(n.gN,{className:i["form-input"],type:"password",name:"password",placeholder:"Password",autoComplete:"off"}),(0,l.jsx)(n.Bc,{className:i["error-message"],name:"password",component:"div"})]}),(0,l.jsxs)("div",{className:i.box,children:[(0,l.jsx)(n.gN,{className:i["form-input"],type:"password",name:"confirmPassword",placeholder:"Confirm password",autoComplete:"off"}),(0,l.jsx)(n.Bc,{className:i["error-message"],name:"confirmPassword",component:"div"})]}),(0,l.jsx)(u,{type:"submit",theme:"color",children:"Register"}),(0,l.jsx)(t.rU,{to:"/login",children:(0,l.jsx)(u,{type:"button",theme:"white",children:"Log in"})})]})}})})},m={button:"Button_button__JBBzO","button-white":"Button_button-white__8-Y8O","button-color":"Button_button-color__qDUYL"},u=function(e){var s=e.children,a=e.type,n=void 0===a?"button":a,r=e.theme,t=e.className,i="color"===r?m["button-color"]:"white"===r?m["button-white"]:"";return(0,l.jsx)("button",{className:"".concat(m.Button," ").concat(i," ").concat(t),type:n,children:s})},h={"login-form":"LoginForm_login-form__o6Oo+","error-message":"LoginForm_error-message__KsfSZ",box:"LoginForm_box__s16CP"},x=function(){var e=r.Ry().shape({email:r.Z_().email("Invalid email").required("Email is required"),password:r.Z_().matches(o,"The password should contain at least one uppercase letter, one special character, and one digit").required("Password is required").min(6,"Password should be at least 6 characters").max(12,"Password should be at most 12 characters")});return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.J9,{initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:e,onSubmit:function(e,s){s.setSubmitting;alert(JSON.stringify(e))},children:function(){return(0,l.jsxs)(n.l0,{className:h["login-form"],children:[(0,l.jsxs)("div",{className:h.box,children:[(0,l.jsx)(n.gN,{className:h["form-input"],type:"email",name:"email",placeholder:"E-mail"}),(0,l.jsx)(n.Bc,{className:h["error-message"],name:"email",component:"div"})]}),(0,l.jsxs)("div",{className:h.box,children:[(0,l.jsx)(n.gN,{className:h["form-input"],type:"password",name:"password",placeholder:"Password",autoComplete:"off"}),(0,l.jsx)(n.Bc,{className:h["error-message"],name:"password",component:"div"})]}),(0,l.jsx)(u,{type:"button",theme:"color",children:"Log in"}),(0,l.jsx)(t.rU,{to:"/register",children:(0,l.jsx)(u,{type:"submit",theme:"white",children:"Register"})})]})}})})},j="Background_background__syS0M",p=function(){return(0,l.jsx)("div",{className:j})}},80033:function(e,s,a){a.r(s),a.d(s,{default:function(){return j}});var n=a(93433),r=a(29439),t=a(72791),i=a(86017),o={transactionsTable:"Transactions_transactionsTable__klztX",transactionsTableHead:"Transactions_transactionsTableHead__UmWQz",transactionsTablebody:"Transactions_transactionsTablebody__D0TIz",sumSection:"Transactions_sumSection__QP2mB"},c=a(80184),l=[["2023-12-04","-","Other","Christmas gift","300.00"],["2023-12-05","+","Income","Salary","5000.00"],["2023-12-07","+","Income","Painting walls","1000.00"],["2023-12-10","-","Products","Grocery","400.00"],["2023-12-15","-","Bills","Rent","2500.00"],["2023-12-15","-","Bills","Phone","180.00"]],d=function(){var e=(0,t.useState)(l),s=(0,r.Z)(e,2),a=s[0],d=s[1],m=(0,t.useState)({column:null,direction:"asc"}),u=(0,r.Z)(m,2),h=u[0],x=u[1],j=(0,t.useState)(0),p=(0,r.Z)(j,2),_=p[0],b=p[1],f=(0,t.useState)(0),g=(0,r.Z)(f,2),N=g[0],w=g[1],y=(0,t.useState)(0),v=(0,r.Z)(y,2),S=v[0],B=v[1],T=function(e){var s=e===h.column&&"asc"===h.direction?"desc":"asc",r=(0,n.Z)(a).sort((function(a,n){var r=4===e?parseFloat(a[e]):a[e],t=4===e?parseFloat(n[e]):n[e];return 0===e&&(r=new Date(r),t=new Date(t)),"asc"===s?r>t?1:-1:r<t?1:-1}));d(r),x({column:e,direction:s})};return(0,t.useEffect)((function(){!function(){var e=0,s=0;a.forEach((function(a){var n=parseFloat(a[4]);"+"===a[1]?e+=n:"-"===a[1]&&(s+=n)})),b(e),w(s),B(e-s)}()}),[a]),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:o.tableBg,children:(0,c.jsxs)("table",{className:o.transactionsTable,children:[(0,c.jsx)("thead",{className:o.transactionsTableHead,children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{onClick:function(){return T(0)},title:"Sort",children:"Date"}),(0,c.jsx)("th",{onClick:function(){return T(1)},title:"Sort",children:"Type"}),(0,c.jsx)("th",{onClick:function(){return T(2)},title:"Sort",children:"Category"}),(0,c.jsx)("th",{onClick:function(){return T(3)},title:"Sort",children:"Comment"}),(0,c.jsx)("th",{onClick:function(){return T(4)},title:"Sort",children:"Sum"}),(0,c.jsx)("th",{children:"Options"})]})}),(0,c.jsx)("tbody",{className:o.transactionsTableBody,children:a.map((function(e,s){return(0,c.jsxs)("tr",{children:[e.map((function(e,s){return(0,c.jsx)("td",{children:e},s)})),(0,c.jsxs)("td",{children:[(0,c.jsx)(i.zx,{type:"button",theme:"white",width:"80px",height:"40px",children:"Edit"}),(0,c.jsx)(i.zx,{type:"button",theme:"color",width:"80px",height:"40px",children:"Delete"})]})]},s)}))})]})}),(0,c.jsxs)("div",{className:o.sumSection,children:[(0,c.jsxs)("p",{children:["Incomes: ",_.toFixed(2)]}),(0,c.jsxs)("p",{children:["Expenses: ",N.toFixed(2)]}),(0,c.jsx)("p",{children:(0,c.jsxs)("b",{children:["Balance: ",S.toFixed(2)]})})]})]})},m={container:"Home_container__qRlyu",sidebar:"Home_sidebar__74EFX",main:"Home_main__4+rG5"},u=a(20820),h=a(87384),x=a(11087),j=function(){return(0,c.jsx)("div",{children:(0,c.jsx)("section",{className:m.dashboard_container,children:(0,c.jsxs)("div",{className:m.container,children:[(0,c.jsxs)("div",{className:m.sidebar,children:[(0,c.jsxs)("ul",{className:m.navigation,children:[(0,c.jsx)("li",{children:(0,c.jsx)(x.rU,{to:"/home",children:"Home"})}),(0,c.jsx)("li",{children:(0,c.jsx)(x.rU,{to:"/statistics",children:"Statistics"})})]}),(0,c.jsx)(h.y,{}),(0,c.jsx)(u.w,{})]}),(0,c.jsx)("div",{className:m.main,children:(0,c.jsx)(d,{})})]})})})}}}]);
//# sourceMappingURL=33.8f5fc104.chunk.js.map