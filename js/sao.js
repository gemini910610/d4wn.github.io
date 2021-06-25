startY = 0;
endY = 0;

dragArea = document.getElementById("b");
dragArea.addEventListener(
  "mousedown",
  function (e) {
    startY = e.clientY;
  },
  false
);
dragArea.addEventListener(
  "mouseup",
  function (e) {
    endY = e.clientY;
    activateOptions(startY, endY);
  },
  false
);

active = false;

function activateOptions(sY, eY) {
  menu = document.getElementById("menu");
  dragDistance = 50;

  if (sY + dragDistance < eY && active == false) {
    menu.style.transform = "translate(-50px,50px)";
    sao_menu_panel = document.getElementById("sao_menu_panel");
    sao_menu_panel.style.display = "";
    audio = document.createElement("audio");
    audio.src = "sounds/fadeIn.wav";
    audio.play();
    active = true;
  } else if (sY - dragDistance > eY && active == true) {
    menu.style.transform = "translate(-50px,-200px)";
    sao_menu_panel = document.getElementById("sao_menu_panel");
    sao_menu_panel.style.display = "none";
    if(sao_menu_panel.style.width == "236px")
    {
        clickinfo();
    }
    audio = document.createElement("audio");
    audio.src = "sounds/fadeOut.wav";
    audio.play();
    active = false;
  }
}

function oninfo() {
    option = document.getElementById("sao-option-info");
    option.style.backgroundImage = "url('img/btn_hover.png')";
    info_option = document.getElementById("info-option");
    info_option.style.backgroundImage = "url('img/info_hover.png')";
}
function outinfo() {
    option = document.getElementById("sao-option-info");
    option.style.backgroundImage = "url('img/btn_normal.png')";
    info_option = document.getElementById("info-option");
    info_option.style.backgroundImage = "url('img/info_normal.png')";
}
function downinfo() {
    option = document.getElementById("sao-option-info");
    option.style.backgroundImage = "url('img/btn_press.png')";
    audio = document.createElement("audio");
    audio.src = "sounds/press.wav";
    audio.play();
}
function clickinfo() {
    sao_menu_panel = document.getElementById("sao_menu_panel");
    sao_main = document.getElementById("panel_main");
    sao_title = document.getElementById("panel_title");
    panel_right_arrowhead = document.getElementById("panel_right_arrowhead");
    if(sao_menu_panel.style.width == "236px")
    {
        sao_menu_panel.style.transitionDelay = "0.2s";
        sao_menu_panel.style.width = "0";
        sao_main.style.transitionDelay = "0s";
        sao_main.style.opacity = 0;
        sao_title.style.transitionDelay = "0s";
        sao_title.style.opacity = 0;
        panel_right_arrowhead.style.opacity = 0;
        panel_right_arrowhead.style.transform = "translateX(-22px)";
    }
    else
    {
        sao_menu_panel.style.transitionDelay = "0s";
        sao_menu_panel.style.width = "236px";
        sao_main.style.transitionDelay = "0.4s";
        sao_main.style.opacity = 1;
        sao_title.style.transitionDelay = "0.4s";
        sao_title.style.opacity = 1;
        panel_right_arrowhead.style.opacity = 1;
        panel_right_arrowhead.style.transform = "translateX(0)";
    }
}

function onplugin() {
    option = document.getElementById("sao-option-plugin");
    option.style.backgroundImage = "url('img/btn_hover.png')";
    plugin_option = document.getElementById("plugin-option");
    plugin_option.style.backgroundImage = "url('img/plugin_hover.png')";
}
function outplugin() {
    option = document.getElementById("sao-option-plugin");
    option.style.backgroundImage = "url('img/btn_normal.png')";
    plugin_option = document.getElementById("plugin-option");
    plugin_option.style.backgroundImage = "url('img/plugin_normal.png')";
}
function downplugin() {
    option = document.getElementById("sao-option-plugin");
    option.style.backgroundImage = "url('img/btn_press.png')";
    audio = document.createElement("audio");
    audio.src = "sounds/press.wav";
    audio.play();
}

function onsetting() {
    option = document.getElementById("sao-option-setting");
    option.style.backgroundImage = "url('img/btn_hover.png')";
    setting_option = document.getElementById("setting-option");
    setting_option.style.backgroundImage = "url('img/setting_hover.png')";
}
function outsetting() {
    option = document.getElementById("sao-option-setting");
    option.style.backgroundImage = "url('img/btn_normal.png')";
    setting_option = document.getElementById("setting-option");
    setting_option.style.backgroundImage = "url('img/setting_normal.png')";
}
function downsetting() {
    option = document.getElementById("sao-option-setting");
    option.style.backgroundImage = "url('img/btn_press.png')";
    audio = document.createElement("audio");
    audio.src = "sounds/press.wav";
    audio.play();
}

function rpg() {
    audio = document.createElement("audio");
    s = ["kirito","asuna"];
    audio.src = "sounds/linkstart-" + s[Math.floor(Math.random()*2)] + ".mp3";
    audio.play();
}

cursorCount = 0;
function changeCursor()
{
    cursorCount = cursorCount + 1;
    b = document.getElementById("b");
    if(cursorCount > 6)
    {
        cursorCount = 0;
    }
    if(cursorCount == 0)
    {
        b.style.cursor = "auto";
    }
    else if(cursorCount == 1)
    {
        b.style.cursor = "url('img/bluerose.ico'),auto";
    }
    else if(cursorCount == 2)
    {
        b.style.cursor = "url('img/alice.ico'),auto";
    }
    else if(cursorCount == 3)
    {
        b.style.cursor = "url('img/asuna.ico'),auto";
    }
    else if(cursorCount == 4)
    {
        b.style.cursor = "url('img/darknight.ico'),auto";
    }
    else if(cursorCount == 5)
    {
        b.style.cursor = "url('img/kirito.ico'),auto";
    }
    else if(cursorCount == 6)
    {
        b.style.cursor = "url('img/yuki.ico'),auto";
    }
}