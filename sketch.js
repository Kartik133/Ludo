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
let green_count1=0,yellow_count1=0,blue_count1=0,red_count1=0;
let green_count2=0,yellow_count2=0,blue_count2=0,red_count2=0;

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

let box_count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let position = [[-20,-20],[301.5,629.5],[301.5,582.5],[301.5,535.5],[301.5,488.5],[301.5,441.5],[258.5,395.5],[211.5,395.5],[164.5,395.5],[117.5,395.5],[70.5,395.5],[23.5,395.5],[23.5,348.5],[23.5,301.5],[70.5,301.5],[117.5,301.5],[164.5,301.5],[211.5,301.5],[258.5,301.5],[301.5,258.5],[301.5,211.5],[301.5,164.5],[301.5,117.5],[301.5,70.5],[301.5,23.5],[348.5,23.5],[395.5,23.5],[395.5,70.5],[395.5,117.5],[395.5,164.5],[395.5,211.5],[395.5,258.5],[441.5,301.5],[488.5,301.5],[535.5,301.5],[582.5,301.5],[629.5,301.5],[676.5,301.5],[676.5,348.5],[676.5,395.5],[629.5,395.5],[582.5,395.5],[535.5,395.5],[488.5,395.5],[441.5,395.5],[395.5,441.5],[395.5,488.5],[395.5,535.5],[395.5,582.5],[395.5,629.5],[395.5,676.5],[348.5,676.5],[301.5,676.5],[348.5,629.5],[348.5,582.5],[348.5,535.5],[348.5,488.5],[348.5,441.5],[70.5,348.5],[117.5,348.5],[164.5,348.5],[211.5,348.5],[258.5,348.5],[348.5,70.5],[348.5,117.5],[348.5,164.5],[348.5,211.5],[348.5,258.5],[629.5,348.5],[582.5,348.5],[535.5,348.5],[488.5,348.5],[441.5,348.5]];

const greenZero = [
  [94.5, 514.5],
  [185.5, 514.5],
  [94.5, 605.5],
  [185.5, 605.5]
];

const yellowZero = [
  [94.5, 94.5],    // Top-left
  [185.5, 94.5],   // Top-right
  [94.5, 185.5],   // Bottom-left
  [185.5, 185.5]   // Bottom-right
];

const blueZero = [
  [514.5, 94.5],
  [605.5, 94.5],
  [514.5, 185.5],
  [605.5, 185.5]
];

