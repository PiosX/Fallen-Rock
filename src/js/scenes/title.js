class Title extends Phaser.Scene {
	constructor() {
		super("playGame");
	}

	preload() {
		this.load.svg("settings", "dist/img/settings.svg");
		this.load.svg("score", "dist/img/score.svg");
		this.load.svg("trophy", "dist/img/trophy.svg");
		this.load.svg("rock", "dist/img/rock.svg");
	}

	create() {
		this.make
			.text({
				text: "Fallen",
				style: {
					font: "100 160px Nunito",
					fill: "#1E1E1E",
				},
			})
			.setOrigin(-0.27, -0.6);
		this.make
			.text({
				text: "Rock",
				style: {
					font: "100 96px Nunito",
					fill: "#1E1E1E",
				},
			})
			.setOrigin(-1.06, -2.6);
		this.make
			.text({
				text: "Level 1",
				style: {
					font: "800 30px Nunito",
					fill: "0x000000",
				},
			})
			.setOrigin(-2.85, -0.8);

		this.settings = this.add.image(20, 20, "settings");
		this.settings.setOrigin(0, 0);
		this.settings.setDepth(1);
		this.settings.setInteractive({ cursor: "pointer" });

		this.score = this.add.image(config.width / 2 - 75, 0, "score");
		this.score.setOrigin(0, -10.3);

		this.make
			.text({
				text: "152",
				style: {
					font: "800 36px Nunito",
					fill: "0x000000",
				},
			})
			.setOrigin(-4.9, -10.1);

		this.hero = this.add.circle(
			config.width / 2,
			config.height / 2 + 130,
			35,
			"0xffffff"
		);
		this.make
			.text({
				text: "Tap to start",
				style: {
					font: "800 24px Nunito",
					fill: "#1E1E1E",
				},
			})
			.setOrigin(-2.2, -26.5);

		this.circle = this.add.circle(0, 0, 40);
		this.circle.setStrokeStyle(3, 0x000000);
		this.circle.setOrigin(-1.01, -10.3);
		this.circle.setDepth(1);
		this.circle.setInteractive({ cursor: "pointer" });

		this.circle2 = this.add.circle(0, 0, 40);
		this.circle2.setStrokeStyle(3, 0x000000);
		this.circle2.setOrigin(-6.01, -10.3);
		this.circle2.setDepth(1);
		this.circle2.setInteractive({ cursor: "pointer" });

		this.trophy = this.add.image(0, 0, "trophy");
		this.trophy.setOrigin(-2.7, -17.9);

		this.rock = this.add.image(0, 0, "rock");
		this.rock.setOrigin(-11.9, -20);
	}
}
