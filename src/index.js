"use strict";

//DESTRUCTOR GLOBAL AL SALIR/REFRESCAR
window.addEventListener("beforeunload", function (e) {
  /*game.player.alive = false;
  //console.log(scene.scene.key);
  game.player.scene.input.keyboard.shutdown();
  scene.input.shutdown();
  if(scene.enemyController != undefined)
    scene.enemyController.destroy();

  for(var i=0; i<scene.tileBodyMatrix.length; i++){
    Phaser.Physics.Matter.Matter.World.remove(scene.matter.world.localWorld, scene.tileBodyMatrix[i].body);
    scene.tileBodyMatrix[i].body = undefined;
    scene.tileBodyMatrix = undefined;
  }
  scene.tileBodyMatrix = [];
  for(var i=0; i<this.matter.world.localWorld.bodies.length; i++){
    this.matter.world.localWorld.bodies[i] = undefined;
  }
  this.matter.world.localWorld.bodies = [];

  this.map.destroy();
  this.map = undefined;

  for(var i=0; i<this.make.displayList.list.length; i++){
    this.make.displayList.list[i] = undefined;
  }
  this.make.displayList.list = [];


  scene.scene.remove(scene.scene.key+ SceneCurrentClass.getNumber());*/

  game.cache.destroy();
  game.destroy(true, true);
  localStorage.clear();
  sessionStorage.clear();
});

//todas las clases necesarias (incluyendo todas las escenas-modulos)
import Player from "./PlayerStuff/Player.js";
import SceneLoading from "./Scenes/SceneLoading.js";
import Audio from "./Audio.js";
import Chatter from "./Chatter.js";
import Tutorial from "./Scenes/Levels/Tutorial.js";
import Level1 from "./Scenes/Levels/Level1.js";
import Level2 from "./Scenes/Levels/Level1.js";
import Level3 from "./Scenes/Levels/Level1.js";
import LevelBoss from "./Scenes/Levels/LevelBoss.js";
import SceneTest_1 from "./Scenes/SceneTest_1.js";
import AnimatedTiles from "./Plugins/tileAnimator.js"

import SceneMainMenu from "./Scenes/SceneMainMenu.js"
import SceneCredits from "./Scenes/SceneCredits.js"
import SceneOptions from "./Scenes/SceneOptionsMM.js"
import SceneGameEbi from "./Scenes/SceneGameEbi.js"
import ScenePause from "./Scenes/ScenePause.js"
import SceneOptionsGame from "./Scenes/SceneOptionsGame.js"
import SceneScore from "./Scenes/SceneScore.js"
import SceneCreditsScore from "./Scenes/SceneCreditsScore.js"
import SceneGameOver from "./Scenes/SceneGameOver.js"
import SceneRanking from "./Scenes/SceneRanking.js"
import SceneSplashScreen from "./Scenes/SceneSplashScreen.js"

//Configuración de Phaser 3
var config = {
  type: Phaser.WEBGL,
  //Dimensiones de la ventana de juego (ancho y alto)
  width: 960,
  height: 540,
  fps: {
    target: 60,
  },
  parent: 'phaserDOM',
  pixelArt: true,
  audio: {
    disableWebAudio: false
  },
  //Físicas del juego
  physics: {
    default: 'matter',
    matter: {
      gravity: { y: 0.98 },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'phaserDOM',
    max: {
        width: 960,
        height: 540
    }
  },
  //escenas principales
  scene: [
    SceneSplashScreen,

    Audio,
    Chatter,
    SceneLoading,

    SceneMainMenu,
    SceneCredits,
    SceneOptions,
    SceneGameEbi,
    ScenePause,
    SceneOptionsGame,
    SceneScore,
    SceneCreditsScore,
    SceneGameOver,
    SceneRanking,

    Tutorial,
    Level1,
    LevelBoss,
    SceneTest_1
  ],
    plugins: {

    //plugin de collisiones de matter  https://github.com/mikewesthad/phaser-matter-collision-plugin
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin,
        key: "matterCollision",
        mapping: "matterCollision"
      },
      {
        plugin: AnimatedTiles,
        key: "animatedTiles",
        mapping: "animatedTiles"
      }
    ]
  }
};

//Declaramos nuestro juego
var game = new Phaser.Game(config);
console.log(game);                      //el bug de exces memory podría deberse a que el explorador recuerda los recursos cargados en el cache del juego

//Declaramos variables globales del juego.
game.moveVelocity = 0.22;            //velocidad horizontal en el suelo
game.moveVelocityAir = 0.275;         //velocidad horizontal en el aire
game.jetVelocity = 0.3;             //velocidad de ascenso
game.jetVelocityDown = 0.3;         //velocidad de descenso
game.totalPlayerHp = 100;           //1000
game.hpRecoveryRate = 1;
game.totalPlayerEnergy = 1000;     //1000
game.energyRecoveryRate = 1;
game.energyCostJetBeginning = 0;      //energia por segundo que se gasta justo al empezar (es un valor base de coste)
game.energyJetIncrease = 1.00/*9   */   //velocidad con la que aumenta el coste del jet
game.energyCostJetPropulsion = 5;     //energia de coste de propulsion, se gasta solo una vez al entrar en modo jet)

