import{O as t,E as e,M as s,Q as i,V as a,a as r}from"./chunk-DyqAhB7D.js";class n extends t{constructor(t){super(),this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.addEventListener("removed",(()=>{this.traverse((t=>{t instanceof n&&t.element instanceof Element&&null!==t.element.parentNode&&t.element.parentNode.removeChild(t.element)}))}))}copy(e,s){return t.prototype.copy.call(this,e,s),this.element=e.element.cloneNode(!0),this}}class o extends n{constructor(t,e=1){super(t),this.spriteRatio=e,this.spriteMatrixWorld=(new s).copy(this.matrixWorld)}}class l extends e{zOrder(t){const{cache:e}=this,s=[];t.traverse((t=>{const i=t;e.objects.has(i)&&s.push({object:i,data:e.objects.get(i)})}));const i=s.sort(((t,e)=>t.data.distanceToCameraSquared-e.data.distanceToCameraSquared)),a=i.length;i.forEach(((t,e)=>{const{object:s}=t;s.element.style.zIndex=""+(a-e)}))}constructor(){super(),this._width=0,this._height=0,this._widthHalf=0,this._heightHalf=0,this.matrix=new s,this._spriteQuat=new i,this._objectQuat=new i,this.cache={camera:{fov:0,style:""},objects:new WeakMap},this.epsilon=t=>Math.abs(t)<1e-10?0:t,this.getDistanceToSquared=function(){const t=new a,e=new a;return function(s,i){return t.setFromMatrixPosition(s.matrixWorld),e.setFromMatrixPosition(i.matrixWorld),t.distanceToSquared(e)}}(),this.getCameraCSSMatrix=(t,e,s)=>{const{epsilon:i}=this,{elements:a}=t,n=`matrix3d(${i(a[0])},${i(-a[1])},${i(a[2])},${i(a[3])},${i(a[4])},${i(-a[5])},${i(a[6])},${i(a[7])},${i(a[8])},${i(-a[9])},${i(a[10])},${i(a[11])},${i(a[12])},${i(-a[13])},${i(a[14])},${i(a[15])})`;if(e instanceof r){const t=-(e.right+e.left)/2,a=(e.top+e.bottom)/2;return`scale(${s})translate(${i(t)}px,${i(a)}px)${n}`}return`translateZ(${s}px)${n}`},this.getObjectCSSMatrix=(t,e)=>{const{epsilon:s}=this,{elements:i}=t,a=`matrix3d(${s(i[0])},${s(i[1])},${s(i[2])},${s(i[3])},${s(-i[4])},${s(-i[5])},${s(-i[6])},${s(-i[7])},${s(i[8])},${s(i[9])},${s(i[10])},${s(i[11])},${s(i[12])},${s(i[13])},${s(i[14])},${s(i[15])})`;return this.isIE?`translate(-50%,-50%)translate(${this._widthHalf}px,${this._heightHalf}px)${e}${a}`:`translate(-50%,-50%)${a}`},this.renderObject=(t,e,s,i)=>{const{matrix:a,getObjectCSSMatrix:r,cache:l,cameraElement:h,renderObject:c,isIE:d,getDistanceToSquared:m}=this;if(t instanceof n){let n;t.onBeforeRender(this,e,s),t instanceof o?(a.copy(s.matrixWorldInverse),a.transpose(),this._spriteQuat.setFromRotationMatrix(a),this._objectQuat.setFromRotationMatrix(t.matrixWorld),this._objectQuat.slerp(this._spriteQuat,t.spriteRatio),a.makeRotationFromQuaternion(this._objectQuat),a.copyPosition(t.matrixWorld),a.scale(t.scale),a.elements[3]=0,a.elements[7]=0,a.elements[11]=0,a.elements[15]=1,t.spriteMatrixWorld.copy(a),n=r(a,i)):n=r(t.matrixWorld,i);const{element:c}=t,p=l.objects.get(t);if(void 0===p||p.style!==n){c.style.transform=n;const e={style:n};l.objects.set(t,e),d&&(e.distanceToCameraSquared=m(s,t))}c.style.display=t.visible?"":"none",c.parentNode!==h&&h.appendChild(c),t.onAfterRender(this,e,s)}for(let n=0,o=t.children.length;n<o;n++)c(t.children[n],e,s,i)};const t=document.createElement("div");this.domElement=t,t.style.overflow="hidden";const e=document.createElement("div");this.cameraElement=e,e.style.transformStyle="preserve-3d",t.appendChild(e),this.isIE=/Trident/i.test(navigator.userAgent)}setClearColor(){}getSize(){return{width:this._width,height:this._height}}setSize(t,e){this._width=t,this._height=e,this._widthHalf=this._width/2,this._heightHalf=this._height/2,this.domElement.style.width=`${t}px`,this.domElement.style.height=`${e}px`,this.cameraElement.style.width=`${t}px`,this.cameraElement.style.height=`${e}px`}render(t,e){const{_heightHalf:s,_widthHalf:i,isIE:a,cameraElement:r,cache:n,domElement:o,getCameraCSSMatrix:l,zOrder:h,renderObject:c}=this,d=e.projectionMatrix.elements[5]*s;n.camera.fov!==d&&(o.style.perspective=`${d}px`,n.camera.fov=d),(t.matrixAutoUpdate&&!0===t.matrixAutoUpdate||!0===t.autoUpdate)&&t.updateMatrixWorld(),null===e.parent&&e.updateMatrixWorld();const m=l(e.matrixWorldInverse,e,d),p=`${m}translate(${i}px,${s}px)`;n.camera.style===p||a||(r.style.transform=p,n.camera.style=p),c(t,t,e,m),a&&h(t)}}export{l as C,n as a};