window.Modernizr=function(an,am,al){function H(b){ae.cssText=b}function Y(d,c){return H(ab.join(d+";")+(c||""))}function W(d,c){return typeof d===c}function U(d,c){return !!~(""+d).indexOf(c)}function S(f,c){for(var h in f){var g=f[h];if(!U(g,"-")&&ae[g]!==al){return c=="pfx"?g:!0}}return !1}function Q(g,c,j){for(var i in g){var h=c[g[i]];if(h!==al){return j===!1?g[i]:W(h,"function")?h.bind(j||c):h}}return !1}function O(g,f,j){var i=g.charAt(0).toUpperCase()+g.slice(1),h=(g+" "+Z.join(i+" ")+i).split(" ");return W(f,"string")||W(f,"undefined")?S(h,f):(h=(g+" "+X.join(i+" ")+i).split(" "),Q(h,f,j))}var ak="2.6.1",aj={},ai=!0,ah=am.documentElement,ag="modernizr",af=am.createElement(ag),ae=af.style,ad,ac={}.toString,ab=" -webkit- -moz- -o- -ms- ".split(" "),aa="Webkit Moz O ms",Z=aa.split(" "),X=aa.toLowerCase().split(" "),V={},T={},R={},P=[],N=P.slice,M,K=function(t,s,r,q){var p,o,n,h=am.createElement("div"),g=am.body,b=g?g:am.createElement("body");if(parseInt(r,10)){while(r--){n=am.createElement("div"),n.id=q?q[r]:ag+(r+1),h.appendChild(n)}}return p=["&#173;",'<style id="s',ag,'">',t,"</style>"].join(""),h.id=ag,(g?h:b).innerHTML+=p,b.appendChild(h),g||(b.style.background="",ah.appendChild(b)),o=s(h,t),g?h.parentNode.removeChild(h):b.parentNode.removeChild(b),!!o},J={}.hasOwnProperty,I;!W(J,"undefined")&&!W(J.call,"undefined")?I=function(d,c){return J.call(d,c)}:I=function(d,c){return c in d&&W(d.constructor.prototype[c],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;if(typeof h!="function"){throw new TypeError}var g=N.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};b.prototype=h.prototype;var d=new b,c=h.apply(d,g.concat(N.call(arguments)));return Object(c)===c?c:d}return h.apply(a,g.concat(N.call(arguments)))};return f}),V.backgroundsize=function(){return O("backgroundSize")},V.csstransforms=function(){return !!O("transform")},V.csstransforms3d=function(){var b=!!O("perspective");return b&&"webkitPerspective" in ah.style&&K("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(a,d){b=a.offsetLeft===9&&a.offsetHeight===3}),b},V.csstransitions=function(){return O("transition")};for(var L in V){I(V,L)&&(M=L.toLowerCase(),aj[M]=V[L](),P.push((aj[M]?"":"no-")+M))}return aj.addTest=function(e,c){if(typeof e=="object"){for(var f in e){I(e,f)&&aj.addTest(f,e[f])}}else{e=e.toLowerCase();if(aj[e]!==al){return aj}c=typeof c=="function"?c():c,ai&&(ah.className+=" "+(c?"":"no-")+e),aj[e]=c}return aj},H(""),af=ad=null,function(aq,ap){function z(f,e){var h=f.createElement("p"),g=f.getElementsByTagName("head")[0]||f.documentElement;return h.innerHTML="x<style>"+e+"</style>",g.insertBefore(h.lastChild,g.firstChild)}function y(){var b=s.elements;return typeof b=="string"?b.split(" "):b}function x(d){var c=B[d[D]];return c||(c={},C++,d[D]=C,B[C]=c),c}function w(b,h,e){h||(h=ap);if(A){return h.createElement(b)}e||(e=x(h));var d;return e.cache[b]?d=e.cache[b].cloneNode():F.test(b)?d=(e.cache[b]=e.createElem(b)).cloneNode():d=e.createElem(b),d.canHaveChildren&&!G.test(b)?e.frag.appendChild(d):d}function v(b,l){b||(b=ap);if(A){return b.createDocumentFragment()}l=l||x(b);var k=l.frag.cloneNode(),j=0,i=y(),h=i.length;for(;j<h;j++){k.createElement(i[j])}return k}function u(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return s.shivMethods?w(a,d,c):c.createElem(a)},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+y().join().replace(/\w+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'})+");return n}")(s,c.frag)}function t(b){b||(b=ap);var d=x(b);return s.shivCSS&&!E&&!d.hasCSS&&(d.hasCSS=!!z(b,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),A||u(b,d),b}var ao=aq.html5||{},G=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,F=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,E,D="_html5shiv",C=0,B={},A;(function(){try{var b=ap.createElement("a");b.innerHTML="<xyz></xyz>",E="hidden" in b,A=b.childNodes.length==1||function(){ap.createElement("a");var c=ap.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()}catch(d){E=!0,A=!0}})();var s={elements:ao.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:ao.shivCSS!==!1,supportsUnknownElements:A,shivMethods:ao.shivMethods!==!1,type:"default",shivDocument:t,createElement:w,createDocumentFragment:v};aq.html5=s,t(ap)}(this,am),aj._version=ak,aj._prefixes=ab,aj._domPrefixes=X,aj._cssomPrefixes=Z,aj.testProp=function(b){return S([b])},aj.testAllProps=O,aj.testStyles=K,ah.className=ah.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(ai?" js "+P.join(" "):""),aj}(this,this.document),function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)}function Z(b){return"string"==typeof b}function Y(){}function X(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b}function W(){var b=O.shift();M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)},0):(b(),W()):M=0}function V(w,v,t,s,q,p,n){function m(a){if(!g&&X(h.readyState)&&(x.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=w&&R(function(){I.removeChild(h)},50);for(var c in D[v]){D[v].hasOwnProperty(c)&&D[v][c].onload()}}}var n=n||L.errorTimeout,h=ac.createElement(w),g=0,b=0,x={t:t,s:v,e:q,a:p,x:n};1===D[v]&&(b=1,D[v]=[]),"object"==w?h.data=v:(h.src=v,h.type=w),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)},O.splice(s,0,x),"img"!=w&&(b||2===D[v]?(I.insertBefore(h,J?null:Q),R(m,n)):D[v].push(h))}function U(g,e,j,i,h){return M=0,e=e||"j",Z(g)?V("c"==e?G:H,g,e,this.i++,j,i,h):(O.splice(this.i++,0,g),1==O.length&&W()),this}function T(){var b=L;return b.loader={load:U,i:0},b}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d}},N,L;L=function(e){function c(i){var i=i.split("!"),h=E.length,q=i.pop(),p=i.length,q={url:q,origUrl:q,prefixes:i},o,l,j;for(l=0;l<p;l++){j=i[l].split("="),(o=C[j.shift()])&&(q=o(q,j))}for(l=0;l<h;l++){q=E[l](q)}return q}function n(b,s,r,q,p){var o=c(b),l=o.autoCallback;o.url.split(".").pop().split("?").shift(),o.bypass||(s&&(s=aa(s)?s:s[b]||s[q]||s[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,s,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ab,o.noexec,o.attrs,o.timeout),(aa(s)||aa(l))&&r.load(function(){T(),s&&s(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2})))}function m(w,v){function u(b,h){if(b){if(Z(b)){h||(r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}),n(b,r,v,0,t)}else{if(Object(b)===b){for(g in o=function(){var a=0,i;for(i in b){b.hasOwnProperty(i)&&a++}return a}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(aa(r)?r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}:r[g]=function(i){return function(){var a=[].slice.call(arguments);i&&i.apply(this,a),p()}}(q[g])),n(b[g],r,v,g,t))}}}}else{!h&&p()}}var t=!!w.test,s=w.load||w.both,r=w.callback||Y,q=r,p=w.complete||Y,o,g;u(t?w.yep:w.nope,!!s),s&&u(s)}var k,f,d=this.yepnope.loader;if(Z(e)){n(e,0,d,0)}else{if(F(e)){for(k=0;k<e.length;k++){f=e[k],Z(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)}}else{Object(e)===e&&m(e,d)}}},L.addPrefix=function(d,c){C[d]=c},L.addFilter=function(b){E.push(b)},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;g.src=r;for(b in p){g.setAttribute(b,p[b])}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)},R(function(){f||(f=1,q(1))},n),m?g.onload():Q.parentNode.insertBefore(g,Q)},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;l.href=b,l.rel="stylesheet",l.type="text/css";for(f in m){l.setAttribute(f,m[f])}k||(Q.parentNode.insertBefore(l,Q),R(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * Copyright(c) 2011 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
//(function(A){function u(f){var e=["Moz","Webkit","O","ms"],i=f.charAt(0).toUpperCase()+f.substr(1);if(f in w.style){return f}for(f=0;f<e.length;++f){var g=e[f]+i;if(g in w.style){return g}}}function v(d){"string"===typeof d&&this.parse(d);return this}function c(e,d,f){!0===d?e.queue(f):d?e.queue(d,f):f()}function t(e){var d=[];A.each(e,function(f){f=A.camelCase(f);f=A.transit.propertyMap[f]||f;f=a(f);-1===A.inArray(f,d)&&d.push(f)});return d}function b(g,d,m,k){g=t(g);A.cssEase[m]&&(m=A.cssEase[m]);var i=""+l(d)+" "+m;0<parseInt(k,10)&&(i+=" "+l(k));var j=[];A.each(g,function(f,e){j.push(e+" "+i)});return j.join(", ")}function y(e,d){d||(A.cssNumber[e]=!0);A.transit.propertyMap[e]=z.transform;A.cssHooks[e]={get:function(f){return(A(f).css("transform")||new v).get(e)},set:function(f,i){var g=A(f).css("transform")||new v;g.setFromString(e,i);A(f).css({transform:g})}}}function a(d){return d.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function x(e,d){return"string"===typeof e&&!e.match(/^[\-0-9\.]+$/)?e:""+e+d}function l(d){A.fx.speeds[d]&&(d=A.fx.speeds[d]);return x(d,"ms")}A.transit={version:"0.1.3",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var w=document.createElement("div"),z={},B=-1<navigator.userAgent.toLowerCase().indexOf("chrome");z.transition=u("transition");z.transitionDelay=u("transitionDelay");z.transform=u("transform");z.transformOrigin=u("transformOrigin");w.style[z.transform]="";w.style[z.transform]="rotateY(90deg)";z.transform3d=""!==w.style[z.transform];A.extend(A.support,z);var h=z.transitionEnd={MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[z.transition]||null,w=null;A.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)"};A.cssHooks.transform={get:function(d){return A(d).data("transform")},set:function(e,d){var f=d;f instanceof v||(f=new v(f));e.style[z.transform]="WebkitTransform"===z.transform&&!B?f.toString(!0):f.toString();A(e).data("transform",f)}};A.cssHooks.transformOrigin={get:function(d){return d.style[z.transformOrigin]},set:function(e,d){e.style[z.transformOrigin]=d}};y("scale");y("translate");y("rotate");y("rotateX");y("rotateY");y("rotate3d");y("perspective");y("skewX");y("skewY");y("x",!0);y("y",!0);v.prototype={setFromString:function(e,d){var f="string"===typeof d?d.split(","):d.constructor===Array?d:[d];f.unshift(e);v.prototype.set.apply(this,f)},set:function(e){var d=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,d):this[e]=d.join(",")},get:function(d){return this.getter[d]?this.getter[d].apply(this):this[d]||0},setter:{rotate:function(d){this.rotate=x(d,"deg")},rotateX:function(d){this.rotateX=x(d,"deg")},rotateY:function(d){this.rotateY=x(d,"deg")},scale:function(e,d){void 0===d&&(d=e);this.scale=e+","+d},skewX:function(d){this.skewX=x(d,"deg")},skewY:function(d){this.skewY=x(d,"deg")},perspective:function(d){this.perspective=x(d,"px")},x:function(d){this.set("translate",d,null)},y:function(d){this.set("translate",null,d)},translate:function(e,d){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);null!==e&&(this._translateX=x(e,"px"));null!==d&&(this._translateY=x(d,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var d=(this.scale||"1,1").split(",");d[0]&&(d[0]=parseFloat(d[0]));d[1]&&(d[1]=parseFloat(d[1]));return d[0]===d[1]?d[0]:d},rotate3d:function(){for(var e=(this.rotate3d||"0,0,0,0deg").split(","),d=0;3>=d;++d){e[d]&&(e[d]=parseFloat(e[d]))}e[3]&&(e[3]=x(e[3],"deg"));return e}},parse:function(e){var d=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(f,i,g){d.setFromString(i,g)})},toString:function(e){var d=[],f;for(f in this){if(this.hasOwnProperty(f)&&(z.transform3d||!("rotateX"===f||"rotateY"===f||"perspective"===f||"transformOrigin"===f))){"_"!==f[0]&&(e&&"scale"===f?d.push(f+"3d("+this[f]+",1)"):e&&"translate"===f?d.push(f+"3d("+this[f]+",0)"):d.push(f+"("+this[f]+")"))}}return d.join(" ")}};A.fn.transition=A.fn.transit=function(E,D,C,s){var q=this,r=0,p=!0;"function"===typeof D&&(s=D,D=void 0);"function"===typeof C&&(s=C,C=void 0);"undefined"!==typeof E.easing&&(C=E.easing,delete E.easing);"undefined"!==typeof E.duration&&(D=E.duration,delete E.duration);"undefined"!==typeof E.complete&&(s=E.complete,delete E.complete);"undefined"!==typeof E.queue&&(p=E.queue,delete E.queue);"undefined"!==typeof E.delay&&(r=E.delay,delete E.delay);"undefined"===typeof D&&(D=A.fx.speeds._default);"undefined"===typeof C&&(C=A.cssEase._default);var D=l(D),o=b(E,D,C,r),e=A.transit.enabled&&z.transition?parseInt(D,10)+parseInt(r,10):0;if(0===e){return c(q,p,function(f){q.css(E);s&&s();f()}),q}var n={},d=function(f){var j=!1,i=function(){j&&q.unbind(h,i);0<e&&q.each(function(){this.style[z.transition]=n[this]||null});"function"===typeof s&&s.apply(q);"function"===typeof f&&f()};0<e&&h&&A.transit.useTransitionEnd?(j=!0,q.bind(h,i)):window.setTimeout(i,e);q.each(function(){0<e&&(this.style[z.transition]=o);A(this).css(E)})};c(q,p,function(g){var f=0;"MozTransition"===z.transition&&25>f&&(f=25);window.setTimeout(function(){d(g)},f)});return this};A.transit.getTransitionValue=b})(jQuery);(function(f,g,d){Array.prototype.shuffle=function(){var k=this.length,l,j;while(k--){l=Math.floor(Math.random()*k);j=this[k];this[k]=this[l];this[l]=j}return this};var a=f.event,b,i;b=a.special.debouncedresize={setup:function(){f(this).on("resize",b.handler)},teardown:function(){f(this).off("resize",b.handler)},handler:function(n,j){var m=this,l=arguments,k=function(){n.type="debouncedresize";a.dispatch.apply(m,l)};if(i){clearTimeout(i)}j?k():i=setTimeout(k,b.threshold)},threshold:50};var c=f(g),e=g.Modernizr;f.GridRotator=function(k,l){this.$el=f(l);if(e.backgroundsize){var j=this;this.$el.addClass("ri-grid-loading");f("<img/>").load(function(){j._init(k)}).attr("src","img/mosaic/loading.gif")}};f.GridRotator.defaults={rows:4,columns:10,w1024:{rows:3,columns:8},w768:{rows:3,columns:7},w480:{rows:3,columns:5},w320:{rows:2,columns:4},w240:{rows:2,columns:3},step:"random",maxStep:3,preventClick:true,animType:"random",animSpeed:500,animEasingOut:"linear",animEasingIn:"linear",interval:3000};f.GridRotator.prototype={_init:function(l){var j=this;this.options=f.extend(true,{},f.GridRotator.defaults,l);this.animTypesAll=["fadeInOut","slideLeft","slideRight","slideTop","slideBottom","rotateLeft","rotateRight","rotateTop","rotateBottom","scale","rotate3d","rotateLeftScale","rotateRightScale","rotateTopScale","rotateBottomScale"];this.animTypesCond=["fadeInOut","slideLeft","slideRight","slideTop","slideBottom"];this.animTypes=this.animTypesCond;if(e.csstransforms3d){this.animTypes=this.animTypesAll}this.animType=this.options.animType;if(this.animType!=="random"){if(!e.csstransforms3d&&f.inArray(this.animType,this.animTypesCond)===-1&&this.animType!=="showHide"){this.animType="fadeInOut"}}this.animTypesTotal=this.animTypes.length;this.$list=this.$el.children("ul");var k=0,n=this.$list.find("img"),m=n.length;n.each(function(){var o=f(this),p=o.attr("src");f("<img/>").load(function(){++k;o.parent().css("background-image","url("+p+")");if(k===m){n.remove();j.$el.removeClass("ri-grid-loading");j.$items=j.$list.children("li");j.$itemsCache=j.$items.clone();j.itemsTotal=j.$items.length;j.outItems=[];j._layout();j._initEvents();j._start()}}).attr("src",p)})},_layout:function(v){var r=this;this._setGridDim();this.$list.empty();this.$items=this.$itemsCache.clone().appendTo(this.$list);var k=this.$items.filter(":gt("+(this.showTotal-1)+")"),l=k.children("a");this.outItems.length=0;l.each(function(j){r.outItems.push(f(this))});k.remove();var s=(document.defaultView)?parseInt(document.defaultView.getComputedStyle(this.$el.get(0),null).width):this.$el.width(),q=Math.floor(s/this.columns),p=s-(this.columns*Math.floor(q));for(var n=0;n<this.rows;++n){for(var m=0;m<this.columns;++m){var u=this.$items.eq(this.columns*n+m),o=q,t=(m<Math.floor(p))?q+1:q;u.css({width:t,height:o})}}if(this.options.preventClick){this.$items.children().css("cursor","default").on("click.gridrotator",false)}if(v){v.call()}},_setGridDim:function(){var j=this.$el.width();switch(true){case (j<240):this.rows=this.options.w240.rows;this.columns=this.options.w240.columns;break;case (j<320):this.rows=this.options.w320.rows;this.columns=this.options.w320.columns;break;case (j<480):this.rows=this.options.w480.rows;this.columns=this.options.w480.columns;break;case (j<768):this.rows=this.options.w768.rows;this.columns=this.options.w768.columns;break;case (j<1024):this.rows=this.options.w1024.rows;this.columns=this.options.w1024.columns;break;default:this.rows=this.options.rows;this.columns=this.options.columns;break}this.showTotal=this.rows*this.columns},_initEvents:function(){var j=this;c.on("debouncedresize.gridrotator",function(k){clearTimeout(j.playtimeout);j._layout(function(){j._start()})})},_start:function(){if(this.showTotal<this.itemsTotal){this._showNext()}},_getAnimType:function(){if(this.animType==="random"){return this.animTypes[Math.floor(Math.random()*this.animTypesTotal)]}else{return this.animType}},_getAnimProperties:function(n,q){var j={},p={},m={},k={},r=this._getAnimType(),l;switch(r){case"showHide":l=0;k.opacity=0;break;case"fadeInOut":k.opacity=0;break;case"slideLeft":j.left=q.width();m.left=0;k.left=-q.width();break;case"slideRight":j.left=-q.width();m.left=0;k.left=q.width();break;case"slideTop":j.top=q.height();m.top=0;k.top=-q.height();break;case"slideBottom":j.top=-q.height();m.top=0;k.top=q.height();break;case"rotateLeft":l=this.options.animSpeed/2;j.rotateY="90deg";m.rotateY="0deg";m.delay=l;k.rotateY="-90deg";break;case"rotateRight":l=this.options.animSpeed/2;j.rotateY="-90deg";m.rotateY="0deg";m.delay=l;k.rotateY="90deg";break;case"rotateTop":l=this.options.animSpeed/2;j.rotateX="90deg";m.rotateX="0deg";m.delay=l;k.rotateX="-90deg";break;case"rotateBottom":l=this.options.animSpeed/2;j.rotateX="-90deg";m.rotateX="0deg";m.delay=l;k.rotateX="90deg";break;case"scale":l=this.options.animSpeed/2;j.scale="0";p.scale="1";m.scale="1";m.delay=l;k.scale="0";break;case"rotateLeftScale":j.scale="0.3";p.scale="1";m.scale="1";k.scale="0.3";l=this.options.animSpeed/2;j.rotateY="90deg";m.rotateY="0deg";m.delay=l;k.rotateY="-90deg";break;case"rotateRightScale":j.scale="0.3";p.scale="1";m.scale="1";k.scale="0.3";l=this.options.animSpeed/2;j.rotateY="-90deg";m.rotateY="0deg";m.delay=l;k.rotateY="90deg";break;case"rotateTopScale":j.scale="0.3";p.scale="1";m.scale="1";k.scale="0.3";l=this.options.animSpeed/2;j.rotateX="90deg";m.rotateX="0deg";m.delay=l;k.rotateX="-90deg";break;case"rotateBottomScale":j.scale="0.3";p.scale="1";m.scale="1";k.scale="0.3";l=this.options.animSpeed/2;j.rotateX="-90deg";m.rotateX="0deg";m.delay=l;k.rotateX="90deg";break;case"rotate3d":l=this.options.animSpeed/2;j.rotate3d="1, 1, 0, 90deg";m.rotate3d="1, 1, 0, 0deg";m.delay=l;k.rotate3d="1, 1, 0, -90deg";break}var o=(l!=d)?l:this.options.animSpeed;return{startInProp:j,startOutProp:p,endInProp:m,endOutProp:k,animSpeed:o}},_showNext:function(k){var j=this;clearTimeout(this.playtimeout);this.playtimeout=setTimeout(function(){var p=j.options.step,w=j.options.maxStep,s=1;if(w>j.showTotal){w=j.showTotal}var v=j.$items,m=[],l=(p==="random")?Math.floor(Math.random()*w+s):Math.min(Math.abs(p),w),u=j._getRandom(l,j.showTotal);for(var t=0;t<l;++t){var x=v.eq(u[t]);if(x.data("active")){j._showNext(1);return false}m.push(x)}for(var t=0;t<l;++t){var x=m[t],o=x.children("a:last"),n={width:o.width(),height:o.height()};x.data("active",true);var q=j.outItems.shift();j.outItems.push(o.clone());q.css(n).prependTo(x);var r=j._getAnimProperties(q,o);if(e.csstransitions){q.css(r.startInProp).transition(r.endInProp,r.animSpeed,j.options.animEasingIn);o.css(r.startOutProp).transition(r.endOutProp,r.animSpeed,j.options.animEasingOut,function(){f(this).parent().data("active",false).end().remove()})}else{q.css(r.startInProp).stop().animate(r.endInProp,r.animSpeed);o.css(r.startOutProp).stop().animate(r.endOutProp,r.animSpeed,function(){f(this).parent().data("active",false).end().remove()})}}j._showNext()},k||Math.max(Math.abs(this.options.interval),300))},_getRandom:function(m,j){var l=[];for(var k=0;k<j;++k){l.push(k)}return l.shuffle().slice(0,m)}};var h=function(j){if(g.console){g.console.error(j)}};f.fn.gridrotator=function(k){if(typeof k==="string"){var j=Array.prototype.slice.call(arguments,1);this.each(function(){var l=f.data(this,"gridrotator");if(!l){h("cannot call methods on gridrotator prior to initialization; attempted to call method '"+k+"'");return}if(!f.isFunction(l[k])||k.charAt(0)==="_"){h("no such method '"+k+"' for gridrotator instance");return}l[k].apply(l,j)})}else{this.each(function(){var l=f.data(this,"gridrotator");if(l){l._init()}else{f.data(this,"gridrotator",new f.GridRotator(k,this))}})}return this}})(jQuery,window);$(function(){$("#mosaic").gridrotator({rows:3,columns:15,animType:"fadeInOut",animSpeed:1000,interval:2000,step:1,w480:{rows:2,columns:7},w320:{rows:2,columns:5}})});

