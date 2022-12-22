class Title extends Phaser.Scene {
	constructor() {
		super("bootGame");
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

		const settings = this.add.image(20, 20, "settings");
		settings.setOrigin(0, 0);
		settings.setDepth(2);
		settings.setInteractive({ cursor: "pointer" });

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

		const hero = this.add
			.circle(config.width / 2, config.height / 2 + 130, 35, "0xffffff")
			.setInteractive();
		const start = this.make
			.text({
				text: "Tap to start",
				style: {
					font: "800 24px Nunito",
					fill: "#1E1E1E",
				},
			})
			.setOrigin(-2.2, -26.5);

		this.tweens.add({
			targets: start,
			alpha: 0,
			ease: "linear",
			duration: 900,
			repeat: -1,
			yoyo: true,
		});

		const circle = this.add.circle(0, 0, 40);
		circle.setStrokeStyle(3, 0x000000);
		circle.setOrigin(-1.01, -10.3);
		circle.setDepth(2);
		circle.setInteractive({ cursor: "pointer" });

		const circle2 = this.add.circle(0, 0, 40);
		circle2.setStrokeStyle(3, 0x000000);
		circle2.setOrigin(-6.01, -10.3);
		circle2.setDepth(2);
		circle2.setInteractive({ cursor: "pointer" });

		const trophy = this.add.image(0, 0, "trophy");
		trophy.setOrigin(-2.7, -17.9);

		this.rock = this.add.image(0, 0, "rock");
		this.rock.setOrigin(-11.9, -20);

		circle.on("pointerover", function (event) {
			circle.setStrokeStyle(3, 0xffffff);
		});
		circle.on("pointerout", function (event) {
			circle.setStrokeStyle(3, 0x000000);
		});

		circle2.on("pointerover", function (event) {
			circle2.setStrokeStyle(3, 0xffffff);
		});
		circle2.on("pointerout", function (event) {
			circle2.setStrokeStyle(3, 0x000000);
		});

		const rectStart = this.add.rectangle(
			config.width / 2,
			config.height / 2,
			config.width,
			config.height
		);
		rectStart.setInteractive();
		rectStart.on(
			"pointerdown",
			function (event) {
				this.scene.start("playGame");
			},
			this
		);
		this.aGrid = new AlignGrid({ scene: this, rows: 30, cols: 11 });
		this.aGrid.showNumbers();
	}
}
