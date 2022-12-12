var config = {
	width: 640,
	height: window.innerHeight,
	backgroundColor: 0xe63946,
	scene: [Title, Game],
	scale: { mode: Phaser.Scale.FIT },
	physics: {
		default: "arcade",
		arcade: {
			debug: true,
		},
	},
};

var game = new Phaser.Game(config);
