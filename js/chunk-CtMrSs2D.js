import{u as a,g as e}from"./chunk-CDoex7Rk.js";import{a as s}from"./chunk-Czrwg_dh.js";import{l as t}from"./chunk-D3YcvhA7.js";import{s as n}from"./chunk-CaxicGpp.js";import{u as r}from"./chunk-DDTO5rcc.js";import{a6 as l,r as o,o as i,w as u,aR as c,W as m,X as p,be as h,u as d,U as k,F as v,a_ as g,a3 as f}from"./chunk-BB7IEB5B.js";import"./chunk-DyqAhB7D.js";import"./chunk-BsxoPDUi.js";import"./chunk-Brhz0LsG.js";import"./chunk-B8dymozY.js";import"./chunk-CShO9xrd.js";import"./chunk-goYLvais.js";import"./chunk-DCTqbsaT.js";import"./chunk-C6Zwkpkb.js";import"./chunk-iVZSWji-.js";import"./chunk-BLnK4V6m.js";import"./chunk-Q9bklZT_.js";import"./chunk-6OeFQMrk.js";import"./chunk-D6zm6W2C.js";import"./chunk-Cjrd7Wf_.js";import"./chunk-CZIS8eQd.js";const j={class:"toast toast-top toast-end"},b={key:0,class:"alert alert-error"},y={key:1,class:"alert alert-success"},w={key:2,class:"alert alert-error"},I={class:""},x={for:"explore"},C=["accept"],S={class:"btn btn-primary btn-sm"},_={class:"p-0"},q={class:"flex items-center gap-8"},F={class:"avatar h-14"},N={class:"w-12 h-12 mask mask-squircle hover:w-14 hover:h-14"},T={class:"w-64"},U={class:"overflow-hidden font-bold whitespace-nowrap text-ellipsis"},$=["onClick"],D=l({__name:"ImageConfig",setup(l){const{t:D}=r(),L=a().globalConfig,{getImageList:R}=n(L),W=o("image/*"),X=o(0),z=t.createInstance({name:"imgStore"});async function A(a){if(!/image*/.test(a.target.files[0].type))return void(X.value=3);const{dataUrl:e,fileName:t}=await s(a.target.files[0]);z.setItem(`${(new Date).getTime().toString()}+${t}`,e).then((()=>{X.value=1,async function(){(await z.keys()).length>0&&z.iterate(((a,e)=>{L.addImage({id:e,name:e,url:"Storage"})}))}()})).catch((()=>{X.value=2}))}return i((()=>{})),u((()=>X.value),(a=>{0!==a&&setTimeout((()=>{X.value=0}),2e3)})),(a,s)=>(c(),m(v,null,[p("div",j,[2===X.value?(c(),m("div",b,[p("span",null,h(d(D)("error.uploadFail")),1)])):k("",!0),1===X.value?(c(),m("div",y,[p("span",null,h(d(D)("error.uploadSuccess")),1)])):k("",!0),3===X.value?(c(),m("div",w,[p("span",null,h(d(D)("error.notImage")),1)])):k("",!0)]),p("div",null,[p("div",I,[p("label",x,[p("input",{id:"explore",type:"file",class:"",style:{display:"none"},accept:W.value,onChange:A},null,40,C),p("span",S,h(d(D)("button.upload")),1)])]),p("ul",_,[(c(!0),m(v,null,g(d(R),(a=>(c(),m("li",{key:a.id,class:"mb-3"},[p("div",q,[p("div",F,[p("div",N,[f(e,{"img-item":a},null,8,["img-item"])])]),p("div",T,[p("div",U,h(a.name),1)]),p("div",null,[p("button",{class:"btn btn-error btn-xs",onClick:e=>function(a){"Storage"===a.url&&z.removeItem(a.id).then((()=>{L.removeImage(a.id)})),L.removeImage(a.id)}(a)},h(d(D)("button.delete")),9,$)])])])))),128))])])],64))}});export{D as default};