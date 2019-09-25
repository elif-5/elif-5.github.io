var lis=document.getElementById("top-nav").getElementsByTagName("li");
for (var j=0;j<lis.length;j++) {
    lis[j].index=j;
    lis[j].onmouseover=function () {
        this.firstElementChild.style.backgroundImage="url(../img/nav-h-"+(this.index+1)+".png)";
    };
    lis[j].onmouseout=function () {
        this.firstElementChild.style.backgroundImage="url(../img/nav-"+(this.index+1)+".png)";
    }
};
var topIcons=document.getElementsByClassName("topIcons");
for (var i=0;i<topIcons.length;i++){
    topIcons[i].style.backgroundImage="url(../img/nav-"+(i+1)+".png)";
};

// 大Tab栏目的实现
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
        texts[num].className = "displayBlock";
    }
}
