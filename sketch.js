let ludo_board_Img;
let chance="green";
let number_of_remaining_chances=1;
let dice,diceCount;
let dice_img=[null,null,null,null,null,null];
let startTime,time,animation;
let greenTokens_button=[null,null,null,null];
let yellowTokens_button=[null,null,null,null];
let blueTokens_button=[null,null,null,null];
let redTokens_button=[null,null,null,null];

const yellow = [
  [23.5,301.5],[70.5,301.5],[117.5,301.5],[164.5,301.5],[211.5,301.5],[258.5,301.5],
  [23.5,348.5],[70.5,348.5],[117.5,348.5],[164.5,348.5],[211.5,348.5],[258.5,348.5],
  [23.5,395.5],[70.5,395.5],[117.5,395.5],[164.5,395.5],[211.5,395.5],[258.5,395.5]
];

let path = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55, 56, 57, "HOME"],
            [0, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 58, 59, 60, 61, 62, "HOME"],
            [0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 63, 64, 65, 66, 67, "HOME"],
            [0, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 68, 69, 70, 71, 72, "HOME"]
           ];

let position = [[-20,-20],[301.5,629.5],[301.5,582.5],[301.5,535.5],[301.5,488.5],[301.5,441.5],[258.5,395.5],[211.5,395.5],[164.5,395.5],[117.5,395.5],[70.5,395.5],[23.5,395.5],[23.5,348.5],[23.5,301.5],[70.5,301.5],[117.5,301.5],[164.5,301.5],[211.5,301.5],[258.5,301.5],[301.5,258.5],[301.5,211.5],[301.5,164.5],[301.5,117.5],[301.5,70.5],[301.5,23.5],[348.5,23.5],[395.5,23.5],[395.5,70.5],[395.5,117.5],[395.5,164.5],[395.5,211.5],[395.5,258.5],[441.5,301.5],[488.5,301.5],[535.5,301.5],[582.5,301.5],[629.5,301.5],[676.5,301.5],[676.5,348.5],[676.5,395.5],[629.5,395.5],[582.5,395.5],[535.5,395.5],[488.5,395.5],[441.5,395.5],[395.5,441.5],[395.5,488.5],[395.5,535.5],[395.5,582.5],[395.5,629.5],[395.5,676.5],[348.5,676.5],[301.5,676.5],[348.5,629.5],[348.5,582.5],[348.5,535.5],[348.5,488.5],[348.5,441.5],[70.5,348.5],[117.5,348.5],[164.5,348.5],[211.5,348.5],[258.5,348.5],[348.5,70.5],[348.5,117.5],[348.5,164.5],[348.5,211.5],[348.5,258.5],[629.5,348.5],[582.5,348.5],[535.5,348.5],[488.5,348.5],[441.5,348.5]];

let greenTokens = [0,0,0,0];
let yellowTokens = [0,0,0,0];
let blueTokens = [0,0,0,0];
let redTokens = [0,0,0,0];

function preload() {
  ludo_board_Img = loadImage("ludo_board.png");
  dice_img[1] = loadImage("dice1.png");
  dice_img[2] = loadImage("dice2.png");
  dice_img[3] = loadImage("dice3.png");
  dice_img[4] = loadImage("dice4.png");
  dice_img[5] = loadImage("dice5.png");
  dice_img[6] = loadImage("dice6.png");
}

