$(document).ready(function(){

	$('#gallery').hide();

	$('aside legend').on('click', function(){
	// no need for the *, usage of aside vs .about...
		$('aside ul').toggle();
	});

	$('aside').on('click', ".fa", function(){
	// you don't do anyting with these elements that you're identifing. why?
		//$(this).closest('li').attr('contentEditable', 'true'); // doesn't exist
		$(this).closest('li').find('.editable').attr('contentEditable', 'true').focus();

	});

	// be consistent: use # here as with #BlogButton
	$('#galleryButton').click(function(){
	// this class name .right is not the best, .blog would be more meaningful
		$('#blog').hide();
		$('#gallery').show();
	});

	$('#blogButton').click(function(){
		$('#blog').show();
		$('#gallery').hide();
	});


	$('#gallery').on('click', 'a', function(){
		var imgSource = $(this).find("img").attr("src");
		var imgCaption = $(this).find("img").attr("alt");

		var $picModal = $('#picModal');
		$picModal.find('img').attr('src', imgSource);
		$picModal.find('img').attr('alt', imgCaption);
		$picModal.find('figcaption').html(imgCaption);

		$picModal.show();
	});

	$('#closeModal').on('click', function(){
		$('#picModal').hide();
	});

	// Array.from(document.getElementsByClassName('gallery')).forEach(function(item){
	// 	item.addEventListener('click', function(){
	// 		console.log(this);
	// 	});	
	// });





});