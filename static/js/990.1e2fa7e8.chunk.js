"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[990],{5437:function(e,t,n){var a=n(4165),s=n(5861),r=n(9439),i=n(2791),l=n(3360),o=n(3027),c=n(2469),d=n(1243),u=n(375),m=n(184);t.Z=function(){var e=(0,i.useState)(window.innerWidth),t=(0,r.Z)(e,2),n=t[0],h=t[1];window.addEventListener("resize",(function(){h(window.innerWidth)}));var v=(0,i.useState)(""),p=(0,r.Z)(v,2),Z=p[0],x=p[1],f=(0,i.useState)(""),g=(0,r.Z)(f,2),b=g[0],j=g[1],w=(0,i.useState)(""),C=(0,r.Z)(w,2),y=C[0],N=C[1],k=(0,i.useState)(null),L=(0,r.Z)(k,2),S=L[0],E=L[1],T=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.Z.post("".concat(u.Z,"/query/api"),{name:Z,email:b,query:y});case 4:200===(n=e.sent).status&&E(n.data.message),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),E(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsx)("div",{className:"container-fluid m-0 py-3 d-flex justify-content-center align-items-center",style:{backgroundColor:"#bbe4e9",minHeight:"100vh"},children:(0,m.jsxs)(o.Z,{className:"border border-0 bg-light p-md-5 p-4 rounded",onSubmit:T,style:{width:n>768?"50%":"100%"},children:[(0,m.jsx)("div",{className:"text-center",children:(0,m.jsx)("span",{className:"fs-2 fw-bold",children:"Contact Us"})}),S&&(0,m.jsx)(c.Z,{className:"w-100",variant:"warning",onClose:function(){return E(null)},dismissible:!0,children:(0,m.jsx)("p",{className:"p-0 m-0",children:S})}),(0,m.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formBasicText",children:[(0,m.jsx)(o.Z.Label,{children:"Name"}),(0,m.jsx)(o.Z.Control,{type:"text",placeholder:"Enter Name",value:Z,onChange:function(e){x(e.target.value)}})]}),(0,m.jsxs)(o.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,m.jsx)(o.Z.Label,{children:"Email address"}),(0,m.jsx)(o.Z.Control,{type:"email",placeholder:"Enter email",value:b,onChange:function(e){j(e.target.value)}}),(0,m.jsx)(o.Z.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),(0,m.jsxs)(o.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[(0,m.jsx)(o.Z.Label,{children:"Enter your message"}),(0,m.jsx)(o.Z.Control,{as:"textarea",rows:4,placeholder:"Type here...",value:y,onChange:function(e){N(e.target.value)}})]}),(0,m.jsx)("div",{className:"text-center",children:(0,m.jsx)(l.Z,{className:"text-center",variant:"primary",type:"submit",children:"Submit"})})]})})}},5990:function(e,t,n){n.r(t);var a=n(4165),s=n(5861),r=n(2791),i=n(1243),l=n(5437),o=n(375),c=n(3925),d=n(184);t.default=function(){var e=(0,r.useContext)(c.Z);return(0,r.useEffect)((function(){var t=function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("".concat(o.Z,"/contact/api"));case 3:200===(n=t.sent).status&&"undefined"!==n.data.loggedUser?(e.setLoggedStatus(!0),e.setLoggedUser(n.data.loggedUser)):e.setLoggedStatus(!1),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0&&e.setLoggedStatus(!1);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t(),window.scrollTo(0,0)}),[]),(0,d.jsx)("div",{className:"mt-5",children:(0,d.jsx)(l.Z,{})})}},2469:function(e,t,n){var a=n(1413),s=n(5987),r=n(1694),i=n.n(r),l=n(2791),o=n(239),c=n(9007),d=n(6445),u=n(162),m=n(2709),h=n(473),v=n(7472),p=n(6543),Z=n(184),x=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],f=(0,v.Z)("h4");f.displayName="DivStyledAsH4";var g=(0,p.Z)("alert-heading",{Component:f}),b=(0,p.Z)("alert-link",{Component:d.Z}),j=l.forwardRef((function(e,t){var n=(0,o.Ch)(e,{show:"onClose"}),r=n.bsPrefix,l=n.show,d=void 0===l||l,v=n.closeLabel,p=void 0===v?"Close alert":v,f=n.closeVariant,g=n.className,b=n.children,j=n.variant,w=void 0===j?"primary":j,C=n.onClose,y=n.dismissible,N=n.transition,k=void 0===N?m.Z:N,L=(0,s.Z)(n,x),S=(0,u.vE)(r,"alert"),E=(0,c.Z)((function(e){C&&C(!1,e)})),T=!0===k?m.Z:k,U=(0,Z.jsxs)("div",(0,a.Z)((0,a.Z)({role:"alert"},T?void 0:L),{},{ref:t,className:i()(g,S,w&&"".concat(S,"-").concat(w),y&&"".concat(S,"-dismissible")),children:[y&&(0,Z.jsx)(h.Z,{onClick:E,"aria-label":p,variant:f}),b]}));return T?(0,Z.jsx)(T,(0,a.Z)((0,a.Z)({unmountOnExit:!0},L),{},{ref:void 0,in:d,children:U})):d?U:null}));j.displayName="Alert",t.Z=Object.assign(j,{Link:b,Heading:g})}}]);
//# sourceMappingURL=990.1e2fa7e8.chunk.js.map