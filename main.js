$(document).ready(function(){

    $("img.ninja").click(function(){
        $(this).hide();
    })

    $('.ninjas button').click(function(){
        $("img.ninja").show();
    })
})