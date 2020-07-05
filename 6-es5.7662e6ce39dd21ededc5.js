function _classCallCheck(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,o){for(var e=0;e<o.length;e++){var a=o[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,o,e){return o&&_defineProperties(t.prototype,o),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9enj":function(t,o,e){"use strict";e.r(o);var a=e("ofXK"),n=e("tyNb"),i=e("1VWD"),r=e("fXoL"),s=e("5fk4"),l=e("R0Ic"),c={transform:"translate3d(0, -100%, 0)"},p={transform:"translate3d(100%, 0, 0)"},b={transform:"translate3d(0, 100%, 0)"},m={transform:"translate3d(-100%, 0, 0)"},g=[Object(l.n)("hover",[Object(l.k)("*",Object(l.l)({transform:"translate3d(0, 0, 0)"})),Object(l.m)("* => in-left",[Object(l.l)(m),Object(l.e)("0.3s ease")]),Object(l.m)("* => in-right",[Object(l.l)(p),Object(l.e)("0.3s ease")]),Object(l.m)("* => in-top",[Object(l.l)(c),Object(l.e)("0.3s ease")]),Object(l.m)("* => in-bottom",[Object(l.l)(b),Object(l.e)("0.3s ease")]),Object(l.m)("* => out-right",[Object(l.e)("0.3s ease",Object(l.l)(p))]),Object(l.m)("* => out-left",[Object(l.e)("0.3s ease",Object(l.l)(m))]),Object(l.m)("* => out-top",[Object(l.e)("0.3s ease",Object(l.l)(c))]),Object(l.m)("* => out-bottom",[Object(l.e)("0.3s ease",Object(l.l)(b))])])],f=e("wf0l"),d=["figure"];function u(t,o){if(1&t){var e=r.Ob();r.Nb(0,"div",3),r.Vb("@hover.done",(function(t){return r.fc(e),r.Zb().onDone(t)})),r.Nb(1,"span",4),r.mc(2),r.Mb(),r.Mb()}if(2&t){var a=r.Zb();r.cc("@hover",a.state),r.Ab(2),r.oc(" ",a.works.title," ")}}var h,w=((h=function(){function t(o){_classCallCheck(this,t),this.cd=o}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"mouseEnterHandler",value:function(t){this.effectEvent(t)}},{key:"mouseLeaveHandler",value:function(t){this.effectEvent(t)}},{key:"effectEvent",value:function(t){var o=this.figure.nativeElement.getBoundingClientRect(),e=o.left,a=o.right,n=o.bottom,i=t.pageX,r=t.pageY,s=Math.abs(o.top-r),l=Math.abs(n-r),c=Math.abs(e-i),p=Math.abs(a-i),b=Math.min(s,l,c,p),m="mouseenter"===event.type?"in":"out";switch(b){case c:return this.state="".concat(m,"-left");case p:return this.state="".concat(m,"-right");case s:return this.state="".concat(m,"-top");case l:return this.state="".concat(m,"-bottom")}}},{key:"onDone",value:function(t){this.state=t.toState.startsWith("out-")?null:this.state,this.cd.detectChanges()}}]),t}()).\u0275fac=function(t){return new(t||h)(r.Kb(r.h))},h.\u0275cmp=r.Eb({type:h,selectors:[["app-portfolio-card"]],viewQuery:function(t,o){var e;1&t&&r.ic(d,!0),2&t&&r.dc(e=r.Wb())&&(o.figure=e.first)},inputs:{works:"works"},decls:3,vars:3,consts:[[1,"portifolio-figure",3,"defaultImage","lazyLoad","mouseenter","mouseleave"],["figure",""],["class","overlay-title",4,"ngIf"],[1,"overlay-title"],["select","[overlay]"]],template:function(t,o){1&t&&(r.Nb(0,"div",0,1),r.Vb("mouseenter",(function(t){return o.mouseEnterHandler(t)}))("mouseleave",(function(t){return o.mouseLeaveHandler(t)})),r.kc(2,u,3,2,"div",2),r.Mb()),2&t&&(r.cc("defaultImage",o.works.lowImg)("lazyLoad",o.works.img),r.Ab(2),r.cc("ngIf",o.state))},directives:[f.b,a.i],styles:[".portifolio-figure[_ngcontent-%COMP%]{width:100%;height:0;padding-bottom:56.25%;border-radius:10px;background-image:url();background-size:cover;background-repeat:no-repeat;background-position:top;position:relative;box-shadow:2px 2px 5px rgba(0,0,0,.404);overflow:hidden;color:#fff;font-weight:700}.portifolio-figure[_ngcontent-%COMP%], .portifolio-figure[_ngcontent-%COMP%]   .overlay-title[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.portifolio-figure[_ngcontent-%COMP%]   .overlay-title[_ngcontent-%COMP%]{background-color:var(--primary-color-transparent);position:absolute;top:0;right:0;bottom:0;left:0;font-size:2rem}"],data:{animation:g}}),h);function k(t,o){if(1&t&&(r.Nb(0,"li",9),r.Lb(1,"app-portfolio-card",10),r.Mb()),2&t){var e=o.$implicit;r.Ab(1),r.cc("works",e)}}var _,O,v=[{path:"",component:(_=function(){function t(o){_classCallCheck(this,t),this.titleService=o,this.titles=[{img:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",lowImg:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",title:"Nomad Work"},{img:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",lowImg:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",title:"dale"},{img:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",lowImg:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",title:"mlk"},{img:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",lowImg:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",title:"doido"},{img:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",lowImg:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",title:"pega"},{img:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",lowImg:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",title:"essa"},{img:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",lowImg:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",title:"anima\xe7\xe3o"},{img:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",lowImg:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",title:"n\xe3o sei"},{img:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadwork.jpg",lowImg:"https://s3-sa-east-1.amazonaws.com/pdroalbqrq.github.io/homenomadworklowquality.jpg",title:"mais"}]}return _createClass(t,[{key:"ngOnInit",value:function(){this.titleService.changeTitle("portfolio")}}]),t}(),_.\u0275fac=function(t){return new(t||_)(r.Kb(s.a))},_.\u0275cmp=r.Eb({type:_,selectors:[["app-portfolio"]],hostVars:1,hostBindings:function(t,o){2&t&&r.pc("@homeTransition",void 0)},decls:13,vars:1,consts:[[1,"background"],[1,"container"],[1,"title-session","block"],[1,"title"],[1,"title-bg"],[1,"portfolio"],[1,"portifolio__gallery"],[1,"portifolio__list"],["class","portifolio__card",4,"ngFor","ngForOf"],[1,"portifolio__card"],[3,"works"]],template:function(t,o){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"section",2),r.Nb(3,"h1",3),r.mc(4,"MEU "),r.Nb(5,"span",3),r.mc(6,"PORTIF\xd3LIO"),r.Mb(),r.Mb(),r.Nb(7,"span",4),r.mc(8,"TRABALHOS"),r.Mb(),r.Mb(),r.Nb(9,"section",5),r.Nb(10,"div",6),r.Nb(11,"ul",7),r.kc(12,k,2,1,"li",8),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&t&&(r.Ab(12),r.cc("ngForOf",o.titles))},directives:[a.h,w],styles:[".background[_ngcontent-%COMP%]{background:linear-gradient(-75deg,var(--primary-color) 24%,transparent 24.05%)}.portfolio[_ngcontent-%COMP%]{margin:50px 0}.portfolio[_ngcontent-%COMP%], .portfolio[_ngcontent-%COMP%]   .portifolio__gallery[_ngcontent-%COMP%]{width:100%;height:100%}.portfolio[_ngcontent-%COMP%]   .portifolio__gallery[_ngcontent-%COMP%]   .portifolio__list[_ngcontent-%COMP%]{position:relative;list-style:none;margin:0;padding:0;display:-webkit-box;display:flex;flex-wrap:wrap}.portifolio__card[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 33.333333%;float:left;cursor:pointer;padding:15px;box-sizing:border-box;overflow:hidden}@media screen and (max-width:480px){.portfolio[_ngcontent-%COMP%]   .portifolio__gallery[_ngcontent-%COMP%]   .portifolio__list[_ngcontent-%COMP%]   .portifolio__card[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 100%}}@media screen and (max-width:1025px){.portfolio[_ngcontent-%COMP%]{margin-top:0}.portfolio[_ngcontent-%COMP%]   .portifolio__list[_ngcontent-%COMP%]   .portifolio__card[_ngcontent-%COMP%]{-webkit-box-flex:0;flex:0 0 50%}}"],data:{animation:[i.a]}}),_)}],j=((O=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ib({type:O}),O.\u0275inj=r.Hb({factory:function(t){return new(t||O)},imports:[[n.d.forChild(v)],n.d]}),O),y=e("PCNd");e.d(o,"PortfolioModule",(function(){return M}));var q,M=((q=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ib({type:q}),q.\u0275inj=r.Hb({factory:function(t){return new(t||q)},imports:[[a.b,j,y.a]]}),q)}}]);