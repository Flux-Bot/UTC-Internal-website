$(function(){
	$('.panel').hover(function(){
		$(this).toggleClass('flip');
	});
	var objLen = $('.container .panel').length;
	setInterval( function() {
		var randObj = getRandom(objLen);
		var obj = $('.container .panel:eq('+randObj+')');
		obj.toggleClass('flip');
	}, 1500);
});

function getRandom(len){
  return Math.floor(Math.random() * len);
}
