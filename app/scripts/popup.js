// 'use strict';

// console.log('\'Allo \'Allo! Popup');
$(document).ready(function(){

	$JSON("http://www.reddit.com/r/homebrewing.json", function(data){

		//var HomeBrewData = data;
		var TemplateString = _.template($("#redditHomebrew".html(), data);
		
		
		$(".brewData").html(TemplateString);

		
			)
	})
})//pixel resort