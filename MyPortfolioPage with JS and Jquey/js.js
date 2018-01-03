$(document).ready(function(){

$('aside legend').on('click', function(){
	$('aside * li').slideToggle(1000);

});

$('aside * li').on('click', ".fa", function(){
	$(this).closest('li').attr('contentEditable', 'true');
	$(this).closest('li').find('.noEdit').attr('contentEditable', 'false');
});








});