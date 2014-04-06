$(document).ready(function() {
	var self = this;
	self.setGameMode = function(mode) {
		$('.game-container').removeClass('ad');
		$('.game-container').removeClass('ap');
		$('.game-container').removeClass('pro');
		$('.game-container').addClass(mode);

		if (typeof ga !== "undefined") {
			ga("send", "event", "game", mode);
		}
	}
	$('.ad-game').click(function() {
		self.setGameMode('ad');
		$('.2048-name').html("Trinity Force");
		$('.restart-button').click();
	});

	$('.ap-game').click(function() {
		self.setGameMode('ap');
		$('.2048-name').html("Rabadon's Deathcap");
		$('.restart-button').click();
	});
});
