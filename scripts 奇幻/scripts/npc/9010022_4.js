/*
 夕阳制作★China冒险岛
 完成时间：2015年4月28日 16:34:19
 脚本功能：旅游地图
 */

var a = 0;
var selects;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var BossList = Array(
        Array(eff+" "+"市区中心-新叶城", 600000000),
		Array(eff+" "+"古代神社-江户村", 800000000),
		Array(eff+" "+"东方神州-嵩山镇", 702000000),
        Array(eff+" "+"东方神州-上海外滩",701000000),
		Array(eff+" "+"东方神州-大雄宝殿", 702100000),
		Array(eff+" "+"吉隆都市-马来西亚", 550000000),
		Array(eff+" "+"水上市场-泰国", 500000000),
		Array(eff+" "+"红鸾宫入口", 541000200)
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
            var text = "您可以传送到旅游地图，祝您游戏愉快！\r\n#b"
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
