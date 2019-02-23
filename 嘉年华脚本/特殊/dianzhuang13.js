/* 绝版点卷商店新加专卖Array(, 30000),*/

var status = -1;
var itemList = Array(

Array(1051409, 53000),
Array(1051410, 53000),
Array(1052844, 53000),
Array(1052872, 53000),
Array(1052900, 53000),
Array(1082574, 53000),
Array(1082620, 53000),
Array(1082503, 50000),
//Array(1112291, 53000),
Array(1004044, 50000),
Array(1102655, 50000),
Array(1004050, 50000),
Array(1702456, 63000),
Array(1052849, 50000),
//Array(1102491, 50000),
Array(1052853, 53000),
Array(1004337, 50000),
Array(1004108, 50000),
Array(1052725, 50000),
Array(1072921, 50000),
Array(1702463, 50000),
Array(1052850, 55000),
Array(1001099, 55000),
Array(1051411, 50000),
Array(1052910, 50000),//
Array(1702579, 50000),//
Array(1702403, 50000),//
Array(1702540, 50000),//
Array(1702541, 50000),//
Array(1702549, 50000),//
Array(1702550, 50000),//
Array(1702553, 50000),//
Array(1702570, 50000),//
Array(1702571, 50000),//
Array(1702544, 50000),//
Array(1702556, 50000),//
Array(1004453, 50000),//
Array(1003461, 50000),//
Array(1082591, 50000),//
Array(1081014, 55000),//
Array(1080008, 55000),//
Array(1052845, 50000),//
//Array(1112183, 70000),//
//Array(1112296, 60000),//
//Array(1112285, 50000),//
//Array(1112173, 50000),//
//Array(1112284, 50000),//
//Array(1112283, 50000),//
//Array(1112172, 50000),//
//Array(1112171, 50000),//
Array(1004397, 50000),//
Array(1004471, 55000),//
Array(1052253, 50000),//
Array(1051407, 50000),//
Array(1004472, 50000),//
Array(1051429, 50000),//
Array(1050359, 50000),//
Array(1052846, 50000),//
Array(1051386, 50000),//
Array(1051384, 50000),//
Array(1051383, 50000),//
Array(1051391, 50000),//
Array(1051387, 50000),//
Array(1702399, 50000),//1051387
Array(1052579, 50000),//
Array(1072782, 50000),//
Array(1082505, 50000),//
Array(1052602, 50000),//
Array(1102631, 50000),//
Array(1004073, 50000),//3.28
Array(1042187, 50000),
Array(1042292, 50000),
Array(1052178, 50000),
Array(1002878, 50000),
Array(1001098, 55000),
Array(1051408, 50000),
Array(1050339, 50000),
Array(1102729, 50000),
Array(1072978, 55000),
Array(1702538, 50000),
Array(1062228, 50000),
Array(1102690, 50000),
Array(1052762, 50000),
Array(1042292, 50000),
Array(1702548, 50000),
Array(1004202, 50000),
Array(1052774, 50000),
Array(1072945, 50000),
Array(1004201, 50000),
Array(1052773, 50000),
Array(1072944, 50000),
Array(1004162, 55000),
Array(1052875, 50000),
Array(1072930, 55000),
Array(1004209, 55000),
Array(1052779, 50000),
Array(1073023, 55000),
Array(1062224, 50000),
Array(1042340, 50000),
Array(1702304, 50000),
Array(1062223, 50000),
Array(1042339, 50000),
Array(1073022, 55000),
Array(1004056, 50000),
Array(1050308, 50000),
Array(1072852, 50000),
Array(1050296, 50000),
Array(1051362, 50000),
Array(1072920, 55000),
Array(1004113, 55000),
Array(1052726, 50000),
Array(1051365, 50000),//贝塔战袍
Array(1050298, 50000),//阿尔法
Array(1052671, 50000),//特大
Array(1702420, 350000), //水晶光芒   武器
Array(1003508, 50000),//西红柿帽子
Array(1052448, 50000),//西红柿外套
//Array(1112930, 50000), //西红柿特效
Array(1052841, 50000),//甜西红柿外套
Array(1003509, 50000), //香肠帽
Array(1052449, 50000),//香肠外套
Array(1702364, 50000),//龙奴   武器
Array(1702385, 50000),//动物 武器
Array(1702388, 50000),//动物 武器
Array(1702389, 50000),//动物 武器
Array(1702330, 70000),//银河群星  武器
Array(1702397, 70000),//银河  武器
Array(1004093, 50000), 
Array(1004117, 50000), 
Array(1062213, 50000),
Array(1082592, 80000),
Array(1072843, 50000),
Array(1102789, 50000),
Array(1042059, 50000),
Array(1062185, 50000),
Array(1042066, 50000),
Array(1702491, 350000), 
Array(1102807, 350000), 
Array(1102779, 350000), 
Array(1102811, 350000), 
Array(1102812, 350000), 
Array(1102761, 350000), 
Array(1040001, 50000), 
Array(1072010, 50000), 
//Array(1082493, 50000),
Array(1003776, 50000),
//Array(1052550, 50000),
//Array(1004332, 50000),
Array(1042338, 50000),
Array(1073013, 50000),
Array(1062222, 50000)
//Array(1112165, 50000),
//Array(1112178, 50000),
//Array(1112144, 50000),
//Array(1112256, 50000),
//Array(1112179, 50000)
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