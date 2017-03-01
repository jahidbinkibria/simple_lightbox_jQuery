$(document).ready(function(){
	let $overlay = $('<div id="overlay"></id>');
	let $img = $('<img>')
	let $captionP = $('<p></p>')

	
	$overlay.append($img);
	$overlay.append($captionP);
	$('body').append($overlay);

	$('.allphoto a').click(function(event){
		event.preventDefault();
		let imagelocation = $(this).attr('href');
		$img.attr('src', imagelocation);
		$overlay.show();

		let captionText = $(this).children('img').attr('alt');
		$captionP.text(captionText);
	});
	$overlay.click(function(){
		$(this).hide();
	})
});