"use strict";(self.webpackChunkwallet_application=self.webpackChunkwallet_application||[]).push([[663],{5452:function(e,a,n){n.d(a,{Z:function(){return o}});n(2791);var t=n(7689),r=n(1087),s="ActiveNavLink_link__Srke3",c="ActiveNavLink_active__uzCgI",i=n(184),o=function(e){var a=e.to,n=e.children,o=(0,t.WU)(a),l=(0,t.bS)({path:o.pathname,end:!0})?c:s;return(0,i.jsx)(r.OL,{to:a,className:l,children:n})}},2296:function(e,a,n){n.d(a,{k:function(){return s}});var t="BackgroundBlurred_background__i2tYL",r=n(184),s=function(){return(0,r.jsx)("div",{className:t})}},7384:function(e,a,n){n.d(a,{y:function(){return d}});var t=n(2791),r=n(9434),s=n(5094),c=n(8071),i="Balance_balance__tUx3D",o="Balance_title__aUwwk",l="Balance_amount__t4xet",_=n(184),d=function(){var e=(0,r.I0)(),a=(0,r.v9)(s.uy),n=a?a.balance:0;return(0,t.useEffect)((function(){e((0,c.M_)())}),[e]),(0,_.jsxs)("div",{className:i,children:[(0,_.jsx)("p",{className:o,children:"YOUR BALANCE"}),(0,_.jsxs)("p",{className:l,children:["PLN ",n]})]})}},820:function(e,a,n){n.d(a,{w:function(){return d}});var t=n(5861),r=n(9439),s=n(4687),c=n.n(s),i=n(2791),o=n(6234),l={tableBg:"CurrencyTable_tableBg__nplZ5",currencyTable:"CurrencyTable_currencyTable__1iH+4"},_=n(184),d=function(){var e=(0,i.useState)([]),a=(0,r.Z)(e,2),n=a[0],s=a[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.$.get("/currencies");case 3:a=e.sent,s(a.data.data.currencies),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching currencies",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,_.jsx)("div",{className:l.tableBg,children:(0,_.jsxs)("table",{className:l.currencyTable,children:[(0,_.jsx)("thead",{className:l.currencyTableHead,children:(0,_.jsxs)("tr",{children:[(0,_.jsx)("th",{children:"Currency"}),(0,_.jsx)("th",{children:"Purchase"}),(0,_.jsx)("th",{children:"Sell"})]})}),(0,_.jsx)("tbody",{className:l.currencyTableBody,children:n.map((function(e){return(0,_.jsxs)("tr",{children:[(0,_.jsx)("td",{children:e.code}),(0,_.jsx)("td",{children:e.bid}),(0,_.jsx)("td",{children:e.ask})]},e._id)}))})]})})}},9628:function(e,a,n){n.d(a,{Z:function(){return i}});n(2791);var t=n(5452),r={icon:"Navigation_icon__lPT0N"},s=n(3439),c=n(184),i=function(){return(0,c.jsx)("nav",{children:(0,c.jsxs)("ul",{className:r.navigation,children:[(0,c.jsx)("li",{children:(0,c.jsxs)(t.Z,{to:"/home",children:[(0,c.jsx)("svg",{className:r.icon,width:"38px",height:"38px",children:(0,c.jsx)("use",{href:"".concat(s.Z,"#icon-home3")})}),"Home"]})}),(0,c.jsx)("li",{children:(0,c.jsxs)(t.Z,{to:"/statistics",children:[(0,c.jsx)("svg",{className:r.icon,width:"38px",height:"38px",children:(0,c.jsx)("use",{href:"".concat(s.Z,"#icon-baseline-timeline")})}),"Statistics"]})})]})})}},9443:function(e,a,n){n.d(a,{Z:function(){return i}});n(2791);var t=n(5452),r={navigation:"NavigationMobile_navigation__mkvLU"},s=n(3439),c=n(184),i=function(){return(0,c.jsx)("nav",{children:(0,c.jsxs)("ul",{className:r.navigation,children:[(0,c.jsx)("li",{children:(0,c.jsx)(t.Z,{to:"/home","aria-label":"Home",children:(0,c.jsx)("svg",{className:r.icon,width:"38px",height:"38px",children:(0,c.jsx)("use",{href:"".concat(s.Z,"#icon-home3")})})})}),(0,c.jsx)("li",{children:(0,c.jsx)(t.Z,{to:"/statistics","aria-label":"Statistics",children:(0,c.jsx)("svg",{className:r.icon,width:"38px",height:"38px",children:(0,c.jsx)("use",{href:"".concat(s.Z,"#icon-baseline-timeline")})})})}),(0,c.jsx)("li",{children:(0,c.jsx)(t.Z,{to:"/currency","aria-label":"Currency",children:(0,c.jsx)("svg",{className:r.icon,width:"38px",height:"38px",children:(0,c.jsx)("use",{href:"".concat(s.Z,"#icon-baseline-dollar")})})})})]})})}},3761:function(e,a,n){n.r(a),n.d(a,{default:function(){return pe}});var t={wrapper:"Home_wrapper__53Los",mainMobile:"Home_mainMobile__FYfgM",mainTabletAndDesktop:"Home_mainTabletAndDesktop__EA5yb",sidebar:"Home_sidebar__74EFX",main:"Home_main__4+rG5"},r=n(820),s=n(7384),c=n(9628),i=n(1413),o=n(9439),l=n(2791),_=n(9434),d=n(3433),m="Transactions_tableBg__zIQxE",u="Transactions_transactionsTable__83vc7",h="Transactions_transactionsTableHead__8+gku",x="Transactions_thName__3q6MS",p="Transactions_iconSort__6FlXB",f="Transactions_iconTransactions__lZpcx",b="Transactions_amountPlus__gFaHt",j="Transactions_amountMinus__4FyfO",v="Transactions_tablePlus__VfqW1",g="Transactions_tableMinus__Li-bx",y=n(3439),N=n(9874),k=n(7380),T=n(4675),Z="ModalConfirmDelete_modal__h1p0a",M="ModalConfirmDelete_modal__overlay__C6aKg",C="ModalConfirmDelete_modal__close__-sOJz",S="ModalConfirmDelete_modal__title__GTUI3",E="ModalConfirmDelete_btn_container__4476O",w=n(184),A=function(e){var a=e.onConfirm,n=(0,_.I0)(),t=function(){n((0,N.Nu)(!1))};return(0,_.v9)(k.Uk)?(0,w.jsx)("div",{className:M,children:(0,w.jsx)("div",{className:Z,children:(0,w.jsxs)("div",{children:[(0,w.jsxs)("h5",{className:S,children:["Are you sure you want to delete this transaction?"," ",(0,w.jsx)("p",{children:"*This action cannot be undone."})]}),(0,w.jsx)("button",{type:"button",className:C,onClick:t,children:(0,w.jsx)("svg",{width:"16px",height:"16px",children:(0,w.jsx)("use",{href:"".concat(y.Z,"#icon-close")})})}),(0,w.jsxs)("div",{className:E,children:[(0,w.jsx)(T.zx,{type:"button",theme:"color",onClick:a,children:"Yes, Delete"}),(0,w.jsx)(T.zx,{type:"button",theme:"white",onClick:t,children:"Cancel"})]})]})})}):null},D=function(e){var a=e.transactions,n=e.onDelete,t=e.onEdit,r=(0,l.useState)({column:null,direction:"asc"}),s=(0,o.Z)(r,2),c=s[0],i=s[1],k=(0,l.useMemo)((function(){return c.column?(0,d.Z)(a).sort((function(e,a){var n=e[c.column],t=a[c.column];return"date"===c.column&&(n=new Date(n),t=new Date(t)),n<t?"asc"===c.direction?-1:1:n>t?"asc"===c.direction?1:-1:0})):a}),[a,c]),T=(0,l.useState)(null),Z=(0,o.Z)(T,2),M=Z[0],C=Z[1],S=(0,_.I0)(),E=function(e){return"Income"===e?b:"Expense"===e?j:""},D=function(e){var a=c.column===e&&"asc"===c.direction?"desc":"asc";i({column:e,direction:a})},F=function(e){var a=new Date(e),n=a.getDate().toString().padStart(2,"0"),t=(a.getMonth()+1).toString().padStart(2,"0"),r=a.getFullYear();return"".concat(n,".").concat(t,".").concat(r)};return(0,w.jsxs)("div",{className:m,children:[(0,w.jsx)(A,{onConfirm:function(){n(M),S((0,N.Nu)(!1))}}),(0,w.jsxs)("table",{className:u,children:[(0,w.jsx)("thead",{className:h,children:(0,w.jsxs)("tr",{children:[(0,w.jsx)("th",{onClick:function(){return D("date")},title:"Sort by Date",children:(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)("span",{children:"Date"}),(0,w.jsx)("svg",{className:p,width:"20px",height:"20px",children:(0,w.jsx)("use",{href:"".concat(y.Z,"#icon-sort")})})]})}),(0,w.jsx)("th",{onClick:function(){return D("type")},title:"Sort by type",children:(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)("span",{children:"Type"}),(0,w.jsx)("svg",{className:p,width:"20px",height:"20px",children:(0,w.jsx)("use",{href:"".concat(y.Z,"#icon-sort")})})]})}),(0,w.jsx)("th",{onClick:function(){return D("category")},title:"Sort by category",children:(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)("span",{children:"Category"}),(0,w.jsx)("svg",{className:p,width:"20px",height:"20px",children:(0,w.jsx)("use",{href:"".concat(y.Z,"#icon-sort")})})]})}),(0,w.jsx)("th",{children:(0,w.jsx)("div",{className:x,children:(0,w.jsx)("span",{children:"Comment"})})}),(0,w.jsx)("th",{onClick:function(){return D("sum")},title:"Sort by sum",children:(0,w.jsxs)("div",{className:x,children:[(0,w.jsx)("span",{children:"Amount"}),(0,w.jsx)("svg",{className:p,width:"20px",height:"20px",children:(0,w.jsx)("use",{href:"".concat(y.Z,"#icon-sort")})})]})}),(0,w.jsx)("th",{children:"Options"})]})}),(0,w.jsx)("tbody",{children:k.map((function(e){return(0,w.jsxs)("tr",{"data-type":e.type,children:[(0,w.jsx)("td",{"data-label":"Date",children:F(e.date)}),(0,w.jsx)("td",{"data-label":"Type",children:(a=e.type,"Expense"===a?(0,w.jsx)("span",{className:g,children:"-"}):"Income"===a?(0,w.jsx)("span",{className:v,children:"+"}):a)}),(0,w.jsx)("td",{"data-label":"Category",children:e.category}),(0,w.jsx)("td",{"data-label":"Comment",children:e.comment}),(0,w.jsx)("td",{"data-label":"Sum",className:E(e.type),children:e.sum}),(0,w.jsxs)("td",{"data-label":"Options",children:[(0,w.jsx)("svg",{className:f,width:"20px",height:"20px",onClick:function(){t(e)},children:(0,w.jsx)("use",{href:"".concat(y.Z,"#icon-pencil2")})}),(0,w.jsx)("svg",{className:f,width:"20px",height:"20px",onClick:function(){return a=e._id,C(a),void S((0,N.Nu)(!0));var a},children:(0,w.jsx)("use",{href:"".concat(y.Z,"#icon-bin")})})]})]},e._id);var a}))})]})]})},F=n(3260),P="ButtonAddTransactions_add_transaction_btn__DAp3y",I=function(){var e=(0,_.I0)();return(0,w.jsx)("button",{onClick:function(){e((0,N._p)(!0))},className:P,children:"+"})},B="FilterTransaction_filterTransaction__w0JuX",L="FilterTransaction_selectors__qyAVa",q="FilterTransaction_filterSelect__YASOa",O="FilterTransaction_filterButton__wsesJ",Y={control:function(e){return(0,i.Z)((0,i.Z)({},e),{},{borderRadius:"30px",borderColor:"#ccc"})},menu:function(e){return(0,i.Z)((0,i.Z)({},e),{},{borderRadius:"30px"})},menuList:function(e){return(0,i.Z)((0,i.Z)({},e),{},{borderRadius:"30px",padding:"0px"})},option:function(e,a){var n=a.isFocused,t=(a.isSelected,(0,i.Z)({},e));return n&&(t=(0,i.Z)((0,i.Z)({},t),{},{borderRadius:"30px"})),t}},H=function(e){var a=e.onFilter,n=new Date,t=n.getFullYear(),r=n.getMonth()+1,s=(0,l.useState)({value:t,label:t.toString()}),c=(0,o.Z)(s,2),i=c[0],_=c[1],d=(0,l.useState)({value:r.toString(),label:new Intl.DateTimeFormat("en-US",{month:"long"}).format(n)}),m=(0,o.Z)(d,2),u=m[0],h=m[1],x=(0,l.useState)(10),p=(0,o.Z)(x,2),f=p[0],b=p[1];return(0,w.jsxs)("div",{className:B,children:[(0,w.jsxs)("div",{className:L,children:[(0,w.jsx)("label",{htmlFor:"year-select",children:"Year"}),(0,w.jsx)(F.ZP,{inputId:"year-select",options:[{value:2020,label:"2020"},{value:2021,label:"2021"},{value:2022,label:"2022"},{value:2023,label:"2023"},{value:2024,label:"2024"}],value:i,onChange:_,styles:Y})]}),(0,w.jsxs)("div",{className:L,children:[(0,w.jsx)("label",{htmlFor:"month-select",children:"Month"}),(0,w.jsx)(F.ZP,{inputId:"month-select",options:[{value:"1",label:"January"},{value:"2",label:"February"},{value:"3",label:"March"},{value:"4",label:"April"},{value:"5",label:"May"},{value:"6",label:"June"},{value:"7",label:"July"},{value:"8",label:"August"},{value:"9",label:"September"},{value:"10",label:"October"},{value:"11",label:"November"},{value:"12",label:"December"}],value:u,onChange:h,styles:Y})]}),(0,w.jsxs)("div",{className:L,children:[(0,w.jsx)("label",{htmlFor:"limit-input",children:"Limit"}),(0,w.jsx)("input",{id:"limit-input",className:q,type:"number",value:f,onChange:function(e){var a=parseInt(e.target.value,10);b(a>=0?a:0)}})]}),(0,w.jsx)(I,{}),(0,w.jsx)("button",{className:O,onClick:function(){a({year:i.value,month:u.value,limit:parseInt(f,10),page:1})},children:"Filter"})]})},J=n(6048),V=n.n(J),U={paginateContainer:"Pagination_paginateContainer__V6vxN",pagination:"Pagination_pagination__mVvOv",active:"Pagination_active__q3h4d",disabled:"Pagination_disabled__1LE7y",break:"Pagination_break__EPZjA"},R=function(e){var a=e.currentPage,n=e.totalPages,t=e.onPageChange;return(0,w.jsx)("div",{className:U.paginateContainer,children:(0,w.jsx)(V(),{previousLabel:"\u2190 Previous",nextLabel:"Next \u2192",breakLabel:"...",pageCount:n,forcePage:a-1,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){t(e.selected+1)},containerClassName:U.pagination,activeClassName:U.active,disabledClassName:U.disabled,previousClassName:U.previous,nextClassName:U.next,breakClassName:U.break})})},z=n(8357),W=n(8071),X=n(112),K=n(5861),G=n(4687),Q=n.n(G),$=n(1799),ee=n.n($),ae=(n(1778),n(5705)),ne=n(8007),te={modal:"ModalAddTransaction_modal__92Wan",modal__overlay:"ModalAddTransaction_modal__overlay__5muZL",modal__close:"ModalAddTransaction_modal__close__2oFKS",modal__title:"ModalAddTransaction_modal__title__lkrl8",form__label:"ModalAddTransaction_form__label__pL9sF",form__checkbox_container:"ModalAddTransaction_form__checkbox_container__Ewtgx",form__checkbox_label:"ModalAddTransaction_form__checkbox_label__fP5ud",form__checkbox_label_expense:"ModalAddTransaction_form__checkbox_label_expense__Pkkrh",form__checkbox_label_income:"ModalAddTransaction_form__checkbox_label_income__1jimB",form__checkbox_input:"ModalAddTransaction_form__checkbox_input__mqlbb",form__checkbox_custom:"ModalAddTransaction_form__checkbox_custom__TZ4ho",form__slider:"ModalAddTransaction_form__slider__UGKmj",form__input:"ModalAddTransaction_form__input__mcnWJ",form__input_flex:"ModalAddTransaction_form__input_flex__JnydG",form__date:"ModalAddTransaction_form__date__7R5ye",form__flex_container:"ModalAddTransaction_form__flex_container__agrkZ",form__category:"ModalAddTransaction_form__category__9vIwc",form__category_active:"ModalAddTransaction_form__category_active__eIpA1",form__btn_container:"ModalAddTransaction_form__btn_container__Lecm6",error_message:"ModalAddTransaction_error_message__J5jVO"},re=function(e){var a=e.addTransaction,n={type:!1,sum:"",category:"",date:new Date,comment:""},t=ne.Ry().shape({type:ne.Z_(),sum:ne.Rx().integer("Sum must be an integer").positive("Sum must be a positive number").max(1e6,"Sum must not exceed 1,000,000").required("Sum is required"),category:ne.Z_().required("Category is required"),date:ne.hT().required("Date is required"),comment:ne.Z_()}),r=(0,_.I0)(),s=(0,_.v9)(k.IZ),c=(0,_.v9)(X.t6),o=function(){r((0,N._p)(!1))},l=function(){var e=(0,K.Z)(Q().mark((function e(n,t){var r,s,c;return Q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.setSubmitting,s=t.resetForm,r(!0);try{c={sum:n.sum,date:n.date.toISOString(),type:n.type?"Income":"Expense",category:n.category,comment:n.comment},a(c)}catch(i){console.error("Error adding transaction:",i)}finally{r(!1),s(),o()}case 3:case"end":return e.stop()}}),e)})));return function(a,n){return e.apply(this,arguments)}}();return s?(0,w.jsx)("div",{className:te.modal__overlay,children:(0,w.jsxs)("div",{className:te.modal,children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("h5",{className:te.modal__title,children:"Add Transaction"}),(0,w.jsx)("button",{type:"button",className:te.modal__close,onClick:o,children:(0,w.jsx)("svg",{width:"16px",height:"16px",children:(0,w.jsx)("use",{href:"".concat(y.Z,"#icon-close")})})})]}),(0,w.jsx)("div",{children:(0,w.jsx)(ae.J9,{initialValues:n,onSubmit:l,validationSchema:t,children:function(e){var a=e.isSubmitting,t=e.handleSubmit,r=e.setFieldValue,s=e.values,l=e.setValues,_=e.setErrors;return(0,w.jsxs)(ae.l0,{onSubmit:t,children:[(0,w.jsx)("div",{className:te.form__checkbox_container,children:(0,w.jsxs)("label",{className:te.form__checkbox_label,children:[(0,w.jsx)("span",{htmlFor:"type",className:"".concat(te.form__checkbox_label," ").concat(!0===s.type?te.form__checkbox_label_income:null),children:"Income"}),(0,w.jsx)(ae.gN,{type:"checkbox",name:"type",id:"type",onClick:function(){l((0,i.Z)((0,i.Z)({},n),{},{type:s.type})),_({})},className:te.form__checkbox_input}),(0,w.jsx)("div",{className:te.form__checkbox_custom,children:(0,w.jsx)("div",{className:te.form__slider,children:!1===s.type?"-":"+"})}),(0,w.jsx)("span",{htmlFor:"type",className:"".concat(te.form__checkbox_label," ").concat(!1===s.type?te.form__checkbox_label_expense:null),children:"Expense"})]})}),(0,w.jsxs)("div",{className:te.form__flex_container,children:[(0,w.jsx)("div",{className:te.form__input,children:(0,w.jsxs)("label",{className:te.form__label,children:[(0,w.jsxs)(ae.gN,{as:"select",name:"category",className:"".concat(te.form__category," ").concat(""!==s.category?te.form__category_active:null),children:[(0,w.jsx)("option",{hidden:!0,value:"",children:"Select a category"}),c.filter((function(e){return!0===s.type?"Income"===e.type:"Expense"===e.type})).map((function(e){return(0,w.jsx)("option",{value:e._id,children:e.name},e._id)}))]}),(0,w.jsx)(ae.Bc,{name:"category",component:"div",className:te.error_message})]})}),(0,w.jsxs)("div",{className:te.form__input_flex,children:[(0,w.jsxs)("label",{children:[(0,w.jsx)(ae.gN,{type:"number",name:"sum",placeholder:"00",className:te.form__input}),(0,w.jsx)(ae.Bc,{name:"sum",component:"div",className:te.error_message})]}),(0,w.jsxs)("label",{children:[(0,w.jsx)(ee(),{value:s.date,onChange:function(e){return r("date",e)},className:"".concat(te.form__input," ").concat(te.form__date),dateFormat:"YYYY-MM-DD",timeFormat:!1}),(0,w.jsx)("span",{className:te.form__date_icon}),(0,w.jsx)(ae.Bc,{name:"date",component:"div",className:te.error_message})]})]}),(0,w.jsx)("div",{className:te.form__input,children:(0,w.jsx)("label",{children:(0,w.jsx)(ae.gN,{as:"input",type:"text",name:"comment",placeholder:"Comment",className:te.form__input})})})]}),(0,w.jsxs)("div",{className:te.form__btn_container,children:[(0,w.jsx)(T.zx,{type:"submit",theme:"color",disabled:a,children:"Add"}),(0,w.jsx)(T.zx,{type:"button",theme:"white",onClick:o,children:"Cancel"})]})]})}})})]})}):null},se=n(9085),ce={modal:"ModalEditTransaction_modal__aESX1",modal__overlay:"ModalEditTransaction_modal__overlay__7b9Pt",modal__close:"ModalEditTransaction_modal__close__OWdVa",modal__title:"ModalEditTransaction_modal__title__Lmmva",form__label:"ModalEditTransaction_form__label__ZJHe-",form__checkbox_container:"ModalEditTransaction_form__checkbox_container__fl6ho",form__checkbox_label:"ModalEditTransaction_form__checkbox_label__o8IC2",form__checkbox_label_expense:"ModalEditTransaction_form__checkbox_label_expense__BFrlP",form__checkbox_label_income:"ModalEditTransaction_form__checkbox_label_income__hOXJt",form__checkbox_input:"ModalEditTransaction_form__checkbox_input__uiOCB",form__checkbox_custom:"ModalEditTransaction_form__checkbox_custom__3KD4B",form__slider:"ModalEditTransaction_form__slider__TPwSP",form__input:"ModalEditTransaction_form__input__c6Cb5",form__input_flex:"ModalEditTransaction_form__input_flex__Px3k1",form__date:"ModalEditTransaction_form__date__-TvAf",form__flex_container:"ModalEditTransaction_form__flex_container__T308u",form__category:"ModalEditTransaction_form__category__MvXDV",form__category_active:"ModalEditTransaction_form__category_active__GbP68",form__btn_container:"ModalEditTransaction_form__btn_container__OXqrQ",error_message:"ModalEditTransaction_error_message__kKrvE"},ie=function(e){var a=e.editedTransaction,n=e.onTransactionUpdate,t={type:!!a&&"Income"===a.type,sum:a?a.sum:"",category:a?a.categoryId:"",date:a?new Date(a.date):new Date,comment:a?a.comment:""},r=ne.Ry().shape({type:ne.Z_(),sum:ne.Rx().integer("Sum must be an integer").positive("Sum must be a positive number").max(1e6,"Sum must not exceed 1,000,000").required("Sum is required"),category:ne.Z_().required("Category is required"),date:ne.hT().required("Date is required"),comment:ne.Z_()}),s=(0,_.I0)(),c=(0,_.v9)(k.Io),i=(0,_.v9)(X.t6),o=function(){s((0,N.Lj)(!1))},l=function(){var e=(0,K.Z)(Q().mark((function e(t,r){var c,i,l;return Q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.setSubmitting,i=r.resetForm,c(!0),e.prev=2,l={transactionID:a._id,sum:t.sum,date:t.date.toISOString().split("T")[0],type:t.type?"Income":"Expense",category:t.category,comment:t.comment},e.next=6,s((0,z.Ld)(l));case 6:return e.next=8,s((0,W.M_)());case 8:n(),se.Am.success("Transaction updated successfully!"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.error("Error updating transaction:",e.t0),se.Am.error("Error updating transaction. Please try again.");case 16:return e.prev=16,c(!1),i(),o(),e.finish(16);case 21:case"end":return e.stop()}}),e,null,[[2,12,16,21]])})));return function(a,n){return e.apply(this,arguments)}}();return c?(0,w.jsx)("div",{className:ce.modal__overlay,children:(0,w.jsxs)("div",{className:ce.modal,children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("h5",{className:ce.modal__title,children:"Edit Transaction"}),(0,w.jsx)("button",{type:"button",className:ce.modal__close,onClick:o,children:(0,w.jsx)("svg",{width:"16px",height:"16px",children:(0,w.jsx)("use",{href:"".concat(y.Z,"#icon-close")})})})]}),(0,w.jsx)("div",{children:(0,w.jsx)(ae.J9,{initialValues:t,onSubmit:l,validationSchema:r,children:function(e){var a=e.isSubmitting,n=e.handleSubmit,t=e.setFieldValue,r=e.values;e.setValues,e.setErrors;return(0,w.jsxs)(ae.l0,{onSubmit:n,children:[(0,w.jsx)("div",{className:ce.form__checkbox_container,children:(0,w.jsxs)("label",{className:ce.form__checkbox_label,children:[(0,w.jsx)("span",{htmlFor:"type",className:"".concat(ce.form__checkbox_label," ").concat(!0===r.type?ce.form__checkbox_label_income:null),children:"Income"}),(0,w.jsx)(ae.gN,{type:"checkbox",name:"type",id:"type",disabled:!0,className:ce.form__checkbox_input}),(0,w.jsx)("div",{className:ce.form__checkbox_custom,children:(0,w.jsx)("div",{className:ce.form__slider,children:!1===r.type?"-":"+"})}),(0,w.jsx)("span",{htmlFor:"type",className:"".concat(ce.form__checkbox_label," ").concat(!1===r.type?ce.form__checkbox_label_expense:null),children:"Expense"})]})}),(0,w.jsxs)("div",{className:ce.form__flex_container,children:[(0,w.jsx)("div",{className:ce.form__input,children:(0,w.jsxs)("label",{className:ce.form__label,children:[(0,w.jsx)(ae.gN,{as:"select",name:"category",className:"".concat(ce.form__category," ").concat(""!==r.category?ce.form__category_active:null),children:i.filter((function(e){return!0===r.type?"Income"===e.type:"Expense"===e.type})).map((function(e){return(0,w.jsx)("option",{value:e._id,children:e.name},e._id)}))}),(0,w.jsx)(ae.Bc,{name:"category",component:"div",className:ce.error_message})]})}),(0,w.jsxs)("div",{className:ce.form__input_flex,children:[(0,w.jsxs)("label",{children:[(0,w.jsx)(ae.gN,{type:"number",name:"sum",placeholder:"00",className:ce.form__input}),(0,w.jsx)(ae.Bc,{name:"sum",component:"div",className:ce.error_message})]}),(0,w.jsxs)("label",{children:[(0,w.jsx)(ee(),{value:r.date,onChange:function(e){return t("date",e)},className:"".concat(ce.form__input," ").concat(ce.form__date),dateFormat:"YYYY-MM-DD",timeFormat:!1}),(0,w.jsx)("span",{className:ce.form__date_icon}),(0,w.jsx)(ae.Bc,{name:"date",component:"div",className:ce.error_message})]})]}),(0,w.jsx)("div",{className:ce.form__input,children:(0,w.jsx)("label",{children:(0,w.jsx)(ae.gN,{as:"input",type:"text",name:"comment",placeholder:"Comment",className:ce.form__input})})})]}),(0,w.jsxs)("div",{className:ce.form__btn_container,children:[(0,w.jsx)(T.zx,{type:"submit",theme:"color",disabled:a,children:"Edit"}),(0,w.jsx)(T.zx,{type:"button",theme:"white",onClick:o,children:"Cancel"})]})]})}})})]})}):null},oe="EmptyWallet_container__f3TeQ",le="EmptyWallet_emptywallet__nF-NS",_e=function(){return(0,w.jsx)("div",{className:oe,children:(0,w.jsx)("div",{className:le,children:(0,w.jsx)("p",{children:"No transactions to display"})})})},de=function(){var e=(0,_.I0)(),a=(0,_.v9)(X.ig),n=(0,l.useState)({page:1,totalPages:0}),t=(0,o.Z)(n,2),r=t[0],s=t[1],c=(0,l.useState)(!1),d=(0,o.Z)(c,2),m=d[0],u=d[1],h=(0,l.useState)(null),x=(0,o.Z)(h,2),p=x[0],f=x[1],b=(0,l.useState)({year:(new Date).getFullYear(),month:(new Date).getMonth()+1,limit:10,page:1}),j=(0,o.Z)(b,2),v=j[0],g=j[1];(0,l.useEffect)((function(){e((0,z.Z6)(v)).then((function(e){e.payload&&e.payload.pagination&&s(e.payload.pagination)}))}),[e,v,m]);return(0,w.jsxs)("div",{children:[(0,w.jsx)(H,{onFilter:function(e){g((0,i.Z)((0,i.Z)((0,i.Z)({},v),e),{},{page:1}))}}),(0,w.jsx)(re,{addTransaction:function(a){e((0,z.dT)(a)).then((function(){u((function(e){return!e})),e((0,W.M_)())})).catch((function(e){console.error("Error while adding the transaction:",e)}))}}),(0,w.jsx)(ie,{editedTransaction:p,onTransactionUpdate:function(){return u((function(e){return!e}))}}),0===a.length?(0,w.jsx)(_e,{}):(0,w.jsxs)(w.Fragment,{children:[a.length>0&&(0,w.jsx)("div",{style:{marginBottom:"15px"},children:(0,w.jsxs)("p",{style:{fontSize:"15px",marginLeft:"10px",marginBottom:"-10px"},children:["Number of transactions found: ",r.total]})}),(0,w.jsx)(D,{transactions:a,onDelete:function(a){e((0,z.Ks)(a)).then((function(){u((function(e){return!e})),e((0,W.M_)())})).catch((function(e){console.error("Error while deleting the transaction:",e)}))},onEdit:function(a){f(a),e((0,N.Lj)(!0))}}),a.length>0&&r.totalPages>1&&(0,w.jsx)(R,{currentPage:r.page,totalPages:r.totalPages,onPageChange:function(e){g((0,i.Z)((0,i.Z)({},v),{},{page:e}))}})]})]})},me=n(4270),ue=n(9443),he=n(4805),xe=n(2296),pe=function(){var e=(0,he.useMediaQuery)({maxWidth:767}),a=(0,_.I0)();return(0,l.useEffect)((function(){a((0,z.Us)())}),[a]),(0,w.jsxs)("div",{className:t.background,children:[(0,w.jsx)(me.q,{children:(0,w.jsx)("title",{children:"Home"})}),(0,w.jsxs)("section",{children:[(0,w.jsx)(xe.k,{}),(0,w.jsxs)("div",{className:t.wrapper,children:[e?(0,w.jsxs)("div",{className:t.mainMobile,children:[(0,w.jsx)(ue.Z,{}),(0,w.jsx)(s.y,{}),(0,w.jsx)(de,{})]}):(0,w.jsxs)("div",{className:t.mainTabletAndDesktop,children:[(0,w.jsxs)("div",{className:t.sidebar,children:[(0,w.jsxs)("div",{children:[" ",(0,w.jsx)(c.Z,{}),(0,w.jsx)(s.y,{})]}),(0,w.jsx)("div",{children:(0,w.jsx)(r.w,{})})]}),(0,w.jsx)("div",{className:t.main,children:(0,w.jsx)(de,{})})]})," "]})]})]})}}}]);
//# sourceMappingURL=663.46a9e336.chunk.js.map