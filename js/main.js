birthday_text = document.getElementById("birthday");
day_now = new Date();
now = new Date(day_now.getFullYear(), day_now.getMonth(), day_now.getDate());
birthday = new Date(day_now.getFullYear(), 5, 10);
if (birthday < now)
{
    birthday = new Date(day_now.getFullYear() + 1, 5, 10);
}
diff = parseInt((birthday - now) / 1000 / 60 / 60 / 24);
if (diff == 0)
{
    birthday_text.innerText = "Today";
}
else if (diff == 1)
{
    birthday_text.innerText = "1 day left";
}
else
{
    birthday_text.innerText = diff + " days left";
}

function item(i)
{
    topbar = document.getElementById("topbar");
    sidebar = document.getElementById("sidebar");
    sidebar_button = document.getElementById("sidebar-button");
    if(i == 1)
    {
        topbar.style.display = "none";
        sidebar_button.style.display = "";
        sidebar.style.display = "none";
    }
    else if(i == 2)
    {
        sidebar.style.display = "none";
        sidebar_button.style.display = "";
    }
    else if(i == 3)
    {
        sidebar_button.style.display = "none";
        sidebar.style.display = "";
    }
    else
    {
        sidebar.style.display = "none";
        sidebar_button.style.display = "none";
        topbar.style.display = "";
    }
}

window.onscroll = function ()
{
    h = document.getElementById("HELP").offsetTop;
    if (document.documentElement.scrollTop >= h-1)
    {
        item(1);
    }
    else
    {
        item(4);
    }
}

function Q1()
{
    q = document.getElementById("Q");
    a = document.getElementById("A");
    q.innerText = "如何通關";
    a.innerText = "從第0層開始，打到第100層\n這雖然是遊戲，但可不是鬧著玩的";
}

function Q2()
{
    q = document.getElementById("Q");
    a = document.getElementById("A");
    q.innerText = "掉落物";
    a.innerText = "想太多了！！\n沒有掉落物！！";
}

function Q3()
{
    q = document.getElementById("Q");
    a = document.getElementById("A");
    q.innerText = "特殊選單";
    a.innerText = "按住滑鼠向下滑試試看\n會有不一樣的發現\n按住滑鼠往上滑就可以收起";
}

function Q4()
{
    q = document.getElementById("Q");
    a = document.getElementById("A");
    q.innerText = "星爆氣流斬";
    a.innerText = "觸發方式：拿著指定的武器，以16分之一的機率發動\n效果：高速16連斬，造成當前層數（附加10％天命）的傷害";
}