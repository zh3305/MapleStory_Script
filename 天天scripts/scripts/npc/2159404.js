// Script created: 13.10.2015 10:23
// Author: Administrator

var killlist= {
"英雄":
Array( //英雄技能列表
Array(02290008,100),//[能手册]进阶斗气 20
Array(02290009,100),//[能手册]进阶斗气 30
Array(02290016,100),//[能手册]葵花宝典 20
Array(02290017,100),//[能手册]葵花宝典 30
Array(02290599,100),//[能手册]终极打击 20
Array(02290600,100),//[能手册]终极打击 30
Array(02291027,100),//[能手册]烈焰冲斩 20
Array(02291028,100),//[能手册]烈焰冲斩 30
//Array(02291029,100),//[能手册]虚空元素 20 (BUG)_
Array(02290096,100),//[能手册]冒险岛勇士 20
Array(02290125,100),//[能手册]冒险岛勇士 30
Array(02290291,100),//[能手册]进阶终极攻击30
Array(02290290,100),//[能手册]进阶终极攻击20
Array(02290065,100),//[能手册]进阶终极攻击30
Array(02290064,100)//[能手册]进阶终极攻击20
),
":
Array( //英雄技能列表
Array(02290030,100),//
)
,
"圣骑士":
Array( //英雄技能列表
Array(02290096,100),//[能手册]冒险岛勇士 20
Array(02290125,100),//[能手册]冒险岛勇士 30
Array(02290012,100),//[能手册]连环环破 20
Array(02290013,100),//[能手册]连环环破 30
Array(02290018,100),//[能手册]神圣冲击 20
Array(02290019,100),//[能手册]神圣冲击 30
Array(02290020,100),//[能手册]圣域 20
Array(02290021,100),//[能手册]圣域 30
Array(02291030,100),//[能手册]虚空元素 30
Array(02291031,100),//[能手册]守护之神 20
Array(02291032,100),//[能手册]圣骑士专家 20
Array(02291033,100)//[能手册]圣骑士专家 30
)
}

function start() {
    action(1, 0, 0);
}


var selectedItem = -1;
var selectedCost = -1;


var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    }
    else
     {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
   if (status == 0) {
         var selStr =
"亲爱的#r#h ##k您好，欢迎来到技能兑换处：\r\n 你的职业【"+cm.getJobNameById(   cm.getJob())+"】\r\n "
var itemList=killlist[cm.getJobNameById(cm.getJob())];
if(itemList==null)
{
            cm.sendOk(selStr +"非常抱歉，没有你需要的技能书，菜菜已经出门为你需找你的职业的能手册去了");
            cm.dispose();            return;
}

        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList

[i][1] / 5 + " #k点卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1] / 5;
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost +

" #k 点卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "点卷商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX( - selectedCost);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r"

+ selectedCost + "#k 点卷。");
        }
        cm.dispose();
    }
}