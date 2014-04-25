(function(a){var e=function(c,e){var h,n,J,C=!1,k=a.extend({namespace:"asg",classes:[],callback:function(){},source:null,delay:300,minChars:1,offsetTop:7,putAbove:!1,putLeft:!1,numToSuggest:10,leadingWildcard:!1,staticPos:!1,footer:null},e),m=k.namespace,K=k.container,L,z,w,H,F={keyup:[],change:[]},s={},D,A,x,u,q,G,t;u=function(b){var a,d;if(b.length)if("string"===typeof b[0])for(a=0;a<b.length;a++)b[a]={key:b[a],value:b[a]};else if(!b[0].key||!b[0].value)for(a=0;a<b.length;a++)d=b[a].key||b[a].value,
b[a].key=b[a].value=d;return b};D=function(){k.callback()};q=function(){if(!k.staticPos){var b={},a=h.offset();b.top=k.putAbove?a.top-(11+k.offsetTop+n.height()):a.top+20+k.offsetTop;b.left=k.putLeft?a.left+5+h.width()-n.width():a.left;n.css(b)}};A=function(b){J.empty();C=!1;if(b&&b.length){var v,d,c,e=a("<ul/>"),h=k.numToSuggest||1E3;for(v=0;v<b.length&&v<h;v++)d=b[v],c=d.verbatim?"&#8220;"+d.value+"&#8221;":d.value,a('<li class="'+m+'-li"><span class="'+m+'-img-wrap">'+(d.img?'<img class="'+m+'-img" src="'+
d.img+'">':"")+'</span><span class="'+m+'-label" tabindex="-1">'+c+"</span></li>").data(m+"-data",d)[k.putAbove?"prependTo":"appendTo"](e).find("."+m+"-img").load(q);J.append(e.children());q();C=!0}if(!k.noHide)n[C?"show":"hide"]()};x=function(){var b,v,d=k.source,c=[];b=h.val();var e=function(b){v<x.latest||w||(z&&(b||[]).length?(s.set(0,0,b[0]),D()):A(u(b)))},g=RegExp((k.leadingWildcard?"":"^")+b,"i");w=0;if(b||!k.minChars)if(d)if(a.isArray(d)){for(b=0;b<d.length;b++)d[b].value.match(g)&&c.push(d[b]);
A(c)}else a.isFunction(d)&&(v=++x.latest,d(null,b,e));else s.set(b,b),D()};x.latest=0;G=function(b){b=b||window.event;for(var a=0,d=F.keyup.length;a<d;a++)F.keyup[a].call(h,b);a=w;d=h.val();z=0;if(d!==L||13===b.which)s.get(),s.set(),L=d,!d&&k.minChars?A():(w&&(w=clearTimeout(w)),13===b.which?(b.preventDefault&&b.preventDefault(),b=n.find("li.sel"),a||b.length||(b=n.find("."+m+"-li:"+(k.putAbove?"last":"first")+"-child")),!a&&b.length?(s.set(0,0,b.data(m+"-data")),D()):(z=1,w=setTimeout(x,k.delay)),
A()):h.val().length>=k.minChars?w=setTimeout(x,k.delay):A())};t=function(b){b=b||window.event;if(!C)return!0;var a=n.find("li.sel");a.length||(a=n.find("li:hover"));switch(b.which){case 38:a.removeClass("sel");b.preventDefault&&b.preventDefault();a.length&&a.prev().length?a.prev().addClass("sel"):n.find("ul li:last-child").addClass("sel");break;case 40:a.removeClass("sel");b.preventDefault&&b.preventDefault();a.length&&a.next().length?a.next().addClass("sel"):n.find("ul li:first-child").addClass("sel");
break;case 27:case 9:A()}};s.get=function(){var a=h.data(m+"-data");if(a&&a.key&&a.value)return a};s.set=function(b,c,d,e){d=d||{key:b,value:c};c=k.source;if(d.value&&d.key)h.val(d.value).data(m+"-data",d),(e||a.noop)();else if(d.key)if(d.value=d.key,h.val("...").data(m+"-data",d),a.isArray(c)){var g=!1;for(b=0;b<c.length;b++)if(c[b].key===d.key){s.set(c[b].key,c[b].value);g=!0;break}g?(e||a.noop)():s.clear()}else c(d.key,null,function(b){1===b.length?(b=u(b),s.set(0,0,b[0]),(e||a.noop)()):s.clear()});
else h.data(m+"-data",null)};s.clear=function(){h.val("").data(m+"-data",null)};s.destroy=function(){n.remove();h.data(m+"-data",null).off("."+m)};s.on=function(a,c){F[a].push(c)};s.suggest=x;h=c;a.isArray(k.source)&&(k.source=u(k.source));k.putAbove&&k.classes.push("above");k.putLeft&&k.classes.push("left");(function(){var b=k.classes.join(" ");n=a('<div class="'+m+"-suggestions "+b+'"><ul class="'+m+'-ul"></ul></div>');k.noHide||n.hide();k.footer&&(b=k.footer,b=b.jquery?b:a(b),n.append(b));n.appendTo(K||
a("body"));J=n.find("."+m+"-ul")})();(function(){h.on("change."+m,function(a){for(var c=0,d=F.change.length;c<d;c++)F.change[c].call(h,a);h.val()?k.source||(w&&(w=clearTimeout(w)),w=setTimeout(x,k.delay)):D()}).on("keydown."+m,t).on("keyup."+m,G).on("blur."+m,function(){k.noHide||(H=setTimeout(A,300))}).on("focus."+m,function(){z=0;k.noHide||(H&&(H=clearTimeout(H)),s.get()||!h.val()&&k.minChars||x())});n.on("click","li",function(){s.set(0,0,a(this).data(m+"-data"));D()})})();return s};a.fn.asg=a.fn.ASG=
function(c){var g=this.data("asg");if(c&&"object"!=typeof c){if(g)return g[c].apply(g,Array.prototype.slice.call(arguments,1));a.error('Cannot call "'+c+'" - Autosuggest not initialized.')}else return g||this.data("asg",e(this,c))}})((window.FTB||{}).$||window.jQuery);
(function(){function a(){M=$(".row");a._init||(a._init=!0,$(".c-title-wrap").addClass("sorted").find(".vs").remove());t=0;u=[];I.find(".c-remove").quickEach(function(){t++;u.push(+this.data("id"))});e()}function e(){var a="  compare-two compare-three compare-four compare-five compare-six compare-seven compare-eight compare-nine compare-ten".split(" ");E.removeClass(a.join(" "));E.addClass(a[t])}function c(a){return 0===v?!0:-1!==$.inArray(a,u.slice(0).splice(b,d))}function g(){var a,c=window.innerWidth||
$w.width(),l=200;a=300+F+w;d=t;1200>c&&3<=t||1024>c?(a=0,N.css("display","none")):(N.css("display","block"),render_ad_unit("middle-square-1"),render_ad_unit("middle-square-2"));if(c>A&&3<d){var p=c-a-z-D;250*d<p&&(p=250*d);R.css("maxWidth",p+a+z)}a=S.width()-a;E.width(a);c>s?(I.width(a),a-=z):(l=190,I.width(a));for(q=0;a/d<l?(d--,1===d&&(d=2,190===l?q=a/2:l=190)):q=a/d,!q;);400<q&&(q=400,E.width(q*d+z),I.width(q*d+z));v=t-d;b>v&&(b=0,h());c=q-H;$(".cell").css({width:c,minWidth:c,maxWidth:c});$(".data").css("left",
-q*b);0<v?(B.css("display","block"),0===b&&B.find(".c-nav-prev").addClass("off"),b===v&&B.find(".c-nav-next").addClass("off"),E.addClass("overflow")):(E.removeClass("overflow"),B.css("display",""));k();$d.trigger("compare_resize")}function h(){b=Math.max(0,Math.min(b,v));B.find(".c-nav-next").toggleClass("off",b===v);B.find(".c-nav-prev").toggleClass("off",0===b);var a;a=m().addClass("in-view");a.find(".data").css("left",-q*b);setTimeout(function(){a.removeClass("in-view")},300);$(".sx-shadow.right").toggleClass("on",
b+d!==compare.items.length);$(".sx-shadow.left").toggleClass("on",0<b);setTimeout(function(){$(".data").css("left",-q*b)},400);k()}function n(a){var c=b+d;a>=b&&a<c||(a<b?b=a:a>b&&(b=a-d+1),h())}function J(a){var c=m().addClass("in-view"),l,p,d,f=[],r=[],y=[];for(l=0;l<a.length;l+=1)-1===u.indexOf(a[l])&&a.splice(l,1);G&&a.push(t-1);for(l=0;l<t;l+=1)f.push(q*l),r.push(q*l),y.push(l);for(l=0;l<t;l+=1)p=u[l],d=u.indexOf(p),p=a.indexOf(p),r[d]=q*p,y[d]=p;u=a;c.find(".cell").quickEach(function(a){var b=
this.clone();b.css({position:"fixed",left:f[a%t]}).addClass("clone");this.after(b)}).css({opacity:0});$(".gfx-wrap.open").quickEach(function(){this.removeClass("rendered open");O(this.closest(".row").find(".viz-tog"))});$(".gfx-wrap.rendered").removeClass("rendered");setTimeout(function(){c.find(".clone").quickEach(function(a){this.css({position:"fixed",left:r[a%t]})})},10);setTimeout(function(){c.removeClass("in-view");c.find(".clone").remove();c.find(".cell").css("opacity",1);$(".data-wrap").quickEach(function(){var a=
this.find(".cell").detach();for(l=0;l<t;l+=1)this.find(".data").append(a.eq(y.indexOf(l)))});0!==b&&(b=0,h());x=!1},1050);k()}function C(a){return a.img_src?'<div class="al-q-img"><img class="c-img" src="'+a.img_src+'"/><div class="al-q-title tip">'+a.title+"</div></div>":'<div class="al-q-text"><div class="al-q-title">'+a.title+"</div></div>"}function k(){var a,b=u.length,l,p="",d="",f="",r="",y;for(a=0;a<b;a+=1)l=u[a],compare.items[l].removed||((y=c(l))||f?y?f+=C(compare.items[l]):r+=C(compare.items[l]):
d+=C(compare.items[l]));d&&(p+='<div class="al-q-before">'+d+"</div>");f&&(p+='<div class="al-q-in-view">'+f+"</div>");r&&(p+='<div class="al-q-after">'+r+"</div>");$(".al-q").html(p)}function m(a,b){var c=m._cached_offset,p=$w.scrollTop(),d=$w.height()+p,f,r,y,e=$();c||(a=!1,b=!0);b&&(c=[]);y=M.length;for(r=0;r<y;r+=1)if(f=M.eq(r),!f.closest(".sec").hasClass("closed"))if(a?(f.top=c[r][0],f.bottom=c[r][1]):(f.top=f.offset().top,f.bottom=f.top+f.height(),b&&c.push([f.top,f.bottom])),f.bottom>p&&f.top<
d)e.push(f[0]);else if(3<e.length&&!b)break;b&&(m._cached_offset=c);return e}function K(a,b,c){FTB.full_site_spin();var p,d,f,r=[],y=[],e=[];d=compare.items.length;for(p=0;p<d;p+=1)f=compare.items[p],f.removed||f.sponsored||r.push([f.id,encode_title(f.short_title)]);r.push([a,b]);r.sort(function(a,b){return a[0]-b[0]});d=r.length;for(p=0;p<d;p+=1)y.push(r[p][0]),e.push(r[p][1]);EVT(["Side-by-side Page","Added Listing",c,void 0,!1],function(){window.location="/compare/"+y.join("-")+"/"+e.join("-vs-")})}
function L(a){FTB.full_site_spin();for(var b,c=[],d=[],e=[],f=0,r=compare.items.length;f<r;f+=1)b=compare.items[f],b.removed||b.sponsored||f===a||c.push([b.id,encode_title(b.short_title)]);r=c.length;for(f=0;f<r;f+=1)d.push(c[f][0]),e.push(c[f][1]);_gaq.push(["_trackEvent","Side-by-side Page","Removed Listing"]);EVT(["Side-by-side Page","Removed Listing",void 0,void 0,!1],function(){window.location="/compare/"+d.join("-")+"/"+e.join("-vs-")})}var z=180,w=40,H=30,F=20,s=767,D=45,A=1350,x=!1,u=[],q,
G=!1,t=compare.items.length,b=0,v=0,d=0,R=$("#content-inner-wrapper"),S=$("#c-wrap"),E=$("#c-main"),N=$("#c-sb"),I=$(".float-row"),P=$(".sec"),B=$("#c-nav"),Q=$("#back-to-top"),M;800>$w.width()&&P.slice(1).addClass("closed");a();window.applyTips();compare.get_info=function(a){a.jquery&&a.hasClass("cell")&&(a=a.parent().children().index(a));return compare.items[u[a]]};compare.get_order=function(){for(var a=0,b=u.length,c=[];a<b;a+=1)c.push(compare.items[u[a]].id);return c};resize_debounce(g);g();$(function(){$d.trigger("compare_resize")});
$d.on("vclick",".c-nav-prev:not(.off)",function(){EVT(["Side-by-side Page","Shift","Prev",void 0,!1]);b--;h()}).on("vclick",".c-nav-next:not(.off)",function(){console.log("here");EVT(["Side-by-side Page","Shift","Next",void 0,!1]);b++;h()}).on("vclick",".al-q .al-q-img, .al-q .al-q-text",function(){var a=$(".al-q-img, .al-q-test");c(a.index(this))||(EVT(["Side-by-side Page","Shift","Via Q",void 0,!1]),n(a.index(this)))});$d.on("vclick",".sort-tog",function(){if(!x){EVT(["Side-by-side Page","Row Actions",
"Sort",void 0,!1]);x=!0;var a=$(this),b=a.closest(".row").data("id"),b=compare.sort[b],c=a.hasClass("active")?!b.sort_order:b.high_first;b&&($(".sort-tog").removeClass("active low"),a.addClass("active"),c||a.addClass("low"),a=(b.sort_order=c)?b.order.slice(0):b.order.slice(0).reverse(),J(a))}});(function(){var a,c,e,p,g,f,r;$d.on("touchstart",".row",function(d){f=-q*b;a=void 0;c=d.originalEvent.touches[0].screenX;g=e=d.originalEvent.touches[0].screenY;p=c}).on("touchmove",".row",function(b){if(t!==
d){var c=b.originalEvent.touches[0].screenX,e=b.originalEvent.touches[0].screenY,l=Math.abs(c-p),k=Math.abs(e-g);!1!==a&&(a&&(b.preventDefault(),b=f+c-p,b=Math.min(b,20),b=Math.max(b,-v*q-20),g=e,p=c,f!==b&&(f=b,r.css("left",b))),void 0===a&&(10<k?a=!1:10<l&&(r=m().find(".data"),a=!0)))}}).on("touchend",".row",function(){var a=Math.round(-f/q);a!==b&&EVT(["Side-by-side Page","Shift","Touch Events",void 0,!1]);b=a;f=-q*b;h()})})();(function(){var a=!1,b=$(".c-sec-toggle"),c=$(".title-row");scroll_throttle(function(){var d=
$w.scrollTop();!a&&d>c.offset().top&&(a=!0,B.addClass("fixed"),Q.addClass("on"),I.css({display:"block",top:0}));a&&d<c.offset().top&&(b.removeClass("active"),a=!1,B.removeClass("fixed"),Q.removeClass("on"),I.css({display:"",top:""}))})})();(function(){var a=$("#c-footer"),b=!0;scroll_throttle(function(){var c=$w.scrollTop()+$w.height(),d;0<v&&(d=a.offset().top,b&&30<=c-d?(b=!1,B.css("display","none")):!b&&30>c-d&&(b=!0,B.css("display","block")))})})();(function(){var a=$(".c-sec-toggle"),b=a.find(".c-sec-active"),
c;scroll_throttle(function(){var a=$w.scrollTop(),d,e;P.each(function(){var b=$(this),c=b.offset().top,e=c+b.height();d||(d=b);if(c-250<a&&e>a+200)return d=b,!1});e=d.data("id");e!==c&&(b.text(compare.sections[d.data("id")].title),c=e)});a.on("click",function(b){var d=$(this).find(".c-sec-opt");cancelEvent(b);a.hasClass("active")||(EVT(["Side-by-side Page","Sections","Open Dropdown",void 0,!1]),a.addClass("active"),d.removeClass("current"),d.parent().find("[data-id="+c+"]").addClass("current"),$d.one("click",
function(){a.removeClass("active")}))}).find(".c-sec-opt").on("click",function(b){cancelEvent(b);EVT(["Side-by-side Page","Sections","Scroll to Section",void 0,!1]);a.removeClass("active");b=$(this).data("id");FTB.go_to($(".sec-"+b),-100)})})();(compare.has_sponsorships||$(".sponsor_button").length)&&function(){var b,c=[];for(b=0;b<compare.items.length;b+=1)c.push(compare.items[b].id);$.getJSON("/ajax_compare",{type:"get_sponsored_listing",lids:c},function(b){var c,d,e,r,h,m,n="c-s c-"+t,q=!1;if(b&&
"ok"===b.status){E.addClass("sponsored");G=!0;b=b.data;compare.items.push(b.info);m=b.rows;h=m.length;e=0;r={};for(c=0;c<h;c++)d=m[c],r[d.row_id]={row:$(".r-"+d.row_id+" .data"),data:d.data,flag:d.flag,title:d.title};e=$(".row[data-id]").last().data("id");for(c=0;c<=e;c++)if(d=r[c],!d)d=$(".r-"+c),d.length&&d.find(".data").append('<div class="cell no-info '+n+'"><span>&ndash;</span></div>');else if(d.row.length)d.row.append('<div class="cell '+n+'">'+d.data+"</div>");else if(d.flag&&!q){h='<div class="sponsored-row row"><div class="title">'+
d.title+'</div><div class="data-wrap c-spon"><div class="data">';for(q=0;q<compare.items.length-1;q++)h+='<div class="cell c-'+q+'">&ndash;</div>';h+='<div class="cell '+n+'">'+d.data+"</div>";h+="</div></div></div>";q=!0;$(".title-row").eq(0).after(h)}$(".c-img-wrap").find(".data").append('<div class="cell '+n+'">'+b.header.img_cell+"</div>");$(".c-title-wrap").find(".data").append('<div class="cell '+n+'">'+b.header.title_cell+'<span class="sponsored-label">Partner<span class="info-icon"></span><span class="tip">FindTheBest has a relationship with this vendor.</span></span></div>');
$(".c-remove-wrap").find(".data").append('<div class="cell '+n+' c-remove"><span class="x">x</span></div>');$(".float-row").find(".data").append('<div class="cell '+n+'"><span data-id="'+t+'" class="c-remove">x</span>'+b.header.float_cell+'<span class="sponsored-label">Partner<span class="info-icon"></span><span class="tip">FindTheBest has a relationship with this vendor.</span></span></div>');a();g();k();window.applyTips();b.code&&setTimeout(function(){$("body").append(b.code)},1)}})}();compare.add=
K;$d.on("vclick",".al-listing-inner",function(){var a=$(this),b=a.closest(".c-add-wrap").length?"(Above)":"(Sidebar)";K(a.data("id"),a.data("title"),"Added From Related "+b)});$d.on("vclick",".c-remove",function(){var b=$(this);b.hasClass("c-s")?(EVT(["Side-by-side Page","Removed Sponsored Listing",void 0,void 0,!1]),$(".c-s").remove(),E.removeClass("sponsored"),G=!1,a(),g(),k()):L(b.data("id"))});var O;(function(){function a(){var b=$w.width();e=Math.min(600,$(".row:eq(0)").width());h=768>b?250:
350}function b(a){if(a){var d=$(a[0]);a=d.parent().children().index(d);d=d.closest(".row").find(".cell:not(.no-info, .c-s)").eq(a).addClass("gfx-hover");!c(a)&&d.length&&(EVT(["Side-by-side Page","Shift","Graph Hover",void 0,!1]),n(a))}else $(".gfx-hover").removeClass("gfx-hover")}function d(a){var c,g=[],k,g=a.closest(".row"),n=g.find(".gfx-wrap"),g=g.find(".gfx-main");if(n.hasClass("open"))a.removeClass("active"),n.removeClass("open");else if(n.hasClass("rendered"))a.addClass("active"),n.addClass("open");
else{a.addClass("active");g.empty();var l=g.data("id"),m={$ele:g,w:e,h:h,rotate:1,theme:"#0BF",onHighlight:b};c=$.extend({},compare.graphs[l]);var g=[],q=t;G&&q--;for(a=0;a<q;a+=1)k=u[a],g.push(c.data[k]);c.data[q]&&g.push(c.data[q]);c.data=g;m.comp=c;m.ghead=m.comp.head;n.addClass("open rendered");f[l]=new BarGraph(m);f[l].update();resize_debounce(function(){if(e!==f[l].w||h!==f[l].h)f[l].w=e,f[l].h=h,f[l].resize().update()})}}var e,h,f={};a();resize_debounce(a);O=d;$d.on("vclick",".viz-tog",function(){var a=
$(this),b=a.closest(".row").find(".gfx-main").data("id");f[b]||EVT(["Side-by-side Page","Row Actions","Charts",void 0,!1]);d(a)})})()})();
(function(){var a=$(".data-wrap:eq(0)").width();resize_debounce(function(){a=$(".data-wrap:eq(0)").width()});lazy_render(".sj-graph",function(e){var c=e.data("id"),c=compare.sj_data[c],g={w:a,h:300,comp:c,theme:"#0BF",$ele:e},h;e.html("");g.ghead=c.head;"line"===c.config.mode?h=new LineGraph(g):"stacked_bar"===c.config.mode&&(g.stack=1,h=new BarGraph(g));h&&(h.resize().update(),resize_debounce(function(){a!==h.w&&(h.w=a,h.resize().update())}))});$(".js-render").trigger("render")})();
(function(){for(var a=0,e=[],c=compare.items.length,a=0;a<c;a+=1)e.push(+compare.items[a].id);$(".al-search input").each(function(){var a=$(this),c=a.closest(".c-add-wrap").length?"(Above)":"(Sidebar)";a.ASG({delay:100,offsetTop:15,source:function(a,c,g){$.ajax("/ajax_suggest_listing_search",{success:g,dataType:"json",data:{value:c,skip_ids:e,includes:["img"]}})},callback:function(){var e=a.asg("get");e&&compare.add(e.key,encode_title(e.value),"Added From Search "+c)}})}).one("keyup",function(){var a=
$(this).closest(".c-add-wrap").length?"(Above)":"(Sidebar)";_gaq.push(["_trackEvent","Side-by-side Page","Searched "+a])})})();$(".c-carousel").each(function(){var a=$(this),e=!1,c=a.find(".c-img-wrap"),g=a.find(".c-img");a.find(".c-thumb-wrap").on("mouseover",function(){e||(e=!0,c.height(g.height()));g.attr("src",$(this).find("img").attr("src"))})});
$d.on("click",".emp-save-compare",function(){$.dialog("Save Side-by-Side",'Please enter a name for this side-by-side.<br/><label for="name">Side-by-side Name: </label><input id="save_sxs_name" maxlength="100" type="text" name="name" />',[{name:"Save",func:function(){var a=$("#save_sxs_name").val(),e,c,g=[];$.dialog(!1);if(a){for(e=0;e<compare.items.length;e+=1)c=compare.items[e],c.removed||c.sponsored||g.push(c.id);g=g.sort().join("-");$.getJSON("/ajax_save_compare",{name:a,listings:g});$.dialog("Comparison Saved",
"This comparison has been saved as: "+a)}else $.dialog("Error","A valid name must be provided")}}]);return!1});
$d.on("vclick",".c-action.save",function(){_gaq.push(["_trackEvent","Side-by-side Page","Save Button click"]);$.dialog("Save Side-by-Side",'<div class="save-compare-form"><label for="name">Title: </label><input id="save_sxs_name" maxlength="100" type="text" name="name" class="text-input" value="'+(compare.saved_info?compare.saved_info.name:document.title)+'"/><label for="notes">Notes: </label><textarea id="save_sxs_notes" maxlength="5000" name="notes" class="text-input">'+(compare.saved_info?compare.saved_info.notes:
"")+'</textarea><input type="submit" class="stnd-btn first bg-blue save-compare-button" id="dlg-btn-0" value="Save" /></div>');$("#dlg-btn-0").click(function(){_gaq.push(["_trackEvent","Side-by-side Page","Save Compare - Submit"]);var a=$("#save_sxs_name").val(),e=$("#save_sxs_notes").val(),c,g,h=[],n;$.dialog(!1);if(a){for(c=0;c<compare.items.length;c+=1)g=compare.items[c],g.removed||g.sponsored||h.push(g.id);h=h.sort(function(a,c){return a-c}).join("-");n={name:a,notes:e,listing_ids:h};FTB.user.uid?
$.post("/ajax_saved_compare_user",n,function(){FTB.reload()}):FTB.show_login(void 0,void 0,function(){$.post("/ajax_saved_compare_user",n,function(){FTB.reload()})},"save_compare")}else $.dialog("Error","A valid name must be provided")});return!1});
(function(){var a;$d.on("vclick",".c-action.share",function(e){cancelEvent(e);a?(a.slide_then_destroy(),a=void 0):(EVT(["Side-by-side Page","Share","Click share",void 0,!1]),a=window.botaBOX(window.social_buttons,this,{closeOnBody:!0,on_close:function(){a=void 0}}),window.miniShare&&miniShare("#share_buttons"))}).on("vclick","#embed_butt",function(){var a=[],c;for(c=0;c<compare.items.length;c+=1)compare.items[c].sponsored||a.push(compare.items[c].id);EVT(["Side-by-side Page","Share","Embed",void 0,
!1]);window.embed({type:FTB.has_images?5>a.length?"vs":"ss":"srp",ids:a,source:"Compare Embed"})}).on("vclick",".shr-facebook",function(){EVT(["Side-by-side Page","Share","Facebook",void 0,!1])}).on("vclick",".shr-twitter",function(){EVT(["Side-by-side Page","Share","Twitter",void 0,!1])}).on("vclick",".shr-googleplus",function(){EVT(["Side-by-side Page","Share","g+",void 0,!1])}).on("vclick",".shr-email",function(){EVT(["Side-by-side Page","Share","Email",void 0,!1])})})();
$d.on("vclick",".ro-ex-more",function(){EVT(["Side-by-side Page","Expert Review","Read More",void 0,!1]);$(".ro-ex-more").hide();$(".ro-ex-hide").slideDown()}).on("vclick",".rev-link",function(){var a=$(this),e=a.closest(".cell"),c=compare.get_info(e).url;EVT(["Side-by-side Page","User Review","Read more",0,!1],function(){window.location=c+"#review/"+a.data("rev-id")})}).on("vclick",".ur-add",function(){var a=$(this).closest(".cell"),e=compare.get_info(a).id,a=0<a.find(".ur-top").length;goto_review(e,
void 0,"compare-"+(a?"top":"bottom"))}).on("vclick",".ur-see-all",function(){var a=$(this).closest(".cell"),e=compare.get_info(a).url,a=0<a.find(".ur-top").length;EVT(["User Reviews 2","See all reviews from compare",a?"top":"bottom",0,!1],function(){window.location=e+"#review"})});
$d.on("vclick",".sec-header",function(a){$(this).parent().hasClass("closed")?EVT(["Side-by-side Page","Sections","Open",void 0,!1]):EVT(["Side-by-side Page","Sections","Closed",void 0,!1]);$(this).parent().toggleClass("closed");$d.trigger("compare_pie_render");a.preventDefault()}).on("vclick",".list-common",function(){EVT(["Side-by-side Page","Row Actions","List Common",void 0,!1]);$(this).closest(".row").addClass("show-same")}).on("vclick",".list-more",function(){EVT(["Side-by-side Page","Row Actions",
"List More",void 0,!1]);$(this).closest(".row").addClass("show-more")}).on("vclick","#back-to-top",function(){FTB.go_to($("body"))}).on("vclick",".c-action.add, .al-close",function(){var a=$(".c-action.add");a.hasClass("active")?EVT(["Side-by-side Page","Added Listing","Closed Above",void 0,!1]):EVT(["Side-by-side Page","Added Listing","Opened Above",void 0,!1]);a.toggleClass("active");$(".c-add-wrap").toggleClass("open")}).on("vclick",".list-show-more",function(){EVT(["Side-by-side Page","Row Actions",
"List More",void 0,!1]);$(this).closest(".row").addClass("show-more");var a=$(this);a.hide();a.siblings(".list-hide").show()}).on("vclick",".dd-link",function(a){var e=$(this).closest(".data-wrap"),c=e.closest(".row"),g="";e.hasClass("c-img-wrap")?g=(e.closest(".title-row").hasClass("above")?"Top":"Bottom")+" Image":c.hasClass("float-row")?g="Floating Header":e.hasClass("c-title-wrap")&&(g="Title Text "+(e.closest(".title-row").hasClass("above")?"(Top)":"(Bottom)"));EVT(["Side-by-side Page","Clicked to DD",
g,void 0,!1],this,a)}).on("vclick",".c-comp-link",function(a){var e=$(this).hasClass("top")?"Top Link":"Bottom Link";EVT(["Side-by-side Page","Clicked to SRP",e,void 0,!1],this,a)}).on("vclick",".widget_row_link",function(a){EVT(["Side-by-side Page","Softjoin","Clicked to DD",void 0,!1],this,a)}).on("vclick",".softjoin_link",function(a){EVT(["Side-by-side Page","Softjoin","Clicked see all",void 0,!1],this,a)});$(function(){$("#c-nav").delay(1E3).queue(function(){$(this).addClass("on")})});