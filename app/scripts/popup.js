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
				var thumbnail = obj.thumbnail;
					if (obj.thumbnail === "self")
						thumbnail = 'images/beer.png';
				var title = obj.title;
				var url = "http://www.reddit.com" + obj.permalink;	
				html += '<li><img src=\" '+ thumbnail +' \"><a href=\"'+url+'\" target=\"_blank\"><p>'+title+'</p></a></li>';
			};

		$(".brew").html(html);		
});
});

// tryig something more difficult
// $(function(){
// 	$("#brewForm").on('submit', function(event){
// 		event.preventDefault ();

// 		var searchData = $("#brew").val();
// 		var searchUrl = "http://www.reddit.com/r/Homebrewing/search?q=" + searchData + "&restrict_sr=on"
// 	})
// 	$.getJSON("http://www.reddit.com/r/Homebrewing.json", function(data){
// 		var brewData = data.data.children;
// 		var html = " ";
// 			for(var i=0, b=brewData.length; i<b; i++){
// 				var obj = brewData[i].data;
// 				var thumbnail = obj.thumbnail;
// 					if (obj.thumbnail === "self")
// 						thumb = 'images/beer.png';
// 				var title = obj.title;
// 				var url = "http://www.reddit.com" + obj.permalink;	
// 				html += '<li><img src=\" '+ thumbnail +' \"><a href=\"'+url+'\" target=\"_blank\"><p>'+title+'</p></a></li>';
// 			};

// 		$(".brew").html(html);		
// });
// });


});


