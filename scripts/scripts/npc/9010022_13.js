 /*
 夕阳制作★China冒险岛
 完成时间：2015年4月28日 16:34:19
 脚本功能：材料地图
 */

var status = 0;
var aaa ="#fEffect/CharacterEff/1082565/2/0#";
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的  #r#h ##k  您好，想传送到什么地方:\r\n";
		selStr += "#L0#" + eff + "#r#e 制作材料<1> #v4004001#\r\n"
		selStr += "#L1#" + eff + "#r#e 制作材料<2> #v4004000##v4000021#\r\n"
        selStr += "#L2#" + eff + "#r#e 制作材料<3> #v4004002#\r\n"
		selStr += "#L3#" + eff + "#r#e 制作材料<4> #v4004003##v4000021#\r\n"
        selStr += "#L4#" + eff + "#r#e 各种母矿<5> #v4004000# #v4004001# #v4004002# #v4004003#\r\n"
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
                cm.warp(270010500);
		        cm.sendOk("欢迎您来到<制作材料1>入口，祝您游戏愉快！");
				cm.dispose();
            break;
	    case 1:
                cm.warp(221023100);
		        cm.sendOk("欢迎您来到<制作材料2>斯入口，祝您游戏愉快！");
				cm.dispose();
            break;
	    case 2:
                cm.warp(261020200);
		        cm.sendOk("欢迎您来到<制作材料3>入口，祝您游戏愉快！");
				cm.dispose();
            break;
        case 3:
                cm.warp(211050000);
		        cm.sendOk("欢迎您来到<制作材料4>入口，祝您游戏愉快！");
				cm.dispose();
            break;
	    case 4:
                cm.warp(102010100);
		        cm.sendOk("欢迎您来到<幸运、智慧、力量、敏捷母矿>入口，祝您游戏愉快！");
				cm.dispose();
            break;

			
        }
        cm.dispose();
    }
}
