var btn = document.querySelector(".img");
var speed = 0;
var img = document.querySelector(".image");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var count = 1;
var num = 0;
var timer;
var upgrade = document.querySelector(".up1");
var upgrade2 = document.querySelector('.up2');
var upgrade3 = document.querySelector('.up3');
var ramAmount = document.querySelector('.amount1')

function addMB() {
  speed = speed + 1;
  document.getElementById("number").innerHTML = speed + "Mb/S";
  if (speed == 1) {
    console.log("dialup internet sounds comence");
  } else if (count === 2) {
    speed = speed + 1000;
    document.getElementById("number").innerHTML = speed + "Mb/S";
  }
}

function boost() {
  if (speed >= 2) {
    speed = speed - 2;
    speed = speed + 10;
    document.getElementById("number").innerHTML = speed + "Mb/S";
  }
}

function boost2() {
  if (speed >= 10) {
    speed = speed - 10;
    speed = speed * 2;
    document.getElementById("number").innerHTML = speed + "Mb/S";
  }
}
function boost3() {
  if (speed >= 20) {
    speed = speed - 20;
    document.getElementById("number").innerHTML = speed + "Mb/S";
    count = 2;
  }
}
function increementActivator() {
  if (speed >= 100) {
    speed = speed - 100;
    img.src='https://images-na.ssl-images-amazon.com/images/I/312oaz3U1WL.jpg';
  document.getElementById('number').innerHTML = speed + 'Mb/S';
        num = 1;
      setInterval(function() {
  increement();
}, 1000);

  }
}
function increement() {
  if (speed < 1000000000000000000000000000000000000000 && num == 1) {
    speed++;
    document.getElementById("number").innerHTML = speed + "Mb/S";
  } else {
    clearInterval(timer);
  }
}


function increement2() {
  if (speed < 1000000000000000000000000000000000000000 && num == 2) {
    speed = speed + 2;
    document.getElementById("number").innerHTML = speed + "Mb/S";
  } else {
    clearInterval(timer);
  }
}
function increementActivator2() {
  if (speed>=500) {
    speed = speed - 500;
  num = 2;
  img.src='https://images.techhive.com/images/article/2015/08/g4_cube_front-100604679-large.jpg';
    document.getElementById('number').innerHTML = speed + 'Mb/S';
    setInterval(function() {
  increement2();
}, 1000);
  }
}

function increement3() {
  if (speed < 1000000000000000000000000000000000000000 && num == 3) {
    speed = speed + 5;
    document.getElementById("number").innerHTML = speed + "Mb/S";
  } else {
    clearInterval(timer);
  }
}
function increementActivator3() {
  if (speed>=1000) {
    speed = speed - 1000;
  num = 3;
  img.src='https://www.digitalstorm.com/img/products/aventum/avx-overview-2-a.jpg';
    document.getElementById('number').innerHTML = speed + 'Mb/S';
    setInterval(function() {
  increement3();
}, 1000);
  }
}

btn.onclick = addMB;
btn1.onclick = boost;
btn2.onclick = boost2;
btn3.onclick = boost3;
upgrade.onclick = increementActivator;
upgrade2.onclick = increementActivator2;
upgrade3.onclick = increementActivator3;