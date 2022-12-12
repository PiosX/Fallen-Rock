class Game extends Phaser.Scene {
	constructor() {
		super("playGame");
	}

	preload() {
		this.load.svg("player", "dist/img/player.svg");
		this.blockGroup = this.add.group();
		this.numberGroup1 = this.add.group();
		this.numberGroup2 = this.add.group();
		this.numberGroup3 = this.add.group();
		this.numberGroup4 = this.add.group();
		this.numberGroup5 = this.add.group();
	}

	create() {
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.world.setBoundsCollision();

		this.randSpeed1 = Math.floor(Math.random() * (-150 + -100)) + -100;
		this.randSpeed2 = Math.floor(Math.random() * (-150 + -100)) + -100;
		this.randSpeed3 = Math.floor(Math.random() * (-150 + -100)) + -100;
		this.randSpeed4 = Math.floor(Math.random() * (-150 + -100)) + -100;
		this.randSpeed5 = Math.floor(Math.random() * (-150 + -100)) + -100;

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

		this.player = this.physics.add
			.sprite(config.width / 2, config.height / 2 - 130, "player")
			.setGravityY(800);
		this.player.setCollideWorldBounds(true);

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
				y: this.block2.y,
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
				y: this.block2.y,
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
				y: this.block2.y,
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
				y: this.block2.y,
				text: "48",
				style: {
					font: "800 18px Nunito",
					fill: "#ffffff",
				},
			})
			.setOrigin(0, 0);

		this.physics.add.existing(this.num1);
		this.physics.add.existing(this.num2);
		this.physics.add.existing(this.num3);
		this.physics.add.existing(this.num4);
		this.physics.add.existing(this.num5);

		this.checkLeft = 0;
		this.checkRight = 0;

		this.leftButton = this.add
			.rectangle(0, 0, config.width / 2, config.height)
			.setOrigin(0, 0)
			.setDepth(10)
			.setInteractive();
		this.rightButton = this.add
			.rectangle(config.width / 2, 0, config.width / 2, config.height)
			.setOrigin(0, 0)
			.setDepth(10)
			.setInteractive();

		this.leftButton.on("pointerdown", () => {
			this.checkLeft = 1;
		});
		this.leftButton.on("pointerup", () => {
			this.checkLeft = 0;
		});
		this.leftButton.on("pointerout", () => {
			this.checkLeft = 0;
		});

		this.rightButton.on("pointerdown", () => {
			this.checkRight = 1;
		});
		this.rightButton.on("pointerup", () => {
			this.checkRight = 0;
		});
		this.rightButton.on("pointerout", () => {
			this.checkRight = 0;
		});

		// GROUP MANAGER
		this.numberGroup1.add(this.block1);
		this.numberGroup1.add(this.num1);
		this.numberGroup2.add(this.block2);
		this.numberGroup2.add(this.num2);
		this.numberGroup3.add(this.block3);
		this.numberGroup3.add(this.num3);
		this.numberGroup4.add(this.block4);
		this.numberGroup4.add(this.num4);
		this.numberGroup5.add(this.block5);
		this.numberGroup5.add(this.num5);

		this.blockGroup.add(this.numberGroup1);
		this.blockGroup.add(this.numberGroup2);
		this.blockGroup.add(this.numberGroup3);
		this.blockGroup.add(this.numberGroup4);
		this.blockGroup.add(this.numberGroup5);
	}

	// moveBlocks(block, speed) {
	// 	block.getChildren()[0].body.velocity.y = speed;
	// 	if (block.getChildren()[0].y < -33) {
	// 		this.resetBlockPos(block);
	// 		speed = Math.floor(Math.random() * (-150 + -100)) + -100;
	// 		block.getChildren()[0].body.velocity.y = speed;
	// 	}
	// }

	resetBlockPos(block) {
		block.getChildren()[0].y = config.height + 33;
	}

	update() {
		if (this.cursors.left.isDown) {
			this.player.x -= 8;
		}
		if (this.cursors.right.isDown) {
			this.player.x += 8;
		}
		if (this.input.activePointer.isDown && this.checkLeft === 1) {
			this.player.x -= 8;
		}
		if (this.input.activePointer.isDown && this.checkRight === 1) {
			this.player.x += 8;
		}
		// if (this.game.input.mousePointer.isDown) {
		// 	this.player.setPosition(
		// 		game.input.mousePointer.x,
		// 		config.height / 2 - 130
		// 	);
		// }
		this.blockGroup.getChildren()[0].getChildren()[0].body.velocity.y =
			this.randSpeed1;
		if (this.blockGroup.getChildren()[0].getChildren()[0].y < -33) {
			this.resetBlockPos(this.blockGroup.getChildren()[0]);
			this.randSpeed1 = Math.floor(Math.random() * (-150 + -100)) + -100;
			this.blockGroup.getChildren()[0].getChildren()[0].body.velocity.y =
				this.randSpeed1;
		}
		this.blockGroup.getChildren()[1].getChildren()[0].body.velocity.y =
			this.randSpeed2;
		if (this.blockGroup.getChildren()[1].getChildren()[0].y < -33) {
			this.resetBlockPos(this.blockGroup.getChildren()[1]);
			this.randSpeed2 = Math.floor(Math.random() * (-150 + -100)) + -100;
			this.blockGroup.getChildren()[1].getChildren()[0].body.velocity.y =
				this.randSpeed2;
		}
		this.blockGroup.getChildren()[2].getChildren()[0].body.velocity.y =
			this.randSpeed3;
		if (this.blockGroup.getChildren()[2].getChildren()[0].y < -33) {
			this.resetBlockPos(this.blockGroup.getChildren()[2]);
			this.randSpeed3 = Math.floor(Math.random() * (-150 + -100)) + -100;
			this.blockGroup.getChildren()[2].getChildren()[0].body.velocity.y =
				this.randSpeed3;
		}
		this.blockGroup.getChildren()[3].getChildren()[0].body.velocity.y =
			this.randSpeed4;
		if (this.blockGroup.getChildren()[3].getChildren()[0].y < -33) {
			this.resetBlockPos(this.blockGroup.getChildren()[3]);
			this.randSpeed4 = Math.floor(Math.random() * (-150 + -100)) + -100;
			this.blockGroup.getChildren()[3].getChildren()[0].body.velocity.y =
				this.randSpeed4;
		}
		this.blockGroup.getChildren()[4].getChildren()[0].body.velocity.y =
			this.randSpeed5;
		if (this.blockGroup.getChildren()[4].getChildren()[0].y < -33) {
			this.resetBlockPos(this.blockGroup.getChildren()[4]);
			this.randSpeed5 = Math.floor(Math.random() * (-150 + -100)) + -100;
			this.blockGroup.getChildren()[4].getChildren()[0].body.velocity.y =
				this.randSpeed5;
		}

		// this.moveBlocks(this.blockGroup.getChildren()[0], this.randSpeed1);
		// this.moveBlocks(this.blockGroup.getChildren()[1], this.randSpeed2);
		// this.moveBlocks(this.blockGroup.getChildren()[2], this.randSpeed3);
		// this.moveBlocks(this.blockGroup.getChildren()[3], this.randSpeed4);
		// this.moveBlocks(this.blockGroup.getChildren()[4], this.randSpeed5);

		this.blockGroup.getChildren().forEach((block) => {
			for (let i = 0; i < block.getChildren().length; i++) {
				this.physics.add.collider(
					this.player,
					block.getChildren()[0],
					() => {
						block.getChildren()[0].body.velocity.y = 0;
						block.getChildren()[0].alpha = 0;
						Phaser.Display.Align.In.Center(
							block.getChildren()[1],
							block.getChildren()[0]
						);
					}
				);
			}
		});

		Phaser.Display.Align.In.Center(this.num1, this.block1);
		Phaser.Display.Align.In.Center(this.num2, this.block2);
		Phaser.Display.Align.In.Center(this.num3, this.block3);
		Phaser.Display.Align.In.Center(this.num4, this.block4);
		Phaser.Display.Align.In.Center(this.num5, this.block5);
	}
}
