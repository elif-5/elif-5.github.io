function img() {
    var images = document.getElementsByClassName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].style.backgroundImage = "url(img/net-logo/net-0" + (i + 1) + ".png)";
    }
    ;
};

img();

var mianBaobtn = my$("mianbaoxie");
var asides = my$("asideNav");

function scrollHere() {
    window.onscroll = function scrollHere() {
        if (getScroll().top >= 100 + my$("asideNav").offsetHeight) {
            my$("asideNav").className = "aside-nav fixed";
            my$("asideNav").style.top = 100 + "px";
        } else {
            my$("asideNav").className = "aside-nav";
            my$("asideNav").style.top = 200 + "px";
        }
    }
}

scrollHere();


// 侧边栏隐藏关闭按钮
my$("close").onclick = function () {
    my$("items").style.display = "none";
};


// 文章Tab栏的功能实现
var lis = my$("articleNet").getElementsByTagName("li");
var texts = my$("text").getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute("index", i);
    lis[i].onclick = function () {

        for (var j = 0; j < lis.length; j++) {
            lis[j].removeAttribute("class");
            texts[j].className = "displayNone";
        }
        this.className = "put-on";
        var num = this.getAttribute("index");
        for (var k = 0; k < texts.length; k++) {

        }
        texts[num].className = "displayBlock";
    }
}


// 面包屑实现功能


var haha = my$("haha");

mianBaobtn.onclick = function () {
    if (haha.style.display != "block") {
        haha.style.display = "block";
        my$("ani03").style.height = 2 + "px";
        my$("ani03").style.border = "none";
        my$("ani01").className = "ani01";
        my$("ani02").className = "ani02";
    } else {
        haha.style.display = "none";
        my$("ani03").style.height = 0;
        my$("ani03").style.borderBottom = "2px solid #2694b0";
        my$("ani01").className = "";
        my$("ani02").className = "";
    }
};

var haLi = haha.getElementsByTagName("a");
for (var n = 0; n < haLi.length; n++) {
    haLi[n].onclick = function () {
        haha.style.display = "none";
        my$("ani03").style.height = 0;
        my$("ani03").style.borderBottom = "2px solid #2694b0";
        my$("ani01").className = "";
        my$("ani02").className = "";
    };
};






