$(document).ready(function () {
    var current_year = new Date().getFullYear();    
    $("#code-year").html(current_year);
    
    var random_password = generatePassword(16);
    
    
    $("#pfx-key").val(random_password);
    
    $("#add-btn").click(function (e) {
        e.preventDefault();
        var lastField = $(".field:last");
        var intId = parseInt(lastField.attr('data-id')) + 1 || 1;

        var fieldWrapper = $("" +
            "<div class=\"field columns\" data-id=\""+intId+"\" id=\"row-"+intId+"\">\n    " +
            "   <div class=\"column is-10\">\n        " +
            "       <div class=\"control\" id=\"add-"+intId+"\">\n            " +
            "           <input class=\"input is-large\" type=\"text\" name=\"san[]\" id=\"add-param-"+intId+" data-id=\""+intId+"\" placeholder=\"Parameter "+intId+"\">\n        " +
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

function generatePassword(passwordLength) {
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!§$%&/(()=?*'_.,";
  var allChars = numberChars + upperChars + lowerChars + specialChars;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray[3] = specialChars;
  randPasswordArray = randPasswordArray.fill(allChars, 3);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
