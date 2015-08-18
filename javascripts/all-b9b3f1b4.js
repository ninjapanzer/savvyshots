/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
;
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */

jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */


(function(e){var t=function(t,n){var r=e.extend({},e.fn.nivoSlider.defaults,n);var i={currentSlide:0,currentImage:"",totalSlides:0,running:false,paused:false,stop:false,controlNavEl:false};var s=e(t);s.data("nivo:vars",i).addClass("nivoSlider");var o=s.children();o.each(function(){var t=e(this);var n="";if(!t.is("img")){if(t.is("a")){t.addClass("nivo-imageLink");n=t}t=t.find("img:first")}var r=r===0?t.attr("width"):t.width(),s=s===0?t.attr("height"):t.height();if(n!==""){n.css("display","none")}t.css("display","none");i.totalSlides++});if(r.randomStart){r.startSlide=Math.floor(Math.random()*i.totalSlides)}if(r.startSlide>0){if(r.startSlide>=i.totalSlides){r.startSlide=i.totalSlides-1}i.currentSlide=r.startSlide}if(e(o[i.currentSlide]).is("img")){i.currentImage=e(o[i.currentSlide])}else{i.currentImage=e(o[i.currentSlide]).find("img:first")}if(e(o[i.currentSlide]).is("a")){e(o[i.currentSlide]).css("display","block")}var u=e("<img/>").addClass("nivo-main-image");u.attr("src",i.currentImage.attr("src")).show();s.append(u);e(window).resize(function(){s.children("img").width(s.width());u.attr("src",i.currentImage.attr("src"));u.stop().height("auto");e(".nivo-slice").remove();e(".nivo-box").remove()});s.append(e('<div class="nivo-caption"></div>'));var a=function(t){var n=e(".nivo-caption",s);if(i.currentImage.attr("title")!=""&&i.currentImage.attr("title")!=undefined){var r=i.currentImage.attr("title");if(r.substr(0,1)=="#")r=e(r).html();if(n.css("display")=="block"){setTimeout(function(){n.html(r)},t.animSpeed)}else{n.html(r);n.stop().fadeIn(t.animSpeed)}}else{n.stop().fadeOut(t.animSpeed)}};a(r);var f=0;if(!r.manualAdvance&&o.length>1){f=setInterval(function(){d(s,o,r,false)},r.pauseTime)}if(r.directionNav){s.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+r.prevText+'</a><a class="nivo-nextNav">'+r.nextText+"</a></div>");e(s).on("click","a.nivo-prevNav",function(){if(i.running){return false}clearInterval(f);f="";i.currentSlide-=2;d(s,o,r,"prev")});e(s).on("click","a.nivo-nextNav",function(){if(i.running){return false}clearInterval(f);f="";d(s,o,r,"next")})}if(r.controlNav){i.controlNavEl=e('<div class="nivo-controlNav"></div>');s.after(i.controlNavEl);for(var l=0;l<o.length;l++){if(r.controlNavThumbs){i.controlNavEl.addClass("nivo-thumbs-enabled");var c=o.eq(l);if(!c.is("img")){c=c.find("img:first")}if(c.attr("data-thumb"))i.controlNavEl.append('<a class="nivo-control" rel="'+l+'"><img src="'+c.attr("data-thumb")+'" alt="" /></a>')}else{i.controlNavEl.append('<a class="nivo-control" rel="'+l+'">'+(l+1)+"</a>")}}e("a:eq("+i.currentSlide+")",i.controlNavEl).addClass("active");e("a",i.controlNavEl).bind("click",function(){if(i.running)return false;if(e(this).hasClass("active"))return false;clearInterval(f);f="";u.attr("src",i.currentImage.attr("src"));i.currentSlide=e(this).attr("rel")-1;d(s,o,r,"control")})}if(r.pauseOnHover){s.hover(function(){i.paused=true;clearInterval(f);f=""},function(){i.paused=false;if(f===""&&!r.manualAdvance){f=setInterval(function(){d(s,o,r,false)},r.pauseTime)}})}s.bind("nivo:animFinished",function(){u.attr("src",i.currentImage.attr("src"));i.running=false;e(o).each(function(){if(e(this).is("a")){e(this).css("display","none")}});if(e(o[i.currentSlide]).is("a")){e(o[i.currentSlide]).css("display","block")}if(f===""&&!i.paused&&!r.manualAdvance){f=setInterval(function(){d(s,o,r,false)},r.pauseTime)}r.afterChange.call(this)});var h=function(t,n,r){if(e(r.currentImage).parent().is("a"))e(r.currentImage).parent().css("display","block");e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility","hidden").show();var i=e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").parent().is("a")?e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").parent().height():e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").height();for(var s=0;s<n.slices;s++){var o=Math.round(t.width()/n.slices);if(s===n.slices-1){t.append(e('<div class="nivo-slice" name="'+s+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block !important; top:0; left:-"+(o+s*o-o)+'px;" /></div>').css({left:o*s+"px",width:t.width()-o*s+"px",height:i+"px",opacity:"0",overflow:"hidden"}))}else{t.append(e('<div class="nivo-slice" name="'+s+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block !important; top:0; left:-"+(o+s*o-o)+'px;" /></div>').css({left:o*s+"px",width:o+"px",height:i+"px",opacity:"0",overflow:"hidden"}))}}e(".nivo-slice",t).height(i);u.stop().animate({height:e(r.currentImage).height()},n.animSpeed)};var p=function(t,n,r){if(e(r.currentImage).parent().is("a"))e(r.currentImage).parent().css("display","block");e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility","hidden").show();var i=Math.round(t.width()/n.boxCols),s=Math.round(e('img[src="'+r.currentImage.attr("src")+'"]',t).not(".nivo-main-image,.nivo-control img").height()/n.boxRows);for(var o=0;o<n.boxRows;o++){for(var a=0;a<n.boxCols;a++){if(a===n.boxCols-1){t.append(e('<div class="nivo-box" name="'+a+'" rel="'+o+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block; top:-"+s*o+"px; left:-"+i*a+'px;" /></div>').css({opacity:0,left:i*a+"px",top:s*o+"px",width:t.width()-i*a+"px"}));e('.nivo-box[name="'+a+'"]',t).height(e('.nivo-box[name="'+a+'"] img',t).height()+"px")}else{t.append(e('<div class="nivo-box" name="'+a+'" rel="'+o+'"><img src="'+r.currentImage.attr("src")+'" style="position:absolute; width:'+t.width()+"px; height:auto; display:block; top:-"+s*o+"px; left:-"+i*a+'px;" /></div>').css({opacity:0,left:i*a+"px",top:s*o+"px",width:i+"px"}));e('.nivo-box[name="'+a+'"]',t).height(e('.nivo-box[name="'+a+'"] img',t).height()+"px")}}}u.stop().animate({height:e(r.currentImage).height()},n.animSpeed)};var d=function(t,n,r,i){var s=t.data("nivo:vars");if(s&&s.currentSlide===s.totalSlides-1){r.lastSlide.call(this)}if((!s||s.stop)&&!i){return false}r.beforeChange.call(this);if(!i){u.attr("src",s.currentImage.attr("src"))}else{if(i==="prev"){u.attr("src",s.currentImage.attr("src"))}if(i==="next"){u.attr("src",s.currentImage.attr("src"))}}s.currentSlide++;if(s.currentSlide===s.totalSlides){s.currentSlide=0;r.slideshowEnd.call(this)}if(s.currentSlide<0){s.currentSlide=s.totalSlides-1}if(e(n[s.currentSlide]).is("img")){s.currentImage=e(n[s.currentSlide])}else{s.currentImage=e(n[s.currentSlide]).find("img:first")}if(r.controlNav){e("a",s.controlNavEl).removeClass("active");e("a:eq("+s.currentSlide+")",s.controlNavEl).addClass("active")}a(r);e(".nivo-slice",t).remove();e(".nivo-box",t).remove();var o=r.effect,f="";if(r.effect==="random"){f=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse");o=f[Math.floor(Math.random()*(f.length+1))];if(o===undefined){o="fade"}}if(r.effect.indexOf(",")!==-1){f=r.effect.split(",");o=f[Math.floor(Math.random()*f.length)];if(o===undefined){o="fade"}}if(s.currentImage.attr("data-transition")){o=s.currentImage.attr("data-transition")}s.running=true;var l=0,c=0,d="",m="",g="",y="";if(o==="sliceDown"||o==="sliceDownRight"||o==="sliceDownLeft"){h(t,r,s);l=0;c=0;d=e(".nivo-slice",t);if(o==="sliceDownLeft"){d=e(".nivo-slice",t)._reverse()}d.each(function(){var n=e(this);n.css({top:"0px"});if(c===r.slices-1){setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed)},100+l)}l+=50;c++})}else if(o==="sliceUp"||o==="sliceUpRight"||o==="sliceUpLeft"){h(t,r,s);l=0;c=0;d=e(".nivo-slice",t);if(o==="sliceUpLeft"){d=e(".nivo-slice",t)._reverse()}d.each(function(){var n=e(this);n.css({bottom:"0px"});if(c===r.slices-1){setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed)},100+l)}l+=50;c++})}else if(o==="sliceUpDown"||o==="sliceUpDownRight"||o==="sliceUpDownLeft"){h(t,r,s);l=0;c=0;var b=0;d=e(".nivo-slice",t);if(o==="sliceUpDownLeft"){d=e(".nivo-slice",t)._reverse()}d.each(function(){var n=e(this);if(c===0){n.css("top","0px");c++}else{n.css("bottom","0px");c=0}if(b===r.slices-1){setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1.0"},r.animSpeed)},100+l)}l+=50;b++})}else if(o==="fold"){h(t,r,s);l=0;c=0;e(".nivo-slice",t).each(function(){var n=e(this);var i=n.width();n.css({top:"0px",width:"0px"});if(c===r.slices-1){setTimeout(function(){n.animate({width:i,opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({width:i,opacity:"1.0"},r.animSpeed)},100+l)}l+=50;c++})}else if(o==="fade"){h(t,r,s);m=e(".nivo-slice:first",t);m.css({width:t.width()+"px"});m.animate({opacity:"1.0"},r.animSpeed*2,"",function(){t.trigger("nivo:animFinished")})}else if(o==="slideInRight"){h(t,r,s);m=e(".nivo-slice:first",t);m.css({width:"0px",opacity:"1"});m.animate({width:t.width()+"px"},r.animSpeed*2,"",function(){t.trigger("nivo:animFinished")})}else if(o==="slideInLeft"){h(t,r,s);m=e(".nivo-slice:first",t);m.css({width:"0px",opacity:"1",left:"",right:"0px"});m.animate({width:t.width()+"px"},r.animSpeed*2,"",function(){m.css({left:"0px",right:""});t.trigger("nivo:animFinished")})}else if(o==="boxRandom"){p(t,r,s);g=r.boxCols*r.boxRows;c=0;l=0;y=v(e(".nivo-box",t));y.each(function(){var n=e(this);if(c===g-1){setTimeout(function(){n.animate({opacity:"1"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+l)}else{setTimeout(function(){n.animate({opacity:"1"},r.animSpeed)},100+l)}l+=20;c++})}else if(o==="boxRain"||o==="boxRainReverse"||o==="boxRainGrow"||o==="boxRainGrowReverse"){p(t,r,s);g=r.boxCols*r.boxRows;c=0;l=0;var w=0;var E=0;var S=[];S[w]=[];y=e(".nivo-box",t);if(o==="boxRainReverse"||o==="boxRainGrowReverse"){y=e(".nivo-box",t)._reverse()}y.each(function(){S[w][E]=e(this);E++;if(E===r.boxCols){w++;E=0;S[w]=[]}});for(var x=0;x<r.boxCols*2;x++){var T=x;for(var N=0;N<r.boxRows;N++){if(T>=0&&T<r.boxCols){(function(n,i,s,u,a){var f=e(S[n][i]);var l=f.width();var c=f.height();if(o==="boxRainGrow"||o==="boxRainGrowReverse"){f.width(0).height(0)}if(u===a-1){setTimeout(function(){f.animate({opacity:"1",width:l,height:c},r.animSpeed/1.3,"",function(){t.trigger("nivo:animFinished")})},100+s)}else{setTimeout(function(){f.animate({opacity:"1",width:l,height:c},r.animSpeed/1.3)},100+s)}})(N,T,l,c,g);c++}T--}l+=100}}};var v=function(e){for(var t,n,r=e.length;r;t=parseInt(Math.random()*r,10),n=e[--r],e[r]=e[t],e[t]=n);return e};var m=function(e){if(this.console&&typeof console.log!=="undefined"){console.log(e)}};this.stop=function(){if(!e(t).data("nivo:vars").stop){e(t).data("nivo:vars").stop=true;m("Stop Slider")}};this.start=function(){if(e(t).data("nivo:vars").stop){e(t).data("nivo:vars").stop=false;m("Start Slider")}};r.afterLoad.call(this);return this};e.fn.nivoSlider=function(n){return this.each(function(r,i){var s=e(this);if(s.data("nivoslider")){return s.data("nivoslider")}var o=new t(this,n);s.data("nivoslider",o)})};e.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3e3,startSlide:0,directionNav:true,controlNav:true,controlNavThumbs:false,pauseOnHover:true,manualAdvance:false,prevText:"Prev",nextText:"Next",randomStart:false,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};e.fn._reverse=[].reverse})(jQuery)
;
/**
 * Galleria v 1.4.2 2014-08-07
 * http://galleria.io
 *
 * Licensed under the MIT license
 * https://raw.github.com/aino/galleria/master/LICENSE
 *
 */


(function( $, window, Galleria, undef ) {

/*global jQuery, navigator, Image, module, define */

// some references
var doc    = window.document,
    $doc   = $( doc ),
    $win   = $( window ),

// native prototypes
    protoArray = Array.prototype,

// internal constants
    VERSION = 1.41,
    DEBUG = true,
    TIMEOUT = 30000,
    DUMMY = false,
    NAV = navigator.userAgent.toLowerCase(),
    HASH = window.location.hash.replace(/#\//, ''),
    PROT = window.location.protocol,
    M = Math,
    F = function(){},
    FALSE = function() { return false; },
    IE = (function() {

        var v = 3,
            div = doc.createElement( 'div' ),
            all = div.getElementsByTagName( 'i' );

        do {
            div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->';
        } while ( all[0] );

        return v > 4 ? v : doc.documentMode || undef;

    }() ),
    DOM = function() {
        return {
            html:  doc.documentElement,
            body:  doc.body,
            head:  doc.getElementsByTagName('head')[0],
            title: doc.title
        };
    },
    IFRAME = window.parent !== window.self,

    // list of Galleria events
    _eventlist = 'data ready thumbnail loadstart loadfinish image play pause progress ' +
                 'fullscreen_enter fullscreen_exit idle_enter idle_exit rescale ' +
                 'lightbox_open lightbox_close lightbox_image',

    _events = (function() {

        var evs = [];

        $.each( _eventlist.split(' '), function( i, ev ) {
            evs.push( ev );

            // legacy events
            if ( /_/.test( ev ) ) {
                evs.push( ev.replace( /_/g, '' ) );
            }
        });

        return evs;

    }()),

    // legacy options
    // allows the old my_setting syntax and converts it to camel case

    _legacyOptions = function( options ) {

        var n;

        if ( typeof options !== 'object' ) {

            // return whatever it was...
            return options;
        }

        $.each( options, function( key, value ) {
            if ( /^[a-z]+_/.test( key ) ) {
                n = '';
                $.each( key.split('_'), function( i, k ) {
                    n += i > 0 ? k.substr( 0, 1 ).toUpperCase() + k.substr( 1 ) : k;
                });
                options[ n ] = value;
                delete options[ key ];
            }
        });

        return options;
    },

    _patchEvent = function( type ) {

        // allow 'image' instead of Galleria.IMAGE
        if ( $.inArray( type, _events ) > -1 ) {
            return Galleria[ type.toUpperCase() ];
        }

        return type;
    },

    // video providers
    _video = {
        youtube: {
            reg: /https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i,
            embed: function() {
                return 'http://www.youtube.com/embed/' + this.id;
            },
            getUrl: function() {
                return PROT + '//gdata.youtube.com/feeds/api/videos/' + this.id + '?v=2&alt=json-in-script&callback=?';
            },
            get_thumb: function(data) {
                return data.entry.media$group.media$thumbnail[2].url;
            },
            get_image: function(data) {
                if ( data.entry.yt$hd ) {
                    return PROT + '//img.youtube.com/vi/'+this.id+'/maxresdefault.jpg';
                }
                return data.entry.media$group.media$thumbnail[3].url;
            }
        },
        vimeo: {
            reg: /https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i,
            embed: function() {
                return 'http://player.vimeo.com/video/' + this.id;
            },
            getUrl: function() {
                return PROT + '//vimeo.com/api/v2/video/' + this.id + '.json?callback=?';
            },
            get_thumb: function( data ) {
                return data[0].thumbnail_medium;
            },
            get_image: function( data ) {
                return data[0].thumbnail_large;
            }
        },
        dailymotion: {
            reg: /https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,
            embed: function() {
                return PROT + '//www.dailymotion.com/embed/video/' + this.id;
            },
            getUrl: function() {
                return 'https://api.dailymotion.com/video/' + this.id + '?fields=thumbnail_240_url,thumbnail_720_url&callback=?';
            },
            get_thumb: function( data ) {
                return data.thumbnail_240_url;
            },
            get_image: function( data ) {
                return data.thumbnail_720_url;
            }
        },
        _inst: []
    },
    Video = function( type, id ) {

        for( var i=0; i<_video._inst.length; i++ ) {
            if ( _video._inst[i].id === id && _video._inst[i].type == type ) {
                return _video._inst[i];
            }
        }

        this.type = type;
        this.id = id;
        this.readys = [];

        _video._inst.push(this);

        var self = this;

        $.extend( this, _video[type] );

        $.getJSON( this.getUrl(), function(data) {
            self.data = data;
            $.each( self.readys, function( i, fn ) {
                fn( self.data );
            });
            self.readys = [];
        });

        this.getMedia = function( type, callback, fail ) {
            fail = fail || F;
            var self = this;
            var success = function( data ) {
                callback( self['get_'+type]( data ) );
            };
            try {
                if ( self.data ) {
                    success( self.data );
                } else {
                    self.readys.push( success );
                }
            } catch(e) {
                fail();
            }
        };
    },

    // utility for testing the video URL and getting the video ID
    _videoTest = function( url ) {
        var match;
        for ( var v in _video ) {
            match = url && _video[v].reg && url.match( _video[v].reg );
            if( match && match.length ) {
                return {
                    id: match[2],
                    provider: v
                };
            }
        }
        return false;
    },

    // native fullscreen handler
    _nativeFullscreen = {

        support: (function() {
            var html = DOM().html;
            return !IFRAME && ( html.requestFullscreen || html.msRequestFullscreen || html.mozRequestFullScreen || html.webkitRequestFullScreen );
        }()),

        callback: F,

        enter: function( instance, callback, elem ) {

            this.instance = instance;

            this.callback = callback || F;

            elem = elem || DOM().html;
            if ( elem.requestFullscreen ) {
                elem.requestFullscreen();
            }
            else if ( elem.msRequestFullscreen ) {
                elem.msRequestFullscreen();
            }
            else if ( elem.mozRequestFullScreen ) {
                elem.mozRequestFullScreen();
            }
            else if ( elem.webkitRequestFullScreen ) {
                elem.webkitRequestFullScreen();
            }
        },

        exit: function( callback ) {

            this.callback = callback || F;

            if ( doc.exitFullscreen ) {
                doc.exitFullscreen();
            }
            else if ( doc.msExitFullscreen ) {
                doc.msExitFullscreen();
            }
            else if ( doc.mozCancelFullScreen ) {
                doc.mozCancelFullScreen();
            }
            else if ( doc.webkitCancelFullScreen ) {
                doc.webkitCancelFullScreen();
            }
        },

        instance: null,

        listen: function() {

            if ( !this.support ) {
                return;
            }

            var handler = function() {

                if ( !_nativeFullscreen.instance ) {
                    return;
                }
                var fs = _nativeFullscreen.instance._fullscreen;

                if ( doc.fullscreen || doc.mozFullScreen || doc.webkitIsFullScreen || ( doc.msFullscreenElement && doc.msFullscreenElement !== null ) ) {
                    fs._enter( _nativeFullscreen.callback );
                } else {
                    fs._exit( _nativeFullscreen.callback );
                }
            };
            doc.addEventListener( 'fullscreenchange', handler, false );
            doc.addEventListener( 'MSFullscreenChange', handler, false );
            doc.addEventListener( 'mozfullscreenchange', handler, false );
            doc.addEventListener( 'webkitfullscreenchange', handler, false );
        }
    },

    // the internal gallery holder
    _galleries = [],

    // the internal instance holder
    _instances = [],

    // flag for errors
    _hasError = false,

    // canvas holder
    _canvas = false,

    // instance pool, holds the galleries until themeLoad is triggered
    _pool = [],

    // Run galleries from theme trigger
    _loadedThemes = [],
    _themeLoad = function( theme ) {

        _loadedThemes.push(theme);

        // run the instances we have in the pool
        // and apply the last theme if not specified
        $.each( _pool, function( i, instance ) {
            if ( instance._options.theme == theme.name || (!instance._initialized && !instance._options.theme) ) {
                instance.theme = theme;
                instance._init.call( instance );
            }
        });
    },

    // the Utils singleton
    Utils = (function() {

        return {

            // legacy support for clearTimer
            clearTimer: function( id ) {
                $.each( Galleria.get(), function() {
                    this.clearTimer( id );
                });
            },

            // legacy support for addTimer
            addTimer: function( id ) {
                $.each( Galleria.get(), function() {
                    this.addTimer( id );
                });
            },

            array : function( obj ) {
                return protoArray.slice.call(obj, 0);
            },

            create : function( className, nodeName ) {
                nodeName = nodeName || 'div';
                var elem = doc.createElement( nodeName );
                elem.className = className;
                return elem;
            },

            removeFromArray : function( arr, elem ) {
                $.each(arr, function(i, el) {
                    if ( el == elem ) {
                        arr.splice(i, 1);
                        return false;
                    }
                });
                return arr;
            },

            getScriptPath : function( src ) {

                // the currently executing script is always the last
                src = src || $('script:last').attr('src');
                var slices = src.split('/');

                if (slices.length == 1) {
                    return '';
                }

                slices.pop();

                return slices.join('/') + '/';
            },

            // CSS3 transitions, added in 1.2.4
            animate : (function() {

                // detect transition
                var transition = (function( style ) {
                    var props = 'transition WebkitTransition MozTransition OTransition'.split(' '),
                        i;

                    // disable css3 animations in opera until stable
                    if ( window.opera ) {
                        return false;
                    }

                    for ( i = 0; props[i]; i++ ) {
                        if ( typeof style[ props[ i ] ] !== 'undefined' ) {
                            return props[ i ];
                        }
                    }
                    return false;
                }(( doc.body || doc.documentElement).style ));

                // map transitionend event
                var endEvent = {
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    WebkitTransition: 'webkitTransitionEnd',
                    transition: 'transitionend'
                }[ transition ];

                // map bezier easing conversions
                var easings = {
                    _default: [0.25, 0.1, 0.25, 1],
                    galleria: [0.645, 0.045, 0.355, 1],
                    galleriaIn: [0.55, 0.085, 0.68, 0.53],
                    galleriaOut: [0.25, 0.46, 0.45, 0.94],
                    ease: [0.25, 0, 0.25, 1],
                    linear: [0.25, 0.25, 0.75, 0.75],
                    'ease-in': [0.42, 0, 1, 1],
                    'ease-out': [0, 0, 0.58, 1],
                    'ease-in-out': [0.42, 0, 0.58, 1]
                };

                // function for setting transition css for all browsers
                var setStyle = function( elem, value, suffix ) {
                    var css = {};
                    suffix = suffix || 'transition';
                    $.each( 'webkit moz ms o'.split(' '), function() {
                        css[ '-' + this + '-' + suffix ] = value;
                    });
                    elem.css( css );
                };

                // clear styles
                var clearStyle = function( elem ) {
                    setStyle( elem, 'none', 'transition' );
                    if ( Galleria.WEBKIT && Galleria.TOUCH ) {
                        setStyle( elem, 'translate3d(0,0,0)', 'transform' );
                        if ( elem.data('revert') ) {
                            elem.css( elem.data('revert') );
                            elem.data('revert', null);
                        }
                    }
                };

                // various variables
                var change, strings, easing, syntax, revert, form, css;

                // the actual animation method
                return function( elem, to, options ) {

                    // extend defaults
                    options = $.extend({
                        duration: 400,
                        complete: F,
                        stop: false
                    }, options);

                    // cache jQuery instance
                    elem = $( elem );

                    if ( !options.duration ) {
                        elem.css( to );
                        options.complete.call( elem[0] );
                        return;
                    }

                    // fallback to jQuery's animate if transition is not supported
                    if ( !transition ) {
                        elem.animate(to, options);
                        return;
                    }

                    // stop
                    if ( options.stop ) {
                        // clear the animation
                        elem.off( endEvent );
                        clearStyle( elem );
                    }

                    // see if there is a change
                    change = false;
                    $.each( to, function( key, val ) {
                        css = elem.css( key );
                        if ( Utils.parseValue( css ) != Utils.parseValue( val ) ) {
                            change = true;
                        }
                        // also add computed styles for FF
                        elem.css( key, css );
                    });
                    if ( !change ) {
                        window.setTimeout( function() {
                            options.complete.call( elem[0] );
                        }, options.duration );
                        return;
                    }

                    // the css strings to be applied
                    strings = [];

                    // the easing bezier
                    easing = options.easing in easings ? easings[ options.easing ] : easings._default;

                    // the syntax
                    syntax = ' ' + options.duration + 'ms' + ' cubic-bezier('  + easing.join(',') + ')';

                    // add a tiny timeout so that the browsers catches any css changes before animating
                    window.setTimeout( (function(elem, endEvent, to, syntax) {
                        return function() {

                            // attach the end event
                            elem.one(endEvent, (function( elem ) {
                                return function() {

                                    // clear the animation
                                    clearStyle(elem);

                                    // run the complete method
                                    options.complete.call(elem[0]);
                                };
                            }( elem )));

                            // do the webkit translate3d for better performance on iOS
                            if( Galleria.WEBKIT && Galleria.TOUCH ) {

                                revert = {};
                                form = [0,0,0];

                                $.each( ['left', 'top'], function(i, m) {
                                    if ( m in to ) {
                                        form[ i ] = ( Utils.parseValue( to[ m ] ) - Utils.parseValue(elem.css( m )) ) + 'px';
                                        revert[ m ] = to[ m ];
                                        delete to[ m ];
                                    }
                                });

                                if ( form[0] || form[1]) {

                                    elem.data('revert', revert);

                                    strings.push('-webkit-transform' + syntax);

                                    // 3d animate
                                    setStyle( elem, 'translate3d(' + form.join(',') + ')', 'transform');
                                }
                            }

                            // push the animation props
                            $.each(to, function( p, val ) {
                                strings.push(p + syntax);
                            });

                            // set the animation styles
                            setStyle( elem, strings.join(',') );

                            // animate
                            elem.css( to );

                        };
                    }(elem, endEvent, to, syntax)), 2);
                };
            }()),

            removeAlpha : function( elem ) {
                if ( elem instanceof jQuery ) {
                    elem = elem[0];
                }
                if ( IE < 9 && elem ) {

                    var style = elem.style,
                        currentStyle = elem.currentStyle,
                        filter = currentStyle && currentStyle.filter || style.filter || "";

                    if ( /alpha/.test( filter ) ) {
                        style.filter = filter.replace( /alpha\([^)]*\)/i, '' );
                    }
                }
            },

            forceStyles : function( elem, styles ) {
                elem = $(elem);
                if ( elem.attr( 'style' ) ) {
                    elem.data( 'styles', elem.attr( 'style' ) ).removeAttr( 'style' );
                }
                elem.css( styles );
            },

            revertStyles : function() {
                $.each( Utils.array( arguments ), function( i, elem ) {

                    elem = $( elem );
                    elem.removeAttr( 'style' );

                    elem.attr('style',''); // "fixes" webkit bug

                    if ( elem.data( 'styles' ) ) {
                        elem.attr( 'style', elem.data('styles') ).data( 'styles', null );
                    }
                });
            },

            moveOut : function( elem ) {
                Utils.forceStyles( elem, {
                    position: 'absolute',
                    left: -10000
                });
            },

            moveIn : function() {
                Utils.revertStyles.apply( Utils, Utils.array( arguments ) );
            },

            hide : function( elem, speed, callback ) {

                callback = callback || F;

                var $elem = $(elem);
                elem = $elem[0];

                // save the value if not exist
                if (! $elem.data('opacity') ) {
                    $elem.data('opacity', $elem.css('opacity') );
                }

                // always hide
                var style = { opacity: 0 };

                if (speed) {

                    var complete = IE < 9 && elem ? function() {
                        Utils.removeAlpha( elem );
                        elem.style.visibility = 'hidden';
                        callback.call( elem );
                    } : callback;

                    Utils.animate( elem, style, {
                        duration: speed,
                        complete: complete,
                        stop: true
                    });
                } else {
                    if ( IE < 9 && elem ) {
                        Utils.removeAlpha( elem );
                        elem.style.visibility = 'hidden';
                    } else {
                        $elem.css( style );
                    }
                }
            },

            show : function( elem, speed, callback ) {

                callback = callback || F;

                var $elem = $(elem);
                elem = $elem[0];

                // bring back saved opacity
                var saved = parseFloat( $elem.data('opacity') ) || 1,
                    style = { opacity: saved };

                // animate or toggle
                if (speed) {

                    if ( IE < 9 ) {
                        $elem.css('opacity', 0);
                        elem.style.visibility = 'visible';
                    }

                    var complete = IE < 9 && elem ? function() {
                        if ( style.opacity == 1 ) {
                            Utils.removeAlpha( elem );
                        }
                        callback.call( elem );
                    } : callback;

                    Utils.animate( elem, style, {
                        duration: speed,
                        complete: complete,
                        stop: true
                    });
                } else {
                    if ( IE < 9 && style.opacity == 1 && elem ) {
                        Utils.removeAlpha( elem );
                        elem.style.visibility = 'visible';
                    } else {
                        $elem.css( style );
                    }
                }
            },

            wait : function(options) {

                Galleria._waiters = Galleria._waiters || [];

                options = $.extend({
                    until : FALSE,
                    success : F,
                    error : function() { Galleria.raise('Could not complete wait function.'); },
                    timeout: 3000
                }, options);

                var start = Utils.timestamp(),
                    elapsed,
                    now,
                    tid,
                    fn = function() {
                        now = Utils.timestamp();
                        elapsed = now - start;
                        Utils.removeFromArray( Galleria._waiters, tid );
                        if ( options.until( elapsed ) ) {
                            options.success();
                            return false;
                        }
                        if (typeof options.timeout == 'number' && now >= start + options.timeout) {
                            options.error();
                            return false;
                        }
                        Galleria._waiters.push( tid = window.setTimeout(fn, 10) );
                    };
                Galleria._waiters.push( tid = window.setTimeout(fn, 10) );
            },

            toggleQuality : function( img, force ) {

                if ( ( IE !== 7 && IE !== 8 ) || !img || img.nodeName.toUpperCase() != 'IMG' ) {
                    return;
                }

                if ( typeof force === 'undefined' ) {
                    force = img.style.msInterpolationMode === 'nearest-neighbor';
                }

                img.style.msInterpolationMode = force ? 'bicubic' : 'nearest-neighbor';
            },

            insertStyleTag : function( styles, id ) {

                if ( id && $( '#'+id ).length ) {
                    return;
                }

                var style = doc.createElement( 'style' );
                if ( id ) {
                    style.id = id;
                }

                DOM().head.appendChild( style );

                if ( style.styleSheet ) { // IE
                    style.styleSheet.cssText = styles;
                } else {
                    var cssText = doc.createTextNode( styles );
                    style.appendChild( cssText );
                }
            },

            // a loadscript method that works for local scripts
            loadScript: function( url, callback ) {

                var done = false,
                    script = $('<scr'+'ipt>').attr({
                        src: url,
                        async: true
                    }).get(0);

               // Attach handlers for all browsers
               script.onload = script.onreadystatechange = function() {
                   if ( !done && (!this.readyState ||
                       this.readyState === 'loaded' || this.readyState === 'complete') ) {

                       done = true;

                       // Handle memory leak in IE
                       script.onload = script.onreadystatechange = null;

                       if (typeof callback === 'function') {
                           callback.call( this, this );
                       }
                   }
               };

               DOM().head.appendChild( script );
            },

            // parse anything into a number
            parseValue: function( val ) {
                if (typeof val === 'number') {
                    return val;
                } else if (typeof val === 'string') {
                    var arr = val.match(/\-?\d|\./g);
                    return arr && arr.constructor === Array ? arr.join('')*1 : 0;
                } else {
                    return 0;
                }
            },

            // timestamp abstraction
            timestamp: function() {
                return new Date().getTime();
            },

            loadCSS : function( href, id, callback ) {

                var link,
                    length;

                // look for manual css
                $('link[rel=stylesheet]').each(function() {
                    if ( new RegExp( href ).test( this.href ) ) {
                        link = this;
                        return false;
                    }
                });

                if ( typeof id === 'function' ) {
                    callback = id;
                    id = undef;
                }

                callback = callback || F; // dirty

                // if already present, return
                if ( link ) {
                    callback.call( link, link );
                    return link;
                }

                // save the length of stylesheets to check against
                length = doc.styleSheets.length;

                // check for existing id
                if( $( '#' + id ).length ) {

                    $( '#' + id ).attr( 'href', href );
                    length--;

                } else {
                    link = $( '<link>' ).attr({
                        rel: 'stylesheet',
                        href: href,
                        id: id
                    }).get(0);

                    var styles = $('link[rel="stylesheet"], style');
                    if ( styles.length ) {
                        styles.get(0).parentNode.insertBefore( link, styles[0] );
                    } else {
                        DOM().head.appendChild( link );
                    }

                    if ( IE && length >= 31 ) {
                        Galleria.raise( 'You have reached the browser stylesheet limit (31)', true );
                        return;
                    }
                }

                if ( typeof callback === 'function' ) {

                    // First check for dummy element (new in 1.2.8)
                    var $loader = $('<s>').attr( 'id', 'galleria-loader' ).hide().appendTo( DOM().body );

                    Utils.wait({
                        until: function() {
                            return $loader.height() == 1;
                        },
                        success: function() {
                            $loader.remove();
                            callback.call( link, link );
                        },
                        error: function() {
                            $loader.remove();

                            // If failed, tell the dev to download the latest theme
                            Galleria.raise( 'Theme CSS could not load after 20 sec. ' + ( Galleria.QUIRK ?
                                'Your browser is in Quirks Mode, please add a correct doctype.' :
                                'Please download the latest theme at http://galleria.io/customer/.' ), true );
                        },
                        timeout: 5000
                    });
                }
                return link;
            }
        };
    }()),

    // play icon
    _playIcon = function( container ) {

        var css = '.galleria-videoicon{width:60px;height:60px;position:absolute;top:50%;left:50%;z-index:1;' +
                  'margin:-30px 0 0 -30px;cursor:pointer;background:#000;background:rgba(0,0,0,.8);border-radius:3px;-webkit-transition:all 150ms}' +
                  '.galleria-videoicon i{width:0px;height:0px;border-style:solid;border-width:10px 0 10px 16px;display:block;' +
                  'border-color:transparent transparent transparent #ffffff;margin:20px 0 0 22px}.galleria-image:hover .galleria-videoicon{background:#000}';

        Utils.insertStyleTag( css, 'galleria-videoicon' );

        return $( Utils.create( 'galleria-videoicon' ) ).html( '<i></i>' ).appendTo( container )
            .click( function() { $( this ).siblings( 'img' ).mouseup(); });
    },

    // the transitions holder
    _transitions = (function() {

        var _slide = function(params, complete, fade, door) {

            var easing = this.getOptions('easing'),
                distance = this.getStageWidth(),
                from = { left: distance * ( params.rewind ? -1 : 1 ) },
                to = { left: 0 };

            if ( fade ) {
                from.opacity = 0;
                to.opacity = 1;
            } else {
                from.opacity = 1;
            }

            $(params.next).css(from);

            Utils.animate(params.next, to, {
                duration: params.speed,
                complete: (function( elems ) {
                    return function() {
                        complete();
                        elems.css({
                            left: 0
                        });
                    };
                }( $( params.next ).add( params.prev ) )),
                queue: false,
                easing: easing
            });

            if (door) {
                params.rewind = !params.rewind;
            }

            if (params.prev) {

                from = { left: 0 };
                to = { left: distance * ( params.rewind ? 1 : -1 ) };

                if ( fade ) {
                    from.opacity = 1;
                    to.opacity = 0;
                }

                $(params.prev).css(from);
                Utils.animate(params.prev, to, {
                    duration: params.speed,
                    queue: false,
                    easing: easing,
                    complete: function() {
                        $(this).css('opacity', 0);
                    }
                });
            }
        };

        return {

            active: false,

            init: function( effect, params, complete ) {
                if ( _transitions.effects.hasOwnProperty( effect ) ) {
                    _transitions.effects[ effect ].call( this, params, complete );
                }
            },

            effects: {

                fade: function(params, complete) {
                    $(params.next).css({
                        opacity: 0,
                        left: 0
                    });
                    Utils.animate(params.next, {
                        opacity: 1
                    },{
                        duration: params.speed,
                        complete: complete
                    });
                    if (params.prev) {
                        $(params.prev).css('opacity',1).show();
                        Utils.animate(params.prev, {
                            opacity: 0
                        },{
                            duration: params.speed
                        });
                    }
                },

                flash: function(params, complete) {
                    $(params.next).css({
                        opacity: 0,
                        left: 0
                    });
                    if (params.prev) {
                        Utils.animate( params.prev, {
                            opacity: 0
                        },{
                            duration: params.speed/2,
                            complete: function() {
                                Utils.animate( params.next, {
                                    opacity:1
                                },{
                                    duration: params.speed,
                                    complete: complete
                                });
                            }
                        });
                    } else {
                        Utils.animate( params.next, {
                            opacity: 1
                        },{
                            duration: params.speed,
                            complete: complete
                        });
                    }
                },

                pulse: function(params, complete) {
                    if (params.prev) {
                        $(params.prev).hide();
                    }
                    $(params.next).css({
                        opacity: 0,
                        left: 0
                    }).show();
                    Utils.animate(params.next, {
                        opacity:1
                    },{
                        duration: params.speed,
                        complete: complete
                    });
                },

                slide: function(params, complete) {
                    _slide.apply( this, Utils.array( arguments ) );
                },

                fadeslide: function(params, complete) {
                    _slide.apply( this, Utils.array( arguments ).concat( [true] ) );
                },

                doorslide: function(params, complete) {
                    _slide.apply( this, Utils.array( arguments ).concat( [false, true] ) );
                }
            }
        };
    }());

// listen to fullscreen
_nativeFullscreen.listen();

// create special click:fast event for fast touch interaction
$.event.special['click:fast'] = {
    propagate: true,
    add: function(handleObj) {

        var getCoords = function(e) {
            if ( e.touches && e.touches.length ) {
                var touch = e.touches[0];
                return {
                    x: touch.pageX,
                    y: touch.pageY
                };
            }
        };

        var def = {
            touched: false,
            touchdown: false,
            coords: { x:0, y:0 },
            evObj: {}
        };

        $(this).data({
            clickstate: def,
            timer: 0
        }).on('touchstart.fast', function(e) {
            window.clearTimeout($(this).data('timer'));
            $(this).data('clickstate', {
                touched: true, 
                touchdown: true,
                coords: getCoords(e.originalEvent),
                evObj: e
            });
        }).on('touchmove.fast', function(e) {
            var coords = getCoords(e.originalEvent),
                state = $(this).data('clickstate'),
                distance = Math.max( 
                    Math.abs(state.coords.x - coords.x), 
                    Math.abs(state.coords.y - coords.y) 
                );
            if ( distance > 6 ) {
                $(this).data('clickstate', $.extend(state, {
                    touchdown: false
                }));
            }
        }).on('touchend.fast', function(e) {
            var $this = $(this),
                state = $this.data('clickstate');
            if(state.touchdown) {
              handleObj.handler.call(this, e);
            }
            $this.data('timer', window.setTimeout(function() {
                $this.data('clickstate', def);
            }, 400));
        }).on('click.fast', function(e) {
            var state = $(this).data('clickstate');
            if ( state.touched ) {
                return false;
            }
            $(this).data('clickstate', def);
            handleObj.handler.call(this, e);
        });
    },
    remove: function() {
        $(this).off('touchstart.fast touchmove.fast touchend.fast click.fast');
    }
};

// trigger resize on orientationchange (IOS7)
$win.on( 'orientationchange', function() {
    $(this).resize();
});

/**
    The main Galleria class

    @class
    @constructor

    @example var gallery = new Galleria();

    @author http://aino.se

    @requires jQuery

*/

Galleria = function() {

    var self = this;

    // internal options
    this._options = {};

    // flag for controlling play/pause
    this._playing = false;

    // internal interval for slideshow
    this._playtime = 5000;

    // internal variable for the currently active image
    this._active = null;

    // the internal queue, arrayified
    this._queue = { length: 0 };

    // the internal data array
    this._data = [];

    // the internal dom collection
    this._dom = {};

    // the internal thumbnails array
    this._thumbnails = [];

    // the internal layers array
    this._layers = [];

    // internal init flag
    this._initialized = false;

    // internal firstrun flag
    this._firstrun = false;

    // global stagewidth/height
    this._stageWidth = 0;
    this._stageHeight = 0;

    // target holder
    this._target = undef;

    // bind hashes
    this._binds = [];

    // instance id
    this._id = parseInt(M.random()*10000, 10);

    // add some elements
    var divs =  'container stage images image-nav image-nav-left image-nav-right ' +
                'info info-text info-title info-description ' +
                'thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right ' +
                'loader counter tooltip',
        spans = 'current total';

    $.each( divs.split(' '), function( i, elemId ) {
        self._dom[ elemId ] = Utils.create( 'galleria-' + elemId );
    });

    $.each( spans.split(' '), function( i, elemId ) {
        self._dom[ elemId ] = Utils.create( 'galleria-' + elemId, 'span' );
    });

    // the internal keyboard object
    // keeps reference of the keybinds and provides helper methods for binding keys
    var keyboard = this._keyboard = {

        keys : {
            'UP': 38,
            'DOWN': 40,
            'LEFT': 37,
            'RIGHT': 39,
            'RETURN': 13,
            'ESCAPE': 27,
            'BACKSPACE': 8,
            'SPACE': 32
        },

        map : {},

        bound: false,

        press: function(e) {
            var key = e.keyCode || e.which;
            if ( key in keyboard.map && typeof keyboard.map[key] === 'function' ) {
                keyboard.map[key].call(self, e);
            }
        },

        attach: function(map) {

            var key, up;

            for( key in map ) {
                if ( map.hasOwnProperty( key ) ) {
                    up = key.toUpperCase();
                    if ( up in keyboard.keys ) {
                        keyboard.map[ keyboard.keys[up] ] = map[key];
                    } else {
                        keyboard.map[ up ] = map[key];
                    }
                }
            }
            if ( !keyboard.bound ) {
                keyboard.bound = true;
                $doc.on('keydown', keyboard.press);
            }
        },

        detach: function() {
            keyboard.bound = false;
            keyboard.map = {};
            $doc.off('keydown', keyboard.press);
        }
    };

    // internal controls for keeping track of active / inactive images
    var controls = this._controls = {

        0: undef,

        1: undef,

        active : 0,

        swap : function() {
            controls.active = controls.active ? 0 : 1;
        },

        getActive : function() {
            return self._options.swipe ? controls.slides[ self._active ] : controls[ controls.active ];
        },

        getNext : function() {
            return self._options.swipe ? controls.slides[ self.getNext( self._active ) ] : controls[ 1 - controls.active ];
        },

        slides : [],

        frames: [],

        layers: []
    };

    // internal carousel object
    var carousel = this._carousel = {

        // shortcuts
        next: self.$('thumb-nav-right'),
        prev: self.$('thumb-nav-left'),

        // cache the width
        width: 0,

        // track the current position
        current: 0,

        // cache max value
        max: 0,

        // save all hooks for each width in an array
        hooks: [],

        // update the carousel
        // you can run this method anytime, f.ex on window.resize
        update: function() {
            var w = 0,
                h = 0,
                hooks = [0];

            $.each( self._thumbnails, function( i, thumb ) {
                if ( thumb.ready ) {
                    w += thumb.outerWidth || $( thumb.container ).outerWidth( true );
                    // Due to a bug in jquery, outerwidth() returns the floor of the actual outerwidth,
                    // if the browser is zoom to a value other than 100%. height() returns the floating point value.
                    var containerWidth = $( thumb.container).width();
                    w += containerWidth - M.floor(containerWidth);

                    hooks[ i+1 ] = w;
                    h = M.max( h, thumb.outerHeight || $( thumb.container).outerHeight( true ) );
                }
            });

            self.$( 'thumbnails' ).css({
                width: w,
                height: h
            });

            carousel.max = w;
            carousel.hooks = hooks;
            carousel.width = self.$( 'thumbnails-list' ).width();
            carousel.setClasses();

            self.$( 'thumbnails-container' ).toggleClass( 'galleria-carousel', w > carousel.width );

            // one extra calculation
            carousel.width = self.$( 'thumbnails-list' ).width();

            // todo: fix so the carousel moves to the left
        },

        bindControls: function() {

            var i;

            carousel.next.on( 'click:fast', function(e) {
                e.preventDefault();

                if ( self._options.carouselSteps === 'auto' ) {

                    for ( i = carousel.current; i < carousel.hooks.length; i++ ) {
                        if ( carousel.hooks[i] - carousel.hooks[ carousel.current ] > carousel.width ) {
                            carousel.set(i - 2);
                            break;
                        }
                    }

                } else {
                    carousel.set( carousel.current + self._options.carouselSteps);
                }
            });

            carousel.prev.on( 'click:fast', function(e) {
                e.preventDefault();

                if ( self._options.carouselSteps === 'auto' ) {

                    for ( i = carousel.current; i >= 0; i-- ) {
                        if ( carousel.hooks[ carousel.current ] - carousel.hooks[i] > carousel.width ) {
                            carousel.set( i + 2 );
                            break;
                        } else if ( i === 0 ) {
                            carousel.set( 0 );
                            break;
                        }
                    }
                } else {
                    carousel.set( carousel.current - self._options.carouselSteps );
                }
            });
        },

        // calculate and set positions
        set: function( i ) {
            i = M.max( i, 0 );
            while ( carousel.hooks[i - 1] + carousel.width >= carousel.max && i >= 0 ) {
                i--;
            }
            carousel.current = i;
            carousel.animate();
        },

        // get the last position
        getLast: function(i) {
            return ( i || carousel.current ) - 1;
        },

        // follow the active image
        follow: function(i) {

            //don't follow if position fits
            if ( i === 0 || i === carousel.hooks.length - 2 ) {
                carousel.set( i );
                return;
            }

            // calculate last position
            var last = carousel.current;
            while( carousel.hooks[last] - carousel.hooks[ carousel.current ] <
                   carousel.width && last <= carousel.hooks.length ) {
                last ++;
            }

            // set position
            if ( i - 1 < carousel.current ) {
                carousel.set( i - 1 );
            } else if ( i + 2 > last) {
                carousel.set( i - last + carousel.current + 2 );
            }
        },

        // helper for setting disabled classes
        setClasses: function() {
            carousel.prev.toggleClass( 'disabled', !carousel.current );
            carousel.next.toggleClass( 'disabled', carousel.hooks[ carousel.current ] + carousel.width >= carousel.max );
        },

        // the animation method
        animate: function(to) {
            carousel.setClasses();
            var num = carousel.hooks[ carousel.current ] * -1;

            if ( isNaN( num ) ) {
                return;
            }

            // FF 24 bug
            self.$( 'thumbnails' ).css('left', function() {
                return $(this).css('left');
            });

            Utils.animate(self.get( 'thumbnails' ), {
                left: num
            },{
                duration: self._options.carouselSpeed,
                easing: self._options.easing,
                queue: false
            });
        }
    };

    // tooltip control
    // added in 1.2
    var tooltip = this._tooltip = {

        initialized : false,

        open: false,

        timer: 'tooltip' + self._id,

        swapTimer: 'swap' + self._id,

        init: function() {

            tooltip.initialized = true;

            var css = '.galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;' +
                      'opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}';

            Utils.insertStyleTag( css, 'galleria-tooltip' );

            self.$( 'tooltip' ).css({
                opacity: 0.8,
                visibility: 'visible',
                display: 'none'
            });

        },

        // move handler
        move: function( e ) {
            var mouseX = self.getMousePosition(e).x,
                mouseY = self.getMousePosition(e).y,
                $elem = self.$( 'tooltip' ),
                x = mouseX,
                y = mouseY,
                height = $elem.outerHeight( true ) + 1,
                width = $elem.outerWidth( true ),
                limitY = height + 15;

            var maxX = self.$( 'container' ).width() - width - 2,
                maxY = self.$( 'container' ).height() - height - 2;

            if ( !isNaN(x) && !isNaN(y) ) {

                x += 10;
                y -= ( height+8 );

                x = M.max( 0, M.min( maxX, x ) );
                y = M.max( 0, M.min( maxY, y ) );

                if( mouseY < limitY ) {
                    y = limitY;
                }

                $elem.css({ left: x, top: y });
            }
        },

        // bind elements to the tooltip
        // you can bind multiple elementIDs using { elemID : function } or { elemID : string }
        // you can also bind single DOM elements using bind(elem, string)
        bind: function( elem, value ) {

            // todo: revise if alternative tooltip is needed for mobile devices
            if (Galleria.TOUCH) {
                return;
            }

            if (! tooltip.initialized ) {
                tooltip.init();
            }

            var mouseout = function() {
                self.$( 'container' ).off( 'mousemove', tooltip.move );
                self.clearTimer( tooltip.timer );

                self.$( 'tooltip' ).stop().animate({
                    opacity: 0
                }, 200, function() {

                    self.$( 'tooltip' ).hide();

                    self.addTimer( tooltip.swapTimer, function() {
                        tooltip.open = false;
                    }, 1000);
                });
            };

            var hover = function( elem, value) {

                tooltip.define( elem, value );

                $( elem ).hover(function() {

                    self.clearTimer( tooltip.swapTimer );
                    self.$('container').off( 'mousemove', tooltip.move ).on( 'mousemove', tooltip.move ).trigger( 'mousemove' );
                    tooltip.show( elem );

                    self.addTimer( tooltip.timer, function() {
                        self.$( 'tooltip' ).stop().show().animate({
                            opacity: 1
                        });
                        tooltip.open = true;

                    }, tooltip.open ? 0 : 500);

                }, mouseout).click(mouseout);
            };

            if ( typeof value === 'string' ) {
                hover( ( elem in self._dom ? self.get( elem ) : elem ), value );
            } else {
                // asume elemID here
                $.each( elem, function( elemID, val ) {
                    hover( self.get(elemID), val );
                });
            }
        },

        show: function( elem ) {

            elem = $( elem in self._dom ? self.get(elem) : elem );

            var text = elem.data( 'tt' ),
                mouseup = function( e ) {

                    // attach a tiny settimeout to make sure the new tooltip is filled
                    window.setTimeout( (function( ev ) {
                        return function() {
                            tooltip.move( ev );
                        };
                    }( e )), 10);

                    elem.off( 'mouseup', mouseup );

                };

            text = typeof text === 'function' ? text() : text;

            if ( ! text ) {
                return;
            }

            self.$( 'tooltip' ).html( text.replace(/\s/, '&#160;') );

            // trigger mousemove on mouseup in case of click
            elem.on( 'mouseup', mouseup );
        },

        define: function( elem, value ) {

            // we store functions, not strings
            if (typeof value !== 'function') {
                var s = value;
                value = function() {
                    return s;
                };
            }

            elem = $( elem in self._dom ? self.get(elem) : elem ).data('tt', value);

            tooltip.show( elem );

        }
    };

    // internal fullscreen control
    var fullscreen = this._fullscreen = {

        scrolled: 0,

        crop: undef,

        active: false,

        prev: $(),

        beforeEnter: function(fn){ fn(); },
        beforeExit:  function(fn){ fn(); },

        keymap: self._keyboard.map,

        parseCallback: function( callback, enter ) {

            return _transitions.active ? function() {
                if ( typeof callback == 'function' ) {
                    callback.call(self);
                }
                var active = self._controls.getActive(),
                    next = self._controls.getNext();

                self._scaleImage( next );
                self._scaleImage( active );

                if ( enter && self._options.trueFullscreen ) {
                    // Firefox bug, revise later
                    $( active.container ).add( next.container ).trigger( 'transitionend' );
                }

            } : callback;

        },

        enter: function( callback ) {

            fullscreen.beforeEnter(function() {

                callback = fullscreen.parseCallback( callback, true );

                if ( self._options.trueFullscreen && _nativeFullscreen.support ) {

                    // do some stuff prior animation for wmoother transitions

                    fullscreen.active = true;

                    Utils.forceStyles( self.get('container'), {
                        width: '100%',
                        height: '100%'
                    });

                    self.rescale();

                    if ( Galleria.MAC ) {
                        if ( !( Galleria.SAFARI && /version\/[1-5]/.test(NAV)) ) {
                            self.$('container').css('opacity', 0).addClass('fullscreen');
                            window.setTimeout(function() {
                                fullscreen.scale();
                                self.$('container').css('opacity', 1);
                            }, 50);
                        } else {
                            self.$('stage').css('opacity', 0);
                            window.setTimeout(function() {
                                fullscreen.scale();
                                self.$('stage').css('opacity', 1);
                            },4);
                        }
                    } else {
                        self.$('container').addClass('fullscreen');
                    }

                    $win.resize( fullscreen.scale );

                    _nativeFullscreen.enter( self, callback, self.get('container') );

                } else {

                    fullscreen.scrolled = $win.scrollTop();
                    if( !Galleria.TOUCH ) {
                        window.scrollTo(0, 0);
                    }

                    fullscreen._enter( callback );
                }
            });

        },

        _enter: function( callback ) {

            fullscreen.active = true;

            if ( IFRAME ) {

                fullscreen.iframe = (function() {

                    var elem,
                        refer = doc.referrer,
                        test = doc.createElement('a'),
                        loc = window.location;

                    test.href = refer;

                    if( test.protocol != loc.protocol ||
                        test.hostname != loc.hostname ||
                        test.port != loc.port ) {
                            Galleria.raise('Parent fullscreen not available. Iframe protocol, domains and ports must match.');
                            return false;
                        }

                    fullscreen.pd = window.parent.document;

                    $( fullscreen.pd ).find('iframe').each(function() {
                        var idoc = this.contentDocument || this.contentWindow.document;
                        if ( idoc === doc ) {
                            elem = this;
                            return false;
                        }
                    });

                    return elem;
                }());

            }

            // hide the image until rescale is complete
            Utils.hide( self.getActiveImage() );

            if ( IFRAME && fullscreen.iframe ) {
                fullscreen.iframe.scrolled = $( window.parent ).scrollTop();
                window.parent.scrollTo(0, 0);
            }

            var data = self.getData(),
                options = self._options,
                inBrowser = !self._options.trueFullscreen || !_nativeFullscreen.support,
                htmlbody = {
                    height: '100%',
                    overflow: 'hidden',
                    margin:0,
                    padding:0
                };

            if (inBrowser) {

                self.$('container').addClass('fullscreen');
                fullscreen.prev = self.$('container').prev();

                if ( !fullscreen.prev.length ) {
                    fullscreen.parent = self.$( 'container' ).parent();
                }

                // move
                self.$( 'container' ).appendTo( 'body' );

                // begin styleforce

                Utils.forceStyles(self.get('container'), {
                    position: Galleria.TOUCH ? 'absolute' : 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 10000
                });
                Utils.forceStyles( DOM().html, htmlbody );
                Utils.forceStyles( DOM().body, htmlbody );
            }

            if ( IFRAME && fullscreen.iframe ) {
                Utils.forceStyles( fullscreen.pd.documentElement, htmlbody );
                Utils.forceStyles( fullscreen.pd.body, htmlbody );
                Utils.forceStyles( fullscreen.iframe, $.extend( htmlbody, {
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    position: 'fixed',
                    zIndex: 10000,
                    border: 'none'
                }));
            }

            // temporarily attach some keys
            // save the old ones first in a cloned object
            fullscreen.keymap = $.extend({}, self._keyboard.map);

            self.attachKeyboard({
                escape: self.exitFullscreen,
                right: self.next,
                left: self.prev
            });

            // temporarily save the crop
            fullscreen.crop = options.imageCrop;

            // set fullscreen options
            if ( options.fullscreenCrop != undef ) {
                options.imageCrop = options.fullscreenCrop;
            }

            // swap to big image if it's different from the display image
            if ( data && data.big && data.image !== data.big ) {
                var big    = new Galleria.Picture(),
                    cached = big.isCached( data.big ),
                    index  = self.getIndex(),
                    thumb  = self._thumbnails[ index ];

                self.trigger( {
                    type: Galleria.LOADSTART,
                    cached: cached,
                    rewind: false,
                    index: index,
                    imageTarget: self.getActiveImage(),
                    thumbTarget: thumb,
                    galleriaData: data
                });

                big.load( data.big, function( big ) {
                    self._scaleImage( big, {
                        complete: function( big ) {
                            self.trigger({
                                type: Galleria.LOADFINISH,
                                cached: cached,
                                index: index,
                                rewind: false,
                                imageTarget: big.image,
                                thumbTarget: thumb
                            });
                            var image = self._controls.getActive().image;
                            if ( image ) {
                                $( image ).width( big.image.width ).height( big.image.height )
                                    .attr( 'style', $( big.image ).attr('style') )
                                    .attr( 'src', big.image.src );
                            }
                        }
                    });
                });

                var n = self.getNext(index),
                    p = new Galleria.Picture(),
                    ndata = self.getData( n );
                p.preload( self.isFullscreen() && ndata.big ? ndata.big : ndata.image );
            }

            // init the first rescale and attach callbacks

            self.rescale(function() {

                self.addTimer(false, function() {
                    // show the image after 50 ms
                    if ( inBrowser ) {
                        Utils.show( self.getActiveImage() );
                    }

                    if (typeof callback === 'function') {
                        callback.call( self );
                    }
                    self.rescale();

                }, 100);

                self.trigger( Galleria.FULLSCREEN_ENTER );
            });

            if ( !inBrowser ) {
                Utils.show( self.getActiveImage() );
            } else {
                $win.resize( fullscreen.scale );
            }

        },

        scale : function() {
            self.rescale();
        },

        exit: function( callback ) {

            fullscreen.beforeExit(function() {

                callback = fullscreen.parseCallback( callback );

                if ( self._options.trueFullscreen && _nativeFullscreen.support ) {
                    _nativeFullscreen.exit( callback );
                } else {
                    fullscreen._exit( callback );
                }
            });
        },

        _exit: function( callback ) {

            fullscreen.active = false;

            var inBrowser = !self._options.trueFullscreen || !_nativeFullscreen.support,
                $container = self.$( 'container' ).removeClass( 'fullscreen' );

            // move back
            if ( fullscreen.parent ) {
                fullscreen.parent.prepend( $container );
            } else {
                $container.insertAfter( fullscreen.prev );
            }

            if ( inBrowser ) {
                Utils.hide( self.getActiveImage() );

                // revert all styles
                Utils.revertStyles( self.get('container'), DOM().html, DOM().body );

                // scroll back
                if( !Galleria.TOUCH ) {
                    window.scrollTo(0, fullscreen.scrolled);
                }

                // reload iframe src manually
                var frame = self._controls.frames[ self._controls.active ];
                if ( frame && frame.image ) {
                    frame.image.src = frame.image.src;
                }
            }

            if ( IFRAME && fullscreen.iframe ) {
                Utils.revertStyles( fullscreen.pd.documentElement, fullscreen.pd.body, fullscreen.iframe );
                if ( fullscreen.iframe.scrolled ) {
                    window.parent.scrollTo(0, fullscreen.iframe.scrolled );
                }
            }

            // detach all keyboard events and apply the old keymap
            self.detachKeyboard();
            self.attachKeyboard( fullscreen.keymap );

            // bring back cached options
            self._options.imageCrop = fullscreen.crop;

            // return to original image
            var big = self.getData().big,
                image = self._controls.getActive().image;

            if ( !self.getData().iframe && image && big && big == image.src ) {

                window.setTimeout(function(src) {
                    return function() {
                        image.src = src;
                    };
                }( self.getData().image ), 1 );

            }

            self.rescale(function() {
                self.addTimer(false, function() {

                    // show the image after 50 ms
                    if ( inBrowser ) {
                        Utils.show( self.getActiveImage() );
                    }

                    if ( typeof callback === 'function' ) {
                        callback.call( self );
                    }

                    $win.trigger( 'resize' );

                }, 50);
                self.trigger( Galleria.FULLSCREEN_EXIT );
            });

            $win.off('resize', fullscreen.scale);
        }
    };

    // the internal idle object for controlling idle states
    var idle = this._idle = {

        trunk: [],

        bound: false,

        active: false,

        add: function(elem, to, from, hide) {
            if ( !elem || Galleria.TOUCH ) {
                return;
            }
            if (!idle.bound) {
                idle.addEvent();
            }
            elem = $(elem);

            if ( typeof from == 'boolean' ) {
                hide = from;
                from = {};
            }

            from = from || {};

            var extract = {},
                style;

            for ( style in to ) {
                if ( to.hasOwnProperty( style ) ) {
                    extract[ style ] = elem.css( style );
                }
            }

            elem.data('idle', {
                from: $.extend( extract, from ),
                to: to,
                complete: true,
                busy: false
            });

            if ( !hide ) {
                idle.addTimer();
            } else {
                elem.css( to );
            }
            idle.trunk.push(elem);
        },

        remove: function(elem) {

            elem = $(elem);

            $.each(idle.trunk, function(i, el) {
                if ( el && el.length && !el.not(elem).length ) {
                    elem.css( elem.data( 'idle' ).from );
                    idle.trunk.splice(i, 1);
                }
            });

            if (!idle.trunk.length) {
                idle.removeEvent();
                self.clearTimer( idle.timer );
            }
        },

        addEvent : function() {
            idle.bound = true;
            self.$('container').on( 'mousemove click', idle.showAll );
            if ( self._options.idleMode == 'hover' ) {
                self.$('container').on( 'mouseleave', idle.hide );
            }
        },

        removeEvent : function() {
            idle.bound = false;
            self.$('container').on( 'mousemove click', idle.showAll );
            if ( self._options.idleMode == 'hover' ) {
                self.$('container').off( 'mouseleave', idle.hide );
            }
        },

        addTimer : function() {
            if( self._options.idleMode == 'hover' ) {
                return;
            }
            self.addTimer( 'idle', function() {
                idle.hide();
            }, self._options.idleTime );
        },

        hide : function() {

            if ( !self._options.idleMode || self.getIndex() === false ) {
                return;
            }

            self.trigger( Galleria.IDLE_ENTER );

            var len = idle.trunk.length;

            $.each( idle.trunk, function(i, elem) {

                var data = elem.data('idle');

                if (! data) {
                    return;
                }

                elem.data('idle').complete = false;

                Utils.animate( elem, data.to, {
                    duration: self._options.idleSpeed,
                    complete: function() {
                        if ( i == len-1 ) {
                            idle.active = false;
                        }
                    }
                });
            });
        },

        showAll : function() {

            self.clearTimer( 'idle' );

            $.each( idle.trunk, function( i, elem ) {
                idle.show( elem );
            });
        },

        show: function(elem) {

            var data = elem.data('idle');

            if ( !idle.active || ( !data.busy && !data.complete ) ) {

                data.busy = true;

                self.trigger( Galleria.IDLE_EXIT );

                self.clearTimer( 'idle' );

                Utils.animate( elem, data.from, {
                    duration: self._options.idleSpeed/2,
                    complete: function() {
                        idle.active = true;
                        $(elem).data('idle').busy = false;
                        $(elem).data('idle').complete = true;
                    }
                });

            }
            idle.addTimer();
        }
    };

    // internal lightbox object
    // creates a predesigned lightbox for simple popups of images in galleria
    var lightbox = this._lightbox = {

        width : 0,

        height : 0,

        initialized : false,

        active : null,

        image : null,

        elems : {},

        keymap: false,

        init : function() {

            if ( lightbox.initialized ) {
                return;
            }
            lightbox.initialized = true;

            // create some elements to work with
            var elems = 'overlay box content shadow title info close prevholder prev nextholder next counter image',
                el = {},
                op = self._options,
                css = '',
                abs = 'position:absolute;',
                prefix = 'lightbox-',
                cssMap = {
                    overlay:    'position:fixed;display:none;opacity:'+op.overlayOpacity+';filter:alpha(opacity='+(op.overlayOpacity*100)+
                                ');top:0;left:0;width:100%;height:100%;background:'+op.overlayBackground+';z-index:99990',
                    box:        'position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991',
                    shadow:     abs+'background:#000;width:100%;height:100%;',
                    content:    abs+'background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden',
                    info:       abs+'bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px',
                    close:      abs+'top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999',
                    image:      abs+'top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;',
                    prevholder: abs+'width:50%;top:0;bottom:40px;cursor:pointer;',
                    nextholder: abs+'width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;',
                    prev:       abs+'top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif',
                    next:       abs+'top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000',
                    title:      'float:left',
                    counter:    'float:right;margin-left:8px;'
                },
                hover = function(elem) {
                    return elem.hover(
                        function() { $(this).css( 'color', '#bbb' ); },
                        function() { $(this).css( 'color', '#444' ); }
                    );
                },
                appends = {};

            // fix for navigation hovers transparent background event "feature"
            var exs = '';
            if ( IE > 7 ) {
                exs = IE < 9 ? 'background:#000;filter:alpha(opacity=0);' : 'background:rgba(0,0,0,0);';
            } else {
                exs = 'z-index:99999';
            }

            cssMap.nextholder += exs;
            cssMap.prevholder += exs;

            // create and insert CSS
            $.each(cssMap, function( key, value ) {
                css += '.galleria-'+prefix+key+'{'+value+'}';
            });

            css += '.galleria-'+prefix+'box.iframe .galleria-'+prefix+'prevholder,'+
                   '.galleria-'+prefix+'box.iframe .galleria-'+prefix+'nextholder{'+
                   'width:100px;height:100px;top:50%;margin-top:-70px}';

            Utils.insertStyleTag( css, 'galleria-lightbox' );

            // create the elements
            $.each(elems.split(' '), function( i, elemId ) {
                self.addElement( 'lightbox-' + elemId );
                el[ elemId ] = lightbox.elems[ elemId ] = self.get( 'lightbox-' + elemId );
            });

            // initiate the image
            lightbox.image = new Galleria.Picture();

            // append the elements
            $.each({
                    box: 'shadow content close prevholder nextholder',
                    info: 'title counter',
                    content: 'info image',
                    prevholder: 'prev',
                    nextholder: 'next'
                }, function( key, val ) {
                    var arr = [];
                    $.each( val.split(' '), function( i, prop ) {
                        arr.push( prefix + prop );
                    });
                    appends[ prefix+key ] = arr;
            });

            self.append( appends );

            $( el.image ).append( lightbox.image.container );

            $( DOM().body ).append( el.overlay, el.box );

            // add the prev/next nav and bind some controls

            hover( $( el.close ).on( 'click:fast', lightbox.hide ).html('&#215;') );

            $.each( ['Prev','Next'], function(i, dir) {

                var $d = $( el[ dir.toLowerCase() ] ).html( /v/.test( dir ) ? '&#8249;&#160;' : '&#160;&#8250;' ),
                    $e = $( el[ dir.toLowerCase()+'holder'] );

                $e.on( 'click:fast', function() {
                    lightbox[ 'show' + dir ]();
                });

                // IE7 and touch devices will simply show the nav
                if ( IE < 8 || Galleria.TOUCH ) {
                    $d.show();
                    return;
                }

                $e.hover( function() {
                    $d.show();
                }, function(e) {
                    $d.stop().fadeOut( 200 );
                });

            });
            $( el.overlay ).on( 'click:fast', lightbox.hide );

            // the lightbox animation is slow on ipad
            if ( Galleria.IPAD ) {
                self._options.lightboxTransitionSpeed = 0;
            }

        },

        rescale: function(event) {

            // calculate
             var width = M.min( $win.width()-40, lightbox.width ),
                height = M.min( $win.height()-60, lightbox.height ),
                ratio = M.min( width / lightbox.width, height / lightbox.height ),
                destWidth = M.round( lightbox.width * ratio ) + 40,
                destHeight = M.round( lightbox.height * ratio ) + 60,
                to = {
                    width: destWidth,
                    height: destHeight,
                    'margin-top': M.ceil( destHeight / 2 ) *- 1,
                    'margin-left': M.ceil( destWidth / 2 ) *- 1
                };

            // if rescale event, don't animate
            if ( event ) {
                $( lightbox.elems.box ).css( to );
            } else {
                $( lightbox.elems.box ).animate( to, {
                    duration: self._options.lightboxTransitionSpeed,
                    easing: self._options.easing,
                    complete: function() {
                        var image = lightbox.image,
                            speed = self._options.lightboxFadeSpeed;

                        self.trigger({
                            type: Galleria.LIGHTBOX_IMAGE,
                            imageTarget: image.image
                        });

                        $( image.container ).show();

                        $( image.image ).animate({ opacity: 1 }, speed);
                        Utils.show( lightbox.elems.info, speed );
                    }
                });
            }
        },

        hide: function() {

            // remove the image
            lightbox.image.image = null;

            $win.off('resize', lightbox.rescale);

            $( lightbox.elems.box ).hide().find( 'iframe' ).remove();

            Utils.hide( lightbox.elems.info );

            self.detachKeyboard();
            self.attachKeyboard( lightbox.keymap );

            lightbox.keymap = false;

            Utils.hide( lightbox.elems.overlay, 200, function() {
                $( this ).hide().css( 'opacity', self._options.overlayOpacity );
                self.trigger( Galleria.LIGHTBOX_CLOSE );
            });
        },

        showNext: function() {
            lightbox.show( self.getNext( lightbox.active ) );
        },

        showPrev: function() {
            lightbox.show( self.getPrev( lightbox.active ) );
        },

        show: function(index) {

            lightbox.active = index = typeof index === 'number' ? index : self.getIndex() || 0;

            if ( !lightbox.initialized ) {
                lightbox.init();
            }

            // trigger the event
            self.trigger( Galleria.LIGHTBOX_OPEN );

            // temporarily attach some keys
            // save the old ones first in a cloned object
            if ( !lightbox.keymap ) {

                lightbox.keymap = $.extend({}, self._keyboard.map);

                self.attachKeyboard({
                    escape: lightbox.hide,
                    right: lightbox.showNext,
                    left: lightbox.showPrev
                });
            }

            $win.off('resize', lightbox.rescale );

            var data = self.getData(index),
                total = self.getDataLength(),
                n = self.getNext( index ),
                ndata, p, i;

            Utils.hide( lightbox.elems.info );

            try {
                for ( i = self._options.preload; i > 0; i-- ) {
                    p = new Galleria.Picture();
                    ndata = self.getData( n );
                    p.preload( ndata.big ? ndata.big : ndata.image );
                    n = self.getNext( n );
                }
            } catch(e) {}

            lightbox.image.isIframe = ( data.iframe && !data.image );

            $( lightbox.elems.box ).toggleClass( 'iframe', lightbox.image.isIframe );

            $( lightbox.image.container ).find( '.galleria-videoicon' ).remove();

            lightbox.image.load( data.big || data.image || data.iframe, function( image ) {

                if ( image.isIframe ) {

                    var cw = $(window).width(),
                        ch = $(window).height();

                    if ( image.video && self._options.maxVideoSize ) {
                        var r = M.min( self._options.maxVideoSize/cw, self._options.maxVideoSize/ch );
                        if ( r < 1 ) {
                            cw *= r;
                            ch *= r;
                        }
                    }
                    lightbox.width = cw;
                    lightbox.height = ch;

                } else {
                    lightbox.width = image.original.width;
                    lightbox.height = image.original.height;
                }

                $( image.image ).css({
                    width: image.isIframe ? '100%' : '100.1%',
                    height: image.isIframe ? '100%' : '100.1%',
                    top: 0,
                    bottom: 0,
                    zIndex: 99998,
                    opacity: 0,
                    visibility: 'visible'
                }).parent().height('100%');

                lightbox.elems.title.innerHTML = data.title || '';
                lightbox.elems.counter.innerHTML = (index + 1) + ' / ' + total;
                $win.resize( lightbox.rescale );
                lightbox.rescale();

                if( data.image && data.iframe ) {

                    $( lightbox.elems.box ).addClass('iframe');

                    if ( data.video ) {
                        var $icon = _playIcon( image.container ).hide();
                        window.setTimeout(function() {
                            $icon.fadeIn(200);
                        }, 200);
                    }

                    $( image.image ).css( 'cursor', 'pointer' ).mouseup((function(data, image) {
                        return function(e) {
                            $( lightbox.image.container ).find( '.galleria-videoicon' ).remove();
                            e.preventDefault();
                            image.isIframe = true;
                            image.load( data.iframe + ( data.video ? '&autoplay=1' : '' ), {
                                width: '100%',
                                height: IE < 8 ? $( lightbox.image.container ).height() : '100%'
                            });
                        };
                    }(data, image)));
                }
            });

            $( lightbox.elems.overlay ).show().css( 'visibility', 'visible' );
            $( lightbox.elems.box ).show();
        }
    };

    // the internal timeouts object
    // provides helper methods for controlling timeouts

    var _timer = this._timer = {

        trunk: {},

        add: function( id, fn, delay, loop ) {
            id = id || new Date().getTime();
            loop = loop || false;
            this.clear( id );
            if ( loop ) {
                var old = fn;
                fn = function() {
                    old();
                    _timer.add( id, fn, delay );
                };
            }
            this.trunk[ id ] = window.setTimeout( fn, delay );
        },

        clear: function( id ) {

            var del = function( i ) {
                window.clearTimeout( this.trunk[ i ] );
                delete this.trunk[ i ];
            }, i;

            if ( !!id && id in this.trunk ) {
                del.call( this, id );

            } else if ( typeof id === 'undefined' ) {
                for ( i in this.trunk ) {
                    if ( this.trunk.hasOwnProperty( i ) ) {
                        del.call( this, i );
                    }
                }
            }
        }
    };

    return this;
};

// end Galleria constructor

Galleria.prototype = {

    // bring back the constructor reference

    constructor: Galleria,

    /**
        Use this function to initialize the gallery and start loading.
        Should only be called once per instance.

        @param {HTMLElement} target The target element
        @param {Object} options The gallery options

        @returns Instance
    */

    init: function( target, options ) {

        options = _legacyOptions( options );

        // save the original ingredients
        this._original = {
            target: target,
            options: options,
            data: null
        };

        // save the target here
        this._target = this._dom.target = target.nodeName ? target : $( target ).get(0);

        // save the original content for destruction
        this._original.html = this._target.innerHTML;

        // push the instance
        _instances.push( this );

        // raise error if no target is detected
        if ( !this._target ) {
             Galleria.raise('Target not found', true);
             return;
        }

        // apply options
        this._options = {
            autoplay: false,
            carousel: true,
            carouselFollow: true, // legacy, deprecate at 1.3
            carouselSpeed: 400,
            carouselSteps: 'auto',
            clicknext: false,
            dailymotion: {
                foreground: '%23EEEEEE',
                highlight: '%235BCEC5',
                background: '%23222222',
                logo: 0,
                hideInfos: 1
            },
            dataConfig : function( elem ) { return {}; },
            dataSelector: 'img',
            dataSort: false,
            dataSource: this._target,
            debug: undef,
            dummy: undef, // 1.2.5
            easing: 'galleria',
            extend: function(options) {},
            fullscreenCrop: undef, // 1.2.5
            fullscreenDoubleTap: true, // 1.2.4 toggles fullscreen on double-tap for touch devices
            fullscreenTransition: undef, // 1.2.6
            height: 0,
            idleMode: true, // 1.2.4 toggles idleMode
            idleTime: 3000,
            idleSpeed: 200,
            imageCrop: false,
            imageMargin: 0,
            imagePan: false,
            imagePanSmoothness: 12,
            imagePosition: '50%',
            imageTimeout: undef, // 1.2.5
            initialTransition: undef, // 1.2.4, replaces transitionInitial
            keepSource: false,
            layerFollow: true, // 1.2.5
            lightbox: false, // 1.2.3
            lightboxFadeSpeed: 200,
            lightboxTransitionSpeed: 200,
            linkSourceImages: true,
            maxScaleRatio: undef,
            maxVideoSize: undef, // 1.2.9
            minScaleRatio: undef, // deprecated in 1.2.9
            overlayOpacity: 0.85,
            overlayBackground: '#0b0b0b',
            pauseOnInteraction: true,
            popupLinks: false,
            preload: 2,
            queue: true,
            responsive: true,
            show: 0,
            showInfo: true,
            showCounter: true,
            showImagenav: true,
            swipe: 'auto', // 1.2.4 -> revised in 1.3 -> changed type in 1.3.5
            theme: null,
            thumbCrop: true,
            thumbEventType: 'click:fast',
            thumbMargin: 0,
            thumbQuality: 'auto',
            thumbDisplayOrder: true, // 1.2.8
            thumbPosition: '50%', // 1.3
            thumbnails: true,
            touchTransition: undef, // 1.2.6
            transition: 'fade',
            transitionInitial: undef, // legacy, deprecate in 1.3. Use initialTransition instead.
            transitionSpeed: 400,
            trueFullscreen: true, // 1.2.7
            useCanvas: false, // 1.2.4
            variation: '', // 1.3.2
            videoPoster: true, // 1.3
            vimeo: {
                title: 0,
                byline: 0,
                portrait: 0,
                color: 'aaaaaa'
            },
            wait: 5000, // 1.2.7
            width: 'auto',
            youtube: {
                modestbranding: 1,
                autohide: 1,
                color: 'white',
                hd: 1,
                rel: 0,
                showinfo: 0
            }
        };

        // legacy support for transitionInitial
        this._options.initialTransition = this._options.initialTransition || this._options.transitionInitial;

        if ( options ) {

            // turn off debug
            if ( options.debug === false ) {
                DEBUG = false;
            }

            // set timeout
            if ( typeof options.imageTimeout === 'number' ) {
                TIMEOUT = options.imageTimeout;
            }

            // set dummy
            if ( typeof options.dummy === 'string' ) {
                DUMMY = options.dummy;
            }

            // set theme
            if ( typeof options.theme == 'string' ) {
                this._options.theme = options.theme;
            }
        }

        // hide all content
        $( this._target ).children().hide();

        // Warn for quirks mode
        if ( Galleria.QUIRK ) {
            Galleria.raise('Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML and add a correct doctype.');
        }

        // now we just have to wait for the theme...
        // first check if it has already loaded
        if ( _loadedThemes.length ) {
            if ( this._options.theme ) {
                for ( var i=0; i<_loadedThemes.length; i++ ) {
                    if( this._options.theme === _loadedThemes[i].name ) {
                        this.theme = _loadedThemes[i];
                        break;
                    }
                }
            } else {
                // if no theme sepcified, apply the first loaded theme
                this.theme = _loadedThemes[0];
            }
        }

        if ( typeof this.theme == 'object' ) {
            this._init();
        } else {
            // if no theme is loaded yet, push the instance into a pool and run it when the theme is ready
            _pool.push( this );
        }

        return this;
    },

    // this method should only be called once per instance
    // for manipulation of data, use the .load method

    _init: function() {

        var self = this,
            options = this._options;

        if ( this._initialized ) {
            Galleria.raise( 'Init failed: Gallery instance already initialized.' );
            return this;
        }

        this._initialized = true;

        if ( !this.theme ) {
            Galleria.raise( 'Init failed: No theme found.', true );
            return this;
        }

        // merge the theme & caller options
        $.extend( true, options, this.theme.defaults, this._original.options, Galleria.configure.options );

        // internally we use boolean for swipe
        options.swipe = (function(s) {

            if ( s == 'enforced' ) { return true; }

            // legacy patch
            if( s === false || s == 'disabled' ) { return false; }
            
            return !!Galleria.TOUCH;

        }( options.swipe ));

        // disable options that arent compatible with swipe
        if ( options.swipe ) {
            options.clicknext = false;
            options.imagePan = false;
        }

        // check for canvas support
        (function( can ) {
            if ( !( 'getContext' in can ) ) {
                can = null;
                return;
            }
            _canvas = _canvas || {
                elem: can,
                context: can.getContext( '2d' ),
                cache: {},
                length: 0
            };
        }( doc.createElement( 'canvas' ) ) );

        // bind the gallery to run when data is ready
        this.bind( Galleria.DATA, function() {

            // remove big if total pixels are less than 1024 (most phones)
            if ( window.screen && window.screen.width && Array.prototype.forEach ) {

                this._data.forEach(function(data) {

                    var density = 'devicePixelRatio' in window ? window.devicePixelRatio : 1,
                        m = M.max( window.screen.width, window.screen.height );

                    if ( m*density < 1024 ) {
                        data.big = data.image;
                    }
                });
            }

            // save the new data
            this._original.data = this._data;

            // lets show the counter here
            this.get('total').innerHTML = this.getDataLength();

            // cache the container
            var $container = this.$( 'container' );

            // set ratio if height is < 2
            if ( self._options.height < 2 ) {
                self._userRatio = self._ratio = self._options.height;
            }

            // the gallery is ready, let's just wait for the css
            var num = { width: 0, height: 0 };
            var testHeight = function() {
                return self.$( 'stage' ).height();
            };

            // check container and thumbnail height
            Utils.wait({
                until: function() {

                    // keep trying to get the value
                    num = self._getWH();
                    $container.width( num.width ).height( num.height );
                    return testHeight() && num.width && num.height > 50;

                },
                success: function() {

                    self._width = num.width;
                    self._height = num.height;
                    self._ratio = self._ratio || num.height/num.width;

                    // for some strange reason, webkit needs a single setTimeout to play ball
                    if ( Galleria.WEBKIT ) {
                        window.setTimeout( function() {
                            self._run();
                        }, 1);
                    } else {
                        self._run();
                    }
                },
                error: function() {

                    // Height was probably not set, raise hard errors

                    if ( testHeight() ) {
                        Galleria.raise('Could not extract sufficient width/height of the gallery container. Traced measures: width:' + num.width + 'px, height: ' + num.height + 'px.', true);
                    } else {
                        Galleria.raise('Could not extract a stage height from the CSS. Traced height: ' + testHeight() + 'px.', true);
                    }
                },
                timeout: typeof this._options.wait == 'number' ? this._options.wait : false
            });
        });

        // build the gallery frame
        this.append({
            'info-text' :
                ['info-title', 'info-description'],
            'info' :
                ['info-text'],
            'image-nav' :
                ['image-nav-right', 'image-nav-left'],
            'stage' :
                ['images', 'loader', 'counter', 'image-nav'],
            'thumbnails-list' :
                ['thumbnails'],
            'thumbnails-container' :
                ['thumb-nav-left', 'thumbnails-list', 'thumb-nav-right'],
            'container' :
                ['stage', 'thumbnails-container', 'info', 'tooltip']
        });

        Utils.hide( this.$( 'counter' ).append(
            this.get( 'current' ),
            doc.createTextNode(' / '),
            this.get( 'total' )
        ) );

        this.setCounter('&#8211;');

        Utils.hide( self.get('tooltip') );

        // add a notouch class on the container to prevent unwanted :hovers on touch devices
        this.$( 'container' ).addClass([
            ( Galleria.TOUCH ? 'touch' : 'notouch' ),
            this._options.variation,
            'galleria-theme-'+this.theme.name
        ].join(' '));

        // add images to the controls
        if ( !this._options.swipe ) {
            $.each( new Array(2), function( i ) {

                // create a new Picture instance
                var image = new Galleria.Picture();

                // apply some styles, create & prepend overlay
                $( image.container ).css({
                    position: 'absolute',
                    top: 0,
                    left: 0
                }).prepend( self._layers[i] = $( Utils.create('galleria-layer') ).css({
                    position: 'absolute',
                    top:0, left:0, right:0, bottom:0,
                    zIndex:2
                })[0] );

                // append the image
                self.$( 'images' ).append( image.container );

                // reload the controls
                self._controls[i] = image;

                // build a frame
                var frame = new Galleria.Picture();
                frame.isIframe = true;

                $( frame.container ).attr('class', 'galleria-frame').css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 4,
                    background: '#000',
                    display: 'none'
                }).appendTo( image.container );

                self._controls.frames[i] = frame;

            });
        }

        // some forced generic styling
        this.$( 'images' ).css({
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        });

        if ( options.swipe ) {
            this.$( 'images' ).css({
                position: 'absolute',
                top: 0,
                left: 0,
                width: 0,
                height: '100%'
            });
            this.finger = new Galleria.Finger(this.get('stage'), {
                onchange: function(page) {
                    self.pause().show(page);
                },
                oncomplete: function(page) {

                    var index = M.max( 0, M.min( parseInt( page, 10 ), self.getDataLength() - 1 ) ),
                        data = self.getData(index);

                    $( self._thumbnails[ index ].container )
                        .addClass( 'active' )
                        .siblings( '.active' )
                        .removeClass( 'active' );

                    if ( !data ) {
                       return;
                    }

                    // remove video iframes
                    self.$( 'images' ).find( '.galleria-frame' ).css('opacity', 0).hide().find( 'iframe' ).remove();

                    if ( self._options.carousel && self._options.carouselFollow ) {
                        self._carousel.follow( index );
                    }
                }
            });
            this.bind( Galleria.RESCALE, function() {
                this.finger.setup();
            });
            this.$('stage').on('click', function(e) {
                var data = self.getData();
                if ( !data ) {
                    return;
                }
                if ( data.iframe ) {

                    if ( self.isPlaying() ) {
                        self.pause();
                    }
                    var frame = self._controls.frames[ self._active ],
                        w = self._stageWidth,
                        h = self._stageHeight;

                    if ( $( frame.container ).find( 'iframe' ).length ) {
                        return;
                    }

                    $( frame.container ).css({
                        width: w,
                        height: h,
                        opacity: 0
                    }).show().animate({
                        opacity: 1
                    }, 200);

                    window.setTimeout(function() {
                        frame.load( data.iframe + ( data.video ? '&autoplay=1' : '' ), {
                            width: w,
                            height: h
                        }, function( frame ) {
                            self.$( 'container' ).addClass( 'videoplay' );
                            frame.scale({
                                width: self._stageWidth,
                                height: self._stageHeight,
                                iframelimit: data.video ? self._options.maxVideoSize : undef
                            });
                        });
                    }, 100);

                    return;
                }

                if ( data.link ) {
                    if ( self._options.popupLinks ) {
                        var win = window.open( data.link, '_blank' );
                    } else {
                        window.location.href = data.link;
                    }
                    return;
                }
            });
            this.bind( Galleria.IMAGE, function(e) {

                self.setCounter( e.index );
                self.setInfo( e.index );

                var next = this.getNext(),
                    prev = this.getPrev();

                var preloads = [prev,next];
                preloads.push(this.getNext(next), this.getPrev(prev), self._controls.slides.length-1);

                var filtered = [];

                $.each(preloads, function(i, val) {
                    if ( $.inArray(val, filtered) == -1 ) {
                        filtered.push(val);
                    }
                });

                $.each(filtered, function(i, loadme) {
                    var d = self.getData(loadme),
                        img = self._controls.slides[loadme],
                        src = self.isFullscreen() && d.big ? d.big : ( d.image || d.iframe );

                    if ( d.iframe && !d.image ) {
                        img.isIframe = true;
                    }

                    if ( !img.ready ) {
                        self._controls.slides[loadme].load(src, function(img) {
                            if ( !img.isIframe ) {
                                $(img.image).css('visibility', 'hidden');
                            }
                            self._scaleImage(img, {
                                complete: function(img) {
                                    if ( !img.isIframe ) {
                                        $(img.image).css({
                                            opacity: 0,
                                            visibility: 'visible'
                                        }).animate({
                                            opacity: 1
                                        }, 200);
                                    }
                                }
                            });
                        });
                    }
                });
            });
        }

        this.$( 'thumbnails, thumbnails-list' ).css({
            overflow: 'hidden',
            position: 'relative'
        });

        // bind image navigation arrows
        this.$( 'image-nav-right, image-nav-left' ).on( 'click:fast', function(e) {

            // pause if options is set
            if ( options.pauseOnInteraction ) {
                self.pause();
            }

            // navigate
            var fn = /right/.test( this.className ) ? 'next' : 'prev';
            self[ fn ]();

        }).on('click', function(e) {

            e.preventDefault();

            // tune the clicknext option
            if ( options.clicknext || options.swipe ) {
                e.stopPropagation();
            }
        });

        // hide controls if chosen to
        $.each( ['info','counter','image-nav'], function( i, el ) {
            if ( options[ 'show' + el.substr(0,1).toUpperCase() + el.substr(1).replace(/-/,'') ] === false ) {
                Utils.moveOut( self.get( el.toLowerCase() ) );
            }
        });

        // load up target content
        this.load();

        // now it's usually safe to remove the content
        // IE will never stop loading if we remove it, so let's keep it hidden for IE (it's usually fast enough anyway)
        if ( !options.keepSource && !IE ) {
            this._target.innerHTML = '';
        }

        // re-append the errors, if they happened before clearing
        if ( this.get( 'errors' ) ) {
            this.appendChild( 'target', 'errors' );
        }

        // append the gallery frame
        this.appendChild( 'target', 'container' );

        // parse the carousel on each thumb load
        if ( options.carousel ) {
            var count = 0,
                show = options.show;
            this.bind( Galleria.THUMBNAIL, function() {
                this.updateCarousel();
                if ( ++count == this.getDataLength() && typeof show == 'number' && show > 0 ) {
                    this._carousel.follow( show );
                }
            });
        }

        // bind window resize for responsiveness
        if ( options.responsive ) {
            $win.on( 'resize', function() {
                if ( !self.isFullscreen() ) {
                    self.resize();
                }
            });
        }

        // double-tap/click fullscreen toggle

        if ( options.fullscreenDoubleTap ) {

            this.$( 'stage' ).on( 'touchstart', (function() {
                var last, cx, cy, lx, ly, now,
                    getData = function(e) {
                        return e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                    };
                self.$( 'stage' ).on('touchmove', function() {
                    last = 0;
                });
                return function(e) {
                    if( /(-left|-right)/.test(e.target.className) ) {
                        return;
                    }
                    now = Utils.timestamp();
                    cx = getData(e).pageX;
                    cy = getData(e).pageY;
                    if ( e.originalEvent.touches.length < 2 && ( now - last < 300 ) && ( cx - lx < 20) && ( cy - ly < 20) ) {
                        self.toggleFullscreen();
                        e.preventDefault();
                        return;
                    }
                    last = now;
                    lx = cx;
                    ly = cy;
                };
            }()));
        }

        // bind the ons
        $.each( Galleria.on.binds, function(i, bind) {
            // check if already bound
            if ( $.inArray( bind.hash, self._binds ) == -1 ) {
                self.bind( bind.type, bind.callback );
            }
        });

        return this;
    },

    addTimer : function() {
        this._timer.add.apply( this._timer, Utils.array( arguments ) );
        return this;
    },

    clearTimer : function() {
        this._timer.clear.apply( this._timer, Utils.array( arguments ) );
        return this;
    },

    // parse width & height from CSS or options

    _getWH : function() {

        var $container = this.$( 'container' ),
            $target = this.$( 'target' ),
            self = this,
            num = {},
            arr;

        $.each(['width', 'height'], function( i, m ) {

            // first check if options is set
            if ( self._options[ m ] && typeof self._options[ m ] === 'number') {
                num[ m ] = self._options[ m ];
            } else {

                arr = [
                    Utils.parseValue( $container.css( m ) ),         // the container css height
                    Utils.parseValue( $target.css( m ) ),            // the target css height
                    $container[ m ](),                               // the container jQuery method
                    $target[ m ]()                                   // the target jQuery method
                ];

                // if first time, include the min-width & min-height
                if ( !self[ '_'+m ] ) {
                    arr.splice(arr.length,
                        Utils.parseValue( $container.css( 'min-'+m ) ),
                        Utils.parseValue( $target.css( 'min-'+m ) )
                    );
                }

                // else extract the measures from different sources and grab the highest value
                num[ m ] = M.max.apply( M, arr );
            }
        });

        // allow setting a height ratio instead of exact value
        // useful when doing responsive galleries

        if ( self._userRatio ) {
            num.height = num.width * self._userRatio;
        }

        return num;
    },

    // Creates the thumbnails and carousel
    // can be used at any time, f.ex when the data object is manipulated
    // push is an optional argument with pushed images

    _createThumbnails : function( push ) {

        this.get( 'total' ).innerHTML = this.getDataLength();

        var src,
            thumb,
            data,

            $container,

            self = this,
            o = this._options,

            i = push ? this._data.length - push.length : 0,
            chunk = i,

            thumbchunk = [],
            loadindex = 0,

            gif = IE < 8 ? 'http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif' :
                           'data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D',

            // get previously active thumbnail, if exists
            active = (function() {
                var a = self.$('thumbnails').find('.active');
                if ( !a.length ) {
                    return false;
                }
                return a.find('img').attr('src');
            }()),

            // cache the thumbnail option
            optval = typeof o.thumbnails === 'string' ? o.thumbnails.toLowerCase() : null,

            // move some data into the instance
            // for some reason, jQuery cant handle css(property) when zooming in FF, breaking the gallery
            // so we resort to getComputedStyle for browsers who support it
            getStyle = function( prop ) {
                return doc.defaultView && doc.defaultView.getComputedStyle ?
                    doc.defaultView.getComputedStyle( thumb.container, null )[ prop ] :
                    $container.css( prop );
            },

            fake = function(image, index, container) {
                return function() {
                    $( container ).append( image );
                    self.trigger({
                        type: Galleria.THUMBNAIL,
                        thumbTarget: image,
                        index: index,
                        galleriaData: self.getData( index )
                    });
                };
            },

            onThumbEvent = function( e ) {

                // pause if option is set
                if ( o.pauseOnInteraction ) {
                    self.pause();
                }

                // extract the index from the data
                var index = $( e.currentTarget ).data( 'index' );
                if ( self.getIndex() !== index ) {
                    self.show( index );
                }

                e.preventDefault();
            },

            thumbComplete = function( thumb, callback ) {

                $( thumb.container ).css( 'visibility', 'visible' );
                self.trigger({
                    type: Galleria.THUMBNAIL,
                    thumbTarget: thumb.image,
                    index: thumb.data.order,
                    galleriaData: self.getData( thumb.data.order )
                });

                if ( typeof callback == 'function' ) {
                    callback.call( self, thumb );
                }
            },

            onThumbLoad = function( thumb, callback ) {

                // scale when ready
                thumb.scale({
                    width:    thumb.data.width,
                    height:   thumb.data.height,
                    crop:     o.thumbCrop,
                    margin:   o.thumbMargin,
                    canvas:   o.useCanvas,
                    position: o.thumbPosition,
                    complete: function( thumb ) {

                        // shrink thumbnails to fit
                        var top = ['left', 'top'],
                            arr = ['Width', 'Height'],
                            m,
                            css,
                            data = self.getData( thumb.index );

                        // calculate shrinked positions
                        $.each(arr, function( i, measure ) {
                            m = measure.toLowerCase();
                            if ( (o.thumbCrop !== true || o.thumbCrop === m ) ) {
                                css = {};
                                css[ m ] = thumb[ m ];
                                $( thumb.container ).css( css );
                                css = {};
                                css[ top[ i ] ] = 0;
                                $( thumb.image ).css( css );
                            }

                            // cache outer measures
                            thumb[ 'outer' + measure ] = $( thumb.container )[ 'outer' + measure ]( true );
                        });

                        // set high quality if downscale is moderate
                        Utils.toggleQuality( thumb.image,
                            o.thumbQuality === true ||
                            ( o.thumbQuality === 'auto' && thumb.original.width < thumb.width * 3 )
                        );

                        if ( o.thumbDisplayOrder && !thumb.lazy ) {

                            $.each( thumbchunk, function( i, th ) {
                                if ( i === loadindex && th.ready && !th.displayed ) {

                                    loadindex++;
                                    th.displayed = true;

                                    thumbComplete( th, callback );

                                    return;
                                }
                            });
                        } else {
                            thumbComplete( thumb, callback );
                        }
                    }
                });
            };

        if ( !push ) {
            this._thumbnails = [];
            this.$( 'thumbnails' ).empty();
        }

        // loop through data and create thumbnails
        for( ; this._data[ i ]; i++ ) {

            data = this._data[ i ];

            // get source from thumb or image
            src = data.thumb || data.image;

            if ( ( o.thumbnails === true || optval == 'lazy' ) && ( data.thumb || data.image ) ) {

                // add a new Picture instance
                thumb = new Galleria.Picture(i);

                // save the index
                thumb.index = i;

                // flag displayed
                thumb.displayed = false;

                // flag lazy
                thumb.lazy = false;

                // flag video
                thumb.video = false;

                // append the thumbnail
                this.$( 'thumbnails' ).append( thumb.container );

                // cache the container
                $container = $( thumb.container );

                // hide it
                $container.css( 'visibility', 'hidden' );

                thumb.data = {
                    width  : Utils.parseValue( getStyle( 'width' ) ),
                    height : Utils.parseValue( getStyle( 'height' ) ),
                    order  : i,
                    src    : src
                };

                // grab & reset size for smoother thumbnail loads
                if ( o.thumbCrop !== true ) {
                    $container.css( { width: 'auto', height: 'auto' } );
                } else {
                    $container.css( { width: thumb.data.width, height: thumb.data.height } );
                }

                // load the thumbnail
                if ( optval == 'lazy' ) {

                    $container.addClass( 'lazy' );

                    thumb.lazy = true;

                    thumb.load( gif, {
                        height: thumb.data.height,
                        width: thumb.data.width
                    });

                } else {
                    thumb.load( src, onThumbLoad );
                }

                // preload all images here
                if ( o.preload === 'all' ) {
                    thumb.preload( data.image );
                }

            // create empty spans if thumbnails is set to 'empty'
            } else if ( ( data.iframe && optval !== null ) || optval === 'empty' || optval === 'numbers' ) {
                thumb = {
                    container: Utils.create( 'galleria-image' ),
                    image: Utils.create( 'img', 'span' ),
                    ready: true,
                    data: {
                        order: i
                    }
                };

                // create numbered thumbnails
                if ( optval === 'numbers' ) {
                    $( thumb.image ).text( i + 1 );
                }

                if ( data.iframe ) {
                    $( thumb.image ).addClass( 'iframe' );
                }

                this.$( 'thumbnails' ).append( thumb.container );

                // we need to "fake" a loading delay before we append and trigger
                // 50+ should be enough

                window.setTimeout( ( fake )( thumb.image, i, thumb.container ), 50 + ( i*20 ) );

            // create null object to silent errors
            } else {
                thumb = {
                    container: null,
                    image: null
                };
            }

            // add events for thumbnails
            // you can control the event type using thumb_event_type
            // we'll add the same event to the source if it's kept

            $( thumb.container ).add( o.keepSource && o.linkSourceImages ? data.original : null )
                .data('index', i).on( o.thumbEventType, onThumbEvent )
                .data('thumbload', onThumbLoad);

            if (active === src) {
                $( thumb.container ).addClass( 'active' );
            }

            this._thumbnails.push( thumb );
        }

        thumbchunk = this._thumbnails.slice( chunk );

        return this;
    },

    /**
        Lazy-loads thumbnails.
        You can call this method to load lazy thumbnails at run time

        @param {Array|Number} index Index or array of indexes of thumbnails to be loaded
        @param {Function} complete Callback that is called when all lazy thumbnails have been loaded

        @returns Instance
    */

    lazyLoad: function( index, complete ) {

        var arr = index.constructor == Array ? index : [ index ],
            self = this,
            loaded = 0;

        $.each( arr, function(i, ind) {

            if ( ind > self._thumbnails.length - 1 ) {
                return;
            }

            var thumb = self._thumbnails[ ind ],
                data = thumb.data,
                callback = function() {
                    if ( ++loaded == arr.length && typeof complete == 'function' ) {
                        complete.call( self );
                    }
                },
                thumbload = $( thumb.container ).data( 'thumbload' );
            if ( thumb.video ) {
                thumbload.call( self, thumb, callback );
            } else {
                thumb.load( data.src , function( thumb ) {
                    thumbload.call( self, thumb, callback );
                });
            }
        });

        return this;

    },

    /**
        Lazy-loads thumbnails in chunks.
        This method automatcally chops up the loading process of many thumbnails into chunks

        @param {Number} size Size of each chunk to be loaded
        @param {Number} [delay] Delay between each loads

        @returns Instance
    */

    lazyLoadChunks: function( size, delay ) {

        var len = this.getDataLength(),
            i = 0,
            n = 0,
            arr = [],
            temp = [],
            self = this;

        delay = delay || 0;

        for( ; i<len; i++ ) {
            temp.push(i);
            if ( ++n == size || i == len-1 ) {
                arr.push( temp );
                n = 0;
                temp = [];
            }
        }

        var init = function( wait ) {
            var a = arr.shift();
            if ( a ) {
                window.setTimeout(function() {
                    self.lazyLoad(a, function() {
                        init( true );
                    });
                }, ( delay && wait ) ? delay : 0 );
            }
        };

        init( false );

        return this;

    },

    // the internal _run method should be called after loading data into galleria
    // makes sure the gallery has proper measurements before postrun & ready
    _run : function() {

        var self = this;

        self._createThumbnails();

        // make sure we have a stageHeight && stageWidth

        Utils.wait({

            timeout: 10000,

            until: function() {

                // Opera crap
                if ( Galleria.OPERA ) {
                    self.$( 'stage' ).css( 'display', 'inline-block' );
                }

                self._stageWidth  = self.$( 'stage' ).width();
                self._stageHeight = self.$( 'stage' ).height();

                return( self._stageWidth &&
                        self._stageHeight > 50 ); // what is an acceptable height?
            },

            success: function() {

                // save the instance
                _galleries.push( self );

                // postrun some stuff after the gallery is ready

                // create the touch slider
                if ( self._options.swipe ) {

                    var $images = self.$( 'images' ).width( self.getDataLength() * self._stageWidth );
                    $.each( new Array( self.getDataLength() ), function(i) {

                        var image = new Galleria.Picture(),
                            data = self.getData(i);

                        $( image.container ).css({
                            position: 'absolute',
                            top: 0,
                            left: self._stageWidth*i
                        }).prepend( self._layers[i] = $( Utils.create('galleria-layer') ).css({
                            position: 'absolute',
                            top:0, left:0, right:0, bottom:0,
                            zIndex:2
                        })[0] ).appendTo( $images );

                        if( data.video ) {
                            _playIcon( image.container );
                        }

                        self._controls.slides.push(image);

                        var frame = new Galleria.Picture();
                        frame.isIframe = true;

                        $( frame.container ).attr('class', 'galleria-frame').css({
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 4,
                            background: '#000',
                            display: 'none'
                        }).appendTo( image.container );

                        self._controls.frames.push(frame);
                    });

                    self.finger.setup();
                }

                // show counter
                Utils.show( self.get('counter') );

                // bind carousel nav
                if ( self._options.carousel ) {
                    self._carousel.bindControls();
                }

                // start autoplay
                if ( self._options.autoplay ) {

                    self.pause();

                    if ( typeof self._options.autoplay === 'number' ) {
                        self._playtime = self._options.autoplay;
                    }

                    self._playing = true;
                }
                // if second load, just do the show and return
                if ( self._firstrun ) {

                    if ( self._options.autoplay ) {
                        self.trigger( Galleria.PLAY );
                    }

                    if ( typeof self._options.show === 'number' ) {
                        self.show( self._options.show );
                    }
                    return;
                }

                self._firstrun = true;

                // initialize the History plugin
                if ( Galleria.History ) {

                    // bind the show method
                    Galleria.History.change(function( value ) {

                        // if ID is NaN, the user pressed back from the first image
                        // return to previous address
                        if ( isNaN( value ) ) {
                            window.history.go(-1);

                        // else show the image
                        } else {
                            self.show( value, undef, true );
                        }
                    });
                }

                self.trigger( Galleria.READY );

                // call the theme init method
                self.theme.init.call( self, self._options );

                // Trigger Galleria.ready
                $.each( Galleria.ready.callbacks, function(i ,fn) {
                    if ( typeof fn == 'function' ) {
                        fn.call( self, self._options );
                    }
                });

                // call the extend option
                self._options.extend.call( self, self._options );

                // show the initial image
                // first test for permalinks in history
                if ( /^[0-9]{1,4}$/.test( HASH ) && Galleria.History ) {
                    self.show( HASH, undef, true );

                } else if( self._data[ self._options.show ] ) {
                    self.show( self._options.show );
                }

                // play trigger
                if ( self._options.autoplay ) {
                    self.trigger( Galleria.PLAY );
                }
            },

            error: function() {
                Galleria.raise('Stage width or height is too small to show the gallery. Traced measures: width:' + self._stageWidth + 'px, height: ' + self._stageHeight + 'px.', true);
            }

        });
    },

    /**
        Loads data into the gallery.
        You can call this method on an existing gallery to reload the gallery with new data.

        @param {Array|string} [source] Optional JSON array of data or selector of where to find data in the document.
        Defaults to the Galleria target or dataSource option.

        @param {string} [selector] Optional element selector of what elements to parse.
        Defaults to 'img'.

        @param {Function} [config] Optional function to modify the data extraction proceedure from the selector.
        See the dataConfig option for more information.

        @returns Instance
    */

    load : function( source, selector, config ) {

        var self = this,
            o = this._options;

        // empty the data array
        this._data = [];

        // empty the thumbnails
        this._thumbnails = [];
        this.$('thumbnails').empty();

        // shorten the arguments
        if ( typeof selector === 'function' ) {
            config = selector;
            selector = null;
        }

        // use the source set by target
        source = source || o.dataSource;

        // use selector set by option
        selector = selector || o.dataSelector;

        // use the dataConfig set by option
        config = config || o.dataConfig;

        // if source is a true object, make it into an array
        if( $.isPlainObject( source ) ) {
            source = [source];
        }

        // check if the data is an array already
        if ( $.isArray( source ) ) {
            if ( this.validate( source ) ) {
                this._data = source;
            } else {
                Galleria.raise( 'Load failed: JSON Array not valid.' );
            }
        } else {

            // add .video and .iframe to the selector (1.2.7)
            selector += ',.video,.iframe';

            // loop through images and set data
            $( source ).find( selector ).each( function( i, elem ) {

                elem = $( elem );
                var data = {},
                    parent = elem.parent(),
                    href = parent.attr( 'href' ),
                    rel  = parent.attr( 'rel' );

                if( href && ( elem[0].nodeName == 'IMG' || elem.hasClass('video') ) && _videoTest( href ) ) {
                    data.video = href;
                } else if( href && elem.hasClass('iframe') ) {
                    data.iframe = href;
                } else {
                    data.image = data.big = href;
                }

                if ( rel ) {
                    data.big = rel;
                }

                // alternative extraction from HTML5 data attribute, added in 1.2.7
                $.each( 'big title description link layer image'.split(' '), function( i, val ) {
                    if ( elem.data(val) ) {
                        data[ val ] = elem.data(val).toString();
                    }
                });

                if ( !data.big ) {
                    data.big = data.image;
                }

                // mix default extractions with the hrefs and config
                // and push it into the data array
                self._data.push( $.extend({

                    title:       elem.attr('title') || '',
                    thumb:       elem.attr('src'),
                    image:       elem.attr('src'),
                    big:         elem.attr('src'),
                    description: elem.attr('alt') || '',
                    link:        elem.attr('longdesc'),
                    original:    elem.get(0) // saved as a reference

                }, data, config( elem ) ) );

            });
        }

        if ( typeof o.dataSort == 'function' ) {
            protoArray.sort.call( this._data, o.dataSort );
        } else if ( o.dataSort == 'random' ) {
            this._data.sort( function() {
                return M.round(M.random())-0.5;
            });
        }

        // trigger the DATA event and return
        if ( this.getDataLength() ) {
            this._parseData( function() {
                this.trigger( Galleria.DATA );
            } );
        }
        return this;

    },

    // make sure the data works properly
    _parseData : function( callback ) {

        var self = this,
            current,
            ready = false,
            onload = function() {
                var complete = true;
                $.each( self._data, function( i, data ) {
                    if ( data.loading ) {
                        complete = false;
                        return false;
                    }
                });
                if ( complete && !ready ) {
                    ready = true;
                    callback.call( self );
                }
            };

        $.each( this._data, function( i, data ) {

            current = self._data[ i ];

            // copy image as thumb if no thumb exists
            if ( 'thumb' in data === false ) {
                current.thumb = data.image;
            }
            // copy image as big image if no biggie exists
            if ( !data.big ) {
                current.big = data.image;
            }
            // parse video
            if ( 'video' in data ) {
                var result = _videoTest( data.video );

                if ( result ) {
                    current.iframe = new Video(result.provider, result.id ).embed() + (function() {

                        // add options
                        if ( typeof self._options[ result.provider ] == 'object' ) {
                            var str = '?', arr = [];
                            $.each( self._options[ result.provider ], function( key, val ) {
                                arr.push( key + '=' + val );
                            });

                            // small youtube specifics, perhaps move to _video later
                            if ( result.provider == 'youtube' ) {
                                arr = ['wmode=opaque'].concat(arr);
                            }
                            return str + arr.join('&');
                        }
                        return '';
                    }());

                    // pre-fetch video providers media

                    if( !current.thumb || !current.image ) {
                        $.each( ['thumb', 'image'], function( i, type ) {
                            if ( type == 'image' && !self._options.videoPoster ) {
                                current.image = undef;
                                return;
                            }
                            var video = new Video( result.provider, result.id );
                            if ( !current[ type ] ) {
                                current.loading = true;
                                video.getMedia( type, (function(current, type) {
                                    return function(src) {
                                        current[ type ] = src;
                                        if ( type == 'image' && !current.big ) {
                                            current.big = current.image;
                                        }
                                        delete current.loading;
                                        onload();
                                    };
                                }( current, type )));
                            }
                        });
                    }
                }
            }
        });

        onload();

        return this;
    },

    /**
        Destroy the Galleria instance and recover the original content

        @example this.destroy();

        @returns Instance
    */

    destroy : function() {
        this.$( 'target' ).data( 'galleria', null );
        this.$( 'container' ).off( 'galleria' );
        this.get( 'target' ).innerHTML = this._original.html;
        this.clearTimer();
        Utils.removeFromArray( _instances, this );
        Utils.removeFromArray( _galleries, this );
        if ( Galleria._waiters.length ) {
            $.each( Galleria._waiters, function( i, w ) {
                if ( w ) window.clearTimeout( w );
            });
        }
        return this;
    },

    /**
        Adds and/or removes images from the gallery
        Works just like Array.splice
        https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice

        @example this.splice( 2, 4 ); // removes 4 images after the second image

        @returns Instance
    */

    splice : function() {
        var self = this,
            args = Utils.array( arguments );
        window.setTimeout(function() {
            protoArray.splice.apply( self._data, args );
            self._parseData( function() {
                self._createThumbnails();
            });
        },2);
        return self;
    },

    /**
        Append images to the gallery
        Works just like Array.push
        https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push

        @example this.push({ image: 'image1.jpg' }); // appends the image to the gallery

        @returns Instance
    */

    push : function() {
        var self = this,
            args = Utils.array( arguments );

        if ( args.length == 1 && args[0].constructor == Array ) {
            args = args[0];
        }

        window.setTimeout(function() {
            protoArray.push.apply( self._data, args );
            self._parseData( function() {
                self._createThumbnails( args );
            });
        }, 2);
        return self;
    },

    _getActive : function() {
        return this._controls.getActive();
    },

    validate : function( data ) {
        // todo: validate a custom data array
        return true;
    },

    /**
        Bind any event to Galleria

        @param {string} type The Event type to listen for
        @param {Function} fn The function to execute when the event is triggered

        @example this.bind( 'image', function() { Galleria.log('image shown') });

        @returns Instance
    */

    bind : function(type, fn) {

        // allow 'image' instead of Galleria.IMAGE
        type = _patchEvent( type );

        this.$( 'container' ).on( type, this.proxy(fn) );
        return this;
    },

    /**
        Unbind any event to Galleria

        @param {string} type The Event type to forget

        @returns Instance
    */

    unbind : function(type) {

        type = _patchEvent( type );

        this.$( 'container' ).off( type );
        return this;
    },

    /**
        Manually trigger a Galleria event

        @param {string} type The Event to trigger

        @returns Instance
    */

    trigger : function( type ) {

        type = typeof type === 'object' ?
            $.extend( type, { scope: this } ) :
            { type: _patchEvent( type ), scope: this };

        this.$( 'container' ).trigger( type );

        return this;
    },

    /**
        Assign an "idle state" to any element.
        The idle state will be applied after a certain amount of idle time
        Useful to hide f.ex navigation when the gallery is inactive

        @param {HTMLElement|string} elem The Dom node or selector to apply the idle state to
        @param {Object} styles the CSS styles to apply when in idle mode
        @param {Object} [from] the CSS styles to apply when in normal
        @param {Boolean} [hide] set to true if you want to hide it first

        @example addIdleState( this.get('image-nav'), { opacity: 0 });
        @example addIdleState( '.galleria-image-nav', { top: -200 }, true);

        @returns Instance
    */

    addIdleState: function( elem, styles, from, hide ) {
        this._idle.add.apply( this._idle, Utils.array( arguments ) );
        return this;
    },

    /**
        Removes any idle state previously set using addIdleState()

        @param {HTMLElement|string} elem The Dom node or selector to remove the idle state from.

        @returns Instance
    */

    removeIdleState: function( elem ) {
        this._idle.remove.apply( this._idle, Utils.array( arguments ) );
        return this;
    },

    /**
        Force Galleria to enter idle mode.

        @returns Instance
    */

    enterIdleMode: function() {
        this._idle.hide();
        return this;
    },

    /**
        Force Galleria to exit idle mode.

        @returns Instance
    */

    exitIdleMode: function() {
        this._idle.showAll();
        return this;
    },

    /**
        Enter FullScreen mode

        @param {Function} callback the function to be executed when the fullscreen mode is fully applied.

        @returns Instance
    */

    enterFullscreen: function( callback ) {
        this._fullscreen.enter.apply( this, Utils.array( arguments ) );
        return this;
    },

    /**
        Exits FullScreen mode

        @param {Function} callback the function to be executed when the fullscreen mode is fully applied.

        @returns Instance
    */

    exitFullscreen: function( callback ) {
        this._fullscreen.exit.apply( this, Utils.array( arguments ) );
        return this;
    },

    /**
        Toggle FullScreen mode

        @param {Function} callback the function to be executed when the fullscreen mode is fully applied or removed.

        @returns Instance
    */

    toggleFullscreen: function( callback ) {
        this._fullscreen[ this.isFullscreen() ? 'exit' : 'enter'].apply( this, Utils.array( arguments ) );
        return this;
    },

    /**
        Adds a tooltip to any element.
        You can also call this method with an object as argument with elemID:value pairs to apply tooltips to (see examples)

        @param {HTMLElement} elem The DOM Node to attach the event to
        @param {string|Function} value The tooltip message. Can also be a function that returns a string.

        @example this.bindTooltip( this.get('thumbnails'), 'My thumbnails');
        @example this.bindTooltip( this.get('thumbnails'), function() { return 'My thumbs' });
        @example this.bindTooltip( { image_nav: 'Navigation' });

        @returns Instance
    */

    bindTooltip: function( elem, value ) {
        this._tooltip.bind.apply( this._tooltip, Utils.array(arguments) );
        return this;
    },

    /**
        Note: this method is deprecated. Use refreshTooltip() instead.

        Redefine a tooltip.
        Use this if you want to re-apply a tooltip value to an already bound tooltip element.

        @param {HTMLElement} elem The DOM Node to attach the event to
        @param {string|Function} value The tooltip message. Can also be a function that returns a string.

        @returns Instance
    */

    defineTooltip: function( elem, value ) {
        this._tooltip.define.apply( this._tooltip, Utils.array(arguments) );
        return this;
    },

    /**
        Refresh a tooltip value.
        Use this if you want to change the tooltip value at runtime, f.ex if you have a play/pause toggle.

        @param {HTMLElement} elem The DOM Node that has a tooltip that should be refreshed

        @returns Instance
    */

    refreshTooltip: function( elem ) {
        this._tooltip.show.apply( this._tooltip, Utils.array(arguments) );
        return this;
    },

    /**
        Open a pre-designed lightbox with the currently active image.
        You can control some visuals using gallery options.

        @returns Instance
    */

    openLightbox: function() {
        this._lightbox.show.apply( this._lightbox, Utils.array( arguments ) );
        return this;
    },

    /**
        Close the lightbox.

        @returns Instance
    */

    closeLightbox: function() {
        this._lightbox.hide.apply( this._lightbox, Utils.array( arguments ) );
        return this;
    },

    /**
        Check if a variation exists

        @returns {Boolean} If the variation has been applied
    */

    hasVariation: function( variation ) {
        return $.inArray( variation, this._options.variation.split(/\s+/) ) > -1;
    },

    /**
        Get the currently active image element.

        @returns {HTMLElement} The image element
    */

    getActiveImage: function() {
        var active = this._getActive();
        return active ? active.image : undef;
    },

    /**
        Get the currently active thumbnail element.

        @returns {HTMLElement} The thumbnail element
    */

    getActiveThumb: function() {
        return this._thumbnails[ this._active ].image || undef;
    },

    /**
        Get the mouse position relative to the gallery container

        @param e The mouse event

        @example

var gallery = this;
$(document).mousemove(function(e) {
    console.log( gallery.getMousePosition(e).x );
});

        @returns {Object} Object with x & y of the relative mouse postion
    */

    getMousePosition : function(e) {
        return {
            x: e.pageX - this.$( 'container' ).offset().left,
            y: e.pageY - this.$( 'container' ).offset().top
        };
    },

    /**
        Adds a panning effect to the image

        @param [img] The optional image element. If not specified it takes the currently active image

        @returns Instance
    */

    addPan : function( img ) {

        if ( this._options.imageCrop === false ) {
            return;
        }

        img = $( img || this.getActiveImage() );

        // define some variables and methods
        var self   = this,
            x      = img.width() / 2,
            y      = img.height() / 2,
            destX  = parseInt( img.css( 'left' ), 10 ),
            destY  = parseInt( img.css( 'top' ), 10 ),
            curX   = destX || 0,
            curY   = destY || 0,
            distX  = 0,
            distY  = 0,
            active = false,
            ts     = Utils.timestamp(),
            cache  = 0,
            move   = 0,

            // positions the image
            position = function( dist, cur, pos ) {
                if ( dist > 0 ) {
                    move = M.round( M.max( dist * -1, M.min( 0, cur ) ) );
                    if ( cache !== move ) {

                        cache = move;

                        if ( IE === 8 ) { // scroll is faster for IE
                            img.parent()[ 'scroll' + pos ]( move * -1 );
                        } else {
                            var css = {};
                            css[ pos.toLowerCase() ] = move;
                            img.css(css);
                        }
                    }
                }
            },

            // calculates mouse position after 50ms
            calculate = function(e) {
                if (Utils.timestamp() - ts < 50) {
                    return;
                }
                active = true;
                x = self.getMousePosition(e).x;
                y = self.getMousePosition(e).y;
            },

            // the main loop to check
            loop = function(e) {

                if (!active) {
                    return;
                }

                distX = img.width() - self._stageWidth;
                distY = img.height() - self._stageHeight;
                destX = x / self._stageWidth * distX * -1;
                destY = y / self._stageHeight * distY * -1;
                curX += ( destX - curX ) / self._options.imagePanSmoothness;
                curY += ( destY - curY ) / self._options.imagePanSmoothness;

                position( distY, curY, 'Top' );
                position( distX, curX, 'Left' );

            };

        // we need to use scroll in IE8 to speed things up
        if ( IE === 8 ) {

            img.parent().scrollTop( curY * -1 ).scrollLeft( curX * -1 );
            img.css({
                top: 0,
                left: 0
            });

        }

        // unbind and bind event
        this.$( 'stage' ).off( 'mousemove', calculate ).on( 'mousemove', calculate );

        // loop the loop
        this.addTimer( 'pan' + self._id, loop, 50, true);

        return this;
    },

    /**
        Brings the scope into any callback

        @param fn The callback to bring the scope into
        @param [scope] Optional scope to bring

        @example $('#fullscreen').click( this.proxy(function() { this.enterFullscreen(); }) )

        @returns {Function} Return the callback with the gallery scope
    */

    proxy : function( fn, scope ) {
        if ( typeof fn !== 'function' ) {
            return F;
        }
        scope = scope || this;
        return function() {
            return fn.apply( scope, Utils.array( arguments ) );
        };
    },

    /**
        Tells you the theme name of the gallery

        @returns {String} theme name
    */

    getThemeName : function() {
        return this.theme.name;
    },

    /**
        Removes the panning effect set by addPan()

        @returns Instance
    */

    removePan: function() {

        // todo: doublecheck IE8

        this.$( 'stage' ).off( 'mousemove' );

        this.clearTimer( 'pan' + this._id );

        return this;
    },

    /**
        Adds an element to the Galleria DOM array.
        When you add an element here, you can access it using element ID in many API calls

        @param {string} id The element ID you wish to use. You can add many elements by adding more arguments.

        @example addElement('mybutton');
        @example addElement('mybutton','mylink');

        @returns Instance
    */

    addElement : function( id ) {

        var dom = this._dom;

        $.each( Utils.array(arguments), function( i, blueprint ) {
           dom[ blueprint ] = Utils.create( 'galleria-' + blueprint );
        });

        return this;
    },

    /**
        Attach keyboard events to Galleria

        @param {Object} map The map object of events.
        Possible keys are 'UP', 'DOWN', 'LEFT', 'RIGHT', 'RETURN', 'ESCAPE', 'BACKSPACE', and 'SPACE'.

        @example

this.attachKeyboard({
    right: this.next,
    left: this.prev,
    up: function() {
        console.log( 'up key pressed' )
    }
});

        @returns Instance
    */

    attachKeyboard : function( map ) {
        this._keyboard.attach.apply( this._keyboard, Utils.array( arguments ) );
        return this;
    },

    /**
        Detach all keyboard events to Galleria

        @returns Instance
    */

    detachKeyboard : function() {
        this._keyboard.detach.apply( this._keyboard, Utils.array( arguments ) );
        return this;
    },

    /**
        Fast helper for appending galleria elements that you added using addElement()

        @param {string} parentID The parent element ID where the element will be appended
        @param {string} childID the element ID that should be appended

        @example this.addElement('myElement');
        this.appendChild( 'info', 'myElement' );

        @returns Instance
    */

    appendChild : function( parentID, childID ) {
        this.$( parentID ).append( this.get( childID ) || childID );
        return this;
    },

    /**
        Fast helper for prepending galleria elements that you added using addElement()

        @param {string} parentID The parent element ID where the element will be prepended
        @param {string} childID the element ID that should be prepended

        @example

this.addElement('myElement');
this.prependChild( 'info', 'myElement' );

        @returns Instance
    */

    prependChild : function( parentID, childID ) {
        this.$( parentID ).prepend( this.get( childID ) || childID );
        return this;
    },

    /**
        Remove an element by blueprint

        @param {string} elemID The element to be removed.
        You can remove multiple elements by adding arguments.

        @returns Instance
    */

    remove : function( elemID ) {
        this.$( Utils.array( arguments ).join(',') ).remove();
        return this;
    },

    // a fast helper for building dom structures
    // leave this out of the API for now

    append : function( data ) {
        var i, j;
        for( i in data ) {
            if ( data.hasOwnProperty( i ) ) {
                if ( data[i].constructor === Array ) {
                    for( j = 0; data[i][j]; j++ ) {
                        this.appendChild( i, data[i][j] );
                    }
                } else {
                    this.appendChild( i, data[i] );
                }
            }
        }
        return this;
    },

    // an internal helper for scaling according to options
    _scaleImage : function( image, options ) {

        image = image || this._controls.getActive();

        // janpub (JH) fix:
        // image might be unselected yet
        // e.g. when external logics rescales the gallery on window resize events
        if( !image ) {
            return;
        }

        var complete,

            scaleLayer = function( img ) {
                $( img.container ).children(':first').css({
                    top: M.max(0, Utils.parseValue( img.image.style.top )),
                    left: M.max(0, Utils.parseValue( img.image.style.left )),
                    width: Utils.parseValue( img.image.width ),
                    height: Utils.parseValue( img.image.height )
                });
            };

        options = $.extend({
            width:       this._stageWidth,
            height:      this._stageHeight,
            crop:        this._options.imageCrop,
            max:         this._options.maxScaleRatio,
            min:         this._options.minScaleRatio,
            margin:      this._options.imageMargin,
            position:    this._options.imagePosition,
            iframelimit: this._options.maxVideoSize
        }, options );

        if ( this._options.layerFollow && this._options.imageCrop !== true ) {

            if ( typeof options.complete == 'function' ) {
                complete = options.complete;
                options.complete = function() {
                    complete.call( image, image );
                    scaleLayer( image );
                };
            } else {
                options.complete = scaleLayer;
            }

        } else {
            $( image.container ).children(':first').css({ top: 0, left: 0 });
        }

        image.scale( options );
        return this;
    },

    /**
        Updates the carousel,
        useful if you resize the gallery and want to re-check if the carousel nav is needed.

        @returns Instance
    */

    updateCarousel : function() {
        this._carousel.update();
        return this;
    },

    /**
        Resize the entire gallery container

        @param {Object} [measures] Optional object with width/height specified
        @param {Function} [complete] The callback to be called when the scaling is complete

        @returns Instance
    */

    resize : function( measures, complete ) {

        if ( typeof measures == 'function' ) {
            complete = measures;
            measures = undef;
        }

        measures = $.extend( { width:0, height:0 }, measures );

        var self = this,
            $container = this.$( 'container' );

        $.each( measures, function( m, val ) {
            if ( !val ) {
                $container[ m ]( 'auto' );
                measures[ m ] = self._getWH()[ m ];
            }
        });

        $.each( measures, function( m, val ) {
            $container[ m ]( val );
        });

        return this.rescale( complete );

    },

    /**
        Rescales the gallery

        @param {number} width The target width
        @param {number} height The target height
        @param {Function} complete The callback to be called when the scaling is complete

        @returns Instance
    */

    rescale : function( width, height, complete ) {

        var self = this;

        // allow rescale(fn)
        if ( typeof width === 'function' ) {
            complete = width;
            width = undef;
        }

        var scale = function() {

            // set stagewidth
            self._stageWidth = width || self.$( 'stage' ).width();
            self._stageHeight = height || self.$( 'stage' ).height();

            if ( self._options.swipe ) {
                $.each( self._controls.slides, function(i, img) {
                    self._scaleImage( img );
                    $( img.container ).css('left', self._stageWidth * i);
                });
                self.$('images').css('width', self._stageWidth * self.getDataLength());
            } else {
                // scale the active image
                self._scaleImage();
            }

            if ( self._options.carousel ) {
                self.updateCarousel();
            }

            var frame = self._controls.frames[ self._controls.active ];

            if (frame) {
                self._controls.frames[ self._controls.active ].scale({
                    width: self._stageWidth,
                    height: self._stageHeight,
                    iframelimit: self._options.maxVideoSize
                });
            }

            self.trigger( Galleria.RESCALE );

            if ( typeof complete === 'function' ) {
                complete.call( self );
            }
        };

        scale.call( self );

        return this;
    },

    /**
        Refreshes the gallery.
        Useful if you change image options at runtime and want to apply the changes to the active image.

        @returns Instance
    */

    refreshImage : function() {
        this._scaleImage();
        if ( this._options.imagePan ) {
            this.addPan();
        }
        return this;
    },

    _preload: function() {
        if ( this._options.preload ) {
            var p, i,
                n = this.getNext(),
                ndata;
            try {
                for ( i = this._options.preload; i > 0; i-- ) {
                    p = new Galleria.Picture();
                    ndata = this.getData( n );
                    p.preload( this.isFullscreen() && ndata.big ? ndata.big : ndata.image );
                    n = this.getNext( n );
                }
            } catch(e) {}
        }
    },

    /**
        Shows an image by index

        @param {number|boolean} index The index to show
        @param {Boolean} rewind A boolean that should be true if you want the transition to go back

        @returns Instance
    */

    show : function( index, rewind, _history ) {

        var swipe = this._options.swipe;

        // do nothing queue is long || index is false || queue is false and transition is in progress
        if ( !swipe &&
            ( this._queue.length > 3 || index === false || ( !this._options.queue && this._queue.stalled ) ) ) {
            return;
        }

        index = M.max( 0, M.min( parseInt( index, 10 ), this.getDataLength() - 1 ) );

        rewind = typeof rewind !== 'undefined' ? !!rewind : index < this.getIndex();

        _history = _history || false;

        // do the history thing and return
        if ( !_history && Galleria.History ) {
            Galleria.History.set( index.toString() );
            return;
        }

        if ( this.finger && index !== this._active ) {
            this.finger.to = -( index*this.finger.width );
            this.finger.index = index;
        }
        this._active = index;

        // we do things a bit simpler in swipe:
        if ( swipe ) {

            var data = this.getData(index),
                self = this;
            if ( !data ) {
                return;
            }

            var src = this.isFullscreen() && data.big ? data.big : ( data.image || data.iframe ),
                image = this._controls.slides[index],
                cached = image.isCached( src ),
                thumb = this._thumbnails[ index ];

            var evObj = {
                cached: cached,
                index: index,
                rewind: rewind,
                imageTarget: image.image,
                thumbTarget: thumb.image,
                galleriaData: data
            };

            this.trigger($.extend(evObj, {
                type: Galleria.LOADSTART
            }));

            self.$('container').removeClass( 'videoplay' );

            var complete = function() {

                self._layers[index].innerHTML = self.getData().layer || '';

                self.trigger($.extend(evObj, {
                    type: Galleria.LOADFINISH
                }));
                self._playCheck();
            };

            self._preload();

            window.setTimeout(function() {

                // load if not ready
                if ( !image.ready || $(image.image).attr('src') != src ) {
                    if ( data.iframe && !data.image ) {
                        image.isIframe = true;
                    }
                    image.load(src, function(image) {
                        evObj.imageTarget = image.image;
                        self._scaleImage(image, complete).trigger($.extend(evObj, {
                            type: Galleria.IMAGE
                        }));
                        complete();
                    });
                } else {
                    self.trigger($.extend(evObj, {
                        type: Galleria.IMAGE
                    }));
                    complete();
                }
            }, 100);

        } else {
            protoArray.push.call( this._queue, {
                index : index,
                rewind : rewind
            });
            if ( !this._queue.stalled ) {
                this._show();
            }
        }

        return this;
    },

    // the internal _show method does the actual showing
    _show : function() {

        // shortcuts
        var self = this,
            queue = this._queue[ 0 ],
            data = this.getData( queue.index );

        if ( !data ) {
            return;
        }

        var src = this.isFullscreen() && data.big ? data.big : ( data.image || data.iframe ),
            active = this._controls.getActive(),
            next = this._controls.getNext(),
            cached = next.isCached( src ),
            thumb = this._thumbnails[ queue.index ],
            mousetrigger = function() {
                $( next.image ).trigger( 'mouseup' );
            };

        self.$('container').toggleClass('iframe', !!data.isIframe).removeClass( 'videoplay' );

        // to be fired when loading & transition is complete:
        var complete = (function( data, next, active, queue, thumb ) {

            return function() {

                var win;

                _transitions.active = false;

                // optimize quality
                Utils.toggleQuality( next.image, self._options.imageQuality );

                // remove old layer
                self._layers[ self._controls.active ].innerHTML = '';

                // swap
                $( active.container ).css({
                    zIndex: 0,
                    opacity: 0
                }).show();

                $( active.container ).find( 'iframe, .galleria-videoicon' ).remove();
                $( self._controls.frames[ self._controls.active ].container ).hide();

                $( next.container ).css({
                    zIndex: 1,
                    left: 0,
                    top: 0
                }).show();

                self._controls.swap();

                // add pan according to option
                if ( self._options.imagePan ) {
                    self.addPan( next.image );
                }

                // make the image clickable
                // order of precedence: iframe, link, lightbox, clicknext
                if ( ( data.iframe && data.image ) || data.link || self._options.lightbox || self._options.clicknext ) {

                    $( next.image ).css({
                        cursor: 'pointer'
                    }).on( 'mouseup', function( e ) {

                        // non-left click
                        if ( typeof e.which == 'number' && e.which > 1 ) {
                            return;
                        }

                        // iframe / video
                        if ( data.iframe ) {

                            if ( self.isPlaying() ) {
                                self.pause();
                            }
                            var frame = self._controls.frames[ self._controls.active ],
                                w = self._stageWidth,
                                h = self._stageHeight;

                            $( frame.container ).css({
                                width: w,
                                height: h,
                                opacity: 0
                            }).show().animate({
                                opacity: 1
                            }, 200);

                            window.setTimeout(function() {
                                frame.load( data.iframe + ( data.video ? '&autoplay=1' : '' ), {
                                    width: w,
                                    height: h
                                }, function( frame ) {
                                    self.$( 'container' ).addClass( 'videoplay' );
                                    frame.scale({
                                        width: self._stageWidth,
                                        height: self._stageHeight,
                                        iframelimit: data.video ? self._options.maxVideoSize : undef
                                    });
                                });
                            }, 100);

                            return;
                        }

                        // clicknext
                        if ( self._options.clicknext && !Galleria.TOUCH ) {
                            if ( self._options.pauseOnInteraction ) {
                                self.pause();
                            }
                            self.next();
                            return;
                        }

                        // popup link
                        if ( data.link ) {
                            if ( self._options.popupLinks ) {
                                win = window.open( data.link, '_blank' );
                            } else {
                                window.location.href = data.link;
                            }
                            return;
                        }

                        if ( self._options.lightbox ) {
                            self.openLightbox();
                        }

                    });
                }

                // check if we are playing
                self._playCheck();

                // trigger IMAGE event
                self.trigger({
                    type: Galleria.IMAGE,
                    index: queue.index,
                    imageTarget: next.image,
                    thumbTarget: thumb.image,
                    galleriaData: data
                });

                // remove the queued image
                protoArray.shift.call( self._queue );

                // remove stalled
                self._queue.stalled = false;

                // if we still have images in the queue, show it
                if ( self._queue.length ) {
                    self._show();
                }

            };
        }( data, next, active, queue, thumb ));

        // let the carousel follow
        if ( this._options.carousel && this._options.carouselFollow ) {
            this._carousel.follow( queue.index );
        }

        // preload images
        self._preload();

        // show the next image, just in case
        Utils.show( next.container );

        next.isIframe = data.iframe && !data.image;

        // add active classes
        $( self._thumbnails[ queue.index ].container )
            .addClass( 'active' )
            .siblings( '.active' )
            .removeClass( 'active' );

        // trigger the LOADSTART event
        self.trigger( {
            type: Galleria.LOADSTART,
            cached: cached,
            index: queue.index,
            rewind: queue.rewind,
            imageTarget: next.image,
            thumbTarget: thumb.image,
            galleriaData: data
        });

        // stall the queue
        self._queue.stalled = true;

        // begin loading the next image
        next.load( src, function( next ) {

            // add layer HTML
            var layer = $( self._layers[ 1-self._controls.active ] ).html( data.layer || '' ).hide();

            self._scaleImage( next, {

                complete: function( next ) {

                    // toggle low quality for IE
                    if ( 'image' in active ) {
                        Utils.toggleQuality( active.image, false );
                    }
                    Utils.toggleQuality( next.image, false );

                    // remove the image panning, if applied
                    // TODO: rethink if this is necessary
                    self.removePan();

                    // set the captions and counter
                    self.setInfo( queue.index );
                    self.setCounter( queue.index );

                    // show the layer now
                    if ( data.layer ) {
                        layer.show();
                        // inherit click events set on image
                        if ( ( data.iframe && data.image ) || data.link || self._options.lightbox || self._options.clicknext ) {
                            layer.css( 'cursor', 'pointer' ).off( 'mouseup' ).mouseup( mousetrigger );
                        }
                    }

                    // add play icon
                    if( data.video && data.image ) {
                        _playIcon( next.container );
                    }

                    var transition = self._options.transition;

                    // can JavaScript loop through objects in order? yes.
                    $.each({
                        initial: active.image === null,
                        touch: Galleria.TOUCH,
                        fullscreen: self.isFullscreen()
                    }, function( type, arg ) {
                        if ( arg && self._options[ type + 'Transition' ] !== undef ) {
                            transition = self._options[ type + 'Transition' ];
                            return false;
                        }
                    });

                    // validate the transition
                    if ( transition in _transitions.effects === false ) {
                        complete();
                    } else {
                        var params = {
                            prev: active.container,
                            next: next.container,
                            rewind: queue.rewind,
                            speed: self._options.transitionSpeed || 400
                        };

                        _transitions.active = true;

                        // call the transition function and send some stuff
                        _transitions.init.call( self, transition, params, complete );

                    }

                    // trigger the LOADFINISH event
                    self.trigger({
                        type: Galleria.LOADFINISH,
                        cached: cached,
                        index: queue.index,
                        rewind: queue.rewind,
                        imageTarget: next.image,
                        thumbTarget: self._thumbnails[ queue.index ].image,
                        galleriaData: self.getData( queue.index )
                    });
                }
            });
        });
    },

    /**
        Gets the next index

        @param {number} [base] Optional starting point

        @returns {number} the next index, or the first if you are at the first (looping)
    */

    getNext : function( base ) {
        base = typeof base === 'number' ? base : this.getIndex();
        return base === this.getDataLength() - 1 ? 0 : base + 1;
    },

    /**
        Gets the previous index

        @param {number} [base] Optional starting point

        @returns {number} the previous index, or the last if you are at the first (looping)
    */

    getPrev : function( base ) {
        base = typeof base === 'number' ? base : this.getIndex();
        return base === 0 ? this.getDataLength() - 1 : base - 1;
    },

    /**
        Shows the next image in line

        @returns Instance
    */

    next : function() {
        if ( this.getDataLength() > 1 ) {
            this.show( this.getNext(), false );
        }
        return this;
    },

    /**
        Shows the previous image in line

        @returns Instance
    */

    prev : function() {
        if ( this.getDataLength() > 1 ) {
            this.show( this.getPrev(), true );
        }
        return this;
    },

    /**
        Retrieve a DOM element by element ID

        @param {string} elemId The delement ID to fetch

        @returns {HTMLElement} The elements DOM node or null if not found.
    */

    get : function( elemId ) {
        return elemId in this._dom ? this._dom[ elemId ] : null;
    },

    /**
        Retrieve a data object

        @param {number} index The data index to retrieve.
        If no index specified it will take the currently active image

        @returns {Object} The data object
    */

    getData : function( index ) {
        return index in this._data ?
            this._data[ index ] : this._data[ this._active ];
    },

    /**
        Retrieve the number of data items

        @returns {number} The data length
    */
    getDataLength : function() {
        return this._data.length;
    },

    /**
        Retrieve the currently active index

        @returns {number|boolean} The active index or false if none found
    */

    getIndex : function() {
        return typeof this._active === 'number' ? this._active : false;
    },

    /**
        Retrieve the stage height

        @returns {number} The stage height
    */

    getStageHeight : function() {
        return this._stageHeight;
    },

    /**
        Retrieve the stage width

        @returns {number} The stage width
    */

    getStageWidth : function() {
        return this._stageWidth;
    },

    /**
        Retrieve the option

        @param {string} key The option key to retrieve. If no key specified it will return all options in an object.

        @returns option or options
    */

    getOptions : function( key ) {
        return typeof key === 'undefined' ? this._options : this._options[ key ];
    },

    /**
        Set options to the instance.
        You can set options using a key & value argument or a single object argument (see examples)

        @param {string} key The option key
        @param {string} value the the options value

        @example setOptions( 'autoplay', true )
        @example setOptions({ autoplay: true });

        @returns Instance
    */

    setOptions : function( key, value ) {
        if ( typeof key === 'object' ) {
            $.extend( this._options, key );
        } else {
            this._options[ key ] = value;
        }
        return this;
    },

    /**
        Starts playing the slideshow

        @param {number} delay Sets the slideshow interval in milliseconds.
        If you set it once, you can just call play() and get the same interval the next time.

        @returns Instance
    */

    play : function( delay ) {

        this._playing = true;

        this._playtime = delay || this._playtime;

        this._playCheck();

        this.trigger( Galleria.PLAY );

        return this;
    },

    /**
        Stops the slideshow if currently playing

        @returns Instance
    */

    pause : function() {

        this._playing = false;

        this.trigger( Galleria.PAUSE );

        return this;
    },

    /**
        Toggle between play and pause events.

        @param {number} delay Sets the slideshow interval in milliseconds.

        @returns Instance
    */

    playToggle : function( delay ) {
        return ( this._playing ) ? this.pause() : this.play( delay );
    },

    /**
        Checks if the gallery is currently playing

        @returns {Boolean}
    */

    isPlaying : function() {
        return this._playing;
    },

    /**
        Checks if the gallery is currently in fullscreen mode

        @returns {Boolean}
    */

    isFullscreen : function() {
        return this._fullscreen.active;
    },

    _playCheck : function() {
        var self = this,
            played = 0,
            interval = 20,
            now = Utils.timestamp(),
            timer_id = 'play' + this._id;

        if ( this._playing ) {

            this.clearTimer( timer_id );

            var fn = function() {

                played = Utils.timestamp() - now;
                if ( played >= self._playtime && self._playing ) {
                    self.clearTimer( timer_id );
                    self.next();
                    return;
                }
                if ( self._playing ) {

                    // trigger the PROGRESS event
                    self.trigger({
                        type:         Galleria.PROGRESS,
                        percent:      M.ceil( played / self._playtime * 100 ),
                        seconds:      M.floor( played / 1000 ),
                        milliseconds: played
                    });

                    self.addTimer( timer_id, fn, interval );
                }
            };
            self.addTimer( timer_id, fn, interval );
        }
    },

    /**
        Modify the slideshow delay

        @param {number} delay the number of milliseconds between slides,

        @returns Instance
    */

    setPlaytime: function( delay ) {
        this._playtime = delay;
        return this;
    },

    setIndex: function( val ) {
        this._active = val;
        return this;
    },

    /**
        Manually modify the counter

        @param {number} [index] Optional data index to fectch,
        if no index found it assumes the currently active index

        @returns Instance
    */

    setCounter: function( index ) {

        if ( typeof index === 'number' ) {
            index++;
        } else if ( typeof index === 'undefined' ) {
            index = this.getIndex()+1;
        }

        this.get( 'current' ).innerHTML = index;

        if ( IE ) { // weird IE bug

            var count = this.$( 'counter' ),
                opacity = count.css( 'opacity' );

            if ( parseInt( opacity, 10 ) === 1) {
                Utils.removeAlpha( count[0] );
            } else {
                this.$( 'counter' ).css( 'opacity', opacity );
            }

        }

        return this;
    },

    /**
        Manually set captions

        @param {number} [index] Optional data index to fectch and apply as caption,
        if no index found it assumes the currently active index

        @returns Instance
    */

    setInfo : function( index ) {

        var self = this,
            data = this.getData( index );

        $.each( ['title','description'], function( i, type ) {

            var elem = self.$( 'info-' + type );

            if ( !!data[type] ) {
                elem[ data[ type ].length ? 'show' : 'hide' ]().html( data[ type ] );
            } else {
               elem.empty().hide();
            }
        });

        return this;
    },

    /**
        Checks if the data contains any captions

        @param {number} [index] Optional data index to fectch,
        if no index found it assumes the currently active index.

        @returns {boolean}
    */

    hasInfo : function( index ) {

        var check = 'title description'.split(' '),
            i;

        for ( i = 0; check[i]; i++ ) {
            if ( !!this.getData( index )[ check[i] ] ) {
                return true;
            }
        }
        return false;

    },

    jQuery : function( str ) {

        var self = this,
            ret = [];

        $.each( str.split(','), function( i, elemId ) {
            elemId = $.trim( elemId );

            if ( self.get( elemId ) ) {
                ret.push( elemId );
            }
        });

        var jQ = $( self.get( ret.shift() ) );

        $.each( ret, function( i, elemId ) {
            jQ = jQ.add( self.get( elemId ) );
        });

        return jQ;

    },

    /**
        Converts element IDs into a jQuery collection
        You can call for multiple IDs separated with commas.

        @param {string} str One or more element IDs (comma-separated)

        @returns jQuery

        @example this.$('info,container').hide();
    */

    $ : function( str ) {
        return this.jQuery.apply( this, Utils.array( arguments ) );
    }

};

// End of Galleria prototype

// Add events as static variables
$.each( _events, function( i, ev ) {

    // legacy events
    var type = /_/.test( ev ) ? ev.replace( /_/g, '' ) : ev;

    Galleria[ ev.toUpperCase() ] = 'galleria.'+type;

} );

$.extend( Galleria, {

    // Browser helpers
    IE9:     IE === 9,
    IE8:     IE === 8,
    IE7:     IE === 7,
    IE6:     IE === 6,
    IE:      IE,
    WEBKIT:  /webkit/.test( NAV ),
    CHROME:  /chrome/.test( NAV ),
    SAFARI:  /safari/.test( NAV ) && !(/chrome/.test( NAV )),
    QUIRK:   ( IE && doc.compatMode && doc.compatMode === "BackCompat" ),
    MAC:     /mac/.test( navigator.platform.toLowerCase() ),
    OPERA:   !!window.opera,
    IPHONE:  /iphone/.test( NAV ),
    IPAD:    /ipad/.test( NAV ),
    ANDROID: /android/.test( NAV ),
    TOUCH:   ('ontouchstart' in doc)

});

// Galleria static methods

/**
    Adds a theme that you can use for your Gallery

    @param {Object} theme Object that should contain all your theme settings.
    <ul>
        <li>name - name of the theme</li>
        <li>author - name of the author</li>
        <li>css - css file name (not path)</li>
        <li>defaults - default options to apply, including theme-specific options</li>
        <li>init - the init function</li>
    </ul>

    @returns {Object} theme
*/

Galleria.addTheme = function( theme ) {

    // make sure we have a name
    if ( !theme.name ) {
        Galleria.raise('No theme name specified');
    }

    if ( typeof theme.defaults !== 'object' ) {
        theme.defaults = {};
    } else {
        theme.defaults = _legacyOptions( theme.defaults );
    }

    var css = false,
        reg;

    if ( typeof theme.css === 'string' ) {

        // look for manually added CSS
        $('link').each(function( i, link ) {
            reg = new RegExp( theme.css );
            if ( reg.test( link.href ) ) {

                // we found the css
                css = true;

                // the themeload trigger
                _themeLoad( theme );

                return false;
            }
        });

        // else look for the absolute path and load the CSS dynamic
        if ( !css ) {


            $(function() {
                // Try to determine the css-path from the theme script.
                // In IE8/9, the script-dom-element seems to be not present
                // at once, if galleria itself is inserted into the dom
                // dynamically. We therefore try multiple times before raising
                // an error.
                var retryCount = 0;
                var tryLoadCss = function() {
                    $('script').each(function (i, script) {
                        // look for the theme script
                        reg = new RegExp('galleria\\.' + theme.name.toLowerCase() + '\\.');
                        if (reg.test(script.src)) {

                            // we have a match
                            css = script.src.replace(/[^\/]*$/, '') + theme.css;

                            window.setTimeout(function () {
                                Utils.loadCSS(css, 'galleria-theme-'+theme.name, function () {

                                    // run galleries with this theme
                                    _themeLoad(theme);

                                });
                            }, 1);
                        }
                    });
                    if (!css) {
                        if (retryCount++ > 5) {
                            Galleria.raise('No theme CSS loaded');
                        } else {
                            window.setTimeout(tryLoadCss, 500);
                        }
                    }
                };
                tryLoadCss();
            });
        }

    } else {

        // pass
        _themeLoad( theme );
    }
    return theme;
};

/**
    loadTheme loads a theme js file and attaches a load event to Galleria

    @param {string} src The relative path to the theme source file

    @param {Object} [options] Optional options you want to apply

    @returns Galleria
*/

Galleria.loadTheme = function( src, options ) {

    // Don't load if theme is already loaded
    if( $('script').filter(function() { return $(this).attr('src') == src; }).length ) {
        return;
    }

    var loaded = false,
        err;

    // start listening for the timeout onload
    $( window ).load( function() {
        if ( !loaded ) {
            // give it another 20 seconds
            err = window.setTimeout(function() {
                if ( !loaded ) {
                    Galleria.raise( "Galleria had problems loading theme at " + src + ". Please check theme path or load manually.", true );
                }
            }, 20000);
        }
    });

    // load the theme
    Utils.loadScript( src, function() {
        loaded = true;
        window.clearTimeout( err );
    });

    return Galleria;
};

/**
    Retrieves a Galleria instance.

    @param {number} [index] Optional index to retrieve.
    If no index is supplied, the method will return all instances in an array.

    @returns Instance or Array of instances
*/

Galleria.get = function( index ) {
    if ( !!_instances[ index ] ) {
        return _instances[ index ];
    } else if ( typeof index !== 'number' ) {
        return _instances;
    } else {
        Galleria.raise('Gallery index ' + index + ' not found');
    }
};

/**

    Configure Galleria options via a static function.
    The options will be applied to all instances

    @param {string|object} key The options to apply or a key

    @param [value] If key is a string, this is the value

    @returns Galleria

*/

Galleria.configure = function( key, value ) {

    var opts = {};

    if( typeof key == 'string' && value ) {
        opts[key] = value;
        key = opts;
    } else {
        $.extend( opts, key );
    }

    Galleria.configure.options = opts;

    $.each( Galleria.get(), function(i, instance) {
        instance.setOptions( opts );
    });

    return Galleria;
};

Galleria.configure.options = {};

/**

    Bind a Galleria event to the gallery

    @param {string} type A string representing the galleria event

    @param {function} callback The function that should run when the event is triggered

    @returns Galleria

*/

Galleria.on = function( type, callback ) {
    if ( !type ) {
        return;
    }

    callback = callback || F;

    // hash the bind
    var hash = type + callback.toString().replace(/\s/g,'') + Utils.timestamp();

    // for existing instances
    $.each( Galleria.get(), function(i, instance) {
        instance._binds.push( hash );
        instance.bind( type, callback );
    });

    // for future instances
    Galleria.on.binds.push({
        type: type,
        callback: callback,
        hash: hash
    });

    return Galleria;
};

Galleria.on.binds = [];

/**

    Run Galleria
    Alias for $(selector).galleria(options)

    @param {string} selector A selector of element(s) to intialize galleria to

    @param {object} options The options to apply

    @returns Galleria

*/

Galleria.run = function( selector, options ) {
    if ( $.isFunction( options ) ) {
        options = { extend: options };
    }
    $( selector || '#galleria' ).galleria( options );
    return Galleria;
};

/**
    Creates a transition to be used in your gallery

    @param {string} name The name of the transition that you will use as an option

    @param {Function} fn The function to be executed in the transition.
    The function contains two arguments, params and complete.
    Use the params Object to integrate the transition, and then call complete when you are done.

    @returns Galleria

*/

Galleria.addTransition = function( name, fn ) {
    _transitions.effects[name] = fn;
    return Galleria;
};

/**
    The Galleria utilites
*/

Galleria.utils = Utils;

/**
    A helper metod for cross-browser logging.
    It uses the console log if available otherwise it falls back to alert

    @example Galleria.log("hello", document.body, [1,2,3]);
*/

Galleria.log = function() {
    var args = Utils.array( arguments );
    if( 'console' in window && 'log' in window.console ) {
        try {
            return window.console.log.apply( window.console, args );
        } catch( e ) {
            $.each( args, function() {
                window.console.log(this);
            });
        }
    } else {
        return window.alert( args.join('<br>') );
    }
};

/**
    A ready method for adding callbacks when a gallery is ready
    Each method is call before the extend option for every instance

    @param {function} callback The function to call

    @returns Galleria
*/

Galleria.ready = function( fn ) {
    if ( typeof fn != 'function' ) {
        return Galleria;
    }
    $.each( _galleries, function( i, gallery ) {
        fn.call( gallery, gallery._options );
    });
    Galleria.ready.callbacks.push( fn );
    return Galleria;
};

Galleria.ready.callbacks = [];

/**
    Method for raising errors

    @param {string} msg The message to throw

    @param {boolean} [fatal] Set this to true to override debug settings and display a fatal error
*/

Galleria.raise = function( msg, fatal ) {

    var type = fatal ? 'Fatal error' : 'Error',

        css = {
            color: '#fff',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 100000
        },

        echo = function( msg ) {

            var html = '<div style="padding:4px;margin:0 0 2px;background:#' +
                ( fatal ? '811' : '222' ) + ';">' +
                ( fatal ? '<strong>' + type + ': </strong>' : '' ) +
                msg + '</div>';

            $.each( _instances, function() {

                var cont = this.$( 'errors' ),
                    target = this.$( 'target' );

                if ( !cont.length ) {

                    target.css( 'position', 'relative' );

                    cont = this.addElement( 'errors' ).appendChild( 'target', 'errors' ).$( 'errors' ).css(css);
                }
                cont.append( html );

            });

            if ( !_instances.length ) {
                $('<div>').css( $.extend( css, { position: 'fixed' } ) ).append( html ).appendTo( DOM().body );
            }
        };

    // if debug is on, display errors and throw exception if fatal
    if ( DEBUG ) {
        echo( msg );
        if ( fatal ) {
            throw new Error(type + ': ' + msg);
        }

    // else just echo a silent generic error if fatal
    } else if ( fatal ) {
        if ( _hasError ) {
            return;
        }
        _hasError = true;
        fatal = false;
        echo( 'Gallery could not load.' );
    }
};

// Add the version
Galleria.version = VERSION;

Galleria.getLoadedThemes = function() {
    return $.map(_loadedThemes, function(theme) {
        return theme.name;
    });
};

/**
    A method for checking what version of Galleria the user has installed and throws a readable error if the user needs to upgrade.
    Useful when building plugins that requires a certain version to function.

    @param {number} version The minimum version required

    @param {string} [msg] Optional message to display. If not specified, Galleria will throw a generic error.

    @returns Galleria
*/

Galleria.requires = function( version, msg ) {
    msg = msg || 'You need to upgrade Galleria to version ' + version + ' to use one or more components.';
    if ( Galleria.version < version ) {
        Galleria.raise(msg, true);
    }
    return Galleria;
};

/**
    Adds preload, cache, scale and crop functionality

    @constructor

    @requires jQuery

    @param {number} [id] Optional id to keep track of instances
*/

Galleria.Picture = function( id ) {

    // save the id
    this.id = id || null;

    // the image should be null until loaded
    this.image = null;

    // Create a new container
    this.container = Utils.create('galleria-image');

    // add container styles
    $( this.container ).css({
        overflow: 'hidden',
        position: 'relative' // for IE Standards mode
    });

    // saves the original measurements
    this.original = {
        width: 0,
        height: 0
    };

    // flag when the image is ready
    this.ready = false;

    // flag for iframe Picture
    this.isIframe = false;

};

Galleria.Picture.prototype = {

    // the inherited cache object
    cache: {},

    // show the image on stage
    show: function() {
        Utils.show( this.image );
    },

    // hide the image
    hide: function() {
        Utils.moveOut( this.image );
    },

    clear: function() {
        this.image = null;
    },

    /**
        Checks if an image is in cache

        @param {string} src The image source path, ex '/path/to/img.jpg'

        @returns {boolean}
    */

    isCached: function( src ) {
        return !!this.cache[src];
    },

    /**
        Preloads an image into the cache

        @param {string} src The image source path, ex '/path/to/img.jpg'

        @returns Galleria.Picture
    */

    preload: function( src ) {
        $( new Image() ).load((function(src, cache) {
            return function() {
                cache[ src ] = src;
            };
        }( src, this.cache ))).attr( 'src', src );
    },

    /**
        Loads an image and call the callback when ready.
        Will also add the image to cache.

        @param {string} src The image source path, ex '/path/to/img.jpg'
        @param {Object} [size] The forced size of the image, defined as an object { width: xx, height:xx }
        @param {Function} callback The function to be executed when the image is loaded & scaled

        @returns The image container (jQuery object)
    */

    load: function(src, size, callback) {

        if ( typeof size == 'function' ) {
            callback = size;
            size = null;
        }

        if( this.isIframe ) {
            var id = 'if'+new Date().getTime();

            var iframe = this.image = $('<iframe>', {
                src: src,
                frameborder: 0,
                id: id,
                allowfullscreen: true,
                css: { visibility: 'hidden' }
            })[0];

            if ( size ) {
                $( iframe ).css( size );
            }

            $( this.container ).find( 'iframe,img' ).remove();

            this.container.appendChild( this.image );

            $('#'+id).load( (function( self, callback ) {
                return function() {
                    window.setTimeout(function() {
                        $( self.image ).css( 'visibility', 'visible' );
                        if( typeof callback == 'function' ) {
                            callback.call( self, self );
                        }
                    }, 10);
                };
            }( this, callback )));

            return this.container;
        }

        this.image = new Image();

        // IE8 opacity inherit bug
        if ( Galleria.IE8 ) {
            $( this.image ).css( 'filter', 'inherit' );
        }

        // FF shaking images bug:
        // http://support.galleria.io/discussions/problems/12245-shaking-photos
        if ( !Galleria.IE && !Galleria.CHROME && !Galleria.SAFARI ) {
            $( this.image ).css( 'image-rendering', 'optimizequality' );
        }

        var reload = false,
            resort = false,

            // some jquery cache
            $container = $( this.container ),
            $image = $( this.image ),

            onerror = function() {
                if ( !reload ) {
                    reload = true;
                    // reload the image with a timestamp
                    window.setTimeout((function(image, src) {
                        return function() {
                            image.attr('src', src + (src.indexOf('?') > -1 ? '&' : '?') + Utils.timestamp() );
                        };
                    }( $(this), src )), 50);
                } else {
                    // apply the dummy image if it exists
                    if ( DUMMY ) {
                        $( this ).attr( 'src', DUMMY );
                    } else {
                        Galleria.raise('Image not found: ' + src);
                    }
                }
            },

            // the onload method
            onload = (function( self, callback, src ) {

                return function() {

                    var complete = function() {

                        $( this ).off( 'load' );

                        // save the original size
                        self.original = size || {
                            height: this.height,
                            width: this.width
                        };

                        // translate3d if needed
                        if ( Galleria.HAS3D ) {
                            this.style.MozTransform = this.style.webkitTransform = 'translate3d(0,0,0)';
                        }

                        $container.append( this );

                        self.cache[ src ] = src; // will override old cache

                        if (typeof callback == 'function' ) {
                            window.setTimeout(function() {
                                callback.call( self, self );
                            },1);
                        }
                    };

                    // Delay the callback to "fix" the Adblock Bug
                    // http://code.google.com/p/adblockforchrome/issues/detail?id=3701
                    if ( ( !this.width || !this.height ) ) {
                        (function( img ) {
                            Utils.wait({
                                until: function() {
                                    return img.width && img.height;
                                },
                                success: function() {
                                    complete.call( img );
                                },
                                error: function() {
                                    if ( !resort ) {
                                        $(new Image()).load( onload ).attr( 'src', img.src );
                                        resort = true;
                                    } else {
                                        Galleria.raise('Could not extract width/height from image: ' + img.src +
                                            '. Traced measures: width:' + img.width + 'px, height: ' + img.height + 'px.');
                                    }
                                },
                                timeout: 100
                            });
                        }( this ));
                    } else {
                        complete.call( this );
                    }
                };
            }( this, callback, src ));

        // remove any previous images
        $container.find( 'iframe,img' ).remove();

        // append the image
        $image.css( 'display', 'block');

        // hide it for now
        Utils.hide( this.image );

        // remove any max/min scaling
        $.each('minWidth minHeight maxWidth maxHeight'.split(' '), function(i, prop) {
            $image.css(prop, (/min/.test(prop) ? '0' : 'none'));
        });

        // begin load and insert in cache when done
        $image.load( onload ).on( 'error', onerror ).attr( 'src', src );

        // return the container
        return this.container;
    },

    /**
        Scales and crops the image

        @param {Object} options The method takes an object with a number of options:

        <ul>
            <li>width - width of the container</li>
            <li>height - height of the container</li>
            <li>min - minimum scale ratio</li>
            <li>max - maximum scale ratio</li>
            <li>margin - distance in pixels from the image border to the container</li>
            <li>complete - a callback that fires when scaling is complete</li>
            <li>position - positions the image, works like the css background-image property.</li>
            <li>crop - defines how to crop. Can be true, false, 'width' or 'height'</li>
            <li>canvas - set to true to try a canvas-based rescale</li>
        </ul>

        @returns The image container object (jQuery)
    */

    scale: function( options ) {

        var self = this;

        // extend some defaults
        options = $.extend({
            width: 0,
            height: 0,
            min: undef,
            max: undef,
            margin: 0,
            complete: F,
            position: 'center',
            crop: false,
            canvas: false,
            iframelimit: undef
        }, options);

        if( this.isIframe ) {

            var cw = options.width,
                ch = options.height,
                nw, nh;
            if ( options.iframelimit ) {
                var r = M.min( options.iframelimit/cw, options.iframelimit/ch );
                if ( r < 1 ) {
                    nw = cw * r;
                    nh = ch * r;

                    $( this.image ).css({
                        top: ch/2-nh/2,
                        left: cw/2-nw/2,
                        position: 'absolute'
                    });
                } else {
                    $( this.image ).css({
                        top: 0,
                        left: 0
                    });
                }
            }
            $( this.image ).width( nw || cw ).height( nh || ch ).removeAttr( 'width' ).removeAttr( 'height' );
            $( this.container ).width( cw ).height( ch );
            options.complete.call(self, self);
            try {
                if( this.image.contentWindow ) {
                    $( this.image.contentWindow ).trigger('resize');
                }
            } catch(e) {}
            return this.container;

        }

        // return the element if no image found
        if (!this.image) {
            return this.container;
        }

        // store locale variables
        var width,
            height,
            $container = $( self.container ),
            data;

        // wait for the width/height
        Utils.wait({
            until: function() {
                width  = options.width ||
                         $container.width() ||
                         Utils.parseValue( $container.css('width') );

                height = options.height ||
                         $container.height() ||
                         Utils.parseValue( $container.css('height') );

                return width && height;
            },
            success: function() {

                // calculate some cropping
                var newWidth = ( width - options.margin * 2 ) / self.original.width,
                    newHeight = ( height - options.margin * 2 ) / self.original.height,
                    min = M.min( newWidth, newHeight ),
                    max = M.max( newWidth, newHeight ),
                    cropMap = {
                        'true'  : max,
                        'width' : newWidth,
                        'height': newHeight,
                        'false' : min,
                        'landscape': self.original.width > self.original.height ? max : min,
                        'portrait': self.original.width < self.original.height ? max : min
                    },
                    ratio = cropMap[ options.crop.toString() ],
                    canvasKey = '';

                // allow maxScaleRatio
                if ( options.max ) {
                    ratio = M.min( options.max, ratio );
                }

                // allow minScaleRatio
                if ( options.min ) {
                    ratio = M.max( options.min, ratio );
                }

                $.each( ['width','height'], function( i, m ) {
                    $( self.image )[ m ]( self[ m ] = self.image[ m ] = M.round( self.original[ m ] * ratio ) );
                });

                $( self.container ).width( width ).height( height );

                if ( options.canvas && _canvas ) {

                    _canvas.elem.width = self.width;
                    _canvas.elem.height = self.height;

                    canvasKey = self.image.src + ':' + self.width + 'x' + self.height;

                    self.image.src = _canvas.cache[ canvasKey ] || (function( key ) {

                        _canvas.context.drawImage(self.image, 0, 0, self.original.width*ratio, self.original.height*ratio);

                        try {

                            data = _canvas.elem.toDataURL();
                            _canvas.length += data.length;
                            _canvas.cache[ key ] = data;
                            return data;

                        } catch( e ) {
                            return self.image.src;
                        }

                    }( canvasKey ) );

                }

                // calculate image_position
                var pos = {},
                    mix = {},
                    getPosition = function(value, measure, margin) {
                        var result = 0;
                        if (/\%/.test(value)) {
                            var flt = parseInt( value, 10 ) / 100,
                                m = self.image[ measure ] || $( self.image )[ measure ]();

                            result = M.ceil( m * -1 * flt + margin * flt );
                        } else {
                            result = Utils.parseValue( value );
                        }
                        return result;
                    },
                    positionMap = {
                        'top': { top: 0 },
                        'left': { left: 0 },
                        'right': { left: '100%' },
                        'bottom': { top: '100%' }
                    };

                $.each( options.position.toLowerCase().split(' '), function( i, value ) {
                    if ( value === 'center' ) {
                        value = '50%';
                    }
                    pos[i ? 'top' : 'left'] = value;
                });

                $.each( pos, function( i, value ) {
                    if ( positionMap.hasOwnProperty( value ) ) {
                        $.extend( mix, positionMap[ value ] );
                    }
                });

                pos = pos.top ? $.extend( pos, mix ) : mix;

                pos = $.extend({
                    top: '50%',
                    left: '50%'
                }, pos);

                // apply position
                $( self.image ).css({
                    position : 'absolute',
                    top :  getPosition(pos.top, 'height', height),
                    left : getPosition(pos.left, 'width', width)
                });

                // show the image
                self.show();

                // flag ready and call the callback
                self.ready = true;
                options.complete.call( self, self );

            },
            error: function() {
                Galleria.raise('Could not scale image: '+self.image.src);
            },
            timeout: 1000
        });
        return this;
    }
};

// our own easings
$.extend( $.easing, {

    galleria: function (_, t, b, c, d) {
        if ((t/=d/2) < 1) {
            return c/2*t*t*t + b;
        }
        return c/2*((t-=2)*t*t + 2) + b;
    },

    galleriaIn: function (_, t, b, c, d) {
        return c*(t/=d)*t + b;
    },

    galleriaOut: function (_, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    }

});


// Forked version of Ainos Finger.js for native-style touch

Galleria.Finger = (function() {

    var abs = M.abs;

    // test for translate3d support
    var has3d = Galleria.HAS3D = (function() {

        var el = doc.createElement('p'),
            has3d,
            t = ['webkit','O','ms','Moz',''],
            s,
            i=0,
            a = 'transform';

        DOM().html.insertBefore(el, null);

        for (; t[i]; i++) {
            s = t[i] ? t[i]+'Transform' : a;
            if (el.style[s] !== undefined) {
                el.style[s] = "translate3d(1px,1px,1px)";
                has3d = $(el).css(t[i] ? '-'+t[i].toLowerCase()+'-'+a : a);
            }
        }

        DOM().html.removeChild(el);
        return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
    }());

    // request animation shim
    var requestFrame = (function(){
        var r = 'RequestAnimationFrame';
        return window.requestAnimationFrame ||
               window['webkit'+r] ||
               window['moz'+r] ||
               window['o'+r] ||
               window['ms'+r] ||
               function( callback ) {
                   window.setTimeout(callback, 1000 / 60);
               };
    }());

    var Finger = function(elem, options) {

        // default options
        this.config = {
            start: 0,
            duration: 500,
            onchange: function() {},
            oncomplete: function() {},
            easing: function(x,t,b,c,d) {
                return -c * ((t=t/d-1)*t*t*t - 1) + b; // easeOutQuart
            }
        };

        this.easeout = function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        };

        if ( !elem.children.length ) {
            return;
        }

        var self = this;

        // extend options
        $.extend(this.config, options);

        this.elem = elem;
        this.child = elem.children[0];
        this.to = this.pos = 0;
        this.touching = false;
        this.start = {};
        this.index = this.config.start;
        this.anim = 0;
        this.easing = this.config.easing;

        if ( !has3d ) {
          this.child.style.position = 'absolute';
          this.elem.style.position = 'relative';
        }

        // Bind event handlers to context
        $.each(['ontouchstart','ontouchmove','ontouchend','setup'], function(i, fn) {
            self[fn] = (function(caller) {
                return function() {
                    caller.apply( self, arguments );
                };
            }(self[fn]));
        });

        // the physical animator
        this.setX = function() {

            var style = self.child.style;

            if (!has3d) {
                // this is actually faster than CSS3 translate
                style.left = self.pos+'px';
                return;
            }
            style.MozTransform = style.webkitTransform = style.transform = 'translate3d(' + self.pos + 'px,0,0)';
            return;
        };

        // bind events
        $(elem).on('touchstart', this.ontouchstart);
        $(window).on('resize', this.setup);
        $(window).on('orientationchange', this.setup);

        // set up width
        this.setup();

        // start the animations
        (function animloop(){
          requestFrame(animloop);
          self.loop.call( self );
        }());

    };

    Finger.prototype = {

        constructor: Finger,

        setup: function() {
            this.width = $( this.elem ).width();
            this.length = M.ceil( $(this.child).width() / this.width );
            if ( this.index !== 0 ) {
                this.index = M.max(0, M.min( this.index, this.length-1 ) );
                this.pos = this.to = -this.width*this.index;
            }
        },

        setPosition: function(pos) {
            this.pos = pos;
            this.to = pos;
        },

        ontouchstart: function(e) {

            var touch = e.originalEvent.touches;

            this.start = {
                pageX: touch[0].pageX,
                pageY: touch[0].pageY,
                time:  +new Date()
            };

            this.isScrolling = null;
            this.touching = true;
            this.deltaX = 0;

            $doc.on('touchmove', this.ontouchmove);
            $doc.on('touchend', this.ontouchend);
        },

        ontouchmove: function(e) {

            var touch = e.originalEvent.touches;

            // ensure swiping with one touch and not pinching
            if( touch && touch.length > 1 || e.scale && e.scale !== 1 ) {
                return;
            }

            this.deltaX = touch[0].pageX - this.start.pageX;

            // determine if scrolling test has run - one time test
            if ( this.isScrolling === null ) {
                this.isScrolling = !!(
                    this.isScrolling ||
                    M.abs(this.deltaX) < M.abs(touch[0].pageY - this.start.pageY)
                );
            }

            // if user is not trying to scroll vertically
            if (!this.isScrolling) {

                // prevent native scrolling
                e.preventDefault();

                // increase resistance if first or last slide
                this.deltaX /= ( (!this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0 ) ?
                    ( M.abs(this.deltaX) / this.width + 1.8 )  : 1 );
                this.to = this.deltaX - this.index * this.width;
            }
            e.stopPropagation();
        },

        ontouchend: function(e) {

            this.touching = false;

            // determine if slide attempt triggers next/prev slide
            var isValidSlide = +new Date() - this.start.time < 250 &&
                M.abs(this.deltaX) > 40 ||
                M.abs(this.deltaX) > this.width/2,

                isPastBounds = !this.index && this.deltaX > 0 ||
                    this.index == this.length - 1 && this.deltaX < 0;

            // if not scrolling vertically
            if ( !this.isScrolling ) {
                this.show( this.index + ( isValidSlide && !isPastBounds ? (this.deltaX < 0 ? 1 : -1) : 0 ) );
            }

            $doc.off('touchmove', this.ontouchmove);
            $doc.off('touchend', this.ontouchend);
        },

        show: function( index ) {
            if ( index != this.index ) {
                this.config.onchange.call(this, index);
            } else {
                this.to = -( index*this.width );
            }
        },

        moveTo: function( index ) {
            if ( index != this.index ) {
                this.pos = this.to = -( index*this.width );
                this.index = index;
            }
        },

        loop: function() {

            var distance = this.to - this.pos,
                factor = 1;

            if ( this.width && distance ) {
                factor = M.max(0.5, M.min(1.5, M.abs(distance / this.width) ) );
            }

            // if distance is short or the user is touching, do a 1-1 animation
            if ( this.touching || M.abs(distance) <= 1 ) {
                this.pos = this.to;
                distance = 0;
                if ( this.anim && !this.touching ) {
                    this.config.oncomplete( this.index );
                }
                this.anim = 0;
                this.easing = this.config.easing;
            } else {
                if ( !this.anim ) {
                    // save animation parameters
                    this.anim = { start: this.pos, time: +new Date(), distance: distance, factor: factor, destination: this.to };
                }
                // check if to has changed or time has run out
                var elapsed = +new Date() - this.anim.time;
                var duration = this.config.duration*this.anim.factor;

                if ( elapsed > duration || this.anim.destination != this.to ) {
                    this.anim = 0;
                    this.easing = this.easeout;
                    return;
                }
                // apply easing
                this.pos = this.easing(
                    null,
                    elapsed,
                    this.anim.start,
                    this.anim.distance,
                    duration
                );
            }
            this.setX();
        }
    };

    return Finger;

}());

// the plugin initializer
$.fn.galleria = function( options ) {

    var selector = this.selector;

    // try domReady if element not found
    if ( !$(this).length ) {

        $(function() {
            if ( $( selector ).length ) {

                // if found on domReady, go ahead
                $( selector ).galleria( options );

            } else {

                // if not, try fetching the element for 5 secs, then raise a warning.
                Galleria.utils.wait({
                    until: function() {
                        return $( selector ).length;
                    },
                    success: function() {
                        $( selector ).galleria( options );
                    },
                    error: function() {
                        Galleria.raise('Init failed: Galleria could not find the element "'+selector+'".');
                    },
                    timeout: 5000
                });

            }
        });
        return this;
    }

    return this.each(function() {

        // destroy previous instance and prepare for new load
        if ( $.data(this, 'galleria') ) {
            $.data( this, 'galleria' ).destroy();
            $( this ).find( '*' ).hide();
        }

        // load the new gallery
        $.data( this, 'galleria', new Galleria().init( this, options ) );
    });

};

// export as AMD or CommonJS
if ( typeof module === "object" && module && typeof module.exports === "object" ) {
    module.exports = Galleria;
} else {
    window.Galleria = Galleria;
    if ( typeof define === "function" && define.amd ) {
        define( "galleria", ['jquery'], function() { return Galleria; } );
    }
}

// phew

}( jQuery, this ) );
/**
 * Galleria History Plugin 2012-04-04
 * http://galleria.io
 *
 * Licensed under the MIT license
 * https://raw.github.com/aino/galleria/master/LICENSE
 *
 */


(function( $, window ) {

/*global jQuery, Galleria, window */

Galleria.requires(1.25, 'The History Plugin requires Galleria version 1.2.5 or later.');

Galleria.History = (function() {

    var onloads = [],

        init = false,

        loc = window.location,

        doc = window.document,

        ie = Galleria.IE,

        support = 'onhashchange' in window && ( doc.mode === undefined || doc.mode > 7 ),

        iframe,

        get = function( winloc ) {
            if( iframe && !support && Galleria.IE ) {
                winloc = winloc || iframe.location;
            }  else {
                winloc = loc;
            }
            return parseInt( winloc.hash.substr(2), 10 );
        },

        saved = get( loc ),

        callbacks = [],

        onchange = function() {
            $.each( callbacks, function( i, fn ) {
                fn.call( window, get() );
            });
        },

        ready = function() {
            $.each( onloads, function(i, fn) {
                fn();
            });

            init = true;
        },

        setHash = function( val ) {
            return '/' + val;
        };

    // always remove support if IE < 8
    if ( support && ie < 8 ) {
        support = false;
    }

    if ( !support ) {

        $(function() {

            var interval = window.setInterval(function() {

                var hash = get();

                if ( !isNaN( hash ) && hash != saved ) {
                    saved = hash;
                    loc.hash = setHash( hash );
                    onchange();
                }

            }, 50);

            if ( ie ) {

                $('<iframe tabindex="-1" title="empty">').hide().attr( 'src', 'about:blank' ).one('load', function() {

                    iframe = this.contentWindow;

                    ready();

                }).insertAfter(doc.body);

            } else {
                ready();
            }
        });
    } else {
        ready();
    }

    return {

        change: function( fn ) {

            callbacks.push( fn );

            if( support ) {
                window.onhashchange = onchange;
            }
        },

        set: function( val ) {

            if ( isNaN( val ) ) {
                return;
            }

            if ( !support && ie ) {

                this.ready(function() {

                    var idoc = iframe.document;
                    idoc.open();
                    idoc.close();

                    iframe.location.hash = setHash( val );

                });
            }

            loc.hash = setHash( val );
        },

        ready: function(fn) {
            if (!init) {
                onloads.push(fn);
            } else {
                fn();
            }
        }
    };
}());

}( jQuery, this ));







// Nivo
$(function(){
 $('#slider').nivoSlider({
  effect: 'fade',
  pauseTime: 4000,
 });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-58107731-1', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');

