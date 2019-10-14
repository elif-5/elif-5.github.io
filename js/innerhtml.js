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

// 给每个a标签新增前面的序号
var frontA01 = my$("for-a01").getElementsByTagName("a");
var frontA02 = my$("for-a02").getElementsByTagName("a");
var frontA03 = my$("for-a03").getElementsByTagName("a");
var frontA04 = my$("for-a04").getElementsByTagName("a");
var frontA05 = my$("for-a05").getElementsByTagName("a");
var frontA06 = my$("for-a06").getElementsByTagName("a");
// 封装函数-将序号追加到前面
function listName(fr01){
    for (var i=0;i<fr01.length;i++) {
        var a = document.createTextNode("0"+(i+1)+".");
        fr01[i].prepend(a);
    }
}
// 调用函数追加序号
listName(frontA01);
listName(frontA02);
listName(frontA03);
listName(frontA04);
listName(frontA05);
listName(frontA06);

