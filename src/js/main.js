var config = {
	width: 640,
	height: window.innerHeight,
	backgroundColor: 0xe63946,
	scene: [Title, Game],
	physics: {
		default: "arcade",
		arcade: {
			debug: true,
		},
		gravity: 200,
	},
};

var game = new Phaser.Game(config);
