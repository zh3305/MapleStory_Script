/* 绝版点卷商店披风 */

var status = -1;
var itemList = Array(
Array(1702611, 50000),
Array(1102841, 150000),
Array(1102625, 80000),

Array(1102724, 1000000),
Array(1102723, 1000000),
Array(1102815, 100000),
Array(1102816, 100000),
Array(1102798, 100000),
Array(1102813, 100000),
Array(1102820, 100000),
Array(1102822, 100000),
Array(1102823, 100000),
Array(1102827, 100000),
Array(1102842, 100000),
//====================
Array(1102671, 100000),
Array(1102466, 100000),
Array(1102572, 100000),
Array(1102309, 100000),
Array(1102308, 50000),
Array(1102307, 50000),
Array(1102757, 50000),
Array(1102709, 50000),
Array(1102699, 50000),
Array(5010101, 50000),
Array(1102376, 50000),
Array(1102548, 50000),
Array(1102587, 50000),
Array(1102511, 50000),
Array(1102683, 50000),
Array(1102705, 50000),
Array(1102550, 50000),
Array(1102620, 50000),
//Array(1102583, 40000),
Array(1102676, 45000),
Array(1102644, 50000),
Array(1102726, 50000),
Array(1102142, 40000),
Array(1102697, 40000),
Array(1102688, 40000),
Array(1102669, 40000),
Array(1102225, 50000), //嫦娥披风
Array(1102217, 50000), //九尾披风
Array(1102157, 50000), //傀儡枷锁
Array(1102503, 50000),
Array(1102380, 44000),
Array(1102385, 44000),
Array(1102386, 44000),
Array(1102238, 44000),
Array(1102245, 44000),
Array(1102285, 44000),
Array(1102286, 44000),
Array(1102287, 44000),
Array(1102270, 44000),
Array(1102273, 44000),
Array(1102288, 44000),
Array(1102253, 44000),
Array(1102298, 44000),
Array(1102299, 44000),
Array(1102297, 44000),
Array(1102310, 44000),
Array(1102319, 44000),
Array(1102272, 44000),
Array(1102323, 44000),
Array(1102324, 44000),
Array(1102349, 44000),
Array(1102325, 44000),
Array(1102326, 44000),
Array(1102338, 44000),
Array(1102350, 44000),
Array(1102374, 44000),
Array(1102353, 44000),
Array(1102357, 44000),
Array(1102593, 45000),
Array(1102564, 45000),
Array(1102615, 45000),
//Array(1102453, 50000), 
Array(1102450, 50000), 
Array(1102451, 50000), 
Array(1102452, 50000), 
Array(1102511, 50000), 
Array(1102385, 50000), 
Array(1102386, 50000), 
Array(1102487, 50000)
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