(this.webpackJsonp1=this.webpackJsonp1||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/prueba.af2972d9.png"},function(e,t,a){e.exports=a.p+"static/media/logo-rick-and-morty.75509f2e.png"},,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),o=(a(11),a(3)),s=(a(12),function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return console.log(e),{id:e.id,name:e.name,img:e.image,species:e.species,status:e.status,origin:e.origin.name,episodes:e.episode.length}}))}))}),l=a(2),m=a.n(l);var u=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"App"},c.a.createElement("img",{className:"container--img",src:m.a,alt:"logo"}),c.a.createElement("form",null,c.a.createElement("input",{className:"container--input",type:"text",placeholder:"Busca un personaje",onChange:function(t){e.handleInput({value:t.target.value,key:"name"})}}))))};a(1);var p=function(e){return c.a.createElement("li",{className:"list--element"},c.a.createElement("img",{className:"list--img",src:e.character.img,alt:e.character.name}),c.a.createElement("div",{className:"list--container"},c.a.createElement("h3",{className:"list--name"},e.character.name),c.a.createElement("small",null,e.character.species)))};var h=function(e){var t=e.characters.map((function(e){return c.a.createElement(p,{key:e.id,character:e})}));return c.a.createElement("ul",{className:"list"},t)};var d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),m=(l[0],l[1]);return Object(n.useEffect)((function(){s().then((function(e){r(e)}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(u,{handleInput:function(e){console.log(e,"mi data del handle"),m(e)}}),c.a.createElement(h,{characters:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.084be585.chunk.js.map