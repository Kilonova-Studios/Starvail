export default class Audio extends Phaser.Scene {
<<<<<<< Updated upstream
  constructor() {
    super("Audio");
  }
  static counter=-1;
  static earlyPos=0.0;
  static musicBar(scene){
    this.counter++;
    //console.log("AUDIO BAR: " + this.counter);
    this.musicLayerShot(scene);
    this.musicLayerJet(scene);
    this.musicLayerMovement(scene);
  }

  static musicLayerHeight(scene){
    var relativeHeight=920;
    var maxVolume=1;
    var volumeNormalized=maxVolume-(scene.game.player.earlyPos.y*(maxVolume/relativeHeight));
    if(volumeNormalized<=1.0 && volumeNormalized >0.0){
        scene.loopFliying.volume=volumeNormalized;
    }
  }

static musicLayerShot(scene){
    if(scene.stingerShot){
        //console.log("AUDIO FIRING LAYER: " + scene.game.player.weaponCounter + " ON.");
      scene.stingerShot=false;
        for(var i=0; i<scene.game.player.weapons.length; i++){
            if(scene.game.player.weaponCounter==i){
                scene.tweens.add({
                    targets:  scene.bgmIfWeapon[i],
                    volume:   1.0,
                    duration: 18.028846,
                });
            }else{
                scene.tweens.add({
                    targets:  scene.bgmIfWeapon[i],
                    volume:   0.0,
                    duration: 18.028846,
                });
            }
        }
    }else{
        //console.log("AUDIO FIRING LAYER: " + scene.game.player.weaponCounter + " OFF.");
        for(var i=0; i<scene.game.player.weapons.length; i++){
            if(scene.bgmIfWeapon[i].volume>0.0){
                scene.tweens.add({
                    targets:  scene.bgmIfWeapon[i],
                    volume:   0.0,
                    duration: 4615.38461,
                });
            }
        }
    }
  }

static musicLayerJet(scene){
    if(scene.stingerJet){
        //console.log("AUDIO JET LAYER: " + scene.game.player.weaponCounter + " OFF.");
        scene.stingerJet=false;
                scene.tweens.add({
                    targets:  scene.loopLevitating,
                    volume:   0.0,
                    duration: 9230.76922,
                });
    }else{
        //console.log("AUDIO JET LAYER: " + scene.game.player.weaponCounter + " ON.");
                scene.tweens.add({
                    targets:  scene.loopLevitating,
                    volume:   1.0,
                    duration: 1153.8461525,
                });
    }
  }

  static musicLayerMovement(scene){
    if(scene.stingerMovement){
        //console.log("AUDIO MOVEMENT LAYER: ON.");
        scene.stingerMovement=false;
                scene.tweens.add({
                    targets:  scene.loopMovement,
                    volume:   1.0,
                    duration: 2307.692305,
                });
    }else{
        //console.log("AUDIO MOVEMENT LAYER: OFF.");
                scene.tweens.add({
                    targets:  scene.loopMovement,
                    volume:   0.0,
                    duration: 2307.692305,
                });
=======
    constructor() {
        super("Audio");
    }
    static counter = -1;
    static earlyPos = 0.0;
    static earlyPropeller = false;
    static vanishingPoint = 600;
    static halfDistance = this.vanishingPoint / 2;
    static bpm = 104;
    static beat = 16;
    static barRate = 60 / this.bpm * this.beat;
    static barRateDiv = [this.barRate / 2, this.barRate / 4, this.barRate / 8, this.barRate / 64];
    static maxVolume = 1.0;
    static load;
    static instances
    static musicBar(scene) {
        this.counter++;
        console.log("AUDIO BAR: " + this.counter);
        this.musicLayerShot(scene);
        this.musicLayerJet(scene);
        this.musicLayerMovement(scene);
    }
    static musicLayerHeight(scene) {
        var volumeNormalized = this.maxVolume - (scene.game.player.earlyPos.y * (this.maxVolume / this.vanishingPoint));
        if (volumeNormalized <= this.maxVolume && volumeNormalized > 0.0) {
            this.load.loopFliying.volume = volumeNormalized;
        }
    }
    static musicLayerShot(scene) {
        if (this.stingerShot) {
            console.log("AUDIO FIRING LAYER: " + scene.game.player.weaponCounter + " ON.");
            this.stingerShot = false;
            for (var i = 0; i < scene.game.player.weapons.length; i++) {
                if (scene.game.player.weaponCounter == i) {
                    scene.tweens.add({
                        targets: this.load.bgmIfWeapon[i],
                        volume: this.maxVolume,
                        duration: this.barRateDiv[3],
                    });
                } else {
                    scene.tweens.add({
                        targets: this.load.bgmIfWeapon[i],
                        volume: 0.0,
                        duration: this.barRateDiv[3],
                    });
                }
            }
        } else {
            console.log("AUDIO FIRING LAYER: " + scene.game.player.weaponCounter + " OFF.");
            for (var i = 0; i < scene.game.player.weapons.length; i++) {
                if (this.load.bgmIfWeapon[i].volume > 0.0) {
                    scene.tweens.add({
                        targets: this.load.bgmIfWeapon[i],
                        volume: 0.0,
                        duration: this.barRateDiv[0],
                    });
                }
            }
        }
    }
    static musicLayerJet(scene) {
        if (this.stingerJet) {
            console.log("AUDIO JET LAYER: " + scene.game.player.weaponCounter + " OFF.");
            this.stingerJet = false;
            scene.tweens.add({
                targets: this.load.loopLevitating,
                volume: 0.0,
                duration: this.barRate,
            });
        } else {
            console.log("AUDIO JET LAYER: " + scene.game.player.weaponCounter + " ON.");
            scene.tweens.add({
                targets: this.load.loopLevitating,
                volume: this.maxVolume,
                duration: this.barRateDiv[2],
            });
        }
    }
    static musicLayerMovement(scene) {
        if (this.stingerMovement) {
            console.log("AUDIO MOVEMENT LAYER: ON.");
            this.stingerMovement = false;
            scene.tweens.add({
                targets: this.load.loopMovement,
                volume: this.maxVolume,
                duration: this.barRateDiv[1],
            });
        } else {
            console.log("AUDIO MOVEMENT LAYER: OFF.");
            scene.tweens.add({
                targets: this.load.loopMovement,
                volume: 0.0,
                duration: this.barRateDiv[1],
            });
        }
>>>>>>> Stashed changes
    }
    static distancePlayRate(scene, audio, rate) {
        var distance= (this.vanishingPoint - scene.distanceToPlayer()) / this.vanishingPoint;
        if (distance < 0.0) {
            distance = 0.0;
        }
        audio.volume = distance;;
        audio.play();
        audio.setRate(rate);
    }
    static playRate(audio, rate) {
        audio.play();
        audio.setRate(rate);
    }
    static musicUpdate(scene) {
        this.musicLayerHeight(scene);
        this.propellerFliying(scene);
        if (scene.game.isFiring && !this.stingerShot) {
            this.stingerShot = true;
        }
        if (scene.game.player.isTouching.ground && !this.stingerJet) {
            this.stingerJet = true;
        }
        if (Math.floor(scene.game.player.earlyPos.x) != Math.floor(this.earlyPos)) {
            this.earlyPos = Math.floor(scene.game.player.earlyPos.x);
            this.stingerMovement = true;
        }
    }
    static propellerFliying(scene) {
        if (scene.game.player.activatedJet && !this.earlyPropeller) {
            this.earlyPropeller = true;
            this.load.propellerStop.volume = 0.0;
            this.load.engineLoop.play();
            scene.tweens.add({
                targets: this.load.engineLoop,
                volume: this.maxVolume,
                duration: this.barRateDiv[2],
            });
            this.load.propellerLoop.play();
            scene.tweens.add({
                targets: this.load.propellerLoop,
                volume: this.maxVolume,
                rate: scene.game.player.energy / this.halfDistance + this.maxVolume,
                duration: this.barRateDiv[2],
            });
        } else if (!scene.game.player.activatedJet && this.earlyPropeller) {
            this.earlyPropeller = false;
            this.load.propellerStop.play();
            this.load.propellerStop.setRate(0.9 + (Math.random() * 0.1));
            this.load.propellerStop.volume = this.maxVolume;
            this.load.propellerLoop.volume = 0.0;
            this.load.propellerLoop.setRate(0.001);
            this.load.propellerLoop.stop();
            this.load.engineLoop.volume = 0.0;
            this.load.engineLoop.setRate(0.9 + (Math.random() * 0.1));
            this.load.engineLoop.stop();
            this.load.propellerLoop.stop();
        } else if (this.earlyPropeller) {
            scene.tweens.add({
                targets: this.load.propellerLoop,
                volume: this.maxVolume,
                rate: scene.game.player.energy / this.halfDistance + 0.85,
                duration: this.barRateDiv[2],
            });
        }
    }
    preload() {
        //LOAD AUDIO
        this.load.audio('loop0000base', 'assets/audio/BGM/loop0000base.mp3');
        this.load.audio('loop0000flying', 'assets/audio/BGM/loop0000flying.mp3');
        this.load.audio('loop0000levitating', 'assets/audio/BGM/loop0000levitating.mp3');
        this.load.audio('loop0000moving', 'assets/audio/BGM/loop0000moving.mp3');
        this.load.audio('loop0000weapon_00', 'assets/audio/BGM/loop0000weapon_00.mp3');
        this.load.audio('loop0000weapon_01', 'assets/audio/BGM/loop0000weapon_01.mp3');
        this.load.audio('propellerLoop_00', 'assets/audio/SFX/propellerLoop_00.mp3');
        this.load.audio('engineLoop_00', 'assets/audio/SFX/engineLoop_00.mp3');
        this.load.audio('propellerStop_00', 'assets/audio/SFX/propellerStop_00.mp3');
        this.load.audio('shot_00', 'assets/audio/SFX/shot_00.mp3');
        this.load.audio('shot_01', 'assets/audio/SFX/shot_01.mp3');
        this.load.audio('impact_00', 'assets/audio/SFX/impact_00.mp3');
        this.load.audio('impact_01', 'assets/audio/SFX/impact_01.mp3');
        this.load.audio('wick_00', 'assets/audio/SFX/wick_00.mp3');
        this.load.audio('explosion_01', 'assets/audio/SFX/explosion_01.mp3');
    }
    create() {
        //INIT de AUDIO
        this.shot_00 = this.sound.add('shot_00');
        this.shot_01 = this.sound.add('shot_01');
        this.impact_00 = this.sound.add('impact_00');
        this.impact_01 = this.sound.add('impact_01');
        this.explosion_01 = this.sound.add('explosion_01');
        this.wick_00 = this.sound.add('wick_00');
        this.propellerLoop = this.sound.add('propellerLoop_00', {
            volume: 0.0,
            loop: true
        })
        this.engineLoop = this.sound.add('engineLoop_00', {
            volume: 0.0,
            loop: true
        })
        this.propellerStop = this.sound.add('propellerStop_00');
        this.stingerShot = false;
        this.stingerJet = false;
        this.stingerMovement = false;
        this.loopBase = this.sound.add('loop0000base', {
            volume: this.maxVolume,
            loop: true
        })
        this.loopFliying = this.sound.add('loop0000flying', {
            volume: 0.0,
            loop: true
        })
        this.loopLevitating = this.sound.add('loop0000levitating', {
            volume: 0.0,
            loop: true
        })
        this.loopMovement = this.sound.add('loop0000moving', {
            volume: 0.0,
            loop: true
        })
        this.bgmIfWeapon = [];
        this.bgmIfWeapon[0] = this.sound.add('loop0000weapon_00', {
            volume: 0.0,
            loop: true
        })
        this.bgmIfWeapon[1] = this.sound.add('loop0000weapon_01', {
            volume: 0.0,
            loop: true
        })
        this.loopBase.play();
        this.loopFliying.play();
        this.loopLevitating.play();
        this.loopMovement.play();
        this.bgmIfWeapon[0].play();
        this.bgmIfWeapon[1].play();
        this.timer = this.time.addEvent({
            delay: Audio.barRateDiv[0],
            callback: () => Audio.musicBar(this),
            loop: true
        });
        Audio.load = this;
        console.log("AUDIO LOADED.")
        this.scene.start("SceneLoading");
    }
<<<<<<< Updated upstream
  }

  preload(){
    //LOAD AUDIO
    this.load.audio('loop0000base', 'assets/audio/BGM/loop0000base.mp3');
    this.load.audio('loop0000flying', 'assets/audio/BGM/loop0000flying.mp3');
    this.load.audio('loop0000levitating', 'assets/audio/BGM/loop0000levitating.mp3');
    this.load.audio('loop0000moving', 'assets/audio/BGM/loop0000moving.mp3');
    this.load.audio('loop0000weapon_00', 'assets/audio/BGM/loop0000weapon_00.mp3');
    this.load.audio('loop0000weapon_01', 'assets/audio/BGM/loop0000weapon_01.mp3');

    this.load.audio('shot_00', 'assets/audio/SFX/shot_00.mp3');
    this.load.audio('shot_01', 'assets/audio/SFX/shot_01.mp3');

    this.load.audio('impact_00', 'assets/audio/SFX/impact_00.mp3');
    this.load.audio('impact_01', 'assets/audio/SFX/impact_01.mp3');

    this.load.audio('explosion_01', 'assets/audio/SFX/explosion_01.mp3');
  }

  create(){
    console.log("AUDIO LOADED.")
    this.scene.start("SceneLoading");
  }

}
=======
}
>>>>>>> Stashed changes
