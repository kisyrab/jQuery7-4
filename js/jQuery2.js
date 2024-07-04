$(function(){
    // -------첫번째 이미지 먼저 보이기
    // $(".img_view li").hide();
    // $(".img_view li:nth-child(1)").show();
    // $(".img_view li:first-child").show();
    
    // $(".img_view li").hide();
    // $(".img_view li").eq(0).show();
    
    $(".img_view li").eq(0).siblings().hide();
    




    //------도트 누를 때 마다 컬러 변경
    $(".btn_group li").click(function(){

        var n = $(this).index();
        console.log(n);

        $(".img_view li").hide();
        $(".img_view li").eq(n).show();

        $(".btn_group li").removeClass("act")
        
        $(this).addClass("act");
    }) //click



    $(".btn_group li a").click(function(){
        var k = $(this).index();
        console.log("k : ", k);
    })







}) //j