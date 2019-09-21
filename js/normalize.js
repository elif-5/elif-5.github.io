function my$(id) {
    return document.getElementById(id);
}


// 获取滚动函数
function getScroll() {
    return {
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
    };
}

var lis=document.getElementById("top-nav").getElementsByTagName("li");
for (var j=0;j<lis.length;j++) {
        lis[j].index=j;
        lis[j].onmouseover=function () {
            this.firstElementChild.style.backgroundImage="url(img/nav-h-"+(this.index+1)+".png)";
        };
        lis[j].onmouseout=function () {
            this.firstElementChild.style.backgroundImage="url(img/nav-"+(this.index+1)+".png)";
        }
};

var topIcons=document.getElementsByClassName("topIcons");
for (var i=0;i<topIcons.length;i++){
    topIcons[i].style.backgroundImage="url(img/nav-"+(i+1)+".png)";
};
// 以上是导航栏的图标效果
var searcharea = document.getElementById("search");
searcharea.onfocus = function () {
     if (this.value=="快速查找"||this.value=="还没想好？") {
         this.value="";
         this.style.color="#333";
     }else {
         this.style.color="#fe5736";
     };
    };
searcharea.onblur = function () {
    if (this.value=="") {
        this.value="还没想好？";
        this.style.color="#999";
    };
};
//上面是搜索框的效果
