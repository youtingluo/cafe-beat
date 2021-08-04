(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-285f30c9"],{"013a":function(e,t,c){"use strict";c("5888")},1799:function(e,t,c){"use strict";var a=c("7a23"),n={"aria-label":"Page navigation example"},r={class:"pagination"},o=Object(a["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(a["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function s(e,t,c,s,l,d){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",n,[Object(a["createVNode"])("ul",r,[Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_pre}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(t){return e.$emit("get-page",c.pages.current_page-1)}),["prevent"]))},[o])],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.pages.total_pages,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:t===c.pages.current_page}],key:t},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(c){return e.$emit("get-page",t)}),["prevent"])},Object(a["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_next}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(t){return e.$emit("get-page",c.pages.current_page+1)}),["prevent"]))},[i])],2)])])}var l={emits:["get-page"],props:["pages"]};c("013a");l.render=s;t["a"]=l},"1dde":function(e,t,c){var a=c("d039"),n=c("b622"),r=c("2d00"),o=n("species");e.exports=function(e){return r>=51||!a((function(){var t=[],c=t.constructor={};return c[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},5651:function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),n={class:"container"},r={class:"table mt-4"},o=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{width:"120"},"建立日期"),Object(a["createVNode"])("th",null,"客戶名"),Object(a["createVNode"])("th",null,"購買款項"),Object(a["createVNode"])("th",{width:"120"},"金額"),Object(a["createVNode"])("th",{width:"100"},"是否付款"),Object(a["createVNode"])("th",{width:"200"},"付款日期")])],-1),i={class:"list-unstyled"},s={class:"text-primary"},l={class:"text-info"},d={class:"text-end"},u={class:"form-check form-switch"},p=Object(a["createVNode"])("label",{class:"form-check-label",for:"is_paid"},null,-1),b={key:0,class:"text-success"},g={key:1},O={class:"text-end"};function j(e,t,c,j,f,h){var k=Object(a["resolveComponent"])("Loading"),v=Object(a["resolveComponent"])("Pagination");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(k,{active:f.isLoading,"z-index":1060,loader:"bars",color:"#84543B"},null,8,["active"]),Object(a["createVNode"])("div",n,[Object(a["createVNode"])("table",r,[o,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(f.orders,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e.id},[Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(new Date(1e3*e.create_at).toLocaleDateString()),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.user.name),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("ul",i,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:t},[Object(a["createVNode"])("strong",s,Object(a["toDisplayString"])(e.product.title),1),Object(a["createTextVNode"])(" / "+Object(a["toDisplayString"])(e.qty)+" "+Object(a["toDisplayString"])(e.product.unit)+" / ",1),Object(a["createVNode"])("em",l,"$ "+Object(a["toDisplayString"])(e.total),1)])})),128))])]),Object(a["createVNode"])("td",d," NT$ "+Object(a["toDisplayString"])(e.total),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",u,[Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"is_paid",checked:e.is_paid,onChange:function(t){return h.updatePaid(e)}},null,40,["checked","onChange"]),p]),e.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("span",b,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",g,"未付款"))]),Object(a["createVNode"])("td",O,Object(a["toDisplayString"])(e.price),1)])})),128))])])]),Object(a["createVNode"])(v,{pages:f.pagination,onGetPage:h.getOrders},null,8,["pages","onGetPage"])],64)}c("99af");var f=c("1799"),h={data:function(){return{orders:[],pagination:{},isLoading:!1}},components:{Pagination:f["a"]},methods:{getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("youting","/admin/orders?page=").concat(t);this.$http.get(c).then((function(t){t.data.success&&(console.log(t.data),e.isLoading=!1,e.orders=t.data.orders,e.pagination=t.data.pagination)}))},updatePaid:function(e){var t=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("youting","/admin/order/").concat(e.id),a={is_paid:!e.is_paid};this.$http.put(c,{data:a}).then((function(e){e.data.success?(t.isLoading=!1,t.getOrders()):console.log(e.data)}))}},created:function(){this.getOrders()}};h.render=j;t["default"]=h},5888:function(e,t,c){},"65f0":function(e,t,c){var a=c("861d"),n=c("e8b5"),r=c("b622"),o=r("species");e.exports=function(e,t){var c;return n(e)&&(c=e.constructor,"function"!=typeof c||c!==Array&&!n(c.prototype)?a(c)&&(c=c[o],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===t?0:t)}},8418:function(e,t,c){"use strict";var a=c("c04e"),n=c("9bf2"),r=c("5c6c");e.exports=function(e,t,c){var o=a(t);o in e?n.f(e,o,r(0,c)):e[o]=c}},"99af":function(e,t,c){"use strict";var a=c("23e7"),n=c("d039"),r=c("e8b5"),o=c("861d"),i=c("7b0b"),s=c("50c4"),l=c("8418"),d=c("65f0"),u=c("1dde"),p=c("b622"),b=c("2d00"),g=p("isConcatSpreadable"),O=9007199254740991,j="Maximum allowed index exceeded",f=b>=51||!n((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),h=u("concat"),k=function(e){if(!o(e))return!1;var t=e[g];return void 0!==t?!!t:r(e)},v=!f||!h;a({target:"Array",proto:!0,forced:v},{concat:function(e){var t,c,a,n,r,o=i(this),u=d(o,0),p=0;for(t=-1,a=arguments.length;t<a;t++)if(r=-1===t?o:arguments[t],k(r)){if(n=s(r.length),p+n>O)throw TypeError(j);for(c=0;c<n;c++,p++)c in r&&l(u,p,r[c])}else{if(p>=O)throw TypeError(j);l(u,p++,r)}return u.length=p,u}})},b0c0:function(e,t,c){var a=c("83ab"),n=c("9bf2").f,r=Function.prototype,o=r.toString,i=/^\s*function ([^ (]*)/,s="name";a&&!(s in r)&&n(r,s,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(e){return""}}})},e8b5:function(e,t,c){var a=c("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=chunk-285f30c9.03d3d59c.js.map