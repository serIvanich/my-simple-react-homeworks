(this["webpackJsonptasks-from-ignat"]=this["webpackJsonptasks-from-ignat"]||[]).push([[0],[,,,,function(e,t,n){e.exports={error:"Greeting_error__2-pm0",containerError:"Greeting_containerError__1pmEK",users:"Greeting_users__pZiTj",altContainer:"Greeting_altContainer__2-rNY",inputCheckbox:"Greeting_inputCheckbox__2-wfm",ageInput:"Greeting_ageInput__iSmrP",text:"Greeting_text__1o167",groupUsers:"Greeting_groupUsers__1tQhX",myAlertContainer:"Greeting_myAlertContainer__2-rmY",myAlert:"Greeting_myAlert__F0iN0",altError:"Greeting_altError__X6mKm"}},,,,function(e,t,n){e.exports={container:"Affairs_container___sMhn",buttonDelete:"Affairs_buttonDelete__28LLa",buttonName:"Affairs_buttonName__Dfxx0",levelBlock:"Affairs_levelBlock__2y4Is",buttonContainer:"Affairs_buttonContainer__1dC3v",all:"Affairs_all__CLqWD",high:"Affairs_high__1VAOQ",middle:"Affairs_middle__2UdWu",low:"Affairs_low__qALod"}},,function(e,t,n){e.exports={containerNav:"HW5_containerNav__251w7",navLinksAll:"HW5_navLinksAll__tape7",navLinks:"HW5_navLinks__3co6l",collapsedButton:"HW5_collapsedButton__25Hrl"}},,function(e,t,n){e.exports={container:"Message_container__gmmhY",message:"Message_message__1iXbA",name:"Message_name__2Gx4I",text:"Message_text__3GAA_",time:"Message_time__1WoHG"}},function(e,t,n){e.exports={container:"AlternativeMessage_container__1OENa",firstElem:"AlternativeMessage_firstElem__2wHCC",secondElem:"AlternativeMessage_secondElem__2kt4b",thirdElem:"AlternativeMessage_thirdElem__2mTfI",fourthElem:"AlternativeMessage_fourthElem__3N-Zc",time:"AlternativeMessage_time__2osRI"}},function(e,t,n){e.exports={container:"hw8_container__3-YKs",button:"hw8_button__Evcr0",name:"hw8_name__2yC4P",age:"hw8_age__TvFC0"}},,,function(e,t,n){e.exports={containerSpan:"SuperEditableSpan_containerSpan__vcp9N",containerButton:"SuperEditableSpan_containerButton__1GgG1",span:"SuperEditableSpan_span__3VVCJ"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3LhNX",errorInput:"SuperInputText_errorInput__1lqhX",error:"SuperInputText_error__o6qiA"}},function(e,t,n){e.exports={blue:"HW4_blue__2IcPa",column:"HW4_column__1Vdu7",testSpanError:"HW4_testSpanError__1EaAY"}},,,,,function(e,t,n){e.exports={default:"SuperButton_default__1smaF",red:"SuperButton_red__BkDZc"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1B4uj",spanClassName:"SuperCheckbox_spanClassName__1XerK"}},,,,function(e,t,n){e.exports={App:"App_App__3AVPL"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(30),s=n.n(r),i=(n(38),n(31)),o=n.n(i),l=n(11),j=n(2),u=n(10),b=n.n(u),d=n(0);var O=function(){var e=Object(a.useState)(!0),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(d.jsx)("div",{className:b.a.containerNav,children:Object(d.jsxs)("div",{className:n?b.a.navLinks:b.a.navLinksAll,onClick:function(){c(!0)},children:[Object(d.jsx)(l.b,{className:b.a.link,to:"/pre-junior",children:"ret-junior"}),Object(d.jsx)(l.b,{className:b.a.link,to:"/junior",children:"junior"}),Object(d.jsx)(l.b,{className:b.a.link,to:"/junior+",children:"junior+"}),Object(d.jsx)("span",{className:b.a.collapsedButton,onMouseMove:function(){c(!1)}})]})})},h=n(3),m=n(12),x=n.n(m);var p=function(e){return Object(d.jsxs)("div",{className:x.a.container,children:[Object(d.jsx)("img",{className:x.a.image,src:e.avatar}),Object(d.jsxs)("div",{className:x.a.message,children:[Object(d.jsx)("div",{className:x.a.name,children:e.name}),Object(d.jsx)("div",{className:x.a.text,children:e.message}),Object(d.jsx)("div",{className:x.a.time,children:e.time})]})]})},f=n(13),_=n.n(f);var v=function(e){return Object(d.jsxs)("div",{className:_.a.container,children:[Object(d.jsxs)("div",{className:_.a.time,children:["ENTRY TIME: ",e.timeCreate]}),Object(d.jsx)("div",{className:_.a.firstElem,children:Object(d.jsx)("h3",{children:e.user.name})}),Object(d.jsx)("div",{className:_.a.secondElem,children:e.user.contact}),Object(d.jsx)("div",{className:_.a.thirdElem,children:e.user.experience}),Object(d.jsx)("div",{className:_.a.fourthElem,children:e.user.skills})]})},g=n(46),C="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",N="Some Name",k="some text",y="22:00",S={id:Object(g.a)(),name:"Serik",contact:"my email and other contact details",skills:[" html "," css "," js "," react "],experience:"My experience of work..."},A=(new Date).toTimeString().slice(0,8);var w=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(p,{avatar:C,name:N,message:k,time:y}),Object(d.jsx)("hr",{}),Object(d.jsx)(v,{timeCreate:A,user:S}),Object(d.jsx)("hr",{})]})},E=n(8),I=n.n(E);var T=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{children:[e.affair.name,Object(d.jsx)("button",{className:I.a.buttonDelete,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"x"})]})})};var G=function(e){var t=e.data.map((function(t){return Object(d.jsx)(T,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:I.a.buttonContainer,children:[Object(d.jsx)("div",{className:I.a.container,children:t}),Object(d.jsx)("button",{className:I.a.all,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:I.a.high,onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:I.a.middle,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:I.a.low,onClick:function(){e.setFilter("low")},children:"Low"})]})};var B=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:e.data.map((function(t){return Object(d.jsx)("button",{className:I.a.buttonName,onClick:function(){e.setValue(t.priority),e.setValueDelete(t.name),e.setAffairId(t._id)},children:t.name},t._id)}))}),Object(d.jsxs)("div",{className:I.a.levelBlock,children:["affair completion level: ",e.value]}),Object(d.jsxs)("div",{className:I.a.levelBlock,children:["delete affair ",Object(d.jsx)("button",{onClick:function(){e.affairId&&(e.deleteAltAffairCallback(e.affairId),e.setValue("no active"),e.setValueDelete("no active"))},children:e.valueDelete})]})]})},M=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}],F=function(e,t){return e.filter((function(e){return e._id!==t}))};var U=function(){var e=Object(a.useState)(M),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(j.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i),u=Object(a.useState)([].concat(M)),b=Object(j.a)(u,2),O=b[0],h=b[1],m=Object(a.useState)("no active"),x=Object(j.a)(m,2),p=x[0],f=x[1],_=Object(a.useState)("no active"),v=Object(j.a)(_,2),g=v[0],C=v[1],N=Object(a.useState)(),k=Object(j.a)(N,2),y=k[0],S=k[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(G,{data:l,setFilter:o,deleteAffairCallback:function(e){return c(F(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)(B,{data:O,value:p,valueDelete:g,affairId:y,setValue:f,setValueDelete:C,setAffairId:S,deleteAltAffairCallback:function(e){return h(F(O,e))}}),Object(d.jsx)("hr",{})]})},W=n(18),D=n(4),P=n.n(D),H=function(e){var t=e.error;return Object(d.jsx)("div",{className:P.a.containerError,children:t})},L=function(e){var t,n=e.users,a=e.name,c=e.setNameCallback,r=e.addUser,s=e.error,i=e.totalUsers,o=e.setError,l=e.checked,j=e.setChecked;return t=s?P.a.error:P.a.input,Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Please,input correct name for added to list: "}),Object(d.jsx)("input",{value:a,onChange:c,onFocus:function(){o("")},onKeyPress:function(e){"Enter"===e.code&&(r(),e.currentTarget.blur())},className:t}),s&&Object(d.jsx)(H,{error:s}),Object(d.jsx)("button",{onClick:r,children:"add"}),Object(d.jsxs)("div",{className:P.a.users,children:["All users on list :",Object(d.jsxs)("span",{children:[" ",i]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:P.a.inputCheckbox,type:"checkbox",checked:l,onClick:function(){j(!l)}}),"our group:",Object(d.jsx)("div",{children:l&&n.map((function(e){return Object(d.jsxs)("span",{children:["  ",e.name,"  "]},e._id)}))})]})]})]})},Y=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(j.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),l=Object(j.a)(o,2),u=l[0],b=l[1],O=Object(a.useState)(!1),h=Object(j.a)(O,2),m=h[0],x=h[1],p=t.length;return Object(d.jsx)(L,{users:t,name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){/^[a-zA-Z]\w+$/.test(s)?(n(s),i(""),alert("Hello ".concat(s,"!"))):b("incorrect name input!\nname starts with a-z!\nmay include a number!")},error:u,totalUsers:p,setError:b,checked:m,setChecked:x})};function V(e){var t=e.altUsers,n=e.addAltUser,c=Object(a.useState)(""),r=Object(j.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),l=Object(j.a)(o,2),u=l[0],b=l[1],O=Object(a.useState)(""),h=Object(j.a)(O,2),m=h[0],x=h[1],p=Object(a.useState)(!1),f=Object(j.a)(p,2),_=f[0],v=f[1],g=Object(a.useState)(""),C=Object(j.a)(g,2),N=C[0],k=C[1],y=Object(a.useState)(!1),S=Object(j.a)(y,2),A=S[0],w=S[1];function E(e){k(e)}return Object(d.jsxs)("div",{className:P.a.altContainer,children:[Object(d.jsx)("h2",{children:"WARNING!!!"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:P.a.text,children:["You are in the closed territory of the IT incubator!\nGive us your registration details."," "]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:P.a.nameInput,children:[" Your name:",Object(d.jsx)("input",{onChange:function(e){i(e.currentTarget.value)},value:s}),"(name starts with a-z, may include a number!)"]}),Object(d.jsxs)("div",{className:P.a.ageInput,children:["Your age:",Object(d.jsx)("input",{onChange:function(e){b(e.currentTarget.value)},value:u}),"(only number!)"]}),Object(d.jsxs)("div",{className:P.a.emailInput,children:["Your email:",Object(d.jsx)("input",{onChange:function(e){x(e.currentTarget.value)},value:m}),"(for example email: name@mail.com)"]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return/^[a-zA-Z]\w+$/.test(s)?/^\d{1,2}$/.test(u)?/^\w+@\w+.\w+.\w*$/.test(m)?(n(s,u,m),k(""),w(!0),v(!1),i(""),b(""),void x("")):E("email error"):E("age error"):E("name error")},children:"enter"})}),Object(d.jsx)("input",{onClick:function(){v(!_)},type:"checkbox",checked:_}),"command of it-incubator",_&&Object(d.jsx)("div",{className:P.a.groupUsers,children:t.map((function(e){return Object(d.jsx)("li",{children:"".concat(e.name,"  ").concat(e.age,"  ").concat(e.email)},e.id)}))}),Object(d.jsx)("div",{className:P.a.altError,children:N&&Object(d.jsx)(H,{error:N})}),A&&Object(d.jsx)("div",{className:P.a.myAlertContainer,children:Object(d.jsxs)("div",{className:P.a.myAlert,children:["Hi, ".concat(t[0].name,"! We very happy, what you trust us.\nWe will write to you when you need it  ").concat(t[0].email," "),Object(d.jsx)("button",{onClick:function(){w(!1)},children:"next"})]})})]})}var K=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(j.a)(r,2),i=s[0],o=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(Y,{users:n,addUserCallback:function(e){var t=[{_id:Object(g.a)(),name:e}].concat(Object(W.a)(n));c(t)}}),Object(d.jsx)("hr",{}),Object(d.jsx)(V,{altUsers:i,addAltUser:function(e,t,n){o([{id:Object(g.a)(),name:e,age:t,email:n}].concat(Object(W.a)(i)))}}),Object(d.jsx)("hr",{})]})},J=n(6),q=n(5),z=n(20),R=n.n(z),X=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(q.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(R.a.error," ").concat(i||""),j="".concat(r?R.a.errorInput:R.a.superInput," ").concat(s," ");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(J.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:j},o)),r&&Object(d.jsx)("span",{className:l,children:r})]})},Z=n(21),$=n.n(Z),Q=n(26),ee=n.n(Q),te=function(e){var t=e.red,n=e.className,a=Object(q.a)(e,["red","className"]),c="".concat(t?ee.a.red:ee.a.default," ").concat(n);return Object(d.jsx)("button",Object(J.a)({className:c},a))},ne=n(27),ae=n.n(ne),ce=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(q.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(ae.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(J.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(d.jsx)("span",{className:ae.a.spanClassName,children:c})]})};var re=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=n?"":"enter your text, please!",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n),c("")},i=Object(a.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:$.a.column,children:[Object(d.jsx)(X,{value:n,onChangeText:c,onEnter:s,error:r,spanClassName:$.a.testSpanError}),Object(d.jsx)(X,{className:$.a.blue}),Object(d.jsx)(te,{children:"default"}),Object(d.jsx)(te,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(te,{disabled:!0,children:"disabled"}),Object(d.jsx)(ce,{checked:l,onChangeChecked:u,children:"some text "}),Object(d.jsx)(ce,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},se=n(17),ie=n.n(se),oe=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(q.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],u=c||{},b=u.children,O=u.onDoubleClick,h=u.className,m=Object(q.a)(u,["children","onDoubleClick","className"]),x="".concat(ie.a.span," ").concat(h);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(X,Object(J.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(d.jsxs)("span",Object(J.a)(Object(J.a)({onDoubleClick:function(e){l(!0),O&&O(e)},className:x},m),{},{children:[Object(d.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmShznIZUvegOEeYEvlGdxShi6uz9fwiKnQ&usqp=CAU"}),b||r.value]}))})};function le(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function je(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}le("test",{x:"A",y:1});je("test",{x:"",y:0});var ue=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{className:ie.a.containerSpan,children:Object(d.jsx)(oe,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text, please..."}})}),Object(d.jsxs)("div",{className:ie.a.containerButton,children:[Object(d.jsx)(te,{onClick:function(){le("editable-span-value",n)},children:"save"}),Object(d.jsx)(te,{onClick:function(){c(je("editable-span-value",n))},children:"restore"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var be=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(w,{}),Object(d.jsx)(U,{}),Object(d.jsx)(K,{}),Object(d.jsx)(re,{}),Object(d.jsx)(ue,{})]})};var de=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Oe=function(e){var t=e.value,n=e.options,a=e.onChange,c=e.onChangeOption,r=Object(q.a)(e,["value","options","onChange","onChangeOption"]),s={color:"green"},i=n?n.map((function(e,n){return Object(d.jsx)("option",{selected:e===t,style:s,children:e},n)})):[];return Object(d.jsx)("select",Object(J.a)(Object(J.a)({onChange:function(e){a&&a(e),c&&c(e.currentTarget.value)}},r),{},{style:{margin:"10px",borderColor:"green",borderRadius:"3px",color:"orange"},children:i}))},he=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(q.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(d.jsxs)("label",{style:e===a?{color:"orange"}:{color:"green"},children:[Object(d.jsx)("input",{type:"radio",name:t,checked:e===a,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:i})},me=["x","y","z"];function xe(){var e=Object(a.useState)(me[1]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(Oe,{options:me,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(he,{name:"radio",options:me,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})}var pe=function(e,t){switch(t.type){case"sort":var n=Object(W.a)(e);return"up"===t.payload?n.sort((function(e,t){return e.name<t.name?-1:1})):n.sort((function(e,t){return e.name<t.name?1:-1}));case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},fe=n(14),_e=n.n(fe),ve=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ge=function(){var e=Object(a.useState)(ve),t=Object(j.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:_e.a.name,children:e.name}),Object(d.jsx)("span",{className:_e.a.age,children:e.age})]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",Object(d.jsxs)("div",{className:_e.a.container,children:[r,Object(d.jsxs)("div",{children:[Object(d.jsx)(te,{className:_e.a.button,onClick:function(){return c(pe(ve,{type:"sort",payload:"up"}))},children:"sort up"}),Object(d.jsx)(te,{className:_e.a.button,onClick:function(){return c(pe(ve,{type:"sort",payload:"down"}))},children:"sort down"}),Object(d.jsx)(te,{className:_e.a.button,onClick:function(){return c(pe(ve,{type:"check",payload:18}))},children:"check 18"})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Ce=function(){return Object(d.jsxs)("div",{style:{margin:"5px"},children:[Object(d.jsx)(xe,{}),Object(d.jsx)(ge,{})]})};var Ne=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Junior+"})})},ke="/pre-junior",ye="/junior",Se="/junior+";var Ae=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:["\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 '/' \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 '/' \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)",Object(d.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(h.a,{to:ke})}}),Object(d.jsx)(h.b,{path:ke,render:function(){return Object(d.jsx)(be,{})}}),Object(d.jsx)(h.b,{path:ye,render:function(){return Object(d.jsx)(Ce,{})}}),Object(d.jsx)(h.b,{path:Se,render:function(){return Object(d.jsx)(Ne,{})}}),"// add routes \u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Object(d.jsx)(h.b,{render:function(){return Object(d.jsx)(de,{})}})]})})};var we=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(Ae,{})]})})};var Ee=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(we,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(Ee,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[45,1,2]]]);
//# sourceMappingURL=main.e7202df3.chunk.js.map