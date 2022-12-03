$(document).ready(function(){
    $(".dark-mode-toggler").click(function(){
        $("body").toggleClass("dark-mode");
        if($("body").hasClass("dark-mode")){
            $(".dark-mode-toggler").attr("name", "sunny-outline");
        }
        else{
            $(".dark-mode-toggler").attr("name", "moon-outline");
        }
    })
});