const redZero = [
  [514.5, 514.5],
  [605.5, 514.5],
  [514.5, 605.5],
  [605.5, 605.5]
];

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
    greenTokens_button[i].position(80+i*30,434);
    greenTokens_button[i].hide();
    greenTokens_button[i].mouseReleased(()=>{
    
    getCunts();
    get_box_counts_green();

    if(path[0][(path[0].indexOf(greenTokens[i])+diceCount)]=="HOME") {
      number_of_remaining_chances++;
    }

    if(diceCount==6) {
      number_of_remaining_chances++;
    }
 
    if((path[0].indexOf(greenTokens[i])+diceCount)<path[0].length && path[0].indexOf(greenTokens[i])!=0 && box_count[path[0][(path[0].indexOf(greenTokens[i])+diceCount)]-1]==0) {
      greenTokens[i] = path[0][path[0].indexOf(greenTokens[i])+diceCount];
      greenTokens_button[0].hide();
      greenTokens_button[1].hide();
      greenTokens_button[2].hide();
      greenTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="yellow";
        number_of_remaining_chances=1;
      }
    }else if((path[0].indexOf(greenTokens[i])+diceCount)<path[0].length && path[0].indexOf(greenTokens[i])!=0 && box_count[path[0][(path[0].indexOf(greenTokens[i])+diceCount)]-1]!=0) {
      number_of_remaining_chances++;
      greenTokens[i] = path[0][path[0].indexOf(greenTokens[i])+diceCount];
      greenTokens_button[0].hide();
      greenTokens_button[1].hide();
      greenTokens_button[2].hide();
      greenTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="yellow";
        number_of_remaining_chances=1;
      }
      if(yellowTokens[0]==greenTokens[i]) {
        yellowTokens[0]=0;
      }else if(yellowTokens[1]==greenTokens[i]) {
        yellowTokens[1]=0;
      }else if(yellowTokens[2]==greenTokens[i]) {
        yellowTokens[2]=0;
      }else if(yellowTokens[3]==greenTokens[i]) {
        yellowTokens[3]=0;
      }else if(blueTokens[0]==greenTokens[i]) {
        blueTokens[0]=0;
      }else if(blueTokens[1]==greenTokens[i]) {
        blueTokens[1]=0;
      }else if(blueTokens[2]==greenTokens[i]) {
        blueTokens[2]=0;
      }else if(blueTokens[3]==greenTokens[i]) {
        blueTokens[3]=0;
      }else if(redTokens[0]==greenTokens[i]) {
        redTokens[0]=0;
      }else if(redTokens[1]==greenTokens[i]) {
        redTokens[1]=0;
      }else if(redTokens[2]==greenTokens[i]) {
        redTokens[2]=0;
      }else if(redTokens[3]==greenTokens[i]) {
        redTokens[3]=0;
      }
    }else if(path[0].indexOf(greenTokens[i])==0 && diceCount==6) {
      greenTokens[i] = path[0][1];
      greenTokens_button[0].hide();
      greenTokens_button[1].hide();
      greenTokens_button[2].hide();
      greenTokens_button[3].hide();
    }else if(diceCount!=6 && green_count1==4) {
      greenTokens_button[0].hide();
      greenTokens_button[1].hide();
      greenTokens_button[2].hide();
      greenTokens_button[3].hide();
      chance="yellow";
      number_of_remaining_chances=1;
    }else if(green_count2==4) {
      greenTokens_button[0].hide();
      greenTokens_button[1].hide();
      greenTokens_button[2].hide();
      greenTokens_button[3].hide();
      chance="yellow";
      number_of_remaining_chances=1;
    }else if((green_count1+green_count2)==4 && diceCount!=6 && green_count1!=0 && green_count2!=0) {
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
    yellowTokens_button[i].position(80+i*30,250);
    yellowTokens_button[i].hide();
    yellowTokens_button[i].mouseReleased(()=>{

    getCunts();
    get_box_counts_yellow();
    
    if(path[1][(path[1].indexOf(yellowTokens[i])+diceCount)]=="HOME") {
      number_of_remaining_chances++;
    }

    if(diceCount==6) {
      number_of_remaining_chances++;
    }

    if((path[1].indexOf(yellowTokens[i])+diceCount)<path[1].length && path[1].indexOf(yellowTokens[i])!=0 && box_count[path[1][path[1].indexOf(yellowTokens[i])+diceCount]-1]==0) {
      yellowTokens[i] = path[1][path[1].indexOf(yellowTokens[i])+diceCount];
      yellowTokens_button[0].hide();
      yellowTokens_button[1].hide();
      yellowTokens_button[2].hide();
      yellowTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="blue";
        number_of_remaining_chances=1;
      }
    }else if((path[1].indexOf(yellowTokens[i])+diceCount)<path[1].length && path[1].indexOf(yellowTokens[i])!=0 && box_count[path[1][path[1].indexOf(yellowTokens[i])+diceCount]-1]!=0) {
      number_of_remaining_chances++;
      yellowTokens[i] = path[1][path[1].indexOf(yellowTokens[i])+diceCount];
      yellowTokens_button[0].hide();
      yellowTokens_button[1].hide();
      yellowTokens_button[2].hide();
      yellowTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="blue";
        number_of_remaining_chances=1;
      }
      if(greenTokens[0]==yellowTokens[i]) {
        greenTokens[0]=0;
      }else if(greenTokens[1]==yellowTokens[i]) {
        greenTokens[1]=0;
      }else if(greenTokens[2]==yellowTokens[i]) {
        greenTokens[2]=0;
      }else if(greenTokens[3]==yellowTokens[i]) {
        greenTokens[3]=0;
      }else if(blueTokens[0]==yellowTokens[i]) {
        blueTokens[0]=0;
      }else if(blueTokens[1]==yellowTokens[i]) {
        blueTokens[1]=0;
      }else if(blueTokens[2]==yellowTokens[i]) {
        blueTokens[2]=0;
      }else if(blueTokens[3]==yellowTokens[i]) {
        blueTokens[3]=0;
      }else if(redTokens[0]==yellowTokens[i]) {
        redTokens[0]=0;
      }else if(redTokens[1]==yellowTokens[i]) {
        redTokens[1]=0;
      }else if(redTokens[2]==yellowTokens[i]) {
        redTokens[2]=0;
      }else if(redTokens[3]==yellowTokens[i]) {
        redTokens[3]=0;
      }
    }else if(path[1].indexOf(yellowTokens[i])==0 && diceCount==6) {
      yellowTokens[i] = path[1][1];
      yellowTokens_button[0].hide();
      yellowTokens_button[1].hide();
      yellowTokens_button[2].hide();
      yellowTokens_button[3].hide();
    }else if(diceCount!=6 && yellow_count1==4) {
      yellowTokens_button[0].hide();
      yellowTokens_button[1].hide();
      yellowTokens_button[2].hide();
      yellowTokens_button[3].hide();
      chance="blue";
      number_of_remaining_chances=1;
    }else if(yellow_count2==4) {
      yellowTokens_button[0].hide();
      yellowTokens_button[1].hide();
      yellowTokens_button[2].hide();
      yellowTokens_button[3].hide();
      chance="blue";
      number_of_remaining_chances=1;
    }else if((yellow_count1+yellow_count2)==4 && diceCount!=6 && yellow_count1!=0 && yellow_count2!=0) {
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
    blueTokens_button[i].position(500+i*30,250);
    blueTokens_button[i].hide();
    blueTokens_button[i].mouseReleased(()=>{

    getCunts();
    get_box_counts_blue();

    if(path[2][(path[2].indexOf(blueTokens[i])+diceCount)]=="HOME") {
      number_of_remaining_chances++;
    }

    if(diceCount==6) {
      number_of_remaining_chances++;
    }

    if((path[2].indexOf(blueTokens[i])+diceCount)<path[2].length && path[2].indexOf(blueTokens[i])!=0 && box_count[path[2][path[2].indexOf(blueTokens[i])+diceCount]-1]==0) {
      blueTokens[i] = path[2][path[2].indexOf(blueTokens[i])+diceCount];
      blueTokens_button[0].hide();
      blueTokens_button[1].hide();
      blueTokens_button[2].hide();
      blueTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="red";
        number_of_remaining_chances=1;
      }
    }else if((path[2].indexOf(blueTokens[i])+diceCount)<path[2].length && path[2].indexOf(blueTokens[i])!=0 && box_count[path[2][path[2].indexOf(blueTokens[i])+diceCount]-1]!=0) {
      number_of_remaining_chances++;
      blueTokens[i] = path[2][path[2].indexOf(blueTokens[i])+diceCount];
      blueTokens_button[0].hide();
      blueTokens_button[1].hide();
      blueTokens_button[2].hide();
      blueTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="red";
        number_of_remaining_chances=1;
      }
      if(greenTokens[0]==blueTokens[i]) {
        greenTokens[0]=0;
      }else if(greenTokens[1]==blueTokens[i]) {
        greenTokens[1]=0;
      }else if(greenTokens[2]==blueTokens[i]) {
        greenTokens[2]=0;
      }else if(greenTokens[3]==blueTokens[i]) {
        greenTokens[3]=0;
      }else if(yellowTokens[0]==blueTokens[i]) {
        yellowTokens[0]=0;
      }else if(yellowTokens[1]==blueTokens[i]) {
        yellowTokens[1]=0;
      }else if(yellowTokens[2]==blueTokens[i]) {
        yellowTokens[2]=0;
      }else if(yellowTokens[3]==blueTokens[i]) {
        yellowTokens[3]=0;
      }else if(redTokens[0]==blueTokens[i]) {
        redTokens[0]=0;
      }else if(redTokens[1]==blueTokens[i]) {
        redTokens[1]=0;
      }else if(redTokens[2]==blueTokens[i]) {
        redTokens[2]=0;
      }else if(redTokens[3]==blueTokens[i]) {
        redTokens[3]=0;
      }
    }else if(path[2].indexOf(blueTokens[i])==0 && diceCount==6) {
      blueTokens[i] = path[2][1];
      blueTokens_button[0].hide();
      blueTokens_button[1].hide();
      blueTokens_button[2].hide();
      blueTokens_button[3].hide();
    }else if(diceCount!=6 && blue_count1==4) {
      blueTokens_button[0].hide();
      blueTokens_button[1].hide();
      blueTokens_button[2].hide();
      blueTokens_button[3].hide();
      chance="red";
      number_of_remaining_chances=1;
    }else if(blue_count2==4) {
      blueTokens_button[0].hide();
      blueTokens_button[1].hide();
      blueTokens_button[2].hide();
      blueTokens_button[3].hide();
      chance="red";
      number_of_remaining_chances=1;
    }else if((blue_count1+blue_count2)==4 && diceCount!=6 && blue_count1!=0 && blue_count2!=0) {
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
    redTokens_button[i].position(500+i*30,434);
    redTokens_button[i].hide();
    redTokens_button[i].mouseReleased(()=>{

    getCunts();
    get_box_counts_red();

    if(path[3][(path[3].indexOf(redTokens[i])+diceCount)]=="HOME") {
      number_of_remaining_chances++;
    }

    if(diceCount==6) {
      number_of_remaining_chances++;
    }

    if((path[3].indexOf(redTokens[i])+diceCount)<path[3].length && path[3].indexOf(redTokens[i])!=0 && box_count[path[3][path[3].indexOf(redTokens[i])+diceCount]-1]==0) {
      redTokens[i] = path[3][path[3].indexOf(redTokens[i])+diceCount];
      redTokens_button[0].hide();
      redTokens_button[1].hide();
      redTokens_button[2].hide();
      redTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="green";
        number_of_remaining_chances=1;
      }
    }else if((path[3].indexOf(redTokens[i])+diceCount)<path[3].length && path[3].indexOf(redTokens[i])!=0 && box_count[path[3][path[3].indexOf(redTokens[i])+diceCount]-1]!=0) {
      number_of_remaining_chances++;
      redTokens[i] = path[3][path[3].indexOf(redTokens[i])+diceCount];
      redTokens_button[0].hide();
      redTokens_button[1].hide();
      redTokens_button[2].hide();
      redTokens_button[3].hide();
      if(number_of_remaining_chances==0) {
        chance="green";
        number_of_remaining_chances=1;
      }
      if(greenTokens[0]==redTokens[i]) {
        greenTokens[0]=0;
      }else if(greenTokens[1]==redTokens[i]) {
        greenTokens[1]=0;
      }else if(greenTokens[2]==redTokens[i]) {
        greenTokens[2]=0;
      }else if(greenTokens[3]==redTokens[i]) {
        greenTokens[3]=0;
      }else if(yellowTokens[0]==redTokens[i]) {
        yellowTokens[0]=0;
      }else if(yellowTokens[1]==redTokens[i]) {
        yellowTokens[1]=0;
      }else if(yellowTokens[2]==redTokens[i]) {
        yellowTokens[2]=0;
      }else if(yellowTokens[3]==redTokens[i]) {
        yellowTokens[3]=0;
      }else if(blueTokens[0]==redTokens[i]) {
        blueTokens[0]=0;
      }else if(blueTokens[1]==redTokens[i]) {
        blueTokens[1]=0;
      }else if(blueTokens[2]==redTokens[i]) {
        blueTokens[2]=0;
      }else if(blueTokens[3]==redTokens[i]) {
        blueTokens[3]=0;
      }
    }else if(path[3].indexOf(redTokens[i])==0 && diceCount==6) {
      redTokens_button[0].hide();
      redTokens_button[1].hide();
      redTokens_button[2].hide();
      redTokens_button[3].hide();
      redTokens[i] = path[3][1];
    }else if(diceCount!=6 && red_count1==4) {
      redTokens_button[0].hide();
      redTokens_button[1].hide();
      redTokens_button[2].hide();
      redTokens_button[3].hide();
      chance="green";
      number_of_remaining_chances=1;
    }else if(red_count2==4) {
      redTokens_button[0].hide();
      redTokens_button[1].hide();
      redTokens_button[2].hide();
      redTokens_button[3].hide();
      chance="green";
      number_of_remaining_chances=1;
    }else if((red_count1+red_count2)==4 && diceCount!=6 && red_count1!=0 && red_count2!=0) {
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

  if(greenTokens[0]!="HOME" && greenTokens[0]!=0) {
    circle(position[greenTokens[0]][0], position[greenTokens[0]][1], 40);
  }else if(greenTokens[0]==0) {
    circle(greenZero[0][0],greenZero[0][1],40);
  }else if(greenTokens[0]=="HOME") {

  }

  if(greenTokens[1]!="HOME" && greenTokens[1]!=0) {
    circle(position[greenTokens[1]][0], position[greenTokens[1]][1], 40);
  }else if(greenTokens[1]==0) {
    circle(greenZero[1][0],greenZero[1][1],40);
  }else if(greenTokens[1]=="HOME") {

  }

  if(greenTokens[2]!="HOME" && greenTokens[2]!=0) {
    circle(position[greenTokens[2]][0], position[greenTokens[2]][1], 40);
  }else if(greenTokens[2]==0) {
    circle(greenZero[2][0],greenZero[2][1],40);
  }else if(greenTokens[2]=="HOME") {

  }

  if(greenTokens[3]!="HOME" && greenTokens[3]!=0) {
    circle(position[greenTokens[3]][0], position[greenTokens[3]][1], 40);
  }else if(greenTokens[3]==0) {
    circle(greenZero[3][0],greenZero[3][1],40);
  }else if(greenTokens[3]=="HOME") {

  }
  
  fill(0);

  if(greenTokens[0]!="HOME" && greenTokens[0]!=0) {
    text("1", position[greenTokens[0]][0], position[greenTokens[0]][1]+15);
  }else if(greenTokens[0]==0) {
    text("1",greenZero[0][0],greenZero[0][1]+15);
  }else if(greenTokens[0]=="HOME") {

  }

  if(greenTokens[1]!="HOME" && greenTokens[1]!=0) {
    text("2", position[greenTokens[1]][0], position[greenTokens[1]][1]+15);
  }else if(greenTokens[1]==0) {
    text("2",greenZero[1][0],greenZero[1][1]+15);
  }else if(greenTokens[1]=="HOME") {

  }

  if(greenTokens[2]!="HOME" && greenTokens[2]!=0) {
    text("3", position[greenTokens[2]][0], position[greenTokens[2]][1]+15);
  }else if(greenTokens[2]==0) {
    text("3",greenZero[2][0],greenZero[2][1]+15);
  }else if(greenTokens[2]=="HOME") {

  }

  if(greenTokens[3]!="HOME" && greenTokens[3]!=0) {
    text("4", position[greenTokens[3]][0], position[greenTokens[3]][1]+15);
  }else if(greenTokens[3]==0) {
    text("4",greenZero[3][0],greenZero[3][1]+15);
  }else if(greenTokens[3]=="HOME") {

  }

  fill(255,255,0);
  textSize(40);

  if(yellowTokens[0]!="HOME" && yellowTokens[0]!=0) {
    circle(position[yellowTokens[0]][0], position[yellowTokens[0]][1], 40);
  }else if(yellowTokens[0]==0) {
    circle(yellowZero[0][0],yellowZero[0][1],40);
  }else if(yellowTokens[0]=="HOME") {

  }

  if(yellowTokens[1]!="HOME" && yellowTokens[1]!=0) {
    circle(position[yellowTokens[1]][0], position[yellowTokens[1]][1], 40);
  }else if(yellowTokens[1]==0) {
    circle(yellowZero[1][0],yellowZero[1][1],40);
  }else if(yellowTokens[1]=="HOME") {

  }

  if(yellowTokens[2]!="HOME" && yellowTokens[2]!=0) {
    circle(position[yellowTokens[2]][0], position[yellowTokens[2]][1], 40);
  }else if(yellowTokens[2]==0) {
    circle(yellowZero[2][0],yellowZero[2][1],40);
  }else if(yellowTokens[2]=="HOME") {

  }

  if(yellowTokens[3]!="HOME" && yellowTokens[3]!=0) {
    circle(position[yellowTokens[3]][0], position[yellowTokens[3]][1], 40);
  }else if(yellowTokens[3]==0) {
    circle(yellowZero[3][0],yellowZero[3][1],40);
  }else if(yellowTokens[3]=="HOME") {

  }
  
  fill(0);

  if(yellowTokens[0]!="HOME" && yellowTokens[0]!=0) {
    text("1", position[yellowTokens[0]][0], position[yellowTokens[0]][1]+15);
  }else if(yellowTokens[0]==0) {
    text("1",yellowZero[0][0],yellowZero[0][1]+15);
  }else if(yellowTokens[0]=="HOME") {

  }

  if(yellowTokens[1]!="HOME" && yellowTokens[1]!=0) {
    text("2", position[yellowTokens[1]][0], position[yellowTokens[1]][1]+15);
  }else if(yellowTokens[1]==0) {
    text("2",yellowZero[1][0],yellowZero[1][1]+15);
  }else if(yellowTokens[1]=="HOME") {

  }

  if(yellowTokens[2]!="HOME" && yellowTokens[2]!=0) {
    text("3", position[yellowTokens[2]][0], position[yellowTokens[2]][1]+15);
  }else if(yellowTokens[2]==0) {
    text("3",yellowZero[2][0],yellowZero[2][1]+15);
  }else if(yellowTokens[2]=="HOME") {

  }

  if(yellowTokens[3]!="HOME" && yellowTokens[3]!=0) {
    text("4", position[yellowTokens[3]][0], position[yellowTokens[3]][1]+15);
  }else if(yellowTokens[3]==0) {
    text("4",yellowZero[3][0],yellowZero[3][1]+15);
  }else if(yellowTokens[3]=="HOME") {

  }

  fill(0,0,255);
  textSize(40);

  if(blueTokens[0]!="HOME" && blueTokens[0]!=0) {
    circle(position[blueTokens[0]][0], position[blueTokens[0]][1], 40);
  }else if(blueTokens[0]==0) {
    circle(blueZero[0][0],blueZero[0][1],40);
  }else if(blueTokens[0]=="HOME") {

  }

  if(blueTokens[1]!="HOME" && blueTokens[1]!=0) {
    circle(position[blueTokens[1]][0], position[blueTokens[1]][1], 40);
  }else if(blueTokens[1]==0) {
    circle(blueZero[1][0],blueZero[1][1],40);
  }else if(blueTokens[1]=="HOME") {

  }

  if(blueTokens[2]!="HOME" && blueTokens[2]!=0) {
    circle(position[blueTokens[2]][0], position[blueTokens[2]][1], 40);
  }else if(blueTokens[2]==0) {
    circle(blueZero[2][0],blueZero[2][1],40);
  }else if(blueTokens[2]=="HOME") {

  }

  if(blueTokens[3]!="HOME" && blueTokens[3]!=0) {
    circle(position[blueTokens[3]][0], position[blueTokens[3]][1], 40);
  }else if(blueTokens[3]==0) {
    circle(blueZero[3][0],blueZero[3][1],40);
  }else if(blueTokens[3]=="HOME") {

  }
  
  fill(0);

  if(blueTokens[0]!="HOME" && blueTokens[0]!=0) {
    text("1", position[blueTokens[0]][0], position[blueTokens[0]][1]+15);
  }else if(blueTokens[0]==0) {
    text("1",blueZero[0][0],blueZero[0][1]+15);
  }else if(blueTokens[0]=="HOME") {

  }

  if(blueTokens[1]!="HOME" && blueTokens[1]!=0) {
    text("2", position[blueTokens[1]][0], position[blueTokens[1]][1]+15);
  }else if(blueTokens[1]==0) {
    text("2",blueZero[1][0],blueZero[1][1]+15);
  }else if(blueTokens[1]=="HOME") {

  }

  if(blueTokens[2]!="HOME" && blueTokens[2]!=0) {
    text("3", position[blueTokens[2]][0], position[blueTokens[2]][1]+15);
  }else if(blueTokens[2]==0) {
    text("3",blueZero[2][0],blueZero[2][1]+15);
  }else if(blueTokens[2]=="HOME") {

  }

  if(blueTokens[3]!="HOME" && blueTokens[3]!=0) {
    text("4", position[blueTokens[3]][0], position[blueTokens[3]][1]+15);
  }else if(blueTokens[3]==0) {
    text("4",blueZero[3][0],blueZero[3][1]+15);
  }else if(blueTokens[3]=="HOME") {

  }

  fill(255,0,0);
  textSize(40);

  if(redTokens[0]!="HOME" && redTokens[0]!=0) {
    circle(position[redTokens[0]][0], position[redTokens[0]][1], 40);
  }else if(redTokens[0]==0) {
    circle(redZero[0][0],redZero[0][1],40);
  }else if(redTokens[0]=="HOME") {

  }

  if(redTokens[1]!="HOME" && redTokens[1]!=0) {
    circle(position[redTokens[1]][0], position[redTokens[1]][1], 40);
  }else if(redTokens[1]==0) {
    circle(redZero[1][0],redZero[1][1],40);
  }else if(redTokens[1]=="HOME") {

  }

  if(redTokens[2]!="HOME" && redTokens[2]!=0) {
    circle(position[redTokens[2]][0], position[redTokens[2]][1], 40);
  }else if(redTokens[2]==0) {
    circle(redZero[2][0],redZero[2][1],40);
  }else if(redTokens[2]=="HOME") {

  }

  if(redTokens[3]!="HOME" && redTokens[3]!=0) {
    circle(position[redTokens[3]][0], position[redTokens[3]][1], 40);
  }else if(redTokens[3]==0) {
    circle(redZero[3][0],redZero[3][1],40);
  }else if(redTokens[3]=="HOME") {

  }
  
  fill(0);

  if(redTokens[0]!="HOME" && redTokens[0]!=0) {
    text("1", position[redTokens[0]][0], position[redTokens[0]][1]+15);
  }else if(redTokens[0]==0) {
    text("1",redZero[0][0],redZero[0][1]+15);
  }else if(redTokens[0]=="HOME") {

  }

  if(redTokens[1]!="HOME" && redTokens[1]!=0) {
    text("2", position[redTokens[1]][0], position[redTokens[1]][1]+15);
  }else if(redTokens[1]==0) {
    text("2",redZero[1][0],redZero[1][1]+15);
  }else if(redTokens[1]=="HOME") {

  }

  if(redTokens[2]!="HOME" && redTokens[2]!=0) {
    text("3", position[redTokens[2]][0], position[redTokens[2]][1]+15);
  }else if(redTokens[2]==0) {
    text("3",redZero[2][0],redZero[2][1]+15);
  }else if(redTokens[2]=="HOME") {

  }

  if(redTokens[3]!="HOME" && redTokens[3]!=0) {
    text("4", position[redTokens[3]][0], position[redTokens[3]][1]+15);
  }else if(redTokens[3]==0) {
    text("4",redZero[3][0],redZero[3][1]+15);
  }else if(redTokens[3]=="HOME") {

  }

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
}

function getCunts() {
  green_count1=0;
  yellow_count1=0
  blue_count1=0;
  red_count1=0;
  green_count2=0;
  yellow_count2=0
  blue_count2=0;
  red_count2=0;

  for(let i=0;i<=3;i++) {
    if(greenTokens[i]==0) {
      green_count1++;
    }
  }

  for(let i=0;i<=3;i++) {
    if((path[0].indexOf(greenTokens[i])+diceCount)>=path[0].length) {
      green_count2++;
    }
  }

  for(let i=0;i<=3;i++) {
    if(yellowTokens[i]==0) {
      yellow_count1++;
    }
  }

  for(let i=0;i<=3;i++) {
    if((path[1].indexOf(yellowTokens[i])+diceCount)>=path[1].length) {
      yellow_count2++;
    }
  }

  for(let i=0;i<=3;i++) {
    if(blueTokens[i]==0) {
      blue_count1++;
    }
  }

  for(let i=0;i<=3;i++) {
    if((path[2].indexOf(blueTokens[i])+diceCount)>=path[2].length) {
      blue_count2++;
    }
  }

  for(let i=0;i<=3;i++) {
    if(redTokens[i]==0) {
      red_count1++;
    }
  }

  for(let i=0;i<=3;i++) {
    if((path[3].indexOf(redTokens[i])+diceCount)>=path[3].length) {
      red_count2++;
    }
  }
}

function get_box_counts_green() {
  for(let i=0;i<box_count.length;i++) {
    box_count[i]=0;
  }

  // for(let i=0;i<=3;i++) {
  //   if(greenTokens[i]!=0 && greenTokens[i]!=1 && greenTokens[i]!=9 && greenTokens[i]!=14 && greenTokens[i]!=22 && greenTokens[i]!=27 && greenTokens[i]!=35 && greenTokens[i]!=40 && greenTokens[i]!=48 && greenTokens[i]!=53 && greenTokens[i]!=54 && greenTokens[i]!=55 && greenTokens[i]!=56 && greenTokens[i]!=57 && greenTokens[i]!="HOME") {
  //     box_count[greenTokens[i]-1]++;
  //   }
  // }

  for(let i=0;i<=3;i++) {
    if(yellowTokens[i]!=0 && yellowTokens[i]!=1 && yellowTokens[i]!=9 && yellowTokens[i]!=14 && yellowTokens[i]!=22 && yellowTokens[i]!=27 && yellowTokens[i]!=35 && yellowTokens[i]!=40 && yellowTokens[i]!=48 && yellowTokens[i]!=58 && yellowTokens[i]!=59 && yellowTokens[i]!=60 && yellowTokens[i]!=61 && yellowTokens[i]!=62 && yellowTokens[i]!="HOME") {
      box_count[yellowTokens[i]-1]++;
    }
  }

  for(let i=0;i<=3;i++) {
    if(blueTokens[i]!=0 && blueTokens[i]!=1 && blueTokens[i]!=9 && blueTokens[i]!=14 && blueTokens[i]!=22 && blueTokens[i]!=27 && blueTokens[i]!=35 && blueTokens[i]!=40 && blueTokens[i]!=48 && blueTokens[i]!=63 && blueTokens[i]!=64 && blueTokens[i]!=65 && blueTokens[i]!=66 && blueTokens[i]!=67 && blueTokens[i]!="HOME") {
      box_count[blueTokens[i]-1]++;
    }
  }

  for(let i=0;i<=3;i++) {
    if(redTokens[i]!=0 && redTokens[i]!=1 && redTokens[i]!=9 && redTokens[i]!=14 && redTokens[i]!=22 && redTokens[i]!=27 && redTokens[i]!=35 && redTokens[i]!=40 && redTokens[i]!=48 && redTokens[i]!=68 && redTokens[i]!=69 && redTokens[i]!=70 && redTokens[i]!=71 && redTokens[i]!=72 && redTokens[i]!="HOME") {
      box_count[redTokens[i]-1]++;
    }
  }
}

function get_box_counts_yellow() {
  for(let i=0;i<box_count.length;i++) {
    box_count[i]=0;
  }

  for(let i=0;i<=3;i++) {
    if(greenTokens[i]!=0 && greenTokens[i]!=1 && greenTokens[i]!=9 && greenTokens[i]!=14 && greenTokens[i]!=22 && greenTokens[i]!=27 && greenTokens[i]!=35 && greenTokens[i]!=40 && greenTokens[i]!=48 && greenTokens[i]!=53 && greenTokens[i]!=54 && greenTokens[i]!=55 && greenTokens[i]!=56 && greenTokens[i]!=57 && greenTokens[i]!="HOME") {
      box_count[greenTokens[i]-1]++;
    }
  }

  // for(let i=0;i<=3;i++) {
  //   if(yellowTokens[i]!=0 && yellowTokens[i]!=1 && yellowTokens[i]!=9 && yellowTokens[i]!=14 && yellowTokens[i]!=22 && yellowTokens[i]!=27 && yellowTokens[i]!=35 && yellowTokens[i]!=40 && yellowTokens[i]!=48 && yellowTokens[i]!=58 && yellowTokens[i]!=59 && yellowTokens[i]!=60 && yellowTokens[i]!=61 && yellowTokens[i]!=62 && yellowTokens[i]!="HOME") {
  //     box_count[yellowTokens[i]-1]++;
  //   }
  // }

  for(let i=0;i<=3;i++) {
    if(blueTokens[i]!=0 && blueTokens[i]!=1 && blueTokens[i]!=9 && blueTokens[i]!=14 && blueTokens[i]!=22 && blueTokens[i]!=27 && blueTokens[i]!=35 && blueTokens[i]!=40 && blueTokens[i]!=48 && blueTokens[i]!=63 && blueTokens[i]!=64 && blueTokens[i]!=65 && blueTokens[i]!=66 && blueTokens[i]!=67 && blueTokens[i]!="HOME") {
      box_count[blueTokens[i]-1]++;
    }
  }

  for(let i=0;i<=3;i++) {
    if(redTokens[i]!=0 && redTokens[i]!=1 && redTokens[i]!=9 && redTokens[i]!=14 && redTokens[i]!=22 && redTokens[i]!=27 && redTokens[i]!=35 && redTokens[i]!=40 && redTokens[i]!=48 && redTokens[i]!=68 && redTokens[i]!=69 && redTokens[i]!=70 && redTokens[i]!=71 && redTokens[i]!=72 && redTokens[i]!="HOME") {
      box_count[redTokens[i]-1]++;
    }
  }
}

function get_box_counts_blue() {
  for(let i=0;i<box_count.length;i++) {
    box_count[i]=0;
  }

  for(let i=0;i<=3;i++) {
    if(greenTokens[i]!=0 && greenTokens[i]!=1 && greenTokens[i]!=9 && greenTokens[i]!=14 && greenTokens[i]!=22 && greenTokens[i]!=27 && greenTokens[i]!=35 && greenTokens[i]!=40 && greenTokens[i]!=48 && greenTokens[i]!=53 && greenTokens[i]!=54 && greenTokens[i]!=55 && greenTokens[i]!=56 && greenTokens[i]!=57 && greenTokens[i]!="HOME") {
      box_count[greenTokens[i]-1]++;
    }
  }

  for(let i=0;i<=3;i++) {
    if(yellowTokens[i]!=0 && yellowTokens[i]!=1 && yellowTokens[i]!=9 && yellowTokens[i]!=14 && yellowTokens[i]!=22 && yellowTokens[i]!=27 && yellowTokens[i]!=35 && yellowTokens[i]!=40 && yellowTokens[i]!=48 && yellowTokens[i]!=58 && yellowTokens[i]!=59 && yellowTokens[i]!=60 && yellowTokens[i]!=61 && yellowTokens[i]!=62 && yellowTokens[i]!="HOME") {
      box_count[yellowTokens[i]-1]++;
    }
  }

  // for(let i=0;i<=3;i++) {
  //   if(blueTokens[i]!=0 && blueTokens[i]!=1 && blueTokens[i]!=9 && blueTokens[i]!=14 && blueTokens[i]!=22 && blueTokens[i]!=27 && blueTokens[i]!=35 && blueTokens[i]!=40 && blueTokens[i]!=48 && blueTokens[i]!=63 && blueTokens[i]!=64 && blueTokens[i]!=65 && blueTokens[i]!=66 && blueTokens[i]!=67 && blueTokens[i]!="HOME") {
  //     box_count[blueTokens[i]-1]++;
  //   }
  // }

  for(let i=0;i<=3;i++) {
    if(redTokens[i]!=0 && redTokens[i]!=1 && redTokens[i]!=9 && redTokens[i]!=14 && redTokens[i]!=22 && redTokens[i]!=27 && redTokens[i]!=35 && redTokens[i]!=40 && redTokens[i]!=48 && redTokens[i]!=68 && redTokens[i]!=69 && redTokens[i]!=70 && redTokens[i]!=71 && redTokens[i]!=72 && redTokens[i]!="HOME") {
      box_count[redTokens[i]-1]++;
    }
  }
}

function get_box_counts_red() {
  for(let i=0;i<box_count.length;i++) {
    box_count[i]=0;
  }

  for(let i=0;i<=3;i++) {
    if(greenTokens[i]!=0 && greenTokens[i]!=1 && greenTokens[i]!=9 && greenTokens[i]!=14 && greenTokens[i]!=22 && greenTokens[i]!=27 && greenTokens[i]!=35 && greenTokens[i]!=40 && greenTokens[i]!=48 && greenTokens[i]!=53 && greenTokens[i]!=54 && greenTokens[i]!=55 && greenTokens[i]!=56 && greenTokens[i]!=57 && greenTokens[i]!="HOME") {
      box_count[greenTokens[i]-1]++;
    }
  }

  for(let i=0;i<=3;i++) {
    if(yellowTokens[i]!=0 && yellowTokens[i]!=1 && yellowTokens[i]!=9 && yellowTokens[i]!=14 && yellowTokens[i]!=22 && yellowTokens[i]!=27 && yellowTokens[i]!=35 && yellowTokens[i]!=40 && yellowTokens[i]!=48 && yellowTokens[i]!=58 && yellowTokens[i]!=59 && yellowTokens[i]!=60 && yellowTokens[i]!=61 && yellowTokens[i]!=62 && yellowTokens[i]!="HOME") {
      box_count[yellowTokens[i]-1]++;
    }
  }

  for(let i=0;i<=3;i++) {
    if(blueTokens[i]!=0 && blueTokens[i]!=1 && blueTokens[i]!=9 && blueTokens[i]!=14 && blueTokens[i]!=22 && blueTokens[i]!=27 && blueTokens[i]!=35 && blueTokens[i]!=40 && blueTokens[i]!=48 && blueTokens[i]!=63 && blueTokens[i]!=64 && blueTokens[i]!=65 && blueTokens[i]!=66 && blueTokens[i]!=67 && blueTokens[i]!="HOME") {
      box_count[blueTokens[i]-1]++;
    }
  }

  // for(let i=0;i<=3;i++) {
  //   if(redTokens[i]!=0 && redTokens[i]!=1 && redTokens[i]!=9 && redTokens[i]!=14 && redTokens[i]!=22 && redTokens[i]!=27 && redTokens[i]!=35 && redTokens[i]!=40 && redTokens[i]!=48 && redTokens[i]!=68 && redTokens[i]!=69 && redTokens[i]!=70 && redTokens[i]!=71 && redTokens[i]!=72 && redTokens[i]!="HOME") {
  //     box_count[redTokens[i]-1]++;
  //   }
  // }
}