var status = -1;

var itemList = Array(
	Array(1003448, 2500),
	Array(1003766, 20000),
	Array(1003784, 30000),
	Array(1003785, 30000),
	Array(1002797, 2000),
	Array(1003980, 3500),
	Array(1004012, 5000),
	Array(1003752, 3500),
	Array(1003753, 4000),
	Array(1003755, 4500),
	Array(1003055, 2500),
	Array(1003924, 2500),
	Array(1003916, 3000),
	Array(1012201, 1500),
	Array(1012338, 2000),
	Array(1012174, 100000),
	Array(1022147, 1500),
	Array(1022097, 1500),
	Array(1022117, 3000),
	Array(1032167, 2000),
	Array(1032093, 1500),
	Array(1032110, 2500),
	Array(1032136, 3500), 
	Array(1032218, 2500), 
	Array(1052526, 3500), 
	Array(1052527, 3500), 
	Array(1072872, 2500), 
	Array(1003979, 2000), 
	Array(1072679, 1500), 
	Array(1072368, 1500), 
	Array(1082431, 2000), 
	Array(1092039, 1000), 
	Array(1092022, 1000),
	Array(1102248, 3500), 
	Array(1102497, 2000), 
	Array(1102601, 2000), 
	Array(1102322, 2000), 
	Array(1102562, 4000), 
	Array(1102489, 4500),   	
	Array(1102606, 2500)
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
