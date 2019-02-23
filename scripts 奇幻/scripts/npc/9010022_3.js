/*
 夕阳制作★China冒险岛
 完成时间：2015年4月28日 16:34:19
 脚本功能：跳跳地图
 */

var a = 0;
var selects;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var BossList = Array(
        Array(eff+" "+"[有奖]射手村—公园", 100000202),
		Array(eff+" "+"[有奖]玩具城—训练场", 220000006),
	    Array(eff+" "+"[简单]忍苦森林", 910130000),
        Array(eff+" "+"[简单]上楼上楼", 109030001),
        Array(eff+" "+"[困难]神秘岛—火山心脏", 280020000),
		Array(eff+" "+"[困难]向高地—四个阶段", 109040001),
		Array(eff+" "+"[噩梦]废弃都市 B-1", 910360000),
		Array(eff+" "+"[噩梦]废弃都市 B-2", 910360100),
		Array(eff+" "+"[噩梦]废弃都市 B-3", 910360200)
        )

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            var text = "您可以传送到跳跳娱乐地图，祝您游戏愉快！\r\n#b"
            for (var i = 0; i < BossList.length; i++) {
                text += "#L" + i + "# " + BossList[i][0] + "\r\n"
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            cm.sendYesNo("你现在想出发到" + BossList[selects][0] + "吗？")
        } else if (a == 2) {
            cm.saveLocation("MULUNG_TC");
            cm.warp(BossList[selects][1], 0)
            cm.dispose();
        }//a
    }//mode
}//f
