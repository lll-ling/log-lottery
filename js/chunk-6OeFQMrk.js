import{c as t}from"./chunk-CShO9xrd.js";import{r as e}from"./chunk-D6zm6W2C.js";var s={exports:{}},o=s.exports=(t=>(()=>{var e={113:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const s=t.__vccOpts||t;for(const[o,i]of e)s[o]=i;return s}},594:e=>{e.exports=t}},s={};function o(t){var i=s[t];if(void 0!==i)return i.exports;var n=s[t]={exports:{}};return e[t](n,n.exports,o),n.exports}o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};o.r(i),o.d(i,{ToastComponent:()=>h,ToastPlugin:()=>T,ToastPositions:()=>c,default:()=>f,useToast:()=>v});var n=o(594);const r=["innerHTML"];function a(t){var e;void 0!==t.remove?t.remove():null==(e=t.parentNode)||e.removeChild(t)}class l{constructor(t,e){this.startedAt=Date.now(),this.callback=t,this.delay=e,this.timer=setTimeout(t,e)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const c=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});var u;const p={all:u=u||new Map,on:function(t,e){var s=u.get(t);s?s.push(e):u.set(t,[e])},off:function(t,e){var s=u.get(t);s&&(e?s.splice(s.indexOf(e)>>>0,1):u.set(t,[]))},emit:function(t,e){var s=u.get(t);s&&s.slice().map((function(t){t(e)})),(s=u.get("*"))&&s.slice().map((function(s){s(t,e)}))}},d=(0,n.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:c.BOTTOM_RIGHT,validator:t=>Object.values(c).includes(t)},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data:()=>({isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}),beforeMount(){this.setupContainer()},mounted(){this.showNotice(),p.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const t=document.body;t.appendChild(this.parentTop),t.appendChild(this.parentBottom)},shouldQueue(){return!!this.queue&&(this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0)},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout((()=>{this.onDismiss.apply(null,arguments);const t=this.$refs.root;(0,n.render)(null,t),a(t)}),150)},showNotice(){if(this.shouldQueue())return void(this.queueTimer=setTimeout(this.showNotice,250));const t=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),a(t),this.isActive=!0,this.duration&&(this.timer=new l(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(t){this.pauseOnHover&&this.timer&&(t?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case c.TOP:case c.TOP_RIGHT:case c.TOP_LEFT:return this.parentTop;case c.BOTTOM:case c.BOTTOM_RIGHT:case c.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case c.TOP:case c.TOP_RIGHT:case c.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case c.BOTTOM:case c.BOTTOM_RIGHT:case c.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){p.off("toast-clear",this.dismiss)}}),m=(0,o(113).default)(d,[["render",function(t,e,s,o,i,a){return(0,n.openBlock)(),(0,n.createBlock)(n.Transition,{"enter-active-class":t.transition.enter,"leave-active-class":t.transition.leave},{default:(0,n.withCtx)((()=>[(0,n.withDirectives)((0,n.createElementVNode)("div",{ref:"root",role:"alert",class:(0,n.normalizeClass)(["v-toast__item",[`v-toast__item--${t.type}`,`v-toast__item--${t.position}`]]),onMouseover:e[0]||(e[0]=e=>t.toggleTimer(!0)),onMouseleave:e[1]||(e[1]=e=>t.toggleTimer(!1)),onClick:e[2]||(e[2]=function(){return t.whenClicked&&t.whenClicked(...arguments)})},[e[3]||(e[3]=(0,n.createElementVNode)("div",{class:"v-toast__icon"},null,-1)),(0,n.createElementVNode)("p",{class:"v-toast__text",innerHTML:t.message},null,8,r)],34),[[n.vShow,t.isActive]])])),_:1},8,["enter-active-class","leave-active-class"])}]]),h=m,v=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{open(e){let s=null;"string"==typeof e&&(s=e);const o={message:s},i=Object.assign({},o,t,e),r=function(t,e,s){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=(0,n.h)(t,e,o),r=document.createElement("div");return r.classList.add("v-toast--pending"),s.appendChild(r),(0,n.render)(i,r),i.component}(h,i,document.body);return{dismiss:r.ctx.dismiss}},clear(){p.emit("toast-clear")},success(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"success"},e))},error(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"error"},e))},info(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"info"},e))},warning(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"warning"},e))},default(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.open(Object.assign({},{message:t,type:"default"},e))}}},T={install:function(t){let e=v(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});t.config.globalProperties.$toast=e,t.provide("$toast",e)}},f=T;return i})())(e);export{o as d};