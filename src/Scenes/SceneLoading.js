//escena que carga todos los recursos para el juego
export default class SceneLoading extends Phaser.Scene {
  constructor() {
    super("SceneLoading");
  }

  preload(){
    //IMAGES, SPRITES, SPRITESHEETS

    //MENUS
    //Splash menu
    this.load.image('btnTitle', 'assets/lowResLogo.png');
    this.load.image('corners', 'assets/Menu corners.png');

    //Score menu
    this.load.image('ScoreScreen', 'assets/Score screen menu/Botones Score.png'); //field
    this.load.image('btnExitScore', 'assets/Score screen menu/btnExitScoreMenu.png'); //btn exit
    this.load.image('btnCreditsScore', 'assets/Score screen menu/btnCreditsScoreMenu.png'); //btn credits
    this.load.image('btnRankingScore', 'assets/Score screen menu/btnRankingScoreMenu.png'); //btn ranking

    //Credits menu
    this.load.image('RankingScreen', 'assets/Ranking menu/Botones Ranking.png'); //field
    this.load.image('btnExitRanking', 'assets/Ranking menu/btnExitRanking.png'); //btn exit

    //Pause menu
    this.load.image('PauseScreen', 'assets/Pause menu/Botones Mpausa.png'); //field
    this.load.image('btnResumeGamePause', 'assets/Pause menu/btnResumePauseMenu.png'); //btn resume
    this.load.image('btnOptionsGame', 'assets/Pause menu/btnOptionsPauseMenu.png'); //btn options
    this.load.image('btnExitPause', 'assets/Pause menu/btnExitPauseMenu.png'); //btn exit

    //Options menu
    this.load.image('OptionsScreen', 'assets/Options menu/OMScreen.png'); //field
    this.load.image('btnExitOptionsMM', 'assets/Options menu/btnExitOptionsMenu.png'); //btn exit
    this.load.image('btnMinus', 'assets/Options menu/btnMinusOptionsMenu.png'); //btn minus
    this.load.image('btnMusic', 'assets/Options menu/btnMusicOptionsMenu.png'); //btn music
    this.load.image('btnPlus', 'assets/Options menu/btnPlusOptionsMenu.png'); //btn plus
    this.load.image('btnSFX', 'assets/Options menu/btnSFXOptionsMenu.png'); //btn sfx

    //Options menu
    this.load.image('OptionsScreenGame', 'assets/Options menu/OMScreen.png'); //field
    this.load.image('btnExitOptionsGame', 'assets/Options menu/btnExitOptionsMenu.png'); //btn exit

    //Main menu
    this.load.image('MMScreen', 'assets/Main menu/MMScreen.png'); //field
    this.load.image('btnStart', 'assets/Main menu/btnStartMainMenu.png'); //btn start
    this.load.image('btnCredits', 'assets/Main menu/btnCreditsMainMenu.png'); //btn credits
    this.load.image('btnOptions', 'assets/Main menu/btnOptionsMainMenu.png'); //btn options

    //Credits menu
    this.load.image('CreditsScreen', 'assets/Credits menu/CMScreen.png'); //field
    this.load.image('btnExitCredits', 'assets/Credits menu/btnExitCredits.png'); //btn exit
    this.load.image('btnLinkedin', 'assets/Credits menu/Boton linkedin.png'); //btn linkedin

    //Credits menu
    this.load.image('CreditsScoreScreen', 'assets/Credits menu/CMScreen.png'); //field
    this.load.image('btnExitCreditsScore', 'assets/Credits menu/btnExitCredits.png'); //btn exit
    this.load.image('btnLinkedinScore', 'assets/Credits menu/Boton linkedin.png'); //btn linkedin

    //Game over menu
    this.load.image('GOScreen', 'assets/Game over menu/GOScreen.png'); //field
    this.load.image('btnExitGameOver', 'assets/Game over menu/btnExitGameOver.png'); //btn exit
    this.load.image('btnPlayAgainGameOver','assets/Game over menu/btnPlayAgainGameOver.png'); //btn play again

    this.load.image('btnPause', 'assets/BtnPauseGame.png'); //btn pause
    //MENUS

    //PLAYER
    this.load.image('square', 'assets/square.jpg');
    this.load.image('star', 'assets/star.png');
    this.load.spritesheet('crosshair', 'assets/HUD/crosshair.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('weaponsHUD', 'assets/HUD/weaponsHUD.png', { frameWidth: 268, frameHeight: 252 });

    this.load.spritesheet('playerRun', 'assets/Sprites/Player/player_run_nogun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('playerIdle', 'assets/Sprites/Player/player_idle_nogun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('playerAirUp', 'assets/Sprites/Player/player_moveup_nogun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('playerAirIdle', 'assets/Sprites/Player/player_flyidle_nogun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('playerAirMove', 'assets/Sprites/Player/player_movefly_nogun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('playerAirDown', 'assets/Sprites/Player/player_movedown_nogun.png', { frameWidth: 64, frameHeight: 64 });

    this.load.spritesheet('arm_playerRun', 'assets/Sprites/Player/player_run_onlygun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('arm_playerIdle', 'assets/Sprites/Player/player_idle_onlygun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('arm_playerAirUp', 'assets/Sprites/Player/player_moveup_onlygun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('arm_playerAirIdle', 'assets/Sprites/Player/player_flyidle_onlygun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('arm_playerAirMove', 'assets/Sprites/Player/player_movefly_onlygun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('arm_playerAirDown', 'assets/Sprites/Player/player_movedown_onlygun.png', { frameWidth: 64, frameHeight: 64 });

    this.load.spritesheet('fire_fly', 'assets/Sprites/Fire/fire_fly.png', { frameWidth: 64, frameHeight: 75 });
    this.load.spritesheet('fire_idle', 'assets/Sprites/Fire/fire_idle.png', { frameWidth: 64, frameHeight: 75 });
    this.load.spritesheet('fire_movedown', 'assets/Sprites/Fire/fire_movedown.png', { frameWidth: 64, frameHeight: 75 });
    this.load.spritesheet('fire_moveup', 'assets/Sprites/Fire/fire_moveup.png', { frameWidth: 64, frameHeight: 75 });

    this.load.spritesheet('playerDeath', 'assets/Sprites/Player/player_death.png', { frameWidth: 64, frameHeight: 64 });

    this.load.image('playerFireArm', 'assets/Sprites/Player/player_FireArm.png', { frameWidth: 32, frameHeight: 64 });
    //PLAYER

    //this.load.spritesheet('dummy', 'assets/Sprites/Enemies/dummy.png', { frameWidth: 35, frameHeight: 44 });

    //ENEMIGOS
    //GROUND
    this.load.spritesheet('zapperGround', 'assets/Sprites/Enemies/DroidZapper/DroidZapper.png', { frameWidth: 100, frameHeight: 45 });
    this.load.spritesheet('hero', 'assets/Sprites/Enemies/DroidHero/DroidHero.png', { frameWidth: 96, frameHeight: 63 });
    this.load.spritesheet('mecha', 'assets/Sprites/Enemies/DroidMecha/DroidMecha.png', { frameWidth: 144, frameHeight: 60 }); //la cosa se pone interesante!
    this.load.spritesheet('gun', 'assets/Sprites/Enemies/gun.png', { frameWidth: 37, frameHeight: 7 });
    this.load.spritesheet('sith', 'assets/Sprites/Enemies/assassin/assassin.png', { frameWidth: 144, frameHeight: 107 });
    //GROUND

    //AIR
    this.load.spritesheet('zapperAir1', 'assets/Sprites/Enemies/DroidZapperAir/dronmove.png', { frameWidth: 91, frameHeight: 60 });
    this.load.spritesheet('zapperAir2', 'assets/Sprites/Enemies/DroidZapperAir/attack.png', { frameWidth: 91, frameHeight: 60 });
    this.load.spritesheet('bomb', 'assets/Sprites/Enemies/DroidBomb/Homing2.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('gunner', 'assets/Sprites/Enemies/DroidGunner/Gunner.png', { frameWidth: 60, frameHeight: 40 });
    //AIR
    //ENEMIGOS

    //INTERACTABLES
    this.load.spritesheet('drop', 'assets/Sprites/Drops/Drops.png', { frameWidth: 20, frameHeight: 20 });
    this.load.spritesheet('chest', 'assets/Sprites/Chest/Chest.png', { frameWidth: 64, frameHeight: 64 });
    //INTERACTABLES

    this.load.image('bg_e', 'assets/Backgrounds/Sky/SkyBG.png');
    this.load.image('bg1_e', 'assets/Backgrounds/Sky/CloudsFar.png');
    this.load.image('bg2_e', 'assets/Backgrounds/Sky/CloudsMid.png');
    this.load.image('bg3_e', 'assets/Backgrounds/Sky/CloudsClose.png');
    this.load.spritesheet('animatedBg', 'assets/animatedBgTest.png', { frameWidth: 631, frameHeight: 148 });

    //Tilesets de niveles y mapas de niveles
    this.load.image("tilesBackgorund1", "assets/Tilesets/level1_tiles/background_layer.png");
    this.load.image("tilesFront1", "assets/Tilesets/level1_tiles/front_layer.png");
    this.load.image("tilesMain1", "assets/Tilesets/level1_tiles/main_layer.png");
    this.load.image("tilesSecond1", "assets/Tilesets/level1_tiles/second_layer.png");

    this.load.image("tilesBackgorund2", "assets/Tilesets/level2_tiles/background_layer.png");
    this.load.image("tilesFront2", "assets/Tilesets/level2_tiles/front_layer.png");
    this.load.image("tilesMain2", "assets/Tilesets/level2_tiles/main_layer.png");
    this.load.image("tilesSecond2", "assets/Tilesets/level2_tiles/second_layer.png");

    this.load.image("tilesBackgorund3", "assets/Tilesets/level3_tiles/background_layer.png");
    this.load.image("tilesFront3", "assets/Tilesets/level3_tiles/front_layer.png");
    this.load.image("tilesMain3", "assets/Tilesets/level3_tiles/main_layer.png");
    this.load.image("tilesSecond3", "assets/Tilesets/level3_tiles/second_layer.png");

    this.load.image("animatedLayer1", "assets/Tilesets/animated_layer.png");

    /*implementar variaciones de nivel aqui*/

    this.load.tilemapTiledJSON("map1", "assets/Mapas/Level1.json");
    this.load.tilemapTiledJSON("map2", "assets/Mapas/Level2.json");
    this.load.tilemapTiledJSON("map3", "assets/Mapas/Level3.json");
    this.load.tilemapTiledJSON("map4", "assets/Mapas/FinalLevel.json");
    this.load.tilemapTiledJSON("map0", "assets/Mapas/Tutorial.json");
    this.load.tilemapTiledJSON("mapTest", "assets/Mapas/Level1Simple.json");


    this.load.image('bullet1', 'assets/Sprites/Bullet/bullet1.png');
    this.load.image('bullet2', 'assets/Sprites/Bullet/bullet2.png');
    this.load.image('bullet3', 'assets/Sprites/Bullet/bullet3.png');
    this.load.image('missile', 'assets/Sprites/Bullet/missile.png');
    this.load.spritesheet('bullets', 'assets/Sprites/Bullet/bullets.png', { frameWidth: 15, frameHeight: 15 });
    this.load.spritesheet('laser', 'assets/Sprites/Bullet/laser.png', { frameWidth: 18, frameHeight: 600 });
    this.load.spritesheet('explodingBomb', 'assets/Sprites/Bomb/bomb_ss.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('bulletImpact', 'assets/Sprites/Impacts/expansive_100x100px.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('bulletImpact2', 'assets/Sprites/Impacts/big_directional_100x100px.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('bulletImpact3', 'assets/Sprites/Impacts/fast_100x100px.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('bulletImpact4', 'assets/Sprites/Impacts/full_100x100px.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('bulletImpact5', 'assets/Sprites/Impacts/clean4_100x100px.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('explosion', 'assets/Sprites/Explosions/explosion-6.png', { frameWidth: 48, frameHeight: 48 });
    //this.load.spritesheet('smoke', 'assets/Sprites/Explosions/smoke.png', { frameWidth: 133, frameHeight: 160 });
    this.load.spritesheet('smoke', 'assets/Sprites/Explosions/laser_smoke.png', { frameWidth: 100, frameHeight: 100 });

    this.load.spritesheet('laserNonLethal', 'assets/Sprites/Bullet/laser_nonletal.png', { frameWidth: 960, frameHeight: 32 }); //62
    this.load.spritesheet('laserLethal', 'assets/Sprites/Bullet/laser_letal.png', { frameWidth: 960, frameHeight: 32 }); //42*/

    //preload del joystick
    this.load.plugin('rexvirtualjoystickplugin', 'src/rexvirtualjoystickplugin.min.js', true);
    this.load.plugin('rexdragplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexdragplugin.min.js', true);
    this.load.image('arrow', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow.png');

    this.load.image('nextPage', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png');

  }

  create(){
    console.log(this);

    //BG ANIMADO
    this.anims.create({
        key: 'bgAnimation',
        frames: this.anims.generateFrameNumbers('animatedBg', { start: 0, end: 5 }),
        frameRate: 0.001,
        repeat: 0
    });

    //ANIMS
    this.anims.create({
        key: 'wRight',
        frames: this.anims.generateFrameNumbers('playerRun', { start: 0, end: 7 }),
        frameRate: 14,
        repeat: -1
    });
    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('playerIdle', { start: 0, end: 6 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'propulsion',
        frames: this.anims.generateFrameNumbers('playerAirUp', { start: 0, end: 1 }),
        frameRate: 20,
        repeat: 0
    });
    this.anims.create({
        key: 'airIdle',
        frames: this.anims.generateFrameNumbers('playerAirIdle', { start: 0, end: 6 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'airUp',
        frames: this.anims.generateFrameNumbers('playerAirUp', { start: 1, end: 1 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'airMove',
        frames: this.anims.generateFrameNumbers('playerAirMove', { start: 0, end: 0 }),
        frameRate: 1,
        repeat: -1
    });
    this.anims.create({
        key: 'airDown',
        frames: this.anims.generateFrameNumbers('playerAirDown', { start: 0, end: 0 }),
        frameRate: 1,
        repeat: -1
    });

    //SOLO MANO
    this.anims.create({
        key: 'arm_wRight',
        frames: this.anims.generateFrameNumbers('arm_playerRun', { start: 0, end: 7 }),
        frameRate: 14,
        repeat: -1
    });
    this.anims.create({
        key: 'arm_idle',
        frames: this.anims.generateFrameNumbers('arm_playerIdle', { start: 0, end: 6 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'arm_propulsion',
        frames: this.anims.generateFrameNumbers('arm_playerAirUp', { start: 0, end: 1 }),
        frameRate: 20,
        repeat: 0
    });
    this.anims.create({
        key: 'arm_airIdle',
        frames: this.anims.generateFrameNumbers('arm_playerAirIdle', { start: 0, end: 6 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'arm_airUp',
        frames: this.anims.generateFrameNumbers('arm_playerAirUp', { start: 1, end: 1 }),
        frameRate: 5,
        repeat: 0
    });
    this.anims.create({
        key: 'arm_airMove',
        frames: this.anims.generateFrameNumbers('arm_playerAirMove', { start: 0, end: 0 }),
        frameRate: 1,
        repeat: 0
    });
    this.anims.create({
        key: 'arm_airDown',
        frames: this.anims.generateFrameNumbers('arm_playerAirDown', { start: 0, end: 0 }),
        frameRate: 1,
        repeat: 0
    });

    this.anims.create({
        key: 'fire_idle',
        frames: this.anims.generateFrameNumbers('fire_idle', { start: 0, end: 2 }),
        frameRate: 2,
        repeat: -1
    });
    this.anims.create({
        key: 'fire_moveup',
        frames: this.anims.generateFrameNumbers('fire_moveup', { start: 0, end: 2 }),
        frameRate: 2,
        repeat: -1
    });
    this.anims.create({
        key: 'fire_movedown',
        frames: this.anims.generateFrameNumbers('fire_movedown', { start: 0, end: 2 }),
        frameRate: 2,
        repeat: -1
    });
    this.anims.create({
        key: 'fire_fly',
        frames: this.anims.generateFrameNumbers('fire_fly', { start: 0, end: 2 }),
        frameRate: 2,
        repeat: -1
    });

    //MAS ANIMACIONES PERSONAJE
    this.anims.create({
        key: 'death',
        frames: this.anims.generateFrameNumbers('playerDeath', { start: 0, end: 0 }),
        frameRate: 1,
        repeat: 0
    });

    this.anims.create({
            key: 'eBomb',
            frames: this.anims.generateFrameNumbers('explodingBomb', { start: 0, end: 13 }),
            frameRate: 7,
            repeat: 0
        });

    this.anims.create({
            key: 'explosion',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 7 }),
            frameRate: 12,
            repeat: 0
        });

    this.anims.create({
            key: 'explosion2',
            frames: this.anims.generateFrameNumbers('explosion2', { start: 0, end: 6 }),
            frameRate: 10,
            repeat: 0
        });

    this.anims.create({
            key: 'bulletImpact',
            frames: this.anims.generateFrameNumbers('bulletImpact', { start: 0, end: 13 }),
            frameRate: 1000,
            repeat: 0
        });
    this.anims.create({
            key: 'bulletImpact2',
            frames: this.anims.generateFrameNumbers('bulletImpact2', { start: 0, end: 27 }),
            frameRate: 1000,
            repeat: 0
        });
    this.anims.create({
            key: 'bulletImpact3',
            frames: this.anims.generateFrameNumbers('bulletImpact3', { start: 0, end: 15 }),
            frameRate: 1000,
            repeat: 0
        });
    this.anims.create({
            key: 'bulletImpact4',
            frames: this.anims.generateFrameNumbers('bulletImpact4', { start: 0, end: 26 }),
            frameRate: 1000,
            repeat: 0
        });
    this.anims.create({
            key: 'bulletImpact5',
            frames: this.anims.generateFrameNumbers('bulletImpact5', { start: 0, end: 29 }),
            frameRate: 1000,
            repeat: 0
        });

    this.anims.create({
            key: 'dummy',
            frames: this.anims.generateFrameNumbers('dummy', { start: 0, end: 1 }),
            frameRate: 2,
            repeat: 0
        });

    this.anims.create({
            key: 'laser',
            frames: this.anims.generateFrameNumbers('laser', { start: 0, end: 2 }),
            frameRate: 8,
            yoyo: true,
            repeat: -1
        });

    this.anims.create({
            key: 'smoke',
            frames: this.anims.generateFrameNumbers('smoke', { start: 0, end: 69 }),
            frameRate: 60,
            repeat: -1
        });

    this.anims.create({
        key: 'laserNonLethal',
        frames: this.anims.generateFrameNumbers('laserNonLethal', { start: 0, end: 12}),
        frameRate: 8,
        repeat: 1
    });
    this.anims.create({
        key: 'laserLethal',
        frames: this.anims.generateFrameNumbers('laserLethal', { start: 0, end: 16 }),
        frameRate: 15,
        repeat: 1
    });

    //ENEMIGOS
    this.anims.create({
        key: 'zapperGroundRun',
        frames: this.anims.generateFrameNumbers('zapperGround', { start: 7, end: 12 }),
        frameRate: 8,
        repeat: -1
    });
    this.anims.create({
        key: 'zapperGroundAttack',
        frames: this.anims.generateFrameNumbers('zapperGround', { start: 12, end: 22 }),
        frameRate: 8
    });

    this.anims.create({
        key: 'heroRun',
        frames: this.anims.generateFrameNumbers('hero', { start: 1, end: 6 }),
        frameRate: 8,
        repeat: -1
    });
    this.anims.create({
        key: 'heroAttack',
        frames: this.anims.generateFrameNumbers('hero', { start: 16, end: 36 }),
        frameRate: 10
    });

    this.anims.create({
        key: 'zapperAirMove',
        frames: this.anims.generateFrameNumbers('zapperAir1', { start: 0, end: 4 }),
        frameRate: 8,
        repeat: -1
    });
    this.anims.create({
        key: 'zapperAirAttack',
        frames: this.anims.generateFrameNumbers('zapperAir2', { start: 6, end: 15 }),
        frameRate: 8
    });
    this.anims.create({
        key: 'bombHoming',
        frames: this.anims.generateFrameNumbers('bomb', { start: 0, end: 1 }),
        frameRate: 8,
        repeat: -1
    });

    this.anims.create({
        key: 'mechaIdle',
        frames: this.anims.generateFrameNumbers('mecha', { start: 0, end: 3 }),
        frameRate: 2,
        repeat: -1
    });
    this.anims.create({
        key: 'mechaWalk',
        frames: this.anims.generateFrameNumbers('mecha', { start: 4, end: 9 }),
        frameRate: 6,
        repeat: -1
    });

    this.anims.create({
        key: 'sithRun',
        frames: this.anims.generateFrameNumbers('sith', { start: 12, end: 15}),
        frameRate: 7,
        repeat: -1
    });
    this.anims.create({
        key: 'sithAttack',
        frames: this.anims.generateFrameNumbers('sith', { start: 17, end: 34 }),
        frameRate: 8
    });
    this.anims.create({
        key: 'sithTeleport',
        frames: this.anims.generateFrameNumbers('sith', { start: 35, end: 43 }),
        frameRate: 8
    });
    //ENEMIGOS

    //SI SE QUIEREN TESTEAR MENUS
    //this.scene.start("SceneSplashScreen");

    //SI SE QUIEREN TESTEAR NIVELES
    this.scene.start("levelFirst1");

    //SI SE QUIERE IR AL NIVEL DE PRUEBA
    //this.scene.start("test1");

  }
}
