/*****************************************
Scott Horsburgh
Date of Project 08/02/2019
*****************************************/
$(document).ready(function() {
    $(".image a").each(function() {
    	// get the image URL and caption for each image
    	var imageURL = $(this).attr("href");
    	var caption = $(this).attr("title");
    	
    	// preload the image for each link		
		var galleryImage = new Image();
		galleryImage.src = imageURL;

        // set up the event handlers for each link
        $(this).click(function(evt){
            // suppose to be set at 2000 but to slow
            $("#caption, #image").fadeOut(1000,
                function(){
                    //$("#image_list").focus();
                    $("#image").attr("src", imageURL);
                    $("#caption").text(caption);
                    // suppose to be set at 2000 but to slow
                    $("#caption, #image").fadeIn(1000);
                });
    		// cancel the default action of each link inside of click event
    		evt.preventDefault();
        }); // end click
    }); // end each
    // move the focus to the first link
    $("li:first-child a").focus();
}); // end ready