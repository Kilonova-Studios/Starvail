import Audio from "../Audio.js";

//escena que carga todos los recursos para el juego
export default class SceneLoading extends Phaser.Scene {
  constructor() {
    super("SceneLoading");
  }

  preload(){
    //IMAGES, SPRITES, SPRITESHEETS

    //MENUS
    //this.load.image('menuBETABackground', 'assets/ilustracionBETA.png');
    this.load.image('menuBackground', 'assets/ilustracion.png');
    this.load.image('endBackground', 'assets/HUD/scorescreen_background.png');
    this.load.image('white_rectangle', 'assets/white_rectangle.png');

    //Score menu
    this.load.image('ScoreScreen', 'assets/Score screen menu/Botones Score.png'); //field
    //this.load.image('ScoreScreenReview', 'assets/Score screen menu/Botones Score Review.png'); //field + review
    this.load.image('btnExitScore', 'assets/Score screen menu/btnExitScoreMenu.png'); //btn exit
    this.load.image('btnCreditsScore', 'assets/Score screen menu/btnCreditsScoreMenu.png'); //btn credits
    this.load.image('btnRankingScore', 'assets/Score screen menu/btnRankingScoreMenu.png'); //btn ranking
    //this.load.image('btnReviewScore', 'assets/Score screen menu/btnReviewScoreMenu.png'); //btn review

    //GENERAL MENU RESOURCES
    this.load.image('btnExit', 'assets/btnExit.png');
    this.load.image('btnSkip', 'assets/boton SKIP.png'); //btn skip tutorial
    this.load.image('btnBack', 'assets/btnBack.png');

    //Credits menu
    this.load.image('RankingScreen', 'assets/Ranking menu/Botones Ranking.png'); //field
    //this.load.image('btnExitRanking', 'assets/Ranking menu/btnExitRanking.png'); //btn exit

    //PlayerName Menu
    this.load.image('playerNameImg', 'assets/PlayerName/boton PLAYER NAME.png'); //btn exit

    //Pause menu
    this.load.image('btnResumeGamePause', 'assets/Pause menu/btnResumePauseMenu.png'); //btn resume
    this.load.image('btnOptionsGame', 'assets/Pause menu/btnOptionsPauseMenu.png'); //btn options
    this.load.image('btnExitPause', 'assets/Pause menu/btnExitPauseMenu.png'); //btn exit

    //Options menu
    //this.load.image('btnExitOptionsMM', 'assets/Options menu/btnExitOptionsMenu.png'); //btn exit

    //Options menu
    //this.load.image('btnExitOptionsGame', 'assets/Options menu/btnExitOptionsMenu.png'); //btn exit

    //Main menu
    this.load.image('btnStart', 'assets/Main menu/btnStartMainMenu.png'); //btn start
    this.load.image('btnCredits', 'assets/Main menu/btnCreditsMainMenu.png'); //btn credits
    this.load.image('btnOptions', 'assets/Main menu/btnOptionsMainMenu.png'); //btn options

    //Credits menu
    this.load.image('CreditsScreen', 'assets/Credits menu/CMScreen.png'); //field
    //this.load.image('btnExitCredits', 'assets/Credits menu/btnExitCredits.png'); //btn exit
    this.load.image('btnContacto', 'assets/Credits menu/Boton contacto.png'); //btn linkedin

    //Credits menu
    this.load.image('CreditsScoreScreen', 'assets/Credits menu/CMScreen.png'); //field
    //this.load.image('btnExitCreditsScore', 'assets/Credits menu/btnExitCredits.png'); //btn exit
    this.load.image('btnContactoScore', 'assets/Credits menu/Boton contacto.png'); //btn linkedin

    //Game over menu
    this.load.image('GOScreen', 'assets/Game over menu/GOScreen.png');
    //this.load.image('btnExitGameOver', 'assets/Game over menu/btnExitGameOver.png'); //btn exit
    this.load.image('btnPlayAgainGameOver','assets/Game over menu/btnPlayAgainGameOver.png'); //btn play again

    this.load.image('btnPause', 'assets/BtnPauseGame.png'); //btn pause
    //MENUS

    //PLAYER
    this.load.image('square', 'assets/square.jpg');
    this.load.spritesheet('crosshair', 'assets/HUD/crosshair.png', { frameWidth: 64, frameHeight: 64 });

    //HUD
    //this.load.image('hpBarHUD', 'assets/HUD/hpBar.png');
    this.load.image('hpBarHUD', 'https://i.postimg.cc/Vvx03mGX/hpbar.png');

    //this.load.image('energyBarHUD', 'assets/HUD/energyBar.png');
    this.load.image('energyBarHUD', 'https://i.postimg.cc/VsFDyTmn/energybar.png');

    //this.load.image('hpBarFillHUD', 'assets/HUD/hpBarFill.png');
    this.load.image('hpBarFillHUD', 'https://i.postimg.cc/V5P5K4vR/hpbar-Fill.png');

    //this.load.image('energyBarFillHUD', 'assets/HUD/energyBarFill.png');
    this.load.image('energyBarFillHUD', 'https://i.postimg.cc/v8NrrdzY/energybar-Fill.png');

    this.load.image('textNext', 'assets/HUD/textNext.png');
    this.load.image('weaponHUD0', 'assets/HUD/weaponselect_current.png');
    this.load.image('weaponHUD1', 'assets/HUD/weaponselect_left1.png');
    this.load.image('weaponHUD2', 'assets/HUD/weaponselect_up1.png');
    this.load.image('weaponHUD3', 'assets/HUD/weaponselect_left2.png');
    this.load.image('weaponHUD4', 'assets/HUD/weaponselect_up2.png');
    this.load.image('decoHUD1', 'assets/HUD/deco1.png');
    this.load.image('decoHUD2', 'assets/HUD/deco2.png');
    //HUD

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
    //META
    this.load.spritesheet('goalVFX', 'assets/Sprites/VFX/goal_100X100_120.png', { frameWidth: 100, frameHeight: 100 });
    //META

    //BOSS
    this.load.spritesheet('bossRun', 'assets/Sprites/Boss/boss_run.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('bossIdle', 'assets/Sprites/Boss/boss_idle.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('bossAirUp', 'assets/Sprites/Boss/boss_moveup.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('bossAirIdle', 'assets/Sprites/Boss/boss_flyidle.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('bossAirMove', 'assets/Sprites/Boss/boss_movefly.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('bossAirDown', 'assets/Sprites/Boss/boss_movedown.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('bossDeath', 'assets/Sprites/Boss/boss_death.png', { frameWidth: 64, frameHeight: 64 });

    this.load.image('bossFireArm', 'assets/Sprites/Boss/boss_FireArm.png', { frameWidth: 32, frameHeight: 64 });

    this.load.spritesheet('mentorRun', 'assets/Sprites/Boss/boss_run_withgun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('mentorIdle', 'assets/Sprites/Boss/boss_idle_withgun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('mentorAirUp', 'assets/Sprites/Boss/boss_moveup_withgun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('mentorAirIdle', 'assets/Sprites/Boss/boss_flyidle_withgun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('mentorAirMove', 'assets/Sprites/Boss/boss_movefly_withgun.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('mentorAirDown', 'assets/Sprites/Boss/boss_movedown_withgun.png', { frameWidth: 64, frameHeight: 64 });
    //BOSS

    //EFCTOS FIN JUEGO
    this.load.spritesheet('kilonova1', 'assets/Sprites/VFX/kilonova_400X400_95_1.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('kilonova2', 'assets/Sprites/VFX/kilonova_400X400_95_2.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('kilonova3', 'assets/Sprites/VFX/kilonova_400X400_95_3.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('kilonova4', 'assets/Sprites/VFX/kilonova_400X400_95_4.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('kilonova5', 'assets/Sprites/VFX/kilonova_400X400_95_5.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('kilonova6', 'assets/Sprites/VFX/kilonova_400X400_95_6.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('kilonova7', 'assets/Sprites/VFX/kilonova_400X400_95_7.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('kilonova8', 'assets/Sprites/VFX/kilonova_400X400_95_8.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('kilonova9', 'assets/Sprites/VFX/kilonova_400X400_95_9.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('kilonova10', 'assets/Sprites/VFX/kilonova_400X400_95_10_5fps.png', { frameWidth: 400, frameHeight: 400 });

    this.load.spritesheet('darkHole1', 'assets/Sprites/VFX/dark_hole_400X400_135_1_12fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('darkHole2', 'assets/Sprites/VFX/dark_hole_400X400_135_2_12fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('darkHole3', 'assets/Sprites/VFX/dark_hole_400X400_135_3_12fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('darkHole4', 'assets/Sprites/VFX/dark_hole_400X400_135_4_12fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('darkHole5', 'assets/Sprites/VFX/dark_hole_400X400_135_5_12fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('darkHole6', 'assets/Sprites/VFX/dark_hole_400X400_135_6_12fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('darkHole7', 'assets/Sprites/VFX/dark_hole_400X400_135_7_12fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('darkHole8', 'assets/Sprites/VFX/dark_hole_400X400_135_8_12fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('darkHole9', 'assets/Sprites/VFX/dark_hole_400X400_135_9_12fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('darkHole10', 'assets/Sprites/VFX/dark_hole_400X400_135_10_12fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('darkHole11', 'assets/Sprites/VFX/dark_hole_400X400_135_11_12fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('darkHole12', 'assets/Sprites/VFX/dark_hole_400X400_135_12_8fps.png', { frameWidth: 400, frameHeight: 400 });

    this.load.spritesheet('pulsar1', 'assets/Sprites/VFX/pulsar_400X400_60_1_8fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('pulsar2', 'assets/Sprites/VFX/pulsar_400X400_60_2_8fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('pulsar3', 'assets/Sprites/VFX/pulsar_400X400_60_3_8fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('pulsar4', 'assets/Sprites/VFX/pulsar_400X400_60_4_8fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('pulsar5', 'assets/Sprites/VFX/pulsar_400X400_60_5_8fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('pulsar6', 'assets/Sprites/VFX/pulsar_400X400_60_6_8fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('pulsar7', 'assets/Sprites/VFX/pulsar_400X400_60_7_8fps.png', { frameWidth: 400, frameHeight: 400 });
    this.load.spritesheet('pulsar8', 'assets/Sprites/VFX/pulsar_400X400_60_8_4fps.png', { frameWidth: 400, frameHeight: 400 });
    //EFCTOS FIN JUEGO

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
    this.load.spritesheet('gunner', 'assets/Sprites/Enemies/DroidGunner/Droid_gunner.png', { frameWidth: 60, frameHeight: 40 });
    //AIR

    //this.load.spritesheet('enemyExplosion', 'assets/Sprites/VFX/enemy_death_80x80_74.png', { frameWidth: 80, frameHeight: 80 });
    //this.load.spritesheet('enemyExplosion', 'https://i.postimg.cc/vm5bG9Y1/enemy-death-80-X80-74.png', { frameWidth: 80, frameHeight: 80 });
    this.load.spritesheet('enemyExplosion', 'assets/enemyExplosion.png', { frameWidth: 80, frameHeight: 80 });
    //ENEMIGOS

    //NPC
    this.load.spritesheet('npc1', 'assets/Sprites/NPC/npc1_idle.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('npc2', 'assets/Sprites/NPC/npc2_idle.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('npc3', 'assets/Sprites/NPC/npc3_idle.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('npc4', 'assets/Sprites/NPC/npc4_idle.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('npc5', 'assets/Sprites/NPC/npc5_idle.png', { frameWidth: 64, frameHeight: 64 });
    //NPC

    //INTERACTABLES
    this.load.spritesheet('drop', 'assets/Sprites/Drops/Drops.png', { frameWidth: 20, frameHeight: 20 });
    this.load.spritesheet('chest', 'assets/Sprites/Chest/Chest.png', { frameWidth: 64, frameHeight: 64 });
    //INTERACTABLES

    this.load.image('bg1', 'assets/Backgrounds/background0.png');
    this.load.image('bg2', 'assets/Backgrounds/background1.png');
    this.load.image('bg3', 'assets/Backgrounds/background2.png');
    this.load.spritesheet('animatedBg', 'assets/Backgrounds/dirty_sky.png', { frameWidth: 1100, frameHeight: 700 });
    this.load.image('moon', 'assets/Backgrounds/moon.png');

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
    //this.load.spritesheet('bombExplosion', 'assets/Sprites/VFX/bomb_explosion_80x80_77.png', { frameWidth: 80, frameHeight: 80 });

    //this.load.spritesheet('megatonExplosion', 'assets/Sprites/VFX/megaton_explosion_100x100_51.png', { frameWidth: 100, frameHeight: 100 })
    //this.load.spritesheet('megatonExplosion', 'https://i.postimg.cc/SN5h8Vj2/megaton-explosion-100-X100-51.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('megatonExplosion', 'assets/megaton.png', { frameWidth: 100, frameHeight: 100 })

    //this.load.spritesheet('missileExplosion', 'assets/Sprites/VFX/missil_explosion_100x100_75.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('smoke', 'assets/Sprites/Explosions/smoke.png', { frameWidth: 133, frameHeight: 160 });
    //this.load.spritesheet('smoke', 'assets/Sprites/Explosions/laser_smoke.png', { frameWidth: 100, frameHeight: 100 });

    this.load.spritesheet('laserNonLethal', 'assets/Sprites/Bullet/laser_nonletal.png', { frameWidth: 960, frameHeight: 32 }); //62
    this.load.spritesheet('laserLethal', 'assets/Sprites/Bullet/laser_letal.png', { frameWidth: 960, frameHeight: 32 }); //42*/

    //preload del joystick
    this.load.plugin('rexvirtualjoystickplugin', 'src/rexvirtualjoystickplugin.min.js', true);
    this.load.plugin('rexdragplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexdragplugin.min.js', true);
    this.load.image('arrow', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow.png');

    this.load.image('nextPage', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png');

  }

  create(){
    //BG ANIMADO
    this.anims.create({
        key: 'bgAnimation',
        frames: this.anims.generateFrameNumbers('animatedBg', { start: 0, end: 3 }),
        frameRate: 0.35,
        repeat: -1
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
        frameRate: 12,
        repeat: -1
    });
    this.anims.create({
        key: 'fire_moveup',
        frames: this.anims.generateFrameNumbers('fire_moveup', { start: 0, end: 2 }),
        frameRate: 12,
        repeat: -1
    });
    this.anims.create({
        key: 'fire_movedown',
        frames: this.anims.generateFrameNumbers('fire_movedown', { start: 0, end: 2 }),
        frameRate: 12,
        repeat: -1
    });
    this.anims.create({
        key: 'fire_fly',
        frames: this.anims.generateFrameNumbers('fire_fly', { start: 0, end: 2 }),
        frameRate: 12,
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
            key: 'enemyExplosion',
            frames: this.anims.generateFrameNumbers('enemyExplosion', { start: 0, end: 73 }),
            frameRate: 45,
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

    /*this.anims.create({
            key: 'bombExplosion',
            frames: this.anims.generateFrameNumbers('bombExplosion', { start: 0, end: 76 }),
            frameRate: 1000,
            repeat: 0
        });*/

    this.anims.create({
            key: 'megatonExplosion',
            frames: this.anims.generateFrameNumbers('megatonExplosion', { start: 0, end: 50 }),
            frameRate: 35,
            repeat: 0
        });

    /*this.anims.create({
            key: 'missileExplosion',
            frames: this.anims.generateFrameNumbers('missileExplosion', { start: 0, end: 74 }),
            frameRate: 35,
            repeat: 0
        });*/

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
            frames: this.anims.generateFrameNumbers('smoke', { start: 0, end: 20 }),
            frameRate: 17,
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

    //META
    this.anims.create({
        key: 'goalVFX',
        frames: this.anims.generateFrameNumbers('goalVFX', { start: 0, end: 119 }),
        frameRate: 5,
        repeat: -1
    });
    //META

    //CHEST
    this.anims.create({
        key: 'chestClosed',
        frames: this.anims.generateFrameNumbers('chest', { start: 0, end: 1 }),
        frameRate: 4,
        repeat: -1
    });
    this.anims.create({
        key: 'chestOpen',
        frames: this.anims.generateFrameNumbers('chest', { start: 2, end: 3 }),
        frameRate: 4,
        repeat: -1
    });
    //CHEST

    //BOSS
    this.anims.create({
        key: 'wRightBoss',
        frames: this.anims.generateFrameNumbers('bossRun', { start: 0, end: 7 }),
        frameRate: 14,
        repeat: -1
    });
    this.anims.create({
        key: 'idleBoss',
        frames: this.anims.generateFrameNumbers('bossIdle', { start: 0, end: 6 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'propulsionBoss',
        frames: this.anims.generateFrameNumbers('bossAirUp', { start: 0, end: 1 }),
        frameRate: 20,
        repeat: 0
    });
    this.anims.create({
        key: 'airIdleBoss',
        frames: this.anims.generateFrameNumbers('bossAirIdle', { start: 0, end: 6 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'airUpBoss',
        frames: this.anims.generateFrameNumbers('bossAirUp', { start: 1, end: 1 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'airMoveBoss',
        frames: this.anims.generateFrameNumbers('bossAirMove', { start: 0, end: 0 }),
        frameRate: 1,
        repeat: -1
    });
    this.anims.create({
        key: 'airDownBoss',
        frames: this.anims.generateFrameNumbers('bossAirDown', { start: 0, end: 0 }),
        frameRate: 1,
        repeat: -1
    });



    this.anims.create({
        key: 'wRightMentor',
        frames: this.anims.generateFrameNumbers('mentorRun', { start: 0, end: 7 }),
        frameRate: 14,
        repeat: -1
    });
    this.anims.create({
        key: 'idleMentor',
        frames: this.anims.generateFrameNumbers('mentorIdle', { start: 0, end: 6 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'propulsionMentor',
        frames: this.anims.generateFrameNumbers('mentorAirUp', { start: 0, end: 1 }),
        frameRate: 20,
        repeat: 0
    });
    this.anims.create({
        key: 'airIdleMentor',
        frames: this.anims.generateFrameNumbers('mentorAirIdle', { start: 0, end: 6 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'airUpMentor',
        frames: this.anims.generateFrameNumbers('mentorAirUp', { start: 1, end: 1 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'airMoveMentor',
        frames: this.anims.generateFrameNumbers('mentorAirMove', { start: 0, end: 0 }),
        frameRate: 1,
        repeat: -1
    });
    this.anims.create({
        key: 'airDownMentor',
        frames: this.anims.generateFrameNumbers('mentorAirDown', { start: 0, end: 0 }),
        frameRate: 1,
        repeat: -1
    });
    //BOSS

    //EFECTOS FIN JUEGO
    this.bigAnimationFrames = this.anims.generateFrameNumbers('kilonova1', { start: 0, end: 9 });
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('kilonova2', { start: 0, end: 9 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('kilonova3', { start: 0, end: 9 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('kilonova4', { start: 0, end: 9 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('kilonova5', { start: 0, end: 9 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('kilonova6', { start: 0, end: 9 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('kilonova7', { start: 0, end: 9 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('kilonova8', { start: 0, end: 9 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('kilonova9', { start: 0, end: 9 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('kilonova10', { start: 0, end: 4 }));
    this.anims.create({
        key: 'kilonova',
        frames: this.bigAnimationFrames,
        frameRate: 7,
        repeat: -1,
        yoyo: true
    });
    this.bigAnimationFrames = [];

    this.bigAnimationFrames = this.anims.generateFrameNumbers('darkHole1', { start: 0, end: 11 });
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('darkHole2', { start: 0, end: 11 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('darkHole3', { start: 0, end: 11 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('darkHole4', { start: 0, end: 11 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('darkHole5', { start: 0, end: 11 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('darkHole6', { start: 0, end: 11 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('darkHole7', { start: 0, end: 11 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('darkHole8', { start: 0, end: 11 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('darkHole9', { start: 0, end: 11 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('darkHole10', { start: 0, end: 11 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('darkHole11', { start: 0, end: 11 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('darkHole12', { start: 0, end: 7 }));
    this.anims.create({
        key: 'darkHole',
        frames: this.bigAnimationFrames,
        frameRate: 7,
        repeat: -1
    });
    this.bigAnimationFrames = [];

    this.bigAnimationFrames = this.anims.generateFrameNumbers('pulsar1', { start: 0, end: 7 });
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('pulsar2', { start: 0, end: 7 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('pulsar3', { start: 0, end: 7 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('pulsar4', { start: 0, end: 7 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('pulsar5', { start: 0, end: 7 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('pulsar6', { start: 0, end: 7 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('pulsar7', { start: 0, end: 7 }));
    this.bigAnimationFrames = this.bigAnimationFrames.concat(this.anims.generateFrameNumbers('pulsar8', { start: 0, end: 3 }));
    this.anims.create({
        key: 'pulsar',
        frames: this.bigAnimationFrames,
        frameRate: 25,
        repeat: -1
    });
    this.bigAnimationFrames = [];
    //EFECTOS FIN JUEGO

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
        key: 'gunnerFire',
        frames: this.anims.generateFrameNumbers('gunner', { start: 0, end: 2 }),
        frameRate: 8,
        repeat: 1,
        yoyo: true
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

    //NPC
    this.anims.create({
        key: 'npc1',
        frames: this.anims.generateFrameNumbers('npc1', { start: 0, end: 5 }),
        frameRate: 4.75,
        repeat: -1
    });
    this.anims.create({
        key: 'npc2',
        frames: this.anims.generateFrameNumbers('npc2', { start: 0, end: 5 }),
        frameRate: 4.75,
        repeat: -1
    });
    this.anims.create({
        key: 'npc3',
        frames: this.anims.generateFrameNumbers('npc3', { start: 0, end: 5 }),
        frameRate: 4.75,
        repeat: -1
    });
    this.anims.create({
        key: 'npc4',
        frames: this.anims.generateFrameNumbers('npc4', { start: 0, end: 5 }),
        frameRate: 4.75,
        repeat: -1
    });
    this.anims.create({
        key: 'npc5',
        frames: this.anims.generateFrameNumbers('npc5', { start: 0, end: 5 }),
        frameRate: 4.75,
        repeat: -1
    });
    //NPC

    console.log("Done Loading Everything");
    if(this.game.spashScreen != undefined)
      this.game.spashScreen.finishedLoading();
    this.scene.stop('SceneLoading');

  }
}
