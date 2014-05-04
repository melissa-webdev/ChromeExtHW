// 'use strict';

// chrome.runtime.onInstalled.addListener(function (details) {
//     console.log('previousVersion', details.previousVersion);
// });

// chrome.browserAction.setBadgeText({text: '\'Allo'});

// console.log('\'Allo \'Allo! Event Page for Browser Action');
// 'use strict';

// console.log('\'Allo \'Allo! Popup');
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

$(".bewData").append(brewTemplate(data));

});