(function(A) {
    function u(f) {
        var e = ["Moz", "Webkit", "O", "ms"],
        i = f.charAt(0).toUpperCase() + f.substr(1);
        if (f in w.style) {
            return f
        }
        for (f = 0; f < e.length;++f) {
            var g = e[f] + i;
            if (g in w.style) {
                return g
            }
        }
    }
    function v(d) {
        "string" === typeof d && this.parse(d);
        return this
    }
    function c(e, d, f) { ! 0 === d ? e.queue(f) : d ? e.queue(d, f) : f()
        }
    function t(e) {
        var d = [];
        A.each(e, function(f) {
            f = A.camelCase(f);
            f = A.transit.propertyMap[f] || f;
            f = a(f); - 1 === A.inArray(f, d) && d.push(f)
            });
        return d
    }
    function b(g, d, m, k) {
        g = t(g);
        A.cssEase[m] && (m = A.cssEase[m]);
        var i = "" + l(d) + " " + m;
        0 < parseInt(k, 10) && (i += " " + l(k));
        var j = [];
        A.each(g, function(f, e) {
            j.push(e + " " + i)
            });
        return j.join(", ")
        }
    function y(e, d) {
        d || (A.cssNumber[e] = !0);
        A.transit.propertyMap[e] = z.transform;
        A.cssHooks[e] = {
            get: function(f) {
                return (A(f).css("transform") || new v).get(e)
                },
            set: function(f, i) {
                var g = A(f).css("transform") || new v;
                g.setFromString(e, i);
                A(f).css({
                    transform: g
                })
                }
        }
    }
    function a(d) {
        return d.replace(/([A-Z])/g, function(e) {
            return "-" + e.toLowerCase()
            })
        }
    function x(e, d) {
        return "string" === typeof e && !e.match(/^[\-0-9\.]+$/) ? e: "" + e + d
    }
    function l(d) {
        A.fx.speeds[d] && (d = A.fx.speeds[d]);
        return x(d, "ms")
        }
    A.transit = {
        version: "0.1.3",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: !0,
        useTransitionEnd: !1
    };
    var w = document.createElement("div"),
    z = {},
    B = -1 < navigator.userAgent.toLowerCase().indexOf("chrome");
    z.transition = u("transition");
    z.transitionDelay = u("transitionDelay");
    z.transform = u("transform");
    z.transformOrigin = u("transformOrigin");
    w.style[z.transform] = "";
    w.style[z.transform] = "rotateY(90deg)";
    z.transform3d = "" !== w.style[z.transform];
    A.extend(A.support, z);
    var h = z.transitionEnd = {
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    } [z.transition] || null,
    w = null;
    A.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)"
    };
    A.cssHooks.transform = {
        get: function(d) {
            return A(d).data("transform")
            },
        set: function(e, d) {
            var f = d;
            f instanceof v || (f = new v(f));
            e.style[z.transform] = "WebkitTransform" === z.transform && !B ? f.toString(!0) : f.toString();
            A(e).data("transform", f)
            }
    };
    A.cssHooks.transformOrigin = {
        get: function(d) {
            return d.style[z.transformOrigin]
            },
        set: function(e, d) {
            e.style[z.transformOrigin] = d
        }
    };
    y("scale");
    y("translate");
    y("rotate");
    y("rotateX");
    y("rotateY");
    y("rotate3d");
    y("perspective");
    y("skewX");
    y("skewY");
    y("x", !0);
    y("y", !0);
    v.prototype = {
        setFromString: function(e, d) {
            var f = "string" === typeof d ? d.split(",") : d.constructor === Array ? d: [d];
            f.unshift(e);
            v.prototype.set.apply(this, f)
            },
        set: function(e) {
            var d = Array.prototype.slice.apply(arguments, [1]);
            this.setter[e] ? this.setter[e].apply(this, d) : this[e] = d.join(",")
            },
        get: function(d) {
            return this.getter[d] ? this.getter[d].apply(this) : this[d] || 0
        },
        setter: {
            rotate: function(d) {
                this.rotate = x(d, "deg")
                },
            rotateX: function(d) {
                this.rotateX = x(d, "deg")
                },
            rotateY: function(d) {
                this.rotateY = x(d, "deg")
                },
            scale: function(e, d) {
                void 0 === d && (d = e);
                this.scale = e + "," + d
            },
            skewX: function(d) {
                this.skewX = x(d, "deg")
                },
            skewY: function(d) {
                this.skewY = x(d, "deg")
                },
            perspective: function(d) {
                this.perspective = x(d, "px")
                },
            x: function(d) {
                this.set("translate", d, null)
                },
            y: function(d) {
                this.set("translate", null, d)
                },
            translate: function(e, d) {
                void 0 === this._translateX && (this._translateX = 0);
                void 0 === this._translateY && (this._translateY = 0);
                null !== e && (this._translateX = x(e, "px"));
                null !== d && (this._translateY = x(d, "px"));
                this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0
            },
            y: function() {
                return this._translateY || 0
            },
            scale: function() {
                var d = (this.scale || "1,1").split(",");
                d[0] && (d[0] = parseFloat(d[0]));
                d[1] && (d[1] = parseFloat(d[1]));
                return d[0] === d[1] ? d[0] : d
            },
            rotate3d: function() {
                for (var e = (this.rotate3d || "0,0,0,0deg").split(","), d = 0; 3 >= d;++d) {
                    e[d] && (e[d] = parseFloat(e[d]))
                    }
                e[3] && (e[3] = x(e[3], "deg"));
                return e
            }
        },
        parse: function(e) {
            var d = this;
            e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(f, i, g) {
                d.setFromString(i, g)
                })
            },
        toString: function(e) {
            var d = [],
            f;
            for (f in this) {
                if (this.hasOwnProperty(f) && (z.transform3d || !("rotateX" === f || "rotateY" === f || "perspective" === f || "transformOrigin" === f))) {
                    "_" !== f[0] && (e && "scale" === f ? d.push(f + "3d(" + this[f] + ",1)") : e && "translate" === f ? d.push(f + "3d(" + this[f] + ",0)") : d.push(f + "(" + this[f] + ")"))
                    }
            }
            return d.join(" ")
            }
    };
    A.fn.transition = A.fn.transit = function(E, D, C, s) {
        var q = this,
        r = 0,
        p = !0;
        "function" === typeof D && (s = D, D = void 0);
        "function" === typeof C && (s = C, C = void 0);
        "undefined" !== typeof E.easing && (C = E.easing, delete E.easing);
        "undefined" !== typeof E.duration && (D = E.duration, delete E.duration);
        "undefined" !== typeof E.complete && (s = E.complete, delete E.complete);
        "undefined" !== typeof E.queue && (p = E.queue, delete E.queue);
        "undefined" !== typeof E.delay && (r = E.delay, delete E.delay);
        "undefined" === typeof D && (D = A.fx.speeds._default);
        "undefined" === typeof C && (C = A.cssEase._default);
        var D = l(D),
        o = b(E, D, C, r),
        e = A.transit.enabled && z.transition ? parseInt(D, 10) + parseInt(r, 10) : 0;
        if (0 === e) {
            return c(q, p, function(f) {
                q.css(E);
                s && s();
                f()
                }),
            q
        }
        var n = {},
        d = function(f) {
            var j = !1,
            i = function() {
                j && q.unbind(h, i);
                0 < e && q.each(function() {
                    this.style[z.transition] = n[this] || null
                });
                "function" === typeof s && s.apply(q);
                "function" === typeof f && f()
                };
            0 < e && h && A.transit.useTransitionEnd ? (j = !0, q.bind(h, i)) : window.setTimeout(i, e);
            q.each(function() {
                0 < e && (this.style[z.transition] = o);
                A(this).css(E)
                })
            };
        c(q, p, function(g) {
            var f = 0;
            "MozTransition" === z.transition && 25 > f && (f = 25);
            window.setTimeout(function() {
                d(g)
                }, f)
            });
        return this
    };
    A.transit.getTransitionValue = b
})(jQuery); (function(f, g, d) {
    Array.prototype.shuffle = function() {
        var k = this.length,
        l,
        j;
        while (k--) {
            l = Math.floor(Math.random() * k);
            j = this[k];
            this[k] = this[l];
            this[l] = j
        }
        return this
    };
    var a = f.event,
    b,
    i;
    b = a.special.debouncedresize = {
        setup: function() {
            f(this).on("resize", b.handler)
            },
        teardown: function() {
            f(this).off("resize", b.handler)
            },
        handler: function(n, j) {
            var m = this,
            l = arguments,
            k = function() {
                n.type = "debouncedresize";
                a.dispatch.apply(m, l)
                };
            if (i) {
                clearTimeout(i)
                }
            j ? k() : i = setTimeout(k, b.threshold)
            },
        threshold: 50
    };
    var c = f(g),
    e = g.Modernizr;
    f.GridRotator = function(k, l) {
        this.$el = f(l);
        if (e.backgroundsize) {
            var j = this;
            this.$el.addClass("ri-grid-loading");
            f("<img/>").load(function() {
                j._init(k)
                }).attr("src", "img/mosaic/loading.gif")
            }
    };
    f.GridRotator.defaults = {
        rows: 4,
        columns: 10,
        w1024: {
            rows: 3,
            columns: 8
        },
        w768: {
            rows: 3,
            columns: 7
        },
        w480: {
            rows: 3,
            columns: 5
        },
        w320: {
            rows: 2,
            columns: 4
        },
        w240: {
            rows: 2,
            columns: 3
        },
        step: "random",
        maxStep: 3,
        preventClick: true,
        animType: "random",
        animSpeed: 500,
        animEasingOut: "linear",
        animEasingIn: "linear",
        interval: 3000
    };
    f.GridRotator.prototype = {
        _init: function(l) {
            var j = this;
            this.options = f.extend(true, {}, f.GridRotator.defaults, l);
            this.animTypesAll = ["fadeInOut", "slideLeft", "slideRight", "slideTop", "slideBottom", "rotateLeft", "rotateRight", "rotateTop", "rotateBottom", "scale", "rotate3d", "rotateLeftScale", "rotateRightScale", "rotateTopScale", "rotateBottomScale"];
            this.animTypesCond = ["fadeInOut", "slideLeft", "slideRight", "slideTop", "slideBottom"];
            this.animTypes = this.animTypesCond;
            if (e.csstransforms3d) {
                this.animTypes = this.animTypesAll
            }
            this.animType = this.options.animType;
            if (this.animType !== "random") {
                if (!e.csstransforms3d && f.inArray(this.animType, this.animTypesCond) === -1 && this.animType !== "showHide") {
                    this.animType = "fadeInOut"
                }
            }
            this.animTypesTotal = this.animTypes.length;
            this.$list = this.$el.children("ul");
            var k = 0,
            n = this.$list.find("img"),
            m = n.length;
            n.each(function() {
                var o = f(this),
                p = o.attr("src");
                f("<img/>").load(function() {++k;
                    o.parent().css("background-image", "url(" + p + ")");
                    if (k === m) {
                        n.remove();
                        j.$el.removeClass("ri-grid-loading");
                        j.$items = j.$list.children("li");
                        j.$itemsCache = j.$items.clone();
                        j.itemsTotal = j.$items.length;
                        j.outItems = [];
                        j._layout();
                        j._initEvents();
                        j._start()
                        }
                }).attr("src", p)
                })
            },
        _layout: function(v) {
            var r = this;
            this._setGridDim();
            this.$list.empty();
            this.$items = this.$itemsCache.clone().appendTo(this.$list);
            var k = this.$items.filter(":gt(" + (this.showTotal - 1) + ")"),
            l = k.children("a");
            this.outItems.length = 0;
            l.each(function(j) {
                r.outItems.push(f(this))
                });
            k.remove();
            var s = (document.defaultView) ? parseInt(document.defaultView.getComputedStyle(this.$el.get(0), null).width) : this.$el.width(),
            q = Math.floor(s / this.columns),
            p = s - (this.columns * Math.floor(q));
            for (var n = 0; n < this.rows;++n) {
                for (var m = 0; m < this.columns;++m) {
                    var u = this.$items.eq(this.columns * n + m),
                    o = q,
                    t = (m < Math.floor(p)) ? q + 1: q;
                    u.css({
                        width: t,
                        height: o
                    })
                    }
            }
            if (this.options.preventClick) {
                this.$items.children().css("cursor", "default").on("click.gridrotator", false)
                }
            if (v) {
                v.call()
                }
        },
        _setGridDim: function() {
            var j = this.$el.width();
            switch (true) {
            case(j < 240) : this.rows = this.options.w240.rows;
                this.columns = this.options.w240.columns;
                break;
            case (j < 320) : this.rows = this.options.w320.rows;
                this.columns = this.options.w320.columns;
                break;
            case (j < 480) : this.rows = this.options.w480.rows;
                this.columns = this.options.w480.columns;
                break;
            case (j < 768) : this.rows = this.options.w768.rows;
                this.columns = this.options.w768.columns;
                break;
            case (j < 1024) : this.rows = this.options.w1024.rows;
                this.columns = this.options.w1024.columns;
                break;
            default:
                this.rows = this.options.rows;
                this.columns = this.options.columns;
                break
            }
            this.showTotal = this.rows * this.columns
        },
        _initEvents: function() {
            var j = this;
            c.on("debouncedresize.gridrotator", function(k) {
                clearTimeout(j.playtimeout);
                j._layout(function() {
                    j._start()
                    })
                })
            },
        _start: function() {
            if (this.showTotal < this.itemsTotal) {
                this._showNext()
                }
        },
        _getAnimType: function() {
            if (this.animType === "random") {
                return this.animTypes[Math.floor(Math.random() * this.animTypesTotal)]
                } else {
                return this.animType
            }
        },
        _getAnimProperties: function(n, q) {
            var j = {},
            p = {},
            m = {},
            k = {},
            r = this._getAnimType(),
            l;
            switch (r) {
            case "showHide":
                l = 0;
                k.opacity = 0;
                break;
            case "fadeInOut":
                k.opacity = 0;
                break;
            case "slideLeft":
                j.left = q.width();
                m.left = 0;
                k.left = -q.width();
                break;
            case "slideRight":
                j.left = -q.width();
                m.left = 0;
                k.left = q.width();
                break;
            case "slideTop":
                j.top = q.height();
                m.top = 0;
                k.top = -q.height();
                break;
            case "slideBottom":
                j.top = -q.height();
                m.top = 0;
                k.top = q.height();
                break;
            case "rotateLeft":
                l = this.options.animSpeed / 2;
                j.rotateY = "90deg";
                m.rotateY = "0deg";
                m.delay = l;
                k.rotateY = "-90deg";
                break;
            case "rotateRight":
                l = this.options.animSpeed / 2;
                j.rotateY = "-90deg";
                m.rotateY = "0deg";
                m.delay = l;
                k.rotateY = "90deg";
                break;
            case "rotateTop":
                l = this.options.animSpeed / 2;
                j.rotateX = "90deg";
                m.rotateX = "0deg";
                m.delay = l;
                k.rotateX = "-90deg";
                break;
            case "rotateBottom":
                l = this.options.animSpeed / 2;
                j.rotateX = "-90deg";
                m.rotateX = "0deg";
                m.delay = l;
                k.rotateX = "90deg";
                break;
            case "scale":
                l = this.options.animSpeed / 2;
                j.scale = "0";
                p.scale = "1";
                m.scale = "1";
                m.delay = l;
                k.scale = "0";
                break;
            case "rotateLeftScale":
                j.scale = "0.3";
                p.scale = "1";
                m.scale = "1";
                k.scale = "0.3";
                l = this.options.animSpeed / 2;
                j.rotateY = "90deg";
                m.rotateY = "0deg";
                m.delay = l;
                k.rotateY = "-90deg";
                break;
            case "rotateRightScale":
                j.scale = "0.3";
                p.scale = "1";
                m.scale = "1";
                k.scale = "0.3";
                l = this.options.animSpeed / 2;
                j.rotateY = "-90deg";
                m.rotateY = "0deg";
                m.delay = l;
                k.rotateY = "90deg";
                break;
            case "rotateTopScale":
                j.scale = "0.3";
                p.scale = "1";
                m.scale = "1";
                k.scale = "0.3";
                l = this.options.animSpeed / 2;
                j.rotateX = "90deg";
                m.rotateX = "0deg";
                m.delay = l;
                k.rotateX = "-90deg";
                break;
            case "rotateBottomScale":
                j.scale = "0.3";
                p.scale = "1";
                m.scale = "1";
                k.scale = "0.3";
                l = this.options.animSpeed / 2;
                j.rotateX = "-90deg";
                m.rotateX = "0deg";
                m.delay = l;
                k.rotateX = "90deg";
                break;
            case "rotate3d":
                l = this.options.animSpeed / 2;
                j.rotate3d = "1, 1, 0, 90deg";
                m.rotate3d = "1, 1, 0, 0deg";
                m.delay = l;
                k.rotate3d = "1, 1, 0, -90deg";
                break
            }
            var o = (l != d) ? l: this.options.animSpeed;
            return {
                startInProp: j,
                startOutProp: p,
                endInProp: m,
                endOutProp: k,
                animSpeed: o
            }
        },
        _showNext: function(k) {
            var j = this;
            clearTimeout(this.playtimeout);
            this.playtimeout = setTimeout(function() {
                var p = j.options.step,
                w = j.options.maxStep,
                s = 1;
                if (w > j.showTotal) {
                    w = j.showTotal
                }
                var v = j.$items,
                m = [],
                l = (p === "random") ? Math.floor(Math.random() * w + s) : Math.min(Math.abs(p), w),
                u = j._getRandom(l, j.showTotal);
                for (var t = 0; t < l;++t) {
                    var x = v.eq(u[t]);
                    if (x.data("active")) {
                        j._showNext(1);
                        return false
                    }
                    m.push(x)
                    }
                for (var t = 0; t < l;++t) {
                    var x = m[t],
                    o = x.children("a:last"),
                    n = {
                        width: o.width(),
                        height: o.height()
                        };
                    x.data("active", true);
                    var q = j.outItems.shift();
                    j.outItems.push(o.clone());
                    q.css(n).prependTo(x);
                    var r = j._getAnimProperties(q, o);
                    if (e.csstransitions) {
                        q.css(r.startInProp).transition(r.endInProp, r.animSpeed, j.options.animEasingIn);
                        o.css(r.startOutProp).transition(r.endOutProp, r.animSpeed, j.options.animEasingOut, function() {
                            f(this).parent().data("active", false).end().remove()
                            })
                        } else {
                        q.css(r.startInProp).stop().animate(r.endInProp, r.animSpeed);
                        o.css(r.startOutProp).stop().animate(r.endOutProp, r.animSpeed, function() {
                            f(this).parent().data("active", false).end().remove()
                            })
                        }
                }
                j._showNext()
                }, k || Math.max(Math.abs(this.options.interval), 300))
            },
        _getRandom: function(m, j) {
            var l = [];
            for (var k = 0; k < j;++k) {
                l.push(k)
                }
            return l.shuffle().slice(0, m)
            }
    };
    var h = function(j) {
        if (g.console) {
            g.console.error(j)
            }
    };
    f.fn.gridrotator = function(k) {
        if (typeof k === "string") {
            var j = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var l = f.data(this, "gridrotator");
                if (!l) {
                    h("cannot call methods on gridrotator prior to initialization; attempted to call method '" + k + "'");
                    return
                }
                if (!f.isFunction(l[k]) || k.charAt(0) === "_") {
                    h("no such method '" + k + "' for gridrotator instance");
                    return
                }
                l[k].apply(l, j)
                })
            } else {
            this.each(function() {
                var l = f.data(this, "gridrotator");
                if (l) {
                    l._init()
                    } else {
                    f.data(this, "gridrotator", new f.GridRotator(k, this))
                    }
            })
            }
        return this
    }
})(jQuery, window);
$(function() {
    $("#mosaic").gridrotator({
        rows: 6,
        columns: 15,
		// animation type
		// showHide || fadeInOut || slideLeft || 
		// slideRight || slideTop || slideBottom || 
		// rotateLeft || rotateRight || rotateTop || 
		// rotateBottom || scale || rotate3d || 
		// rotateLeftScale || rotateRightScale || 
		// rotateTopScale || rotateBottomScale || random
        animType: "fadeInOut",
        animSpeed: 500,
        interval: 1000,
		// step: number of items that are replaced at the same time
		// random || [some number]
		// note: for performance issues, the number should not be > options.maxStep
        step: 'random',
        w480: {
            rows: 2,
            columns: 7
        },
        w320: {
            rows: 2,
            columns: 5
        }
    })
    });