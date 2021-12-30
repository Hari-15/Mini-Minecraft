

 canvas = new fabric.canvas("MyCanvas");
var player_x = 10;
var player_y = 10;
var blocks_width = 30;
var block_height = 30;
var player_object = "";
var block_img_object = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set( {
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(blocks_width);
        block_img_object.scaleToHeight(block_height);
        block_img_object.set( {
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '80') {
        console.log("shift + p");
        blocks_width = blocks_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = blocks_width;
        document.getElementById("current_height").innerHTML = block_height; 
    }

    if(shiftKey == true && keyPressed =='77') {
        console.log("shift + m");
        blocks_width = blocks_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = blocks_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if(keyPressd == '38') {
        Up();
        console.log("up");
    }

    if(keyPressed == '40') {
        Down();
        console.log("down");
    }

    if(keyPressed == '37') {
        Left();
        console.log("left");
    }

    if(keyPressed == '39') {
        Right();
        console.log("right");
    }

    if(keyPressed == '87') {
        get_image("wall.png");
        console.log("wall");
    }

    if(keyPressed == '71') {
       get_image("ground.png");
       console.log("ground");
    }

    if(keyPressed == '76') {
        get_image("light_green.png");
        console.log("lightgreen");
    }

    if(keyPressed == '84') {
        get_image("trunk.jpg");
        console.log("trunk");
    }

    if(keyPressed == '82') {
        get_image("roof.jpg");
        console.log("roof");
    }

    if(keyPressed == '89') {
        new_image("yellow_wall.png");
        console.log("yellow wall");
    }

    if(keyPressed == '68') {
        new_image("dark_green.png");
        console.log("darkgreen");
    }

    if(keyPressed == '85') {
        new_image("unique.png");
        console.log("unique");
    }

    if(keyPressed == '67') {
        new_image("cloud.png");
        console.log("cloud");
    }


}

