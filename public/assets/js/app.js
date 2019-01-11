$(document).ready(function () {

    $("#addBurgerBtn").on("click", function () {
        var burger = {
            burgerName: $("#burgerText").val(),
            devoured: false,
            CustomerId : $(this).attr("data-id")
        }
        if (burgerText) {
            $.ajax("/api/newBurger", {
                type: "POST",
                data: burger
            }).then(data => {if(!data) location.reload()});
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
            location.reload();
        })
    });

    $("#addCustomerBtn").on("click", ()=>{
        var newCustomer = {
            name : $("#customerName").val()
        }

        $.ajax("/api/addCustomer", {
            type : "POST",
            data : newCustomer
        }).then(data=>{
            if (!data) location.assign("/");
        })
    })

    $(".hamburgersButton").on("click", function() {
       location.assign("/getCustomerHamburgers/" + $(this).attr("data-id"))
    })

    $(".deleteHamburgerBtn").on("click", function(){
        $.ajax("/api/deleteCustomer/" + $(this).attr("data-id"),{
            type : "DELETE"
        }).then(()=>{location.reload()})
    })

    $("#backCustomersBtn").on("click", function(){
        location.assign("/");
    })

});