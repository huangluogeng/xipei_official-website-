// 轮播图触发自动播放
function autoRun(){
    interval = setInterval(function(){
        if(++currentIdx >= $(".dot li").size()){
            currentIdx = 0;     // 当 currentIdx 值大于等于小圆点的个数时重置0
        }
        run(currentIdx);
    },3000);
}
// 鼠标经过圆点触发指定banner
$(".dot li").hover(function(){
    var idx = $(this).index();
    run(idx);
});
// 鼠标经过图片暂停，离开后重新启动自动播放
$(".bannerImg").hover(stop,autoRun);
autoRun();  // 页面加载完后加载自动播放
// 轮播图
var currentIdx = 0,
    interval;
function run(idx){
    currentIdx = idx;   // 设置当前idx(currentIdx)等于传入的idx
    $(".dot li").eq(idx).addClass('active').siblings().removeClass('active')        // 显示idx个banner其他的都隐藏
    $(".bannerImg")
        .stop().fadeOut()
        .eq(idx)
        .stop().fadeIn();
}
function stop(){
    clearInterval(interval);
}

var stp = document.body.scrollTop;
    
    window.onscroll=function (){
        stp = document.body.scrollTop|| document.documentElement.scrollTop;
        console.log(stp);
        if(stp >100)
        {
            $(".header-fixed-new").find("div[class='header-new']").addClass("fix-menu")         

        }else{
            $(".header-fixed-new").find("div[class='header-new']").removeClass("fix-menu")
        };
        // color();
    };