(this["webpackJsonpphonebook-frontend"]=this["webpackJsonpphonebook-frontend"]||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},20:function(e,n,t){},21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=(t(20),t(14)),i=t(2),l=(t(21),function(e){var n=e.persons,t=e.deletePerson;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id,window.confirm("Delete ".concat(e.name,"?")))}},"delete"))})))}),m=function(e){var n=e.addNewPerson,t=e.newName,a=e.newNumber,o=e.handleNameChange,c=e.handleNumberChange;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},s=function(e){var n=e.filterName,t=e.handleFilterChange;return r.a.createElement("input",{value:n,onChange:t})},f=function(e){var n=e.message,t=e.color;return null===n?null:t?r.a.createElement("div",{className:"message danger"},n):r.a.createElement("div",{className:"message success"},n)},d=t(3),h=t.n(d),b="/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},p=function(e){return h.a.post(b,e).then((function(e){return e.data}))},g=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},E=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),d=Object(i.a)(c,2),h=d[0],b=d[1],E=Object(a.useState)(""),N=Object(i.a)(E,2),j=N[0],O=N[1],C=Object(a.useState)(""),k=Object(i.a)(C,2),y=k[0],S=k[1],P=Object(a.useState)(null),T=Object(i.a)(P,2),D=T[0],I=T[1],A=Object(a.useState)(!0),B=Object(i.a)(A,2),F=B[0],J=B[1];Object(a.useEffect)((function(){v().then((function(e){console.log("promise fulfilled"),o(e)}))}),[]),console.log("response",t.length,"persons");var L=t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(f,{message:D,color:F}),r.a.createElement(s,{filterName:y,handleFilterChange:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"Add new"),r.a.createElement(m,{addNewPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===h}));if(n){if(window.confirm("".concat(n.name," is already in the phonebook,")+" replace the old number (".concat(n.number,")")+" with the new number (".concat(j,")?"))){var a=Object(u.a)({},n,{number:j});g(a.id,a).then((function(e){o(t.map((function(n){return n.id!==e.id?n:e}))),I("Updated ".concat(h)),J(!1),setTimeout((function(){I(null)}),5e3)})).catch((function(e){I("Information of ".concat(h," was already removed from server")),J(!0),setTimeout((function(){I(null)}),5e3),o(t.filter((function(e){return e.id!==a.id})))}))}}else p({name:h,number:j}).then((function(e){o(t.concat(e)),I("Added ".concat(h)),J(!1),setTimeout((function(){I(null)}),5e3)}));b(""),O("")},newName:h,newNumber:j,handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(l,{persons:L,deletePerson:function(e,n){var a=t.find((function(n){return n.id===e}));n&&w(e).then((function(n){o(t.filter((function(n){return n.id!==e}))),I("Deleted ".concat(a.name)),J(!0),setTimeout((function(){I(null)}),5e3)})).catch((function(n){I("Information of ".concat(a.name," was already removed from server")),J(!0),setTimeout((function(){I(null)}),5e3),o(t.filter((function(n){return n.id!==e})))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.0e69d222.chunk.js.map