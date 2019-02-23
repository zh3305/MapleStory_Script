/* 绝版点卷商店 武器 */

var status = -1;
var itemList = Array(
Array(1402014, 300000),
Array(1702581, 50000),
Array(1702565, 50000),
Array(1702608, 50000),
Array(1702607, 50000),
Array(1702577, 50000),
Array(1702593, 50000),
Array(1702594, 50000),
Array(1702595, 50000),
Array(1702611, 50000),
Array(1702588, 50000),
Array(1702589, 50000),
Array(1702623, 50000),
Array(1702625, 50000),
Array(1702626, 50000),
Array(1702617, 50000),
Array(1702624, 50000),
Array(1702628, 50000),
Array(1702630, 50000),
Array(1702633, 50000),
Array(1702635, 50000),
Array(1702560, 50000),
Array(1702567, 50000),
Array(1702566, 50000),
Array(1702507, 50000),
Array(1702489, 50000),
Array(1702486, 50000),
Array(1702488, 50000),
Array(1702557, 50000),
Array(1702534, 50000),
Array(1702533, 50000),
Array(1702505, 50000),
Array(1702503, 50000),
Array(1702528, 50000),
Array(1702501, 50000),
Array(1702305, 50000),
Array(1702478, 50000),
Array(1702530, 50000),
Array(1702382, 50000),
Array(1702466, 40000),
Array(1702334, 40000),
Array(1702480, 40000),
Array(1702485, 4500),
Array(1702509, 40000),
Array(1702013, 50000),
Array(1702374, 40000),
Array(1702512, 40000),
Array(1702459, 40000),
Array(1702508, 40000),
Array(1702233, 40000),
Array(40000897, 40000),
Array(1702228, 10000), //可可香蕉
Array(1702155, 30000), //绚丽彩虹
Array(1702182, 20000), //洛丽波板糖
Array(1702208, 10000), //搞怪鳄鱼
Array(1702285, 20000), //蓝色蝴蝶结手提包
Array(1702302, 10000), //杯具
Array(1702261, 30000), //樱花棒
Array(1702091, 20000), //网球拍
Array(1702168, 20000), //闪亮圣诞树
Array(1702367, 14000),
Array(1702341, 14000),
Array(1322102, 14000),
Array(1702366, 14000),
Array(1702352, 14000),
Array(1302037, 14000),
Array(1302061, 14000),
Array(1302063, 14000),
Array(1302080, 14000),
Array(1302084, 14000),
Array(1302085, 14000),
Array(1302087, 14000),
Array(1302169, 14000),
Array(1322051, 14000),
Array(1332032, 14000),
Array(1332053, 14000),
Array(1372017, 14000),
Array(1372031, 14000),
Array(1402037, 14000),
Array(1402049, 14000),
Array(1402063, 14000),
Array(1422011, 14000),
Array(1432039, 14000),
Array(1432046, 14000),
Array(1442026, 14000),
Array(1442065, 14000),
Array(1442088, 14000),
Array(1472063, 14000),
Array(1702342, 14000),
Array(1702337, 14000),
Array(1702335, 14000),
Array(1702330, 14000),
Array(1702346, 14000),
Array(1702341, 14000),
Array(1702340, 14000),
Array(1702324, 14000),
Array(1322102, 14000),
Array(1412056, 14000),
Array(1402110, 14000),
Array(1702310, 14000),
Array(1702329, 14000),
Array(1702316, 14000),
Array(1702309, 14000),
Array(1702408, 15000),
Array(1702415, 15000),
Array(1702403, 15000),
Array(1702402, 15000),
Array(1702375, 15000),
Array(1702348, 15000),
Array(1702442, 15000),
Array(1702422, 15000),
Array(1702446, 15000),
Array(1702422, 15000)
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