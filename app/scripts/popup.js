$(document).ready(function(){


//-------- first reddit attempt fail

// $(function() {
	// var brewData = "http://www.reddit.com/r/Homebrewing.json",
// 	$.getJSON("brewData", function(data) {
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
				html += '<li><a href=\"'+url+'\" target=\"_blank\"><p>'+title+'</p></a></li>';
			};

		$(".brew").html(html);		
});
});

});


