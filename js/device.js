if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	document.getElementById('mobile').style.display = "block";
	document.getElementById('desktop').style.display = "none";
}else{
	document.getElementById('desktop').style.display = "block";
	document.getElementById('mobile').style.display = "none";
}