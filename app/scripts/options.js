$(document).ready(function() {

var data = ["trying", "this", "before", "I", "try", "JSON" ];

var brewTemplate = function(data){
	var markup = "";
	var i;

	for ( i = 0; i < data.length; i++) {
		markup += "<li>" + data[i] + "</li>";
		
	}

	return markup;
};

$(".brewData").append(brewTemplate(data));

});