function setup() {
  createCanvas(700, 700);

  rectMode(CENTER);
  textAlign(CENTER);

  dice = createButton("Roll Dice");
  dice.mouseReleased(getNumber);
  dice.style("font-size","large");

  for(let i=0;i<=3;i++) {
  greenTokens_button[i] = createButton(i+1);
  greenTokens_button[i].hide();
  greenTokens_button[i].mouseReleased(()=>{
    if((path[0].indexOf(greenTokens[i])+diceCount+1)<path[0].length && path[0].indexOf(greenTokens[i])!=0) {
      greenTokens[i] = path[0][path[0].indexOf(greenTokens[i])+diceCount];
      greenTokens_button[0].hide();
      greenTokens_button[1].hide();
      greenTokens_button[2].hide();
      greenTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="yellow";
        number_of_remaining_chances=1;
      }
    }else if(path[0].indexOf(greenTokens[i])==0 && diceCount==6) {
      greenTokens[i] = path[0][1];
      greenTokens_button[0].hide();
      greenTokens_button[1].hide();
      greenTokens_button[2].hide();
      greenTokens_button[3].hide();
    }else{
      greenTokens_button[0].hide();
      greenTokens_button[1].hide();
      greenTokens_button[2].hide();
      greenTokens_button[3].hide();
      chance="yellow";
      number_of_remaining_chances=1;
    }
  });
  }
  for(let i=0;i<=3;i++) {
  yellowTokens_button[i] = createButton(i+1);
  yellowTokens_button[i].hide();
  yellowTokens_button[i].mouseReleased(()=>{
    if((path[1].indexOf(yellowTokens[i])+diceCount+1)<path[1].length && path[1].indexOf(yellowTokens[i])!=0) {
      yellowTokens[i] = path[1][path[1].indexOf(yellowTokens[i])+diceCount];
      yellowTokens_button[0].hide();
      yellowTokens_button[1].hide();
      yellowTokens_button[2].hide();
      yellowTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="blue";
        number_of_remaining_chances=1;
      }
    }else if(path[1].indexOf(yellowTokens[i])==0 && diceCount==6) {
      yellowTokens[i] = path[1][1];
      yellowTokens_button[0].hide();
      yellowTokens_button[1].hide();
      yellowTokens_button[2].hide();
      yellowTokens_button[3].hide();
    }else{
      yellowTokens_button[0].hide();
      yellowTokens_button[1].hide();
      yellowTokens_button[2].hide();
      yellowTokens_button[3].hide();
      chance="blue";
      number_of_remaining_chances=1;
    }
  });
  }
  for(let i=0;i<=3;i++) {
  blueTokens_button[i] = createButton(i+1);
  blueTokens_button[i].hide();
  blueTokens_button[i].mouseReleased(()=>{
    if((path[2].indexOf(blueTokens[i])+diceCount+1)<path[2].length && path[2].indexOf(blueTokens[i])!=0) {
      blueTokens[i] = path[2][path[2].indexOf(blueTokens[i])+diceCount];
      blueTokens_button[0].hide();
      blueTokens_button[1].hide();
      blueTokens_button[2].hide();
      blueTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="red";
        number_of_remaining_chances=1;
      }
    }else if(path[2].indexOf(blueTokens[i])==0 && diceCount==6) {
      blueTokens[i] = path[2][1];
      blueTokens_button[0].hide();
      blueTokens_button[1].hide();
      blueTokens_button[2].hide();
      blueTokens_button[3].hide();
      
    }else {
      blueTokens_button[0].hide();
      blueTokens_button[1].hide();
      blueTokens_button[2].hide();
      blueTokens_button[3].hide();
      chance="red";
      number_of_remaining_chances=1;
    }
  });
  }
  for(let i=0;i<=3;i++) {
  redTokens_button[i] = createButton(i+1);
  redTokens_button[i].hide();
  redTokens_button[i].mouseReleased(()=>{
    if((path[3].indexOf(redTokens[i])+diceCount+1)<path[3].length && path[3].indexOf(redTokens[i])!=0) {
      redTokens[i] = path[3][path[3].indexOf(redTokens[i])+diceCount];
      redTokens_button[0].hide();
      redTokens_button[1].hide();
      redTokens_button[2].hide();
      redTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="green";
        number_of_remaining_chances=1;
      }
    }else if(path[3].indexOf(redTokens[i])==0 && diceCount==6) {
      redTokens_button[0].hide();
      redTokens_button[1].hide();
      redTokens_button[2].hide();
      redTokens_button[3].hide();
      redTokens[i] = path[3][1];
    }else {
      redTokens_button[0].hide();
      redTokens_button[1].hide();
      redTokens_button[2].hide();
      redTokens_button[3].hide();
      chance="green";
      number_of_remaining_chances=1;
    }
  });
  }
}