game.airVelocityFraction = 0.3;   //Creo que no se usa

game.levelVariants = [3];
game.levelVariants[0] = 1;
game.levelVariants[1] = 1;
game.levelVariants[2] = 1;

game.chosenLevels = [3];
for(var i=0; i<game.levelVariants.length; i++){
  game.chosenLevels[i] = Math.random()*game.levelVariants[i] + 1;
}

game.npcArray = [8];
for(var i=0; i<8; i++){
  game.npcArray[i] = i;
}

game.moonPos = new Phaser.Math.Vector2(130, 130);
game.moonVelocity = 1/200;      //si = 1 -> avanza 50 unidades en un segundo
game.currentBgAnimation = 0;
game.transitionToScene = function(scene, keyNext, sceneNext){
  var SceneCurrentClass = eval(scene.constructor.name);
  var SceneNextClass = sceneNext;
  scene.cameras.main.once('camerafadeoutcomplete', function (camera) {
    game.player.alive = false;
    //console.log(scene.scene.key);
    scene.input.keyboard.shutdown();
    scene.input.shutdown();
    if(scene.enemyController != undefined)
      scene.enemyController.destroy();

    for(var i=0; i<scene.tileBodyMatrix.length; i++){
      Phaser.Physics.Matter.Matter.World.remove(scene.matter.world.localWorld, scene.tileBodyMatrix[i].body);
      scene.tileBodyMatrix[i].body = undefined;
      scene.tileBodyMatrix = undefined;
    }
    scene.tileBodyMatrix = [];
    for(var i=0; i<scene.matter.world.localWorld.bodies.length; i++){
      scene.matter.world.localWorld.bodies[i] = undefined;
    }
    scene.matter.world.localWorld.bodies = [];

    scene.map.destroy();
    scene.map = undefined;

    for(var i=0; i<scene.make.displayList.list.length; i++){
      scene.make.displayList.list[i] = undefined;
    }
    scene.make.displayList.list = [];


    scene.scene.remove(scene.scene.key+ SceneCurrentClass.getNumber());
    game.scene.add('', new SceneNextClass(keyNext + ((SceneNextClass.getNumber()+ 1)%5)) , true);
  }, scene);
  scene.cameras.main.fadeOut(1000);
}

game.changeScene = function(scene, nextId){
  var SceneCurrentClass = eval(scene.constructor.name);
  scene.cameras.main.once('camerafadeoutcomplete', function (camera) {
    game.player.alive = false;
    //console.log(scene.scene.key);
    scene.input.keyboard.shutdown();
    scene.input.shutdown();
    if(scene.enemyController != undefined)
      scene.enemyController.destroy();

    for(var i=0; i<scene.tileBodyMatrix.length; i++){
      Phaser.Physics.Matter.Matter.World.remove(scene.matter.world.localWorld, scene.tileBodyMatrix[i].body);
      scene.tileBodyMatrix[i].body = undefined;
      scene.tileBodyMatrix = undefined;
    }
    scene.tileBodyMatrix = [];
    for(var i=0; i<scene.matter.world.localWorld.bodies.length; i++){
      scene.matter.world.localWorld.bodies[i] = undefined;
    }
    scene.matter.world.localWorld.bodies = [];

    if(scene.map != undefined){
      scene.map.destroy();
      scene.map = undefined;
    }

    for(var i=0; i<scene.make.displayList.list.length; i++){
      scene.make.displayList.list[i] = undefined;
    }
    scene.make.displayList.list = [];


    scene.scene.remove(scene.scene.key+ SceneCurrentClass.getNumber());
    game.scene.run(nextId);
    game.scene.bringToTop(nextId);
  }, scene);
  scene.cameras.main.fadeOut(1000);
}

/*game.transferComposite = Phaser.Physics.Matter.Matter.Composite.create();
game.transferBody = function(bodies1, bodies2, body){
  bodies1.push(body);
  bodies2.splice(bodies2.indexOf(body), 1);
}*/
game.bulletInteracBodies = [];
game.enemyBodies = [];

game.obtainedWeapons = [];

function mobileTabletChek() {
  let check = false;
  var a = navigator.userAgent;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
    check = true;
  return check;
};
game.onPC = !mobileTabletChek();
console.log("onPC:  " +game.onPC);

game.prepareScreen = function(){
  if(!game.onPC){
    game.scale.lockOrientation('landscape');
    game.scale.startFullscreen();
  }
}
game.pauseInfo = '';
window.gameDebug = game;
