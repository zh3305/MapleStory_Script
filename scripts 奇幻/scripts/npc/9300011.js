/*
 夕阳制作★China冒险岛
 完成时间：2015年4月28日 16:34:19
 脚本功能：新手奖励
 */

var status = 0;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var text = "";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		cm.sendYesNo("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的 #r#h ##k 您好，请您选择需要领取的等级奖励: #k\r\n\r\n#b#L0#"+ eff + " [青铜] 领取等级奖励[30级]#l\r\n#L1#" + eff + " [白金] 领取等级奖励[70级]#l#k\r\n#b#L2#" + eff + " [黄金] 领取等级奖励[100级]#l#k\r\n#b#L3#" + eff + " [白银] 领取等级奖励[150级]#l#k\r\n#b#L4#" + eff + " [钻石] 领取等级奖励[200级]#l#k\r\n#b#L5#" + eff + " [王者] 领取等级奖励[250级]#l#k");

} else if (status == 1) {
        switch (selection) {
case 0:
if(cm.getBossLog("30级奖励",1) < 1 && (cm.getPlayer().getLevel() > 29 && cm.getPlayer().getLevel() < 250) && (cm.getSpace(5)>1 && cm.getSpace(1)>4)){
cm.gainItem(1142445, 1);//少侠勋章
cm.gainItem(1182021, 1);//铜徽章
cm.gainItem(1102563, 1);//10周年白色头
cm.gainItem(1052613, 1);//10周年白色衣
cm.gainItem(1003864, 1);//10周年白色披
cm.gainItem(5072000, 5);//高质地喇叭
cm.gainMeso(+200000);//金币20万
cm.setBossLog("30级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"[等级奖励] ：恭喜玩家 "+  cm.getChar().getName()  +" 成功领取[青铜]等级奖励[30级]，离超神更近了一步！");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(装备栏5个空位,特殊栏1个空位).\r\n#r注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
case 1:
if(cm.getBossLog("70级奖励",1) < 1 && (cm.getPlayer().getLevel() > 69 && cm.getPlayer().getLevel() < 250) && (cm.getSpace(5)>1 && cm.getSpace(1)>6)){
cm.gainMeso(+300000);//金币30万
cm.gainItem(1102394, 1);//紫金枫叶披
cm.gainItem(1082430, 1);//紫金枫叶手
cm.gainItem(1052457, 1);//紫金枫叶衣
cm.gainItem(1003529, 1);//紫金枫叶帽
cm.gainItem(1072660, 1);//紫金枫叶鞋
cm.gainItem(1142446, 1);//侠士勋章
cm.setBossLog("70级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"[等级奖励] ：恭喜玩家 "+  cm.getChar().getName()  +" 成功领取[白金]等级奖励[70级]，离超神更近了一步！");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(装备栏7个空位).\r\n#r注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
case 2:
if(cm.getBossLog("100级奖励",1) < 1 && (cm.getPlayer().getLevel() > 99 && cm.getPlayer().getLevel() < 250) && cm.getSpace(1)>6){
text+="#b抵用券#k - #rx2000#k\r\n";
//cm.gainNX(2, 2000);
cm.gainItem(1102441, 1);//专属紫金枫叶披
cm.gainItem(1082433, 1);//专属紫金枫叶手
cm.gainItem(1052461, 1);//专属紫金枫叶衣
cm.gainItem(1003552, 1);//专属紫金枫叶帽
cm.gainItem(1072666, 1);//专属紫金枫叶鞋
cm.gainItem(1142447, 1);//大侠勋章
cm.gainItem(1182022, 1);//银徽章
cm.setBossLog("100级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"[等级奖励] ：恭喜玩家 "+  cm.getChar().getName()  +" 成功领取[黄金]等级奖励[100级]，离超神更近了一步！");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(装备栏7个空位).\r\n#r注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
case 3:
if(cm.getBossLog("150级奖励",1) < 1 && (cm.getPlayer().getLevel() > 149 && cm.getPlayer().getLevel() < 250) && (cm.getSpace(1)>6 && cm.getSpace(3)>1)){
text+="#b抵用券#k - #rx3000#k\r\n";
//cm.gainNX(2, 3000);
cm.gainItem(1113164,1);//戒指
cm.gainItem(1032242,1);//耳环
cm.gainItem(1022233,1);//眼镜
cm.gainItem(1122285,1);//项链
cm.gainItem(1142448, 1);//神龙大侠勋章
cm.setBossLog("150级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"[等级奖励] ：恭喜玩家 "+  cm.getChar().getName()  +" 成功领取[白银]等级奖励[150级]，离超神更近了一步！");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(装备栏7个空位).\r\n#r注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
case 4:
if(cm.getBossLog("200级奖励",1) < 1 && (cm.getPlayer().getLevel() > 199 && cm.getPlayer().getLevel() < 250) && (cm.getSpace(1)>3 && cm.getSpace(3)>1)){
cm.gainItem(1190401,1, 7);//C等级BOSS竞技场徽章
cm.gainItem(1672008,1, 7);//珠饰心脏
cm.gainItem(1662008,1, 7);//普及型智能机器人
cm.gainItem(1182023,1);//金徽章
cm.setBossLog("200级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"[等级奖励] ：恭喜玩家 "+  cm.getChar().getName()  +" 成功领取[钻石]等级奖励[200级]，离超神更近了一步！");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(装备栏4个空位).\r\n#r注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
case 5:
if(cm.getBossLog("250级奖励",1) < 1 && (cm.getPlayer().getLevel() > 249) && (cm.getSpace(1)>4 && cm.getSpace(3)>1)){
cm.gainItem(1113056,1);//超越戒
cm.gainItem(1032201,1);//超越耳
cm.gainItem(1012414,1);//超越脸
cm.gainItem(1022195,1);//超越眼
cm.gainItem(1122259,1);//超越吊
cm.setBossLog("250级奖励",1);
cm.sendOk("你成功领取奖励");
cm.worldSpouseMessage(0x20,"[等级奖励] ：恭喜玩家 "+  cm.getChar().getName()  +" 成功领取[王者]等级奖励[250级]，离超神更近了一步！");
cm.dispose();
} else {
cm.sendOk("你的等级不满足条件，或没有足够的背包空间\r\n#b(装备栏5个空位).\r\n注:等级奖励只能领取一次.");
cm.dispose();
}
            break;
        }
		cm.dispose();
    }
}

