"use strict";(self.webpackChunkwallet_application=self.webpackChunkwallet_application||[]).push([[323],{87384:function(e,t,n){n.d(t,{y:function(){return u}});var s=n(72791),a=n(59434),r="Balance_balance__tUx3D",c="Balance_title__aUwwk",i="Balance_amount__t4xet",l=n(45094),o=n(18071),d=n(80184),u=function(){var e=(0,a.I0)(),t=(0,a.v9)(l.uy),n=t?t.balance:0;return(0,s.useEffect)((function(){e((0,o.M_)())}),[e]),(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("p",{className:c,children:"YOUR BALANCE"}),(0,d.jsxs)("p",{className:i,children:["PLN ",n]})]})}},20820:function(e,t,n){n.d(t,{w:function(){return u}});var s=n(15861),a=n(29439),r=n(64687),c=n.n(r),i=n(72791),l={tableBg:"CurrencyTable_tableBg__nplZ5",currencyTable:"CurrencyTable_currencyTable__1iH+4",currencyTableHead:"CurrencyTable_currencyTableHead__0L-k0"},o=n(36234),d=n(80184),u=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],r=t[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,s.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.$.get("/currencies");case 3:t=e.sent,r(t.data.data.currencies),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching currencies",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,d.jsx)("div",{className:l.tableBg,children:(0,d.jsxs)("table",{className:l.currencyTable,children:[(0,d.jsx)("thead",{className:l.currencyTableHead,children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Currency"}),(0,d.jsx)("th",{children:"Purchase"}),(0,d.jsx)("th",{children:"Sell"})]})}),(0,d.jsx)("tbody",{className:l.currencyTableBody,children:n.map((function(e){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e.code}),(0,d.jsx)("td",{children:e.bid}),(0,d.jsx)("td",{children:e.ask})]},e._id)}))})]})})}},52959:function(e,t,n){n.d(t,{Z:function(){return u}});n(72791);var s=n(57689),a=n(11087),r="ActiveNavLink_link__Srke3",c="ActiveNavLink_active__uzCgI",i=n(80184),l=function(e){var t=e.to,n=e.children,l=(0,s.WU)(t),o=(0,s.bS)({path:l.pathname,end:!0})?c:r;return(0,i.jsx)(a.OL,{to:t,className:o,children:n})},o={icon:"Navigation_icon__lPT0N"},d=n(13439),u=function(){return(0,i.jsx)("nav",{children:(0,i.jsxs)("ul",{className:o.navigation,children:[(0,i.jsx)("li",{children:(0,i.jsxs)(l,{to:"/home",children:[(0,i.jsx)("svg",{className:o.icon,width:"38px",height:"38px",children:(0,i.jsx)("use",{href:"".concat(d.Z,"#icon-home3")})}),"Home"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l,{to:"/statistics",children:[(0,i.jsx)("svg",{className:o.icon,width:"38px",height:"38px",children:(0,i.jsx)("use",{href:"".concat(d.Z,"#icon-baseline-timeline")})}),"Statistics"]})})]})})}},31323:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var s=n(29439),a={statsContainer:"Stats_statsContainer__0UttW",charts:"Stats_charts__cVmoi",selectors:"Stats_selectors__S6SvL"},r=n(72791),c=n(35967),i=n(43623),l=n(80184);c.kL.register(c.qi,c.u,c.De);var o=function(){return(0,l.jsx)("div",{style:{width:"350px",height:"350px"},children:(0,l.jsx)(i.$I,{options:{plugins:{legend:{position:"top"},title:{display:!0,text:"Statistics in total"}}},data:{labels:["Expenses","Incomes"],datasets:[{label:"Amount",data:[5e3,4300],backgroundColor:["rgba(255, 99, 132)","rgba(75, 192, 192)"],hoverBackgroundColor:["rgba(255, 99, 162)","rgba(75, 192, 202)"],borderColor:["rgba(255, 99, 132, 1)","rgba(75, 192, 192, 1)"],borderWidth:1}]}})})},d=n(90740),u=n.n(d);c.kL.register(c.uw,c.f$,c.ZL,c.Dx,c.u,c.De);var h=function(){var e=["January","February","March","April","May","June","July"],t={labels:e,datasets:[{label:"Expenses",data:e.map((function(){return u().datatype.number({min:0,max:1e4})})),backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Incomes",data:e.map((function(){return u().datatype.number({min:0,max:1e4})})),backgroundColor:"rgba(75, 192, 192)"}]};return(0,l.jsx)("div",{style:{width:"450px",height:"450px"},children:(0,l.jsx)(i.$Q,{options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Statistics in months"}}},data:t})})},x=n(53260),_=function(){var e=(0,r.useState)(null),t=(0,s.Z)(e,2),n=t[0],c=t[1];return(0,l.jsxs)("div",{className:a.statsContainer,children:["Statistics",(0,l.jsxs)("div",{className:a.charts,children:[(0,l.jsx)(o,{}),(0,l.jsx)(h,{})]}),(0,l.jsxs)("div",{className:a.selections,children:["Select values",(0,l.jsx)("div",{className:a.selectors,children:(0,l.jsx)(x.ZP,{options:[{value:"expenses",label:"Expenses"},{value:"incomes",label:"Incomes"}],value:n,onChange:function(e){c(e)}})})]})]})},b="Statistics_background__0M0Jv",p="Statistics_dashboard_container__nrfSw",j="Statistics_container__88ahX",v="Statistics_sidebar__Qylm+",m="Statistics_main__LSNEX",f=n(20820),g=n(87384),y=n(52959),N=n(54270),S=function(){return(0,l.jsxs)("div",{className:b,children:[(0,l.jsx)(N.q,{children:(0,l.jsx)("title",{children:"Statistics"})}),(0,l.jsx)("section",{className:p,children:(0,l.jsxs)("div",{className:j,children:[(0,l.jsxs)("div",{className:v,children:[(0,l.jsx)(y.Z,{}),(0,l.jsx)(g.y,{}),(0,l.jsx)(f.w,{})]}),(0,l.jsx)("div",{className:m,children:(0,l.jsx)(_,{})})]})})]})}}}]);
//# sourceMappingURL=323.21e96b86.chunk.js.map