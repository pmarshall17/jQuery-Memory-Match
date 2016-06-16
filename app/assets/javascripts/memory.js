$(document).ready(function(){
	$('.grid-cell').click(function(){
		if($(this).hasClass('green-cell')){
			$(this).text('').removeClass('green-cell');
		}
		else {
			$(this).text('clicked').addClass('green-cell');
		}
	});
});