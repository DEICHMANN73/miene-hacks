$(document).ready(function () {
    $("#add-btn").click(function (e) {
        e.preventDefault();
        var lastField = $(".field:last");
        var intId = parseInt(lastField.attr('data-id')) + 1 || 1;

        var fieldWrapper = $("" +
            "<div class=\"field columns\" data-id=\""+intId+"\" id=\"row-"+intId+"\">\n    " +
            "   <div class=\"column is-10\">\n        " +
            "       <div class=\"control\" id=\"add-"+intId+"\">\n            " +
            "           <input class=\"input is-large\" type=\"text\" name=\"add\" id=\"add-param-"+intId+" data-id=\""+intId+"\" placeholder=\"Parameter "+intId+"\">\n        " +
            "       </div>\n    " +
            "   </div>\n    " +
            "   <div class=\"column is-2\">\n        " +
            "       <button class=\"button is-danger is-large remove-btn\" data-id=\""+intId+"\" id=\"remove-row-"+intId+"\">" +
            "           <i class=\"fas fa-times\"></i>" +
            "       </button>\n    " +
            "   </div>\n" +
            "</div>");
        $("#additional-fields").append(fieldWrapper);
    });
});

$(document).on("click", '.remove-btn', function (e) {
    e.preventDefault();

    var id = $(this).attr('data-id');
    $('#row-'+id).remove();
});
