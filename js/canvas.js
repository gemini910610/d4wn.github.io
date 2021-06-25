canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

//大外框
ctx.beginPath();
x = 10;
y = 10;
ctx.moveTo(x,y);
x = 990;
line();
x = x - 17.5;
y = y + 17.5*3;
line();
x = 625;
y = y + 5;
ctx.arcTo(625,y-5,x,y,5);
y = y + 12.5*3;
line();
x = 10;
line();
y = 10;
line();
fill("#535353");
ctx.closePath();

//中外框
ctx.beginPath();
x = 625-(1000-625);
y = 20;
ctx.moveTo(x,y);
x = 975;
line();
x = x - 10;
y = y + 30;
line();
x = 625-10;
line();
x = x - 12.5;
y = y + 12.5*3;
line();
x = 625-(1000-625);
line();
y = 20;
line();
fill("#7f7778");
ctx.closePath();

//血條
maxHp = 0;
hp = maxHp;
stage = 1;

function summon()
{
    for(i = 0;i < stage;i++)
    {
        maxHp = maxHp + Math.floor(Math.random()*stage*1.5+1)*Math.floor(Math.random()*6+1);
    }
    hp = maxHp;
    drawHp();
    showHp = document.getElementById("hp");
    showHp.innerText = hp + " / " + maxHp;
    showLv = document.getElementById("lv");
    if(stage == 101)
    {
        showLv.innerText = "LV. MAX";
    }
    else
    {
        showLv.innerText = "LV. " + stage;
    }
}

starburst = 0;
summon();
function atk()
{
    if (starburst == 0) {
      victory = document.getElementById("victory");
      victory.innerText = "";
      if (hp > 0) {
        audio = document.createElement("audio");
        audio.src = "sounds/sword.mp3";
        audio.play();
        b = document.getElementById("b");
        if (
          String(b.style.cursor) == "url(\"img/kirito.ico\"), auto" &&
          Math.floor(Math.random() * 16) == 0
        ) {
          audio = document.createElement("audio");
          audio.src = "sounds/starburst.mp3";
          audio.play();

          starburst = 16;
          damage = stage + Math.floor(maxHp*0.01);

          delay = function () {
            return new Promise(function (resolve, reject) {
              setTimeout(resolve, 175);
            });
          };
          delay()
            .then(function(){
                hp = hp - damage;
                drawHp();
                return delay();
            })
            .then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            }).then(function(){
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
                hp = hp - damage;
                drawHp();
                return delay();
            })
            .then(function () {
                audio = document.createElement("audio");
                audio.src = "sounds/sword.mp3";
                audio.play();
              hp = hp - damage;
              drawHp();
              starburst = 0;
            });
        } else {
          hp = hp - 1;
        }
        drawHp();
      }
      else if(stage-1 == 100)
      {
          victory.innerText = "Congratulations!!";
      }
      else {
        summon();
        stage = stage + 1;
      }
    }
}

function drawHp()
{
    showHp = document.getElementById("hp");
    showHp.innerText = hp + " / " + maxHp;
    if(hp <= 0)
    {
        victory = document.getElementById("victory");
        victory.innerText = "────────── VICTORY ──────────";
    }
    //血量底色
    ctx.beginPath();
    x = 255;
    y = 25;
    ctx.moveTo(x,y);
    x = 967.5;
    line();
    x = x - 6.5;
    y = y + 6.5*3;
    line();
    x = 610.5;
    line();
    x = x - 12.5;
    y =y + 12.5*3;
    line();
    x = 255;
    line();
    y = 25;
    line();
    x = x + 1;
    line();
    ctx.strokeStyle = "#44433b";
    ctx.lineWidth = 6;
    ctx.stroke();
    fill("#7f7778");
    ctx.closePath();

    rate = hp/maxHp;
    if(rate < 0)
    {
        rate = 0;
    }
    ctx.beginPath();
    x = 255;
    y = 25;
    ctx.moveTo(x,y);
    x = x + 712.5*rate;
    line();
    if(rate > 19/712.5)
    {
        x = x - 6.5;
        y = y + 6.5*3;
        line();
    }
    if(rate > 19/712.5)
    {
        if(rate > 362/712.5)
        {
            x = 610.5;
            line();
        }
        x = x - 12.5;
        y =y + 12.5*3;
        line();
        x = 255;
        line();
        y = 25;
        line();
        x = x + 1;
        line();
    }
    else
    {
        x = 255;
        y = 25 + 712.5*rate*3;
        line();
        y = 25;
        line();
    }
    rgd = ctx.createLinearGradient(255,25,255,82);
    if(rate > 362/712.5)
    {
        rgd.addColorStop(0,"#60ad09");
        rgd.addColorStop(1,"#7dba38");
    }
    else if(rate > 0.1)
    {
        rgd.addColorStop(0,"#b29e17");
        rgd.addColorStop(1,"#c4ae1d");
    }
    else
    {
        rgd.addColorStop(0,"#900138");
        rgd.addColorStop(1,"#8e1e39");
    }
    fill(rgd);
    ctx.closePath();
}

//血量
ctx.beginPath();
x = 640;
y = 67.5;
ctx.moveTo(x,y);
x = 850;
line();
y = 127.5;
line();
ctx.arcTo(630,127.5,630,72.5,5);
x = 630;
line();
ctx.arcTo(630,67.5,640,67.5,5);
fill("#7f7778");
ctx.closePath();

//等級
ctx.beginPath();
x = 850+5;
y = 67.5
ctx.moveTo(x,y);
x = 970;
line();
ctx.arcTo(975,67.5,975,122.5,5);
ctx.arcTo(975,127.5,855,127.5,5);
x = 850+5;
y = 127.5
line();
y = 10+10+30+10+7.5;
line();
fill("#7f7778");
ctx.closePath();

function line()
{
    ctx.lineTo(x,y);
}

function fill(color)
{
    ctx.fillStyle = color;
    ctx.fill();
}

stageClickCount = 0;
function showStage()
{
    victory = document.getElementById("victory");
    document.location.href = "#RPG";
    if(stageClickCount == 0)
    {
        stageClickCount = stageClickCount + 1;
    }
    else
    {
        if(victory.innerText[0] == "第")
        {
            if(hp > 0)
            {
                victory.innerText = "";
            }
            else
            {
                victory.innerText = "────────── VICTORY ──────────";
            }
        }
        else
        {
            victory.innerHTML = "<span class='a_kso'>第 " + (stage-1) + " 層</span>";
        }
    }
}