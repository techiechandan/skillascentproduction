"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[659],{4659:function(e,s,a){a.r(s);var t=a(4165),n=a(5861),l=a(9439),r=a(2791),c=a(3360),i=a(3027),o=a(2469),d=a(7689),m=a(1087),u=a(4054),h=a(4459),x=a(1243),p=a(375),v=a(3925),f=a(184);s.default=function(e){e.changeLoggedStatue;var s=(0,r.useContext)(v.Z),a=(0,r.useState)([]),Z=(0,l.Z)(a,2),j=Z[0],b=Z[1],N=(0,r.useState)([]),g=(0,l.Z)(N,2),C=g[0],w=g[1],S=(0,r.useState)(""),y=(0,l.Z)(S,2),k=y[0],B=y[1],L=(0,r.useState)(""),P=(0,l.Z)(L,2),A=P[0],I=P[1],E=(0,r.useState)(""),G=(0,l.Z)(E,2),D=G[0],T=G[1],$=(0,r.useState)(""),O=(0,l.Z)($,2),z=O[0],H=O[1],J=(0,r.useState)(""),M=(0,l.Z)(J,2),R=M[0],U=M[1],V=(0,r.useState)(""),F=(0,l.Z)(V,2),W=F[0],q=F[1],K=(0,r.useState)(""),Q=(0,l.Z)(K,2),X=Q[0],Y=Q[1],_=(0,r.useState)(!1),ee=(0,l.Z)(_,2),se=ee[0],ae=ee[1],te=(0,r.useState)(null),ne=(0,l.Z)(te,2),le=ne[0],re=ne[1],ce=(0,d.s0)(),ie=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(s){var a,n,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s.preventDefault(),a=/^[a-zA-Z ]{4,30}$/,n=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/,l=/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,console.log(k,A,D,z,R,W,X),k.match(a)){e.next=10;break}re("Please enter valid name"),e.next=26;break;case 10:if(A.match(l)){e.next=14;break}re("Please enter valid email"),e.next=26;break;case 14:if(W.match(n)){e.next=18;break}re("Please enter valid password"),e.next=26;break;case 18:if(!W!==X){e.next=22;break}re("Password do not match!"),e.next=26;break;case 22:return e.next=24,x.Z.post("".concat(p.Z,"/user/register/api"),{name:k,email:A,course:D,state:z,city:R,password:W,confirmPassword:X},{withcredentials:!0});case 24:200===e.sent.status&&ce("/user/login");case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(0),re(e.t0.response.data.message),console.log(e.t0.message);case 32:case"end":return e.stop()}}),e,null,[[0,28]])})));return function(s){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){b(h.ZP.getStatesOfCountry("IN"));var e=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.get("BaseUrl/user/auth/api");case 3:200===e.sent.status&&(s.setLoggedStatus(!0),ce("/")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s.setLoggedStatus(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{className:"container-fluid m-0 pt-3 my-5 d-flex flex-column justify-content-center align-items-center",children:[le&&(0,f.jsx)(o.Z,{className:"w-50",variant:"danger",onClose:function(){return re(null)},dismissible:!0,children:(0,f.jsx)("p",{className:"p-0 m-0",children:le})}),(0,f.jsxs)(i.Z,{className:"border p-md-5 p-4 mt-5 rounded shadow",onSubmit:ie,children:[(0,f.jsx)("div",{className:"text-center",children:(0,f.jsx)("span",{className:"fs-2 fw-bold",children:"Register"})}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-md-5 col-12",children:(0,f.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formBasicText",children:[(0,f.jsx)(i.Z.Label,{children:"Full Name"}),(0,f.jsx)(i.Z.Control,{type:"text",placeholder:"Enter full name",value:k,onChange:function(e){B(e.target.value)}})]})}),(0,f.jsx)("div",{className:"col-md-7 col-12",children:(0,f.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,f.jsx)(i.Z.Label,{children:"Email address"}),(0,f.jsx)(i.Z.Control,{type:"email",placeholder:"Enter email",value:A,onChange:function(e){I(e.target.value)}}),(0,f.jsx)(i.Z.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]})})]}),(0,f.jsxs)("div",{className:"row m-0 p-0",children:[(0,f.jsx)("div",{className:"col-md-4 col-12 m-0 p-0 me-md-1",children:(0,f.jsxs)(i.Z.Group,{className:"mb-3",controlId:"",children:[(0,f.jsx)(i.Z.Label,{children:"Course"}),(0,f.jsxs)(i.Z.Select,{"aria-label":"Default select example",onChange:function(e){T(e.target.value)},children:[(0,f.jsx)("option",{children:"Select Course"}),(0,f.jsx)("option",{value:"BCA",children:"BCA"}),(0,f.jsx)("option",{value:"BBA",children:"BBA"}),(0,f.jsx)("option",{value:"B.Tech",children:"B.Tech"}),(0,f.jsx)("option",{value:"BJMC",children:"BJMC"}),(0,f.jsx)("option",{value:"B.Com",children:"B.Com"})]})]})}),(0,f.jsx)("div",{className:"col-md-7 col-12 m-0 p-0",children:(0,f.jsxs)("div",{className:"row p-0 m-0",children:[(0,f.jsxs)("div",{className:"col-6 p-0",children:[(0,f.jsx)(i.Z.Label,{children:"State"}),(0,f.jsxs)(i.Z.Select,{"aria-label":"Default select example",onChange:function(e){var s,a;H(j[e.target.value].name),s="IN",a=j[e.target.value].isoCode,w(u.Z.getCitiesOfState(s,a))},children:[(0,f.jsx)("option",{className:"py-0 selected",children:"Select State"}),j.map((function(e,s){return(0,f.jsx)("option",{className:"py-0",value:s,children:e.name},e.isoCode)})),(0,f.jsx)("option",{vlaue:"Not Listed",children:"Not Listed"})]})]}),(0,f.jsxs)("div",{className:"col-6 ps-1",children:[(0,f.jsx)(i.Z.Label,{children:"City"}),(0,f.jsxs)(i.Z.Select,{"aria-label":"Default select example",onChange:function(e){U(e.target.value)},children:[(0,f.jsx)("option",{children:"Select City"}),C.map((function(e,s){return(0,f.jsx)("option",{vlaue:e.name,children:e.name},s)})),(0,f.jsx)("option",{vlaue:"Not Listed",children:"Not listed"})]})]})]})})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-md-6 col-12",children:(0,f.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,f.jsx)(i.Z.Label,{children:"Password"}),(0,f.jsx)(i.Z.Control,{type:"password",name:"password",placeholder:"Password",value:W,onChange:function(e){q(e.target.value)}}),(0,f.jsx)(i.Z.Text,{className:"text-muted",children:"Password must be of at least 8 characters containing alphabet,numbers and symbols."})]})}),(0,f.jsx)("div",{className:"col-md-6 col-12",children:(0,f.jsxs)(i.Z.Group,{className:"mb-3",controlId:"formBasicConfirmPassword",children:[(0,f.jsx)(i.Z.Label,{children:"Confirm Password"}),(0,f.jsx)(i.Z.Control,{type:"password",name:"confirm-password",placeholder:"Confirm Password",value:X,onChange:function(e){Y(e.target.value)}})]})})]}),(0,f.jsx)(i.Z.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:(0,f.jsx)(i.Z.Check,{type:"checkbox",label:"I agree to terms and conditions",onChange:function(){ae(!se)}})}),(0,f.jsx)("div",{className:"text-center",children:(0,f.jsx)(c.Z,{className:se?"text-center":"text-center disabled",variant:"danger",type:"submit",children:"Submit"})}),(0,f.jsx)("hr",{className:""}),(0,f.jsxs)("div",{className:"text-center my-2",children:[(0,f.jsx)("span",{className:"mx-2",children:"Already reginster?"}),(0,f.jsx)(m.rU,{to:"/user/login",children:"Login"})]})]})]})}},2469:function(e,s,a){var t=a(1413),n=a(5987),l=a(1694),r=a.n(l),c=a(2791),i=a(239),o=a(9007),d=a(6445),m=a(162),u=a(2709),h=a(473),x=a(7472),p=a(6543),v=a(184),f=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],Z=(0,x.Z)("h4");Z.displayName="DivStyledAsH4";var j=(0,p.Z)("alert-heading",{Component:Z}),b=(0,p.Z)("alert-link",{Component:d.Z}),N=c.forwardRef((function(e,s){var a=(0,i.Ch)(e,{show:"onClose"}),l=a.bsPrefix,c=a.show,d=void 0===c||c,x=a.closeLabel,p=void 0===x?"Close alert":x,Z=a.closeVariant,j=a.className,b=a.children,N=a.variant,g=void 0===N?"primary":N,C=a.onClose,w=a.dismissible,S=a.transition,y=void 0===S?u.Z:S,k=(0,n.Z)(a,f),B=(0,m.vE)(l,"alert"),L=(0,o.Z)((function(e){C&&C(!1,e)})),P=!0===y?u.Z:y,A=(0,v.jsxs)("div",(0,t.Z)((0,t.Z)({role:"alert"},P?void 0:k),{},{ref:s,className:r()(j,B,g&&"".concat(B,"-").concat(g),w&&"".concat(B,"-dismissible")),children:[w&&(0,v.jsx)(h.Z,{onClick:L,"aria-label":p,variant:Z}),b]}));return P?(0,v.jsx)(P,(0,t.Z)((0,t.Z)({unmountOnExit:!0},k),{},{ref:void 0,in:d,children:A})):d?A:null}));N.displayName="Alert",s.Z=Object.assign(N,{Link:b,Heading:j})}}]);
//# sourceMappingURL=659.cda28ac3.chunk.js.map