"use strict";(self.webpackChunkwallet_application=self.webpackChunkwallet_application||[]).push([[215],{5452:function(e,n,a){a.d(n,{Z:function(){return i}});a(2791);var t=a(7689),c=a(1087),r="ActiveNavLink_link__Srke3",s="ActiveNavLink_active__uzCgI",o=a(184),i=function(e){var n=e.to,a=e.children,i=(0,t.WU)(n),l=(0,t.bS)({path:i.pathname,end:!0})?s:r;return(0,o.jsx)(c.OL,{to:n,className:l,children:a})}},2296:function(e,n,a){a.d(n,{k:function(){return r}});var t="BackgroundBlurred_background__i2tYL",c=a(184),r=function(){return(0,c.jsx)("div",{className:t})}},7384:function(e,n,a){a.d(n,{y:function(){return d}});var t=a(2791),c=a(9434),r=a(5094),s=a(8071),o="Balance_balance__tUx3D",i="Balance_title__aUwwk",l="Balance_amount__t4xet",_=a(184),d=function(){var e=(0,c.I0)(),n=(0,c.v9)(r.uy),a=n?n.balance:0;return(0,t.useEffect)((function(){e((0,s.M_)())}),[e]),(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)("p",{className:i,children:"YOUR BALANCE"}),(0,_.jsxs)("p",{className:l,children:["PLN ",a]})]})}},820:function(e,n,a){a.d(n,{w:function(){return d}});var t=a(5861),c=a(9439),r=a(4687),s=a.n(r),o=a(2791),i=a(6234),l={tableBg:"CurrencyTable_tableBg__nplZ5",currencyTable:"CurrencyTable_currencyTable__1iH+4"},_=a(184),d=function(){var e=(0,o.useState)([]),n=(0,c.Z)(e,2),a=n[0],r=n[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.$.get("/currencies");case 3:n=e.sent,r(n.data.data.currencies),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching currencies",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,_.jsx)("div",{className:l.tableBg,children:(0,_.jsxs)("table",{className:l.currencyTable,children:[(0,_.jsx)("thead",{className:l.currencyTableHead,children:(0,_.jsxs)("tr",{children:[(0,_.jsx)("th",{children:"Currency"}),(0,_.jsx)("th",{children:"Purchase"}),(0,_.jsx)("th",{children:"Sell"})]})}),(0,_.jsx)("tbody",{className:l.currencyTableBody,children:a.map((function(e){return(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:e.code}),(0,_.jsx)("td",{children:e.bid}),(0,_.jsx)("td",{children:e.ask})]},e._id)}))})]})})}},9628:function(e,n,a){a.d(n,{Z:function(){return o}});a(2791);var t=a(5452),c={icon:"Navigation_icon__lPT0N"},r=a(3439),s=a(184),o=function(){return(0,s.jsx)("nav",{children:(0,s.jsxs)("ul",{className:c.navigation,children:[(0,s.jsx)("li",{children:(0,s.jsxs)(t.Z,{to:"/home",children:[(0,s.jsx)("svg",{className:c.icon,width:"38px",height:"38px",children:(0,s.jsx)("use",{href:"".concat(r.Z,"#icon-home3")})}),"Home"]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(t.Z,{to:"/statistics",children:[(0,s.jsx)("svg",{className:c.icon,width:"38px",height:"38px",children:(0,s.jsx)("use",{href:"".concat(r.Z,"#icon-baseline-timeline")})}),"Statistics"]})})]})})}},9443:function(e,n,a){a.d(n,{Z:function(){return o}});a(2791);var t=a(5452),c={navigation:"NavigationMobile_navigation__mkvLU"},r=a(3439),s=a(184),o=function(){return(0,s.jsx)("nav",{children:(0,s.jsxs)("ul",{className:c.navigation,children:[(0,s.jsx)("li",{children:(0,s.jsx)(t.Z,{to:"/home",children:(0,s.jsx)("svg",{className:c.icon,width:"38px",height:"38px",children:(0,s.jsx)("use",{href:"".concat(r.Z,"#icon-home3")})})})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.Z,{to:"/statistics",children:(0,s.jsx)("svg",{className:c.icon,width:"38px",height:"38px",children:(0,s.jsx)("use",{href:"".concat(r.Z,"#icon-baseline-timeline")})})})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.Z,{to:"/currency",children:(0,s.jsx)("svg",{className:c.icon,width:"38px",height:"38px",children:(0,s.jsx)("use",{href:"".concat(r.Z,"#icon-baseline-dollar")})})})})]})})}},5737:function(e,n,a){a.r(n),a.d(n,{default:function(){return ce}});var t={wrapper:"Home_wrapper__53Los",mainMobile:"Home_mainMobile__FYfgM",mainTabletAndDesktop:"Home_mainTabletAndDesktop__EA5yb",sidebar:"Home_sidebar__74EFX",main:"Home_main__4+rG5"},c=a(820),r=a(7384),s=a(9628),o=a(9439),i=a(2791),l=a(9434),_="Transactions_tableBg__zIQxE",d="Transactions_transactionsTable__83vc7",m="Transactions_transactionsTableHead__8+gku",u="Transactions_thName__3q6MS",h="Transactions_iconSort__6FlXB",x="Transactions_iconTransactions__lZpcx",f="Transactions_amountPlus__gFaHt",p="Transactions_amountMinus__4FyfO",j="Transactions_tablePlus__VfqW1",b="Transactions_tableMinus__Li-bx",v=a(3439),y=a(9874),g=a(7380),N=a(9222),k="ModalConfirmDelete_modal__h1p0a",T="ModalConfirmDelete_modal__overlay__C6aKg",M="ModalConfirmDelete_modal__close__-sOJz",E="ModalConfirmDelete_modal__title__GTUI3",Z="ModalConfirmDelete_btn_container__4476O",C=a(184),w=function(e){var n=e.onConfirm,a=(0,l.I0)(),t=function(){a((0,y.Nu)(!1))};return(0,l.v9)(g.Uk)?(0,C.jsx)("div",{className:T,children:(0,C.jsx)("div",{className:k,children:(0,C.jsxs)("div",{children:[(0,C.jsxs)("h5",{className:E,children:["Are you sure you want to delete this transaction?"," ",(0,C.jsx)("p",{children:"*This action cannot be undone."})]}),(0,C.jsx)("button",{type:"button",className:M,onClick:t,children:(0,C.jsx)("svg",{width:"16px",height:"16px",children:(0,C.jsx)("use",{href:"".concat(v.Z,"#icon-close")})})}),(0,C.jsxs)("div",{className:Z,children:[(0,C.jsx)(N.zx,{type:"button",theme:"color",onClick:n,children:"Yes, Delete"}),(0,C.jsx)(N.zx,{type:"button",theme:"white",onClick:t,children:"Cancel"})]})]})})}):null},S=function(e){var n=e.transactions,a=e.onDelete,t=e.onEdit,c=(0,i.useState)({column:null,direction:"asc"}),r=(0,o.Z)(c,2),s=r[0],g=r[1],N=(0,i.useState)(null),k=(0,o.Z)(N,2),T=k[0],M=k[1],E=(0,l.I0)(),Z=function(e){return"Income"===e?f:"Expense"===e?p:""},S=function(e){var n=e===s.column&&"asc"===s.direction?"desc":"asc";g({column:e,direction:n})},A=function(e){var n=new Date(e),a=n.getDate().toString().padStart(2,"0"),t=(n.getMonth()+1).toString().padStart(2,"0"),c=n.getFullYear();return"".concat(a,".").concat(t,".").concat(c)};return(0,C.jsxs)("div",{className:_,children:[(0,C.jsx)(w,{onConfirm:function(){a(T),E((0,y.Nu)(!1))}}),(0,C.jsxs)("table",{className:d,children:[(0,C.jsx)("thead",{className:m,children:(0,C.jsxs)("tr",{children:[(0,C.jsx)("th",{onClick:function(){return S(0)},title:"Sort",children:(0,C.jsxs)("div",{className:u,children:[(0,C.jsx)("span",{children:"Date"}),(0,C.jsx)("svg",{className:h,width:"20px",height:"20px",children:(0,C.jsx)("use",{href:"".concat(v.Z,"#icon-sort")})})]})}),(0,C.jsx)("th",{onClick:function(){return S(1)},title:"Sort",children:(0,C.jsxs)("div",{className:u,children:[(0,C.jsx)("span",{children:"Type"}),(0,C.jsx)("svg",{className:h,width:"20px",height:"20px",children:(0,C.jsx)("use",{href:"".concat(v.Z,"#icon-sort")})})]})}),(0,C.jsx)("th",{onClick:function(){return S(2)},title:"Sort",children:(0,C.jsxs)("div",{className:u,children:[(0,C.jsx)("span",{children:"Category"}),(0,C.jsx)("svg",{className:h,width:"20px",height:"20px",children:(0,C.jsx)("use",{href:"".concat(v.Z,"#icon-sort")})})]})}),(0,C.jsx)("th",{onClick:function(){return S(3)},title:"Sort",children:(0,C.jsxs)("div",{className:u,children:[(0,C.jsx)("span",{children:"Comment"}),(0,C.jsx)("svg",{className:h,width:"20px",height:"20px",children:(0,C.jsx)("use",{href:"".concat(v.Z,"#icon-sort")})})]})}),(0,C.jsx)("th",{onClick:function(){return S(4)},title:"Sort",children:(0,C.jsxs)("div",{className:u,children:[(0,C.jsx)("span",{children:"Amount"}),(0,C.jsx)("svg",{className:h,width:"20px",height:"20px",children:(0,C.jsx)("use",{href:"".concat(v.Z,"#icon-sort")})})]})}),(0,C.jsx)("th",{children:"Options"})]})}),(0,C.jsx)("tbody",{children:n.map((function(e){return(0,C.jsxs)("tr",{"data-type":e.type,children:[(0,C.jsx)("td",{"data-label":"Date",children:A(e.date)}),(0,C.jsx)("td",{"data-label":"Type",children:(n=e.type,"Expense"===n?(0,C.jsx)("span",{className:b,children:"-"}):"Income"===n?(0,C.jsx)("span",{className:j,children:"+"}):n)}),(0,C.jsx)("td",{"data-label":"Category",children:e.category}),(0,C.jsx)("td",{"data-label":"Comment",children:e.comment}),(0,C.jsx)("td",{"data-label":"Sum",className:Z(e.type),children:e.sum}),(0,C.jsxs)("td",{"data-label":"Options",children:[(0,C.jsx)("svg",{className:x,width:"20px",height:"20px",onClick:function(){return t(e)},children:(0,C.jsx)("use",{href:"".concat(v.Z,"#icon-pencil2")})}),(0,C.jsx)("svg",{className:x,width:"20px",height:"20px",onClick:function(){return n=e._id,M(n),void E((0,y.Nu)(!0));var n},children:(0,C.jsx)("use",{href:"".concat(v.Z,"#icon-bin")})})]})]},e._id);var n}))})]})]})},A=a(8357),D=a(112),I=a(1413),B=a(5861),F=a(4687),q=a.n(F),L=a(1799),O=a.n(L),P=(a(1778),a(5705)),Y=a(8007),H={modal:"ModalAddTransaction_modal__92Wan",modal__overlay:"ModalAddTransaction_modal__overlay__5muZL",modal__close:"ModalAddTransaction_modal__close__2oFKS",modal__title:"ModalAddTransaction_modal__title__lkrl8",form__label:"ModalAddTransaction_form__label__pL9sF",form__checkbox_container:"ModalAddTransaction_form__checkbox_container__Ewtgx",form__checkbox_label:"ModalAddTransaction_form__checkbox_label__fP5ud",form__checkbox_label_expense:"ModalAddTransaction_form__checkbox_label_expense__Pkkrh",form__checkbox_label_income:"ModalAddTransaction_form__checkbox_label_income__1jimB",form__checkbox_input:"ModalAddTransaction_form__checkbox_input__mqlbb",form__checkbox_custom:"ModalAddTransaction_form__checkbox_custom__TZ4ho",form__slider:"ModalAddTransaction_form__slider__UGKmj",form__input:"ModalAddTransaction_form__input__mcnWJ",form__input_flex:"ModalAddTransaction_form__input_flex__JnydG",form__date:"ModalAddTransaction_form__date__7R5ye",form__flex_container:"ModalAddTransaction_form__flex_container__agrkZ",form__category:"ModalAddTransaction_form__category__9vIwc",form__category_active:"ModalAddTransaction_form__category_active__eIpA1",form__btn_container:"ModalAddTransaction_form__btn_container__Lecm6",error_message:"ModalAddTransaction_error_message__J5jVO"},U=function(e){var n=e.addTransaction,a={type:!1,sum:"",category:"",date:new Date,comment:""},t=Y.Ry().shape({type:Y.Z_(),sum:Y.Rx().positive("Sum must be a positive number").required("Sum is required"),category:Y.Z_().required("Category is required"),date:Y.hT().required("Date is required"),comment:Y.Z_()}),c=(0,l.I0)(),r=(0,l.v9)(g.IZ),s=(0,l.v9)(D.t6),o=function(){c((0,y._p)(!1))},i=function(){var e=(0,B.Z)(q().mark((function e(a,t){var c,r,s;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.setSubmitting,r=t.resetForm,c(!0);try{s={sum:a.sum,date:a.date.toISOString(),type:a.type?"Income":"Expense",category:a.category,comment:a.comment},n(s)}catch(i){console.error("Error adding transaction:",i)}finally{c(!1),r(),o()}case 3:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}();return r?(0,C.jsx)("div",{className:H.modal__overlay,children:(0,C.jsxs)("div",{className:H.modal,children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h5",{className:H.modal__title,children:"Add Transaction"}),(0,C.jsx)("button",{type:"button",className:H.modal__close,onClick:o,children:(0,C.jsx)("svg",{width:"16px",height:"16px",children:(0,C.jsx)("use",{href:"".concat(v.Z,"#icon-close")})})})]}),(0,C.jsx)("div",{children:(0,C.jsx)(P.J9,{initialValues:a,onSubmit:i,validationSchema:t,children:function(e){var n=e.isSubmitting,t=e.handleSubmit,c=e.setFieldValue,r=e.values,i=e.setValues,l=e.setErrors;return(0,C.jsxs)(P.l0,{onSubmit:t,children:[(0,C.jsx)("div",{className:H.form__checkbox_container,children:(0,C.jsxs)("label",{className:H.form__checkbox_label,children:[(0,C.jsx)("span",{htmlFor:"type",className:"".concat(H.form__checkbox_label," ").concat(!0===r.type?H.form__checkbox_label_income:null),children:"Income"}),(0,C.jsx)(P.gN,{type:"checkbox",name:"type",id:"type",onClick:function(){i((0,I.Z)((0,I.Z)({},a),{},{type:r.type})),l({})},className:H.form__checkbox_input}),(0,C.jsx)("div",{className:H.form__checkbox_custom,children:(0,C.jsx)("div",{className:H.form__slider,children:!1===r.type?"-":"+"})}),(0,C.jsx)("span",{htmlFor:"type",className:"".concat(H.form__checkbox_label," ").concat(!1===r.type?H.form__checkbox_label_expense:null),children:"Expense"})]})}),(0,C.jsxs)("div",{className:H.form__flex_container,children:[(0,C.jsx)("div",{className:H.form__input,children:(0,C.jsxs)("label",{children:[(0,C.jsxs)(P.gN,{as:"select",name:"category",className:"".concat(H.form__category," ").concat(""!==r.category?H.form__category_active:null),children:[(0,C.jsx)("option",{hidden:!0,value:"",children:"Select a category"}),s.filter((function(e){return!0===r.type?"Income"===e.type:"Expense"===e.type})).map((function(e){return(0,C.jsx)("option",{value:e._id,children:e.name},e._id)}))]}),(0,C.jsx)(P.Bc,{name:"category",component:"div"})]})}),(0,C.jsxs)("div",{className:H.form__input_flex,children:[(0,C.jsxs)("label",{children:[(0,C.jsx)(P.gN,{type:"number",name:"sum",placeholder:"0.00",className:H.form__input}),(0,C.jsx)(P.Bc,{name:"sum",component:"div"})]}),(0,C.jsxs)("label",{children:[(0,C.jsx)(O(),{value:r.date,onChange:function(e){return c("date",e)},className:"".concat(H.form__input," ").concat(H.form__date),dateFormat:"YYYY-MM-DD",timeFormat:!1}),(0,C.jsx)("span",{className:H.form__date_icon}),(0,C.jsx)(P.Bc,{name:"date",component:"div"})]})]}),(0,C.jsx)("div",{className:H.form__input,children:(0,C.jsx)("label",{children:(0,C.jsx)(P.gN,{as:"input",type:"text",name:"comment",placeholder:"Comment",className:H.form__input})})})]}),(0,C.jsxs)("div",{className:H.form__btn_container,children:[(0,C.jsx)(N.zx,{type:"submit",theme:"color",disabled:n,children:"Add"}),(0,C.jsx)(N.zx,{type:"button",theme:"white",onClick:o,children:"Cancel"})]})]})}})})]})}):null},V=a(9085),W={modal:"ModalEditTransaction_modal__aESX1",modal__overlay:"ModalEditTransaction_modal__overlay__7b9Pt",modal__close:"ModalEditTransaction_modal__close__OWdVa",modal__title:"ModalEditTransaction_modal__title__Lmmva",form__label:"ModalEditTransaction_form__label__ZJHe-",form__checkbox_container:"ModalEditTransaction_form__checkbox_container__fl6ho",form__checkbox_label:"ModalEditTransaction_form__checkbox_label__o8IC2",form__checkbox_label_expense:"ModalEditTransaction_form__checkbox_label_expense__BFrlP",form__checkbox_label_income:"ModalEditTransaction_form__checkbox_label_income__hOXJt",form__checkbox_input:"ModalEditTransaction_form__checkbox_input__uiOCB",form__checkbox_custom:"ModalEditTransaction_form__checkbox_custom__3KD4B",form__slider:"ModalEditTransaction_form__slider__TPwSP",form__input:"ModalEditTransaction_form__input__c6Cb5",form__input_flex:"ModalEditTransaction_form__input_flex__Px3k1",form__date:"ModalEditTransaction_form__date__-TvAf",form__flex_container:"ModalEditTransaction_form__flex_container__T308u",form__category:"ModalEditTransaction_form__category__MvXDV",form__category_active:"ModalEditTransaction_form__category_active__GbP68",form__btn_container:"ModalEditTransaction_form__btn_container__OXqrQ",error_message:"ModalEditTransaction_error_message__kKrvE"},z=function(e){var n=e.editedTransaction,a=e.onTransactionUpdate,t={type:!!n&&"Income"===n.type,sum:n?n.sum:"",category:n?n.category:"",date:n?new Date(n.date):new Date,comment:n?n.comment:""},c=Y.Ry().shape({type:Y.Z_(),sum:Y.Rx().typeError("Amount must be a number").required("Amount is required").positive("Amount must be a positive number"),date:Y.hT().required("Date is required"),category:Y.Z_().required("Category is required"),comment:Y.Z_()}),r=(0,l.I0)(),s=(0,l.v9)(g.Io),o=(0,l.v9)(D.t6),i=function(){r((0,y.Lj)(!1))},_=function(){var e=(0,B.Z)(q().mark((function e(t,c){var s,o,l;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.setSubmitting,o=c.resetForm,s(!0),e.prev=2,l={transactionID:n._id,sum:t.sum,date:t.date.toISOString().split("T")[0],type:t.type?"Income":"Expense",category:t.category,comment:t.comment},e.next=6,r((0,A.Ld)(l));case 6:a(),V.Am.success("Transaction updated successfully!"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.error("Error updating transaction:",e.t0),V.Am.error("Error updating transaction. Please try again.");case 14:return e.prev=14,s(!1),o(),i(),e.finish(14);case 19:case"end":return e.stop()}}),e,null,[[2,10,14,19]])})));return function(n,a){return e.apply(this,arguments)}}();return s?(0,C.jsx)("div",{className:W.modal__overlay,children:(0,C.jsxs)("div",{className:W.modal,children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("h5",{className:W.modal__title,children:"Edit Transaction"}),(0,C.jsx)("button",{type:"button",className:W.modal__close,onClick:i,children:(0,C.jsx)("svg",{width:"16px",height:"16px",children:(0,C.jsx)("use",{href:"".concat(v.Z,"#icon-close")})})})]}),(0,C.jsx)("div",{children:(0,C.jsx)(P.J9,{initialValues:t,onSubmit:_,validationSchema:c,children:function(e){var a=e.isSubmitting,c=e.handleSubmit,r=e.setFieldValue,s=e.values,l=e.setValues,_=e.setErrors;return(0,C.jsxs)(P.l0,{onSubmit:c,children:[(0,C.jsx)("div",{className:W.form__checkbox_container,children:(0,C.jsxs)("label",{className:W.form__checkbox_label,children:[(0,C.jsx)("span",{htmlFor:"type",className:"".concat(W.form__checkbox_label," ").concat(!0===s.type?W.form__checkbox_label_income:null),children:"Income"}),(0,C.jsx)(P.gN,{type:"checkbox",name:"type",id:"type",onClick:function(){l((0,I.Z)((0,I.Z)({},t),{},{type:s.type})),_({})},className:W.form__checkbox_input}),(0,C.jsx)("div",{className:W.form__checkbox_custom,children:(0,C.jsx)("div",{className:W.form__slider,children:!1===s.type?"-":"+"})}),(0,C.jsx)("span",{htmlFor:"type",className:"".concat(W.form__checkbox_label," ").concat(!1===s.type?W.form__checkbox_label_expense:null),children:"Expense"})]})}),(0,C.jsxs)("div",{className:W.form__flex_container,children:[(0,C.jsx)("div",{className:W.form__input,children:(0,C.jsxs)("label",{children:[(0,C.jsxs)(P.gN,{as:"select",name:"category",className:"".concat(W.form__category," ").concat(""!==s.category?W.form__category_active:null),children:[(0,C.jsx)("option",{selected:!0,value:n.categoryId,children:n.category}),o.filter((function(e){return!0===s.type?"Income"===e.type:"Expense"===e.type})).map((function(e){return(0,C.jsx)("option",{value:e._id,children:e.name},e._id)}))]}),(0,C.jsx)(P.Bc,{name:"category",component:"div"})]})}),(0,C.jsxs)("div",{className:W.form__input_flex,children:[(0,C.jsxs)("label",{children:[(0,C.jsx)(P.gN,{type:"number",name:"sum",placeholder:"0.00",className:W.form__input}),(0,C.jsx)(P.Bc,{name:"sum",component:"div"})]}),(0,C.jsxs)("label",{children:[(0,C.jsx)(O(),{value:s.date,onChange:function(e){return r("date",e)},className:"".concat(W.form__input," ").concat(W.form__date),dateFormat:"YYYY-MM-DD",timeFormat:!1}),(0,C.jsx)("span",{className:W.form__date_icon}),(0,C.jsx)(P.Bc,{name:"date",component:"div"})]})]}),(0,C.jsx)("div",{className:W.form__input,children:(0,C.jsx)("label",{children:(0,C.jsx)(P.gN,{as:"input",type:"text",name:"comment",placeholder:"Comment",className:W.form__input})})})]}),(0,C.jsxs)("div",{className:W.form__btn_container,children:[(0,C.jsx)(N.zx,{type:"submit",theme:"color",disabled:a,children:"Edit"}),(0,C.jsx)(N.zx,{type:"button",theme:"white",onClick:i,children:"Cancel"})]})]})}})})]})}):null},J=a.p+"static/media/wallet.17f25bde40b96e767755.png",K="EmptyWallet_container__f3TeQ",R="EmptyWallet_emptywallet__nF-NS",X=function(){return(0,C.jsx)("div",{className:K,children:(0,C.jsxs)("div",{className:R,children:[(0,C.jsx)("p",{children:"Your Wallet is empty. Enter your first transaction."}),(0,C.jsx)("img",{src:J,alt:"Empty Wallet"})]})})},G=function(){var e=(0,l.I0)(),n=(0,l.v9)(D.ig),a=(0,i.useState)(!1),t=(0,o.Z)(a,2),c=t[0],r=t[1],s=(0,i.useState)(null),_=(0,o.Z)(s,2),d=_[0],m=_[1];(0,i.useEffect)((function(){e((0,A.f1)())}),[e,c]);return(0,C.jsxs)("div",{children:[(0,C.jsx)(U,{addTransaction:function(n){e((0,A.dT)(n)).then((function(){r((function(e){return!e}))})).catch((function(e){console.error("Error while adding the transaction:",e)}))}}),(0,C.jsx)(z,{editedTransaction:d,onTransactionUpdate:function(){return e((0,A.f1)())}}),0===n.length?(0,C.jsx)(X,{}):(0,C.jsx)(S,{transactions:n,onDelete:function(n){e((0,A.Ks)(n)).then((function(){e((0,A.f1)())})).catch((function(e){console.error("Error while deleting the transaction:",e)}))},onEdit:function(n){m(n),e((0,y.Lj)(!0))}})]})},Q="ButtonAddTransactions_add_transaction_btn__DAp3y",$=function(){var e=(0,l.I0)();return(0,C.jsx)("button",{onClick:function(){e((0,y._p)(!0))},className:Q,children:"+"})},ee=a(4270),ne=a(9443),ae=a(4805),te=a(2296),ce=function(){var e=(0,ae.useMediaQuery)({maxWidth:767});return(0,C.jsxs)("div",{className:t.background,children:[(0,C.jsx)(ee.q,{children:(0,C.jsx)("title",{children:"Home"})}),(0,C.jsxs)("section",{children:[(0,C.jsx)(te.k,{}),(0,C.jsxs)("div",{className:t.wrapper,children:[e?(0,C.jsxs)("div",{className:t.mainMobile,children:[(0,C.jsx)(ne.Z,{}),(0,C.jsx)(r.y,{}),(0,C.jsx)(G,{})]}):(0,C.jsxs)("div",{className:t.mainTabletAndDesktop,children:[(0,C.jsxs)("div",{className:t.sidebar,children:[(0,C.jsxs)("div",{children:[" ",(0,C.jsx)(s.Z,{}),(0,C.jsx)(r.y,{})]}),(0,C.jsx)("div",{children:(0,C.jsx)(c.w,{})})]}),(0,C.jsx)("div",{className:t.main,children:(0,C.jsx)(G,{})})]})," "]}),(0,C.jsx)($,{})]})]})}}}]);
//# sourceMappingURL=215.a67088ce.chunk.js.map