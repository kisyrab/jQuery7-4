$(function(){

    $(".list li").mouseover(function(){
        $(this).children("a").addClass("bg")
    }) //.list li".click

    $(".list li").mouseleave(function(){
        $(this).find("a").removeClass("bg")
    }) //mouseleave


    $(".list1 li a").click(function(){
        $(this).toggleClass("txt")
    }) //click

    $(".list2 li a").hover(function(){
        $(this).addClass("box_over");
    }, function(){
        $(this).removeClass("box_over")
    }) //hover

    $(".list3 li").mouseover(function(){
        $(this).children("a").addClass("grid_bg")
    })
    $(".list3 li").mouseleave(function(){
        $(this).find("a").removeClass("grid_bg")
    })

    $(".list3 li a").hover(function(){
        $(this).addClass("grid_cl");
    }, function(){
        $(this).removeClass("grid_cl");
    })




}) //j