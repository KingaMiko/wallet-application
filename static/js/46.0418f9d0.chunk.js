"use strict";(self.webpackChunkwallet_application=self.webpackChunkwallet_application||[]).push([[46],{87384:function(e,n,t){t.d(n,{y:function(){return o}});var a="Balance_balance__tUx3D",r="Balance_title__aUwwk",s="Balance_amount__t4xet",c=t(80184),o=function(){return(0,c.jsxs)("div",{className:a,children:[(0,c.jsx)("p",{className:r,children:"YOUR BALANCE"}),(0,c.jsx)("p",{className:s,children:"PLN 0.00"})]})}},20820:function(e,n,t){t.d(n,{w:function(){return u}});var a=t(15861),r=t(29439),s=t(64687),c=t.n(s),o=t(72791),i=t(55294),l={tableBg:"CurrencyTable_tableBg__nplZ5",currencyTable:"CurrencyTable_currencyTable__1iH+4",currencyTableHead:"CurrencyTable_currencyTableHead__0L-k0"},d=t(80184),u=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/currencies");case 3:n=e.sent,s(n.data.data.currencies),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching currencies",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,d.jsx)("div",{className:l.tableBg,children:(0,d.jsxs)("table",{className:l.currencyTable,children:[(0,d.jsx)("thead",{className:l.currencyTableHead,children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Currency"}),(0,d.jsx)("th",{children:"Purchase"}),(0,d.jsx)("th",{children:"Sell"})]})}),(0,d.jsx)("tbody",{className:l.currencyTableBody,children:t.map((function(e){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e.code}),(0,d.jsx)("td",{children:e.bid}),(0,d.jsx)("td",{children:e.ask})]},e._id)}))})]})})}},52959:function(e,n,t){t.d(n,{Z:function(){return u}});t(72791);var a=t(57689),r=t(11087),s="ActiveNavLink_link__Srke3",c="ActiveNavLink_active__uzCgI",o=t(80184),i=function(e){var n=e.to,t=e.children,i=(0,a.WU)(n),l=(0,a.bS)({path:i.pathname,end:!0})?c:s;return(0,o.jsx)(r.OL,{to:n,className:l,children:t})},l={icon:"Navigation_icon__lPT0N"},d=t(13439),u=function(){return(0,o.jsx)("nav",{children:(0,o.jsxs)("ul",{className:l.navigation,children:[(0,o.jsx)("li",{children:(0,o.jsxs)(i,{to:"/home",children:[(0,o.jsx)("svg",{className:l.icon,width:"38px",height:"38px",children:(0,o.jsx)("use",{href:"".concat(d.Z,"#icon-home3")})}),"Home"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)(i,{to:"/statistics",children:[(0,o.jsx)("svg",{className:l.icon,width:"38px",height:"38px",children:(0,o.jsx)("use",{href:"".concat(d.Z,"#icon-baseline-timeline")})}),"Statistics"]})})]})})}},48541:function(e,n,t){t.d(n,{Aq:function(){return v},xu:function(){return y},zx:function(){return _},II:function(){return E},U0:function(){return j},TR:function(){return I.T},GG:function(){return u}});var a=t(55705),r=t(8007),s=t(57689),c=t(59434),o=t(18071),i=t(47380),l="RegistrationForm_registration-form__tvXg0",d=t(80184),u=function(){var e=(0,c.I0)(),n=(0,s.s0)(),t=(0,c.v9)(i.up),u=r.Ry().shape({name:r.Z_().matches(new RegExp(t.namePattern.pattern),t.namePattern.description).required("Name is required").min(3,"Name should be at least 3 characters").max(20,"Name should be at most 20 characters"),email:r.Z_().email("Invalid email").required("Email is required"),password:r.Z_().matches(new RegExp(t.passwordPattern.pattern),t.passwordPattern.description).required("Password is required").min(6,"Password should be at least 6 characters").max(20,"Password should be at most 20 characters"),confirmPassword:r.Z_().oneOf([r.iH("password"),null],"Passwords must match").required("Confirm password is required")});return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.J9,{initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:u,onSubmit:function(n,t){var a=t.resetForm,r=n.name,s=n.email,c=n.password;e((0,o.y1)({name:r,email:s,password:c})),a()},children:function(){return(0,d.jsxs)(a.l0,{className:l,autoComplete:"off",children:[(0,d.jsx)(E,{type:"text",name:"name",placeholder:"First name",iconID:"icon-baseline-account_box"}),(0,d.jsx)(E,{type:"email",name:"email",placeholder:"E-mail",iconID:"icon-baseline-email"}),(0,d.jsx)(E,{type:"password",name:"password",placeholder:"Password",autoComplete:"off",iconID:"icon-baseline-lock"}),(0,d.jsx)(E,{type:"password",name:"confirmPassword",placeholder:"Confirm password",autoComplete:"off",iconID:"icon-baseline-lock"}),(0,d.jsx)(_,{type:"submit",theme:"color",children:"Register"}),(0,d.jsx)(_,{type:"button",theme:"white",onClick:function(){return n("/login")},children:"Log in"})]})}})})},m={button:"Button_button__JBBzO","button-white":"Button_button-white__8-Y8O","button-color":"Button_button-color__qDUYL"},_=function(e){var n=e.children,t=e.type,a=void 0===t?"button":t,r=e.theme,s=e.className,c=e.onClick,o="color"===r?m["button-color"]:"white"===r?m["button-white"]:"";return(0,d.jsx)("button",{className:"".concat(m.Button," ").concat(o," ").concat(s),type:a,onClick:c,children:n})},h=t(15861),x=t(64687),p=t.n(x),f="LoginForm_login-form__o6Oo+",j=function(){var e=(0,c.I0)(),n=(0,s.s0)(),t=(0,c.v9)(i.up),l=r.Ry().shape({email:r.Z_().email("Invalid email").required("Email is required"),password:r.Z_().matches(new RegExp(t.passwordPattern.pattern),t.passwordPattern.description).required("Password is required").min(6,"Password should be at least 6 characters").max(20,"Password should be at most 20 characters")}),u=function(){var n=(0,h.Z)(p().mark((function n(t,a){var r,s,c,i;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=a.setSubmitting,s=a.resetForm;try{c=t.email,i=t.password,e((0,o.zB)({email:c,password:i})).unwrap(),s()}catch(l){console.error("Login fail:",l)}finally{r(!1)}case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.J9,{initialValues:{email:"",password:""},validationSchema:l,onSubmit:u,children:function(){return(0,d.jsxs)(a.l0,{className:f,autoComplete:"off",children:[(0,d.jsx)(E,{type:"email",name:"email",placeholder:"E-mail",iconID:"icon-baseline-email"}),(0,d.jsx)(E,{type:"password",name:"password",placeholder:"Password",autoComplete:"off",iconID:"icon-baseline-lock"}),(0,d.jsx)(_,{type:"submit",theme:"color",children:"Log in"}),(0,d.jsx)(_,{type:"button",theme:"white",onClick:function(){return n("/register")},children:"Register"})]})}})})},b="Background_background__syS0M",v=function(){return(0,d.jsx)("div",{className:b})},g="Box_box__YJIlx",y=function(e){var n=e.children,t=e.className;return(0,d.jsx)("div",{className:"".concat(g," ").concat(t),children:n})},N=t(1413),w=t(29439),k=t(44925),T=t(13439),S="Input_box__8gunV",Z="Input_form-input__IGnal",A="Input_error-message__98oTL",C=["iconID"],E=function(e){var n=e.iconID,t=(0,k.Z)(e,C),r=(0,a.U$)(t),s=(0,w.Z)(r,2),c=s[0],o=s[1];return(0,d.jsxs)("div",{className:S,children:[(0,d.jsx)("input",(0,N.Z)((0,N.Z)({className:Z},c),t)),(0,d.jsx)("svg",{width:"20px",height:"20px",children:(0,d.jsx)("use",{href:"".concat(T.Z,"#").concat(n)})}),o.touched&&o.error?(0,d.jsx)("div",{className:A,children:o.error}):null]})},I=t(35222)},60725:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var a=t(93433),r=t(15861),s=t(29439),c=t(64687),o=t.n(c),i=t(72791),l={tableBg:"Transactions_tableBg__72B4n",transactionsTable:"Transactions_transactionsTable__klztX",transactionsTableHead:"Transactions_transactionsTableHead__UmWQz",transactionsTablebody:"Transactions_transactionsTablebody__D0TIz",thName:"Transactions_thName__SoSPQ",iconSort:"Transactions_iconSort__jQ4-1",sumSection:"Transactions_sumSection__QP2mB",iconTransactions:"Transactions_iconTransactions__uSrmT",amountPlus:"Transactions_amountPlus__xCwMa",amountMinus:"Transactions_amountMinus__h36e+"},d=t(13439),u=t(55294),m=t(80184),_=function(){var e=(0,i.useState)([]),n=(0,s.Z)(e,2),t=n[0],c=n[1],_=(0,i.useState)({sumPlus:0,sumMinus:0,balance:0}),h=(0,s.Z)(_,2)[1],x=(0,i.useState)({column:null,direction:"asc"}),p=(0,s.Z)(x,2),f=p[0],j=p[1],b=(0,i.useCallback)((function(){var e=0,n=0;return t.forEach((function(t){var a=parseFloat(t[4]);"Income"===t[1]?e+=a:"Expense"===t[1]&&(n+=a)})),{sumPlus:e,sumMinus:n,balance:e-n}}),[t]);(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/transactions");case 3:n=e.sent,t=n.data.data.map((function(e){return{id:e._id,date:e.date?new Date(e.date).toLocaleDateString():"",type:e.type||"",category:e.category?e.category.toString():"",comment:e.comment||"",sum:e.sum?e.sum.toString():""}})),c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching transactions",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,i.useEffect)((function(){var e=b(),n=e.sumPlus,t=e.sumMinus,a=e.balance;h({sumPlus:n,sumMinus:t,balance:a})}),[t,b]);var v=function(e){var n=e===f.column&&"asc"===f.direction?"desc":"asc";console.log(t);var r=(0,a.Z)(t).sort((function(t,a){var r=4===e?parseFloat(t[e]):t[e],s=4===e?parseFloat(a[e]):a[e];return 0===e&&(r=new Date(r),s=new Date(s)),"asc"===n?r>s?1:-1:r<s?1:-1}));console.log(r),c(r),j({column:e,direction:n})},g=b(),y=g.sumPlus,N=g.sumMinus,w=g.balance,k=function(){var e=(0,r.Z)(o().mark((function e(n){var a,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=localStorage.getItem("authToken")){e.next=5;break}return console.error("No auth token found"),e.abrupt("return");case 5:return e.next=7,u.Z.delete("http://localhost:3000/api/transactions/".concat(n),{headers:{Authorization:"Bearer ".concat(a)}});case 7:200===e.sent.status?(r=t.filter((function(e){return e.id!==n})),c(r)):console.error("Error deleting transaction"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error deleting transaction",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:l.tableBg,children:(0,m.jsxs)("table",{className:l.transactionsTable,children:[(0,m.jsx)("thead",{className:l.transactionsTableHead,children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{onClick:function(){return v(0)},title:"Sort",children:(0,m.jsxs)("div",{className:l.thName,children:[(0,m.jsx)("span",{children:"Date"}),(0,m.jsx)("svg",{className:l.iconSort,width:"20px",height:"20px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-sort")})})]})}),(0,m.jsx)("th",{onClick:function(){return v(1)},title:"Sort",children:(0,m.jsxs)("div",{className:l.thName,children:[(0,m.jsx)("span",{children:"Type"}),(0,m.jsx)("svg",{className:l.iconSort,width:"20px",height:"20px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-sort")})})]})}),(0,m.jsx)("th",{onClick:function(){return v(2)},title:"Sort",children:(0,m.jsxs)("div",{className:l.thName,children:[(0,m.jsx)("span",{children:"Category"}),(0,m.jsx)("svg",{className:l.iconSort,width:"20px",height:"20px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-sort")})})]})}),(0,m.jsx)("th",{onClick:function(){return v(3)},title:"Sort",children:(0,m.jsxs)("div",{className:l.thName,children:[(0,m.jsx)("span",{children:"Comment"}),(0,m.jsx)("svg",{className:l.iconSort,width:"20px",height:"20px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-sort")})})]})}),(0,m.jsx)("th",{onClick:function(){return v(4)},title:"Sort",children:(0,m.jsxs)("div",{className:l.thName,children:[(0,m.jsx)("span",{children:"Amount"}),(0,m.jsx)("svg",{className:l.iconSort,width:"20px",height:"20px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-sort")})})]})}),(0,m.jsx)("th",{children:"Options"})]})}),(0,m.jsx)("tbody",{className:l.transactionsTableBody,children:t.map((function(e){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:e.date}),(0,m.jsx)("td",{children:e.type}),(0,m.jsx)("td",{children:e.category}),(0,m.jsx)("td",{children:e.comment}),(0,m.jsx)("td",{className:(n=e.type,"Income"===n?l.amountPlus:"Expense"===n?l.amountMinus:""),children:e.sum}),(0,m.jsxs)("td",{children:[(0,m.jsx)("svg",{className:l.iconTransactions,width:"20px",height:"20px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-pencil2")})}),(0,m.jsx)("svg",{className:l.iconTransactions,width:"20px",height:"20px",onClick:function(){return k(e.id)},children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-bin")})})]})]},e.id);var n}))})]})}),(0,m.jsxs)("div",{className:l.sumSection,children:[(0,m.jsxs)("p",{children:["Incomes: ",y.toFixed(2)]}),(0,m.jsxs)("p",{children:["Expenses: ",N.toFixed(2)]}),(0,m.jsxs)("p",{children:["Balance: ",w.toFixed(2)]})]})]})},h="Home_background__w4mTu",x="Home_dashboard_container__E9ETc",p="Home_container__qRlyu",f="Home_sidebar__74EFX",j="Home_main__4+rG5",b=t(20820),v=t(87384),g=t(52959),y=t(1413),N=t(8007),w=t(11799),k=t.n(w),T=t(9085),S=(t(81778),t(55705)),Z=t(48541),A={modal:"ModalAddTransaction_modal__EJwZ+",modal__overlay:"ModalAddTransaction_modal__overlay__M0U+1",modal__close:"ModalAddTransaction_modal__close__UL8+y",modal__title:"ModalAddTransaction_modal__title__vLb8S",form__checkbox_container:"ModalAddTransaction_form__checkbox_container__u252m",form__checkbox_label:"ModalAddTransaction_form__checkbox_label__bTA1l",form__checkbox_label_expense:"ModalAddTransaction_form__checkbox_label_expense__1hNPD",form__checkbox_label_income:"ModalAddTransaction_form__checkbox_label_income__q+3On",form__checkbox_input:"ModalAddTransaction_form__checkbox_input__hOAWz",form__checkbox_custom:"ModalAddTransaction_form__checkbox_custom__ywj0K",form__slider:"ModalAddTransaction_form__slider__7zQRE",form__input:"ModalAddTransaction_form__input__D1nMS",form__input_flex:"ModalAddTransaction_form__input_flex__oIkkH",form__date:"ModalAddTransaction_form__date__UI4mE",form__flex_container:"ModalAddTransaction_form__flex_container__u8ryW",form__category:"ModalAddTransaction_form__category__FJeWT",form__category_active:"ModalAddTransaction_form__category_active__szwOH",form__btn_container:"ModalAddTransaction_form__btn_container__Z2eGj","error-message":"ModalAddTransaction_error-message__VpG-N"},C=t(59434),E=t(59874),I=t(47380),P=function(){var e={type:!1,sum:"",category:"",date:new Date,comment:""},n=(0,i.useState)([]),t=(0,s.Z)(n,2),a=t[0],c=t[1],l=N.Ry().shape({type:N.O7(),sum:N.Rx().typeError("Amount must be a number").required("Amount is required").positive("Amount must be a positive number"),date:N.hT().required("Date is required"),category:N.Z_().when("type",(function(e,n){return!1===e?n.required("Category is required"):n})),comment:N.Z_()}),_=(0,C.I0)(),h=(0,C.v9)(I.IZ),x=function(){_((0,E._p)(!1))};(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var n,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=localStorage.getItem("authToken")){e.next=5;break}return console.error("No auth token found"),e.abrupt("return");case 5:return e.next=7,u.Z.get("http://localhost:3000/api/auth/categories",{headers:{Authorization:"Bearer ".concat(n)}});case 7:t=e.sent,a=t.data.data,c(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Error fetching categories",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var p=function(){var e=(0,r.Z)(o().mark((function e(n,t){var a,r,s,c,i,l,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.setSubmitting,r=t.resetForm,s=t.setErrors,e.prev=1,c=localStorage.getItem("authToken")){e.next=6;break}return console.error("No auth token found"),e.abrupt("return");case 6:return console.log(n),i=(0,y.Z)((0,y.Z)({sum:n.sum,date:n.date.toISOString().split("T")[0],type:n.type?"Income":"Expense"},!1===n.type&&{category:n.category}),{},{comment:n.comment}),console.log(i),e.next=11,u.Z.post("http://localhost:3000/api/transactions",i,{headers:{Authorization:"Bearer ".concat(c)}});case 11:201===(l=e.sent).status?(console.log("Transaction added successfully!",l.data),r(),T.Am.success("Transaction added successfully!")):(console.error("Error adding transaction:",l.statusText),T.Am.error("Error adding transaction. Please try again.")),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),console.error("Validation error:",e.t0),e.t0 instanceof N.p8?(d={},e.t0.inner.forEach((function(e){d[e.path]=e.message})),s(d)):T.Am.error("Error adding transaction. Please try again.");case 19:return e.prev=19,a(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[1,15,19,22]])})));return function(n,t){return e.apply(this,arguments)}}();return h?(0,m.jsx)("div",{className:A.modal__overlay,children:(0,m.jsxs)("div",{className:A.modal,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("h5",{className:A.modal__title,children:"Add Transaction"}),(0,m.jsx)("button",{type:"button",className:A.modal__close,onClick:x,children:(0,m.jsx)("svg",{width:"16px",height:"16px",children:(0,m.jsx)("use",{href:"".concat(d.Z,"#icon-close")})})})]}),(0,m.jsx)("div",{children:(0,m.jsx)(S.J9,{initialValues:e,onSubmit:p,validationSchema:l,children:function(n){var t=n.isSubmitting,r=n.handleSubmit,s=n.setFieldValue,c=n.values,o=n.setValues,i=n.setErrors;return(0,m.jsxs)(S.l0,{onSubmit:r,children:[(0,m.jsx)("div",{className:A.form__checkbox_container,children:(0,m.jsxs)("label",{className:A.form__checkbox_label,children:[(0,m.jsx)("span",{htmlFor:"type",className:"".concat(A.form__checkbox_label," ").concat(!0===c.type?A.form__checkbox_label_income:null),children:"Income"}),(0,m.jsx)(S.gN,{type:"checkbox",name:"type",id:"type",onClick:function(){o((0,y.Z)((0,y.Z)({},e),{},{type:c.type})),i({})},className:A.form__checkbox_input}),(0,m.jsx)("div",{className:A.form__checkbox_custom,children:(0,m.jsx)("div",{className:A.form__slider,children:!1===c.type?"-":"+"})}),(0,m.jsx)("span",{htmlFor:"type",className:"".concat(A.form__checkbox_label," ").concat(!1===c.type?A.form__checkbox_label_expense:null),children:"Expense"})]})}),(0,m.jsxs)("div",{className:A.form__flex_container,children:[!1===c.type&&(0,m.jsx)("div",{className:A.form__input,children:(0,m.jsxs)("label",{children:[(0,m.jsxs)(S.gN,{as:"select",name:"category",className:"".concat(A.form__category," ").concat(""!==c.category?A.form__category_active:null),children:[(0,m.jsx)("option",{hidden:!0,value:"",children:"Select a category"}),a.map((function(e){return(0,m.jsx)("option",{value:e._id,children:e.name},e._id)}))]}),(0,m.jsx)(S.Bc,{name:"category",component:"div"})]})}),(0,m.jsxs)("div",{className:A.form__input_flex,children:[(0,m.jsxs)("label",{children:[(0,m.jsx)(S.gN,{type:"number",name:"sum",placeholder:"0.00",className:A.form__input}),(0,m.jsx)(S.Bc,{name:"sum",component:"div"})]}),(0,m.jsxs)("label",{children:[(0,m.jsx)(k(),{value:c.date,onChange:function(e){return s("date",e)},className:"".concat(A.form__input," ").concat(A.form__date),dateFormat:"YYYY-MM-DD",timeFormat:!1}),(0,m.jsx)("span",{className:A.form__date_icon}),(0,m.jsx)(S.Bc,{name:"date",component:"div"})]})]}),(0,m.jsx)("div",{className:A.form__input,children:(0,m.jsx)("label",{children:(0,m.jsx)(S.gN,{as:"input",type:"text",name:"comment",placeholder:"Comment",className:A.form__input})})})]}),(0,m.jsxs)("div",{className:A.form__btn_container,children:[(0,m.jsx)(Z.zx,{type:"submit",theme:"color",disabled:t,children:"Add"}),(0,m.jsx)(Z.zx,{type:"button",theme:"white",onClick:x,children:"Cancel"})]})]})}})})]})}):null},M="ButtonAddTransactions_add_transaction_btn__DAp3y",B=function(){var e=(0,C.I0)();return(0,m.jsx)("button",{onClick:function(){e((0,E._p)(!0))},className:M,children:"+"})},q=t(54270),D=function(){return(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)(q.q,{children:(0,m.jsx)("title",{children:"Home"})}),(0,m.jsxs)("section",{className:x,children:[(0,m.jsxs)("div",{className:p,children:[(0,m.jsxs)("div",{className:f,children:[(0,m.jsx)(g.Z,{}),(0,m.jsx)(v.y,{}),(0,m.jsx)(b.w,{})]}),(0,m.jsxs)("div",{className:j,children:[(0,m.jsx)(_,{}),(0,m.jsx)(P,{})]})]}),(0,m.jsx)(B,{})]})]})}}}]);
//# sourceMappingURL=46.0418f9d0.chunk.js.map