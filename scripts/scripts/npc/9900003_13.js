/*
 笔芯制作★风云工作室所有
 完成时间：2013年10月28日 16:34:19
 脚本功能：挑战首领
 */

var a = 0;
var selects;
var BossList = Array(
        Array("[新秀] 格瑞芬多", 240020101),
        Array("[新秀]] 鱼王-皮亚奴斯", 230040420),
        Array("[少侠] 妖精女王-艾菲尼娅", 300030300),
		Array("[少侠] 次元缝隙-阿卡伊勒祭坛", 272030000),
		Array("[大侠] 新加坡 - 千年树精王遗迹Ⅱ", 541020800),
        Array("[普通] 闹钟帕普拉图斯！", 220080000),
        Array("[大侠] 暴力熊、心疤狮王！", 551030100),
        Array("[掌门] 2线为普通扎昆、3线为进阶扎昆！", 211042200),
        Array("[掌门] 2和4线为普通黑龙，3线为进阶黑龙！", 240040700),
        Array("[宗师] 1线为普通品克缤，2线为混沌品克缤", 270050000),
	    Array("#r[宗师] 女皇 - 希纳斯的庭院", 271040000),
        //Array("#r[泰坦级] 强化钻机,弱小勿进(New~)", 703020000),
        Array("#r[盟主] 鲁塔比斯 - 四大天王BOSS 。", 105200000),
        //Array("[强化BOSS] 三头犬 - 血量非常多。", 510101100),
        Array("[盟主] 狮子王之城 - 接见室走廊", 211070000),
        Array("#d[盟主] 心树守护之地 - 超级贝勒德(New~)", 863000100),
        Array("#d[噩梦的牢笼] 进阶暴君战场 - 暴君麦格纳斯(New~)", 401072000)
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
            var text = "为了更方便的游戏，在这里可以传送到BOSS的传送点。\r\n#b"
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