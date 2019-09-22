function img() {
    var images=document.getElementsByClassName("img");
    for (var i=0;i<images.length;i++){
        images[i].style.backgroundImage="url(img/net-logo/net-0"+(i+1)+".png)";
    };
};

img();
window.onscroll = function () {
    if (mianBaobtn.style.display=="block") {
        my$("asideNav").style.top = 60 + "px";
        return;
        if (getScroll().top >= 100 + my$("asideNav").offsetHeight) {
            my$("asideNav").className = "aside-nav fixed";
            my$("asideNav").style.top = 100 + "px";
         } else {
             my$("asideNav").className = "aside-nav";
             my$("asideNav").style.top = 200 + "px";
    }
    }
};
// 以上是侧边栏固定
my$("close").onclick = function () {
    my$("items").style.display="none";
};
// 侧边栏隐藏关闭按钮
var lis = my$("articleNet").getElementsByTagName("li");
var texts = my$("text").getElementsByTagName("li");
for (var i=0;i<lis.length;i++) {
    lis[i].setAttribute("index",i);
    lis[i].onclick=function () {

        for (var j=0;j<lis.length;j++){
            lis[j].removeAttribute("class");
            texts[j].className="dispayNone";
        }
        this.className="put-on";
        var num=this.getAttribute("index");
        for (var k=0;k<texts.length;k++) {

        }
        texts[num].className="displayBlock";
    }
}
// 文章Tab栏的功能实现

// 面包屑实现功能
var mianBaobtn = my$("mianbaoxie");
var asides =  my$("asideNav");

mianBaobtn.onclick=function () {
    if (asides.style.display!="block") {
        asides.style.display="block";
        my$("ani03").style.height=2+"px";
        my$("ani03").style.border="none";
        my$("ani01").className="ani01";
        my$("ani02").className="ani02";
    }else {
        asides.style.display="none";
        my$("ani03").style.height=0;
        my$("ani03").style.borderBottom="2px solid #2694b0";
        my$("ani01").className="";
        my$("ani02").className="";
    }
};