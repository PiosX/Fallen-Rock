class Game extends Phaser.Scene {
	constructor() {
		super("playGame");
	}

	preload() {
		this.load.image("player", "dist/img/grey_rock.png");
		this.load.svg("score", "dist/img/score.svg");
		this.load.svg("heart", "dist/img/heart.svg");
		this.load.spritesheet("bubble", "dist/img/bubble.png", {
			frameWidth: 512,
			frameHeight: 512,
		});
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
		this.randSpeed6 = Math.floor(Math.random() * (-150 + -100)) + -100;

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
			.setGravityY(800)
			.setScale(0.4);
		this.player.setCollideWorldBounds(true);
		this.numPlayer = this.make
			.text({
				x: config.width / 2,
				y: config.height / 2 - 130,
				text: "20",
				style: {
					font: "800 18px Nunito",
					fontSize: "18px",
					fontFamily: "Nunito",
					fill: "#1e1e1e",
				},
			})
			.setOrigin(0, 0);

		this.bubble = this.physics.add
			.sprite(config.width / 2, config.height + 33, "bubble")
			.setScale(0.08);
		this.bubble.body.immovable = true;

		this.bubbleAnim = this.anims.create({
			key: "bubbleAnim",
			frames: this.anims.generateFrameNumbers("bubble"),
			frameRate: 24,
			repeat: 0,
			hideOnComplete: true,
		});

		this.randBubbleNum = Math.floor(Math.random() * 10) + 1;
		this.bubbleNumber = this.make.text({
			text: this.randBubbleNum,
			style: {
				font: "800 18px Nunito",
				fill: "#000",
			},
		});
		this.bubble.body.velocity.y = this.randSpeed6;

		this.block1 = this.add
			.rectangle(
				config.width / 5 - 2,
				config.height / 1.1 + 33,
				config.width / 5 - 4,
				33,
				0x1e1e1e
			)
			.setOrigin(1, 1);

		this.block2 = this.add
			.rectangle(
				config.width / 5 + 2,
				config.height / 1.1,
				config.width / 5 - 4,
				33,
				0x1e1e1e
			)
			.setOrigin(0, 0);
		this.block3 = this.add
			.rectangle(
				(2 * config.width) / 5 + 2,
				config.height / 1.1,
				config.width / 5 - 4,
				33,
				0x1e1e1e
			)
			.setOrigin(0, 0);
		this.block4 = this.add
			.rectangle(
				(3 * config.width) / 5 + 2,
				config.height / 1.1,
				config.width / 5 - 4,
				33,
				0x1e1e1e
			)
			.setOrigin(0, 0);
		this.block5 = this.add
			.rectangle(
				(4 * config.width) / 5 + 2,
				config.height / 1.1,
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
		this.randNum1 = Math.floor(Math.random() * 48) + 1;
		this.randNum2 = Math.floor(Math.random() * 48) + 1;
		this.randNum3 = Math.floor(Math.random() * 48) + 1;
		this.randNum4 = Math.floor(Math.random() * 48) + 1;
		this.randNum5 = Math.floor(Math.random() * 48) + 1;

		this.num1 = this.make.text({
			text: this.randNum1,
			style: {
				font: "800 18px Nunito",
				fill: "#ffffff",
			},
		});

		this.num2 = this.make
			.text({
				x: (3 * this.block2.width) / 2,
				y: this.block2.y,
				text: this.randNum2,
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
				text: this.randNum3,
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
				text: this.randNum4,
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
				text: this.randNum5,
				style: {
					font: "800 18px Nunito",
					fill: "#ffffff",
				},
			})
			.setOrigin(0, 0);

		// this.physics.add.existing(this.num1);
		// this.physics.add.existing(this.num2);
		// this.physics.add.existing(this.num3);
		// this.physics.add.existing(this.num4);
		// this.physics.add.existing(this.num5);

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

		this.timer = 0;
		this.copyTimer = 0;
		this.gameOverChecker = 0;

		this.borderU = this.add.rectangle(config.width / 2, 0, config.width, 1);
		this.borderD = this.add.rectangle(
			config.width / 2,
			config.height - 1,
			config.width,
			1
		);
		this.physics.add.existing(this.borderU);
		this.physics.add.existing(this.borderD);

		this.physics.add.collider(this.player, this.borderU, () => {
			if (this.gameOverChecker == 0) {
				this.gameOver();
				this.gameOverChecker = 1;
				this.player.destroy();
				this.numPlayer.alpha = 0;
			}
		});
		this.physics.add.collider(this.player, this.borderD, () => {
			if (this.gameOverChecker == 0) {
				this.gameOver();
				this.gameOverChecker = 1;
				this.player.destroy();
				this.numPlayer.alpha = 0;
			}
		});
	}

	gameOver() {
		this.borderOver = this.add.graphics();
		this.borderOver
			.fillRoundedRect(
				config.width / 7,
				config.height / 7,
				config.width / 1.4,
				config.height / 2.9,
				20
			)
			.fillStyle(0xff00ff, 1);

		this.gameOverText = this.make
			.text({
				x: config.width / 2,
				y: config.height / 5.2,
				text: "Game Over",
				style: {
					font: "800 55px Nunito",
					fill: "#ffffff",
				},
			})
			.setOrigin(0.5, 0.5);
		this.bestScore = this.make
			.text({
				x: config.width / 1.95,
				y: config.height / 3.8,
				text: "Best Score:",
				style: {
					font: "800 30px Nunito",
					fill: "#ffffff",
				},
			})
			.setOrigin(0.5, 0.5);
		this.bestScoreNum = this.make
			.text({
				x: config.width / 2,
				y: config.height / 3.2,
				text: "152",
				style: {
					font: "800 25px Nunito",
					fill: "#ffffff",
				},
			})
			.setOrigin(0.5, 0.5);
		this.score = this.make
			.text({
				x: config.width / 2,
				y: config.height / 2.6,
				text: "Score:",
				style: {
					font: "800 30px Nunito",
					fill: "#ffffff",
				},
			})
			.setOrigin(0.5, 0.5);
		this.scoreNum = this.make
			.text({
				x: config.width / 2,
				y: config.height / 2.3,
				text: "44",
				style: {
					font: "800 25px Nunito",
					fill: "#ffffff",
				},
			})
			.setOrigin(0.5, 0.5);
		this.continue = this.make
			.text({
				x: config.width / 2,
				y: config.height / 1.55,
				text: "Tap to continue",
				style: {
					font: "800 24px Nunito",
					fill: "#1E1E1E",
				},
			})
			.setOrigin(0.5, 0.5);

		this.tweens.add({
			targets: this.continue,
			alpha: 0,
			ease: "linear",
			duration: 900,
			repeat: -1,
			yoyo: true,
		});

		this.score = this.add.image(
			config.width / 2.85,
			config.height / 3.8,
			"score"
		);
		this.score.setTintFill(0xffffff);

		this.reviveCircle = this.add.circle(
			config.width / 2,
			config.height / 1.205,
			50
		);
		this.reviveCircle.setStrokeStyle(3, 0x000000);
		this.reviveCircle.setDepth(20);
		this.reviveCircle.setInteractive({ cursor: "pointer" });

		this.revive = this.add.image(
			config.width / 2,
			config.height / 1.2,
			"heart"
		);

		this.tweens.add({
			targets: this.revive,
			scaleX: 0.7,
			scaleY: 0.7,
			ease: "linear",
			duration: 900,
			repeat: -1,
			yoyo: true,
		});

		this.reviveCircle.on("pointerover", () => {
			this.reviveCircle.setStrokeStyle(3, 0xffffff);
		});
		this.reviveCircle.on("pointerout", () => {
			this.reviveCircle.setStrokeStyle(3, 0x000000);
		});

		this.reviveText = this.make
			.text({
				x: config.width / 2,
				y: config.height / 1.1,
				text: "Revive?",
				style: {
					font: "800 24px Nunito",
					fill: "#000000",
				},
			})
			.setOrigin(0.5, 0.5);

		this.retry = this.add
			.rectangle(
				config.width / 2,
				config.height / 2,
				config.width,
				config.height
			)
			.setDepth(15);
		this.retry.setInteractive();
		this.retry.on(
			"pointerdown",
			function (event) {
				this.scene.start("bootGame");
			},
			this
		);
	}

	resetBlockPos(block) {
		block.getChildren()[0].y = config.height + 33;
		if (block.getChildren()[0].x > config.width)
			block.getChildren()[0].x -= config.width;
	}

	update(time, delta) {
		this.timer += delta;
		this.copyTimer += delta;
		this.bubbleFlag = 0;

		if (this.bubble.body.y < -33) {
			this.bubbleFlag = 0;
			this.bubbleNumber.text = Math.floor(Math.random() * 10) + 1;
			this.bubble.body.velocity.y =
				Math.floor(Math.random() * (-150 + -100)) + -100;
			this.bubble.body.x =
				Math.floor(Math.random() * config.width - 20) + 20;
			this.bubble.body.y = config.height + 33;
		}

		if (this.cursors.left.isDown) {
			this.player.x -= 8;
			this.player.angle -= 10;
		}
		if (this.cursors.right.isDown) {
			this.player.x += 8;
			this.player.angle += 10;
		}
		if (this.input.activePointer.isDown && this.checkLeft === 1) {
			this.player.x -= 8;
			this.player.angle -= 10;
		}
		if (this.input.activePointer.isDown && this.checkRight === 1) {
			this.player.x += 8;
			this.player.angle += 10;
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
			this.num1.text = Math.floor(Math.random() * 48) + 1;
			this.blockGroup.getChildren()[0].getChildren()[0].body.velocity.y =
				this.randSpeed1;
		}
		this.blockGroup.getChildren()[1].getChildren()[0].body.velocity.y =
			this.randSpeed2;
		if (this.blockGroup.getChildren()[1].getChildren()[0].y < -33) {
			this.resetBlockPos(this.blockGroup.getChildren()[1]);
			this.randSpeed2 = Math.floor(Math.random() * (-150 + -100)) + -100;
			this.num2.text = Math.floor(Math.random() * 48) + 1;
			this.blockGroup.getChildren()[1].getChildren()[0].body.velocity.y =
				this.randSpeed2;
		}
		this.blockGroup.getChildren()[2].getChildren()[0].body.velocity.y =
			this.randSpeed3;
		if (this.blockGroup.getChildren()[2].getChildren()[0].y < -33) {
			this.resetBlockPos(this.blockGroup.getChildren()[2]);
			this.randSpeed3 = Math.floor(Math.random() * (-150 + -100)) + -100;
			this.num3.text = Math.floor(Math.random() * 48) + 1;
			this.blockGroup.getChildren()[2].getChildren()[0].body.velocity.y =
				this.randSpeed3;
		}
		this.blockGroup.getChildren()[3].getChildren()[0].body.velocity.y =
			this.randSpeed4;
		if (this.blockGroup.getChildren()[3].getChildren()[0].y < -33) {
			this.resetBlockPos(this.blockGroup.getChildren()[3]);
			this.randSpeed4 = Math.floor(Math.random() * (-150 + -100)) + -100;
			this.num4.text = Math.floor(Math.random() * 48) + 1;
			this.blockGroup.getChildren()[3].getChildren()[0].body.velocity.y =
				this.randSpeed4;
		}
		this.blockGroup.getChildren()[4].getChildren()[0].body.velocity.y =
			this.randSpeed5;
		if (this.blockGroup.getChildren()[4].getChildren()[0].y < -33) {
			this.resetBlockPos(this.blockGroup.getChildren()[4]);
			this.randSpeed5 = Math.floor(Math.random() * (-150 + -100)) + -100;
			this.num5.text = Math.floor(Math.random() * 48) + 1;
			this.blockGroup.getChildren()[4].getChildren()[0].body.velocity.y =
				this.randSpeed5;
		}

		this.blockGroup.getChildren().forEach((block) => {
			for (let i = 0; i < block.getChildren().length; i++) {
				this.physics.add.collider(
					this.player,
					block.getChildren()[0],
					() => {
						if (
							this.timer > 800 &&
							this.numPlayer.text > 0 &&
							block.getChildren()[1].text > 0
						) {
							this.numPlayer.text -= 1;
							block.getChildren()[1].text -= 1;
							this.timer = 0;
						}
						if (block.getChildren()[1].text == 0) {
							block.getChildren()[0].x += config.width;
						}
						if (this.numPlayer.text == 0) {
							this.player.destroy();
							this.numPlayer.alpha = 0;
							this.gameOver();
						}

						// block.getChildren()[0].body.velocity.y = 0;
						// block.getChildren()[0].alpha = 0;
						Phaser.Display.Align.In.Center(
							block.getChildren()[1],
							block.getChildren()[0]
						);
					}
				);
			}
		});
		let bubbleValue = parseInt(this.bubbleNumber.text);
		let playerValue = parseInt(this.numPlayer.text);
		this.countValues = parseInt(playerValue) + parseInt(bubbleValue);

		this.physics.add.overlap(this.player, this.bubble, () => {
			if (this.bubbleFlag == 0) {
				this.bubble.x = config.width + 100;
				this.numPlayer.text = this.countValues;
				this.bubbleFlag = 1;
			}
		});

		Phaser.Display.Align.In.Center(this.num1, this.block1);
		Phaser.Display.Align.In.Center(this.num2, this.block2);
		Phaser.Display.Align.In.Center(this.num3, this.block3);
		Phaser.Display.Align.In.Center(this.num4, this.block4);
		Phaser.Display.Align.In.Center(this.num5, this.block5);
		Phaser.Display.Align.In.Center(this.numPlayer, this.player, 0, -55);
		Phaser.Display.Align.In.Center(this.bubbleNumber, this.bubble);
	}
}
