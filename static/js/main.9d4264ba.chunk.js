(window.webpackJsonpagency_web=window.webpackJsonpagency_web||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),i=n(3),s=n(4),o=n(6),m=n(5),p=n(7);var u={h1:{marginTop:"50px"},input:{width:"70%",margin:"25px",textAlign:"center"}},y=function(){return r.a.createElement("div",{className:"Agency"},r.a.createElement("h1",{style:u.h1},"Agency"),r.a.createElement("input",{style:u.input,name:"Agency_HashCode",type:"text",placeholder:"HashCode"}),r.a.createElement("input",{style:u.input,name:"Agency_OTP",type:"text",placeholder:"OTP"}),r.a.createElement("button",null,"Search"))};var h={h1:{marginTop:"50px"},input:{width:"70%",margin:"25px",textAlign:"center"}},d=function(){return r.a.createElement("div",{style:h.div,className:"User"},r.a.createElement("h1",{style:h.h1},"User"),r.a.createElement("input",{style:h.input,name:"User_HashCode",type:"text",placeholder:"HashCode"}),r.a.createElement("input",{style:h.input,name:"User_OTP",type:"text",placeholder:"OTP"}),r.a.createElement("button",null,"Search"))};var g={h1:{marginTop:"50px"},input:{width:"70%",margin:"25px",textAlign:"center"}},E=function(){return r.a.createElement("div",{className:"Join"},r.a.createElement("h1",{style:g.h1},"Government"),r.a.createElement("input",{style:g.input,name:"join_id",type:"text",placeholder:"\uc544\uc774\ub514"}),r.a.createElement("input",{style:g.input,name:"join_pw",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638"}),r.a.createElement("input",{style:g.input,name:"join_name",type:"text",placeholder:"\uc774\ub984"}))},v=(n(13),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isUser:!0,isAgency:!1,isGovernment:!1},n.User=function(){n.setState({isUser:!0,isAgency:!1,isGovernment:!1})},n.Agency=function(){n.setState({isUser:!1,isAgency:!0,isGovernment:!1})},n.Government=function(){n.setState({isUser:!1,isAgency:!1,isGovernment:!0})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isUser,n=e.isAgency;return r.a.createElement("div",{className:"App"},r.a.createElement("center",null,r.a.createElement("button",{onClick:this.User},"User"),r.a.createElement("button",{onClick:this.Agency},"Agency"),r.a.createElement("button",{onClick:this.Government},"Government"),t?r.a.createElement(d,null):n?r.a.createElement(y,null):r.a.createElement(E,null)))}}]),t}(r.a.Component));l.a.render(r.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9d4264ba.chunk.js.map