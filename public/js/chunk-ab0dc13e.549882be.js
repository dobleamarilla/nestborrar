(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab0dc13e"],{"308b":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n=Object(a["H"])("data-v-384222cf");Object(a["u"])("data-v-384222cf");var s={class:"col-md-6 ms-3 mt-3"},b={class:"row ms-3"},l={class:"card cardWidth"},r={class:"card-body",style:{"text-align":"center"}},d=Object(a["h"])("span",null,[Object(a["h"])("i",{class:"bi bi-door-open"})],-1),o={class:"card cardWidth"},i={class:"card-body",style:{"text-align":"center"}},h=Object(a["h"])("span",null,[Object(a["h"])("i",{class:"bi bi-door-closed"})],-1),u=Object(a["h"])("div",{class:"card cardWidth"},[Object(a["h"])("div",{class:"card-body",style:{"text-align":"center"}},[Object(a["h"])("span",null,[Object(a["h"])("i",{class:"bi bi-egg"})]),Object(a["h"])("a",{href:"#",class:"btn btn-primary"},"Consumo personal")])],-1),j={class:"modal fade",id:"modalFichajes",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},O={class:"modal-dialog"},p={class:"modal-content"},f=Object(a["h"])("div",{class:"modal-header"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},"Fichar"),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),m={class:"modal-body"},y={class:"row"},v={class:"row"},w={class:"table",style:{height:"400px"}},k={class:"table table-striped"},x=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",{scope:"col"},"Nombre"),Object(a["h"])("th",{scope:"col"},"Fichar/Desfichar")])],-1),g={key:0},C={key:1},F=Object(a["h"])("div",{class:"modal-footer"},[Object(a["h"])("button",{type:"button",class:"btn btn-secondary btn-lg","data-bs-dismiss":"modal"},"Cerrar")],-1);Object(a["s"])();var B=n((function(t,e,c,n,B,D){return Object(a["r"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("div",s,[Object(a["h"])("div",b,[Object(a["h"])("div",l,[Object(a["h"])("div",r,[d,Object(a["h"])("a",{href:"#",class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return n.abrirModal()})},"Fichar")])]),Object(a["h"])("div",o,[Object(a["h"])("div",i,[h,Object(a["h"])("a",{href:"#",class:"btn btn-primary",onClick:e[2]||(e[2]=function(){return t.desfichar&&t.desfichar.apply(t,arguments)})},"Desfichar")])]),u])]),Object(a["h"])("div",j,[Object(a["h"])("div",O,[Object(a["h"])("div",p,[f,Object(a["h"])("div",m,[Object(a["h"])("div",y,[Object(a["G"])(Object(a["h"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return n.inputBusqueda=t}),class:"form-control",style:{width:"350px",height:"50px","font-size":"20px"},type:"text",placeholder:"Introduce tu nombre"},null,512),[[a["D"],n.inputBusqueda]]),Object(a["h"])("button",{type:"button",style:{width:"100px"},class:"btn btn-primary ms-2",onClick:e[4]||(e[4]=function(t){return n.buscar()})},"Buscar"),Object(a["h"])("div",v,[Object(a["h"])("div",w,[Object(a["h"])("table",k,[x,Object(a["h"])("tbody",null,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(n.arrayTrabajadores,(function(e,c){return Object(a["r"])(),Object(a["d"])("tr",{key:c},[Object(a["h"])("td",null,Object(a["A"])(e.nombre),1),!1===e.fichado?(Object(a["r"])(),Object(a["d"])("td",g,[Object(a["h"])("a",{href:"#",class:"btn btn-outline-primary btn_fc",onClick:function(c){return t.fichar(e)}},"FICHAR",8,["onClick"])])):(Object(a["r"])(),Object(a["d"])("td",C,[Object(a["h"])("a",{href:"#",class:"btn btn-outline-success btn_fc",onClick:function(c){return t.desfichar(e)}},"DESFICHAR",8,["onClick"])]))])})),128))])])])])])]),F])])])],64)})),D=c("7b17"),I=c("bc3a"),M=c.n(I),q={name:"Dependientas",setup:function(){var t="Santy",e=156,c=null,n=Object(a["w"])([]),s=Object(a["w"])("");function b(){c.show()}function l(){c.hide()}function r(){console.log(s.value),M.a.post("trabajadores/buscar",{busqueda:s.value}).then((function(t){n.value=t.data}))["catch"]((function(t){console.log(t)}))}return Object(a["p"])((function(){c=new D["a"](document.getElementById("modalFichajes"),{keyboard:!1})})),{inputBusqueda:s,arrayTrabajadores:n,buscar:r,cerrarModal:l,abrirModal:b,nombre:t,id:e}}},_=(c("d866"),c("6b0d")),A=c.n(_);const H=A()(q,[["render",B],["__scopeId","data-v-384222cf"]]);e["default"]=H},8050:function(t,e,c){},d866:function(t,e,c){"use strict";c("8050")}}]);
//# sourceMappingURL=chunk-ab0dc13e.549882be.js.map