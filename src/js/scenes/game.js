class Game extends Phaser.Scene {
	constructor() {
		super("playGame");
	}

	preload() {
		this.load.svg("player", "dist/img/player.svg");
	}

	create() {
		this.physics.world.setBoundsCollision();

		this.progress = this.add.rectangle(
			config.width / 2,
			40,
			120,
			8,
			0xffffff
		);
		this.progress.setDepth(1);

		this.currLevel = this.add.graphics();
		this.currLevel.fillStyle(0x000000, 1);
		this.currLevel.fillRoundedRect(config.width / 2 - 90, 25, 30, 30, 10);
		this.currLevel.setDepth(2);
		this.currLevelText = this.make
			.text({
				text: "1",
				style: {
					font: "800 18px Nunito",
					fill: "#FFFFFF",
				},
			})
			.setOrigin(-21.8, -1.4)
			.setDepth(3);

		this.nextLevel = this.add.graphics();
		this.nextLevel.fillStyle(0xffffff, 1);
		this.nextLevel.fillRoundedRect(config.width / 2 + 60, 25, 30, 30, 10);
		this.nextLevel.setDepth(2);
		this.nextLevelText = this.make
			.text({
				text: "2",
				style: {
					font: "800 18px Nunito",
					fill: "#000000",
				},
			})
			.setOrigin(-35.4, -1.4)
			.setDepth(3);

		this.player = this.physics.add.sprite(
			config.width / 2,
			config.height / 2 + 130,
			"player"
		);
		this.player.setCollideWorldBounds(true);

		//Env elements
		this.blockGroup1 = this.add.group();
		this.blockGroup2 = this.add.group();
		this.blockGroup3 = this.add.group();
		this.blockGroup4 = this.add.group();
		this.blockGroup5 = this.add.group();
		this.mainWall = this.add.group();

		this.block1 = this.add
			.rectangle(
				config.width / 5 - 2,
				config.height / 2 + 33,
				config.width / 5 - 4,
				33,
				0x1e1e1e
			)
			.setOrigin(1, 1);

		this.block2 = this.add
			.rectangle(
				config.width / 5 + 2,
				config.height / 2,
				config.width / 5 - 4,
				33,
				0x1e1e1e
			)
			.setOrigin(0, 0);
		this.block3 = this.add
			.rectangle(
				(2 * config.width) / 5 + 2,
				config.height / 2,
				config.width / 5 - 4,
				33,
				0x1e1e1e
			)
			.setOrigin(0, 0);
		this.block4 = this.add
			.rectangle(
				(3 * config.width) / 5 + 2,
				config.height / 2,
				config.width / 5 - 4,
				33,
				0x1e1e1e
			)
			.setOrigin(0, 0);
		this.block5 = this.add
			.rectangle(
				(4 * config.width) / 5 + 2,
				config.height / 2,
				config.width / 5 - 4,
				33,
				0x1e1e1e
			)
			.setOrigin(0, 0);

		this.physics.add.existing(this.block1);
		this.physics.add.existing(this.block2);
		this.physics.add.existing(this.block3);
		this.physics.add.existing(this.block4);
		this.physics.add.existing(this.block5);

		//NUMBERS
		this.num1 = this.make.text({
			text: "48",
			style: {
				font: "800 18px Nunito",
				fill: "#ffffff",
			},
		});

		this.num2 = this.make
			.text({
				x: (3 * this.block2.width) / 2,
				y: this.block2.y + 5,
				text: "4833",
				style: {
					font: "800 18px Nunito",
					fill: "#ffffff",
				},
			})
			.setOrigin(0, 0);
		this.num3 = this.make
			.text({
				x: (5 * this.block2.width) / 2 + 4,
				y: this.block2.y + 5,
				text: "48990",
				style: {
					font: "800 18px Nunito",
					fill: "#ffffff",
				},
			})
			.setOrigin(0, 0);
		this.num4 = this.make
			.text({
				x: (7 * this.block2.width) / 2 + 8,
				y: this.block2.y + 5,
				text: "48",
				style: {
					font: "800 18px Nunito",
					fill: "#ffffff",
				},
			})
			.setOrigin(0, 0);
		this.num5 = this.make
			.text({
				x: (9 * this.block2.width) / 2 + 12,
				y: this.block2.y + 5,
				text: "48",
				style: {
					font: "800 18px Nunito",
					fill: "#ffffff",
				},
			})
			.setOrigin(0, 0);

		Phaser.Display.Align.In.Center(this.num1, this.block1);
		Phaser.Display.Align.In.Center(this.num2, this.block2);
		Phaser.Display.Align.In.Center(this.num3, this.block3);
		Phaser.Display.Align.In.Center(this.num4, this.block4);
		Phaser.Display.Align.In.Center(this.num5, this.block5);

		// GROUP MANAGER
		this.blockGroup1.add(this.block1);
		this.blockGroup1.add(this.num1);
		this.blockGroup2.add(this.block2);
		this.blockGroup2.add(this.num2);
		this.blockGroup3.add(this.block3);
		this.blockGroup3.add(this.num3);
		this.blockGroup4.add(this.block4);
		this.blockGroup4.add(this.num4);
		this.blockGroup5.add(this.block5);
		this.blockGroup5.add(this.num5);

		this.mainWall.add(this.blockGroup1);
		this.mainWall.add(this.blockGroup2);
		this.mainWall.add(this.blockGroup3);
		this.mainWall.add(this.blockGroup4);
		this.mainWall.add(this.blockGroup5);
	}
	update() {
		if (this.game.input.mousePointer.isDown) {
			this.player.setPosition(
				game.input.mousePointer.x,
				config.height / 2 + 130
			);
			// this.physics.moveToObject(
			// 	this.player,
			// 	game.input.mousePointer,
			// 	200
			// );
		}
	}
}
