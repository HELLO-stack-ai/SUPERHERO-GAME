var canvas=new fabric.Canvas('myCanvas');

super_hero_x=10;
super_hero_y=10;

block_image_width=30;
block_image_height=30;

var super_hero_object="";
var block_image_object="";

function player_update(){

   fabric.Image.fromURL("player.png" , function(Img){
     super_hero_object=Img;
   
     super_hero_object.scaleToWidth(150);
     super_hero_object.scaleToHeight(150);
     super_hero_object.set({
top:super_hero_y,
left:super_hero_x
     });
     canvas.add(super_hero_object)
    }); 
}

function new_image(get_image){

   fabric.Image.fromURL(get_image , function(Img){
       block_image_object=Img;

       block_image_object.scaleToWidth(block_image_width);
       block_image_object.scaleToHeight(block_image_height);
       block_image_object.set({
        top:super_hero_y,
        left:super_hero_x
             });
             canvas.add(block_image_object)
   });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(e.shiftKey==true && keypressed=='80'){
        console.log("p and shiftKey pressed together");
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true && keypressed=='77'){
        console.log("m and shiftKey pressed together");
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(keypressed=='70'){
       new_image("ironman_face (1).png");
       console.log("f");
    }

    if(keypressed=='66'){
      new_image("spiderman_body (1).png");
      console.log("b");
   }

   if(keypressed=='76'){
      new_image("hulk_legs (1).png");
      console.log("l");
   }

   if(keypressed=='82'){
      new_image("thor_right_hand (1).png");
      console.log("r");
   }

   if(keypressed=='72'){
      new_image("captain_america_left_hand (1).png");
      console.log("h");
   }

    if(keypressed=='38'){
       up();
       console.log("up");
    }

    if(keypressed=='40'){
        down();
        console.log("down");
     }
     if(keypressed=='37'){
        left();
        console.log("left");
     }
     if(keypressed=='39'){
        right();
        console.log("right");
     }
   }

   function up(){
      if(super_hero_y>=0){
         super_hero_y=super_hero_y - block_image_height;
         console.log("block_image_height= "+block_image_height);
         console.log("When up arrow key is pressed, x= "+super_hero_x+",y= "+super_hero_y);
         canvas.remove(super_hero_object);
         player_update();
      }
   }

   function down(){
      if(super_hero_y<=500){
         super_hero_y=super_hero_y + block_image_height;
         console.log("block_image_height= "+block_image_height);
         console.log("When down arrow key is pressed, x= "+super_hero_x+",y= "+super_hero_y);
         canvas.remove(super_hero_object);
         player_update();
      }
   }

   function left(){
      if(super_hero_x>=0){
         super_hero_x=super_hero_x - block_image_height;
         console.log("block_image_height= "+block_image_height);
         console.log("When left arrow key is pressed, x= "+super_hero_x+",y= "+super_hero_y);
         canvas.remove(super_hero_object);
         player_update();
      }
   }

   function right(){
      if(super_hero_x<=850){
         super_hero_x=super_hero_x + block_image_height;
         console.log("block_image_height= "+block_image_height);
         console.log("When right arrow key is pressed, x= "+super_hero_x+",y= "+super_hero_y);
         canvas.remove(super_hero_object);
         player_update();
      }
   }

   