function draw() {
  background(ludo_board_Img);

  if(chance=="green") {
    dice.position(100,665);
  }else if(chance=="yellow") {
    dice.position(100,8);
  }else if(chance=="blue") {
    dice.position(517,8);
  }else if(chance=="red") {
    dice.position(517,665);
  }
  
  fill(0,255,0);
  textSize(40);
  circle(position[(greenTokens[0])][0],position[(greenTokens[0])][1],40);
  circle(position[(greenTokens[1])][0],position[(greenTokens[1])][1],40);
  circle(position[(greenTokens[2])][0],position[(greenTokens[2])][1],40);
  circle(position[(greenTokens[3])][0],position[(greenTokens[3])][1],40);
  fill(0);
  text("1",position[(greenTokens[0])][0],position[(greenTokens[0])][1]+15);
  text("2",position[(greenTokens[1])][0],position[(greenTokens[1])][1]+15);
  text("3",position[(greenTokens[2])][0],position[(greenTokens[2])][1]+15);
  text("4",position[(greenTokens[3])][0],position[(greenTokens[3])][1]+15);
  fill(255,255,0);
  circle(position[(yellowTokens[0])][0],position[(yellowTokens[0])][1],40);
  circle(position[(yellowTokens[1])][0],position[(yellowTokens[1])][1],40);
  circle(position[(yellowTokens[2])][0],position[(yellowTokens[2])][1],40);
  circle(position[(yellowTokens[3])][0],position[(yellowTokens[3])][1],40);
  fill(0);
  text("1",position[(yellowTokens[0])][0],position[(yellowTokens[0])][1]+15);
  text("2",position[(yellowTokens[1])][0],position[(yellowTokens[1])][1]+15);
  text("3",position[(yellowTokens[2])][0],position[(yellowTokens[2])][1]+15);
  text("4",position[(yellowTokens[3])][0],position[(yellowTokens[3])][1]+15);
  fill(0,0,255);
  circle(position[(blueTokens[0])][0],position[(blueTokens[0])][1],40);
  circle(position[(blueTokens[1])][0],position[(blueTokens[1])][1],40);
  circle(position[(blueTokens[2])][0],position[(blueTokens[2])][1],40);
  circle(position[(blueTokens[3])][0],position[(blueTokens[3])][1],40);
  fill(0);
  text("1",position[(blueTokens[0])][0],position[(blueTokens[0])][1]+15);
  text("2",position[(blueTokens[1])][0],position[(blueTokens[1])][1]+15);
  text("3",position[(blueTokens[2])][0],position[(blueTokens[2])][1]+15);
  text("4",position[(blueTokens[3])][0],position[(blueTokens[3])][1]+15);
  fill(255,0,0);
  circle(position[(redTokens[0])][0],position[(redTokens[0])][1],40);
  circle(position[(redTokens[1])][0],position[(redTokens[1])][1],40);
  circle(position[(redTokens[2])][0],position[(redTokens[2])][1],40);
  circle(position[(redTokens[3])][0],position[(redTokens[3])][1],40);
  fill(0);
  text("1",position[(redTokens[0])][0],position[(redTokens[0])][1]+15);
  text("2",position[(redTokens[1])][0],position[(redTokens[1])][1]+15);
  text("3",position[(redTokens[2])][0],position[(redTokens[2])][1]+15);
  text("4",position[(redTokens[3])][0],position[(redTokens[3])][1]+15);

  // for(let i=0;i<position.length;i++) {
  //   fill(100);
  //   noStroke();
  //   circle(position[i][0],position[i][1],20);
  //   fill(255);
  //   text(i+1,position[i][0],position[i][1]+5);
  // }

  if(number_of_remaining_chances==0) {
    dice.hide();
  }else {
    dice.show();
  }

  if((time-startTime)>500) {
    image(dice_img[diceCount],330,330,40,40);
  }

  if((time-startTime)<=500) {
    let ani = animation%21;

    switch(ani) {
      case 1: case 2: case 3:
      image(dice_img[1],330,330,40,40);
      break;

      case 4: case 5: case 6:
      image(dice_img[2],330,330,40,40);
      break;

      case 7: case 8: case 9:
      image(dice_img[6],330,330,40,40);
      break;

      case 10: case 11: case 12:
      image(dice_img[5],330,330,40,40);
      break;

      case 13: case 14: case 15:
      image(dice_img[1],330,330,40,40);
      break;

      case 16: case 17: case 18:
      image(dice_img[3],330,330,40,40);
      break;

      case 19: case 20: case 21:
      image(dice_img[4],330,330,40,40);
      break;

      default:break;
    }
    animation++;
    time = millis();
  }
}

function getNumber() {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  diceCount = ((array[0] % 6) + 1);

  let frameR = frameRate();
  startTime = millis();
  time = startTime;
  animation=1;

  if(chance=="green") {
    greenTokens_button[0].show();
    greenTokens_button[1].show();
    greenTokens_button[2].show();
    greenTokens_button[3].show();
  }else if(chance=="yellow") {
    yellowTokens_button[0].show();
    yellowTokens_button[1].show();
    yellowTokens_button[2].show();
    yellowTokens_button[3].show();
  }else if(chance=="blue") {
    blueTokens_button[0].show();
    blueTokens_button[1].show();
    blueTokens_button[2].show();
    blueTokens_button[3].show();
  }else if(chance=="red") {
    redTokens_button[0].show();
    redTokens_button[1].show();
    redTokens_button[2].show();
    redTokens_button[3].show();
  }

  number_of_remaining_chances--;

  if(diceCount==6) {
    number_of_remaining_chances++;
  }
}