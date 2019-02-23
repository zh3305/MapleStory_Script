
var status = -1;
var itemList = Array(
Array(5390012, 1, 200),
Array(5390012, 10, 2000),
Array(2340000, 1, 200),
Array(2049122, 1, 800),
Array(2640010, 1, 1200),
Array(2640011, 1, 1000),
Array(2049750, 1, 800),
Array(2046074, 1, 1200),
Array(2046075, 1, 800),
Array(2046149, 1, 1200),
Array(2613000, 1, 1500),
Array(2613001, 1, 1000),
Array(2612010, 1, 1500),
Array(2640008, 1, 1500),
Array(2640009, 1, 1000),
Array(2047828, 1, 1500),
Array(2046996, 1, 2000),
Array(2046997, 1, 2000),
Array(2047818, 1, 2000),
Array(2046991, 1, 2500),
Array(2046992, 1, 2200),
Array(2047814, 1, 2500),
Array(5110000, 1, 200),
Array(1112116, 1, 2000),
Array(1112226, 1, 2000),
Array(1112156, 1, 2000),
Array(1112268, 1, 2000),
Array(1112126, 1, 2000),
Array(1112236, 1, 2000),
Array(1112159, 1, 2500),
Array(1112271, 1, 2500),
Array(1112142, 1, 3000),
Array(1112253, 1, 3000),
Array(1112171, 1, 3000),
Array(1112172, 1, 3000),
Array(1112283, 1, 30000),
Array(1112284, 1, 3000),
Array(1112162, 1, 3000),
Array(1112274, 1, 3000),
Array(1112940, 1, 4000),
Array(1112161, 1, 2000),
Array(1112273, 1, 2000),
Array(1112151, 1, 2000),
Array(1112263, 1, 2000),
Array(1112150, 1, 2500),
Array(1112262, 1, 2500),
Array(1112145, 1, 2500),
Array(1112257, 1, 2500),
Array(1112153, 1, 2500),
Array(1112265, 1, 2500),
Array(1112152, 1, 2500),
Array(1112264, 1, 2500),
Array(1003141, 1, 2500),
Array(1003362, 1, 2500),
Array(1004026, 1, 2500),
Array(1004027, 1, 2500),
Array(1003386, 1, 2500),
Array(1002524, 1, 2500),
Array(1001076, 1, 2500),
Array(1000050, 1, 2500),
Array(1004126, 1, 2500),
Array(1003919, 1, 2500),
Array(1004029, 1, 2500),
Array(1003133, 1, 2500),
Array(1003268, 1, 2500),
Array(1003920, 1, 2500),
Array(1003917, 1, 2500), 
Array(1003918, 1, 2500),
Array(1003171, 1, 2500),
Array(1003269, 1, 2800), 
Array(1003884, 1, 2800), 
Array(1003921, 1, 2800), 
Array(1003462, 1, 2800), 
Array(1003597, 1, 2800), 
Array(1003596, 1, 2800), 
Array(1004112, 1, 2800), 
Array(1003807, 1, 2800), 
Array(1003463, 1, 2800),
Array(1004190, 1, 2800), 
Array(1004200, 1, 3500), 
Array(1002654, 1, 3500),
Array(1002956, 1, 3500), 
Array(1002942, 1, 2000),
Array(1004283, 1, 2000),
Array(1004284, 1, 2000),
Array(1004285, 1, 2000),
Array(1003910, 1, 2000),
Array(1004094, 1, 4000),
Array(1042208, 1, 2000),
Array(1042232, 1, 2000),
Array(1052731, 1, 2000),
Array(1052626, 1, 2000),
Array(1102709, 1, 3000),
Array(1102669, 1, 3500),
Array(1102625, 1, 3500),
Array(1102491, 1, 3500),
Array(1102380, 1, 3000),
Array(1062211, 1, 3000),
Array(1032234, 1, 3500),
Array(5010009, 1, 2000),
Array(2048309, 1, 2000),
Array(5010027, 1, 2100),
Array(5010039, 1, 2100),
Array(5010054, 1, 2100),
Array(5010039, 1, 2100),
Array(5010055, 1, 2100),
Array(1102546, 1, 3500),
Array(1102547, 1, 3500),
Array(1102548, 1, 3500),
Array(5010076, 1, 2100),
Array(5010038, 1, 2100),
Array(5010108, 1, 2100),
Array(5010101, 1, 2100)
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
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x(" + itemList[i][1] + ") #r" + itemList[i][2] + "#b个#v4001266##l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            selectedCost = item[2];
            cm.sendYesNo("您是否兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k #v4001266#？");
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
        if (cm.getItemQuantity(4001266) >= selectedCost) {
            if (cm.canHold(selectedItem, selequantity)) {
                cm.gainItem(4001266, - selectedCost);
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『玩具塔兑换』 " + cm.getName() + " 玩家使用劳动奖章兑换了： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("兑换失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else if (cm.getItemQuantity(4001266) >= selectedCost) {
	   if (cm.canHold(selectedItem, selequantity)) {
                cm.gainItem(4001266, - selectedCost);
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『玩具塔兑换』 " + cm.getName() + " 玩家使用劳动奖章兑换了： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("兑换失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }	
	} else {
            cm.sendOk("您没有足够的#v4001266#。\r\n\r\n兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k #v4001266#。");
        }
        status = -1;
    }
}