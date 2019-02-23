var status = -1;
var itemList = Array(
Array(2460003, 5, 1002790),
Array(2460003, 5, 1002791),
Array(2460003, 5, 1002792),
Array(2460003, 5, 1002793),
Array(2460003, 5, 1002794),
Array(2460003, 5, 1052160),
Array(2460003, 5, 1052161),
Array(2460003, 5, 1052162),
Array(2460003, 5, 1052163),
Array(2460003, 5, 1052164),
Array(2460003, 5, 1072361),
Array(2460003, 5, 1072362),
Array(2460003, 5, 1072363),
Array(2460003, 5, 1072364),
Array(2460003, 5, 1072365),
Array(2460003, 5, 1082239),
Array(2460003, 5, 1082240),
Array(2460003, 5, 1082241),
Array(2460003, 5, 1082242),
Array(2460003, 5, 1082243),
Array(2460003, 5, 1212012),
Array(2460003, 5, 1222012),
Array(2460003, 5, 1302086),
Array(2460003, 5, 1312038),
Array(2460003, 5, 1322061),
Array(2460003, 5, 1332075),
Array(2460003, 5, 1332076),
Array(2460003, 5, 1342012),
Array(2460003, 5, 1362017),
Array(2460003, 5, 1372045),
Array(2460003, 5, 1382059),
Array(2460003, 5, 1402047),
Array(2460003, 5, 1412034),
Array(2460003, 5, 1422038),
Array(2460003, 5, 1432049),
Array(2460003, 5, 1442067),
Array(2460003, 5, 1452059),
Array(2460003, 5, 1462051),
Array(2460003, 5, 1472071),
Array(2460003, 5, 1482024),
Array(2460003, 5, 1492025),
Array(2460003, 5, 1522016),
Array(2460003, 5, 1532016),
Array(2460003, 5, 1942002),
Array(2460003, 5, 1952002),
Array(2460003, 5, 1962002),
Array(2460003, 5, 1972002),
Array(2460003, 5, 1002777),
Array(2460003, 5, 1002778),
Array(2460003, 5, 1002779),
Array(2460003, 5, 1002780),
Array(2460003, 5, 1032031),
Array(2460003, 5, 1052155),
Array(2460003, 5, 1052156),
Array(2460003, 5, 1052157),
Array(2460003, 5, 1052158),
Array(2460003, 5, 1052159),
Array(2460003, 5, 1072355),
Array(2460003, 5, 1072356),
Array(2460003, 5, 1072357),
Array(2460003, 5, 1072358),
Array(2460003, 5, 1072359),
Array(2460003, 5, 1082234),
Array(2460003, 5, 1082235),
Array(2460003, 5, 1082236),
Array(2460003, 5, 1082237),
Array(2460003, 5, 1082238),
Array(2460003, 5, 1092057),
Array(2460003, 5, 1092058),
Array(2460003, 5, 1092059),
Array(2460003, 5, 1102172),
Array(2460003, 5, 1212011),
Array(2460003, 5, 1302081),
Array(2460003, 5, 1312037),
Array(2460003, 5, 1322060),
Array(2460003, 5, 1332073),
Array(2460003, 5, 1332074),
Array(2460003, 5, 1342011),
Array(2460003, 5, 1362016),
Array(2460003, 5, 1382057),
Array(2460003, 5, 1402046),
Array(2460003, 5, 1412033),
Array(2460003, 5, 1422037),
Array(2460003, 5, 1432047),
Array(2460003, 5, 1442063),
Array(2460003, 5, 1452057),
Array(2460003, 5, 1462050),
Array(2460003, 5, 1472068),
Array(2460003, 5, 1482023),
Array(2460003, 5, 1492023),
Array(2460003, 5, 1522015),
Array(2460003, 5, 1532015)
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
            selStr += "\r\n#L"+i+"#用#i" + itemList[i][2] + "##k#r兑换#i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x (" + itemList[i][1] + ")#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            selectedCost = item[2];
            cm.sendYesNo("您是否兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r#i" + selectedCost + "##k 装备？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selequantity <= 0 || selectedItem <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.haveItem(selectedCost)) {
            if (cm.canHold(selectedItem, selequantity)) {
                cm.gainItem(selectedCost,-1);
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『兑换商城』 " + cm.getName() + " 玩家在放大镜商城兑换道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有#i" + selectedCost + "#。\r\n\r\n兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r#i" + selectedCost + "##k。");
        }
        cm.dispose();
    }
}