$(document).ready(function(){
	$("img").fadeTo(360,.5);
	$("img").click(function(){
		$("img").fadeTo(360,.3);
		$(this).fadeTo(0,1);
		var reino=$(this).data("reino");
		var orden=$(this).data("orden");
		var familia=$(this).data("familia");

		$("span").html("<center>Reino: "+reino+"<br>Orden: "+orden+"<br>Familia: "+familia);
	});
});
