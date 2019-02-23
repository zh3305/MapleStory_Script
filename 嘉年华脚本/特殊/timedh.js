
var status = -1;
var itemList = Array(
Array(3010519, 1, 400),
Array(3010520, 1, 400),
Array(3012011, 1, 400),
Array(2431945, 1, 300),
Array(2431944, 1, 300),
//Array(5062024, 1, 50),
Array(5062000, 100, 150),
Array(5062002, 100, 150),
Array(5062500, 100, 150),
Array(5062010, 100, 150),
Array(1422036, 1, 30),
Array(1002677, 1, 30)

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
        var selStr = "亲爱的#r#h ##k您好，请选择您希望兑换的道具：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x(" + itemList[i][1] + ") #r" + itemList[i][2] + "#b个#v4001526##l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            selectedCost = item[2];
            cm.sendYesNo("您是否兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k #v4001526#？");
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
        if (cm.getItemQuantity(4001526) >= selectedCost) {
            if (cm.canHold(selectedItem, selequantity)) {
                cm.gainItem(4001526, - selectedCost);
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『物品兑换』 " + cm.getName() + " 玩家使用8周年金币兑换了： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("兑换失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else if (cm.getItemQuantity(4001526) >= selectedCost) {
	   if (cm.canHold(selectedItem, selequantity)) {
                cm.gainItem(4001526, - selectedCost);
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『物品兑换』 " + cm.getName() + " 玩家使用8周年金币兑换了： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("兑换失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }	
	} else {
            cm.sendOk("您没有足够的#v4001526#。\r\n\r\n兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k #v4001526#。");
        }
        status = -1;
    }
}