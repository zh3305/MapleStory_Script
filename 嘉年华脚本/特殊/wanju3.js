
var status = -1;
var itemList = Array(
Array(5001009, 1, 1000),
Array(5001010, 1, 1000),
Array(5001011, 1, 1000),
Array(5390022, 1, 100),
Array(5390017, 1, 100),
Array(5390010, 1, 100),
Array(5390020, 1, 100),
Array(5390021, 1, 100),
Array(5390011, 1, 100),
Array(5000271, 1, 1000),
Array(5000272, 1, 1000),
Array(5000273, 1, 1000),
Array(5000221, 1, 600),
Array(5000215, 1, 600),
Array(5000072, 1, 600),
Array(5000081, 1, 600),
Array(5000270, 1, 600),
Array(5000239, 1, 1000),
Array(5000287, 1, 1000),
Array(5000288, 1, 1000),
Array(5000311, 1, 1000),
Array(5000249, 1, 1000),
Array(5000250, 1, 1000),
Array(5000251, 1, 1000),
Array(5000256, 1, 1000),
Array(5000257, 1, 1000),
Array(5000258, 1, 1000),
Array(5000261, 1, 1000),
Array(5000275, 1, 1000),
Array(5000276, 1, 1000),
Array(5000277, 1, 1000),
Array(5000281, 1, 1000),
Array(5000282, 1, 1000),
Array(5000283, 1, 1000),
Array(5000299, 1, 1000),
Array(5000316, 1, 1000),
Array(5000317, 1, 1000),
Array(5000320, 1, 1000),
Array(5000321, 1, 1000),
Array(5000322, 1, 1000),
Array(5000328, 1, 1000),
Array(5000330, 1, 1000),
Array(5000331, 1, 1000),
Array(5000332, 1, 1000),
Array(5000341, 1, 1000),
Array(5000342, 1, 1000),
Array(5000343, 1, 1000),
Array(5000344, 1, 1000),
Array(5000345, 1, 1000),
Array(5000038, 1, 1000),
Array(5000268, 1, 1000),
Array(5000290, 1, 1000),
Array(5000291, 1, 1000),
Array(5000292, 1, 1000),
Array(5000293, 1, 1000),
Array(5000294, 1, 1000),
Array(5000295, 1, 1000),
Array(5000324, 1, 1000),
Array(5000054, 1, 1000),
Array(1702452, 1, 500),
Array(1702480, 1, 3000),
Array(1702485, 1, 3000),
Array(1702455, 1, 3100),
Array(1702472, 1, 3100),
Array(1702350, 1, 3100),
Array(1702466, 1, 3100),
Array(1702301, 1, 3100), 
Array(1702310, 1, 3100),
Array(1702341, 1, 3100),
Array(1702368, 1, 3100), 
Array(1702402, 1, 3100), 
Array(1702405, 1, 3100) 

);
var selectedItem = -1;
var selequantity = -1;
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望兑换的道具：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x (" + itemList[i][1] + ")   #r" + itemList[i][2] + "#b个#v4031454##l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            selectedCost = item[2];
            cm.sendYesNo("您是否兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k #v4031454#？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selequantity <= 0 || selectedItem <= 0) {
            cm.sendOk("兑换道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getItemQuantity(4031454) >= selectedCost) {
            if (cm.canHold(selectedItem, selequantity)) {
                cm.gainItem(4031454, - selectedCost);
                 cm.gainPetItem(selectedItem, selequantity);
                cm.worldMessage("『玩具塔兑换』 " + cm.getName() + " 玩家使用圣杯兑换了： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("兑换失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else if (cm.getItemQuantity(4031454) >= selectedCost) {
	   if (cm.canHold(selectedItem, selequantity)) {
                cm.gainItem(4031454, - selectedCost);
                 cm.gainPetItem(selectedItem, selequantity);
                cm.worldMessage("『玩具塔兑换』 " + cm.getName() + " 玩家使用圣杯兑换了： " + cm.getItemName(selectedItem) + " x " + selequantity);

                cm.sendOk("恭喜您成功兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("兑换失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }	
	} else {
            cm.sendOk("您没有足够的#v4031454#。\r\n\r\n兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k #v4031454#。");
        }
        status = -1;
    }
}