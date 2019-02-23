/* 全职业副手商店 */

var status = -1;
var itemList = Array(
Array(1353105, 50000),
Array(1342095, 50000),
Array(1352009, 50000),
Array(1352109, 50000),
Array(1352206, 50000),
Array(1352216, 50000),
Array(1352226, 50000),
Array(1352276, 50000),
Array(1352286, 50000),
Array(1352296, 50000),
Array(1352406, 50000),
Array(1352506, 50000),
Array(1352707, 50000),
Array(1352815, 50000),
Array(1352906, 50000),
Array(1352916, 50000),
Array(1352935, 50000),
Array(1352945, 50000),
Array(1352957, 50000),
Array(1352967, 50000),
Array(1352975, 50000),
Array(1353006, 50000),
Array(1352928, 50000),
Array(1352236, 50000),
Array(1352246, 50000),
Array(1352256, 50000),
Array(1352266, 50000),
Array(1352606, 50000),
Array(1099011, 50000),
Array(1099012, 50000)
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
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k<A级未鉴定>   #r" + itemList[i][1]  + "#k点卷#l";
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
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            //var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "点卷商店", 3, true);
            var ii = cm.getItemInfo();					
			var toDrop = ii.getEquipById(selectedItem).copy(); // 生成一个Equip类
			toDrop.setState(1);
			toDrop.setPotential1(-18);
			toDrop.setPotential4(-18);   
			toDrop.setPotential5(-18);
			toDrop.setPotential6(-18);                 
			cm.addFromDrop(cm.getC(), toDrop, false);
		//	if (gachaponItem != -1) {
            cm.gainNX( - selectedCost );
			cm.worldMessageItem("[副手商店] : " + "就是豪气！玩家[" + cm.getPlayer().getName() + "]购买了A级未鉴定银河系列装备。", toDrop);
            cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
       //     } else {
         //       cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
        //    }
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷。");
        }
        cm.dispose();
    }
}