function setup() {
    let canvas = createCanvas(800, 600);
    canvas.id("my-container");
}

let img;
let img2;
let img3;
let img4;

function preload() {
    img = loadImage("assets/original.JPG");
    img2 = loadImage("assets/granny.JPG");
    img3 = loadImage("assets/woman.JPG");
    img4 = loadImage("assets/girl.JPG");
}


function draw() {
    background(0);
    image(img, 0, 0, 800, 600);

    if (400 < mouseX && mouseX < 600 && mouseY < 600 && 0 < mouseY) {
        image(img2, 0, 0, 800, 600);
        document.getElementById("main-paragraph").style.display = "none";
        document.getElementById("paragraph-1").style.display = "none";
        document.getElementById("paragraph-2").style.display = "none";
        document.getElementById("paragraph-3").style.display = "block";
        document.getElementById("enter").style.display = "none";
    }
    else if (300 < mouseX && mouseX < 400 && mouseY < 600 && 0 < mouseY) {
        image(img4, 0, 0, 800, 600);
        document.getElementById("main-paragraph").style.display = "none";
        document.getElementById("paragraph-1").style.display = "none";
        document.getElementById("paragraph-2").style.display = "block";
        document.getElementById("paragraph-3").style.display = "none";
        document.getElementById("enter").style.display = "none";
    }
    else if (100 < mouseX && mouseX < 300 && mouseY < 600 && 0 < mouseY) {
        image(img3, 0, 0, 800, 600);
        document.getElementById("main-paragraph").style.display = "none";
        document.getElementById("paragraph-1").style.display = "block";
        document.getElementById("paragraph-2").style.display = "none";
        document.getElementById("paragraph-3").style.display = "none";
        document.getElementById("enter").style.display = "none";
    }
    else {
        document.getElementById("main-paragraph").style.display = "block";
        document.getElementById("paragraph-1").style.display = "none";
        document.getElementById("paragraph-2").style.display = "none";
        document.getElementById("paragraph-3").style.display = "none";
        document.getElementById("enter").style.display = "none";
    }
    if (300 < mouseY && mouseY < 444 && 300 < mouseX && mouseX < 394) {
        textSize(35);
        text("进", mouseX, mouseY);
        document.getElementById("main-paragraph").style.display = "none";
        document.getElementById("paragraph-1").style.display = "none";
        document.getElementById("paragraph-2").style.display = "none";
        document.getElementById("paragraph-3").style.display = "none";
        document.getElementById("enter").style.display = "block";
        if (mouseIsPressed) {
            window.location.href = "books.html";
        }
    }

    console.log(mouseX, mouseY);
}