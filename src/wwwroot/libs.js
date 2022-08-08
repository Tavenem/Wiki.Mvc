/**
 * easymde v2.16.2-138.0
 * Copyright Jeroen Akkerman
 * @link https://github.com/ionaru/easy-markdown-editor
 * @license MIT
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EasyMDE=e()}}((function(){return function e(t,n,i){function r(a,l){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!l&&s)return s(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[a]={exports:{}};t[a][0].call(c.exports,(function(e){return r(t[a][1][e]||e)}),c,c.exports,e,t,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(e,t,n){},{}],2:[function(e,t,n){"use strict";var i=e("typo-js");function r(e){"function"==typeof(e=e||{}).codeMirrorInstance&&"function"==typeof e.codeMirrorInstance.defineMode?(String.prototype.includes||(String.prototype.includes=function(){return-1!==String.prototype.indexOf.apply(this,arguments)}),e.codeMirrorInstance.defineMode("spell-checker",(function(t){if(!r.aff_loading){r.aff_loading=!0;var n=new XMLHttpRequest;n.open("GET","https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff",!0),n.onload=function(){4===n.readyState&&200===n.status&&(r.aff_data=n.responseText,r.num_loaded++,2==r.num_loaded&&(r.typo=new i("en_US",r.aff_data,r.dic_data,{platform:"any"})))},n.send(null)}if(!r.dic_loading){r.dic_loading=!0;var o=new XMLHttpRequest;o.open("GET","https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic",!0),o.onload=function(){4===o.readyState&&200===o.status&&(r.dic_data=o.responseText,r.num_loaded++,2==r.num_loaded&&(r.typo=new i("en_US",r.aff_data,r.dic_data,{platform:"any"})))},o.send(null)}var a='!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',l={token:function(e){var t=e.peek(),n="";if(a.includes(t))return e.next(),null;for(;null!=(t=e.peek())&&!a.includes(t);)n+=t,e.next();return r.typo&&!r.typo.check(n)?"spell-error":null}},s=e.codeMirrorInstance.getMode(t,t.backdrop||"text/plain");return e.codeMirrorInstance.overlayMode(s,l,!0)}))):console.log("CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`")}r.num_loaded=0,r.aff_loading=!1,r.dic_loading=!1,r.aff_data="",r.dic_data="",r.typo,t.exports=r},{"typo-js":16}],3:[function(e,t,n){(function(e){"use strict";function t(t,n){clearTimeout(n.timeout),e.off(window,"mouseup",n.hurry),e.off(window,"keyup",n.hurry)}e.defineOption("autoRefresh",!1,(function(n,i){n.state.autoRefresh&&(t(0,n.state.autoRefresh),n.state.autoRefresh=null),i&&0==n.display.wrapper.offsetHeight&&function(n,i){function r(){n.display.wrapper.offsetHeight?(t(0,i),n.display.lastWrapHeight!=n.display.wrapper.clientHeight&&n.refresh()):i.timeout=setTimeout(r,i.delay)}i.timeout=setTimeout(r,i.delay),i.hurry=function(){clearTimeout(i.timeout),i.timeout=setTimeout(r,50)},e.on(window,"mouseup",i.hurry),e.on(window,"keyup",i.hurry)}(n,n.state.autoRefresh={delay:i.delay||250})}))})("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],4:[function(e,t,n){(function(e){"use strict";e.defineOption("fullScreen",!1,(function(t,n,i){i==e.Init&&(i=!1),!i!=!n&&(n?function(e){var t=e.getWrapperElement();e.state.fullScreenRestore={scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,width:t.style.width,height:t.style.height},t.style.width="",t.style.height="auto",t.className+=" CodeMirror-fullscreen",document.documentElement.style.overflow="hidden",e.refresh()}(t):function(e){var t=e.getWrapperElement();t.className=t.className.replace(/\s*CodeMirror-fullscreen\b/,""),document.documentElement.style.overflow="";var n=e.state.fullScreenRestore;t.style.width=n.width,t.style.height=n.height,window.scrollTo(n.scrollLeft,n.scrollTop),e.refresh()}(t))}))})("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],5:[function(e,t,n){(function(e){function t(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function n(e){t(e);var n=e.state.placeholder=document.createElement("pre");n.style.cssText="height: 0; overflow: visible",n.style.direction=e.getOption("direction"),n.className="CodeMirror-placeholder CodeMirror-line-like";var i=e.getOption("placeholder");"string"==typeof i&&(i=document.createTextNode(i)),n.appendChild(i),e.display.lineSpace.insertBefore(n,e.display.lineSpace.firstChild)}function i(e){o(e)&&n(e)}function r(e){var i=e.getWrapperElement(),r=o(e);i.className=i.className.replace(" CodeMirror-empty","")+(r?" CodeMirror-empty":""),r?n(e):t(e)}function o(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",(function(o,a,l){var s=l&&l!=e.Init;if(a&&!s)o.on("blur",i),o.on("change",r),o.on("swapDoc",r),e.on(o.getInputField(),"compositionupdate",o.state.placeholderCompose=function(){!function(e){setTimeout((function(){var i=!1;if(1==e.lineCount()){var r=e.getInputField();i="TEXTAREA"==r.nodeName?!e.getLine(0).length:!/[^\u200b]/.test(r.querySelector(".CodeMirror-line").textContent)}i?n(e):t(e)}),20)}(o)}),r(o);else if(!a&&s){o.off("blur",i),o.off("change",r),o.off("swapDoc",r),e.off(o.getInputField(),"compositionupdate",o.state.placeholderCompose),t(o);var u=o.getWrapperElement();u.className=u.className.replace(" CodeMirror-empty","")}a&&!o.hasFocus()&&i(o)}))})("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],6:[function(e,t,n){(function(e){"use strict";var t=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,n=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,i=/[*+-]\s/;function r(e,n){var i=n.line,r=0,o=0,a=t.exec(e.getLine(i)),l=a[1];do{var s=i+(r+=1),u=e.getLine(s),c=t.exec(u);if(c){var d=c[1],h=parseInt(a[3],10)+r-o,f=parseInt(c[3],10),p=f;if(l!==d||isNaN(f)){if(l.length>d.length)return;if(l.length<d.length&&1===r)return;o+=1}else h===f&&(p=f+1),h>f&&(p=h+1),e.replaceRange(u.replace(t,d+p+c[4]+c[5]),{line:s,ch:0},{line:s,ch:u.length})}}while(c)}e.commands.newlineAndIndentContinueMarkdownList=function(o){if(o.getOption("disableInput"))return e.Pass;for(var a=o.listSelections(),l=[],s=0;s<a.length;s++){var u=a[s].head,c=o.getStateAfter(u.line),d=e.innerMode(o.getMode(),c);if("markdown"!==d.mode.name&&"markdown"!==d.mode.helperType)return void o.execCommand("newlineAndIndent");var h=!1!==(c=d.state).list,f=0!==c.quote,p=o.getLine(u.line),m=t.exec(p),g=/^\s*$/.test(p.slice(0,u.ch));if(!a[s].empty()||!h&&!f||!m||g)return void o.execCommand("newlineAndIndent");if(n.test(p)){var v=f&&/>\s*$/.test(p),x=!/>\s*$/.test(p);(v||x)&&o.replaceRange("",{line:u.line,ch:0},{line:u.line,ch:u.ch+1}),l[s]="\n"}else{var y=m[1],b=m[5],D=!(i.test(m[2])||m[2].indexOf(">")>=0),C=D?parseInt(m[3],10)+1+m[4]:m[2].replace("x"," ");l[s]="\n"+y+C+b,D&&r(o,u)}}o.replaceSelections(l)}})("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],7:[function(e,t,n){(function(e){"use strict";e.overlayMode=function(t,n,i){return{startState:function(){return{base:e.startState(t),overlay:e.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(i){return{base:e.copyState(t,i.base),overlay:e.copyState(n,i.overlay),basePos:i.basePos,baseCur:null,overlayPos:i.overlayPos,overlayCur:null}},token:function(e,r){return(e!=r.streamSeen||Math.min(r.basePos,r.overlayPos)<e.start)&&(r.streamSeen=e,r.basePos=r.overlayPos=e.start),e.start==r.basePos&&(r.baseCur=t.token(e,r.base),r.basePos=e.pos),e.start==r.overlayPos&&(e.pos=e.start,r.overlayCur=n.token(e,r.overlay),r.overlayPos=e.pos),e.pos=Math.min(r.basePos,r.overlayPos),null==r.overlayCur?r.baseCur:null!=r.baseCur&&r.overlay.combineTokens||i&&null==r.overlay.combineTokens?r.baseCur+" "+r.overlayCur:r.overlayCur},indent:t.indent&&function(e,n,i){return t.indent(e.base,n,i)},electricChars:t.electricChars,innerMode:function(e){return{state:e.base,mode:t}},blankLine:function(e){var r,o;return t.blankLine&&(r=t.blankLine(e.base)),n.blankLine&&(o=n.blankLine(e.overlay)),null==o?r:i&&null!=r?r+" "+o:o}}}})("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],8:[function(e,t,n){(function(e){"use strict";var t,n,i=e.Pos;function r(e,t){for(var n=function(e){var t=e.flags;return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}(e),i=n,r=0;r<t.length;r++)-1==i.indexOf(t.charAt(r))&&(i+=t.charAt(r));return n==i?e:new RegExp(e.source,i)}function o(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function a(e,t,n){t=r(t,"g");for(var o=n.line,a=n.ch,l=e.lastLine();o<=l;o++,a=0){t.lastIndex=a;var s=e.getLine(o),u=t.exec(s);if(u)return{from:i(o,u.index),to:i(o,u.index+u[0].length),match:u}}}function l(e,t,n){if(!o(t))return a(e,t,n);t=r(t,"gm");for(var l,s=1,u=n.line,c=e.lastLine();u<=c;){for(var d=0;d<s&&!(u>c);d++){var h=e.getLine(u++);l=null==l?h:l+"\n"+h}s*=2,t.lastIndex=n.ch;var f=t.exec(l);if(f){var p=l.slice(0,f.index).split("\n"),m=f[0].split("\n"),g=n.line+p.length-1,v=p[p.length-1].length;return{from:i(g,v),to:i(g+m.length-1,1==m.length?v+m[0].length:m[m.length-1].length),match:f}}}}function s(e,t,n){for(var i,r=0;r<=e.length;){t.lastIndex=r;var o=t.exec(e);if(!o)break;var a=o.index+o[0].length;if(a>e.length-n)break;(!i||a>i.index+i[0].length)&&(i=o),r=o.index+1}return i}function u(e,t,n){t=r(t,"g");for(var o=n.line,a=n.ch,l=e.firstLine();o>=l;o--,a=-1){var u=e.getLine(o),c=s(u,t,a<0?0:u.length-a);if(c)return{from:i(o,c.index),to:i(o,c.index+c[0].length),match:c}}}function c(e,t,n){if(!o(t))return u(e,t,n);t=r(t,"gm");for(var a,l=1,c=e.getLine(n.line).length-n.ch,d=n.line,h=e.firstLine();d>=h;){for(var f=0;f<l&&d>=h;f++){var p=e.getLine(d--);a=null==a?p:p+"\n"+a}l*=2;var m=s(a,t,c);if(m){var g=a.slice(0,m.index).split("\n"),v=m[0].split("\n"),x=d+g.length,y=g[g.length-1].length;return{from:i(x,y),to:i(x+v.length-1,1==v.length?y+v[0].length:v[v.length-1].length),match:m}}}}function d(e,t,n,i){if(e.length==t.length)return n;for(var r=0,o=n+Math.max(0,e.length-t.length);;){if(r==o)return r;var a=r+o>>1,l=i(e.slice(0,a)).length;if(l==n)return a;l>n?o=a:r=a+1}}function h(e,r,o,a){if(!r.length)return null;var l=a?t:n,s=l(r).split(/\r|\n\r?/);e:for(var u=o.line,c=o.ch,h=e.lastLine()+1-s.length;u<=h;u++,c=0){var f=e.getLine(u).slice(c),p=l(f);if(1==s.length){var m=p.indexOf(s[0]);if(-1==m)continue e;return o=d(f,p,m,l)+c,{from:i(u,d(f,p,m,l)+c),to:i(u,d(f,p,m+s[0].length,l)+c)}}var g=p.length-s[0].length;if(p.slice(g)==s[0]){for(var v=1;v<s.length-1;v++)if(l(e.getLine(u+v))!=s[v])continue e;var x=e.getLine(u+s.length-1),y=l(x),b=s[s.length-1];if(y.slice(0,b.length)==b)return{from:i(u,d(f,p,g,l)+c),to:i(u+s.length-1,d(x,y,b.length,l))}}}}function f(e,r,o,a){if(!r.length)return null;var l=a?t:n,s=l(r).split(/\r|\n\r?/);e:for(var u=o.line,c=o.ch,h=e.firstLine()-1+s.length;u>=h;u--,c=-1){var f=e.getLine(u);c>-1&&(f=f.slice(0,c));var p=l(f);if(1==s.length){var m=p.lastIndexOf(s[0]);if(-1==m)continue e;return{from:i(u,d(f,p,m,l)),to:i(u,d(f,p,m+s[0].length,l))}}var g=s[s.length-1];if(p.slice(0,g.length)==g){var v=1;for(o=u-s.length+1;v<s.length-1;v++)if(l(e.getLine(o+v))!=s[v])continue e;var x=e.getLine(u+1-s.length),y=l(x);if(y.slice(y.length-s[0].length)==s[0])return{from:i(u+1-s.length,d(x,y,x.length-s[0].length,l)),to:i(u,d(f,p,g.length,l))}}}}function p(e,t,n,o){var s;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):i(0,0),this.pos={from:n,to:n},"object"==typeof o?s=o.caseFold:(s=o,o=null),"string"==typeof t?(null==s&&(s=!1),this.matches=function(n,i){return(n?f:h)(e,t,i,s)}):(t=r(t,"gm"),o&&!1===o.multiline?this.matches=function(n,i){return(n?u:a)(e,t,i)}:this.matches=function(n,i){return(n?c:l)(e,t,i)})}String.prototype.normalize?(t=function(e){return e.normalize("NFD").toLowerCase()},n=function(e){return e.normalize("NFD")}):(t=function(e){return e.toLowerCase()},n=function(e){return e}),p.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(n=i(n.line,n.ch),t?(n.ch--,n.ch<0&&(n.line--,n.ch=(this.doc.getLine(n.line)||"").length)):(n.ch++,n.ch>(this.doc.getLine(n.line)||"").length&&(n.ch=0,n.line++)),0!=e.cmpPos(n,this.doc.clipPos(n))))return this.atOccurrence=!1;var r=this.matches(t,n);if(this.afterEmptyMatch=r&&0==e.cmpPos(r.from,r.to),r)return this.pos=r,this.atOccurrence=!0,this.pos.match||!0;var o=i(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:o,to:o},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var r=e.splitLines(t);this.doc.replaceRange(r,this.pos.from,this.pos.to,n),this.pos.to=i(this.pos.from.line+r.length-1,r[r.length-1].length+(1==r.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new p(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new p(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var i=[],r=this.getSearchCursor(t,this.getCursor("from"),n);r.findNext()&&!(e.cmpPos(r.to(),this.getCursor("to"))>0);)i.push({anchor:r.from(),head:r.to()});i.length&&this.setSelections(i,0)}))})("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],9:[function(e,t,n){(function(e){"use strict";function t(e){e.state.markedSelection&&e.operation((function(){!function(e){if(!e.somethingSelected())return a(e);if(e.listSelections().length>1)return l(e);var t=e.getCursor("start"),n=e.getCursor("end"),i=e.state.markedSelection;if(!i.length)return o(e,t,n);var s=i[0].find(),u=i[i.length-1].find();if(!s||!u||n.line-t.line<=8||r(t,u.to)>=0||r(n,s.from)<=0)return l(e);for(;r(t,s.from)>0;)i.shift().clear(),s=i[0].find();for(r(t,s.from)<0&&(s.to.line-t.line<8?(i.shift().clear(),o(e,t,s.to,0)):o(e,t,s.from,0));r(n,u.to)<0;)i.pop().clear(),u=i[i.length-1].find();r(n,u.to)>0&&(n.line-u.from.line<8?(i.pop().clear(),o(e,u.from,n)):o(e,u.to,n))}(e)}))}function n(e){e.state.markedSelection&&e.state.markedSelection.length&&e.operation((function(){a(e)}))}e.defineOption("styleSelectedText",!1,(function(i,r,o){var s=o&&o!=e.Init;r&&!s?(i.state.markedSelection=[],i.state.markedSelectionStyle="string"==typeof r?r:"CodeMirror-selectedtext",l(i),i.on("cursorActivity",t),i.on("change",n)):!r&&s&&(i.off("cursorActivity",t),i.off("change",n),a(i),i.state.markedSelection=i.state.markedSelectionStyle=null)}));var i=e.Pos,r=e.cmpPos;function o(e,t,n,o){if(0!=r(t,n))for(var a=e.state.markedSelection,l=e.state.markedSelectionStyle,s=t.line;;){var u=s==t.line?t:i(s,0),c=s+8,d=c>=n.line,h=d?n:i(c,0),f=e.markText(u,h,{className:l});if(null==o?a.push(f):a.splice(o++,0,f),d)break;s=c}}function a(e){for(var t=e.state.markedSelection,n=0;n<t.length;++n)t[n].clear();t.length=0}function l(e){a(e);for(var t=e.listSelections(),n=0;n<t.length;n++)o(e,t[n].from(),t[n].to())}})("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],10:[function(e,t,n){!function(e,i){"object"==typeof n&&void 0!==t?t.exports=i():(e=e||self).CodeMirror=i()}(this,(function(){"use strict";var e=navigator.userAgent,t=navigator.platform,n=/gecko\/\d/i.test(e),i=/MSIE \d/.test(e),r=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),o=/Edge\/(\d+)/.exec(e),a=i||r||o,l=a&&(i?document.documentMode||6:+(o||r)[1]),s=!o&&/WebKit\//.test(e),u=s&&/Qt\/\d+\.\d+/.test(e),c=!o&&/Chrome\/(\d+)/.exec(e),d=c&&+c[1],h=/Opera\//.test(e),f=/Apple Computer/.test(navigator.vendor),p=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),m=/PhantomJS/.test(e),g=f&&(/Mobile\/\w+/.test(e)||navigator.maxTouchPoints>2),v=/Android/.test(e),x=g||v||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),y=g||/Mac/.test(t),b=/\bCrOS\b/.test(e),D=/win/i.test(t),C=h&&e.match(/Version\/(\d*\.\d*)/);C&&(C=Number(C[1])),C&&C>=15&&(h=!1,s=!0);var w=y&&(u||h&&(null==C||C<12.11)),k=n||a&&l>=9;function S(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var F,A=function(e,t){var n=e.className,i=S(t).exec(n);if(i){var r=n.slice(i.index+i[0].length);e.className=n.slice(0,i.index)+(r?i[1]+r:"")}};function E(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild);return e}function L(e,t){return E(e).appendChild(t)}function T(e,t,n,i){var r=document.createElement(e);if(n&&(r.className=n),i&&(r.style.cssText=i),"string"==typeof t)r.appendChild(document.createTextNode(t));else if(t)for(var o=0;o<t.length;++o)r.appendChild(t[o]);return r}function M(e,t,n,i){var r=T(e,t,n,i);return r.setAttribute("role","presentation"),r}function B(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t);do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function N(e){var t;try{t=e.activeElement}catch(n){t=e.body||null}for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function O(e,t){var n=e.className;S(t).test(n)||(e.className+=(n?" ":"")+t)}function I(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)n[i]&&!S(n[i]).test(t)&&(t+=" "+n[i]);return t}F=document.createRange?function(e,t,n,i){var r=document.createRange();return r.setEnd(i||e,n),r.setStart(e,t),r}:function(e,t,n){var i=document.body.createTextRange();try{i.moveToElementText(e.parentNode)}catch(e){return i}return i.collapse(!0),i.moveEnd("character",n),i.moveStart("character",t),i};var z=function(e){e.select()};function H(e){return e.display.wrapper.ownerDocument}function R(e){return H(e).defaultView}function P(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t)}}function _(e,t,n){for(var i in t||(t={}),e)!e.hasOwnProperty(i)||!1===n&&t.hasOwnProperty(i)||(t[i]=e[i]);return t}function W(e,t,n,i,r){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length);for(var o=i||0,a=r||0;;){var l=e.indexOf("\t",o);if(l<0||l>=t)return a+(t-o);a+=l-o,a+=n-a%n,o=l+1}}g?z=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:a&&(z=function(e){try{e.select()}catch(e){}});var j=function(){this.id=null,this.f=null,this.time=0,this.handler=P(this.onTimeout,this)};function q(e,t){for(var n=0;n<e.length;++n)if(e[n]==t)return n;return-1}j.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},j.prototype.set=function(e,t){this.f=t;var n=+new Date+e;(!this.id||n<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=n)};var U={toString:function(){return"CodeMirror.Pass"}},$={scroll:!1},G={origin:"*mouse"},V={origin:"+move"};function X(e,t,n){for(var i=0,r=0;;){var o=e.indexOf("\t",i);-1==o&&(o=e.length);var a=o-i;if(o==e.length||r+a>=t)return i+Math.min(a,t-r);if(r+=o-i,i=o+1,(r+=n-r%n)>=t)return i}}var K=[""];function Z(e){for(;K.length<=e;)K.push(Y(K)+" ");return K[e]}function Y(e){return e[e.length-1]}function Q(e,t){for(var n=[],i=0;i<e.length;i++)n[i]=t(e[i],i);return n}function J(){}function ee(e,t){var n;return Object.create?n=Object.create(e):(J.prototype=e,n=new J),t&&_(t,n),n}var te=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;function ne(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||te.test(e))}function ie(e,t){return t?!!(t.source.indexOf("\\w")>-1&&ne(e))||t.test(e):ne(e)}function re(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1;return!0}var oe=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;function ae(e){return e.charCodeAt(0)>=768&&oe.test(e)}function le(e,t,n){for(;(n<0?t>0:t<e.length)&&ae(e.charAt(t));)t+=n;return t}function se(e,t,n){for(var i=t>n?-1:1;;){if(t==n)return t;var r=(t+n)/2,o=i<0?Math.ceil(r):Math.floor(r);if(o==t)return e(o)?t:n;e(o)?n=o:t=o+i}}var ue=null;function ce(e,t,n){var i;ue=null;for(var r=0;r<e.length;++r){var o=e[r];if(o.from<t&&o.to>t)return r;o.to==t&&(o.from!=o.to&&"before"==n?i=r:ue=r),o.from==t&&(o.from!=o.to&&"before"!=n?i=r:ue=r)}return null!=i?i:ue}var de=function(){var e=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,t=/[stwN]/,n=/[LRr]/,i=/[Lb1n]/,r=/[1n]/;function o(e,t,n){this.level=e,this.from=t,this.to=n}return function(a,l){var s="ltr"==l?"L":"R";if(0==a.length||"ltr"==l&&!e.test(a))return!1;for(var u,c=a.length,d=[],h=0;h<c;++h)d.push((u=a.charCodeAt(h))<=247?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(u):1424<=u&&u<=1524?"R":1536<=u&&u<=1785?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(u-1536):1774<=u&&u<=2220?"r":8192<=u&&u<=8203?"w":8204==u?"b":"L");for(var f=0,p=s;f<c;++f){var m=d[f];"m"==m?d[f]=p:p=m}for(var g=0,v=s;g<c;++g){var x=d[g];"1"==x&&"r"==v?d[g]="n":n.test(x)&&(v=x,"r"==x&&(d[g]="R"))}for(var y=1,b=d[0];y<c-1;++y){var D=d[y];"+"==D&&"1"==b&&"1"==d[y+1]?d[y]="1":","!=D||b!=d[y+1]||"1"!=b&&"n"!=b||(d[y]=b),b=D}for(var C=0;C<c;++C){var w=d[C];if(","==w)d[C]="N";else if("%"==w){var k=void 0;for(k=C+1;k<c&&"%"==d[k];++k);for(var S=C&&"!"==d[C-1]||k<c&&"1"==d[k]?"1":"N",F=C;F<k;++F)d[F]=S;C=k-1}}for(var A=0,E=s;A<c;++A){var L=d[A];"L"==E&&"1"==L?d[A]="L":n.test(L)&&(E=L)}for(var T=0;T<c;++T)if(t.test(d[T])){var M=void 0;for(M=T+1;M<c&&t.test(d[M]);++M);for(var B="L"==(T?d[T-1]:s),N=B==("L"==(M<c?d[M]:s))?B?"L":"R":s,O=T;O<M;++O)d[O]=N;T=M-1}for(var I,z=[],H=0;H<c;)if(i.test(d[H])){var R=H;for(++H;H<c&&i.test(d[H]);++H);z.push(new o(0,R,H))}else{var P=H,_=z.length,W="rtl"==l?1:0;for(++H;H<c&&"L"!=d[H];++H);for(var j=P;j<H;)if(r.test(d[j])){P<j&&(z.splice(_,0,new o(1,P,j)),_+=W);var q=j;for(++j;j<H&&r.test(d[j]);++j);z.splice(_,0,new o(2,q,j)),_+=W,P=j}else++j;P<H&&z.splice(_,0,new o(1,P,H))}return"ltr"==l&&(1==z[0].level&&(I=a.match(/^\s+/))&&(z[0].from=I[0].length,z.unshift(new o(0,0,I[0].length))),1==Y(z).level&&(I=a.match(/\s+$/))&&(Y(z).to-=I[0].length,z.push(new o(0,c-I[0].length,c)))),"rtl"==l?z.reverse():z}}();function he(e,t){var n=e.order;return null==n&&(n=e.order=de(e.text,t)),n}var fe=[],pe=function(e,t,n){if(e.addEventListener)e.addEventListener(t,n,!1);else if(e.attachEvent)e.attachEvent("on"+t,n);else{var i=e._handlers||(e._handlers={});i[t]=(i[t]||fe).concat(n)}};function me(e,t){return e._handlers&&e._handlers[t]||fe}function ge(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n,!1);else if(e.detachEvent)e.detachEvent("on"+t,n);else{var i=e._handlers,r=i&&i[t];if(r){var o=q(r,n);o>-1&&(i[t]=r.slice(0,o).concat(r.slice(o+1)))}}}function ve(e,t){var n=me(e,t);if(n.length)for(var i=Array.prototype.slice.call(arguments,2),r=0;r<n.length;++r)n[r].apply(null,i)}function xe(e,t,n){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),ve(e,n||t.type,e,t),ke(t)||t.codemirrorIgnore}function ye(e){var t=e._handlers&&e._handlers.cursorActivity;if(t)for(var n=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),i=0;i<t.length;++i)-1==q(n,t[i])&&n.push(t[i])}function be(e,t){return me(e,t).length>0}function De(e){e.prototype.on=function(e,t){pe(this,e,t)},e.prototype.off=function(e,t){ge(this,e,t)}}function Ce(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function we(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function ke(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Se(e){Ce(e),we(e)}function Fe(e){return e.target||e.srcElement}function Ae(e){var t=e.which;return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),y&&e.ctrlKey&&1==t&&(t=3),t}var Ee,Le,Te=function(){if(a&&l<9)return!1;var e=T("div");return"draggable"in e||"dragDrop"in e}();function Me(e){if(null==Ee){var t=T("span","​");L(e,T("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Ee=t.offsetWidth<=1&&t.offsetHeight>2&&!(a&&l<8))}var n=Ee?T("span","​"):T("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return n.setAttribute("cm-text",""),n}function Be(e){if(null!=Le)return Le;var t=L(e,document.createTextNode("AخA")),n=F(t,0,1).getBoundingClientRect(),i=F(t,1,2).getBoundingClientRect();return E(e),!(!n||n.left==n.right)&&(Le=i.right-n.right<3)}var Ne,Oe=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,n=[],i=e.length;t<=i;){var r=e.indexOf("\n",t);-1==r&&(r=e.length);var o=e.slice(t,"\r"==e.charAt(r-1)?r-1:r),a=o.indexOf("\r");-1!=a?(n.push(o.slice(0,a)),t+=a+1):(n.push(o),t=r+1)}return n}:function(e){return e.split(/\r\n?|\n/)},Ie=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t;try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},ze="oncopy"in(Ne=T("div"))||(Ne.setAttribute("oncopy","return;"),"function"==typeof Ne.oncopy),He=null;var Re={},Pe={};function _e(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Re[e]=t}function We(e){if("string"==typeof e&&Pe.hasOwnProperty(e))e=Pe[e];else if(e&&"string"==typeof e.name&&Pe.hasOwnProperty(e.name)){var t=Pe[e.name];"string"==typeof t&&(t={name:t}),(e=ee(t,e)).name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return We("application/xml");if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return We("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function je(e,t){t=We(t);var n=Re[t.name];if(!n)return je(e,"text/plain");var i=n(e,t);if(qe.hasOwnProperty(t.name)){var r=qe[t.name];for(var o in r)r.hasOwnProperty(o)&&(i.hasOwnProperty(o)&&(i["_"+o]=i[o]),i[o]=r[o])}if(i.name=t.name,t.helperType&&(i.helperType=t.helperType),t.modeProps)for(var a in t.modeProps)i[a]=t.modeProps[a];return i}var qe={};function Ue(e,t){_(t,qe.hasOwnProperty(e)?qe[e]:qe[e]={})}function $e(e,t){if(!0===t)return t;if(e.copyState)return e.copyState(t);var n={};for(var i in t){var r=t[i];r instanceof Array&&(r=r.concat([])),n[i]=r}return n}function Ge(e,t){for(var n;e.innerMode&&(n=e.innerMode(t))&&n.mode!=e;)t=n.state,e=n.mode;return n||{mode:e,state:t}}function Ve(e,t,n){return!e.startState||e.startState(t,n)}var Xe=function(e,t,n){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=n};function Ke(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.");for(var n=e;!n.lines;)for(var i=0;;++i){var r=n.children[i],o=r.chunkSize();if(t<o){n=r;break}t-=o}return n.lines[t]}function Ze(e,t,n){var i=[],r=t.line;return e.iter(t.line,n.line+1,(function(e){var o=e.text;r==n.line&&(o=o.slice(0,n.ch)),r==t.line&&(o=o.slice(t.ch)),i.push(o),++r})),i}function Ye(e,t,n){var i=[];return e.iter(t,n,(function(e){i.push(e.text)})),i}function Qe(e,t){var n=t-e.height;if(n)for(var i=e;i;i=i.parent)i.height+=n}function Je(e){if(null==e.parent)return null;for(var t=e.parent,n=q(t.lines,e),i=t.parent;i;t=i,i=i.parent)for(var r=0;i.children[r]!=t;++r)n+=i.children[r].chunkSize();return n+t.first}function et(e,t){var n=e.first;e:do{for(var i=0;i<e.children.length;++i){var r=e.children[i],o=r.height;if(t<o){e=r;continue e}t-=o,n+=r.chunkSize()}return n}while(!e.lines);for(var a=0;a<e.lines.length;++a){var l=e.lines[a].height;if(t<l)break;t-=l}return n+a}function tt(e,t){return t>=e.first&&t<e.first+e.size}function nt(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function it(e,t,n){if(void 0===n&&(n=null),!(this instanceof it))return new it(e,t,n);this.line=e,this.ch=t,this.sticky=n}function rt(e,t){return e.line-t.line||e.ch-t.ch}function ot(e,t){return e.sticky==t.sticky&&0==rt(e,t)}function at(e){return it(e.line,e.ch)}function lt(e,t){return rt(e,t)<0?t:e}function st(e,t){return rt(e,t)<0?e:t}function ut(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function ct(e,t){if(t.line<e.first)return it(e.first,0);var n=e.first+e.size-1;return t.line>n?it(n,Ke(e,n).text.length):function(e,t){var n=e.ch;return null==n||n>t?it(e.line,t):n<0?it(e.line,0):e}(t,Ke(e,t.line).text.length)}function dt(e,t){for(var n=[],i=0;i<t.length;i++)n[i]=ct(e,t[i]);return n}Xe.prototype.eol=function(){return this.pos>=this.string.length},Xe.prototype.sol=function(){return this.pos==this.lineStart},Xe.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Xe.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Xe.prototype.eat=function(e){var t=this.string.charAt(this.pos);if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},Xe.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},Xe.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},Xe.prototype.skipToEnd=function(){this.pos=this.string.length},Xe.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos);if(t>-1)return this.pos=t,!0},Xe.prototype.backUp=function(e){this.pos-=e},Xe.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=W(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?W(this.string,this.lineStart,this.tabSize):0)},Xe.prototype.indentation=function(){return W(this.string,null,this.tabSize)-(this.lineStart?W(this.string,this.lineStart,this.tabSize):0)},Xe.prototype.match=function(e,t,n){if("string"!=typeof e){var i=this.string.slice(this.pos).match(e);return i&&i.index>0?null:(i&&!1!==t&&(this.pos+=i[0].length),i)}var r=function(e){return n?e.toLowerCase():e};if(r(this.string.substr(this.pos,e.length))==r(e))return!1!==t&&(this.pos+=e.length),!0},Xe.prototype.current=function(){return this.string.slice(this.start,this.pos)},Xe.prototype.hideFirstChars=function(e,t){this.lineStart+=e;try{return t()}finally{this.lineStart-=e}},Xe.prototype.lookAhead=function(e){var t=this.lineOracle;return t&&t.lookAhead(e)},Xe.prototype.baseToken=function(){var e=this.lineOracle;return e&&e.baseToken(this.pos)};var ht=function(e,t){this.state=e,this.lookAhead=t},ft=function(e,t,n,i){this.state=t,this.doc=e,this.line=n,this.maxLookAhead=i||0,this.baseTokens=null,this.baseTokenPos=1};function pt(e,t,n,i){var r=[e.state.modeGen],o={};wt(e,t.text,e.doc.mode,n,(function(e,t){return r.push(e,t)}),o,i);for(var a=n.state,l=function(i){n.baseTokens=r;var l=e.state.overlays[i],s=1,u=0;n.state=!0,wt(e,t.text,l.mode,n,(function(e,t){for(var n=s;u<e;){var i=r[s];i>e&&r.splice(s,1,e,r[s+1],i),s+=2,u=Math.min(e,i)}if(t)if(l.opaque)r.splice(n,s-n,e,"overlay "+t),s=n+2;else for(;n<s;n+=2){var o=r[n+1];r[n+1]=(o?o+" ":"")+"overlay "+t}}),o),n.state=a,n.baseTokens=null,n.baseTokenPos=1},s=0;s<e.state.overlays.length;++s)l(s);return{styles:r,classes:o.bgClass||o.textClass?o:null}}function mt(e,t,n){if(!t.styles||t.styles[0]!=e.state.modeGen){var i=gt(e,Je(t)),r=t.text.length>e.options.maxHighlightLength&&$e(e.doc.mode,i.state),o=pt(e,t,i);r&&(i.state=r),t.stateAfter=i.save(!r),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),n===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function gt(e,t,n){var i=e.doc,r=e.display;if(!i.mode.startState)return new ft(i,!0,t);var o=function(e,t,n){for(var i,r,o=e.doc,a=n?-1:t-(e.doc.mode.innerMode?1e3:100),l=t;l>a;--l){if(l<=o.first)return o.first;var s=Ke(o,l-1),u=s.stateAfter;if(u&&(!n||l+(u instanceof ht?u.lookAhead:0)<=o.modeFrontier))return l;var c=W(s.text,null,e.options.tabSize);(null==r||i>c)&&(r=l-1,i=c)}return r}(e,t,n),a=o>i.first&&Ke(i,o-1).stateAfter,l=a?ft.fromSaved(i,a,o):new ft(i,Ve(i.mode),o);return i.iter(o,t,(function(n){vt(e,n.text,l);var i=l.line;n.stateAfter=i==t-1||i%5==0||i>=r.viewFrom&&i<r.viewTo?l.save():null,l.nextLine()})),n&&(i.modeFrontier=l.line),l}function vt(e,t,n,i){var r=e.doc.mode,o=new Xe(t,e.options.tabSize,n);for(o.start=o.pos=i||0,""==t&&xt(r,n.state);!o.eol();)yt(r,o,n.state),o.start=o.pos}function xt(e,t){if(e.blankLine)return e.blankLine(t);if(e.innerMode){var n=Ge(e,t);return n.mode.blankLine?n.mode.blankLine(n.state):void 0}}function yt(e,t,n,i){for(var r=0;r<10;r++){i&&(i[0]=Ge(e,n).mode);var o=e.token(t,n);if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}ft.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e);return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},ft.prototype.baseToken=function(e){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2;var t=this.baseTokens[this.baseTokenPos+1];return{type:t&&t.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},ft.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},ft.fromSaved=function(e,t,n){return t instanceof ht?new ft(e,$e(e.mode,t.state),n,t.lookAhead):new ft(e,$e(e.mode,t),n)},ft.prototype.save=function(e){var t=!1!==e?$e(this.doc.mode,this.state):this.state;return this.maxLookAhead>0?new ht(t,this.maxLookAhead):t};var bt=function(e,t,n){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=n};function Dt(e,t,n,i){var r,o,a=e.doc,l=a.mode,s=Ke(a,(t=ct(a,t)).line),u=gt(e,t.line,n),c=new Xe(s.text,e.options.tabSize,u);for(i&&(o=[]);(i||c.pos<t.ch)&&!c.eol();)c.start=c.pos,r=yt(l,c,u.state),i&&o.push(new bt(c,r,$e(a.mode,u.state)));return i?o:new bt(c,r,u.state)}function Ct(e,t){if(e)for(;;){var n=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!n)break;e=e.slice(0,n.index)+e.slice(n.index+n[0].length);var i=n[1]?"bgClass":"textClass";null==t[i]?t[i]=n[2]:new RegExp("(?:^|\\s)"+n[2]+"(?:$|\\s)").test(t[i])||(t[i]+=" "+n[2])}return e}function wt(e,t,n,i,r,o,a){var l=n.flattenSpans;null==l&&(l=e.options.flattenSpans);var s,u=0,c=null,d=new Xe(t,e.options.tabSize,i),h=e.options.addModeClass&&[null];for(""==t&&Ct(xt(n,i.state),o);!d.eol();){if(d.pos>e.options.maxHighlightLength?(l=!1,a&&vt(e,t,i,d.pos),d.pos=t.length,s=null):s=Ct(yt(n,d,i.state,h),o),h){var f=h[0].name;f&&(s="m-"+(s?f+" "+s:f))}if(!l||c!=s){for(;u<d.start;)r(u=Math.min(d.start,u+5e3),c);c=s}d.start=d.pos}for(;u<d.pos;){var p=Math.min(d.pos,u+5e3);r(p,c),u=p}}var kt=!1,St=!1;function Ft(e,t,n){this.marker=e,this.from=t,this.to=n}function At(e,t){if(e)for(var n=0;n<e.length;++n){var i=e[n];if(i.marker==t)return i}}function Et(e,t){for(var n,i=0;i<e.length;++i)e[i]!=t&&(n||(n=[])).push(e[i]);return n}function Lt(e,t){if(t.full)return null;var n=tt(e,t.from.line)&&Ke(e,t.from.line).markedSpans,i=tt(e,t.to.line)&&Ke(e,t.to.line).markedSpans;if(!n&&!i)return null;var r=t.from.ch,o=t.to.ch,a=0==rt(t.from,t.to),l=function(e,t,n){var i;if(e)for(var r=0;r<e.length;++r){var o=e[r],a=o.marker;if(null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==a.type&&(!n||!o.marker.insertLeft)){var l=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(i||(i=[])).push(new Ft(a,o.from,l?null:o.to))}}return i}(n,r,a),s=function(e,t,n){var i;if(e)for(var r=0;r<e.length;++r){var o=e[r],a=o.marker;if(null==o.to||(a.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==a.type&&(!n||o.marker.insertLeft)){var l=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(i||(i=[])).push(new Ft(a,l?null:o.from-t,null==o.to?null:o.to-t))}}return i}(i,o,a),u=1==t.text.length,c=Y(t.text).length+(u?r:0);if(l)for(var d=0;d<l.length;++d){var h=l[d];if(null==h.to){var f=At(s,h.marker);f?u&&(h.to=null==f.to?null:f.to+c):h.to=r}}if(s)for(var p=0;p<s.length;++p){var m=s[p];if(null!=m.to&&(m.to+=c),null==m.from)At(l,m.marker)||(m.from=c,u&&(l||(l=[])).push(m));else m.from+=c,u&&(l||(l=[])).push(m)}l&&(l=Tt(l)),s&&s!=l&&(s=Tt(s));var g=[l];if(!u){var v,x=t.text.length-2;if(x>0&&l)for(var y=0;y<l.length;++y)null==l[y].to&&(v||(v=[])).push(new Ft(l[y].marker,null,null));for(var b=0;b<x;++b)g.push(v);g.push(s)}return g}function Tt(e){for(var t=0;t<e.length;++t){var n=e[t];null!=n.from&&n.from==n.to&&!1!==n.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function Mt(e){var t=e.markedSpans;if(t){for(var n=0;n<t.length;++n)t[n].marker.detachLine(e);e.markedSpans=null}}function Bt(e,t){if(t){for(var n=0;n<t.length;++n)t[n].marker.attachLine(e);e.markedSpans=t}}function Nt(e){return e.inclusiveLeft?-1:0}function Ot(e){return e.inclusiveRight?1:0}function It(e,t){var n=e.lines.length-t.lines.length;if(0!=n)return n;var i=e.find(),r=t.find(),o=rt(i.from,r.from)||Nt(e)-Nt(t);if(o)return-o;var a=rt(i.to,r.to)||Ot(e)-Ot(t);return a||t.id-e.id}function zt(e,t){var n,i=St&&e.markedSpans;if(i)for(var r=void 0,o=0;o<i.length;++o)(r=i[o]).marker.collapsed&&null==(t?r.from:r.to)&&(!n||It(n,r.marker)<0)&&(n=r.marker);return n}function Ht(e){return zt(e,!0)}function Rt(e){return zt(e,!1)}function Pt(e,t){var n,i=St&&e.markedSpans;if(i)for(var r=0;r<i.length;++r){var o=i[r];o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!n||It(n,o.marker)<0)&&(n=o.marker)}return n}function _t(e,t,n,i,r){var o=Ke(e,t),a=St&&o.markedSpans;if(a)for(var l=0;l<a.length;++l){var s=a[l];if(s.marker.collapsed){var u=s.marker.find(0),c=rt(u.from,n)||Nt(s.marker)-Nt(r),d=rt(u.to,i)||Ot(s.marker)-Ot(r);if(!(c>=0&&d<=0||c<=0&&d>=0)&&(c<=0&&(s.marker.inclusiveRight&&r.inclusiveLeft?rt(u.to,n)>=0:rt(u.to,n)>0)||c>=0&&(s.marker.inclusiveRight&&r.inclusiveLeft?rt(u.from,i)<=0:rt(u.from,i)<0)))return!0}}}function Wt(e){for(var t;t=Ht(e);)e=t.find(-1,!0).line;return e}function jt(e,t){var n=Ke(e,t),i=Wt(n);return n==i?t:Je(i)}function qt(e,t){if(t>e.lastLine())return t;var n,i=Ke(e,t);if(!Ut(e,i))return t;for(;n=Rt(i);)i=n.find(1,!0).line;return Je(i)+1}function Ut(e,t){var n=St&&t.markedSpans;if(n)for(var i=void 0,r=0;r<n.length;++r)if((i=n[r]).marker.collapsed){if(null==i.from)return!0;if(!i.marker.widgetNode&&0==i.from&&i.marker.inclusiveLeft&&$t(e,t,i))return!0}}function $t(e,t,n){if(null==n.to){var i=n.marker.find(1,!0);return $t(e,i.line,At(i.line.markedSpans,n.marker))}if(n.marker.inclusiveRight&&n.to==t.text.length)return!0;for(var r=void 0,o=0;o<t.markedSpans.length;++o)if((r=t.markedSpans[o]).marker.collapsed&&!r.marker.widgetNode&&r.from==n.to&&(null==r.to||r.to!=n.from)&&(r.marker.inclusiveLeft||n.marker.inclusiveRight)&&$t(e,t,r))return!0}function Gt(e){for(var t=0,n=(e=Wt(e)).parent,i=0;i<n.lines.length;++i){var r=n.lines[i];if(r==e)break;t+=r.height}for(var o=n.parent;o;o=(n=o).parent)for(var a=0;a<o.children.length;++a){var l=o.children[a];if(l==n)break;t+=l.height}return t}function Vt(e){if(0==e.height)return 0;for(var t,n=e.text.length,i=e;t=Ht(i);){var r=t.find(0,!0);i=r.from.line,n+=r.from.ch-r.to.ch}for(i=e;t=Rt(i);){var o=t.find(0,!0);n-=i.text.length-o.from.ch,n+=(i=o.to.line).text.length-o.to.ch}return n}function Xt(e){var t=e.display,n=e.doc;t.maxLine=Ke(n,n.first),t.maxLineLength=Vt(t.maxLine),t.maxLineChanged=!0,n.iter((function(e){var n=Vt(e);n>t.maxLineLength&&(t.maxLineLength=n,t.maxLine=e)}))}var Kt=function(e,t,n){this.text=e,Bt(this,t),this.height=n?n(this):1};function Zt(e){e.parent=null,Mt(e)}Kt.prototype.lineNo=function(){return Je(this)},De(Kt);var Yt={},Qt={};function Jt(e,t){if(!e||/^\s*$/.test(e))return null;var n=t.addModeClass?Qt:Yt;return n[e]||(n[e]=e.replace(/\S+/g,"cm-$&"))}function en(e,t){var n=M("span",null,null,s?"padding-right: .1px":null),i={pre:M("pre",[n],"CodeMirror-line"),content:n,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")};t.measure={};for(var r=0;r<=(t.rest?t.rest.length:0);r++){var o=r?t.rest[r-1]:t.line,a=void 0;i.pos=0,i.addToken=nn,Be(e.display.measure)&&(a=he(o,e.doc.direction))&&(i.addToken=rn(i.addToken,a)),i.map=[],an(o,i,mt(e,o,t!=e.display.externalMeasured&&Je(o))),o.styleClasses&&(o.styleClasses.bgClass&&(i.bgClass=I(o.styleClasses.bgClass,i.bgClass||"")),o.styleClasses.textClass&&(i.textClass=I(o.styleClasses.textClass,i.textClass||""))),0==i.map.length&&i.map.push(0,0,i.content.appendChild(Me(e.display.measure))),0==r?(t.measure.map=i.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(i.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(s){var l=i.content.lastChild;(/\bcm-tab\b/.test(l.className)||l.querySelector&&l.querySelector(".cm-tab"))&&(i.content.className="cm-tab-wrap-hack")}return ve(e,"renderLine",e,t.line,i.pre),i.pre.className&&(i.textClass=I(i.pre.className,i.textClass||"")),i}function tn(e){var t=T("span","•","cm-invalidchar");return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function nn(e,t,n,i,r,o,s){if(t){var u,c=e.splitSpaces?function(e,t){if(e.length>1&&!/  /.test(e))return e;for(var n=t,i="",r=0;r<e.length;r++){var o=e.charAt(r);" "!=o||!n||r!=e.length-1&&32!=e.charCodeAt(r+1)||(o=" "),i+=o,n=" "==o}return i}(t,e.trailingSpace):t,d=e.cm.state.specialChars,h=!1;if(d.test(t)){u=document.createDocumentFragment();for(var f=0;;){d.lastIndex=f;var p=d.exec(t),m=p?p.index-f:t.length-f;if(m){var g=document.createTextNode(c.slice(f,f+m));a&&l<9?u.appendChild(T("span",[g])):u.appendChild(g),e.map.push(e.pos,e.pos+m,g),e.col+=m,e.pos+=m}if(!p)break;f+=m+1;var v=void 0;if("\t"==p[0]){var x=e.cm.options.tabSize,y=x-e.col%x;(v=u.appendChild(T("span",Z(y),"cm-tab"))).setAttribute("role","presentation"),v.setAttribute("cm-text","\t"),e.col+=y}else"\r"==p[0]||"\n"==p[0]?((v=u.appendChild(T("span","\r"==p[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",p[0]),e.col+=1):((v=e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text",p[0]),a&&l<9?u.appendChild(T("span",[v])):u.appendChild(v),e.col+=1);e.map.push(e.pos,e.pos+1,v),e.pos++}}else e.col+=t.length,u=document.createTextNode(c),e.map.push(e.pos,e.pos+t.length,u),a&&l<9&&(h=!0),e.pos+=t.length;if(e.trailingSpace=32==c.charCodeAt(t.length-1),n||i||r||h||o||s){var b=n||"";i&&(b+=i),r&&(b+=r);var D=T("span",[u],b,o);if(s)for(var C in s)s.hasOwnProperty(C)&&"style"!=C&&"class"!=C&&D.setAttribute(C,s[C]);return e.content.appendChild(D)}e.content.appendChild(u)}}function rn(e,t){return function(n,i,r,o,a,l,s){r=r?r+" cm-force-border":"cm-force-border";for(var u=n.pos,c=u+i.length;;){for(var d=void 0,h=0;h<t.length&&!((d=t[h]).to>u&&d.from<=u);h++);if(d.to>=c)return e(n,i,r,o,a,l,s);e(n,i.slice(0,d.to-u),r,o,null,l,s),o=null,i=i.slice(d.to-u),u=d.to}}}function on(e,t,n,i){var r=!i&&n.widgetNode;r&&e.map.push(e.pos,e.pos+t,r),!i&&e.cm.display.input.needsContentAttribute&&(r||(r=e.content.appendChild(document.createElement("span"))),r.setAttribute("cm-marker",n.id)),r&&(e.cm.display.input.setUneditable(r),e.content.appendChild(r)),e.pos+=t,e.trailingSpace=!1}function an(e,t,n){var i=e.markedSpans,r=e.text,o=0;if(i)for(var a,l,s,u,c,d,h,f=r.length,p=0,m=1,g="",v=0;;){if(v==p){s=u=c=l="",h=null,d=null,v=1/0;for(var x=[],y=void 0,b=0;b<i.length;++b){var D=i[b],C=D.marker;if("bookmark"==C.type&&D.from==p&&C.widgetNode)x.push(C);else if(D.from<=p&&(null==D.to||D.to>p||C.collapsed&&D.to==p&&D.from==p)){if(null!=D.to&&D.to!=p&&v>D.to&&(v=D.to,u=""),C.className&&(s+=" "+C.className),C.css&&(l=(l?l+";":"")+C.css),C.startStyle&&D.from==p&&(c+=" "+C.startStyle),C.endStyle&&D.to==v&&(y||(y=[])).push(C.endStyle,D.to),C.title&&((h||(h={})).title=C.title),C.attributes)for(var w in C.attributes)(h||(h={}))[w]=C.attributes[w];C.collapsed&&(!d||It(d.marker,C)<0)&&(d=D)}else D.from>p&&v>D.from&&(v=D.from)}if(y)for(var k=0;k<y.length;k+=2)y[k+1]==v&&(u+=" "+y[k]);if(!d||d.from==p)for(var S=0;S<x.length;++S)on(t,0,x[S]);if(d&&(d.from||0)==p){if(on(t,(null==d.to?f+1:d.to)-p,d.marker,null==d.from),null==d.to)return;d.to==p&&(d=!1)}}if(p>=f)break;for(var F=Math.min(f,v);;){if(g){var A=p+g.length;if(!d){var E=A>F?g.slice(0,F-p):g;t.addToken(t,E,a?a+s:s,c,p+E.length==v?u:"",l,h)}if(A>=F){g=g.slice(F-p),p=F;break}p=A,c=""}g=r.slice(o,o=n[m++]),a=Jt(n[m++],t.cm.options)}}else for(var L=1;L<n.length;L+=2)t.addToken(t,r.slice(o,o=n[L]),Jt(n[L+1],t.cm.options))}function ln(e,t,n){this.line=t,this.rest=function(e){for(var t,n;t=Rt(e);)e=t.find(1,!0).line,(n||(n=[])).push(e);return n}(t),this.size=this.rest?Je(Y(this.rest))-n+1:1,this.node=this.text=null,this.hidden=Ut(e,t)}function sn(e,t,n){for(var i,r=[],o=t;o<n;o=i){var a=new ln(e.doc,Ke(e.doc,o),o);i=o+a.size,r.push(a)}return r}var un=null;var cn=null;function dn(e,t){var n=me(e,t);if(n.length){var i,r=Array.prototype.slice.call(arguments,2);un?i=un.delayedCallbacks:cn?i=cn:(i=cn=[],setTimeout(hn,0));for(var o=function(e){i.push((function(){return n[e].apply(null,r)}))},a=0;a<n.length;++a)o(a)}}function hn(){var e=cn;cn=null;for(var t=0;t<e.length;++t)e[t]()}function fn(e,t,n,i){for(var r=0;r<t.changes.length;r++){var o=t.changes[r];"text"==o?gn(e,t):"gutter"==o?xn(e,t,n,i):"class"==o?vn(e,t):"widget"==o&&yn(e,t,i)}t.changes=null}function pn(e){return e.node==e.text&&(e.node=T("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),a&&l<8&&(e.node.style.zIndex=2)),e.node}function mn(e,t){var n=e.display.externalMeasured;return n&&n.line==t.line?(e.display.externalMeasured=null,t.measure=n.measure,n.built):en(e,t)}function gn(e,t){var n=t.text.className,i=mn(e,t);t.text==t.node&&(t.node=i.pre),t.text.parentNode.replaceChild(i.pre,t.text),t.text=i.pre,i.bgClass!=t.bgClass||i.textClass!=t.textClass?(t.bgClass=i.bgClass,t.textClass=i.textClass,vn(e,t)):n&&(t.text.className=n)}function vn(e,t){!function(e,t){var n=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass;if(n&&(n+=" CodeMirror-linebackground"),t.background)n?t.background.className=n:(t.background.parentNode.removeChild(t.background),t.background=null);else if(n){var i=pn(t);t.background=i.insertBefore(T("div",null,n),i.firstChild),e.display.input.setUneditable(t.background)}}(e,t),t.line.wrapClass?pn(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="");var n=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass;t.text.className=n||""}function xn(e,t,n,i){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var r=pn(t);t.gutterBackground=T("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),r.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers;if(e.options.lineNumbers||o){var a=pn(t),l=t.gutter=T("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px");if(l.setAttribute("aria-hidden","true"),e.display.input.setUneditable(l),a.insertBefore(l,t.text),t.line.gutterClass&&(l.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=l.appendChild(T("div",nt(e.options,n),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var s=0;s<e.display.gutterSpecs.length;++s){var u=e.display.gutterSpecs[s].className,c=o.hasOwnProperty(u)&&o[u];c&&l.appendChild(T("div",[c],"CodeMirror-gutter-elt","left: "+i.gutterLeft[u]+"px; width: "+i.gutterWidth[u]+"px"))}}}function yn(e,t,n){t.alignable&&(t.alignable=null);for(var i=S("CodeMirror-linewidget"),r=t.node.firstChild,o=void 0;r;r=o)o=r.nextSibling,i.test(r.className)&&t.node.removeChild(r);Dn(e,t,n)}function bn(e,t,n,i){var r=mn(e,t);return t.text=t.node=r.pre,r.bgClass&&(t.bgClass=r.bgClass),r.textClass&&(t.textClass=r.textClass),vn(e,t),xn(e,t,n,i),Dn(e,t,i),t.node}function Dn(e,t,n){if(Cn(e,t.line,t,n,!0),t.rest)for(var i=0;i<t.rest.length;i++)Cn(e,t.rest[i],t,n,!1)}function Cn(e,t,n,i,r){if(t.widgets)for(var o=pn(n),a=0,l=t.widgets;a<l.length;++a){var s=l[a],u=T("div",[s.node],"CodeMirror-linewidget"+(s.className?" "+s.className:""));s.handleMouseEvents||u.setAttribute("cm-ignore-events","true"),wn(s,u,n,i),e.display.input.setUneditable(u),r&&s.above?o.insertBefore(u,n.gutter||n.text):o.appendChild(u),dn(s,"redraw")}}function wn(e,t,n,i){if(e.noHScroll){(n.alignable||(n.alignable=[])).push(t);var r=i.wrapperWidth;t.style.left=i.fixedPos+"px",e.coverGutter||(r-=i.gutterTotalWidth,t.style.paddingLeft=i.gutterTotalWidth+"px"),t.style.width=r+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-i.gutterTotalWidth+"px"))}function kn(e){if(null!=e.height)return e.height;var t=e.doc.cm;if(!t)return 0;if(!B(document.body,e.node)){var n="position: relative;";e.coverGutter&&(n+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(n+="width: "+t.display.wrapper.clientWidth+"px;"),L(t.display.measure,T("div",[e.node],null,n))}return e.height=e.node.parentNode.offsetHeight}function Sn(e,t){for(var n=Fe(t);n!=e.wrapper;n=n.parentNode)if(!n||1==n.nodeType&&"true"==n.getAttribute("cm-ignore-events")||n.parentNode==e.sizer&&n!=e.mover)return!0}function Fn(e){return e.lineSpace.offsetTop}function An(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function En(e){if(e.cachedPaddingH)return e.cachedPaddingH;var t=L(e.measure,T("pre","x","CodeMirror-line-like")),n=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,i={left:parseInt(n.paddingLeft),right:parseInt(n.paddingRight)};return isNaN(i.left)||isNaN(i.right)||(e.cachedPaddingH=i),i}function Ln(e){return 50-e.display.nativeBarWidth}function Tn(e){return e.display.scroller.clientWidth-Ln(e)-e.display.barWidth}function Mn(e){return e.display.scroller.clientHeight-Ln(e)-e.display.barHeight}function Bn(e,t,n){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache};if(e.rest){for(var i=0;i<e.rest.length;i++)if(e.rest[i]==t)return{map:e.measure.maps[i],cache:e.measure.caches[i]};for(var r=0;r<e.rest.length;r++)if(Je(e.rest[r])>n)return{map:e.measure.maps[r],cache:e.measure.caches[r],before:!0}}}function Nn(e,t,n,i){return zn(e,In(e,t),n,i)}function On(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[fi(e,t)];var n=e.display.externalMeasured;return n&&t>=n.lineN&&t<n.lineN+n.size?n:void 0}function In(e,t){var n=Je(t),i=On(e,n);i&&!i.text?i=null:i&&i.changes&&(fn(e,i,n,si(e)),e.curOp.forceUpdate=!0),i||(i=function(e,t){var n=Je(t=Wt(t)),i=e.display.externalMeasured=new ln(e.doc,t,n);i.lineN=n;var r=i.built=en(e,i);return i.text=r.pre,L(e.display.lineMeasure,r.pre),i}(e,t));var r=Bn(i,t,n);return{line:t,view:i,rect:null,map:r.map,cache:r.cache,before:r.before,hasHeights:!1}}function zn(e,t,n,i,r){t.before&&(n=-1);var o,s=n+(i||"");return t.cache.hasOwnProperty(s)?o=t.cache[s]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(!function(e,t,n){var i=e.options.lineWrapping,r=i&&Tn(e);if(!t.measure.heights||i&&t.measure.width!=r){var o=t.measure.heights=[];if(i){t.measure.width=r;for(var a=t.text.firstChild.getClientRects(),l=0;l<a.length-1;l++){var s=a[l],u=a[l+1];Math.abs(s.bottom-u.bottom)>2&&o.push((s.bottom+u.top)/2-n.top)}}o.push(n.bottom-n.top)}}(e,t.view,t.rect),t.hasHeights=!0),o=function(e,t,n,i){var r,o=Pn(t.map,n,i),s=o.node,u=o.start,c=o.end,d=o.collapse;if(3==s.nodeType){for(var h=0;h<4;h++){for(;u&&ae(t.line.text.charAt(o.coverStart+u));)--u;for(;o.coverStart+c<o.coverEnd&&ae(t.line.text.charAt(o.coverStart+c));)++c;if((r=a&&l<9&&0==u&&c==o.coverEnd-o.coverStart?s.parentNode.getBoundingClientRect():_n(F(s,u,c).getClientRects(),i)).left||r.right||0==u)break;c=u,u-=1,d="right"}a&&l<11&&(r=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=He)return He;var t=L(e,T("span","x")),n=t.getBoundingClientRect(),i=F(t,0,1).getBoundingClientRect();return He=Math.abs(n.left-i.left)>1}(e))return t;var n=screen.logicalXDPI/screen.deviceXDPI,i=screen.logicalYDPI/screen.deviceYDPI;return{left:t.left*n,right:t.right*n,top:t.top*i,bottom:t.bottom*i}}(e.display.measure,r))}else{var f;u>0&&(d=i="right"),r=e.options.lineWrapping&&(f=s.getClientRects()).length>1?f["right"==i?f.length-1:0]:s.getBoundingClientRect()}if(a&&l<9&&!u&&(!r||!r.left&&!r.right)){var p=s.parentNode.getClientRects()[0];r=p?{left:p.left,right:p.left+li(e.display),top:p.top,bottom:p.bottom}:Rn}for(var m=r.top-t.rect.top,g=r.bottom-t.rect.top,v=(m+g)/2,x=t.view.measure.heights,y=0;y<x.length-1&&!(v<x[y]);y++);var b=y?x[y-1]:0,D=x[y],C={left:("right"==d?r.right:r.left)-t.rect.left,right:("left"==d?r.left:r.right)-t.rect.left,top:b,bottom:D};r.left||r.right||(C.bogus=!0);e.options.singleCursorHeightPerLine||(C.rtop=m,C.rbottom=g);return C}(e,t,n,i),o.bogus||(t.cache[s]=o)),{left:o.left,right:o.right,top:r?o.rtop:o.top,bottom:r?o.rbottom:o.bottom}}var Hn,Rn={left:0,right:0,top:0,bottom:0};function Pn(e,t,n){for(var i,r,o,a,l,s,u=0;u<e.length;u+=3)if(l=e[u],s=e[u+1],t<l?(r=0,o=1,a="left"):t<s?o=(r=t-l)+1:(u==e.length-3||t==s&&e[u+3]>t)&&(r=(o=s-l)-1,t>=s&&(a="right")),null!=r){if(i=e[u+2],l==s&&n==(i.insertLeft?"left":"right")&&(a=n),"left"==n&&0==r)for(;u&&e[u-2]==e[u-3]&&e[u-1].insertLeft;)i=e[2+(u-=3)],a="left";if("right"==n&&r==s-l)for(;u<e.length-3&&e[u+3]==e[u+4]&&!e[u+5].insertLeft;)i=e[(u+=3)+2],a="right";break}return{node:i,start:r,end:o,collapse:a,coverStart:l,coverEnd:s}}function _n(e,t){var n=Rn;if("left"==t)for(var i=0;i<e.length&&(n=e[i]).left==n.right;i++);else for(var r=e.length-1;r>=0&&(n=e[r]).left==n.right;r--);return n}function Wn(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function jn(e){e.display.externalMeasure=null,E(e.display.lineMeasure);for(var t=0;t<e.display.view.length;t++)Wn(e.display.view[t])}function qn(e){jn(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function Un(e){return c&&v?-(e.body.getBoundingClientRect().left-parseInt(getComputedStyle(e.body).marginLeft)):e.defaultView.pageXOffset||(e.documentElement||e.body).scrollLeft}function $n(e){return c&&v?-(e.body.getBoundingClientRect().top-parseInt(getComputedStyle(e.body).marginTop)):e.defaultView.pageYOffset||(e.documentElement||e.body).scrollTop}function Gn(e){var t=Wt(e).widgets,n=0;if(t)for(var i=0;i<t.length;++i)t[i].above&&(n+=kn(t[i]));return n}function Vn(e,t,n,i,r){if(!r){var o=Gn(t);n.top+=o,n.bottom+=o}if("line"==i)return n;i||(i="local");var a=Gt(t);if("local"==i?a+=Fn(e.display):a-=e.display.viewOffset,"page"==i||"window"==i){var l=e.display.lineSpace.getBoundingClientRect();a+=l.top+("window"==i?0:$n(H(e)));var s=l.left+("window"==i?0:Un(H(e)));n.left+=s,n.right+=s}return n.top+=a,n.bottom+=a,n}function Xn(e,t,n){if("div"==n)return t;var i=t.left,r=t.top;if("page"==n)i-=Un(H(e)),r-=$n(H(e));else if("local"==n||!n){var o=e.display.sizer.getBoundingClientRect();i+=o.left,r+=o.top}var a=e.display.lineSpace.getBoundingClientRect();return{left:i-a.left,top:r-a.top}}function Kn(e,t,n,i,r){return i||(i=Ke(e.doc,t.line)),Vn(e,i,Nn(e,i,t.ch,r),n)}function Zn(e,t,n,i,r,o){function a(t,a){var l=zn(e,r,t,a?"right":"left",o);return a?l.left=l.right:l.right=l.left,Vn(e,i,l,n)}i=i||Ke(e.doc,t.line),r||(r=In(e,i));var l=he(i,e.doc.direction),s=t.ch,u=t.sticky;if(s>=i.text.length?(s=i.text.length,u="before"):s<=0&&(s=0,u="after"),!l)return a("before"==u?s-1:s,"before"==u);function c(e,t,n){return a(n?e-1:e,1==l[t].level!=n)}var d=ce(l,s,u),h=ue,f=c(s,d,"before"==u);return null!=h&&(f.other=c(s,h,"before"!=u)),f}function Yn(e,t){var n=0;t=ct(e.doc,t),e.options.lineWrapping||(n=li(e.display)*t.ch);var i=Ke(e.doc,t.line),r=Gt(i)+Fn(e.display);return{left:n,right:n,top:r,bottom:r+i.height}}function Qn(e,t,n,i,r){var o=it(e,t,n);return o.xRel=r,i&&(o.outside=i),o}function Jn(e,t,n){var i=e.doc;if((n+=e.display.viewOffset)<0)return Qn(i.first,0,null,-1,-1);var r=et(i,n),o=i.first+i.size-1;if(r>o)return Qn(i.first+i.size-1,Ke(i,o).text.length,null,1,1);t<0&&(t=0);for(var a=Ke(i,r);;){var l=ii(e,a,r,t,n),s=Pt(a,l.ch+(l.xRel>0||l.outside>0?1:0));if(!s)return l;var u=s.find(1);if(u.line==r)return u;a=Ke(i,r=u.line)}}function ei(e,t,n,i){i-=Gn(t);var r=t.text.length,o=se((function(t){return zn(e,n,t-1).bottom<=i}),r,0);return{begin:o,end:r=se((function(t){return zn(e,n,t).top>i}),o,r)}}function ti(e,t,n,i){return n||(n=In(e,t)),ei(e,t,n,Vn(e,t,zn(e,n,i),"line").top)}function ni(e,t,n,i){return!(e.bottom<=n)&&(e.top>n||(i?e.left:e.right)>t)}function ii(e,t,n,i,r){r-=Gt(t);var o=In(e,t),a=Gn(t),l=0,s=t.text.length,u=!0,c=he(t,e.doc.direction);if(c){var d=(e.options.lineWrapping?oi:ri)(e,t,n,o,c,i,r);l=(u=1!=d.level)?d.from:d.to-1,s=u?d.to:d.from-1}var h,f,p=null,m=null,g=se((function(t){var n=zn(e,o,t);return n.top+=a,n.bottom+=a,!!ni(n,i,r,!1)&&(n.top<=r&&n.left<=i&&(p=t,m=n),!0)}),l,s),v=!1;if(m){var x=i-m.left<m.right-i,y=x==u;g=p+(y?0:1),f=y?"after":"before",h=x?m.left:m.right}else{u||g!=s&&g!=l||g++,f=0==g?"after":g==t.text.length?"before":zn(e,o,g-(u?1:0)).bottom+a<=r==u?"after":"before";var b=Zn(e,it(n,g,f),"line",t,o);h=b.left,v=r<b.top?-1:r>=b.bottom?1:0}return Qn(n,g=le(t.text,g,1),f,v,i-h)}function ri(e,t,n,i,r,o,a){var l=se((function(l){var s=r[l],u=1!=s.level;return ni(Zn(e,it(n,u?s.to:s.from,u?"before":"after"),"line",t,i),o,a,!0)}),0,r.length-1),s=r[l];if(l>0){var u=1!=s.level,c=Zn(e,it(n,u?s.from:s.to,u?"after":"before"),"line",t,i);ni(c,o,a,!0)&&c.top>a&&(s=r[l-1])}return s}function oi(e,t,n,i,r,o,a){var l=ei(e,t,i,a),s=l.begin,u=l.end;/\s/.test(t.text.charAt(u-1))&&u--;for(var c=null,d=null,h=0;h<r.length;h++){var f=r[h];if(!(f.from>=u||f.to<=s)){var p=zn(e,i,1!=f.level?Math.min(u,f.to)-1:Math.max(s,f.from)).right,m=p<o?o-p+1e9:p-o;(!c||d>m)&&(c=f,d=m)}}return c||(c=r[r.length-1]),c.from<s&&(c={from:s,to:c.to,level:c.level}),c.to>u&&(c={from:c.from,to:u,level:c.level}),c}function ai(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight;if(null==Hn){Hn=T("pre",null,"CodeMirror-line-like");for(var t=0;t<49;++t)Hn.appendChild(document.createTextNode("x")),Hn.appendChild(T("br"));Hn.appendChild(document.createTextNode("x"))}L(e.measure,Hn);var n=Hn.offsetHeight/50;return n>3&&(e.cachedTextHeight=n),E(e.measure),n||1}function li(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth;var t=T("span","xxxxxxxxxx"),n=T("pre",[t],"CodeMirror-line-like");L(e.measure,n);var i=t.getBoundingClientRect(),r=(i.right-i.left)/10;return r>2&&(e.cachedCharWidth=r),r||10}function si(e){for(var t=e.display,n={},i={},r=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a){var l=e.display.gutterSpecs[a].className;n[l]=o.offsetLeft+o.clientLeft+r,i[l]=o.clientWidth}return{fixedPos:ui(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:n,gutterWidth:i,wrapperWidth:t.wrapper.clientWidth}}function ui(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function ci(e){var t=ai(e.display),n=e.options.lineWrapping,i=n&&Math.max(5,e.display.scroller.clientWidth/li(e.display)-3);return function(r){if(Ut(e.doc,r))return 0;var o=0;if(r.widgets)for(var a=0;a<r.widgets.length;a++)r.widgets[a].height&&(o+=r.widgets[a].height);return n?o+(Math.ceil(r.text.length/i)||1)*t:o+t}}function di(e){var t=e.doc,n=ci(e);t.iter((function(e){var t=n(e);t!=e.height&&Qe(e,t)}))}function hi(e,t,n,i){var r=e.display;if(!n&&"true"==Fe(t).getAttribute("cm-not-content"))return null;var o,a,l=r.lineSpace.getBoundingClientRect();try{o=t.clientX-l.left,a=t.clientY-l.top}catch(e){return null}var s,u=Jn(e,o,a);if(i&&u.xRel>0&&(s=Ke(e.doc,u.line).text).length==u.ch){var c=W(s,s.length,e.options.tabSize)-s.length;u=it(u.line,Math.max(0,Math.round((o-En(e.display).left)/li(e.display))-c))}return u}function fi(e,t){if(t>=e.display.viewTo)return null;if((t-=e.display.viewFrom)<0)return null;for(var n=e.display.view,i=0;i<n.length;i++)if((t-=n[i].size)<0)return i}function pi(e,t,n,i){null==t&&(t=e.doc.first),null==n&&(n=e.doc.first+e.doc.size),i||(i=0);var r=e.display;if(i&&n<r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>t)&&(r.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=r.viewTo)St&&jt(e.doc,t)<r.viewTo&&gi(e);else if(n<=r.viewFrom)St&&qt(e.doc,n+i)>r.viewFrom?gi(e):(r.viewFrom+=i,r.viewTo+=i);else if(t<=r.viewFrom&&n>=r.viewTo)gi(e);else if(t<=r.viewFrom){var o=vi(e,n,n+i,1);o?(r.view=r.view.slice(o.index),r.viewFrom=o.lineN,r.viewTo+=i):gi(e)}else if(n>=r.viewTo){var a=vi(e,t,t,-1);a?(r.view=r.view.slice(0,a.index),r.viewTo=a.lineN):gi(e)}else{var l=vi(e,t,t,-1),s=vi(e,n,n+i,1);l&&s?(r.view=r.view.slice(0,l.index).concat(sn(e,l.lineN,s.lineN)).concat(r.view.slice(s.index)),r.viewTo+=i):gi(e)}var u=r.externalMeasured;u&&(n<u.lineN?u.lineN+=i:t<u.lineN+u.size&&(r.externalMeasured=null))}function mi(e,t,n){e.curOp.viewChanged=!0;var i=e.display,r=e.display.externalMeasured;if(r&&t>=r.lineN&&t<r.lineN+r.size&&(i.externalMeasured=null),!(t<i.viewFrom||t>=i.viewTo)){var o=i.view[fi(e,t)];if(null!=o.node){var a=o.changes||(o.changes=[]);-1==q(a,n)&&a.push(n)}}}function gi(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function vi(e,t,n,i){var r,o=fi(e,t),a=e.display.view;if(!St||n==e.doc.first+e.doc.size)return{index:o,lineN:n};for(var l=e.display.viewFrom,s=0;s<o;s++)l+=a[s].size;if(l!=t){if(i>0){if(o==a.length-1)return null;r=l+a[o].size-t,o++}else r=l-t;t+=r,n+=r}for(;jt(e.doc,n)!=n;){if(o==(i<0?0:a.length-1))return null;n+=i*a[o-(i<0?1:0)].size,o+=i}return{index:o,lineN:n}}function xi(e){for(var t=e.display.view,n=0,i=0;i<t.length;i++){var r=t[i];r.hidden||r.node&&!r.changes||++n}return n}function yi(e){e.display.input.showSelection(e.display.input.prepareSelection())}function bi(e,t){void 0===t&&(t=!0);var n=e.doc,i={},r=i.cursors=document.createDocumentFragment(),o=i.selection=document.createDocumentFragment(),a=e.options.$customCursor;a&&(t=!0);for(var l=0;l<n.sel.ranges.length;l++)if(t||l!=n.sel.primIndex){var s=n.sel.ranges[l];if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var u=s.empty();if(a){var c=a(e,s);c&&Di(e,c,r)}else(u||e.options.showCursorWhenSelecting)&&Di(e,s.head,r);u||wi(e,s,o)}}return i}function Di(e,t,n){var i=Zn(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),r=n.appendChild(T("div"," ","CodeMirror-cursor"));if(r.style.left=i.left+"px",r.style.top=i.top+"px",r.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",/\bcm-fat-cursor\b/.test(e.getWrapperElement().className)){var o=Kn(e,t,"div",null,null),a=o.right-o.left;r.style.width=(a>0?a:e.defaultCharWidth())+"px"}if(i.other){var l=n.appendChild(T("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));l.style.display="",l.style.left=i.other.left+"px",l.style.top=i.other.top+"px",l.style.height=.85*(i.other.bottom-i.other.top)+"px"}}function Ci(e,t){return e.top-t.top||e.left-t.left}function wi(e,t,n){var i=e.display,r=e.doc,o=document.createDocumentFragment(),a=En(e.display),l=a.left,s=Math.max(i.sizerWidth,Tn(e)-i.sizer.offsetLeft)-a.right,u="ltr"==r.direction;function c(e,t,n,i){t<0&&(t=0),t=Math.round(t),i=Math.round(i),o.appendChild(T("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==n?s-e:n)+"px;\n                             height: "+(i-t)+"px"))}function d(t,n,i){var o,a,d=Ke(r,t),h=d.text.length;function f(n,i){return Kn(e,it(t,n),"div",d,i)}function p(t,n,i){var r=ti(e,d,null,t),o="ltr"==n==("after"==i)?"left":"right";return f("after"==i?r.begin:r.end-(/\s/.test(d.text.charAt(r.end-1))?2:1),o)[o]}var m=he(d,r.direction);return function(e,t,n,i){if(!e)return i(t,n,"ltr",0);for(var r=!1,o=0;o<e.length;++o){var a=e[o];(a.from<n&&a.to>t||t==n&&a.to==t)&&(i(Math.max(a.from,t),Math.min(a.to,n),1==a.level?"rtl":"ltr",o),r=!0)}r||i(t,n,"ltr")}(m,n||0,null==i?h:i,(function(e,t,r,d){var g="ltr"==r,v=f(e,g?"left":"right"),x=f(t-1,g?"right":"left"),y=null==n&&0==e,b=null==i&&t==h,D=0==d,C=!m||d==m.length-1;if(x.top-v.top<=3){var w=(u?b:y)&&C,k=(u?y:b)&&D?l:(g?v:x).left,S=w?s:(g?x:v).right;c(k,v.top,S-k,v.bottom)}else{var F,A,E,L;g?(F=u&&y&&D?l:v.left,A=u?s:p(e,r,"before"),E=u?l:p(t,r,"after"),L=u&&b&&C?s:x.right):(F=u?p(e,r,"before"):l,A=!u&&y&&D?s:v.right,E=!u&&b&&C?l:x.left,L=u?p(t,r,"after"):s),c(F,v.top,A-F,v.bottom),v.bottom<x.top&&c(l,v.bottom,null,x.top),c(E,x.top,L-E,x.bottom)}(!o||Ci(v,o)<0)&&(o=v),Ci(x,o)<0&&(o=x),(!a||Ci(v,a)<0)&&(a=v),Ci(x,a)<0&&(a=x)})),{start:o,end:a}}var h=t.from(),f=t.to();if(h.line==f.line)d(h.line,h.ch,f.ch);else{var p=Ke(r,h.line),m=Ke(r,f.line),g=Wt(p)==Wt(m),v=d(h.line,h.ch,g?p.text.length+1:null).end,x=d(f.line,g?0:null,f.ch).start;g&&(v.top<x.top-2?(c(v.right,v.top,null,v.bottom),c(l,x.top,x.left,x.bottom)):c(v.right,v.top,x.left-v.right,v.bottom)),v.bottom<x.top&&c(l,v.bottom,null,x.top)}n.appendChild(o)}function ki(e){if(e.state.focused){var t=e.display;clearInterval(t.blinker);var n=!0;t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval((function(){e.hasFocus()||Ei(e),t.cursorDiv.style.visibility=(n=!n)?"":"hidden"}),e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Si(e){e.hasFocus()||(e.display.input.focus(),e.state.focused||Ai(e))}function Fi(e){e.state.delayingBlurEvent=!0,setTimeout((function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,e.state.focused&&Ei(e))}),100)}function Ai(e,t){e.state.delayingBlurEvent&&!e.state.draggingText&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(ve(e,"focus",e,t),e.state.focused=!0,O(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),s&&setTimeout((function(){return e.display.input.reset(!0)}),20)),e.display.input.receivedFocus()),ki(e))}function Ei(e,t){e.state.delayingBlurEvent||(e.state.focused&&(ve(e,"blur",e,t),e.state.focused=!1,A(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout((function(){e.state.focused||(e.display.shift=!1)}),150))}function Li(e){for(var t=e.display,n=t.lineDiv.offsetTop,i=Math.max(0,t.scroller.getBoundingClientRect().top),r=t.lineDiv.getBoundingClientRect().top,o=0,s=0;s<t.view.length;s++){var u=t.view[s],c=e.options.lineWrapping,d=void 0,h=0;if(!u.hidden){if(r+=u.line.height,a&&l<8){var f=u.node.offsetTop+u.node.offsetHeight;d=f-n,n=f}else{var p=u.node.getBoundingClientRect();d=p.bottom-p.top,!c&&u.text.firstChild&&(h=u.text.firstChild.getBoundingClientRect().right-p.left-1)}var m=u.line.height-d;if((m>.005||m<-.005)&&(r<i&&(o-=m),Qe(u.line,d),Ti(u.line),u.rest))for(var g=0;g<u.rest.length;g++)Ti(u.rest[g]);if(h>e.display.sizerWidth){var v=Math.ceil(h/li(e.display));v>e.display.maxLineLength&&(e.display.maxLineLength=v,e.display.maxLine=u.line,e.display.maxLineChanged=!0)}}}Math.abs(o)>2&&(t.scroller.scrollTop+=o)}function Ti(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var n=e.widgets[t],i=n.node.parentNode;i&&(n.height=i.offsetHeight)}}function Mi(e,t,n){var i=n&&null!=n.top?Math.max(0,n.top):e.scroller.scrollTop;i=Math.floor(i-Fn(e));var r=n&&null!=n.bottom?n.bottom:i+e.wrapper.clientHeight,o=et(t,i),a=et(t,r);if(n&&n.ensure){var l=n.ensure.from.line,s=n.ensure.to.line;l<o?(o=l,a=et(t,Gt(Ke(t,l))+e.wrapper.clientHeight)):Math.min(s,t.lastLine())>=a&&(o=et(t,Gt(Ke(t,s))-e.wrapper.clientHeight),a=s)}return{from:o,to:Math.max(a,o+1)}}function Bi(e,t){var n=e.display,i=ai(e.display);t.top<0&&(t.top=0);var r=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:n.scroller.scrollTop,o=Mn(e),a={};t.bottom-t.top>o&&(t.bottom=t.top+o);var l=e.doc.height+An(n),s=t.top<i,u=t.bottom>l-i;if(t.top<r)a.scrollTop=s?0:t.top;else if(t.bottom>r+o){var c=Math.min(t.top,(u?l:t.bottom)-o);c!=r&&(a.scrollTop=c)}var d=e.options.fixedGutter?0:n.gutters.offsetWidth,h=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:n.scroller.scrollLeft-d,f=Tn(e)-n.gutters.offsetWidth,p=t.right-t.left>f;return p&&(t.right=t.left+f),t.left<10?a.scrollLeft=0:t.left<h?a.scrollLeft=Math.max(0,t.left+d-(p?0:10)):t.right>f+h-3&&(a.scrollLeft=t.right+(p?0:10)-f),a}function Ni(e,t){null!=t&&(zi(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function Oi(e){zi(e);var t=e.getCursor();e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function Ii(e,t,n){null==t&&null==n||zi(e),null!=t&&(e.curOp.scrollLeft=t),null!=n&&(e.curOp.scrollTop=n)}function zi(e){var t=e.curOp.scrollToPos;t&&(e.curOp.scrollToPos=null,Hi(e,Yn(e,t.from),Yn(e,t.to),t.margin))}function Hi(e,t,n,i){var r=Bi(e,{left:Math.min(t.left,n.left),top:Math.min(t.top,n.top)-i,right:Math.max(t.right,n.right),bottom:Math.max(t.bottom,n.bottom)+i});Ii(e,r.scrollLeft,r.scrollTop)}function Ri(e,t){Math.abs(e.doc.scrollTop-t)<2||(n||hr(e,{top:t}),Pi(e,t,!0),n&&hr(e),ar(e,100))}function Pi(e,t,n){t=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t)),(e.display.scroller.scrollTop!=t||n)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function _i(e,t,n,i){t=Math.max(0,Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),(n?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!i||(e.doc.scrollLeft=t,mr(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Wi(e){var t=e.display,n=t.gutters.offsetWidth,i=Math.round(e.doc.height+An(e.display));return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?n:0,docHeight:i,scrollHeight:i+Ln(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:n}}var ji=function(e,t,n){this.cm=n;var i=this.vert=T("div",[T("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),r=this.horiz=T("div",[T("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");i.tabIndex=r.tabIndex=-1,e(i),e(r),pe(i,"scroll",(function(){i.clientHeight&&t(i.scrollTop,"vertical")})),pe(r,"scroll",(function(){r.clientWidth&&t(r.scrollLeft,"horizontal")})),this.checkedZeroWidth=!1,a&&l<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};ji.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,n=e.scrollHeight>e.clientHeight+1,i=e.nativeBarWidth;if(n){this.vert.style.display="block",this.vert.style.bottom=t?i+"px":"0";var r=e.viewHeight-(t?i:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+r)+"px"}else this.vert.scrollTop=0,this.vert.style.display="",this.vert.firstChild.style.height="0";if(t){this.horiz.style.display="block",this.horiz.style.right=n?i+"px":"0",this.horiz.style.left=e.barLeft+"px";var o=e.viewWidth-e.barLeft-(n?i:0);this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(0==i&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:n?i:0,bottom:t?i:0}},ji.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},ji.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},ji.prototype.zeroWidthHack=function(){var e=y&&!p?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.visibility=this.vert.style.visibility="hidden",this.disableHoriz=new j,this.disableVert=new j},ji.prototype.enableZeroWidthBar=function(e,t,n){e.style.visibility="",t.set(1e3,(function i(){var r=e.getBoundingClientRect();("vert"==n?document.elementFromPoint(r.right-1,(r.top+r.bottom)/2):document.elementFromPoint((r.right+r.left)/2,r.bottom-1))!=e?e.style.visibility="hidden":t.set(1e3,i)}))},ji.prototype.clear=function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)};var qi=function(){};function Ui(e,t){t||(t=Wi(e));var n=e.display.barWidth,i=e.display.barHeight;$i(e,t);for(var r=0;r<4&&n!=e.display.barWidth||i!=e.display.barHeight;r++)n!=e.display.barWidth&&e.options.lineWrapping&&Li(e),$i(e,Wi(e)),n=e.display.barWidth,i=e.display.barHeight}function $i(e,t){var n=e.display,i=n.scrollbars.update(t);n.sizer.style.paddingRight=(n.barWidth=i.right)+"px",n.sizer.style.paddingBottom=(n.barHeight=i.bottom)+"px",n.heightForcer.style.borderBottom=i.bottom+"px solid transparent",i.right&&i.bottom?(n.scrollbarFiller.style.display="block",n.scrollbarFiller.style.height=i.bottom+"px",n.scrollbarFiller.style.width=i.right+"px"):n.scrollbarFiller.style.display="",i.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(n.gutterFiller.style.display="block",n.gutterFiller.style.height=i.bottom+"px",n.gutterFiller.style.width=t.gutterWidth+"px"):n.gutterFiller.style.display=""}qi.prototype.update=function(){return{bottom:0,right:0}},qi.prototype.setScrollLeft=function(){},qi.prototype.setScrollTop=function(){},qi.prototype.clear=function(){};var Gi={native:ji,null:qi};function Vi(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&A(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Gi[e.options.scrollbarStyle]((function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),pe(t,"mousedown",(function(){e.state.focused&&setTimeout((function(){return e.display.input.focus()}),0)})),t.setAttribute("cm-not-content","true")}),(function(t,n){"horizontal"==n?_i(e,t):Ri(e,t)}),e),e.display.scrollbars.addClass&&O(e.display.wrapper,e.display.scrollbars.addClass)}var Xi=0;function Ki(e){var t;e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Xi,markArrays:null},t=e.curOp,un?un.ops.push(t):t.ownsGroup=un={ops:[t],delayedCallbacks:[]}}function Zi(e){var t=e.curOp;t&&function(e,t){var n=e.ownsGroup;if(n)try{!function(e){var t=e.delayedCallbacks,n=0;do{for(;n<t.length;n++)t[n].call(null);for(var i=0;i<e.ops.length;i++){var r=e.ops[i];if(r.cursorActivityHandlers)for(;r.cursorActivityCalled<r.cursorActivityHandlers.length;)r.cursorActivityHandlers[r.cursorActivityCalled++].call(null,r.cm)}}while(n<t.length)}(n)}finally{un=null,t(n)}}(t,(function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null;!function(e){for(var t=e.ops,n=0;n<t.length;n++)Yi(t[n]);for(var i=0;i<t.length;i++)Qi(t[i]);for(var r=0;r<t.length;r++)Ji(t[r]);for(var o=0;o<t.length;o++)er(t[o]);for(var a=0;a<t.length;a++)tr(t[a])}(e)}))}function Yi(e){var t=e.cm,n=t.display;!function(e){var t=e.display;!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Ln(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Ln(e)+"px",t.scrollbarsClipped=!0)}(t),e.updateMaxLine&&Xt(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<n.viewFrom||e.scrollToPos.to.line>=n.viewTo)||n.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new sr(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Qi(e){e.updatedDisplay=e.mustUpdate&&cr(e.cm,e.update)}function Ji(e){var t=e.cm,n=t.display;e.updatedDisplay&&Li(t),e.barMeasure=Wi(t),n.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Nn(t,n.maxLine,n.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(n.scroller.clientWidth,n.sizer.offsetLeft+e.adjustWidthTo+Ln(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,n.sizer.offsetLeft+e.adjustWidthTo-Tn(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=n.input.prepareSelection())}function er(e){var t=e.cm;null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&_i(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1);var n=e.focus&&e.focus==N(H(t));e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,n),(e.updatedDisplay||e.startHeight!=t.doc.height)&&Ui(t,e.barMeasure),e.updatedDisplay&&pr(t,e.barMeasure),e.selectionChanged&&ki(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),n&&Si(e.cm)}function tr(e){var t=e.cm,n=t.display,i=t.doc;if(e.updatedDisplay&&dr(t,e.update),null==n.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(n.wheelStartX=n.wheelStartY=null),null!=e.scrollTop&&Pi(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&_i(t,e.scrollLeft,!0,!0),e.scrollToPos){var r=function(e,t,n,i){var r;null==i&&(i=0),e.options.lineWrapping||t!=n||(n="before"==t.sticky?it(t.line,t.ch+1,"before"):t,t=t.ch?it(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t);for(var o=0;o<5;o++){var a=!1,l=Zn(e,t),s=n&&n!=t?Zn(e,n):l,u=Bi(e,r={left:Math.min(l.left,s.left),top:Math.min(l.top,s.top)-i,right:Math.max(l.left,s.left),bottom:Math.max(l.bottom,s.bottom)+i}),c=e.doc.scrollTop,d=e.doc.scrollLeft;if(null!=u.scrollTop&&(Ri(e,u.scrollTop),Math.abs(e.doc.scrollTop-c)>1&&(a=!0)),null!=u.scrollLeft&&(_i(e,u.scrollLeft),Math.abs(e.doc.scrollLeft-d)>1&&(a=!0)),!a)break}return r}(t,ct(i,e.scrollToPos.from),ct(i,e.scrollToPos.to),e.scrollToPos.margin);!function(e,t){if(!xe(e,"scrollCursorIntoView")){var n=e.display,i=n.sizer.getBoundingClientRect(),r=null,o=n.wrapper.ownerDocument;if(t.top+i.top<0?r=!0:t.bottom+i.top>(o.defaultView.innerHeight||o.documentElement.clientHeight)&&(r=!1),null!=r&&!m){var a=T("div","​",null,"position: absolute;\n                         top: "+(t.top-n.viewOffset-Fn(e.display))+"px;\n                         height: "+(t.bottom-t.top+Ln(e)+n.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;");e.display.lineSpace.appendChild(a),a.scrollIntoView(r),e.display.lineSpace.removeChild(a)}}}(t,r)}var o=e.maybeHiddenMarkers,a=e.maybeUnhiddenMarkers;if(o)for(var l=0;l<o.length;++l)o[l].lines.length||ve(o[l],"hide");if(a)for(var s=0;s<a.length;++s)a[s].lines.length&&ve(a[s],"unhide");n.wrapper.offsetHeight&&(i.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&ve(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function nr(e,t){if(e.curOp)return t();Ki(e);try{return t()}finally{Zi(e)}}function ir(e,t){return function(){if(e.curOp)return t.apply(e,arguments);Ki(e);try{return t.apply(e,arguments)}finally{Zi(e)}}}function rr(e){return function(){if(this.curOp)return e.apply(this,arguments);Ki(this);try{return e.apply(this,arguments)}finally{Zi(this)}}}function or(e){return function(){var t=this.cm;if(!t||t.curOp)return e.apply(this,arguments);Ki(t);try{return e.apply(this,arguments)}finally{Zi(t)}}}function ar(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,P(lr,e))}function lr(e){var t=e.doc;if(!(t.highlightFrontier>=e.display.viewTo)){var n=+new Date+e.options.workTime,i=gt(e,t.highlightFrontier),r=[];t.iter(i.line,Math.min(t.first+t.size,e.display.viewTo+500),(function(o){if(i.line>=e.display.viewFrom){var a=o.styles,l=o.text.length>e.options.maxHighlightLength?$e(t.mode,i.state):null,s=pt(e,o,i,!0);l&&(i.state=l),o.styles=s.styles;var u=o.styleClasses,c=s.classes;c?o.styleClasses=c:u&&(o.styleClasses=null);for(var d=!a||a.length!=o.styles.length||u!=c&&(!u||!c||u.bgClass!=c.bgClass||u.textClass!=c.textClass),h=0;!d&&h<a.length;++h)d=a[h]!=o.styles[h];d&&r.push(i.line),o.stateAfter=i.save(),i.nextLine()}else o.text.length<=e.options.maxHighlightLength&&vt(e,o.text,i),o.stateAfter=i.line%5==0?i.save():null,i.nextLine();if(+new Date>n)return ar(e,e.options.workDelay),!0})),t.highlightFrontier=i.line,t.modeFrontier=Math.max(t.modeFrontier,i.line),r.length&&nr(e,(function(){for(var t=0;t<r.length;t++)mi(e,r[t],"text")}))}}var sr=function(e,t,n){var i=e.display;this.viewport=t,this.visible=Mi(i,e.doc,t),this.editorIsHidden=!i.wrapper.offsetWidth,this.wrapperHeight=i.wrapper.clientHeight,this.wrapperWidth=i.wrapper.clientWidth,this.oldDisplayWidth=Tn(e),this.force=n,this.dims=si(e),this.events=[]};function ur(e){if(e.hasFocus())return null;var t=N(H(e));if(!t||!B(e.display.lineDiv,t))return null;var n={activeElt:t};if(window.getSelection){var i=R(e).getSelection();i.anchorNode&&i.extend&&B(e.display.lineDiv,i.anchorNode)&&(n.anchorNode=i.anchorNode,n.anchorOffset=i.anchorOffset,n.focusNode=i.focusNode,n.focusOffset=i.focusOffset)}return n}function cr(e,t){var n=e.display,i=e.doc;if(t.editorIsHidden)return gi(e),!1;if(!t.force&&t.visible.from>=n.viewFrom&&t.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==xi(e))return!1;gr(e)&&(gi(e),t.dims=si(e));var r=i.first+i.size,o=Math.max(t.visible.from-e.options.viewportMargin,i.first),a=Math.min(r,t.visible.to+e.options.viewportMargin);n.viewFrom<o&&o-n.viewFrom<20&&(o=Math.max(i.first,n.viewFrom)),n.viewTo>a&&n.viewTo-a<20&&(a=Math.min(r,n.viewTo)),St&&(o=jt(e.doc,o),a=qt(e.doc,a));var l=o!=n.viewFrom||a!=n.viewTo||n.lastWrapHeight!=t.wrapperHeight||n.lastWrapWidth!=t.wrapperWidth;!function(e,t,n){var i=e.display;0==i.view.length||t>=i.viewTo||n<=i.viewFrom?(i.view=sn(e,t,n),i.viewFrom=t):(i.viewFrom>t?i.view=sn(e,t,i.viewFrom).concat(i.view):i.viewFrom<t&&(i.view=i.view.slice(fi(e,t))),i.viewFrom=t,i.viewTo<n?i.view=i.view.concat(sn(e,i.viewTo,n)):i.viewTo>n&&(i.view=i.view.slice(0,fi(e,n)))),i.viewTo=n}(e,o,a),n.viewOffset=Gt(Ke(e.doc,n.viewFrom)),e.display.mover.style.top=n.viewOffset+"px";var u=xi(e);if(!l&&0==u&&!t.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1;var c=ur(e);return u>4&&(n.lineDiv.style.display="none"),function(e,t,n){var i=e.display,r=e.options.lineNumbers,o=i.lineDiv,a=o.firstChild;function l(t){var n=t.nextSibling;return s&&y&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),n}for(var u=i.view,c=i.viewFrom,d=0;d<u.length;d++){var h=u[d];if(h.hidden);else if(h.node&&h.node.parentNode==o){for(;a!=h.node;)a=l(a);var f=r&&null!=t&&t<=c&&h.lineNumber;h.changes&&(q(h.changes,"gutter")>-1&&(f=!1),fn(e,h,c,n)),f&&(E(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(nt(e.options,c)))),a=h.node.nextSibling}else{var p=bn(e,h,c,n);o.insertBefore(p,a)}c+=h.size}for(;a;)a=l(a)}(e,n.updateLineNumbers,t.dims),u>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,function(e){if(e&&e.activeElt&&e.activeElt!=N(e.activeElt.ownerDocument)&&(e.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName)&&e.anchorNode&&B(document.body,e.anchorNode)&&B(document.body,e.focusNode))){var t=e.activeElt.ownerDocument,n=t.defaultView.getSelection(),i=t.createRange();i.setEnd(e.anchorNode,e.anchorOffset),i.collapse(!1),n.removeAllRanges(),n.addRange(i),n.extend(e.focusNode,e.focusOffset)}}(c),E(n.cursorDiv),E(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,l&&(n.lastWrapHeight=t.wrapperHeight,n.lastWrapWidth=t.wrapperWidth,ar(e,400)),n.updateLineNumbers=null,!0}function dr(e,t){for(var n=t.viewport,i=!0;;i=!1){if(i&&e.options.lineWrapping&&t.oldDisplayWidth!=Tn(e))i&&(t.visible=Mi(e.display,e.doc,n));else if(n&&null!=n.top&&(n={top:Math.min(e.doc.height+An(e.display)-Mn(e),n.top)}),t.visible=Mi(e.display,e.doc,n),t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)break;if(!cr(e,t))break;Li(e);var r=Wi(e);yi(e),Ui(e,r),pr(e,r),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function hr(e,t){var n=new sr(e,t);if(cr(e,n)){Li(e),dr(e,n);var i=Wi(e);yi(e),Ui(e,i),pr(e,i),n.finish()}}function fr(e){var t=e.gutters.offsetWidth;e.sizer.style.marginLeft=t+"px",dn(e,"gutterChanged",e)}function pr(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Ln(e)+"px"}function mr(e){var t=e.display,n=t.view;if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var i=ui(t)-t.scroller.scrollLeft+e.doc.scrollLeft,r=t.gutters.offsetWidth,o=i+"px",a=0;a<n.length;a++)if(!n[a].hidden){e.options.fixedGutter&&(n[a].gutter&&(n[a].gutter.style.left=o),n[a].gutterBackground&&(n[a].gutterBackground.style.left=o));var l=n[a].alignable;if(l)for(var s=0;s<l.length;s++)l[s].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=i+r+"px")}}function gr(e){if(!e.options.lineNumbers)return!1;var t=e.doc,n=nt(e.options,t.first+t.size-1),i=e.display;if(n.length!=i.lineNumChars){var r=i.measure.appendChild(T("div",[T("div",n)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=r.firstChild.offsetWidth,a=r.offsetWidth-o;return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(o,i.lineGutter.offsetWidth-a)+1,i.lineNumWidth=i.lineNumInnerWidth+a,i.lineNumChars=i.lineNumInnerWidth?n.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",fr(e.display),!0}return!1}function vr(e,t){for(var n=[],i=!1,r=0;r<e.length;r++){var o=e[r],a=null;if("string"!=typeof o&&(a=o.style,o=o.className),"CodeMirror-linenumbers"==o){if(!t)continue;i=!0}n.push({className:o,style:a})}return t&&!i&&n.push({className:"CodeMirror-linenumbers",style:null}),n}function xr(e){var t=e.gutters,n=e.gutterSpecs;E(t),e.lineGutter=null;for(var i=0;i<n.length;++i){var r=n[i],o=r.className,a=r.style,l=t.appendChild(T("div",null,"CodeMirror-gutter "+o));a&&(l.style.cssText=a),"CodeMirror-linenumbers"==o&&(e.lineGutter=l,l.style.width=(e.lineNumWidth||1)+"px")}t.style.display=n.length?"":"none",fr(e)}function yr(e){xr(e.display),pi(e),mr(e)}function br(e,t,i,r){var o=this;this.input=i,o.scrollbarFiller=T("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=T("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=M("div",null,"CodeMirror-code"),o.selectionDiv=T("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=T("div",null,"CodeMirror-cursors"),o.measure=T("div",null,"CodeMirror-measure"),o.lineMeasure=T("div",null,"CodeMirror-measure"),o.lineSpace=M("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none");var u=M("div",[o.lineSpace],"CodeMirror-lines");o.mover=T("div",[u],null,"position: relative"),o.sizer=T("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=T("div",null,null,"position: absolute; height: 50px; width: 1px;"),o.gutters=T("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=T("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=T("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),o.wrapper.setAttribute("translate","no"),a&&l<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),s||n&&x||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=vr(r.gutters,r.lineNumbers),xr(o),i.init(o)}sr.prototype.signal=function(e,t){be(e,t)&&this.events.push(arguments)},sr.prototype.finish=function(){for(var e=0;e<this.events.length;e++)ve.apply(null,this.events[e])};var Dr=0,Cr=null;function wr(e){var t=e.wheelDeltaX,n=e.wheelDeltaY;return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==n&&e.detail&&e.axis==e.VERTICAL_AXIS?n=e.detail:null==n&&(n=e.wheelDelta),{x:t,y:n}}function kr(e){var t=wr(e);return t.x*=Cr,t.y*=Cr,t}function Sr(e,t){c&&102==d&&(null==e.display.chromeScrollHack?e.display.sizer.style.pointerEvents="none":clearTimeout(e.display.chromeScrollHack),e.display.chromeScrollHack=setTimeout((function(){e.display.chromeScrollHack=null,e.display.sizer.style.pointerEvents=""}),100));var i=wr(t),r=i.x,o=i.y,a=Cr;0===t.deltaMode&&(r=t.deltaX,o=t.deltaY,a=1);var l=e.display,u=l.scroller,f=u.scrollWidth>u.clientWidth,p=u.scrollHeight>u.clientHeight;if(r&&f||o&&p){if(o&&y&&s)e:for(var m=t.target,g=l.view;m!=u;m=m.parentNode)for(var v=0;v<g.length;v++)if(g[v].node==m){e.display.currentWheelTarget=m;break e}if(r&&!n&&!h&&null!=a)return o&&p&&Ri(e,Math.max(0,u.scrollTop+o*a)),_i(e,Math.max(0,u.scrollLeft+r*a)),(!o||o&&p)&&Ce(t),void(l.wheelStartX=null);if(o&&null!=a){var x=o*a,b=e.doc.scrollTop,D=b+l.wrapper.clientHeight;x<0?b=Math.max(0,b+x-50):D=Math.min(e.doc.height,D+x+50),hr(e,{top:b,bottom:D})}Dr<20&&0!==t.deltaMode&&(null==l.wheelStartX?(l.wheelStartX=u.scrollLeft,l.wheelStartY=u.scrollTop,l.wheelDX=r,l.wheelDY=o,setTimeout((function(){if(null!=l.wheelStartX){var e=u.scrollLeft-l.wheelStartX,t=u.scrollTop-l.wheelStartY,n=t&&l.wheelDY&&t/l.wheelDY||e&&l.wheelDX&&e/l.wheelDX;l.wheelStartX=l.wheelStartY=null,n&&(Cr=(Cr*Dr+n)/(Dr+1),++Dr)}}),200)):(l.wheelDX+=r,l.wheelDY+=o))}}a?Cr=-.53:n?Cr=15:c?Cr=-.7:f&&(Cr=-1/3);var Fr=function(e,t){this.ranges=e,this.primIndex=t};Fr.prototype.primary=function(){return this.ranges[this.primIndex]},Fr.prototype.equals=function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var t=0;t<this.ranges.length;t++){var n=this.ranges[t],i=e.ranges[t];if(!ot(n.anchor,i.anchor)||!ot(n.head,i.head))return!1}return!0},Fr.prototype.deepCopy=function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new Ar(at(this.ranges[t].anchor),at(this.ranges[t].head));return new Fr(e,this.primIndex)},Fr.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},Fr.prototype.contains=function(e,t){t||(t=e);for(var n=0;n<this.ranges.length;n++){var i=this.ranges[n];if(rt(t,i.from())>=0&&rt(e,i.to())<=0)return n}return-1};var Ar=function(e,t){this.anchor=e,this.head=t};function Er(e,t,n){var i=e&&e.options.selectionsMayTouch,r=t[n];t.sort((function(e,t){return rt(e.from(),t.from())})),n=q(t,r);for(var o=1;o<t.length;o++){var a=t[o],l=t[o-1],s=rt(l.to(),a.from());if(i&&!a.empty()?s>0:s>=0){var u=st(l.from(),a.from()),c=lt(l.to(),a.to()),d=l.empty()?a.from()==a.head:l.from()==l.head;o<=n&&--n,t.splice(--o,2,new Ar(d?c:u,d?u:c))}}return new Fr(t,n)}function Lr(e,t){return new Fr([new Ar(e,t||e)],0)}function Tr(e){return e.text?it(e.from.line+e.text.length-1,Y(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function Mr(e,t){if(rt(e,t.from)<0)return e;if(rt(e,t.to)<=0)return Tr(t);var n=e.line+t.text.length-(t.to.line-t.from.line)-1,i=e.ch;return e.line==t.to.line&&(i+=Tr(t).ch-t.to.ch),it(n,i)}function Br(e,t){for(var n=[],i=0;i<e.sel.ranges.length;i++){var r=e.sel.ranges[i];n.push(new Ar(Mr(r.anchor,t),Mr(r.head,t)))}return Er(e.cm,n,e.sel.primIndex)}function Nr(e,t,n){return e.line==t.line?it(n.line,e.ch-t.ch+n.ch):it(n.line+(e.line-t.line),e.ch)}function Or(e){e.doc.mode=je(e.options,e.doc.modeOption),Ir(e)}function Ir(e){e.doc.iter((function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)})),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,ar(e,100),e.state.modeGen++,e.curOp&&pi(e)}function zr(e,t){return 0==t.from.ch&&0==t.to.ch&&""==Y(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Hr(e,t,n,i){function r(e){return n?n[e]:null}function o(e,n,r){!function(e,t,n,i){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),Mt(e),Bt(e,n);var r=i?i(e):1;r!=e.height&&Qe(e,r)}(e,n,r,i),dn(e,"change",e,t)}function a(e,t){for(var n=[],o=e;o<t;++o)n.push(new Kt(u[o],r(o),i));return n}var l=t.from,s=t.to,u=t.text,c=Ke(e,l.line),d=Ke(e,s.line),h=Y(u),f=r(u.length-1),p=s.line-l.line;if(t.full)e.insert(0,a(0,u.length)),e.remove(u.length,e.size-u.length);else if(zr(e,t)){var m=a(0,u.length-1);o(d,d.text,f),p&&e.remove(l.line,p),m.length&&e.insert(l.line,m)}else if(c==d)if(1==u.length)o(c,c.text.slice(0,l.ch)+h+c.text.slice(s.ch),f);else{var g=a(1,u.length-1);g.push(new Kt(h+c.text.slice(s.ch),f,i)),o(c,c.text.slice(0,l.ch)+u[0],r(0)),e.insert(l.line+1,g)}else if(1==u.length)o(c,c.text.slice(0,l.ch)+u[0]+d.text.slice(s.ch),r(0)),e.remove(l.line+1,p);else{o(c,c.text.slice(0,l.ch)+u[0],r(0)),o(d,h+d.text.slice(s.ch),f);var v=a(1,u.length-1);p>1&&e.remove(l.line+1,p-1),e.insert(l.line+1,v)}dn(e,"change",e,t)}function Rr(e,t,n){!function e(i,r,o){if(i.linked)for(var a=0;a<i.linked.length;++a){var l=i.linked[a];if(l.doc!=r){var s=o&&l.sharedHist;n&&!s||(t(l.doc,s),e(l.doc,i,s))}}}(e,null,!0)}function Pr(e,t){if(t.cm)throw new Error("This document is already in use.");e.doc=t,t.cm=e,di(e),Or(e),_r(e),e.options.direction=t.direction,e.options.lineWrapping||Xt(e),e.options.mode=t.modeOption,pi(e)}function _r(e){("rtl"==e.doc.direction?O:A)(e.display.lineDiv,"CodeMirror-rtl")}function Wr(e){this.done=[],this.undone=[],this.undoDepth=e?e.undoDepth:1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e?e.maxGeneration:1}function jr(e,t){var n={from:at(t.from),to:Tr(t),text:Ze(e,t.from,t.to)};return Vr(e,n,t.from.line,t.to.line+1),Rr(e,(function(e){return Vr(e,n,t.from.line,t.to.line+1)}),!0),n}function qr(e){for(;e.length;){if(!Y(e).ranges)break;e.pop()}}function Ur(e,t,n,i){var r=e.history;r.undone.length=0;var o,a,l=+new Date;if((r.lastOp==i||r.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&r.lastModTime>l-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=function(e,t){return t?(qr(e.done),Y(e.done)):e.done.length&&!Y(e.done).ranges?Y(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),Y(e.done)):void 0}(r,r.lastOp==i)))a=Y(o.changes),0==rt(t.from,t.to)&&0==rt(t.from,a.to)?a.to=Tr(t):o.changes.push(jr(e,t));else{var s=Y(r.done);for(s&&s.ranges||Gr(e.sel,r.done),o={changes:[jr(e,t)],generation:r.generation},r.done.push(o);r.done.length>r.undoDepth;)r.done.shift(),r.done[0].ranges||r.done.shift()}r.done.push(n),r.generation=++r.maxGeneration,r.lastModTime=r.lastSelTime=l,r.lastOp=r.lastSelOp=i,r.lastOrigin=r.lastSelOrigin=t.origin,a||ve(e,"historyAdded")}function $r(e,t,n,i){var r=e.history,o=i&&i.origin;n==r.lastSelOp||o&&r.lastSelOrigin==o&&(r.lastModTime==r.lastSelTime&&r.lastOrigin==o||function(e,t,n,i){var r=t.charAt(0);return"*"==r||"+"==r&&n.ranges.length==i.ranges.length&&n.somethingSelected()==i.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}(e,o,Y(r.done),t))?r.done[r.done.length-1]=t:Gr(t,r.done),r.lastSelTime=+new Date,r.lastSelOrigin=o,r.lastSelOp=n,i&&!1!==i.clearRedo&&qr(r.undone)}function Gr(e,t){var n=Y(t);n&&n.ranges&&n.equals(e)||t.push(e)}function Vr(e,t,n,i){var r=t["spans_"+e.id],o=0;e.iter(Math.max(e.first,n),Math.min(e.first+e.size,i),(function(n){n.markedSpans&&((r||(r=t["spans_"+e.id]={}))[o]=n.markedSpans),++o}))}function Xr(e){if(!e)return null;for(var t,n=0;n<e.length;++n)e[n].marker.explicitlyCleared?t||(t=e.slice(0,n)):t&&t.push(e[n]);return t?t.length?t:null:e}function Kr(e,t){var n=function(e,t){var n=t["spans_"+e.id];if(!n)return null;for(var i=[],r=0;r<t.text.length;++r)i.push(Xr(n[r]));return i}(e,t),i=Lt(e,t);if(!n)return i;if(!i)return n;for(var r=0;r<n.length;++r){var o=n[r],a=i[r];if(o&&a)e:for(var l=0;l<a.length;++l){for(var s=a[l],u=0;u<o.length;++u)if(o[u].marker==s.marker)continue e;o.push(s)}else a&&(n[r]=a)}return n}function Zr(e,t,n){for(var i=[],r=0;r<e.length;++r){var o=e[r];if(o.ranges)i.push(n?Fr.prototype.deepCopy.call(o):o);else{var a=o.changes,l=[];i.push({changes:l});for(var s=0;s<a.length;++s){var u=a[s],c=void 0;if(l.push({from:u.from,to:u.to,text:u.text}),t)for(var d in u)(c=d.match(/^spans_(\d+)$/))&&q(t,Number(c[1]))>-1&&(Y(l)[d]=u[d],delete u[d])}}}return i}function Yr(e,t,n,i){if(i){var r=e.anchor;if(n){var o=rt(t,r)<0;o!=rt(n,r)<0?(r=t,t=n):o!=rt(t,n)<0&&(t=n)}return new Ar(r,t)}return new Ar(n||t,t)}function Qr(e,t,n,i,r){null==r&&(r=e.cm&&(e.cm.display.shift||e.extend)),io(e,new Fr([Yr(e.sel.primary(),t,n,r)],0),i)}function Jr(e,t,n){for(var i=[],r=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)i[o]=Yr(e.sel.ranges[o],t[o],null,r);io(e,Er(e.cm,i,e.sel.primIndex),n)}function eo(e,t,n,i){var r=e.sel.ranges.slice(0);r[t]=n,io(e,Er(e.cm,r,e.sel.primIndex),i)}function to(e,t,n,i){io(e,Lr(t,n),i)}function no(e,t,n){var i=e.history.done,r=Y(i);r&&r.ranges?(i[i.length-1]=t,ro(e,t,n)):io(e,t,n)}function io(e,t,n){ro(e,t,n),$r(e,e.sel,e.cm?e.cm.curOp.id:NaN,n)}function ro(e,t,n){(be(e,"beforeSelectionChange")||e.cm&&be(e.cm,"beforeSelectionChange"))&&(t=function(e,t,n){var i={ranges:t.ranges,update:function(t){this.ranges=[];for(var n=0;n<t.length;n++)this.ranges[n]=new Ar(ct(e,t[n].anchor),ct(e,t[n].head))},origin:n&&n.origin};return ve(e,"beforeSelectionChange",e,i),e.cm&&ve(e.cm,"beforeSelectionChange",e.cm,i),i.ranges!=t.ranges?Er(e.cm,i.ranges,i.ranges.length-1):t}(e,t,n));var i=n&&n.bias||(rt(t.primary().head,e.sel.primary().head)<0?-1:1);oo(e,lo(e,t,i,!0)),n&&!1===n.scroll||!e.cm||"nocursor"==e.cm.getOption("readOnly")||Oi(e.cm)}function oo(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,ye(e.cm)),dn(e,"cursorActivity",e))}function ao(e){oo(e,lo(e,e.sel,null,!1))}function lo(e,t,n,i){for(var r,o=0;o<t.ranges.length;o++){var a=t.ranges[o],l=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],s=uo(e,a.anchor,l&&l.anchor,n,i),u=a.head==a.anchor?s:uo(e,a.head,l&&l.head,n,i);(r||s!=a.anchor||u!=a.head)&&(r||(r=t.ranges.slice(0,o)),r[o]=new Ar(s,u))}return r?Er(e.cm,r,t.primIndex):t}function so(e,t,n,i,r){var o=Ke(e,t.line);if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var l=o.markedSpans[a],s=l.marker,u="selectLeft"in s?!s.selectLeft:s.inclusiveLeft,c="selectRight"in s?!s.selectRight:s.inclusiveRight;if((null==l.from||(u?l.from<=t.ch:l.from<t.ch))&&(null==l.to||(c?l.to>=t.ch:l.to>t.ch))){if(r&&(ve(s,"beforeCursorEnter"),s.explicitlyCleared)){if(o.markedSpans){--a;continue}break}if(!s.atomic)continue;if(n){var d=s.find(i<0?1:-1),h=void 0;if((i<0?c:u)&&(d=co(e,d,-i,d&&d.line==t.line?o:null)),d&&d.line==t.line&&(h=rt(d,n))&&(i<0?h<0:h>0))return so(e,d,t,i,r)}var f=s.find(i<0?-1:1);return(i<0?u:c)&&(f=co(e,f,i,f.line==t.line?o:null)),f?so(e,f,t,i,r):null}}return t}function uo(e,t,n,i,r){var o=i||1,a=so(e,t,n,o,r)||!r&&so(e,t,n,o,!0)||so(e,t,n,-o,r)||!r&&so(e,t,n,-o,!0);return a||(e.cantEdit=!0,it(e.first,0))}function co(e,t,n,i){return n<0&&0==t.ch?t.line>e.first?ct(e,it(t.line-1)):null:n>0&&t.ch==(i||Ke(e,t.line)).text.length?t.line<e.first+e.size-1?it(t.line+1,0):null:new it(t.line,t.ch+n)}function ho(e){e.setSelection(it(e.firstLine(),0),it(e.lastLine()),$)}function fo(e,t,n){var i={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return i.canceled=!0}};return n&&(i.update=function(t,n,r,o){t&&(i.from=ct(e,t)),n&&(i.to=ct(e,n)),r&&(i.text=r),void 0!==o&&(i.origin=o)}),ve(e,"beforeChange",e,i),e.cm&&ve(e.cm,"beforeChange",e.cm,i),i.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:i.from,to:i.to,text:i.text,origin:i.origin}}function po(e,t,n){if(e.cm){if(!e.cm.curOp)return ir(e.cm,po)(e,t,n);if(e.cm.state.suppressEdits)return}if(!(be(e,"beforeChange")||e.cm&&be(e.cm,"beforeChange"))||(t=fo(e,t,!0))){var i=kt&&!n&&function(e,t,n){var i=null;if(e.iter(t.line,n.line+1,(function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var n=e.markedSpans[t].marker;!n.readOnly||i&&-1!=q(i,n)||(i||(i=[])).push(n)}})),!i)return null;for(var r=[{from:t,to:n}],o=0;o<i.length;++o)for(var a=i[o],l=a.find(0),s=0;s<r.length;++s){var u=r[s];if(!(rt(u.to,l.from)<0||rt(u.from,l.to)>0)){var c=[s,1],d=rt(u.from,l.from),h=rt(u.to,l.to);(d<0||!a.inclusiveLeft&&!d)&&c.push({from:u.from,to:l.from}),(h>0||!a.inclusiveRight&&!h)&&c.push({from:l.to,to:u.to}),r.splice.apply(r,c),s+=c.length-3}}return r}(e,t.from,t.to);if(i)for(var r=i.length-1;r>=0;--r)mo(e,{from:i[r].from,to:i[r].to,text:r?[""]:t.text,origin:t.origin});else mo(e,t)}}function mo(e,t){if(1!=t.text.length||""!=t.text[0]||0!=rt(t.from,t.to)){var n=Br(e,t);Ur(e,t,n,e.cm?e.cm.curOp.id:NaN),xo(e,t,n,Lt(e,t));var i=[];Rr(e,(function(e,n){n||-1!=q(i,e.history)||(Co(e.history,t),i.push(e.history)),xo(e,t,null,Lt(e,t))}))}}function go(e,t,n){var i=e.cm&&e.cm.state.suppressEdits;if(!i||n){for(var r,o=e.history,a=e.sel,l="undo"==t?o.done:o.undone,s="undo"==t?o.undone:o.done,u=0;u<l.length&&(r=l[u],n?!r.ranges||r.equals(e.sel):r.ranges);u++);if(u!=l.length){for(o.lastOrigin=o.lastSelOrigin=null;;){if(!(r=l.pop()).ranges){if(i)return void l.push(r);break}if(Gr(r,s),n&&!r.equals(e.sel))return void io(e,r,{clearRedo:!1});a=r}var c=[];Gr(a,s),s.push({changes:c,generation:o.generation}),o.generation=r.generation||++o.maxGeneration;for(var d=be(e,"beforeChange")||e.cm&&be(e.cm,"beforeChange"),h=function(n){var i=r.changes[n];if(i.origin=t,d&&!fo(e,i,!1))return l.length=0,{};c.push(jr(e,i));var o=n?Br(e,i):Y(l);xo(e,i,o,Kr(e,i)),!n&&e.cm&&e.cm.scrollIntoView({from:i.from,to:Tr(i)});var a=[];Rr(e,(function(e,t){t||-1!=q(a,e.history)||(Co(e.history,i),a.push(e.history)),xo(e,i,null,Kr(e,i))}))},f=r.changes.length-1;f>=0;--f){var p=h(f);if(p)return p.v}}}}function vo(e,t){if(0!=t&&(e.first+=t,e.sel=new Fr(Q(e.sel.ranges,(function(e){return new Ar(it(e.anchor.line+t,e.anchor.ch),it(e.head.line+t,e.head.ch))})),e.sel.primIndex),e.cm)){pi(e.cm,e.first,e.first-t,t);for(var n=e.cm.display,i=n.viewFrom;i<n.viewTo;i++)mi(e.cm,i,"gutter")}}function xo(e,t,n,i){if(e.cm&&!e.cm.curOp)return ir(e.cm,xo)(e,t,n,i);if(t.to.line<e.first)vo(e,t.text.length-1-(t.to.line-t.from.line));else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var r=t.text.length-1-(e.first-t.from.line);vo(e,r),t={from:it(e.first,0),to:it(t.to.line+r,t.to.ch),text:[Y(t.text)],origin:t.origin}}var o=e.lastLine();t.to.line>o&&(t={from:t.from,to:it(o,Ke(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=Ze(e,t.from,t.to),n||(n=Br(e,t)),e.cm?function(e,t,n){var i=e.doc,r=e.display,o=t.from,a=t.to,l=!1,s=o.line;e.options.lineWrapping||(s=Je(Wt(Ke(i,o.line))),i.iter(s,a.line+1,(function(e){if(e==r.maxLine)return l=!0,!0})));i.sel.contains(t.from,t.to)>-1&&ye(e);Hr(i,t,n,ci(e)),e.options.lineWrapping||(i.iter(s,o.line+t.text.length,(function(e){var t=Vt(e);t>r.maxLineLength&&(r.maxLine=e,r.maxLineLength=t,r.maxLineChanged=!0,l=!1)})),l&&(e.curOp.updateMaxLine=!0));(function(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var n=e.first,i=t-1;i>n;i--){var r=Ke(e,i).stateAfter;if(r&&(!(r instanceof ht)||i+r.lookAhead<t)){n=i+1;break}}e.highlightFrontier=Math.min(e.highlightFrontier,n)}})(i,o.line),ar(e,400);var u=t.text.length-(a.line-o.line)-1;t.full?pi(e):o.line!=a.line||1!=t.text.length||zr(e.doc,t)?pi(e,o.line,a.line+1,u):mi(e,o.line,"text");var c=be(e,"changes"),d=be(e,"change");if(d||c){var h={from:o,to:a,text:t.text,removed:t.removed,origin:t.origin};d&&dn(e,"change",e,h),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(h)}e.display.selForContextMenu=null}(e.cm,t,i):Hr(e,t,i),ro(e,n,$),e.cantEdit&&uo(e,it(e.firstLine(),0))&&(e.cantEdit=!1)}}function yo(e,t,n,i,r){var o;i||(i=n),rt(i,n)<0&&(n=(o=[i,n])[0],i=o[1]),"string"==typeof t&&(t=e.splitLines(t)),po(e,{from:n,to:i,text:t,origin:r})}function bo(e,t,n,i){n<e.line?e.line+=i:t<e.line&&(e.line=t,e.ch=0)}function Do(e,t,n,i){for(var r=0;r<e.length;++r){var o=e[r],a=!0;if(o.ranges){o.copied||((o=e[r]=o.deepCopy()).copied=!0);for(var l=0;l<o.ranges.length;l++)bo(o.ranges[l].anchor,t,n,i),bo(o.ranges[l].head,t,n,i)}else{for(var s=0;s<o.changes.length;++s){var u=o.changes[s];if(n<u.from.line)u.from=it(u.from.line+i,u.from.ch),u.to=it(u.to.line+i,u.to.ch);else if(t<=u.to.line){a=!1;break}}a||(e.splice(0,r+1),r=0)}}}function Co(e,t){var n=t.from.line,i=t.to.line,r=t.text.length-(i-n)-1;Do(e.done,n,i,r),Do(e.undone,n,i,r)}function wo(e,t,n,i){var r=t,o=t;return"number"==typeof t?o=Ke(e,ut(e,t)):r=Je(t),null==r?null:(i(o,r)&&e.cm&&mi(e.cm,r,n),o)}function ko(e){this.lines=e,this.parent=null;for(var t=0,n=0;n<e.length;++n)e[n].parent=this,t+=e[n].height;this.height=t}function So(e){this.children=e;for(var t=0,n=0,i=0;i<e.length;++i){var r=e[i];t+=r.chunkSize(),n+=r.height,r.parent=this}this.size=t,this.height=n,this.parent=null}Ar.prototype.from=function(){return st(this.anchor,this.head)},Ar.prototype.to=function(){return lt(this.anchor,this.head)},Ar.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},ko.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var n=e,i=e+t;n<i;++n){var r=this.lines[n];this.height-=r.height,Zt(r),dn(r,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,n){this.height+=n,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e));for(var i=0;i<t.length;++i)t[i].parent=this},iterN:function(e,t,n){for(var i=e+t;e<i;++e)if(n(this.lines[e]))return!0}},So.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t;for(var n=0;n<this.children.length;++n){var i=this.children[n],r=i.chunkSize();if(e<r){var o=Math.min(t,r-e),a=i.height;if(i.removeInner(e,o),this.height-=a-i.height,r==o&&(this.children.splice(n--,1),i.parent=null),0==(t-=o))break;e=0}else e-=r}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof ko))){var l=[];this.collapse(l),this.children=[new ko(l)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,n){this.size+=t.length,this.height+=n;for(var i=0;i<this.children.length;++i){var r=this.children[i],o=r.chunkSize();if(e<=o){if(r.insertInner(e,t,n),r.lines&&r.lines.length>50){for(var a=r.lines.length%25+25,l=a;l<r.lines.length;){var s=new ko(r.lines.slice(l,l+=25));r.height-=s.height,this.children.splice(++i,0,s),s.parent=this}r.lines=r.lines.slice(0,a),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var t=new So(e.children.splice(e.children.length-5,5));if(e.parent){e.size-=t.size,e.height-=t.height;var n=q(e.parent.children,e);e.parent.children.splice(n+1,0,t)}else{var i=new So(e.children);i.parent=e,e.children=[i,t],e=i}t.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,t,n){for(var i=0;i<this.children.length;++i){var r=this.children[i],o=r.chunkSize();if(e<o){var a=Math.min(t,o-e);if(r.iterN(e,a,n))return!0;if(0==(t-=a))break;e=0}else e-=o}}};var Fo=function(e,t,n){if(n)for(var i in n)n.hasOwnProperty(i)&&(this[i]=n[i]);this.doc=e,this.node=t};function Ao(e,t,n){Gt(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Ni(e,n)}Fo.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,n=this.line,i=Je(n);if(null!=i&&t){for(var r=0;r<t.length;++r)t[r]==this&&t.splice(r--,1);t.length||(n.widgets=null);var o=kn(this);Qe(n,Math.max(0,n.height-o)),e&&(nr(e,(function(){Ao(e,n,-o),mi(e,i,"widget")})),dn(e,"lineWidgetCleared",e,this,i))}},Fo.prototype.changed=function(){var e=this,t=this.height,n=this.doc.cm,i=this.line;this.height=null;var r=kn(this)-t;r&&(Ut(this.doc,i)||Qe(i,i.height+r),n&&nr(n,(function(){n.curOp.forceUpdate=!0,Ao(n,i,r),dn(n,"lineWidgetChanged",n,e,Je(i))})))},De(Fo);var Eo=0,Lo=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++Eo};function To(e,t,n,i,r){if(i&&i.shared)return function(e,t,n,i,r){(i=_(i)).shared=!1;var o=[To(e,t,n,i,r)],a=o[0],l=i.widgetNode;return Rr(e,(function(e){l&&(i.widgetNode=l.cloneNode(!0)),o.push(To(e,ct(e,t),ct(e,n),i,r));for(var s=0;s<e.linked.length;++s)if(e.linked[s].isParent)return;a=Y(o)})),new Mo(o,a)}(e,t,n,i,r);if(e.cm&&!e.cm.curOp)return ir(e.cm,To)(e,t,n,i,r);var o=new Lo(e,r),a=rt(t,n);if(i&&_(i,o,!1),a>0||0==a&&!1!==o.clearWhenEmpty)return o;if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=M("span",[o.replacedWith],"CodeMirror-widget"),i.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),i.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(_t(e,t.line,t,n,o)||t.line!=n.line&&_t(e,n.line,t,n,o))throw new Error("Inserting collapsed marker partially overlapping an existing one");St=!0}o.addToHistory&&Ur(e,{from:t,to:n,origin:"markText"},e.sel,NaN);var l,s=t.line,u=e.cm;if(e.iter(s,n.line+1,(function(i){u&&o.collapsed&&!u.options.lineWrapping&&Wt(i)==u.display.maxLine&&(l=!0),o.collapsed&&s!=t.line&&Qe(i,0),function(e,t,n){var i=n&&window.WeakSet&&(n.markedSpans||(n.markedSpans=new WeakSet));i&&e.markedSpans&&i.has(e.markedSpans)?e.markedSpans.push(t):(e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],i&&i.add(e.markedSpans)),t.marker.attachLine(e)}(i,new Ft(o,s==t.line?t.ch:null,s==n.line?n.ch:null),e.cm&&e.cm.curOp),++s})),o.collapsed&&e.iter(t.line,n.line+1,(function(t){Ut(e,t)&&Qe(t,0)})),o.clearOnEnter&&pe(o,"beforeCursorEnter",(function(){return o.clear()})),o.readOnly&&(kt=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++Eo,o.atomic=!0),u){if(l&&(u.curOp.updateMaxLine=!0),o.collapsed)pi(u,t.line,n.line+1);else if(o.className||o.startStyle||o.endStyle||o.css||o.attributes||o.title)for(var c=t.line;c<=n.line;c++)mi(u,c,"text");o.atomic&&ao(u.doc),dn(u,"markerAdded",u,o)}return o}Lo.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp;if(t&&Ki(e),be(this,"clear")){var n=this.find();n&&dn(this,"clear",n.from,n.to)}for(var i=null,r=null,o=0;o<this.lines.length;++o){var a=this.lines[o],l=At(a.markedSpans,this);e&&!this.collapsed?mi(e,Je(a),"text"):e&&(null!=l.to&&(r=Je(a)),null!=l.from&&(i=Je(a))),a.markedSpans=Et(a.markedSpans,l),null==l.from&&this.collapsed&&!Ut(this.doc,a)&&e&&Qe(a,ai(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var s=0;s<this.lines.length;++s){var u=Wt(this.lines[s]),c=Vt(u);c>e.display.maxLineLength&&(e.display.maxLine=u,e.display.maxLineLength=c,e.display.maxLineChanged=!0)}null!=i&&e&&this.collapsed&&pi(e,i,r+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&ao(e.doc)),e&&dn(e,"markerCleared",e,this,i,r),t&&Zi(e),this.parent&&this.parent.clear()}},Lo.prototype.find=function(e,t){var n,i;null==e&&"bookmark"==this.type&&(e=1);for(var r=0;r<this.lines.length;++r){var o=this.lines[r],a=At(o.markedSpans,this);if(null!=a.from&&(n=it(t?o:Je(o),a.from),-1==e))return n;if(null!=a.to&&(i=it(t?o:Je(o),a.to),1==e))return i}return n&&{from:n,to:i}},Lo.prototype.changed=function(){var e=this,t=this.find(-1,!0),n=this,i=this.doc.cm;t&&i&&nr(i,(function(){var r=t.line,o=Je(t.line),a=On(i,o);if(a&&(Wn(a),i.curOp.selectionChanged=i.curOp.forceUpdate=!0),i.curOp.updateMaxLine=!0,!Ut(n.doc,r)&&null!=n.height){var l=n.height;n.height=null;var s=kn(n)-l;s&&Qe(r,r.height+s)}dn(i,"markerChanged",i,e)}))},Lo.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;t.maybeHiddenMarkers&&-1!=q(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},Lo.prototype.detachLine=function(e){if(this.lines.splice(q(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},De(Lo);var Mo=function(e,t){this.markers=e,this.primary=t;for(var n=0;n<e.length;++n)e[n].parent=this};function Bo(e){return e.findMarks(it(e.first,0),e.clipPos(it(e.lastLine())),(function(e){return e.parent}))}function No(e){for(var t=function(t){var n=e[t],i=[n.primary.doc];Rr(n.primary.doc,(function(e){return i.push(e)}));for(var r=0;r<n.markers.length;r++){var o=n.markers[r];-1==q(i,o.doc)&&(o.parent=null,n.markers.splice(r--,1))}},n=0;n<e.length;n++)t(n)}Mo.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();dn(this,"clear")}},Mo.prototype.find=function(e,t){return this.primary.find(e,t)},De(Mo);var Oo=0,Io=function(e,t,n,i,r){if(!(this instanceof Io))return new Io(e,t,n,i,r);null==n&&(n=0),So.call(this,[new ko([new Kt("",null)])]),this.first=n,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=n;var o=it(n,0);this.sel=Lr(o),this.history=new Wr(null),this.id=++Oo,this.modeOption=t,this.lineSep=i,this.direction="rtl"==r?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Hr(this,{from:o,to:o,text:e}),io(this,Lr(o),$)};Io.prototype=ee(So.prototype,{constructor:Io,iter:function(e,t,n){n?this.iterN(e-this.first,t-e,n):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var n=0,i=0;i<t.length;++i)n+=t[i].height;this.insertInner(e-this.first,t,n)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=Ye(this,this.first,this.first+this.size);return!1===e?t:t.join(e||this.lineSeparator())},setValue:or((function(e){var t=it(this.first,0),n=this.first+this.size-1;po(this,{from:t,to:it(n,Ke(this,n).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Ii(this.cm,0,0),io(this,Lr(t),$)})),replaceRange:function(e,t,n,i){yo(this,e,t=ct(this,t),n=n?ct(this,n):t,i)},getRange:function(e,t,n){var i=Ze(this,ct(this,e),ct(this,t));return!1===n?i:""===n?i.join(""):i.join(n||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e);return t&&t.text},getLineHandle:function(e){if(tt(this,e))return Ke(this,e)},getLineNumber:function(e){return Je(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=Ke(this,e)),Wt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return ct(this,e)},getCursor:function(e){var t=this.sel.primary();return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:or((function(e,t,n){to(this,ct(this,"number"==typeof e?it(e,t||0):e),null,n)})),setSelection:or((function(e,t,n){to(this,ct(this,e),ct(this,t||e),n)})),extendSelection:or((function(e,t,n){Qr(this,ct(this,e),t&&ct(this,t),n)})),extendSelections:or((function(e,t){Jr(this,dt(this,e),t)})),extendSelectionsBy:or((function(e,t){Jr(this,dt(this,Q(this.sel.ranges,e)),t)})),setSelections:or((function(e,t,n){if(e.length){for(var i=[],r=0;r<e.length;r++)i[r]=new Ar(ct(this,e[r].anchor),ct(this,e[r].head||e[r].anchor));null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),io(this,Er(this.cm,i,t),n)}})),addSelection:or((function(e,t,n){var i=this.sel.ranges.slice(0);i.push(new Ar(ct(this,e),ct(this,t||e))),io(this,Er(this.cm,i,i.length-1),n)})),getSelection:function(e){for(var t,n=this.sel.ranges,i=0;i<n.length;i++){var r=Ze(this,n[i].from(),n[i].to());t=t?t.concat(r):r}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],n=this.sel.ranges,i=0;i<n.length;i++){var r=Ze(this,n[i].from(),n[i].to());!1!==e&&(r=r.join(e||this.lineSeparator())),t[i]=r}return t},replaceSelection:function(e,t,n){for(var i=[],r=0;r<this.sel.ranges.length;r++)i[r]=e;this.replaceSelections(i,t,n||"+input")},replaceSelections:or((function(e,t,n){for(var i=[],r=this.sel,o=0;o<r.ranges.length;o++){var a=r.ranges[o];i[o]={from:a.from(),to:a.to(),text:this.splitLines(e[o]),origin:n}}for(var l=t&&"end"!=t&&function(e,t,n){for(var i=[],r=it(e.first,0),o=r,a=0;a<t.length;a++){var l=t[a],s=Nr(l.from,r,o),u=Nr(Tr(l),r,o);if(r=l.to,o=u,"around"==n){var c=e.sel.ranges[a],d=rt(c.head,c.anchor)<0;i[a]=new Ar(d?u:s,d?s:u)}else i[a]=new Ar(s,s)}return new Fr(i,e.sel.primIndex)}(this,i,t),s=i.length-1;s>=0;s--)po(this,i[s]);l?no(this,l):this.cm&&Oi(this.cm)})),undo:or((function(){go(this,"undo")})),redo:or((function(){go(this,"redo")})),undoSelection:or((function(){go(this,"undo",!0)})),redoSelection:or((function(){go(this,"redo",!0)})),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,n=0,i=0;i<e.done.length;i++)e.done[i].ranges||++t;for(var r=0;r<e.undone.length;r++)e.undone[r].ranges||++n;return{undo:t,redo:n}},clearHistory:function(){var e=this;this.history=new Wr(this.history),Rr(this,(function(t){return t.history=e.history}),!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Zr(this.history.done),undone:Zr(this.history.undone)}},setHistory:function(e){var t=this.history=new Wr(this.history);t.done=Zr(e.done.slice(0),null,!0),t.undone=Zr(e.undone.slice(0),null,!0)},setGutterMarker:or((function(e,t,n){return wo(this,e,"gutter",(function(e){var i=e.gutterMarkers||(e.gutterMarkers={});return i[t]=n,!n&&re(i)&&(e.gutterMarkers=null),!0}))})),clearGutter:or((function(e){var t=this;this.iter((function(n){n.gutterMarkers&&n.gutterMarkers[e]&&wo(t,n,"gutter",(function(){return n.gutterMarkers[e]=null,re(n.gutterMarkers)&&(n.gutterMarkers=null),!0}))}))})),lineInfo:function(e){var t;if("number"==typeof e){if(!tt(this,e))return null;if(t=e,!(e=Ke(this,e)))return null}else if(null==(t=Je(e)))return null;return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:or((function(e,t,n){return wo(this,e,"gutter"==t?"gutter":"class",(function(e){var i="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass";if(e[i]){if(S(n).test(e[i]))return!1;e[i]+=" "+n}else e[i]=n;return!0}))})),removeLineClass:or((function(e,t,n){return wo(this,e,"gutter"==t?"gutter":"class",(function(e){var i="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",r=e[i];if(!r)return!1;if(null==n)e[i]=null;else{var o=r.match(S(n));if(!o)return!1;var a=o.index+o[0].length;e[i]=r.slice(0,o.index)+(o.index&&a!=r.length?" ":"")+r.slice(a)||null}return!0}))})),addLineWidget:or((function(e,t,n){return function(e,t,n,i){var r=new Fo(e,n,i),o=e.cm;return o&&r.noHScroll&&(o.display.alignWidgets=!0),wo(e,t,"widget",(function(t){var n=t.widgets||(t.widgets=[]);if(null==r.insertAt?n.push(r):n.splice(Math.min(n.length,Math.max(0,r.insertAt)),0,r),r.line=t,o&&!Ut(e,t)){var i=Gt(t)<e.scrollTop;Qe(t,t.height+kn(r)),i&&Ni(o,r.height),o.curOp.forceUpdate=!0}return!0})),o&&dn(o,"lineWidgetAdded",o,r,"number"==typeof t?t:Je(t)),r}(this,e,t,n)})),removeLineWidget:function(e){e.clear()},markText:function(e,t,n){return To(this,ct(this,e),ct(this,t),n,n&&n.type||"range")},setBookmark:function(e,t){var n={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents};return To(this,e=ct(this,e),e,n,"bookmark")},findMarksAt:function(e){var t=[],n=Ke(this,(e=ct(this,e)).line).markedSpans;if(n)for(var i=0;i<n.length;++i){var r=n[i];(null==r.from||r.from<=e.ch)&&(null==r.to||r.to>=e.ch)&&t.push(r.marker.parent||r.marker)}return t},findMarks:function(e,t,n){e=ct(this,e),t=ct(this,t);var i=[],r=e.line;return this.iter(e.line,t.line+1,(function(o){var a=o.markedSpans;if(a)for(var l=0;l<a.length;l++){var s=a[l];null!=s.to&&r==e.line&&e.ch>=s.to||null==s.from&&r!=e.line||null!=s.from&&r==t.line&&s.from>=t.ch||n&&!n(s.marker)||i.push(s.marker.parent||s.marker)}++r})),i},getAllMarks:function(){var e=[];return this.iter((function(t){var n=t.markedSpans;if(n)for(var i=0;i<n.length;++i)null!=n[i].from&&e.push(n[i].marker)})),e},posFromIndex:function(e){var t,n=this.first,i=this.lineSeparator().length;return this.iter((function(r){var o=r.text.length+i;if(o>e)return t=e,!0;e-=o,++n})),ct(this,it(n,t))},indexFromPos:function(e){var t=(e=ct(this,e)).ch;if(e.line<this.first||e.ch<0)return 0;var n=this.lineSeparator().length;return this.iter(this.first,e.line,(function(e){t+=e.text.length+n})),t},copy:function(e){var t=new Io(Ye(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={});var t=this.first,n=this.first+this.size;null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<n&&(n=e.to);var i=new Io(Ye(this,t,n),e.mode||this.modeOption,t,this.lineSep,this.direction);return e.sharedHist&&(i.history=this.history),(this.linked||(this.linked=[])).push({doc:i,sharedHist:e.sharedHist}),i.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var n=0;n<t.length;n++){var i=t[n],r=i.find(),o=e.clipPos(r.from),a=e.clipPos(r.to);if(rt(o,a)){var l=To(e,o,a,i.primary,i.primary.type);i.markers.push(l),l.parent=i}}}(i,Bo(this)),i},unlinkDoc:function(e){if(e instanceof Ma&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t){if(this.linked[t].doc==e){this.linked.splice(t,1),e.unlinkDoc(this),No(Bo(this));break}}if(e.history==this.history){var n=[e.id];Rr(e,(function(e){return n.push(e.id)}),!0),e.history=new Wr(null),e.history.done=Zr(this.history.done,n),e.history.undone=Zr(this.history.undone,n)}},iterLinkedDocs:function(e){Rr(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):Oe(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:or((function(e){var t;("rtl"!=e&&(e="ltr"),e!=this.direction)&&(this.direction=e,this.iter((function(e){return e.order=null})),this.cm&&nr(t=this.cm,(function(){_r(t),pi(t)})))}))}),Io.prototype.eachLine=Io.prototype.iter;var zo=0;function Ho(e){var t=this;if(Ro(t),!xe(t,e)&&!Sn(t.display,e)){Ce(e),a&&(zo=+new Date);var n=hi(t,e,!0),i=e.dataTransfer.files;if(n&&!t.isReadOnly())if(i&&i.length&&window.FileReader&&window.File)for(var r=i.length,o=Array(r),l=0,s=function(){++l==r&&ir(t,(function(){var e={from:n=ct(t.doc,n),to:n,text:t.doc.splitLines(o.filter((function(e){return null!=e})).join(t.doc.lineSeparator())),origin:"paste"};po(t.doc,e),no(t.doc,Lr(ct(t.doc,n),ct(t.doc,Tr(e))))}))()},u=function(e,n){if(t.options.allowDropFileTypes&&-1==q(t.options.allowDropFileTypes,e.type))s();else{var i=new FileReader;i.onerror=function(){return s()},i.onload=function(){var e=i.result;/[\x00-\x08\x0e-\x1f]{2}/.test(e)||(o[n]=e),s()},i.readAsText(e)}},c=0;c<i.length;c++)u(i[c],c);else{if(t.state.draggingText&&t.doc.sel.contains(n)>-1)return t.state.draggingText(e),void setTimeout((function(){return t.display.input.focus()}),20);try{var d=e.dataTransfer.getData("Text");if(d){var h;if(t.state.draggingText&&!t.state.draggingText.copy&&(h=t.listSelections()),ro(t.doc,Lr(n,n)),h)for(var f=0;f<h.length;++f)yo(t.doc,"",h[f].anchor,h[f].head,"drag");t.replaceSelection(d,"around","paste"),t.display.input.focus()}}catch(e){}}}}function Ro(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Po(e){if(document.getElementsByClassName){for(var t=document.getElementsByClassName("CodeMirror"),n=[],i=0;i<t.length;i++){var r=t[i].CodeMirror;r&&n.push(r)}n.length&&n[0].operation((function(){for(var t=0;t<n.length;t++)e(n[t])}))}}var _o=!1;function Wo(){var e;_o||(pe(window,"resize",(function(){null==e&&(e=setTimeout((function(){e=null,Po(jo)}),100))})),pe(window,"blur",(function(){return Po(Ei)})),_o=!0)}function jo(e){var t=e.display;t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}for(var qo={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Uo=0;Uo<10;Uo++)qo[Uo+48]=qo[Uo+96]=String(Uo);for(var $o=65;$o<=90;$o++)qo[$o]=String.fromCharCode($o);for(var Go=1;Go<=12;Go++)qo[Go+111]=qo[Go+63235]="F"+Go;var Vo={};function Xo(e){var t,n,i,r,o=e.split(/-(?!$)/);e=o[o.length-1];for(var a=0;a<o.length-1;a++){var l=o[a];if(/^(cmd|meta|m)$/i.test(l))r=!0;else if(/^a(lt)?$/i.test(l))t=!0;else if(/^(c|ctrl|control)$/i.test(l))n=!0;else{if(!/^s(hift)?$/i.test(l))throw new Error("Unrecognized modifier name: "+l);i=!0}}return t&&(e="Alt-"+e),n&&(e="Ctrl-"+e),r&&(e="Cmd-"+e),i&&(e="Shift-"+e),e}function Ko(e){var t={};for(var n in e)if(e.hasOwnProperty(n)){var i=e[n];if(/^(name|fallthrough|(de|at)tach)$/.test(n))continue;if("..."==i){delete e[n];continue}for(var r=Q(n.split(" "),Xo),o=0;o<r.length;o++){var a=void 0,l=void 0;o==r.length-1?(l=r.join(" "),a=i):(l=r.slice(0,o+1).join(" "),a="...");var s=t[l];if(s){if(s!=a)throw new Error("Inconsistent bindings for "+l)}else t[l]=a}delete e[n]}for(var u in t)e[u]=t[u];return e}function Zo(e,t,n,i){var r=(t=ea(t)).call?t.call(e,i):t[e];if(!1===r)return"nothing";if("..."===r)return"multi";if(null!=r&&n(r))return"handled";if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return Zo(e,t.fallthrough,n,i);for(var o=0;o<t.fallthrough.length;o++){var a=Zo(e,t.fallthrough[o],n,i);if(a)return a}}}function Yo(e){var t="string"==typeof e?e:qo[e.keyCode];return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Qo(e,t,n){var i=e;return t.altKey&&"Alt"!=i&&(e="Alt-"+e),(w?t.metaKey:t.ctrlKey)&&"Ctrl"!=i&&(e="Ctrl-"+e),(w?t.ctrlKey:t.metaKey)&&"Mod"!=i&&(e="Cmd-"+e),!n&&t.shiftKey&&"Shift"!=i&&(e="Shift-"+e),e}function Jo(e,t){if(h&&34==e.keyCode&&e.char)return!1;var n=qo[e.keyCode];return null!=n&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(n=e.code),Qo(n,e,t))}function ea(e){return"string"==typeof e?Vo[e]:e}function ta(e,t){for(var n=e.doc.sel.ranges,i=[],r=0;r<n.length;r++){for(var o=t(n[r]);i.length&&rt(o.from,Y(i).to)<=0;){var a=i.pop();if(rt(a.from,o.from)<0){o.from=a.from;break}}i.push(o)}nr(e,(function(){for(var t=i.length-1;t>=0;t--)yo(e.doc,"",i[t].from,i[t].to,"+delete");Oi(e)}))}function na(e,t,n){var i=le(e.text,t+n,n);return i<0||i>e.text.length?null:i}function ia(e,t,n){var i=na(e,t.ch,n);return null==i?null:new it(t.line,i,n<0?"after":"before")}function ra(e,t,n,i,r){if(e){"rtl"==t.doc.direction&&(r=-r);var o=he(n,t.doc.direction);if(o){var a,l=r<0?Y(o):o[0],s=r<0==(1==l.level)?"after":"before";if(l.level>0||"rtl"==t.doc.direction){var u=In(t,n);a=r<0?n.text.length-1:0;var c=zn(t,u,a).top;a=se((function(e){return zn(t,u,e).top==c}),r<0==(1==l.level)?l.from:l.to-1,a),"before"==s&&(a=na(n,a,1))}else a=r<0?l.to:l.from;return new it(i,a,s)}}return new it(i,r<0?n.text.length:0,r<0?"before":"after")}Vo.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Vo.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Vo.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Vo.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Vo.default=y?Vo.macDefault:Vo.pcDefault;var oa={selectAll:ho,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),$)},killLine:function(e){return ta(e,(function(t){if(t.empty()){var n=Ke(e.doc,t.head.line).text.length;return t.head.ch==n&&t.head.line<e.lastLine()?{from:t.head,to:it(t.head.line+1,0)}:{from:t.head,to:it(t.head.line,n)}}return{from:t.from(),to:t.to()}}))},deleteLine:function(e){return ta(e,(function(t){return{from:it(t.from().line,0),to:ct(e.doc,it(t.to().line+1,0))}}))},delLineLeft:function(e){return ta(e,(function(e){return{from:it(e.from().line,0),to:e.from()}}))},delWrappedLineLeft:function(e){return ta(e,(function(t){var n=e.charCoords(t.head,"div").top+5;return{from:e.coordsChar({left:0,top:n},"div"),to:t.from()}}))},delWrappedLineRight:function(e){return ta(e,(function(t){var n=e.charCoords(t.head,"div").top+5,i=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div");return{from:t.from(),to:i}}))},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(it(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(it(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy((function(t){return aa(e,t.head.line)}),{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy((function(t){return la(e,t.head)}),{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy((function(t){return function(e,t){var n=Ke(e.doc,t),i=function(e){for(var t;t=Rt(e);)e=t.find(1,!0).line;return e}(n);i!=n&&(t=Je(i));return ra(!0,e,n,t,-1)}(e,t.head.line)}),{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")}),V)},goLineLeft:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5;return e.coordsChar({left:0,top:n},"div")}),V)},goLineLeftSmart:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5,i=e.coordsChar({left:0,top:n},"div");return i.ch<e.getLine(i.line).search(/\S/)?la(e,t.head):i}),V)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"codepoint")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],n=e.listSelections(),i=e.options.tabSize,r=0;r<n.length;r++){var o=n[r].from(),a=W(e.getLine(o.line),o.ch,i);t.push(Z(i-a%i))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return nr(e,(function(){for(var t=e.listSelections(),n=[],i=0;i<t.length;i++)if(t[i].empty()){var r=t[i].head,o=Ke(e.doc,r.line).text;if(o)if(r.ch==o.length&&(r=new it(r.line,r.ch-1)),r.ch>0)r=new it(r.line,r.ch+1),e.replaceRange(o.charAt(r.ch-1)+o.charAt(r.ch-2),it(r.line,r.ch-2),r,"+transpose");else if(r.line>e.doc.first){var a=Ke(e.doc,r.line-1).text;a&&(r=new it(r.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),it(r.line-1,a.length-1),r,"+transpose"))}n.push(new Ar(r,r))}e.setSelections(n)}))},newlineAndIndent:function(e){return nr(e,(function(){for(var t=e.listSelections(),n=t.length-1;n>=0;n--)e.replaceRange(e.doc.lineSeparator(),t[n].anchor,t[n].head,"+input");t=e.listSelections();for(var i=0;i<t.length;i++)e.indentLine(t[i].from().line,null,!0);Oi(e)}))},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}};function aa(e,t){var n=Ke(e.doc,t),i=Wt(n);return i!=n&&(t=Je(i)),ra(!0,e,i,t,1)}function la(e,t){var n=aa(e,t.line),i=Ke(e.doc,n.line),r=he(i,e.doc.direction);if(!r||0==r[0].level){var o=Math.max(n.ch,i.text.search(/\S/)),a=t.line==n.line&&t.ch<=o&&t.ch;return it(n.line,a?0:o,n.sticky)}return n}function sa(e,t,n){if("string"==typeof t&&!(t=oa[t]))return!1;e.display.input.ensurePolled();var i=e.display.shift,r=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),n&&(e.display.shift=!1),r=t(e)!=U}finally{e.display.shift=i,e.state.suppressEdits=!1}return r}var ua=new j;function ca(e,t,n,i){var r=e.state.keySeq;if(r){if(Yo(t))return"handled";if(/\'$/.test(t)?e.state.keySeq=null:ua.set(50,(function(){e.state.keySeq==r&&(e.state.keySeq=null,e.display.input.reset())})),da(e,r+" "+t,n,i))return!0}return da(e,t,n,i)}function da(e,t,n,i){var r=function(e,t,n){for(var i=0;i<e.state.keyMaps.length;i++){var r=Zo(t,e.state.keyMaps[i],n,e);if(r)return r}return e.options.extraKeys&&Zo(t,e.options.extraKeys,n,e)||Zo(t,e.options.keyMap,n,e)}(e,t,i);return"multi"==r&&(e.state.keySeq=t),"handled"==r&&dn(e,"keyHandled",e,t,n),"handled"!=r&&"multi"!=r||(Ce(n),ki(e)),!!r}function ha(e,t){var n=Jo(t,!0);return!!n&&(t.shiftKey&&!e.state.keySeq?ca(e,"Shift-"+n,t,(function(t){return sa(e,t,!0)}))||ca(e,n,t,(function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return sa(e,t)})):ca(e,n,t,(function(t){return sa(e,t)})))}var fa=null;function pa(e){var t=this;if(!(e.target&&e.target!=t.display.input.getField()||(t.curOp.focus=N(H(t)),xe(t,e)))){a&&l<11&&27==e.keyCode&&(e.returnValue=!1);var i=e.keyCode;t.display.shift=16==i||e.shiftKey;var r=ha(t,e);h&&(fa=r?i:null,r||88!=i||ze||!(y?e.metaKey:e.ctrlKey)||t.replaceSelection("",null,"cut")),n&&!y&&!r&&46==i&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),18!=i||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||function(e){var t=e.display.lineDiv;function n(e){18!=e.keyCode&&e.altKey||(A(t,"CodeMirror-crosshair"),ge(document,"keyup",n),ge(document,"mouseover",n))}O(t,"CodeMirror-crosshair"),pe(document,"keyup",n),pe(document,"mouseover",n)}(t)}}function ma(e){16==e.keyCode&&(this.doc.sel.shift=!1),xe(this,e)}function ga(e){var t=this;if(!(e.target&&e.target!=t.display.input.getField()||Sn(t.display,e)||xe(t,e)||e.ctrlKey&&!e.altKey||y&&e.metaKey)){var n=e.keyCode,i=e.charCode;if(h&&n==fa)return fa=null,void Ce(e);if(!h||e.which&&!(e.which<10)||!ha(t,e)){var r=String.fromCharCode(null==i?n:i);"\b"!=r&&(function(e,t,n){return ca(e,"'"+n+"'",t,(function(t){return sa(e,t,!0)}))}(t,e,r)||t.display.input.onKeyPress(e))}}}var va,xa,ya=function(e,t,n){this.time=e,this.pos=t,this.button=n};function ba(e){var t=this,n=t.display;if(!(xe(t,e)||n.activeTouch&&n.input.supportsTouch()))if(n.input.ensurePolled(),n.shift=e.shiftKey,Sn(n,e))s||(n.scroller.draggable=!1,setTimeout((function(){return n.scroller.draggable=!0}),100));else if(!wa(t,e)){var i=hi(t,e),r=Ae(e),o=i?function(e,t){var n=+new Date;return xa&&xa.compare(n,e,t)?(va=xa=null,"triple"):va&&va.compare(n,e,t)?(xa=new ya(n,e,t),va=null,"double"):(va=new ya(n,e,t),xa=null,"single")}(i,r):"single";R(t).focus(),1==r&&t.state.selectingText&&t.state.selectingText(e),i&&function(e,t,n,i,r){var o="Click";"double"==i?o="Double"+o:"triple"==i&&(o="Triple"+o);return ca(e,Qo(o=(1==t?"Left":2==t?"Middle":"Right")+o,r),r,(function(t){if("string"==typeof t&&(t=oa[t]),!t)return!1;var i=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),i=t(e,n)!=U}finally{e.state.suppressEdits=!1}return i}))}(t,r,i,o,e)||(1==r?i?function(e,t,n,i){a?setTimeout(P(Si,e),0):e.curOp.focus=N(H(e));var r,o=function(e,t,n){var i=e.getOption("configureMouse"),r=i?i(e,t,n):{};if(null==r.unit){var o=b?n.shiftKey&&n.metaKey:n.altKey;r.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}(null==r.extend||e.doc.extend)&&(r.extend=e.doc.extend||n.shiftKey);null==r.addNew&&(r.addNew=y?n.metaKey:n.ctrlKey);null==r.moveOnDrag&&(r.moveOnDrag=!(y?n.altKey:n.ctrlKey));return r}(e,n,i),u=e.doc.sel;e.options.dragDrop&&Te&&!e.isReadOnly()&&"single"==n&&(r=u.contains(t))>-1&&(rt((r=u.ranges[r]).from(),t)<0||t.xRel>0)&&(rt(r.to(),t)>0||t.xRel<0)?function(e,t,n,i){var r=e.display,o=!1,u=ir(e,(function(t){s&&(r.scroller.draggable=!1),e.state.draggingText=!1,e.state.delayingBlurEvent&&(e.hasFocus()?e.state.delayingBlurEvent=!1:Fi(e)),ge(r.wrapper.ownerDocument,"mouseup",u),ge(r.wrapper.ownerDocument,"mousemove",c),ge(r.scroller,"dragstart",d),ge(r.scroller,"drop",u),o||(Ce(t),i.addNew||Qr(e.doc,n,null,null,i.extend),s&&!f||a&&9==l?setTimeout((function(){r.wrapper.ownerDocument.body.focus({preventScroll:!0}),r.input.focus()}),20):r.input.focus())})),c=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},d=function(){return o=!0};s&&(r.scroller.draggable=!0);e.state.draggingText=u,u.copy=!i.moveOnDrag,pe(r.wrapper.ownerDocument,"mouseup",u),pe(r.wrapper.ownerDocument,"mousemove",c),pe(r.scroller,"dragstart",d),pe(r.scroller,"drop",u),e.state.delayingBlurEvent=!0,setTimeout((function(){return r.input.focus()}),20),r.scroller.dragDrop&&r.scroller.dragDrop()}(e,i,t,o):function(e,t,n,i){a&&Fi(e);var r=e.display,o=e.doc;Ce(t);var l,s,u=o.sel,c=u.ranges;i.addNew&&!i.extend?(s=o.sel.contains(n),l=s>-1?c[s]:new Ar(n,n)):(l=o.sel.primary(),s=o.sel.primIndex);if("rectangle"==i.unit)i.addNew||(l=new Ar(n,n)),n=hi(e,t,!0,!0),s=-1;else{var d=Da(e,n,i.unit);l=i.extend?Yr(l,d.anchor,d.head,i.extend):d}i.addNew?-1==s?(s=c.length,io(o,Er(e,c.concat([l]),s),{scroll:!1,origin:"*mouse"})):c.length>1&&c[s].empty()&&"char"==i.unit&&!i.extend?(io(o,Er(e,c.slice(0,s).concat(c.slice(s+1)),0),{scroll:!1,origin:"*mouse"}),u=o.sel):eo(o,s,l,G):(s=0,io(o,new Fr([l],0),G),u=o.sel);var h=n;function f(t){if(0!=rt(h,t))if(h=t,"rectangle"==i.unit){for(var r=[],a=e.options.tabSize,c=W(Ke(o,n.line).text,n.ch,a),d=W(Ke(o,t.line).text,t.ch,a),f=Math.min(c,d),p=Math.max(c,d),m=Math.min(n.line,t.line),g=Math.min(e.lastLine(),Math.max(n.line,t.line));m<=g;m++){var v=Ke(o,m).text,x=X(v,f,a);f==p?r.push(new Ar(it(m,x),it(m,x))):v.length>x&&r.push(new Ar(it(m,x),it(m,X(v,p,a))))}r.length||r.push(new Ar(n,n)),io(o,Er(e,u.ranges.slice(0,s).concat(r),s),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var y,b=l,D=Da(e,t,i.unit),C=b.anchor;rt(D.anchor,C)>0?(y=D.head,C=st(b.from(),D.anchor)):(y=D.anchor,C=lt(b.to(),D.head));var w=u.ranges.slice(0);w[s]=function(e,t){var n=t.anchor,i=t.head,r=Ke(e.doc,n.line);if(0==rt(n,i)&&n.sticky==i.sticky)return t;var o=he(r);if(!o)return t;var a=ce(o,n.ch,n.sticky),l=o[a];if(l.from!=n.ch&&l.to!=n.ch)return t;var s,u=a+(l.from==n.ch==(1!=l.level)?0:1);if(0==u||u==o.length)return t;if(i.line!=n.line)s=(i.line-n.line)*("ltr"==e.doc.direction?1:-1)>0;else{var c=ce(o,i.ch,i.sticky),d=c-a||(i.ch-n.ch)*(1==l.level?-1:1);s=c==u-1||c==u?d<0:d>0}var h=o[u+(s?-1:0)],f=s==(1==h.level),p=f?h.from:h.to,m=f?"after":"before";return n.ch==p&&n.sticky==m?t:new Ar(new it(n.line,p,m),i)}(e,new Ar(ct(o,C),y)),io(o,Er(e,w,s),G)}}var p=r.wrapper.getBoundingClientRect(),m=0;function g(t){var n=++m,a=hi(e,t,!0,"rectangle"==i.unit);if(a)if(0!=rt(a,h)){e.curOp.focus=N(H(e)),f(a);var l=Mi(r,o);(a.line>=l.to||a.line<l.from)&&setTimeout(ir(e,(function(){m==n&&g(t)})),150)}else{var s=t.clientY<p.top?-20:t.clientY>p.bottom?20:0;s&&setTimeout(ir(e,(function(){m==n&&(r.scroller.scrollTop+=s,g(t))})),50)}}function v(t){e.state.selectingText=!1,m=1/0,t&&(Ce(t),r.input.focus()),ge(r.wrapper.ownerDocument,"mousemove",x),ge(r.wrapper.ownerDocument,"mouseup",y),o.history.lastSelOrigin=null}var x=ir(e,(function(e){0!==e.buttons&&Ae(e)?g(e):v(e)})),y=ir(e,v);e.state.selectingText=y,pe(r.wrapper.ownerDocument,"mousemove",x),pe(r.wrapper.ownerDocument,"mouseup",y)}(e,i,t,o)}(t,i,o,e):Fe(e)==n.scroller&&Ce(e):2==r?(i&&Qr(t.doc,i),setTimeout((function(){return n.input.focus()}),20)):3==r&&(k?t.display.input.onContextMenu(e):Fi(t)))}}function Da(e,t,n){if("char"==n)return new Ar(t,t);if("word"==n)return e.findWordAt(t);if("line"==n)return new Ar(it(t.line,0),ct(e.doc,it(t.line+1,0)));var i=n(e,t);return new Ar(i.from,i.to)}function Ca(e,t,n,i){var r,o;if(t.touches)r=t.touches[0].clientX,o=t.touches[0].clientY;else try{r=t.clientX,o=t.clientY}catch(e){return!1}if(r>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;i&&Ce(t);var a=e.display,l=a.lineDiv.getBoundingClientRect();if(o>l.bottom||!be(e,n))return ke(t);o-=l.top-a.viewOffset;for(var s=0;s<e.display.gutterSpecs.length;++s){var u=a.gutters.childNodes[s];if(u&&u.getBoundingClientRect().right>=r)return ve(e,n,e,et(e.doc,o),e.display.gutterSpecs[s].className,t),ke(t)}}function wa(e,t){return Ca(e,t,"gutterClick",!0)}function ka(e,t){Sn(e.display,t)||function(e,t){if(!be(e,"gutterContextMenu"))return!1;return Ca(e,t,"gutterContextMenu",!1)}(e,t)||xe(e,t,"contextmenu")||k||e.display.input.onContextMenu(t)}function Sa(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),qn(e)}ya.prototype.compare=function(e,t,n){return this.time+400>e&&0==rt(t,this.pos)&&n==this.button};var Fa={toString:function(){return"CodeMirror.Init"}},Aa={},Ea={};function La(e,t,n){if(!t!=!(n&&n!=Fa)){var i=e.display.dragFunctions,r=t?pe:ge;r(e.display.scroller,"dragstart",i.start),r(e.display.scroller,"dragenter",i.enter),r(e.display.scroller,"dragover",i.over),r(e.display.scroller,"dragleave",i.leave),r(e.display.scroller,"drop",i.drop)}}function Ta(e){e.options.lineWrapping?(O(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(A(e.display.wrapper,"CodeMirror-wrap"),Xt(e)),di(e),pi(e),qn(e),setTimeout((function(){return Ui(e)}),100)}function Ma(e,t){var n=this;if(!(this instanceof Ma))return new Ma(e,t);this.options=t=t?_(t):{},_(Aa,t,!1);var i=t.value;"string"==typeof i?i=new Io(i,t.mode,null,t.lineSeparator,t.direction):t.mode&&(i.modeOption=t.mode),this.doc=i;var r=new Ma.inputStyles[t.inputStyle](this),o=this.display=new br(e,i,r,t);for(var u in o.wrapper.CodeMirror=this,Sa(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),Vi(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new j,keySeq:null,specialChars:null},t.autofocus&&!x&&o.input.focus(),a&&l<11&&setTimeout((function(){return n.display.input.reset(!0)}),20),function(e){var t=e.display;pe(t.scroller,"mousedown",ir(e,ba)),pe(t.scroller,"dblclick",a&&l<11?ir(e,(function(t){if(!xe(e,t)){var n=hi(e,t);if(n&&!wa(e,t)&&!Sn(e.display,t)){Ce(t);var i=e.findWordAt(n);Qr(e.doc,i.anchor,i.head)}}})):function(t){return xe(e,t)||Ce(t)});pe(t.scroller,"contextmenu",(function(t){return ka(e,t)})),pe(t.input.getField(),"contextmenu",(function(n){t.scroller.contains(n.target)||ka(e,n)}));var n,i={end:0};function r(){t.activeTouch&&(n=setTimeout((function(){return t.activeTouch=null}),1e3),(i=t.activeTouch).end=+new Date)}function o(e){if(1!=e.touches.length)return!1;var t=e.touches[0];return t.radiusX<=1&&t.radiusY<=1}function s(e,t){if(null==t.left)return!0;var n=t.left-e.left,i=t.top-e.top;return n*n+i*i>400}pe(t.scroller,"touchstart",(function(r){if(!xe(e,r)&&!o(r)&&!wa(e,r)){t.input.ensurePolled(),clearTimeout(n);var a=+new Date;t.activeTouch={start:a,moved:!1,prev:a-i.end<=300?i:null},1==r.touches.length&&(t.activeTouch.left=r.touches[0].pageX,t.activeTouch.top=r.touches[0].pageY)}})),pe(t.scroller,"touchmove",(function(){t.activeTouch&&(t.activeTouch.moved=!0)})),pe(t.scroller,"touchend",(function(n){var i=t.activeTouch;if(i&&!Sn(t,n)&&null!=i.left&&!i.moved&&new Date-i.start<300){var o,a=e.coordsChar(t.activeTouch,"page");o=!i.prev||s(i,i.prev)?new Ar(a,a):!i.prev.prev||s(i,i.prev.prev)?e.findWordAt(a):new Ar(it(a.line,0),ct(e.doc,it(a.line+1,0))),e.setSelection(o.anchor,o.head),e.focus(),Ce(n)}r()})),pe(t.scroller,"touchcancel",r),pe(t.scroller,"scroll",(function(){t.scroller.clientHeight&&(Ri(e,t.scroller.scrollTop),_i(e,t.scroller.scrollLeft,!0),ve(e,"scroll",e))})),pe(t.scroller,"mousewheel",(function(t){return Sr(e,t)})),pe(t.scroller,"DOMMouseScroll",(function(t){return Sr(e,t)})),pe(t.wrapper,"scroll",(function(){return t.wrapper.scrollTop=t.wrapper.scrollLeft=0})),t.dragFunctions={enter:function(t){xe(e,t)||Se(t)},over:function(t){xe(e,t)||(!function(e,t){var n=hi(e,t);if(n){var i=document.createDocumentFragment();Di(e,n,i),e.display.dragCursor||(e.display.dragCursor=T("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),L(e.display.dragCursor,i)}}(e,t),Se(t))},start:function(t){return function(e,t){if(a&&(!e.state.draggingText||+new Date-zo<100))Se(t);else if(!xe(e,t)&&!Sn(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!f)){var n=T("img",null,null,"position: fixed; left: 0; top: 0;");n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",h&&(n.width=n.height=1,e.display.wrapper.appendChild(n),n._top=n.offsetTop),t.dataTransfer.setDragImage(n,0,0),h&&n.parentNode.removeChild(n)}}(e,t)},drop:ir(e,Ho),leave:function(t){xe(e,t)||Ro(e)}};var u=t.input.getField();pe(u,"keyup",(function(t){return ma.call(e,t)})),pe(u,"keydown",ir(e,pa)),pe(u,"keypress",ir(e,ga)),pe(u,"focus",(function(t){return Ai(e,t)})),pe(u,"blur",(function(t){return Ei(e,t)}))}(this),Wo(),Ki(this),this.curOp.forceUpdate=!0,Pr(this,i),t.autofocus&&!x||this.hasFocus()?setTimeout((function(){n.hasFocus()&&!n.state.focused&&Ai(n)}),20):Ei(this),Ea)Ea.hasOwnProperty(u)&&Ea[u](this,t[u],Fa);gr(this),t.finishInit&&t.finishInit(this);for(var c=0;c<Ba.length;++c)Ba[c](this);Zi(this),s&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}Ma.defaults=Aa,Ma.optionHandlers=Ea;var Ba=[];function Na(e,t,n,i){var r,o=e.doc;null==n&&(n="add"),"smart"==n&&(o.mode.indent?r=gt(e,t).state:n="prev");var a=e.options.tabSize,l=Ke(o,t),s=W(l.text,null,a);l.stateAfter&&(l.stateAfter=null);var u,c=l.text.match(/^\s*/)[0];if(i||/\S/.test(l.text)){if("smart"==n&&((u=o.mode.indent(r,l.text.slice(c.length),l.text))==U||u>150)){if(!i)return;n="prev"}}else u=0,n="not";"prev"==n?u=t>o.first?W(Ke(o,t-1).text,null,a):0:"add"==n?u=s+e.options.indentUnit:"subtract"==n?u=s-e.options.indentUnit:"number"==typeof n&&(u=s+n),u=Math.max(0,u);var d="",h=0;if(e.options.indentWithTabs)for(var f=Math.floor(u/a);f;--f)h+=a,d+="\t";if(h<u&&(d+=Z(u-h)),d!=c)return yo(o,d,it(t,0),it(t,c.length),"+input"),l.stateAfter=null,!0;for(var p=0;p<o.sel.ranges.length;p++){var m=o.sel.ranges[p];if(m.head.line==t&&m.head.ch<c.length){var g=it(t,c.length);eo(o,p,new Ar(g,g));break}}}Ma.defineInitHook=function(e){return Ba.push(e)};var Oa=null;function Ia(e){Oa=e}function za(e,t,n,i,r){var o=e.doc;e.display.shift=!1,i||(i=o.sel);var a=+new Date-200,l="paste"==r||e.state.pasteIncoming>a,s=Oe(t),u=null;if(l&&i.ranges.length>1)if(Oa&&Oa.text.join("\n")==t){if(i.ranges.length%Oa.text.length==0){u=[];for(var c=0;c<Oa.text.length;c++)u.push(o.splitLines(Oa.text[c]))}}else s.length==i.ranges.length&&e.options.pasteLinesPerSelection&&(u=Q(s,(function(e){return[e]})));for(var d=e.curOp.updateInput,h=i.ranges.length-1;h>=0;h--){var f=i.ranges[h],p=f.from(),m=f.to();f.empty()&&(n&&n>0?p=it(p.line,p.ch-n):e.state.overwrite&&!l?m=it(m.line,Math.min(Ke(o,m.line).text.length,m.ch+Y(s).length)):l&&Oa&&Oa.lineWise&&Oa.text.join("\n")==s.join("\n")&&(p=m=it(p.line,0)));var g={from:p,to:m,text:u?u[h%u.length]:s,origin:r||(l?"paste":e.state.cutIncoming>a?"cut":"+input")};po(e.doc,g),dn(e,"inputRead",e,g)}t&&!l&&Ra(e,t),Oi(e),e.curOp.updateInput<2&&(e.curOp.updateInput=d),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Ha(e,t){var n=e.clipboardData&&e.clipboardData.getData("Text");if(n)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||!t.hasFocus()||nr(t,(function(){return za(t,n,0,null,"paste")})),!0}function Ra(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var n=e.doc.sel,i=n.ranges.length-1;i>=0;i--){var r=n.ranges[i];if(!(r.head.ch>100||i&&n.ranges[i-1].head.line==r.head.line)){var o=e.getModeAt(r.head),a=!1;if(o.electricChars){for(var l=0;l<o.electricChars.length;l++)if(t.indexOf(o.electricChars.charAt(l))>-1){a=Na(e,r.head.line,"smart");break}}else o.electricInput&&o.electricInput.test(Ke(e.doc,r.head.line).text.slice(0,r.head.ch))&&(a=Na(e,r.head.line,"smart"));a&&dn(e,"electricInput",e,r.head.line)}}}function Pa(e){for(var t=[],n=[],i=0;i<e.doc.sel.ranges.length;i++){var r=e.doc.sel.ranges[i].head.line,o={anchor:it(r,0),head:it(r+1,0)};n.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:n}}function _a(e,t,n,i){e.setAttribute("autocorrect",n?"":"off"),e.setAttribute("autocapitalize",i?"":"off"),e.setAttribute("spellcheck",!!t)}function Wa(){var e=T("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),t=T("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return s?e.style.width="1000px":e.setAttribute("wrap","off"),g&&(e.style.border="1px solid black"),_a(e),t}function ja(e,t,n,i,r){var o=t,a=n,l=Ke(e,t.line),s=r&&"rtl"==e.direction?-n:n;function u(o){var a,u;if("codepoint"==i){var c=l.text.charCodeAt(t.ch+(n>0?0:-1));if(isNaN(c))a=null;else{var d=n>0?c>=55296&&c<56320:c>=56320&&c<57343;a=new it(t.line,Math.max(0,Math.min(l.text.length,t.ch+n*(d?2:1))),-n)}}else a=r?function(e,t,n,i){var r=he(t,e.doc.direction);if(!r)return ia(t,n,i);n.ch>=t.text.length?(n.ch=t.text.length,n.sticky="before"):n.ch<=0&&(n.ch=0,n.sticky="after");var o=ce(r,n.ch,n.sticky),a=r[o];if("ltr"==e.doc.direction&&a.level%2==0&&(i>0?a.to>n.ch:a.from<n.ch))return ia(t,n,i);var l,s=function(e,n){return na(t,e instanceof it?e.ch:e,n)},u=function(n){return e.options.lineWrapping?(l=l||In(e,t),ti(e,t,l,n)):{begin:0,end:t.text.length}},c=u("before"==n.sticky?s(n,-1):n.ch);if("rtl"==e.doc.direction||1==a.level){var d=1==a.level==i<0,h=s(n,d?1:-1);if(null!=h&&(d?h<=a.to&&h<=c.end:h>=a.from&&h>=c.begin)){var f=d?"before":"after";return new it(n.line,h,f)}}var p=function(e,t,i){for(var o=function(e,t){return t?new it(n.line,s(e,1),"before"):new it(n.line,e,"after")};e>=0&&e<r.length;e+=t){var a=r[e],l=t>0==(1!=a.level),u=l?i.begin:s(i.end,-1);if(a.from<=u&&u<a.to)return o(u,l);if(u=l?a.from:s(a.to,-1),i.begin<=u&&u<i.end)return o(u,l)}},m=p(o+i,i,c);if(m)return m;var g=i>0?c.end:s(c.begin,-1);return null==g||i>0&&g==t.text.length||!(m=p(i>0?0:r.length-1,i,u(g)))?null:m}(e.cm,l,t,n):ia(l,t,n);if(null==a){if(o||(u=t.line+s)<e.first||u>=e.first+e.size||(t=new it(u,t.ch,t.sticky),!(l=Ke(e,u))))return!1;t=ra(r,e.cm,l,t.line,s)}else t=a;return!0}if("char"==i||"codepoint"==i)u();else if("column"==i)u(!0);else if("word"==i||"group"==i)for(var c=null,d="group"==i,h=e.cm&&e.cm.getHelper(t,"wordChars"),f=!0;!(n<0)||u(!f);f=!1){var p=l.text.charAt(t.ch)||"\n",m=ie(p,h)?"w":d&&"\n"==p?"n":!d||/\s/.test(p)?null:"p";if(!d||f||m||(m="s"),c&&c!=m){n<0&&(n=1,u(),t.sticky="after");break}if(m&&(c=m),n>0&&!u(!f))break}var g=uo(e,t,o,a,!0);return ot(o,g)&&(g.hitSide=!0),g}function qa(e,t,n,i){var r,o,a=e.doc,l=t.left;if("page"==i){var s=Math.min(e.display.wrapper.clientHeight,R(e).innerHeight||a(e).documentElement.clientHeight),u=Math.max(s-.5*ai(e.display),3);r=(n>0?t.bottom:t.top)+n*u}else"line"==i&&(r=n>0?t.bottom+3:t.top-3);for(;(o=Jn(e,l,r)).outside;){if(n<0?r<=0:r>=a.height){o.hitSide=!0;break}r+=5*n}return o}var Ua=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new j,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null};function $a(e,t){var n=On(e,t.line);if(!n||n.hidden)return null;var i=Ke(e.doc,t.line),r=Bn(n,i,t.line),o=he(i,e.doc.direction),a="left";o&&(a=ce(o,t.ch)%2?"right":"left");var l=Pn(r.map,t.ch,a);return l.offset="right"==l.collapse?l.end:l.start,l}function Ga(e,t){return t&&(e.bad=!0),e}function Va(e,t,n){var i;if(t==e.display.lineDiv){if(!(i=e.display.lineDiv.childNodes[n]))return Ga(e.clipPos(it(e.display.viewTo-1)),!0);t=null,n=0}else for(i=t;;i=i.parentNode){if(!i||i==e.display.lineDiv)return null;if(i.parentNode&&i.parentNode==e.display.lineDiv)break}for(var r=0;r<e.display.view.length;r++){var o=e.display.view[r];if(o.node==i)return Xa(o,t,n)}}function Xa(e,t,n){var i=e.text.firstChild,r=!1;if(!t||!B(i,t))return Ga(it(Je(e.line),0),!0);if(t==i&&(r=!0,t=i.childNodes[n],n=0,!t)){var o=e.rest?Y(e.rest):e.line;return Ga(it(Je(o),o.text.length),r)}var a=3==t.nodeType?t:null,l=t;for(a||1!=t.childNodes.length||3!=t.firstChild.nodeType||(a=t.firstChild,n&&(n=a.nodeValue.length));l.parentNode!=i;)l=l.parentNode;var s=e.measure,u=s.maps;function c(t,n,i){for(var r=-1;r<(u?u.length:0);r++)for(var o=r<0?s.map:u[r],a=0;a<o.length;a+=3){var l=o[a+2];if(l==t||l==n){var c=Je(r<0?e.line:e.rest[r]),d=o[a]+i;return(i<0||l!=t)&&(d=o[a+(i?1:0)]),it(c,d)}}}var d=c(a,l,n);if(d)return Ga(d,r);for(var h=l.nextSibling,f=a?a.nodeValue.length-n:0;h;h=h.nextSibling){if(d=c(h,h.firstChild,0))return Ga(it(d.line,d.ch-f),r);f+=h.textContent.length}for(var p=l.previousSibling,m=n;p;p=p.previousSibling){if(d=c(p,p.firstChild,-1))return Ga(it(d.line,d.ch+m),r);m+=p.textContent.length}}Ua.prototype.init=function(e){var t=this,n=this,i=n.cm,r=n.div=e.lineDiv;function o(e){for(var t=e.target;t;t=t.parentNode){if(t==r)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(t.className))break}return!1}function a(e){if(o(e)&&!xe(i,e)){if(i.somethingSelected())Ia({lineWise:!1,text:i.getSelections()}),"cut"==e.type&&i.replaceSelection("",null,"cut");else{if(!i.options.lineWiseCopyCut)return;var t=Pa(i);Ia({lineWise:!0,text:t.text}),"cut"==e.type&&i.operation((function(){i.setSelections(t.ranges,0,$),i.replaceSelection("",null,"cut")}))}if(e.clipboardData){e.clipboardData.clearData();var a=Oa.text.join("\n");if(e.clipboardData.setData("Text",a),e.clipboardData.getData("Text")==a)return void e.preventDefault()}var l=Wa(),s=l.firstChild;i.display.lineSpace.insertBefore(l,i.display.lineSpace.firstChild),s.value=Oa.text.join("\n");var u=N(r.ownerDocument);z(s),setTimeout((function(){i.display.lineSpace.removeChild(l),u.focus(),u==r&&n.showPrimarySelection()}),50)}}r.contentEditable=!0,_a(r,i.options.spellcheck,i.options.autocorrect,i.options.autocapitalize),pe(r,"paste",(function(e){!o(e)||xe(i,e)||Ha(e,i)||l<=11&&setTimeout(ir(i,(function(){return t.updateFromDOM()})),20)})),pe(r,"compositionstart",(function(e){t.composing={data:e.data,done:!1}})),pe(r,"compositionupdate",(function(e){t.composing||(t.composing={data:e.data,done:!1})})),pe(r,"compositionend",(function(e){t.composing&&(e.data!=t.composing.data&&t.readFromDOMSoon(),t.composing.done=!0)})),pe(r,"touchstart",(function(){return n.forceCompositionEnd()})),pe(r,"input",(function(){t.composing||t.readFromDOMSoon()})),pe(r,"copy",a),pe(r,"cut",a)},Ua.prototype.screenReaderLabelChanged=function(e){e?this.div.setAttribute("aria-label",e):this.div.removeAttribute("aria-label")},Ua.prototype.prepareSelection=function(){var e=bi(this.cm,!1);return e.focus=N(this.div.ownerDocument)==this.div,e},Ua.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Ua.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Ua.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,i=t.doc.sel.primary(),r=i.from(),o=i.to();if(t.display.viewTo==t.display.viewFrom||r.line>=t.display.viewTo||o.line<t.display.viewFrom)e.removeAllRanges();else{var a=Va(t,e.anchorNode,e.anchorOffset),l=Va(t,e.focusNode,e.focusOffset);if(!a||a.bad||!l||l.bad||0!=rt(st(a,l),r)||0!=rt(lt(a,l),o)){var s=t.display.view,u=r.line>=t.display.viewFrom&&$a(t,r)||{node:s[0].measure.map[2],offset:0},c=o.line<t.display.viewTo&&$a(t,o);if(!c){var d=s[s.length-1].measure,h=d.maps?d.maps[d.maps.length-1]:d.map;c={node:h[h.length-1],offset:h[h.length-2]-h[h.length-3]}}if(u&&c){var f,p=e.rangeCount&&e.getRangeAt(0);try{f=F(u.node,u.offset,c.offset,c.node)}catch(e){}f&&(!n&&t.state.focused?(e.collapse(u.node,u.offset),f.collapsed||(e.removeAllRanges(),e.addRange(f))):(e.removeAllRanges(),e.addRange(f)),p&&null==e.anchorNode?e.addRange(p):n&&this.startGracePeriod()),this.rememberSelection()}else e.removeAllRanges()}}},Ua.prototype.startGracePeriod=function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout((function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation((function(){return e.cm.curOp.selectionChanged=!0}))}),20)},Ua.prototype.showMultipleSelections=function(e){L(this.cm.display.cursorDiv,e.cursors),L(this.cm.display.selectionDiv,e.selection)},Ua.prototype.rememberSelection=function(){var e=this.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Ua.prototype.selectionInEditor=function(){var e=this.getSelection();if(!e.rangeCount)return!1;var t=e.getRangeAt(0).commonAncestorContainer;return B(this.div,t)},Ua.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&N(this.div.ownerDocument)==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus())},Ua.prototype.blur=function(){this.div.blur()},Ua.prototype.getField=function(){return this.div},Ua.prototype.supportsTouch=function(){return!0},Ua.prototype.receivedFocus=function(){var e=this,t=this;this.selectionInEditor()?setTimeout((function(){return e.pollSelection()}),20):nr(this.cm,(function(){return t.cm.curOp.selectionChanged=!0})),this.polling.set(this.cm.options.pollInterval,(function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))}))},Ua.prototype.selectionChanged=function(){var e=this.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Ua.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm;if(v&&c&&this.cm.display.gutterSpecs.length&&function(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0;return!1}(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus();if(!this.composing){this.rememberSelection();var n=Va(t,e.anchorNode,e.anchorOffset),i=Va(t,e.focusNode,e.focusOffset);n&&i&&nr(t,(function(){io(t.doc,Lr(n,i),$),(n.bad||i.bad)&&(t.curOp.selectionChanged=!0)}))}}},Ua.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var e,t,n,i=this.cm,r=i.display,o=i.doc.sel.primary(),a=o.from(),l=o.to();if(0==a.ch&&a.line>i.firstLine()&&(a=it(a.line-1,Ke(i.doc,a.line-1).length)),l.ch==Ke(i.doc,l.line).text.length&&l.line<i.lastLine()&&(l=it(l.line+1,0)),a.line<r.viewFrom||l.line>r.viewTo-1)return!1;a.line==r.viewFrom||0==(e=fi(i,a.line))?(t=Je(r.view[0].line),n=r.view[0].node):(t=Je(r.view[e].line),n=r.view[e-1].node.nextSibling);var s,u,c=fi(i,l.line);if(c==r.view.length-1?(s=r.viewTo-1,u=r.lineDiv.lastChild):(s=Je(r.view[c+1].line)-1,u=r.view[c+1].node.previousSibling),!n)return!1;for(var d=i.doc.splitLines(function(e,t,n,i,r){var o="",a=!1,l=e.doc.lineSeparator(),s=!1;function u(e){return function(t){return t.id==e}}function c(){a&&(o+=l,s&&(o+=l),a=s=!1)}function d(e){e&&(c(),o+=e)}function h(t){if(1==t.nodeType){var n=t.getAttribute("cm-text");if(n)return void d(n);var o,f=t.getAttribute("cm-marker");if(f){var p=e.findMarks(it(i,0),it(r+1,0),u(+f));return void(p.length&&(o=p[0].find(0))&&d(Ze(e.doc,o.from,o.to).join(l)))}if("false"==t.getAttribute("contenteditable"))return;var m=/^(pre|div|p|li|table|br)$/i.test(t.nodeName);if(!/^br$/i.test(t.nodeName)&&0==t.textContent.length)return;m&&c();for(var g=0;g<t.childNodes.length;g++)h(t.childNodes[g]);/^(pre|p)$/i.test(t.nodeName)&&(s=!0),m&&(a=!0)}else 3==t.nodeType&&d(t.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(;h(t),t!=n;)t=t.nextSibling,s=!1;return o}(i,n,u,t,s)),h=Ze(i.doc,it(t,0),it(s,Ke(i.doc,s).text.length));d.length>1&&h.length>1;)if(Y(d)==Y(h))d.pop(),h.pop(),s--;else{if(d[0]!=h[0])break;d.shift(),h.shift(),t++}for(var f=0,p=0,m=d[0],g=h[0],v=Math.min(m.length,g.length);f<v&&m.charCodeAt(f)==g.charCodeAt(f);)++f;for(var x=Y(d),y=Y(h),b=Math.min(x.length-(1==d.length?f:0),y.length-(1==h.length?f:0));p<b&&x.charCodeAt(x.length-p-1)==y.charCodeAt(y.length-p-1);)++p;if(1==d.length&&1==h.length&&t==a.line)for(;f&&f>a.ch&&x.charCodeAt(x.length-p-1)==y.charCodeAt(y.length-p-1);)f--,p++;d[d.length-1]=x.slice(0,x.length-p).replace(/^\u200b+/,""),d[0]=d[0].slice(f).replace(/\u200b+$/,"");var D=it(t,f),C=it(s,h.length?Y(h).length-p:0);return d.length>1||d[0]||rt(D,C)?(yo(i.doc,d,D,C,"+input"),!0):void 0},Ua.prototype.ensurePolled=function(){this.forceCompositionEnd()},Ua.prototype.reset=function(){this.forceCompositionEnd()},Ua.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Ua.prototype.readFromDOMSoon=function(){var e=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout((function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return;e.composing=null}e.updateFromDOM()}),80))},Ua.prototype.updateFromDOM=function(){var e=this;!this.cm.isReadOnly()&&this.pollContent()||nr(this.cm,(function(){return pi(e.cm)}))},Ua.prototype.setUneditable=function(e){e.contentEditable="false"},Ua.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||ir(this.cm,za)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},Ua.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},Ua.prototype.onContextMenu=function(){},Ua.prototype.resetPosition=function(){},Ua.prototype.needsContentAttribute=!0;var Ka=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new j,this.hasSelection=!1,this.composing=null};Ka.prototype.init=function(e){var t=this,n=this,i=this.cm;this.createField(e);var r=this.textarea;function o(e){if(!xe(i,e)){if(i.somethingSelected())Ia({lineWise:!1,text:i.getSelections()});else{if(!i.options.lineWiseCopyCut)return;var t=Pa(i);Ia({lineWise:!0,text:t.text}),"cut"==e.type?i.setSelections(t.ranges,null,$):(n.prevInput="",r.value=t.text.join("\n"),z(r))}"cut"==e.type&&(i.state.cutIncoming=+new Date)}}e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),g&&(r.style.width="0px"),pe(r,"input",(function(){a&&l>=9&&t.hasSelection&&(t.hasSelection=null),n.poll()})),pe(r,"paste",(function(e){xe(i,e)||Ha(e,i)||(i.state.pasteIncoming=+new Date,n.fastPoll())})),pe(r,"cut",o),pe(r,"copy",o),pe(e.scroller,"paste",(function(t){if(!Sn(e,t)&&!xe(i,t)){if(!r.dispatchEvent)return i.state.pasteIncoming=+new Date,void n.focus();var o=new Event("paste");o.clipboardData=t.clipboardData,r.dispatchEvent(o)}})),pe(e.lineSpace,"selectstart",(function(t){Sn(e,t)||Ce(t)})),pe(r,"compositionstart",(function(){var e=i.getCursor("from");n.composing&&n.composing.range.clear(),n.composing={start:e,range:i.markText(e,i.getCursor("to"),{className:"CodeMirror-composing"})}})),pe(r,"compositionend",(function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)}))},Ka.prototype.createField=function(e){this.wrapper=Wa(),this.textarea=this.wrapper.firstChild},Ka.prototype.screenReaderLabelChanged=function(e){e?this.textarea.setAttribute("aria-label",e):this.textarea.removeAttribute("aria-label")},Ka.prototype.prepareSelection=function(){var e=this.cm,t=e.display,n=e.doc,i=bi(e);if(e.options.moveInputWithCursor){var r=Zn(e,n.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect();i.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,r.top+a.top-o.top)),i.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,r.left+a.left-o.left))}return i},Ka.prototype.showSelection=function(e){var t=this.cm.display;L(t.cursorDiv,e.cursors),L(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},Ka.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm;if(t.somethingSelected()){this.prevInput="";var n=t.getSelection();this.textarea.value=n,t.state.focused&&z(this.textarea),a&&l>=9&&(this.hasSelection=n)}else e||(this.prevInput=this.textarea.value="",a&&l>=9&&(this.hasSelection=null))}},Ka.prototype.getField=function(){return this.textarea},Ka.prototype.supportsTouch=function(){return!1},Ka.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!x||N(this.textarea.ownerDocument)!=this.textarea))try{this.textarea.focus()}catch(e){}},Ka.prototype.blur=function(){this.textarea.blur()},Ka.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},Ka.prototype.receivedFocus=function(){this.slowPoll()},Ka.prototype.slowPoll=function(){var e=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,(function(){e.poll(),e.cm.state.focused&&e.slowPoll()}))},Ka.prototype.fastPoll=function(){var e=!1,t=this;t.pollingFast=!0,t.polling.set(20,(function n(){t.poll()||e?(t.pollingFast=!1,t.slowPoll()):(e=!0,t.polling.set(60,n))}))},Ka.prototype.poll=function(){var e=this,t=this.cm,n=this.textarea,i=this.prevInput;if(this.contextMenuPending||!t.state.focused||Ie(n)&&!i&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1;var r=n.value;if(r==i&&!t.somethingSelected())return!1;if(a&&l>=9&&this.hasSelection===r||y&&/[\uf700-\uf7ff]/.test(r))return t.display.input.reset(),!1;if(t.doc.sel==t.display.selForContextMenu){var o=r.charCodeAt(0);if(8203!=o||i||(i="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var s=0,u=Math.min(i.length,r.length);s<u&&i.charCodeAt(s)==r.charCodeAt(s);)++s;return nr(t,(function(){za(t,r.slice(s),i.length-s,null,e.composing?"*compose":null),r.length>1e3||r.indexOf("\n")>-1?n.value=e.prevInput="":e.prevInput=r,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))})),!0},Ka.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},Ka.prototype.onKeyPress=function(){a&&l>=9&&(this.hasSelection=null),this.fastPoll()},Ka.prototype.onContextMenu=function(e){var t=this,n=t.cm,i=n.display,r=t.textarea;t.contextMenuPending&&t.contextMenuPending();var o=hi(n,e),u=i.scroller.scrollTop;if(o&&!h){n.options.resetSelectionOnContextMenu&&-1==n.doc.sel.contains(o)&&ir(n,io)(n.doc,Lr(o),$);var c,d=r.style.cssText,f=t.wrapper.style.cssText,p=t.wrapper.offsetParent.getBoundingClientRect();if(t.wrapper.style.cssText="position: static",r.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-p.top-5)+"px; left: "+(e.clientX-p.left-5)+"px;\n      z-index: 1000; background: "+(a?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",s&&(c=r.ownerDocument.defaultView.scrollY),i.input.focus(),s&&r.ownerDocument.defaultView.scrollTo(null,c),i.input.reset(),n.somethingSelected()||(r.value=t.prevInput=" "),t.contextMenuPending=v,i.selForContextMenu=n.doc.sel,clearTimeout(i.detectingSelectAll),a&&l>=9&&g(),k){Se(e);var m=function(){ge(window,"mouseup",m),setTimeout(v,20)};pe(window,"mouseup",m)}else setTimeout(v,50)}function g(){if(null!=r.selectionStart){var e=n.somethingSelected(),o="​"+(e?r.value:"");r.value="⇚",r.value=o,t.prevInput=e?"":"​",r.selectionStart=1,r.selectionEnd=o.length,i.selForContextMenu=n.doc.sel}}function v(){if(t.contextMenuPending==v&&(t.contextMenuPending=!1,t.wrapper.style.cssText=f,r.style.cssText=d,a&&l<9&&i.scrollbars.setScrollTop(i.scroller.scrollTop=u),null!=r.selectionStart)){(!a||a&&l<9)&&g();var e=0,o=function(){i.selForContextMenu==n.doc.sel&&0==r.selectionStart&&r.selectionEnd>0&&"​"==t.prevInput?ir(n,ho)(n):e++<10?i.detectingSelectAll=setTimeout(o,500):(i.selForContextMenu=null,i.input.reset())};i.detectingSelectAll=setTimeout(o,200)}}},Ka.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e,this.textarea.readOnly=!!e},Ka.prototype.setUneditable=function(){},Ka.prototype.needsContentAttribute=!1,function(e){var t=e.optionHandlers;function n(n,i,r,o){e.defaults[n]=i,r&&(t[n]=o?function(e,t,n){n!=Fa&&r(e,t,n)}:r)}e.defineOption=n,e.Init=Fa,n("value","",(function(e,t){return e.setValue(t)}),!0),n("mode",null,(function(e,t){e.doc.modeOption=t,Or(e)}),!0),n("indentUnit",2,Or,!0),n("indentWithTabs",!1),n("smartIndent",!0),n("tabSize",4,(function(e){Ir(e),qn(e),pi(e)}),!0),n("lineSeparator",null,(function(e,t){if(e.doc.lineSep=t,t){var n=[],i=e.doc.first;e.doc.iter((function(e){for(var r=0;;){var o=e.text.indexOf(t,r);if(-1==o)break;r=o+t.length,n.push(it(i,o))}i++}));for(var r=n.length-1;r>=0;r--)yo(e.doc,t,n[r],it(n[r].line,n[r].ch+t.length))}})),n("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,(function(e,t,n){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),n!=Fa&&e.refresh()})),n("specialCharPlaceholder",tn,(function(e){return e.refresh()}),!0),n("electricChars",!0),n("inputStyle",x?"contenteditable":"textarea",(function(){throw new Error("inputStyle can not (yet) be changed in a running editor")}),!0),n("spellcheck",!1,(function(e,t){return e.getInputField().spellcheck=t}),!0),n("autocorrect",!1,(function(e,t){return e.getInputField().autocorrect=t}),!0),n("autocapitalize",!1,(function(e,t){return e.getInputField().autocapitalize=t}),!0),n("rtlMoveVisually",!D),n("wholeLineUpdateBefore",!0),n("theme","default",(function(e){Sa(e),yr(e)}),!0),n("keyMap","default",(function(e,t,n){var i=ea(t),r=n!=Fa&&ea(n);r&&r.detach&&r.detach(e,i),i.attach&&i.attach(e,r||null)})),n("extraKeys",null),n("configureMouse",null),n("lineWrapping",!1,Ta,!0),n("gutters",[],(function(e,t){e.display.gutterSpecs=vr(t,e.options.lineNumbers),yr(e)}),!0),n("fixedGutter",!0,(function(e,t){e.display.gutters.style.left=t?ui(e.display)+"px":"0",e.refresh()}),!0),n("coverGutterNextToScrollbar",!1,(function(e){return Ui(e)}),!0),n("scrollbarStyle","native",(function(e){Vi(e),Ui(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)}),!0),n("lineNumbers",!1,(function(e,t){e.display.gutterSpecs=vr(e.options.gutters,t),yr(e)}),!0),n("firstLineNumber",1,yr,!0),n("lineNumberFormatter",(function(e){return e}),yr,!0),n("showCursorWhenSelecting",!1,yi,!0),n("resetSelectionOnContextMenu",!0),n("lineWiseCopyCut",!0),n("pasteLinesPerSelection",!0),n("selectionsMayTouch",!1),n("readOnly",!1,(function(e,t){"nocursor"==t&&(Ei(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)})),n("screenReaderLabel",null,(function(e,t){t=""===t?null:t,e.display.input.screenReaderLabelChanged(t)})),n("disableInput",!1,(function(e,t){t||e.display.input.reset()}),!0),n("dragDrop",!0,La),n("allowDropFileTypes",null),n("cursorBlinkRate",530),n("cursorScrollMargin",0),n("cursorHeight",1,yi,!0),n("singleCursorHeightPerLine",!0,yi,!0),n("workTime",100),n("workDelay",100),n("flattenSpans",!0,Ir,!0),n("addModeClass",!1,Ir,!0),n("pollInterval",100),n("undoDepth",200,(function(e,t){return e.doc.history.undoDepth=t})),n("historyEventDelay",1250),n("viewportMargin",10,(function(e){return e.refresh()}),!0),n("maxHighlightLength",1e4,Ir,!0),n("moveInputWithCursor",!0,(function(e,t){t||e.display.input.resetPosition()})),n("tabindex",null,(function(e,t){return e.display.input.getField().tabIndex=t||""})),n("autofocus",null),n("direction","ltr",(function(e,t){return e.doc.setDirection(t)}),!0),n("phrases",null)}(Ma),function(e){var t=e.optionHandlers,n=e.helpers={};e.prototype={constructor:e,focus:function(){R(this).focus(),this.display.input.focus()},setOption:function(e,n){var i=this.options,r=i[e];i[e]==n&&"mode"!=e||(i[e]=n,t.hasOwnProperty(e)&&ir(this,t[e])(this,n,r),ve(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](ea(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,n=0;n<t.length;++n)if(t[n]==e||t[n].name==e)return t.splice(n,1),!0},addOverlay:rr((function(t,n){var i=t.token?t:e.getMode(this.options,t);if(i.startState)throw new Error("Overlays may not be stateful.");!function(e,t,n){for(var i=0,r=n(t);i<e.length&&n(e[i])<=r;)i++;e.splice(i,0,t)}(this.state.overlays,{mode:i,modeSpec:t,opaque:n&&n.opaque,priority:n&&n.priority||0},(function(e){return e.priority})),this.state.modeGen++,pi(this)})),removeOverlay:rr((function(e){for(var t=this.state.overlays,n=0;n<t.length;++n){var i=t[n].modeSpec;if(i==e||"string"==typeof e&&i.name==e)return t.splice(n,1),this.state.modeGen++,void pi(this)}})),indentLine:rr((function(e,t,n){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),tt(this.doc,e)&&Na(this,e,t,n)})),indentSelection:rr((function(e){for(var t=this.doc.sel.ranges,n=-1,i=0;i<t.length;i++){var r=t[i];if(r.empty())r.head.line>n&&(Na(this,r.head.line,e,!0),n=r.head.line,i==this.doc.sel.primIndex&&Oi(this));else{var o=r.from(),a=r.to(),l=Math.max(n,o.line);n=Math.min(this.lastLine(),a.line-(a.ch?0:1))+1;for(var s=l;s<n;++s)Na(this,s,e);var u=this.doc.sel.ranges;0==o.ch&&t.length==u.length&&u[i].from().ch>0&&eo(this.doc,i,new Ar(o,u[i].to()),$)}}})),getTokenAt:function(e,t){return Dt(this,e,t)},getLineTokens:function(e,t){return Dt(this,it(e),t,!0)},getTokenTypeAt:function(e){e=ct(this.doc,e);var t,n=mt(this,Ke(this.doc,e.line)),i=0,r=(n.length-1)/2,o=e.ch;if(0==o)t=n[2];else for(;;){var a=i+r>>1;if((a?n[2*a-1]:0)>=o)r=a;else{if(!(n[2*a+1]<o)){t=n[2*a+2];break}i=a+1}}var l=t?t.indexOf("overlay "):-1;return l<0?t:0==l?null:t.slice(0,l-1)},getModeAt:function(t){var n=this.doc.mode;return n.innerMode?e.innerMode(n,this.getTokenAt(t).state).mode:n},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var i=[];if(!n.hasOwnProperty(t))return i;var r=n[t],o=this.getModeAt(e);if("string"==typeof o[t])r[o[t]]&&i.push(r[o[t]]);else if(o[t])for(var a=0;a<o[t].length;a++){var l=r[o[t][a]];l&&i.push(l)}else o.helperType&&r[o.helperType]?i.push(r[o.helperType]):r[o.name]&&i.push(r[o.name]);for(var s=0;s<r._global.length;s++){var u=r._global[s];u.pred(o,this)&&-1==q(i,u.val)&&i.push(u.val)}return i},getStateAfter:function(e,t){var n=this.doc;return gt(this,(e=ut(n,null==e?n.first+n.size-1:e))+1,t).state},cursorCoords:function(e,t){var n=this.doc.sel.primary();return Zn(this,null==e?n.head:"object"==typeof e?ct(this.doc,e):e?n.from():n.to(),t||"page")},charCoords:function(e,t){return Kn(this,ct(this.doc,e),t||"page")},coordsChar:function(e,t){return Jn(this,(e=Xn(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=Xn(this,{top:e,left:0},t||"page").top,et(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,n){var i,r=!1;if("number"==typeof e){var o=this.doc.first+this.doc.size-1;e<this.doc.first?e=this.doc.first:e>o&&(e=o,r=!0),i=Ke(this.doc,e)}else i=e;return Vn(this,i,{top:0,left:0},t||"page",n||r).top+(r?this.doc.height-Gt(i):0)},defaultTextHeight:function(){return ai(this.display)},defaultCharWidth:function(){return li(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,n,i,r){var o,a,l,s=this.display,u=(e=Zn(this,ct(this.doc,e))).bottom,c=e.left;if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),s.sizer.appendChild(t),"over"==i)u=e.top;else if("above"==i||"near"==i){var d=Math.max(s.wrapper.clientHeight,this.doc.height),h=Math.max(s.sizer.clientWidth,s.lineSpace.clientWidth);("above"==i||e.bottom+t.offsetHeight>d)&&e.top>t.offsetHeight?u=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=d&&(u=e.bottom),c+t.offsetWidth>h&&(c=h-t.offsetWidth)}t.style.top=u+"px",t.style.left=t.style.right="","right"==r?(c=s.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==r?c=0:"middle"==r&&(c=(s.sizer.clientWidth-t.offsetWidth)/2),t.style.left=c+"px"),n&&(o=this,a={left:c,top:u,right:c+t.offsetWidth,bottom:u+t.offsetHeight},null!=(l=Bi(o,a)).scrollTop&&Ri(o,l.scrollTop),null!=l.scrollLeft&&_i(o,l.scrollLeft))},triggerOnKeyDown:rr(pa),triggerOnKeyPress:rr(ga),triggerOnKeyUp:ma,triggerOnMouseDown:rr(ba),execCommand:function(e){if(oa.hasOwnProperty(e))return oa[e].call(null,this)},triggerElectric:rr((function(e){Ra(this,e)})),findPosH:function(e,t,n,i){var r=1;t<0&&(r=-1,t=-t);for(var o=ct(this.doc,e),a=0;a<t&&!(o=ja(this.doc,o,r,n,i)).hitSide;++a);return o},moveH:rr((function(e,t){var n=this;this.extendSelectionsBy((function(i){return n.display.shift||n.doc.extend||i.empty()?ja(n.doc,i.head,e,t,n.options.rtlMoveVisually):e<0?i.from():i.to()}),V)})),deleteH:rr((function(e,t){var n=this.doc.sel,i=this.doc;n.somethingSelected()?i.replaceSelection("",null,"+delete"):ta(this,(function(n){var r=ja(i,n.head,e,t,!1);return e<0?{from:r,to:n.head}:{from:n.head,to:r}}))})),findPosV:function(e,t,n,i){var r=1,o=i;t<0&&(r=-1,t=-t);for(var a=ct(this.doc,e),l=0;l<t;++l){var s=Zn(this,a,"div");if(null==o?o=s.left:s.left=o,(a=qa(this,s,r,n)).hitSide)break}return a},moveV:rr((function(e,t){var n=this,i=this.doc,r=[],o=!this.display.shift&&!i.extend&&i.sel.somethingSelected();if(i.extendSelectionsBy((function(a){if(o)return e<0?a.from():a.to();var l=Zn(n,a.head,"div");null!=a.goalColumn&&(l.left=a.goalColumn),r.push(l.left);var s=qa(n,l,e,t);return"page"==t&&a==i.sel.primary()&&Ni(n,Kn(n,s,"div").top-l.top),s}),V),r.length)for(var a=0;a<i.sel.ranges.length;a++)i.sel.ranges[a].goalColumn=r[a]})),findWordAt:function(e){var t=Ke(this.doc,e.line).text,n=e.ch,i=e.ch;if(t){var r=this.getHelper(e,"wordChars");"before"!=e.sticky&&i!=t.length||!n?++i:--n;for(var o=t.charAt(n),a=ie(o,r)?function(e){return ie(e,r)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!ie(e)};n>0&&a(t.charAt(n-1));)--n;for(;i<t.length&&a(t.charAt(i));)++i}return new Ar(it(e.line,n),it(e.line,i))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?O(this.display.cursorDiv,"CodeMirror-overwrite"):A(this.display.cursorDiv,"CodeMirror-overwrite"),ve(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==N(H(this))},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:rr((function(e,t){Ii(this,e,t)})),getScrollInfo:function(){var e=this.display.scroller;return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Ln(this)-this.display.barHeight,width:e.scrollWidth-Ln(this)-this.display.barWidth,clientHeight:Mn(this),clientWidth:Tn(this)}},scrollIntoView:rr((function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:it(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?function(e,t){zi(e),e.curOp.scrollToPos=t}(this,e):Hi(this,e.from,e.to,e.margin)})),setSize:rr((function(e,t){var n=this,i=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e};null!=e&&(this.display.wrapper.style.width=i(e)),null!=t&&(this.display.wrapper.style.height=i(t)),this.options.lineWrapping&&jn(this);var r=this.display.viewFrom;this.doc.iter(r,this.display.viewTo,(function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){mi(n,r,"widget");break}++r})),this.curOp.forceUpdate=!0,ve(this,"refresh",this)})),operation:function(e){return nr(this,e)},startOperation:function(){return Ki(this)},endOperation:function(){return Zi(this)},refresh:rr((function(){var e=this.display.cachedTextHeight;pi(this),this.curOp.forceUpdate=!0,qn(this),Ii(this,this.doc.scrollLeft,this.doc.scrollTop),fr(this.display),(null==e||Math.abs(e-ai(this.display))>.5||this.options.lineWrapping)&&di(this),ve(this,"refresh",this)})),swapDoc:rr((function(e){var t=this.doc;return t.cm=null,this.state.selectingText&&this.state.selectingText(),Pr(this,e),qn(this),this.display.input.reset(),Ii(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,dn(this,"swapDoc",this,t),t})),phrase:function(e){var t=this.options.phrases;return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},De(e),e.registerHelper=function(t,i,r){n.hasOwnProperty(t)||(n[t]=e[t]={_global:[]}),n[t][i]=r},e.registerGlobalHelper=function(t,i,r,o){e.registerHelper(t,i,o),n[t]._global.push({pred:r,val:o})}}(Ma);var Za="iter insert remove copy getEditor constructor".split(" ");for(var Ya in Io.prototype)Io.prototype.hasOwnProperty(Ya)&&q(Za,Ya)<0&&(Ma.prototype[Ya]=function(e){return function(){return e.apply(this.doc,arguments)}}(Io.prototype[Ya]));return De(Io),Ma.inputStyles={textarea:Ka,contenteditable:Ua},Ma.defineMode=function(e){Ma.defaults.mode||"null"==e||(Ma.defaults.mode=e),_e.apply(this,arguments)},Ma.defineMIME=function(e,t){Pe[e]=t},Ma.defineMode("null",(function(){return{token:function(e){return e.skipToEnd()}}})),Ma.defineMIME("text/plain","null"),Ma.defineExtension=function(e,t){Ma.prototype[e]=t},Ma.defineDocExtension=function(e,t){Io.prototype[e]=t},Ma.fromTextArea=function(e,t){if((t=t?_(t):{}).value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var n=N(e.ownerDocument);t.autofocus=n==e||null!=e.getAttribute("autofocus")&&n==document.body}function i(){e.value=l.getValue()}var r;if(e.form&&(pe(e.form,"submit",i),!t.leaveSubmitMethodAlone)){var o=e.form;r=o.submit;try{var a=o.submit=function(){i(),o.submit=r,o.submit(),o.submit=a}}catch(e){}}t.finishInit=function(n){n.save=i,n.getTextArea=function(){return e},n.toTextArea=function(){n.toTextArea=isNaN,i(),e.parentNode.removeChild(n.getWrapperElement()),e.style.display="",e.form&&(ge(e.form,"submit",i),t.leaveSubmitMethodAlone||"function"!=typeof e.form.submit||(e.form.submit=r))}},e.style.display="none";var l=Ma((function(t){return e.parentNode.insertBefore(t,e.nextSibling)}),t);return l},function(e){e.off=ge,e.on=pe,e.wheelEventPixels=kr,e.Doc=Io,e.splitLines=Oe,e.countColumn=W,e.findColumn=X,e.isWordChar=ne,e.Pass=U,e.signal=ve,e.Line=Kt,e.changeEnd=Tr,e.scrollbarModel=Gi,e.Pos=it,e.cmpPos=rt,e.modes=Re,e.mimeModes=Pe,e.resolveMode=We,e.getMode=je,e.modeExtensions=qe,e.extendMode=Ue,e.copyState=$e,e.startState=Ve,e.innerMode=Ge,e.commands=oa,e.keyMap=Vo,e.keyName=Jo,e.isModifierKey=Yo,e.lookupKey=Zo,e.normalizeKeyMap=Ko,e.StringStream=Xe,e.SharedTextMarker=Mo,e.TextMarker=Lo,e.LineWidget=Fo,e.e_preventDefault=Ce,e.e_stopPropagation=we,e.e_stop=Se,e.addClass=O,e.contains=B,e.rmClass=A,e.keyNames=qo}(Ma),Ma.version="5.65.7",Ma}))},{}],11:[function(e,t,n){var i;i=function(e){"use strict";var t=/^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;e.defineMode("gfm",(function(n,i){var r=0,o={startState:function(){return{code:!1,codeBlock:!1,ateSpace:!1}},copyState:function(e){return{code:e.code,codeBlock:e.codeBlock,ateSpace:e.ateSpace}},token:function(e,n){if(n.combineTokens=null,n.codeBlock)return e.match(/^```+/)?(n.codeBlock=!1,null):(e.skipToEnd(),null);if(e.sol()&&(n.code=!1),e.sol()&&e.match(/^```+/))return e.skipToEnd(),n.codeBlock=!0,null;if("`"===e.peek()){e.next();var o=e.pos;e.eatWhile("`");var a=1+e.pos-o;return n.code?a===r&&(n.code=!1):(r=a,n.code=!0),null}if(n.code)return e.next(),null;if(e.eatSpace())return n.ateSpace=!0,null;if((e.sol()||n.ateSpace)&&(n.ateSpace=!1,!1!==i.gitHubSpice)){if(e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/))return n.combineTokens=!0,"link";if(e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))return n.combineTokens=!0,"link"}return e.match(t)&&"]("!=e.string.slice(e.start-2,e.start)&&(0==e.start||/\W/.test(e.string.charAt(e.start-1)))?(n.combineTokens=!0,"link"):(e.next(),null)},blankLine:function(e){return e.code=!1,null}},a={taskLists:!0,strikethrough:!0,emoji:!0};for(var l in i)a[l]=i[l];return a.name="markdown",e.overlayMode(e.getMode(n,a),o)}),"markdown"),e.defineMIME("text/x-gfm","gfm")},"object"==typeof n&&"object"==typeof t?i(e("../../lib/codemirror"),e("../markdown/markdown"),e("../../addon/mode/overlay")):i(CodeMirror)},{"../../addon/mode/overlay":7,"../../lib/codemirror":10,"../markdown/markdown":12}],12:[function(e,t,n){var i;i=function(e){"use strict";e.defineMode("markdown",(function(t,n){var i=e.getMode(t,"text/html"),r="null"==i.name;void 0===n.highlightFormatting&&(n.highlightFormatting=!1),void 0===n.maxBlockquoteDepth&&(n.maxBlockquoteDepth=0),void 0===n.taskLists&&(n.taskLists=!1),void 0===n.strikethrough&&(n.strikethrough=!1),void 0===n.emoji&&(n.emoji=!1),void 0===n.fencedCodeBlockHighlighting&&(n.fencedCodeBlockHighlighting=!0),void 0===n.fencedCodeBlockDefaultMode&&(n.fencedCodeBlockDefaultMode="text/plain"),void 0===n.xml&&(n.xml=!0),void 0===n.tokenTypeOverrides&&(n.tokenTypeOverrides={});var o={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough",emoji:"builtin"};for(var a in o)o.hasOwnProperty(a)&&n.tokenTypeOverrides[a]&&(o[a]=n.tokenTypeOverrides[a]);var l=/^([*\-_])(?:\s*\1){2,}\s*$/,s=/^(?:[*\-+]|^[0-9]+([.)]))\s+/,u=/^\[(x| )\](?=\s)/i,c=n.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,d=/^ {0,3}(?:\={1,}|-{2,})\s*$/,h=/^[^#!\[\]*_\\<>` "'(~:]+/,f=/^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,p=/^\s*\[[^\]]+?\]:.*$/,m=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/;function g(e,t,n){return t.f=t.inline=n,n(e,t)}function v(e,t,n){return t.f=t.block=n,n(e,t)}function x(t){if(t.linkTitle=!1,t.linkHref=!1,t.linkText=!1,t.em=!1,t.strong=!1,t.strikethrough=!1,t.quote=0,t.indentedCode=!1,t.f==b){var n=r;if(!n){var o=e.innerMode(i,t.htmlState);n="xml"==o.mode.name&&null===o.state.tagStart&&!o.state.context&&o.state.tokenize.isInText}n&&(t.f=k,t.block=y,t.htmlState=null)}return t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.prevLine=t.thisLine,t.thisLine={stream:null},null}function y(i,r){var a,h=i.column()===r.indentation,m=!(a=r.prevLine.stream)||!/\S/.test(a.string),v=r.indentedCode,x=r.prevLine.hr,y=!1!==r.list,b=(r.listStack[r.listStack.length-1]||0)+3;r.indentedCode=!1;var w=r.indentation;if(null===r.indentationDiff&&(r.indentationDiff=r.indentation,y)){for(r.list=null;w<r.listStack[r.listStack.length-1];)r.listStack.pop(),r.listStack.length?r.indentation=r.listStack[r.listStack.length-1]:r.list=!1;!1!==r.list&&(r.indentationDiff=w-r.listStack[r.listStack.length-1])}var k=!(m||x||r.prevLine.header||y&&v||r.prevLine.fencedCodeEnd),S=(!1===r.list||x||m)&&r.indentation<=b&&i.match(l),F=null;if(r.indentationDiff>=4&&(v||r.prevLine.fencedCodeEnd||r.prevLine.header||m))return i.skipToEnd(),r.indentedCode=!0,o.code;if(i.eatSpace())return null;if(h&&r.indentation<=b&&(F=i.match(c))&&F[1].length<=6)return r.quote=0,r.header=F[1].length,r.thisLine.header=!0,n.highlightFormatting&&(r.formatting="header"),r.f=r.inline,C(r);if(r.indentation<=b&&i.eat(">"))return r.quote=h?1:r.quote+1,n.highlightFormatting&&(r.formatting="quote"),i.eatSpace(),C(r);if(!S&&!r.setext&&h&&r.indentation<=b&&(F=i.match(s))){var A=F[1]?"ol":"ul";return r.indentation=w+i.current().length,r.list=!0,r.quote=0,r.listStack.push(r.indentation),r.em=!1,r.strong=!1,r.code=!1,r.strikethrough=!1,n.taskLists&&i.match(u,!1)&&(r.taskList=!0),r.f=r.inline,n.highlightFormatting&&(r.formatting=["list","list-"+A]),C(r)}return h&&r.indentation<=b&&(F=i.match(f,!0))?(r.quote=0,r.fencedEndRE=new RegExp(F[1]+"+ *$"),r.localMode=n.fencedCodeBlockHighlighting&&function(n){if(e.findModeByName){var i=e.findModeByName(n);i&&(n=i.mime||i.mimes[0])}var r=e.getMode(t,n);return"null"==r.name?null:r}(F[2]||n.fencedCodeBlockDefaultMode),r.localMode&&(r.localState=e.startState(r.localMode)),r.f=r.block=D,n.highlightFormatting&&(r.formatting="code-block"),r.code=-1,C(r)):r.setext||!(k&&y||r.quote||!1!==r.list||r.code||S||p.test(i.string))&&(F=i.lookAhead(1))&&(F=F.match(d))?(r.setext?(r.header=r.setext,r.setext=0,i.skipToEnd(),n.highlightFormatting&&(r.formatting="header")):(r.header="="==F[0].charAt(0)?1:2,r.setext=r.header),r.thisLine.header=!0,r.f=r.inline,C(r)):S?(i.skipToEnd(),r.hr=!0,r.thisLine.hr=!0,o.hr):"["===i.peek()?g(i,r,E):g(i,r,r.inline)}function b(t,n){var o=i.token(t,n.htmlState);if(!r){var a=e.innerMode(i,n.htmlState);("xml"==a.mode.name&&null===a.state.tagStart&&!a.state.context&&a.state.tokenize.isInText||n.md_inside&&t.current().indexOf(">")>-1)&&(n.f=k,n.block=y,n.htmlState=null)}return o}function D(e,t){var i,r=t.listStack[t.listStack.length-1]||0,a=t.indentation<r,l=r+3;return t.fencedEndRE&&t.indentation<=l&&(a||e.match(t.fencedEndRE))?(n.highlightFormatting&&(t.formatting="code-block"),a||(i=C(t)),t.localMode=t.localState=null,t.block=y,t.f=k,t.fencedEndRE=null,t.code=0,t.thisLine.fencedCodeEnd=!0,a?v(e,t,t.block):i):t.localMode?t.localMode.token(e,t.localState):(e.skipToEnd(),o.code)}function C(e){var t=[];if(e.formatting){t.push(o.formatting),"string"==typeof e.formatting&&(e.formatting=[e.formatting]);for(var i=0;i<e.formatting.length;i++)t.push(o.formatting+"-"+e.formatting[i]),"header"===e.formatting[i]&&t.push(o.formatting+"-"+e.formatting[i]+"-"+e.header),"quote"===e.formatting[i]&&(!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=e.quote?t.push(o.formatting+"-"+e.formatting[i]+"-"+e.quote):t.push("error"))}if(e.taskOpen)return t.push("meta"),t.length?t.join(" "):null;if(e.taskClosed)return t.push("property"),t.length?t.join(" "):null;if(e.linkHref?t.push(o.linkHref,"url"):(e.strong&&t.push(o.strong),e.em&&t.push(o.em),e.strikethrough&&t.push(o.strikethrough),e.emoji&&t.push(o.emoji),e.linkText&&t.push(o.linkText),e.code&&t.push(o.code),e.image&&t.push(o.image),e.imageAltText&&t.push(o.imageAltText,"link"),e.imageMarker&&t.push(o.imageMarker)),e.header&&t.push(o.header,o.header+"-"+e.header),e.quote&&(t.push(o.quote),!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=e.quote?t.push(o.quote+"-"+e.quote):t.push(o.quote+"-"+n.maxBlockquoteDepth)),!1!==e.list){var r=(e.listStack.length-1)%3;r?1===r?t.push(o.list2):t.push(o.list3):t.push(o.list1)}return e.trailingSpaceNewLine?t.push("trailing-space-new-line"):e.trailingSpace&&t.push("trailing-space-"+(e.trailingSpace%2?"a":"b")),t.length?t.join(" "):null}function w(e,t){if(e.match(h,!0))return C(t)}function k(t,r){var a=r.text(t,r);if(void 0!==a)return a;if(r.list)return r.list=null,C(r);if(r.taskList)return" "===t.match(u,!0)[1]?r.taskOpen=!0:r.taskClosed=!0,n.highlightFormatting&&(r.formatting="task"),r.taskList=!1,C(r);if(r.taskOpen=!1,r.taskClosed=!1,r.header&&t.match(/^#+$/,!0))return n.highlightFormatting&&(r.formatting="header"),C(r);var l=t.next();if(r.linkTitle){r.linkTitle=!1;var s=l;"("===l&&(s=")");var c="^\\s*(?:[^"+(s=(s+"").replace(/([.?*+^\[\]\\(){}|-])/g,"\\$1"))+"\\\\]+|\\\\\\\\|\\\\.)"+s;if(t.match(new RegExp(c),!0))return o.linkHref}if("`"===l){var d=r.formatting;n.highlightFormatting&&(r.formatting="code"),t.eatWhile("`");var h=t.current().length;if(0!=r.code||r.quote&&1!=h){if(h==r.code){var f=C(r);return r.code=0,f}return r.formatting=d,C(r)}return r.code=h,C(r)}if(r.code)return C(r);if("\\"===l&&(t.next(),n.highlightFormatting)){var p=C(r),g=o.formatting+"-escape";return p?p+" "+g:g}if("!"===l&&t.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return r.imageMarker=!0,r.image=!0,n.highlightFormatting&&(r.formatting="image"),C(r);if("["===l&&r.imageMarker&&t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/,!1))return r.imageMarker=!1,r.imageAltText=!0,n.highlightFormatting&&(r.formatting="image"),C(r);if("]"===l&&r.imageAltText){n.highlightFormatting&&(r.formatting="image");var p=C(r);return r.imageAltText=!1,r.image=!1,r.inline=r.f=F,p}if("["===l&&!r.image)return r.linkText&&t.match(/^.*?\]/)||(r.linkText=!0,n.highlightFormatting&&(r.formatting="link")),C(r);if("]"===l&&r.linkText){n.highlightFormatting&&(r.formatting="link");var p=C(r);return r.linkText=!1,r.inline=r.f=t.match(/\(.*?\)| ?\[.*?\]/,!1)?F:k,p}if("<"===l&&t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1))return r.f=r.inline=S,n.highlightFormatting&&(r.formatting="link"),(p=C(r))?p+=" ":p="",p+o.linkInline;if("<"===l&&t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1))return r.f=r.inline=S,n.highlightFormatting&&(r.formatting="link"),(p=C(r))?p+=" ":p="",p+o.linkEmail;if(n.xml&&"<"===l&&t.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,!1)){var x=t.string.indexOf(">",t.pos);if(-1!=x){var y=t.string.substring(t.start,x);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(y)&&(r.md_inside=!0)}return t.backUp(1),r.htmlState=e.startState(i),v(t,r,b)}if(n.xml&&"<"===l&&t.match(/^\/\w*?>/))return r.md_inside=!1,"tag";if("*"===l||"_"===l){for(var D=1,w=1==t.pos?" ":t.string.charAt(t.pos-2);D<3&&t.eat(l);)D++;var A=t.peek()||" ",E=!/\s/.test(A)&&(!m.test(A)||/\s/.test(w)||m.test(w)),L=!/\s/.test(w)&&(!m.test(w)||/\s/.test(A)||m.test(A)),T=null,M=null;if(D%2&&(r.em||!E||"*"!==l&&L&&!m.test(w)?r.em!=l||!L||"*"!==l&&E&&!m.test(A)||(T=!1):T=!0),D>1&&(r.strong||!E||"*"!==l&&L&&!m.test(w)?r.strong!=l||!L||"*"!==l&&E&&!m.test(A)||(M=!1):M=!0),null!=M||null!=T)return n.highlightFormatting&&(r.formatting=null==T?"strong":null==M?"em":"strong em"),!0===T&&(r.em=l),!0===M&&(r.strong=l),f=C(r),!1===T&&(r.em=!1),!1===M&&(r.strong=!1),f}else if(" "===l&&(t.eat("*")||t.eat("_"))){if(" "===t.peek())return C(r);t.backUp(1)}if(n.strikethrough)if("~"===l&&t.eatWhile(l)){if(r.strikethrough)return n.highlightFormatting&&(r.formatting="strikethrough"),f=C(r),r.strikethrough=!1,f;if(t.match(/^[^\s]/,!1))return r.strikethrough=!0,n.highlightFormatting&&(r.formatting="strikethrough"),C(r)}else if(" "===l&&t.match("~~",!0)){if(" "===t.peek())return C(r);t.backUp(2)}if(n.emoji&&":"===l&&t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)){r.emoji=!0,n.highlightFormatting&&(r.formatting="emoji");var B=C(r);return r.emoji=!1,B}return" "===l&&(t.match(/^ +$/,!1)?r.trailingSpace++:r.trailingSpace&&(r.trailingSpaceNewLine=!0)),C(r)}function S(e,t){if(">"===e.next()){t.f=t.inline=k,n.highlightFormatting&&(t.formatting="link");var i=C(t);return i?i+=" ":i="",i+o.linkInline}return e.match(/^[^>]+/,!0),o.linkInline}function F(e,t){if(e.eatSpace())return null;var i,r=e.next();return"("===r||"["===r?(t.f=t.inline=(i="("===r?")":"]",function(e,t){if(e.next()===i){t.f=t.inline=k,n.highlightFormatting&&(t.formatting="link-string");var r=C(t);return t.linkHref=!1,r}return e.match(A[i]),t.linkHref=!0,C(t)}),n.highlightFormatting&&(t.formatting="link-string"),t.linkHref=!0,C(t)):"error"}var A={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/};function E(e,t){return e.match(/^([^\]\\]|\\.)*\]:/,!1)?(t.f=L,e.next(),n.highlightFormatting&&(t.formatting="link"),t.linkText=!0,C(t)):g(e,t,k)}function L(e,t){if(e.match("]:",!0)){t.f=t.inline=T,n.highlightFormatting&&(t.formatting="link");var i=C(t);return t.linkText=!1,i}return e.match(/^([^\]\\]|\\.)+/,!0),o.linkText}function T(e,t){return e.eatSpace()?null:(e.match(/^[^\s]+/,!0),void 0===e.peek()?t.linkTitle=!0:e.match(/^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,!0),t.f=t.inline=k,o.linkHref+" url")}var M={startState:function(){return{f:y,prevLine:{stream:null},thisLine:{stream:null},block:y,htmlState:null,indentation:0,inline:k,text:w,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,setext:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,emoji:!1,fencedEndRE:null}},copyState:function(t){return{f:t.f,prevLine:t.prevLine,thisLine:t.thisLine,block:t.block,htmlState:t.htmlState&&e.copyState(i,t.htmlState),indentation:t.indentation,localMode:t.localMode,localState:t.localMode?e.copyState(t.localMode,t.localState):null,inline:t.inline,text:t.text,formatting:!1,linkText:t.linkText,linkTitle:t.linkTitle,linkHref:t.linkHref,code:t.code,em:t.em,strong:t.strong,strikethrough:t.strikethrough,emoji:t.emoji,header:t.header,setext:t.setext,hr:t.hr,taskList:t.taskList,list:t.list,listStack:t.listStack.slice(0),quote:t.quote,indentedCode:t.indentedCode,trailingSpace:t.trailingSpace,trailingSpaceNewLine:t.trailingSpaceNewLine,md_inside:t.md_inside,fencedEndRE:t.fencedEndRE}},token:function(e,t){if(t.formatting=!1,e!=t.thisLine.stream){if(t.header=0,t.hr=!1,e.match(/^\s*$/,!0))return x(t),null;if(t.prevLine=t.thisLine,t.thisLine={stream:e},t.taskList=!1,t.trailingSpace=0,t.trailingSpaceNewLine=!1,!t.localState&&(t.f=t.block,t.f!=b)){var n=e.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length;if(t.indentation=n,t.indentationDiff=null,n>0)return null}}return t.f(e,t)},innerMode:function(e){return e.block==b?{state:e.htmlState,mode:i}:e.localState?{state:e.localState,mode:e.localMode}:{state:e,mode:M}},indent:function(t,n,r){return t.block==b&&i.indent?i.indent(t.htmlState,n,r):t.localState&&t.localMode.indent?t.localMode.indent(t.localState,n,r):e.Pass},blankLine:x,getType:C,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",closeBrackets:"()[]{}''\"\"``",fold:"markdown"};return M}),"xml"),e.defineMIME("text/markdown","markdown"),e.defineMIME("text/x-markdown","markdown")},"object"==typeof n&&"object"==typeof t?i(e("../../lib/codemirror"),e("../xml/xml"),e("../meta")):i(CodeMirror)},{"../../lib/codemirror":10,"../meta":13,"../xml/xml":14}],13:[function(e,t,n){(function(e){"use strict";e.modeInfo=[{name:"APL",mime:"text/apl",mode:"apl",ext:["dyalog","apl"]},{name:"PGP",mimes:["application/pgp","application/pgp-encrypted","application/pgp-keys","application/pgp-signature"],mode:"asciiarmor",ext:["asc","pgp","sig"]},{name:"ASN.1",mime:"text/x-ttcn-asn",mode:"asn.1",ext:["asn","asn1"]},{name:"Asterisk",mime:"text/x-asterisk",mode:"asterisk",file:/^extensions\.conf$/i},{name:"Brainfuck",mime:"text/x-brainfuck",mode:"brainfuck",ext:["b","bf"]},{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h","ino"]},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"]},{name:"Cobol",mime:"text/x-cobol",mode:"cobol",ext:["cob","cpy","cbl"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp","cs"]},{name:"Clojure",mime:"text/x-clojure",mode:"clojure",ext:["clj","cljc","cljx"]},{name:"ClojureScript",mime:"text/x-clojurescript",mode:"clojure",ext:["cljs"]},{name:"Closure Stylesheets (GSS)",mime:"text/x-gss",mode:"css",ext:["gss"]},{name:"CMake",mime:"text/x-cmake",mode:"cmake",ext:["cmake","cmake.in"],file:/^CMakeLists\.txt$/},{name:"CoffeeScript",mimes:["application/vnd.coffeescript","text/coffeescript","text/x-coffeescript"],mode:"coffeescript",ext:["coffee"],alias:["coffee","coffee-script"]},{name:"Common Lisp",mime:"text/x-common-lisp",mode:"commonlisp",ext:["cl","lisp","el"],alias:["lisp"]},{name:"Cypher",mime:"application/x-cypher-query",mode:"cypher",ext:["cyp","cypher"]},{name:"Cython",mime:"text/x-cython",mode:"python",ext:["pyx","pxd","pxi"]},{name:"Crystal",mime:"text/x-crystal",mode:"crystal",ext:["cr"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"]},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"]},{name:"D",mime:"text/x-d",mode:"d",ext:["d"]},{name:"Dart",mimes:["application/dart","text/x-dart"],mode:"dart",ext:["dart"]},{name:"diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Django",mime:"text/x-django",mode:"django"},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"DTD",mime:"application/xml-dtd",mode:"dtd",ext:["dtd"]},{name:"Dylan",mime:"text/x-dylan",mode:"dylan",ext:["dylan","dyl","intr"]},{name:"EBNF",mime:"text/x-ebnf",mode:"ebnf"},{name:"ECL",mime:"text/x-ecl",mode:"ecl",ext:["ecl"]},{name:"edn",mime:"application/edn",mode:"clojure",ext:["edn"]},{name:"Eiffel",mime:"text/x-eiffel",mode:"eiffel",ext:["e"]},{name:"Elm",mime:"text/x-elm",mode:"elm",ext:["elm"]},{name:"Embedded JavaScript",mime:"application/x-ejs",mode:"htmlembedded",ext:["ejs"]},{name:"Embedded Ruby",mime:"application/x-erb",mode:"htmlembedded",ext:["erb"]},{name:"Erlang",mime:"text/x-erlang",mode:"erlang",ext:["erl"]},{name:"Esper",mime:"text/x-esper",mode:"sql"},{name:"Factor",mime:"text/x-factor",mode:"factor",ext:["factor"]},{name:"FCL",mime:"text/x-fcl",mode:"fcl"},{name:"Forth",mime:"text/x-forth",mode:"forth",ext:["forth","fth","4th"]},{name:"Fortran",mime:"text/x-fortran",mode:"fortran",ext:["f","for","f77","f90","f95"]},{name:"F#",mime:"text/x-fsharp",mode:"mllike",ext:["fs"],alias:["fsharp"]},{name:"Gas",mime:"text/x-gas",mode:"gas",ext:["s"]},{name:"Gherkin",mime:"text/x-feature",mode:"gherkin",ext:["feature"]},{name:"GitHub Flavored Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history)\.md$/i},{name:"Go",mime:"text/x-go",mode:"go",ext:["go"]},{name:"Groovy",mime:"text/x-groovy",mode:"groovy",ext:["groovy","gradle"],file:/^Jenkinsfile$/},{name:"HAML",mime:"text/x-haml",mode:"haml",ext:["haml"]},{name:"Haskell",mime:"text/x-haskell",mode:"haskell",ext:["hs"]},{name:"Haskell (Literate)",mime:"text/x-literate-haskell",mode:"haskell-literate",ext:["lhs"]},{name:"Haxe",mime:"text/x-haxe",mode:"haxe",ext:["hx"]},{name:"HXML",mime:"text/x-hxml",mode:"haxe",ext:["hxml"]},{name:"ASP.NET",mime:"application/x-aspx",mode:"htmlembedded",ext:["aspx"],alias:["asp","aspx"]},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm","handlebars","hbs"],alias:["xhtml"]},{name:"HTTP",mime:"message/http",mode:"http"},{name:"IDL",mime:"text/x-idl",mode:"idl",ext:["pro"]},{name:"Pug",mime:"text/x-pug",mode:"pug",ext:["jade","pug"],alias:["jade"]},{name:"Java",mime:"text/x-java",mode:"clike",ext:["java"]},{name:"Java Server Pages",mime:"application/x-jsp",mode:"htmlembedded",ext:["jsp"],alias:["jsp"]},{name:"JavaScript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"]},{name:"JSON",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"]},{name:"JSON-LD",mime:"application/ld+json",mode:"javascript",ext:["jsonld"],alias:["jsonld"]},{name:"JSX",mime:"text/jsx",mode:"jsx",ext:["jsx"]},{name:"Jinja2",mime:"text/jinja2",mode:"jinja2",ext:["j2","jinja","jinja2"]},{name:"Julia",mime:"text/x-julia",mode:"julia",ext:["jl"],alias:["jl"]},{name:"Kotlin",mime:"text/x-kotlin",mode:"clike",ext:["kt"]},{name:"LESS",mime:"text/x-less",mode:"css",ext:["less"]},{name:"LiveScript",mime:"text/x-livescript",mode:"livescript",ext:["ls"],alias:["ls"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"]},{name:"mIRC",mime:"text/mirc",mode:"mirc"},{name:"MariaDB SQL",mime:"text/x-mariadb",mode:"sql"},{name:"Mathematica",mime:"text/x-mathematica",mode:"mathematica",ext:["m","nb","wl","wls"]},{name:"Modelica",mime:"text/x-modelica",mode:"modelica",ext:["mo"]},{name:"MUMPS",mime:"text/x-mumps",mode:"mumps",ext:["mps"]},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"mbox",mime:"application/mbox",mode:"mbox",ext:["mbox"]},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i},{name:"NSIS",mime:"text/x-nsis",mode:"nsis",ext:["nsh","nsi"]},{name:"NTriples",mimes:["application/n-triples","application/n-quads","text/n-triples"],mode:"ntriples",ext:["nt","nq"]},{name:"Objective-C",mime:"text/x-objectivec",mode:"clike",ext:["m"],alias:["objective-c","objc"]},{name:"Objective-C++",mime:"text/x-objectivec++",mode:"clike",ext:["mm"],alias:["objective-c++","objc++"]},{name:"OCaml",mime:"text/x-ocaml",mode:"mllike",ext:["ml","mli","mll","mly"]},{name:"Octave",mime:"text/x-octave",mode:"octave",ext:["m"]},{name:"Oz",mime:"text/x-oz",mode:"oz",ext:["oz"]},{name:"Pascal",mime:"text/x-pascal",mode:"pascal",ext:["p","pas"]},{name:"PEG.js",mime:"null",mode:"pegjs",ext:["jsonld"]},{name:"Perl",mime:"text/x-perl",mode:"perl",ext:["pl","pm"]},{name:"PHP",mimes:["text/x-php","application/x-httpd-php","application/x-httpd-php-open"],mode:"php",ext:["php","php3","php4","php5","php7","phtml"]},{name:"Pig",mime:"text/x-pig",mode:"pig",ext:["pig"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"]},{name:"PLSQL",mime:"text/x-plsql",mode:"sql",ext:["pls"]},{name:"PostgreSQL",mime:"text/x-pgsql",mode:"sql"},{name:"PowerShell",mime:"application/x-powershell",mode:"powershell",ext:["ps1","psd1","psm1"]},{name:"Properties files",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"ProtoBuf",mime:"text/x-protobuf",mode:"protobuf",ext:["proto"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/},{name:"Puppet",mime:"text/x-puppet",mode:"puppet",ext:["pp"]},{name:"Q",mime:"text/x-q",mode:"q",ext:["q"]},{name:"R",mime:"text/x-rsrc",mode:"r",ext:["r","R"],alias:["rscript"]},{name:"reStructuredText",mime:"text/x-rst",mode:"rst",ext:["rst"],alias:["rst"]},{name:"RPM Changes",mime:"text/x-rpm-changes",mode:"rpm"},{name:"RPM Spec",mime:"text/x-rpm-spec",mode:"rpm",ext:["spec"]},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"]},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"SAS",mime:"text/x-sas",mode:"sas",ext:["sas"]},{name:"Sass",mime:"text/x-sass",mode:"sass",ext:["sass"]},{name:"Scala",mime:"text/x-scala",mode:"clike",ext:["scala"]},{name:"Scheme",mime:"text/x-scheme",mode:"scheme",ext:["scm","ss"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"]},{name:"Shell",mimes:["text/x-sh","application/x-sh"],mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/},{name:"Sieve",mime:"application/sieve",mode:"sieve",ext:["siv","sieve"]},{name:"Slim",mimes:["text/x-slim","application/x-slim"],mode:"slim",ext:["slim"]},{name:"Smalltalk",mime:"text/x-stsrc",mode:"smalltalk",ext:["st"]},{name:"Smarty",mime:"text/x-smarty",mode:"smarty",ext:["tpl"]},{name:"Solr",mime:"text/x-solr",mode:"solr"},{name:"SML",mime:"text/x-sml",mode:"mllike",ext:["sml","sig","fun","smackspec"]},{name:"Soy",mime:"text/x-soy",mode:"soy",ext:["soy"],alias:["closure template"]},{name:"SPARQL",mime:"application/sparql-query",mode:"sparql",ext:["rq","sparql"],alias:["sparul"]},{name:"Spreadsheet",mime:"text/x-spreadsheet",mode:"spreadsheet",alias:["excel","formula"]},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"]},{name:"SQLite",mime:"text/x-sqlite",mode:"sql"},{name:"Squirrel",mime:"text/x-squirrel",mode:"clike",ext:["nut"]},{name:"Stylus",mime:"text/x-styl",mode:"stylus",ext:["styl"]},{name:"Swift",mime:"text/x-swift",mode:"swift",ext:["swift"]},{name:"sTeX",mime:"text/x-stex",mode:"stex"},{name:"LaTeX",mime:"text/x-latex",mode:"stex",ext:["text","ltx","tex"],alias:["tex"]},{name:"SystemVerilog",mime:"text/x-systemverilog",mode:"verilog",ext:["v","sv","svh"]},{name:"Tcl",mime:"text/x-tcl",mode:"tcl",ext:["tcl"]},{name:"Textile",mime:"text/x-textile",mode:"textile",ext:["textile"]},{name:"TiddlyWiki",mime:"text/x-tiddlywiki",mode:"tiddlywiki"},{name:"Tiki wiki",mime:"text/tiki",mode:"tiki"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"Tornado",mime:"text/x-tornado",mode:"tornado"},{name:"troff",mime:"text/troff",mode:"troff",ext:["1","2","3","4","5","6","7","8","9"]},{name:"TTCN",mime:"text/x-ttcn",mode:"ttcn",ext:["ttcn","ttcn3","ttcnpp"]},{name:"TTCN_CFG",mime:"text/x-ttcn-cfg",mode:"ttcn-cfg",ext:["cfg"]},{name:"Turtle",mime:"text/turtle",mode:"turtle",ext:["ttl"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"]},{name:"TypeScript-JSX",mime:"text/typescript-jsx",mode:"jsx",ext:["tsx"],alias:["tsx"]},{name:"Twig",mime:"text/x-twig",mode:"twig"},{name:"Web IDL",mime:"text/x-webidl",mode:"webidl",ext:["webidl"]},{name:"VB.NET",mime:"text/x-vb",mode:"vb",ext:["vb"]},{name:"VBScript",mime:"text/vbscript",mode:"vbscript",ext:["vbs"]},{name:"Velocity",mime:"text/velocity",mode:"velocity",ext:["vtl"]},{name:"Verilog",mime:"text/x-verilog",mode:"verilog",ext:["v"]},{name:"VHDL",mime:"text/x-vhdl",mode:"vhdl",ext:["vhd","vhdl"]},{name:"Vue.js Component",mimes:["script/x-vue","text/x-vue"],mode:"vue",ext:["vue"]},{name:"XML",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd","svg"],alias:["rss","wsdl","xsd"]},{name:"XQuery",mime:"application/xquery",mode:"xquery",ext:["xy","xquery"]},{name:"Yacas",mime:"text/x-yacas",mode:"yacas",ext:["ys"]},{name:"YAML",mimes:["text/x-yaml","text/yaml"],mode:"yaml",ext:["yaml","yml"],alias:["yml"]},{name:"Z80",mime:"text/x-z80",mode:"z80",ext:["z80"]},{name:"mscgen",mime:"text/x-mscgen",mode:"mscgen",ext:["mscgen","mscin","msc"]},{name:"xu",mime:"text/x-xu",mode:"mscgen",ext:["xu"]},{name:"msgenny",mime:"text/x-msgenny",mode:"mscgen",ext:["msgenny"]},{name:"WebAssembly",mime:"text/webassembly",mode:"wast",ext:["wat","wast"]}];for(var t=0;t<e.modeInfo.length;t++){var n=e.modeInfo[t];n.mimes&&(n.mime=n.mimes[0])}e.findModeByMIME=function(t){t=t.toLowerCase();for(var n=0;n<e.modeInfo.length;n++){var i=e.modeInfo[n];if(i.mime==t)return i;if(i.mimes)for(var r=0;r<i.mimes.length;r++)if(i.mimes[r]==t)return i}return/\+xml$/.test(t)?e.findModeByMIME("application/xml"):/\+json$/.test(t)?e.findModeByMIME("application/json"):void 0},e.findModeByExtension=function(t){t=t.toLowerCase();for(var n=0;n<e.modeInfo.length;n++){var i=e.modeInfo[n];if(i.ext)for(var r=0;r<i.ext.length;r++)if(i.ext[r]==t)return i}},e.findModeByFileName=function(t){for(var n=0;n<e.modeInfo.length;n++){var i=e.modeInfo[n];if(i.file&&i.file.test(t))return i}var r=t.lastIndexOf("."),o=r>-1&&t.substring(r+1,t.length);if(o)return e.findModeByExtension(o)},e.findModeByName=function(t){t=t.toLowerCase();for(var n=0;n<e.modeInfo.length;n++){var i=e.modeInfo[n];if(i.name.toLowerCase()==t)return i;if(i.alias)for(var r=0;r<i.alias.length;r++)if(i.alias[r].toLowerCase()==t)return i}}})("object"==typeof n&&"object"==typeof t?e("../lib/codemirror"):CodeMirror)},{"../lib/codemirror":10}],14:[function(e,t,n){(function(e){"use strict";var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};e.defineMode("xml",(function(i,r){var o,a,l=i.indentUnit,s={},u=r.htmlMode?t:n;for(var c in u)s[c]=u[c];for(var c in r)s[c]=r[c];function d(e,t){function n(n){return t.tokenize=n,n(e,t)}var i=e.next();return"<"==i?e.eat("!")?e.eat("[")?e.match("CDATA[")?n(f("atom","]]>")):null:e.match("--")?n(f("comment","--\x3e")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),n(p(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=f("meta","?>"),"meta"):(o=e.eat("/")?"closeTag":"openTag",t.tokenize=h,"tag bracket"):"&"==i?(e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"))?"atom":"error":(e.eatWhile(/[^&<]/),null)}function h(e,t){var n,i,r=e.next();if(">"==r||"/"==r&&e.eat(">"))return t.tokenize=d,o=">"==r?"endTag":"selfcloseTag","tag bracket";if("="==r)return o="equals",null;if("<"==r){t.tokenize=d,t.state=y,t.tagName=t.tagStart=null;var a=t.tokenize(e,t);return a?a+" tag error":"tag error"}return/[\'\"]/.test(r)?(t.tokenize=(n=r,i=function(e,t){for(;!e.eol();)if(e.next()==n){t.tokenize=h;break}return"string"},i.isInAttribute=!0,i),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function f(e,t){return function(n,i){for(;!n.eol();){if(n.match(t)){i.tokenize=d;break}n.next()}return e}}function p(e){return function(t,n){for(var i;null!=(i=t.next());){if("<"==i)return n.tokenize=p(e+1),n.tokenize(t,n);if(">"==i){if(1==e){n.tokenize=d;break}return n.tokenize=p(e-1),n.tokenize(t,n)}}return"meta"}}function m(e){return e&&e.toLowerCase()}function g(e,t,n){this.prev=e.context,this.tagName=t||"",this.indent=e.indented,this.startOfLine=n,(s.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function v(e){e.context&&(e.context=e.context.prev)}function x(e,t){for(var n;;){if(!e.context)return;if(n=e.context.tagName,!s.contextGrabbers.hasOwnProperty(m(n))||!s.contextGrabbers[m(n)].hasOwnProperty(m(t)))return;v(e)}}function y(e,t,n){return"openTag"==e?(n.tagStart=t.column(),b):"closeTag"==e?D:y}function b(e,t,n){return"word"==e?(n.tagName=t.current(),a="tag",k):s.allowMissingTagName&&"endTag"==e?(a="tag bracket",k(e,0,n)):(a="error",b)}function D(e,t,n){if("word"==e){var i=t.current();return n.context&&n.context.tagName!=i&&s.implicitlyClosed.hasOwnProperty(m(n.context.tagName))&&v(n),n.context&&n.context.tagName==i||!1===s.matchClosing?(a="tag",C):(a="tag error",w)}return s.allowMissingTagName&&"endTag"==e?(a="tag bracket",C(e,0,n)):(a="error",w)}function C(e,t,n){return"endTag"!=e?(a="error",C):(v(n),y)}function w(e,t,n){return a="error",C(e,0,n)}function k(e,t,n){if("word"==e)return a="attribute",S;if("endTag"==e||"selfcloseTag"==e){var i=n.tagName,r=n.tagStart;return n.tagName=n.tagStart=null,"selfcloseTag"==e||s.autoSelfClosers.hasOwnProperty(m(i))?x(n,i):(x(n,i),n.context=new g(n,i,r==n.indented)),y}return a="error",k}function S(e,t,n){return"equals"==e?F:(s.allowMissing||(a="error"),k(e,0,n))}function F(e,t,n){return"string"==e?A:"word"==e&&s.allowUnquoted?(a="string",k):(a="error",k(e,0,n))}function A(e,t,n){return"string"==e?A:k(e,0,n)}return d.isInText=!0,{startState:function(e){var t={tokenize:d,state:y,indented:e||0,tagName:null,tagStart:null,context:null};return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;o=null;var n=t.tokenize(e,t);return(n||o)&&"comment"!=n&&(a=null,t.state=t.state(o||n,e,t),a&&(n="error"==a?n+" error":a)),n},indent:function(t,n,i){var r=t.context;if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+l;if(r&&r.noIndent)return e.Pass;if(t.tokenize!=h&&t.tokenize!=d)return i?i.match(/^(\s*)/)[0].length:0;if(t.tagName)return!1!==s.multilineTagIndentPastTag?t.tagStart+t.tagName.length+2:t.tagStart+l*(s.multilineTagIndentFactor||1);if(s.alignCDATA&&/<!\[CDATA\[/.test(n))return 0;var o=n&&/^<(\/)?([\w_:\.-]*)/.exec(n);if(o&&o[1])for(;r;){if(r.tagName==o[2]){r=r.prev;break}if(!s.implicitlyClosed.hasOwnProperty(m(r.tagName)))break;r=r.prev}else if(o)for(;r;){var a=s.contextGrabbers[m(r.tagName)];if(!a||!a.hasOwnProperty(m(o[2])))break;r=r.prev}for(;r&&r.prev&&!r.startOfLine;)r=r.prev;return r?r.indent+l:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:s.htmlMode?"html":"xml",helperType:s.htmlMode?"html":"xml",skipAttribute:function(e){e.state==F&&(e.state=k)},xmlCurrentTag:function(e){return e.tagName?{name:e.tagName,close:"closeTag"==e.type}:null},xmlCurrentContext:function(e){for(var t=[],n=e.context;n;n=n.prev)t.push(n.tagName);return t.reverse()}}})),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})})("object"==typeof n&&"object"==typeof t?e("../../lib/codemirror"):CodeMirror)},{"../../lib/codemirror":10}],15:[function(e,t,n){!function(e,i){"object"==typeof n&&void 0!==t?i(n):i((e="undefined"!=typeof globalThis?globalThis:e||self).marked={})}(this,(function(e){"use strict";function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function i(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.defaults={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};var o=/[&<>"']/,a=/[&<>"']/g,l=/[<>"']|&(?!#?\w+;)/,s=/[<>"']|&(?!#?\w+;)/g,u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c=function(e){return u[e]};function d(e,t){if(t){if(o.test(e))return e.replace(a,c)}else if(l.test(e))return e.replace(s,c);return e}var h=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function f(e){return e.replace(h,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var p=/(^|[^\[])\^/g;function m(e,t){e="string"==typeof e?e:e.source,t=t||"";var n={replace:function(t,i){return i=(i=i.source||i).replace(p,"$1"),e=e.replace(t,i),n},getRegex:function(){return new RegExp(e,t)}};return n}var g=/[^\w:]/g,v=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function x(e,t,n){if(e){var i;try{i=decodeURIComponent(f(n)).replace(g,"").toLowerCase()}catch(e){return null}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:")||0===i.indexOf("data:"))return null}t&&!v.test(n)&&(n=function(e,t){y[" "+e]||(b.test(e)?y[" "+e]=e+"/":y[" "+e]=F(e,"/",!0));var n=-1===(e=y[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(D,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(C,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}var y={},b=/^[^:]+:\/*[^/]*$/,D=/^([^:]+:)[\s\S]*$/,C=/^([^:]+:\/*[^/]*)[\s\S]*$/;var w={exec:function(){}};function k(e){for(var t,n,i=1;i<arguments.length;i++)for(n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function S(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var i=!1,r=t;--r>=0&&"\\"===n[r];)i=!i;return i?"|":" |"})).split(/ \|/),i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function F(e,t,n){var i=e.length;if(0===i)return"";for(var r=0;r<i;){var o=e.charAt(i-r-1);if(o!==t||n){if(o===t||!n)break;r++}else r++}return e.slice(0,i-r)}function A(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function E(e,t){if(t<1)return"";for(var n="";t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}function L(e,t,n,i){var r=t.href,o=t.title?d(t.title):null,a=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){i.state.inLink=!0;var l={type:"link",raw:n,href:r,title:o,text:a,tokens:i.inlineTokens(a,[])};return i.state.inLink=!1,l}return{type:"image",raw:n,href:r,title:o,text:d(a)}}var T=function(){function t(t){this.options=t||e.defaults}var n=t.prototype;return n.space=function(e){var t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}},n.code=function(e){var t=this.rules.block.code.exec(e);if(t){var n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:F(n,"\n")}}},n.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],i=function(e,t){var n=e.match(/^(\s+)(?:```)/);if(null===n)return t;var i=n[1];return t.split("\n").map((function(e){var t=e.match(/^\s+/);return null===t?e:t[0].length>=i.length?e.slice(i.length):e})).join("\n")}(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:i}}},n.heading=function(e){var t=this.rules.block.heading.exec(e);if(t){var n=t[2].trim();if(/#$/.test(n)){var i=F(n,"#");this.options.pedantic?n=i.trim():i&&!/ $/.test(i)||(n=i.trim())}var r={type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:[]};return this.lexer.inline(r.text,r.tokens),r}},n.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},n.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var n=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}},n.list=function(e){var t=this.rules.block.list.exec(e);if(t){var n,r,o,a,l,s,u,c,d,h,f,p,m=t[1].trim(),g=m.length>1,v={type:"list",raw:"",ordered:g,start:g?+m.slice(0,-1):"",loose:!1,items:[]};m=g?"\\d{1,9}\\"+m.slice(-1):"\\"+m,this.options.pedantic&&(m=g?m:"[*+-]");for(var x=new RegExp("^( {0,3}"+m+")((?:[\t ][^\\n]*)?(?:\\n|$))");e&&(p=!1,t=x.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),c=t[2].split("\n",1)[0],d=e.split("\n",1)[0],this.options.pedantic?(a=2,f=c.trimLeft()):(a=(a=t[2].search(/[^ ]/))>4?1:a,f=c.slice(a),a+=t[1].length),s=!1,!c&&/^ *$/.test(d)&&(n+=d+"\n",e=e.substring(d.length+1),p=!0),!p)for(var y=new RegExp("^ {0,"+Math.min(3,a-1)+"}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))"),b=new RegExp("^ {0,"+Math.min(3,a-1)+"}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"),D=new RegExp("^ {0,"+Math.min(3,a-1)+"}(?:```|~~~)"),C=new RegExp("^ {0,"+Math.min(3,a-1)+"}#");e&&(c=h=e.split("\n",1)[0],this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!D.test(c))&&!C.test(c)&&!y.test(c)&&!b.test(e);){if(c.search(/[^ ]/)>=a||!c.trim())f+="\n"+c.slice(a);else{if(s)break;f+="\n"+c}s||c.trim()||(s=!0),n+=h+"\n",e=e.substring(h.length+1)}v.loose||(u?v.loose=!0:/\n *\n *$/.test(n)&&(u=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(f))&&(o="[ ] "!==r[0],f=f.replace(/^\[[ xX]\] +/,"")),v.items.push({type:"list_item",raw:n,task:!!r,checked:o,loose:!1,text:f}),v.raw+=n}v.items[v.items.length-1].raw=n.trimRight(),v.items[v.items.length-1].text=f.trimRight(),v.raw=v.raw.trimRight();var w=v.items.length;for(l=0;l<w;l++){this.lexer.state.top=!1,v.items[l].tokens=this.lexer.blockTokens(v.items[l].text,[]);var k=v.items[l].tokens.filter((function(e){return"space"===e.type})),S=k.every((function(e){for(var t,n=0,r=i(e.raw.split(""));!(t=r()).done;){if("\n"===t.value&&(n+=1),n>1)return!0}return!1}));!v.loose&&k.length&&S&&(v.loose=!0,v.items[l].loose=!0)}return v}},n.html=function(e){var t=this.rules.block.html.exec(e);if(t){var n={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(n.type="paragraph",n.text=this.options.sanitizer?this.options.sanitizer(t[0]):d(t[0]),n.tokens=[],this.lexer.inline(n.text,n.tokens)),n}},n.def=function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},n.table=function(e){var t=this.rules.block.table.exec(e);if(t){var n={type:"table",header:S(t[1]).map((function(e){return{text:e}})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(n.header.length===n.align.length){n.raw=t[0];var i,r,o,a,l=n.align.length;for(i=0;i<l;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(l=n.rows.length,i=0;i<l;i++)n.rows[i]=S(n.rows[i],n.header.length).map((function(e){return{text:e}}));for(l=n.header.length,r=0;r<l;r++)n.header[r].tokens=[],this.lexer.inline(n.header[r].text,n.header[r].tokens);for(l=n.rows.length,r=0;r<l;r++)for(a=n.rows[r],o=0;o<a.length;o++)a[o].tokens=[],this.lexer.inline(a[o].text,a[o].tokens);return n}}},n.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t){var n={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}},n.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t){var n={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}},n.text=function(e){var t=this.rules.block.text.exec(e);if(t){var n={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}},n.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:d(t[1])}},n.tag=function(e){var t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):d(t[0]):t[0]}},n.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;var i=F(n.slice(0,-1),"\\");if((n.length-i.length)%2==0)return}else{var r=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,i=0,r=0;r<n;r++)if("\\"===e[r])r++;else if(e[r]===t[0])i++;else if(e[r]===t[1]&&--i<0)return r;return-1}(t[2],"()");if(r>-1){var o=(0===t[0].indexOf("!")?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,o).trim(),t[3]=""}}var a=t[2],l="";if(this.options.pedantic){var s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);s&&(a=s[1],l=s[3])}else l=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(n)?a.slice(1):a.slice(1,-1)),L(t,{href:a?a.replace(this.rules.inline._escapes,"$1"):a,title:l?l.replace(this.rules.inline._escapes,"$1"):l},t[0],this.lexer)}},n.reflink=function(e,t){var n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var i=(n[2]||n[1]).replace(/\s+/g," ");if(!(i=t[i.toLowerCase()])||!i.href){var r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return L(n,i,n[0],this.lexer)}},n.emStrong=function(e,t,n){void 0===n&&(n="");var i=this.rules.inline.emStrong.lDelim.exec(e);if(i&&(!i[3]||!n.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var r=i[1]||i[2]||"";if(!r||r&&(""===n||this.rules.inline.punctuation.exec(n))){var o,a,l=i[0].length-1,s=l,u=0,c="*"===i[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+l);null!=(i=c.exec(t));)if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6])if(a=o.length,i[3]||i[4])s+=a;else if(!((i[5]||i[6])&&l%3)||(l+a)%3){if(!((s-=a)>0)){if(a=Math.min(a,a+s+u),Math.min(l,a)%2){var d=e.slice(1,l+i.index+a);return{type:"em",raw:e.slice(0,l+i.index+a+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}var h=e.slice(2,l+i.index+a-1);return{type:"strong",raw:e.slice(0,l+i.index+a+1),text:h,tokens:this.lexer.inlineTokens(h,[])}}}else u+=a}}},n.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),i=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return i&&r&&(n=n.substring(1,n.length-1)),n=d(n,!0),{type:"codespan",raw:t[0],text:n}}},n.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},n.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}},n.autolink=function(e,t){var n,i,r=this.rules.inline.autolink.exec(e);if(r)return i="@"===r[2]?"mailto:"+(n=d(this.options.mangle?t(r[1]):r[1])):n=d(r[1]),{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}},n.url=function(e,t){var n;if(n=this.rules.inline.url.exec(e)){var i,r;if("@"===n[2])r="mailto:"+(i=d(this.options.mangle?t(n[0]):n[0]));else{var o;do{o=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(o!==n[0]);i=d(n[0]),r="www."===n[1]?"http://"+i:i}return{type:"link",raw:n[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}},n.inlineText=function(e,t){var n,i=this.rules.inline.text.exec(e);if(i)return n=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):d(i[0]):i[0]:d(this.options.smartypants?t(i[0]):i[0]),{type:"text",raw:i[0],text:n}},t}(),M={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:w,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};M.def=m(M.def).replace("label",M._label).replace("title",M._title).getRegex(),M.bullet=/(?:[*+-]|\d{1,9}[.)])/,M.listItemStart=m(/^( *)(bull) */).replace("bull",M.bullet).getRegex(),M.list=m(M.list).replace(/bull/g,M.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+M.def.source+")").getRegex(),M._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",M._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,M.html=m(M.html,"i").replace("comment",M._comment).replace("tag",M._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),M.paragraph=m(M._paragraph).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex(),M.blockquote=m(M.blockquote).replace("paragraph",M.paragraph).getRegex(),M.normal=k({},M),M.gfm=k({},M.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),M.gfm.table=m(M.gfm.table).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex(),M.gfm.paragraph=m(M._paragraph).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",M.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex(),M.pedantic=k({},M.normal,{html:m("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",M._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:w,paragraph:m(M.normal._paragraph).replace("hr",M.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",M.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var B={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:w,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:w,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function N(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function O(e){var t,n,i="",r=e.length;for(t=0;t<r;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),i+="&#"+n+";";return i}B._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",B.punctuation=m(B.punctuation).replace(/punctuation/g,B._punctuation).getRegex(),B.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,B.escapedEmSt=/\\\*|\\_/g,B._comment=m(M._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),B.emStrong.lDelim=m(B.emStrong.lDelim).replace(/punct/g,B._punctuation).getRegex(),B.emStrong.rDelimAst=m(B.emStrong.rDelimAst,"g").replace(/punct/g,B._punctuation).getRegex(),B.emStrong.rDelimUnd=m(B.emStrong.rDelimUnd,"g").replace(/punct/g,B._punctuation).getRegex(),B._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,B._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,B._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,B.autolink=m(B.autolink).replace("scheme",B._scheme).replace("email",B._email).getRegex(),B._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,B.tag=m(B.tag).replace("comment",B._comment).replace("attribute",B._attribute).getRegex(),B._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,B._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,B._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,B.link=m(B.link).replace("label",B._label).replace("href",B._href).replace("title",B._title).getRegex(),B.reflink=m(B.reflink).replace("label",B._label).replace("ref",M._label).getRegex(),B.nolink=m(B.nolink).replace("ref",M._label).getRegex(),B.reflinkSearch=m(B.reflinkSearch,"g").replace("reflink",B.reflink).replace("nolink",B.nolink).getRegex(),B.normal=k({},B),B.pedantic=k({},B.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:m(/^!?\[(label)\]\((.*?)\)/).replace("label",B._label).getRegex(),reflink:m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",B._label).getRegex()}),B.gfm=k({},B.normal,{escape:m(B.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),B.gfm.url=m(B.gfm.url,"i").replace("email",B.gfm._extended_email).getRegex(),B.breaks=k({},B.gfm,{br:m(B.br).replace("{2,}","*").getRegex(),text:m(B.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var I=function(){function n(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||e.defaults,this.options.tokenizer=this.options.tokenizer||new T,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};var n={block:M.normal,inline:B.normal};this.options.pedantic?(n.block=M.pedantic,n.inline=B.pedantic):this.options.gfm&&(n.block=M.gfm,this.options.breaks?n.inline=B.breaks:n.inline=B.gfm),this.tokenizer.rules=n}n.lex=function(e,t){return new n(t).lex(e)},n.lexInline=function(e,t){return new n(t).inlineTokens(e)};var i,r,o,a=n.prototype;return a.lex=function(e){var t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens},a.blockTokens=function(e,t){var n,i,r,o,a=this;for(void 0===t&&(t=[]),e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(function(e,t,n){return t+"    ".repeat(n.length)}));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((function(i){return!!(n=i.call({lexer:a},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)}))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),!(i=t[t.length-1])||"paragraph"!==i.type&&"text"!==i.type?t.push(n):(i.raw+="\n"+n.raw,i.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),!(i=t[t.length-1])||"paragraph"!==i.type&&"text"!==i.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(i.raw+="\n"+n.raw,i.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else if(r=e,this.options.extensions&&this.options.extensions.startBlock&&function(){var t=1/0,n=e.slice(1),i=void 0;a.options.extensions.startBlock.forEach((function(e){"number"==typeof(i=e.call({lexer:this},n))&&i>=0&&(t=Math.min(t,i))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}(),this.state.top&&(n=this.tokenizer.paragraph(r)))i=t[t.length-1],o&&"paragraph"===i.type?(i.raw+="\n"+n.raw,i.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),o=r.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),(i=t[t.length-1])&&"text"===i.type?(i.raw+="\n"+n.raw,i.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);else if(e){var l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}throw new Error(l)}return this.state.top=!0,t},a.inline=function(e,t){this.inlineQueue.push({src:e,tokens:t})},a.inlineTokens=function(e,t){var n,i,r,o=this;void 0===t&&(t=[]);var a,l,s,u=e;if(this.tokens.links){var c=Object.keys(this.tokens.links);if(c.length>0)for(;null!=(a=this.tokenizer.rules.inline.reflinkSearch.exec(u));)c.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(u=u.slice(0,a.index)+"["+E("a",a[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(a=this.tokenizer.rules.inline.blockSkip.exec(u));)u=u.slice(0,a.index)+"["+E("a",a[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(a=this.tokenizer.rules.inline.escapedEmSt.exec(u));)u=u.slice(0,a.index)+"++"+u.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(s=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((function(i){return!!(n=i.call({lexer:o},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)}))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),(i=t[t.length-1])&&"text"===n.type&&"text"===i.type?(i.raw+=n.raw,i.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),(i=t[t.length-1])&&"text"===n.type&&"text"===i.type?(i.raw+=n.raw,i.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,u,s))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,O))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,O))){if(r=e,this.options.extensions&&this.options.extensions.startInline&&function(){var t=1/0,n=e.slice(1),i=void 0;o.options.extensions.startInline.forEach((function(e){"number"==typeof(i=e.call({lexer:this},n))&&i>=0&&(t=Math.min(t,i))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}(),n=this.tokenizer.inlineText(r,N))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(s=n.raw.slice(-1)),l=!0,(i=t[t.length-1])&&"text"===i.type?(i.raw+=n.raw,i.text+=n.text):t.push(n);else if(e){var d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}throw new Error(d)}}else e=e.substring(n.raw.length),t.push(n);return t},i=n,o=[{key:"rules",get:function(){return{block:M,inline:B}}}],(r=null)&&t(i.prototype,r),o&&t(i,o),Object.defineProperty(i,"prototype",{writable:!1}),n}(),z=function(){function t(t){this.options=t||e.defaults}var n=t.prototype;return n.code=function(e,t,n){var i=(t||"").match(/\S*/)[0];if(this.options.highlight){var r=this.options.highlight(e,i);null!=r&&r!==e&&(n=!0,e=r)}return e=e.replace(/\n$/,"")+"\n",i?'<pre><code class="'+this.options.langPrefix+d(i,!0)+'">'+(n?e:d(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:d(e,!0))+"</code></pre>\n"},n.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.html=function(e){return e},n.heading=function(e,t,n,i){return this.options.headerIds?"<h"+t+' id="'+(this.options.headerPrefix+i.slug(n))+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},n.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},n.list=function(e,t,n){var i=t?"ol":"ul";return"<"+i+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+i+">\n"},n.listitem=function(e){return"<li>"+e+"</li>\n"},n.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},n.paragraph=function(e){return"<p>"+e+"</p>\n"},n.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},n.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},n.strong=function(e){return"<strong>"+e+"</strong>"},n.em=function(e){return"<em>"+e+"</em>"},n.codespan=function(e){return"<code>"+e+"</code>"},n.br=function(){return this.options.xhtml?"<br/>":"<br>"},n.del=function(e){return"<del>"+e+"</del>"},n.link=function(e,t,n){if(null===(e=x(this.options.sanitize,this.options.baseUrl,e)))return n;var i='<a href="'+d(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},n.image=function(e,t,n){if(null===(e=x(this.options.sanitize,this.options.baseUrl,e)))return n;var i='<img src="'+e+'" alt="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">"},n.text=function(e){return e},t}(),H=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),R=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do{n=e+"-"+ ++i}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={});var n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)},e}(),P=function(){function t(t){this.options=t||e.defaults,this.options.renderer=this.options.renderer||new z,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new H,this.slugger=new R}t.parse=function(e,n){return new t(n).parse(e)},t.parseInline=function(e,n){return new t(n).parseInline(e)};var n=t.prototype;return n.parse=function(e,t){void 0===t&&(t=!0);var n,i,r,o,a,l,s,u,c,d,h,p,m,g,v,x,y,b,D,C="",w=e.length;for(n=0;n<w;n++)if(d=e[n],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type])||!1===(D=this.options.extensions.renderers[d.type].call({parser:this},d))&&["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))switch(d.type){case"space":continue;case"hr":C+=this.renderer.hr();continue;case"heading":C+=this.renderer.heading(this.parseInline(d.tokens),d.depth,f(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue;case"code":C+=this.renderer.code(d.text,d.lang,d.escaped);continue;case"table":for(u="",s="",o=d.header.length,i=0;i<o;i++)s+=this.renderer.tablecell(this.parseInline(d.header[i].tokens),{header:!0,align:d.align[i]});for(u+=this.renderer.tablerow(s),c="",o=d.rows.length,i=0;i<o;i++){for(s="",a=(l=d.rows[i]).length,r=0;r<a;r++)s+=this.renderer.tablecell(this.parseInline(l[r].tokens),{header:!1,align:d.align[r]});c+=this.renderer.tablerow(s)}C+=this.renderer.table(u,c);continue;case"blockquote":c=this.parse(d.tokens),C+=this.renderer.blockquote(c);continue;case"list":for(h=d.ordered,p=d.start,m=d.loose,o=d.items.length,c="",i=0;i<o;i++)x=(v=d.items[i]).checked,y=v.task,g="",v.task&&(b=this.renderer.checkbox(x),m?v.tokens.length>0&&"paragraph"===v.tokens[0].type?(v.tokens[0].text=b+" "+v.tokens[0].text,v.tokens[0].tokens&&v.tokens[0].tokens.length>0&&"text"===v.tokens[0].tokens[0].type&&(v.tokens[0].tokens[0].text=b+" "+v.tokens[0].tokens[0].text)):v.tokens.unshift({type:"text",text:b}):g+=b),g+=this.parse(v.tokens,m),c+=this.renderer.listitem(g,y,x);C+=this.renderer.list(c,h,p);continue;case"html":C+=this.renderer.html(d.text);continue;case"paragraph":C+=this.renderer.paragraph(this.parseInline(d.tokens));continue;case"text":for(c=d.tokens?this.parseInline(d.tokens):d.text;n+1<w&&"text"===e[n+1].type;)c+="\n"+((d=e[++n]).tokens?this.parseInline(d.tokens):d.text);C+=t?this.renderer.paragraph(c):c;continue;default:var k='Token with "'+d.type+'" type was not found.';if(this.options.silent)return void console.error(k);throw new Error(k)}else C+=D||"";return C},n.parseInline=function(e,t){t=t||this.renderer;var n,i,r,o="",a=e.length;for(n=0;n<a;n++)if(i=e[n],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type])||!1===(r=this.options.extensions.renderers[i.type].call({parser:this},i))&&["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))switch(i.type){case"escape":case"text":o+=t.text(i.text);break;case"html":o+=t.html(i.text);break;case"link":o+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break;case"image":o+=t.image(i.href,i.title,i.text);break;case"strong":o+=t.strong(this.parseInline(i.tokens,t));break;case"em":o+=t.em(this.parseInline(i.tokens,t));break;case"codespan":o+=t.codespan(i.text);break;case"br":o+=t.br();break;case"del":o+=t.del(this.parseInline(i.tokens,t));break;default:var l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}else o+=r||"";return o},t}();function _(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),A(t=k({},_.defaults,t||{})),n){var i,r=t.highlight;try{i=I.lex(e,t)}catch(e){return n(e)}var o=function(e){var o;if(!e)try{t.walkTokens&&_.walkTokens(i,t.walkTokens),o=P.parse(i,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,o)};if(!r||r.length<3)return o();if(delete t.highlight,!i.length)return o();var a=0;return _.walkTokens(i,(function(e){"code"===e.type&&(a++,setTimeout((function(){r(e.text,e.lang,(function(t,n){if(t)return o(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),0===--a&&o()}))}),0))})),void(0===a&&o())}try{var l=I.lex(e,t);return t.walkTokens&&_.walkTokens(l,t.walkTokens),P.parse(l,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+d(e.message+"",!0)+"</pre>";throw e}}_.options=_.setOptions=function(t){var n;return k(_.defaults,t),n=_.defaults,e.defaults=n,_},_.getDefaults=r,_.defaults=e.defaults,_.use=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i,r=k.apply(void 0,[{}].concat(t)),o=_.defaults.extensions||{renderers:{},childTokens:{}};t.forEach((function(e){if(e.extensions&&(i=!0,e.extensions.forEach((function(e){if(!e.name)throw new Error("extension name required");if(e.renderer){var t=o.renderers?o.renderers[e.name]:null;o.renderers[e.name]=t?function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=e.renderer.apply(this,i);return!1===o&&(o=t.apply(this,i)),o}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");o[e.level]?o[e.level].unshift(e.tokenizer):o[e.level]=[e.tokenizer],e.start&&("block"===e.level?o.startBlock?o.startBlock.push(e.start):o.startBlock=[e.start]:"inline"===e.level&&(o.startInline?o.startInline.push(e.start):o.startInline=[e.start]))}e.childTokens&&(o.childTokens[e.name]=e.childTokens)}))),e.renderer&&function(){var t=_.defaults.renderer||new z,n=function(n){var i=t[n];t[n]=function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var l=e.renderer[n].apply(t,o);return!1===l&&(l=i.apply(t,o)),l}};for(var i in e.renderer)n(i);r.renderer=t}(),e.tokenizer&&function(){var t=_.defaults.tokenizer||new T,n=function(n){var i=t[n];t[n]=function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var l=e.tokenizer[n].apply(t,o);return!1===l&&(l=i.apply(t,o)),l}};for(var i in e.tokenizer)n(i);r.tokenizer=t}(),e.walkTokens){var t=_.defaults.walkTokens;r.walkTokens=function(n){e.walkTokens.call(this,n),t&&t.call(this,n)}}i&&(r.extensions=o),_.setOptions(r)}))},_.walkTokens=function(e,t){for(var n,r=function(){var e=n.value;switch(t.call(_,e),e.type){case"table":for(var r,o=i(e.header);!(r=o()).done;){var a=r.value;_.walkTokens(a.tokens,t)}for(var l,s=i(e.rows);!(l=s()).done;)for(var u,c=i(l.value);!(u=c()).done;){var d=u.value;_.walkTokens(d.tokens,t)}break;case"list":_.walkTokens(e.items,t);break;default:_.defaults.extensions&&_.defaults.extensions.childTokens&&_.defaults.extensions.childTokens[e.type]?_.defaults.extensions.childTokens[e.type].forEach((function(n){_.walkTokens(e[n],t)})):e.tokens&&_.walkTokens(e.tokens,t)}},o=i(e);!(n=o()).done;)r()},_.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");A(t=k({},_.defaults,t||{}));try{var n=I.lexInline(e,t);return t.walkTokens&&_.walkTokens(n,t.walkTokens),P.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+d(e.message+"",!0)+"</pre>";throw e}},_.Parser=P,_.parser=P.parse,_.Renderer=z,_.TextRenderer=H,_.Lexer=I,_.lexer=I.lex,_.Tokenizer=T,_.Slugger=R,_.parse=_;var W=_.options,j=_.setOptions,q=_.use,U=_.walkTokens,$=_.parseInline,G=_,V=P.parse,X=I.lex;e.Lexer=I,e.Parser=P,e.Renderer=z,e.Slugger=R,e.TextRenderer=H,e.Tokenizer=T,e.getDefaults=r,e.lexer=X,e.marked=_,e.options=W,e.parse=G,e.parseInline=$,e.parser=V,e.setOptions=j,e.use=q,e.walkTokens=U,Object.defineProperty(e,"__esModule",{value:!0})}))},{}],16:[function(e,t,n){(function(n){(function(){var i;!function(){"use strict";(i=function(e,t,i,r){r=r||{},this.dictionary=null,this.rules={},this.dictionaryTable={},this.compoundRules=[],this.compoundRuleCodes={},this.replacementTable=[],this.flags=r.flags||{},this.memoized={},this.loaded=!1;var o,a,l,s,u,c=this;function d(e,t){var n=c._readFile(e,null,r.asyncLoad);r.asyncLoad?n.then((function(e){t(e)})):t(n)}function h(e){t=e,i&&p()}function f(e){i=e,t&&p()}function p(){for(c.rules=c._parseAFF(t),c.compoundRuleCodes={},a=0,s=c.compoundRules.length;a<s;a++){var e=c.compoundRules[a];for(l=0,u=e.length;l<u;l++)c.compoundRuleCodes[e[l]]=[]}for(a in"ONLYINCOMPOUND"in c.flags&&(c.compoundRuleCodes[c.flags.ONLYINCOMPOUND]=[]),c.dictionaryTable=c._parseDIC(i),c.compoundRuleCodes)0===c.compoundRuleCodes[a].length&&delete c.compoundRuleCodes[a];for(a=0,s=c.compoundRules.length;a<s;a++){var n=c.compoundRules[a],o="";for(l=0,u=n.length;l<u;l++){var d=n[l];d in c.compoundRuleCodes?o+="("+c.compoundRuleCodes[d].join("|")+")":o+=d}c.compoundRules[a]=new RegExp(o,"i")}c.loaded=!0,r.asyncLoad&&r.loadedCallback&&r.loadedCallback(c)}return e&&(c.dictionary=e,t&&i?p():"undefined"!=typeof window&&"chrome"in window&&"extension"in window.chrome&&"getURL"in window.chrome.extension?(o=r.dictionaryPath?r.dictionaryPath:"typo/dictionaries",t||d(chrome.extension.getURL(o+"/"+e+"/"+e+".aff"),h),i||d(chrome.extension.getURL(o+"/"+e+"/"+e+".dic"),f)):(o=r.dictionaryPath?r.dictionaryPath:void 0!==n?n+"/dictionaries":"./dictionaries",t||d(o+"/"+e+"/"+e+".aff",h),i||d(o+"/"+e+"/"+e+".dic",f))),this}).prototype={load:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);return this},_readFile:function(t,n,i){if(n=n||"utf8","undefined"!=typeof XMLHttpRequest){var r,o=new XMLHttpRequest;return o.open("GET",t,i),i&&(r=new Promise((function(e,t){o.onload=function(){200===o.status?e(o.responseText):t(o.statusText)},o.onerror=function(){t(o.statusText)}}))),o.overrideMimeType&&o.overrideMimeType("text/plain; charset="+n),o.send(null),i?r:o.responseText}if(void 0!==e){var a=e("fs");try{if(a.existsSync(t))return a.readFileSync(t,n);console.log("Path "+t+" does not exist.")}catch(e){return console.log(e),""}}},_parseAFF:function(e){var t,n,i,r,o,a,l,s={},u=e.split(/\r?\n/);for(r=0,a=u.length;r<a;r++)if(t=(t=this._removeAffixComments(u[r])).trim()){var c=t.split(/\s+/),d=c[0];if("PFX"==d||"SFX"==d){var h=c[1],f=c[2],p=[];for(o=r+1,l=r+1+(n=parseInt(c[3],10));o<l;o++){var m=(i=u[o].split(/\s+/))[2],g=i[3].split("/"),v=g[0];"0"===v&&(v="");var x=this.parseRuleCodes(g[1]),y=i[4],b={};b.add=v,x.length>0&&(b.continuationClasses=x),"."!==y&&(b.match="SFX"===d?new RegExp(y+"$"):new RegExp("^"+y)),"0"!=m&&(b.remove="SFX"===d?new RegExp(m+"$"):m),p.push(b)}s[h]={type:d,combineable:"Y"==f,entries:p},r+=n}else if("COMPOUNDRULE"===d){for(o=r+1,l=r+1+(n=parseInt(c[1],10));o<l;o++)i=(t=u[o]).split(/\s+/),this.compoundRules.push(i[1]);r+=n}else"REP"===d?3===(i=t.split(/\s+/)).length&&this.replacementTable.push([i[1],i[2]]):this.flags[d]=c[1]}return s},_removeAffixComments:function(e){return e.match(/^\s*#/,"")?"":e},_parseDIC:function(e){var t=(e=this._removeDicComments(e)).split(/\r?\n/),n={};function i(e,t){n.hasOwnProperty(e)||(n[e]=null),t.length>0&&(null===n[e]&&(n[e]=[]),n[e].push(t))}for(var r=1,o=t.length;r<o;r++){var a=t[r];if(a){var l=a.split("/",2),s=l[0];if(l.length>1){var u=this.parseRuleCodes(l[1]);"NEEDAFFIX"in this.flags&&-1!=u.indexOf(this.flags.NEEDAFFIX)||i(s,u);for(var c=0,d=u.length;c<d;c++){var h=u[c],f=this.rules[h];if(f)for(var p=this._applyRule(s,f),m=0,g=p.length;m<g;m++){var v=p[m];if(i(v,[]),f.combineable)for(var x=c+1;x<d;x++){var y=u[x],b=this.rules[y];if(b&&b.combineable&&f.type!=b.type)for(var D=this._applyRule(v,b),C=0,w=D.length;C<w;C++){i(D[C],[])}}}h in this.compoundRuleCodes&&this.compoundRuleCodes[h].push(s)}}else i(s.trim(),[])}}return n},_removeDicComments:function(e){return e=e.replace(/^\t.*$/gm,"")},parseRuleCodes:function(e){if(!e)return[];if(!("FLAG"in this.flags))return e.split("");if("long"===this.flags.FLAG){for(var t=[],n=0,i=e.length;n<i;n+=2)t.push(e.substr(n,2));return t}return"num"===this.flags.FLAG?e.split(","):void 0},_applyRule:function(e,t){for(var n=t.entries,i=[],r=0,o=n.length;r<o;r++){var a=n[r];if(!a.match||e.match(a.match)){var l=e;if(a.remove&&(l=l.replace(a.remove,"")),"SFX"===t.type?l+=a.add:l=a.add+l,i.push(l),"continuationClasses"in a)for(var s=0,u=a.continuationClasses.length;s<u;s++){var c=this.rules[a.continuationClasses[s]];c&&(i=i.concat(this._applyRule(l,c)))}}}return i},check:function(e){if(!this.loaded)throw"Dictionary not loaded.";var t=e.replace(/^\s\s*/,"").replace(/\s\s*$/,"");if(this.checkExact(t))return!0;if(t.toUpperCase()===t){var n=t[0]+t.substring(1).toLowerCase();if(this.hasFlag(n,"KEEPCASE"))return!1;if(this.checkExact(n))return!0;if(this.checkExact(t.toLowerCase()))return!0}var i=t[0].toLowerCase()+t.substring(1);if(i!==t){if(this.hasFlag(i,"KEEPCASE"))return!1;if(this.checkExact(i))return!0}return!1},checkExact:function(e){if(!this.loaded)throw"Dictionary not loaded.";var t,n,i=this.dictionaryTable[e];if(void 0===i){if("COMPOUNDMIN"in this.flags&&e.length>=this.flags.COMPOUNDMIN)for(t=0,n=this.compoundRules.length;t<n;t++)if(e.match(this.compoundRules[t]))return!0}else{if(null===i)return!0;if("object"==typeof i)for(t=0,n=i.length;t<n;t++)if(!this.hasFlag(e,"ONLYINCOMPOUND",i[t]))return!0}return!1},hasFlag:function(e,t,n){if(!this.loaded)throw"Dictionary not loaded.";return!(!(t in this.flags)||(void 0===n&&(n=Array.prototype.concat.apply([],this.dictionaryTable[e])),!n||-1===n.indexOf(this.flags[t])))},alphabet:"",suggest:function(e,t){if(!this.loaded)throw"Dictionary not loaded.";if(t=t||5,this.memoized.hasOwnProperty(e)){var n=this.memoized[e].limit;if(t<=n||this.memoized[e].suggestions.length<n)return this.memoized[e].suggestions.slice(0,t)}if(this.check(e))return[];for(var i=0,r=this.replacementTable.length;i<r;i++){var o=this.replacementTable[i];if(-1!==e.indexOf(o[0])){var a=e.replace(o[0],o[1]);if(this.check(a))return[a]}}var l=this;function s(e,t){var n,i,r,o,a={},s=l.alphabet.length;if("string"==typeof e){var u=e;(e={})[u]=!0}for(var u in e)for(n=0,r=u.length+1;n<r;n++){var c=[u.substring(0,n),u.substring(n)];if(c[1]&&(o=c[0]+c[1].substring(1),t&&!l.check(o)||(o in a?a[o]+=1:a[o]=1)),c[1].length>1&&c[1][1]!==c[1][0]&&(o=c[0]+c[1][1]+c[1][0]+c[1].substring(2),t&&!l.check(o)||(o in a?a[o]+=1:a[o]=1)),c[1]){var d=c[1].substring(0,1).toUpperCase()===c[1].substring(0,1)?"uppercase":"lowercase";for(i=0;i<s;i++){var h=l.alphabet[i];"uppercase"===d&&(h=h.toUpperCase()),h!=c[1].substring(0,1)&&(o=c[0]+h+c[1].substring(1),t&&!l.check(o)||(o in a?a[o]+=1:a[o]=1))}}if(c[1])for(i=0;i<s;i++){d=c[0].substring(-1).toUpperCase()===c[0].substring(-1)&&c[1].substring(0,1).toUpperCase()===c[1].substring(0,1)?"uppercase":"lowercase",h=l.alphabet[i];"uppercase"===d&&(h=h.toUpperCase()),o=c[0]+h+c[1],t&&!l.check(o)||(o in a?a[o]+=1:a[o]=1)}}return a}return l.alphabet="abcdefghijklmnopqrstuvwxyz",this.memoized[e]={suggestions:function(e){var n,i=s(e),r=s(i,!0);for(var o in i)l.check(o)&&(o in r?r[o]+=i[o]:r[o]=i[o]);var a=[];for(n in r)r.hasOwnProperty(n)&&a.push([n,r[n]]);a.sort((function(e,t){var n=e[1],i=t[1];return n<i?-1:n>i?1:t[0].localeCompare(e[0])})).reverse();var u=[],c="lowercase";e.toUpperCase()===e?c="uppercase":e.substr(0,1).toUpperCase()+e.substr(1).toLowerCase()===e&&(c="capitalized");var d=t;for(n=0;n<Math.min(d,a.length);n++)"uppercase"===c?a[n][0]=a[n][0].toUpperCase():"capitalized"===c&&(a[n][0]=a[n][0].substr(0,1).toUpperCase()+a[n][0].substr(1)),l.hasFlag(a[n][0],"NOSUGGEST")||-1!=u.indexOf(a[n][0])?d++:u.push(a[n][0]);return u}(e),limit:t},this.memoized[e].suggestions}}}(),void 0!==t&&(t.exports=i)}).call(this)}).call(this,"/node_modules/typo-js")},{fs:1}],17:[function(e,t,n){var i=e("codemirror");i.commands.tabAndIndentMarkdownList=function(e){var t=e.listSelections()[0].head;if(!1!==e.getStateAfter(t.line).list)e.execCommand("indentMore");else if(e.options.indentWithTabs)e.execCommand("insertTab");else{var n=Array(e.options.tabSize+1).join(" ");e.replaceSelection(n)}},i.commands.shiftTabAndUnindentMarkdownList=function(e){var t=e.listSelections()[0].head;if(!1!==e.getStateAfter(t.line).list)e.execCommand("indentLess");else if(e.options.indentWithTabs)e.execCommand("insertTab");else{var n=Array(e.options.tabSize+1).join(" ");e.replaceSelection(n)}}},{codemirror:10}],18:[function(e,t,n){"use strict";var i=e("codemirror");e("codemirror/addon/edit/continuelist.js"),e("./codemirror/tablist"),e("codemirror/addon/display/fullscreen.js"),e("codemirror/mode/markdown/markdown.js"),e("codemirror/addon/mode/overlay.js"),e("codemirror/addon/display/placeholder.js"),e("codemirror/addon/display/autorefresh.js"),e("codemirror/addon/selection/mark-selection.js"),e("codemirror/addon/search/searchcursor.js"),e("codemirror/mode/gfm/gfm.js"),e("codemirror/mode/xml/xml.js");var r=e("codemirror-spell-checker"),o=e("marked").marked,a=/Mac/.test(navigator.platform),l=new RegExp(/(<a.*?https?:\/\/.*?[^a]>)+?/g),s={toggleBold:x,toggleItalic:y,drawLink:O,toggleHeadingSmaller:w,toggleHeadingBigger:k,drawImage:I,toggleBlockquote:C,toggleOrderedList:B,toggleUnorderedList:M,toggleCodeBlock:D,togglePreview:U,toggleStrikethrough:b,toggleHeading1:S,toggleHeading2:F,toggleHeading3:A,toggleHeading4:E,toggleHeading5:L,toggleHeading6:T,cleanBlock:N,drawTable:P,drawHorizontalRule:_,undo:W,redo:j,toggleSideBySide:q,toggleFullScreen:v},u={toggleBold:"Cmd-B",toggleItalic:"Cmd-I",drawLink:"Cmd-K",toggleHeadingSmaller:"Cmd-H",toggleHeadingBigger:"Shift-Cmd-H",toggleHeading1:"Ctrl+Alt+1",toggleHeading2:"Ctrl+Alt+2",toggleHeading3:"Ctrl+Alt+3",toggleHeading4:"Ctrl+Alt+4",toggleHeading5:"Ctrl+Alt+5",toggleHeading6:"Ctrl+Alt+6",cleanBlock:"Cmd-E",drawImage:"Cmd-Alt-I",toggleBlockquote:"Cmd-'",toggleOrderedList:"Cmd-Alt-L",toggleUnorderedList:"Cmd-L",toggleCodeBlock:"Cmd-Alt-C",togglePreview:"Cmd-P",toggleSideBySide:"F9",toggleFullScreen:"F11"},c=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0,4)))&&(t=!0),t};function d(e){return e=a?e.replace("Ctrl","Cmd"):e.replace("Cmd","Ctrl")}function h(e,t,n,i){var r=f(e,!1,t,n,"button",i);r.classList.add("easymde-dropdown"),r.onclick=function(){r.focus()};var o=document.createElement("div");o.className="easymde-dropdown-content";for(var a=0;a<e.children.length;a++){var l,s=e.children[a];(l=f("string"==typeof s&&s in te?te[s]:s,!0,t,n,"button",i)).addEventListener("click",(function(e){e.stopPropagation()}),!1),o.appendChild(l)}return r.appendChild(o),r}function f(e,t,n,i,r,o){e=e||{};var l=document.createElement(r);if(e.attributes)for(var u in e.attributes)Object.prototype.hasOwnProperty.call(e.attributes,u)&&l.setAttribute(u,e.attributes[u]);l.className=e.name,l.setAttribute("type",r),n=null==n||n,e.text&&(l.innerText=e.text),e.name&&e.name in i&&(s[e.name]=e.action),e.title&&n&&(l.title=function(e,t,n){var i,r=e;t&&n[i=function(e){for(var t in s)if(s[t]===e)return t;return null}(t)]&&(r+=" ("+d(n[i])+")");return r}(e.title,e.action,i),a&&(l.title=l.title.replace("Ctrl","⌘"),l.title=l.title.replace("Alt","⌥"))),e.title&&l.setAttribute("aria-label",e.title),e.noDisable&&l.classList.add("no-disable"),e.noMobile&&l.classList.add("no-mobile");var c=[];void 0!==e.className&&(c=e.className.split(" "));for(var h=[],f=0;f<c.length;f++){var p=c[f];p.match(/^fa([srlb]|(-[\w-]*)|$)/)?h.push(p):l.classList.add(p)}if(l.tabIndex=-1,h.length>0){for(var m=document.createElement("i"),g=0;g<h.length;g++){var v=h[g];m.classList.add(v)}l.appendChild(m)}return void 0!==e.icon&&(l.innerHTML=e.icon),e.action&&t&&("function"==typeof e.action?l.onclick=function(t){t.preventDefault(),e.action(o)}:"string"==typeof e.action&&(l.onclick=function(t){t.preventDefault(),window.open(e.action,"_blank")})),l}function p(){var e=document.createElement("i");return e.className="separator",e.innerHTML="|",e}function m(e,t){t=t||e.getCursor("start");var n=e.getTokenAt(t);if(!n.type)return{};for(var i,r,o=n.type.split(" "),a={},l=0;l<o.length;l++)"strong"===(i=o[l])?a.bold=!0:"variable-2"===i?(r=e.getLine(t.line),/^\s*\d+\.\s/.test(r)?a["ordered-list"]=!0:a["unordered-list"]=!0):"atom"===i?a.quote=!0:"em"===i?a.italic=!0:"quote"===i?a.quote=!0:"strikethrough"===i?a.strikethrough=!0:"comment"===i?a.code=!0:"link"!==i||a.image?"image"===i?a.image=!0:i.match(/^header(-[1-6])?$/)&&(a[i.replace("header","heading")]=!0):a.link=!0;return a}var g="";function v(e){var t=e.codemirror;t.setOption("fullScreen",!t.getOption("fullScreen")),t.getOption("fullScreen")?(g=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=g;var n=t.getWrapperElement(),i=n.nextSibling;if(i.classList.contains("editor-preview-active-side"))if(!1===e.options.sideBySideFullscreen){var r=n.parentNode;t.getOption("fullScreen")?r.classList.remove("sided--no-fullscreen"):r.classList.add("sided--no-fullscreen")}else q(e);(e.options.onToggleFullScreen&&e.options.onToggleFullScreen(t.getOption("fullScreen")||!1),void 0!==e.options.maxHeight&&(t.getOption("fullScreen")?(t.getScrollerElement().style.removeProperty("height"),i.style.removeProperty("height")):(t.getScrollerElement().style.height=e.options.maxHeight,e.setPreviewMaxHeight())),e.toolbar_div.classList.toggle("fullscreen"),e.toolbarElements&&e.toolbarElements.fullscreen)&&e.toolbarElements.fullscreen.classList.toggle("active")}function x(e){K(e,"bold",e.options.blockStyles.bold)}function y(e){K(e,"italic",e.options.blockStyles.italic)}function b(e){K(e,"strikethrough","~~")}function D(e){var t=e.options.blockStyles.code;function n(e){if("object"!=typeof e)throw"fencing_line() takes a 'line' object (not a line number, or line text).  Got: "+typeof e+": "+e;return e.styles&&e.styles[2]&&-1!==e.styles[2].indexOf("formatting-code-block")}function i(e){return e.state.base.base||e.state.base}function r(e,t,r,o,a){r=r||e.getLineHandle(t),o=o||e.getTokenAt({line:t,ch:1}),a=a||!!r.text&&e.getTokenAt({line:t,ch:r.text.length-1});var l=o.type?o.type.split(" "):[];return a&&i(a).indentedCode?"indented":-1!==l.indexOf("comment")&&(i(o).fencedChars||i(a).fencedChars||n(r)?"fenced":"single")}var o,a,l,s=e.codemirror,u=s.getCursor("start"),c=s.getCursor("end"),d=s.getTokenAt({line:u.line,ch:u.ch||1}),h=s.getLineHandle(u.line),f=r(s,u.line,h,d);if("single"===f){var p=h.text.slice(0,u.ch).replace("`",""),m=h.text.slice(u.ch).replace("`","");s.replaceRange(p+m,{line:u.line,ch:0},{line:u.line,ch:99999999999999}),u.ch--,u!==c&&c.ch--,s.setSelection(u,c),s.focus()}else if("fenced"===f)if(u.line!==c.line||u.ch!==c.ch){for(o=u.line;o>=0&&!n(h=s.getLineHandle(o));o--);var g,v,x,y,b=i(s.getTokenAt({line:o,ch:1})).fencedChars;n(s.getLineHandle(u.line))?(g="",v=u.line):n(s.getLineHandle(u.line-1))?(g="",v=u.line-1):(g=b+"\n",v=u.line),n(s.getLineHandle(c.line))?(x="",y=c.line,0===c.ch&&(y+=1)):0!==c.ch&&n(s.getLineHandle(c.line+1))?(x="",y=c.line+1):(x=b+"\n",y=c.line+1),0===c.ch&&(y-=1),s.operation((function(){s.replaceRange(x,{line:y,ch:0},{line:y+(x?0:1),ch:0}),s.replaceRange(g,{line:v,ch:0},{line:v+(g?0:1),ch:0})})),s.setSelection({line:v+(g?1:0),ch:0},{line:y+(g?1:-1),ch:0}),s.focus()}else{var D=u.line;if(n(s.getLineHandle(u.line))&&("fenced"===r(s,u.line+1)?(o=u.line,D=u.line+1):(a=u.line,D=u.line-1)),void 0===o)for(o=D;o>=0&&!n(h=s.getLineHandle(o));o--);if(void 0===a)for(l=s.lineCount(),a=D;a<l&&!n(h=s.getLineHandle(a));a++);s.operation((function(){s.replaceRange("",{line:o,ch:0},{line:o+1,ch:0}),s.replaceRange("",{line:a-1,ch:0},{line:a,ch:0})})),s.focus()}else if("indented"===f){if(u.line!==c.line||u.ch!==c.ch)o=u.line,a=c.line,0===c.ch&&a--;else{for(o=u.line;o>=0;o--)if(!(h=s.getLineHandle(o)).text.match(/^\s*$/)&&"indented"!==r(s,o,h)){o+=1;break}for(l=s.lineCount(),a=u.line;a<l;a++)if(!(h=s.getLineHandle(a)).text.match(/^\s*$/)&&"indented"!==r(s,a,h)){a-=1;break}}var C=s.getLineHandle(a+1),w=C&&s.getTokenAt({line:a+1,ch:C.text.length-1});w&&i(w).indentedCode&&s.replaceRange("\n",{line:a+1,ch:0});for(var k=o;k<=a;k++)s.indentLine(k,"subtract");s.focus()}else{var S=u.line===c.line&&u.ch===c.ch&&0===u.ch,F=u.line!==c.line;S||F?function(e,t,n,i){var r=t.line+1,o=n.line+1,a=t.line!==n.line,l=i+"\n",s="\n"+i;a&&o++,a&&0===n.ch&&(s=i+"\n",o--),$(e,!1,[l,s]),e.setSelection({line:r,ch:0},{line:o,ch:0})}(s,u,c,t):$(s,!1,["`","`"])}}function C(e){V(e.codemirror,"quote")}function w(e){G(e.codemirror,"smaller")}function k(e){G(e.codemirror,"bigger")}function S(e){G(e.codemirror,void 0,1)}function F(e){G(e.codemirror,void 0,2)}function A(e){G(e.codemirror,void 0,3)}function E(e){G(e.codemirror,void 0,4)}function L(e){G(e.codemirror,void 0,5)}function T(e){G(e.codemirror,void 0,6)}function M(e){var t=e.codemirror,n="*";["-","+","*"].includes(e.options.unorderedListStyle)&&(n=e.options.unorderedListStyle),V(t,"unordered-list",n)}function B(e){V(e.codemirror,"ordered-list")}function N(e){!function(e){if(e.getWrapperElement().lastChild.classList.contains("editor-preview-active"))return;for(var t,n=e.getCursor("start"),i=e.getCursor("end"),r=n.line;r<=i.line;r++)t=(t=e.getLine(r)).replace(/^[ ]*([# ]+|\*|-|[> ]+|[0-9]+(.|\)))[ ]*/,""),e.replaceRange(t,{line:r,ch:0},{line:r,ch:99999999999999})}(e.codemirror)}function O(e){var t=e.options,n="https://";if(t.promptURLs){var i=prompt(t.promptTexts.link,n);if(!i)return!1;n=z(i)}X(e,"link",t.insertTexts.link,n)}function I(e){var t=e.options,n="https://";if(t.promptURLs){var i=prompt(t.promptTexts.image,n);if(!i)return!1;n=z(i)}X(e,"image",t.insertTexts.image,n)}function z(e){return encodeURI(e).replace(/([\\()])/g,"\\$1")}function H(e){e.openBrowseFileWindow()}function R(e,t){var n=e.codemirror,i=m(n),r=e.options,o=t.substr(t.lastIndexOf("/")+1),a=o.substring(o.lastIndexOf(".")+1).replace(/\?.*$/,"").toLowerCase();if(["png","jpg","jpeg","gif","svg","apng","avif","webp"].includes(a))$(n,i.image,r.insertTexts.uploadedImage,t);else{var l=r.insertTexts.link;l[0]="["+o,$(n,i.link,l,t)}e.updateStatusBar("upload-image",e.options.imageTexts.sbOnUploaded.replace("#image_name#",o)),setTimeout((function(){e.updateStatusBar("upload-image",e.options.imageTexts.sbInit)}),1e3)}function P(e){var t=e.codemirror,n=m(t),i=e.options;$(t,n.table,i.insertTexts.table)}function _(e){var t=e.codemirror,n=m(t),i=e.options;$(t,n.image,i.insertTexts.horizontalRule)}function W(e){var t=e.codemirror;t.undo(),t.focus()}function j(e){var t=e.codemirror;t.redo(),t.focus()}function q(e){var t=e.codemirror,n=t.getWrapperElement(),i=n.nextSibling,r=e.toolbarElements&&e.toolbarElements["side-by-side"],o=!1,a=n.parentNode;i.classList.contains("editor-preview-active-side")?(!1===e.options.sideBySideFullscreen&&a.classList.remove("sided--no-fullscreen"),i.classList.remove("editor-preview-active-side"),r&&r.classList.remove("active"),n.classList.remove("CodeMirror-sided")):(setTimeout((function(){t.getOption("fullScreen")||(!1===e.options.sideBySideFullscreen?a.classList.add("sided--no-fullscreen"):v(e)),i.classList.add("editor-preview-active-side")}),1),r&&r.classList.add("active"),n.classList.add("CodeMirror-sided"),o=!0);var l=n.lastChild;if(l.classList.contains("editor-preview-active")){l.classList.remove("editor-preview-active");var s=e.toolbarElements.preview,u=e.toolbar_div;s.classList.remove("active"),u.classList.remove("disabled-for-preview")}if(t.sideBySideRenderingFunction||(t.sideBySideRenderingFunction=function(){var t=e.options.previewRender(e.value(),i);null!=t&&(i.innerHTML=t)}),o){var c=e.options.previewRender(e.value(),i);null!=c&&(i.innerHTML=c),t.on("update",t.sideBySideRenderingFunction)}else t.off("update",t.sideBySideRenderingFunction);t.refresh()}function U(e){var t=e.codemirror,n=t.getWrapperElement(),i=e.toolbar_div,r=!!e.options.toolbar&&e.toolbarElements.preview,o=n.lastChild;if(t.getWrapperElement().nextSibling.classList.contains("editor-preview-active-side")&&q(e),!o||!o.classList.contains("editor-preview-full")){if((o=document.createElement("div")).className="editor-preview-full",e.options.previewClass)if(Array.isArray(e.options.previewClass))for(var a=0;a<e.options.previewClass.length;a++)o.classList.add(e.options.previewClass[a]);else"string"==typeof e.options.previewClass&&o.classList.add(e.options.previewClass);n.appendChild(o)}o.classList.contains("editor-preview-active")?(o.classList.remove("editor-preview-active"),r&&(r.classList.remove("active"),i.classList.remove("disabled-for-preview"))):(setTimeout((function(){o.classList.add("editor-preview-active")}),1),r&&(r.classList.add("active"),i.classList.add("disabled-for-preview"))),o.innerHTML=e.options.previewRender(e.value(),o)}function $(e,t,n,i){if(!e.getWrapperElement().lastChild.classList.contains("editor-preview-active")){var r,o=n[0],a=n[1],l={},s={};Object.assign(l,e.getCursor("start")),Object.assign(s,e.getCursor("end")),i&&(o=o.replace("#url#",i),a=a.replace("#url#",i)),t?(o=(r=e.getLine(l.line)).slice(0,l.ch),a=r.slice(l.ch),e.replaceRange(o+a,{line:l.line,ch:0})):(r=e.getSelection(),e.replaceSelection(o+r+a),l.ch+=o.length,l!==s&&(s.ch+=o.length)),e.setSelection(l,s),e.focus()}}function G(e,t,n){if(!e.getWrapperElement().lastChild.classList.contains("editor-preview-active")){for(var i=e.getCursor("start"),r=e.getCursor("end"),o=i.line;o<=r.line;o++)!function(i){var r=e.getLine(i),o=r.search(/[^#]/);r=void 0!==t?o<=0?"bigger"==t?"###### "+r:"# "+r:6==o&&"smaller"==t?r.substr(7):1==o&&"bigger"==t?r.substr(2):"bigger"==t?r.substr(1):"#"+r:1==n?o<=0?"# "+r:o==n?r.substr(o+1):"# "+r.substr(o+1):2==n?o<=0?"## "+r:o==n?r.substr(o+1):"## "+r.substr(o+1):o<=0?"### "+r:o==n?r.substr(o+1):"### "+r.substr(o+1),e.replaceRange(r,{line:i,ch:0},{line:i,ch:99999999999999})}(o);e.focus()}}function V(e,t,n){if(!e.getWrapperElement().lastChild.classList.contains("editor-preview-active")){for(var i=/^(\s*)(\*|-|\+|\d*\.)(\s+)/,r=/^\s*/,o=m(e),a=e.getCursor("start"),l=e.getCursor("end"),s={quote:/^(\s*)>\s+/,"unordered-list":i,"ordered-list":i},u=function(e,t,o){var a=i.exec(t),l=function(e,t){return{quote:">","unordered-list":n,"ordered-list":"%%i."}[e].replace("%%i",t)}(e,c);return null!==a?(function(e,t){var i=new RegExp({quote:">","unordered-list":"\\"+n,"ordered-list":"\\d+."}[e]);return t&&i.test(t)}(e,a[2])&&(l=""),t=a[1]+l+a[3]+t.replace(r,"").replace(s[e],"$1")):0==o&&(t=l+" "+t),t},c=1,d=a.line;d<=l.line;d++)!function(n){var i=e.getLine(n);o[t]?i=i.replace(s[t],"$1"):("unordered-list"==t&&(i=u("ordered-list",i,!0)),i=u(t,i,!1),c+=1),e.replaceRange(i,{line:n,ch:0},{line:n,ch:99999999999999})}(d);e.focus()}}function X(e,t,n,i){if(e.codemirror&&!e.isPreviewActive()){var r=e.codemirror,o=m(r)[t];if(o){var a=r.getCursor("start"),l=r.getCursor("end"),s=r.getLine(a.line),u=s.slice(0,a.ch),c=s.slice(a.ch);"link"==t?u=u.replace(/(.*(?<!!))\[/,"$1"):"image"==t&&(u=u.replace(/(.*)!\[$/,"$1")),c=c.replace(/]\(.*?\)/,""),r.replaceRange(u+c,{line:a.line,ch:0},{line:a.line,ch:99999999999999}),a.ch-=n[0].length,a!==l&&(l.ch-=n[0].length),r.setSelection(a,l),r.focus()}else $(r,o,n,i)}}function K(e,t,n,i){if(e.codemirror&&!e.isPreviewActive()){i=void 0===i?n:i;var r,o=e.codemirror,a=m(o),l=n,s=i,u=o.getCursor("start"),c=o.getCursor("end");a[t]?(l=(r=o.getLine(u.line)).slice(0,u.ch),s=r.slice(u.ch),"bold"==t?(l=l.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/,""),s=s.replace(/(\*\*|__)/,"")):"italic"==t?(l=l.replace(/(\*|_)(?![\s\S]*(\*|_))/,""),s=s.replace(/(\*|_)/,"")):"strikethrough"==t&&(l=l.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/,""),s=s.replace(/(\*\*|~~)/,"")),o.replaceRange(l+s,{line:u.line,ch:0},{line:u.line,ch:99999999999999}),"bold"==t||"strikethrough"==t?(u.ch-=2,u!==c&&(c.ch-=2)):"italic"==t&&(u.ch-=1,u!==c&&(c.ch-=1))):(r=o.getSelection(),"bold"==t?r=(r=r.split("**").join("")).split("__").join(""):"italic"==t?r=(r=r.split("*").join("")).split("_").join(""):"strikethrough"==t&&(r=r.split("~~").join("")),o.replaceSelection(l+r+s),u.ch+=n.length,c.ch=u.ch+r.length),o.setSelection(u,c),o.focus()}}function Z(e,t){if(Math.abs(e)<1024)return""+e+t[0];var n=0;do{e/=1024,++n}while(Math.abs(e)>=1024&&n<t.length);return""+e.toFixed(1)+t[n]}function Y(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]instanceof Array?e[n]=t[n].concat(e[n]instanceof Array?e[n]:[]):null!==t[n]&&"object"==typeof t[n]&&t[n].constructor===Object?e[n]=Y(e[n]||{},t[n]):e[n]=t[n]);return e}function Q(e){for(var t=1;t<arguments.length;t++)e=Y(e,arguments[t]);return e}function J(e){var t=e.match(/[a-zA-Z0-9_\u00A0-\u02AF\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g),n=0;if(null===t)return n;for(var i=0;i<t.length;i++)t[i].charCodeAt(0)>=19968?n+=t[i].length:n+=1;return n}var ee={bold:"fa fa-bold",italic:"fa fa-italic",strikethrough:"fa fa-strikethrough",heading:"fa fa-header fa-heading","heading-smaller":"fa fa-header fa-heading header-smaller","heading-bigger":"fa fa-header fa-heading header-bigger","heading-1":"fa fa-header fa-heading header-1","heading-2":"fa fa-header fa-heading header-2","heading-3":"fa fa-header fa-heading header-3",code:"fa fa-code",quote:"fa fa-quote-left","ordered-list":"fa fa-list-ol","unordered-list":"fa fa-list-ul","clean-block":"fa fa-eraser",link:"fa fa-link",image:"fa fa-image","upload-image":"fa fa-image",table:"fa fa-table","horizontal-rule":"fa fa-minus",preview:"fa fa-eye","side-by-side":"fa fa-columns",fullscreen:"fa fa-arrows-alt",guide:"fa fa-question-circle",undo:"fa fa-undo",redo:"fa fa-repeat fa-redo"},te={bold:{name:"bold",action:x,className:ee.bold,title:"Bold",default:!0},italic:{name:"italic",action:y,className:ee.italic,title:"Italic",default:!0},strikethrough:{name:"strikethrough",action:b,className:ee.strikethrough,title:"Strikethrough"},heading:{name:"heading",action:w,className:ee.heading,title:"Heading",default:!0},"heading-smaller":{name:"heading-smaller",action:w,className:ee["heading-smaller"],title:"Smaller Heading"},"heading-bigger":{name:"heading-bigger",action:k,className:ee["heading-bigger"],title:"Bigger Heading"},"heading-1":{name:"heading-1",action:S,className:ee["heading-1"],title:"Big Heading"},"heading-2":{name:"heading-2",action:F,className:ee["heading-2"],title:"Medium Heading"},"heading-3":{name:"heading-3",action:A,className:ee["heading-3"],title:"Small Heading"},"separator-1":{name:"separator-1"},code:{name:"code",action:D,className:ee.code,title:"Code"},quote:{name:"quote",action:C,className:ee.quote,title:"Quote",default:!0},"unordered-list":{name:"unordered-list",action:M,className:ee["unordered-list"],title:"Generic List",default:!0},"ordered-list":{name:"ordered-list",action:B,className:ee["ordered-list"],title:"Numbered List",default:!0},"clean-block":{name:"clean-block",action:N,className:ee["clean-block"],title:"Clean block"},"separator-2":{name:"separator-2"},link:{name:"link",action:O,className:ee.link,title:"Create Link",default:!0},image:{name:"image",action:I,className:ee.image,title:"Insert Image",default:!0},"upload-image":{name:"upload-image",action:H,className:ee["upload-image"],title:"Import an image"},table:{name:"table",action:P,className:ee.table,title:"Insert Table"},"horizontal-rule":{name:"horizontal-rule",action:_,className:ee["horizontal-rule"],title:"Insert Horizontal Line"},"separator-3":{name:"separator-3"},preview:{name:"preview",action:U,className:ee.preview,noDisable:!0,title:"Toggle Preview",default:!0},"side-by-side":{name:"side-by-side",action:q,className:ee["side-by-side"],noDisable:!0,noMobile:!0,title:"Toggle Side by Side",default:!0},fullscreen:{name:"fullscreen",action:v,className:ee.fullscreen,noDisable:!0,noMobile:!0,title:"Toggle Fullscreen",default:!0},"separator-4":{name:"separator-4"},guide:{name:"guide",action:"https://www.markdownguide.org/basic-syntax/",className:ee.guide,noDisable:!0,title:"Markdown Guide",default:!0},"separator-5":{name:"separator-5"},undo:{name:"undo",action:W,className:ee.undo,noDisable:!0,title:"Undo"},redo:{name:"redo",action:j,className:ee.redo,noDisable:!0,title:"Redo"}},ne={link:["[","](#url#)"],image:["![","](#url#)"],uploadedImage:["![](#url#)",""],table:["","\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n"],horizontalRule:["","\n\n-----\n\n"]},ie={link:"URL for the link:",image:"URL of the image:"},re={locale:"en-US",format:{hour:"2-digit",minute:"2-digit"}},oe={bold:"**",code:"```",italic:"*"},ae={sbInit:"Attach files by drag and dropping or pasting from clipboard.",sbOnDragEnter:"Drop image to upload it.",sbOnDrop:"Uploading image #images_names#...",sbProgress:"Uploading #file_name#: #progress#%",sbOnUploaded:"Uploaded #image_name#",sizeUnits:" B, KB, MB"},le={noFileGiven:"You must select a file.",typeNotAllowed:"This image type is not allowed.",fileTooLarge:"Image #image_name# is too big (#image_size#).\nMaximum file size is #image_max_size#.",importError:"Something went wrong when uploading the image #image_name#."};function se(e){(e=e||{}).parent=this;var t=!0;if(!1===e.autoDownloadFontAwesome&&(t=!1),!0!==e.autoDownloadFontAwesome)for(var n=document.styleSheets,i=0;i<n.length;i++)n[i].href&&n[i].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/")>-1&&(t=!1);if(t){var r=document.createElement("link");r.rel="stylesheet",r.href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css",document.getElementsByTagName("head")[0].appendChild(r)}if(e.element)this.element=e.element;else if(null===e.element)return void console.log("EasyMDE: Error. No element was found.");if(void 0===e.toolbar)for(var o in e.toolbar=[],te)Object.prototype.hasOwnProperty.call(te,o)&&(-1!=o.indexOf("separator-")&&e.toolbar.push("|"),(!0===te[o].default||e.showIcons&&e.showIcons.constructor===Array&&-1!=e.showIcons.indexOf(o))&&e.toolbar.push(o));if(Object.prototype.hasOwnProperty.call(e,"previewClass")||(e.previewClass="editor-preview"),Object.prototype.hasOwnProperty.call(e,"status")||(e.status=["autosave","lines","words","cursor"],e.uploadImage&&e.status.unshift("upload-image")),e.previewRender||(e.previewRender=function(e){return this.parent.markdown(e)}),e.parsingConfig=Q({highlightFormatting:!0},e.parsingConfig||{}),e.insertTexts=Q({},ne,e.insertTexts||{}),e.promptTexts=Q({},ie,e.promptTexts||{}),e.blockStyles=Q({},oe,e.blockStyles||{}),null!=e.autosave&&(e.autosave.timeFormat=Q({},re,e.autosave.timeFormat||{})),e.iconClassMap=Q({},ee,e.iconClassMap||{}),e.shortcuts=Q({},u,e.shortcuts||{}),e.maxHeight=e.maxHeight||void 0,e.direction=e.direction||"ltr",void 0!==e.maxHeight?e.minHeight=e.maxHeight:e.minHeight=e.minHeight||"300px",e.errorCallback=e.errorCallback||function(e){alert(e)},e.uploadImage=e.uploadImage||!1,e.imageMaxSize=e.imageMaxSize||2097152,e.imageAccept=e.imageAccept||"image/png, image/jpeg, image/gif, image/avif",e.imageTexts=Q({},ae,e.imageTexts||{}),e.errorMessages=Q({},le,e.errorMessages||{}),e.imagePathAbsolute=e.imagePathAbsolute||!1,e.imageCSRFName=e.imageCSRFName||"csrfmiddlewaretoken",e.imageCSRFHeader=e.imageCSRFHeader||!1,null!=e.autosave&&null!=e.autosave.unique_id&&""!=e.autosave.unique_id&&(e.autosave.uniqueId=e.autosave.unique_id),e.overlayMode&&void 0===e.overlayMode.combine&&(e.overlayMode.combine=!0),this.options=e,this.render(),!e.initialValue||this.options.autosave&&!0===this.options.autosave.foundSavedValue||this.value(e.initialValue),e.uploadImage){var a=this;this.codemirror.on("dragenter",(function(e,t){a.updateStatusBar("upload-image",a.options.imageTexts.sbOnDragEnter),t.stopPropagation(),t.preventDefault()})),this.codemirror.on("dragend",(function(e,t){a.updateStatusBar("upload-image",a.options.imageTexts.sbInit),t.stopPropagation(),t.preventDefault()})),this.codemirror.on("dragleave",(function(e,t){a.updateStatusBar("upload-image",a.options.imageTexts.sbInit),t.stopPropagation(),t.preventDefault()})),this.codemirror.on("dragover",(function(e,t){a.updateStatusBar("upload-image",a.options.imageTexts.sbOnDragEnter),t.stopPropagation(),t.preventDefault()})),this.codemirror.on("drop",(function(t,n){n.stopPropagation(),n.preventDefault(),e.imageUploadFunction?a.uploadImagesUsingCustomFunction(e.imageUploadFunction,n.dataTransfer.files):a.uploadImages(n.dataTransfer.files)})),this.codemirror.on("paste",(function(t,n){e.imageUploadFunction?a.uploadImagesUsingCustomFunction(e.imageUploadFunction,n.clipboardData.files):a.uploadImages(n.clipboardData.files)}))}}function ue(){if("object"!=typeof localStorage)return!1;try{localStorage.setItem("smde_localStorage",1),localStorage.removeItem("smde_localStorage")}catch(e){return!1}return!0}se.prototype.uploadImages=function(e,t,n){if(0!==e.length){for(var i=[],r=0;r<e.length;r++)i.push(e[r].name),this.uploadImage(e[r],t,n);this.updateStatusBar("upload-image",this.options.imageTexts.sbOnDrop.replace("#images_names#",i.join(", ")))}},se.prototype.uploadImagesUsingCustomFunction=function(e,t){if(0!==t.length){for(var n=[],i=0;i<t.length;i++)n.push(t[i].name),this.uploadImageUsingCustomFunction(e,t[i]);this.updateStatusBar("upload-image",this.options.imageTexts.sbOnDrop.replace("#images_names#",n.join(", ")))}},se.prototype.updateStatusBar=function(e,t){if(this.gui.statusbar){var n=this.gui.statusbar.getElementsByClassName(e);1===n.length?this.gui.statusbar.getElementsByClassName(e)[0].textContent=t:0===n.length?console.log("EasyMDE: status bar item "+e+" was not found."):console.log("EasyMDE: Several status bar items named "+e+" was found.")}},se.prototype.markdown=function(e){if(o){var t;if(t=this.options&&this.options.renderingConfig&&this.options.renderingConfig.markedOptions?this.options.renderingConfig.markedOptions:{},this.options&&this.options.renderingConfig&&!1===this.options.renderingConfig.singleLineBreaks?t.breaks=!1:t.breaks=!0,this.options&&this.options.renderingConfig&&!0===this.options.renderingConfig.codeSyntaxHighlighting){var n=this.options.renderingConfig.hljs||window.hljs;n&&(t.highlight=function(e,t){return t&&n.getLanguage(t)?n.highlight(t,e).value:n.highlightAuto(e).value})}o.setOptions(t);var i=o.parse(e);return this.options.renderingConfig&&"function"==typeof this.options.renderingConfig.sanitizerFunction&&(i=this.options.renderingConfig.sanitizerFunction.call(this,i)),i=function(e){for(var t=(new DOMParser).parseFromString(e,"text/html"),n=t.getElementsByTagName("li"),i=0;i<n.length;i++)for(var r=n[i],o=0;o<r.children.length;o++){var a=r.children[o];a instanceof HTMLInputElement&&"checkbox"===a.type&&(r.style.marginLeft="-1.5em",r.style.listStyleType="none")}return t.documentElement.innerHTML}(i=function(e){for(var t;null!==(t=l.exec(e));){var n=t[0];if(-1===n.indexOf("target=")){var i=n.replace(/>$/,' target="_blank">');e=e.replace(n,i)}}return e}(i))}},se.prototype.render=function(e){if(e||(e=this.element||document.getElementsByTagName("textarea")[0]),!this._rendered||this._rendered!==e){this.element=e;var t,n,o=this.options,a=this,l={};for(var u in o.shortcuts)null!==o.shortcuts[u]&&null!==s[u]&&function(e){l[d(o.shortcuts[e])]=function(){var t=s[e];"function"==typeof t?t(a):"string"==typeof t&&window.open(t,"_blank")}}(u);if(l.Enter="newlineAndIndentContinueMarkdownList",l.Tab="tabAndIndentMarkdownList",l["Shift-Tab"]="shiftTabAndUnindentMarkdownList",l.Esc=function(e){e.getOption("fullScreen")&&v(a)},this.documentOnKeyDown=function(e){27==(e=e||window.event).keyCode&&a.codemirror.getOption("fullScreen")&&v(a)},document.addEventListener("keydown",this.documentOnKeyDown,!1),o.overlayMode?(i.defineMode("overlay-mode",(function(e){return i.overlayMode(i.getMode(e,!1!==o.spellChecker?"spell-checker":"gfm"),o.overlayMode.mode,o.overlayMode.combine)})),t="overlay-mode",(n=o.parsingConfig).gitHubSpice=!1):((t=o.parsingConfig).name="gfm",t.gitHubSpice=!1),!1!==o.spellChecker&&(t="spell-checker",(n=o.parsingConfig).name="gfm",n.gitHubSpice=!1,"function"==typeof o.spellChecker?o.spellChecker({codeMirrorInstance:i}):r({codeMirrorInstance:i})),this.codemirror=i.fromTextArea(e,{mode:t,backdrop:n,theme:null!=o.theme?o.theme:"easymde",tabSize:null!=o.tabSize?o.tabSize:2,indentUnit:null!=o.tabSize?o.tabSize:2,indentWithTabs:!1!==o.indentWithTabs,lineNumbers:!0===o.lineNumbers,autofocus:!0===o.autofocus,extraKeys:l,direction:o.direction,lineWrapping:!1!==o.lineWrapping,allowDropFileTypes:["text/plain"],placeholder:o.placeholder||e.getAttribute("placeholder")||"",styleSelectedText:null!=o.styleSelectedText?o.styleSelectedText:!c(),scrollbarStyle:null!=o.scrollbarStyle?o.scrollbarStyle:"native",configureMouse:function(e,t,n){return{addNew:!1}},inputStyle:null!=o.inputStyle?o.inputStyle:c()?"contenteditable":"textarea",spellcheck:null==o.nativeSpellcheck||o.nativeSpellcheck,autoRefresh:null!=o.autoRefresh&&o.autoRefresh}),this.codemirror.getScrollerElement().style.minHeight=o.minHeight,void 0!==o.maxHeight&&(this.codemirror.getScrollerElement().style.height=o.maxHeight),!0===o.forceSync){var h=this.codemirror;h.on("change",(function(){h.save()}))}this.gui={};var f=document.createElement("div");f.classList.add("EasyMDEContainer"),f.setAttribute("role","application");var p=this.codemirror.getWrapperElement();p.parentNode.insertBefore(f,p),f.appendChild(p),!1!==o.toolbar&&(this.gui.toolbar=this.createToolbar()),!1!==o.status&&(this.gui.statusbar=this.createStatusbar()),null!=o.autosave&&!0===o.autosave.enabled&&(this.autosave(),this.codemirror.on("change",(function(){clearTimeout(a._autosave_timeout),a._autosave_timeout=setTimeout((function(){a.autosave()}),a.options.autosave.submit_delay||a.options.autosave.delay||1e3)})));var m=this;this.codemirror.on("update",(function(){o.previewImagesInEditor&&f.querySelectorAll(".cm-image-marker").forEach((function(e){var t=e.parentElement;if(t.innerText.match(/^!\[.*?\]\(.*\)/g)&&!t.hasAttribute("data-img-src")){var n=t.innerText.match("\\((.*)\\)");if(window.EMDEimagesCache||(window.EMDEimagesCache={}),n&&n.length>=2){var i=n[1];if(o.imagesPreviewHandler){var r=o.imagesPreviewHandler(n[1]);"string"==typeof r&&(i=r)}if(window.EMDEimagesCache[i])x(t,window.EMDEimagesCache[i]);else{var a=document.createElement("img");a.onload=function(){window.EMDEimagesCache[i]={naturalWidth:a.naturalWidth,naturalHeight:a.naturalHeight,url:i},x(t,window.EMDEimagesCache[i])},a.src=i}}}}))})),this.gui.sideBySide=this.createSideBySide(),this._rendered=this.element,(!0===o.autofocus||e.autofocus)&&this.codemirror.focus();var g=this.codemirror;setTimeout(function(){g.refresh()}.bind(g),0)}function x(e,t){var n,i;e.setAttribute("data-img-src",t.url),e.setAttribute("style","--bg-image:url("+t.url+");--width:"+t.naturalWidth+"px;--height:"+(n=t.naturalWidth,i=t.naturalHeight,n<window.getComputedStyle(document.querySelector(".CodeMirror-sizer")).width.replace("px","")?i+"px":i/n*100+"%")),m.codemirror.setSize()}},se.prototype.cleanup=function(){document.removeEventListener("keydown",this.documentOnKeyDown)},se.prototype.autosave=function(){if(ue()){var e=this;if(null==this.options.autosave.uniqueId||""==this.options.autosave.uniqueId)return void console.log("EasyMDE: You must set a uniqueId to use the autosave feature");!0!==this.options.autosave.binded&&(null!=e.element.form&&null!=e.element.form&&e.element.form.addEventListener("submit",(function(){clearTimeout(e.autosaveTimeoutId),e.autosaveTimeoutId=void 0,localStorage.removeItem("smde_"+e.options.autosave.uniqueId)})),this.options.autosave.binded=!0),!0!==this.options.autosave.loaded&&("string"==typeof localStorage.getItem("smde_"+this.options.autosave.uniqueId)&&""!=localStorage.getItem("smde_"+this.options.autosave.uniqueId)&&(this.codemirror.setValue(localStorage.getItem("smde_"+this.options.autosave.uniqueId)),this.options.autosave.foundSavedValue=!0),this.options.autosave.loaded=!0);var t=e.value();""!==t?localStorage.setItem("smde_"+this.options.autosave.uniqueId,t):localStorage.removeItem("smde_"+this.options.autosave.uniqueId);var n=document.getElementById("autosaved");if(null!=n&&null!=n&&""!=n){var i=new Date,r=new Intl.DateTimeFormat([this.options.autosave.timeFormat.locale,"en-US"],this.options.autosave.timeFormat.format).format(i),o=null==this.options.autosave.text?"Autosaved: ":this.options.autosave.text;n.innerHTML=o+r}}else console.log("EasyMDE: localStorage not available, cannot autosave")},se.prototype.clearAutosavedValue=function(){if(ue()){if(null==this.options.autosave||null==this.options.autosave.uniqueId||""==this.options.autosave.uniqueId)return void console.log("EasyMDE: You must set a uniqueId to clear the autosave value");localStorage.removeItem("smde_"+this.options.autosave.uniqueId)}else console.log("EasyMDE: localStorage not available, cannot autosave")},se.prototype.openBrowseFileWindow=function(e,t){var n=this,i=this.gui.toolbar.getElementsByClassName("imageInput")[0];i.click(),i.addEventListener("change",(function r(o){n.options.imageUploadFunction?n.uploadImagesUsingCustomFunction(n.options.imageUploadFunction,o.target.files):n.uploadImages(o.target.files,e,t),i.removeEventListener("change",r)}))},se.prototype.uploadImage=function(e,t,n){var i=this;function r(e){i.updateStatusBar("upload-image",e),setTimeout((function(){i.updateStatusBar("upload-image",i.options.imageTexts.sbInit)}),1e4),n&&"function"==typeof n&&n(e),i.options.errorCallback(e)}function o(t){var n=i.options.imageTexts.sizeUnits.split(",");return t.replace("#image_name#",e.name).replace("#image_size#",Z(e.size,n)).replace("#image_max_size#",Z(i.options.imageMaxSize,n))}if(t=t||function(e){R(i,e)},e.size>this.options.imageMaxSize)r(o(this.options.errorMessages.fileTooLarge));else{var a=new FormData;a.append("image",e),i.options.imageCSRFToken&&!i.options.imageCSRFHeader&&a.append(i.options.imageCSRFName,i.options.imageCSRFToken);var l=new XMLHttpRequest;l.upload.onprogress=function(t){if(t.lengthComputable){var n=""+Math.round(100*t.loaded/t.total);i.updateStatusBar("upload-image",i.options.imageTexts.sbProgress.replace("#file_name#",e.name).replace("#progress#",n))}},l.open("POST",this.options.imageUploadEndpoint),i.options.imageCSRFToken&&i.options.imageCSRFHeader&&l.setRequestHeader(i.options.imageCSRFName,i.options.imageCSRFToken),l.onload=function(){try{var e=JSON.parse(this.responseText)}catch(e){return console.error("EasyMDE: The server did not return a valid json."),void r(o(i.options.errorMessages.importError))}200===this.status&&e&&!e.error&&e.data&&e.data.filePath?t((i.options.imagePathAbsolute?"":window.location.origin+"/")+e.data.filePath):e.error&&e.error in i.options.errorMessages?r(o(i.options.errorMessages[e.error])):e.error?r(o(e.error)):(console.error("EasyMDE: Received an unexpected response after uploading the image."+this.status+" ("+this.statusText+")"),r(o(i.options.errorMessages.importError)))},l.onerror=function(e){console.error("EasyMDE: An unexpected error occurred when trying to upload the image."+e.target.status+" ("+e.target.statusText+")"),r(i.options.errorMessages.importError)},l.send(a)}},se.prototype.uploadImageUsingCustomFunction=function(e,t){var n=this;e.apply(this,[t,function(e){R(n,e)},function(e){var i=function(e){var i=n.options.imageTexts.sizeUnits.split(",");return e.replace("#image_name#",t.name).replace("#image_size#",Z(t.size,i)).replace("#image_max_size#",Z(n.options.imageMaxSize,i))}(e);n.updateStatusBar("upload-image",i),setTimeout((function(){n.updateStatusBar("upload-image",n.options.imageTexts.sbInit)}),1e4),n.options.errorCallback(i)}])},se.prototype.setPreviewMaxHeight=function(){var e=this.codemirror.getWrapperElement(),t=e.nextSibling,n=parseInt(window.getComputedStyle(e).paddingTop),i=parseInt(window.getComputedStyle(e).borderTopWidth),r=(parseInt(this.options.maxHeight)+2*n+2*i).toString()+"px";t.style.height=r},se.prototype.createSideBySide=function(){var e=this.codemirror,t=e.getWrapperElement(),n=t.nextSibling;if(!n||!n.classList.contains("editor-preview-side")){if((n=document.createElement("div")).className="editor-preview-side",this.options.previewClass)if(Array.isArray(this.options.previewClass))for(var i=0;i<this.options.previewClass.length;i++)n.classList.add(this.options.previewClass[i]);else"string"==typeof this.options.previewClass&&n.classList.add(this.options.previewClass);t.parentNode.insertBefore(n,t.nextSibling)}if(void 0!==this.options.maxHeight&&this.setPreviewMaxHeight(),!1===this.options.syncSideBySidePreviewScroll)return n;var r=!1,o=!1;return e.on("scroll",(function(e){if(r)r=!1;else{o=!0;var t=e.getScrollInfo().height-e.getScrollInfo().clientHeight,i=parseFloat(e.getScrollInfo().top)/t,a=(n.scrollHeight-n.clientHeight)*i;n.scrollTop=a}})),n.onscroll=function(){if(o)o=!1;else{r=!0;var t=n.scrollHeight-n.clientHeight,i=parseFloat(n.scrollTop)/t,a=(e.getScrollInfo().height-e.getScrollInfo().clientHeight)*i;e.scrollTo(0,a)}},n},se.prototype.createToolbar=function(e){if((e=e||this.options.toolbar)&&0!==e.length){var t;for(t=0;t<e.length;t++)null!=te[e[t]]&&(e[t]=te[e[t]]);var n=document.createElement("div");n.className="editor-toolbar",n.setAttribute("role","toolbar");var i=this,r={};for(i.toolbar=e,t=0;t<e.length;t++)if(("guide"!=e[t].name||!1!==i.options.toolbarGuideIcon)&&!(i.options.hideIcons&&-1!=i.options.hideIcons.indexOf(e[t].name)||("fullscreen"==e[t].name||"side-by-side"==e[t].name)&&c())){if("|"===e[t]){for(var o=!1,a=t+1;a<e.length;a++)"|"===e[a]||i.options.hideIcons&&-1!=i.options.hideIcons.indexOf(e[a].name)||(o=!0);if(!o)continue}!function(e){var t;if(t="|"===e?p():e.children?h(e,i.options.toolbarTips,i.options.shortcuts,i):f(e,!0,i.options.toolbarTips,i.options.shortcuts,"button",i),r[e.name||e]=t,n.appendChild(t),"upload-image"===e.name){var o=document.createElement("input");o.className="imageInput",o.type="file",o.multiple=!0,o.name="image",o.accept=i.options.imageAccept,o.style.display="none",o.style.opacity=0,n.appendChild(o)}}(e[t])}i.toolbar_div=n,i.toolbarElements=r;var l=this.codemirror;l.on("cursorActivity",(function(){var e=m(l);for(var t in r)!function(t){var n=r[t];e[t]?n.classList.add("active"):"fullscreen"!=t&&"side-by-side"!=t&&n.classList.remove("active")}(t)}));var s=l.getWrapperElement();return s.parentNode.insertBefore(n,s),n}},se.prototype.createStatusbar=function(e){e=e||this.options.status;var t=this.options,n=this.codemirror;if(e&&0!==e.length){var i,r,o,a,l=[];for(i=0;i<e.length;i++)if(r=void 0,o=void 0,a=void 0,"object"==typeof e[i])l.push({className:e[i].className,defaultValue:e[i].defaultValue,onUpdate:e[i].onUpdate,onActivity:e[i].onActivity});else{var s=e[i];"words"===s?(a=function(e){e.innerHTML=J(n.getValue())},r=function(e){e.innerHTML=J(n.getValue())}):"lines"===s?(a=function(e){e.innerHTML=n.lineCount()},r=function(e){e.innerHTML=n.lineCount()}):"cursor"===s?(a=function(e){e.innerHTML="1:1"},o=function(e){var t=n.getCursor(),i=t.line+1,r=t.ch+1;e.innerHTML=i+":"+r}):"autosave"===s?a=function(e){null!=t.autosave&&!0===t.autosave.enabled&&e.setAttribute("id","autosaved")}:"upload-image"===s&&(a=function(e){e.innerHTML=t.imageTexts.sbInit}),l.push({className:s,defaultValue:a,onUpdate:r,onActivity:o})}var u=document.createElement("div");for(u.className="editor-statusbar",i=0;i<l.length;i++){var c=l[i],d=document.createElement("span");d.className=c.className,"function"==typeof c.defaultValue&&c.defaultValue(d),"function"==typeof c.onUpdate&&this.codemirror.on("update",function(e,t){return function(){t.onUpdate(e)}}(d,c)),"function"==typeof c.onActivity&&this.codemirror.on("cursorActivity",function(e,t){return function(){t.onActivity(e)}}(d,c)),u.appendChild(d)}var h=this.codemirror.getWrapperElement();return h.parentNode.insertBefore(u,h.nextSibling),u}},se.prototype.value=function(e){var t=this.codemirror;if(void 0===e)return t.getValue();if(t.getDoc().setValue(e),this.isPreviewActive()){var n=t.getWrapperElement().lastChild;n.innerHTML=this.options.previewRender(e,n)}return this},se.toggleBold=x,se.toggleItalic=y,se.toggleStrikethrough=b,se.toggleBlockquote=C,se.toggleHeadingSmaller=w,se.toggleHeadingBigger=k,se.toggleHeading1=S,se.toggleHeading2=F,se.toggleHeading3=A,se.toggleHeading4=E,se.toggleHeading5=L,se.toggleHeading6=T,se.toggleCodeBlock=D,se.toggleUnorderedList=M,se.toggleOrderedList=B,se.cleanBlock=N,se.drawLink=O,se.drawImage=I,se.drawUploadedImage=H,se.drawTable=P,se.drawHorizontalRule=_,se.undo=W,se.redo=j,se.togglePreview=U,se.toggleSideBySide=q,se.toggleFullScreen=v,se.prototype.toggleBold=function(){x(this)},se.prototype.toggleItalic=function(){y(this)},se.prototype.toggleStrikethrough=function(){b(this)},se.prototype.toggleBlockquote=function(){C(this)},se.prototype.toggleHeadingSmaller=function(){w(this)},se.prototype.toggleHeadingBigger=function(){k(this)},se.prototype.toggleHeading1=function(){S(this)},se.prototype.toggleHeading2=function(){F(this)},se.prototype.toggleHeading3=function(){A(this)},se.prototype.toggleHeading4=function(){E(this)},se.prototype.toggleHeading5=function(){L(this)},se.prototype.toggleHeading6=function(){T(this)},se.prototype.toggleCodeBlock=function(){D(this)},se.prototype.toggleUnorderedList=function(){M(this)},se.prototype.toggleOrderedList=function(){B(this)},se.prototype.cleanBlock=function(){N(this)},se.prototype.drawLink=function(){O(this)},se.prototype.drawImage=function(){I(this)},se.prototype.drawUploadedImage=function(){H(this)},se.prototype.drawTable=function(){P(this)},se.prototype.drawHorizontalRule=function(){_(this)},se.prototype.undo=function(){W(this)},se.prototype.redo=function(){j(this)},se.prototype.togglePreview=function(){U(this)},se.prototype.toggleSideBySide=function(){q(this)},se.prototype.toggleFullScreen=function(){v(this)},se.prototype.isPreviewActive=function(){return this.codemirror.getWrapperElement().lastChild.classList.contains("editor-preview-active")},se.prototype.isSideBySideActive=function(){return this.codemirror.getWrapperElement().nextSibling.classList.contains("editor-preview-active-side")},se.prototype.isFullscreenActive=function(){return this.codemirror.getOption("fullScreen")},se.prototype.getState=function(){return m(this.codemirror)},se.prototype.toTextArea=function(){var e=this.codemirror,t=e.getWrapperElement(),n=t.parentNode;n&&(this.gui.toolbar&&n.removeChild(this.gui.toolbar),this.gui.statusbar&&n.removeChild(this.gui.statusbar),this.gui.sideBySide&&n.removeChild(this.gui.sideBySide)),n.parentNode.insertBefore(t,n),n.remove(),e.toTextArea(),this.autosaveTimeoutId&&(clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=void 0,this.clearAutosavedValue())},t.exports=se},{"./codemirror/tablist":17,codemirror:10,"codemirror-spell-checker":2,"codemirror/addon/display/autorefresh.js":3,"codemirror/addon/display/fullscreen.js":4,"codemirror/addon/display/placeholder.js":5,"codemirror/addon/edit/continuelist.js":6,"codemirror/addon/mode/overlay.js":7,"codemirror/addon/search/searchcursor.js":8,"codemirror/addon/selection/mark-selection.js":9,"codemirror/mode/gfm/gfm.js":11,"codemirror/mode/markdown/markdown.js":12,"codemirror/mode/xml/xml.js":14,marked:15}]},{},[18])(18)}));
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/5/LICENSE

// This is CodeMirror (https://codemirror.net/5), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.CodeMirror = factory());
}(this, (function () { 'use strict';

  // Kludges for bugs and behavior differences that can't be feature
  // detected are enabled based on userAgent etc sniffing.
  var userAgent = navigator.userAgent;
  var platform = navigator.platform;

  var gecko = /gecko\/\d/i.test(userAgent);
  var ie_upto10 = /MSIE \d/.test(userAgent);
  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
  var edge = /Edge\/(\d+)/.exec(userAgent);
  var ie = ie_upto10 || ie_11up || edge;
  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
  var webkit = !edge && /WebKit\//.test(userAgent);
  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
  var chrome = !edge && /Chrome\/(\d+)/.exec(userAgent);
  var chrome_version = chrome && +chrome[1];
  var presto = /Opera\//.test(userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);
  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
  var phantom = /PhantomJS/.test(userAgent);

  var ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2);
  var android = /Android/.test(userAgent);
  // This is woefully incomplete. Suggestions for alternative methods welcome.
  var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
  var mac = ios || /Mac/.test(platform);
  var chromeOS = /\bCrOS\b/.test(userAgent);
  var windows = /win/i.test(platform);

  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
  if (presto_version) { presto_version = Number(presto_version[1]); }
  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
  var captureRightClick = gecko || (ie && ie_version >= 9);

  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

  var rmClass = function(node, cls) {
    var current = node.className;
    var match = classTest(cls).exec(current);
    if (match) {
      var after = current.slice(match.index + match[0].length);
      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
    }
  };

  function removeChildren(e) {
    for (var count = e.childNodes.length; count > 0; --count)
      { e.removeChild(e.firstChild); }
    return e
  }

  function removeChildrenAndAdd(parent, e) {
    return removeChildren(parent).appendChild(e)
  }

  function elt(tag, content, className, style) {
    var e = document.createElement(tag);
    if (className) { e.className = className; }
    if (style) { e.style.cssText = style; }
    if (typeof content == "string") { e.appendChild(document.createTextNode(content)); }
    else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]); } }
    return e
  }
  // wrapper for elt, which removes the elt from the accessibility tree
  function eltP(tag, content, className, style) {
    var e = elt(tag, content, className, style);
    e.setAttribute("role", "presentation");
    return e
  }

  var range;
  if (document.createRange) { range = function(node, start, end, endNode) {
    var r = document.createRange();
    r.setEnd(endNode || node, end);
    r.setStart(node, start);
    return r
  }; }
  else { range = function(node, start, end) {
    var r = document.body.createTextRange();
    try { r.moveToElementText(node.parentNode); }
    catch(e) { return r }
    r.collapse(true);
    r.moveEnd("character", end);
    r.moveStart("character", start);
    return r
  }; }

  function contains(parent, child) {
    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
      { child = child.parentNode; }
    if (parent.contains)
      { return parent.contains(child) }
    do {
      if (child.nodeType == 11) { child = child.host; }
      if (child == parent) { return true }
    } while (child = child.parentNode)
  }

  function activeElt(doc) {
    // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
    // IE < 10 will throw when accessed while the page is loading or in an iframe.
    // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
    var activeElement;
    try {
      activeElement = doc.activeElement;
    } catch(e) {
      activeElement = doc.body || null;
    }
    while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
      { activeElement = activeElement.shadowRoot.activeElement; }
    return activeElement
  }

  function addClass(node, cls) {
    var current = node.className;
    if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls; }
  }
  function joinClasses(a, b) {
    var as = a.split(" ");
    for (var i = 0; i < as.length; i++)
      { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i]; } }
    return b
  }

  var selectInput = function(node) { node.select(); };
  if (ios) // Mobile Safari apparently has a bug where select() is broken.
    { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; }; }
  else if (ie) // Suppress mysterious IE10 errors
    { selectInput = function(node) { try { node.select(); } catch(_e) {} }; }

  function doc(cm) { return cm.display.wrapper.ownerDocument }

  function win(cm) { return doc(cm).defaultView }

  function bind(f) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){return f.apply(null, args)}
  }

  function copyObj(obj, target, overwrite) {
    if (!target) { target = {}; }
    for (var prop in obj)
      { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
        { target[prop] = obj[prop]; } }
    return target
  }

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  function countColumn(string, end, tabSize, startIndex, startValue) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) { end = string.length; }
    }
    for (var i = startIndex || 0, n = startValue || 0;;) {
      var nextTab = string.indexOf("\t", i);
      if (nextTab < 0 || nextTab >= end)
        { return n + (end - i) }
      n += nextTab - i;
      n += tabSize - (n % tabSize);
      i = nextTab + 1;
    }
  }

  var Delayed = function() {
    this.id = null;
    this.f = null;
    this.time = 0;
    this.handler = bind(this.onTimeout, this);
  };
  Delayed.prototype.onTimeout = function (self) {
    self.id = 0;
    if (self.time <= +new Date) {
      self.f();
    } else {
      setTimeout(self.handler, self.time - +new Date);
    }
  };
  Delayed.prototype.set = function (ms, f) {
    this.f = f;
    var time = +new Date + ms;
    if (!this.id || time < this.time) {
      clearTimeout(this.id);
      this.id = setTimeout(this.handler, ms);
      this.time = time;
    }
  };

  function indexOf(array, elt) {
    for (var i = 0; i < array.length; ++i)
      { if (array[i] == elt) { return i } }
    return -1
  }

  // Number of pixels added to scroller and sizer to hide scrollbar
  var scrollerGap = 50;

  // Returned or thrown by various protocols to signal 'I'm not
  // handling this'.
  var Pass = {toString: function(){return "CodeMirror.Pass"}};

  // Reused option objects for setSelection & friends
  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

  // The inverse of countColumn -- find the offset that corresponds to
  // a particular column.
  function findColumn(string, goal, tabSize) {
    for (var pos = 0, col = 0;;) {
      var nextTab = string.indexOf("\t", pos);
      if (nextTab == -1) { nextTab = string.length; }
      var skipped = nextTab - pos;
      if (nextTab == string.length || col + skipped >= goal)
        { return pos + Math.min(skipped, goal - col) }
      col += nextTab - pos;
      col += tabSize - (col % tabSize);
      pos = nextTab + 1;
      if (col >= goal) { return pos }
    }
  }

  var spaceStrs = [""];
  function spaceStr(n) {
    while (spaceStrs.length <= n)
      { spaceStrs.push(lst(spaceStrs) + " "); }
    return spaceStrs[n]
  }

  function lst(arr) { return arr[arr.length-1] }

  function map(array, f) {
    var out = [];
    for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i); }
    return out
  }

  function insertSorted(array, value, score) {
    var pos = 0, priority = score(value);
    while (pos < array.length && score(array[pos]) <= priority) { pos++; }
    array.splice(pos, 0, value);
  }

  function nothing() {}

  function createObj(base, props) {
    var inst;
    if (Object.create) {
      inst = Object.create(base);
    } else {
      nothing.prototype = base;
      inst = new nothing();
    }
    if (props) { copyObj(props, inst); }
    return inst
  }

  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  function isWordCharBasic(ch) {
    return /\w/.test(ch) || ch > "\x80" &&
      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
  }
  function isWordChar(ch, helper) {
    if (!helper) { return isWordCharBasic(ch) }
    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
    return helper.test(ch)
  }

  function isEmpty(obj) {
    for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
    return true
  }

  // Extending unicode characters. A series of a non-extending char +
  // any number of extending chars is treated as a single unit as far
  // as editing and measuring is concerned. This is not fully correct,
  // since some scripts/fonts/browsers also treat other configurations
  // of code points as a group.
  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

  // Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
  function skipExtendingChars(str, pos, dir) {
    while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) { pos += dir; }
    return pos
  }

  // Returns the value from the range [`from`; `to`] that satisfies
  // `pred` and is closest to `from`. Assumes that at least `to`
  // satisfies `pred`. Supports `from` being greater than `to`.
  function findFirst(pred, from, to) {
    // At any point we are certain `to` satisfies `pred`, don't know
    // whether `from` does.
    var dir = from > to ? -1 : 1;
    for (;;) {
      if (from == to) { return from }
      var midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
      if (mid == from) { return pred(mid) ? from : to }
      if (pred(mid)) { to = mid; }
      else { from = mid + dir; }
    }
  }

  // BIDI HELPERS

  function iterateBidiSections(order, from, to, f) {
    if (!order) { return f(from, to, "ltr", 0) }
    var found = false;
    for (var i = 0; i < order.length; ++i) {
      var part = order[i];
      if (part.from < to && part.to > from || from == to && part.to == from) {
        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i);
        found = true;
      }
    }
    if (!found) { f(from, to, "ltr"); }
  }

  var bidiOther = null;
  function getBidiPartAt(order, ch, sticky) {
    var found;
    bidiOther = null;
    for (var i = 0; i < order.length; ++i) {
      var cur = order[i];
      if (cur.from < ch && cur.to > ch) { return i }
      if (cur.to == ch) {
        if (cur.from != cur.to && sticky == "before") { found = i; }
        else { bidiOther = i; }
      }
      if (cur.from == ch) {
        if (cur.from != cur.to && sticky != "before") { found = i; }
        else { bidiOther = i; }
      }
    }
    return found != null ? found : bidiOther
  }

  // Bidirectional ordering algorithm
  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
  // that this (partially) implements.

  // One-char codes used for character types:
  // L (L):   Left-to-Right
  // R (R):   Right-to-Left
  // r (AL):  Right-to-Left Arabic
  // 1 (EN):  European Number
  // + (ES):  European Number Separator
  // % (ET):  European Number Terminator
  // n (AN):  Arabic Number
  // , (CS):  Common Number Separator
  // m (NSM): Non-Spacing Mark
  // b (BN):  Boundary Neutral
  // s (B):   Paragraph Separator
  // t (S):   Segment Separator
  // w (WS):  Whitespace
  // N (ON):  Other Neutrals

  // Returns null if characters are ordered as they appear
  // (left-to-right), or an array of sections ({from, to, level}
  // objects) in the order in which they occur visually.
  var bidiOrdering = (function() {
    // Character types for codepoints 0 to 0xff
    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
    // Character types for codepoints 0x600 to 0x6f9
    var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
    function charType(code) {
      if (code <= 0xf7) { return lowTypes.charAt(code) }
      else if (0x590 <= code && code <= 0x5f4) { return "R" }
      else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
      else if (0x6ee <= code && code <= 0x8ac) { return "r" }
      else if (0x2000 <= code && code <= 0x200b) { return "w" }
      else if (code == 0x200c) { return "b" }
      else { return "L" }
    }

    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;

    function BidiSpan(level, from, to) {
      this.level = level;
      this.from = from; this.to = to;
    }

    return function(str, direction) {
      var outerType = direction == "ltr" ? "L" : "R";

      if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) { return false }
      var len = str.length, types = [];
      for (var i = 0; i < len; ++i)
        { types.push(charType(str.charCodeAt(i))); }

      // W1. Examine each non-spacing mark (NSM) in the level run, and
      // change the type of the NSM to the type of the previous
      // character. If the NSM is at the start of the level run, it will
      // get the type of sor.
      for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
        var type = types[i$1];
        if (type == "m") { types[i$1] = prev; }
        else { prev = type; }
      }

      // W2. Search backwards from each instance of a European number
      // until the first strong type (R, L, AL, or sor) is found. If an
      // AL is found, change the type of the European number to Arabic
      // number.
      // W3. Change all ALs to R.
      for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
        var type$1 = types[i$2];
        if (type$1 == "1" && cur == "r") { types[i$2] = "n"; }
        else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R"; } }
      }

      // W4. A single European separator between two European numbers
      // changes to a European number. A single common separator between
      // two numbers of the same type changes to that type.
      for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
        var type$2 = types[i$3];
        if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1"; }
        else if (type$2 == "," && prev$1 == types[i$3+1] &&
                 (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1; }
        prev$1 = type$2;
      }

      // W5. A sequence of European terminators adjacent to European
      // numbers changes to all European numbers.
      // W6. Otherwise, separators and terminators change to Other
      // Neutral.
      for (var i$4 = 0; i$4 < len; ++i$4) {
        var type$3 = types[i$4];
        if (type$3 == ",") { types[i$4] = "N"; }
        else if (type$3 == "%") {
          var end = (void 0);
          for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
          var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
          for (var j = i$4; j < end; ++j) { types[j] = replace; }
          i$4 = end - 1;
        }
      }

      // W7. Search backwards from each instance of a European number
      // until the first strong type (R, L, or sor) is found. If an L is
      // found, then change the type of the European number to L.
      for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
        var type$4 = types[i$5];
        if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L"; }
        else if (isStrong.test(type$4)) { cur$1 = type$4; }
      }

      // N1. A sequence of neutrals takes the direction of the
      // surrounding strong text if the text on both sides has the same
      // direction. European and Arabic numbers act as if they were R in
      // terms of their influence on neutrals. Start-of-level-run (sor)
      // and end-of-level-run (eor) are used at level run boundaries.
      // N2. Any remaining neutrals take the embedding direction.
      for (var i$6 = 0; i$6 < len; ++i$6) {
        if (isNeutral.test(types[i$6])) {
          var end$1 = (void 0);
          for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
          var before = (i$6 ? types[i$6-1] : outerType) == "L";
          var after = (end$1 < len ? types[end$1] : outerType) == "L";
          var replace$1 = before == after ? (before ? "L" : "R") : outerType;
          for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1; }
          i$6 = end$1 - 1;
        }
      }

      // Here we depart from the documented algorithm, in order to avoid
      // building up an actual levels array. Since there are only three
      // levels (0, 1, 2) in an implementation that doesn't take
      // explicit embedding into account, we can build up the order on
      // the fly, without following the level-based algorithm.
      var order = [], m;
      for (var i$7 = 0; i$7 < len;) {
        if (countsAsLeft.test(types[i$7])) {
          var start = i$7;
          for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
          order.push(new BidiSpan(0, start, i$7));
        } else {
          var pos = i$7, at = order.length, isRTL = direction == "rtl" ? 1 : 0;
          for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
          for (var j$2 = pos; j$2 < i$7;) {
            if (countsAsNum.test(types[j$2])) {
              if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)); at += isRTL; }
              var nstart = j$2;
              for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
              order.splice(at, 0, new BidiSpan(2, nstart, j$2));
              at += isRTL;
              pos = j$2;
            } else { ++j$2; }
          }
          if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)); }
        }
      }
      if (direction == "ltr") {
        if (order[0].level == 1 && (m = str.match(/^\s+/))) {
          order[0].from = m[0].length;
          order.unshift(new BidiSpan(0, 0, m[0].length));
        }
        if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
          lst(order).to -= m[0].length;
          order.push(new BidiSpan(0, len - m[0].length, len));
        }
      }

      return direction == "rtl" ? order.reverse() : order
    }
  })();

  // Get the bidi ordering for the given line (and cache it). Returns
  // false for lines that are fully left-to-right, and an array of
  // BidiSpan objects otherwise.
  function getOrder(line, direction) {
    var order = line.order;
    if (order == null) { order = line.order = bidiOrdering(line.text, direction); }
    return order
  }

  // EVENT HANDLING

  // Lightweight event framework. on/off also work on DOM nodes,
  // registering native DOM handlers.

  var noHandlers = [];

  var on = function(emitter, type, f) {
    if (emitter.addEventListener) {
      emitter.addEventListener(type, f, false);
    } else if (emitter.attachEvent) {
      emitter.attachEvent("on" + type, f);
    } else {
      var map = emitter._handlers || (emitter._handlers = {});
      map[type] = (map[type] || noHandlers).concat(f);
    }
  };

  function getHandlers(emitter, type) {
    return emitter._handlers && emitter._handlers[type] || noHandlers
  }

  function off(emitter, type, f) {
    if (emitter.removeEventListener) {
      emitter.removeEventListener(type, f, false);
    } else if (emitter.detachEvent) {
      emitter.detachEvent("on" + type, f);
    } else {
      var map = emitter._handlers, arr = map && map[type];
      if (arr) {
        var index = indexOf(arr, f);
        if (index > -1)
          { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)); }
      }
    }
  }

  function signal(emitter, type /*, values...*/) {
    var handlers = getHandlers(emitter, type);
    if (!handlers.length) { return }
    var args = Array.prototype.slice.call(arguments, 2);
    for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args); }
  }

  // The DOM events that CodeMirror handles can be overridden by
  // registering a (non-DOM) handler on the editor for the event name,
  // and preventDefault-ing the event in that handler.
  function signalDOMEvent(cm, e, override) {
    if (typeof e == "string")
      { e = {type: e, preventDefault: function() { this.defaultPrevented = true; }}; }
    signal(cm, override || e.type, cm, e);
    return e_defaultPrevented(e) || e.codemirrorIgnore
  }

  function signalCursorActivity(cm) {
    var arr = cm._handlers && cm._handlers.cursorActivity;
    if (!arr) { return }
    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
    for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
      { set.push(arr[i]); } }
  }

  function hasHandler(emitter, type) {
    return getHandlers(emitter, type).length > 0
  }

  // Add on and off methods to a constructor's prototype, to make
  // registering events on such objects more convenient.
  function eventMixin(ctor) {
    ctor.prototype.on = function(type, f) {on(this, type, f);};
    ctor.prototype.off = function(type, f) {off(this, type, f);};
  }

  // Due to the fact that we still support jurassic IE versions, some
  // compatibility wrappers are needed.

  function e_preventDefault(e) {
    if (e.preventDefault) { e.preventDefault(); }
    else { e.returnValue = false; }
  }
  function e_stopPropagation(e) {
    if (e.stopPropagation) { e.stopPropagation(); }
    else { e.cancelBubble = true; }
  }
  function e_defaultPrevented(e) {
    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
  }
  function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}

  function e_target(e) {return e.target || e.srcElement}
  function e_button(e) {
    var b = e.which;
    if (b == null) {
      if (e.button & 1) { b = 1; }
      else if (e.button & 2) { b = 3; }
      else if (e.button & 4) { b = 2; }
    }
    if (mac && e.ctrlKey && b == 1) { b = 3; }
    return b
  }

  // Detect drag-and-drop
  var dragAndDrop = function() {
    // There is *some* kind of drag-and-drop support in IE6-8, but I
    // couldn't get it to work yet.
    if (ie && ie_version < 9) { return false }
    var div = elt('div');
    return "draggable" in div || "dragDrop" in div
  }();

  var zwspSupported;
  function zeroWidthElement(measure) {
    if (zwspSupported == null) {
      var test = elt("span", "\u200b");
      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
      if (measure.firstChild.offsetHeight != 0)
        { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8); }
    }
    var node = zwspSupported ? elt("span", "\u200b") :
      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
    node.setAttribute("cm-text", "");
    return node
  }

  // Feature-detect IE's crummy client rect reporting for bidi text
  var badBidiRects;
  function hasBadBidiRects(measure) {
    if (badBidiRects != null) { return badBidiRects }
    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
    var r0 = range(txt, 0, 1).getBoundingClientRect();
    var r1 = range(txt, 1, 2).getBoundingClientRect();
    removeChildren(measure);
    if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
    return badBidiRects = (r1.right - r0.right < 3)
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
    var pos = 0, result = [], l = string.length;
    while (pos <= l) {
      var nl = string.indexOf("\n", pos);
      if (nl == -1) { nl = string.length; }
      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
      var rt = line.indexOf("\r");
      if (rt != -1) {
        result.push(line.slice(0, rt));
        pos += rt + 1;
      } else {
        result.push(line);
        pos = nl + 1;
      }
    }
    return result
  } : function (string) { return string.split(/\r\n?|\n/); };

  var hasSelection = window.getSelection ? function (te) {
    try { return te.selectionStart != te.selectionEnd }
    catch(e) { return false }
  } : function (te) {
    var range;
    try {range = te.ownerDocument.selection.createRange();}
    catch(e) {}
    if (!range || range.parentElement() != te) { return false }
    return range.compareEndPoints("StartToEnd", range) != 0
  };

  var hasCopyEvent = (function () {
    var e = elt("div");
    if ("oncopy" in e) { return true }
    e.setAttribute("oncopy", "return;");
    return typeof e.oncopy == "function"
  })();

  var badZoomedRects = null;
  function hasBadZoomedRects(measure) {
    if (badZoomedRects != null) { return badZoomedRects }
    var node = removeChildrenAndAdd(measure, elt("span", "x"));
    var normal = node.getBoundingClientRect();
    var fromRange = range(node, 0, 1).getBoundingClientRect();
    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
  }

  // Known modes, by name and by MIME
  var modes = {}, mimeModes = {};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  function defineMode(name, mode) {
    if (arguments.length > 2)
      { mode.dependencies = Array.prototype.slice.call(arguments, 2); }
    modes[name] = mode;
  }

  function defineMIME(mime, spec) {
    mimeModes[mime] = spec;
  }

  // Given a MIME type, a {name, ...options} config object, or a name
  // string, return a mode config object.
  function resolveMode(spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
      spec = mimeModes[spec];
    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
      var found = mimeModes[spec.name];
      if (typeof found == "string") { found = {name: found}; }
      spec = createObj(found, spec);
      spec.name = found.name;
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
      return resolveMode("application/xml")
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
      return resolveMode("application/json")
    }
    if (typeof spec == "string") { return {name: spec} }
    else { return spec || {name: "null"} }
  }

  // Given a mode spec (anything that resolveMode accepts), find and
  // initialize an actual mode object.
  function getMode(options, spec) {
    spec = resolveMode(spec);
    var mfactory = modes[spec.name];
    if (!mfactory) { return getMode(options, "text/plain") }
    var modeObj = mfactory(options, spec);
    if (modeExtensions.hasOwnProperty(spec.name)) {
      var exts = modeExtensions[spec.name];
      for (var prop in exts) {
        if (!exts.hasOwnProperty(prop)) { continue }
        if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop]; }
        modeObj[prop] = exts[prop];
      }
    }
    modeObj.name = spec.name;
    if (spec.helperType) { modeObj.helperType = spec.helperType; }
    if (spec.modeProps) { for (var prop$1 in spec.modeProps)
      { modeObj[prop$1] = spec.modeProps[prop$1]; } }

    return modeObj
  }

  // This can be used to attach properties to mode objects from
  // outside the actual mode definition.
  var modeExtensions = {};
  function extendMode(mode, properties) {
    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
    copyObj(properties, exts);
  }

  function copyState(mode, state) {
    if (state === true) { return state }
    if (mode.copyState) { return mode.copyState(state) }
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) { val = val.concat([]); }
      nstate[n] = val;
    }
    return nstate
  }

  // Given a mode and a state (for that mode), find the inner mode and
  // state at the position that the state refers to.
  function innerMode(mode, state) {
    var info;
    while (mode.innerMode) {
      info = mode.innerMode(state);
      if (!info || info.mode == mode) { break }
      state = info.state;
      mode = info.mode;
    }
    return info || {mode: mode, state: state}
  }

  function startState(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true
  }

  // STRING STREAM

  // Fed to the mode parsers, provides helper functions to make
  // parsers more succinct.

  var StringStream = function(string, tabSize, lineOracle) {
    this.pos = this.start = 0;
    this.string = string;
    this.tabSize = tabSize || 8;
    this.lastColumnPos = this.lastColumnValue = 0;
    this.lineStart = 0;
    this.lineOracle = lineOracle;
  };

  StringStream.prototype.eol = function () {return this.pos >= this.string.length};
  StringStream.prototype.sol = function () {return this.pos == this.lineStart};
  StringStream.prototype.peek = function () {return this.string.charAt(this.pos) || undefined};
  StringStream.prototype.next = function () {
    if (this.pos < this.string.length)
      { return this.string.charAt(this.pos++) }
  };
  StringStream.prototype.eat = function (match) {
    var ch = this.string.charAt(this.pos);
    var ok;
    if (typeof match == "string") { ok = ch == match; }
    else { ok = ch && (match.test ? match.test(ch) : match(ch)); }
    if (ok) {++this.pos; return ch}
  };
  StringStream.prototype.eatWhile = function (match) {
    var start = this.pos;
    while (this.eat(match)){}
    return this.pos > start
  };
  StringStream.prototype.eatSpace = function () {
    var start = this.pos;
    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this.pos; }
    return this.pos > start
  };
  StringStream.prototype.skipToEnd = function () {this.pos = this.string.length;};
  StringStream.prototype.skipTo = function (ch) {
    var found = this.string.indexOf(ch, this.pos);
    if (found > -1) {this.pos = found; return true}
  };
  StringStream.prototype.backUp = function (n) {this.pos -= n;};
  StringStream.prototype.column = function () {
    if (this.lastColumnPos < this.start) {
      this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
      this.lastColumnPos = this.start;
    }
    return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  };
  StringStream.prototype.indentation = function () {
    return countColumn(this.string, null, this.tabSize) -
      (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  };
  StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
    if (typeof pattern == "string") {
      var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
      var substr = this.string.substr(this.pos, pattern.length);
      if (cased(substr) == cased(pattern)) {
        if (consume !== false) { this.pos += pattern.length; }
        return true
      }
    } else {
      var match = this.string.slice(this.pos).match(pattern);
      if (match && match.index > 0) { return null }
      if (match && consume !== false) { this.pos += match[0].length; }
      return match
    }
  };
  StringStream.prototype.current = function (){return this.string.slice(this.start, this.pos)};
  StringStream.prototype.hideFirstChars = function (n, inner) {
    this.lineStart += n;
    try { return inner() }
    finally { this.lineStart -= n; }
  };
  StringStream.prototype.lookAhead = function (n) {
    var oracle = this.lineOracle;
    return oracle && oracle.lookAhead(n)
  };
  StringStream.prototype.baseToken = function () {
    var oracle = this.lineOracle;
    return oracle && oracle.baseToken(this.pos)
  };

  // Find the line object corresponding to the given line number.
  function getLine(doc, n) {
    n -= doc.first;
    if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
    var chunk = doc;
    while (!chunk.lines) {
      for (var i = 0;; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; break }
        n -= sz;
      }
    }
    return chunk.lines[n]
  }

  // Get the part of a document between two positions, as an array of
  // strings.
  function getBetween(doc, start, end) {
    var out = [], n = start.line;
    doc.iter(start.line, end.line + 1, function (line) {
      var text = line.text;
      if (n == end.line) { text = text.slice(0, end.ch); }
      if (n == start.line) { text = text.slice(start.ch); }
      out.push(text);
      ++n;
    });
    return out
  }
  // Get the lines between from and to, as array of strings.
  function getLines(doc, from, to) {
    var out = [];
    doc.iter(from, to, function (line) { out.push(line.text); }); // iter aborts when callback returns truthy value
    return out
  }

  // Update the height of a line, propagating the height change
  // upwards to parent nodes.
  function updateLineHeight(line, height) {
    var diff = height - line.height;
    if (diff) { for (var n = line; n; n = n.parent) { n.height += diff; } }
  }

  // Given a line object, find its line number by walking up through
  // its parent links.
  function lineNo(line) {
    if (line.parent == null) { return null }
    var cur = line.parent, no = indexOf(cur.lines, line);
    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
      for (var i = 0;; ++i) {
        if (chunk.children[i] == cur) { break }
        no += chunk.children[i].chunkSize();
      }
    }
    return no + cur.first
  }

  // Find the line at the given vertical position, using the height
  // information in the document tree.
  function lineAtHeight(chunk, h) {
    var n = chunk.first;
    outer: do {
      for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
        var child = chunk.children[i$1], ch = child.height;
        if (h < ch) { chunk = child; continue outer }
        h -= ch;
        n += child.chunkSize();
      }
      return n
    } while (!chunk.lines)
    var i = 0;
    for (; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i], lh = line.height;
      if (h < lh) { break }
      h -= lh;
    }
    return n + i
  }

  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

  function lineNumberFor(options, i) {
    return String(options.lineNumberFormatter(i + options.firstLineNumber))
  }

  // A Pos instance represents a position within the text.
  function Pos(line, ch, sticky) {
    if ( sticky === void 0 ) sticky = null;

    if (!(this instanceof Pos)) { return new Pos(line, ch, sticky) }
    this.line = line;
    this.ch = ch;
    this.sticky = sticky;
  }

  // Compare two positions, return 0 if they are the same, a negative
  // number when a is less, and a positive number otherwise.
  function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

  function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

  function copyPos(x) {return Pos(x.line, x.ch)}
  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
  function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

  // Most of the external API clips given positions to make sure they
  // actually exist within the document.
  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
  function clipPos(doc, pos) {
    if (pos.line < doc.first) { return Pos(doc.first, 0) }
    var last = doc.first + doc.size - 1;
    if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
    return clipToLen(pos, getLine(doc, pos.line).text.length)
  }
  function clipToLen(pos, linelen) {
    var ch = pos.ch;
    if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
    else if (ch < 0) { return Pos(pos.line, 0) }
    else { return pos }
  }
  function clipPosArray(doc, array) {
    var out = [];
    for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]); }
    return out
  }

  var SavedContext = function(state, lookAhead) {
    this.state = state;
    this.lookAhead = lookAhead;
  };

  var Context = function(doc, state, line, lookAhead) {
    this.state = state;
    this.doc = doc;
    this.line = line;
    this.maxLookAhead = lookAhead || 0;
    this.baseTokens = null;
    this.baseTokenPos = 1;
  };

  Context.prototype.lookAhead = function (n) {
    var line = this.doc.getLine(this.line + n);
    if (line != null && n > this.maxLookAhead) { this.maxLookAhead = n; }
    return line
  };

  Context.prototype.baseToken = function (n) {
    if (!this.baseTokens) { return null }
    while (this.baseTokens[this.baseTokenPos] <= n)
      { this.baseTokenPos += 2; }
    var type = this.baseTokens[this.baseTokenPos + 1];
    return {type: type && type.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - n}
  };

  Context.prototype.nextLine = function () {
    this.line++;
    if (this.maxLookAhead > 0) { this.maxLookAhead--; }
  };

  Context.fromSaved = function (doc, saved, line) {
    if (saved instanceof SavedContext)
      { return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead) }
    else
      { return new Context(doc, copyState(doc.mode, saved), line) }
  };

  Context.prototype.save = function (copy) {
    var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
    return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
  };


  // Compute a style array (an array starting with a mode generation
  // -- for invalidation -- followed by pairs of end positions and
  // style strings), which is used to highlight the tokens on the
  // line.
  function highlightLine(cm, line, context, forceToEnd) {
    // A styles array always starts with a number identifying the
    // mode/overlays that it is based on (for easy invalidation).
    var st = [cm.state.modeGen], lineClasses = {};
    // Compute the base array of styles
    runMode(cm, line.text, cm.doc.mode, context, function (end, style) { return st.push(end, style); },
            lineClasses, forceToEnd);
    var state = context.state;

    // Run overlays, adjust style array.
    var loop = function ( o ) {
      context.baseTokens = st;
      var overlay = cm.state.overlays[o], i = 1, at = 0;
      context.state = true;
      runMode(cm, line.text, overlay.mode, context, function (end, style) {
        var start = i;
        // Ensure there's a token end at the current position, and that i points at it
        while (at < end) {
          var i_end = st[i];
          if (i_end > end)
            { st.splice(i, 1, end, st[i+1], i_end); }
          i += 2;
          at = Math.min(end, i_end);
        }
        if (!style) { return }
        if (overlay.opaque) {
          st.splice(start, i - start, end, "overlay " + style);
          i = start + 2;
        } else {
          for (; start < i; start += 2) {
            var cur = st[start+1];
            st[start+1] = (cur ? cur + " " : "") + "overlay " + style;
          }
        }
      }, lineClasses);
      context.state = state;
      context.baseTokens = null;
      context.baseTokenPos = 1;
    };

    for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
  }

  function getLineStyles(cm, line, updateFrontier) {
    if (!line.styles || line.styles[0] != cm.state.modeGen) {
      var context = getContextBefore(cm, lineNo(line));
      var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
      var result = highlightLine(cm, line, context);
      if (resetState) { context.state = resetState; }
      line.stateAfter = context.save(!resetState);
      line.styles = result.styles;
      if (result.classes) { line.styleClasses = result.classes; }
      else if (line.styleClasses) { line.styleClasses = null; }
      if (updateFrontier === cm.doc.highlightFrontier)
        { cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier); }
    }
    return line.styles
  }

  function getContextBefore(cm, n, precise) {
    var doc = cm.doc, display = cm.display;
    if (!doc.mode.startState) { return new Context(doc, true, n) }
    var start = findStartLine(cm, n, precise);
    var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
    var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);

    doc.iter(start, n, function (line) {
      processLine(cm, line.text, context);
      var pos = context.line;
      line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
      context.nextLine();
    });
    if (precise) { doc.modeFrontier = context.line; }
    return context
  }

  // Lightweight form of highlight -- proceed over this line and
  // update state, but don't save a style array. Used for lines that
  // aren't currently visible.
  function processLine(cm, text, context, startAt) {
    var mode = cm.doc.mode;
    var stream = new StringStream(text, cm.options.tabSize, context);
    stream.start = stream.pos = startAt || 0;
    if (text == "") { callBlankLine(mode, context.state); }
    while (!stream.eol()) {
      readToken(mode, stream, context.state);
      stream.start = stream.pos;
    }
  }

  function callBlankLine(mode, state) {
    if (mode.blankLine) { return mode.blankLine(state) }
    if (!mode.innerMode) { return }
    var inner = innerMode(mode, state);
    if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
  }

  function readToken(mode, stream, state, inner) {
    for (var i = 0; i < 10; i++) {
      if (inner) { inner[0] = innerMode(mode, state).mode; }
      var style = mode.token(stream, state);
      if (stream.pos > stream.start) { return style }
    }
    throw new Error("Mode " + mode.name + " failed to advance stream.")
  }

  var Token = function(stream, type, state) {
    this.start = stream.start; this.end = stream.pos;
    this.string = stream.current();
    this.type = type || null;
    this.state = state;
  };

  // Utility for getTokenAt and getLineTokens
  function takeToken(cm, pos, precise, asArray) {
    var doc = cm.doc, mode = doc.mode, style;
    pos = clipPos(doc, pos);
    var line = getLine(doc, pos.line), context = getContextBefore(cm, pos.line, precise);
    var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
    if (asArray) { tokens = []; }
    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
      stream.start = stream.pos;
      style = readToken(mode, stream, context.state);
      if (asArray) { tokens.push(new Token(stream, style, copyState(doc.mode, context.state))); }
    }
    return asArray ? tokens : new Token(stream, style, context.state)
  }

  function extractLineClasses(type, output) {
    if (type) { for (;;) {
      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
      if (!lineClass) { break }
      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
      var prop = lineClass[1] ? "bgClass" : "textClass";
      if (output[prop] == null)
        { output[prop] = lineClass[2]; }
      else if (!(new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)")).test(output[prop]))
        { output[prop] += " " + lineClass[2]; }
    } }
    return type
  }

  // Run the given mode's parser over a line, calling f for each token.
  function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
    var flattenSpans = mode.flattenSpans;
    if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans; }
    var curStart = 0, curStyle = null;
    var stream = new StringStream(text, cm.options.tabSize, context), style;
    var inner = cm.options.addModeClass && [null];
    if (text == "") { extractLineClasses(callBlankLine(mode, context.state), lineClasses); }
    while (!stream.eol()) {
      if (stream.pos > cm.options.maxHighlightLength) {
        flattenSpans = false;
        if (forceToEnd) { processLine(cm, text, context, stream.pos); }
        stream.pos = text.length;
        style = null;
      } else {
        style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
      }
      if (inner) {
        var mName = inner[0].name;
        if (mName) { style = "m-" + (style ? mName + " " + style : mName); }
      }
      if (!flattenSpans || curStyle != style) {
        while (curStart < stream.start) {
          curStart = Math.min(stream.start, curStart + 5000);
          f(curStart, curStyle);
        }
        curStyle = style;
      }
      stream.start = stream.pos;
    }
    while (curStart < stream.pos) {
      // Webkit seems to refuse to render text nodes longer than 57444
      // characters, and returns inaccurate measurements in nodes
      // starting around 5000 chars.
      var pos = Math.min(stream.pos, curStart + 5000);
      f(pos, curStyle);
      curStart = pos;
    }
  }

  // Finds the line to start with when starting a parse. Tries to
  // find a line with a stateAfter, so that it can start with a
  // valid state. If that fails, it returns the line with the
  // smallest indentation, which tends to need the least context to
  // parse correctly.
  function findStartLine(cm, n, precise) {
    var minindent, minline, doc = cm.doc;
    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
    for (var search = n; search > lim; --search) {
      if (search <= doc.first) { return doc.first }
      var line = getLine(doc, search - 1), after = line.stateAfter;
      if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
        { return search }
      var indented = countColumn(line.text, null, cm.options.tabSize);
      if (minline == null || minindent > indented) {
        minline = search - 1;
        minindent = indented;
      }
    }
    return minline
  }

  function retreatFrontier(doc, n) {
    doc.modeFrontier = Math.min(doc.modeFrontier, n);
    if (doc.highlightFrontier < n - 10) { return }
    var start = doc.first;
    for (var line = n - 1; line > start; line--) {
      var saved = getLine(doc, line).stateAfter;
      // change is on 3
      // state on line 1 looked ahead 2 -- so saw 3
      // test 1 + 2 < 3 should cover this
      if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
        start = line + 1;
        break
      }
    }
    doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
  }

  // Optimize some code when these features are not used.
  var sawReadOnlySpans = false, sawCollapsedSpans = false;

  function seeReadOnlySpans() {
    sawReadOnlySpans = true;
  }

  function seeCollapsedSpans() {
    sawCollapsedSpans = true;
  }

  // TEXTMARKER SPANS

  function MarkedSpan(marker, from, to) {
    this.marker = marker;
    this.from = from; this.to = to;
  }

  // Search an array of spans for a span matching the given marker.
  function getMarkedSpanFor(spans, marker) {
    if (spans) { for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.marker == marker) { return span }
    } }
  }

  // Remove a span from an array, returning undefined if no spans are
  // left (we don't store arrays for lines without spans).
  function removeMarkedSpan(spans, span) {
    var r;
    for (var i = 0; i < spans.length; ++i)
      { if (spans[i] != span) { (r || (r = [])).push(spans[i]); } }
    return r
  }

  // Add a span to a line.
  function addMarkedSpan(line, span, op) {
    var inThisOp = op && window.WeakSet && (op.markedSpans || (op.markedSpans = new WeakSet));
    if (inThisOp && line.markedSpans && inThisOp.has(line.markedSpans)) {
      line.markedSpans.push(span);
    } else {
      line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
      if (inThisOp) { inThisOp.add(line.markedSpans); }
    }
    span.marker.attachLine(line);
  }

  // Used for the algorithm that adjusts markers for a change in the
  // document. These functions cut an array of spans at a given
  // character position, returning an array of remaining chunks (or
  // undefined if nothing remains).
  function markedSpansBefore(old, startCh, isInsert) {
    var nw;
    if (old) { for (var i = 0; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
        ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
      }
    } }
    return nw
  }
  function markedSpansAfter(old, endCh, isInsert) {
    var nw;
    if (old) { for (var i = 0; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
        ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                              span.to == null ? null : span.to - endCh));
      }
    } }
    return nw
  }

  // Given a change object, compute the new set of marker spans that
  // cover the line in which the change took place. Removes spans
  // entirely within the change, reconnects spans belonging to the
  // same marker that appear on both sides of the change, and cuts off
  // spans partially within the change. Returns an array of span
  // arrays with one element for each line in (after) the change.
  function stretchSpansOverChange(doc, change) {
    if (change.full) { return null }
    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
    if (!oldFirst && !oldLast) { return null }

    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
    // Get the spans that 'stick out' on both sides
    var first = markedSpansBefore(oldFirst, startCh, isInsert);
    var last = markedSpansAfter(oldLast, endCh, isInsert);

    // Next, merge those two ends
    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
    if (first) {
      // Fix up .to properties of first
      for (var i = 0; i < first.length; ++i) {
        var span = first[i];
        if (span.to == null) {
          var found = getMarkedSpanFor(last, span.marker);
          if (!found) { span.to = startCh; }
          else if (sameLine) { span.to = found.to == null ? null : found.to + offset; }
        }
      }
    }
    if (last) {
      // Fix up .from in last (or move them into first in case of sameLine)
      for (var i$1 = 0; i$1 < last.length; ++i$1) {
        var span$1 = last[i$1];
        if (span$1.to != null) { span$1.to += offset; }
        if (span$1.from == null) {
          var found$1 = getMarkedSpanFor(first, span$1.marker);
          if (!found$1) {
            span$1.from = offset;
            if (sameLine) { (first || (first = [])).push(span$1); }
          }
        } else {
          span$1.from += offset;
          if (sameLine) { (first || (first = [])).push(span$1); }
        }
      }
    }
    // Make sure we didn't create any zero-length spans
    if (first) { first = clearEmptySpans(first); }
    if (last && last != first) { last = clearEmptySpans(last); }

    var newMarkers = [first];
    if (!sameLine) {
      // Fill gap with whole-line-spans
      var gap = change.text.length - 2, gapMarkers;
      if (gap > 0 && first)
        { for (var i$2 = 0; i$2 < first.length; ++i$2)
          { if (first[i$2].to == null)
            { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)); } } }
      for (var i$3 = 0; i$3 < gap; ++i$3)
        { newMarkers.push(gapMarkers); }
      newMarkers.push(last);
    }
    return newMarkers
  }

  // Remove spans that are empty and don't have a clearWhenEmpty
  // option of false.
  function clearEmptySpans(spans) {
    for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
        { spans.splice(i--, 1); }
    }
    if (!spans.length) { return null }
    return spans
  }

  // Used to 'clip' out readOnly ranges when making a change.
  function removeReadOnlyRanges(doc, from, to) {
    var markers = null;
    doc.iter(from.line, to.line + 1, function (line) {
      if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
        var mark = line.markedSpans[i].marker;
        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
          { (markers || (markers = [])).push(mark); }
      } }
    });
    if (!markers) { return null }
    var parts = [{from: from, to: to}];
    for (var i = 0; i < markers.length; ++i) {
      var mk = markers[i], m = mk.find(0);
      for (var j = 0; j < parts.length; ++j) {
        var p = parts[j];
        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
          { newParts.push({from: p.from, to: m.from}); }
        if (dto > 0 || !mk.inclusiveRight && !dto)
          { newParts.push({from: m.to, to: p.to}); }
        parts.splice.apply(parts, newParts);
        j += newParts.length - 3;
      }
    }
    return parts
  }

  // Connect or disconnect spans from a line.
  function detachMarkedSpans(line) {
    var spans = line.markedSpans;
    if (!spans) { return }
    for (var i = 0; i < spans.length; ++i)
      { spans[i].marker.detachLine(line); }
    line.markedSpans = null;
  }
  function attachMarkedSpans(line, spans) {
    if (!spans) { return }
    for (var i = 0; i < spans.length; ++i)
      { spans[i].marker.attachLine(line); }
    line.markedSpans = spans;
  }

  // Helpers used when computing which overlapping collapsed span
  // counts as the larger one.
  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

  // Returns a number indicating which of two overlapping collapsed
  // spans is larger (and thus includes the other). Falls back to
  // comparing ids when the spans cover exactly the same range.
  function compareCollapsedMarkers(a, b) {
    var lenDiff = a.lines.length - b.lines.length;
    if (lenDiff != 0) { return lenDiff }
    var aPos = a.find(), bPos = b.find();
    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
    if (fromCmp) { return -fromCmp }
    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
    if (toCmp) { return toCmp }
    return b.id - a.id
  }

  // Find out whether a line ends or starts in a collapsed span. If
  // so, return the marker for that span.
  function collapsedSpanAtSide(line, start) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
        { found = sp.marker; }
    } }
    return found
  }
  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

  function collapsedSpanAround(line, ch) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) { for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];
      if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) &&
          (!found || compareCollapsedMarkers(found, sp.marker) < 0)) { found = sp.marker; }
    } }
    return found
  }

  // Test whether there exists a collapsed span that partially
  // overlaps (covers the start or end, but not both) of a new span.
  // Such overlap is not allowed.
  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
    var line = getLine(doc, lineNo);
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) { for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];
      if (!sp.marker.collapsed) { continue }
      var found = sp.marker.find(0);
      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
      if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
          fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
        { return true }
    } }
  }

  // A visual line is a line as drawn on the screen. Folding, for
  // example, can cause multiple logical lines to appear on the same
  // visual line. This finds the start of the visual line that the
  // given line is part of (usually that is the line itself).
  function visualLine(line) {
    var merged;
    while (merged = collapsedSpanAtStart(line))
      { line = merged.find(-1, true).line; }
    return line
  }

  function visualLineEnd(line) {
    var merged;
    while (merged = collapsedSpanAtEnd(line))
      { line = merged.find(1, true).line; }
    return line
  }

  // Returns an array of logical lines that continue the visual line
  // started by the argument, or undefined if there are no such lines.
  function visualLineContinued(line) {
    var merged, lines;
    while (merged = collapsedSpanAtEnd(line)) {
      line = merged.find(1, true).line
      ;(lines || (lines = [])).push(line);
    }
    return lines
  }

  // Get the line number of the start of the visual line that the
  // given line number is part of.
  function visualLineNo(doc, lineN) {
    var line = getLine(doc, lineN), vis = visualLine(line);
    if (line == vis) { return lineN }
    return lineNo(vis)
  }

  // Get the line number of the start of the next visual line after
  // the given line.
  function visualLineEndNo(doc, lineN) {
    if (lineN > doc.lastLine()) { return lineN }
    var line = getLine(doc, lineN), merged;
    if (!lineIsHidden(doc, line)) { return lineN }
    while (merged = collapsedSpanAtEnd(line))
      { line = merged.find(1, true).line; }
    return lineNo(line) + 1
  }

  // Compute whether a line is hidden. Lines count as hidden when they
  // are part of a visual line that starts with another line, or when
  // they are entirely covered by collapsed, non-widget span.
  function lineIsHidden(doc, line) {
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (!sp.marker.collapsed) { continue }
      if (sp.from == null) { return true }
      if (sp.marker.widgetNode) { continue }
      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
        { return true }
    } }
  }
  function lineIsHiddenInner(doc, line, span) {
    if (span.to == null) {
      var end = span.marker.find(1, true);
      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
    }
    if (span.marker.inclusiveRight && span.to == line.text.length)
      { return true }
    for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
      sp = line.markedSpans[i];
      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
          (sp.to == null || sp.to != span.from) &&
          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
          lineIsHiddenInner(doc, line, sp)) { return true }
    }
  }

  // Find the height above the given line.
  function heightAtLine(lineObj) {
    lineObj = visualLine(lineObj);

    var h = 0, chunk = lineObj.parent;
    for (var i = 0; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i];
      if (line == lineObj) { break }
      else { h += line.height; }
    }
    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
      for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
        var cur = p.children[i$1];
        if (cur == chunk) { break }
        else { h += cur.height; }
      }
    }
    return h
  }

  // Compute the character length of a line, taking into account
  // collapsed ranges (see markText) that might hide parts, and join
  // other lines onto it.
  function lineLength(line) {
    if (line.height == 0) { return 0 }
    var len = line.text.length, merged, cur = line;
    while (merged = collapsedSpanAtStart(cur)) {
      var found = merged.find(0, true);
      cur = found.from.line;
      len += found.from.ch - found.to.ch;
    }
    cur = line;
    while (merged = collapsedSpanAtEnd(cur)) {
      var found$1 = merged.find(0, true);
      len -= cur.text.length - found$1.from.ch;
      cur = found$1.to.line;
      len += cur.text.length - found$1.to.ch;
    }
    return len
  }

  // Find the longest line in the document.
  function findMaxLine(cm) {
    var d = cm.display, doc = cm.doc;
    d.maxLine = getLine(doc, doc.first);
    d.maxLineLength = lineLength(d.maxLine);
    d.maxLineChanged = true;
    doc.iter(function (line) {
      var len = lineLength(line);
      if (len > d.maxLineLength) {
        d.maxLineLength = len;
        d.maxLine = line;
      }
    });
  }

  // LINE DATA STRUCTURE

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  var Line = function(text, markedSpans, estimateHeight) {
    this.text = text;
    attachMarkedSpans(this, markedSpans);
    this.height = estimateHeight ? estimateHeight(this) : 1;
  };

  Line.prototype.lineNo = function () { return lineNo(this) };
  eventMixin(Line);

  // Change the content (text, markers) of a line. Automatically
  // invalidates cached information and tries to re-estimate the
  // line's height.
  function updateLine(line, text, markedSpans, estimateHeight) {
    line.text = text;
    if (line.stateAfter) { line.stateAfter = null; }
    if (line.styles) { line.styles = null; }
    if (line.order != null) { line.order = null; }
    detachMarkedSpans(line);
    attachMarkedSpans(line, markedSpans);
    var estHeight = estimateHeight ? estimateHeight(line) : 1;
    if (estHeight != line.height) { updateLineHeight(line, estHeight); }
  }

  // Detach a line from the document tree and its markers.
  function cleanUpLine(line) {
    line.parent = null;
    detachMarkedSpans(line);
  }

  // Convert a style as returned by a mode (either null, or a string
  // containing one or more styles) to a CSS style. This is cached,
  // and also looks for line-wide styles.
  var styleToClassCache = {}, styleToClassCacheWithMode = {};
  function interpretTokenStyle(style, options) {
    if (!style || /^\s*$/.test(style)) { return null }
    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
    return cache[style] ||
      (cache[style] = style.replace(/\S+/g, "cm-$&"))
  }

  // Render the DOM representation of the text of a line. Also builds
  // up a 'line map', which points at the DOM nodes that represent
  // specific stretches of text, and is used by the measuring code.
  // The returned object contains the DOM node, this map, and
  // information about line-wide styles that were set by the mode.
  function buildLineContent(cm, lineView) {
    // The padding-right forces the element to have a 'border', which
    // is needed on Webkit to be able to get line-level bounding
    // rectangles for it (in measureChar).
    var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
    var builder = {pre: eltP("pre", [content], "CodeMirror-line"), content: content,
                   col: 0, pos: 0, cm: cm,
                   trailingSpace: false,
                   splitSpaces: cm.getOption("lineWrapping")};
    lineView.measure = {};

    // Iterate over the logical lines that make up this visual line.
    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
      var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0);
      builder.pos = 0;
      builder.addToken = buildToken;
      // Optionally wire in some hacks into the token-rendering
      // algorithm, to deal with browser quirks.
      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction)))
        { builder.addToken = buildTokenBadBidi(builder.addToken, order); }
      builder.map = [];
      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
      if (line.styleClasses) {
        if (line.styleClasses.bgClass)
          { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || ""); }
        if (line.styleClasses.textClass)
          { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""); }
      }

      // Ensure at least a single node is present, for measuring.
      if (builder.map.length == 0)
        { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))); }

      // Store the map and a cache object for the current logical line
      if (i == 0) {
        lineView.measure.map = builder.map;
        lineView.measure.cache = {};
      } else {
  (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
        ;(lineView.measure.caches || (lineView.measure.caches = [])).push({});
      }
    }

    // See issue #2901
    if (webkit) {
      var last = builder.content.lastChild;
      if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
        { builder.content.className = "cm-tab-wrap-hack"; }
    }

    signal(cm, "renderLine", cm, lineView.line, builder.pre);
    if (builder.pre.className)
      { builder.textClass = joinClasses(builder.pre.className, builder.textClass || ""); }

    return builder
  }

  function defaultSpecialCharPlaceholder(ch) {
    var token = elt("span", "\u2022", "cm-invalidchar");
    token.title = "\\u" + ch.charCodeAt(0).toString(16);
    token.setAttribute("aria-label", token.title);
    return token
  }

  // Build up the DOM representation for a single token, and add it to
  // the line map. Takes care to render special characters separately.
  function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
    if (!text) { return }
    var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
    var special = builder.cm.state.specialChars, mustWrap = false;
    var content;
    if (!special.test(text)) {
      builder.col += text.length;
      content = document.createTextNode(displayText);
      builder.map.push(builder.pos, builder.pos + text.length, content);
      if (ie && ie_version < 9) { mustWrap = true; }
      builder.pos += text.length;
    } else {
      content = document.createDocumentFragment();
      var pos = 0;
      while (true) {
        special.lastIndex = pos;
        var m = special.exec(text);
        var skipped = m ? m.index - pos : text.length - pos;
        if (skipped) {
          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])); }
          else { content.appendChild(txt); }
          builder.map.push(builder.pos, builder.pos + skipped, txt);
          builder.col += skipped;
          builder.pos += skipped;
        }
        if (!m) { break }
        pos += skipped + 1;
        var txt$1 = (void 0);
        if (m[0] == "\t") {
          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
          txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
          txt$1.setAttribute("role", "presentation");
          txt$1.setAttribute("cm-text", "\t");
          builder.col += tabWidth;
        } else if (m[0] == "\r" || m[0] == "\n") {
          txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
          txt$1.setAttribute("cm-text", m[0]);
          builder.col += 1;
        } else {
          txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
          txt$1.setAttribute("cm-text", m[0]);
          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])); }
          else { content.appendChild(txt$1); }
          builder.col += 1;
        }
        builder.map.push(builder.pos, builder.pos + 1, txt$1);
        builder.pos++;
      }
    }
    builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
    if (style || startStyle || endStyle || mustWrap || css || attributes) {
      var fullStyle = style || "";
      if (startStyle) { fullStyle += startStyle; }
      if (endStyle) { fullStyle += endStyle; }
      var token = elt("span", [content], fullStyle, css);
      if (attributes) {
        for (var attr in attributes) { if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class")
          { token.setAttribute(attr, attributes[attr]); } }
      }
      return builder.content.appendChild(token)
    }
    builder.content.appendChild(content);
  }

  // Change some spaces to NBSP to prevent the browser from collapsing
  // trailing spaces at the end of a line when rendering text (issue #1362).
  function splitSpaces(text, trailingBefore) {
    if (text.length > 1 && !/  /.test(text)) { return text }
    var spaceBefore = trailingBefore, result = "";
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
        { ch = "\u00a0"; }
      result += ch;
      spaceBefore = ch == " ";
    }
    return result
  }

  // Work around nonsense dimensions being reported for stretches of
  // right-to-left text.
  function buildTokenBadBidi(inner, order) {
    return function (builder, text, style, startStyle, endStyle, css, attributes) {
      style = style ? style + " cm-force-border" : "cm-force-border";
      var start = builder.pos, end = start + text.length;
      for (;;) {
        // Find the part that overlaps with the start of this text
        var part = (void 0);
        for (var i = 0; i < order.length; i++) {
          part = order[i];
          if (part.to > start && part.from <= start) { break }
        }
        if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, css, attributes) }
        inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes);
        startStyle = null;
        text = text.slice(part.to - start);
        start = part.to;
      }
    }
  }

  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
    var widget = !ignoreWidget && marker.widgetNode;
    if (widget) { builder.map.push(builder.pos, builder.pos + size, widget); }
    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
      if (!widget)
        { widget = builder.content.appendChild(document.createElement("span")); }
      widget.setAttribute("cm-marker", marker.id);
    }
    if (widget) {
      builder.cm.display.input.setUneditable(widget);
      builder.content.appendChild(widget);
    }
    builder.pos += size;
    builder.trailingSpace = false;
  }

  // Outputs a number of spans to make up a line, taking highlighting
  // and marked text into account.
  function insertLineContent(line, builder, styles) {
    var spans = line.markedSpans, allText = line.text, at = 0;
    if (!spans) {
      for (var i$1 = 1; i$1 < styles.length; i$1+=2)
        { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)); }
      return
    }

    var len = allText.length, pos = 0, i = 1, text = "", style, css;
    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes;
    for (;;) {
      if (nextChange == pos) { // Update current marker set
        spanStyle = spanEndStyle = spanStartStyle = css = "";
        attributes = null;
        collapsed = null; nextChange = Infinity;
        var foundBookmarks = [], endStyles = (void 0);
        for (var j = 0; j < spans.length; ++j) {
          var sp = spans[j], m = sp.marker;
          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
            foundBookmarks.push(m);
          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
              nextChange = sp.to;
              spanEndStyle = "";
            }
            if (m.className) { spanStyle += " " + m.className; }
            if (m.css) { css = (css ? css + ";" : "") + m.css; }
            if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle; }
            if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to); }
            // support for the old title property
            // https://github.com/codemirror/CodeMirror/pull/5673
            if (m.title) { (attributes || (attributes = {})).title = m.title; }
            if (m.attributes) {
              for (var attr in m.attributes)
                { (attributes || (attributes = {}))[attr] = m.attributes[attr]; }
            }
            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
              { collapsed = sp; }
          } else if (sp.from > pos && nextChange > sp.from) {
            nextChange = sp.from;
          }
        }
        if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
          { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1]; } } }

        if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
          { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]); } }
        if (collapsed && (collapsed.from || 0) == pos) {
          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                             collapsed.marker, collapsed.from == null);
          if (collapsed.to == null) { return }
          if (collapsed.to == pos) { collapsed = false; }
        }
      }
      if (pos >= len) { break }

      var upto = Math.min(len, nextChange);
      while (true) {
        if (text) {
          var end = pos + text.length;
          if (!collapsed) {
            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes);
          }
          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
          pos = end;
          spanStartStyle = "";
        }
        text = allText.slice(at, at = styles[i++]);
        style = interpretTokenStyle(styles[i++], builder.cm.options);
      }
    }
  }


  // These objects are used to represent the visible (currently drawn)
  // part of the document. A LineView may correspond to multiple
  // logical lines, if those are connected by collapsed ranges.
  function LineView(doc, line, lineN) {
    // The starting line
    this.line = line;
    // Continuing lines, if any
    this.rest = visualLineContinued(line);
    // Number of logical lines in this visual line
    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
    this.node = this.text = null;
    this.hidden = lineIsHidden(doc, line);
  }

  // Create a range of LineView objects for the given lines.
  function buildViewArray(cm, from, to) {
    var array = [], nextPos;
    for (var pos = from; pos < to; pos = nextPos) {
      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
      nextPos = pos + view.size;
      array.push(view);
    }
    return array
  }

  var operationGroup = null;

  function pushOperation(op) {
    if (operationGroup) {
      operationGroup.ops.push(op);
    } else {
      op.ownsGroup = operationGroup = {
        ops: [op],
        delayedCallbacks: []
      };
    }
  }

  function fireCallbacksForOps(group) {
    // Calls delayed callbacks and cursorActivity handlers until no
    // new ones appear
    var callbacks = group.delayedCallbacks, i = 0;
    do {
      for (; i < callbacks.length; i++)
        { callbacks[i].call(null); }
      for (var j = 0; j < group.ops.length; j++) {
        var op = group.ops[j];
        if (op.cursorActivityHandlers)
          { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
            { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm); } }
      }
    } while (i < callbacks.length)
  }

  function finishOperation(op, endCb) {
    var group = op.ownsGroup;
    if (!group) { return }

    try { fireCallbacksForOps(group); }
    finally {
      operationGroup = null;
      endCb(group);
    }
  }

  var orphanDelayedCallbacks = null;

  // Often, we want to signal events at a point where we are in the
  // middle of some work, but don't want the handler to start calling
  // other methods on the editor, which might be in an inconsistent
  // state or simply not expect any other events to happen.
  // signalLater looks whether there are any handlers, and schedules
  // them to be executed when the last operation ends, or, if no
  // operation is active, when a timeout fires.
  function signalLater(emitter, type /*, values...*/) {
    var arr = getHandlers(emitter, type);
    if (!arr.length) { return }
    var args = Array.prototype.slice.call(arguments, 2), list;
    if (operationGroup) {
      list = operationGroup.delayedCallbacks;
    } else if (orphanDelayedCallbacks) {
      list = orphanDelayedCallbacks;
    } else {
      list = orphanDelayedCallbacks = [];
      setTimeout(fireOrphanDelayed, 0);
    }
    var loop = function ( i ) {
      list.push(function () { return arr[i].apply(null, args); });
    };

    for (var i = 0; i < arr.length; ++i)
      loop( i );
  }

  function fireOrphanDelayed() {
    var delayed = orphanDelayedCallbacks;
    orphanDelayedCallbacks = null;
    for (var i = 0; i < delayed.length; ++i) { delayed[i](); }
  }

  // When an aspect of a line changes, a string is added to
  // lineView.changes. This updates the relevant part of the line's
  // DOM structure.
  function updateLineForChanges(cm, lineView, lineN, dims) {
    for (var j = 0; j < lineView.changes.length; j++) {
      var type = lineView.changes[j];
      if (type == "text") { updateLineText(cm, lineView); }
      else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims); }
      else if (type == "class") { updateLineClasses(cm, lineView); }
      else if (type == "widget") { updateLineWidgets(cm, lineView, dims); }
    }
    lineView.changes = null;
  }

  // Lines with gutter elements, widgets or a background class need to
  // be wrapped, and have the extra elements added to the wrapper div
  function ensureLineWrapped(lineView) {
    if (lineView.node == lineView.text) {
      lineView.node = elt("div", null, null, "position: relative");
      if (lineView.text.parentNode)
        { lineView.text.parentNode.replaceChild(lineView.node, lineView.text); }
      lineView.node.appendChild(lineView.text);
      if (ie && ie_version < 8) { lineView.node.style.zIndex = 2; }
    }
    return lineView.node
  }

  function updateLineBackground(cm, lineView) {
    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
    if (cls) { cls += " CodeMirror-linebackground"; }
    if (lineView.background) {
      if (cls) { lineView.background.className = cls; }
      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
    } else if (cls) {
      var wrap = ensureLineWrapped(lineView);
      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
      cm.display.input.setUneditable(lineView.background);
    }
  }

  // Wrapper around buildLineContent which will reuse the structure
  // in display.externalMeasured when possible.
  function getLineContent(cm, lineView) {
    var ext = cm.display.externalMeasured;
    if (ext && ext.line == lineView.line) {
      cm.display.externalMeasured = null;
      lineView.measure = ext.measure;
      return ext.built
    }
    return buildLineContent(cm, lineView)
  }

  // Redraw the line's text. Interacts with the background and text
  // classes because the mode may output tokens that influence these
  // classes.
  function updateLineText(cm, lineView) {
    var cls = lineView.text.className;
    var built = getLineContent(cm, lineView);
    if (lineView.text == lineView.node) { lineView.node = built.pre; }
    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
    lineView.text = built.pre;
    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
      lineView.bgClass = built.bgClass;
      lineView.textClass = built.textClass;
      updateLineClasses(cm, lineView);
    } else if (cls) {
      lineView.text.className = cls;
    }
  }

  function updateLineClasses(cm, lineView) {
    updateLineBackground(cm, lineView);
    if (lineView.line.wrapClass)
      { ensureLineWrapped(lineView).className = lineView.line.wrapClass; }
    else if (lineView.node != lineView.text)
      { lineView.node.className = ""; }
    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
    lineView.text.className = textClass || "";
  }

  function updateLineGutter(cm, lineView, lineN, dims) {
    if (lineView.gutter) {
      lineView.node.removeChild(lineView.gutter);
      lineView.gutter = null;
    }
    if (lineView.gutterBackground) {
      lineView.node.removeChild(lineView.gutterBackground);
      lineView.gutterBackground = null;
    }
    if (lineView.line.gutterClass) {
      var wrap = ensureLineWrapped(lineView);
      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                      ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"));
      cm.display.input.setUneditable(lineView.gutterBackground);
      wrap.insertBefore(lineView.gutterBackground, lineView.text);
    }
    var markers = lineView.line.gutterMarkers;
    if (cm.options.lineNumbers || markers) {
      var wrap$1 = ensureLineWrapped(lineView);
      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"));
      gutterWrap.setAttribute("aria-hidden", "true");
      cm.display.input.setUneditable(gutterWrap);
      wrap$1.insertBefore(gutterWrap, lineView.text);
      if (lineView.line.gutterClass)
        { gutterWrap.className += " " + lineView.line.gutterClass; }
      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
        { lineView.lineNumber = gutterWrap.appendChild(
          elt("div", lineNumberFor(cm.options, lineN),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))); }
      if (markers) { for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
        var id = cm.display.gutterSpecs[k].className, found = markers.hasOwnProperty(id) && markers[id];
        if (found)
          { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
                                     ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))); }
      } }
    }
  }

  function updateLineWidgets(cm, lineView, dims) {
    if (lineView.alignable) { lineView.alignable = null; }
    var isWidget = classTest("CodeMirror-linewidget");
    for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
      next = node.nextSibling;
      if (isWidget.test(node.className)) { lineView.node.removeChild(node); }
    }
    insertLineWidgets(cm, lineView, dims);
  }

  // Build a line's DOM representation from scratch
  function buildLineElement(cm, lineView, lineN, dims) {
    var built = getLineContent(cm, lineView);
    lineView.text = lineView.node = built.pre;
    if (built.bgClass) { lineView.bgClass = built.bgClass; }
    if (built.textClass) { lineView.textClass = built.textClass; }

    updateLineClasses(cm, lineView);
    updateLineGutter(cm, lineView, lineN, dims);
    insertLineWidgets(cm, lineView, dims);
    return lineView.node
  }

  // A lineView may contain multiple logical lines (when merged by
  // collapsed spans). The widgets for all of them need to be drawn.
  function insertLineWidgets(cm, lineView, dims) {
    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
      { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false); } }
  }

  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
    if (!line.widgets) { return }
    var wrap = ensureLineWrapped(lineView);
    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""));
      if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true"); }
      positionLineWidget(widget, node, lineView, dims);
      cm.display.input.setUneditable(node);
      if (allowAbove && widget.above)
        { wrap.insertBefore(node, lineView.gutter || lineView.text); }
      else
        { wrap.appendChild(node); }
      signalLater(widget, "redraw");
    }
  }

  function positionLineWidget(widget, node, lineView, dims) {
    if (widget.noHScroll) {
  (lineView.alignable || (lineView.alignable = [])).push(node);
      var width = dims.wrapperWidth;
      node.style.left = dims.fixedPos + "px";
      if (!widget.coverGutter) {
        width -= dims.gutterTotalWidth;
        node.style.paddingLeft = dims.gutterTotalWidth + "px";
      }
      node.style.width = width + "px";
    }
    if (widget.coverGutter) {
      node.style.zIndex = 5;
      node.style.position = "relative";
      if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px"; }
    }
  }

  function widgetHeight(widget) {
    if (widget.height != null) { return widget.height }
    var cm = widget.doc.cm;
    if (!cm) { return 0 }
    if (!contains(document.body, widget.node)) {
      var parentStyle = "position: relative;";
      if (widget.coverGutter)
        { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"; }
      if (widget.noHScroll)
        { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"; }
      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
    }
    return widget.height = widget.node.parentNode.offsetHeight
  }

  // Return true when the given mouse event happened in a widget
  function eventInWidget(display, e) {
    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
          (n.parentNode == display.sizer && n != display.mover))
        { return true }
    }
  }

  // POSITION MEASUREMENT

  function paddingTop(display) {return display.lineSpace.offsetTop}
  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
  function paddingH(display) {
    if (display.cachedPaddingH) { return display.cachedPaddingH }
    var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
    if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data; }
    return data
  }

  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
  function displayWidth(cm) {
    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
  }
  function displayHeight(cm) {
    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
  }

  // Ensure the lineView.wrapping.heights array is populated. This is
  // an array of bottom offsets for the lines that make up a drawn
  // line. When lineWrapping is on, there might be more than one
  // height.
  function ensureLineHeights(cm, lineView, rect) {
    var wrapping = cm.options.lineWrapping;
    var curWidth = wrapping && displayWidth(cm);
    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
      var heights = lineView.measure.heights = [];
      if (wrapping) {
        lineView.measure.width = curWidth;
        var rects = lineView.text.firstChild.getClientRects();
        for (var i = 0; i < rects.length - 1; i++) {
          var cur = rects[i], next = rects[i + 1];
          if (Math.abs(cur.bottom - next.bottom) > 2)
            { heights.push((cur.bottom + next.top) / 2 - rect.top); }
        }
      }
      heights.push(rect.bottom - rect.top);
    }
  }

  // Find a line map (mapping character offsets to text nodes) and a
  // measurement cache for the given line number. (A line view might
  // contain multiple lines when collapsed ranges are present.)
  function mapFromLineView(lineView, line, lineN) {
    if (lineView.line == line)
      { return {map: lineView.measure.map, cache: lineView.measure.cache} }
    if (lineView.rest) {
      for (var i = 0; i < lineView.rest.length; i++)
        { if (lineView.rest[i] == line)
          { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
      for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
        { if (lineNo(lineView.rest[i$1]) > lineN)
          { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
    }
  }

  // Render a line into the hidden node display.externalMeasured. Used
  // when measurement is needed for a line that's not in the viewport.
  function updateExternalMeasurement(cm, line) {
    line = visualLine(line);
    var lineN = lineNo(line);
    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
    view.lineN = lineN;
    var built = view.built = buildLineContent(cm, view);
    view.text = built.pre;
    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
    return view
  }

  // Get a {top, bottom, left, right} box (in line-local coordinates)
  // for a given character.
  function measureChar(cm, line, ch, bias) {
    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
  }

  // Find a line view that corresponds to the given line number.
  function findViewForLine(cm, lineN) {
    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
      { return cm.display.view[findViewIndex(cm, lineN)] }
    var ext = cm.display.externalMeasured;
    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
      { return ext }
  }

  // Measurement can be split in two steps, the set-up work that
  // applies to the whole line, and the measurement of the actual
  // character. Functions like coordsChar, that need to do a lot of
  // measurements in a row, can thus ensure that the set-up work is
  // only done once.
  function prepareMeasureForLine(cm, line) {
    var lineN = lineNo(line);
    var view = findViewForLine(cm, lineN);
    if (view && !view.text) {
      view = null;
    } else if (view && view.changes) {
      updateLineForChanges(cm, view, lineN, getDimensions(cm));
      cm.curOp.forceUpdate = true;
    }
    if (!view)
      { view = updateExternalMeasurement(cm, line); }

    var info = mapFromLineView(view, line, lineN);
    return {
      line: line, view: view, rect: null,
      map: info.map, cache: info.cache, before: info.before,
      hasHeights: false
    }
  }

  // Given a prepared measurement object, measures the position of an
  // actual character (or fetches it from the cache).
  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
    if (prepared.before) { ch = -1; }
    var key = ch + (bias || ""), found;
    if (prepared.cache.hasOwnProperty(key)) {
      found = prepared.cache[key];
    } else {
      if (!prepared.rect)
        { prepared.rect = prepared.view.text.getBoundingClientRect(); }
      if (!prepared.hasHeights) {
        ensureLineHeights(cm, prepared.view, prepared.rect);
        prepared.hasHeights = true;
      }
      found = measureCharInner(cm, prepared, ch, bias);
      if (!found.bogus) { prepared.cache[key] = found; }
    }
    return {left: found.left, right: found.right,
            top: varHeight ? found.rtop : found.top,
            bottom: varHeight ? found.rbottom : found.bottom}
  }

  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

  function nodeAndOffsetInLineMap(map, ch, bias) {
    var node, start, end, collapse, mStart, mEnd;
    // First, search the line map for the text node corresponding to,
    // or closest to, the target character.
    for (var i = 0; i < map.length; i += 3) {
      mStart = map[i];
      mEnd = map[i + 1];
      if (ch < mStart) {
        start = 0; end = 1;
        collapse = "left";
      } else if (ch < mEnd) {
        start = ch - mStart;
        end = start + 1;
      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
        end = mEnd - mStart;
        start = end - 1;
        if (ch >= mEnd) { collapse = "right"; }
      }
      if (start != null) {
        node = map[i + 2];
        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
          { collapse = bias; }
        if (bias == "left" && start == 0)
          { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
            node = map[(i -= 3) + 2];
            collapse = "left";
          } }
        if (bias == "right" && start == mEnd - mStart)
          { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
            node = map[(i += 3) + 2];
            collapse = "right";
          } }
        break
      }
    }
    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
  }

  function getUsefulRect(rects, bias) {
    var rect = nullRect;
    if (bias == "left") { for (var i = 0; i < rects.length; i++) {
      if ((rect = rects[i]).left != rect.right) { break }
    } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
      if ((rect = rects[i$1]).left != rect.right) { break }
    } }
    return rect
  }

  function measureCharInner(cm, prepared, ch, bias) {
    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

    var rect;
    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
      for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start; }
        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end; }
        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
          { rect = node.parentNode.getBoundingClientRect(); }
        else
          { rect = getUsefulRect(range(node, start, end).getClientRects(), bias); }
        if (rect.left || rect.right || start == 0) { break }
        end = start;
        start = start - 1;
        collapse = "right";
      }
      if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect); }
    } else { // If it is a widget, simply get the box for the whole widget.
      if (start > 0) { collapse = bias = "right"; }
      var rects;
      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
        { rect = rects[bias == "right" ? rects.length - 1 : 0]; }
      else
        { rect = node.getBoundingClientRect(); }
    }
    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
      var rSpan = node.parentNode.getClientRects()[0];
      if (rSpan)
        { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom}; }
      else
        { rect = nullRect; }
    }

    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
    var mid = (rtop + rbot) / 2;
    var heights = prepared.view.measure.heights;
    var i = 0;
    for (; i < heights.length - 1; i++)
      { if (mid < heights[i]) { break } }
    var top = i ? heights[i - 1] : 0, bot = heights[i];
    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                  top: top, bottom: bot};
    if (!rect.left && !rect.right) { result.bogus = true; }
    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

    return result
  }

  // Work around problem with bounding client rects on ranges being
  // returned incorrectly when zoomed on IE10 and below.
  function maybeUpdateRectForZooming(measure, rect) {
    if (!window.screen || screen.logicalXDPI == null ||
        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
      { return rect }
    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
    return {left: rect.left * scaleX, right: rect.right * scaleX,
            top: rect.top * scaleY, bottom: rect.bottom * scaleY}
  }

  function clearLineMeasurementCacheFor(lineView) {
    if (lineView.measure) {
      lineView.measure.cache = {};
      lineView.measure.heights = null;
      if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
        { lineView.measure.caches[i] = {}; } }
    }
  }

  function clearLineMeasurementCache(cm) {
    cm.display.externalMeasure = null;
    removeChildren(cm.display.lineMeasure);
    for (var i = 0; i < cm.display.view.length; i++)
      { clearLineMeasurementCacheFor(cm.display.view[i]); }
  }

  function clearCaches(cm) {
    clearLineMeasurementCache(cm);
    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
    if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true; }
    cm.display.lineNumChars = null;
  }

  function pageScrollX(doc) {
    // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
    // which causes page_Offset and bounding client rects to use
    // different reference viewports and invalidate our calculations.
    if (chrome && android) { return -(doc.body.getBoundingClientRect().left - parseInt(getComputedStyle(doc.body).marginLeft)) }
    return doc.defaultView.pageXOffset || (doc.documentElement || doc.body).scrollLeft
  }
  function pageScrollY(doc) {
    if (chrome && android) { return -(doc.body.getBoundingClientRect().top - parseInt(getComputedStyle(doc.body).marginTop)) }
    return doc.defaultView.pageYOffset || (doc.documentElement || doc.body).scrollTop
  }

  function widgetTopHeight(lineObj) {
    var ref = visualLine(lineObj);
    var widgets = ref.widgets;
    var height = 0;
    if (widgets) { for (var i = 0; i < widgets.length; ++i) { if (widgets[i].above)
      { height += widgetHeight(widgets[i]); } } }
    return height
  }

  // Converts a {top, bottom, left, right} box from line-local
  // coordinates into another coordinate system. Context may be one of
  // "line", "div" (display.lineDiv), "local"./null (editor), "window",
  // or "page".
  function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
    if (!includeWidgets) {
      var height = widgetTopHeight(lineObj);
      rect.top += height; rect.bottom += height;
    }
    if (context == "line") { return rect }
    if (!context) { context = "local"; }
    var yOff = heightAtLine(lineObj);
    if (context == "local") { yOff += paddingTop(cm.display); }
    else { yOff -= cm.display.viewOffset; }
    if (context == "page" || context == "window") {
      var lOff = cm.display.lineSpace.getBoundingClientRect();
      yOff += lOff.top + (context == "window" ? 0 : pageScrollY(doc(cm)));
      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX(doc(cm)));
      rect.left += xOff; rect.right += xOff;
    }
    rect.top += yOff; rect.bottom += yOff;
    return rect
  }

  // Coverts a box from "div" coords to another coordinate system.
  // Context may be "window", "page", "div", or "local"./null.
  function fromCoordSystem(cm, coords, context) {
    if (context == "div") { return coords }
    var left = coords.left, top = coords.top;
    // First move into "page" coordinate system
    if (context == "page") {
      left -= pageScrollX(doc(cm));
      top -= pageScrollY(doc(cm));
    } else if (context == "local" || !context) {
      var localBox = cm.display.sizer.getBoundingClientRect();
      left += localBox.left;
      top += localBox.top;
    }

    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
  }

  function charCoords(cm, pos, context, lineObj, bias) {
    if (!lineObj) { lineObj = getLine(cm.doc, pos.line); }
    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
  }

  // Returns a box for a given cursor position, which may have an
  // 'other' property containing the position of the secondary cursor
  // on a bidi boundary.
  // A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
  // and after `char - 1` in writing order of `char - 1`
  // A cursor Pos(line, char, "after") is on the same visual line as `char`
  // and before `char` in writing order of `char`
  // Examples (upper-case letters are RTL, lower-case are LTR):
  //     Pos(0, 1, ...)
  //     before   after
  // ab     a|b     a|b
  // aB     a|B     aB|
  // Ab     |Ab     A|b
  // AB     B|A     B|A
  // Every position after the last character on a line is considered to stick
  // to the last character on the line.
  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
    lineObj = lineObj || getLine(cm.doc, pos.line);
    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
    function get(ch, right) {
      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
      if (right) { m.left = m.right; } else { m.right = m.left; }
      return intoCoordSystem(cm, lineObj, m, context)
    }
    var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
    if (ch >= lineObj.text.length) {
      ch = lineObj.text.length;
      sticky = "before";
    } else if (ch <= 0) {
      ch = 0;
      sticky = "after";
    }
    if (!order) { return get(sticky == "before" ? ch - 1 : ch, sticky == "before") }

    function getBidi(ch, partPos, invert) {
      var part = order[partPos], right = part.level == 1;
      return get(invert ? ch - 1 : ch, right != invert)
    }
    var partPos = getBidiPartAt(order, ch, sticky);
    var other = bidiOther;
    var val = getBidi(ch, partPos, sticky == "before");
    if (other != null) { val.other = getBidi(ch, other, sticky != "before"); }
    return val
  }

  // Used to cheaply estimate the coordinates for a position. Used for
  // intermediate scroll updates.
  function estimateCoords(cm, pos) {
    var left = 0;
    pos = clipPos(cm.doc, pos);
    if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch; }
    var lineObj = getLine(cm.doc, pos.line);
    var top = heightAtLine(lineObj) + paddingTop(cm.display);
    return {left: left, right: left, top: top, bottom: top + lineObj.height}
  }

  // Positions returned by coordsChar contain some extra information.
  // xRel is the relative x position of the input coordinates compared
  // to the found position (so xRel > 0 means the coordinates are to
  // the right of the character position, for example). When outside
  // is true, that means the coordinates lie outside the line's
  // vertical range.
  function PosWithInfo(line, ch, sticky, outside, xRel) {
    var pos = Pos(line, ch, sticky);
    pos.xRel = xRel;
    if (outside) { pos.outside = outside; }
    return pos
  }

  // Compute the character position closest to the given coordinates.
  // Input must be lineSpace-local ("div" coordinate system).
  function coordsChar(cm, x, y) {
    var doc = cm.doc;
    y += cm.display.viewOffset;
    if (y < 0) { return PosWithInfo(doc.first, 0, null, -1, -1) }
    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
    if (lineN > last)
      { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, 1, 1) }
    if (x < 0) { x = 0; }

    var lineObj = getLine(doc, lineN);
    for (;;) {
      var found = coordsCharInner(cm, lineObj, lineN, x, y);
      var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));
      if (!collapsed) { return found }
      var rangeEnd = collapsed.find(1);
      if (rangeEnd.line == lineN) { return rangeEnd }
      lineObj = getLine(doc, lineN = rangeEnd.line);
    }
  }

  function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
    y -= widgetTopHeight(lineObj);
    var end = lineObj.text.length;
    var begin = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y; }, end, 0);
    end = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch).top > y; }, begin, end);
    return {begin: begin, end: end}
  }

  function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
    var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
    return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
  }

  // Returns true if the given side of a box is after the given
  // coordinates, in top-to-bottom, left-to-right order.
  function boxIsAfter(box, x, y, left) {
    return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x
  }

  function coordsCharInner(cm, lineObj, lineNo, x, y) {
    // Move y into line-local coordinate space
    y -= heightAtLine(lineObj);
    var preparedMeasure = prepareMeasureForLine(cm, lineObj);
    // When directly calling `measureCharPrepared`, we have to adjust
    // for the widgets at this line.
    var widgetHeight = widgetTopHeight(lineObj);
    var begin = 0, end = lineObj.text.length, ltr = true;

    var order = getOrder(lineObj, cm.doc.direction);
    // If the line isn't plain left-to-right text, first figure out
    // which bidi section the coordinates fall into.
    if (order) {
      var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)
                   (cm, lineObj, lineNo, preparedMeasure, order, x, y);
      ltr = part.level != 1;
      // The awkward -1 offsets are needed because findFirst (called
      // on these below) will treat its first bound as inclusive,
      // second as exclusive, but we want to actually address the
      // characters in the part's range
      begin = ltr ? part.from : part.to - 1;
      end = ltr ? part.to : part.from - 1;
    }

    // A binary search to find the first character whose bounding box
    // starts after the coordinates. If we run across any whose box wrap
    // the coordinates, store that.
    var chAround = null, boxAround = null;
    var ch = findFirst(function (ch) {
      var box = measureCharPrepared(cm, preparedMeasure, ch);
      box.top += widgetHeight; box.bottom += widgetHeight;
      if (!boxIsAfter(box, x, y, false)) { return false }
      if (box.top <= y && box.left <= x) {
        chAround = ch;
        boxAround = box;
      }
      return true
    }, begin, end);

    var baseX, sticky, outside = false;
    // If a box around the coordinates was found, use that
    if (boxAround) {
      // Distinguish coordinates nearer to the left or right side of the box
      var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
      ch = chAround + (atStart ? 0 : 1);
      sticky = atStart ? "after" : "before";
      baseX = atLeft ? boxAround.left : boxAround.right;
    } else {
      // (Adjust for extended bound, if necessary.)
      if (!ltr && (ch == end || ch == begin)) { ch++; }
      // To determine which side to associate with, get the box to the
      // left of the character and compare it's vertical position to the
      // coordinates
      sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" :
        (measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight <= y) == ltr ?
        "after" : "before";
      // Now get accurate coordinates for this place, in order to get a
      // base X position
      var coords = cursorCoords(cm, Pos(lineNo, ch, sticky), "line", lineObj, preparedMeasure);
      baseX = coords.left;
      outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
    }

    ch = skipExtendingChars(lineObj.text, ch, 1);
    return PosWithInfo(lineNo, ch, sticky, outside, x - baseX)
  }

  function coordsBidiPart(cm, lineObj, lineNo, preparedMeasure, order, x, y) {
    // Bidi parts are sorted left-to-right, and in a non-line-wrapping
    // situation, we can take this ordering to correspond to the visual
    // ordering. This finds the first part whose end is after the given
    // coordinates.
    var index = findFirst(function (i) {
      var part = order[i], ltr = part.level != 1;
      return boxIsAfter(cursorCoords(cm, Pos(lineNo, ltr ? part.to : part.from, ltr ? "before" : "after"),
                                     "line", lineObj, preparedMeasure), x, y, true)
    }, 0, order.length - 1);
    var part = order[index];
    // If this isn't the first part, the part's start is also after
    // the coordinates, and the coordinates aren't on the same line as
    // that start, move one part back.
    if (index > 0) {
      var ltr = part.level != 1;
      var start = cursorCoords(cm, Pos(lineNo, ltr ? part.from : part.to, ltr ? "after" : "before"),
                               "line", lineObj, preparedMeasure);
      if (boxIsAfter(start, x, y, true) && start.top > y)
        { part = order[index - 1]; }
    }
    return part
  }

  function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
    // In a wrapped line, rtl text on wrapping boundaries can do things
    // that don't correspond to the ordering in our `order` array at
    // all, so a binary search doesn't work, and we want to return a
    // part that only spans one line so that the binary search in
    // coordsCharInner is safe. As such, we first find the extent of the
    // wrapped line, and then do a flat search in which we discard any
    // spans that aren't on the line.
    var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
    var begin = ref.begin;
    var end = ref.end;
    if (/\s/.test(lineObj.text.charAt(end - 1))) { end--; }
    var part = null, closestDist = null;
    for (var i = 0; i < order.length; i++) {
      var p = order[i];
      if (p.from >= end || p.to <= begin) { continue }
      var ltr = p.level != 1;
      var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
      // Weigh against spans ending before this, so that they are only
      // picked if nothing ends after
      var dist = endX < x ? x - endX + 1e9 : endX - x;
      if (!part || closestDist > dist) {
        part = p;
        closestDist = dist;
      }
    }
    if (!part) { part = order[order.length - 1]; }
    // Clip the part to the wrapped line.
    if (part.from < begin) { part = {from: begin, to: part.to, level: part.level}; }
    if (part.to > end) { part = {from: part.from, to: end, level: part.level}; }
    return part
  }

  var measureText;
  // Compute the default text height.
  function textHeight(display) {
    if (display.cachedTextHeight != null) { return display.cachedTextHeight }
    if (measureText == null) {
      measureText = elt("pre", null, "CodeMirror-line-like");
      // Measure a bunch of lines, for browsers that compute
      // fractional heights.
      for (var i = 0; i < 49; ++i) {
        measureText.appendChild(document.createTextNode("x"));
        measureText.appendChild(elt("br"));
      }
      measureText.appendChild(document.createTextNode("x"));
    }
    removeChildrenAndAdd(display.measure, measureText);
    var height = measureText.offsetHeight / 50;
    if (height > 3) { display.cachedTextHeight = height; }
    removeChildren(display.measure);
    return height || 1
  }

  // Compute the default character width.
  function charWidth(display) {
    if (display.cachedCharWidth != null) { return display.cachedCharWidth }
    var anchor = elt("span", "xxxxxxxxxx");
    var pre = elt("pre", [anchor], "CodeMirror-line-like");
    removeChildrenAndAdd(display.measure, pre);
    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
    if (width > 2) { display.cachedCharWidth = width; }
    return width || 10
  }

  // Do a bulk-read of the DOM positions and sizes needed to draw the
  // view, so that we don't interleave reading and writing to the DOM.
  function getDimensions(cm) {
    var d = cm.display, left = {}, width = {};
    var gutterLeft = d.gutters.clientLeft;
    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
      var id = cm.display.gutterSpecs[i].className;
      left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
      width[id] = n.clientWidth;
    }
    return {fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth}
  }

  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
  // but using getBoundingClientRect to get a sub-pixel-accurate
  // result.
  function compensateForHScroll(display) {
    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
  }

  // Returns a function that estimates the height of a line, to use as
  // first approximation until the line becomes visible (and is thus
  // properly measurable).
  function estimateHeight(cm) {
    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
    return function (line) {
      if (lineIsHidden(cm.doc, line)) { return 0 }

      var widgetsHeight = 0;
      if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
        if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height; }
      } }

      if (wrapping)
        { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
      else
        { return widgetsHeight + th }
    }
  }

  function estimateLineHeights(cm) {
    var doc = cm.doc, est = estimateHeight(cm);
    doc.iter(function (line) {
      var estHeight = est(line);
      if (estHeight != line.height) { updateLineHeight(line, estHeight); }
    });
  }

  // Given a mouse event, find the corresponding position. If liberal
  // is false, it checks whether a gutter or scrollbar was clicked,
  // and returns null if it was. forRect is used by rectangular
  // selections, and tries to estimate a character position even for
  // coordinates beyond the right of the text.
  function posFromMouse(cm, e, liberal, forRect) {
    var display = cm.display;
    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

    var x, y, space = display.lineSpace.getBoundingClientRect();
    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
    try { x = e.clientX - space.left; y = e.clientY - space.top; }
    catch (e$1) { return null }
    var coords = coordsChar(cm, x, y), line;
    if (forRect && coords.xRel > 0 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
    }
    return coords
  }

  // Find the view element corresponding to a given line. Return null
  // when the line isn't visible.
  function findViewIndex(cm, n) {
    if (n >= cm.display.viewTo) { return null }
    n -= cm.display.viewFrom;
    if (n < 0) { return null }
    var view = cm.display.view;
    for (var i = 0; i < view.length; i++) {
      n -= view[i].size;
      if (n < 0) { return i }
    }
  }

  // Updates the display.view data structure for a given change to the
  // document. From and to are in pre-change coordinates. Lendiff is
  // the amount of lines added or subtracted by the change. This is
  // used for changes that span multiple lines, or change the way
  // lines are divided into visual lines. regLineChange (below)
  // registers single-line changes.
  function regChange(cm, from, to, lendiff) {
    if (from == null) { from = cm.doc.first; }
    if (to == null) { to = cm.doc.first + cm.doc.size; }
    if (!lendiff) { lendiff = 0; }

    var display = cm.display;
    if (lendiff && to < display.viewTo &&
        (display.updateLineNumbers == null || display.updateLineNumbers > from))
      { display.updateLineNumbers = from; }

    cm.curOp.viewChanged = true;

    if (from >= display.viewTo) { // Change after
      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
        { resetView(cm); }
    } else if (to <= display.viewFrom) { // Change before
      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
        resetView(cm);
      } else {
        display.viewFrom += lendiff;
        display.viewTo += lendiff;
      }
    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
      resetView(cm);
    } else if (from <= display.viewFrom) { // Top overlap
      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cut) {
        display.view = display.view.slice(cut.index);
        display.viewFrom = cut.lineN;
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    } else if (to >= display.viewTo) { // Bottom overlap
      var cut$1 = viewCuttingPoint(cm, from, from, -1);
      if (cut$1) {
        display.view = display.view.slice(0, cut$1.index);
        display.viewTo = cut$1.lineN;
      } else {
        resetView(cm);
      }
    } else { // Gap in the middle
      var cutTop = viewCuttingPoint(cm, from, from, -1);
      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cutTop && cutBot) {
        display.view = display.view.slice(0, cutTop.index)
          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
          .concat(display.view.slice(cutBot.index));
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    }

    var ext = display.externalMeasured;
    if (ext) {
      if (to < ext.lineN)
        { ext.lineN += lendiff; }
      else if (from < ext.lineN + ext.size)
        { display.externalMeasured = null; }
    }
  }

  // Register a change to a single line. Type must be one of "text",
  // "gutter", "class", "widget"
  function regLineChange(cm, line, type) {
    cm.curOp.viewChanged = true;
    var display = cm.display, ext = cm.display.externalMeasured;
    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
      { display.externalMeasured = null; }

    if (line < display.viewFrom || line >= display.viewTo) { return }
    var lineView = display.view[findViewIndex(cm, line)];
    if (lineView.node == null) { return }
    var arr = lineView.changes || (lineView.changes = []);
    if (indexOf(arr, type) == -1) { arr.push(type); }
  }

  // Clear the view.
  function resetView(cm) {
    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
    cm.display.view = [];
    cm.display.viewOffset = 0;
  }

  function viewCuttingPoint(cm, oldN, newN, dir) {
    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
      { return {index: index, lineN: newN} }
    var n = cm.display.viewFrom;
    for (var i = 0; i < index; i++)
      { n += view[i].size; }
    if (n != oldN) {
      if (dir > 0) {
        if (index == view.length - 1) { return null }
        diff = (n + view[index].size) - oldN;
        index++;
      } else {
        diff = n - oldN;
      }
      oldN += diff; newN += diff;
    }
    while (visualLineNo(cm.doc, newN) != newN) {
      if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
      index += dir;
    }
    return {index: index, lineN: newN}
  }

  // Force the view to cover a given range, adding empty view element
  // or clipping off existing ones as needed.
  function adjustView(cm, from, to) {
    var display = cm.display, view = display.view;
    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
      display.view = buildViewArray(cm, from, to);
      display.viewFrom = from;
    } else {
      if (display.viewFrom > from)
        { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view); }
      else if (display.viewFrom < from)
        { display.view = display.view.slice(findViewIndex(cm, from)); }
      display.viewFrom = from;
      if (display.viewTo < to)
        { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)); }
      else if (display.viewTo > to)
        { display.view = display.view.slice(0, findViewIndex(cm, to)); }
    }
    display.viewTo = to;
  }

  // Count the number of lines in the view whose DOM representation is
  // out of date (or nonexistent).
  function countDirtyView(cm) {
    var view = cm.display.view, dirty = 0;
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty; }
    }
    return dirty
  }

  function updateSelection(cm) {
    cm.display.input.showSelection(cm.display.input.prepareSelection());
  }

  function prepareSelection(cm, primary) {
    if ( primary === void 0 ) primary = true;

    var doc = cm.doc, result = {};
    var curFragment = result.cursors = document.createDocumentFragment();
    var selFragment = result.selection = document.createDocumentFragment();

    var customCursor = cm.options.$customCursor;
    if (customCursor) { primary = true; }
    for (var i = 0; i < doc.sel.ranges.length; i++) {
      if (!primary && i == doc.sel.primIndex) { continue }
      var range = doc.sel.ranges[i];
      if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
      var collapsed = range.empty();
      if (customCursor) {
        var head = customCursor(cm, range);
        if (head) { drawSelectionCursor(cm, head, curFragment); }
      } else if (collapsed || cm.options.showCursorWhenSelecting) {
        drawSelectionCursor(cm, range.head, curFragment);
      }
      if (!collapsed)
        { drawSelectionRange(cm, range, selFragment); }
    }
    return result
  }

  // Draws a cursor for the given range
  function drawSelectionCursor(cm, head, output) {
    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
    cursor.style.left = pos.left + "px";
    cursor.style.top = pos.top + "px";
    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

    if (/\bcm-fat-cursor\b/.test(cm.getWrapperElement().className)) {
      var charPos = charCoords(cm, head, "div", null, null);
      var width = charPos.right - charPos.left;
      cursor.style.width = (width > 0 ? width : cm.defaultCharWidth()) + "px";
    }

    if (pos.other) {
      // Secondary cursor, shown when on a 'jump' in bi-directional text
      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
      otherCursor.style.display = "";
      otherCursor.style.left = pos.other.left + "px";
      otherCursor.style.top = pos.other.top + "px";
      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
    }
  }

  function cmpCoords(a, b) { return a.top - b.top || a.left - b.left }

  // Draws the given range as a highlighted selection
  function drawSelectionRange(cm, range, output) {
    var display = cm.display, doc = cm.doc;
    var fragment = document.createDocumentFragment();
    var padding = paddingH(cm.display), leftSide = padding.left;
    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
    var docLTR = doc.direction == "ltr";

    function add(left, top, width, bottom) {
      if (top < 0) { top = 0; }
      top = Math.round(top);
      bottom = Math.round(bottom);
      fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")));
    }

    function drawForLine(line, fromArg, toArg) {
      var lineObj = getLine(doc, line);
      var lineLen = lineObj.text.length;
      var start, end;
      function coords(ch, bias) {
        return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
      }

      function wrapX(pos, dir, side) {
        var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
        var prop = (dir == "ltr") == (side == "after") ? "left" : "right";
        var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
        return coords(ch, prop)[prop]
      }

      var order = getOrder(lineObj, doc.direction);
      iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir, i) {
        var ltr = dir == "ltr";
        var fromPos = coords(from, ltr ? "left" : "right");
        var toPos = coords(to - 1, ltr ? "right" : "left");

        var openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen;
        var first = i == 0, last = !order || i == order.length - 1;
        if (toPos.top - fromPos.top <= 3) { // Single line
          var openLeft = (docLTR ? openStart : openEnd) && first;
          var openRight = (docLTR ? openEnd : openStart) && last;
          var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
          var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
          add(left, fromPos.top, right - left, fromPos.bottom);
        } else { // Multiple lines
          var topLeft, topRight, botLeft, botRight;
          if (ltr) {
            topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
            topRight = docLTR ? rightSide : wrapX(from, dir, "before");
            botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
            botRight = docLTR && openEnd && last ? rightSide : toPos.right;
          } else {
            topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
            topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
            botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
            botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
          }
          add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
          if (fromPos.bottom < toPos.top) { add(leftSide, fromPos.bottom, null, toPos.top); }
          add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
        }

        if (!start || cmpCoords(fromPos, start) < 0) { start = fromPos; }
        if (cmpCoords(toPos, start) < 0) { start = toPos; }
        if (!end || cmpCoords(fromPos, end) < 0) { end = fromPos; }
        if (cmpCoords(toPos, end) < 0) { end = toPos; }
      });
      return {start: start, end: end}
    }

    var sFrom = range.from(), sTo = range.to();
    if (sFrom.line == sTo.line) {
      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
    } else {
      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
      var singleVLine = visualLine(fromLine) == visualLine(toLine);
      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
      if (singleVLine) {
        if (leftEnd.top < rightStart.top - 2) {
          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
        } else {
          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
        }
      }
      if (leftEnd.bottom < rightStart.top)
        { add(leftSide, leftEnd.bottom, null, rightStart.top); }
    }

    output.appendChild(fragment);
  }

  // Cursor-blinking
  function restartBlink(cm) {
    if (!cm.state.focused) { return }
    var display = cm.display;
    clearInterval(display.blinker);
    var on = true;
    display.cursorDiv.style.visibility = "";
    if (cm.options.cursorBlinkRate > 0)
      { display.blinker = setInterval(function () {
        if (!cm.hasFocus()) { onBlur(cm); }
        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
      }, cm.options.cursorBlinkRate); }
    else if (cm.options.cursorBlinkRate < 0)
      { display.cursorDiv.style.visibility = "hidden"; }
  }

  function ensureFocus(cm) {
    if (!cm.hasFocus()) {
      cm.display.input.focus();
      if (!cm.state.focused) { onFocus(cm); }
    }
  }

  function delayBlurEvent(cm) {
    cm.state.delayingBlurEvent = true;
    setTimeout(function () { if (cm.state.delayingBlurEvent) {
      cm.state.delayingBlurEvent = false;
      if (cm.state.focused) { onBlur(cm); }
    } }, 100);
  }

  function onFocus(cm, e) {
    if (cm.state.delayingBlurEvent && !cm.state.draggingText) { cm.state.delayingBlurEvent = false; }

    if (cm.options.readOnly == "nocursor") { return }
    if (!cm.state.focused) {
      signal(cm, "focus", cm, e);
      cm.state.focused = true;
      addClass(cm.display.wrapper, "CodeMirror-focused");
      // This test prevents this from firing when a context
      // menu is closed (since the input reset would kill the
      // select-all detection hack)
      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
        cm.display.input.reset();
        if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20); } // Issue #1730
      }
      cm.display.input.receivedFocus();
    }
    restartBlink(cm);
  }
  function onBlur(cm, e) {
    if (cm.state.delayingBlurEvent) { return }

    if (cm.state.focused) {
      signal(cm, "blur", cm, e);
      cm.state.focused = false;
      rmClass(cm.display.wrapper, "CodeMirror-focused");
    }
    clearInterval(cm.display.blinker);
    setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false; } }, 150);
  }

  // Read the actual heights of the rendered lines, and update their
  // stored heights to match.
  function updateHeightsInViewport(cm) {
    var display = cm.display;
    var prevBottom = display.lineDiv.offsetTop;
    var viewTop = Math.max(0, display.scroller.getBoundingClientRect().top);
    var oldHeight = display.lineDiv.getBoundingClientRect().top;
    var mustScroll = 0;
    for (var i = 0; i < display.view.length; i++) {
      var cur = display.view[i], wrapping = cm.options.lineWrapping;
      var height = (void 0), width = 0;
      if (cur.hidden) { continue }
      oldHeight += cur.line.height;
      if (ie && ie_version < 8) {
        var bot = cur.node.offsetTop + cur.node.offsetHeight;
        height = bot - prevBottom;
        prevBottom = bot;
      } else {
        var box = cur.node.getBoundingClientRect();
        height = box.bottom - box.top;
        // Check that lines don't extend past the right of the current
        // editor width
        if (!wrapping && cur.text.firstChild)
          { width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1; }
      }
      var diff = cur.line.height - height;
      if (diff > .005 || diff < -.005) {
        if (oldHeight < viewTop) { mustScroll -= diff; }
        updateLineHeight(cur.line, height);
        updateWidgetHeight(cur.line);
        if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
          { updateWidgetHeight(cur.rest[j]); } }
      }
      if (width > cm.display.sizerWidth) {
        var chWidth = Math.ceil(width / charWidth(cm.display));
        if (chWidth > cm.display.maxLineLength) {
          cm.display.maxLineLength = chWidth;
          cm.display.maxLine = cur.line;
          cm.display.maxLineChanged = true;
        }
      }
    }
    if (Math.abs(mustScroll) > 2) { display.scroller.scrollTop += mustScroll; }
  }

  // Read and store the height of line widgets associated with the
  // given line.
  function updateWidgetHeight(line) {
    if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i) {
      var w = line.widgets[i], parent = w.node.parentNode;
      if (parent) { w.height = parent.offsetHeight; }
    } }
  }

  // Compute the lines that are visible in a given viewport (defaults
  // the the current scroll position). viewport may contain top,
  // height, and ensure (see op.scrollToPos) properties.
  function visibleLines(display, doc, viewport) {
    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
    top = Math.floor(top - paddingTop(display));
    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
    // forces those lines into the viewport (if possible).
    if (viewport && viewport.ensure) {
      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
      if (ensureFrom < from) {
        from = ensureFrom;
        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
        to = ensureTo;
      }
    }
    return {from: from, to: Math.max(to, from + 1)}
  }

  // SCROLLING THINGS INTO VIEW

  // If an editor sits on the top or bottom of the window, partially
  // scrolled out of view, this ensures that the cursor is visible.
  function maybeScrollWindow(cm, rect) {
    if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
    var doc = display.wrapper.ownerDocument;
    if (rect.top + box.top < 0) { doScroll = true; }
    else if (rect.bottom + box.top > (doc.defaultView.innerHeight || doc.documentElement.clientHeight)) { doScroll = false; }
    if (doScroll != null && !phantom) {
      var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (rect.left) + "px; width: " + (Math.max(2, rect.right - rect.left)) + "px;"));
      cm.display.lineSpace.appendChild(scrollNode);
      scrollNode.scrollIntoView(doScroll);
      cm.display.lineSpace.removeChild(scrollNode);
    }
  }

  // Scroll a given position into view (immediately), verifying that
  // it actually became visible (as line heights are accurately
  // measured, the position of something may 'drift' during drawing).
  function scrollPosIntoView(cm, pos, end, margin) {
    if (margin == null) { margin = 0; }
    var rect;
    if (!cm.options.lineWrapping && pos == end) {
      // Set pos and end to the cursor positions around the character pos sticks to
      // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
      // If pos == Pos(_, 0, "before"), pos and end are unchanged
      end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
      pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
    }
    for (var limit = 0; limit < 5; limit++) {
      var changed = false;
      var coords = cursorCoords(cm, pos);
      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
      rect = {left: Math.min(coords.left, endCoords.left),
              top: Math.min(coords.top, endCoords.top) - margin,
              right: Math.max(coords.left, endCoords.left),
              bottom: Math.max(coords.bottom, endCoords.bottom) + margin};
      var scrollPos = calculateScrollPos(cm, rect);
      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
      if (scrollPos.scrollTop != null) {
        updateScrollTop(cm, scrollPos.scrollTop);
        if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true; }
      }
      if (scrollPos.scrollLeft != null) {
        setScrollLeft(cm, scrollPos.scrollLeft);
        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true; }
      }
      if (!changed) { break }
    }
    return rect
  }

  // Scroll a given set of coordinates into view (immediately).
  function scrollIntoView(cm, rect) {
    var scrollPos = calculateScrollPos(cm, rect);
    if (scrollPos.scrollTop != null) { updateScrollTop(cm, scrollPos.scrollTop); }
    if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft); }
  }

  // Calculate a new scroll position needed to scroll the given
  // rectangle into view. Returns an object with scrollTop and
  // scrollLeft properties. When these are undefined, the
  // vertical/horizontal position does not need to be adjusted.
  function calculateScrollPos(cm, rect) {
    var display = cm.display, snapMargin = textHeight(cm.display);
    if (rect.top < 0) { rect.top = 0; }
    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
    var screen = displayHeight(cm), result = {};
    if (rect.bottom - rect.top > screen) { rect.bottom = rect.top + screen; }
    var docBottom = cm.doc.height + paddingVert(display);
    var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
    if (rect.top < screentop) {
      result.scrollTop = atTop ? 0 : rect.top;
    } else if (rect.bottom > screentop + screen) {
      var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen);
      if (newTop != screentop) { result.scrollTop = newTop; }
    }

    var gutterSpace = cm.options.fixedGutter ? 0 : display.gutters.offsetWidth;
    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft - gutterSpace;
    var screenw = displayWidth(cm) - display.gutters.offsetWidth;
    var tooWide = rect.right - rect.left > screenw;
    if (tooWide) { rect.right = rect.left + screenw; }
    if (rect.left < 10)
      { result.scrollLeft = 0; }
    else if (rect.left < screenleft)
      { result.scrollLeft = Math.max(0, rect.left + gutterSpace - (tooWide ? 0 : 10)); }
    else if (rect.right > screenw + screenleft - 3)
      { result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw; }
    return result
  }

  // Store a relative adjustment to the scroll position in the current
  // operation (to be applied when the operation finishes).
  function addToScrollTop(cm, top) {
    if (top == null) { return }
    resolveScrollToPos(cm);
    cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
  }

  // Make sure that at the end of the operation the current cursor is
  // shown.
  function ensureCursorVisible(cm) {
    resolveScrollToPos(cm);
    var cur = cm.getCursor();
    cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin};
  }

  function scrollToCoords(cm, x, y) {
    if (x != null || y != null) { resolveScrollToPos(cm); }
    if (x != null) { cm.curOp.scrollLeft = x; }
    if (y != null) { cm.curOp.scrollTop = y; }
  }

  function scrollToRange(cm, range) {
    resolveScrollToPos(cm);
    cm.curOp.scrollToPos = range;
  }

  // When an operation has its scrollToPos property set, and another
  // scroll action is applied before the end of the operation, this
  // 'simulates' scrolling that position into view in a cheap way, so
  // that the effect of intermediate scroll commands is not ignored.
  function resolveScrollToPos(cm) {
    var range = cm.curOp.scrollToPos;
    if (range) {
      cm.curOp.scrollToPos = null;
      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
      scrollToCoordsRange(cm, from, to, range.margin);
    }
  }

  function scrollToCoordsRange(cm, from, to, margin) {
    var sPos = calculateScrollPos(cm, {
      left: Math.min(from.left, to.left),
      top: Math.min(from.top, to.top) - margin,
      right: Math.max(from.right, to.right),
      bottom: Math.max(from.bottom, to.bottom) + margin
    });
    scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
  }

  // Sync the scrollable area and scrollbars, ensure the viewport
  // covers the visible area.
  function updateScrollTop(cm, val) {
    if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
    if (!gecko) { updateDisplaySimple(cm, {top: val}); }
    setScrollTop(cm, val, true);
    if (gecko) { updateDisplaySimple(cm); }
    startWorker(cm, 100);
  }

  function setScrollTop(cm, val, forceScroll) {
    val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val));
    if (cm.display.scroller.scrollTop == val && !forceScroll) { return }
    cm.doc.scrollTop = val;
    cm.display.scrollbars.setScrollTop(val);
    if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val; }
  }

  // Sync scroller and scrollbar, ensure the gutter elements are
  // aligned.
  function setScrollLeft(cm, val, isScroller, forceScroll) {
    val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth));
    if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) { return }
    cm.doc.scrollLeft = val;
    alignHorizontally(cm);
    if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val; }
    cm.display.scrollbars.setScrollLeft(val);
  }

  // SCROLLBARS

  // Prepare DOM reads needed to update the scrollbars. Done in one
  // shot to minimize update/measure roundtrips.
  function measureForScrollbars(cm) {
    var d = cm.display, gutterW = d.gutters.offsetWidth;
    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
    return {
      clientHeight: d.scroller.clientHeight,
      viewHeight: d.wrapper.clientHeight,
      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
      viewWidth: d.wrapper.clientWidth,
      barLeft: cm.options.fixedGutter ? gutterW : 0,
      docHeight: docH,
      scrollHeight: docH + scrollGap(cm) + d.barHeight,
      nativeBarWidth: d.nativeBarWidth,
      gutterWidth: gutterW
    }
  }

  var NativeScrollbars = function(place, scroll, cm) {
    this.cm = cm;
    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
    vert.tabIndex = horiz.tabIndex = -1;
    place(vert); place(horiz);

    on(vert, "scroll", function () {
      if (vert.clientHeight) { scroll(vert.scrollTop, "vertical"); }
    });
    on(horiz, "scroll", function () {
      if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal"); }
    });

    this.checkedZeroWidth = false;
    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
    if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px"; }
  };

  NativeScrollbars.prototype.update = function (measure) {
    var needsH = measure.scrollWidth > measure.clientWidth + 1;
    var needsV = measure.scrollHeight > measure.clientHeight + 1;
    var sWidth = measure.nativeBarWidth;

    if (needsV) {
      this.vert.style.display = "block";
      this.vert.style.bottom = needsH ? sWidth + "px" : "0";
      var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
      // A bug in IE8 can cause this value to be negative, so guard it.
      this.vert.firstChild.style.height =
        Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
    } else {
      this.vert.scrollTop = 0;
      this.vert.style.display = "";
      this.vert.firstChild.style.height = "0";
    }

    if (needsH) {
      this.horiz.style.display = "block";
      this.horiz.style.right = needsV ? sWidth + "px" : "0";
      this.horiz.style.left = measure.barLeft + "px";
      var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
      this.horiz.firstChild.style.width =
        Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
    } else {
      this.horiz.style.display = "";
      this.horiz.firstChild.style.width = "0";
    }

    if (!this.checkedZeroWidth && measure.clientHeight > 0) {
      if (sWidth == 0) { this.zeroWidthHack(); }
      this.checkedZeroWidth = true;
    }

    return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
  };

  NativeScrollbars.prototype.setScrollLeft = function (pos) {
    if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos; }
    if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz"); }
  };

  NativeScrollbars.prototype.setScrollTop = function (pos) {
    if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos; }
    if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert, "vert"); }
  };

  NativeScrollbars.prototype.zeroWidthHack = function () {
    var w = mac && !mac_geMountainLion ? "12px" : "18px";
    this.horiz.style.height = this.vert.style.width = w;
    this.horiz.style.visibility = this.vert.style.visibility = "hidden";
    this.disableHoriz = new Delayed;
    this.disableVert = new Delayed;
  };

  NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
    bar.style.visibility = "";
    function maybeDisable() {
      // To find out whether the scrollbar is still visible, we
      // check whether the element under the pixel in the bottom
      // right corner of the scrollbar box is the scrollbar box
      // itself (when the bar is still visible) or its filler child
      // (when the bar is hidden). If it is still visible, we keep
      // it enabled, if it's hidden, we disable pointer events.
      var box = bar.getBoundingClientRect();
      var elt = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
          : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
      if (elt != bar) { bar.style.visibility = "hidden"; }
      else { delay.set(1000, maybeDisable); }
    }
    delay.set(1000, maybeDisable);
  };

  NativeScrollbars.prototype.clear = function () {
    var parent = this.horiz.parentNode;
    parent.removeChild(this.horiz);
    parent.removeChild(this.vert);
  };

  var NullScrollbars = function () {};

  NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
  NullScrollbars.prototype.setScrollLeft = function () {};
  NullScrollbars.prototype.setScrollTop = function () {};
  NullScrollbars.prototype.clear = function () {};

  function updateScrollbars(cm, measure) {
    if (!measure) { measure = measureForScrollbars(cm); }
    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
    updateScrollbarsInner(cm, measure);
    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
        { updateHeightsInViewport(cm); }
      updateScrollbarsInner(cm, measureForScrollbars(cm));
      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
    }
  }

  // Re-synchronize the fake scrollbars with the actual size of the
  // content.
  function updateScrollbarsInner(cm, measure) {
    var d = cm.display;
    var sizes = d.scrollbars.update(measure);

    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
    d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";

    if (sizes.right && sizes.bottom) {
      d.scrollbarFiller.style.display = "block";
      d.scrollbarFiller.style.height = sizes.bottom + "px";
      d.scrollbarFiller.style.width = sizes.right + "px";
    } else { d.scrollbarFiller.style.display = ""; }
    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
      d.gutterFiller.style.display = "block";
      d.gutterFiller.style.height = sizes.bottom + "px";
      d.gutterFiller.style.width = measure.gutterWidth + "px";
    } else { d.gutterFiller.style.display = ""; }
  }

  var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

  function initScrollbars(cm) {
    if (cm.display.scrollbars) {
      cm.display.scrollbars.clear();
      if (cm.display.scrollbars.addClass)
        { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
    }

    cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
      // Prevent clicks in the scrollbars from killing focus
      on(node, "mousedown", function () {
        if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0); }
      });
      node.setAttribute("cm-not-content", "true");
    }, function (pos, axis) {
      if (axis == "horizontal") { setScrollLeft(cm, pos); }
      else { updateScrollTop(cm, pos); }
    }, cm);
    if (cm.display.scrollbars.addClass)
      { addClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
  }

  // Operations are used to wrap a series of changes to the editor
  // state in such a way that each change won't have to update the
  // cursor and display (which would be awkward, slow, and
  // error-prone). Instead, display updates are batched and then all
  // combined and executed at once.

  var nextOpId = 0;
  // Start a new operation.
  function startOperation(cm) {
    cm.curOp = {
      cm: cm,
      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
      startHeight: cm.doc.height, // Used to detect need to update scrollbar
      forceUpdate: false,      // Used to force a redraw
      updateInput: 0,       // Whether to reset the input textarea
      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
      changeObjs: null,        // Accumulated changes, for firing change events
      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
      selectionChanged: false, // Whether the selection needs to be redrawn
      updateMaxLine: false,    // Set when the widest line needs to be determined anew
      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
      scrollToPos: null,       // Used to scroll to a specific position
      focus: false,
      id: ++nextOpId,          // Unique ID
      markArrays: null         // Used by addMarkedSpan
    };
    pushOperation(cm.curOp);
  }

  // Finish an operation, updating the display and signalling delayed events
  function endOperation(cm) {
    var op = cm.curOp;
    if (op) { finishOperation(op, function (group) {
      for (var i = 0; i < group.ops.length; i++)
        { group.ops[i].cm.curOp = null; }
      endOperations(group);
    }); }
  }

  // The DOM updates done when an operation finishes are batched so
  // that the minimum number of relayouts are required.
  function endOperations(group) {
    var ops = group.ops;
    for (var i = 0; i < ops.length; i++) // Read DOM
      { endOperation_R1(ops[i]); }
    for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
      { endOperation_W1(ops[i$1]); }
    for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
      { endOperation_R2(ops[i$2]); }
    for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
      { endOperation_W2(ops[i$3]); }
    for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
      { endOperation_finish(ops[i$4]); }
  }

  function endOperation_R1(op) {
    var cm = op.cm, display = cm.display;
    maybeClipScrollbars(cm);
    if (op.updateMaxLine) { findMaxLine(cm); }

    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                         op.scrollToPos.to.line >= display.viewTo) ||
      display.maxLineChanged && cm.options.lineWrapping;
    op.update = op.mustUpdate &&
      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
  }

  function endOperation_W1(op) {
    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
  }

  function endOperation_R2(op) {
    var cm = op.cm, display = cm.display;
    if (op.updatedDisplay) { updateHeightsInViewport(cm); }

    op.barMeasure = measureForScrollbars(cm);

    // If the max line changed since it was last measured, measure it,
    // and ensure the document's width matches it.
    // updateDisplay_W2 will use these properties to do the actual resizing
    if (display.maxLineChanged && !cm.options.lineWrapping) {
      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
      cm.display.sizerWidth = op.adjustWidthTo;
      op.barMeasure.scrollWidth =
        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
    }

    if (op.updatedDisplay || op.selectionChanged)
      { op.preparedSelection = display.input.prepareSelection(); }
  }

  function endOperation_W2(op) {
    var cm = op.cm;

    if (op.adjustWidthTo != null) {
      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
      if (op.maxScrollLeft < cm.doc.scrollLeft)
        { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true); }
      cm.display.maxLineChanged = false;
    }

    var takeFocus = op.focus && op.focus == activeElt(doc(cm));
    if (op.preparedSelection)
      { cm.display.input.showSelection(op.preparedSelection, takeFocus); }
    if (op.updatedDisplay || op.startHeight != cm.doc.height)
      { updateScrollbars(cm, op.barMeasure); }
    if (op.updatedDisplay)
      { setDocumentHeight(cm, op.barMeasure); }

    if (op.selectionChanged) { restartBlink(cm); }

    if (cm.state.focused && op.updateInput)
      { cm.display.input.reset(op.typing); }
    if (takeFocus) { ensureFocus(op.cm); }
  }

  function endOperation_finish(op) {
    var cm = op.cm, display = cm.display, doc = cm.doc;

    if (op.updatedDisplay) { postUpdateDisplay(cm, op.update); }

    // Abort mouse wheel delta measurement, when scrolling explicitly
    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
      { display.wheelStartX = display.wheelStartY = null; }

    // Propagate the scroll position to the actual DOM scroller
    if (op.scrollTop != null) { setScrollTop(cm, op.scrollTop, op.forceScroll); }

    if (op.scrollLeft != null) { setScrollLeft(cm, op.scrollLeft, true, true); }
    // If we need to scroll a specific position into view, do so.
    if (op.scrollToPos) {
      var rect = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
      maybeScrollWindow(cm, rect);
    }

    // Fire events for markers that are hidden/unidden by editing or
    // undoing
    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
    if (hidden) { for (var i = 0; i < hidden.length; ++i)
      { if (!hidden[i].lines.length) { signal(hidden[i], "hide"); } } }
    if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
      { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide"); } } }

    if (display.wrapper.offsetHeight)
      { doc.scrollTop = cm.display.scroller.scrollTop; }

    // Fire change events, and delayed event handlers
    if (op.changeObjs)
      { signal(cm, "changes", cm, op.changeObjs); }
    if (op.update)
      { op.update.finish(); }
  }

  // Run the given function in an operation
  function runInOp(cm, f) {
    if (cm.curOp) { return f() }
    startOperation(cm);
    try { return f() }
    finally { endOperation(cm); }
  }
  // Wraps a function in an operation. Returns the wrapped function.
  function operation(cm, f) {
    return function() {
      if (cm.curOp) { return f.apply(cm, arguments) }
      startOperation(cm);
      try { return f.apply(cm, arguments) }
      finally { endOperation(cm); }
    }
  }
  // Used to add methods to editor and doc instances, wrapping them in
  // operations.
  function methodOp(f) {
    return function() {
      if (this.curOp) { return f.apply(this, arguments) }
      startOperation(this);
      try { return f.apply(this, arguments) }
      finally { endOperation(this); }
    }
  }
  function docMethodOp(f) {
    return function() {
      var cm = this.cm;
      if (!cm || cm.curOp) { return f.apply(this, arguments) }
      startOperation(cm);
      try { return f.apply(this, arguments) }
      finally { endOperation(cm); }
    }
  }

  // HIGHLIGHT WORKER

  function startWorker(cm, time) {
    if (cm.doc.highlightFrontier < cm.display.viewTo)
      { cm.state.highlight.set(time, bind(highlightWorker, cm)); }
  }

  function highlightWorker(cm) {
    var doc = cm.doc;
    if (doc.highlightFrontier >= cm.display.viewTo) { return }
    var end = +new Date + cm.options.workTime;
    var context = getContextBefore(cm, doc.highlightFrontier);
    var changedLines = [];

    doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
      if (context.line >= cm.display.viewFrom) { // Visible
        var oldStyles = line.styles;
        var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
        var highlighted = highlightLine(cm, line, context, true);
        if (resetState) { context.state = resetState; }
        line.styles = highlighted.styles;
        var oldCls = line.styleClasses, newCls = highlighted.classes;
        if (newCls) { line.styleClasses = newCls; }
        else if (oldCls) { line.styleClasses = null; }
        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
        for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i]; }
        if (ischange) { changedLines.push(context.line); }
        line.stateAfter = context.save();
        context.nextLine();
      } else {
        if (line.text.length <= cm.options.maxHighlightLength)
          { processLine(cm, line.text, context); }
        line.stateAfter = context.line % 5 == 0 ? context.save() : null;
        context.nextLine();
      }
      if (+new Date > end) {
        startWorker(cm, cm.options.workDelay);
        return true
      }
    });
    doc.highlightFrontier = context.line;
    doc.modeFrontier = Math.max(doc.modeFrontier, context.line);
    if (changedLines.length) { runInOp(cm, function () {
      for (var i = 0; i < changedLines.length; i++)
        { regLineChange(cm, changedLines[i], "text"); }
    }); }
  }

  // DISPLAY DRAWING

  var DisplayUpdate = function(cm, viewport, force) {
    var display = cm.display;

    this.viewport = viewport;
    // Store some values that we'll need later (but don't want to force a relayout for)
    this.visible = visibleLines(display, cm.doc, viewport);
    this.editorIsHidden = !display.wrapper.offsetWidth;
    this.wrapperHeight = display.wrapper.clientHeight;
    this.wrapperWidth = display.wrapper.clientWidth;
    this.oldDisplayWidth = displayWidth(cm);
    this.force = force;
    this.dims = getDimensions(cm);
    this.events = [];
  };

  DisplayUpdate.prototype.signal = function (emitter, type) {
    if (hasHandler(emitter, type))
      { this.events.push(arguments); }
  };
  DisplayUpdate.prototype.finish = function () {
    for (var i = 0; i < this.events.length; i++)
      { signal.apply(null, this.events[i]); }
  };

  function maybeClipScrollbars(cm) {
    var display = cm.display;
    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
      display.heightForcer.style.height = scrollGap(cm) + "px";
      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
      display.scrollbarsClipped = true;
    }
  }

  function selectionSnapshot(cm) {
    if (cm.hasFocus()) { return null }
    var active = activeElt(doc(cm));
    if (!active || !contains(cm.display.lineDiv, active)) { return null }
    var result = {activeElt: active};
    if (window.getSelection) {
      var sel = win(cm).getSelection();
      if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
        result.anchorNode = sel.anchorNode;
        result.anchorOffset = sel.anchorOffset;
        result.focusNode = sel.focusNode;
        result.focusOffset = sel.focusOffset;
      }
    }
    return result
  }

  function restoreSelection(snapshot) {
    if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt(snapshot.activeElt.ownerDocument)) { return }
    snapshot.activeElt.focus();
    if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) &&
        snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
      var doc = snapshot.activeElt.ownerDocument;
      var sel = doc.defaultView.getSelection(), range = doc.createRange();
      range.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
      sel.extend(snapshot.focusNode, snapshot.focusOffset);
    }
  }

  // Does the actual updating of the line display. Bails out
  // (returning false) when there is nothing to be done and forced is
  // false.
  function updateDisplayIfNeeded(cm, update) {
    var display = cm.display, doc = cm.doc;

    if (update.editorIsHidden) {
      resetView(cm);
      return false
    }

    // Bail out if the visible area is already rendered and nothing changed.
    if (!update.force &&
        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
        display.renderedView == display.view && countDirtyView(cm) == 0)
      { return false }

    if (maybeUpdateLineNumberWidth(cm)) {
      resetView(cm);
      update.dims = getDimensions(cm);
    }

    // Compute a suitable new viewport (from & to)
    var end = doc.first + doc.size;
    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
    if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom); }
    if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo); }
    if (sawCollapsedSpans) {
      from = visualLineNo(cm.doc, from);
      to = visualLineEndNo(cm.doc, to);
    }

    var different = from != display.viewFrom || to != display.viewTo ||
      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
    adjustView(cm, from, to);

    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
    // Position the mover div to align with the current scroll position
    cm.display.mover.style.top = display.viewOffset + "px";

    var toUpdate = countDirtyView(cm);
    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
      { return false }

    // For big changes, we hide the enclosing element during the
    // update, since that speeds up the operations on most browsers.
    var selSnapshot = selectionSnapshot(cm);
    if (toUpdate > 4) { display.lineDiv.style.display = "none"; }
    patchDisplay(cm, display.updateLineNumbers, update.dims);
    if (toUpdate > 4) { display.lineDiv.style.display = ""; }
    display.renderedView = display.view;
    // There might have been a widget with a focused element that got
    // hidden or updated, if so re-focus it.
    restoreSelection(selSnapshot);

    // Prevent selection and cursors from interfering with the scroll
    // width and height.
    removeChildren(display.cursorDiv);
    removeChildren(display.selectionDiv);
    display.gutters.style.height = display.sizer.style.minHeight = 0;

    if (different) {
      display.lastWrapHeight = update.wrapperHeight;
      display.lastWrapWidth = update.wrapperWidth;
      startWorker(cm, 400);
    }

    display.updateLineNumbers = null;

    return true
  }

  function postUpdateDisplay(cm, update) {
    var viewport = update.viewport;

    for (var first = true;; first = false) {
      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
        // Clip forced viewport to actual scrollable area.
        if (viewport && viewport.top != null)
          { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)}; }
        // Updated line heights might result in the drawn area not
        // actually covering the viewport. Keep looping until it does.
        update.visible = visibleLines(cm.display, cm.doc, viewport);
        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
          { break }
      } else if (first) {
        update.visible = visibleLines(cm.display, cm.doc, viewport);
      }
      if (!updateDisplayIfNeeded(cm, update)) { break }
      updateHeightsInViewport(cm);
      var barMeasure = measureForScrollbars(cm);
      updateSelection(cm);
      updateScrollbars(cm, barMeasure);
      setDocumentHeight(cm, barMeasure);
      update.force = false;
    }

    update.signal(cm, "update", cm);
    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
    }
  }

  function updateDisplaySimple(cm, viewport) {
    var update = new DisplayUpdate(cm, viewport);
    if (updateDisplayIfNeeded(cm, update)) {
      updateHeightsInViewport(cm);
      postUpdateDisplay(cm, update);
      var barMeasure = measureForScrollbars(cm);
      updateSelection(cm);
      updateScrollbars(cm, barMeasure);
      setDocumentHeight(cm, barMeasure);
      update.finish();
    }
  }

  // Sync the actual display DOM structure with display.view, removing
  // nodes for lines that are no longer in view, and creating the ones
  // that are not there yet, and updating the ones that are out of
  // date.
  function patchDisplay(cm, updateNumbersFrom, dims) {
    var display = cm.display, lineNumbers = cm.options.lineNumbers;
    var container = display.lineDiv, cur = container.firstChild;

    function rm(node) {
      var next = node.nextSibling;
      // Works around a throw-scroll bug in OS X Webkit
      if (webkit && mac && cm.display.currentWheelTarget == node)
        { node.style.display = "none"; }
      else
        { node.parentNode.removeChild(node); }
      return next
    }

    var view = display.view, lineN = display.viewFrom;
    // Loop over the elements in the view, syncing cur (the DOM nodes
    // in display.lineDiv) with the view as we go.
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (lineView.hidden) ; else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
        var node = buildLineElement(cm, lineView, lineN, dims);
        container.insertBefore(node, cur);
      } else { // Already drawn
        while (cur != lineView.node) { cur = rm(cur); }
        var updateNumber = lineNumbers && updateNumbersFrom != null &&
          updateNumbersFrom <= lineN && lineView.lineNumber;
        if (lineView.changes) {
          if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false; }
          updateLineForChanges(cm, lineView, lineN, dims);
        }
        if (updateNumber) {
          removeChildren(lineView.lineNumber);
          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
        }
        cur = lineView.node.nextSibling;
      }
      lineN += lineView.size;
    }
    while (cur) { cur = rm(cur); }
  }

  function updateGutterSpace(display) {
    var width = display.gutters.offsetWidth;
    display.sizer.style.marginLeft = width + "px";
    // Send an event to consumers responding to changes in gutter width.
    signalLater(display, "gutterChanged", display);
  }

  function setDocumentHeight(cm, measure) {
    cm.display.sizer.style.minHeight = measure.docHeight + "px";
    cm.display.heightForcer.style.top = measure.docHeight + "px";
    cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
  }

  // Re-align line numbers and gutter marks to compensate for
  // horizontal scrolling.
  function alignHorizontally(cm) {
    var display = cm.display, view = display.view;
    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
    var gutterW = display.gutters.offsetWidth, left = comp + "px";
    for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
      if (cm.options.fixedGutter) {
        if (view[i].gutter)
          { view[i].gutter.style.left = left; }
        if (view[i].gutterBackground)
          { view[i].gutterBackground.style.left = left; }
      }
      var align = view[i].alignable;
      if (align) { for (var j = 0; j < align.length; j++)
        { align[j].style.left = left; } }
    } }
    if (cm.options.fixedGutter)
      { display.gutters.style.left = (comp + gutterW) + "px"; }
  }

  // Used to ensure that the line number gutter is still the right
  // size for the current document size. Returns true when an update
  // is needed.
  function maybeUpdateLineNumberWidth(cm) {
    if (!cm.options.lineNumbers) { return false }
    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
    if (last.length != display.lineNumChars) {
      var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
      display.lineGutter.style.width = "";
      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
      display.lineNumWidth = display.lineNumInnerWidth + padding;
      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
      display.lineGutter.style.width = display.lineNumWidth + "px";
      updateGutterSpace(cm.display);
      return true
    }
    return false
  }

  function getGutters(gutters, lineNumbers) {
    var result = [], sawLineNumbers = false;
    for (var i = 0; i < gutters.length; i++) {
      var name = gutters[i], style = null;
      if (typeof name != "string") { style = name.style; name = name.className; }
      if (name == "CodeMirror-linenumbers") {
        if (!lineNumbers) { continue }
        else { sawLineNumbers = true; }
      }
      result.push({className: name, style: style});
    }
    if (lineNumbers && !sawLineNumbers) { result.push({className: "CodeMirror-linenumbers", style: null}); }
    return result
  }

  // Rebuild the gutter elements, ensure the margin to the left of the
  // code matches their width.
  function renderGutters(display) {
    var gutters = display.gutters, specs = display.gutterSpecs;
    removeChildren(gutters);
    display.lineGutter = null;
    for (var i = 0; i < specs.length; ++i) {
      var ref = specs[i];
      var className = ref.className;
      var style = ref.style;
      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + className));
      if (style) { gElt.style.cssText = style; }
      if (className == "CodeMirror-linenumbers") {
        display.lineGutter = gElt;
        gElt.style.width = (display.lineNumWidth || 1) + "px";
      }
    }
    gutters.style.display = specs.length ? "" : "none";
    updateGutterSpace(display);
  }

  function updateGutters(cm) {
    renderGutters(cm.display);
    regChange(cm);
    alignHorizontally(cm);
  }

  // The display handles the DOM integration, both for input reading
  // and content drawing. It holds references to DOM nodes and
  // display-related state.

  function Display(place, doc, input, options) {
    var d = this;
    this.input = input;

    // Covers bottom-right square when both scrollbars are present.
    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
    d.scrollbarFiller.setAttribute("cm-not-content", "true");
    // Covers bottom of gutter when coverGutterNextToScrollbar is on
    // and h scrollbar is present.
    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
    d.gutterFiller.setAttribute("cm-not-content", "true");
    // Will contain the actual code, positioned to cover the viewport.
    d.lineDiv = eltP("div", null, "CodeMirror-code");
    // Elements are added to these to represent selection and cursors.
    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
    // A visibility: hidden element used to find the size of things.
    d.measure = elt("div", null, "CodeMirror-measure");
    // When lines outside of the viewport are measured, they are drawn in this.
    d.lineMeasure = elt("div", null, "CodeMirror-measure");
    // Wraps everything that needs to exist inside the vertically-padded coordinate system
    d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                      null, "position: relative; outline: none");
    var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
    // Moved around its parent to cover visible view.
    d.mover = elt("div", [lines], null, "position: relative");
    // Set to the height of the document, allowing scrolling.
    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
    d.sizerWidth = null;
    // Behavior of elts with overflow: auto and padding is
    // inconsistent across browsers. This is used to ensure the
    // scrollable area is big enough.
    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
    // Will contain the gutters, if any.
    d.gutters = elt("div", null, "CodeMirror-gutters");
    d.lineGutter = null;
    // Actual scrollable element.
    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
    d.scroller.setAttribute("tabIndex", "-1");
    // The element in which the editor lives.
    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

    // This attribute is respected by automatic translation systems such as Google Translate,
    // and may also be respected by tools used by human translators.
    d.wrapper.setAttribute('translate', 'no');

    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
    if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true; }

    if (place) {
      if (place.appendChild) { place.appendChild(d.wrapper); }
      else { place(d.wrapper); }
    }

    // Current rendered range (may be bigger than the view window).
    d.viewFrom = d.viewTo = doc.first;
    d.reportedViewFrom = d.reportedViewTo = doc.first;
    // Information about the rendered lines.
    d.view = [];
    d.renderedView = null;
    // Holds info about a single rendered line when it was rendered
    // for measurement, while not in view.
    d.externalMeasured = null;
    // Empty space (in pixels) above the view
    d.viewOffset = 0;
    d.lastWrapHeight = d.lastWrapWidth = 0;
    d.updateLineNumbers = null;

    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
    d.scrollbarsClipped = false;

    // Used to only resize the line number gutter when necessary (when
    // the amount of lines crosses a boundary that makes its width change)
    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
    // Set to true when a non-horizontal-scrolling line widget is
    // added. As an optimization, line widget aligning is skipped when
    // this is false.
    d.alignWidgets = false;

    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    d.maxLine = null;
    d.maxLineLength = 0;
    d.maxLineChanged = false;

    // Used for measuring wheel scrolling granularity
    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

    // True when shift is held down.
    d.shift = false;

    // Used to track whether anything happened since the context menu
    // was opened.
    d.selForContextMenu = null;

    d.activeTouch = null;

    d.gutterSpecs = getGutters(options.gutters, options.lineNumbers);
    renderGutters(d);

    input.init(d);
  }

  // Since the delta values reported on mouse wheel events are
  // unstandardized between browsers and even browser versions, and
  // generally horribly unpredictable, this code starts by measuring
  // the scroll effect that the first few mouse wheel events have,
  // and, from that, detects the way it can convert deltas to pixel
  // offsets afterwards.
  //
  // The reason we want to know the amount a wheel event will scroll
  // is that it gives us a chance to update the display before the
  // actual scrolling happens, reducing flickering.

  var wheelSamples = 0, wheelPixelsPerUnit = null;
  // Fill in a browser-detected starting value on browsers where we
  // know one. These don't have to be accurate -- the result of them
  // being wrong would just be a slight flicker on the first wheel
  // scroll (if it is large enough).
  if (ie) { wheelPixelsPerUnit = -.53; }
  else if (gecko) { wheelPixelsPerUnit = 15; }
  else if (chrome) { wheelPixelsPerUnit = -.7; }
  else if (safari) { wheelPixelsPerUnit = -1/3; }

  function wheelEventDelta(e) {
    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail; }
    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail; }
    else if (dy == null) { dy = e.wheelDelta; }
    return {x: dx, y: dy}
  }
  function wheelEventPixels(e) {
    var delta = wheelEventDelta(e);
    delta.x *= wheelPixelsPerUnit;
    delta.y *= wheelPixelsPerUnit;
    return delta
  }

  function onScrollWheel(cm, e) {
    // On Chrome 102, viewport updates somehow stop wheel-based
    // scrolling. Turning off pointer events during the scroll seems
    // to avoid the issue.
    if (chrome && chrome_version == 102) {
      if (cm.display.chromeScrollHack == null) { cm.display.sizer.style.pointerEvents = "none"; }
      else { clearTimeout(cm.display.chromeScrollHack); }
      cm.display.chromeScrollHack = setTimeout(function () {
        cm.display.chromeScrollHack = null;
        cm.display.sizer.style.pointerEvents = "";
      }, 100);
    }
    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;
    var pixelsPerUnit = wheelPixelsPerUnit;
    if (e.deltaMode === 0) {
      dx = e.deltaX;
      dy = e.deltaY;
      pixelsPerUnit = 1;
    }

    var display = cm.display, scroll = display.scroller;
    // Quit if there's nothing to scroll here
    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
    if (!(dx && canScrollX || dy && canScrollY)) { return }

    // Webkit browsers on OS X abort momentum scrolls when the target
    // of the scroll event is removed from the scrollable element.
    // This hack (see related code in patchDisplay) makes sure the
    // element is kept around.
    if (dy && mac && webkit) {
      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
        for (var i = 0; i < view.length; i++) {
          if (view[i].node == cur) {
            cm.display.currentWheelTarget = cur;
            break outer
          }
        }
      }
    }

    // On some browsers, horizontal scrolling will cause redraws to
    // happen before the gutter has been realigned, causing it to
    // wriggle around in a most unseemly way. When we have an
    // estimated pixels/delta value, we just handle horizontal
    // scrolling entirely here. It'll be slightly off from native, but
    // better than glitching out.
    if (dx && !gecko && !presto && pixelsPerUnit != null) {
      if (dy && canScrollY)
        { updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * pixelsPerUnit)); }
      setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * pixelsPerUnit));
      // Only prevent default scrolling if vertical scrolling is
      // actually possible. Otherwise, it causes vertical scroll
      // jitter on OSX trackpads when deltaX is small and deltaY
      // is large (issue #3579)
      if (!dy || (dy && canScrollY))
        { e_preventDefault(e); }
      display.wheelStartX = null; // Abort measurement, if in progress
      return
    }

    // 'Project' the visible viewport to cover the area that is being
    // scrolled into view (if we know enough to estimate it).
    if (dy && pixelsPerUnit != null) {
      var pixels = dy * pixelsPerUnit;
      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
      if (pixels < 0) { top = Math.max(0, top + pixels - 50); }
      else { bot = Math.min(cm.doc.height, bot + pixels + 50); }
      updateDisplaySimple(cm, {top: top, bottom: bot});
    }

    if (wheelSamples < 20 && e.deltaMode !== 0) {
      if (display.wheelStartX == null) {
        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
        display.wheelDX = dx; display.wheelDY = dy;
        setTimeout(function () {
          if (display.wheelStartX == null) { return }
          var movedX = scroll.scrollLeft - display.wheelStartX;
          var movedY = scroll.scrollTop - display.wheelStartY;
          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
            (movedX && display.wheelDX && movedX / display.wheelDX);
          display.wheelStartX = display.wheelStartY = null;
          if (!sample) { return }
          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
          ++wheelSamples;
        }, 200);
      } else {
        display.wheelDX += dx; display.wheelDY += dy;
      }
    }
  }

  // Selection objects are immutable. A new one is created every time
  // the selection changes. A selection is one or more non-overlapping
  // (and non-touching) ranges, sorted, and an integer that indicates
  // which one is the primary selection (the one that's scrolled into
  // view, that getCursor returns, etc).
  var Selection = function(ranges, primIndex) {
    this.ranges = ranges;
    this.primIndex = primIndex;
  };

  Selection.prototype.primary = function () { return this.ranges[this.primIndex] };

  Selection.prototype.equals = function (other) {
    if (other == this) { return true }
    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
    for (var i = 0; i < this.ranges.length; i++) {
      var here = this.ranges[i], there = other.ranges[i];
      if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) { return false }
    }
    return true
  };

  Selection.prototype.deepCopy = function () {
    var out = [];
    for (var i = 0; i < this.ranges.length; i++)
      { out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head)); }
    return new Selection(out, this.primIndex)
  };

  Selection.prototype.somethingSelected = function () {
    for (var i = 0; i < this.ranges.length; i++)
      { if (!this.ranges[i].empty()) { return true } }
    return false
  };

  Selection.prototype.contains = function (pos, end) {
    if (!end) { end = pos; }
    for (var i = 0; i < this.ranges.length; i++) {
      var range = this.ranges[i];
      if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
        { return i }
    }
    return -1
  };

  var Range = function(anchor, head) {
    this.anchor = anchor; this.head = head;
  };

  Range.prototype.from = function () { return minPos(this.anchor, this.head) };
  Range.prototype.to = function () { return maxPos(this.anchor, this.head) };
  Range.prototype.empty = function () { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch };

  // Take an unsorted, potentially overlapping set of ranges, and
  // build a selection out of it. 'Consumes' ranges array (modifying
  // it).
  function normalizeSelection(cm, ranges, primIndex) {
    var mayTouch = cm && cm.options.selectionsMayTouch;
    var prim = ranges[primIndex];
    ranges.sort(function (a, b) { return cmp(a.from(), b.from()); });
    primIndex = indexOf(ranges, prim);
    for (var i = 1; i < ranges.length; i++) {
      var cur = ranges[i], prev = ranges[i - 1];
      var diff = cmp(prev.to(), cur.from());
      if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
        if (i <= primIndex) { --primIndex; }
        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
      }
    }
    return new Selection(ranges, primIndex)
  }

  function simpleSelection(anchor, head) {
    return new Selection([new Range(anchor, head || anchor)], 0)
  }

  // Compute the position of the end of a change (its 'to' property
  // refers to the pre-change end).
  function changeEnd(change) {
    if (!change.text) { return change.to }
    return Pos(change.from.line + change.text.length - 1,
               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
  }

  // Adjust a position to refer to the post-change position of the
  // same text, or the end of the change if the change covers it.
  function adjustForChange(pos, change) {
    if (cmp(pos, change.from) < 0) { return pos }
    if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
    if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch; }
    return Pos(line, ch)
  }

  function computeSelAfterChange(doc, change) {
    var out = [];
    for (var i = 0; i < doc.sel.ranges.length; i++) {
      var range = doc.sel.ranges[i];
      out.push(new Range(adjustForChange(range.anchor, change),
                         adjustForChange(range.head, change)));
    }
    return normalizeSelection(doc.cm, out, doc.sel.primIndex)
  }

  function offsetPos(pos, old, nw) {
    if (pos.line == old.line)
      { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
    else
      { return Pos(nw.line + (pos.line - old.line), pos.ch) }
  }

  // Used by replaceSelections to allow moving the selection to the
  // start or around the replaced test. Hint may be "start" or "around".
  function computeReplacedSel(doc, changes, hint) {
    var out = [];
    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      var from = offsetPos(change.from, oldPrev, newPrev);
      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
      oldPrev = change.to;
      newPrev = to;
      if (hint == "around") {
        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
        out[i] = new Range(inv ? to : from, inv ? from : to);
      } else {
        out[i] = new Range(from, from);
      }
    }
    return new Selection(out, doc.sel.primIndex)
  }

  // Used to get the editor into a consistent state again when options change.

  function loadMode(cm) {
    cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
    resetModeState(cm);
  }

  function resetModeState(cm) {
    cm.doc.iter(function (line) {
      if (line.stateAfter) { line.stateAfter = null; }
      if (line.styles) { line.styles = null; }
    });
    cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
    startWorker(cm, 100);
    cm.state.modeGen++;
    if (cm.curOp) { regChange(cm); }
  }

  // DOCUMENT DATA STRUCTURE

  // By default, updates that start and end at the beginning of a line
  // are treated specially, in order to make the association of line
  // widgets and marker elements with the text behave more intuitive.
  function isWholeLineUpdate(doc, change) {
    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
      (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
  }

  // Perform a change on the document data structure.
  function updateDoc(doc, change, markedSpans, estimateHeight) {
    function spansFor(n) {return markedSpans ? markedSpans[n] : null}
    function update(line, text, spans) {
      updateLine(line, text, spans, estimateHeight);
      signalLater(line, "change", line, change);
    }
    function linesFor(start, end) {
      var result = [];
      for (var i = start; i < end; ++i)
        { result.push(new Line(text[i], spansFor(i), estimateHeight)); }
      return result
    }

    var from = change.from, to = change.to, text = change.text;
    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

    // Adjust the line structure
    if (change.full) {
      doc.insert(0, linesFor(0, text.length));
      doc.remove(text.length, doc.size - text.length);
    } else if (isWholeLineUpdate(doc, change)) {
      // This is a whole-line replace. Treated specially to make
      // sure line objects move the way they are supposed to.
      var added = linesFor(0, text.length - 1);
      update(lastLine, lastLine.text, lastSpans);
      if (nlines) { doc.remove(from.line, nlines); }
      if (added.length) { doc.insert(from.line, added); }
    } else if (firstLine == lastLine) {
      if (text.length == 1) {
        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
      } else {
        var added$1 = linesFor(1, text.length - 1);
        added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
        doc.insert(from.line + 1, added$1);
      }
    } else if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
      doc.remove(from.line + 1, nlines);
    } else {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
      var added$2 = linesFor(1, text.length - 1);
      if (nlines > 1) { doc.remove(from.line + 1, nlines - 1); }
      doc.insert(from.line + 1, added$2);
    }

    signalLater(doc, "change", doc, change);
  }

  // Call f for all linked documents.
  function linkedDocs(doc, f, sharedHistOnly) {
    function propagate(doc, skip, sharedHist) {
      if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
        var rel = doc.linked[i];
        if (rel.doc == skip) { continue }
        var shared = sharedHist && rel.sharedHist;
        if (sharedHistOnly && !shared) { continue }
        f(rel.doc, shared);
        propagate(rel.doc, doc, shared);
      } }
    }
    propagate(doc, null, true);
  }

  // Attach a document to an editor.
  function attachDoc(cm, doc) {
    if (doc.cm) { throw new Error("This document is already in use.") }
    cm.doc = doc;
    doc.cm = cm;
    estimateLineHeights(cm);
    loadMode(cm);
    setDirectionClass(cm);
    cm.options.direction = doc.direction;
    if (!cm.options.lineWrapping) { findMaxLine(cm); }
    cm.options.mode = doc.modeOption;
    regChange(cm);
  }

  function setDirectionClass(cm) {
  (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
  }

  function directionChanged(cm) {
    runInOp(cm, function () {
      setDirectionClass(cm);
      regChange(cm);
    });
  }

  function History(prev) {
    // Arrays of change events and selections. Doing something adds an
    // event to done and clears undo. Undoing moves events from done
    // to undone, redoing moves them in the other direction.
    this.done = []; this.undone = [];
    this.undoDepth = prev ? prev.undoDepth : Infinity;
    // Used to track when changes can be merged into a single undo
    // event
    this.lastModTime = this.lastSelTime = 0;
    this.lastOp = this.lastSelOp = null;
    this.lastOrigin = this.lastSelOrigin = null;
    // Used by the isClean() method
    this.generation = this.maxGeneration = prev ? prev.maxGeneration : 1;
  }

  // Create a history change event from an updateDoc-style change
  // object.
  function historyChangeFromChange(doc, change) {
    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
    linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true);
    return histChange
  }

  // Pop all selection events off the end of a history array. Stop at
  // a change event.
  function clearSelectionEvents(array) {
    while (array.length) {
      var last = lst(array);
      if (last.ranges) { array.pop(); }
      else { break }
    }
  }

  // Find the top change event in the history. Pop off selection
  // events that are in the way.
  function lastChangeEvent(hist, force) {
    if (force) {
      clearSelectionEvents(hist.done);
      return lst(hist.done)
    } else if (hist.done.length && !lst(hist.done).ranges) {
      return lst(hist.done)
    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
      hist.done.pop();
      return lst(hist.done)
    }
  }

  // Register a change in the history. Merges changes that are within
  // a single operation, or are close together with an origin that
  // allows merging (starting with "+") into a single event.
  function addChangeToHistory(doc, change, selAfter, opId) {
    var hist = doc.history;
    hist.undone.length = 0;
    var time = +new Date, cur;
    var last;

    if ((hist.lastOp == opId ||
         hist.lastOrigin == change.origin && change.origin &&
         ((change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500)) ||
          change.origin.charAt(0) == "*")) &&
        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
      // Merge this change into the last event
      last = lst(cur.changes);
      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
        // Optimized case for simple insertion -- don't want to add
        // new changesets for every character typed
        last.to = changeEnd(change);
      } else {
        // Add new sub-event
        cur.changes.push(historyChangeFromChange(doc, change));
      }
    } else {
      // Can not be merged, start a new event.
      var before = lst(hist.done);
      if (!before || !before.ranges)
        { pushSelectionToHistory(doc.sel, hist.done); }
      cur = {changes: [historyChangeFromChange(doc, change)],
             generation: hist.generation};
      hist.done.push(cur);
      while (hist.done.length > hist.undoDepth) {
        hist.done.shift();
        if (!hist.done[0].ranges) { hist.done.shift(); }
      }
    }
    hist.done.push(selAfter);
    hist.generation = ++hist.maxGeneration;
    hist.lastModTime = hist.lastSelTime = time;
    hist.lastOp = hist.lastSelOp = opId;
    hist.lastOrigin = hist.lastSelOrigin = change.origin;

    if (!last) { signal(doc, "historyAdded"); }
  }

  function selectionEventCanBeMerged(doc, origin, prev, sel) {
    var ch = origin.charAt(0);
    return ch == "*" ||
      ch == "+" &&
      prev.ranges.length == sel.ranges.length &&
      prev.somethingSelected() == sel.somethingSelected() &&
      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
  }

  // Called whenever the selection changes, sets the new selection as
  // the pending selection in the history, and pushes the old pending
  // selection into the 'done' array when it was significantly
  // different (in number of selected ranges, emptiness, or time).
  function addSelectionToHistory(doc, sel, opId, options) {
    var hist = doc.history, origin = options && options.origin;

    // A new event is started when the previous origin does not match
    // the current, or the origins don't allow matching. Origins
    // starting with * are always merged, those starting with + are
    // merged when similar and close together in time.
    if (opId == hist.lastSelOp ||
        (origin && hist.lastSelOrigin == origin &&
         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
      { hist.done[hist.done.length - 1] = sel; }
    else
      { pushSelectionToHistory(sel, hist.done); }

    hist.lastSelTime = +new Date;
    hist.lastSelOrigin = origin;
    hist.lastSelOp = opId;
    if (options && options.clearRedo !== false)
      { clearSelectionEvents(hist.undone); }
  }

  function pushSelectionToHistory(sel, dest) {
    var top = lst(dest);
    if (!(top && top.ranges && top.equals(sel)))
      { dest.push(sel); }
  }

  // Used to store marked span information in the history.
  function attachLocalSpans(doc, change, from, to) {
    var existing = change["spans_" + doc.id], n = 0;
    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
      if (line.markedSpans)
        { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans; }
      ++n;
    });
  }

  // When un/re-doing restores text containing marked spans, those
  // that have been explicitly cleared should not be restored.
  function removeClearedSpans(spans) {
    if (!spans) { return null }
    var out;
    for (var i = 0; i < spans.length; ++i) {
      if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i); } }
      else if (out) { out.push(spans[i]); }
    }
    return !out ? spans : out.length ? out : null
  }

  // Retrieve and filter the old marked spans stored in a change event.
  function getOldSpans(doc, change) {
    var found = change["spans_" + doc.id];
    if (!found) { return null }
    var nw = [];
    for (var i = 0; i < change.text.length; ++i)
      { nw.push(removeClearedSpans(found[i])); }
    return nw
  }

  // Used for un/re-doing changes from the history. Combines the
  // result of computing the existing spans with the set of spans that
  // existed in the history (so that deleting around a span and then
  // undoing brings back the span).
  function mergeOldSpans(doc, change) {
    var old = getOldSpans(doc, change);
    var stretched = stretchSpansOverChange(doc, change);
    if (!old) { return stretched }
    if (!stretched) { return old }

    for (var i = 0; i < old.length; ++i) {
      var oldCur = old[i], stretchCur = stretched[i];
      if (oldCur && stretchCur) {
        spans: for (var j = 0; j < stretchCur.length; ++j) {
          var span = stretchCur[j];
          for (var k = 0; k < oldCur.length; ++k)
            { if (oldCur[k].marker == span.marker) { continue spans } }
          oldCur.push(span);
        }
      } else if (stretchCur) {
        old[i] = stretchCur;
      }
    }
    return old
  }

  // Used both to provide a JSON-safe object in .getHistory, and, when
  // detaching a document, to split the history in two
  function copyHistoryArray(events, newGroup, instantiateSel) {
    var copy = [];
    for (var i = 0; i < events.length; ++i) {
      var event = events[i];
      if (event.ranges) {
        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
        continue
      }
      var changes = event.changes, newChanges = [];
      copy.push({changes: newChanges});
      for (var j = 0; j < changes.length; ++j) {
        var change = changes[j], m = (void 0);
        newChanges.push({from: change.from, to: change.to, text: change.text});
        if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
          if (indexOf(newGroup, Number(m[1])) > -1) {
            lst(newChanges)[prop] = change[prop];
            delete change[prop];
          }
        } } }
      }
    }
    return copy
  }

  // The 'scroll' parameter given to many of these indicated whether
  // the new cursor position should be scrolled into view after
  // modifying the selection.

  // If shift is held or the extend flag is set, extends a range to
  // include a given position (and optionally a second position).
  // Otherwise, simply returns the range between the given positions.
  // Used for cursor motion and such.
  function extendRange(range, head, other, extend) {
    if (extend) {
      var anchor = range.anchor;
      if (other) {
        var posBefore = cmp(head, anchor) < 0;
        if (posBefore != (cmp(other, anchor) < 0)) {
          anchor = head;
          head = other;
        } else if (posBefore != (cmp(head, other) < 0)) {
          head = other;
        }
      }
      return new Range(anchor, head)
    } else {
      return new Range(other || head, head)
    }
  }

  // Extend the primary selection range, discard the rest.
  function extendSelection(doc, head, other, options, extend) {
    if (extend == null) { extend = doc.cm && (doc.cm.display.shift || doc.extend); }
    setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
  }

  // Extend all selections (pos is an array of selections with length
  // equal the number of selections)
  function extendSelections(doc, heads, options) {
    var out = [];
    var extend = doc.cm && (doc.cm.display.shift || doc.extend);
    for (var i = 0; i < doc.sel.ranges.length; i++)
      { out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend); }
    var newSel = normalizeSelection(doc.cm, out, doc.sel.primIndex);
    setSelection(doc, newSel, options);
  }

  // Updates a single range in the selection.
  function replaceOneSelection(doc, i, range, options) {
    var ranges = doc.sel.ranges.slice(0);
    ranges[i] = range;
    setSelection(doc, normalizeSelection(doc.cm, ranges, doc.sel.primIndex), options);
  }

  // Reset the selection to a single range.
  function setSimpleSelection(doc, anchor, head, options) {
    setSelection(doc, simpleSelection(anchor, head), options);
  }

  // Give beforeSelectionChange handlers a change to influence a
  // selection update.
  function filterSelectionChange(doc, sel, options) {
    var obj = {
      ranges: sel.ranges,
      update: function(ranges) {
        this.ranges = [];
        for (var i = 0; i < ranges.length; i++)
          { this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                     clipPos(doc, ranges[i].head)); }
      },
      origin: options && options.origin
    };
    signal(doc, "beforeSelectionChange", doc, obj);
    if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj); }
    if (obj.ranges != sel.ranges) { return normalizeSelection(doc.cm, obj.ranges, obj.ranges.length - 1) }
    else { return sel }
  }

  function setSelectionReplaceHistory(doc, sel, options) {
    var done = doc.history.done, last = lst(done);
    if (last && last.ranges) {
      done[done.length - 1] = sel;
      setSelectionNoUndo(doc, sel, options);
    } else {
      setSelection(doc, sel, options);
    }
  }

  // Set a new selection.
  function setSelection(doc, sel, options) {
    setSelectionNoUndo(doc, sel, options);
    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
  }

  function setSelectionNoUndo(doc, sel, options) {
    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
      { sel = filterSelectionChange(doc, sel, options); }

    var bias = options && options.bias ||
      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

    if (!(options && options.scroll === false) && doc.cm && doc.cm.getOption("readOnly") != "nocursor")
      { ensureCursorVisible(doc.cm); }
  }

  function setSelectionInner(doc, sel) {
    if (sel.equals(doc.sel)) { return }

    doc.sel = sel;

    if (doc.cm) {
      doc.cm.curOp.updateInput = 1;
      doc.cm.curOp.selectionChanged = true;
      signalCursorActivity(doc.cm);
    }
    signalLater(doc, "cursorActivity", doc);
  }

  // Verify that the selection does not partially select any atomic
  // marked ranges.
  function reCheckSelection(doc) {
    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
  }

  // Return a selection that does not partially select any atomic
  // ranges.
  function skipAtomicInSelection(doc, sel, bias, mayClear) {
    var out;
    for (var i = 0; i < sel.ranges.length; i++) {
      var range = sel.ranges[i];
      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
      var newHead = range.head == range.anchor ? newAnchor : skipAtomic(doc, range.head, old && old.head, bias, mayClear);
      if (out || newAnchor != range.anchor || newHead != range.head) {
        if (!out) { out = sel.ranges.slice(0, i); }
        out[i] = new Range(newAnchor, newHead);
      }
    }
    return out ? normalizeSelection(doc.cm, out, sel.primIndex) : sel
  }

  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
    var line = getLine(doc, pos.line);
    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
      var sp = line.markedSpans[i], m = sp.marker;

      // Determine if we should prevent the cursor being placed to the left/right of an atomic marker
      // Historically this was determined using the inclusiveLeft/Right option, but the new way to control it
      // is with selectLeft/Right
      var preventCursorLeft = ("selectLeft" in m) ? !m.selectLeft : m.inclusiveLeft;
      var preventCursorRight = ("selectRight" in m) ? !m.selectRight : m.inclusiveRight;

      if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
          (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
        if (mayClear) {
          signal(m, "beforeCursorEnter");
          if (m.explicitlyCleared) {
            if (!line.markedSpans) { break }
            else {--i; continue}
          }
        }
        if (!m.atomic) { continue }

        if (oldPos) {
          var near = m.find(dir < 0 ? 1 : -1), diff = (void 0);
          if (dir < 0 ? preventCursorRight : preventCursorLeft)
            { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null); }
          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
            { return skipAtomicInner(doc, near, pos, dir, mayClear) }
        }

        var far = m.find(dir < 0 ? -1 : 1);
        if (dir < 0 ? preventCursorLeft : preventCursorRight)
          { far = movePos(doc, far, dir, far.line == pos.line ? line : null); }
        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
      }
    } }
    return pos
  }

  // Ensure a given position is not inside an atomic range.
  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
    var dir = bias || 1;
    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
    if (!found) {
      doc.cantEdit = true;
      return Pos(doc.first, 0)
    }
    return found
  }

  function movePos(doc, pos, dir, line) {
    if (dir < 0 && pos.ch == 0) {
      if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
      else { return null }
    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
      if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
      else { return null }
    } else {
      return new Pos(pos.line, pos.ch + dir)
    }
  }

  function selectAll(cm) {
    cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
  }

  // UPDATING

  // Allow "beforeChange" event handlers to influence a change
  function filterChange(doc, change, update) {
    var obj = {
      canceled: false,
      from: change.from,
      to: change.to,
      text: change.text,
      origin: change.origin,
      cancel: function () { return obj.canceled = true; }
    };
    if (update) { obj.update = function (from, to, text, origin) {
      if (from) { obj.from = clipPos(doc, from); }
      if (to) { obj.to = clipPos(doc, to); }
      if (text) { obj.text = text; }
      if (origin !== undefined) { obj.origin = origin; }
    }; }
    signal(doc, "beforeChange", doc, obj);
    if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj); }

    if (obj.canceled) {
      if (doc.cm) { doc.cm.curOp.updateInput = 2; }
      return null
    }
    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
  }

  // Apply a change to a document, and add it to the document's
  // history, and propagating it to all linked documents.
  function makeChange(doc, change, ignoreReadOnly) {
    if (doc.cm) {
      if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
      if (doc.cm.state.suppressEdits) { return }
    }

    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
      change = filterChange(doc, change, true);
      if (!change) { return }
    }

    // Possibly split or suppress the update based on the presence
    // of read-only spans in its range.
    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
    if (split) {
      for (var i = split.length - 1; i >= 0; --i)
        { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text, origin: change.origin}); }
    } else {
      makeChangeInner(doc, change);
    }
  }

  function makeChangeInner(doc, change) {
    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
    var selAfter = computeSelAfterChange(doc, change);
    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
    var rebased = [];

    linkedDocs(doc, function (doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change);
        rebased.push(doc.history);
      }
      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
    });
  }

  // Revert a change stored in a document's history.
  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
    var suppress = doc.cm && doc.cm.state.suppressEdits;
    if (suppress && !allowSelectionOnly) { return }

    var hist = doc.history, event, selAfter = doc.sel;
    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

    // Verify that there is a useable event (so that ctrl-z won't
    // needlessly clear selection events)
    var i = 0;
    for (; i < source.length; i++) {
      event = source[i];
      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
        { break }
    }
    if (i == source.length) { return }
    hist.lastOrigin = hist.lastSelOrigin = null;

    for (;;) {
      event = source.pop();
      if (event.ranges) {
        pushSelectionToHistory(event, dest);
        if (allowSelectionOnly && !event.equals(doc.sel)) {
          setSelection(doc, event, {clearRedo: false});
          return
        }
        selAfter = event;
      } else if (suppress) {
        source.push(event);
        return
      } else { break }
    }

    // Build up a reverse change object to add to the opposite history
    // stack (redo when undoing, and vice versa).
    var antiChanges = [];
    pushSelectionToHistory(selAfter, dest);
    dest.push({changes: antiChanges, generation: hist.generation});
    hist.generation = event.generation || ++hist.maxGeneration;

    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

    var loop = function ( i ) {
      var change = event.changes[i];
      change.origin = type;
      if (filter && !filterChange(doc, change, false)) {
        source.length = 0;
        return {}
      }

      antiChanges.push(historyChangeFromChange(doc, change));

      var after = i ? computeSelAfterChange(doc, change) : lst(source);
      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
      if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}); }
      var rebased = [];

      // Propagate to the linked documents
      linkedDocs(doc, function (doc, sharedHist) {
        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
          rebaseHist(doc.history, change);
          rebased.push(doc.history);
        }
        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
      });
    };

    for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
      var returned = loop( i$1 );

      if ( returned ) return returned.v;
    }
  }

  // Sub-views need their line numbers shifted when text is added
  // above or below them in the parent document.
  function shiftDoc(doc, distance) {
    if (distance == 0) { return }
    doc.first += distance;
    doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
      Pos(range.anchor.line + distance, range.anchor.ch),
      Pos(range.head.line + distance, range.head.ch)
    ); }), doc.sel.primIndex);
    if (doc.cm) {
      regChange(doc.cm, doc.first, doc.first - distance, distance);
      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
        { regLineChange(doc.cm, l, "gutter"); }
    }
  }

  // More lower-level change function, handling only a single document
  // (not linked ones).
  function makeChangeSingleDoc(doc, change, selAfter, spans) {
    if (doc.cm && !doc.cm.curOp)
      { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

    if (change.to.line < doc.first) {
      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
      return
    }
    if (change.from.line > doc.lastLine()) { return }

    // Clip the change to the size of this doc
    if (change.from.line < doc.first) {
      var shift = change.text.length - 1 - (doc.first - change.from.line);
      shiftDoc(doc, shift);
      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
                text: [lst(change.text)], origin: change.origin};
    }
    var last = doc.lastLine();
    if (change.to.line > last) {
      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
                text: [change.text[0]], origin: change.origin};
    }

    change.removed = getBetween(doc, change.from, change.to);

    if (!selAfter) { selAfter = computeSelAfterChange(doc, change); }
    if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans); }
    else { updateDoc(doc, change, spans); }
    setSelectionNoUndo(doc, selAfter, sel_dontScroll);

    if (doc.cantEdit && skipAtomic(doc, Pos(doc.firstLine(), 0)))
      { doc.cantEdit = false; }
  }

  // Handle the interaction of a change to a document with the editor
  // that this document is part of.
  function makeChangeSingleDocInEditor(cm, change, spans) {
    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

    var recomputeMaxLength = false, checkWidthStart = from.line;
    if (!cm.options.lineWrapping) {
      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
      doc.iter(checkWidthStart, to.line + 1, function (line) {
        if (line == display.maxLine) {
          recomputeMaxLength = true;
          return true
        }
      });
    }

    if (doc.sel.contains(change.from, change.to) > -1)
      { signalCursorActivity(cm); }

    updateDoc(doc, change, spans, estimateHeight(cm));

    if (!cm.options.lineWrapping) {
      doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
        var len = lineLength(line);
        if (len > display.maxLineLength) {
          display.maxLine = line;
          display.maxLineLength = len;
          display.maxLineChanged = true;
          recomputeMaxLength = false;
        }
      });
      if (recomputeMaxLength) { cm.curOp.updateMaxLine = true; }
    }

    retreatFrontier(doc, from.line);
    startWorker(cm, 400);

    var lendiff = change.text.length - (to.line - from.line) - 1;
    // Remember that these lines changed, for updating the display
    if (change.full)
      { regChange(cm); }
    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
      { regLineChange(cm, from.line, "text"); }
    else
      { regChange(cm, from.line, to.line + 1, lendiff); }

    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
    if (changeHandler || changesHandler) {
      var obj = {
        from: from, to: to,
        text: change.text,
        removed: change.removed,
        origin: change.origin
      };
      if (changeHandler) { signalLater(cm, "change", cm, obj); }
      if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj); }
    }
    cm.display.selForContextMenu = null;
  }

  function replaceRange(doc, code, from, to, origin) {
    var assign;

    if (!to) { to = from; }
    if (cmp(to, from) < 0) { (assign = [to, from], from = assign[0], to = assign[1]); }
    if (typeof code == "string") { code = doc.splitLines(code); }
    makeChange(doc, {from: from, to: to, text: code, origin: origin});
  }

  // Rebasing/resetting history to deal with externally-sourced changes

  function rebaseHistSelSingle(pos, from, to, diff) {
    if (to < pos.line) {
      pos.line += diff;
    } else if (from < pos.line) {
      pos.line = from;
      pos.ch = 0;
    }
  }

  // Tries to rebase an array of history events given a change in the
  // document. If the change touches the same lines as the event, the
  // event, and everything 'behind' it, is discarded. If the change is
  // before the event, the event's positions are updated. Uses a
  // copy-on-write scheme for the positions, to avoid having to
  // reallocate them all on every rebase, but also avoid problems with
  // shared position objects being unsafely updated.
  function rebaseHistArray(array, from, to, diff) {
    for (var i = 0; i < array.length; ++i) {
      var sub = array[i], ok = true;
      if (sub.ranges) {
        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
        for (var j = 0; j < sub.ranges.length; j++) {
          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
        }
        continue
      }
      for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
        var cur = sub.changes[j$1];
        if (to < cur.from.line) {
          cur.from = Pos(cur.from.line + diff, cur.from.ch);
          cur.to = Pos(cur.to.line + diff, cur.to.ch);
        } else if (from <= cur.to.line) {
          ok = false;
          break
        }
      }
      if (!ok) {
        array.splice(0, i + 1);
        i = 0;
      }
    }
  }

  function rebaseHist(hist, change) {
    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
    rebaseHistArray(hist.done, from, to, diff);
    rebaseHistArray(hist.undone, from, to, diff);
  }

  // Utility for applying a change to a line by handle or number,
  // returning the number and optionally registering the line as
  // changed.
  function changeLine(doc, handle, changeType, op) {
    var no = handle, line = handle;
    if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)); }
    else { no = lineNo(handle); }
    if (no == null) { return null }
    if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType); }
    return line
  }

  // The document is represented as a BTree consisting of leaves, with
  // chunk of lines in them, and branches, with up to ten leaves or
  // other branch nodes below them. The top node is always a branch
  // node, and is the document object itself (meaning it has
  // additional methods and properties).
  //
  // All nodes have parent links. The tree is used both to go from
  // line numbers to line objects, and to go from objects to numbers.
  // It also indexes by height, and is used to convert between height
  // and line object, and to find the total height of the document.
  //
  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

  function LeafChunk(lines) {
    this.lines = lines;
    this.parent = null;
    var height = 0;
    for (var i = 0; i < lines.length; ++i) {
      lines[i].parent = this;
      height += lines[i].height;
    }
    this.height = height;
  }

  LeafChunk.prototype = {
    chunkSize: function() { return this.lines.length },

    // Remove the n lines at offset 'at'.
    removeInner: function(at, n) {
      for (var i = at, e = at + n; i < e; ++i) {
        var line = this.lines[i];
        this.height -= line.height;
        cleanUpLine(line);
        signalLater(line, "delete");
      }
      this.lines.splice(at, n);
    },

    // Helper used to collapse a small branch into a single leaf.
    collapse: function(lines) {
      lines.push.apply(lines, this.lines);
    },

    // Insert the given array of lines at offset 'at', count them as
    // having the given height.
    insertInner: function(at, lines, height) {
      this.height += height;
      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
      for (var i = 0; i < lines.length; ++i) { lines[i].parent = this; }
    },

    // Used to iterate over a part of the tree.
    iterN: function(at, n, op) {
      for (var e = at + n; at < e; ++at)
        { if (op(this.lines[at])) { return true } }
    }
  };

  function BranchChunk(children) {
    this.children = children;
    var size = 0, height = 0;
    for (var i = 0; i < children.length; ++i) {
      var ch = children[i];
      size += ch.chunkSize(); height += ch.height;
      ch.parent = this;
    }
    this.size = size;
    this.height = height;
    this.parent = null;
  }

  BranchChunk.prototype = {
    chunkSize: function() { return this.size },

    removeInner: function(at, n) {
      this.size -= n;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var rm = Math.min(n, sz - at), oldHeight = child.height;
          child.removeInner(at, rm);
          this.height -= oldHeight - child.height;
          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
          if ((n -= rm) == 0) { break }
          at = 0;
        } else { at -= sz; }
      }
      // If the result is smaller than 25 lines, ensure that it is a
      // single leaf node.
      if (this.size - n < 25 &&
          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
        var lines = [];
        this.collapse(lines);
        this.children = [new LeafChunk(lines)];
        this.children[0].parent = this;
      }
    },

    collapse: function(lines) {
      for (var i = 0; i < this.children.length; ++i) { this.children[i].collapse(lines); }
    },

    insertInner: function(at, lines, height) {
      this.size += lines.length;
      this.height += height;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at <= sz) {
          child.insertInner(at, lines, height);
          if (child.lines && child.lines.length > 50) {
            // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
            // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
            var remaining = child.lines.length % 25 + 25;
            for (var pos = remaining; pos < child.lines.length;) {
              var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
              child.height -= leaf.height;
              this.children.splice(++i, 0, leaf);
              leaf.parent = this;
            }
            child.lines = child.lines.slice(0, remaining);
            this.maybeSpill();
          }
          break
        }
        at -= sz;
      }
    },

    // When a node has grown, check whether it should be split.
    maybeSpill: function() {
      if (this.children.length <= 10) { return }
      var me = this;
      do {
        var spilled = me.children.splice(me.children.length - 5, 5);
        var sibling = new BranchChunk(spilled);
        if (!me.parent) { // Become the parent node
          var copy = new BranchChunk(me.children);
          copy.parent = me;
          me.children = [copy, sibling];
          me = copy;
       } else {
          me.size -= sibling.size;
          me.height -= sibling.height;
          var myIndex = indexOf(me.parent.children, me);
          me.parent.children.splice(myIndex + 1, 0, sibling);
        }
        sibling.parent = me.parent;
      } while (me.children.length > 10)
      me.parent.maybeSpill();
    },

    iterN: function(at, n, op) {
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var used = Math.min(n, sz - at);
          if (child.iterN(at, used, op)) { return true }
          if ((n -= used) == 0) { break }
          at = 0;
        } else { at -= sz; }
      }
    }
  };

  // Line widgets are block elements displayed above or below a line.

  var LineWidget = function(doc, node, options) {
    if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
      { this[opt] = options[opt]; } } }
    this.doc = doc;
    this.node = node;
  };

  LineWidget.prototype.clear = function () {
    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
    if (no == null || !ws) { return }
    for (var i = 0; i < ws.length; ++i) { if (ws[i] == this) { ws.splice(i--, 1); } }
    if (!ws.length) { line.widgets = null; }
    var height = widgetHeight(this);
    updateLineHeight(line, Math.max(0, line.height - height));
    if (cm) {
      runInOp(cm, function () {
        adjustScrollWhenAboveVisible(cm, line, -height);
        regLineChange(cm, no, "widget");
      });
      signalLater(cm, "lineWidgetCleared", cm, this, no);
    }
  };

  LineWidget.prototype.changed = function () {
      var this$1 = this;

    var oldH = this.height, cm = this.doc.cm, line = this.line;
    this.height = null;
    var diff = widgetHeight(this) - oldH;
    if (!diff) { return }
    if (!lineIsHidden(this.doc, line)) { updateLineHeight(line, line.height + diff); }
    if (cm) {
      runInOp(cm, function () {
        cm.curOp.forceUpdate = true;
        adjustScrollWhenAboveVisible(cm, line, diff);
        signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line));
      });
    }
  };
  eventMixin(LineWidget);

  function adjustScrollWhenAboveVisible(cm, line, diff) {
    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
      { addToScrollTop(cm, diff); }
  }

  function addLineWidget(doc, handle, node, options) {
    var widget = new LineWidget(doc, node, options);
    var cm = doc.cm;
    if (cm && widget.noHScroll) { cm.display.alignWidgets = true; }
    changeLine(doc, handle, "widget", function (line) {
      var widgets = line.widgets || (line.widgets = []);
      if (widget.insertAt == null) { widgets.push(widget); }
      else { widgets.splice(Math.min(widgets.length, Math.max(0, widget.insertAt)), 0, widget); }
      widget.line = line;
      if (cm && !lineIsHidden(doc, line)) {
        var aboveVisible = heightAtLine(line) < doc.scrollTop;
        updateLineHeight(line, line.height + widgetHeight(widget));
        if (aboveVisible) { addToScrollTop(cm, widget.height); }
        cm.curOp.forceUpdate = true;
      }
      return true
    });
    if (cm) { signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle)); }
    return widget
  }

  // TEXTMARKERS

  // Created with markText and setBookmark methods. A TextMarker is a
  // handle that can be used to clear or find a marked position in the
  // document. Line objects hold arrays (markedSpans) containing
  // {from, to, marker} object pointing to such marker objects, and
  // indicating that such a marker is present on that line. Multiple
  // lines may point to the same marker when it spans across lines.
  // The spans will have null for their from/to properties when the
  // marker continues beyond the start/end of the line. Markers have
  // links back to the lines they currently touch.

  // Collapsed markers have unique ids, in order to be able to order
  // them, which is needed for uniquely determining an outer marker
  // when they overlap (they may nest, but not partially overlap).
  var nextMarkerId = 0;

  var TextMarker = function(doc, type) {
    this.lines = [];
    this.type = type;
    this.doc = doc;
    this.id = ++nextMarkerId;
  };

  // Clear the marker.
  TextMarker.prototype.clear = function () {
    if (this.explicitlyCleared) { return }
    var cm = this.doc.cm, withOp = cm && !cm.curOp;
    if (withOp) { startOperation(cm); }
    if (hasHandler(this, "clear")) {
      var found = this.find();
      if (found) { signalLater(this, "clear", found.from, found.to); }
    }
    var min = null, max = null;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (cm && !this.collapsed) { regLineChange(cm, lineNo(line), "text"); }
      else if (cm) {
        if (span.to != null) { max = lineNo(line); }
        if (span.from != null) { min = lineNo(line); }
      }
      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
        { updateLineHeight(line, textHeight(cm.display)); }
    }
    if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
      var visual = visualLine(this.lines[i$1]), len = lineLength(visual);
      if (len > cm.display.maxLineLength) {
        cm.display.maxLine = visual;
        cm.display.maxLineLength = len;
        cm.display.maxLineChanged = true;
      }
    } }

    if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1); }
    this.lines.length = 0;
    this.explicitlyCleared = true;
    if (this.atomic && this.doc.cantEdit) {
      this.doc.cantEdit = false;
      if (cm) { reCheckSelection(cm.doc); }
    }
    if (cm) { signalLater(cm, "markerCleared", cm, this, min, max); }
    if (withOp) { endOperation(cm); }
    if (this.parent) { this.parent.clear(); }
  };

  // Find the position of the marker in the document. Returns a {from,
  // to} object by default. Side can be passed to get a specific side
  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
  // Pos objects returned contain a line object, rather than a line
  // number (used to prevent looking up the same line twice).
  TextMarker.prototype.find = function (side, lineObj) {
    if (side == null && this.type == "bookmark") { side = 1; }
    var from, to;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (span.from != null) {
        from = Pos(lineObj ? line : lineNo(line), span.from);
        if (side == -1) { return from }
      }
      if (span.to != null) {
        to = Pos(lineObj ? line : lineNo(line), span.to);
        if (side == 1) { return to }
      }
    }
    return from && {from: from, to: to}
  };

  // Signals that the marker's widget changed, and surrounding layout
  // should be recomputed.
  TextMarker.prototype.changed = function () {
      var this$1 = this;

    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
    if (!pos || !cm) { return }
    runInOp(cm, function () {
      var line = pos.line, lineN = lineNo(pos.line);
      var view = findViewForLine(cm, lineN);
      if (view) {
        clearLineMeasurementCacheFor(view);
        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
      }
      cm.curOp.updateMaxLine = true;
      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
        var oldHeight = widget.height;
        widget.height = null;
        var dHeight = widgetHeight(widget) - oldHeight;
        if (dHeight)
          { updateLineHeight(line, line.height + dHeight); }
      }
      signalLater(cm, "markerChanged", cm, this$1);
    });
  };

  TextMarker.prototype.attachLine = function (line) {
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp;
      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
        { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this); }
    }
    this.lines.push(line);
  };

  TextMarker.prototype.detachLine = function (line) {
    this.lines.splice(indexOf(this.lines, line), 1);
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp
      ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
    }
  };
  eventMixin(TextMarker);

  // Create a marker, wire it up to the right lines, and
  function markText(doc, from, to, options, type) {
    // Shared markers (across linked documents) are handled separately
    // (markTextShared will call out to this again, once per
    // document).
    if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
    // Ensure we are in an operation.
    if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

    var marker = new TextMarker(doc, type), diff = cmp(from, to);
    if (options) { copyObj(options, marker, false); }
    // Don't connect empty markers unless clearWhenEmpty is false
    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
      { return marker }
    if (marker.replacedWith) {
      // Showing up as a widget implies collapsed (widget replaces text)
      marker.collapsed = true;
      marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
      if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true"); }
      if (options.insertLeft) { marker.widgetNode.insertLeft = true; }
    }
    if (marker.collapsed) {
      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
        { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
      seeCollapsedSpans();
    }

    if (marker.addToHistory)
      { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN); }

    var curLine = from.line, cm = doc.cm, updateMaxLine;
    doc.iter(curLine, to.line + 1, function (line) {
      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
        { updateMaxLine = true; }
      if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0); }
      addMarkedSpan(line, new MarkedSpan(marker,
                                         curLine == from.line ? from.ch : null,
                                         curLine == to.line ? to.ch : null), doc.cm && doc.cm.curOp);
      ++curLine;
    });
    // lineIsHidden depends on the presence of the spans, so needs a second pass
    if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
      if (lineIsHidden(doc, line)) { updateLineHeight(line, 0); }
    }); }

    if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }); }

    if (marker.readOnly) {
      seeReadOnlySpans();
      if (doc.history.done.length || doc.history.undone.length)
        { doc.clearHistory(); }
    }
    if (marker.collapsed) {
      marker.id = ++nextMarkerId;
      marker.atomic = true;
    }
    if (cm) {
      // Sync editor state
      if (updateMaxLine) { cm.curOp.updateMaxLine = true; }
      if (marker.collapsed)
        { regChange(cm, from.line, to.line + 1); }
      else if (marker.className || marker.startStyle || marker.endStyle || marker.css ||
               marker.attributes || marker.title)
        { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text"); } }
      if (marker.atomic) { reCheckSelection(cm.doc); }
      signalLater(cm, "markerAdded", cm, marker);
    }
    return marker
  }

  // SHARED TEXTMARKERS

  // A shared marker spans multiple linked documents. It is
  // implemented as a meta-marker-object controlling multiple normal
  // markers.
  var SharedTextMarker = function(markers, primary) {
    this.markers = markers;
    this.primary = primary;
    for (var i = 0; i < markers.length; ++i)
      { markers[i].parent = this; }
  };

  SharedTextMarker.prototype.clear = function () {
    if (this.explicitlyCleared) { return }
    this.explicitlyCleared = true;
    for (var i = 0; i < this.markers.length; ++i)
      { this.markers[i].clear(); }
    signalLater(this, "clear");
  };

  SharedTextMarker.prototype.find = function (side, lineObj) {
    return this.primary.find(side, lineObj)
  };
  eventMixin(SharedTextMarker);

  function markTextShared(doc, from, to, options, type) {
    options = copyObj(options);
    options.shared = false;
    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
    var widget = options.widgetNode;
    linkedDocs(doc, function (doc) {
      if (widget) { options.widgetNode = widget.cloneNode(true); }
      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
      for (var i = 0; i < doc.linked.length; ++i)
        { if (doc.linked[i].isParent) { return } }
      primary = lst(markers);
    });
    return new SharedTextMarker(markers, primary)
  }

  function findSharedMarkers(doc) {
    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
  }

  function copySharedMarkers(doc, markers) {
    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i], pos = marker.find();
      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
      if (cmp(mFrom, mTo)) {
        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
        marker.markers.push(subMark);
        subMark.parent = marker;
      }
    }
  }

  function detachSharedMarkers(markers) {
    var loop = function ( i ) {
      var marker = markers[i], linked = [marker.primary.doc];
      linkedDocs(marker.primary.doc, function (d) { return linked.push(d); });
      for (var j = 0; j < marker.markers.length; j++) {
        var subMarker = marker.markers[j];
        if (indexOf(linked, subMarker.doc) == -1) {
          subMarker.parent = null;
          marker.markers.splice(j--, 1);
        }
      }
    };

    for (var i = 0; i < markers.length; i++) loop( i );
  }

  var nextDocId = 0;
  var Doc = function(text, mode, firstLine, lineSep, direction) {
    if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep, direction) }
    if (firstLine == null) { firstLine = 0; }

    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
    this.first = firstLine;
    this.scrollTop = this.scrollLeft = 0;
    this.cantEdit = false;
    this.cleanGeneration = 1;
    this.modeFrontier = this.highlightFrontier = firstLine;
    var start = Pos(firstLine, 0);
    this.sel = simpleSelection(start);
    this.history = new History(null);
    this.id = ++nextDocId;
    this.modeOption = mode;
    this.lineSep = lineSep;
    this.direction = (direction == "rtl") ? "rtl" : "ltr";
    this.extend = false;

    if (typeof text == "string") { text = this.splitLines(text); }
    updateDoc(this, {from: start, to: start, text: text});
    setSelection(this, simpleSelection(start), sel_dontScroll);
  };

  Doc.prototype = createObj(BranchChunk.prototype, {
    constructor: Doc,
    // Iterate over the document. Supports two forms -- with only one
    // argument, it calls that for each line in the document. With
    // three, it iterates over the range given by the first two (with
    // the second being non-inclusive).
    iter: function(from, to, op) {
      if (op) { this.iterN(from - this.first, to - from, op); }
      else { this.iterN(this.first, this.first + this.size, from); }
    },

    // Non-public interface for adding and removing lines.
    insert: function(at, lines) {
      var height = 0;
      for (var i = 0; i < lines.length; ++i) { height += lines[i].height; }
      this.insertInner(at - this.first, lines, height);
    },
    remove: function(at, n) { this.removeInner(at - this.first, n); },

    // From here, the methods are part of the public interface. Most
    // are also available from CodeMirror (editor) instances.

    getValue: function(lineSep) {
      var lines = getLines(this, this.first, this.first + this.size);
      if (lineSep === false) { return lines }
      return lines.join(lineSep || this.lineSeparator())
    },
    setValue: docMethodOp(function(code) {
      var top = Pos(this.first, 0), last = this.first + this.size - 1;
      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                        text: this.splitLines(code), origin: "setValue", full: true}, true);
      if (this.cm) { scrollToCoords(this.cm, 0, 0); }
      setSelection(this, simpleSelection(top), sel_dontScroll);
    }),
    replaceRange: function(code, from, to, origin) {
      from = clipPos(this, from);
      to = to ? clipPos(this, to) : from;
      replaceRange(this, code, from, to, origin);
    },
    getRange: function(from, to, lineSep) {
      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
      if (lineSep === false) { return lines }
      if (lineSep === '') { return lines.join('') }
      return lines.join(lineSep || this.lineSeparator())
    },

    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

    getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
    getLineNumber: function(line) {return lineNo(line)},

    getLineHandleVisualStart: function(line) {
      if (typeof line == "number") { line = getLine(this, line); }
      return visualLine(line)
    },

    lineCount: function() {return this.size},
    firstLine: function() {return this.first},
    lastLine: function() {return this.first + this.size - 1},

    clipPos: function(pos) {return clipPos(this, pos)},

    getCursor: function(start) {
      var range = this.sel.primary(), pos;
      if (start == null || start == "head") { pos = range.head; }
      else if (start == "anchor") { pos = range.anchor; }
      else if (start == "end" || start == "to" || start === false) { pos = range.to(); }
      else { pos = range.from(); }
      return pos
    },
    listSelections: function() { return this.sel.ranges },
    somethingSelected: function() {return this.sel.somethingSelected()},

    setCursor: docMethodOp(function(line, ch, options) {
      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
    }),
    setSelection: docMethodOp(function(anchor, head, options) {
      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
    }),
    extendSelection: docMethodOp(function(head, other, options) {
      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
    }),
    extendSelections: docMethodOp(function(heads, options) {
      extendSelections(this, clipPosArray(this, heads), options);
    }),
    extendSelectionsBy: docMethodOp(function(f, options) {
      var heads = map(this.sel.ranges, f);
      extendSelections(this, clipPosArray(this, heads), options);
    }),
    setSelections: docMethodOp(function(ranges, primary, options) {
      if (!ranges.length) { return }
      var out = [];
      for (var i = 0; i < ranges.length; i++)
        { out[i] = new Range(clipPos(this, ranges[i].anchor),
                           clipPos(this, ranges[i].head || ranges[i].anchor)); }
      if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex); }
      setSelection(this, normalizeSelection(this.cm, out, primary), options);
    }),
    addSelection: docMethodOp(function(anchor, head, options) {
      var ranges = this.sel.ranges.slice(0);
      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
      setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
    }),

    getSelection: function(lineSep) {
      var ranges = this.sel.ranges, lines;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
        lines = lines ? lines.concat(sel) : sel;
      }
      if (lineSep === false) { return lines }
      else { return lines.join(lineSep || this.lineSeparator()) }
    },
    getSelections: function(lineSep) {
      var parts = [], ranges = this.sel.ranges;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
        if (lineSep !== false) { sel = sel.join(lineSep || this.lineSeparator()); }
        parts[i] = sel;
      }
      return parts
    },
    replaceSelection: function(code, collapse, origin) {
      var dup = [];
      for (var i = 0; i < this.sel.ranges.length; i++)
        { dup[i] = code; }
      this.replaceSelections(dup, collapse, origin || "+input");
    },
    replaceSelections: docMethodOp(function(code, collapse, origin) {
      var changes = [], sel = this.sel;
      for (var i = 0; i < sel.ranges.length; i++) {
        var range = sel.ranges[i];
        changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
      }
      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
      for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
        { makeChange(this, changes[i$1]); }
      if (newSel) { setSelectionReplaceHistory(this, newSel); }
      else if (this.cm) { ensureCursorVisible(this.cm); }
    }),
    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

    setExtending: function(val) {this.extend = val;},
    getExtending: function() {return this.extend},

    historySize: function() {
      var hist = this.history, done = 0, undone = 0;
      for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done; } }
      for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone; } }
      return {undo: done, redo: undone}
    },
    clearHistory: function() {
      var this$1 = this;

      this.history = new History(this.history);
      linkedDocs(this, function (doc) { return doc.history = this$1.history; }, true);
    },

    markClean: function() {
      this.cleanGeneration = this.changeGeneration(true);
    },
    changeGeneration: function(forceSplit) {
      if (forceSplit)
        { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null; }
      return this.history.generation
    },
    isClean: function (gen) {
      return this.history.generation == (gen || this.cleanGeneration)
    },

    getHistory: function() {
      return {done: copyHistoryArray(this.history.done),
              undone: copyHistoryArray(this.history.undone)}
    },
    setHistory: function(histData) {
      var hist = this.history = new History(this.history);
      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
    },

    setGutterMarker: docMethodOp(function(line, gutterID, value) {
      return changeLine(this, line, "gutter", function (line) {
        var markers = line.gutterMarkers || (line.gutterMarkers = {});
        markers[gutterID] = value;
        if (!value && isEmpty(markers)) { line.gutterMarkers = null; }
        return true
      })
    }),

    clearGutter: docMethodOp(function(gutterID) {
      var this$1 = this;

      this.iter(function (line) {
        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
          changeLine(this$1, line, "gutter", function () {
            line.gutterMarkers[gutterID] = null;
            if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null; }
            return true
          });
        }
      });
    }),

    lineInfo: function(line) {
      var n;
      if (typeof line == "number") {
        if (!isLine(this, line)) { return null }
        n = line;
        line = getLine(this, line);
        if (!line) { return null }
      } else {
        n = lineNo(line);
        if (n == null) { return null }
      }
      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
              widgets: line.widgets}
    },

    addLineClass: docMethodOp(function(handle, where, cls) {
      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
        var prop = where == "text" ? "textClass"
                 : where == "background" ? "bgClass"
                 : where == "gutter" ? "gutterClass" : "wrapClass";
        if (!line[prop]) { line[prop] = cls; }
        else if (classTest(cls).test(line[prop])) { return false }
        else { line[prop] += " " + cls; }
        return true
      })
    }),
    removeLineClass: docMethodOp(function(handle, where, cls) {
      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
        var prop = where == "text" ? "textClass"
                 : where == "background" ? "bgClass"
                 : where == "gutter" ? "gutterClass" : "wrapClass";
        var cur = line[prop];
        if (!cur) { return false }
        else if (cls == null) { line[prop] = null; }
        else {
          var found = cur.match(classTest(cls));
          if (!found) { return false }
          var end = found.index + found[0].length;
          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
        }
        return true
      })
    }),

    addLineWidget: docMethodOp(function(handle, node, options) {
      return addLineWidget(this, handle, node, options)
    }),
    removeLineWidget: function(widget) { widget.clear(); },

    markText: function(from, to, options) {
      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
    },
    setBookmark: function(pos, options) {
      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                      insertLeft: options && options.insertLeft,
                      clearWhenEmpty: false, shared: options && options.shared,
                      handleMouseEvents: options && options.handleMouseEvents};
      pos = clipPos(this, pos);
      return markText(this, pos, pos, realOpts, "bookmark")
    },
    findMarksAt: function(pos) {
      pos = clipPos(this, pos);
      var markers = [], spans = getLine(this, pos.line).markedSpans;
      if (spans) { for (var i = 0; i < spans.length; ++i) {
        var span = spans[i];
        if ((span.from == null || span.from <= pos.ch) &&
            (span.to == null || span.to >= pos.ch))
          { markers.push(span.marker.parent || span.marker); }
      } }
      return markers
    },
    findMarks: function(from, to, filter) {
      from = clipPos(this, from); to = clipPos(this, to);
      var found = [], lineNo = from.line;
      this.iter(from.line, to.line + 1, function (line) {
        var spans = line.markedSpans;
        if (spans) { for (var i = 0; i < spans.length; i++) {
          var span = spans[i];
          if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
                span.from == null && lineNo != from.line ||
                span.from != null && lineNo == to.line && span.from >= to.ch) &&
              (!filter || filter(span.marker)))
            { found.push(span.marker.parent || span.marker); }
        } }
        ++lineNo;
      });
      return found
    },
    getAllMarks: function() {
      var markers = [];
      this.iter(function (line) {
        var sps = line.markedSpans;
        if (sps) { for (var i = 0; i < sps.length; ++i)
          { if (sps[i].from != null) { markers.push(sps[i].marker); } } }
      });
      return markers
    },

    posFromIndex: function(off) {
      var ch, lineNo = this.first, sepSize = this.lineSeparator().length;
      this.iter(function (line) {
        var sz = line.text.length + sepSize;
        if (sz > off) { ch = off; return true }
        off -= sz;
        ++lineNo;
      });
      return clipPos(this, Pos(lineNo, ch))
    },
    indexFromPos: function (coords) {
      coords = clipPos(this, coords);
      var index = coords.ch;
      if (coords.line < this.first || coords.ch < 0) { return 0 }
      var sepSize = this.lineSeparator().length;
      this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
        index += line.text.length + sepSize;
      });
      return index
    },

    copy: function(copyHistory) {
      var doc = new Doc(getLines(this, this.first, this.first + this.size),
                        this.modeOption, this.first, this.lineSep, this.direction);
      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
      doc.sel = this.sel;
      doc.extend = false;
      if (copyHistory) {
        doc.history.undoDepth = this.history.undoDepth;
        doc.setHistory(this.getHistory());
      }
      return doc
    },

    linkedDoc: function(options) {
      if (!options) { options = {}; }
      var from = this.first, to = this.first + this.size;
      if (options.from != null && options.from > from) { from = options.from; }
      if (options.to != null && options.to < to) { to = options.to; }
      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);
      if (options.sharedHist) { copy.history = this.history
      ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
      copySharedMarkers(copy, findSharedMarkers(this));
      return copy
    },
    unlinkDoc: function(other) {
      if (other instanceof CodeMirror) { other = other.doc; }
      if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
        var link = this.linked[i];
        if (link.doc != other) { continue }
        this.linked.splice(i, 1);
        other.unlinkDoc(this);
        detachSharedMarkers(findSharedMarkers(this));
        break
      } }
      // If the histories were shared, split them again
      if (other.history == this.history) {
        var splitIds = [other.id];
        linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true);
        other.history = new History(null);
        other.history.done = copyHistoryArray(this.history.done, splitIds);
        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
      }
    },
    iterLinkedDocs: function(f) {linkedDocs(this, f);},

    getMode: function() {return this.mode},
    getEditor: function() {return this.cm},

    splitLines: function(str) {
      if (this.lineSep) { return str.split(this.lineSep) }
      return splitLinesAuto(str)
    },
    lineSeparator: function() { return this.lineSep || "\n" },

    setDirection: docMethodOp(function (dir) {
      if (dir != "rtl") { dir = "ltr"; }
      if (dir == this.direction) { return }
      this.direction = dir;
      this.iter(function (line) { return line.order = null; });
      if (this.cm) { directionChanged(this.cm); }
    })
  });

  // Public alias.
  Doc.prototype.eachLine = Doc.prototype.iter;

  // Kludge to work around strange IE behavior where it'll sometimes
  // re-fire a series of drag-related events right after the drop (#1551)
  var lastDrop = 0;

  function onDrop(e) {
    var cm = this;
    clearDragCursor(cm);
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
      { return }
    e_preventDefault(e);
    if (ie) { lastDrop = +new Date; }
    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
    if (!pos || cm.isReadOnly()) { return }
    // Might be a file drop, in which case we simply extract the text
    // and insert it.
    if (files && files.length && window.FileReader && window.File) {
      var n = files.length, text = Array(n), read = 0;
      var markAsReadAndPasteIfAllFilesAreRead = function () {
        if (++read == n) {
          operation(cm, function () {
            pos = clipPos(cm.doc, pos);
            var change = {from: pos, to: pos,
                          text: cm.doc.splitLines(
                              text.filter(function (t) { return t != null; }).join(cm.doc.lineSeparator())),
                          origin: "paste"};
            makeChange(cm.doc, change);
            setSelectionReplaceHistory(cm.doc, simpleSelection(clipPos(cm.doc, pos), clipPos(cm.doc, changeEnd(change))));
          })();
        }
      };
      var readTextFromFile = function (file, i) {
        if (cm.options.allowDropFileTypes &&
            indexOf(cm.options.allowDropFileTypes, file.type) == -1) {
          markAsReadAndPasteIfAllFilesAreRead();
          return
        }
        var reader = new FileReader;
        reader.onerror = function () { return markAsReadAndPasteIfAllFilesAreRead(); };
        reader.onload = function () {
          var content = reader.result;
          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
            markAsReadAndPasteIfAllFilesAreRead();
            return
          }
          text[i] = content;
          markAsReadAndPasteIfAllFilesAreRead();
        };
        reader.readAsText(file);
      };
      for (var i = 0; i < files.length; i++) { readTextFromFile(files[i], i); }
    } else { // Normal drop
      // Don't do a replace if the drop happened inside of the selected text.
      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
        cm.state.draggingText(e);
        // Ensure the editor is re-focused
        setTimeout(function () { return cm.display.input.focus(); }, 20);
        return
      }
      try {
        var text$1 = e.dataTransfer.getData("Text");
        if (text$1) {
          var selected;
          if (cm.state.draggingText && !cm.state.draggingText.copy)
            { selected = cm.listSelections(); }
          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
          if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
            { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag"); } }
          cm.replaceSelection(text$1, "around", "paste");
          cm.display.input.focus();
        }
      }
      catch(e$1){}
    }
  }

  function onDragStart(cm, e) {
    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

    e.dataTransfer.setData("Text", cm.getSelection());
    e.dataTransfer.effectAllowed = "copyMove";

    // Use dummy image instead of default browsers image.
    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
    if (e.dataTransfer.setDragImage && !safari) {
      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      if (presto) {
        img.width = img.height = 1;
        cm.display.wrapper.appendChild(img);
        // Force a relayout, or Opera won't use our image for some obscure reason
        img._top = img.offsetTop;
      }
      e.dataTransfer.setDragImage(img, 0, 0);
      if (presto) { img.parentNode.removeChild(img); }
    }
  }

  function onDragOver(cm, e) {
    var pos = posFromMouse(cm, e);
    if (!pos) { return }
    var frag = document.createDocumentFragment();
    drawSelectionCursor(cm, pos, frag);
    if (!cm.display.dragCursor) {
      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
    }
    removeChildrenAndAdd(cm.display.dragCursor, frag);
  }

  function clearDragCursor(cm) {
    if (cm.display.dragCursor) {
      cm.display.lineSpace.removeChild(cm.display.dragCursor);
      cm.display.dragCursor = null;
    }
  }

  // These must be handled carefully, because naively registering a
  // handler for each editor will cause the editors to never be
  // garbage collected.

  function forEachCodeMirror(f) {
    if (!document.getElementsByClassName) { return }
    var byClass = document.getElementsByClassName("CodeMirror"), editors = [];
    for (var i = 0; i < byClass.length; i++) {
      var cm = byClass[i].CodeMirror;
      if (cm) { editors.push(cm); }
    }
    if (editors.length) { editors[0].operation(function () {
      for (var i = 0; i < editors.length; i++) { f(editors[i]); }
    }); }
  }

  var globalsRegistered = false;
  function ensureGlobalHandlers() {
    if (globalsRegistered) { return }
    registerGlobalHandlers();
    globalsRegistered = true;
  }
  function registerGlobalHandlers() {
    // When the window resizes, we need to refresh active editors.
    var resizeTimer;
    on(window, "resize", function () {
      if (resizeTimer == null) { resizeTimer = setTimeout(function () {
        resizeTimer = null;
        forEachCodeMirror(onResize);
      }, 100); }
    });
    // When the window loses focus, we want to show the editor as blurred
    on(window, "blur", function () { return forEachCodeMirror(onBlur); });
  }
  // Called when the window resizes
  function onResize(cm) {
    var d = cm.display;
    // Might be a text scaling operation, clear size caches.
    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
    d.scrollbarsClipped = false;
    cm.setSize();
  }

  var keyNames = {
    3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 145: "ScrollLock",
    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
    221: "]", 222: "'", 224: "Mod", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
  };

  // Number keys
  for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i); }
  // Alphabetic keys
  for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1); }
  // Function keys
  for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2; }

  var keyMap = {};

  keyMap.basic = {
    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
    "Esc": "singleSelection"
  };
  // Note that the save and find-related commands aren't defined by
  // default. User code or addons can define them. Unknown commands
  // are simply ignored.
  keyMap.pcDefault = {
    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
    "fallthrough": "basic"
  };
  // Very basic readline/emacs-style bindings, which are standard on Mac.
  keyMap.emacsy = {
    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
    "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp",
    "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine",
    "Ctrl-T": "transposeChars", "Ctrl-O": "openLine"
  };
  keyMap.macDefault = {
    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
    "fallthrough": ["basic", "emacsy"]
  };
  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

  // KEYMAP DISPATCH

  function normalizeKeyName(name) {
    var parts = name.split(/-(?!$)/);
    name = parts[parts.length - 1];
    var alt, ctrl, shift, cmd;
    for (var i = 0; i < parts.length - 1; i++) {
      var mod = parts[i];
      if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true; }
      else if (/^a(lt)?$/i.test(mod)) { alt = true; }
      else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true; }
      else if (/^s(hift)?$/i.test(mod)) { shift = true; }
      else { throw new Error("Unrecognized modifier name: " + mod) }
    }
    if (alt) { name = "Alt-" + name; }
    if (ctrl) { name = "Ctrl-" + name; }
    if (cmd) { name = "Cmd-" + name; }
    if (shift) { name = "Shift-" + name; }
    return name
  }

  // This is a kludge to keep keymaps mostly working as raw objects
  // (backwards compatibility) while at the same time support features
  // like normalization and multi-stroke key bindings. It compiles a
  // new normalized keymap, and then updates the old object to reflect
  // this.
  function normalizeKeyMap(keymap) {
    var copy = {};
    for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
      var value = keymap[keyname];
      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
      if (value == "...") { delete keymap[keyname]; continue }

      var keys = map(keyname.split(" "), normalizeKeyName);
      for (var i = 0; i < keys.length; i++) {
        var val = (void 0), name = (void 0);
        if (i == keys.length - 1) {
          name = keys.join(" ");
          val = value;
        } else {
          name = keys.slice(0, i + 1).join(" ");
          val = "...";
        }
        var prev = copy[name];
        if (!prev) { copy[name] = val; }
        else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
      }
      delete keymap[keyname];
    } }
    for (var prop in copy) { keymap[prop] = copy[prop]; }
    return keymap
  }

  function lookupKey(key, map, handle, context) {
    map = getKeyMap(map);
    var found = map.call ? map.call(key, context) : map[key];
    if (found === false) { return "nothing" }
    if (found === "...") { return "multi" }
    if (found != null && handle(found)) { return "handled" }

    if (map.fallthrough) {
      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
        { return lookupKey(key, map.fallthrough, handle, context) }
      for (var i = 0; i < map.fallthrough.length; i++) {
        var result = lookupKey(key, map.fallthrough[i], handle, context);
        if (result) { return result }
      }
    }
  }

  // Modifier key presses don't count as 'real' key presses for the
  // purpose of keymap fallthrough.
  function isModifierKey(value) {
    var name = typeof value == "string" ? value : keyNames[value.keyCode];
    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
  }

  function addModifierNames(name, event, noShift) {
    var base = name;
    if (event.altKey && base != "Alt") { name = "Alt-" + name; }
    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name; }
    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Mod") { name = "Cmd-" + name; }
    if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name; }
    return name
  }

  // Look up the name of a key as indicated by an event object.
  function keyName(event, noShift) {
    if (presto && event.keyCode == 34 && event["char"]) { return false }
    var name = keyNames[event.keyCode];
    if (name == null || event.altGraphKey) { return false }
    // Ctrl-ScrollLock has keyCode 3, same as Ctrl-Pause,
    // so we'll use event.code when available (Chrome 48+, FF 38+, Safari 10.1+)
    if (event.keyCode == 3 && event.code) { name = event.code; }
    return addModifierNames(name, event, noShift)
  }

  function getKeyMap(val) {
    return typeof val == "string" ? keyMap[val] : val
  }

  // Helper for deleting text near the selection(s), used to implement
  // backspace, delete, and similar functionality.
  function deleteNearSelection(cm, compute) {
    var ranges = cm.doc.sel.ranges, kill = [];
    // Build up a set of ranges to kill first, merging overlapping
    // ranges.
    for (var i = 0; i < ranges.length; i++) {
      var toKill = compute(ranges[i]);
      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
        var replaced = kill.pop();
        if (cmp(replaced.from, toKill.from) < 0) {
          toKill.from = replaced.from;
          break
        }
      }
      kill.push(toKill);
    }
    // Next, remove those actual ranges.
    runInOp(cm, function () {
      for (var i = kill.length - 1; i >= 0; i--)
        { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete"); }
      ensureCursorVisible(cm);
    });
  }

  function moveCharLogically(line, ch, dir) {
    var target = skipExtendingChars(line.text, ch + dir, dir);
    return target < 0 || target > line.text.length ? null : target
  }

  function moveLogically(line, start, dir) {
    var ch = moveCharLogically(line, start.ch, dir);
    return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before")
  }

  function endOfLine(visually, cm, lineObj, lineNo, dir) {
    if (visually) {
      if (cm.doc.direction == "rtl") { dir = -dir; }
      var order = getOrder(lineObj, cm.doc.direction);
      if (order) {
        var part = dir < 0 ? lst(order) : order[0];
        var moveInStorageOrder = (dir < 0) == (part.level == 1);
        var sticky = moveInStorageOrder ? "after" : "before";
        var ch;
        // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
        // it could be that the last bidi part is not on the last visual line,
        // since visual lines contain content order-consecutive chunks.
        // Thus, in rtl, we are looking for the first (content-order) character
        // in the rtl chunk that is on the last line (that is, the same line
        // as the last (content-order) character).
        if (part.level > 0 || cm.doc.direction == "rtl") {
          var prep = prepareMeasureForLine(cm, lineObj);
          ch = dir < 0 ? lineObj.text.length - 1 : 0;
          var targetTop = measureCharPrepared(cm, prep, ch).top;
          ch = findFirst(function (ch) { return measureCharPrepared(cm, prep, ch).top == targetTop; }, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch);
          if (sticky == "before") { ch = moveCharLogically(lineObj, ch, 1); }
        } else { ch = dir < 0 ? part.to : part.from; }
        return new Pos(lineNo, ch, sticky)
      }
    }
    return new Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
  }

  function moveVisually(cm, line, start, dir) {
    var bidi = getOrder(line, cm.doc.direction);
    if (!bidi) { return moveLogically(line, start, dir) }
    if (start.ch >= line.text.length) {
      start.ch = line.text.length;
      start.sticky = "before";
    } else if (start.ch <= 0) {
      start.ch = 0;
      start.sticky = "after";
    }
    var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
    if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
      // Case 1: We move within an ltr part in an ltr editor. Even with wrapped lines,
      // nothing interesting happens.
      return moveLogically(line, start, dir)
    }

    var mv = function (pos, dir) { return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir); };
    var prep;
    var getWrappedLineExtent = function (ch) {
      if (!cm.options.lineWrapping) { return {begin: 0, end: line.text.length} }
      prep = prep || prepareMeasureForLine(cm, line);
      return wrappedLineExtentChar(cm, line, prep, ch)
    };
    var wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);

    if (cm.doc.direction == "rtl" || part.level == 1) {
      var moveInStorageOrder = (part.level == 1) == (dir < 0);
      var ch = mv(start, moveInStorageOrder ? 1 : -1);
      if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
        // Case 2: We move within an rtl part or in an rtl editor on the same visual line
        var sticky = moveInStorageOrder ? "before" : "after";
        return new Pos(start.line, ch, sticky)
      }
    }

    // Case 3: Could not move within this bidi part in this visual line, so leave
    // the current bidi part

    var searchInVisualLine = function (partPos, dir, wrappedLineExtent) {
      var getRes = function (ch, moveInStorageOrder) { return moveInStorageOrder
        ? new Pos(start.line, mv(ch, 1), "before")
        : new Pos(start.line, ch, "after"); };

      for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
        var part = bidi[partPos];
        var moveInStorageOrder = (dir > 0) == (part.level != 1);
        var ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1);
        if (part.from <= ch && ch < part.to) { return getRes(ch, moveInStorageOrder) }
        ch = moveInStorageOrder ? part.from : mv(part.to, -1);
        if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) { return getRes(ch, moveInStorageOrder) }
      }
    };

    // Case 3a: Look for other bidi parts on the same visual line
    var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent);
    if (res) { return res }

    // Case 3b: Look for other bidi parts on the next visual line
    var nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1);
    if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
      res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
      if (res) { return res }
    }

    // Case 4: Nowhere to move
    return null
  }

  // Commands are parameter-less actions that can be performed on an
  // editor, mostly used for keybindings.
  var commands = {
    selectAll: selectAll,
    singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
    killLine: function (cm) { return deleteNearSelection(cm, function (range) {
      if (range.empty()) {
        var len = getLine(cm.doc, range.head.line).text.length;
        if (range.head.ch == len && range.head.line < cm.lastLine())
          { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
        else
          { return {from: range.head, to: Pos(range.head.line, len)} }
      } else {
        return {from: range.from(), to: range.to()}
      }
    }); },
    deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
      from: Pos(range.from().line, 0),
      to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
    }); }); },
    delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
      from: Pos(range.from().line, 0), to: range.from()
    }); }); },
    delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var leftPos = cm.coordsChar({left: 0, top: top}, "div");
      return {from: leftPos, to: range.from()}
    }); },
    delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
      return {from: range.from(), to: rightPos }
    }); },
    undo: function (cm) { return cm.undo(); },
    redo: function (cm) { return cm.redo(); },
    undoSelection: function (cm) { return cm.undoSelection(); },
    redoSelection: function (cm) { return cm.redoSelection(); },
    goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
    goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
    goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
      {origin: "+move", bias: 1}
    ); },
    goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
      {origin: "+move", bias: 1}
    ); },
    goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
      {origin: "+move", bias: -1}
    ); },
    goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
    }, sel_move); },
    goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({left: 0, top: top}, "div")
    }, sel_move); },
    goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      var pos = cm.coordsChar({left: 0, top: top}, "div");
      if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
      return pos
    }, sel_move); },
    goLineUp: function (cm) { return cm.moveV(-1, "line"); },
    goLineDown: function (cm) { return cm.moveV(1, "line"); },
    goPageUp: function (cm) { return cm.moveV(-1, "page"); },
    goPageDown: function (cm) { return cm.moveV(1, "page"); },
    goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
    goCharRight: function (cm) { return cm.moveH(1, "char"); },
    goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
    goColumnRight: function (cm) { return cm.moveH(1, "column"); },
    goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
    goGroupRight: function (cm) { return cm.moveH(1, "group"); },
    goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
    goWordRight: function (cm) { return cm.moveH(1, "word"); },
    delCharBefore: function (cm) { return cm.deleteH(-1, "codepoint"); },
    delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
    delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
    delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
    delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
    delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
    indentAuto: function (cm) { return cm.indentSelection("smart"); },
    indentMore: function (cm) { return cm.indentSelection("add"); },
    indentLess: function (cm) { return cm.indentSelection("subtract"); },
    insertTab: function (cm) { return cm.replaceSelection("\t"); },
    insertSoftTab: function (cm) {
      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
      for (var i = 0; i < ranges.length; i++) {
        var pos = ranges[i].from();
        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
        spaces.push(spaceStr(tabSize - col % tabSize));
      }
      cm.replaceSelections(spaces);
    },
    defaultTab: function (cm) {
      if (cm.somethingSelected()) { cm.indentSelection("add"); }
      else { cm.execCommand("insertTab"); }
    },
    // Swap the two chars left and right of each selection's head.
    // Move cursor behind the two swapped characters afterwards.
    //
    // Doesn't consider line feeds a character.
    // Doesn't scan more than one line above to find a character.
    // Doesn't do anything on an empty line.
    // Doesn't do anything with non-empty selections.
    transposeChars: function (cm) { return runInOp(cm, function () {
      var ranges = cm.listSelections(), newSel = [];
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty()) { continue }
        var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
        if (line) {
          if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1); }
          if (cur.ch > 0) {
            cur = new Pos(cur.line, cur.ch + 1);
            cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                            Pos(cur.line, cur.ch - 2), cur, "+transpose");
          } else if (cur.line > cm.doc.first) {
            var prev = getLine(cm.doc, cur.line - 1).text;
            if (prev) {
              cur = new Pos(cur.line, 1);
              cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                              prev.charAt(prev.length - 1),
                              Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
            }
          }
        }
        newSel.push(new Range(cur, cur));
      }
      cm.setSelections(newSel);
    }); },
    newlineAndIndent: function (cm) { return runInOp(cm, function () {
      var sels = cm.listSelections();
      for (var i = sels.length - 1; i >= 0; i--)
        { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input"); }
      sels = cm.listSelections();
      for (var i$1 = 0; i$1 < sels.length; i$1++)
        { cm.indentLine(sels[i$1].from().line, null, true); }
      ensureCursorVisible(cm);
    }); },
    openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
    toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
  };


  function lineStart(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLine(line);
    if (visual != line) { lineN = lineNo(visual); }
    return endOfLine(true, cm, visual, lineN, 1)
  }
  function lineEnd(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLineEnd(line);
    if (visual != line) { lineN = lineNo(visual); }
    return endOfLine(true, cm, line, lineN, -1)
  }
  function lineStartSmart(cm, pos) {
    var start = lineStart(cm, pos.line);
    var line = getLine(cm.doc, start.line);
    var order = getOrder(line, cm.doc.direction);
    if (!order || order[0].level == 0) {
      var firstNonWS = Math.max(start.ch, line.text.search(/\S/));
      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
      return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky)
    }
    return start
  }

  // Run a handler that was bound to a key.
  function doHandleBinding(cm, bound, dropShift) {
    if (typeof bound == "string") {
      bound = commands[bound];
      if (!bound) { return false }
    }
    // Ensure previous input has been read, so that the handler sees a
    // consistent view of the document
    cm.display.input.ensurePolled();
    var prevShift = cm.display.shift, done = false;
    try {
      if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
      if (dropShift) { cm.display.shift = false; }
      done = bound(cm) != Pass;
    } finally {
      cm.display.shift = prevShift;
      cm.state.suppressEdits = false;
    }
    return done
  }

  function lookupKeyForEditor(cm, name, handle) {
    for (var i = 0; i < cm.state.keyMaps.length; i++) {
      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
      if (result) { return result }
    }
    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
      || lookupKey(name, cm.options.keyMap, handle, cm)
  }

  // Note that, despite the name, this function is also used to check
  // for bound mouse clicks.

  var stopSeq = new Delayed;

  function dispatchKey(cm, name, e, handle) {
    var seq = cm.state.keySeq;
    if (seq) {
      if (isModifierKey(name)) { return "handled" }
      if (/\'$/.test(name))
        { cm.state.keySeq = null; }
      else
        { stopSeq.set(50, function () {
          if (cm.state.keySeq == seq) {
            cm.state.keySeq = null;
            cm.display.input.reset();
          }
        }); }
      if (dispatchKeyInner(cm, seq + " " + name, e, handle)) { return true }
    }
    return dispatchKeyInner(cm, name, e, handle)
  }

  function dispatchKeyInner(cm, name, e, handle) {
    var result = lookupKeyForEditor(cm, name, handle);

    if (result == "multi")
      { cm.state.keySeq = name; }
    if (result == "handled")
      { signalLater(cm, "keyHandled", cm, name, e); }

    if (result == "handled" || result == "multi") {
      e_preventDefault(e);
      restartBlink(cm);
    }

    return !!result
  }

  // Handle a key from the keydown event.
  function handleKeyBinding(cm, e) {
    var name = keyName(e, true);
    if (!name) { return false }

    if (e.shiftKey && !cm.state.keySeq) {
      // First try to resolve full name (including 'Shift-'). Failing
      // that, see if there is a cursor-motion command (starting with
      // 'go') bound to the keyname without 'Shift-'.
      return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
          || dispatchKey(cm, name, e, function (b) {
               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
                 { return doHandleBinding(cm, b) }
             })
    } else {
      return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
    }
  }

  // Handle a key from the keypress event
  function handleCharBinding(cm, e, ch) {
    return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
  }

  var lastStoppedKey = null;
  function onKeyDown(e) {
    var cm = this;
    if (e.target && e.target != cm.display.input.getField()) { return }
    cm.curOp.focus = activeElt(doc(cm));
    if (signalDOMEvent(cm, e)) { return }
    // IE does strange things with escape.
    if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false; }
    var code = e.keyCode;
    cm.display.shift = code == 16 || e.shiftKey;
    var handled = handleKeyBinding(cm, e);
    if (presto) {
      lastStoppedKey = handled ? code : null;
      // Opera has no cut event... we try to at least catch the key combo
      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
        { cm.replaceSelection("", null, "cut"); }
    }
    if (gecko && !mac && !handled && code == 46 && e.shiftKey && !e.ctrlKey && document.execCommand)
      { document.execCommand("cut"); }

    // Turn mouse into crosshair when Alt is held on Mac.
    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
      { showCrossHair(cm); }
  }

  function showCrossHair(cm) {
    var lineDiv = cm.display.lineDiv;
    addClass(lineDiv, "CodeMirror-crosshair");

    function up(e) {
      if (e.keyCode == 18 || !e.altKey) {
        rmClass(lineDiv, "CodeMirror-crosshair");
        off(document, "keyup", up);
        off(document, "mouseover", up);
      }
    }
    on(document, "keyup", up);
    on(document, "mouseover", up);
  }

  function onKeyUp(e) {
    if (e.keyCode == 16) { this.doc.sel.shift = false; }
    signalDOMEvent(this, e);
  }

  function onKeyPress(e) {
    var cm = this;
    if (e.target && e.target != cm.display.input.getField()) { return }
    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
    var keyCode = e.keyCode, charCode = e.charCode;
    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
    // Some browsers fire keypress events for backspace
    if (ch == "\x08") { return }
    if (handleCharBinding(cm, e, ch)) { return }
    cm.display.input.onKeyPress(e);
  }

  var DOUBLECLICK_DELAY = 400;

  var PastClick = function(time, pos, button) {
    this.time = time;
    this.pos = pos;
    this.button = button;
  };

  PastClick.prototype.compare = function (time, pos, button) {
    return this.time + DOUBLECLICK_DELAY > time &&
      cmp(pos, this.pos) == 0 && button == this.button
  };

  var lastClick, lastDoubleClick;
  function clickRepeat(pos, button) {
    var now = +new Date;
    if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
      lastClick = lastDoubleClick = null;
      return "triple"
    } else if (lastClick && lastClick.compare(now, pos, button)) {
      lastDoubleClick = new PastClick(now, pos, button);
      lastClick = null;
      return "double"
    } else {
      lastClick = new PastClick(now, pos, button);
      lastDoubleClick = null;
      return "single"
    }
  }

  // A mouse down can be a single click, double click, triple click,
  // start of selection drag, start of text drag, new cursor
  // (ctrl-click), rectangle drag (alt-drag), or xwin
  // middle-click-paste. Or it might be a click on something we should
  // not interfere with, such as a scrollbar or widget.
  function onMouseDown(e) {
    var cm = this, display = cm.display;
    if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
    display.input.ensurePolled();
    display.shift = e.shiftKey;

    if (eventInWidget(display, e)) {
      if (!webkit) {
        // Briefly turn off draggability, to allow widgets to do
        // normal dragging things.
        display.scroller.draggable = false;
        setTimeout(function () { return display.scroller.draggable = true; }, 100);
      }
      return
    }
    if (clickInGutter(cm, e)) { return }
    var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
    win(cm).focus();

    // #3261: make sure, that we're not starting a second selection
    if (button == 1 && cm.state.selectingText)
      { cm.state.selectingText(e); }

    if (pos && handleMappedButton(cm, button, pos, repeat, e)) { return }

    if (button == 1) {
      if (pos) { leftButtonDown(cm, pos, repeat, e); }
      else if (e_target(e) == display.scroller) { e_preventDefault(e); }
    } else if (button == 2) {
      if (pos) { extendSelection(cm.doc, pos); }
      setTimeout(function () { return display.input.focus(); }, 20);
    } else if (button == 3) {
      if (captureRightClick) { cm.display.input.onContextMenu(e); }
      else { delayBlurEvent(cm); }
    }
  }

  function handleMappedButton(cm, button, pos, repeat, event) {
    var name = "Click";
    if (repeat == "double") { name = "Double" + name; }
    else if (repeat == "triple") { name = "Triple" + name; }
    name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;

    return dispatchKey(cm,  addModifierNames(name, event), event, function (bound) {
      if (typeof bound == "string") { bound = commands[bound]; }
      if (!bound) { return false }
      var done = false;
      try {
        if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
        done = bound(cm, pos) != Pass;
      } finally {
        cm.state.suppressEdits = false;
      }
      return done
    })
  }

  function configureMouse(cm, repeat, event) {
    var option = cm.getOption("configureMouse");
    var value = option ? option(cm, repeat, event) : {};
    if (value.unit == null) {
      var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
      value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
    }
    if (value.extend == null || cm.doc.extend) { value.extend = cm.doc.extend || event.shiftKey; }
    if (value.addNew == null) { value.addNew = mac ? event.metaKey : event.ctrlKey; }
    if (value.moveOnDrag == null) { value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey); }
    return value
  }

  function leftButtonDown(cm, pos, repeat, event) {
    if (ie) { setTimeout(bind(ensureFocus, cm), 0); }
    else { cm.curOp.focus = activeElt(doc(cm)); }

    var behavior = configureMouse(cm, repeat, event);

    var sel = cm.doc.sel, contained;
    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
        repeat == "single" && (contained = sel.contains(pos)) > -1 &&
        (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) &&
        (cmp(contained.to(), pos) > 0 || pos.xRel < 0))
      { leftButtonStartDrag(cm, event, pos, behavior); }
    else
      { leftButtonSelect(cm, event, pos, behavior); }
  }

  // Start a text drag. When it ends, see if any dragging actually
  // happen, and treat as a click if it didn't.
  function leftButtonStartDrag(cm, event, pos, behavior) {
    var display = cm.display, moved = false;
    var dragEnd = operation(cm, function (e) {
      if (webkit) { display.scroller.draggable = false; }
      cm.state.draggingText = false;
      if (cm.state.delayingBlurEvent) {
        if (cm.hasFocus()) { cm.state.delayingBlurEvent = false; }
        else { delayBlurEvent(cm); }
      }
      off(display.wrapper.ownerDocument, "mouseup", dragEnd);
      off(display.wrapper.ownerDocument, "mousemove", mouseMove);
      off(display.scroller, "dragstart", dragStart);
      off(display.scroller, "drop", dragEnd);
      if (!moved) {
        e_preventDefault(e);
        if (!behavior.addNew)
          { extendSelection(cm.doc, pos, null, null, behavior.extend); }
        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
        if ((webkit && !safari) || ie && ie_version == 9)
          { setTimeout(function () {display.wrapper.ownerDocument.body.focus({preventScroll: true}); display.input.focus();}, 20); }
        else
          { display.input.focus(); }
      }
    });
    var mouseMove = function(e2) {
      moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
    };
    var dragStart = function () { return moved = true; };
    // Let the drag handler handle this.
    if (webkit) { display.scroller.draggable = true; }
    cm.state.draggingText = dragEnd;
    dragEnd.copy = !behavior.moveOnDrag;
    on(display.wrapper.ownerDocument, "mouseup", dragEnd);
    on(display.wrapper.ownerDocument, "mousemove", mouseMove);
    on(display.scroller, "dragstart", dragStart);
    on(display.scroller, "drop", dragEnd);

    cm.state.delayingBlurEvent = true;
    setTimeout(function () { return display.input.focus(); }, 20);
    // IE's approach to draggable
    if (display.scroller.dragDrop) { display.scroller.dragDrop(); }
  }

  function rangeForUnit(cm, pos, unit) {
    if (unit == "char") { return new Range(pos, pos) }
    if (unit == "word") { return cm.findWordAt(pos) }
    if (unit == "line") { return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
    var result = unit(cm, pos);
    return new Range(result.from, result.to)
  }

  // Normal selection, as opposed to text dragging.
  function leftButtonSelect(cm, event, start, behavior) {
    if (ie) { delayBlurEvent(cm); }
    var display = cm.display, doc$1 = cm.doc;
    e_preventDefault(event);

    var ourRange, ourIndex, startSel = doc$1.sel, ranges = startSel.ranges;
    if (behavior.addNew && !behavior.extend) {
      ourIndex = doc$1.sel.contains(start);
      if (ourIndex > -1)
        { ourRange = ranges[ourIndex]; }
      else
        { ourRange = new Range(start, start); }
    } else {
      ourRange = doc$1.sel.primary();
      ourIndex = doc$1.sel.primIndex;
    }

    if (behavior.unit == "rectangle") {
      if (!behavior.addNew) { ourRange = new Range(start, start); }
      start = posFromMouse(cm, event, true, true);
      ourIndex = -1;
    } else {
      var range = rangeForUnit(cm, start, behavior.unit);
      if (behavior.extend)
        { ourRange = extendRange(ourRange, range.anchor, range.head, behavior.extend); }
      else
        { ourRange = range; }
    }

    if (!behavior.addNew) {
      ourIndex = 0;
      setSelection(doc$1, new Selection([ourRange], 0), sel_mouse);
      startSel = doc$1.sel;
    } else if (ourIndex == -1) {
      ourIndex = ranges.length;
      setSelection(doc$1, normalizeSelection(cm, ranges.concat([ourRange]), ourIndex),
                   {scroll: false, origin: "*mouse"});
    } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
      setSelection(doc$1, normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
                   {scroll: false, origin: "*mouse"});
      startSel = doc$1.sel;
    } else {
      replaceOneSelection(doc$1, ourIndex, ourRange, sel_mouse);
    }

    var lastPos = start;
    function extendTo(pos) {
      if (cmp(lastPos, pos) == 0) { return }
      lastPos = pos;

      if (behavior.unit == "rectangle") {
        var ranges = [], tabSize = cm.options.tabSize;
        var startCol = countColumn(getLine(doc$1, start.line).text, start.ch, tabSize);
        var posCol = countColumn(getLine(doc$1, pos.line).text, pos.ch, tabSize);
        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
             line <= end; line++) {
          var text = getLine(doc$1, line).text, leftPos = findColumn(text, left, tabSize);
          if (left == right)
            { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))); }
          else if (text.length > leftPos)
            { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))); }
        }
        if (!ranges.length) { ranges.push(new Range(start, start)); }
        setSelection(doc$1, normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                     {origin: "*mouse", scroll: false});
        cm.scrollIntoView(pos);
      } else {
        var oldRange = ourRange;
        var range = rangeForUnit(cm, pos, behavior.unit);
        var anchor = oldRange.anchor, head;
        if (cmp(range.anchor, anchor) > 0) {
          head = range.head;
          anchor = minPos(oldRange.from(), range.anchor);
        } else {
          head = range.anchor;
          anchor = maxPos(oldRange.to(), range.head);
        }
        var ranges$1 = startSel.ranges.slice(0);
        ranges$1[ourIndex] = bidiSimplify(cm, new Range(clipPos(doc$1, anchor), head));
        setSelection(doc$1, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
      }
    }

    var editorSize = display.wrapper.getBoundingClientRect();
    // Used to ensure timeout re-tries don't fire when another extend
    // happened in the meantime (clearTimeout isn't reliable -- at
    // least on Chrome, the timeouts still happen even when cleared,
    // if the clear happens after their scheduled firing time).
    var counter = 0;

    function extend(e) {
      var curCount = ++counter;
      var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
      if (!cur) { return }
      if (cmp(cur, lastPos) != 0) {
        cm.curOp.focus = activeElt(doc(cm));
        extendTo(cur);
        var visible = visibleLines(display, doc$1);
        if (cur.line >= visible.to || cur.line < visible.from)
          { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e); }}), 150); }
      } else {
        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
        if (outside) { setTimeout(operation(cm, function () {
          if (counter != curCount) { return }
          display.scroller.scrollTop += outside;
          extend(e);
        }), 50); }
      }
    }

    function done(e) {
      cm.state.selectingText = false;
      counter = Infinity;
      // If e is null or undefined we interpret this as someone trying
      // to explicitly cancel the selection rather than the user
      // letting go of the mouse button.
      if (e) {
        e_preventDefault(e);
        display.input.focus();
      }
      off(display.wrapper.ownerDocument, "mousemove", move);
      off(display.wrapper.ownerDocument, "mouseup", up);
      doc$1.history.lastSelOrigin = null;
    }

    var move = operation(cm, function (e) {
      if (e.buttons === 0 || !e_button(e)) { done(e); }
      else { extend(e); }
    });
    var up = operation(cm, done);
    cm.state.selectingText = up;
    on(display.wrapper.ownerDocument, "mousemove", move);
    on(display.wrapper.ownerDocument, "mouseup", up);
  }

  // Used when mouse-selecting to adjust the anchor to the proper side
  // of a bidi jump depending on the visual position of the head.
  function bidiSimplify(cm, range) {
    var anchor = range.anchor;
    var head = range.head;
    var anchorLine = getLine(cm.doc, anchor.line);
    if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) { return range }
    var order = getOrder(anchorLine);
    if (!order) { return range }
    var index = getBidiPartAt(order, anchor.ch, anchor.sticky), part = order[index];
    if (part.from != anchor.ch && part.to != anchor.ch) { return range }
    var boundary = index + ((part.from == anchor.ch) == (part.level != 1) ? 0 : 1);
    if (boundary == 0 || boundary == order.length) { return range }

    // Compute the relative visual position of the head compared to the
    // anchor (<0 is to the left, >0 to the right)
    var leftSide;
    if (head.line != anchor.line) {
      leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
    } else {
      var headIndex = getBidiPartAt(order, head.ch, head.sticky);
      var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);
      if (headIndex == boundary - 1 || headIndex == boundary)
        { leftSide = dir < 0; }
      else
        { leftSide = dir > 0; }
    }

    var usePart = order[boundary + (leftSide ? -1 : 0)];
    var from = leftSide == (usePart.level == 1);
    var ch = from ? usePart.from : usePart.to, sticky = from ? "after" : "before";
    return anchor.ch == ch && anchor.sticky == sticky ? range : new Range(new Pos(anchor.line, ch, sticky), head)
  }


  // Determines whether an event happened in the gutter, and fires the
  // handlers for the corresponding event.
  function gutterEvent(cm, e, type, prevent) {
    var mX, mY;
    if (e.touches) {
      mX = e.touches[0].clientX;
      mY = e.touches[0].clientY;
    } else {
      try { mX = e.clientX; mY = e.clientY; }
      catch(e$1) { return false }
    }
    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
    if (prevent) { e_preventDefault(e); }

    var display = cm.display;
    var lineBox = display.lineDiv.getBoundingClientRect();

    if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
    mY -= lineBox.top - display.viewOffset;

    for (var i = 0; i < cm.display.gutterSpecs.length; ++i) {
      var g = display.gutters.childNodes[i];
      if (g && g.getBoundingClientRect().right >= mX) {
        var line = lineAtHeight(cm.doc, mY);
        var gutter = cm.display.gutterSpecs[i];
        signal(cm, type, cm, line, gutter.className, e);
        return e_defaultPrevented(e)
      }
    }
  }

  function clickInGutter(cm, e) {
    return gutterEvent(cm, e, "gutterClick", true)
  }

  // CONTEXT MENU HANDLING

  // To make the context menu work, we need to briefly unhide the
  // textarea (making it as unobtrusive as possible) to let the
  // right-click take effect on it.
  function onContextMenu(cm, e) {
    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
    if (signalDOMEvent(cm, e, "contextmenu")) { return }
    if (!captureRightClick) { cm.display.input.onContextMenu(e); }
  }

  function contextMenuInGutter(cm, e) {
    if (!hasHandler(cm, "gutterContextMenu")) { return false }
    return gutterEvent(cm, e, "gutterContextMenu", false)
  }

  function themeChanged(cm) {
    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
    clearCaches(cm);
  }

  var Init = {toString: function(){return "CodeMirror.Init"}};

  var defaults = {};
  var optionHandlers = {};

  function defineOptions(CodeMirror) {
    var optionHandlers = CodeMirror.optionHandlers;

    function option(name, deflt, handle, notOnInit) {
      CodeMirror.defaults[name] = deflt;
      if (handle) { optionHandlers[name] =
        notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old); }} : handle; }
    }

    CodeMirror.defineOption = option;

    // Passed to option handlers when there is no old value.
    CodeMirror.Init = Init;

    // These two are, on init, called from the constructor because they
    // have to be initialized before the editor can start at all.
    option("value", "", function (cm, val) { return cm.setValue(val); }, true);
    option("mode", null, function (cm, val) {
      cm.doc.modeOption = val;
      loadMode(cm);
    }, true);

    option("indentUnit", 2, loadMode, true);
    option("indentWithTabs", false);
    option("smartIndent", true);
    option("tabSize", 4, function (cm) {
      resetModeState(cm);
      clearCaches(cm);
      regChange(cm);
    }, true);

    option("lineSeparator", null, function (cm, val) {
      cm.doc.lineSep = val;
      if (!val) { return }
      var newBreaks = [], lineNo = cm.doc.first;
      cm.doc.iter(function (line) {
        for (var pos = 0;;) {
          var found = line.text.indexOf(val, pos);
          if (found == -1) { break }
          pos = found + val.length;
          newBreaks.push(Pos(lineNo, found));
        }
        lineNo++;
      });
      for (var i = newBreaks.length - 1; i >= 0; i--)
        { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)); }
    });
    option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (cm, val, old) {
      cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
      if (old != Init) { cm.refresh(); }
    });
    option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true);
    option("electricChars", true);
    option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
      throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
    }, true);
    option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true);
    option("autocorrect", false, function (cm, val) { return cm.getInputField().autocorrect = val; }, true);
    option("autocapitalize", false, function (cm, val) { return cm.getInputField().autocapitalize = val; }, true);
    option("rtlMoveVisually", !windows);
    option("wholeLineUpdateBefore", true);

    option("theme", "default", function (cm) {
      themeChanged(cm);
      updateGutters(cm);
    }, true);
    option("keyMap", "default", function (cm, val, old) {
      var next = getKeyMap(val);
      var prev = old != Init && getKeyMap(old);
      if (prev && prev.detach) { prev.detach(cm, next); }
      if (next.attach) { next.attach(cm, prev || null); }
    });
    option("extraKeys", null);
    option("configureMouse", null);

    option("lineWrapping", false, wrappingChanged, true);
    option("gutters", [], function (cm, val) {
      cm.display.gutterSpecs = getGutters(val, cm.options.lineNumbers);
      updateGutters(cm);
    }, true);
    option("fixedGutter", true, function (cm, val) {
      cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
      cm.refresh();
    }, true);
    option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true);
    option("scrollbarStyle", "native", function (cm) {
      initScrollbars(cm);
      updateScrollbars(cm);
      cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
      cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
    }, true);
    option("lineNumbers", false, function (cm, val) {
      cm.display.gutterSpecs = getGutters(cm.options.gutters, val);
      updateGutters(cm);
    }, true);
    option("firstLineNumber", 1, updateGutters, true);
    option("lineNumberFormatter", function (integer) { return integer; }, updateGutters, true);
    option("showCursorWhenSelecting", false, updateSelection, true);

    option("resetSelectionOnContextMenu", true);
    option("lineWiseCopyCut", true);
    option("pasteLinesPerSelection", true);
    option("selectionsMayTouch", false);

    option("readOnly", false, function (cm, val) {
      if (val == "nocursor") {
        onBlur(cm);
        cm.display.input.blur();
      }
      cm.display.input.readOnlyChanged(val);
    });

    option("screenReaderLabel", null, function (cm, val) {
      val = (val === '') ? null : val;
      cm.display.input.screenReaderLabelChanged(val);
    });

    option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset(); }}, true);
    option("dragDrop", true, dragDropChanged);
    option("allowDropFileTypes", null);

    option("cursorBlinkRate", 530);
    option("cursorScrollMargin", 0);
    option("cursorHeight", 1, updateSelection, true);
    option("singleCursorHeightPerLine", true, updateSelection, true);
    option("workTime", 100);
    option("workDelay", 100);
    option("flattenSpans", true, resetModeState, true);
    option("addModeClass", false, resetModeState, true);
    option("pollInterval", 100);
    option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; });
    option("historyEventDelay", 1250);
    option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true);
    option("maxHighlightLength", 10000, resetModeState, true);
    option("moveInputWithCursor", true, function (cm, val) {
      if (!val) { cm.display.input.resetPosition(); }
    });

    option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; });
    option("autofocus", null);
    option("direction", "ltr", function (cm, val) { return cm.doc.setDirection(val); }, true);
    option("phrases", null);
  }

  function dragDropChanged(cm, value, old) {
    var wasOn = old && old != Init;
    if (!value != !wasOn) {
      var funcs = cm.display.dragFunctions;
      var toggle = value ? on : off;
      toggle(cm.display.scroller, "dragstart", funcs.start);
      toggle(cm.display.scroller, "dragenter", funcs.enter);
      toggle(cm.display.scroller, "dragover", funcs.over);
      toggle(cm.display.scroller, "dragleave", funcs.leave);
      toggle(cm.display.scroller, "drop", funcs.drop);
    }
  }

  function wrappingChanged(cm) {
    if (cm.options.lineWrapping) {
      addClass(cm.display.wrapper, "CodeMirror-wrap");
      cm.display.sizer.style.minWidth = "";
      cm.display.sizerWidth = null;
    } else {
      rmClass(cm.display.wrapper, "CodeMirror-wrap");
      findMaxLine(cm);
    }
    estimateLineHeights(cm);
    regChange(cm);
    clearCaches(cm);
    setTimeout(function () { return updateScrollbars(cm); }, 100);
  }

  // A CodeMirror instance represents an editor. This is the object
  // that user code is usually dealing with.

  function CodeMirror(place, options) {
    var this$1 = this;

    if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

    this.options = options = options ? copyObj(options) : {};
    // Determine effective options based on given values and defaults.
    copyObj(defaults, options, false);

    var doc = options.value;
    if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction); }
    else if (options.mode) { doc.modeOption = options.mode; }
    this.doc = doc;

    var input = new CodeMirror.inputStyles[options.inputStyle](this);
    var display = this.display = new Display(place, doc, input, options);
    display.wrapper.CodeMirror = this;
    themeChanged(this);
    if (options.lineWrapping)
      { this.display.wrapper.className += " CodeMirror-wrap"; }
    initScrollbars(this);

    this.state = {
      keyMaps: [],  // stores maps added by addKeyMap
      overlays: [], // highlighting overlays, as added by addOverlay
      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
      overwrite: false,
      delayingBlurEvent: false,
      focused: false,
      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
      pasteIncoming: -1, cutIncoming: -1, // help recognize paste/cut edits in input.poll
      selectingText: false,
      draggingText: false,
      highlight: new Delayed(), // stores highlight worker timeout
      keySeq: null,  // Unfinished key sequence
      specialChars: null
    };

    if (options.autofocus && !mobile) { display.input.focus(); }

    // Override magic textarea content restore that IE sometimes does
    // on our hidden textarea on reload
    if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20); }

    registerEventHandlers(this);
    ensureGlobalHandlers();

    startOperation(this);
    this.curOp.forceUpdate = true;
    attachDoc(this, doc);

    if ((options.autofocus && !mobile) || this.hasFocus())
      { setTimeout(function () {
        if (this$1.hasFocus() && !this$1.state.focused) { onFocus(this$1); }
      }, 20); }
    else
      { onBlur(this); }

    for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
      { optionHandlers[opt](this, options[opt], Init); } }
    maybeUpdateLineNumberWidth(this);
    if (options.finishInit) { options.finishInit(this); }
    for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this); }
    endOperation(this);
    // Suppress optimizelegibility in Webkit, since it breaks text
    // measuring on line wrapping boundaries.
    if (webkit && options.lineWrapping &&
        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
      { display.lineDiv.style.textRendering = "auto"; }
  }

  // The default configuration options.
  CodeMirror.defaults = defaults;
  // Functions to run when options are changed.
  CodeMirror.optionHandlers = optionHandlers;

  // Attach the necessary event handlers when initializing the editor
  function registerEventHandlers(cm) {
    var d = cm.display;
    on(d.scroller, "mousedown", operation(cm, onMouseDown));
    // Older IE's will not fire a second mousedown for a double click
    if (ie && ie_version < 11)
      { on(d.scroller, "dblclick", operation(cm, function (e) {
        if (signalDOMEvent(cm, e)) { return }
        var pos = posFromMouse(cm, e);
        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
        e_preventDefault(e);
        var word = cm.findWordAt(pos);
        extendSelection(cm.doc, word.anchor, word.head);
      })); }
    else
      { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }); }
    // Some browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for these browsers.
    on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); });
    on(d.input.getField(), "contextmenu", function (e) {
      if (!d.scroller.contains(e.target)) { onContextMenu(cm, e); }
    });

    // Used to suppress mouse event handling when a touch happens
    var touchFinished, prevTouch = {end: 0};
    function finishTouch() {
      if (d.activeTouch) {
        touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000);
        prevTouch = d.activeTouch;
        prevTouch.end = +new Date;
      }
    }
    function isMouseLikeTouchEvent(e) {
      if (e.touches.length != 1) { return false }
      var touch = e.touches[0];
      return touch.radiusX <= 1 && touch.radiusY <= 1
    }
    function farAway(touch, other) {
      if (other.left == null) { return true }
      var dx = other.left - touch.left, dy = other.top - touch.top;
      return dx * dx + dy * dy > 20 * 20
    }
    on(d.scroller, "touchstart", function (e) {
      if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
        d.input.ensurePolled();
        clearTimeout(touchFinished);
        var now = +new Date;
        d.activeTouch = {start: now, moved: false,
                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
        if (e.touches.length == 1) {
          d.activeTouch.left = e.touches[0].pageX;
          d.activeTouch.top = e.touches[0].pageY;
        }
      }
    });
    on(d.scroller, "touchmove", function () {
      if (d.activeTouch) { d.activeTouch.moved = true; }
    });
    on(d.scroller, "touchend", function (e) {
      var touch = d.activeTouch;
      if (touch && !eventInWidget(d, e) && touch.left != null &&
          !touch.moved && new Date - touch.start < 300) {
        var pos = cm.coordsChar(d.activeTouch, "page"), range;
        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
          { range = new Range(pos, pos); }
        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
          { range = cm.findWordAt(pos); }
        else // Triple tap
          { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))); }
        cm.setSelection(range.anchor, range.head);
        cm.focus();
        e_preventDefault(e);
      }
      finishTouch();
    });
    on(d.scroller, "touchcancel", finishTouch);

    // Sync scrolling between fake scrollbars and real scrollable
    // area, ensure viewport is updated when scrolling.
    on(d.scroller, "scroll", function () {
      if (d.scroller.clientHeight) {
        updateScrollTop(cm, d.scroller.scrollTop);
        setScrollLeft(cm, d.scroller.scrollLeft, true);
        signal(cm, "scroll", cm);
      }
    });

    // Listen to wheel events in order to try and update the viewport on time.
    on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); });
    on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); });

    // Prevent wrapper from ever scrolling
    on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

    d.dragFunctions = {
      enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e); }},
      over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
      start: function (e) { return onDragStart(cm, e); },
      drop: operation(cm, onDrop),
      leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
    };

    var inp = d.input.getField();
    on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); });
    on(inp, "keydown", operation(cm, onKeyDown));
    on(inp, "keypress", operation(cm, onKeyPress));
    on(inp, "focus", function (e) { return onFocus(cm, e); });
    on(inp, "blur", function (e) { return onBlur(cm, e); });
  }

  var initHooks = [];
  CodeMirror.defineInitHook = function (f) { return initHooks.push(f); };

  // Indent the given line. The how parameter can be "smart",
  // "add"/null, "subtract", or "prev". When aggressive is false
  // (typically set to true for forced single-line indents), empty
  // lines are not indented, and places where the mode returns Pass
  // are left alone.
  function indentLine(cm, n, how, aggressive) {
    var doc = cm.doc, state;
    if (how == null) { how = "add"; }
    if (how == "smart") {
      // Fall back to "prev" when the mode doesn't have an indentation
      // method.
      if (!doc.mode.indent) { how = "prev"; }
      else { state = getContextBefore(cm, n).state; }
    }

    var tabSize = cm.options.tabSize;
    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
    if (line.stateAfter) { line.stateAfter = null; }
    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
    if (!aggressive && !/\S/.test(line.text)) {
      indentation = 0;
      how = "not";
    } else if (how == "smart") {
      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
      if (indentation == Pass || indentation > 150) {
        if (!aggressive) { return }
        how = "prev";
      }
    }
    if (how == "prev") {
      if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize); }
      else { indentation = 0; }
    } else if (how == "add") {
      indentation = curSpace + cm.options.indentUnit;
    } else if (how == "subtract") {
      indentation = curSpace - cm.options.indentUnit;
    } else if (typeof how == "number") {
      indentation = curSpace + how;
    }
    indentation = Math.max(0, indentation);

    var indentString = "", pos = 0;
    if (cm.options.indentWithTabs)
      { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";} }
    if (pos < indentation) { indentString += spaceStr(indentation - pos); }

    if (indentString != curSpaceString) {
      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
      line.stateAfter = null;
      return true
    } else {
      // Ensure that, if the cursor was in the whitespace at the start
      // of the line, it is moved to the end of that space.
      for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
        var range = doc.sel.ranges[i$1];
        if (range.head.line == n && range.head.ch < curSpaceString.length) {
          var pos$1 = Pos(n, curSpaceString.length);
          replaceOneSelection(doc, i$1, new Range(pos$1, pos$1));
          break
        }
      }
    }
  }

  // This will be set to a {lineWise: bool, text: [string]} object, so
  // that, when pasting, we know what kind of selections the copied
  // text was made out of.
  var lastCopied = null;

  function setLastCopied(newLastCopied) {
    lastCopied = newLastCopied;
  }

  function applyTextInput(cm, inserted, deleted, sel, origin) {
    var doc = cm.doc;
    cm.display.shift = false;
    if (!sel) { sel = doc.sel; }

    var recent = +new Date - 200;
    var paste = origin == "paste" || cm.state.pasteIncoming > recent;
    var textLines = splitLinesAuto(inserted), multiPaste = null;
    // When pasting N lines into N selections, insert one line per selection
    if (paste && sel.ranges.length > 1) {
      if (lastCopied && lastCopied.text.join("\n") == inserted) {
        if (sel.ranges.length % lastCopied.text.length == 0) {
          multiPaste = [];
          for (var i = 0; i < lastCopied.text.length; i++)
            { multiPaste.push(doc.splitLines(lastCopied.text[i])); }
        }
      } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
        multiPaste = map(textLines, function (l) { return [l]; });
      }
    }

    var updateInput = cm.curOp.updateInput;
    // Normal behavior is to insert the new text into every selection
    for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
      var range = sel.ranges[i$1];
      var from = range.from(), to = range.to();
      if (range.empty()) {
        if (deleted && deleted > 0) // Handle deletion
          { from = Pos(from.line, from.ch - deleted); }
        else if (cm.state.overwrite && !paste) // Handle overwrite
          { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)); }
        else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n"))
          { from = to = Pos(from.line, 0); }
      }
      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
                         origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")};
      makeChange(cm.doc, changeEvent);
      signalLater(cm, "inputRead", cm, changeEvent);
    }
    if (inserted && !paste)
      { triggerElectric(cm, inserted); }

    ensureCursorVisible(cm);
    if (cm.curOp.updateInput < 2) { cm.curOp.updateInput = updateInput; }
    cm.curOp.typing = true;
    cm.state.pasteIncoming = cm.state.cutIncoming = -1;
  }

  function handlePaste(e, cm) {
    var pasted = e.clipboardData && e.clipboardData.getData("Text");
    if (pasted) {
      e.preventDefault();
      if (!cm.isReadOnly() && !cm.options.disableInput && cm.hasFocus())
        { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }); }
      return true
    }
  }

  function triggerElectric(cm, inserted) {
    // When an 'electric' character is inserted, immediately trigger a reindent
    if (!cm.options.electricChars || !cm.options.smartIndent) { return }
    var sel = cm.doc.sel;

    for (var i = sel.ranges.length - 1; i >= 0; i--) {
      var range = sel.ranges[i];
      if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) { continue }
      var mode = cm.getModeAt(range.head);
      var indented = false;
      if (mode.electricChars) {
        for (var j = 0; j < mode.electricChars.length; j++)
          { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
            indented = indentLine(cm, range.head.line, "smart");
            break
          } }
      } else if (mode.electricInput) {
        if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
          { indented = indentLine(cm, range.head.line, "smart"); }
      }
      if (indented) { signalLater(cm, "electricInput", cm, range.head.line); }
    }
  }

  function copyableRanges(cm) {
    var text = [], ranges = [];
    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
      var line = cm.doc.sel.ranges[i].head.line;
      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
      ranges.push(lineRange);
      text.push(cm.getRange(lineRange.anchor, lineRange.head));
    }
    return {text: text, ranges: ranges}
  }

  function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
    field.setAttribute("autocorrect", autocorrect ? "" : "off");
    field.setAttribute("autocapitalize", autocapitalize ? "" : "off");
    field.setAttribute("spellcheck", !!spellcheck);
  }

  function hiddenTextarea() {
    var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none");
    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
    // The textarea is kept positioned near the cursor to prevent the
    // fact that it'll be scrolled into view on input from scrolling
    // our fake cursor out of view. On webkit, when wrap=off, paste is
    // very slow. So make the area wide instead.
    if (webkit) { te.style.width = "1000px"; }
    else { te.setAttribute("wrap", "off"); }
    // If border: 0; -- iOS fails to open keyboard (issue #1287)
    if (ios) { te.style.border = "1px solid black"; }
    disableBrowserMagic(te);
    return div
  }

  // The publicly visible API. Note that methodOp(f) means
  // 'wrap f in an operation, performed on its `this` parameter'.

  // This is not the complete set of editor methods. Most of the
  // methods defined on the Doc type are also injected into
  // CodeMirror.prototype, for backwards compatibility and
  // convenience.

  function addEditorMethods(CodeMirror) {
    var optionHandlers = CodeMirror.optionHandlers;

    var helpers = CodeMirror.helpers = {};

    CodeMirror.prototype = {
      constructor: CodeMirror,
      focus: function(){win(this).focus(); this.display.input.focus();},

      setOption: function(option, value) {
        var options = this.options, old = options[option];
        if (options[option] == value && option != "mode") { return }
        options[option] = value;
        if (optionHandlers.hasOwnProperty(option))
          { operation(this, optionHandlers[option])(this, value, old); }
        signal(this, "optionChange", this, option);
      },

      getOption: function(option) {return this.options[option]},
      getDoc: function() {return this.doc},

      addKeyMap: function(map, bottom) {
        this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
      },
      removeKeyMap: function(map) {
        var maps = this.state.keyMaps;
        for (var i = 0; i < maps.length; ++i)
          { if (maps[i] == map || maps[i].name == map) {
            maps.splice(i, 1);
            return true
          } }
      },

      addOverlay: methodOp(function(spec, options) {
        var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
        if (mode.startState) { throw new Error("Overlays may not be stateful.") }
        insertSorted(this.state.overlays,
                     {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                      priority: (options && options.priority) || 0},
                     function (overlay) { return overlay.priority; });
        this.state.modeGen++;
        regChange(this);
      }),
      removeOverlay: methodOp(function(spec) {
        var overlays = this.state.overlays;
        for (var i = 0; i < overlays.length; ++i) {
          var cur = overlays[i].modeSpec;
          if (cur == spec || typeof spec == "string" && cur.name == spec) {
            overlays.splice(i, 1);
            this.state.modeGen++;
            regChange(this);
            return
          }
        }
      }),

      indentLine: methodOp(function(n, dir, aggressive) {
        if (typeof dir != "string" && typeof dir != "number") {
          if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev"; }
          else { dir = dir ? "add" : "subtract"; }
        }
        if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive); }
      }),
      indentSelection: methodOp(function(how) {
        var ranges = this.doc.sel.ranges, end = -1;
        for (var i = 0; i < ranges.length; i++) {
          var range = ranges[i];
          if (!range.empty()) {
            var from = range.from(), to = range.to();
            var start = Math.max(end, from.line);
            end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
            for (var j = start; j < end; ++j)
              { indentLine(this, j, how); }
            var newRanges = this.doc.sel.ranges;
            if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
              { replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll); }
          } else if (range.head.line > end) {
            indentLine(this, range.head.line, how, true);
            end = range.head.line;
            if (i == this.doc.sel.primIndex) { ensureCursorVisible(this); }
          }
        }
      }),

      // Fetch the parser token for a given character. Useful for hacks
      // that want to inspect the mode state (say, for completion).
      getTokenAt: function(pos, precise) {
        return takeToken(this, pos, precise)
      },

      getLineTokens: function(line, precise) {
        return takeToken(this, Pos(line), precise, true)
      },

      getTokenTypeAt: function(pos) {
        pos = clipPos(this.doc, pos);
        var styles = getLineStyles(this, getLine(this.doc, pos.line));
        var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
        var type;
        if (ch == 0) { type = styles[2]; }
        else { for (;;) {
          var mid = (before + after) >> 1;
          if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid; }
          else if (styles[mid * 2 + 1] < ch) { before = mid + 1; }
          else { type = styles[mid * 2 + 2]; break }
        } }
        var cut = type ? type.indexOf("overlay ") : -1;
        return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
      },

      getModeAt: function(pos) {
        var mode = this.doc.mode;
        if (!mode.innerMode) { return mode }
        return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
      },

      getHelper: function(pos, type) {
        return this.getHelpers(pos, type)[0]
      },

      getHelpers: function(pos, type) {
        var found = [];
        if (!helpers.hasOwnProperty(type)) { return found }
        var help = helpers[type], mode = this.getModeAt(pos);
        if (typeof mode[type] == "string") {
          if (help[mode[type]]) { found.push(help[mode[type]]); }
        } else if (mode[type]) {
          for (var i = 0; i < mode[type].length; i++) {
            var val = help[mode[type][i]];
            if (val) { found.push(val); }
          }
        } else if (mode.helperType && help[mode.helperType]) {
          found.push(help[mode.helperType]);
        } else if (help[mode.name]) {
          found.push(help[mode.name]);
        }
        for (var i$1 = 0; i$1 < help._global.length; i$1++) {
          var cur = help._global[i$1];
          if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
            { found.push(cur.val); }
        }
        return found
      },

      getStateAfter: function(line, precise) {
        var doc = this.doc;
        line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
        return getContextBefore(this, line + 1, precise).state
      },

      cursorCoords: function(start, mode) {
        var pos, range = this.doc.sel.primary();
        if (start == null) { pos = range.head; }
        else if (typeof start == "object") { pos = clipPos(this.doc, start); }
        else { pos = start ? range.from() : range.to(); }
        return cursorCoords(this, pos, mode || "page")
      },

      charCoords: function(pos, mode) {
        return charCoords(this, clipPos(this.doc, pos), mode || "page")
      },

      coordsChar: function(coords, mode) {
        coords = fromCoordSystem(this, coords, mode || "page");
        return coordsChar(this, coords.left, coords.top)
      },

      lineAtHeight: function(height, mode) {
        height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
        return lineAtHeight(this.doc, height + this.display.viewOffset)
      },
      heightAtLine: function(line, mode, includeWidgets) {
        var end = false, lineObj;
        if (typeof line == "number") {
          var last = this.doc.first + this.doc.size - 1;
          if (line < this.doc.first) { line = this.doc.first; }
          else if (line > last) { line = last; end = true; }
          lineObj = getLine(this.doc, line);
        } else {
          lineObj = line;
        }
        return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
          (end ? this.doc.height - heightAtLine(lineObj) : 0)
      },

      defaultTextHeight: function() { return textHeight(this.display) },
      defaultCharWidth: function() { return charWidth(this.display) },

      getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

      addWidget: function(pos, node, scroll, vert, horiz) {
        var display = this.display;
        pos = cursorCoords(this, clipPos(this.doc, pos));
        var top = pos.bottom, left = pos.left;
        node.style.position = "absolute";
        node.setAttribute("cm-ignore-events", "true");
        this.display.input.setUneditable(node);
        display.sizer.appendChild(node);
        if (vert == "over") {
          top = pos.top;
        } else if (vert == "above" || vert == "near") {
          var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
          hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
          // Default to positioning above (if specified and possible); otherwise default to positioning below
          if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
            { top = pos.top - node.offsetHeight; }
          else if (pos.bottom + node.offsetHeight <= vspace)
            { top = pos.bottom; }
          if (left + node.offsetWidth > hspace)
            { left = hspace - node.offsetWidth; }
        }
        node.style.top = top + "px";
        node.style.left = node.style.right = "";
        if (horiz == "right") {
          left = display.sizer.clientWidth - node.offsetWidth;
          node.style.right = "0px";
        } else {
          if (horiz == "left") { left = 0; }
          else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2; }
          node.style.left = left + "px";
        }
        if (scroll)
          { scrollIntoView(this, {left: left, top: top, right: left + node.offsetWidth, bottom: top + node.offsetHeight}); }
      },

      triggerOnKeyDown: methodOp(onKeyDown),
      triggerOnKeyPress: methodOp(onKeyPress),
      triggerOnKeyUp: onKeyUp,
      triggerOnMouseDown: methodOp(onMouseDown),

      execCommand: function(cmd) {
        if (commands.hasOwnProperty(cmd))
          { return commands[cmd].call(null, this) }
      },

      triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

      findPosH: function(from, amount, unit, visually) {
        var dir = 1;
        if (amount < 0) { dir = -1; amount = -amount; }
        var cur = clipPos(this.doc, from);
        for (var i = 0; i < amount; ++i) {
          cur = findPosH(this.doc, cur, dir, unit, visually);
          if (cur.hitSide) { break }
        }
        return cur
      },

      moveH: methodOp(function(dir, unit) {
        var this$1 = this;

        this.extendSelectionsBy(function (range) {
          if (this$1.display.shift || this$1.doc.extend || range.empty())
            { return findPosH(this$1.doc, range.head, dir, unit, this$1.options.rtlMoveVisually) }
          else
            { return dir < 0 ? range.from() : range.to() }
        }, sel_move);
      }),

      deleteH: methodOp(function(dir, unit) {
        var sel = this.doc.sel, doc = this.doc;
        if (sel.somethingSelected())
          { doc.replaceSelection("", null, "+delete"); }
        else
          { deleteNearSelection(this, function (range) {
            var other = findPosH(doc, range.head, dir, unit, false);
            return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
          }); }
      }),

      findPosV: function(from, amount, unit, goalColumn) {
        var dir = 1, x = goalColumn;
        if (amount < 0) { dir = -1; amount = -amount; }
        var cur = clipPos(this.doc, from);
        for (var i = 0; i < amount; ++i) {
          var coords = cursorCoords(this, cur, "div");
          if (x == null) { x = coords.left; }
          else { coords.left = x; }
          cur = findPosV(this, coords, dir, unit);
          if (cur.hitSide) { break }
        }
        return cur
      },

      moveV: methodOp(function(dir, unit) {
        var this$1 = this;

        var doc = this.doc, goals = [];
        var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
        doc.extendSelectionsBy(function (range) {
          if (collapse)
            { return dir < 0 ? range.from() : range.to() }
          var headPos = cursorCoords(this$1, range.head, "div");
          if (range.goalColumn != null) { headPos.left = range.goalColumn; }
          goals.push(headPos.left);
          var pos = findPosV(this$1, headPos, dir, unit);
          if (unit == "page" && range == doc.sel.primary())
            { addToScrollTop(this$1, charCoords(this$1, pos, "div").top - headPos.top); }
          return pos
        }, sel_move);
        if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
          { doc.sel.ranges[i].goalColumn = goals[i]; } }
      }),

      // Find the word at the given position (as returned by coordsChar).
      findWordAt: function(pos) {
        var doc = this.doc, line = getLine(doc, pos.line).text;
        var start = pos.ch, end = pos.ch;
        if (line) {
          var helper = this.getHelper(pos, "wordChars");
          if ((pos.sticky == "before" || end == line.length) && start) { --start; } else { ++end; }
          var startChar = line.charAt(start);
          var check = isWordChar(startChar, helper)
            ? function (ch) { return isWordChar(ch, helper); }
            : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
            : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); };
          while (start > 0 && check(line.charAt(start - 1))) { --start; }
          while (end < line.length && check(line.charAt(end))) { ++end; }
        }
        return new Range(Pos(pos.line, start), Pos(pos.line, end))
      },

      toggleOverwrite: function(value) {
        if (value != null && value == this.state.overwrite) { return }
        if (this.state.overwrite = !this.state.overwrite)
          { addClass(this.display.cursorDiv, "CodeMirror-overwrite"); }
        else
          { rmClass(this.display.cursorDiv, "CodeMirror-overwrite"); }

        signal(this, "overwriteToggle", this, this.state.overwrite);
      },
      hasFocus: function() { return this.display.input.getField() == activeElt(doc(this)) },
      isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

      scrollTo: methodOp(function (x, y) { scrollToCoords(this, x, y); }),
      getScrollInfo: function() {
        var scroller = this.display.scroller;
        return {left: scroller.scrollLeft, top: scroller.scrollTop,
                height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
      },

      scrollIntoView: methodOp(function(range, margin) {
        if (range == null) {
          range = {from: this.doc.sel.primary().head, to: null};
          if (margin == null) { margin = this.options.cursorScrollMargin; }
        } else if (typeof range == "number") {
          range = {from: Pos(range, 0), to: null};
        } else if (range.from == null) {
          range = {from: range, to: null};
        }
        if (!range.to) { range.to = range.from; }
        range.margin = margin || 0;

        if (range.from.line != null) {
          scrollToRange(this, range);
        } else {
          scrollToCoordsRange(this, range.from, range.to, range.margin);
        }
      }),

      setSize: methodOp(function(width, height) {
        var this$1 = this;

        var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; };
        if (width != null) { this.display.wrapper.style.width = interpret(width); }
        if (height != null) { this.display.wrapper.style.height = interpret(height); }
        if (this.options.lineWrapping) { clearLineMeasurementCache(this); }
        var lineNo = this.display.viewFrom;
        this.doc.iter(lineNo, this.display.viewTo, function (line) {
          if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
            { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo, "widget"); break } } }
          ++lineNo;
        });
        this.curOp.forceUpdate = true;
        signal(this, "refresh", this);
      }),

      operation: function(f){return runInOp(this, f)},
      startOperation: function(){return startOperation(this)},
      endOperation: function(){return endOperation(this)},

      refresh: methodOp(function() {
        var oldHeight = this.display.cachedTextHeight;
        regChange(this);
        this.curOp.forceUpdate = true;
        clearCaches(this);
        scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
        updateGutterSpace(this.display);
        if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5 || this.options.lineWrapping)
          { estimateLineHeights(this); }
        signal(this, "refresh", this);
      }),

      swapDoc: methodOp(function(doc) {
        var old = this.doc;
        old.cm = null;
        // Cancel the current text selection if any (#5821)
        if (this.state.selectingText) { this.state.selectingText(); }
        attachDoc(this, doc);
        clearCaches(this);
        this.display.input.reset();
        scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
        this.curOp.forceScroll = true;
        signalLater(this, "swapDoc", this, old);
        return old
      }),

      phrase: function(phraseText) {
        var phrases = this.options.phrases;
        return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText
      },

      getInputField: function(){return this.display.input.getField()},
      getWrapperElement: function(){return this.display.wrapper},
      getScrollerElement: function(){return this.display.scroller},
      getGutterElement: function(){return this.display.gutters}
    };
    eventMixin(CodeMirror);

    CodeMirror.registerHelper = function(type, name, value) {
      if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []}; }
      helpers[type][name] = value;
    };
    CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
      CodeMirror.registerHelper(type, name, value);
      helpers[type]._global.push({pred: predicate, val: value});
    };
  }

  // Used for horizontal relative motion. Dir is -1 or 1 (left or
  // right), unit can be "codepoint", "char", "column" (like char, but
  // doesn't cross line boundaries), "word" (across next word), or
  // "group" (to the start of next group of word or
  // non-word-non-whitespace chars). The visually param controls
  // whether, in right-to-left text, direction 1 means to move towards
  // the next index in the string, or towards the character to the right
  // of the current position. The resulting position will have a
  // hitSide=true property if it reached the end of the document.
  function findPosH(doc, pos, dir, unit, visually) {
    var oldPos = pos;
    var origDir = dir;
    var lineObj = getLine(doc, pos.line);
    var lineDir = visually && doc.direction == "rtl" ? -dir : dir;
    function findNextLine() {
      var l = pos.line + lineDir;
      if (l < doc.first || l >= doc.first + doc.size) { return false }
      pos = new Pos(l, pos.ch, pos.sticky);
      return lineObj = getLine(doc, l)
    }
    function moveOnce(boundToLine) {
      var next;
      if (unit == "codepoint") {
        var ch = lineObj.text.charCodeAt(pos.ch + (dir > 0 ? 0 : -1));
        if (isNaN(ch)) {
          next = null;
        } else {
          var astral = dir > 0 ? ch >= 0xD800 && ch < 0xDC00 : ch >= 0xDC00 && ch < 0xDFFF;
          next = new Pos(pos.line, Math.max(0, Math.min(lineObj.text.length, pos.ch + dir * (astral ? 2 : 1))), -dir);
        }
      } else if (visually) {
        next = moveVisually(doc.cm, lineObj, pos, dir);
      } else {
        next = moveLogically(lineObj, pos, dir);
      }
      if (next == null) {
        if (!boundToLine && findNextLine())
          { pos = endOfLine(visually, doc.cm, lineObj, pos.line, lineDir); }
        else
          { return false }
      } else {
        pos = next;
      }
      return true
    }

    if (unit == "char" || unit == "codepoint") {
      moveOnce();
    } else if (unit == "column") {
      moveOnce(true);
    } else if (unit == "word" || unit == "group") {
      var sawType = null, group = unit == "group";
      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
      for (var first = true;; first = false) {
        if (dir < 0 && !moveOnce(!first)) { break }
        var cur = lineObj.text.charAt(pos.ch) || "\n";
        var type = isWordChar(cur, helper) ? "w"
          : group && cur == "\n" ? "n"
          : !group || /\s/.test(cur) ? null
          : "p";
        if (group && !first && !type) { type = "s"; }
        if (sawType && sawType != type) {
          if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after";}
          break
        }

        if (type) { sawType = type; }
        if (dir > 0 && !moveOnce(!first)) { break }
      }
    }
    var result = skipAtomic(doc, pos, oldPos, origDir, true);
    if (equalCursorPos(oldPos, result)) { result.hitSide = true; }
    return result
  }

  // For relative vertical movement. Dir may be -1 or 1. Unit can be
  // "page" or "line". The resulting position will have a hitSide=true
  // property if it reached the end of the document.
  function findPosV(cm, pos, dir, unit) {
    var doc = cm.doc, x = pos.left, y;
    if (unit == "page") {
      var pageSize = Math.min(cm.display.wrapper.clientHeight, win(cm).innerHeight || doc(cm).documentElement.clientHeight);
      var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
      y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;

    } else if (unit == "line") {
      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
    }
    var target;
    for (;;) {
      target = coordsChar(cm, x, y);
      if (!target.outside) { break }
      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
      y += dir * 5;
    }
    return target
  }

  // CONTENTEDITABLE INPUT STYLE

  var ContentEditableInput = function(cm) {
    this.cm = cm;
    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
    this.polling = new Delayed();
    this.composing = null;
    this.gracePeriod = false;
    this.readDOMTimeout = null;
  };

  ContentEditableInput.prototype.init = function (display) {
      var this$1 = this;

    var input = this, cm = input.cm;
    var div = input.div = display.lineDiv;
    div.contentEditable = true;
    disableBrowserMagic(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize);

    function belongsToInput(e) {
      for (var t = e.target; t; t = t.parentNode) {
        if (t == div) { return true }
        if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) { break }
      }
      return false
    }

    on(div, "paste", function (e) {
      if (!belongsToInput(e) || signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
      // IE doesn't fire input events, so we schedule a read for the pasted content in this way
      if (ie_version <= 11) { setTimeout(operation(cm, function () { return this$1.updateFromDOM(); }), 20); }
    });

    on(div, "compositionstart", function (e) {
      this$1.composing = {data: e.data, done: false};
    });
    on(div, "compositionupdate", function (e) {
      if (!this$1.composing) { this$1.composing = {data: e.data, done: false}; }
    });
    on(div, "compositionend", function (e) {
      if (this$1.composing) {
        if (e.data != this$1.composing.data) { this$1.readFromDOMSoon(); }
        this$1.composing.done = true;
      }
    });

    on(div, "touchstart", function () { return input.forceCompositionEnd(); });

    on(div, "input", function () {
      if (!this$1.composing) { this$1.readFromDOMSoon(); }
    });

    function onCopyCut(e) {
      if (!belongsToInput(e) || signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()});
        if (e.type == "cut") { cm.replaceSelection("", null, "cut"); }
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm);
        setLastCopied({lineWise: true, text: ranges.text});
        if (e.type == "cut") {
          cm.operation(function () {
            cm.setSelections(ranges.ranges, 0, sel_dontScroll);
            cm.replaceSelection("", null, "cut");
          });
        }
      }
      if (e.clipboardData) {
        e.clipboardData.clearData();
        var content = lastCopied.text.join("\n");
        // iOS exposes the clipboard API, but seems to discard content inserted into it
        e.clipboardData.setData("Text", content);
        if (e.clipboardData.getData("Text") == content) {
          e.preventDefault();
          return
        }
      }
      // Old-fashioned briefly-focus-a-textarea hack
      var kludge = hiddenTextarea(), te = kludge.firstChild;
      cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
      te.value = lastCopied.text.join("\n");
      var hadFocus = activeElt(div.ownerDocument);
      selectInput(te);
      setTimeout(function () {
        cm.display.lineSpace.removeChild(kludge);
        hadFocus.focus();
        if (hadFocus == div) { input.showPrimarySelection(); }
      }, 50);
    }
    on(div, "copy", onCopyCut);
    on(div, "cut", onCopyCut);
  };

  ContentEditableInput.prototype.screenReaderLabelChanged = function (label) {
    // Label for screenreaders, accessibility
    if(label) {
      this.div.setAttribute('aria-label', label);
    } else {
      this.div.removeAttribute('aria-label');
    }
  };

  ContentEditableInput.prototype.prepareSelection = function () {
    var result = prepareSelection(this.cm, false);
    result.focus = activeElt(this.div.ownerDocument) == this.div;
    return result
  };

  ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
    if (!info || !this.cm.display.view.length) { return }
    if (info.focus || takeFocus) { this.showPrimarySelection(); }
    this.showMultipleSelections(info);
  };

  ContentEditableInput.prototype.getSelection = function () {
    return this.cm.display.wrapper.ownerDocument.getSelection()
  };

  ContentEditableInput.prototype.showPrimarySelection = function () {
    var sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
    var from = prim.from(), to = prim.to();

    if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
      sel.removeAllRanges();
      return
    }

    var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
    var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
    if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
        cmp(minPos(curAnchor, curFocus), from) == 0 &&
        cmp(maxPos(curAnchor, curFocus), to) == 0)
      { return }

    var view = cm.display.view;
    var start = (from.line >= cm.display.viewFrom && posToDOM(cm, from)) ||
        {node: view[0].measure.map[2], offset: 0};
    var end = to.line < cm.display.viewTo && posToDOM(cm, to);
    if (!end) {
      var measure = view[view.length - 1].measure;
      var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
      end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
    }

    if (!start || !end) {
      sel.removeAllRanges();
      return
    }

    var old = sel.rangeCount && sel.getRangeAt(0), rng;
    try { rng = range(start.node, start.offset, end.offset, end.node); }
    catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
    if (rng) {
      if (!gecko && cm.state.focused) {
        sel.collapse(start.node, start.offset);
        if (!rng.collapsed) {
          sel.removeAllRanges();
          sel.addRange(rng);
        }
      } else {
        sel.removeAllRanges();
        sel.addRange(rng);
      }
      if (old && sel.anchorNode == null) { sel.addRange(old); }
      else if (gecko) { this.startGracePeriod(); }
    }
    this.rememberSelection();
  };

  ContentEditableInput.prototype.startGracePeriod = function () {
      var this$1 = this;

    clearTimeout(this.gracePeriod);
    this.gracePeriod = setTimeout(function () {
      this$1.gracePeriod = false;
      if (this$1.selectionChanged())
        { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }); }
    }, 20);
  };

  ContentEditableInput.prototype.showMultipleSelections = function (info) {
    removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
    removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
  };

  ContentEditableInput.prototype.rememberSelection = function () {
    var sel = this.getSelection();
    this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
    this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
  };

  ContentEditableInput.prototype.selectionInEditor = function () {
    var sel = this.getSelection();
    if (!sel.rangeCount) { return false }
    var node = sel.getRangeAt(0).commonAncestorContainer;
    return contains(this.div, node)
  };

  ContentEditableInput.prototype.focus = function () {
    if (this.cm.options.readOnly != "nocursor") {
      if (!this.selectionInEditor() || activeElt(this.div.ownerDocument) != this.div)
        { this.showSelection(this.prepareSelection(), true); }
      this.div.focus();
    }
  };
  ContentEditableInput.prototype.blur = function () { this.div.blur(); };
  ContentEditableInput.prototype.getField = function () { return this.div };

  ContentEditableInput.prototype.supportsTouch = function () { return true };

  ContentEditableInput.prototype.receivedFocus = function () {
      var this$1 = this;

    var input = this;
    if (this.selectionInEditor())
      { setTimeout(function () { return this$1.pollSelection(); }, 20); }
    else
      { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }); }

    function poll() {
      if (input.cm.state.focused) {
        input.pollSelection();
        input.polling.set(input.cm.options.pollInterval, poll);
      }
    }
    this.polling.set(this.cm.options.pollInterval, poll);
  };

  ContentEditableInput.prototype.selectionChanged = function () {
    var sel = this.getSelection();
    return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
      sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
  };

  ContentEditableInput.prototype.pollSelection = function () {
    if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) { return }
    var sel = this.getSelection(), cm = this.cm;
    // On Android Chrome (version 56, at least), backspacing into an
    // uneditable block element will put the cursor in that element,
    // and then, because it's not editable, hide the virtual keyboard.
    // Because Android doesn't allow us to actually detect backspace
    // presses in a sane way, this code checks for when that happens
    // and simulates a backspace press in this case.
    if (android && chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
      this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs});
      this.blur();
      this.focus();
      return
    }
    if (this.composing) { return }
    this.rememberSelection();
    var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
    var head = domToPos(cm, sel.focusNode, sel.focusOffset);
    if (anchor && head) { runInOp(cm, function () {
      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
      if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true; }
    }); }
  };

  ContentEditableInput.prototype.pollContent = function () {
    if (this.readDOMTimeout != null) {
      clearTimeout(this.readDOMTimeout);
      this.readDOMTimeout = null;
    }

    var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
    var from = sel.from(), to = sel.to();
    if (from.ch == 0 && from.line > cm.firstLine())
      { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length); }
    if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
      { to = Pos(to.line + 1, 0); }
    if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

    var fromIndex, fromLine, fromNode;
    if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
      fromLine = lineNo(display.view[0].line);
      fromNode = display.view[0].node;
    } else {
      fromLine = lineNo(display.view[fromIndex].line);
      fromNode = display.view[fromIndex - 1].node.nextSibling;
    }
    var toIndex = findViewIndex(cm, to.line);
    var toLine, toNode;
    if (toIndex == display.view.length - 1) {
      toLine = display.viewTo - 1;
      toNode = display.lineDiv.lastChild;
    } else {
      toLine = lineNo(display.view[toIndex + 1].line) - 1;
      toNode = display.view[toIndex + 1].node.previousSibling;
    }

    if (!fromNode) { return false }
    var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
    var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
    while (newText.length > 1 && oldText.length > 1) {
      if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
      else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
      else { break }
    }

    var cutFront = 0, cutEnd = 0;
    var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
    while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
      { ++cutFront; }
    var newBot = lst(newText), oldBot = lst(oldText);
    var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                             oldBot.length - (oldText.length == 1 ? cutFront : 0));
    while (cutEnd < maxCutEnd &&
           newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
      { ++cutEnd; }
    // Try to move start of change to start of selection if ambiguous
    if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
      while (cutFront && cutFront > from.ch &&
             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
        cutFront--;
        cutEnd++;
      }
    }

    newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
    newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");

    var chFrom = Pos(fromLine, cutFront);
    var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
    if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
      replaceRange(cm.doc, newText, chFrom, chTo, "+input");
      return true
    }
  };

  ContentEditableInput.prototype.ensurePolled = function () {
    this.forceCompositionEnd();
  };
  ContentEditableInput.prototype.reset = function () {
    this.forceCompositionEnd();
  };
  ContentEditableInput.prototype.forceCompositionEnd = function () {
    if (!this.composing) { return }
    clearTimeout(this.readDOMTimeout);
    this.composing = null;
    this.updateFromDOM();
    this.div.blur();
    this.div.focus();
  };
  ContentEditableInput.prototype.readFromDOMSoon = function () {
      var this$1 = this;

    if (this.readDOMTimeout != null) { return }
    this.readDOMTimeout = setTimeout(function () {
      this$1.readDOMTimeout = null;
      if (this$1.composing) {
        if (this$1.composing.done) { this$1.composing = null; }
        else { return }
      }
      this$1.updateFromDOM();
    }, 80);
  };

  ContentEditableInput.prototype.updateFromDOM = function () {
      var this$1 = this;

    if (this.cm.isReadOnly() || !this.pollContent())
      { runInOp(this.cm, function () { return regChange(this$1.cm); }); }
  };

  ContentEditableInput.prototype.setUneditable = function (node) {
    node.contentEditable = "false";
  };

  ContentEditableInput.prototype.onKeyPress = function (e) {
    if (e.charCode == 0 || this.composing) { return }
    e.preventDefault();
    if (!this.cm.isReadOnly())
      { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0); }
  };

  ContentEditableInput.prototype.readOnlyChanged = function (val) {
    this.div.contentEditable = String(val != "nocursor");
  };

  ContentEditableInput.prototype.onContextMenu = function () {};
  ContentEditableInput.prototype.resetPosition = function () {};

  ContentEditableInput.prototype.needsContentAttribute = true;

  function posToDOM(cm, pos) {
    var view = findViewForLine(cm, pos.line);
    if (!view || view.hidden) { return null }
    var line = getLine(cm.doc, pos.line);
    var info = mapFromLineView(view, line, pos.line);

    var order = getOrder(line, cm.doc.direction), side = "left";
    if (order) {
      var partPos = getBidiPartAt(order, pos.ch);
      side = partPos % 2 ? "right" : "left";
    }
    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
    result.offset = result.collapse == "right" ? result.end : result.start;
    return result
  }

  function isInGutter(node) {
    for (var scan = node; scan; scan = scan.parentNode)
      { if (/CodeMirror-gutter-wrapper/.test(scan.className)) { return true } }
    return false
  }

  function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

  function domTextBetween(cm, from, to, fromLine, toLine) {
    var text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false;
    function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
    function close() {
      if (closing) {
        text += lineSep;
        if (extraLinebreak) { text += lineSep; }
        closing = extraLinebreak = false;
      }
    }
    function addText(str) {
      if (str) {
        close();
        text += str;
      }
    }
    function walk(node) {
      if (node.nodeType == 1) {
        var cmText = node.getAttribute("cm-text");
        if (cmText) {
          addText(cmText);
          return
        }
        var markerID = node.getAttribute("cm-marker"), range;
        if (markerID) {
          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
          if (found.length && (range = found[0].find(0)))
            { addText(getBetween(cm.doc, range.from, range.to).join(lineSep)); }
          return
        }
        if (node.getAttribute("contenteditable") == "false") { return }
        var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);
        if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) { return }

        if (isBlock) { close(); }
        for (var i = 0; i < node.childNodes.length; i++)
          { walk(node.childNodes[i]); }

        if (/^(pre|p)$/i.test(node.nodeName)) { extraLinebreak = true; }
        if (isBlock) { closing = true; }
      } else if (node.nodeType == 3) {
        addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
      }
    }
    for (;;) {
      walk(from);
      if (from == to) { break }
      from = from.nextSibling;
      extraLinebreak = false;
    }
    return text
  }

  function domToPos(cm, node, offset) {
    var lineNode;
    if (node == cm.display.lineDiv) {
      lineNode = cm.display.lineDiv.childNodes[offset];
      if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
      node = null; offset = 0;
    } else {
      for (lineNode = node;; lineNode = lineNode.parentNode) {
        if (!lineNode || lineNode == cm.display.lineDiv) { return null }
        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
      }
    }
    for (var i = 0; i < cm.display.view.length; i++) {
      var lineView = cm.display.view[i];
      if (lineView.node == lineNode)
        { return locateNodeInLineView(lineView, node, offset) }
    }
  }

  function locateNodeInLineView(lineView, node, offset) {
    var wrapper = lineView.text.firstChild, bad = false;
    if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
    if (node == wrapper) {
      bad = true;
      node = wrapper.childNodes[offset];
      offset = 0;
      if (!node) {
        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
        return badPos(Pos(lineNo(line), line.text.length), bad)
      }
    }

    var textNode = node.nodeType == 3 ? node : null, topNode = node;
    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
      textNode = node.firstChild;
      if (offset) { offset = textNode.nodeValue.length; }
    }
    while (topNode.parentNode != wrapper) { topNode = topNode.parentNode; }
    var measure = lineView.measure, maps = measure.maps;

    function find(textNode, topNode, offset) {
      for (var i = -1; i < (maps ? maps.length : 0); i++) {
        var map = i < 0 ? measure.map : maps[i];
        for (var j = 0; j < map.length; j += 3) {
          var curNode = map[j + 2];
          if (curNode == textNode || curNode == topNode) {
            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
            var ch = map[j] + offset;
            if (offset < 0 || curNode != textNode) { ch = map[j + (offset ? 1 : 0)]; }
            return Pos(line, ch)
          }
        }
      }
    }
    var found = find(textNode, topNode, offset);
    if (found) { return badPos(found, bad) }

    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
      found = find(after, after.firstChild, 0);
      if (found)
        { return badPos(Pos(found.line, found.ch - dist), bad) }
      else
        { dist += after.textContent.length; }
    }
    for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
      found = find(before, before.firstChild, -1);
      if (found)
        { return badPos(Pos(found.line, found.ch + dist$1), bad) }
      else
        { dist$1 += before.textContent.length; }
    }
  }

  // TEXTAREA INPUT STYLE

  var TextareaInput = function(cm) {
    this.cm = cm;
    // See input.poll and input.reset
    this.prevInput = "";

    // Flag that indicates whether we expect input to appear real soon
    // now (after some event like 'keypress' or 'input') and are
    // polling intensively.
    this.pollingFast = false;
    // Self-resetting timeout for the poller
    this.polling = new Delayed();
    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
    this.hasSelection = false;
    this.composing = null;
  };

  TextareaInput.prototype.init = function (display) {
      var this$1 = this;

    var input = this, cm = this.cm;
    this.createField(display);
    var te = this.textarea;

    display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);

    // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
    if (ios) { te.style.width = "0px"; }

    on(te, "input", function () {
      if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null; }
      input.poll();
    });

    on(te, "paste", function (e) {
      if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

      cm.state.pasteIncoming = +new Date;
      input.fastPoll();
    });

    function prepareCopyCut(e) {
      if (signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()});
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm);
        setLastCopied({lineWise: true, text: ranges.text});
        if (e.type == "cut") {
          cm.setSelections(ranges.ranges, null, sel_dontScroll);
        } else {
          input.prevInput = "";
          te.value = ranges.text.join("\n");
          selectInput(te);
        }
      }
      if (e.type == "cut") { cm.state.cutIncoming = +new Date; }
    }
    on(te, "cut", prepareCopyCut);
    on(te, "copy", prepareCopyCut);

    on(display.scroller, "paste", function (e) {
      if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
      if (!te.dispatchEvent) {
        cm.state.pasteIncoming = +new Date;
        input.focus();
        return
      }

      // Pass the `paste` event to the textarea so it's handled by its event listener.
      var event = new Event("paste");
      event.clipboardData = e.clipboardData;
      te.dispatchEvent(event);
    });

    // Prevent normal selection in the editor (we handle our own)
    on(display.lineSpace, "selectstart", function (e) {
      if (!eventInWidget(display, e)) { e_preventDefault(e); }
    });

    on(te, "compositionstart", function () {
      var start = cm.getCursor("from");
      if (input.composing) { input.composing.range.clear(); }
      input.composing = {
        start: start,
        range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
      };
    });
    on(te, "compositionend", function () {
      if (input.composing) {
        input.poll();
        input.composing.range.clear();
        input.composing = null;
      }
    });
  };

  TextareaInput.prototype.createField = function (_display) {
    // Wraps and hides input textarea
    this.wrapper = hiddenTextarea();
    // The semihidden textarea that is focused when the editor is
    // focused, and receives input.
    this.textarea = this.wrapper.firstChild;
  };

  TextareaInput.prototype.screenReaderLabelChanged = function (label) {
    // Label for screenreaders, accessibility
    if(label) {
      this.textarea.setAttribute('aria-label', label);
    } else {
      this.textarea.removeAttribute('aria-label');
    }
  };

  TextareaInput.prototype.prepareSelection = function () {
    // Redraw the selection and/or cursor
    var cm = this.cm, display = cm.display, doc = cm.doc;
    var result = prepareSelection(cm);

    // Move the hidden textarea near the cursor to prevent scrolling artifacts
    if (cm.options.moveInputWithCursor) {
      var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
      var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
      result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                          headPos.top + lineOff.top - wrapOff.top));
      result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                           headPos.left + lineOff.left - wrapOff.left));
    }

    return result
  };

  TextareaInput.prototype.showSelection = function (drawn) {
    var cm = this.cm, display = cm.display;
    removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
    removeChildrenAndAdd(display.selectionDiv, drawn.selection);
    if (drawn.teTop != null) {
      this.wrapper.style.top = drawn.teTop + "px";
      this.wrapper.style.left = drawn.teLeft + "px";
    }
  };

  // Reset the input to correspond to the selection (or to be empty,
  // when not typing and nothing is selected)
  TextareaInput.prototype.reset = function (typing) {
    if (this.contextMenuPending || this.composing) { return }
    var cm = this.cm;
    if (cm.somethingSelected()) {
      this.prevInput = "";
      var content = cm.getSelection();
      this.textarea.value = content;
      if (cm.state.focused) { selectInput(this.textarea); }
      if (ie && ie_version >= 9) { this.hasSelection = content; }
    } else if (!typing) {
      this.prevInput = this.textarea.value = "";
      if (ie && ie_version >= 9) { this.hasSelection = null; }
    }
  };

  TextareaInput.prototype.getField = function () { return this.textarea };

  TextareaInput.prototype.supportsTouch = function () { return false };

  TextareaInput.prototype.focus = function () {
    if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt(this.textarea.ownerDocument) != this.textarea)) {
      try { this.textarea.focus(); }
      catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
    }
  };

  TextareaInput.prototype.blur = function () { this.textarea.blur(); };

  TextareaInput.prototype.resetPosition = function () {
    this.wrapper.style.top = this.wrapper.style.left = 0;
  };

  TextareaInput.prototype.receivedFocus = function () { this.slowPoll(); };

  // Poll for input changes, using the normal rate of polling. This
  // runs as long as the editor is focused.
  TextareaInput.prototype.slowPoll = function () {
      var this$1 = this;

    if (this.pollingFast) { return }
    this.polling.set(this.cm.options.pollInterval, function () {
      this$1.poll();
      if (this$1.cm.state.focused) { this$1.slowPoll(); }
    });
  };

  // When an event has just come in that is likely to add or change
  // something in the input textarea, we poll faster, to ensure that
  // the change appears on the screen quickly.
  TextareaInput.prototype.fastPoll = function () {
    var missed = false, input = this;
    input.pollingFast = true;
    function p() {
      var changed = input.poll();
      if (!changed && !missed) {missed = true; input.polling.set(60, p);}
      else {input.pollingFast = false; input.slowPoll();}
    }
    input.polling.set(20, p);
  };

  // Read input from the textarea, and update the document to match.
  // When something is selected, it is present in the textarea, and
  // selected (unless it is huge, in which case a placeholder is
  // used). When nothing is selected, the cursor sits after previously
  // seen text (can be empty), which is stored in prevInput (we must
  // not reset the textarea when typing, because that breaks IME).
  TextareaInput.prototype.poll = function () {
      var this$1 = this;

    var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
    // Since this is called a *lot*, try to bail out as cheaply as
    // possible when it is clear that nothing happened. hasSelection
    // will be the case when there is a lot of text in the textarea,
    // in which case reading its value would be expensive.
    if (this.contextMenuPending || !cm.state.focused ||
        (hasSelection(input) && !prevInput && !this.composing) ||
        cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
      { return false }

    var text = input.value;
    // If nothing changed, bail.
    if (text == prevInput && !cm.somethingSelected()) { return false }
    // Work around nonsensical selection resetting in IE9/10, and
    // inexplicable appearance of private area unicode characters on
    // some key combos in Mac (#2689).
    if (ie && ie_version >= 9 && this.hasSelection === text ||
        mac && /[\uf700-\uf7ff]/.test(text)) {
      cm.display.input.reset();
      return false
    }

    if (cm.doc.sel == cm.display.selForContextMenu) {
      var first = text.charCodeAt(0);
      if (first == 0x200b && !prevInput) { prevInput = "\u200b"; }
      if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
    }
    // Find the part of the input that is actually new
    var same = 0, l = Math.min(prevInput.length, text.length);
    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same; }

    runInOp(cm, function () {
      applyTextInput(cm, text.slice(same), prevInput.length - same,
                     null, this$1.composing ? "*compose" : null);

      // Don't leave long text in the textarea, since it makes further polling slow
      if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = ""; }
      else { this$1.prevInput = text; }

      if (this$1.composing) {
        this$1.composing.range.clear();
        this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
                                           {className: "CodeMirror-composing"});
      }
    });
    return true
  };

  TextareaInput.prototype.ensurePolled = function () {
    if (this.pollingFast && this.poll()) { this.pollingFast = false; }
  };

  TextareaInput.prototype.onKeyPress = function () {
    if (ie && ie_version >= 9) { this.hasSelection = null; }
    this.fastPoll();
  };

  TextareaInput.prototype.onContextMenu = function (e) {
    var input = this, cm = input.cm, display = cm.display, te = input.textarea;
    if (input.contextMenuPending) { input.contextMenuPending(); }
    var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
    if (!pos || presto) { return } // Opera is difficult.

    // Reset the current text selection only if the click is done outside of the selection
    // and 'resetSelectionOnContextMenu' option is true.
    var reset = cm.options.resetSelectionOnContextMenu;
    if (reset && cm.doc.sel.contains(pos) == -1)
      { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll); }

    var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
    var wrapperBox = input.wrapper.offsetParent.getBoundingClientRect();
    input.wrapper.style.cssText = "position: static";
    te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
    var oldScrollY;
    if (webkit) { oldScrollY = te.ownerDocument.defaultView.scrollY; } // Work around Chrome issue (#2712)
    display.input.focus();
    if (webkit) { te.ownerDocument.defaultView.scrollTo(null, oldScrollY); }
    display.input.reset();
    // Adds "Select all" to context menu in FF
    if (!cm.somethingSelected()) { te.value = input.prevInput = " "; }
    input.contextMenuPending = rehide;
    display.selForContextMenu = cm.doc.sel;
    clearTimeout(display.detectingSelectAll);

    // Select-all will be greyed out if there's nothing to select, so
    // this adds a zero-width space so that we can later check whether
    // it got selected.
    function prepareSelectAllHack() {
      if (te.selectionStart != null) {
        var selected = cm.somethingSelected();
        var extval = "\u200b" + (selected ? te.value : "");
        te.value = "\u21da"; // Used to catch context-menu undo
        te.value = extval;
        input.prevInput = selected ? "" : "\u200b";
        te.selectionStart = 1; te.selectionEnd = extval.length;
        // Re-set this, in case some other handler touched the
        // selection in the meantime.
        display.selForContextMenu = cm.doc.sel;
      }
    }
    function rehide() {
      if (input.contextMenuPending != rehide) { return }
      input.contextMenuPending = false;
      input.wrapper.style.cssText = oldWrapperCSS;
      te.style.cssText = oldCSS;
      if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos); }

      // Try to detect the user choosing select-all
      if (te.selectionStart != null) {
        if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack(); }
        var i = 0, poll = function () {
          if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
              te.selectionEnd > 0 && input.prevInput == "\u200b") {
            operation(cm, selectAll)(cm);
          } else if (i++ < 10) {
            display.detectingSelectAll = setTimeout(poll, 500);
          } else {
            display.selForContextMenu = null;
            display.input.reset();
          }
        };
        display.detectingSelectAll = setTimeout(poll, 200);
      }
    }

    if (ie && ie_version >= 9) { prepareSelectAllHack(); }
    if (captureRightClick) {
      e_stop(e);
      var mouseup = function () {
        off(window, "mouseup", mouseup);
        setTimeout(rehide, 20);
      };
      on(window, "mouseup", mouseup);
    } else {
      setTimeout(rehide, 50);
    }
  };

  TextareaInput.prototype.readOnlyChanged = function (val) {
    if (!val) { this.reset(); }
    this.textarea.disabled = val == "nocursor";
    this.textarea.readOnly = !!val;
  };

  TextareaInput.prototype.setUneditable = function () {};

  TextareaInput.prototype.needsContentAttribute = false;

  function fromTextArea(textarea, options) {
    options = options ? copyObj(options) : {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabIndex)
      { options.tabindex = textarea.tabIndex; }
    if (!options.placeholder && textarea.placeholder)
      { options.placeholder = textarea.placeholder; }
    // Set autofocus to true if this textarea is focused, or if it has
    // autofocus and no other element is focused.
    if (options.autofocus == null) {
      var hasFocus = activeElt(textarea.ownerDocument);
      options.autofocus = hasFocus == textarea ||
        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
    }

    function save() {textarea.value = cm.getValue();}

    var realSubmit;
    if (textarea.form) {
      on(textarea.form, "submit", save);
      // Deplorable hack to make the submit method do the right thing.
      if (!options.leaveSubmitMethodAlone) {
        var form = textarea.form;
        realSubmit = form.submit;
        try {
          var wrappedSubmit = form.submit = function () {
            save();
            form.submit = realSubmit;
            form.submit();
            form.submit = wrappedSubmit;
          };
        } catch(e) {}
      }
    }

    options.finishInit = function (cm) {
      cm.save = save;
      cm.getTextArea = function () { return textarea; };
      cm.toTextArea = function () {
        cm.toTextArea = isNaN; // Prevent this from being ran twice
        save();
        textarea.parentNode.removeChild(cm.getWrapperElement());
        textarea.style.display = "";
        if (textarea.form) {
          off(textarea.form, "submit", save);
          if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function")
            { textarea.form.submit = realSubmit; }
        }
      };
    };

    textarea.style.display = "none";
    var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
      options);
    return cm
  }

  function addLegacyProps(CodeMirror) {
    CodeMirror.off = off;
    CodeMirror.on = on;
    CodeMirror.wheelEventPixels = wheelEventPixels;
    CodeMirror.Doc = Doc;
    CodeMirror.splitLines = splitLinesAuto;
    CodeMirror.countColumn = countColumn;
    CodeMirror.findColumn = findColumn;
    CodeMirror.isWordChar = isWordCharBasic;
    CodeMirror.Pass = Pass;
    CodeMirror.signal = signal;
    CodeMirror.Line = Line;
    CodeMirror.changeEnd = changeEnd;
    CodeMirror.scrollbarModel = scrollbarModel;
    CodeMirror.Pos = Pos;
    CodeMirror.cmpPos = cmp;
    CodeMirror.modes = modes;
    CodeMirror.mimeModes = mimeModes;
    CodeMirror.resolveMode = resolveMode;
    CodeMirror.getMode = getMode;
    CodeMirror.modeExtensions = modeExtensions;
    CodeMirror.extendMode = extendMode;
    CodeMirror.copyState = copyState;
    CodeMirror.startState = startState;
    CodeMirror.innerMode = innerMode;
    CodeMirror.commands = commands;
    CodeMirror.keyMap = keyMap;
    CodeMirror.keyName = keyName;
    CodeMirror.isModifierKey = isModifierKey;
    CodeMirror.lookupKey = lookupKey;
    CodeMirror.normalizeKeyMap = normalizeKeyMap;
    CodeMirror.StringStream = StringStream;
    CodeMirror.SharedTextMarker = SharedTextMarker;
    CodeMirror.TextMarker = TextMarker;
    CodeMirror.LineWidget = LineWidget;
    CodeMirror.e_preventDefault = e_preventDefault;
    CodeMirror.e_stopPropagation = e_stopPropagation;
    CodeMirror.e_stop = e_stop;
    CodeMirror.addClass = addClass;
    CodeMirror.contains = contains;
    CodeMirror.rmClass = rmClass;
    CodeMirror.keyNames = keyNames;
  }

  // EDITOR CONSTRUCTOR

  defineOptions(CodeMirror);

  addEditorMethods(CodeMirror);

  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
  for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
    { CodeMirror.prototype[prop] = (function(method) {
      return function() {return method.apply(this.doc, arguments)}
    })(Doc.prototype[prop]); } }

  eventMixin(Doc);
  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  CodeMirror.defineMode = function(name/*, mode, …*/) {
    if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name; }
    defineMode.apply(this, arguments);
  };

  CodeMirror.defineMIME = defineMIME;

  // Minimal default mode.
  CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); });
  CodeMirror.defineMIME("text/plain", "null");

  // EXTENSIONS

  CodeMirror.defineExtension = function (name, func) {
    CodeMirror.prototype[name] = func;
  };
  CodeMirror.defineDocExtension = function (name, func) {
    Doc.prototype[name] = func;
  };

  CodeMirror.fromTextArea = fromTextArea;

  addLegacyProps(CodeMirror);

  CodeMirror.version = "5.65.7";

  return CodeMirror;

})));

/*!
 * FilePond 4.30.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).FilePond={})}(this,function(e){"use strict";var t=function(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])},n=function(e){var n={};return t(e,function(t){!function(e,t,n){"function"!=typeof n?Object.defineProperty(e,t,Object.assign({},n)):e[t]=n}(n,t,e[t])}),n},r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null===n)return e.getAttribute(t)||e.hasAttribute(t);e.setAttribute(t,n)},o=["svg","path"],i=function(e){return o.includes(e)},a=function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"==typeof n&&(o=n,n=null);var a=i(e)?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n&&(i(e)?r(a,"class",n):a.className=n),t(o,function(e,t){r(a,e,t)}),a},s=function(e,t){return function(e,n){return void 0!==n?t.splice(n,0,e):t.push(e),e}},u=function(e,t){return function(n){return t.splice(t.indexOf(n),1),n.element.parentNode&&e.removeChild(n.element),n}},l="undefined"!=typeof window&&void 0!==window.document,c=function(){return l},f="children"in(c()?a("svg"):{})?function(e){return e.children.length}:function(e){return e.childNodes.length},d=function(e,t,n,r){var o=n[0]||e.left,i=n[1]||e.top,a=o+e.width,s=i+e.height*(r[1]||1),u={element:Object.assign({},e),inner:{left:e.left,top:e.top,right:e.right,bottom:e.bottom},outer:{left:o,top:i,right:a,bottom:s}};return t.filter(function(e){return!e.isRectIgnored()}).map(function(e){return e.rect}).forEach(function(e){p(u.inner,Object.assign({},e.inner)),p(u.outer,Object.assign({},e.outer))}),E(u.inner),u.outer.bottom+=u.element.marginBottom,u.outer.right+=u.element.marginRight,E(u.outer),u},p=function(e,t){t.top+=e.top,t.right+=e.left,t.bottom+=e.top,t.left+=e.left,t.bottom>e.bottom&&(e.bottom=t.bottom),t.right>e.right&&(e.right=t.right)},E=function(e){e.width=e.right-e.left,e.height=e.bottom-e.top},_=function(e){return"number"==typeof e},T=function(e){return e<.5?2*e*e:(4-2*e)*e-1},I={spring:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stiffness,r=void 0===t?.5:t,o=e.damping,i=void 0===o?.75:o,a=e.mass,s=void 0===a?10:a,u=null,l=null,c=0,f=!1,d=n({interpolate:function(e,t){if(!f){if(!_(u)||!_(l))return f=!0,void(c=0);(function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.001;return Math.abs(e-t)<r&&Math.abs(n)<r})(l+=c+=-(l-u)*r/s,u,c*=i)||t?(l=u,c=0,f=!0,d.onupdate(l),d.oncomplete(l)):d.onupdate(l)}},target:{set:function(e){if(_(e)&&!_(l)&&(l=e),null===u&&(u=e,l=e),l===(u=e)||void 0===u)return f=!0,c=0,d.onupdate(l),void d.oncomplete(l);f=!1},get:function(){return u}},resting:{get:function(){return f}},onupdate:function(e){},oncomplete:function(e){}});return d},tween:function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.duration,i=void 0===o?500:o,a=r.easing,s=void 0===a?T:a,u=r.delay,l=void 0===u?0:u,c=null,f=!0,d=!1,p=null,E=n({interpolate:function(n,r){f||null===p||(null===c&&(c=n),n-c<l||((e=n-c-l)>=i||r?(e=1,t=d?0:1,E.onupdate(t*p),E.oncomplete(t*p),f=!0):(t=e/i,E.onupdate((e>=0?s(d?1-t:t):0)*p))))},target:{get:function(){return d?0:p},set:function(e){if(null===p)return p=e,E.onupdate(e),void E.oncomplete(e);e<p?(p=1,d=!0):(d=!1,p=e),f=!1,c=null}},resting:{get:function(){return f}},onupdate:function(e){},oncomplete:function(e){}});return E}},v=function(e,t,n){var r=e[t]&&"object"==typeof e[t][n]?e[t][n]:e[t]||e,o="string"==typeof r?r:r.type,i="object"==typeof r?Object.assign({},r):{};return I[o]?I[o](i):null},m=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];(t=Array.isArray(t)?t:[t]).forEach(function(t){e.forEach(function(e){var o=e,i=function(){return n[e]},a=function(t){return n[e]=t};"object"==typeof e&&(o=e.key,i=e.getter||i,a=e.setter||a),t[o]&&!r||(t[o]={get:i,set:a})})})},h=function(e){return null!=e},g={opacity:1,scaleX:1,scaleY:1,translateX:0,translateY:0,rotateX:0,rotateY:0,rotateZ:0,originX:0,originY:0},R=function(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!0;for(var n in t)if(t[n]!==e[n])return!0;return!1},O=function(e,t){var n=t.opacity,r=t.perspective,o=t.translateX,i=t.translateY,a=t.scaleX,s=t.scaleY,u=t.rotateX,l=t.rotateY,c=t.rotateZ,f=t.originX,d=t.originY,p=t.width,E=t.height,_="",T="";(h(f)||h(d))&&(T+="transform-origin: "+(f||0)+"px "+(d||0)+"px;"),h(r)&&(_+="perspective("+r+"px) "),(h(o)||h(i))&&(_+="translate3d("+(o||0)+"px, "+(i||0)+"px, 0) "),(h(a)||h(s))&&(_+="scale3d("+(h(a)?a:1)+", "+(h(s)?s:1)+", 1) "),h(c)&&(_+="rotateZ("+c+"rad) "),h(u)&&(_+="rotateX("+u+"rad) "),h(l)&&(_+="rotateY("+l+"rad) "),_.length&&(T+="transform:"+_+";"),h(n)&&(T+="opacity:"+n+";",0===n&&(T+="visibility:hidden;"),n<1&&(T+="pointer-events:none;")),h(E)&&(T+="height:"+E+"px;"),h(p)&&(T+="width:"+p+"px;");var I=e.elementCurrentStyle||"";T.length===I.length&&T===I||(e.style.cssText=T,e.elementCurrentStyle=T)},y={styles:function(e){var t=e.mixinConfig,n=e.viewProps,r=e.viewInternalAPI,o=e.viewExternalAPI,i=e.view,a=Object.assign({},n),s={};m(t,[r,o],n);var u=function(){return i.rect?d(i.rect,i.childViews,[n.translateX||0,n.translateY||0],[n.scaleX||0,n.scaleY||0]):null};return r.rect={get:u},o.rect={get:u},t.forEach(function(e){n[e]=void 0===a[e]?g[e]:a[e]}),{write:function(){if(R(s,n))return O(i.element,n),Object.assign(s,Object.assign({},n)),!0},destroy:function(){}}},listeners:function(e){e.mixinConfig,e.viewProps,e.viewInternalAPI;var t,n=e.viewExternalAPI,r=(e.viewState,e.view),o=[],i=(t=r.element,function(e,n){t.addEventListener(e,n)}),a=function(e){return function(t,n){e.removeEventListener(t,n)}}(r.element);return n.on=function(e,t){o.push({type:e,fn:t}),i(e,t)},n.off=function(e,t){o.splice(o.findIndex(function(n){return n.type===e&&n.fn===t}),1),a(e,t)},{write:function(){return!0},destroy:function(){o.forEach(function(e){a(e.type,e.fn)})}}},animations:function(e){var n=e.mixinConfig,r=e.viewProps,o=e.viewInternalAPI,i=e.viewExternalAPI,a=Object.assign({},r),s=[];return t(n,function(e,t){var n=v(t);n&&(n.onupdate=function(t){r[e]=t},n.target=a[e],m([{key:e,setter:function(e){n.target!==e&&(n.target=e)},getter:function(){return r[e]}}],[o,i],r,!0),s.push(n))}),{write:function(e){var t=document.hidden,n=!0;return s.forEach(function(r){r.resting||(n=!1),r.interpolate(e,t)}),n},destroy:function(){}}},apis:function(e){var t=e.mixinConfig,n=e.viewProps,r=e.viewExternalAPI;m(t,r,n)}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.layoutCalculated||(e.paddingTop=parseInt(n.paddingTop,10)||0,e.marginTop=parseInt(n.marginTop,10)||0,e.marginRight=parseInt(n.marginRight,10)||0,e.marginBottom=parseInt(n.marginBottom,10)||0,e.marginLeft=parseInt(n.marginLeft,10)||0,t.layoutCalculated=!0),e.left=t.offsetLeft||0,e.top=t.offsetTop||0,e.width=t.offsetWidth||0,e.height=t.offsetHeight||0,e.right=e.left+e.width,e.bottom=e.top+e.height,e.scrollTop=t.scrollTop,e.hidden=null===t.offsetParent,e},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.tag,r=void 0===t?"div":t,o=e.name,i=void 0===o?null:o,l=e.attributes,c=void 0===l?{}:l,p=e.read,E=void 0===p?function(){}:p,_=e.write,T=void 0===_?function(){}:_,I=e.create,v=void 0===I?function(){}:I,m=e.destroy,h=void 0===m?function(){}:m,g=e.filterFrameActionsForChild,R=void 0===g?function(e,t){return t}:g,O=e.didCreateView,S=void 0===O?function(){}:O,A=e.didWriteView,L=void 0===A?function(){}:A,b=e.ignoreRect,P=void 0!==b&&b,M=e.ignoreRectUpdate,w=void 0!==M&&M,C=e.mixins,N=void 0===C?[]:C;return function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=a(r,"filepond--"+i,c),p=window.getComputedStyle(l,null),_=D(),I=null,m=!1,g=[],O=[],A={},b={},M=[T],C=[E],G=[h],U=function(){return l},B=function(){return g.concat()},F=function(){return I||(I=d(_,g,[0,0],[1,1]))},q={element:{get:U},style:{get:function(){return p}},childViews:{get:B}},V=Object.assign({},q,{rect:{get:F},ref:{get:function(){return A}},is:function(e){return i===e},appendChild:(t=l,function(e,n){void 0!==n&&t.children[n]?t.insertBefore(e,t.children[n]):t.appendChild(e)}),createChildView:function(e){return function(t,n){return t(e,n)}}(e),linkView:function(e){return g.push(e),e},unlinkView:function(e){g.splice(g.indexOf(e),1)},appendChildView:s(0,g),removeChildView:u(l,g),registerWriter:function(e){return M.push(e)},registerReader:function(e){return C.push(e)},registerDestroyer:function(e){return G.push(e)},invalidateLayout:function(){return l.layoutCalculated=!1},dispatch:e.dispatch,query:e.query}),x={element:{get:U},childViews:{get:B},rect:{get:F},resting:{get:function(){return m}},isRectIgnored:function(){return P},_read:function(){I=null,g.forEach(function(e){return e._read()}),!(w&&_.width&&_.height)&&D(_,l,p);var e={root:k,props:o,rect:_};C.forEach(function(t){return t(e)})},_write:function(e,t,n){var r=0===t.length;return M.forEach(function(i){!1===i({props:o,root:k,actions:t,timestamp:e,shouldOptimize:n})&&(r=!1)}),O.forEach(function(t){!1===t.write(e)&&(r=!1)}),g.filter(function(e){return!!e.element.parentNode}).forEach(function(o){o._write(e,R(o,t),n)||(r=!1)}),g.forEach(function(o,i){o.element.parentNode||(k.appendChild(o.element,i),o._read(),o._write(e,R(o,t),n),r=!1)}),m=r,L({props:o,root:k,actions:t,timestamp:e}),r},_destroy:function(){O.forEach(function(e){return e.destroy()}),G.forEach(function(e){e({root:k,props:o})}),g.forEach(function(e){return e._destroy()})}},Y=Object.assign({},q,{rect:{get:function(){return _}}});Object.keys(N).sort(function(e,t){return"styles"===e?1:"styles"===t?-1:0}).forEach(function(e){var t=y[e]({mixinConfig:N[e],viewProps:o,viewState:b,viewInternalAPI:V,viewExternalAPI:x,view:n(Y)});t&&O.push(t)});var k=n(V);v({root:k,props:o});var j=f(l);return g.forEach(function(e,t){k.appendChild(e.element,j+t)}),S(k),n(x)}},A=function(e,t){return function(n){var r=n.root,o=n.props,i=n.actions,a=void 0===i?[]:i,s=n.timestamp,u=n.shouldOptimize;a.filter(function(t){return e[t.type]}).forEach(function(t){return e[t.type]({root:r,props:o,action:t.data,timestamp:s,shouldOptimize:u})}),t&&t({root:r,props:o,actions:a,timestamp:s,shouldOptimize:u})}},L=function(e,t){return t.parentNode.insertBefore(e,t)},b=function(e,t){return t.parentNode.insertBefore(e,t.nextSibling)},P=function(e){return Array.isArray(e)},M=function(e){return null==e},w=function(e){return e.trim()},C=function(e){return""+e},N=function(e){return"boolean"==typeof e},G=function(e){return N(e)?e:"true"===e},U=function(e){return"string"==typeof e},B=function(e){return _(e)?e:U(e)?C(e).replace(/[a-z]+/gi,""):0},F=function(e){return parseInt(B(e),10)},q=function(e){return parseFloat(B(e))},V=function(e){return _(e)&&isFinite(e)&&Math.floor(e)===e},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(V(e))return e;var n=C(e).trim();return/MB$/i.test(n)?(n=n.replace(/MB$i/,"").trim(),F(n)*t*t):/KB/i.test(n)?(n=n.replace(/KB$i/,"").trim(),F(n)*t):F(n)},Y=function(e){return"function"==typeof e},k={process:"POST",patch:"PATCH",revert:"DELETE",fetch:"GET",restore:"GET",load:"GET"},j=function(e,t,n,r,o){if(null===t)return null;if("function"==typeof t)return t;var i={url:"GET"===n||"PATCH"===n?"?"+e+"=":"",method:n,headers:o,withCredentials:!1,timeout:r,onload:null,ondata:null,onerror:null};if(U(t))return i.url=t,i;if(Object.assign(i,t),U(i.headers)){var a=i.headers.split(/:(.+)/);i.headers={header:a[0],value:a[1]}}return i.withCredentials=G(i.withCredentials),i},H=function(e){return"object"==typeof e&&null!==e},X=function(e){return P(e)?"array":function(e){return null===e}(e)?"null":V(e)?"int":/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e)?"bytes":function(e){return H(e)&&U(e.url)&&H(e.process)&&H(e.revert)&&H(e.restore)&&H(e.fetch)}(e)?"api":typeof e},W={array:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return M(e)?[]:P(e)?e:C(e).split(t).map(w).filter(function(e){return e.length})},boolean:G,int:function(e){return"bytes"===X(e)?x(e):F(e)},number:q,float:q,bytes:x,string:function(e){return Y(e)?e:C(e)},function:function(e){return function(e){for(var t=self,n=e.split("."),r=null;r=n.shift();)if(!(t=t[r]))return null;return t}(e)},serverapi:function(e){return(r={}).url=U(n=e)?n:n.url||"",r.timeout=n.timeout?parseInt(n.timeout,10):0,r.headers=n.headers?n.headers:{},t(k,function(e){r[e]=j(e,n[e],k[e],r.timeout,r.headers)}),r.process=n.process||U(n)||n.url?r.process:null,r.remove=n.remove||null,delete r.headers,r;var n,r},object:function(e){try{return JSON.parse(e.replace(/{\s*'/g,'{"').replace(/'\s*}/g,'"}').replace(/'\s*:/g,'":').replace(/:\s*'/g,':"').replace(/,\s*'/g,',"').replace(/'\s*,/g,'",'))}catch(e){return null}}},z=function(e,t,n){if(e===t)return e;var r,o=X(e);if(o!==n){var i=(r=e,W[n](r));if(o=X(i),null===i)throw'Trying to assign value with incorrect type to "'+option+'", allowed type: "'+n+'"';e=i}return e},Q=function(e){var r={};return t(e,function(t){var n,o,i,a=e[t];r[t]=(n=a[0],o=a[1],i=n,{enumerable:!0,get:function(){return i},set:function(e){i=z(e,n,o)}})}),n(r)},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.split(/(?=[A-Z])/).map(function(e){return e.toLowerCase()}).join(t)},K=function(e){return function(n,r,o){var i={};return t(e,function(e){var t=Z(e,"_").toUpperCase();i["SET_"+t]=function(r){try{o.options[e]=r.value}catch(e){}n("DID_SET_"+t,{value:o.options[e]})}}),i}},$=function(e){return function(n){var r={};return t(e,function(e){r["GET_"+Z(e,"_").toUpperCase()]=function(t){return n.options[e]}}),r}},J=1,ee=2,te=3,ne=4,re=5,oe=function(){return Math.random().toString(36).substring(2,11)};function ie(e){this.wrapped=e}function ae(e){var t,n;function r(t,n){try{var i=e[t](n),a=i.value,s=a instanceof ie;Promise.resolve(s?a.wrapped:a).then(function(e){s?r("next",e):o(i.done?"return":"normal",e)},function(e){r("throw",e)})}catch(e){o("throw",e)}}function o(e,o){switch(e){case"return":t.resolve({value:o,done:!0});break;case"throw":t.reject(o);break;default:t.resolve({value:o,done:!1})}(t=t.next)?r(t.key,t.arg):n=null}this._invoke=function(e,o){return new Promise(function(i,a){var s={key:e,arg:o,resolve:i,reject:a,next:null};n?n=n.next=s:(t=n=s,r(e,o))})},"function"!=typeof e.return&&(this.return=void 0)}function se(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}"function"==typeof Symbol&&Symbol.asyncIterator&&(ae.prototype[Symbol.asyncIterator]=function(){return this}),ae.prototype.next=function(e){return this._invoke("next",e)},ae.prototype.throw=function(e){return this._invoke("throw",e)},ae.prototype.return=function(e){return this._invoke("return",e)};function ue(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||le(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function le(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}var ce,fe,de=function(e,t){return e.splice(t,1)},pe=function(){var e=[],t=function(t,n){de(e,e.findIndex(function(e){return e.event===t&&(e.cb===n||!n)}))},n=function(t,n,r){e.filter(function(e){return e.event===t}).map(function(e){return e.cb}).forEach(function(e){return function(e,t){t?e():document.hidden?Promise.resolve(1).then(e):setTimeout(e,0)}(function(){return e.apply(void 0,ue(n))},r)})};return{fireSync:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n(e,r,!0)},fire:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n(e,r,!1)},on:function(t,n){e.push({event:t,cb:n})},onOnce:function(n,r){e.push({event:n,cb:function(){t(n,r),r.apply(void 0,arguments)}})},off:t}},Ee=function(e,t,n){Object.getOwnPropertyNames(e).filter(function(e){return!n.includes(e)}).forEach(function(n){return Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})},_e=["fire","process","revert","load","on","off","onOnce","retryLoad","extend","archive","archived","release","released","requestProcessing","freeze"],Te=function(e){var t={};return Ee(e,t,_e),t},Ie={INIT:1,IDLE:2,PROCESSING_QUEUED:9,PROCESSING:3,PROCESSING_COMPLETE:5,PROCESSING_ERROR:6,PROCESSING_REVERT_ERROR:10,LOADING:7,LOAD_ERROR:8},ve={INPUT:1,LIMBO:2,LOCAL:3},me=function(e){return/[^0-9]+/.exec(e)},he=function(){return me(1.1.toLocaleString())[0]},ge={BOOLEAN:"boolean",INT:"int",NUMBER:"number",STRING:"string",ARRAY:"array",OBJECT:"object",FUNCTION:"function",ACTION:"action",SERVER_API:"serverapi",REGEX:"regex"},Re=[],Oe=function(e,t,n){return new Promise(function(r,o){var i=Re.filter(function(t){return t.key===e}).map(function(e){return e.cb});if(0!==i.length){var a=i.shift();i.reduce(function(e,t){return e.then(function(e){return t(e,n)})},a(t,n)).then(function(e){return r(e)}).catch(function(e){return o(e)})}else r(t)})},ye=function(e,t,n){return Re.filter(function(t){return t.key===e}).map(function(e){return e.cb(t,n)})},De=function(e,t){return Re.push({key:e,cb:t})},Se=function(){return Object.assign({},Ae)},Ae={id:[null,ge.STRING],name:["filepond",ge.STRING],disabled:[!1,ge.BOOLEAN],className:[null,ge.STRING],required:[!1,ge.BOOLEAN],captureMethod:[null,ge.STRING],allowSyncAcceptAttribute:[!0,ge.BOOLEAN],allowDrop:[!0,ge.BOOLEAN],allowBrowse:[!0,ge.BOOLEAN],allowPaste:[!0,ge.BOOLEAN],allowMultiple:[!1,ge.BOOLEAN],allowReplace:[!0,ge.BOOLEAN],allowRevert:[!0,ge.BOOLEAN],allowRemove:[!0,ge.BOOLEAN],allowProcess:[!0,ge.BOOLEAN],allowReorder:[!1,ge.BOOLEAN],allowDirectoriesOnly:[!1,ge.BOOLEAN],storeAsFile:[!1,ge.BOOLEAN],forceRevert:[!1,ge.BOOLEAN],maxFiles:[null,ge.INT],checkValidity:[!1,ge.BOOLEAN],itemInsertLocationFreedom:[!0,ge.BOOLEAN],itemInsertLocation:["before",ge.STRING],itemInsertInterval:[75,ge.INT],dropOnPage:[!1,ge.BOOLEAN],dropOnElement:[!0,ge.BOOLEAN],dropValidation:[!1,ge.BOOLEAN],ignoredFiles:[[".ds_store","thumbs.db","desktop.ini"],ge.ARRAY],instantUpload:[!0,ge.BOOLEAN],maxParallelUploads:[2,ge.INT],allowMinimumUploadDuration:[!0,ge.BOOLEAN],chunkUploads:[!1,ge.BOOLEAN],chunkForce:[!1,ge.BOOLEAN],chunkSize:[5e6,ge.INT],chunkRetryDelays:[[500,1e3,3e3],ge.ARRAY],server:[null,ge.SERVER_API],fileSizeBase:[1e3,ge.INT],labelFileSizeBytes:["bytes",ge.STRING],labelFileSizeKilobytes:["KB",ge.STRING],labelFileSizeMegabytes:["MB",ge.STRING],labelFileSizeGigabytes:["GB",ge.STRING],labelDecimalSeparator:[he(),ge.STRING],labelThousandsSeparator:[(ce=he(),fe=1e3.toLocaleString(),fe!==1e3.toString()?me(fe)[0]:"."===ce?",":"."),ge.STRING],labelIdle:['Drag & Drop your files or <span class="filepond--label-action">Browse</span>',ge.STRING],labelInvalidField:["Field contains invalid files",ge.STRING],labelFileWaitingForSize:["Waiting for size",ge.STRING],labelFileSizeNotAvailable:["Size not available",ge.STRING],labelFileCountSingular:["file in list",ge.STRING],labelFileCountPlural:["files in list",ge.STRING],labelFileLoading:["Loading",ge.STRING],labelFileAdded:["Added",ge.STRING],labelFileLoadError:["Error during load",ge.STRING],labelFileRemoved:["Removed",ge.STRING],labelFileRemoveError:["Error during remove",ge.STRING],labelFileProcessing:["Uploading",ge.STRING],labelFileProcessingComplete:["Upload complete",ge.STRING],labelFileProcessingAborted:["Upload cancelled",ge.STRING],labelFileProcessingError:["Error during upload",ge.STRING],labelFileProcessingRevertError:["Error during revert",ge.STRING],labelTapToCancel:["tap to cancel",ge.STRING],labelTapToRetry:["tap to retry",ge.STRING],labelTapToUndo:["tap to undo",ge.STRING],labelButtonRemoveItem:["Remove",ge.STRING],labelButtonAbortItemLoad:["Abort",ge.STRING],labelButtonRetryItemLoad:["Retry",ge.STRING],labelButtonAbortItemProcessing:["Cancel",ge.STRING],labelButtonUndoItemProcessing:["Undo",ge.STRING],labelButtonRetryItemProcessing:["Retry",ge.STRING],labelButtonProcessItem:["Upload",ge.STRING],iconRemove:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',ge.STRING],iconProcess:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',ge.STRING],iconRetry:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',ge.STRING],iconUndo:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',ge.STRING],iconDone:['<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',ge.STRING],oninit:[null,ge.FUNCTION],onwarning:[null,ge.FUNCTION],onerror:[null,ge.FUNCTION],onactivatefile:[null,ge.FUNCTION],oninitfile:[null,ge.FUNCTION],onaddfilestart:[null,ge.FUNCTION],onaddfileprogress:[null,ge.FUNCTION],onaddfile:[null,ge.FUNCTION],onprocessfilestart:[null,ge.FUNCTION],onprocessfileprogress:[null,ge.FUNCTION],onprocessfileabort:[null,ge.FUNCTION],onprocessfilerevert:[null,ge.FUNCTION],onprocessfile:[null,ge.FUNCTION],onprocessfiles:[null,ge.FUNCTION],onremovefile:[null,ge.FUNCTION],onpreparefile:[null,ge.FUNCTION],onupdatefiles:[null,ge.FUNCTION],onreorderfiles:[null,ge.FUNCTION],beforeDropFile:[null,ge.FUNCTION],beforeAddFile:[null,ge.FUNCTION],beforeRemoveFile:[null,ge.FUNCTION],beforePrepareFile:[null,ge.FUNCTION],stylePanelLayout:[null,ge.STRING],stylePanelAspectRatio:[null,ge.STRING],styleItemPanelAspectRatio:[null,ge.STRING],styleButtonRemoveItemPosition:["left",ge.STRING],styleButtonProcessItemPosition:["right",ge.STRING],styleLoadIndicatorPosition:["right",ge.STRING],styleProgressIndicatorPosition:["right",ge.STRING],styleButtonRemoveItemAlign:[!1,ge.BOOLEAN],files:[[],ge.ARRAY],credits:[["https://pqina.nl/","Powered by PQINA"],ge.ARRAY]},Le=function(e,t){return M(t)?e[0]||null:V(t)?e[t]||null:("object"==typeof t&&(t=t.id),e.find(function(e){return e.id===t})||null)},be=function(e){if(M(e))return e;if(/:/.test(e)){var t=e.split(":");return t[1]/t[0]}return parseFloat(e)},Pe=function(e){return e.filter(function(e){return!e.archived})},Me={EMPTY:0,IDLE:1,ERROR:2,BUSY:3,READY:4},we=null,Ce=[Ie.LOAD_ERROR,Ie.PROCESSING_ERROR,Ie.PROCESSING_REVERT_ERROR],Ne=[Ie.LOADING,Ie.PROCESSING,Ie.PROCESSING_QUEUED,Ie.INIT],Ge=[Ie.PROCESSING_COMPLETE],Ue=function(e){return Ce.includes(e.status)},Be=function(e){return Ne.includes(e.status)},Fe=function(e){return Ge.includes(e.status)},qe=function(e){return H(e.options.server)&&(H(e.options.server.process)||Y(e.options.server.process))},Ve=function(e){return{GET_STATUS:function(){var t=Pe(e.items),n=Me.EMPTY,r=Me.ERROR,o=Me.BUSY,i=Me.IDLE,a=Me.READY;return 0===t.length?n:t.some(Ue)?r:t.some(Be)?o:t.some(Fe)?a:i},GET_ITEM:function(t){return Le(e.items,t)},GET_ACTIVE_ITEM:function(t){return Le(Pe(e.items),t)},GET_ACTIVE_ITEMS:function(){return Pe(e.items)},GET_ITEMS:function(){return e.items},GET_ITEM_NAME:function(t){var n=Le(e.items,t);return n?n.filename:null},GET_ITEM_SIZE:function(t){var n=Le(e.items,t);return n?n.fileSize:null},GET_STYLES:function(){return Object.keys(e.options).filter(function(e){return/^style/.test(e)}).map(function(t){return{name:t,value:e.options[t]}})},GET_PANEL_ASPECT_RATIO:function(){return/circle/.test(e.options.stylePanelLayout)?1:be(e.options.stylePanelAspectRatio)},GET_ITEM_PANEL_ASPECT_RATIO:function(){return e.options.styleItemPanelAspectRatio},GET_ITEMS_BY_STATUS:function(t){return Pe(e.items).filter(function(e){return e.status===t})},GET_TOTAL_ITEMS:function(){return Pe(e.items).length},SHOULD_UPDATE_FILE_INPUT:function(){return e.options.storeAsFile&&function(){if(null===we)try{var e=new DataTransfer;e.items.add(new File(["hello world"],"This_Works.txt"));var t=document.createElement("input");t.setAttribute("type","file"),t.files=e.files,we=1===t.files.length}catch(e){we=!1}return we}()&&!qe(e)},IS_ASYNC:function(){return qe(e)},GET_FILE_SIZE_LABELS:function(e){return{labelBytes:e("GET_LABEL_FILE_SIZE_BYTES")||void 0,labelKilobytes:e("GET_LABEL_FILE_SIZE_KILOBYTES")||void 0,labelMegabytes:e("GET_LABEL_FILE_SIZE_MEGABYTES")||void 0,labelGigabytes:e("GET_LABEL_FILE_SIZE_GIGABYTES")||void 0}}}},xe=function(e,t,n){return Math.max(Math.min(n,e),t)},Ye=function(e){return/^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(e)},ke=function(e){return e.split("/").pop().split("?").shift()},je=function(e){return e.split(".").pop()},He=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t+e).slice(-t.length)},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return e.getFullYear()+"-"+He(e.getMonth()+1,"00")+"-"+He(e.getDate(),"00")+"_"+He(e.getHours(),"00")+"-"+He(e.getMinutes(),"00")+"-"+He(e.getSeconds(),"00")},We=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o="string"==typeof n?e.slice(0,e.size,n):e.slice(0,e.size,e.type);return o.lastModifiedDate=new Date,e._relativePath&&(o._relativePath=e._relativePath),U(t)||(t=Xe()),t&&null===r&&je(t)?o.name=t:(r=r||function(e){if("string"!=typeof e)return"";var t=e.split("/").pop();return/svg/.test(t)?"svg":/zip|compressed/.test(t)?"zip":/plain/.test(t)?"txt":/msword/.test(t)?"doc":/[a-z]+/.test(t)?"jpeg"===t?"jpg":t:""}(o.type),o.name=t+(r?"."+r:"")),o},ze=function(e,t){var n=window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;if(n){var r=new n;return r.append(e),r.getBlob(t)}return new Blob([e],{type:t})},Qe=function(e){return(/^data:(.+);/.exec(e)||[])[1]||null},Ze=function(e){var t=Qe(e);return function(e,t){for(var n=new ArrayBuffer(e.length),r=new Uint8Array(n),o=0;o<e.length;o++)r[o]=e.charCodeAt(o);return ze(n,t)}(function(e){return atob(function(e){return e.split(",")[1].replace(/\s/g,"")}(e))}(e),t)},Ke=function(e){if(!/^content-disposition:/i.test(e))return null;var t=e.split(/filename=|filename\*=.+''/).splice(1).map(function(e){return e.trim().replace(/^["']|[;"']{0,2}$/g,"")}).filter(function(e){return e.length});return t.length?decodeURI(t[t.length-1]):null},$e=function(e){if(/content-length:/i.test(e)){var t=e.match(/[0-9]+/)[0];return t?parseInt(t,10):null}return null},Je=function(e){return/x-content-transfer-id:/i.test(e)&&(e.split(":")[1]||"").trim()||null},et=function(e){var t={source:null,name:null,size:null},n=e.split("\n"),r=!0,o=!1,i=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value,l=Ke(u);if(l)t.name=l;else{var c=$e(u);if(c)t.size=c;else{var f=Je(u);f&&(t.source=f)}}}}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return t},tt=function(e){var t={source:null,complete:!1,progress:0,size:null,timestamp:null,duration:0,request:null},n=function(n){e?(t.timestamp=Date.now(),t.request=e(n,function(e){t.duration=Date.now()-t.timestamp,t.complete=!0,e instanceof Blob&&(e=We(e,e.name||ke(n))),r.fire("load",e instanceof Blob?e:e?e.body:null)},function(e){r.fire("error","string"==typeof e?{type:"error",code:0,body:e}:e)},function(e,n,o){o&&(t.size=o),t.duration=Date.now()-t.timestamp,e?(t.progress=n/o,r.fire("progress",t.progress)):t.progress=null},function(){r.fire("abort")},function(e){var n=et("string"==typeof e?e:e.headers);r.fire("meta",{size:t.size||n.size,filename:n.name,source:n.source})})):r.fire("error",{type:"error",body:"Can't load URL",code:400})},r=Object.assign({},pe(),{setSource:function(e){return t.source=e},getProgress:function(){return t.progress},abort:function(){t.request&&t.request.abort&&t.request.abort()},load:function(){var e,o,i=t.source;r.fire("init",i),i instanceof File?r.fire("load",i):i instanceof Blob?r.fire("load",We(i,i.name)):Ye(i)?r.fire("load",We(Ze(i),e,null,o)):n(i)}});return r},nt=function(e){return/GET|HEAD/.test(e)},rt=function(e,t,n){var r={onheaders:function(){},onprogress:function(){},onload:function(){},ontimeout:function(){},onerror:function(){},onabort:function(){},abort:function(){o=!0,a.abort()}},o=!1,i=!1;n=Object.assign({method:"POST",headers:{},withCredentials:!1},n),t=encodeURI(t),nt(n.method)&&e&&(t=""+t+encodeURIComponent("string"==typeof e?e:JSON.stringify(e)));var a=new XMLHttpRequest;return(nt(n.method)?a:a.upload).onprogress=function(e){o||r.onprogress(e.lengthComputable,e.loaded,e.total)},a.onreadystatechange=function(){a.readyState<2||4===a.readyState&&0===a.status||i||(i=!0,r.onheaders(a))},a.onload=function(){a.status>=200&&a.status<300?r.onload(a):r.onerror(a)},a.onerror=function(){return r.onerror(a)},a.onabort=function(){o=!0,r.onabort()},a.ontimeout=function(){return r.ontimeout(a)},a.open(n.method,t,!0),V(n.timeout)&&(a.timeout=n.timeout),Object.keys(n.headers).forEach(function(e){var t=unescape(encodeURIComponent(n.headers[e]));a.setRequestHeader(e,t)}),n.responseType&&(a.responseType=n.responseType),n.withCredentials&&(a.withCredentials=!0),a.send(e),r},ot=function(e,t,n,r){return{type:e,code:t,body:n,headers:r}},it=function(e){return function(t){e(ot("error",0,"Timeout",t.getAllResponseHeaders()))}},at=function(e){return/\?/.test(e)},st=function(){for(var e="",t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach(function(t){e+=at(e)&&at(t)?t.replace(/\?/,"&"):t}),e},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if("function"==typeof t)return t;if(!t||!U(t.url))return null;var n=t.onload||function(e){return e},r=t.onerror||function(e){return null};return function(o,i,a,s,u,l){var c=rt(o,st(e,t.url),Object.assign({},t,{responseType:"blob"}));return c.onload=function(e){var r=e.getAllResponseHeaders(),a=et(r).name||ke(o);i(ot("load",e.status,"HEAD"===t.method?null:We(n(e.response),a),r))},c.onerror=function(e){a(ot("error",e.status,r(e.response)||e.statusText,e.getAllResponseHeaders()))},c.onheaders=function(e){l(ot("headers",e.status,null,e.getAllResponseHeaders()))},c.ontimeout=it(a),c.onprogress=s,c.onabort=u,c}},lt=0,ct=1,ft=2,dt=3,pt=4,Et=function(e,t,n,r,o,i,a,s,u,l,c){for(var f=[],d=c.chunkTransferId,p=c.chunkServer,E=c.chunkSize,_=c.chunkRetryDelays,T={serverId:d,aborted:!1},I=t.ondata||function(e){return e},v=t.onload||function(e,t){return"HEAD"===t?e.getResponseHeader("Upload-Offset"):e.response},m=t.onerror||function(e){return null},h=Math.floor(r.size/E),g=0;g<=h;g++){var R=g*E,O=r.slice(R,R+E,"application/offset+octet-stream");f[g]={index:g,size:O.size,offset:R,data:O,file:r,progress:0,retries:ue(_),status:lt,error:null,request:null,timeout:null}}var y,D,S,A,L=function(e){return e.status===lt||e.status===dt},b=function(t){if(!T.aborted)if(t=t||f.find(L)){t.status=ft,t.progress=null;var n=p.ondata||function(e){return e},o=p.onerror||function(e){return null},s=st(e,p.url,T.serverId),l="function"==typeof p.headers?p.headers(t):Object.assign({},p.headers,{"Content-Type":"application/offset+octet-stream","Upload-Offset":t.offset,"Upload-Length":r.size,"Upload-Name":r.name}),c=t.request=rt(n(t.data),s,Object.assign({},p,{headers:l}));c.onload=function(){t.status=ct,t.request=null,w()},c.onprogress=function(e,n,r){t.progress=e?n:null,M()},c.onerror=function(e){t.status=dt,t.request=null,t.error=o(e.response)||e.statusText,P(t)||a(ot("error",e.status,o(e.response)||e.statusText,e.getAllResponseHeaders()))},c.ontimeout=function(e){t.status=dt,t.request=null,P(t)||it(a)(e)},c.onabort=function(){t.status=lt,t.request=null,u()}}else f.every(function(e){return e.status===ct})&&i(T.serverId)},P=function(e){return 0!==e.retries.length&&(e.status=pt,clearTimeout(e.timeout),e.timeout=setTimeout(function(){b(e)},e.retries.shift()),!0)},M=function(){var e=f.reduce(function(e,t){return null===e||null===t.progress?null:e+t.progress},0);if(null===e)return s(!1,0,0);var t=f.reduce(function(e,t){return e+t.size},0);s(!0,e,t)},w=function(){f.filter(function(e){return e.status===ft}).length>=1||b()};return T.serverId?(y=function(e){T.aborted||(f.filter(function(t){return t.offset<e}).forEach(function(e){e.status=ct,e.progress=e.size}),w())},D=st(e,p.url,T.serverId),S={headers:"function"==typeof t.headers?t.headers(T.serverId):Object.assign({},t.headers),method:"HEAD"},(A=rt(null,D,S)).onload=function(e){return y(v(e,S.method))},A.onerror=function(e){return a(ot("error",e.status,m(e.response)||e.statusText,e.getAllResponseHeaders()))},A.ontimeout=it(a)):function(i){var s=new FormData;H(o)&&s.append(n,JSON.stringify(o));var u="function"==typeof t.headers?t.headers(r,o):Object.assign({},t.headers,{"Upload-Length":r.size}),l=Object.assign({},t,{headers:u}),c=rt(I(s),st(e,t.url),l);c.onload=function(e){return i(v(e,l.method))},c.onerror=function(e){return a(ot("error",e.status,m(e.response)||e.statusText,e.getAllResponseHeaders()))},c.ontimeout=it(a)}(function(e){T.aborted||(l(e),T.serverId=e,w())}),{abort:function(){T.aborted=!0,f.forEach(function(e){clearTimeout(e.timeout),e.request&&e.request.abort()})}}},_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return"function"==typeof t?function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return t.apply(void 0,[n].concat(o,[r]))}:t&&U(t.url)?function(e,t,n,r){return function(o,i,a,s,u,l,c){if(o){var f=r.chunkUploads,d=f&&o.size>r.chunkSize,p=f&&(d||r.chunkForce);if(o instanceof Blob&&p)return Et(e,t,n,o,i,a,s,u,l,c,r);var E=t.ondata||function(e){return e},_=t.onload||function(e){return e},T=t.onerror||function(e){return null},I="function"==typeof t.headers?t.headers(o,i)||{}:Object.assign({},t.headers),v=Object.assign({},t,{headers:I}),m=new FormData;H(i)&&m.append(n,JSON.stringify(i)),(o instanceof Blob?[{name:null,file:o}]:o).forEach(function(e){m.append(n,e.file,null===e.name?e.file.name:""+e.name+e.file.name)});var h=rt(E(m),st(e,t.url),v);return h.onload=function(e){a(ot("load",e.status,_(e.response),e.getAllResponseHeaders()))},h.onerror=function(e){s(ot("error",e.status,T(e.response)||e.statusText,e.getAllResponseHeaders()))},h.ontimeout=it(s),h.onprogress=u,h.onabort=l,h}}}(e,t,n,r):null},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if("function"==typeof t)return t;if(!t||!U(t.url))return function(e,t){return t()};var n=t.onload||function(e){return e},r=t.onerror||function(e){return null};return function(o,i,a){var s=rt(o,e+t.url,t);return s.onload=function(e){i(ot("load",e.status,n(e.response),e.getAllResponseHeaders()))},s.onerror=function(e){a(ot("error",e.status,r(e.response)||e.statusText,e.getAllResponseHeaders()))},s.ontimeout=it(a),s}},It=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e+Math.random()*(t-e)},vt=function(e,t){var n={complete:!1,perceivedProgress:0,perceivedPerformanceUpdater:null,progress:null,timestamp:null,perceivedDuration:0,duration:0,request:null,response:null},r=t.allowMinimumUploadDuration,o=function(){n.request&&(n.perceivedPerformanceUpdater.clear(),n.request.abort&&n.request.abort(),n.complete=!0)},i=r?function(){return n.progress?Math.min(n.progress,n.perceivedProgress):null}:function(){return n.progress||null},a=r?function(){return Math.min(n.duration,n.perceivedDuration)}:function(){return n.duration},s=Object.assign({},pe(),{process:function(t,o){var i=function(){0!==n.duration&&null!==n.progress&&s.fire("progress",s.getProgress())},a=function(){n.complete=!0,s.fire("load-perceived",n.response.body)};s.fire("start"),n.timestamp=Date.now(),n.perceivedPerformanceUpdater=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:25),r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:250,o=null,i=Date.now();return t>0&&function a(){var s=Date.now()-i,u=It(n,r);s+u>t&&(u=s+u-t);var l=s/t;l>=1||document.hidden?e(1):(e(l),o=setTimeout(a,u))}(),{clear:function(){clearTimeout(o)}}}(function(e){n.perceivedProgress=e,n.perceivedDuration=Date.now()-n.timestamp,i(),n.response&&1===n.perceivedProgress&&!n.complete&&a()},r?It(750,1500):0),n.request=e(t,o,function(e){n.response=H(e)?e:{type:"load",code:200,body:""+e,headers:{}},n.duration=Date.now()-n.timestamp,n.progress=1,s.fire("load",n.response.body),(!r||r&&1===n.perceivedProgress)&&a()},function(e){n.perceivedPerformanceUpdater.clear(),s.fire("error",H(e)?e:{type:"error",code:0,body:""+e})},function(e,t,r){n.duration=Date.now()-n.timestamp,n.progress=e?t/r:null,i()},function(){n.perceivedPerformanceUpdater.clear(),s.fire("abort",n.response?n.response.body:null)},function(e){s.fire("transfer",e)})},abort:o,getProgress:i,getDuration:a,reset:function(){o(),n.complete=!1,n.perceivedProgress=0,n.progress=0,n.timestamp=null,n.perceivedDuration=0,n.duration=0,n.request=null,n.response=null}});return s},mt=function(e){return e.substring(0,e.lastIndexOf("."))||e},ht=function(e){return!!(e instanceof File||e instanceof Blob&&e.name)},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=oe(),i={archived:!1,frozen:!1,released:!1,source:null,file:r,serverFileReference:t,transferId:null,processingAborted:!1,status:t?Ie.PROCESSING_COMPLETE:Ie.INIT,activeLoader:null,activeProcessor:null},a=null,s={},u=function(e){return i.status=e},l=function(e){if(!i.released&&!i.frozen){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];f.fire.apply(f,[e].concat(n))}},c=function(e,t,n){var r=e.split("."),o=r[0],i=r.pop(),a=s;r.forEach(function(e){return a=a[e]}),JSON.stringify(a[i])!==JSON.stringify(t)&&(a[i]=t,l("metadata-update",{key:o,value:s[o],silent:n}))},f=Object.assign({id:{get:function(){return o}},origin:{get:function(){return e},set:function(t){return e=t}},serverId:{get:function(){return i.serverFileReference}},transferId:{get:function(){return i.transferId}},status:{get:function(){return i.status}},filename:{get:function(){return i.file.name}},filenameWithoutExtension:{get:function(){return mt(i.file.name)}},fileExtension:{get:function(){return je(i.file.name)}},fileType:{get:function(){return i.file.type}},fileSize:{get:function(){return i.file.size}},file:{get:function(){return i.file}},relativePath:{get:function(){return i.file._relativePath}},source:{get:function(){return i.source}},getMetadata:function(e){return function e(t){if(!H(t))return t;var n=P(t)?[]:{};for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];n[r]=o&&H(o)?e(o):o}return n}(e?s[e]:s)},setMetadata:function(e,t,n){if(H(e)){var r=e;return Object.keys(r).forEach(function(e){c(e,r[e],t)}),e}return c(e,t,n),t},extend:function(e,t){return d[e]=t},abortLoad:function(){i.activeLoader?i.activeLoader.abort():(u(Ie.INIT),l("load-abort"))},retryLoad:function(){i.activeLoader&&i.activeLoader.load()},requestProcessing:function(){i.processingAborted=!1,u(Ie.PROCESSING_QUEUED)},abortProcessing:function(){return new Promise(function(e){if(!i.activeProcessor)return i.processingAborted=!0,u(Ie.IDLE),l("process-abort"),void e();a=function(){e()},i.activeProcessor.abort()})},load:function(t,n,r){i.source=t,f.fireSync("init"),i.file?f.fireSync("load-skip"):(i.file=function(e){var t=[e.name,e.size,e.type];return e instanceof Blob||Ye(e)?t[0]=e.name||Xe():Ye(e)?(t[1]=e.length,t[2]=Qe(e)):U(e)&&(t[0]=ke(e),t[1]=0,t[2]="application/octet-stream"),{name:t[0],size:t[1],type:t[2]}}(t),n.on("init",function(){l("load-init")}),n.on("meta",function(t){i.file.size=t.size,i.file.filename=t.filename,t.source&&(e=ve.LIMBO,i.serverFileReference=t.source,i.status=Ie.PROCESSING_COMPLETE),l("load-meta")}),n.on("progress",function(e){u(Ie.LOADING),l("load-progress",e)}),n.on("error",function(e){u(Ie.LOAD_ERROR),l("load-request-error",e)}),n.on("abort",function(){u(Ie.INIT),l("load-abort")}),n.on("load",function(t){i.activeLoader=null;var n=function(t){i.file=ht(t)?t:i.file,e===ve.LIMBO&&i.serverFileReference?u(Ie.PROCESSING_COMPLETE):u(Ie.IDLE),l("load")};i.serverFileReference?n(t):r(t,n,function(e){i.file=t,l("load-meta"),u(Ie.LOAD_ERROR),l("load-file-error",e)})}),n.setSource(t),i.activeLoader=n,n.load())},process:function e(t,n){if(i.processingAborted)i.processingAborted=!1;else if(u(Ie.PROCESSING),a=null,i.file instanceof Blob){t.on("load",function(e){i.transferId=null,i.serverFileReference=e}),t.on("transfer",function(e){i.transferId=e}),t.on("load-perceived",function(e){i.activeProcessor=null,i.transferId=null,i.serverFileReference=e,u(Ie.PROCESSING_COMPLETE),l("process-complete",e)}),t.on("start",function(){l("process-start")}),t.on("error",function(e){i.activeProcessor=null,u(Ie.PROCESSING_ERROR),l("process-error",e)}),t.on("abort",function(e){i.activeProcessor=null,i.serverFileReference=e,u(Ie.IDLE),l("process-abort"),a&&a()}),t.on("progress",function(e){l("process-progress",e)});var r=console.error;n(i.file,function(e){i.archived||t.process(e,Object.assign({},s))},r),i.activeProcessor=t}else f.on("load",function(){e(t,n)})},revert:function(e,t){return new Promise(function(n,r){var o=null!==i.serverFileReference?i.serverFileReference:i.transferId;null!==o?(e(o,function(){i.serverFileReference=null,i.transferId=null,n()},function(e){t?(u(Ie.PROCESSING_REVERT_ERROR),l("process-revert-error"),r(e)):n()}),u(Ie.IDLE),l("process-revert")):n()})}},pe(),{freeze:function(){return i.frozen=!0},release:function(){return i.released=!0},released:{get:function(){return i.released}},archive:function(){return i.archived=!0},archived:{get:function(){return i.archived}}}),d=n(f);return d},Rt=function(e,t){var n=function(e,t){return M(t)?0:U(t)?e.findIndex(function(e){return e.id===t}):-1}(e,t);if(!(n<0))return e[n]||null},Ot=function(e,t,n,r,o,i){var a=rt(null,e,{method:"GET",responseType:"blob"});return a.onload=function(n){var r=n.getAllResponseHeaders(),o=et(r).name||ke(e);t(ot("load",n.status,We(n.response,o),r))},a.onerror=function(e){n(ot("error",e.status,e.statusText,e.getAllResponseHeaders()))},a.onheaders=function(e){i(ot("headers",e.status,null,e.getAllResponseHeaders()))},a.ontimeout=it(n),a.onprogress=r,a.onabort=o,a},yt=function(e){return 0===e.indexOf("//")&&(e=location.protocol+e),e.toLowerCase().replace("blob:","").replace(/([a-z])?:\/\//,"$1").split("/")[0]},Dt=function(e){return function(){return Y(e)?e.apply(void 0,arguments):e}},St=function(e,t){clearTimeout(t.listUpdateTimeout),t.listUpdateTimeout=setTimeout(function(){e("DID_UPDATE_ITEMS",{items:Pe(t.items)})},0)},At=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise(function(t){if(!e)return t(!0);var r=e.apply(void 0,n);return null==r?t(!0):"boolean"==typeof r?t(r):void("function"==typeof r.then&&r.then(t))})},Lt=function(e,t){e.items.sort(function(e,n){return t(Te(e),Te(n))})},bt=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.query,o=n.success,i=void 0===o?function(){}:o,a=n.failure,s=void 0===a?function(){}:a,u=se(n,["query","success","failure"]),l=Le(e.items,r);l?t(l,i,s,u||{}):s({error:ot("error",0,"Item not found"),file:null})}},Pt=function(e,t,n){return{ABORT_ALL:function(){Pe(n.items).forEach(function(e){e.freeze(),e.abortLoad(),e.abortProcessing()})},DID_SET_FILES:function(t){var r=t.value,o=(void 0===r?[]:r).map(function(e){return{source:e.source?e.source:e,options:e.options}}),i=Pe(n.items);i.forEach(function(t){o.find(function(e){return e.source===t.source||e.source===t.file})||e("REMOVE_ITEM",{query:t,remove:!1})}),i=Pe(n.items),o.forEach(function(t,n){i.find(function(e){return e.source===t.source||e.file===t.source})||e("ADD_ITEM",Object.assign({},t,{interactionMethod:re,index:n}))})},DID_UPDATE_ITEM_METADATA:function(r){var o=r.id,i=r.action,a=r.change;a.silent||(clearTimeout(n.itemUpdateTimeout),n.itemUpdateTimeout=setTimeout(function(){var r=Rt(n.items,o);if(t("IS_ASYNC")){r.origin===ve.LOCAL&&e("DID_LOAD_ITEM",{id:r.id,error:null,serverFileReference:r.source});var s,u=function(){setTimeout(function(){e("REQUEST_ITEM_PROCESSING",{query:o})},32)};return r.status===Ie.PROCESSING_COMPLETE?(s=n.options.instantUpload,void r.revert(Tt(n.options.server.url,n.options.server.revert),t("GET_FORCE_REVERT")).then(s?u:function(){}).catch(function(){})):r.status===Ie.PROCESSING?function(e){r.abortProcessing().then(e?u:function(){})}(n.options.instantUpload):void(n.options.instantUpload&&u())}Oe("SHOULD_PREPARE_OUTPUT",!1,{item:r,query:t,action:i,change:a}).then(function(n){var i=t("GET_BEFORE_PREPARE_FILE");i&&(n=i(r,n)),n&&e("REQUEST_PREPARE_OUTPUT",{query:o,item:r,success:function(t){e("DID_PREPARE_OUTPUT",{id:o,file:t})}},!0)})},0))},MOVE_ITEM:function(e){var t=e.query,r=e.index,o=Le(n.items,t);if(o){var i=n.items.indexOf(o);i!==(r=xe(r,0,n.items.length-1))&&n.items.splice(r,0,n.items.splice(i,1)[0])}},SORT:function(r){var o=r.compare;Lt(n,o),e("DID_SORT_ITEMS",{items:t("GET_ACTIVE_ITEMS")})},ADD_ITEMS:function(n){var r=n.items,o=n.index,i=n.interactionMethod,a=n.success,s=void 0===a?function(){}:a,u=n.failure,l=void 0===u?function(){}:u,c=o;if(-1===o||void 0===o){var f=t("GET_ITEM_INSERT_LOCATION"),d=t("GET_TOTAL_ITEMS");c="before"===f?0:d}var p=t("GET_IGNORED_FILES"),E=r.filter(function(e){return ht(e)?!p.includes(e.name.toLowerCase()):!M(e)}).map(function(t){return new Promise(function(n,r){e("ADD_ITEM",{interactionMethod:i,source:t.source||t,success:n,failure:r,index:c++,options:t.options||{}})})});Promise.all(E).then(s).catch(l)},ADD_ITEM:function(r){var o=r.source,i=r.index,a=void 0===i?-1:i,s=r.interactionMethod,u=r.success,l=void 0===u?function(){}:u,c=r.failure,f=void 0===c?function(){}:c,d=r.options,p=void 0===d?{}:d;if(M(o))f({error:ot("error",0,"No source"),file:null});else if(!ht(o)||!n.options.ignoredFiles.includes(o.name.toLowerCase())){if(!function(e){var t=Pe(e.items).length;if(!e.options.allowMultiple)return 0===t;var n=e.options.maxFiles;return null===n||t<n}(n)){if(n.options.allowMultiple||!n.options.allowMultiple&&!n.options.allowReplace){var E=ot("warning",0,"Max files");return e("DID_THROW_MAX_FILES",{source:o,error:E}),void f({error:E,file:null})}var _=Pe(n.items)[0];if(_.status===Ie.PROCESSING_COMPLETE||_.status===Ie.PROCESSING_REVERT_ERROR){var T=t("GET_FORCE_REVERT");if(_.revert(Tt(n.options.server.url,n.options.server.revert),T).then(function(){T&&e("ADD_ITEM",{source:o,index:a,interactionMethod:s,success:l,failure:f,options:p})}).catch(function(){}),T)return}e("REMOVE_ITEM",{query:_.id})}var I="local"===p.type?ve.LOCAL:"limbo"===p.type?ve.LIMBO:ve.INPUT,v=gt(I,I===ve.INPUT?null:o,p.file);Object.keys(p.metadata||{}).forEach(function(e){v.setMetadata(e,p.metadata[e])}),ye("DID_CREATE_ITEM",v,{query:t,dispatch:e});var m=t("GET_ITEM_INSERT_LOCATION");n.options.itemInsertLocationFreedom||(a="before"===m?-1:n.items.length),function(e,t,n){M(t)||(void 0===n?e.push(t):function(e,t,n){e.splice(t,0,n)}(e,n=xe(n,0,e.length),t))}(n.items,v,a),Y(m)&&o&&Lt(n,m);var h=v.id;v.on("init",function(){e("DID_INIT_ITEM",{id:h})}),v.on("load-init",function(){e("DID_START_ITEM_LOAD",{id:h})}),v.on("load-meta",function(){e("DID_UPDATE_ITEM_META",{id:h})}),v.on("load-progress",function(t){e("DID_UPDATE_ITEM_LOAD_PROGRESS",{id:h,progress:t})}),v.on("load-request-error",function(t){var r=Dt(n.options.labelFileLoadError)(t);if(t.code>=400&&t.code<500)return e("DID_THROW_ITEM_INVALID",{id:h,error:t,status:{main:r,sub:t.code+" ("+t.body+")"}}),void f({error:t,file:Te(v)});e("DID_THROW_ITEM_LOAD_ERROR",{id:h,error:t,status:{main:r,sub:n.options.labelTapToRetry}})}),v.on("load-file-error",function(t){e("DID_THROW_ITEM_INVALID",{id:h,error:t.status,status:t.status}),f({error:t.status,file:Te(v)})}),v.on("load-abort",function(){e("REMOVE_ITEM",{query:h})}),v.on("load-skip",function(){e("COMPLETE_LOAD_ITEM",{query:h,item:v,data:{source:o,success:l}})}),v.on("load",function(){var r=function(r){r?(v.on("metadata-update",function(t){e("DID_UPDATE_ITEM_METADATA",{id:h,change:t})}),Oe("SHOULD_PREPARE_OUTPUT",!1,{item:v,query:t}).then(function(r){var i=t("GET_BEFORE_PREPARE_FILE");i&&(r=i(v,r));var a=function(){e("COMPLETE_LOAD_ITEM",{query:h,item:v,data:{source:o,success:l}}),St(e,n)};r?e("REQUEST_PREPARE_OUTPUT",{query:h,item:v,success:function(t){e("DID_PREPARE_OUTPUT",{id:h,file:t}),a()}},!0):a()})):e("REMOVE_ITEM",{query:h})};Oe("DID_LOAD_ITEM",v,{query:t,dispatch:e}).then(function(){At(t("GET_BEFORE_ADD_FILE"),Te(v)).then(r)}).catch(function(t){if(!t||!t.error||!t.status)return r(!1);e("DID_THROW_ITEM_INVALID",{id:h,error:t.error,status:t.status})})}),v.on("process-start",function(){e("DID_START_ITEM_PROCESSING",{id:h})}),v.on("process-progress",function(t){e("DID_UPDATE_ITEM_PROCESS_PROGRESS",{id:h,progress:t})}),v.on("process-error",function(t){e("DID_THROW_ITEM_PROCESSING_ERROR",{id:h,error:t,status:{main:Dt(n.options.labelFileProcessingError)(t),sub:n.options.labelTapToRetry}})}),v.on("process-revert-error",function(t){e("DID_THROW_ITEM_PROCESSING_REVERT_ERROR",{id:h,error:t,status:{main:Dt(n.options.labelFileProcessingRevertError)(t),sub:n.options.labelTapToRetry}})}),v.on("process-complete",function(t){e("DID_COMPLETE_ITEM_PROCESSING",{id:h,error:null,serverFileReference:t}),e("DID_DEFINE_VALUE",{id:h,value:t})}),v.on("process-abort",function(){e("DID_ABORT_ITEM_PROCESSING",{id:h})}),v.on("process-revert",function(){e("DID_REVERT_ITEM_PROCESSING",{id:h}),e("DID_DEFINE_VALUE",{id:h,value:null})}),e("DID_ADD_ITEM",{id:h,index:a,interactionMethod:s}),St(e,n);var g=n.options.server||{},R=g.url,O=g.load,y=g.restore,D=g.fetch;v.load(o,tt(I===ve.INPUT?U(o)&&function(e){return(e.indexOf(":")>-1||e.indexOf("//")>-1)&&yt(location.href)!==yt(e)}(o)&&D?ut(R,D):Ot:ut(R,I===ve.LIMBO?y:O)),function(e,n,r){Oe("LOAD_FILE",e,{query:t}).then(n).catch(r)})}},REQUEST_PREPARE_OUTPUT:function(e){var n=e.item,r=e.success,o=e.failure,i=void 0===o?function(){}:o,a={error:ot("error",0,"Item not found"),file:null};if(n.archived)return i(a);Oe("PREPARE_OUTPUT",n.file,{query:t,item:n}).then(function(e){Oe("COMPLETE_PREPARE_OUTPUT",e,{query:t,item:n}).then(function(e){if(n.archived)return i(a);r(e)})})},COMPLETE_LOAD_ITEM:function(r){var o=r.item,i=r.data,a=i.success,s=i.source,u=t("GET_ITEM_INSERT_LOCATION");if(Y(u)&&s&&Lt(n,u),e("DID_LOAD_ITEM",{id:o.id,error:null,serverFileReference:o.origin===ve.INPUT?null:s}),a(Te(o)),o.origin!==ve.LOCAL)return o.origin===ve.LIMBO?(e("DID_COMPLETE_ITEM_PROCESSING",{id:o.id,error:null,serverFileReference:s}),void e("DID_DEFINE_VALUE",{id:o.id,value:o.serverId||s})):void(t("IS_ASYNC")&&n.options.instantUpload&&e("REQUEST_ITEM_PROCESSING",{query:o.id}));e("DID_LOAD_LOCAL_ITEM",{id:o.id})},RETRY_ITEM_LOAD:bt(n,function(e){e.retryLoad()}),REQUEST_ITEM_PREPARE:bt(n,function(t,n,r){e("REQUEST_PREPARE_OUTPUT",{query:t.id,item:t,success:function(r){e("DID_PREPARE_OUTPUT",{id:t.id,file:r}),n({file:t,output:r})},failure:r},!0)}),REQUEST_ITEM_PROCESSING:bt(n,function(r,o,i){if(r.status===Ie.IDLE||r.status===Ie.PROCESSING_ERROR)r.status!==Ie.PROCESSING_QUEUED&&(r.requestProcessing(),e("DID_REQUEST_ITEM_PROCESSING",{id:r.id}),e("PROCESS_ITEM",{query:r,success:o,failure:i},!0));else{var a=function(){return e("REQUEST_ITEM_PROCESSING",{query:r,success:o,failure:i})},s=function(){return document.hidden?a():setTimeout(a,32)};r.status===Ie.PROCESSING_COMPLETE||r.status===Ie.PROCESSING_REVERT_ERROR?r.revert(Tt(n.options.server.url,n.options.server.revert),t("GET_FORCE_REVERT")).then(s).catch(function(){}):r.status===Ie.PROCESSING&&r.abortProcessing().then(s)}}),PROCESS_ITEM:bt(n,function(r,o,i){var a=t("GET_MAX_PARALLEL_UPLOADS");if(t("GET_ITEMS_BY_STATUS",Ie.PROCESSING).length!==a){if(r.status!==Ie.PROCESSING){var s=function t(){var r=n.processingQueue.shift();if(r){var o=r.id,i=r.success,a=r.failure,s=Le(n.items,o);s&&!s.archived?e("PROCESS_ITEM",{query:o,success:i,failure:a},!0):t()}};r.onOnce("process-complete",function(){o(Te(r)),s();var i=n.options.server;if(n.options.instantUpload&&r.origin===ve.LOCAL&&Y(i.remove)){var a=function(){};r.origin=ve.LIMBO,n.options.server.remove(r.source,a,a)}t("GET_ITEMS_BY_STATUS",Ie.PROCESSING_COMPLETE).length===n.items.length&&e("DID_COMPLETE_ITEM_PROCESSING_ALL")}),r.onOnce("process-error",function(e){i({error:e,file:Te(r)}),s()});var u=n.options;r.process(vt(_t(u.server.url,u.server.process,u.name,{chunkTransferId:r.transferId,chunkServer:u.server.patch,chunkUploads:u.chunkUploads,chunkForce:u.chunkForce,chunkSize:u.chunkSize,chunkRetryDelays:u.chunkRetryDelays}),{allowMinimumUploadDuration:t("GET_ALLOW_MINIMUM_UPLOAD_DURATION")}),function(n,o,i){Oe("PREPARE_OUTPUT",n,{query:t,item:r}).then(function(t){e("DID_PREPARE_OUTPUT",{id:r.id,file:t}),o(t)}).catch(i)})}}else n.processingQueue.push({id:r.id,success:o,failure:i})}),RETRY_ITEM_PROCESSING:bt(n,function(t){e("REQUEST_ITEM_PROCESSING",{query:t})}),REQUEST_REMOVE_ITEM:bt(n,function(n){At(t("GET_BEFORE_REMOVE_FILE"),Te(n)).then(function(t){t&&e("REMOVE_ITEM",{query:n})})}),RELEASE_ITEM:bt(n,function(e){e.release()}),REMOVE_ITEM:bt(n,function(r,o,i,a){var s=function(){var t=r.id;Rt(n.items,t).archive(),e("DID_REMOVE_ITEM",{error:null,id:t,item:r}),St(e,n),o(Te(r))},u=n.options.server;r.origin===ve.LOCAL&&u&&Y(u.remove)&&!1!==a.remove?(e("DID_START_ITEM_REMOVE",{id:r.id}),u.remove(r.source,function(){return s()},function(t){e("DID_THROW_ITEM_REMOVE_ERROR",{id:r.id,error:ot("error",0,t,null),status:{main:Dt(n.options.labelFileRemoveError)(t),sub:n.options.labelTapToRetry}})})):((a.revert&&r.origin!==ve.LOCAL&&null!==r.serverId||n.options.chunkUploads&&r.file.size>n.options.chunkSize||n.options.chunkUploads&&n.options.chunkForce)&&r.revert(Tt(n.options.server.url,n.options.server.revert),t("GET_FORCE_REVERT")),s())}),ABORT_ITEM_LOAD:bt(n,function(e){e.abortLoad()}),ABORT_ITEM_PROCESSING:bt(n,function(t){t.serverId?e("REVERT_ITEM_PROCESSING",{id:t.id}):t.abortProcessing().then(function(){n.options.instantUpload&&e("REMOVE_ITEM",{query:t.id})})}),REQUEST_REVERT_ITEM_PROCESSING:bt(n,function(r){if(n.options.instantUpload){var o=function(t){t&&e("REVERT_ITEM_PROCESSING",{query:r})},i=t("GET_BEFORE_REMOVE_FILE");if(!i)return o(!0);var a=i(Te(r));return null==a?o(!0):"boolean"==typeof a?o(a):void("function"==typeof a.then&&a.then(o))}e("REVERT_ITEM_PROCESSING",{query:r})}),REVERT_ITEM_PROCESSING:bt(n,function(r){r.revert(Tt(n.options.server.url,n.options.server.revert),t("GET_FORCE_REVERT")).then(function(){(n.options.instantUpload||function(e){return!ht(e.file)}(r))&&e("REMOVE_ITEM",{query:r.id})}).catch(function(){})}),SET_OPTIONS:function(t){var n=t.options,r=Object.keys(n),o=Mt.filter(function(e){return r.includes(e)});[].concat(ue(o),ue(Object.keys(n).filter(function(e){return!o.includes(e)}))).forEach(function(t){e("SET_"+Z(t,"_").toUpperCase(),{value:n[t]})})}}},Mt=["server"],wt=function(e){return e},Ct=function(e){return document.createElement(e)},Nt=function(e,t){var n=e.childNodes[0];n?t!==n.nodeValue&&(n.nodeValue=t):(n=document.createTextNode(t),e.appendChild(n))},Gt=function(e,t,n,r){var o=(r%360-90)*Math.PI/180;return{x:e+n*Math.cos(o),y:t+n*Math.sin(o)}},Ut=function(e,t,n,r,o){var i=1;return o>r&&o-r<=.5&&(i=0),r>o&&r-o>=.5&&(i=0),function(e,t,n,r,o,i){var a=Gt(e,t,n,o),s=Gt(e,t,n,r);return["M",a.x,a.y,"A",n,n,0,i,0,s.x,s.y].join(" ")}(e,t,n,360*Math.min(.9999,r),360*Math.min(.9999,o),i)},Bt=S({tag:"div",name:"progress-indicator",ignoreRectUpdate:!0,ignoreRect:!0,create:function(e){var t=e.root,n=e.props;n.spin=!1,n.progress=0,n.opacity=0;var r=a("svg");t.ref.path=a("path",{"stroke-width":2,"stroke-linecap":"round"}),r.appendChild(t.ref.path),t.ref.svg=r,t.appendChild(r)},write:function(e){var t=e.root,n=e.props;if(0!==n.opacity){n.align&&(t.element.dataset.align=n.align);var o=parseInt(r(t.ref.path,"stroke-width"),10),i=.5*t.rect.element.width,a=0,s=0;n.spin?(a=0,s=.5):(a=0,s=n.progress);var u=Ut(i,i,i-o,a,s);r(t.ref.path,"d",u),r(t.ref.path,"stroke-opacity",n.spin||n.progress>0?1:0)}},mixins:{apis:["progress","spin","align"],styles:["opacity"],animations:{opacity:{type:"tween",duration:500},progress:{type:"spring",stiffness:.95,damping:.65,mass:10}}}}),Ft=S({tag:"button",attributes:{type:"button"},ignoreRect:!0,ignoreRectUpdate:!0,name:"file-action-button",mixins:{apis:["label"],styles:["translateX","translateY","scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",translateX:"spring",translateY:"spring",opacity:{type:"tween",duration:250}},listeners:!0},create:function(e){var t=e.root,n=e.props;t.element.innerHTML=(n.icon||"")+"<span>"+n.label+"</span>",n.isDisabled=!1},write:function(e){var t=e.root,n=e.props,o=n.isDisabled,i=t.query("GET_DISABLED")||0===n.opacity;i&&!o?(n.isDisabled=!0,r(t.element,"disabled","disabled")):!i&&o&&(n.isDisabled=!1,t.element.removeAttribute("disabled"))}}),qt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.labelBytes,i=void 0===o?"bytes":o,a=r.labelKilobytes,s=void 0===a?"KB":a,u=r.labelMegabytes,l=void 0===u?"MB":u,c=r.labelGigabytes,f=void 0===c?"GB":c,d=n,p=n*n,E=n*n*n;return(e=Math.round(Math.abs(e)))<d?e+" "+i:e<p?Math.floor(e/d)+" "+s:e<E?Vt(e/p,1,t)+" "+l:Vt(e/E,2,t)+" "+f},Vt=function(e,t,n){return e.toFixed(t).split(".").filter(function(e){return"0"!==e}).join(n)},xt=function(e){var t=e.root,n=e.props;Nt(t.ref.fileSize,qt(t.query("GET_ITEM_SIZE",n.id),".",t.query("GET_FILE_SIZE_BASE"),t.query("GET_FILE_SIZE_LABELS",t.query))),Nt(t.ref.fileName,wt(t.query("GET_ITEM_NAME",n.id)))},Yt=function(e){var t=e.root,n=e.props;V(t.query("GET_ITEM_SIZE",n.id))?xt({root:t,props:n}):Nt(t.ref.fileSize,t.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"))},kt=S({name:"file-info",ignoreRect:!0,ignoreRectUpdate:!0,write:A({DID_LOAD_ITEM:xt,DID_UPDATE_ITEM_META:xt,DID_THROW_ITEM_LOAD_ERROR:Yt,DID_THROW_ITEM_INVALID:Yt}),didCreateView:function(e){ye("CREATE_VIEW",Object.assign({},e,{view:e}))},create:function(e){var t=e.root,n=e.props,o=Ct("span");o.className="filepond--file-info-main",r(o,"aria-hidden","true"),t.appendChild(o),t.ref.fileName=o;var i=Ct("span");i.className="filepond--file-info-sub",t.appendChild(i),t.ref.fileSize=i,Nt(i,t.query("GET_LABEL_FILE_WAITING_FOR_SIZE")),Nt(o,wt(t.query("GET_ITEM_NAME",n.id)))},mixins:{styles:["translateX","translateY"],animations:{translateX:"spring",translateY:"spring"}}}),jt=function(e){return Math.round(100*e)},Ht=function(e){var t=e.root,n=e.action,r=null===n.progress?t.query("GET_LABEL_FILE_LOADING"):t.query("GET_LABEL_FILE_LOADING")+" "+jt(n.progress)+"%";Nt(t.ref.main,r),Nt(t.ref.sub,t.query("GET_LABEL_TAP_TO_CANCEL"))},Xt=function(e){var t=e.root;Nt(t.ref.main,""),Nt(t.ref.sub,"")},Wt=function(e){var t=e.root,n=e.action;Nt(t.ref.main,n.status.main),Nt(t.ref.sub,n.status.sub)},zt=S({name:"file-status",ignoreRect:!0,ignoreRectUpdate:!0,write:A({DID_LOAD_ITEM:Xt,DID_REVERT_ITEM_PROCESSING:Xt,DID_REQUEST_ITEM_PROCESSING:function(e){var t=e.root;Nt(t.ref.main,t.query("GET_LABEL_FILE_PROCESSING")),Nt(t.ref.sub,t.query("GET_LABEL_TAP_TO_CANCEL"))},DID_ABORT_ITEM_PROCESSING:function(e){var t=e.root;Nt(t.ref.main,t.query("GET_LABEL_FILE_PROCESSING_ABORTED")),Nt(t.ref.sub,t.query("GET_LABEL_TAP_TO_RETRY"))},DID_COMPLETE_ITEM_PROCESSING:function(e){var t=e.root;Nt(t.ref.main,t.query("GET_LABEL_FILE_PROCESSING_COMPLETE")),Nt(t.ref.sub,t.query("GET_LABEL_TAP_TO_UNDO"))},DID_UPDATE_ITEM_PROCESS_PROGRESS:function(e){var t=e.root,n=e.action,r=null===n.progress?t.query("GET_LABEL_FILE_PROCESSING"):t.query("GET_LABEL_FILE_PROCESSING")+" "+jt(n.progress)+"%";Nt(t.ref.main,r),Nt(t.ref.sub,t.query("GET_LABEL_TAP_TO_CANCEL"))},DID_UPDATE_ITEM_LOAD_PROGRESS:Ht,DID_THROW_ITEM_LOAD_ERROR:Wt,DID_THROW_ITEM_INVALID:Wt,DID_THROW_ITEM_PROCESSING_ERROR:Wt,DID_THROW_ITEM_PROCESSING_REVERT_ERROR:Wt,DID_THROW_ITEM_REMOVE_ERROR:Wt}),didCreateView:function(e){ye("CREATE_VIEW",Object.assign({},e,{view:e}))},create:function(e){var t=e.root,n=Ct("span");n.className="filepond--file-status-main",t.appendChild(n),t.ref.main=n;var r=Ct("span");r.className="filepond--file-status-sub",t.appendChild(r),t.ref.sub=r,Ht({root:t,action:{progress:null}})},mixins:{styles:["translateX","translateY","opacity"],animations:{opacity:{type:"tween",duration:250},translateX:"spring",translateY:"spring"}}}),Qt={AbortItemLoad:{label:"GET_LABEL_BUTTON_ABORT_ITEM_LOAD",action:"ABORT_ITEM_LOAD",className:"filepond--action-abort-item-load",align:"LOAD_INDICATOR_POSITION"},RetryItemLoad:{label:"GET_LABEL_BUTTON_RETRY_ITEM_LOAD",action:"RETRY_ITEM_LOAD",icon:"GET_ICON_RETRY",className:"filepond--action-retry-item-load",align:"BUTTON_PROCESS_ITEM_POSITION"},RemoveItem:{label:"GET_LABEL_BUTTON_REMOVE_ITEM",action:"REQUEST_REMOVE_ITEM",icon:"GET_ICON_REMOVE",className:"filepond--action-remove-item",align:"BUTTON_REMOVE_ITEM_POSITION"},ProcessItem:{label:"GET_LABEL_BUTTON_PROCESS_ITEM",action:"REQUEST_ITEM_PROCESSING",icon:"GET_ICON_PROCESS",className:"filepond--action-process-item",align:"BUTTON_PROCESS_ITEM_POSITION"},AbortItemProcessing:{label:"GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",action:"ABORT_ITEM_PROCESSING",className:"filepond--action-abort-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"},RetryItemProcessing:{label:"GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",action:"RETRY_ITEM_PROCESSING",icon:"GET_ICON_RETRY",className:"filepond--action-retry-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"},RevertItemProcessing:{label:"GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",action:"REQUEST_REVERT_ITEM_PROCESSING",icon:"GET_ICON_UNDO",className:"filepond--action-revert-item-processing",align:"BUTTON_PROCESS_ITEM_POSITION"}},Zt=[];t(Qt,function(e){Zt.push(e)});var Kt,$t=function(e){if("right"===nn(e))return 0;var t=e.ref.buttonRemoveItem.rect.element;return t.hidden?null:t.width+t.left},Jt=function(e){return e.ref.buttonAbortItemLoad.rect.element.width},en=function(e){return Math.floor(e.ref.buttonRemoveItem.rect.element.height/4)},tn=function(e){return Math.floor(e.ref.buttonRemoveItem.rect.element.left/2)},nn=function(e){return e.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION")},rn={buttonAbortItemLoad:{opacity:0},buttonRetryItemLoad:{opacity:0},buttonRemoveItem:{opacity:0},buttonProcessItem:{opacity:0},buttonAbortItemProcessing:{opacity:0},buttonRetryItemProcessing:{opacity:0},buttonRevertItemProcessing:{opacity:0},loadProgressIndicator:{opacity:0,align:function(e){return e.query("GET_STYLE_LOAD_INDICATOR_POSITION")}},processProgressIndicator:{opacity:0,align:function(e){return e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")}},processingCompleteIndicator:{opacity:0,scaleX:.75,scaleY:.75},info:{translateX:0,translateY:0,opacity:0},status:{translateX:0,translateY:0,opacity:0}},on={buttonRemoveItem:{opacity:1},buttonProcessItem:{opacity:1},info:{translateX:$t},status:{translateX:$t}},an={buttonAbortItemProcessing:{opacity:1},processProgressIndicator:{opacity:1},status:{opacity:1}},sn={DID_THROW_ITEM_INVALID:{buttonRemoveItem:{opacity:1},info:{translateX:$t},status:{translateX:$t,opacity:1}},DID_START_ITEM_LOAD:{buttonAbortItemLoad:{opacity:1},loadProgressIndicator:{opacity:1},status:{opacity:1}},DID_THROW_ITEM_LOAD_ERROR:{buttonRetryItemLoad:{opacity:1},buttonRemoveItem:{opacity:1},info:{translateX:$t},status:{opacity:1}},DID_START_ITEM_REMOVE:{processProgressIndicator:{opacity:1,align:nn},info:{translateX:$t},status:{opacity:0}},DID_THROW_ITEM_REMOVE_ERROR:{processProgressIndicator:{opacity:0,align:nn},buttonRemoveItem:{opacity:1},info:{translateX:$t},status:{opacity:1,translateX:$t}},DID_LOAD_ITEM:on,DID_LOAD_LOCAL_ITEM:{buttonRemoveItem:{opacity:1},info:{translateX:$t},status:{translateX:$t}},DID_START_ITEM_PROCESSING:an,DID_REQUEST_ITEM_PROCESSING:an,DID_UPDATE_ITEM_PROCESS_PROGRESS:an,DID_COMPLETE_ITEM_PROCESSING:{buttonRevertItemProcessing:{opacity:1},info:{opacity:1},status:{opacity:1}},DID_THROW_ITEM_PROCESSING_ERROR:{buttonRemoveItem:{opacity:1},buttonRetryItemProcessing:{opacity:1},status:{opacity:1},info:{translateX:$t}},DID_THROW_ITEM_PROCESSING_REVERT_ERROR:{buttonRevertItemProcessing:{opacity:1},status:{opacity:1},info:{opacity:1}},DID_ABORT_ITEM_PROCESSING:{buttonRemoveItem:{opacity:1},buttonProcessItem:{opacity:1},info:{translateX:$t},status:{opacity:1}},DID_REVERT_ITEM_PROCESSING:on},un=S({create:function(e){var t=e.root;t.element.innerHTML=t.query("GET_ICON_DONE")},name:"processing-complete-indicator",ignoreRect:!0,mixins:{styles:["scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",opacity:{type:"tween",duration:250}}}}),ln=A({DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING:function(e){var t=e.root,n=e.action;t.ref.buttonAbortItemProcessing.label=n.value},DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD:function(e){var t=e.root,n=e.action;t.ref.buttonAbortItemLoad.label=n.value},DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL:function(e){var t=e.root,n=e.action;t.ref.buttonAbortItemRemoval.label=n.value},DID_REQUEST_ITEM_PROCESSING:function(e){var t=e.root;t.ref.processProgressIndicator.spin=!0,t.ref.processProgressIndicator.progress=0},DID_START_ITEM_LOAD:function(e){var t=e.root;t.ref.loadProgressIndicator.spin=!0,t.ref.loadProgressIndicator.progress=0},DID_START_ITEM_REMOVE:function(e){var t=e.root;t.ref.processProgressIndicator.spin=!0,t.ref.processProgressIndicator.progress=0},DID_UPDATE_ITEM_LOAD_PROGRESS:function(e){var t=e.root,n=e.action;t.ref.loadProgressIndicator.spin=!1,t.ref.loadProgressIndicator.progress=n.progress},DID_UPDATE_ITEM_PROCESS_PROGRESS:function(e){var t=e.root,n=e.action;t.ref.processProgressIndicator.spin=!1,t.ref.processProgressIndicator.progress=n.progress}}),cn=S({create:function(e){var n,r=e.root,o=e.props,i=Object.keys(Qt).reduce(function(e,t){return e[t]=Object.assign({},Qt[t]),e},{}),a=o.id,s=r.query("GET_ALLOW_REVERT"),u=r.query("GET_ALLOW_REMOVE"),l=r.query("GET_ALLOW_PROCESS"),c=r.query("GET_INSTANT_UPLOAD"),f=r.query("IS_ASYNC"),d=r.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");f?l&&!s?n=function(e){return!/RevertItemProcessing/.test(e)}:!l&&s?n=function(e){return!/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(e)}:l||s||(n=function(e){return!/Process/.test(e)}):n=function(e){return!/Process/.test(e)};var p=n?Zt.filter(n):Zt.concat();if(c&&s&&(i.RevertItemProcessing.label="GET_LABEL_BUTTON_REMOVE_ITEM",i.RevertItemProcessing.icon="GET_ICON_REMOVE"),f&&!s){var E=sn.DID_COMPLETE_ITEM_PROCESSING;E.info.translateX=tn,E.info.translateY=en,E.status.translateY=en,E.processingCompleteIndicator={opacity:1,scaleX:1,scaleY:1}}if(f&&!l&&(["DID_START_ITEM_PROCESSING","DID_REQUEST_ITEM_PROCESSING","DID_UPDATE_ITEM_PROCESS_PROGRESS","DID_THROW_ITEM_PROCESSING_ERROR"].forEach(function(e){sn[e].status.translateY=en}),sn.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX=Jt),d&&s){i.RevertItemProcessing.align="BUTTON_REMOVE_ITEM_POSITION";var _=sn.DID_COMPLETE_ITEM_PROCESSING;_.info.translateX=$t,_.status.translateY=en,_.processingCompleteIndicator={opacity:1,scaleX:1,scaleY:1}}u||(i.RemoveItem.disabled=!0),t(i,function(e,t){var n=r.createChildView(Ft,{label:r.query(t.label),icon:r.query(t.icon),opacity:0});p.includes(e)&&r.appendChildView(n),t.disabled&&(n.element.setAttribute("disabled","disabled"),n.element.setAttribute("hidden","hidden")),n.element.dataset.align=r.query("GET_STYLE_"+t.align),n.element.classList.add(t.className),n.on("click",function(e){e.stopPropagation(),t.disabled||r.dispatch(t.action,{query:a})}),r.ref["button"+e]=n}),r.ref.processingCompleteIndicator=r.appendChildView(r.createChildView(un)),r.ref.processingCompleteIndicator.element.dataset.align=r.query("GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"),r.ref.info=r.appendChildView(r.createChildView(kt,{id:a})),r.ref.status=r.appendChildView(r.createChildView(zt,{id:a}));var T=r.appendChildView(r.createChildView(Bt,{opacity:0,align:r.query("GET_STYLE_LOAD_INDICATOR_POSITION")}));T.element.classList.add("filepond--load-indicator"),r.ref.loadProgressIndicator=T;var I=r.appendChildView(r.createChildView(Bt,{opacity:0,align:r.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")}));I.element.classList.add("filepond--process-indicator"),r.ref.processProgressIndicator=I,r.ref.activeStyles=[]},write:function(e){var n=e.root,r=e.actions,o=e.props;ln({root:n,actions:r,props:o});var i=r.concat().filter(function(e){return/^DID_/.test(e.type)}).reverse().find(function(e){return sn[e.type]});if(i){n.ref.activeStyles=[];var a=sn[i.type];t(rn,function(e,r){var o=n.ref[e];t(r,function(t,r){var i=a[e]&&void 0!==a[e][t]?a[e][t]:r;n.ref.activeStyles.push({control:o,key:t,value:i})})})}n.ref.activeStyles.forEach(function(e){var t=e.control,r=e.key,o=e.value;t[r]="function"==typeof o?o(n):o})},didCreateView:function(e){ye("CREATE_VIEW",Object.assign({},e,{view:e}))},name:"file"}),fn=S({create:function(e){var t=e.root,n=e.props;t.ref.fileName=Ct("legend"),t.appendChild(t.ref.fileName),t.ref.file=t.appendChildView(t.createChildView(cn,{id:n.id})),t.ref.data=!1},ignoreRect:!0,write:A({DID_LOAD_ITEM:function(e){var t=e.root,n=e.props;Nt(t.ref.fileName,wt(t.query("GET_ITEM_NAME",n.id)))}}),didCreateView:function(e){ye("CREATE_VIEW",Object.assign({},e,{view:e}))},tag:"fieldset",name:"file-wrapper"}),dn={type:"spring",damping:.6,mass:7},pn=function(e,t,n){var r=S({name:"panel-"+t.name+" filepond--"+n,mixins:t.mixins,ignoreRectUpdate:!0}),o=e.createChildView(r,t.props);e.ref[t.name]=e.appendChildView(o)},En=S({name:"panel",read:function(e){var t=e.root;return e.props.heightCurrent=t.ref.bottom.translateY},write:function(e){var t=e.root,n=e.props;if(null!==t.ref.scalable&&n.scalable===t.ref.scalable||(t.ref.scalable=!N(n.scalable)||n.scalable,t.element.dataset.scalable=t.ref.scalable),n.height){var r=t.ref.top.rect.element,o=t.ref.bottom.rect.element,i=Math.max(r.height+o.height,n.height);t.ref.center.translateY=r.height,t.ref.center.scaleY=(i-r.height-o.height)/100,t.ref.bottom.translateY=i-o.height}},create:function(e){var t=e.root,n=e.props;[{name:"top"},{name:"center",props:{translateY:null,scaleY:null},mixins:{animations:{scaleY:dn},styles:["translateY","scaleY"]}},{name:"bottom",props:{translateY:null},mixins:{animations:{translateY:dn},styles:["translateY"]}}].forEach(function(e){pn(t,e,n.name)}),t.element.classList.add("filepond--"+n.name),t.ref.scalable=null},ignoreRect:!0,mixins:{apis:["height","heightCurrent","scalable"]}}),_n={type:"spring",stiffness:.75,damping:.45,mass:10},Tn={DID_START_ITEM_LOAD:"busy",DID_UPDATE_ITEM_LOAD_PROGRESS:"loading",DID_THROW_ITEM_INVALID:"load-invalid",DID_THROW_ITEM_LOAD_ERROR:"load-error",DID_LOAD_ITEM:"idle",DID_THROW_ITEM_REMOVE_ERROR:"remove-error",DID_START_ITEM_REMOVE:"busy",DID_START_ITEM_PROCESSING:"busy processing",DID_REQUEST_ITEM_PROCESSING:"busy processing",DID_UPDATE_ITEM_PROCESS_PROGRESS:"processing",DID_COMPLETE_ITEM_PROCESSING:"processing-complete",DID_THROW_ITEM_PROCESSING_ERROR:"processing-error",DID_THROW_ITEM_PROCESSING_REVERT_ERROR:"processing-revert-error",DID_ABORT_ITEM_PROCESSING:"cancelled",DID_REVERT_ITEM_PROCESSING:"idle"},In=A({DID_UPDATE_PANEL_HEIGHT:function(e){var t=e.root,n=e.action;t.height=n.height}}),vn=A({DID_GRAB_ITEM:function(e){var t=e.root;e.props.dragOrigin={x:t.translateX,y:t.translateY}},DID_DRAG_ITEM:function(e){e.root.element.dataset.dragState="drag"},DID_DROP_ITEM:function(e){var t=e.root,n=e.props;n.dragOffset=null,n.dragOrigin=null,t.element.dataset.dragState="drop"}},function(e){var t=e.root,n=e.actions,r=e.props,o=e.shouldOptimize;"drop"===t.element.dataset.dragState&&t.scaleX<=1&&(t.element.dataset.dragState="idle");var i=n.concat().filter(function(e){return/^DID_/.test(e.type)}).reverse().find(function(e){return Tn[e.type]});i&&i.type!==r.currentState&&(r.currentState=i.type,t.element.dataset.filepondItemState=Tn[r.currentState]||"");var a=t.query("GET_ITEM_PANEL_ASPECT_RATIO")||t.query("GET_PANEL_ASPECT_RATIO");a?o||(t.height=t.rect.element.width*a):(In({root:t,actions:n,props:r}),!t.height&&t.ref.container.rect.element.height>0&&(t.height=t.ref.container.rect.element.height)),o&&(t.ref.panel.height=null),t.ref.panel.height=t.height}),mn=S({create:function(e){var t=e.root,n=e.props;t.ref.handleClick=function(e){return t.dispatch("DID_ACTIVATE_ITEM",{id:n.id})},t.element.id="filepond--item-"+n.id,t.element.addEventListener("click",t.ref.handleClick),t.ref.container=t.appendChildView(t.createChildView(fn,{id:n.id})),t.ref.panel=t.appendChildView(t.createChildView(En,{name:"item-panel"})),t.ref.panel.height=null,n.markedForRemoval=!1,t.query("GET_ALLOW_REORDER")&&(t.element.dataset.dragState="idle",t.element.addEventListener("pointerdown",function(e){if(e.isPrimary){var r=!1,o=e.pageX,i=e.pageY;n.dragOrigin={x:t.translateX,y:t.translateY},n.dragCenter={x:e.offsetX,y:e.offsetY};var a,s,u,l=(a=t.query("GET_ACTIVE_ITEMS"),s=a.map(function(e){return e.id}),u=void 0,{setIndex:function(e){u=e},getIndex:function(){return u},getItemIndex:function(e){return s.indexOf(e.id)}});t.dispatch("DID_GRAB_ITEM",{id:n.id,dragState:l});var c=function(e){e.isPrimary&&(e.stopPropagation(),e.preventDefault(),n.dragOffset={x:e.pageX-o,y:e.pageY-i},n.dragOffset.x*n.dragOffset.x+n.dragOffset.y*n.dragOffset.y>16&&!r&&(r=!0,t.element.removeEventListener("click",t.ref.handleClick)),t.dispatch("DID_DRAG_ITEM",{id:n.id,dragState:l}))};document.addEventListener("pointermove",c),document.addEventListener("pointerup",function e(a){a.isPrimary&&(document.removeEventListener("pointermove",c),document.removeEventListener("pointerup",e),n.dragOffset={x:a.pageX-o,y:a.pageY-i},t.dispatch("DID_DROP_ITEM",{id:n.id,dragState:l}),r&&setTimeout(function(){return t.element.addEventListener("click",t.ref.handleClick)},0))})}}))},write:vn,destroy:function(e){var t=e.root,n=e.props;t.element.removeEventListener("click",t.ref.handleClick),t.dispatch("RELEASE_ITEM",{query:n.id})},tag:"li",name:"item",mixins:{apis:["id","interactionMethod","markedForRemoval","spawnDate","dragCenter","dragOrigin","dragOffset"],styles:["translateX","translateY","scaleX","scaleY","opacity","height"],animations:{scaleX:"spring",scaleY:"spring",translateX:_n,translateY:_n,opacity:{type:"tween",duration:150}}}}),hn=function(e,t){return Math.max(1,Math.floor((e+1)/t))},gn=function(e,t,n){if(n){var r=e.rect.element.width,o=t.length,i=null;if(0===o||n.top<t[0].rect.element.top)return-1;var a=t[0].rect.element,s=a.marginLeft+a.marginRight,u=a.width+s,l=hn(r,u);if(1===l){for(var c=0;c<o;c++){var f=t[c],d=f.rect.outer.top+.5*f.rect.element.height;if(n.top<d)return c}return o}for(var p=a.marginTop+a.marginBottom,E=a.height+p,_=0;_<o;_++){var T=_%l*u,I=Math.floor(_/l)*E,v=I-a.marginTop,m=T+u,h=I+E+a.marginBottom;if(n.top<h&&n.top>v){if(n.left<m)return _;i=_!==o-1?_:null}}return null!==i?i:o}},Rn={height:0,width:0,get getHeight(){return this.height},set setHeight(e){0!==this.height&&0!==e||(this.height=e)},get getWidth(){return this.width},set setWidth(e){0!==this.width&&0!==e||(this.width=e)},setDimensions:function(e,t){0!==this.height&&0!==e||(this.height=e),0!==this.width&&0!==t||(this.width=t)}},On=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;e.dragOffset?(e.translateX=null,e.translateY=null,e.translateX=e.dragOrigin.x+e.dragOffset.x,e.translateY=e.dragOrigin.y+e.dragOffset.y,e.scaleX=1.025,e.scaleY=1.025):(e.translateX=t,e.translateY=n,Date.now()>e.spawnDate&&(0===e.opacity&&yn(e,t,n,r,o),e.scaleX=1,e.scaleY=1,e.opacity=1))},yn=function(e,t,n,r,o){e.interactionMethod===re?(e.translateX=null,e.translateX=t,e.translateY=null,e.translateY=n):e.interactionMethod===ee?(e.translateX=null,e.translateX=t-20*r,e.translateY=null,e.translateY=n-10*o,e.scaleX=.8,e.scaleY=.8):e.interactionMethod===te?(e.translateY=null,e.translateY=n-30):e.interactionMethod===J&&(e.translateX=null,e.translateX=t-30,e.translateY=null)},Dn=function(e){return e.rect.element.height+.5*e.rect.element.marginBottom+.5*e.rect.element.marginTop},Sn=A({DID_ADD_ITEM:function(e){var t=e.root,n=e.action,r=n.id,o=n.index,i=n.interactionMethod;t.ref.addIndex=o;var a=Date.now(),s=a,u=1;if(i!==re){u=0;var l=t.query("GET_ITEM_INSERT_INTERVAL"),c=a-t.ref.lastItemSpanwDate;s=c<l?a+(l-c):a}t.ref.lastItemSpanwDate=s,t.appendChildView(t.createChildView(mn,{spawnDate:s,id:r,opacity:u,interactionMethod:i}),o)},DID_REMOVE_ITEM:function(e){var t=e.root,n=e.action.id,r=t.childViews.find(function(e){return e.id===n});r&&(r.scaleX=.9,r.scaleY=.9,r.opacity=0,r.markedForRemoval=!0)},DID_DRAG_ITEM:function(e){var t=e.root,n=e.action,r=n.id,o=n.dragState,i=t.query("GET_ITEM",{id:r}),a=t.childViews.find(function(e){return e.id===r}),s=t.childViews.length,u=o.getItemIndex(i);if(a){var l,c=a.dragOrigin.x+a.dragOffset.x+a.dragCenter.x,f=a.dragOrigin.y+a.dragOffset.y+a.dragCenter.y,d=Dn(a),p=(l=a).rect.element.width+.5*l.rect.element.marginLeft+.5*l.rect.element.marginRight,E=Math.floor(t.rect.outer.width/p);E>s&&(E=s);var _=Math.floor(s/E+1);Rn.setHeight=d*_,Rn.setWidth=p*E;var T={y:Math.floor(f/d),x:Math.floor(c/p),getGridIndex:function(){return f>Rn.getHeight||f<0||c>Rn.getWidth||c<0?u:this.y*E+this.x},getColIndex:function(){for(var e=t.query("GET_ACTIVE_ITEMS"),n=t.childViews.filter(function(e){return e.rect.element.height}),r=e.map(function(e){return n.find(function(t){return t.id===e.id})}),o=r.findIndex(function(e){return e===a}),i=Dn(a),s=r.length,u=s,l=0,c=0,d=0,p=0;p<s;p++)if(l=Dn(r[p]),f<(c=(d=c)+l)){if(o>p){if(f<d+i){u=p;break}continue}u=p;break}return u}},I=E>1?T.getGridIndex():T.getColIndex();t.dispatch("MOVE_ITEM",{query:a,index:I});var v=o.getIndex();if(void 0===v||v!==I){if(o.setIndex(I),void 0===v)return;t.dispatch("DID_REORDER_ITEMS",{items:t.query("GET_ACTIVE_ITEMS"),origin:u,target:I})}}}}),An=S({create:function(e){var t=e.root;r(t.element,"role","list"),t.ref.lastItemSpanwDate=Date.now()},write:function(e){var t=e.root,n=e.props,r=e.actions,o=e.shouldOptimize;Sn({root:t,props:n,actions:r});var i=n.dragCoordinates,a=t.rect.element.width,s=t.childViews.filter(function(e){return e.rect.element.height}),u=t.query("GET_ACTIVE_ITEMS").map(function(e){return s.find(function(t){return t.id===e.id})}).filter(function(e){return e}),l=i?gn(t,u,i):null,c=t.ref.addIndex||null;t.ref.addIndex=null;var f=0,d=0,p=0;if(0!==u.length){var E=u[0].rect.element,_=E.marginTop+E.marginBottom,T=E.marginLeft+E.marginRight,I=E.width+T,v=E.height+_,m=hn(a,I);if(1===m){var h=0,g=0;u.forEach(function(e,t){if(l){var n=t-l;g=-2===n?.25*-_:-1===n?.75*-_:0===n?.75*_:1===n?.25*_:0}o&&(e.translateX=null,e.translateY=null),e.markedForRemoval||On(e,0,h+g);var r=(e.rect.element.height+_)*(e.markedForRemoval?e.opacity:1);h+=r})}else{var R=0,O=0;u.forEach(function(e,t){t===l&&(f=1),t===c&&(p+=1),e.markedForRemoval&&e.opacity<.5&&(d-=1);var n=t+p+f+d,r=n%m,i=Math.floor(n/m),a=r*I,s=i*v,u=Math.sign(a-R),E=Math.sign(s-O);R=a,O=s,e.markedForRemoval||(o&&(e.translateX=null,e.translateY=null),On(e,a,s,u,E))})}}},tag:"ul",name:"list",didWriteView:function(e){var t=e.root;t.childViews.filter(function(e){return e.markedForRemoval&&0===e.opacity&&e.resting}).forEach(function(e){e._destroy(),t.removeChildView(e)})},filterFrameActionsForChild:function(e,t){return t.filter(function(t){return!t.data||!t.data.id||e.id===t.data.id})},mixins:{apis:["dragCoordinates"]}}),Ln=A({DID_DRAG:function(e){var t=e.root,n=e.props,r=e.action;t.query("GET_ITEM_INSERT_LOCATION_FREEDOM")&&(n.dragCoordinates={left:r.position.scopeLeft-t.ref.list.rect.element.left,top:r.position.scopeTop-(t.rect.outer.top+t.rect.element.marginTop+t.rect.element.scrollTop)})},DID_END_DRAG:function(e){e.props.dragCoordinates=null}}),bn=S({create:function(e){var t=e.root,n=e.props;t.ref.list=t.appendChildView(t.createChildView(An)),n.dragCoordinates=null,n.overflowing=!1},write:function(e){var t=e.root,n=e.props,r=e.actions;if(Ln({root:t,props:n,actions:r}),t.ref.list.dragCoordinates=n.dragCoordinates,n.overflowing&&!n.overflow&&(n.overflowing=!1,t.element.dataset.state="",t.height=null),n.overflow){var o=Math.round(n.overflow);o!==t.height&&(n.overflowing=!0,t.element.dataset.state="overflow",t.height=o)}},name:"list-scroller",mixins:{apis:["overflow","dragCoordinates"],styles:["height","translateY"],animations:{translateY:"spring"}}}),Pn=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";n?r(e,t,o):e.removeAttribute(t)},Mn=function(e){var t=e.root,n=e.action;t.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE")&&Pn(t.element,"accept",!!n.value,n.value?n.value.join(","):"")},wn=function(e){var t=e.root,n=e.action;Pn(t.element,"multiple",n.value)},Cn=function(e){var t=e.root,n=e.action;Pn(t.element,"webkitdirectory",n.value)},Nn=function(e){var t=e.root,n=t.query("GET_DISABLED"),r=t.query("GET_ALLOW_BROWSE"),o=n||!r;Pn(t.element,"disabled",o)},Gn=function(e){var t=e.root;e.action.value?0===t.query("GET_TOTAL_ITEMS")&&Pn(t.element,"required",!0):Pn(t.element,"required",!1)},Un=function(e){var t=e.root,n=e.action;Pn(t.element,"capture",!!n.value,!0===n.value?"":n.value)},Bn=function(e){var t=e.root,n=t.element;t.query("GET_TOTAL_ITEMS")>0?(Pn(n,"required",!1),Pn(n,"name",!1)):(Pn(n,"name",!0,t.query("GET_NAME")),t.query("GET_CHECK_VALIDITY")&&n.setCustomValidity(""),t.query("GET_REQUIRED")&&Pn(n,"required",!0))},Fn=S({tag:"input",name:"browser",ignoreRect:!0,ignoreRectUpdate:!0,attributes:{type:"file"},create:function(e){var t=e.root,n=e.props;t.element.id="filepond--browser-"+n.id,r(t.element,"name",t.query("GET_NAME")),r(t.element,"aria-controls","filepond--assistant-"+n.id),r(t.element,"aria-labelledby","filepond--drop-label-"+n.id),Mn({root:t,action:{value:t.query("GET_ACCEPTED_FILE_TYPES")}}),wn({root:t,action:{value:t.query("GET_ALLOW_MULTIPLE")}}),Cn({root:t,action:{value:t.query("GET_ALLOW_DIRECTORIES_ONLY")}}),Nn({root:t}),Gn({root:t,action:{value:t.query("GET_REQUIRED")}}),Un({root:t,action:{value:t.query("GET_CAPTURE_METHOD")}}),t.ref.handleChange=function(e){if(t.element.value){var r=Array.from(t.element.files).map(function(e){return e._relativePath=e.webkitRelativePath,e});setTimeout(function(){n.onload(r),function(e){if(e&&""!==e.value){try{e.value=""}catch(e){}if(e.value){var t=Ct("form"),n=e.parentNode,r=e.nextSibling;t.appendChild(e),t.reset(),r?n.insertBefore(e,r):n.appendChild(e)}}}(t.element)},250)}},t.element.addEventListener("change",t.ref.handleChange)},destroy:function(e){var t=e.root;t.element.removeEventListener("change",t.ref.handleChange)},write:A({DID_LOAD_ITEM:Bn,DID_REMOVE_ITEM:Bn,DID_THROW_ITEM_INVALID:function(e){var t=e.root;t.query("GET_CHECK_VALIDITY")&&t.element.setCustomValidity(t.query("GET_LABEL_INVALID_FIELD"))},DID_SET_DISABLED:Nn,DID_SET_ALLOW_BROWSE:Nn,DID_SET_ALLOW_DIRECTORIES_ONLY:Cn,DID_SET_ALLOW_MULTIPLE:wn,DID_SET_ACCEPTED_FILE_TYPES:Mn,DID_SET_CAPTURE_METHOD:Un,DID_SET_REQUIRED:Gn})}),qn=13,Vn=32,xn=function(e,t){e.innerHTML=t;var n=e.querySelector(".filepond--label-action");return n&&r(n,"tabindex","0"),t},Yn=S({name:"drop-label",ignoreRect:!0,create:function(e){var t=e.root,n=e.props,o=Ct("label");r(o,"for","filepond--browser-"+n.id),r(o,"id","filepond--drop-label-"+n.id),r(o,"aria-hidden","true"),t.ref.handleKeyDown=function(e){(e.keyCode===qn||e.keyCode===Vn)&&(e.preventDefault(),t.ref.label.click())},t.ref.handleClick=function(e){e.target===o||o.contains(e.target)||t.ref.label.click()},o.addEventListener("keydown",t.ref.handleKeyDown),t.element.addEventListener("click",t.ref.handleClick),xn(o,n.caption),t.appendChild(o),t.ref.label=o},destroy:function(e){var t=e.root;t.ref.label.addEventListener("keydown",t.ref.handleKeyDown),t.element.removeEventListener("click",t.ref.handleClick)},write:A({DID_SET_LABEL_IDLE:function(e){var t=e.root,n=e.action;xn(t.ref.label,n.value)}}),mixins:{styles:["opacity","translateX","translateY"],animations:{opacity:{type:"tween",duration:150},translateX:"spring",translateY:"spring"}}}),kn=S({name:"drip-blob",ignoreRect:!0,mixins:{styles:["translateX","translateY","scaleX","scaleY","opacity"],animations:{scaleX:"spring",scaleY:"spring",translateX:"spring",translateY:"spring",opacity:{type:"tween",duration:250}}}}),jn=A({DID_DRAG:function(e){var t=e.root,n=e.action;t.ref.blob?(t.ref.blob.translateX=n.position.scopeLeft,t.ref.blob.translateY=n.position.scopeTop,t.ref.blob.scaleX=1,t.ref.blob.scaleY=1,t.ref.blob.opacity=1):function(e){var t=e.root,n=.5*t.rect.element.width,r=.5*t.rect.element.height;t.ref.blob=t.appendChildView(t.createChildView(kn,{opacity:0,scaleX:2.5,scaleY:2.5,translateX:n,translateY:r}))}({root:t})},DID_DROP:function(e){var t=e.root;t.ref.blob&&(t.ref.blob.scaleX=2.5,t.ref.blob.scaleY=2.5,t.ref.blob.opacity=0)},DID_END_DRAG:function(e){var t=e.root;t.ref.blob&&(t.ref.blob.opacity=0)}}),Hn=S({ignoreRect:!0,ignoreRectUpdate:!0,name:"drip",write:function(e){var t=e.root,n=e.props,r=e.actions;jn({root:t,props:n,actions:r});var o=t.ref.blob;0===r.length&&o&&0===o.opacity&&(t.removeChildView(o),t.ref.blob=null)}}),Xn=function(e,t){try{var n=new DataTransfer;t.forEach(function(e){e instanceof File?n.items.add(e):n.items.add(new File([e],e.name,{type:e.type}))}),e.files=n.files}catch(e){return!1}return!0},Wn=function(e,t){return e.ref.fields[t]},zn=function(e){e.query("GET_ACTIVE_ITEMS").forEach(function(t){e.ref.fields[t.id]&&e.element.appendChild(e.ref.fields[t.id])})},Qn=function(e){var t=e.root;return zn(t)},Zn=A({DID_SET_DISABLED:function(e){var t=e.root;t.element.disabled=t.query("GET_DISABLED")},DID_ADD_ITEM:function(e){var t=e.root,n=e.action,r=!(t.query("GET_ITEM",n.id).origin===ve.LOCAL)&&t.query("SHOULD_UPDATE_FILE_INPUT"),o=Ct("input");o.type=r?"file":"hidden",o.name=t.query("GET_NAME"),o.disabled=t.query("GET_DISABLED"),t.ref.fields[n.id]=o,zn(t)},DID_LOAD_ITEM:function(e){var t=e.root,n=e.action,r=Wn(t,n.id);if(r&&(null!==n.serverFileReference&&(r.value=n.serverFileReference),t.query("SHOULD_UPDATE_FILE_INPUT"))){var o=t.query("GET_ITEM",n.id);Xn(r,[o.file])}},DID_REMOVE_ITEM:function(e){var t=e.root,n=e.action,r=Wn(t,n.id);r&&(r.parentNode&&r.parentNode.removeChild(r),delete t.ref.fields[n.id])},DID_DEFINE_VALUE:function(e){var t=e.root,n=e.action,r=Wn(t,n.id);r&&(null===n.value?r.removeAttribute("value"):r.value=n.value,zn(t))},DID_PREPARE_OUTPUT:function(e){var t=e.root,n=e.action;t.query("SHOULD_UPDATE_FILE_INPUT")&&setTimeout(function(){var e=Wn(t,n.id);e&&Xn(e,[n.file])},0)},DID_REORDER_ITEMS:Qn,DID_SORT_ITEMS:Qn}),Kn=S({tag:"fieldset",name:"data",create:function(e){return e.root.ref.fields={}},write:Zn,ignoreRect:!0}),$n=["jpg","jpeg","png","gif","bmp","webp","svg","tiff"],Jn=["css","csv","html","txt"],er={zip:"zip|compressed",epub:"application/epub+zip"},tr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=e.toLowerCase(),$n.includes(e)?"image/"+("jpg"===e?"jpeg":"svg"===e?"svg+xml":e):Jn.includes(e)?"text/"+e:er[e]||""},nr=function(e){return new Promise(function(t,n){var r=dr(e);if(r.length&&!rr(e))return t(r);or(e).then(t)})},rr=function(e){return!!e.files&&e.files.length>0},or=function(e){return new Promise(function(t,n){var r=(e.items?Array.from(e.items):[]).filter(function(e){return ir(e)}).map(function(e){return ar(e)});r.length?Promise.all(r).then(function(e){var n=[];e.forEach(function(e){n.push.apply(n,e)}),t(n.filter(function(e){return e}).map(function(e){return e._relativePath||(e._relativePath=e.webkitRelativePath),e}))}).catch(console.error):t(e.files?Array.from(e.files):[])})},ir=function(e){if(cr(e)){var t=fr(e);if(t)return t.isFile||t.isDirectory}return"file"===e.kind},ar=function(e){return new Promise(function(t,n){lr(e)?sr(fr(e)).then(t).catch(n):t([e.getAsFile()])})},sr=function(e){return new Promise(function(t,n){var r=[],o=0,i=0,a=function(){0===i&&0===o&&t(r)};!function e(t){o++;var s=t.createReader();!function t(){s.readEntries(function(n){if(0===n.length)return o--,void a();n.forEach(function(t){t.isDirectory?e(t):(i++,t.file(function(e){var n=ur(e);t.fullPath&&(n._relativePath=t.fullPath),r.push(n),i--,a()}))}),t()},n)}()}(e)})},ur=function(e){if(e.type.length)return e;var t=e.lastModifiedDate,n=e.name,r=tr(je(e.name));return r.length?((e=e.slice(0,e.size,r)).name=n,e.lastModifiedDate=t,e):e},lr=function(e){return cr(e)&&(fr(e)||{}).isDirectory},cr=function(e){return"webkitGetAsEntry"in e},fr=function(e){return e.webkitGetAsEntry()},dr=function(e){var t=[];try{if((t=Er(e)).length)return t;t=pr(e)}catch(e){}return t},pr=function(e){var t=e.getData("url");return"string"==typeof t&&t.length?[t]:[]},Er=function(e){var t=e.getData("text/html");if("string"==typeof t&&t.length){var n=t.match(/src\s*=\s*"(.+?)"/);if(n)return[n[1]]}return[]},_r=[],Tr=function(e){return{pageLeft:e.pageX,pageTop:e.pageY,scopeLeft:e.offsetX||e.layerX,scopeTop:e.offsetY||e.layerY}},Ir=function(e){var t=_r.find(function(t){return t.element===e});if(t)return t;var n=vr(e);return _r.push(n),n},vr=function(e){var n=[],r={dragenter:Rr,dragover:Or,dragleave:Dr,drop:yr},o={};t(r,function(t,r){o[t]=r(e,n),e.addEventListener(t,o[t],!1)});var i={element:e,addListener:function(a){return n.push(a),function(){n.splice(n.indexOf(a),1),0===n.length&&(_r.splice(_r.indexOf(i),1),t(r,function(t){e.removeEventListener(t,o[t],!1)}))}}};return i},mr=function(e,t){var n,r=function(e,t){return"elementFromPoint"in e||(e=document),e.elementFromPoint(t.x,t.y)}("getRootNode"in(n=t)?n.getRootNode():document,{x:e.pageX-window.pageXOffset,y:e.pageY-window.pageYOffset});return r===t||t.contains(r)},hr=null,gr=function(e,t){try{e.dropEffect=t}catch(e){}},Rr=function(e,t){return function(e){e.preventDefault(),hr=e.target,t.forEach(function(t){var n=t.element,r=t.onenter;mr(e,n)&&(t.state="enter",r(Tr(e)))})}},Or=function(e,t){return function(e){e.preventDefault();var n=e.dataTransfer;nr(n).then(function(r){var o=!1;t.some(function(t){var i=t.filterElement,a=t.element,s=t.onenter,u=t.onexit,l=t.ondrag,c=t.allowdrop;gr(n,"copy");var f=c(r);if(f)if(mr(e,a)){if(o=!0,null===t.state)return t.state="enter",void s(Tr(e));if(t.state="over",i&&!f)return void gr(n,"none");l(Tr(e))}else i&&!o&&gr(n,"none"),t.state&&(t.state=null,u(Tr(e)));else gr(n,"none")})})}},yr=function(e,t){return function(e){e.preventDefault();var n=e.dataTransfer;nr(n).then(function(n){t.forEach(function(t){var r=t.filterElement,o=t.element,i=t.ondrop,a=t.onexit,s=t.allowdrop;if(t.state=null,!r||mr(e,o))return s(n)?void i(Tr(e),n):a(Tr(e))})})}},Dr=function(e,t){return function(e){hr===e.target&&t.forEach(function(t){var n=t.onexit;t.state=null,n(Tr(e))})}},Sr=function(e,t,n){e.classList.add("filepond--hopper");var r=n.catchesDropsOnPage,o=n.requiresDropOnElement,i=n.filterItems,a=void 0===i?function(e){return e}:i,s=function(e,t,n){var r=Ir(t),o={element:e,filterElement:n,state:null,ondrop:function(){},onenter:function(){},ondrag:function(){},onexit:function(){},onload:function(){},allowdrop:function(){}};return o.destroy=r.addListener(o),o}(e,r?document.documentElement:e,o),u="",l="";s.allowdrop=function(e){return t(a(e))},s.ondrop=function(e,n){var r=a(n);t(r)?(l="drag-drop",c.onload(r,e)):c.ondragend(e)},s.ondrag=function(e){c.ondrag(e)},s.onenter=function(e){l="drag-over",c.ondragstart(e)},s.onexit=function(e){l="drag-exit",c.ondragend(e)};var c={updateHopperState:function(){u!==l&&(e.dataset.hopperState=l,u=l)},onload:function(){},ondragstart:function(){},ondrag:function(){},ondragend:function(){},destroy:function(){s.destroy()}};return c},Ar=!1,Lr=[],br=function(e){var t=document.activeElement;if(t&&/textarea|input/i.test(t.nodeName)){for(var n=!1,r=t;r!==document.body;){if(r.classList.contains("filepond--root")){n=!0;break}r=r.parentNode}if(!n)return}nr(e.clipboardData).then(function(e){e.length&&Lr.forEach(function(t){return t(e)})})},Pr=function(){var e=function(e){t.onload(e)},t={destroy:function(){var t;t=e,de(Lr,Lr.indexOf(t)),0===Lr.length&&(document.removeEventListener("paste",br),Ar=!1)},onload:function(){}};return function(e){Lr.includes(e)||(Lr.push(e),Ar||(Ar=!0,document.addEventListener("paste",br)))}(e),t},Mr=null,wr=null,Cr=[],Nr=function(e,t){e.element.textContent=t},Gr=function(e,t,n){var r=e.query("GET_TOTAL_ITEMS");Nr(e,n+" "+t+", "+r+" "+(1===r?e.query("GET_LABEL_FILE_COUNT_SINGULAR"):e.query("GET_LABEL_FILE_COUNT_PLURAL"))),clearTimeout(wr),wr=setTimeout(function(){!function(e){e.element.textContent=""}(e)},1500)},Ur=function(e){return e.element.parentNode.contains(document.activeElement)},Br=function(e){var t=e.root,n=e.action,r=t.query("GET_ITEM",n.id).filename,o=t.query("GET_LABEL_FILE_PROCESSING_ABORTED");Nr(t,r+" "+o)},Fr=function(e){var t=e.root,n=e.action,r=t.query("GET_ITEM",n.id).filename;Nr(t,n.status.main+" "+r+" "+n.status.sub)},qr=S({create:function(e){var t=e.root,n=e.props;t.element.id="filepond--assistant-"+n.id,r(t.element,"role","status"),r(t.element,"aria-live","polite"),r(t.element,"aria-relevant","additions")},ignoreRect:!0,ignoreRectUpdate:!0,write:A({DID_LOAD_ITEM:function(e){var t=e.root,n=e.action;if(Ur(t)){t.element.textContent="";var r=t.query("GET_ITEM",n.id);Cr.push(r.filename),clearTimeout(Mr),Mr=setTimeout(function(){Gr(t,Cr.join(", "),t.query("GET_LABEL_FILE_ADDED")),Cr.length=0},750)}},DID_REMOVE_ITEM:function(e){var t=e.root,n=e.action;if(Ur(t)){var r=n.item;Gr(t,r.filename,t.query("GET_LABEL_FILE_REMOVED"))}},DID_COMPLETE_ITEM_PROCESSING:function(e){var t=e.root,n=e.action,r=t.query("GET_ITEM",n.id).filename,o=t.query("GET_LABEL_FILE_PROCESSING_COMPLETE");Nr(t,r+" "+o)},DID_ABORT_ITEM_PROCESSING:Br,DID_REVERT_ITEM_PROCESSING:Br,DID_THROW_ITEM_REMOVE_ERROR:Fr,DID_THROW_ITEM_LOAD_ERROR:Fr,DID_THROW_ITEM_INVALID:Fr,DID_THROW_ITEM_PROCESSING_ERROR:Fr}),tag:"span",name:"assistant"}),Vr=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.replace(new RegExp(t+".","g"),function(e){return e.charAt(1).toUpperCase()})},xr=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Date.now(),o=null;return function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];clearTimeout(o);var u=Date.now()-r,l=function(){r=Date.now(),e.apply(void 0,a)};u<t?n||(o=setTimeout(l,t-u)):l()}},Yr=function(e){return e.preventDefault()},kr=function(e){var t=e.ref.list.childViews[0].childViews[0];return t?{top:t.rect.element.marginTop,bottom:t.rect.element.marginBottom}:{top:0,bottom:0}},jr=function(e){var t=0,n=0,r=e.ref.list,o=r.childViews[0],i=o.childViews.filter(function(e){return e.rect.element.height}),a=e.query("GET_ACTIVE_ITEMS").map(function(e){return i.find(function(t){return t.id===e.id})}).filter(function(e){return e});if(0===a.length)return{visual:t,bounds:n};var s=o.rect.element.width,u=gn(o,a,r.dragCoordinates),l=a[0].rect.element,c=l.marginTop+l.marginBottom,f=l.marginLeft+l.marginRight,d=l.width+f,p=l.height+c,E=void 0!==u&&u>=0?1:0,_=a.find(function(e){return e.markedForRemoval&&e.opacity<.45})?-1:0,T=a.length+E+_,I=hn(s,d);return 1===I?a.forEach(function(e){var r=e.rect.element.height+c;n+=r,t+=r*e.opacity}):(n=Math.ceil(T/I)*p,t=n),{visual:t,bounds:n}},Hr=function(e){var t=e.ref.measureHeight||null;return{cappedHeight:parseInt(e.style.maxHeight,10)||null,fixedHeight:0===t?null:t}},Xr=function(e,t){var n=e.query("GET_ALLOW_REPLACE"),r=e.query("GET_ALLOW_MULTIPLE"),o=e.query("GET_TOTAL_ITEMS"),i=e.query("GET_MAX_FILES"),a=t.length;return!r&&a>1?(e.dispatch("DID_THROW_MAX_FILES",{source:t,error:ot("warning",0,"Max files")}),!0):!(!r&&n)&&(!!(V(i=r?i:1)&&o+a>i)&&(e.dispatch("DID_THROW_MAX_FILES",{source:t,error:ot("warning",0,"Max files")}),!0))},Wr=function(e,t,n){var r=e.childViews[0];return gn(r,t,{left:n.scopeLeft-r.rect.element.left,top:n.scopeTop-(e.rect.outer.top+e.rect.element.marginTop+e.rect.element.scrollTop)})},zr=function(e){var t=e.query("GET_ALLOW_DROP"),n=e.query("GET_DISABLED"),r=t&&!n;if(r&&!e.ref.hopper){var o=Sr(e.element,function(t){var n=e.query("GET_BEFORE_DROP_FILE")||function(){return!0};return!e.query("GET_DROP_VALIDATION")||t.every(function(t){return ye("ALLOW_HOPPER_ITEM",t,{query:e.query}).every(function(e){return!0===e})&&n(t)})},{filterItems:function(t){var n=e.query("GET_IGNORED_FILES");return t.filter(function(e){return!ht(e)||!n.includes(e.name.toLowerCase())})},catchesDropsOnPage:e.query("GET_DROP_ON_PAGE"),requiresDropOnElement:e.query("GET_DROP_ON_ELEMENT")});o.onload=function(t,n){var r=e.ref.list.childViews[0].childViews.filter(function(e){return e.rect.element.height}),o=e.query("GET_ACTIVE_ITEMS").map(function(e){return r.find(function(t){return t.id===e.id})}).filter(function(e){return e});Oe("ADD_ITEMS",t,{dispatch:e.dispatch}).then(function(t){if(Xr(e,t))return!1;e.dispatch("ADD_ITEMS",{items:t,index:Wr(e.ref.list,o,n),interactionMethod:ee})}),e.dispatch("DID_DROP",{position:n}),e.dispatch("DID_END_DRAG",{position:n})},o.ondragstart=function(t){e.dispatch("DID_START_DRAG",{position:t})},o.ondrag=xr(function(t){e.dispatch("DID_DRAG",{position:t})}),o.ondragend=function(t){e.dispatch("DID_END_DRAG",{position:t})},e.ref.hopper=o,e.ref.drip=e.appendChildView(e.createChildView(Hn))}else!r&&e.ref.hopper&&(e.ref.hopper.destroy(),e.ref.hopper=null,e.removeChildView(e.ref.drip))},Qr=function(e,t){var n=e.query("GET_ALLOW_BROWSE"),r=e.query("GET_DISABLED"),o=n&&!r;o&&!e.ref.browser?e.ref.browser=e.appendChildView(e.createChildView(Fn,Object.assign({},t,{onload:function(t){Oe("ADD_ITEMS",t,{dispatch:e.dispatch}).then(function(t){if(Xr(e,t))return!1;e.dispatch("ADD_ITEMS",{items:t,index:-1,interactionMethod:te})})}})),0):!o&&e.ref.browser&&(e.removeChildView(e.ref.browser),e.ref.browser=null)},Zr=function(e){var t=e.query("GET_ALLOW_PASTE"),n=e.query("GET_DISABLED"),r=t&&!n;r&&!e.ref.paster?(e.ref.paster=Pr(),e.ref.paster.onload=function(t){Oe("ADD_ITEMS",t,{dispatch:e.dispatch}).then(function(t){if(Xr(e,t))return!1;e.dispatch("ADD_ITEMS",{items:t,index:-1,interactionMethod:ne})})}):!r&&e.ref.paster&&(e.ref.paster.destroy(),e.ref.paster=null)},Kr=A({DID_SET_ALLOW_BROWSE:function(e){var t=e.root,n=e.props;Qr(t,n)},DID_SET_ALLOW_DROP:function(e){var t=e.root;zr(t)},DID_SET_ALLOW_PASTE:function(e){var t=e.root;Zr(t)},DID_SET_DISABLED:function(e){var t=e.root,n=e.props;zr(t),Zr(t),Qr(t,n),t.query("GET_DISABLED")?t.element.dataset.disabled="disabled":t.element.removeAttribute("data-disabled")}}),$r=S({name:"root",read:function(e){var t=e.root;t.ref.measure&&(t.ref.measureHeight=t.ref.measure.offsetHeight)},create:function(e){var t=e.root,n=e.props,r=t.query("GET_ID");r&&(t.element.id=r);var o=t.query("GET_CLASS_NAME");o&&o.split(" ").filter(function(e){return e.length}).forEach(function(e){t.element.classList.add(e)}),t.ref.label=t.appendChildView(t.createChildView(Yn,Object.assign({},n,{translateY:null,caption:t.query("GET_LABEL_IDLE")}))),t.ref.list=t.appendChildView(t.createChildView(bn,{translateY:null})),t.ref.panel=t.appendChildView(t.createChildView(En,{name:"panel-root"})),t.ref.assistant=t.appendChildView(t.createChildView(qr,Object.assign({},n))),t.ref.data=t.appendChildView(t.createChildView(Kn,Object.assign({},n))),t.ref.measure=Ct("div"),t.ref.measure.style.height="100%",t.element.appendChild(t.ref.measure),t.ref.bounds=null,t.query("GET_STYLES").filter(function(e){return!M(e.value)}).map(function(e){var n=e.name,r=e.value;t.element.dataset[n]=r}),t.ref.widthPrevious=null,t.ref.widthUpdated=xr(function(){t.ref.updateHistory=[],t.dispatch("DID_RESIZE_ROOT")},250),t.ref.previousAspectRatio=null,t.ref.updateHistory=[];var i=window.matchMedia("(pointer: fine) and (hover: hover)").matches,a="PointerEvent"in window;t.query("GET_ALLOW_REORDER")&&a&&!i&&(t.element.addEventListener("touchmove",Yr,{passive:!1}),t.element.addEventListener("gesturestart",Yr));var s=t.query("GET_CREDITS");if(2===s.length){var u=document.createElement("a");u.className="filepond--credits",u.setAttribute("aria-hidden","true"),u.href=s[0],u.tabindex=-1,u.target="_blank",u.rel="noopener noreferrer",u.textContent=s[1],t.element.appendChild(u),t.ref.credits=u}},write:function(e){var t=e.root,n=e.props,r=e.actions;if(Kr({root:t,props:n,actions:r}),r.filter(function(e){return/^DID_SET_STYLE_/.test(e.type)}).filter(function(e){return!M(e.data.value)}).map(function(e){var n=e.type,r=e.data,o=Vr(n.substring(8).toLowerCase(),"_");t.element.dataset[o]=r.value,t.invalidateLayout()}),!t.rect.element.hidden){t.rect.element.width!==t.ref.widthPrevious&&(t.ref.widthPrevious=t.rect.element.width,t.ref.widthUpdated());var o=t.ref.bounds;o||(o=t.ref.bounds=Hr(t),t.element.removeChild(t.ref.measure),t.ref.measure=null);var i=t.ref,a=i.hopper,s=i.label,u=i.list,l=i.panel;a&&a.updateHopperState();var c=t.query("GET_PANEL_ASPECT_RATIO"),f=t.query("GET_ALLOW_MULTIPLE"),d=t.query("GET_TOTAL_ITEMS"),p=d===(f?t.query("GET_MAX_FILES")||1e6:1),E=r.find(function(e){return"DID_ADD_ITEM"===e.type});if(p&&E){var _=E.data.interactionMethod;s.opacity=0,f?s.translateY=-40:_===J?s.translateX=40:s.translateY=_===te?40:30}else p||(s.opacity=1,s.translateX=0,s.translateY=0);var T=kr(t),I=jr(t),v=s.rect.element.height,m=!f||p?0:v,h=p?u.rect.element.marginTop:0,g=0===d?0:u.rect.element.marginBottom,R=m+h+I.visual+g,O=m+h+I.bounds+g;if(u.translateY=Math.max(0,m-u.rect.element.marginTop)-T.top,c){var y=t.rect.element.width,D=y*c;c!==t.ref.previousAspectRatio&&(t.ref.previousAspectRatio=c,t.ref.updateHistory=[]);var S=t.ref.updateHistory;if(S.push(y),S.length>4)for(var A=S.length,L=A-10,b=0,P=A;P>=L;P--)if(S[P]===S[P-2]&&b++,b>=2)return;l.scalable=!1,l.height=D;var w=D-m-(g-T.bottom)-(p?h:0);I.visual>w?u.overflow=w:u.overflow=null,t.height=D}else if(o.fixedHeight){l.scalable=!1;var C=o.fixedHeight-m-(g-T.bottom)-(p?h:0);I.visual>C?u.overflow=C:u.overflow=null}else if(o.cappedHeight){var N=R>=o.cappedHeight,G=Math.min(o.cappedHeight,R);l.scalable=!0,l.height=N?G:G-T.top-T.bottom;var U=G-m-(g-T.bottom)-(p?h:0);R>o.cappedHeight&&I.visual>U?u.overflow=U:u.overflow=null,t.height=Math.min(o.cappedHeight,O-T.top-T.bottom)}else{var B=d>0?T.top+T.bottom:0;l.scalable=!0,l.height=Math.max(v,R-B),t.height=Math.max(v,O-B)}t.ref.credits&&l.heightCurrent&&(t.ref.credits.style.transform="translateY("+l.heightCurrent+"px)")}},destroy:function(e){var t=e.root;t.ref.paster&&t.ref.paster.destroy(),t.ref.hopper&&t.ref.hopper.destroy(),t.element.removeEventListener("touchmove",Yr),t.element.removeEventListener("gesturestart",Yr)},mixins:{styles:["height"]}}),Jr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=null,o=Se(),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=Object.assign({},e),o=[],i=[],a=function(e,t,n){!n||document.hidden?(c[e]&&c[e](t),o.push({type:e,data:t})):i.push({type:e,data:t})},s=function(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return l[e]?(t=l)[e].apply(t,r):null},u={getState:function(){return Object.assign({},r)},processActionQueue:function(){var e=[].concat(o);return o.length=0,e},processDispatchQueue:function(){var e=[].concat(i);i.length=0,e.forEach(function(e){var t=e.type,n=e.data;a(t,n)})},dispatch:a,query:s},l={};t.forEach(function(e){l=Object.assign({},e(r),{},l)});var c={};return n.forEach(function(e){c=Object.assign({},e(a,s,r),{},c)}),u}({items:[],listUpdateTimeout:null,itemUpdateTimeout:null,processingQueue:[],options:Q(o)},[Ve,$(o)],[Pt,K(o)]);i.dispatch("SET_OPTIONS",{options:e});var a=function(){document.hidden||i.dispatch("KICK")};document.addEventListener("visibilitychange",a);var s=null,u=!1,l=!1,c=null,f=null,d=function(){u||(u=!0),clearTimeout(s),s=setTimeout(function(){u=!1,c=null,f=null,l&&(l=!1,i.dispatch("DID_STOP_RESIZE"))},500)};window.addEventListener("resize",d);var p=$r(i,{id:oe()}),E=!1,T=!1,I={_read:function(){u&&(f=window.innerWidth,c||(c=f),l||f===c||(i.dispatch("DID_START_RESIZE"),l=!0)),T&&E&&(E=null===p.element.offsetParent),E||(p._read(),T=p.rect.element.hidden)},_write:function(e){var t,n=i.processActionQueue().filter(function(e){return!/^SET_/.test(e.type)});E&&!n.length||(g(n),E=p._write(e,n,l),(t=i.query("GET_ITEMS")).forEach(function(e,n){e.released&&de(t,n)}),E&&i.processDispatchQueue())}},v=function(e){return function(t){var n={type:e};if(!t)return n;if(t.hasOwnProperty("error")&&(n.error=t.error?Object.assign({},t.error):null),t.status&&(n.status=Object.assign({},t.status)),t.file&&(n.output=t.file),t.source)n.file=t.source;else if(t.item||t.id){var r=t.item?t.item:i.query("GET_ITEM",t.id);n.file=r?Te(r):null}return t.items&&(n.items=t.items.map(Te)),/progress/.test(e)&&(n.progress=t.progress),t.hasOwnProperty("origin")&&t.hasOwnProperty("target")&&(n.origin=t.origin,n.target=t.target),n}},m={DID_DESTROY:v("destroy"),DID_INIT:v("init"),DID_THROW_MAX_FILES:v("warning"),DID_INIT_ITEM:v("initfile"),DID_START_ITEM_LOAD:v("addfilestart"),DID_UPDATE_ITEM_LOAD_PROGRESS:v("addfileprogress"),DID_LOAD_ITEM:v("addfile"),DID_THROW_ITEM_INVALID:[v("error"),v("addfile")],DID_THROW_ITEM_LOAD_ERROR:[v("error"),v("addfile")],DID_THROW_ITEM_REMOVE_ERROR:[v("error"),v("removefile")],DID_PREPARE_OUTPUT:v("preparefile"),DID_START_ITEM_PROCESSING:v("processfilestart"),DID_UPDATE_ITEM_PROCESS_PROGRESS:v("processfileprogress"),DID_ABORT_ITEM_PROCESSING:v("processfileabort"),DID_COMPLETE_ITEM_PROCESSING:v("processfile"),DID_COMPLETE_ITEM_PROCESSING_ALL:v("processfiles"),DID_REVERT_ITEM_PROCESSING:v("processfilerevert"),DID_THROW_ITEM_PROCESSING_ERROR:[v("error"),v("processfile")],DID_REMOVE_ITEM:v("removefile"),DID_UPDATE_ITEMS:v("updatefiles"),DID_ACTIVATE_ITEM:v("activatefile"),DID_REORDER_ITEMS:v("reorderfiles")},h=function(e){var t=Object.assign({pond:A},e);delete t.type,p.element.dispatchEvent(new CustomEvent("FilePond:"+e.type,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));var n=[];e.hasOwnProperty("error")&&n.push(e.error),e.hasOwnProperty("file")&&n.push(e.file);var r=["type","error","file"];Object.keys(e).filter(function(e){return!r.includes(e)}).forEach(function(t){return n.push(e[t])}),A.fire.apply(A,[e.type].concat(n));var o=i.query("GET_ON"+e.type.toUpperCase());o&&o.apply(void 0,n)},g=function(e){e.length&&e.filter(function(e){return m[e.type]}).forEach(function(e){var t=m[e.type];(Array.isArray(t)?t:[t]).forEach(function(t){"DID_INIT_ITEM"===e.type?h(t(e.data)):setTimeout(function(){h(t(e.data))},0)})})},R=function(e){return new Promise(function(t,n){i.dispatch("REQUEST_ITEM_PREPARE",{query:e,success:function(e){t(e)},failure:function(e){n(e)}})})},O=function(e,t){var n;return"object"!=typeof e||(n=e).file&&n.id||t||(t=e,e=void 0),i.dispatch("REMOVE_ITEM",Object.assign({},t,{query:e})),null===i.query("GET_ACTIVE_ITEM",e)},y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new Promise(function(e,n){var r=[],o={};if(P(t[0]))r.push.apply(r,t[0]),Object.assign(o,t[1]||{});else{var a=t[t.length-1];"object"!=typeof a||a instanceof Blob||Object.assign(o,t.pop()),r.push.apply(r,t)}i.dispatch("ADD_ITEMS",{items:r,index:o.index,interactionMethod:J,success:e,failure:n})})},D=function(){return i.query("GET_ACTIVE_ITEMS")},S=function(e){return new Promise(function(t,n){i.dispatch("REQUEST_ITEM_PROCESSING",{query:e,success:function(e){t(e)},failure:function(e){n(e)}})})},A=Object.assign({},pe(),{},I,{},function(e,n){var r={};return t(n,function(t){r[t]={get:function(){return e.getState().options[t]},set:function(n){e.dispatch("SET_"+Z(t,"_").toUpperCase(),{value:n})}}}),r}(i,o),{setOptions:function(e){return i.dispatch("SET_OPTIONS",{options:e})},addFile:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(n,r){y([{source:e,options:t}],{index:t.index}).then(function(e){return n(e&&e[0])}).catch(r)})},addFiles:y,getFile:function(e){return i.query("GET_ACTIVE_ITEM",e)},processFile:S,prepareFile:R,removeFile:O,moveFile:function(e,t){return i.dispatch("MOVE_ITEM",{query:e,index:t})},getFiles:D,processFiles:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Array.isArray(t[0])?t[0]:t;if(!r.length){var o=D().filter(function(e){return!(e.status===Ie.IDLE&&e.origin===ve.LOCAL)&&e.status!==Ie.PROCESSING&&e.status!==Ie.PROCESSING_COMPLETE&&e.status!==Ie.PROCESSING_REVERT_ERROR});return Promise.all(o.map(S))}return Promise.all(r.map(S))},removeFiles:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,o=Array.isArray(t[0])?t[0]:t;"object"==typeof o[o.length-1]?r=o.pop():Array.isArray(t[0])&&(r=t[1]);var i=D();return o.length?o.map(function(e){return _(e)?i[e]?i[e].id:null:e}).filter(function(e){return e}).map(function(e){return O(e,r)}):Promise.all(i.map(function(e){return O(e,r)}))},prepareFiles:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Array.isArray(t[0])?t[0]:t,o=r.length?r:D();return Promise.all(o.map(R))},sort:function(e){return i.dispatch("SORT",{compare:e})},browse:function(){var e=p.element.querySelector("input[type=file]");e&&e.click()},destroy:function(){A.fire("destroy",p.element),i.dispatch("ABORT_ALL"),p._destroy(),window.removeEventListener("resize",d),document.removeEventListener("visibilitychange",a),i.dispatch("DID_DESTROY")},insertBefore:function(e){return L(p.element,e)},insertAfter:function(e){return b(p.element,e)},appendTo:function(e){return e.appendChild(p.element)},replaceElement:function(e){L(p.element,e),e.parentNode.removeChild(e),r=e},restoreElement:function(){r&&(b(r,p.element),p.element.parentNode.removeChild(p.element),r=null)},isAttachedTo:function(e){return p.element===e||r===e},element:{get:function(){return p.element}},status:{get:function(){return i.query("GET_STATUS")}}});return i.dispatch("DID_INIT"),n(A)},eo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={};return t(Se(),function(e,t){n[e]=t[0]}),Jr(Object.assign({},n,{},e))},to=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[];t(e.attributes,function(t){o.push(e.attributes[t])});var i=o.filter(function(e){return e.name}).reduce(function(t,n){var o,i=r(e,n.name);return t[(o=n.name,Vr(o.replace(/^data-/,"")))]=i===n.name||i,t},{});return function e(n,r){t(r,function(r,o){t(n,function(e,t){var i=new RegExp(r);if(i.test(e)&&(delete n[e],!1!==o))if(U(o))n[o]=t;else{var a,s=o.group;H(o)&&!n[s]&&(n[s]={}),n[s][(a=e.replace(i,""),a.charAt(0).toLowerCase()+a.slice(1))]=t}}),o.mapping&&e(n[o.group],o.mapping)})}(i,n),i},no=function(){return(arguments.length<=0?void 0:arguments[0])instanceof HTMLElement?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={"^class$":"className","^multiple$":"allowMultiple","^capture$":"captureMethod","^webkitdirectory$":"allowDirectoriesOnly","^server":{group:"server",mapping:{"^process":{group:"process"},"^revert":{group:"revert"},"^fetch":{group:"fetch"},"^restore":{group:"restore"},"^load":{group:"load"}}},"^type$":!1,"^files$":!1};ye("SET_ATTRIBUTE_TO_OPTION_MAP",n);var r=Object.assign({},t),o=to("FIELDSET"===e.nodeName?e.querySelector("input[type=file]"):e,n);Object.keys(o).forEach(function(e){H(o[e])?(H(r[e])||(r[e]={}),Object.assign(r[e],o[e])):r[e]=o[e]}),r.files=(t.files||[]).concat(Array.from(e.querySelectorAll("input:not([type=file])")).map(function(e){return{source:e.value,options:{type:e.dataset.type}}}));var i=eo(r);return e.files&&Array.from(e.files).forEach(function(e){i.addFile(e)}),i.replaceElement(e),i}.apply(void 0,arguments):eo.apply(void 0,arguments)},ro=["fire","_read","_write"],oo=function(e){var t={};return Ee(e,t,ro),t},io=function(e,t){return e.replace(/(?:{([a-zA-Z]+)})/g,function(e,n){return t[n]})},ao=function(e){var t=new Blob(["(",e.toString(),")()"],{type:"application/javascript"}),n=URL.createObjectURL(t),r=new Worker(n);return{transfer:function(e,t){},post:function(e,t,n){var o=oe();r.onmessage=function(e){e.data.id===o&&t(e.data.message)},r.postMessage({id:o,message:e},n)},terminate:function(){r.terminate(),URL.revokeObjectURL(n)}}},so=function(e){return new Promise(function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=function(e){n(e)},r.src=e})},uo=function(e,t){var n=e.slice(0,e.size,e.type);return n.lastModifiedDate=e.lastModifiedDate,n.name=t,n},lo=function(e){return uo(e,e.name)},co=[],fo=function(e){if(!co.includes(e)){co.push(e);var n,r=e({addFilter:De,utils:{Type:ge,forin:t,isString:U,isFile:ht,toNaturalFileSize:qt,replaceInString:io,getExtensionFromFilename:je,getFilenameWithoutExtension:mt,guesstimateMimeType:tr,getFileFromBlob:We,getFilenameFromURL:ke,createRoute:A,createWorker:ao,createView:S,createItemAPI:Te,loadImage:so,copyFile:lo,renameFile:uo,createBlob:ze,applyFilterChain:Oe,text:Nt,getNumericAspectRatioFromString:be},views:{fileActionButton:Ft}});n=r.options,Object.assign(Ae,n)}},po=(Kt=c()&&!("[object OperaMini]"===Object.prototype.toString.call(window.operamini))&&"visibilityState"in document&&"Promise"in window&&"slice"in Blob.prototype&&"URL"in window&&"createObjectURL"in window.URL&&"performance"in window&&("supports"in(window.CSS||{})||/MSIE|Trident/.test(window.navigator.userAgent)),function(){return Kt}),Eo={apps:[]},_o=function(){};if(e.Status={},e.FileStatus={},e.FileOrigin={},e.OptionTypes={},e.create=_o,e.destroy=_o,e.parse=_o,e.find=_o,e.registerPlugin=_o,e.getOptions=_o,e.setOptions=_o,po()){!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:60,r="__framePainter";if(window[r])return window[r].readers.push(e),void window[r].writers.push(t);window[r]={readers:[e],writers:[t]};var o=window[r],i=1e3/n,a=null,s=null,u=null,l=null,c=function(){document.hidden?(u=function(){return window.setTimeout(function(){return f(performance.now())},i)},l=function(){return window.clearTimeout(s)}):(u=function(){return window.requestAnimationFrame(f)},l=function(){return window.cancelAnimationFrame(s)})};document.addEventListener("visibilitychange",function(){l&&l(),c(),f(performance.now())});var f=function e(t){s=u(e),a||(a=t);var n=t-a;n<=i||(a=t-n%i,o.readers.forEach(function(e){return e()}),o.writers.forEach(function(e){return e(t)}))};c(),f(performance.now())}(function(){Eo.apps.forEach(function(e){return e._read()})},function(e){Eo.apps.forEach(function(t){return t._write(e)})});var To=function t(){document.dispatchEvent(new CustomEvent("FilePond:loaded",{detail:{supported:po,create:e.create,destroy:e.destroy,parse:e.parse,find:e.find,registerPlugin:e.registerPlugin,setOptions:e.setOptions}})),document.removeEventListener("DOMContentLoaded",t)};"loading"!==document.readyState?setTimeout(function(){return To()},0):document.addEventListener("DOMContentLoaded",To);var Io=function(){return t(Se(),function(t,n){e.OptionTypes[t]=n[1]})};e.Status=Object.assign({},Me),e.FileOrigin=Object.assign({},ve),e.FileStatus=Object.assign({},Ie),e.OptionTypes={},Io(),e.create=function(){var t=no.apply(void 0,arguments);return t.on("destroy",e.destroy),Eo.apps.push(t),oo(t)},e.destroy=function(e){var t=Eo.apps.findIndex(function(t){return t.isAttachedTo(e)});return t>=0&&(Eo.apps.splice(t,1)[0].restoreElement(),!0)},e.parse=function(t){return Array.from(t.querySelectorAll(".filepond")).filter(function(e){return!Eo.apps.find(function(t){return t.isAttachedTo(e)})}).map(function(t){return e.create(t)})},e.find=function(e){var t=Eo.apps.find(function(t){return t.isAttachedTo(e)});return t?oo(t):null},e.registerPlugin=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(fo),Io()},e.getOptions=function(){var e={};return t(Se(),function(t,n){e[t]=n[0]}),e},e.setOptions=function(n){return H(n)&&(Eo.apps.forEach(function(e){e.setOptions(n)}),function(e){t(e,function(e,t){Ae[e]&&(Ae[e][0]=z(t,Ae[e][0],Ae[e][1]))})}(n)),e.getOptions()}}e.supported=po,Object.defineProperty(e,"__esModule",{value:!0})});

/*!
 * FilePondPluginImagePreview 4.6.11
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).FilePondPluginImagePreview=t()}(this,function(){"use strict";function e(e){this.wrapped=e}function t(t){var i,r;function a(i,r){try{var o=t[i](r),c=o.value,s=c instanceof e;Promise.resolve(s?c.wrapped:c).then(function(e){s?a("next",e):n(o.done?"return":"normal",e)},function(e){a("throw",e)})}catch(e){n("throw",e)}}function n(e,t){switch(e){case"return":i.resolve({value:t,done:!0});break;case"throw":i.reject(t);break;default:i.resolve({value:t,done:!1})}(i=i.next)?a(i.key,i.arg):r=null}this._invoke=function(e,t){return new Promise(function(n,o){var c={key:e,arg:t,resolve:n,reject:o,next:null};r?r=r.next=c:(i=r=c,a(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)};function i(e,t){return r(e)||function(e,t){var i=[],r=!0,a=!1,n=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(i.push(o.value),!t||i.length!==t);r=!0);}catch(e){a=!0,n=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw n}}return i}(e,t)||a()}function r(e){if(Array.isArray(e))return e}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var n=function(e,t){return s(e.x*t,e.y*t)},o=function(e,t){return s(e.x+t.x,e.y+t.y)},c=function(e,t,i){var r=Math.cos(t),a=Math.sin(t),n=s(e.x-i.x,e.y-i.y);return s(i.x+r*n.x-a*n.y,i.y+a*n.x+r*n.y)},s=function(){return{x:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,y:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0}},h=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0;return"string"==typeof e?parseFloat(e)*i:"number"==typeof e?e*(r?t[r]:Math.min(t.width,t.height)):void 0},u=function(e){return null!=e},l=function(e,t){return Object.keys(t).forEach(function(i){return e.setAttribute(i,t[i])})},d=function(e,t){var i=document.createElementNS("http://www.w3.org/2000/svg",e);return t&&l(i,t),i},f={contain:"xMidYMid meet",cover:"xMidYMid slice"},p={left:"start",center:"middle",right:"end"},g=function(e){return function(t){return d(e,{id:t.id})}},m={image:function(e){var t=d("image",{id:e.id,"stroke-linecap":"round","stroke-linejoin":"round",opacity:"0"});return t.onload=function(){t.setAttribute("opacity",e.opacity||1)},t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e.src),t},rect:g("rect"),ellipse:g("ellipse"),text:g("text"),path:g("path"),line:function(e){var t=d("g",{id:e.id,"stroke-linecap":"round","stroke-linejoin":"round"}),i=d("line");t.appendChild(i);var r=d("path");t.appendChild(r);var a=d("path");return t.appendChild(a),t}},y={rect:function(e){return l(e,Object.assign({},e.rect,e.styles))},ellipse:function(e){var t=e.rect.x+.5*e.rect.width,i=e.rect.y+.5*e.rect.height,r=.5*e.rect.width,a=.5*e.rect.height;return l(e,Object.assign({cx:t,cy:i,rx:r,ry:a},e.styles))},image:function(e,t){l(e,Object.assign({},e.rect,e.styles,{preserveAspectRatio:f[t.fit]||"none"}))},text:function(e,t,i,r){var a=h(t.fontSize,i,r),n=t.fontFamily||"sans-serif",o=t.fontWeight||"normal",c=p[t.textAlign]||"start";l(e,Object.assign({},e.rect,e.styles,{"stroke-width":0,"font-weight":o,"font-size":a,"font-family":n,"text-anchor":c})),e.text!==t.text&&(e.text=t.text,e.textContent=t.text.length?t.text:" ")},path:function(e,t,i,r){var a;l(e,Object.assign({},e.styles,{fill:"none",d:(a=t.points.map(function(e){return{x:h(e.x,i,r,"width"),y:h(e.y,i,r,"height")}}),a.map(function(e,t){return"".concat(0===t?"M":"L"," ").concat(e.x," ").concat(e.y)}).join(" "))}))},line:function(e,t,i,r){l(e,Object.assign({},e.rect,e.styles,{fill:"none"}));var a=e.childNodes[0],u=e.childNodes[1],d=e.childNodes[2],f=e.rect,p={x:e.rect.x+e.rect.width,y:e.rect.y+e.rect.height};if(l(a,{x1:f.x,y1:f.y,x2:p.x,y2:p.y}),t.lineDecoration){u.style.display="none",d.style.display="none";var g=function(e){var t=Math.sqrt(e.x*e.x+e.y*e.y);return 0===t?{x:0,y:0}:s(e.x/t,e.y/t)}({x:p.x-f.x,y:p.y-f.y}),m=h(.05,i,r);if(-1!==t.lineDecoration.indexOf("arrow-begin")){var y=n(g,m),E=o(f,y),v=c(f,2,E),w=c(f,-2,E);l(u,{style:"display:block;",d:"M".concat(v.x,",").concat(v.y," L").concat(f.x,",").concat(f.y," L").concat(w.x,",").concat(w.y)})}if(-1!==t.lineDecoration.indexOf("arrow-end")){var _=n(g,-m),I=o(p,_),M=c(p,2,I),x=c(p,-2,I);l(d,{style:"display:block;",d:"M".concat(M.x,",").concat(M.y," L").concat(p.x,",").concat(p.y," L").concat(x.x,",").concat(x.y)})}}}},E=function(e,t,i,r,a){"path"!==t&&(e.rect=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=h(e.x,t,i,"width")||h(e.left,t,i,"width"),a=h(e.y,t,i,"height")||h(e.top,t,i,"height"),n=h(e.width,t,i,"width"),o=h(e.height,t,i,"height"),c=h(e.right,t,i,"width"),s=h(e.bottom,t,i,"height");return u(a)||(a=u(o)&&u(s)?t.height-o-s:s),u(r)||(r=u(n)&&u(c)?t.width-n-c:c),u(n)||(n=u(r)&&u(c)?t.width-r-c:0),u(o)||(o=u(a)&&u(s)?t.height-a-s:0),{x:r||0,y:a||0,width:n||0,height:o||0}}(i,r,a)),e.styles=function(e,t,i){var r=e.borderStyle||e.lineStyle||"solid",a=e.backgroundColor||e.fontColor||"transparent",n=e.borderColor||e.lineColor||"transparent",o=h(e.borderWidth||e.lineWidth,t,i);return{"stroke-linecap":e.lineCap||"round","stroke-linejoin":e.lineJoin||"round","stroke-width":o||0,"stroke-dasharray":"string"==typeof r?"":r.map(function(e){return h(e,t,i)}).join(","),stroke:n,fill:a,opacity:e.opacity||1}}(i,r,a),y[t](e,i,r,a)},v=["x","y","left","top","right","bottom","width","height"],w=function(e){var t=i(e,2),r=t[0],a=t[1],n=a.points?{}:v.reduce(function(e,t){var i;return e[t]="string"==typeof(i=a[t])&&/%/.test(i)?parseFloat(i)/100:i,e},{});return[r,Object.assign({zIndex:0},a,n)]},_=function(e,t){return e[1].zIndex>t[1].zIndex?1:e[1].zIndex<t[1].zIndex?-1:0},I=function(e){return e.utils.createView({name:"image-preview-markup",tag:"svg",ignoreRect:!0,mixins:{apis:["width","height","crop","markup","resize","dirty"]},write:function(e){var t=e.root,r=e.props;if(r.dirty){var a=r.crop,n=r.resize,o=r.markup,c=r.width,s=r.height,h=a.width,u=a.height;if(n){var l=n.size,d=l&&l.width,f=l&&l.height,p=n.mode,g=n.upscale;d&&!f&&(f=d),f&&!d&&(d=f);var y=h<d&&u<f;if(!y||y&&g){var v,I=d/h,M=f/u;if("force"===p)h=d,u=f;else"cover"===p?v=Math.max(I,M):"contain"===p&&(v=Math.min(I,M)),h*=v,u*=v}}var x={width:c,height:s};t.element.setAttribute("width",x.width),t.element.setAttribute("height",x.height);var T=Math.min(c/h,s/u);t.element.innerHTML="";var A=t.query("GET_IMAGE_PREVIEW_MARKUP_FILTER");o.filter(A).map(w).sort(_).forEach(function(e){var r=i(e,2),a=r[0],n=r[1],o=function(e,t){return m[e](t)}(a,n);E(o,a,n,x,T),t.element.appendChild(o)})}}})},M=function(e,t){return{x:e,y:t}},x=function(e,t){return M(e.x-t.x,e.y-t.y)},T=function(e,t){return Math.sqrt(function(e,t){return function(e,t){return e.x*t.x+e.y*t.y}(x(e,t),x(e,t))}(e,t))},A=function(e,t){var i=e,r=t,a=1.5707963267948966-t,n=Math.sin(1.5707963267948966),o=Math.sin(r),c=Math.sin(a),s=Math.cos(a),h=i/n;return M(s*(h*o),s*(h*c))},R=function(e,t,i,r){var a=r.x>.5?1-r.x:r.x,n=r.y>.5?1-r.y:r.y,o=2*a*e.width,c=2*n*e.height,s=function(e,t){var i=e.width,r=e.height,a=A(i,t),n=A(r,t),o=M(e.x+Math.abs(a.x),e.y-Math.abs(a.y)),c=M(e.x+e.width+Math.abs(n.y),e.y+Math.abs(n.x)),s=M(e.x-Math.abs(n.y),e.y+e.height-Math.abs(n.x));return{width:T(o,c),height:T(o,s)}}(t,i);return Math.max(s.width/o,s.height/c)},P=function(e,t){var i=e.width,r=i*t;return r>e.height&&(i=(r=e.height)/t),{x:.5*(e.width-i),y:.5*(e.height-r),width:i,height:r}},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.zoom,r=t.rotation,a=t.center,n=t.aspectRatio;n||(n=e.height/e.width);var o=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=e.height/e.width,a=t,n=1,o=r;o>a&&(n=(o=a)/r);var c=Math.max(1/n,a/o),s=e.width/(i*c*n);return{width:s,height:s*t}}(e,n,i),c={x:.5*o.width,y:.5*o.height},s={x:0,y:0,width:o.width,height:o.height,center:c},h=void 0===t.scaleToFit||t.scaleToFit,u=i*R(e,P(s,n),r,h?a:{x:.5,y:.5});return{widthFloat:o.width/u,heightFloat:o.height/u,width:Math.round(o.width/u),height:Math.round(o.height/u)}},k={type:"spring",stiffness:.5,damping:.45,mass:10},D=function(e){return e.utils.createView({name:"image-clip",tag:"div",ignoreRect:!0,mixins:{apis:["crop","markup","resize","width","height","dirty","background"],styles:["width","height","opacity"],animations:{opacity:{type:"tween",duration:250}}},didWriteView:function(e){var t=e.root,i=e.props;i.background&&(t.element.style.backgroundColor=i.background)},create:function(t){var i=t.root,r=t.props;i.ref.image=i.appendChildView(i.createChildView(function(e){return e.utils.createView({name:"image-canvas-wrapper",tag:"div",ignoreRect:!0,mixins:{apis:["crop","width","height"],styles:["originX","originY","translateX","translateY","scaleX","scaleY","rotateZ"],animations:{originX:k,originY:k,scaleX:k,scaleY:k,translateX:k,translateY:k,rotateZ:k}},create:function(t){var i=t.root,r=t.props;r.width=r.image.width,r.height=r.image.height,i.ref.bitmap=i.appendChildView(i.createChildView(function(e){return e.utils.createView({name:"image-bitmap",ignoreRect:!0,mixins:{styles:["scaleX","scaleY"]},create:function(e){var t=e.root,i=e.props;t.appendChild(i.image)}})}(e),{image:r.image}))},write:function(e){var t=e.root,i=e.props.crop.flip,r=t.ref.bitmap;r.scaleX=i.horizontal?-1:1,r.scaleY=i.vertical?-1:1}})}(e),Object.assign({},r))),i.ref.createMarkup=function(){i.ref.markup||(i.ref.markup=i.appendChildView(i.createChildView(I(e),Object.assign({},r))))},i.ref.destroyMarkup=function(){i.ref.markup&&(i.removeChildView(i.ref.markup),i.ref.markup=null)};var a=i.query("GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR");null!==a&&(i.element.dataset.transparencyIndicator="grid"===a?a:"color")},write:function(e){var t=e.root,i=e.props,r=e.shouldOptimize,a=i.crop,n=i.markup,o=i.resize,c=i.dirty,s=i.width,h=i.height;t.ref.image.crop=a;var u={x:0,y:0,width:s,height:h,center:{x:.5*s,y:.5*h}},l={width:t.ref.image.width,height:t.ref.image.height},d={x:a.center.x*l.width,y:a.center.y*l.height},f={x:u.center.x-l.width*a.center.x,y:u.center.y-l.height*a.center.y},p=2*Math.PI+a.rotation%(2*Math.PI),g=a.aspectRatio||l.height/l.width,m=void 0===a.scaleToFit||a.scaleToFit,y=R(l,P(u,g),p,m?a.center:{x:.5,y:.5}),E=a.zoom*y;n&&n.length?(t.ref.createMarkup(),t.ref.markup.width=s,t.ref.markup.height=h,t.ref.markup.resize=o,t.ref.markup.dirty=c,t.ref.markup.markup=n,t.ref.markup.crop=C(l,a)):t.ref.markup&&t.ref.destroyMarkup();var v=t.ref.image;if(r)return v.originX=null,v.originY=null,v.translateX=null,v.translateY=null,v.rotateZ=null,v.scaleX=null,void(v.scaleY=null);v.originX=d.x,v.originY=d.y,v.translateX=f.x,v.translateY=f.y,v.rotateZ=p,v.scaleX=E,v.scaleY=E}})},G=0,V=function(){self.onmessage=function(e){createImageBitmap(e.data.message.file).then(function(t){self.postMessage({id:e.data.id,message:t},[t])})}},O=function(){self.onmessage=function(e){for(var t=e.data.message.imageData,i=e.data.message.colorMatrix,r=t.data,a=r.length,n=i[0],o=i[1],c=i[2],s=i[3],h=i[4],u=i[5],l=i[6],d=i[7],f=i[8],p=i[9],g=i[10],m=i[11],y=i[12],E=i[13],v=i[14],w=i[15],_=i[16],I=i[17],M=i[18],x=i[19],T=0,A=0,R=0,P=0,C=0;T<a;T+=4)A=r[T]/255,R=r[T+1]/255,P=r[T+2]/255,C=r[T+3]/255,r[T]=Math.max(0,Math.min(255*(A*n+R*o+P*c+C*s+h),255)),r[T+1]=Math.max(0,Math.min(255*(A*u+R*l+P*d+C*f+p),255)),r[T+2]=Math.max(0,Math.min(255*(A*g+R*m+P*y+C*E+v),255)),r[T+3]=Math.max(0,Math.min(255*(A*w+R*_+P*I+C*M+x),255));self.postMessage({id:e.data.id,message:t},[t.data.buffer])}},b={1:function(){return[1,0,0,1,0,0]},2:function(e){return[-1,0,0,1,e,0]},3:function(e,t){return[-1,0,0,-1,e,t]},4:function(e,t){return[1,0,0,-1,0,t]},5:function(){return[0,1,1,0,0,0]},6:function(e,t){return[0,1,-1,0,t,0]},7:function(e,t){return[0,-1,-1,0,t,e]},8:function(e){return[0,-1,1,0,0,e]}},S=function(e,t,i,r){t=Math.round(t),i=Math.round(i);var a=document.createElement("canvas");a.width=t,a.height=i;var n=a.getContext("2d");if(r>=5&&r<=8){var o=[i,t];t=o[0],i=o[1]}return function(e,t,i,r){-1!==r&&e.transform.apply(e,b[r](t,i))}(n,t,i,r),n.drawImage(e,0,0,t,i),a},L=function(e){return/^image/.test(e.type)&&!/svg/.test(e.type)},N=function(e){var t=Math.min(10/e.width,10/e.height),i=document.createElement("canvas"),r=i.getContext("2d"),a=i.width=Math.ceil(e.width*t),n=i.height=Math.ceil(e.height*t);r.drawImage(e,0,0,a,n);var o=null;try{o=r.getImageData(0,0,a,n).data}catch(e){return null}for(var c=o.length,s=0,h=0,u=0,l=0;l<c;l+=4)s+=o[l]*o[l],h+=o[l+1]*o[l+1],u+=o[l+2]*o[l+2];return{r:s=W(s,c),g:h=W(h,c),b:u=W(u,c)}},W=function(e,t){return Math.floor(Math.sqrt(e/(t/4)))},z=function(e){var t=e.utils.createView({name:"image-preview-overlay",tag:"div",ignoreRect:!0,create:function(e){var t=e.root,i=e.props,r='<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">\n    <defs>\n        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">\n            <stop offset=\'50%\' stop-color=\'#000000\'/>\n            <stop offset=\'56%\' stop-color=\'#0a0a0a\'/>\n            <stop offset=\'63%\' stop-color=\'#262626\'/>\n            <stop offset=\'69%\' stop-color=\'#4f4f4f\'/>\n            <stop offset=\'75%\' stop-color=\'#808080\'/>\n            <stop offset=\'81%\' stop-color=\'#b1b1b1\'/>\n            <stop offset=\'88%\' stop-color=\'#dadada\'/>\n            <stop offset=\'94%\' stop-color=\'#f6f6f6\'/>\n            <stop offset=\'100%\' stop-color=\'#ffffff\'/>\n        </radialGradient>\n        <mask id="mask-__UID__">\n            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>\n        </mask>\n    </defs>\n    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>\n</svg>';if(document.querySelector("base")){var a=new URL(window.location.href.replace(window.location.hash,"")).href;r=r.replace(/url\(\#/g,"url("+a+"#")}G++,t.element.classList.add("filepond--image-preview-overlay-".concat(i.status)),t.element.innerHTML=r.replace(/__UID__/g,G)},mixins:{styles:["opacity"],animations:{opacity:{type:"spring",mass:25}}}}),i=function(e){return e.utils.createView({name:"image-preview",tag:"div",ignoreRect:!0,mixins:{apis:["image","crop","markup","resize","dirty","background"],styles:["translateY","scaleX","scaleY","opacity"],animations:{scaleX:k,scaleY:k,translateY:k,opacity:{type:"tween",duration:400}}},create:function(t){var i=t.root,r=t.props;i.ref.clip=i.appendChildView(i.createChildView(D(e),{id:r.id,image:r.image,crop:r.crop,markup:r.markup,resize:r.resize,dirty:r.dirty,background:r.background}))},write:function(e){var t=e.root,i=e.props,r=e.shouldOptimize,a=t.ref.clip,n=i.image,o=i.crop,c=i.markup,s=i.resize,h=i.dirty;if(a.crop=o,a.markup=c,a.resize=s,a.dirty=h,a.opacity=r?0:1,!r&&!t.rect.element.hidden){var u=n.height/n.width,l=o.aspectRatio||u,d=t.rect.inner.width,f=t.rect.inner.height,p=t.query("GET_IMAGE_PREVIEW_HEIGHT"),g=t.query("GET_IMAGE_PREVIEW_MIN_HEIGHT"),m=t.query("GET_IMAGE_PREVIEW_MAX_HEIGHT"),y=t.query("GET_PANEL_ASPECT_RATIO"),E=t.query("GET_ALLOW_MULTIPLE");y&&!E&&(p=d*y,l=y);var v=null!==p?p:Math.max(g,Math.min(d*l,m)),w=v/l;w>d&&(v=(w=d)*l),v>f&&(v=f,w=f/l),a.width=w,a.height=v}}})}(e),r=e.utils.createWorker,a=function(e,t,i){return new Promise(function(a){e.ref.imageData||(e.ref.imageData=i.getContext("2d").getImageData(0,0,i.width,i.height));var n=function(e){var t;try{t=new ImageData(e.width,e.height)}catch(i){t=document.createElement("canvas").getContext("2d").createImageData(e.width,e.height)}return t.data.set(new Uint8ClampedArray(e.data)),t}(e.ref.imageData);if(!t||20!==t.length)return i.getContext("2d").putImageData(n,0,0),a();var o=r(O);o.post({imageData:n,colorMatrix:t},function(e){i.getContext("2d").putImageData(e,0,0),o.terminate(),a()},[n.data.buffer])})},n=function(e){var t=e.root,r=e.props,a=e.image,n=r.id,o=t.query("GET_ITEM",{id:n});if(o){var c,s,h=o.getMetadata("crop")||{center:{x:.5,y:.5},flip:{horizontal:!1,vertical:!1},zoom:1,rotation:0,aspectRatio:null},u=t.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR"),l=!1;t.query("GET_IMAGE_PREVIEW_MARKUP_SHOW")&&(c=o.getMetadata("markup")||[],s=o.getMetadata("resize"),l=!0);var d=t.appendChildView(t.createChildView(i,{id:n,image:a,crop:h,resize:s,markup:c,dirty:l,background:u,opacity:0,scaleX:1.15,scaleY:1.15,translateY:15}),t.childViews.length);t.ref.images.push(d),d.opacity=1,d.scaleX=1,d.scaleY=1,d.translateY=0,setTimeout(function(){t.dispatch("DID_IMAGE_PREVIEW_SHOW",{id:n})},250)}},o=function(e){var t=e.root;t.ref.overlayShadow.opacity=1,t.ref.overlayError.opacity=0,t.ref.overlaySuccess.opacity=0},c=function(e){var t=e.root;t.ref.overlayShadow.opacity=.25,t.ref.overlayError.opacity=1};return e.utils.createView({name:"image-preview-wrapper",create:function(e){var i=e.root;i.ref.images=[],i.ref.imageData=null,i.ref.imageViewBin=[],i.ref.overlayShadow=i.appendChildView(i.createChildView(t,{opacity:0,status:"idle"})),i.ref.overlaySuccess=i.appendChildView(i.createChildView(t,{opacity:0,status:"success"})),i.ref.overlayError=i.appendChildView(i.createChildView(t,{opacity:0,status:"failure"}))},styles:["height"],apis:["height"],destroy:function(e){e.root.ref.images.forEach(function(e){e.image.width=1,e.image.height=1})},didWriteView:function(e){e.root.ref.images.forEach(function(e){e.dirty=!1})},write:e.utils.createRoute({DID_IMAGE_PREVIEW_DRAW:function(e){var t=e.root,i=t.ref.images[t.ref.images.length-1];i.translateY=0,i.scaleX=1,i.scaleY=1,i.opacity=1},DID_IMAGE_PREVIEW_CONTAINER_CREATE:function(e){var t=e.root,i=e.props.id,r=t.query("GET_ITEM",i);if(r){var a,n,o,c=URL.createObjectURL(r.file);a=c,n=function(e,r){t.dispatch("DID_IMAGE_PREVIEW_CALCULATE_SIZE",{id:i,width:e,height:r})},(o=new Image).onload=function(){var e=o.naturalWidth,t=o.naturalHeight;o=null,n(e,t)},o.src=a}},DID_FINISH_CALCULATE_PREVIEWSIZE:function(e){var t=e.root,i=e.props,o=i.id,c=t.query("GET_ITEM",o);if(c){var s,h,u=URL.createObjectURL(c.file),l=function(){var e;(e=u,new Promise(function(t,i){var r=new Image;r.crossOrigin="Anonymous",r.onload=function(){t(r)},r.onerror=function(e){i(e)},r.src=e})).then(d)},d=function(e){URL.revokeObjectURL(u);var r=(c.getMetadata("exif")||{}).orientation||-1,o=e.width,s=e.height;if(o&&s){if(r>=5&&r<=8){var h=[s,o];o=h[0],s=h[1]}var l=Math.max(1,.75*window.devicePixelRatio),d=t.query("GET_IMAGE_PREVIEW_ZOOM_FACTOR")*l,f=s/o,p=t.rect.element.width,g=t.rect.element.height,m=p,y=m*f;f>1?y=(m=Math.min(o,p*d))*f:m=(y=Math.min(s,g*d))/f;var E=S(e,m,y,r),v=function(){var r=t.query("GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR")?N(data):null;c.setMetadata("color",r,!0),"close"in e&&e.close(),t.ref.overlayShadow.opacity=1,n({root:t,props:i,image:E})},w=c.getMetadata("filter");w?a(t,w,E).then(v):v()}};if(s=c.file,!(((h=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./))?parseInt(h[1]):null)<=58)&&"createImageBitmap"in window&&L(s)){var f=r(V);f.post({file:c.file},function(e){f.terminate(),e?d(e):l()})}else l()}},DID_UPDATE_ITEM_METADATA:function(e){var t=e.root,i=e.props,r=e.action;if(/crop|filter|markup|resize/.test(r.change.key)&&t.ref.images.length){var o=t.query("GET_ITEM",{id:i.id});if(o)if(/filter/.test(r.change.key)){var c=t.ref.images[t.ref.images.length-1];a(t,r.change.value,c.image)}else{if(/crop|markup|resize/.test(r.change.key)){var s=o.getMetadata("crop"),h=t.ref.images[t.ref.images.length-1];if(s&&s.aspectRatio&&h.crop&&h.crop.aspectRatio&&Math.abs(s.aspectRatio-h.crop.aspectRatio)>1e-5){var u=function(e){var t=e.root,i=t.ref.images.shift();return i.opacity=0,i.translateY=-15,t.ref.imageViewBin.push(i),i}({root:t});n({root:t,props:i,image:(l=u.image,(d=d||document.createElement("canvas")).width=l.width,d.height=l.height,d.getContext("2d").drawImage(l,0,0),d)})}else!function(e){var t=e.root,i=e.props,r=t.query("GET_ITEM",{id:i.id});if(r){var a=t.ref.images[t.ref.images.length-1];a.crop=r.getMetadata("crop"),a.background=t.query("GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR"),t.query("GET_IMAGE_PREVIEW_MARKUP_SHOW")&&(a.dirty=!0,a.resize=r.getMetadata("resize"),a.markup=r.getMetadata("markup"))}}({root:t,props:i})}var l,d}}},DID_THROW_ITEM_LOAD_ERROR:c,DID_THROW_ITEM_PROCESSING_ERROR:c,DID_THROW_ITEM_INVALID:c,DID_COMPLETE_ITEM_PROCESSING:function(e){var t=e.root;t.ref.overlayShadow.opacity=.25,t.ref.overlaySuccess.opacity=1},DID_START_ITEM_PROCESSING:o,DID_REVERT_ITEM_PROCESSING:o},function(e){var t=e.root,i=t.ref.imageViewBin.filter(function(e){return 0===e.opacity});t.ref.imageViewBin=t.ref.imageViewBin.filter(function(e){return e.opacity>0}),i.forEach(function(e){return function(e,t){e.removeChildView(t),t.image.width=1,t.image.height=1,t._destroy()}(t,e)}),i.length=0})})},H=function(e){var t=e.addFilter,i=e.utils,r=i.Type,a=i.createRoute,n=i.isFile,o=z(e);return t("CREATE_VIEW",function(e){var t=e.is,i=e.view,r=e.query;if(t("file")&&r("GET_ALLOW_IMAGE_PREVIEW")){var c=function(e){e.root.ref.shouldRescale=!0};i.registerWriter(a({DID_RESIZE_ROOT:c,DID_STOP_RESIZE:c,DID_LOAD_ITEM:function(e){var t=e.root,a=e.props.id,c=r("GET_ITEM",a);if(c&&n(c.file)&&!c.archived){var s=c.file;if(function(e){return/^image/.test(e.type)}(s)&&r("GET_IMAGE_PREVIEW_FILTER_ITEM")(c)){var h="createImageBitmap"in(window||{}),u=r("GET_IMAGE_PREVIEW_MAX_FILE_SIZE");if(!(!h&&u&&s.size>u)){t.ref.imagePreview=i.appendChildView(i.createChildView(o,{id:a}));var l=t.query("GET_IMAGE_PREVIEW_HEIGHT");l&&t.dispatch("DID_UPDATE_PANEL_HEIGHT",{id:c.id,height:l});var d=!h&&s.size>r("GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE");t.dispatch("DID_IMAGE_PREVIEW_CONTAINER_CREATE",{id:a},d)}}}},DID_IMAGE_PREVIEW_CALCULATE_SIZE:function(e){var t=e.root,i=e.action;t.ref.imageWidth=i.width,t.ref.imageHeight=i.height,t.ref.shouldRescale=!0,t.ref.shouldDrawPreview=!0,t.dispatch("KICK")},DID_UPDATE_ITEM_METADATA:function(e){var t=e.root;"crop"===e.action.change.key&&(t.ref.shouldRescale=!0)}},function(e){var t=e.root,i=e.props;t.ref.imagePreview&&(t.rect.element.hidden||(t.ref.shouldRescale&&(!function(e,t){if(e.ref.imagePreview){var i=t.id,r=e.query("GET_ITEM",{id:i});if(r){var a=e.query("GET_PANEL_ASPECT_RATIO"),n=e.query("GET_ITEM_PANEL_ASPECT_RATIO"),o=e.query("GET_IMAGE_PREVIEW_HEIGHT");if(!(a||n||o)){var c=e.ref,s=c.imageWidth,h=c.imageHeight;if(s&&h){var u=e.query("GET_IMAGE_PREVIEW_MIN_HEIGHT"),l=e.query("GET_IMAGE_PREVIEW_MAX_HEIGHT"),d=(r.getMetadata("exif")||{}).orientation||-1;if(d>=5&&d<=8){var f=[h,s];s=f[0],h=f[1]}if(!L(r.file)||e.query("GET_IMAGE_PREVIEW_UPSCALE")){var p=2048/s;s*=p,h*=p}var g=h/s,m=(r.getMetadata("crop")||{}).aspectRatio||g,y=Math.max(u,Math.min(h,l)),E=e.rect.element.width,v=Math.min(E*m,y);e.dispatch("DID_UPDATE_PANEL_HEIGHT",{id:r.id,height:v})}}}}}(t,i),t.ref.shouldRescale=!1),t.ref.shouldDrawPreview&&(requestAnimationFrame(function(){requestAnimationFrame(function(){t.dispatch("DID_FINISH_CALCULATE_PREVIEWSIZE",{id:i.id})})}),t.ref.shouldDrawPreview=!1)))}))}}),{options:{allowImagePreview:[!0,r.BOOLEAN],imagePreviewFilterItem:[function(){return!0},r.FUNCTION],imagePreviewHeight:[null,r.INT],imagePreviewMinHeight:[44,r.INT],imagePreviewMaxHeight:[256,r.INT],imagePreviewMaxFileSize:[null,r.INT],imagePreviewZoomFactor:[2,r.INT],imagePreviewUpscale:[!1,r.BOOLEAN],imagePreviewMaxInstantPreviewFileSize:[1e6,r.INT],imagePreviewTransparencyIndicator:[null,r.STRING],imagePreviewCalculateAverageImageColor:[!1,r.BOOLEAN],imagePreviewMarkupShow:[!0,r.BOOLEAN],imagePreviewMarkupFilter:[function(){return!0},r.FUNCTION]}}};return"undefined"!=typeof window&&void 0!==window.document&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:H})),H});

/*!
 * FilePondPluginFileValidateSize 2.2.7
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(e=e||self).FilePondPluginFileValidateSize=i()}(this,function(){"use strict";var e=function(e){var i=e.addFilter,E=e.utils,l=E.Type,_=E.replaceInString,n=E.toNaturalFileSize;return i("ALLOW_HOPPER_ITEM",function(e,i){var E=i.query;if(!E("GET_ALLOW_FILE_SIZE_VALIDATION"))return!0;var l=E("GET_MAX_FILE_SIZE");if(null!==l&&e.size>l)return!1;var _=E("GET_MIN_FILE_SIZE");return!(null!==_&&e.size<_)}),i("LOAD_FILE",function(e,i){var E=i.query;return new Promise(function(i,l){if(!E("GET_ALLOW_FILE_SIZE_VALIDATION"))return i(e);var I=E("GET_FILE_VALIDATE_SIZE_FILTER");if(I&&!I(e))return i(e);var t=E("GET_MAX_FILE_SIZE");if(null!==t&&e.size>t)l({status:{main:E("GET_LABEL_MAX_FILE_SIZE_EXCEEDED"),sub:_(E("GET_LABEL_MAX_FILE_SIZE"),{filesize:n(t,".",E("GET_FILE_SIZE_BASE"),E("GET_FILE_SIZE_LABELS",E))})}});else{var L=E("GET_MIN_FILE_SIZE");if(null!==L&&e.size<L)l({status:{main:E("GET_LABEL_MIN_FILE_SIZE_EXCEEDED"),sub:_(E("GET_LABEL_MIN_FILE_SIZE"),{filesize:n(L,".",E("GET_FILE_SIZE_BASE"),E("GET_FILE_SIZE_LABELS",E))})}});else{var a=E("GET_MAX_TOTAL_FILE_SIZE");if(null!==a)if(E("GET_ACTIVE_ITEMS").reduce(function(e,i){return e+i.fileSize},0)>a)return void l({status:{main:E("GET_LABEL_MAX_TOTAL_FILE_SIZE_EXCEEDED"),sub:_(E("GET_LABEL_MAX_TOTAL_FILE_SIZE"),{filesize:n(a,".",E("GET_FILE_SIZE_BASE"),E("GET_FILE_SIZE_LABELS",E))})}});i(e)}}})}),{options:{allowFileSizeValidation:[!0,l.BOOLEAN],maxFileSize:[null,l.INT],minFileSize:[null,l.INT],maxTotalFileSize:[null,l.INT],fileValidateSizeFilter:[null,l.FUNCTION],labelMinFileSizeExceeded:["File is too small",l.STRING],labelMinFileSize:["Minimum file size is {filesize}",l.STRING],labelMaxFileSizeExceeded:["File is too large",l.STRING],labelMaxFileSize:["Maximum file size is {filesize}",l.STRING],labelMaxTotalFileSizeExceeded:["Maximum total size exceeded",l.STRING],labelMaxTotalFileSize:["Maximum total file size is {filesize}",l.STRING]}}};return"undefined"!=typeof window&&void 0!==window.document&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:e})),e});

/*!
 * FilePondPluginFileValidateType 1.2.8
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).FilePondPluginFileValidateType=t()}(this,function(){"use strict";var e=function(e){var t=e.addFilter,n=e.utils,i=n.Type,T=n.isString,E=n.replaceInString,l=n.guesstimateMimeType,o=n.getExtensionFromFilename,r=n.getFilenameFromURL,u=function(e,t){return e.some(function(e){return/\*$/.test(e)?(n=e,(/^[^/]+/.exec(t)||[]).pop()===n.slice(0,-2)):e===t;var n})},a=function(e,t,n){if(0===t.length)return!0;var i=function(e){var t="";if(T(e)){var n=r(e),i=o(n);i&&(t=l(i))}else t=e.type;return t}(e);return n?new Promise(function(T,E){n(e,i).then(function(e){u(t,e)?T():E()}).catch(E)}):u(t,i)};return t("SET_ATTRIBUTE_TO_OPTION_MAP",function(e){return Object.assign(e,{accept:"acceptedFileTypes"})}),t("ALLOW_HOPPER_ITEM",function(e,t){var n=t.query;return!n("GET_ALLOW_FILE_TYPE_VALIDATION")||a(e,n("GET_ACCEPTED_FILE_TYPES"))}),t("LOAD_FILE",function(e,t){var n=t.query;return new Promise(function(t,i){if(n("GET_ALLOW_FILE_TYPE_VALIDATION")){var T=n("GET_ACCEPTED_FILE_TYPES"),l=n("GET_FILE_VALIDATE_TYPE_DETECT_TYPE"),o=a(e,T,l),r=function(){var e,t=T.map((e=n("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"),function(t){return null!==e[t]&&(e[t]||t)})).filter(function(e){return!1!==e}),l=t.filter(function(e,n){return t.indexOf(e)===n});i({status:{main:n("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),sub:E(n("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"),{allTypes:l.join(", "),allButLastType:l.slice(0,-1).join(", "),lastType:l[t.length-1]})}})};if("boolean"==typeof o)return o?t(e):r();o.then(function(){t(e)}).catch(r)}else t(e)})}),{options:{allowFileTypeValidation:[!0,i.BOOLEAN],acceptedFileTypes:[[],i.ARRAY],labelFileTypeNotAllowed:["File is of invalid type",i.STRING],fileValidateTypeLabelExpectedTypes:["Expects {allButLastType} or {lastType}",i.STRING],fileValidateTypeLabelExpectedTypesMap:[{},i.OBJECT],fileValidateTypeDetectType:[null,i.FUNCTION]}}};return"undefined"!=typeof window&&void 0!==window.document&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:e})),e});
