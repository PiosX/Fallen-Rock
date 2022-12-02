class Game extends Phaser.Scene {
	constructor() {
		super("playGame");
	}

	create() {
		this.add.text(50, 20, "loading game...");
		// this.Scene.start("playGame");
	}
}
