window.onload = function(){
	var ask = document.querySelectorAll('.faq-ask');

	for(var i = 0; i < ask.length; i++){
		ask[i].onclick = function(){
			this.classList.toggle('faq-ask--active');
		}
	}
}