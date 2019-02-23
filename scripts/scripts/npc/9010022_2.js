/*
 夕阳制作★China冒险岛
 完成时间：2015年4月28日 16:34:19
 脚本功能：练级地图
 */

var a = 0;
var selects;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var BossList = Array(
        Array(eff +" "+"[青铜] 绿蜗牛 [推荐:1 -10级],蜗牛壳换白色武器", 50000),
        Array(eff +" "+"[青铜] 蓝水灵 [推荐:10-20级]", 101020100),
		Array(eff +" "+"[白银] 石头人 [推荐:20-30级]", 100040300),
		Array(eff +" "+"[白银] 小幽灵 [推荐:40-50级]", 103020300),
        Array(eff +" "+"[黄金] 卡车怪 [推荐:50-70级],黑轮胎换紫金武器", 540020100),
		Array(eff +" "+"[黄金] 机械蛛 [推荐:80-90级]", 600020300),
        Array(eff +" "+"[白金] 幽灵船 [推荐:90-99级],绿精华换专属武器", 541010010),
        Array(eff +" "+"[白金] 白绵羊 [推荐:100-120级],绿嫩草换套装", 240010400),
        Array(eff +" "+"[钻石] 海盗船 [推荐:120-140级]", 251010403),
		Array(eff +" "+"[钻石] 追忆路 [推荐:140-160级],革命币换套装", 270010500),
		Array(eff +" "+"#r[大师] 外星领地 [推荐:160-180级],外星币换套装", 703001000),
		Array(eff +" "+"#r[大师] 高级骑士 [推荐:180-200级]", 271030500),
        Array(eff +" "+"#d[王者] 变形野猪 [推荐:200-220级]", 273030000),
        Array(eff +" "+"#d[王者] 混种石头 [推荐:220-250级]", 273060300)
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
            var text = "您可以在这里传送到练级地图，祝您游戏愉快！\r\n#b"
            for (var i = 0; i < BossList.length; i++) {
                text += "#L" + i + "# " + BossList[i][0] + "\r\n"
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            cm.sendYesNo("你想出发到"+" "+ BossList[selects][0] + "吗？")
        } else if (a == 2) {
            cm.saveLocation("MULUNG_TC");
            cm.warp(BossList[selects][1], 0)
            cm.dispose();
        }//a
    }//mode
}//f
