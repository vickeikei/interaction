function setup() {
    let canvas = createCanvas(800, 600);
    canvas.id("bmy-container");
  }

let img5;
let tpisbImg;
let silenceImg;
let tasteImg;
let yolkImg;
let mechImg;
let circlingImg;
let tvdImg;
let phoImg;
let tatbImg;
let girlImg;
let charmedImg;
let cdwyImg;
  
  function preload() {
    img5 = loadImage("assets/bookWall.jpg");
    tpisbImg = loadImage("assets/tpisb.jpeg");
    silenceImg = loadImage("assets/silence.jpeg");
    tasteImg = loadImage("assets/taste.jpeg");
    yolkImg = loadImage("assets/yolk.jpeg");
    mechImg = loadImage("assets/mech.jpeg");
    circlingImg = loadImage("assets/circling.jpeg");
    tvdImg = loadImage("assets/tvd.jpeg");
    phoImg = loadImage("assets/pho.jpeg");
    tatbImg = loadImage("assets/tatb.jpeg");
    girlImg = loadImage("assets/girl.jpeg");
    charmedImg = loadImage("assets/charmed.jpeg");
    cdwyImg = loadImage("assets/cdwy.jpeg");
  }
  
  function draw() {
    background(220);
    image(img5, 0, 0, 800, 600);
    //place
    if (325 < mouseX && mouseX < 474 && 289 < mouseY && mouseY < 493){
      image(tpisbImg, 336, 304, 126, 178);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "block";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/58984692-this-place-is-still-beautiful";
      }
    }
    //silence
    else if (117 < mouseX && mouseX < 236 && 94 < mouseY && mouseY < 250){
      image(silenceImg, 123, 101, 106, 142);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "block";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/59028585-the-silence-that-binds-us";
      }
    }
    //taste
    else if (279 < mouseX && mouseX < 392 && 123 < mouseY && mouseY < 267){
      image(tasteImg, 306, 145, 62, 99);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "block";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/53320702-a-taste-for-love";
      }
    }
    //yolk
    else if (87 < mouseX && mouseX < 209 && 305 < mouseY && mouseY < 462){
      image(yolkImg, 95, 313, 106, 142);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "block";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/43562313-yolk";
      }
    }
     //mech
    else if (238 < mouseX && mouseX < 306 && 291 < mouseY && mouseY < 381){
      image(mechImg, 254, 313, 33, 49);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "block";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/58857822-my-mechanical-romance";
      }
    }
     //circling
    else if (235 < mouseX && mouseX < 305 && 426 < mouseY && mouseY < 517){
      image(circlingImg, 257, 449, 28, 42);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "block";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/59410616-circling-back-to-you";
      }
    }
     //tvd
    else if (425 < mouseX && mouseX < 529 && 125 < mouseY && mouseY < 366){
      image(tvdImg, 445, 146, 68, 99);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "block";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/50892212-these-violent-delights";
      }
    }
     //pho
    else if (504 < mouseX && mouseX < 565 && 293 < mouseY && mouseY < 370){
      image(phoImg, 509, 300, 52, 65);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "block";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/54238295-a-pho-love-story";
      }
    }
     //tatb
    else if (501 < mouseX && mouseX < 569 && 404 < mouseY && mouseY < 489){
      image(tatbImg, 523, 428, 25, 41);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "block";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/15749186-to-all-the-boys-i-ve-loved-before";
      }
    }
     //girl
    else if (565 < mouseX && mouseX < 687 && 118 < mouseY && mouseY < 266){
      image(girlImg, 576, 129, 103, 130);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "block";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/56978100-the-girl-who-fell-beneath-the-sea";
      }
    }
     //charmed
    else if (615 < mouseX && mouseX < 677 && 292 < mouseY && mouseY < 372){
      image(charmedImg, 620, 297, 50, 69);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "block";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/57365743-the-charmed-list";
      }
    }
     //cdwy
    else if (608 < mouseX && mouseX < 700 && 393 < mouseY && mouseY < 513){
      image(cdwyImg, 614, 401, 77, 99);
      document.getElementById("default").style.display = "none";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "block";
      document.getElementById("bfooter").style.display = "none";
      if (mouseIsPressed) {
        window.location.href = "https://www.goodreads.com/book/show/49399658-counting-down-with-you";
      }
    }
    else {
      document.getElementById("default").style.display = "block";
      document.getElementById("tpisb").style.display = "none";
      document.getElementById("silence").style.display = "none";
      document.getElementById("taste").style.display = "none";
      document.getElementById("yolk").style.display = "none";
      document.getElementById("mech").style.display = "none";
      document.getElementById("circling").style.display = "none";
      document.getElementById("tvd").style.display = "none";
      document.getElementById("pho").style.display = "none";
      document.getElementById("tatb").style.display = "none";
      document.getElementById("girl").style.display = "none";
      document.getElementById("charmed").style.display = "none";
      document.getElementById("cdwy").style.display = "none";
      document.getElementById("bfooter").style.display = "block";
    }

    // console.log(mouseX, mouseY);
  }
  
  