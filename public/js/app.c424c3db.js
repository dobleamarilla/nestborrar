(function(e){function t(t){for(var n,c,i=t[0],l=t[1],s=t[2],u=0,b=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,c=1;c<o.length;c++){var i=o[c];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},c={app:0},a={app:0},r=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aa260":"9fbe9183","chunk-2d0c0fca":"e00d4ad0","chunk-2d0cfe14":"ebf1880b","chunk-2d20fa52":"f48922c7","chunk-586cd65e":"53918002","chunk-68457f2a":"150ea2bb","chunk-784ab8a8":"803360bf","chunk-a20c0df4":"136e6fc9"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o={"chunk-586cd65e":1,"chunk-68457f2a":1,"chunk-784ab8a8":1,"chunk-a20c0df4":1};c[e]?t.push(c[e]):0!==c[e]&&o[e]&&t.push(c[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0aa260":"31d6cfe0","chunk-2d0c0fca":"31d6cfe0","chunk-2d0cfe14":"31d6cfe0","chunk-2d20fa52":"31d6cfe0","chunk-586cd65e":"5a316908","chunk-68457f2a":"809856d0","chunk-784ab8a8":"3c1560b8","chunk-a20c0df4":"921a50af"}[e]+".css",a=l.p+n,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===n||u===a))return t()}var b=document.getElementsByTagName("style");for(i=0;i<b.length;i++){s=b[i],u=s.getAttribute("data-href");if(u===n||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete c[e],d.parentNode.removeChild(d),o(r)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){c[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var b=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(d);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",b.name="ChunkLoadError",b.type=n,b.request=c,o[1](b)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var d=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"000a":function(e,t,o){"use strict";o("9064")},"079e":function(e,t,o){"use strict";o("f96d")},"12e0":function(e,t,o){},"301a":function(e,t,o){"use strict";o("4cda")},"43b6":function(e,t,o){},"4cda":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),c=o("bc3a"),a=o.n(c),r={id:"app",class:"container-fluid fuenteIvan"};function i(e,t){var o=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["d"])("div",r,[Object(n["h"])(o)])}o("301a");var l=o("d959"),s=o.n(l);const u={},b=s()(u,[["render",i]]);var d=b,m=(o("d3b7"),o("3ca3"),o("ddb0"),o("6c02"));function p(e,t,o,c,a,r){var i=Object(n["y"])("Teclas"),l=Object(n["y"])("ModalPeso"),s=Object(n["y"])("Footer"),u=Object(n["y"])("InstallWizard");return Object(n["r"])(),Object(n["d"])("div",null,[Object(n["h"])(i),Object(n["h"])(l),Object(n["h"])(s),Object(n["h"])(u)])}var f=Object(n["G"])("data-v-c03e71ac");Object(n["u"])("data-v-c03e71ac");var O={class:"row p-2",id:"menusColores"},v={key:1,class:"scrollmenu"},j={class:"col colJuntitasMenus menus"},h={key:0},A={key:1};Object(n["s"])();var g=f((function(e,t,o,c,a,r){var i=Object(n["y"])("Menu");return Object(n["r"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("div",O,[c.listaMenus.length<=11?(Object(n["r"])(!0),Object(n["d"])(n["a"],{key:0},Object(n["x"])(c.listaMenus,(function(e,t){return Object(n["r"])(),Object(n["d"])("div",{key:e.nomMenu,class:"col colJuntitasMenus menus",style:{"padding-left":"4px"}},[Object(n["h"])("button",{class:["btn btn-secondary w-100 menus menusColorIvan",[{activo:c.esActivo(t)},"colorMenus"]],onClick:function(e){return c.clickMenu(t)}},Object(n["A"])(e.nomMenu),11,["onClick"])])})),128)):(Object(n["r"])(),Object(n["d"])("div",v,[Object(n["h"])("template",j,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.listaMenus,(function(e,t){return Object(n["r"])(),Object(n["d"])("button",{key:t,style:{width:"200px"},class:["btn btn-secondary menus menusColorIvan ml-2",[{activo:c.esActivo(t)},"colorMenus"]],onClick:function(e){return c.clickMenu(t)}},Object(n["A"])(e.nomMenu),11,["onClick"])})),128))])]))]),Object(n["h"])("div",null,[(Object(n["r"])(),Object(n["d"])(n["a"],null,Object(n["x"])(6,(function(t){return Object(n["h"])("div",{class:"row",key:t},[(Object(n["r"])(),Object(n["d"])(n["a"],null,Object(n["x"])(6,(function(o){return Object(n["h"])("div",{class:"col colJuntitas",key:o},[!0===c.listadoTeclas[6*(t-1)+(o-1)].esSumable?(Object(n["r"])(),Object(n["d"])(n["a"],{key:0},[!0===c.botonesPrecio?(Object(n["r"])(),Object(n["d"])("div",h,[Object(n["h"])("button",{id:c.listadoTeclas[6*(t-1)+(o-1)].idBoton,class:["btn btn-primary rounded-0 w-100 teclas",[c.listadoTeclas[6*(t-1)+(o-1)].color,{invisible:-1==c.listadoTeclas[6*(t-1)+(o-1)].idArticle}]],onClick:function(e){c.clickTecla(c.listadoTeclas[6*(t-1)+(o-1)]),c.mostrarInfoVisor(c.listadoTeclas[6*(t-1)+(o-1)])},onContextmenu:function(n){return e.abrirFicha(c.listadoTeclas[6*(t-1)+(o-1)].idArticle)},style:{"background-color":"#dee3e9","font-size":"1.02vw"}},Object(n["A"])(c.listadoTeclas[6*(t-1)+(o-1)].nombreArticulo.nombre)+" "+Object(n["A"])(c.listadoTeclas[6*(t-1)+(o-1)].nombreArticulo.precio),43,["id","onClick","onContextmenu"])])):(Object(n["r"])(),Object(n["d"])("div",A,[Object(n["h"])("button",{id:c.listadoTeclas[6*(t-1)+(o-1)].idBoton,class:["btn btn-primary rounded-0 w-100 teclas",[c.listadoTeclas[6*(t-1)+(o-1)].color,{invisible:-1==c.listadoTeclas[6*(t-1)+(o-1)].idArticle}]],onClick:function(e){c.clickTecla(c.listadoTeclas[6*(t-1)+(o-1)]),c.mostrarInfoVisor(c.listadoTeclas[6*(t-1)+(o-1)])},onContextmenu:function(n){return e.abrirFicha(c.listadoTeclas[6*(t-1)+(o-1)].idArticle)},style:{"background-color":"#dee3e9"}},Object(n["A"])(c.listadoTeclas[6*(t-1)+(o-1)].nombreArticulo.nombre),43,["id","onClick","onContextmenu"])]))],64)):(Object(n["r"])(),Object(n["d"])("button",{key:1,id:c.listadoTeclas[6*(t-1)+(o-1)].idBoton,class:["btn btn-primary rounded-0 w-100 teclas",[c.listadoTeclas[6*(t-1)+(o-1)].color,{invisible:-1==c.listadoTeclas[6*(t-1)+(o-1)].idArticle}]],onClick:function(e){c.modalesSumable(c.listadoTeclas[6*(t-1)+(o-1)],c.listadoTeclas[6*(t-1)+(o-1)].idBoton),c.mostrarInfoVisor(c.listadoTeclas[6*(t-1)+(o-1)])},style:{"background-color":"#dee3e9"}},Object(n["A"])(c.listadoTeclas[6*(t-1)+(o-1)].nombreArticulo.nombre),11,["id","onClick"]))])})),64))])})),64))]),Object(n["h"])(i)],64)})),C=(o("0d03"),o("25f0"),o("7db0"),o("5502")),k=o("9a0b"),y={name:"Teclas",setup:function(){var e=Object(C["b"])(),t=Object(n["b"])((function(){return e.state.Cesta.cesta})),o=Object(n["w"])([{nomMenu:""}]),c=Object(n["w"])([{_id:-1,nombre:"",precioConIva:0,precioBase:0,tipoIva:0,esSumable:!0,familia:""}]),r=Object(n["w"])([]),i=0,l=!1,s=1,u=Object(n["b"])((function(){return e.state.modalPeso.edadState}));function b(t,o){e.dispatch("ModalPeso/abrirModal",{idArticulo:t.idArticle,idBoton:o})}function d(e){return e===i}function m(t,o){e.dispatch("ModalPeso/abrirModal",{idArticulo:t.idArticle,idBoton:o})}function p(e){var t=e;t.toString()}function f(){r.value=[{idBoton:"tecla0",idArticle:-1,pos:-1,color:"colorIvan1",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla1",idArticle:-1,pos:-1,color:"colorIvan1",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla2",idArticle:-1,pos:-1,color:"colorIvan1",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla3",idArticle:-1,pos:-1,color:"colorIvan1",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla4",idArticle:-1,pos:-1,color:"colorIvan1",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla5",idArticle:-1,pos:-1,color:"colorIvan1",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla6",idArticle:-1,pos:-1,color:"colorIvan2",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla7",idArticle:-1,pos:-1,color:"colorIvan2",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla8",idArticle:-1,pos:-1,color:"colorIvan2",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla9",idArticle:-1,pos:-1,color:"colorIvan2",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla10",idArticle:-1,pos:-1,color:"colorIvan2",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla11",idArticle:-1,pos:-1,color:"colorIvan2",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla12",idArticle:-1,pos:-1,color:"colorIvan3",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla13",idArticle:-1,pos:-1,color:"colorIvan3",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla14",idArticle:-1,pos:-1,color:"colorIvan3",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla15",idArticle:-1,pos:-1,color:"colorIvan3",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla16",idArticle:-1,pos:-1,color:"colorIvan3",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla17",idArticle:-1,pos:-1,color:"colorIvan3",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla18",idArticle:-1,pos:-1,color:"colorIvan4",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla19",idArticle:-1,pos:-1,color:"colorIvan4",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla20",idArticle:-1,pos:-1,color:"colorIvan4",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla21",idArticle:-1,pos:-1,color:"colorIvan4",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla22",idArticle:-1,pos:-1,color:"colorIvan4",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla23",idArticle:-1,pos:-1,color:"colorIvan4",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla24",idArticle:-1,pos:-1,color:"colorIvan5",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla25",idArticle:-1,pos:-1,color:"colorIvan5",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla26",idArticle:-1,pos:-1,color:"colorIvan5",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla27",idArticle:-1,pos:-1,color:"colorIvan5",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla28",idArticle:-1,pos:-1,color:"colorIvan5",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla29",idArticle:-1,pos:-1,color:"colorIvan5",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla30",idArticle:-1,pos:-1,color:"colorIvan6",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla31",idArticle:-1,pos:-1,color:"colorIvan6",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla32",idArticle:-1,pos:-1,color:"colorIvan6",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla33",idArticle:-1,pos:-1,color:"colorIvan6",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla34",idArticle:-1,pos:-1,color:"colorIvan6",nombreArticulo:{nombre:"",precio:""},esSumable:!0},{idBoton:"tecla35",idArticle:-1,pos:-1,color:"colorIvan6",nombreArticulo:{nombre:"",precio:""},esSumable:!0}]}function O(e){f();for(var t=function(t){r.value[e[t].pos].nombreArticulo.nombre=e[t].nombreArticulo,null!=e[t].nombreArticulo?r.value[e[t].pos].idArticle=e[t].idArticle:r.value[e[t].pos].idArticle=-1,r.value[e[t].pos].esSumable=e[t].esSumable;var o=c.value.find((function(o){return o.nombre===e[t].nombreArticulo}));r.value[e[t].pos].nombreArticulo.precio=void 0!==o?"".concat(o.precioConIva,"€"):"0€"},o=0;o<e.length;o+=1)t(o)}function v(e){a.a.post("/menus/clickMenu",{nombreMenu:o.value[e].nomMenu}).then((function(t){t.data.bloqueado?console.log("EN ESTE MOMENTO NO ES POSIBLE CARGAR EL TECLADO"):(i=e,O(t.data.resultado))}))}function j(o){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n||a.a.post("cestas/setUnidadesAplicar",{unidades:s}).then((function(c){c.data.okey?n||a.a.post("cestas/clickTeclaArticulo",{idArticulo:o.idArticle,idBoton:o.idBoton,peso:n,infoPeso:null,idCesta:t.value._id}).then((function(t){!1===t.data.error&&!1===t.data.bloqueado?e.dispatch("Cesta/setCestaAction",t.data.cesta):console.log("Error en clickTeclaArticulo")})):console.log("Error en setUnidadesAplicar")}))}return f(),a.a.post("/menus/getMenus").then((function(e){e.data.bloqueado?console.log("EN ESTE MOMENTO NO ES POSIBLE CARGAR EL TECLADO"):(o.value=e.data.resultado,v(0))})),{test:b,edadState:u,listaMenus:o,menuActivo:i,listadoTeclas:r,esActivo:d,botonesPrecio:l,clickMenu:v,clickTecla:j,mostrarInfoVisor:p,modalesSumable:m}},components:{Menu:k["default"]}};o("a9fb");const M=s()(y,[["render",g],["__scopeId","data-v-c03e71ac"]]);var I=M,S={class:"modal",id:"modalTecladoPeso",tabindex:"-1",role:"dialog"},T={class:"modal-dialog",role:"document",style:{"max-width":"600px"}},w={class:"modal-content"},B=Object(n["h"])("div",{class:"modal-header"},[Object(n["h"])("h5",{class:"modal-title"},"Introduce los gramos")],-1),E={class:"modal-body"},P={class:"row"},R={class:"col-md-4"},x={class:"text-center",style:{"font-size":"40px"}},N=Object(n["h"])("br",null,null,-1),D=Object(n["g"])("g."),L=Object(n["h"])("hr",null,null,-1),U={class:"text-center",style:{"font-size":"40px"}},F={class:"col-md-8"},G={class:"btn-group-vertical",role:"group"},z={class:"btn-group"},J={class:"btn-group"},_={class:"btn-group"},H={class:"btn-group"},V={class:"modal-footer"};function q(e,t,o,c,a,r){return Object(n["r"])(),Object(n["d"])("div",S,[Object(n["h"])("div",T,[Object(n["h"])("div",w,[B,Object(n["h"])("div",E,[Object(n["h"])("div",P,[Object(n["h"])("div",R,[Object(n["h"])("span",x,[Object(n["g"])(Object(n["A"])(c.getUnidades),1),N,D]),L,Object(n["h"])("span",U,Object(n["A"])(c.getPrecio)+" €",1)]),Object(n["h"])("div",F,[Object(n["h"])("div",G,[Object(n["h"])("div",z,[Object(n["h"])("a",{class:"boton",onClick:t[1]||(t[1]=function(e){return c.agregarTecla(7)})},"7"),Object(n["h"])("a",{class:"boton",onClick:t[2]||(t[2]=function(e){return c.agregarTecla(8)})},"8"),Object(n["h"])("a",{class:"boton",onClick:t[3]||(t[3]=function(e){return c.agregarTecla(9)})},"9")]),Object(n["h"])("div",J,[Object(n["h"])("a",{class:"boton",onClick:t[4]||(t[4]=function(e){return c.agregarTecla(4)})},"4"),Object(n["h"])("a",{class:"boton",onClick:t[5]||(t[5]=function(e){return c.agregarTecla(5)})},"5"),Object(n["h"])("a",{class:"boton",onClick:t[6]||(t[6]=function(e){return c.agregarTecla(6)})},"6")]),Object(n["h"])("div",_,[Object(n["h"])("a",{class:"boton",onClick:t[7]||(t[7]=function(e){return c.agregarTecla(1)})},"1"),Object(n["h"])("a",{class:"boton",onClick:t[8]||(t[8]=function(e){return c.agregarTecla(2)})},"2"),Object(n["h"])("a",{class:"boton",onClick:t[9]||(t[9]=function(e){return c.agregarTecla(3)})},"3")]),Object(n["h"])("div",H,[Object(n["h"])("a",{class:"boton",onClick:t[10]||(t[10]=function(e){return c.eliminarTecla()})},"<"),Object(n["h"])("a",{class:"boton",onClick:t[11]||(t[11]=function(e){return c.agregarTecla(0)})},"0")])])])])]),Object(n["h"])("div",V,[Object(n["h"])("button",{type:"button",class:"btn btn-secondary btn-lg mr-0",onClick:t[12]||(t[12]=function(e){return c.confirmar()})},"OK ")])])])])}o("e25e"),o("b680"),o("a9e3"),o("fb6a");var X={name:"ModalPeso",setup:function(){var e=Object(C["b"])(),t=Object(n["w"])("0"),o=Object(n["w"])({precioConIva:0}),c=Object(n["b"])((function(){var e=parseInt(t.value,10);return e.isNaN?0:e})),a=Object(n["b"])((function(){return(Number(t.value)/1e3*o.value.precioConIva).toFixed(2)}));function r(e){t.value+=String(e)}function i(){t.value=t.value.slice(0,-1)}function l(){e.dispatch("ModalPeso/cerrarModal"),t.value="0"}return Object(n["p"])((function(){e.dispatch("ModalPeso/setModal")})),{confirmar:l,eliminarTecla:i,agregarTecla:r,getPrecio:a,getUnidades:c}}};const Q=s()(X,[["render",q]]);var Z=Q,W=o("92f1"),K=o.n(W),Y=Object(n["G"])("data-v-5a0459ab");Object(n["u"])("data-v-5a0459ab");var $={class:"row pt-1 align-items-center"},ee={class:"col-md-1 ms-2"},te={class:"row "},oe=Object(n["h"])("i",{class:"bi bi-list display-6"},null,-1),ne=Object(n["h"])("div",{class:"row"},[Object(n["h"])("button",{class:"btn btn-secondary botonesPrincipales btn-sm me-2 menusColorIvan mt-2","data-bs-toggle":"modal","data-bs-target":"#modalClientes"},[Object(n["h"])("i",{class:"bi bi-person-fill display-6"})])],-1),ce={class:"col-md-1 ms-2"},ae={class:"row"},re=Object(n["h"])("i",{class:"bi bi-search display-6"},null,-1),ie={class:"row justify-content-start"},le=Object(n["h"])("i",{class:"bi bi-layers display-6"},null,-1),se={class:"row justify-content-start"},ue={key:0,class:"bi bi-trash display-6"},be={key:1,class:"bi bi-x-lg display-6"},de={class:"col ordenado"},me={class:"table-responsive mh-75 estiloCesta"},pe={class:"table fuenteIvan colorFuente",id:"job-table"},fe=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",{scope:"col"},"Productos"),Object(n["h"])("th",{scope:"col"},"Unidades"),Object(n["h"])("th",{scope:"col"},"Precio")])],-1),Oe={key:0},ve={key:1};Object(n["s"])();var je=Y((function(e,t,o,c,a,r){var i=Object(n["y"])("router-link"),l=Object(n["y"])("MenuBotones"),s=Object(n["y"])("MenuClientes");return Object(n["r"])(),Object(n["d"])("div",$,[Object(n["h"])("div",ee,[Object(n["h"])("div",te,[Object(n["h"])("button",{class:"btn btn-secondary btn-sm botonesPrincipales me-2 menusColorIvan",onClick:t[1]||(t[1]=function(){return c.showMenu&&c.showMenu.apply(c,arguments)})},[oe])]),ne]),Object(n["h"])("div",ce,[Object(n["h"])("div",ae,[Object(n["h"])("button",{class:"btn btn-secondary btn-block sizeMenus botonesPrincipales\r\n          me-2 menusColorIvan",onClick:t[2]||(t[2]=function(t){return e.buscarProducto()})},[re])]),Object(n["h"])("div",ie,[Object(n["h"])(i,{class:"btn btn-secondary botonesPrincipales btn-sm me-2 menusColorIvan mt-2",to:"/mesas"},{default:Y((function(){return[le]})),_:1})]),Object(n["h"])("div",se,[Object(n["h"])("button",{class:"btn btn-secondary botonesPrincipales btn-sm me-2 menusColorIvan mt-2",onClick:t[3]||(t[3]=function(e){return c.borrar()})},[null===c.activo?(Object(n["r"])(),Object(n["d"])("i",ue)):(Object(n["r"])(),Object(n["d"])("i",be))])])]),Object(n["h"])("div",de,[Object(n["h"])("div",me,[Object(n["h"])("table",pe,[fe,Object(n["h"])("tbody",{class:"tableBody",style:c.conCliente},[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.cestaAlReves,(function(t,o){return Object(n["r"])(),Object(n["d"])("tr",{key:o,class:{estiloPromo:t.promocion.esPromo,seleccionado:c.activo===o},onClick:function(e){return c.setActivo(o)}},[c.sePuedeRegalar(t.subtotal,t.promocion.esPromo)?(Object(n["r"])(),Object(n["d"])("td",Oe,[Object(n["g"])(Object(n["A"])(t.nombre)+" ",1),Object(n["h"])("img",{onClick:function(t){return e.regalar(o)},src:K.a,alt:"Regalar"},null,8,["onClick"])])):(Object(n["r"])(),Object(n["d"])("td",ve,Object(n["A"])(t.nombre),1)),Object(n["h"])("td",null,Object(n["A"])(t.unidades),1),Object(n["h"])("td",null,Object(n["A"])(t.subtotal.toFixed(2)),1)],10,["onClick"])})),128))],4)])])]),Object(n["h"])(l),Object(n["h"])(s)])})),he=(o("26e9"),Object(n["G"])("data-v-7b479108"));Object(n["u"])("data-v-7b479108");var Ae={class:"col"},ge={class:"row"},Ce={class:"col-md-5 ms-3"},ke=Object(n["h"])("i",{class:"bi bi-calculator display-5"},null,-1),ye={class:"col-md-2"},Me=Object(n["h"])("i",{class:"bi bi-eyeglasses display-5"},null,-1),Ie=Object(n["h"])("div",{class:"row justify-content-end"},null,-1),Se={class:"row justify-content-end"},Te=Object(n["h"])("i",{class:"bi bi-cart display-6"},null,-1),we={class:"display-6"};Object(n["s"])();var Be=he((function(e,t,o,c,a,r){var i=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["d"])("div",Ae,[Object(n["h"])("div",ge,[Object(n["h"])("div",Ce,[Object(n["h"])("button",{class:"btn btn-secondary botonesPrincipales btn-lg me-2 menusColorIvan",onClick:t[1]||(t[1]=function(t){return e.borrar()})},[ke])]),Object(n["h"])("div",ye,[Object(n["h"])("button",{class:"btn btn-secondary botonesPrincipales btn-lg me-2 menusColorIvan",onClick:t[2]||(t[2]=function(e){return c.abrirModalTicketsAbiertos()})},[Me])])]),Ie,Object(n["h"])("div",Se,[Object(n["h"])(i,{to:"/cobro/100",class:"btn btn-secondary  botonesPrincipales\r\n         me-2 menusColorIvan btn-lg",onClick:t[3]||(t[3]=function(e){return c.cobrar()})},{default:he((function(){return[Te,Object(n["h"])("span",we," "+Object(n["A"])(c.getTotal)+" €",1)]})),_:1})])])})),Ee={name:"MenuBotones",setup:function(){var e=Object(C["b"])(),t=Object(n["b"])((function(){return e.state.Cesta.cesta})),o=null,c=Object(n["b"])((function(){for(var e=0,n=0;n<t.value.lista.length;n+=1)n!==o&&(e+=t.value.lista[n].subtotal);return e.toFixed(2)}));function a(){console.log("COBRO")}function r(){console.log("ABRIR")}return{getTotal:c,cobrar:a,abrirModalTicketsAbiertos:r}}};o("83f0");const Pe=s()(Ee,[["render",Be],["__scopeId","data-v-7b479108"]]);var Re=Pe,xe=Object(n["G"])("data-v-3f9167d4");Object(n["u"])("data-v-3f9167d4");var Ne={class:"modal",id:"modalClientes",tabindex:"-1",role:"dialog","data-keyboard":"false","data-backdrop":"static"},De={class:"modal-dialog",role:"document",style:{"max-width":"600px"}},Le={class:"modal-content"},Ue={class:"modal-header"},Fe={class:"modal-body"},Ge={class:"row"},ze={class:"col-md-12"},Je=Object(n["h"])("div",{class:"md-form mt-0"},[Object(n["h"])("input",{id:"inputBusqueda",class:"form-control",type:"text",placeholder:"Nombre del cliente"})],-1),_e={class:"table-responsive",style:{height:"400px"}},He={class:"table table-striped clientesAnchoBotones mt-1"},Ve=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",{class:"clientesAnchoNombre",scope:"col"},"Nombre"),Object(n["h"])("th",{class:"clientesAnchoBotones",scope:"col"})])],-1),qe={class:"clientesAnchoNombre"},Xe=Object(n["h"])("td",{class:"clientesAnchoBotones"},[Object(n["h"])("a",{href:"#",class:"btn btn-primary"}," Seleccionar "),Object(n["h"])("a",{href:"#",class:"btn btn-info"}," Consultar puntos ")],-1);Object(n["s"])();var Qe=xe((function(e,t,o,c,a,r){return Object(n["r"])(),Object(n["d"])("div",Ne,[Object(n["h"])("div",De,[Object(n["h"])("div",Le,[Object(n["h"])("div",Ue,[Object(n["h"])("button",{type:"button",class:"btn btn-success btn-lg mr-0",onClick:t[1]||(t[1]=function(t){return e.nuevoCliente()})}," NUEVO "),Object(n["h"])("button",{type:"button",class:"btn btn-danger btn-lg mr-0",onClick:t[2]||(t[2]=function(t){return e.reset()})}," RESET "),Object(n["h"])("button",{type:"button",class:"btn btn-secondary btn-lg",onClick:t[3]||(t[3]=function(t){return e.volver()})}," SALIR ")]),Object(n["h"])("div",Fe,[Object(n["h"])("div",Ge,[Object(n["h"])("div",ze,[Je,Object(n["h"])("div",_e,[Object(n["h"])("table",He,[Ve,Object(n["h"])("tbody",null,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.clientes,(function(e,t){return Object(n["r"])(),Object(n["d"])("tr",{key:{index:t}},[Object(n["h"])("td",qe,Object(n["A"])(e.nombre),1),Xe])})),128))])])])])])])])])])})),Ze={name:"MenuClientes",setup:function(){var e="Santy",t=["Test","Test 2"];return{nombre:e,clientes:t}}};o("ca51");const We=s()(Ze,[["render",Qe],["__scopeId","data-v-3f9167d4"]]);var Ke=We,Ye={name:"Footer",setup:function(){var e=Object(C["b"])(),t=Object(n["b"])((function(){return e.state.Cesta.cesta})),o=Object(n["b"])((function(){return e.state.Cesta.activo})),c=null,r=null,i=Object(n["b"])((function(){for(var e=0,o=0;o<t.value.lista.length;o+=1)o!==r&&(e+=t.value.lista[o].subtotal);return e.toFixed(2)})),l=Object(n["b"])((function(){var e=t.value.lista;return e.reverse()}));function s(e,t){return!1}function u(t){console.log(t),e.dispatch("Cesta/setActivoAction",t)}function b(){null===o.value?a.a.post("/cestas/borrarCesta",{id:t.value._id}).then((function(t){e.dispatch("Cesta/setCestaAction",t.data.cestaNueva)})):a.a.post("/borrarItemCesta",{_id:e.state.Cesta.cesta._id,idArticulo:e.getters["Cesta/getItem"]}).then((function(t){t.data.okey?e.dispatch("Cesta/setCestaAction",t.data.cestaNueva):console.log(t.data.okey)})),e.dispatch("Cesta/setActivoAction",null)}function d(){e.dispatch("Menu/setHiddenAction",!1)}return Object(n["p"])((function(){a.a.post("/cestas/getCesta").then((function(t){e.dispatch("Cesta/setCestaAction",t.data)}))})),{getTotal:i,conCliente:c,cesta:t,sePuedeRegalar:s,activo:o,cestaAlReves:l,setActivo:u,borrar:b,showMenu:d}},components:{MenuBotones:Re,MenuClientes:Ke}};o("079e");const $e=s()(Ye,[["render",je],["__scopeId","data-v-5a0459ab"]]);var et=$e,tt={class:"modal",id:"modalInstallWizard",tabindex:"-1",role:"dialog"},ot={class:"modal-dialog",role:"document"},nt={class:"modal-content"},ct={class:"modal-body"},at={class:"mb-3"},rt=Object(n["h"])("label",{class:"form-label"},"Nº Licencia",-1),it={class:"mb-3"},lt=Object(n["h"])("label",{class:"form-label"},"Contraseña",-1),st={class:"mb-3"},ut=Object(n["h"])("label",{class:"form-label"},"Tipo impresora",-1),bt=Object(n["h"])("option",{selected:"",value:"USB"},"USB",-1),dt=Object(n["h"])("option",{value:"SERIE"},"SERIE",-1),mt={class:"mb-3"},pt=Object(n["h"])("label",{class:"form-label"},"Tipo datáfono",-1),ft=Object(n["h"])("option",{selected:"",value:"CLEARONE"},"CLEARONE",-1),Ot=Object(n["h"])("option",{value:"3G"},"3G",-1),vt={class:"mb-3"},jt=Object(n["h"])("label",{class:"form-label"},"Impresora cafetería",-1),ht=Object(n["h"])("option",{selected:"",value:"SI"},"SI",-1),At=Object(n["h"])("option",{value:"NO"},"NO",-1),gt={key:0,class:"row"},Ct=Object(n["h"])("img",{src:"assets/loading.gif",style:{display:"block",margin:"auto",width:"200px"},alt:"Esperando respuesta del servidor"},null,-1),kt={class:"modal-footer"};function yt(e,t,o,c,a,r){return Object(n["r"])(),Object(n["d"])("div",tt,[Object(n["h"])("div",ot,[Object(n["h"])("div",nt,[Object(n["h"])("div",ct,[Object(n["h"])("form",null,[Object(n["h"])("div",at,[rt,Object(n["F"])(Object(n["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.licencia=e}),type:"text",class:"form-control form-control-lg"},null,512),[[n["D"],c.licencia]])]),Object(n["h"])("div",it,[lt,Object(n["F"])(Object(n["h"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e}),type:"password",class:"form-control form-control-lg",autocomplete:"on"},null,512),[[n["D"],c.password]])]),Object(n["h"])("div",st,[ut,Object(n["F"])(Object(n["h"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.tipoImpresora=e}),class:"form-select form-select-lg mb-3"},[bt,dt],512),[[n["C"],c.tipoImpresora]])]),Object(n["h"])("div",mt,[pt,Object(n["F"])(Object(n["h"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.tipoDatafono=e}),class:"form-select form-select-lg mb-3"},[ft,Ot],512),[[n["C"],c.tipoDatafono]])]),Object(n["h"])("div",vt,[jt,Object(n["F"])(Object(n["h"])("select",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return c.impresoraCafeteria=e}),class:"form-select form-select-lg mb-3"},[ht,At],512),[[n["C"],c.impresoraCafeteria]])]),c.esperando?(Object(n["r"])(),Object(n["d"])("div",gt,[Ct])):Object(n["e"])("",!0)])]),Object(n["h"])("div",kt,[Object(n["h"])("button",{type:"button",class:"btn btn-primary",onClick:t[6]||(t[6]=function(e){return c.confirmar()})}," Confirmar "),Object(n["h"])("button",{type:"button",class:"btn btn-danger",onClick:t[7]||(t[7]=function(t){return e.reset()})}," Reset ")]),Object(n["h"])("button",{onClick:t[8]||(t[8]=function(e){return c.testPrint()})},"TESTIABLE")])])])}o("99af");var Mt={name:"InstallWizard",setup:function(){var e=Object(C["b"])(),t=Object(n["w"])(""),o=Object(n["w"])(""),c=Object(n["w"])("USB"),r=Object(n["w"])("CLEARONE"),i=Object(n["w"])("NO"),l=Object(n["w"])(!1);function s(){console.log("La password es: ".concat(o.value," y la licencia: ").concat(t.value))}function u(){l.value=!0;var e={parametros:{licencia:t.value,password:o.value,tipoImpresora:c.value,tipoDatafono:r.value,impresoraCafeteria:i.value}};console.log(e),a.a.post("/pedirDatosLicencia",e)}return Object(n["p"])((function(){e.dispatch("InstallWizard/copyInitialData").then((function(e){t.value=e.licencia,o.value=e.password,c.value=e.tipoImpresora,r.value=e.tipoDatafono,i.value=e.impresoraCafeteria}))})),Object(n["p"])((function(){e.dispatch("InstallWizard/setModal")})),{testPrint:s,confirmar:u,licencia:t,password:o,tipoImpresora:c,tipoDatafono:r,impresoraCafeteria:i,esperando:l}}};const It=s()(Mt,[["render",yt]]);var St=It,Tt={name:"Home",components:{Teclas:I,ModalPeso:Z,Footer:et,InstallWizard:St}};const wt=s()(Tt,[["render",p]]);var Bt=wt,Et=[{path:"/",name:"Home",component:Bt},{path:"/cobro/:total",name:"Cobro",component:function(){return o.e("chunk-68457f2a").then(o.bind(null,"fbdc"))}},{path:"/menu/",name:"Menu",component:function(){return Promise.resolve().then(o.bind(null,"9a0b"))},children:[{path:"caja",component:function(){return o.e("chunk-586cd65e").then(o.bind(null,"f75f"))}},{path:"fichajes",component:function(){return o.e("chunk-a20c0df4").then(o.bind(null,"308b"))}},{path:"pedidos",component:function(){return o.e("chunk-2d0c0fca").then(o.bind(null,"43b7"))}},{path:"devoluciones",component:function(){return o.e("chunk-2d20fa52").then(o.bind(null,"b509"))}},{path:"entregas",component:function(){return o.e("chunk-2d0cfe14").then(o.bind(null,"6631"))}},{path:"menu-tecnico",component:function(){return o.e("chunk-2d0aa260").then(o.bind(null,"107b"))}}]},{path:"/mesas",name:"Mesas",component:function(){return o.e("chunk-784ab8a8").then(o.bind(null,"f19c"))}}],Pt=Object(m["a"])({history:Object(m["b"])("/"),routes:Et}),Rt=Pt,xt=o("7b17"),Nt={namespaced:!0,state:{licencia:"",password:"",tipoImpresora:"USB",tipoDatafono:"CLEARONE",impresoraCafeteria:"NO",modal:null},mutations:{testMutation:function(e,t){e.edadState=t},abrirModalMutation:function(e){e.modal.show()},setModalMutation:function(e){var t=document.getElementById("modalInstallWizard");null!=t&&(e.modal=new xt["a"](t,{keyboard:!1}))},cerrarModalMutation:function(e){e.modal.hide()},resetModalMutation:function(e){e.licencia="",e.password="",e.tipoImpresora="USB",e.tipoDatafono="CLEARONE",e.impresoraCafeteria="NO"},recuperarDatosModalMutation:function(e,t){e.licencia=t.licencia,e.password=t.password,e.tipoImpresora=t.tipoImpresora,e.tipoDatafono=t.tipoDatafono,e.impresoraCafeteria=t.impresoraCafeteria}},actions:{testAction:function(e){var t=e.commit;t("testMutation",30)},abrirModal:function(e,t){var o=e.commit;o("abrirModalMutation",t)},cerrarModal:function(e){var t=e.commit;t("cerrarModalMutation")},setModal:function(e){var t=e.commit;t("setModalMutation"),a.a.post("/parametros/todoInstalado").then((function(e){!1===e.data.todoInstalado?t("abrirModalMutation"):t("recuperarDatosModalMutation",e.data.config)}))},resetModal:function(e){var t=e.commit;t("resetModalMutation")},copyInitialData:function(e){var t=e.state;return{licencia:t.licencia,password:t.password,tipoImpresora:t.tipoImpresora,tipoDatafono:t.tipoDatafono,impresoraCafeteria:t.impresoraCafeteria}}}},Dt={namespaced:!0,state:{tareasState:["tarea 1","tarea 2","tarea 3"],edadState:26,modal:null},mutations:{testMutation:function(e,t){e.edadState=t},abrirModalMutation:function(e,t){console.log(t),e.modal.show()},setModalMutation:function(e){var t=document.getElementById("modalTecladoPeso");null!=t&&(e.modal=new xt["a"](t,{keyboard:!1}))},cerrarModalMutation:function(e){e.modal.hide()}},actions:{testAction:function(e){var t=e.commit;t("testMutation",30)},abrirModal:function(e,t){var o=e.commit;o("abrirModalMutation",t)},cerrarModal:function(e){var t=e.commit;t("cerrarModalMutation")},setModal:function(e){e.commit("setModalMutation")}}},Lt={namespaced:!0,state:{cesta:{_id:-1,lista:[]},activo:null},mutations:{setCestaMutation:function(e,t){e.cesta=t},setActivoMutation:function(e,t){e.activo=t}},getters:{getItem:function(e){return e.cesta.lista[e.activo]._id}},actions:{setCestaAction:function(e,t){var o=e.commit;o("setCestaMutation",t)},setActivoAction:function(e,t){var o=e.commit;o("setActivoMutation",t)}}},Ut={namespaced:!0,state:{ticket:{dependienta:3389,total:10,formaDePago:"EFECTIVO",detalle:[{nombre:"Coca-Cola",subtotal:1.6,unidades:1},{nombre:"Fanta",subtotal:1.6,unidades:2}]},activo:null},mutations:{setTicketAction:function(e,t){e.ticket=t},setActivoMutation:function(e,t){e.activo=t}},getters:{getItem:function(e){return e.cesta.lista[e.activo]._id}},actions:{setTicketAction:function(e,t){var o=e.commit;o("setTicketAction",t)},setActivoAction:function(e,t){var o=e.commit;o("setActivoMutation",t)}}},Ft={namespaced:!0,state:{hidden:!0},mutations:{setHiddenMutation:function(e,t){e.hidden=t}},actions:{setHiddenAction:function(e,t){var o=e.commit;o("setHiddenMutation",t)}}},Gt={namespaced:!0,state:{activo:null},mutations:{setActivoMutation:function(e,t){e.activo=t}},actions:{setActivoAction:function(e,t){var o=e.commit;o("setActivoMutation",t)}}},zt=Object(C["a"])({state:{},mutations:{},actions:{},modules:{InstallWizard:Nt,ModalPeso:Dt,Cesta:Lt,Ticket:Ut,Menu:Ft,Dinero:Gt}});o("ab8b"),o("cd74");a.a.defaults.baseURL="http://localhost:3000",Object(n["c"])(d).use(zt).use(Rt).mount("#app")},"674d":function(e,t,o){},"83f0":function(e,t,o){"use strict";o("43b6")},9064:function(e,t,o){},"92f1":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAmCAYAAABK4fLXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASOSURBVFhH7ZdPaFxFHMd/M/PeJtnsbszWGqoWDxZvbQ9WPShG0Zq4iSnqQawUPFhLEKF4smg9BPEmCFIVKypYSr1UjClJPDUeBGmLpIgHj5bappaNu3mbfXnvzfz8/WbfZjfZTbMJSXvJB4adf7/ffOc3f3aegCb4E/1CCtwvO1Mvyo52F0CMgzZn5aOnMe6yKubCQQlKvgwG+9H3I13yfkDpTLbtP9fgo0FEMJkDwGgE3Lb3nExGxtUIQnwBaN6Sj6wuhAQIkOJzMPAmFe0YUbFoIAo+QuUcb3v2HFctUh2kBurdxuAx1dlZ3yYA8QhI2RuXb42ST5OAw5RbnCT7M5F5V+hoT1y1SBMR+ATN2xGSmgRojMJRE4bcwn37ObMqiNxPsh3Z/0R5bf0BOLQ8j3OmnoblCCeee01rPOVmsyBcx2jPGyRRYyqVktT7S3JyBFy5h+QNUvf6SRhQYgwivGz7IRwmW0PLcoCi8COGkQzzeVBKHHL7fz4V21ia7Im+btTmMriJ+92uLg7tx9HNm0ZlMu8I171BTl8hId/TIDtikxoCrlH7q9R+BsNwu54rfuJsu1uRv6O0J8j5wlWh1O5E38RsbGGxM8nneFIVdGhmpRRDEAZ/RIUCGn/hqOrubjO+f8CU/WEThNtJQE/cfSlUj0G4zZTLw9T/JXUX2y28rckP+5NKvmBCvSggnxuwv6I0MPRghOZD2vIZW0OILoREX+TIe3AvIvagJnHTCs01aU9G6vVuXppGqNX7dtZwVu4wQu3VQijyJ8SMuSGmg0knwkLNkHJFR8r3RSE3eJKs3ojrARIIHYcEuPd2AoWO/cL86XmI/ooq7RS7rg9omVYQURgp8O6wOA85kDyYtF1Rawj/KUH5O+oU1IzJ3Vc8tWRctji7SMDODAjH4SmAydPxrgpYI2zH9uyH/bFf9l8Pj1+/uy0y7XL44hJ1mudYrJ96e/bL/pfTIIJVo0EIpgMwdMI2AlMy1h/7Zf/LaRDB4St9Q2t3tgzeZx6Ef9qLat2wvXfCs/7Yr12eZTSI4HXUf9NxILBEEfk1sPn1wvbsh2G/zfZX43LcAVjExiz8+jFSCXGGtkrBXgitJP5ByjRJtt52aC3xuHb8/PMDMDfj9ZL9eWpqDYpfZkhBch9dhzHzFzUUR2kvrSGudFCeSvekp2R2nB4YNIm4vjVWGmitC0vjZsfHKhtTuWrNSbqOvQWricsNfVRr+97eHP/lBp+kUEzZmhbpGOqAxMOJuERH8VIA5dFyXKqhIwN+waeXXeXY10OD9z7w+9Qvm35ElSMhme2wkVmJTRfB8H9Ge7oWteXcFhGMStzhSDD2n9nuwEZum4hbsSWiypaIKlsiqmyJqLJERBkFHIvS8C9KuELpeJSCkP5efzMufKqXfCNtKEtE8J/tDFXx+3qB7tjrUPkM9CjPwjYL65mudPt1mBIIXzsFuE8Y2CU0nKR8ghqekQGMOB533TB4PEr2o4bz9KgZSEghTtAH0mNcboV2ftTsq3vUXAzAb/KoqcIRLV6fq2QIGu8CjT6889L54H+s6v191bm2VwAAAABJRU5ErkJggg=="},"9a0b":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n["G"])("data-v-4f15349c");Object(n["u"])("data-v-4f15349c");var a={class:"col-md-1"},r={class:"sidebar w-auto"},i=Object(n["g"])("Vender"),l=Object(n["g"])("Caja"),s=Object(n["g"])("Pedidos"),u=Object(n["g"])("Fichajes"),b=Object(n["g"])("Devoluciones"),d=Object(n["g"])("Entregas"),m=Object(n["h"])("hr",null,null,-1),p={class:"col"};Object(n["s"])();var f=c((function(e,t,o,f,O,v){var j=Object(n["y"])("router-link"),h=Object(n["y"])("Dependientas"),A=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["d"])("div",{class:["row pt-1",{hidden:f.isHidden}]},[Object(n["h"])("div",a,[Object(n["h"])("div",r,[Object(n["h"])(j,{to:"/",onClick:f.hideMenu},{default:c((function(){return[i]})),_:1},8,["onClick"]),Object(n["h"])(j,{to:"/menu/caja"},{default:c((function(){return[l]})),_:1}),Object(n["h"])(j,{to:"/menu/pedidos",onClick:f.quitarActivoTicket},{default:c((function(){return[s]})),_:1},8,["onClick"]),Object(n["h"])(j,{to:"/menu/fichajes",onClick:f.quitarActivoTicket},{default:c((function(){return[u]})),_:1},8,["onClick"]),Object(n["h"])(j,{to:"/menu/devoluciones",onClick:f.quitarActivoTicket},{default:c((function(){return[b]})),_:1},8,["onClick"]),Object(n["h"])(j,{to:"/",onClick:f.imprimirEntregas},{default:c((function(){return[d]})),_:1},8,["onClick"]),m,Object(n["h"])(h,{nombreCompleto:"Santiago Álvarez Osuca",id:"156"}),Object(n["h"])(h,{nombreCompleto:"Santiago Álvarez Osuca",id:"156"})])]),Object(n["h"])("div",p,[Object(n["h"])(A)])],2)})),O=o("5502"),v=Object(n["G"])("data-v-0de3e51e");Object(n["u"])("data-v-0de3e51e");var j={type:"button",class:"btn btn-sm btn-outline-info ms-4 mt-2"},h=Object(n["h"])("br",null,null,-1);Object(n["s"])();var A=v((function(e,t,o,c,a,r){return Object(n["r"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("button",j,Object(n["A"])(o.nombreCompleto),1),h],64)})),g={name:"DependientasActivas",props:{nombreCompleto:{type:String,default:"",required:!0},id:{type:String,default:"0",required:!0}},setup:function(){}},C=(o("000a"),o("d959")),k=o.n(C);const y=k()(g,[["render",A],["__scopeId","data-v-0de3e51e"]]);var M=y,I=o("bc3a"),S=o.n(I),T={components:{Dependientas:M},name:"Menu",setup:function(){var e=Object(O["b"])(),t=Object(n["b"])((function(){return e.state.Menu.hidden}));function o(){e.dispatch("Ticket/setActivoAction",null)}function c(){e.dispatch("Menu/setHiddenAction",!0),o()}function a(){var e=842;S.a.get("http://dsv.hiterp.com/TpvInforma.asp?Llic=00".concat(e,"&Versio=6001010&Tipus=EntregasPendientes")).then((function(e){for(var t=e.data,o="",n=!1,c=0;c<t.length;c++)if(n||"]"===t[c-1]&&"a"===t[c-2]){if(n=!0,"]"===t[c])break;o+=t[c]}console.log(o)})),c(),o()}return{isHidden:t,hideMenu:c,quitarActivoTicket:o,imprimirEntregas:a}}};o("a4e6");const w=k()(T,[["render",f],["__scopeId","data-v-4f15349c"]]);t["default"]=w},a4e6:function(e,t,o){"use strict";o("f3f5")},a9fb:function(e,t,o){"use strict";o("12e0")},ca51:function(e,t,o){"use strict";o("674d")},f3f5:function(e,t,o){},f96d:function(e,t,o){}});
//# sourceMappingURL=app.c424c3db.js.map