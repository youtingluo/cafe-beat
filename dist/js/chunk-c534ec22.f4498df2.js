(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c534ec22"],{"013a":function(e,t,o){"use strict";o("5888")},"057f":function(e,t,o){var c=o("fc6a"),r=o("241c").f,n={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return r(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==n.call(e)?i(e):r(c(e))}},1799:function(e,t,o){"use strict";var c=o("7a23"),r={"aria-label":"Page navigation example"},n={class:"pagination"},a=Object(c["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(c["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function l(e,t,o,l,d,s){return Object(c["openBlock"])(),Object(c["createBlock"])("nav",r,[Object(c["createVNode"])("ul",n,[Object(c["createVNode"])("li",{class:["page-item",{disabled:!o.pages.has_pre}]},[Object(c["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(t){return e.$emit("get-page",o.pages.current_page-1)}),["prevent"]))},[a])],2),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.pages.total_pages,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:["page-item",{active:t===o.pages.current_page}],key:t},[Object(c["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(c["withModifiers"])((function(o){return e.$emit("get-page",t)}),["prevent"])},Object(c["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(c["createVNode"])("li",{class:["page-item",{disabled:!o.pages.has_next}]},[Object(c["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(t){return e.$emit("get-page",o.pages.current_page+1)}),["prevent"]))},[i])],2)])])}var d={emits:["get-page"],props:["pages"]};o("013a");d.render=l;t["a"]=d},"1dde":function(e,t,o){var c=o("d039"),r=o("b622"),n=o("2d00"),a=r("species");e.exports=function(e){return n>=51||!c((function(){var t=[],o=t.constructor={};return o[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"4de4":function(e,t,o){"use strict";var c=o("23e7"),r=o("b727").filter,n=o("1dde"),a=n("filter");c({target:"Array",proto:!0,forced:!a},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5888:function(e,t,o){},"65f0":function(e,t,o){var c=o("861d"),r=o("e8b5"),n=o("b622"),a=n("species");e.exports=function(e,t){var o;return r(e)&&(o=e.constructor,"function"!=typeof o||o!==Array&&!r(o.prototype)?c(o)&&(o=o[a],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===t?0:t)}},"746f":function(e,t,o){var c=o("428f"),r=o("5135"),n=o("e538"),a=o("9bf2").f;e.exports=function(e){var t=c.Symbol||(c.Symbol={});r(t,e)||a(t,e,{value:n.f(e)})}},8418:function(e,t,o){"use strict";var c=o("c04e"),r=o("9bf2"),n=o("5c6c");e.exports=function(e,t,o){var a=c(t);a in e?r.f(e,a,n(0,o)):e[a]=o}},"99af":function(e,t,o){"use strict";var c=o("23e7"),r=o("d039"),n=o("e8b5"),a=o("861d"),i=o("7b0b"),l=o("50c4"),d=o("8418"),s=o("65f0"),u=o("1dde"),p=o("b622"),b=o("2d00"),f=p("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",g=b>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),O=u("concat"),j=function(e){if(!a(e))return!1;var t=e[f];return void 0!==t?!!t:n(e)},v=!g||!O;c({target:"Array",proto:!0,forced:v},{concat:function(e){var t,o,c,r,n,a=i(this),u=s(a,0),p=0;for(t=-1,c=arguments.length;t<c;t++)if(n=-1===t?a:arguments[t],j(n)){if(r=l(n.length),p+r>m)throw TypeError(h);for(o=0;o<r;o++,p++)o in n&&d(u,p,n[o])}else{if(p>=m)throw TypeError(h);d(u,p++,n)}return u.length=p,u}})},a434:function(e,t,o){"use strict";var c=o("23e7"),r=o("23cb"),n=o("a691"),a=o("50c4"),i=o("7b0b"),l=o("65f0"),d=o("8418"),s=o("1dde"),u=s("splice"),p=Math.max,b=Math.min,f=9007199254740991,m="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var o,c,s,u,h,g,O=i(this),j=a(O.length),v=r(e,j),y=arguments.length;if(0===y?o=c=0:1===y?(o=0,c=j-v):(o=y-2,c=b(p(n(t),0),j-v)),j+o-c>f)throw TypeError(m);for(s=l(O,c),u=0;u<c;u++)h=v+u,h in O&&d(s,u,O[h]);if(s.length=c,o<c){for(u=v;u<j-c;u++)h=u+c,g=u+o,h in O?O[g]=O[h]:delete O[g];for(u=j;u>j-c+o;u--)delete O[u-1]}else if(o>c)for(u=j-c;u>v;u--)h=u+c-1,g=u+o-1,h in O?O[g]=O[h]:delete O[g];for(u=0;u<o;u++)O[u+v]=arguments[u+2];return O.length=j-c+o,s}})},a4d3:function(e,t,o){"use strict";var c=o("23e7"),r=o("da84"),n=o("d066"),a=o("c430"),i=o("83ab"),l=o("4930"),d=o("fdbf"),s=o("d039"),u=o("5135"),p=o("e8b5"),b=o("861d"),f=o("825a"),m=o("7b0b"),h=o("fc6a"),g=o("c04e"),O=o("5c6c"),j=o("7c73"),v=o("df75"),y=o("241c"),N=o("057f"),V=o("7418"),P=o("06cf"),w=o("9bf2"),k=o("d1e7"),x=o("9112"),M=o("6eeb"),B=o("5692"),U=o("f772"),S=o("d012"),C=o("90e3"),D=o("b622"),$=o("e538"),_=o("746f"),T=o("d44e"),L=o("69f3"),I=o("b727").forEach,F=U("hidden"),A="Symbol",E="prototype",J=D("toPrimitive"),G=L.set,z=L.getterFor(A),Q=Object[E],W=r.Symbol,q=n("JSON","stringify"),H=P.f,K=w.f,R=N.f,X=k.f,Y=B("symbols"),Z=B("op-symbols"),ee=B("string-to-symbol-registry"),te=B("symbol-to-string-registry"),oe=B("wks"),ce=r.QObject,re=!ce||!ce[E]||!ce[E].findChild,ne=i&&s((function(){return 7!=j(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,o){var c=H(Q,t);c&&delete Q[t],K(e,t,o),c&&e!==Q&&K(Q,t,c)}:K,ae=function(e,t){var o=Y[e]=j(W[E]);return G(o,{type:A,tag:e,description:t}),i||(o.description=t),o},ie=d?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof W},le=function(e,t,o){e===Q&&le(Z,t,o),f(e);var c=g(t,!0);return f(o),u(Y,c)?(o.enumerable?(u(e,F)&&e[F][c]&&(e[F][c]=!1),o=j(o,{enumerable:O(0,!1)})):(u(e,F)||K(e,F,O(1,{})),e[F][c]=!0),ne(e,c,o)):K(e,c,o)},de=function(e,t){f(e);var o=h(t),c=v(o).concat(fe(o));return I(c,(function(t){i&&!ue.call(o,t)||le(e,t,o[t])})),e},se=function(e,t){return void 0===t?j(e):de(j(e),t)},ue=function(e){var t=g(e,!0),o=X.call(this,t);return!(this===Q&&u(Y,t)&&!u(Z,t))&&(!(o||!u(this,t)||!u(Y,t)||u(this,F)&&this[F][t])||o)},pe=function(e,t){var o=h(e),c=g(t,!0);if(o!==Q||!u(Y,c)||u(Z,c)){var r=H(o,c);return!r||!u(Y,c)||u(o,F)&&o[F][c]||(r.enumerable=!0),r}},be=function(e){var t=R(h(e)),o=[];return I(t,(function(e){u(Y,e)||u(S,e)||o.push(e)})),o},fe=function(e){var t=e===Q,o=R(t?Z:h(e)),c=[];return I(o,(function(e){!u(Y,e)||t&&!u(Q,e)||c.push(Y[e])})),c};if(l||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=C(e),o=function(e){this===Q&&o.call(Z,e),u(this,F)&&u(this[F],t)&&(this[F][t]=!1),ne(this,t,O(1,e))};return i&&re&&ne(Q,t,{configurable:!0,set:o}),ae(t,e)},M(W[E],"toString",(function(){return z(this).tag})),M(W,"withoutSetter",(function(e){return ae(C(e),e)})),k.f=ue,w.f=le,P.f=pe,y.f=N.f=be,V.f=fe,$.f=function(e){return ae(D(e),e)},i&&(K(W[E],"description",{configurable:!0,get:function(){return z(this).description}}),a||M(Q,"propertyIsEnumerable",ue,{unsafe:!0}))),c({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:W}),I(v(oe),(function(e){_(e)})),c({target:A,stat:!0,forced:!l},{for:function(e){var t=String(e);if(u(ee,t))return ee[t];var o=W(t);return ee[t]=o,te[o]=t,o},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(u(te,e))return te[e]},useSetter:function(){re=!0},useSimple:function(){re=!1}}),c({target:"Object",stat:!0,forced:!l,sham:!i},{create:se,defineProperty:le,defineProperties:de,getOwnPropertyDescriptor:pe}),c({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:be,getOwnPropertySymbols:fe}),c({target:"Object",stat:!0,forced:s((function(){V.f(1)}))},{getOwnPropertySymbols:function(e){return V.f(m(e))}}),q){var me=!l||s((function(){var e=W();return"[null]"!=q([e])||"{}"!=q({a:e})||"{}"!=q(Object(e))}));c({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,o){var c,r=[e],n=1;while(arguments.length>n)r.push(arguments[n++]);if(c=t,(b(t)||void 0!==e)&&!ie(e))return p(t)||(t=function(e,t){if("function"==typeof c&&(t=c.call(this,e,t)),!ie(t))return t}),r[1]=t,q.apply(null,r)}})}W[E][J]||x(W[E],J,W[E].valueOf),T(W,A),S[F]=!0},b727:function(e,t,o){var c=o("0366"),r=o("44ad"),n=o("7b0b"),a=o("50c4"),i=o("65f0"),l=[].push,d=function(e){var t=1==e,o=2==e,d=3==e,s=4==e,u=6==e,p=7==e,b=5==e||u;return function(f,m,h,g){for(var O,j,v=n(f),y=r(v),N=c(m,h,3),V=a(y.length),P=0,w=g||i,k=t?w(f,V):o||p?w(f,0):void 0;V>P;P++)if((b||P in y)&&(O=y[P],j=N(O,P,v),e))if(t)k[P]=j;else if(j)switch(e){case 3:return!0;case 5:return O;case 6:return P;case 2:l.call(k,O)}else switch(e){case 4:return!1;case 7:l.call(k,O)}return u?-1:d||s?s:k}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterOut:d(7)}},d416:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),r={class:"container"},n={class:"text-end mt-3"},a={class:"table mt-4"},i=Object(c["createVNode"])("thead",null,[Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("th",{width:"120"},"分類"),Object(c["createVNode"])("th",null,"產品名稱"),Object(c["createVNode"])("th",{width:"120"},"原價"),Object(c["createVNode"])("th",{width:"120"},"售價"),Object(c["createVNode"])("th",{width:"100"},"是否啟用"),Object(c["createVNode"])("th",{width:"200"},"編輯")])],-1),l={class:"text-end"},d={class:"text-end"},s={key:0,class:"text-success"},u={key:1},p={class:"btn-group"};function b(e,t,o,b,f,m){var h=Object(c["resolveComponent"])("Loading"),g=Object(c["resolveComponent"])("ProductModal"),O=Object(c["resolveComponent"])("DelModal"),j=Object(c["resolveComponent"])("Pagination");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(h,{active:f.isLoading,"z-index":1060,loader:"bars",color:"#84543B"},null,8,["active"]),Object(c["createVNode"])("div",r,[Object(c["createVNode"])("div",n,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=function(e){return m.openModal(!0)})},"建立新產品")]),Object(c["createVNode"])("table",a,[i,Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(f.products,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:e.id},[Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.category),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])("td",l,Object(c["toDisplayString"])(e.origin_price),1),Object(c["createVNode"])("td",d,Object(c["toDisplayString"])(e.price),1),Object(c["createVNode"])("td",null,[e.is_enabled?(Object(c["openBlock"])(),Object(c["createBlock"])("span",s,"啟用")):(Object(c["openBlock"])(),Object(c["createBlock"])("span",u,"未啟用"))]),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("div",p,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(t){return m.openModal(!1,e)}},"編輯",8,["onClick"]),Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(t){return m.openDelModal(e)}},"刪除",8,["onClick"])])])])})),128))])]),Object(c["createVNode"])(g,{isNew:f.isNew,product:f.tempProduct,ref:"productModal",onUpdateProduct:m.updateProduct},null,8,["isNew","product","onUpdateProduct"]),Object(c["createVNode"])(O,{"del-item":f.tempProduct,ref:"delModal",onDeleteItem:m.deleteProduct},null,8,["del-item","onDeleteItem"]),Object(c["createVNode"])(j,{pages:f.pagination,onGetPage:m.getProducts},null,8,["pages","onGetPage"])])],64)}var f=o("5530"),m=(o("99af"),o("a434"),o("a4d3"),o("e01a"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),h={class:"modal-dialog modal-xl",role:"document"},g={class:"modal-content border-0"},O={class:"modal-header bg-dark text-white"},j={class:"modal-title",id:"exampleModalLabel"},v={key:0},y={key:1},N=Object(c["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),V={class:"modal-body"},P={class:"row"},w={class:"col-sm-4"},k={class:"mb-3"},x=Object(c["createVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),M={class:"mb-3"},B=Object(c["createVNode"])("label",{for:"customFile",class:"form-label"},[Object(c["createTextVNode"])("或 上傳圖片 "),Object(c["createVNode"])("i",{class:"fas fa-spinner fa-spin"})],-1),U={key:0,class:"mt-5"},S={key:0},C={class:"col-sm-8"},D={class:"mb-3"},$=Object(c["createVNode"])("label",{for:"title",class:"form-label"},"標題",-1),_={class:"row gx-2"},T={class:"mb-3 col-md-6"},L=Object(c["createVNode"])("label",{for:"category",class:"form-label"},"分類",-1),I={class:"mb-3 col-md-6"},F=Object(c["createVNode"])("label",{for:"price",class:"form-label"},"單位",-1),A={class:"row gx-2"},E={class:"mb-3 col-md-6"},J=Object(c["createVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1),G={class:"mb-3 col-md-6"},z=Object(c["createVNode"])("label",{for:"price",class:"form-label"},"售價",-1),Q=Object(c["createVNode"])("hr",null,null,-1),W={class:"mb-3"},q=Object(c["createVNode"])("label",{for:"description",class:"form-label"},"產品描述",-1),H={class:"mb-3"},K=Object(c["createVNode"])("label",{for:"content",class:"form-label"},"說明內容",-1),R={class:"mb-3"},X={class:"form-check"},Y=Object(c["createVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Z={class:"modal-footer"},ee=Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function te(e,t,o,r,n,a){return Object(c["openBlock"])(),Object(c["createBlock"])("div",m,[Object(c["createVNode"])("div",h,[Object(c["createVNode"])("div",g,[Object(c["createVNode"])("div",O,[Object(c["createVNode"])("h5",j,[o.isNew?(Object(c["openBlock"])(),Object(c["createBlock"])("span",v,"新增產品")):(Object(c["openBlock"])(),Object(c["createBlock"])("span",y,"編輯產品"))]),N]),Object(c["createVNode"])("div",V,[Object(c["createVNode"])("div",P,[Object(c["createVNode"])("div",w,[Object(c["createVNode"])("div",k,[x,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.tempProduct.imageUrl=e}),placeholder:"請輸入圖片連結"},null,512),[[c["vModelText"],n.tempProduct.imageUrl]])]),Object(c["createVNode"])("div",M,[B,Object(c["createVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[2]||(t[2]=function(){return a.uploadImage&&a.uploadImage.apply(a,arguments)})},null,544)]),Object(c["createVNode"])("img",{class:"img-fluid",src:n.tempProduct.imageUrl},null,8,["src"]),n.tempProduct.imagesUrl?(Object(c["openBlock"])(),Object(c["createBlock"])("div",U,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(n.tempProduct.imagesUrl,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"mb-3",key:t},[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(e){return n.tempProduct.imagesUrl[t]=e},placeholder:"請輸入連結"},null,8,["onUpdate:modelValue"]),[[c["vModelText"],n.tempProduct.imagesUrl[t]]]),Object(c["createVNode"])("div",null,[Object(c["createVNode"])("img",{class:"img-fluid",src:e},null,8,["src"])]),Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return n.tempProduct.imagesUrl.splice(t,1)}}," 移除 ",8,["onClick"])])})),128)),n.tempProduct.imagesUrl[n.tempProduct.imagesUrl.length-1]||!n.tempProduct.imagesUrl.length?(Object(c["openBlock"])(),Object(c["createBlock"])("div",S,[Object(c["createVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[3]||(t[3]=function(e){return n.tempProduct.imagesUrl.push("")})}," 新增圖片 ")])):Object(c["createCommentVNode"])("",!0)])):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("div",C,[Object(c["createVNode"])("div",D,[$,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[4]||(t[4]=function(e){return n.tempProduct.title=e}),placeholder:"請輸入標題"},null,512),[[c["vModelText"],n.tempProduct.title]])]),Object(c["createVNode"])("div",_,[Object(c["createVNode"])("div",T,[L,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[5]||(t[5]=function(e){return n.tempProduct.category=e}),placeholder:"請輸入分類"},null,512),[[c["vModelText"],n.tempProduct.category]])]),Object(c["createVNode"])("div",I,[F,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":t[6]||(t[6]=function(e){return n.tempProduct.unit=e}),placeholder:"請輸入單位"},null,512),[[c["vModelText"],n.tempProduct.unit]])])]),Object(c["createVNode"])("div",A,[Object(c["createVNode"])("div",E,[J,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"number",class:"form-control",id:"origin_price",min:"0","onUpdate:modelValue":t[7]||(t[7]=function(e){return n.tempProduct.origin_price=e}),placeholder:"請輸入原價"},null,512),[[c["vModelText"],n.tempProduct.origin_price,void 0,{number:!0}]])]),Object(c["createVNode"])("div",G,[z,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[8]||(t[8]=function(e){return n.tempProduct.price=e}),min:"0",placeholder:"請輸入售價"},null,512),[[c["vModelText"],n.tempProduct.price,void 0,{number:!0}]])])]),Q,Object(c["createVNode"])("div",W,[q,Object(c["withDirectives"])(Object(c["createVNode"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[9]||(t[9]=function(e){return n.tempProduct.description=e}),placeholder:"請輸入產品描述"},null,512),[[c["vModelText"],n.tempProduct.description]])]),Object(c["createVNode"])("div",H,[K,Object(c["withDirectives"])(Object(c["createVNode"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[10]||(t[10]=function(e){return n.tempProduct.content=e}),placeholder:"請輸入產品說明內容"},null,512),[[c["vModelText"],n.tempProduct.content]])]),Object(c["createVNode"])("div",R,[Object(c["createVNode"])("div",X,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[11]||(t[11]=function(e){return n.tempProduct.is_enabled=e}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[c["vModelCheckbox"],n.tempProduct.is_enabled]]),Y])])])])]),Object(c["createVNode"])("div",Z,[ee,Object(c["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[12]||(t[12]=function(t){return e.$emit("update-product",n.tempProduct)})}," 確認 ")])])])],512)}var oe=o("7c2b"),ce=o.n(oe),re={data:function(){return{modal:"",tempProduct:{}}},emits:["update-product"],props:["isNew","product"],watch:{product:function(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()},uploadImage:function(){var e=this,t=this.$refs.fileInput.files[0],o=new FormData;o.append("file-to-upload",t);var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("youting","/admin/upload");this.$http.post(c,o).then((function(t){t.data.success?(e.tempProduct.imageUrl=t.data.imageUrl,e.$refs.fileInput.value=""):e.$refs.fileInput.value=""}))}},mounted:function(){this.modal=new ce.a(this.$refs.modal,{backdrop:"static"})}};re.render=te;var ne=re,ae=o("6ff1"),ie=o("1799"),le={name:"Products",data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:ne,DelModal:ae["a"],Pagination:ie["a"]},methods:{openModal:function(e,t){e?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object(f["a"])({},t),this.isNew=!1);var o=this.$refs.productModal;o.openModal()},openDelModal:function(e){this.tempProduct=Object(f["a"])({},e);var t=this.$refs.delModal;t.openModal()},getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("youting","/admin/products?page=").concat(t);this.$http.get(o).then((function(t){t.data.success?(e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination):console.log(t.data.message)}))},updateProduct:function(e){var t=this;this.isLoading=!0,this.tempProduct=e;var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("youting","/admin/product"),c="post";this.isNew||(c="put",o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("youting","/admin/product/").concat(this.tempProduct.id)),this.$http[c](o,{data:this.tempProduct}).then((function(e){e.data.success?(t.isLoading=!1,t.$refs.productModal.hideModal(),t.getProducts()):(console.log("新增失敗"),t.$refs.productModal.hideModal())}))},deleteProduct:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("youting","/admin/product/").concat(this.tempProduct.id);this.$http.delete(t).then((function(t){console.log(t),t.data.success?(e.isLoading=!1,e.$refs.delModal.hideModal(),e.getProducts()):(console.log("刪除失敗"),e.$refs.delModal.hideModal())}))}},created:function(){this.getProducts()}};le.render=b;t["default"]=le},e01a:function(e,t,o){"use strict";var c=o("23e7"),r=o("83ab"),n=o("da84"),a=o("5135"),i=o("861d"),l=o("9bf2").f,d=o("e893"),s=n.Symbol;if(r&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new s(e):void 0===e?s():s(e);return""===e&&(u[t]=!0),t};d(p,s);var b=p.prototype=s.prototype;b.constructor=p;var f=b.toString,m="Symbol(test)"==String(s("test")),h=/^Symbol\((.*)\)[^)]+$/;l(b,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=f.call(e);if(a(u,e))return"";var o=m?t.slice(7,-1):t.replace(h,"$1");return""===o?void 0:o}}),c({global:!0,forced:!0},{Symbol:p})}},e538:function(e,t,o){var c=o("b622");t.f=c},e8b5:function(e,t,o){var c=o("c6b6");e.exports=Array.isArray||function(e){return"Array"==c(e)}}}]);
//# sourceMappingURL=chunk-c534ec22.f4498df2.js.map