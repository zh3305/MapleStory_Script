/* 点卷商店 - 双倍道具经验卡 */

var status = -1;

var itemList = Array(
Array(1112793, 20),
Array(1022148, 28),//  这个是眼饰的 
Array(1012319, 18), // 这个是脸饰的
Array(1112918, 18, 7),
Array(2431938, 198),
//Array(2070019, 20),
Array(1132246, 128),
Array(1122267, 128),
Array(1032223, 128),
Array(1113075, 128),
Array(1122122, 268),
Array(1122123, 268),
Array(1122124, 268),// -
Array(1122125, 268),//  - 
Array(1122126, 268),//  -
Array(1102471, 80), // 赫里希安精锐战士披风 // (无描述)
Array(1102472, 80), // 赫里希安精锐法师披风 // (无描述)
Array(1102473, 80), // 赫里希安精锐弓箭手披风 // (无描述)
Array(1102474, 80), // 赫里希安精锐飞侠披风 // (无描述)
Array(1102475, 80), // 赫里希安精锐海盗披风 // (无描述)
Array(1072732, 80), // 赫里希安精锐战士靴 // (无描述)
Array(1072733, 80), // 赫里希安精锐法师靴 // (无描述)
Array(1072734, 80), // 赫里希安精锐弓箭手靴 // (无描述)
Array(1072735, 80), // 赫里希安精锐飞侠靴 // (无描述)
Array(1072736, 80), // 赫里希安精锐海盗靴 // (无描述)
Array(1132164, 80), // 赫里希安精锐战士腰带 // (无描述)
Array(1132165, 80), // 赫里希安精锐法师腰带 // (无描述)
Array(1132166, 80), // 赫里希安精锐弓箭手腰带 // (无描述)
Array(1132167, 80), // 赫里希安精锐飞侠腰带 // (无描述)
Array(1132168, 80), // 赫里希安精锐海盗腰带 // (无描述)
/*
Array(1102476, 120), // 诺巴西亚戴斯披风 // (无描述)
Array(1102477, 120), // 诺巴赫尔梅斯披风 // (无描述)
Array(1102478, 120), // 诺巴凯伦披风 // (无描述)
Array(1102479, 120), // 诺巴利卡昂披风 // (无描述)
Array(1102480, 120), // 诺巴阿尔泰披风 // (无描述)
Array(1072737, 120), // 诺巴西亚戴斯靴 // (无描述)
Array(1072738, 120), // 诺巴赫尔梅斯靴 // (无描述)
Array(1072739, 120), // 诺巴凯伦靴 // (无描述)
Array(1072740, 120), // 诺巴利卡昂靴 // (无描述)
Array(1072741, 120), // 诺巴阿尔泰靴 // (无描述)
Array(1132169, 150), // 诺巴西亚戴斯腰带 // (无描述)
Array(1132170, 150), // 诺巴赫尔梅斯腰带 // (无描述)
Array(1132171, 150), // 诺巴凯伦腰带 // (无描述)
Array(1132172, 150), // 诺巴利卡昂腰带 // (无描述)
Array(1132173, 150), // 诺巴阿尔泰腰带 // (无描述)
/*
Array(1102481, 298), // 暴君西亚戴斯披风 // (无描述)
Array(1102482, 298), // 暴君赫尔梅斯披风 // (无描述)
Array(1102483, 298), // 暴君凯伦披风 // (无描述)
Array(1102484, 298), // 暴君利卡昂披风 // (无描述)
Array(1102485, 298), // 暴君阿尔泰披风 // (无描述)
Array(1072743, 298), // 暴君西亚戴斯靴 // (无描述)
Array(1072744, 298), // 暴君赫尔梅斯靴 // (无描述)
Array(1072745, 298), // 暴君凯伦靴 // (无描述)
Array(1072746, 298), // 暴君利卡昂靴 // (无描述)
Array(1072747, 298), // 暴君阿尔泰靴 // (无描述)
Array(1132174, 298), // 暴君西亚戴斯腰带 // (无描述)
Array(1132175, 298), // 暴君赫尔梅斯腰带 // (无描述)
Array(1132176, 298), // 暴君凯伦腰带 // (无描述)
Array(1132177, 298),// 暴君利卡昂腰带 // (无描述)
Array(1132178, 298),// 暴君阿尔泰腰带 // (无描述)*/
Array(1142210, 60),//  - 
Array(1142178, 60)//  -
);
var itemId = -1;
var points = -1;
var period = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的道具：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k点卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            itemId = item[0];
            points = item[1];
            period = item[2];
            cm.sendYesNo("您是否购买#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 点卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (itemId <= 0 || points <= 0 || period <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= points) {
            if (cm.haveItem(itemId)) {
                cm.sendOk("您已经拥有#i" + itemId + ":# #b#t" + itemId + "##k无需重复购买。");
            } else {
                cm.gainNX( - points);
                cm.gainItemPeriod(itemId, 1, period);
                cm.sendOk("恭喜您成功购买#i" + itemId + ":# #b#t" + itemId + "##k。");
				cm.dispose();
			}
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 点卷。");
        }
        cm.dispose();
    }
}