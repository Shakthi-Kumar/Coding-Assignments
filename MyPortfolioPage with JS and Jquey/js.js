$(document).ready(function(){

$('.gallery').hide();

$('aside legend').on('click', function(){
	$('aside * li').slideToggle(1000);

});

$('aside * li').on('click', ".fa", function(){
	$(this).closest('li').attr('contentEditable', 'true');
	$(this).closest('li').find('.noEdit').attr('contentEditable', 'false');
});

$('.GalleryButton').click(function(){
	$('.right').hide();
	$('.gallery').show();
});

$('#BlogButton').click(function(){
	$('.right').show();
	$('.gallery').hide();
});

// .ma-xs { margin: 5px }
// .ma-s { margin: 10px }
// .ma-m { margin: 15px }






});