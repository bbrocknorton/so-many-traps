//Hide trap sign
//When users clicks on image, reveal trap sign

$(document).ready(function() {
	$('.warning').hide();

	//capture click on image
	$('.image').on('click', function() {
		console.log('sweet! we tots');

		$('.warning').toggle("slow");
	})
});