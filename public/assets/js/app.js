$(document).ready(function(){
    
    $("#addBurgerBtn").on("click", function(){
        var burgerText = $("#burgerText").val();
        if (burgerText){
            $.ajax("/api/newBurger",{
                type: "POST",
                data: {burgerName: burgerText}
            }).then(
                function(data){
                    if (data){
                        location.assign("/");
                    }
                }
            );
        } 
    });

    $(".devourBtn").on("click", function(){
        var id = $(this).attr("data-id");
        $.ajax("/api/devour/",{
            type: "PUT",
            data:{id}
        }).then(function(){
            location.assign("/");
        })
    });

});