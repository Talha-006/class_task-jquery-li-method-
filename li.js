$(function(){
    $("#addbutton").click(handlebtnclick);
    $("#todos").on("click", "li", removeMe);
});

function handlebtnclick() {
    var newtodo = $("#myinput").val();
    if (!newtodo) {
        $("#myinput").addClass("error");
        return;
    }
    $("#myinput").removeClass("error");
    $("#todos").append("<li>" + newtodo + "</li>");
}

function removeMe() {
    $(this).fadeOut(function() {
        $(this).remove();
    });
}
