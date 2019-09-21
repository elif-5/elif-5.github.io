function img() {
    var images=document.getElementsByClassName("img");
    for (var i=0;i<images.length;i++){
        images[i].style.backgroundImage="url(img/net-logo/net-0"+(i+1)+".png)";
    };
};

img();
window.onscroll = function () {
    if (getScroll().top >= 100 + my$("asideNav").offsetHeight) {
        my$("asideNav").className = "aside-nav fixed";
        my$("asideNav").style.top = 100 + "px";
    } else {
        my$("asideNav").className = "aside-nav";
        my$("asideNav").style.top = 200 + "px";
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