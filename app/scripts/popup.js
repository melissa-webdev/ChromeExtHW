$(document).ready(function(){


//-------- first reddit attempt fail

// $(function() {
// 	$.getJSON("http://www.reddit.com/r/Homebrewing.json", function(data) {
//       $.each(data.data.children, function (i,item) {
//             $(".reddit").append("<li>" + item.data.children + "</li>");
//         });
//         });

//     });
// trying reddit again, based on speckyboy tutorial

$(function(){
	$.getJSON("http://www.reddit.com/r/Homebrewing.json", function(data){
		var brewData = data.data.children;
		var html = " ";
			for(var i=0, b=brewData.length; i<b; i++){
				var obj = brewData[i].data;
				var title = obj.title;
				var url = "http://www.reddit.com" + obj.permalink;

				html += '<div class=\"listingDetails\"><a href=\"'+url+'\" target=\"_blank\"><h5>'+title+'</h5></a>\n';
			};

		htmlOutput(html);

});
});
	function htmlOutput(html) {
    
    $(".brew").html(html);
}

});


