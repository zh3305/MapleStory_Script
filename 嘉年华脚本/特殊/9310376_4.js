/* 绝版点卷商店 帽子*/

var status = -1;
var itemList = Array(
Array(1004336, 150000),
Array(1003843, 3000),
Array(1004506, 15000),
Array(1004438, 15000),
Array(1004543, 15000),
Array(1004541, 15000),
Array(1004488, 15000),
Array(1003096, 15000),
Array(1004167, 15000),
Array(1004282, 15000),
Array(1003952, 15000),
Array(1003131, 15000),
Array(1004094, 15000),
Array(1004112, 15000),
Array(1004211, 15000),
Array(1004193, 15000),
Array(1003859, 15000),
Array(1004137, 15000),
Array(1003831, 15000),
Array(1003955, 15000),
Array(1004095, 15000),
Array(1004029, 15000),
Array(1003204, 15000),
Array(1004110, 15000),
Array(1001083, 15000),
Array(1001095, 15000),
Array(1004200, 15000),
Array(1003892, 15000),
Array(1004124, 15000),
Array(1003953, 15000),
Array(1001097, 15000),
Array(10000074, 15000),
Array(1004200, 15000),
Array(1001076, 15000),
Array(1004204, 15000),
Array(1004205, 15000),
Array(1003950, 15000),
Array(1004126, 15000),
Array(1002846, 15000),
Array(1004158, 15000),
Array(1004114, 15000),
Array(1002598, 15000),
Array(1004157, 10000),
Array(1004156, 10000),
Array(1004025, 15000),
Array(1004093, 15000),
Array(1002845, 10000), //粉红兔耳帽
Array(1002721, 10000), //狸毛护耳
Array(1002568, 10000), //手工编织发夹
Array(1002888, 10000), //丝带发箍(红色)
Array(1002890, 10000), //丝带发箍(蓝色)
Array(1002863, 20000), //小熊熊可爱帽
Array(1003207, 20000), //胡萝卜兔爆炸头
Array(1003051, 20000), //小狐狸
Array(1003048, 20000), //圣诞装饰帽
Array(1002995, 10000), //皇家海军帽
Array(1003012, 20000), //嫦娥发式
Array(1002876, 20000), //圣诞红发夹
Array(1002839, 20000), //南瓜棒球帽
Array(1001048, 3000), //鬼娃娃帽
Array(1003214, 14000),
Array(1003141, 14000),
Array(1003269, 14000),
Array(1003268, 14000),
Array(1003492, 14000),
Array(1003493, 14000),
Array(1003494, 14000),
Array(1003495, 14000),
Array(1003496, 14000),
Array(1003519, 14000),
Array(1003520, 14000),
Array(1002726, 14000),
Array(1002524, 14000),
Array(1002714, 14000),
Array(1002841, 14000),
Array(1003220, 14000),
Array(1003170, 14000),
Array(1003226, 14000),
Array(10000050, 14000),
Array(1003232, 14000),
Array(1001064, 14000),
Array(1001075, 14000),
Array(1003252, 14000),
Array(1003249, 14000),
Array(1001036, 14000),
Array(1002998, 14000),
Array(1003091, 14000),
Array(1003114, 14000),
Array(1003075, 14000),
Array(10000043, 14000),
Array(1003149, 14000),
Array(1002988, 14000),
Array(1003505, 115000),
Array(1003504, 115000),
Array(1003965, 115000),
Array(1003964, 115000),
Array(1003920, 115000),
Array(1003921, 115000),
Array(1003918, 115000),
Array(1003861, 115000),
Array(1003865, 115000),
Array(1003919, 115000),
Array(1002566, 115000),
Array(1003581, 115000),
Array(1003417, 14000),
Array(1003271, 14000),
Array(1003196, 14000),
Array(1003193, 14000),
Array(1003194, 14000)
//
);
var selectedItem = -1;
var selectedCost = -1;

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
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1]  + "#k点卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷？");
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
		if (cm.haveItem(4220098,1)){
			selectedCost = 1 ;
		}
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "点卷商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX( - selectedCost );
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷。");
        }
        cm.dispose();
    }
}