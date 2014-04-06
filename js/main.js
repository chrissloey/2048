$(document).ready(function() {
	var self = this;
	self.setGameType = function(type) {
		$('.game-container').removeClass('ad');
		$('.game-container').removeClass('ap');
		$('.game-container').removeClass('pro');
		$('.game-container').addClass(type);
	}
	$('.ad-game').click(function() {
		self.setGameType('ad');
		$('.2048-name').html("Trinity Force");
		$('.restart-button').click();
	});

	$('.ap-game').click(function() {
		self.setGameType('ap');
		$('.2048-name').html("Rabadon's Deathcap");
		$('.restart-button').click();
	});
});
