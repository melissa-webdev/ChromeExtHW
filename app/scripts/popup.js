// 'use strict';

// console.log('\'Allo \'Allo! Popup');
// $(document).ready(function(){

// 	$.get("http://www.reddit.com/r/homebrewing.json", function(data){

// 		var brewTemplate = $("#redditHomebrew").html();
// 		var templateString = _.template(brewTemplate, data);
		
		
// 		$(".brewData").html(TemplateString);

		
			
// })
// });

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