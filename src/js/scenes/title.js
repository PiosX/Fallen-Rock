class Title extends Phaser.Scene {
	constructor() {
		super("playGame");
	}

	create() {
		this.add.text(20, 20, "loading game...");
	}
}
