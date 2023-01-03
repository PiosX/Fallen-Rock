class Title extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}

	preload() {
		localStorage.removeItem("bgc");
		localStorage.removeItem("text");
		localStorage.removeItem("darkerText");
		localStorage.removeItem("playerCol");
		localStorage.removeItem("revText");
		localStorage.removeItem("bbl");
		localStorage.removeItem("levels");
		localStorage.removeItem("block");
		localStorage.removeItem("p");
		localStorage.removeItem("s");
		localStorage.removeItem("scr");
		localStorage.removeItem("t");
		localStorage.removeItem("r");
		localStorage.removeItem("h");
		this.colors();
		this.load.svg("settings", localStorage.getItem("s"));
		this.load.svg("score", localStorage.getItem("scr"));
		this.load.svg("trophy", localStorage.getItem("t"));
		this.load.svg("rock", localStorage.getItem("r"));
		this.load.svg("player", localStorage.getItem("p"));
	}

	create() {
		this.cameras.main.setBackgroundColor(localStorage.getItem("bgc"));
		if (localStorage.getItem("currLevel") == null) {
			localStorage.setItem("currLevel", 1);
		}
		this.make
			.text({
				text: "Fallen",
				style: {
					font: "100 160px Nunito",
					fill: localStorage.getItem("text"),
				},
			})
			.setOrigin(-0.27, -0.6);
		this.make
			.text({
				text: "Rock",
				style: {
					font: "100 96px Nunito",
					fill: localStorage.getItem("text"),
				},
			})
			.setOrigin(-1.06, -2.6);
		this.make
			.text({
				x: config.width / 2,
				y: 45,
				text: "Level " + localStorage.getItem("currLevel"),
				style: {
					font: "800 30px Nunito",
					fill: localStorage.getItem("darkerText"),
				},
			})
			.setOrigin(0.5, 0.5);

		const settings = this.add.image(20, 20, "settings");
		settings.setOrigin(0, 0);
		settings.setDepth(2);
		settings.setInteractive({ cursor: "pointer" });

		this.score = this.add.image(config.width / 2 - 75, 0, "score");
		this.score.setOrigin(0, -10.3);

		this.make
			.text({
				x: config.width / 2 + 30,
				y: config.height / 2 - 40,
				text: localStorage.getItem("scorePoints") || 0,
				style: {
					font: "800 36px Nunito",
					fill: localStorage.getItem("darkerText"),
				},
			})
			.setOrigin(0.5, 0.5);

		const hero = this.add.sprite(
			config.width / 2,
			config.height / 2 + 130,
			"player"
		);
		const start = this.make
			.text({
				text: "Tap to start",
				style: {
					font: "800 24px Nunito",
					fill: localStorage.getItem("text"),
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
		circle.setStrokeStyle(3, localStorage.getItem("block"));
		circle.setOrigin(-1.01, -10.3);
		circle.setDepth(2);
		circle.setInteractive({ cursor: "pointer" });

		const circle2 = this.add.circle(0, 0, 40);
		circle2.setStrokeStyle(3, localStorage.getItem("block"));
		circle2.setOrigin(-6.01, -10.3);
		circle2.setDepth(2);
		circle2.setInteractive({ cursor: "pointer" });

		const trophy = this.add.image(0, 0, "trophy");
		trophy.setOrigin(-2.7, -17.9);

		this.rock = this.add.image(0, 0, "rock");
		this.rock.setOrigin(-11.9, -20);

		circle.on("pointerover", function (event) {
			circle.setStrokeStyle(3, localStorage.getItem("playerCol"));
		});
		circle.on("pointerout", function (event) {
			circle.setStrokeStyle(3, localStorage.getItem("block"));
		});

		circle2.on("pointerover", function (event) {
			circle2.setStrokeStyle(3, localStorage.getItem("playerCol"));
		});
		circle2.on("pointerout", function (event) {
			circle2.setStrokeStyle(3, localStorage.getItem("block"));
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

		setTimeout(() => {
			this.load.start();
		}, 500);
	}

	colors() {
		if (!localStorage.getItem("getNumCol")) {
			this.getNumber = 1;
			localStorage.setItem("getNumCol", this.getNumber);
		}

		switch (parseInt(localStorage.getItem("getNumCol"))) {
			case 1:
				this.colorVariant = {
					bgc: "0xe63946",
					text: "#1e1e1e",
					darkerText: "#000000",
					player: "0xffffff",
					revText: "#ffffff",
					bubble: "#000000",
					levels: "#ffffff",
					block: "0x1e1e1e",
					p: "dist/img/player.svg",
					s: "dist/img/settings.svg",
					score: "dist/img/score.svg",
					t: "dist/img/trophy.svg",
					r: "dist/img/rock.svg",
					h: "dist/img/heart.svg",
				};
				break;
			case 2:
				this.colorVariant = {
					bgc: "0xBFF8D4",
					text: "#10316B",
					darkerText: "#10316B",
					player: "0x1e1e1e",
					revText: "#ffffff",
					bubble: "#ffffff",
					levels: "#1e1e1e",
					block: "0x10316B",
					p: "dist/img/playerV2.svg",
					s: "dist/img/settingsV2.svg",
					score: "dist/img/scoreV2.svg",
					t: "dist/img/trophyV2.svg",
					r: "dist/img/rockV2.svg",
					h: "dist/img/heartV2.svg",
				};
				break;
			case 3:
				this.colorVariant = {
					bgc: "0x141010",
					text: "#FFEE7D",
					darkerText: "#FFEE7D",
					player: "0xE63946",
					revText: "#000000",
					bubble: "#ffffff",
					levels: "#E63946",
					block: "0xFFE537",
					p: "dist/img/playerV3.svg",
					s: "dist/img/settingsV3.svg",
					score: "dist/img/scoreV3.svg",
					t: "dist/img/trophyV3.svg",
					r: "dist/img/rockV3.svg",
					h: "dist/img/heartV3.svg",
				};
				break;
			case 4:
				this.colorVariant = {
					bgc: "0xFCEDDA",
					text: "#EE4E34",
					darkerText: "#EE4E34",
					player: "0x316EDA",
					revText: "#ffffff",
					bubble: "#ffffff",
					levels: "#316EDA",
					block: "0xEE4E34",
					p: "dist/img/playerV4.svg",
					s: "dist/img/settingsV4.svg",
					score: "dist/img/scoreV4.svg",
					t: "dist/img/trophyV4.svg",
					r: "dist/img/rockV4.svg",
					h: "dist/img/heartV4.svg",
				};
				break;
			case 5:
				this.colorVariant = {
					bgc: "0x422790",
					text: "#EDF4F2",
					darkerText: "#EDF4F2",
					player: "0xFFE537",
					revText: "#000000",
					bubble: "#000000",
					levels: "#FFE537",
					block: "0x00FFB6",
					p: "dist/img/playerV5.svg",
					s: "dist/img/settingsV5.svg",
					score: "dist/img/scoreV5.svg",
					t: "dist/img/trophyV5.svg",
					r: "dist/img/rockV5.svg",
					h: "dist/img/heartV5.svg",
				};
				break;
			case 6:
				this.colorVariant = {
					bgc: "0xEBE5E4",
					text: "#8D0852",
					darkerText: "#8D0852",
					player: "0xEE4E34",
					revText: "#ffffff",
					bubble: "#ffffff",
					levels: "#EE4E34",
					block: "0x8D0852",
					p: "dist/img/playerV6.svg",
					s: "dist/img/settingsV6.svg",
					score: "dist/img/scoreV6.svg",
					t: "dist/img/trophyV6.svg",
					r: "dist/img/rockV6.svg",
					h: "dist/img/heartV6.svg",
				};
				break;
			case 7:
				this.colorVariant = {
					bgc: "0xF4B41A",
					text: "#10316B",
					darkerText: "#10316B",
					player: "0x8D0852",
					revText: "#ffffff",
					bubble: "#ffffff",
					levels: "#8D0852",
					block: "0x10316B",
					p: "dist/img/playerV7.svg",
					s: "dist/img/settingsV7.svg",
					score: "dist/img/scoreV7.svg",
					t: "dist/img/trophyV7.svg",
					r: "dist/img/rockV7.svg",
					h: "dist/img/heartV7.svg",
				};
				break;
		}

		localStorage.setItem("bgc", this.colorVariant.bgc);
		localStorage.setItem("text", this.colorVariant.text);
		localStorage.setItem("darkerText", this.colorVariant.darkerText);
		localStorage.setItem("playerCol", this.colorVariant.player);
		localStorage.setItem("revText", this.colorVariant.revText);
		localStorage.setItem("bbl", this.colorVariant.bubble);
		localStorage.setItem("levels", this.colorVariant.levels);
		localStorage.setItem("block", this.colorVariant.block);
		localStorage.setItem("p", this.colorVariant.p);
		localStorage.setItem("s", this.colorVariant.s);
		localStorage.setItem("scr", this.colorVariant.score);
		localStorage.setItem("t", this.colorVariant.t);
		localStorage.setItem("r", this.colorVariant.r);
		localStorage.setItem("h", this.colorVariant.h);
		console.log(localStorage.getItem("s"));
	}
}
