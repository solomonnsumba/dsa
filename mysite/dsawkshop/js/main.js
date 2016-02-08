/*
 jQuery Typographer
 Copyright (C) 2011 by mirz

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/
(function(a){var c=/([.?*+^$[\]\\(){}|-])/g;a.typographer_common=a.typographer_common||{};a.typographer_common.normalizeTagNames=function(b){return a.map(b,function(a){return a.toLowerCase()})};a.typographer_common.getTextNodesIn=function(a,c){function d(a){if(a.nodeType==e)(c||!i.test(a.nodeValue))&&f.push(a);else for(var b=0,j=a.childNodes.length;b<j;++b)d(a.childNodes[b])}var f=[],i=/^\s*$/,e=3;d(a);return f};a.typographer_common.shouldIgnore=function(b,c,d){for(;b!==c;){if(b.tagName&&-1<a.inArray(b.tagName.toLowerCase(),
d.ignoreTags)||a(b).hasClass(d.ignoreClass))return!0;b=b.parentNode}return!1};a.typographer_common.quoteRegex=function(a){return(a+"").replace(c,"\\$1")}})(jQuery,window,document);(function(a){var c;function b(b,d){this.context=b;this.$context=a(b);this.options=a.extend({},a.fn[c].defaults,d);this.init()}function g(a){a=a.forbidden.join("|");b.findOrphanRegex=RegExp("("+a+")(?:\\n|\\s)+","gi");b.orphanAtTheEndRegex=RegExp("\\s+("+a+")$","i")}c=void 0;c="typographer_orphan";b.prototype.init=function(){this.options.ignoreTags=d.normalizeTagNames(this.options.ignoreTags);this.$context.addClass(this.options.contextClass);g(this.options);this.execute()};b.prototype.execute=function(){var c=
!1,e=d.getTextNodesIn(this.context,!1),h=this;a.each(e,function(){if(d.shouldIgnore(this,h.context,h.options))return!0;var a=this.nodeValue,a=b.deorphanize(a,this.options);c&&(a=a.replace(/^\s+/,f.nbsp),c=!1);b.orphanAtTheEndRegex.test(a)&&(c=!0);this.nodeValue=a})};b.deorphanize=function(d,e){e=a.extend({},a.fn[c].defaults,e);b.findOrphanRegex||g(e);return d=d.replace(b.findOrphanRegex,function(a,b,c){c=d.substring(c-1,c);return" "!==c&&""!==c?a:b+f.nbsp})};a.fn[c]=function(d){return this.each(function(){a.data(this,
c)||a.data(this,c,new b(this,d))})};a.fn[c].entities={nbsp:"\u00a0"};a.fn[c].defaults={contextClass:"jquery-typographer-orphan",forbidden:"aiouwz".split(""),ignoreTags:["pre","code"],ignoreClass:"ignore-orphan"};a[c]={deorphanize:b.deorphanize};var d=a.typographer_common,f=a.fn[c].entities})(jQuery,window,document);

$(document).ready(function() {
    $('.site-content').typographer_orphan();
});