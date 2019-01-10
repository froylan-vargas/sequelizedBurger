$(document).ready(function () {

    $("#addBurgerBtn").on("click", function () {
        var burger = {
            burgerName: $("#burgerText").val(),
            devoured: false
        }
        if (burgerText) {
            $.ajax("/api/newBurger", {
                type: "POST",
                data: burger
            }).then(data => {if(!data) location.assign("/")});
        }
    });

    $(".devourBtn").on("click", function () {
        var burger = {
            devoured: true
        }
        $.ajax("/api/devour/" + $(this).attr("data-id"), {
            type: "PUT",
            data: burger
        }).then(function () {
            location.assign("/");
        })
    });

});