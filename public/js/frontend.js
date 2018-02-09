function searchBarFadeIn() {
	$('.search-bar').fadeIn(300);
}
function searchBarFadeOut() {
	$('.search-bar').fadeOut(300);
	setTimeout(weatherInfoFadeIn, 600);
}

function weatherInfoFadeIn() {
	$('.weather-wrapper').fadeIn(300);
}

function weatherInfoFadeOut() {
	$('.weather-wrapper').fadeOut(300);
	setTimeout(searchBarFadeIn, 600);
}