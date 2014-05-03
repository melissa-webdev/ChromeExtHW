// 'use strict';

// console.log('\'Allo \'Allo! Popup');
$(document).ready(function(){

	$.get("http://www.reddit.com/r/homebrewing.json", function(data){

		var brewTemplate = $("#redditHomebrew").html();
		var templateString = _.template(brewTemplate, data);
		
		
		$(".brewData").html(TemplateString);

		
			
	})
})