/*(c)2015 sovrn Holdings, Inc. All Rights Reserved 1449164894995*/
window.sovrn=window.sovrn||{};!function(a,b){function c(a){var b,c,d,e;try{if(d=document.getElementById(a),!d)throw new Error("ATF: Elem ID "+a+" not found");if(e=d.getClientRects()[0],!e)return"false";c=document.documentElement,b=e.right>0&&e.left<c.clientWidth&&e.top+e.height/2<=c.clientHeight&&e.top>=0}catch(f){v(f),b=!1}return b+""}function d(a,b){var c,d=[],e=encodeURIComponent,f=b?"&amp;":"&";for(c in a)a.hasOwnProperty(c)&&""!==c&&""!==a[c]&&d.push(e(c)+"="+e(a[c]));return d.join(f)}function e(a,b,c){var d,e,g=document.createElement("iframe"),h=f()?"solid #F2CB14 4px":"0px none",i={id:a,margin:"0",padding:"0",frameborder:"0",width:b+"",height:c+"",scrolling:"no",src:"about:blank","data-zid":q(),"class":"sovrn_ad_unit"},j={margin:"0px",padding:"0px",border:h,width:b+"px",height:c+"px",overflow:"hidden"};for(d in i)i.hasOwnProperty(d)&&g.setAttribute(d,i[d]);for(e in j)if(j.hasOwnProperty(e))try{g.style[e]=j[e]}catch(k){}return g}function f(){var a;try{a=localStorage.getItem("debug")}catch(b){a=(document.cookie.match(/(^|; )debug=([^;]*)/)||0)[2]}return 1==a}function g(){var a;if(x.tag_regex=/^(https?:)?\/\/.*\.lijit\.(com|dev)(:\d+)?\/(\/\/)?(www)?(\/delivery\/)?(fpi(_qa)?\.js|async(_qa)?)/,x.qs=m(),a=x.fp_params=j(x.qs),x.ad_unit_id=h(q()),!q()){var b,c;throw b="[sovrn] Zone ID param is required (URL: "+k()+"; REF: "+n()+")",c=new Error(b),this.reportError(c),c}a.loc=k(),a.ref=n(),a.ifr=s()?"1":"0",a.od=l(),a.id=x.ad_unit_id}function h(a){var b="sovrn_ad_unit_"+a+"_async",c=0,d=1;if(!document.getElementById(b))return b;for(;d;)d=document.getElementById(b+"_"+ ++c);return b+"_"+c}function i(){return x.fp_params.atf=c(x.ad_unit_id),'<script type="text/javascript">window.sovrn_async='+JSON.stringify(x.fp_params)+";</script>"}function j(a){var b,c,d,e,f,g;for(a=(a+"").replace("?","")||"",g=a.split("&"),f={},e=0;e<g.length;e++)d=g[e].split("="),b=d[0],c=d[1],("width"===b||"height"===b||"u"===b||"z"===b||"dtid"===b||b.match(/^ljt_/)||b.match(/^x_/i))&&(f[b]=c);return f}function k(){var a=document.referrer,b=s()&&a?a:document.location.href;return b.replace(/["']/g,"")}function l(){return u(document.location.href).host}function m(a){var b=null;if("undefined"==typeof a){if(b=p(),null===b)return v(new Error("Cannot Find Script Tag")),!1;a=b.src}return x.tag_regex.test(a)?a.replace(/^[^\?]+\??/,""):!1}function n(){return s()?"":document.referrer.replace(/^\s+|\s+$|["']/g,"")}function o(){return'<script type="text/javascript" src="http://ap.lijit.com/sync"></script>'}function p(){var a,b,c;if(a=x.tag_regex,"currentScript"in document){var d=document.currentScript;if(d&&a.test(d.src))return d}for(b=document.getElementsByTagName("script"),c=b.length-1;c>=0;c--)if(a.test(b[c].src))return b[c];return null}function q(){return x.fp_params.z}function r(){g(),t()}function s(){return self!==top}function t(){var a,b,c,d,f,g,h,j,k,l,m;if(a=x.fp_params.height||"",b=x.fp_params.width||"",c=document.createElement("div"),m=q()||"UNKNOWN",s())c.setAttribute("style","width:"+b+"px;height:"+a+"px;z-index:9999999 !important"),c.setAttribute("id",x.ad_unit_id),c.setAttribute("class","sovrn_ad_unit"),c.setAttribute("data-zid",q()),j=c.outerHTML.replace(/<\/div>/i,""),document.writeln(j),document.writeln(i()),document.writeln(o()),document.writeln("</div>");else{g=e(x.ad_unit_id,b,a),document.write(g.outerHTML),h=document.getElementById(x.ad_unit_id),k='<!DOCTYPE html><html><head><title>Sovrn Ad Unit</title><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body style="margin:0;padding:0">',l='<script type="text/javascript">setTimeout("document.close();!!window.sovrn&&sovrn.ads&&sovrn.ads.dbgEnabled()&&console&&console.log(\'[sovrn] DOCUMENT CLOSED z'+m+"');\",7000);</script></body></html>",f=k+i()+o()+l;try{d=h.contentDocument||h.contentWindow.document,d.open("text/html","replace"),d.write(f)}catch(n){v(n)}}w(document.getElementById(x.ad_unit_id),b,a)}function u(a){var b,c,d,e;try{for(b={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},c=b.parser.exec(a),d={},e=14;e--;)d[b.key[e]]=c[e]||"";return d[b.q.name]={},d[b.key[12]].replace(b.q.parser,function(a,c,e){c&&(d[b.q.name][c]=e)}),d}catch(f){v(f)}}function v(a){var b,c,e,g;c=q()||"UNKNOWN";try{b=a&&a.hasOwnProperty("stack")?a.stack:"",e={zoneid:c,err:a&&a.hasOwnProperty("message")?a.message:"",stack:b.substr(0,1024)},(new Image).src="//ap.lijit.com/data/errors/fpi.js?"+d(e),f()&&(g="JS ERROR on Zone "+c+"\n\n"+b,alert(g),console.error&&console.error(g))}catch(h){f()&&console.log&&console.log(h)}}function w(a,b,c){var d;if(!a)return this.log("element does not exist"),!1;for(d=a.parentNode;d&&"HTML"!==d.nodeName&&"BODY"!==d.nodeName;)d.style&&(b&&d.clientWidth<b&&(d.style.width=null),c&&d.clientHeight<c&&(d.style.height=null),d.style.display&&"none"===d.style.display&&(d.style.display="block"),d.style.visibility="visible",d.style.opacity="1"),d=d.parentNode;return!0}b["true"]=a;var x={};r()}({},function(){return this}());