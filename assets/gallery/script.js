
(function(){function A(a){a.target.h.closest(".mbr-slider").classList.contains("in")&&a.target.playVideo()}function r(a){if(a)return a!=document&&a.matches(".mbr-gallery")?!0:!1}function B(a,d){var b=Array.from(a.querySelectorAll(d));a.matches&&a.matches(d)&&b.splice(0,0,a);return b}function h(a){a=a?a.target:document.body;"undefined"!==typeof Masonry&&(B(a,".mbr-gallery").forEach(function(a){var b=a.querySelector(".mbr-gallery-row");if(b)imagesLoaded(b).on("progress",function(a,d){var g=new Masonry(b,
{itemSelector:".mbr-gallery-item:not(.mbr-gallery-item__hided)",percentPosition:!0,horizontalOrder:!0});g.reloadItems();b.addEventListener("filter",function(){g.reloadItems();g.layout();window.dispatchEvent(new CustomEvent("update.parallax"))}.bind(this,b));imagesLoaded(b).on("progress",function(){g.layout()})})}),document.querySelectorAll(".row.mbr-masonry").forEach(function(a){imagesLoaded(a).on("progress",function(b,c){var e=new Masonry(a,{});e.reloadItems();imagesLoaded(a).on("progress",function(){e.layout()})})}))}
function u(a,d,b,c,e){var g=a.querySelector("img");g.complete&&50<g.naturalWidth&&50<g.naturalHeight?v(g,a,d,b,c,e):g.addEventListener("load",function(){v(g,a,d,b,c,e)},{once:!0})}function v(a,d,b,c,e,g){var n=a.naturalWidth,p=a.naturalHeight;c=c/b>n/p?(b-2*g)*n/p:c-2*g;c=c>=n?n:c;b=(b-c*p/n)/2;a.style.width=parseInt(c)+"px";a.style.height=c*p/n+"px";d.style.top=b+e+"px";"flex"==getComputedStyle(d.parentElement,null).display&&(d.parentElement.style.display="block")}function C(a,d,b,c,e,g){a.querySelector(".modal-dialog").querySelectorAll(".carousel-item").forEach(function(a){if(!g&&
!a.classList.contains("carousel-item-next")&&!a.classList.contains("carousel-item-prev")||g&&!a.classList.contains("active"))a.classList.contains("video-container")?(a.style.top=c+"px",a.style.height=b-2*c-2*e+"px"):u(a,b,d,c,e)})}function t(){var a=window.innerWidth-0,d=window.innerHeight-0;if(m){var b,c=!1;m.querySelector(".modal-dialog").querySelector(".carousel-item.carousel-item-next")?b=m.querySelector(".modal-dialog").querySelector(".carousel-item.carousel-item-next"):(b=m.querySelector(".modal-dialog").querySelector(".carousel-item.active"),
c=!0);b.classList.contains("video-container")?(b.style.top="0px",b.style.height=d-0-20+"px"):u(b,d,a,0,10);clearTimeout(w);w=setTimeout(C,200,m,a,d,0,10,c)}}var f,k="function"==typeof jQuery;k&&(f=jQuery);var l;k?l=f("html").hasClass("is-builder"):l=document.querySelector("html").classList.contains("is-builder");if(!l){var x=document.createElement("script");x.src="https://www.youtube.com/iframe_api";var y=document.getElementsByTagName("script")[0];y.parentNode.insertBefore(x,y);var q=[];document.querySelectorAll(".carousel-item.video-container > img").forEach(function(a){return a.style.display=
"none"});window.onYouTubeIframeAPIReady=function(){var a=a||{};a.YTAPIReady||(a.YTAPIReady=!0,document.dispatchEvent(new CustomEvent("YTAPIReady")));document.querySelectorAll(".video-slide").forEach(function(a,b){var c=document.createElement("div");c.setAttribute("id","mbr-video-"+b);c.setAttribute("data-video-num",b);c.classList.add("mbr-background-video");var e=document.createElement("div");c.classList.add("item-overlay");document.querySelectorAll(".video-container")[b].appendChild(c).appendChild(e);
a.setAttribute("data-video-num",b);-1!==a.getAttribute("data-video-url").indexOf("vimeo.com")?(c={id:a.getAttribute("data-video-url"),width:"100%",height:"100%",loop:!0},c=new Vimeo.Player("mbr-video-"+b,c),c.playVideo=Vimeo.play):(c=YT.Player,e=a.getAttribute("data-video-url"),e="false"===e?!1:(e=/(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(e)||/^([-a-z0-9_]+)$/i.exec(e))?e[1]:!1,c=new c("mbr-video-"+b,{height:"100%",width:"100%",videoId:e,events:{onReady:A},playerVars:{rel:0}}));q.push(c)})}}if(k)f(document).on("add.cards",
function(a){var d=f(a.target);r(a.target)&&(d.on("click",".mbr-gallery-filter li",function(a){a.preventDefault();var c=f(this).closest("li");c.parent().find("li").removeClass("active");c.addClass("active");a=c.closest("section").find(".mbr-gallery-row");var e=f(this)[0].textContent.trim();d.find(".mbr-gallery-item").each(function(a,b){var d=f(this),h=d.attr("data-tags").split(",").map(function(a){return a.trim()});-1!==f.inArray(e,h)||c.hasClass("mbr-gallery-filter-all")?(d.removeClass("mbr-gallery-item__hided"),
d.css("left","0")):(d.addClass("mbr-gallery-item__hided"),d.css("left","300px"))});a.closest(".mbr-gallery-row")[0].dispatchEvent(new CustomEvent("filter"))}),(a=a.target.querySelector(".modal"))&&a.addEventListener("show.bs.modal",function(a){return a.preventDefault()}))});if(l)f(document).on("changeButtonColor.cards",function(a){var d=f(a.target);if(0<d.find(".mbr-gallery-filter").length&&f(a.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")){var b=(d.find(".mbr-gallery-filter .mbr-gallery-filter-all").find("a").attr("class")||
"").replace(/(^|\s)active(\s|$)/," ").trim();d.find(".mbr-gallery-filter ul li:not(.mbr-gallery-filter-all) a").attr("class",b)}h(a)});if(k)f(document).on("add.cards changeParameter.cards",function(a){var d=f(a.target),b=[];if(r(a.target)){d.find(".mbr-gallery-item").each(function(a){(f(this).attr("data-tags")||"").trim().split(",").map(function(a){a=a.trim();-1===f.inArray(a,b)&&b.push(a)})});if(0<d.find(".mbr-gallery-filter").length&&f(a.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")){var c=
"";d.find(".mbr-gallery-filter ul li:not(.mbr-gallery-filter-all)").remove();var e=d.find(".mbr-gallery-filter .mbr-gallery-filter-all").clone();e.find("a").removeClass("active");b.map(function(a){e.find("a").length?e.find("a").text(a):e.text(a);c+="<li>"+e.html()+"</li>"});e.remove();d.find(".mbr-gallery-filter ul").append(c)}h(a)}});if(k)f(document).on("change.cards",function(a){h(a)});if(k)f(document).on("lazyload",function(a){h(a);f(window).scrollEnd(function(){h(a)},250)});l||document.addEventListener("DOMContentLoaded",
function(a){h(a)});l||document.addEventListener("change.cards",function(a){h(a)});l||document.addEventListener("add.cards",function(a){h(a)});l||document.addEventListener("changeParameter.cards",function(a){h(a)});document.querySelectorAll(".mbr-gallery-item").forEach(function(a){return a.addEventListener("click",function(a){return a.stopPropagation()})});var z,w,m,D=function(a){var d=a.querySelector(".mbr-gallery-filter-all"),b=[];if(a&&r(a))if(a.querySelectorAll(".mbr-gallery-item").forEach(function(a){(a.getAttribute("data-tags")||
"").trim().split(",").map(function(a){a=a.trim();-1==b.indexOf(a)&&b.push(a)})}),0<a.querySelectorAll(".mbr-gallery-filter").length&&a.querySelector(".mbr-gallery-filter").classList.contains("gallery-filter-active")){var c=[];a.querySelectorAll(".mbr-gallery-filter > ul > li").forEach(function(a,b){0!=b&&a.removeChild(a.firstChild)});b.map(function(a){var b=document.createElement("li"),d=document.createElement("a");d.classList.add("btn");d.classList.add("btn-md");d.classList.add("btn-primary-outline");
d.classList.add("display-7");d.innerText=a;b.appendChild(d);c.push(b)});var e=a.querySelector(".mbr-gallery-filter > ul");e.appendChild(d);c.forEach(function(a){return e.appendChild(a)});a.querySelectorAll(".mbr-gallery-filter > ul > li").forEach(function(b){b.addEventListener("click",function(d){d.preventDefault();var c=b.closest("li");c.parentElement.querySelectorAll("li").forEach(function(a){return a.classList.remove("active")});c.classList.add("active");d=c.closest("section").querySelector(".mbr-gallery-row");
var e=c.querySelector("a").innerHTML.trim();a.querySelectorAll(".mbr-gallery-item").forEach(function(a){-1!=a.getAttribute("data-tags").split(",").map(function(a){return a.trim()}).indexOf(e)||c.classList.contains("mbr-gallery-filter-all")?(a.style.left="0",a.classList.remove("mbr-gallery-item__hided")):(a.classList.add("mbr-gallery-item__hided"),a.style.left="300px")});d.closest(".mbr-gallery-row").dispatchEvent(new CustomEvent("filter"))})})}else a.querySelector(".mbr-gallery-item__hided").classList.remove("mbr-gallery-item__hided"),
a.querySelector(".mbr-gallery-row").dispatchEvent(new CustomEvent("filter"))},k=document.querySelectorAll(".mbr-gallery");k.length&&k.forEach(function(a){a.querySelector(".mbr-gallery-filter")&&D(a);a.addEventListener("show.bs.modal",function(a){clearTimeout(z);z=setTimeout(function(){var b=a.relatedTarget.parentElement.getAttribute("data-video-num");(b=a.target.querySelector(".carousel-item").querySelector('.mbr-background-video[data-video-num="'+b+'"]'))&&b.closest(".carousel-item").classList.contains("active")&&
(b=q[+b.getAttribute("data-video-num")],b.playVideo?b.playVideo():b.play())},500);m=a.target;t()});a.addEventListener("slide.bs.carousel",function(a){if(a=a.target.querySelector(".carousel-item.active > .mbr-background-video"))a=q[+a.getAttribute("data-video-num")],a.pauseVideo?a.pauseVideo():a.pause()});a.addEventListener("hide.bs.modal",function(a){q.map(function(a){a.pauseVideo?a.pauseVideo():a.pause()});m=null})});window.addEventListener("resize",t);window.addEventListener("load",t)})();