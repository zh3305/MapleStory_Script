/* 点卷商店 - 喇叭道具 */

var status = -1;
var itemList = Array(
// 高质地喇叭 - 全区的人都听得见角色说的
Array(5072000, 10, 5000), Array(5072000, 50, 25000), Array(5072000, 100, 50000),
// 心脏高级喇叭 - 全区的人都听得见角色说的，在对话窗出现心脏标志
Array(5073000, 10, 10000), Array(5073000, 50, 50000), Array(5073000, 100, 100000),
// 白骨高级喇叭 - 全区的人都听得见角色说的，在对话窗出现白骨标志
Array(5074000, 10, 10000), Array(5074000, 50, 50000), Array(5074000, 100, 100000),
// 道具喇叭 - 把想介绍的道具放上去，就可以在全区内显示道具情报和角色所说的话。
Array(5076000, 10, 10000), Array(5076000, 50, 50000), Array(5076000, 100, 100000),
// 蛋糕高级喇叭 - 蛋糕模样的高级喇叭
Array(5079001, 10, 10000), Array(5079001, 50, 50000), Array(5079001, 100, 100000),
// 馅饼高级喇叭 - 馅饼模样的高级喇叭
Array(5079002, 10, 10000), Array(5079002, 50, 50000), Array(5079002, 100, 100000),
// 缤纷喇叭 - 一次可以显示3行句子的缤纷喇叭，还可以选择个性图文。全服务器的人都可以看见，非常震撼。
Array(5077000, 10, 15000), Array(5077000, 50, 75000), Array(5077000, 100, 150000),
// 炽热情景喇叭 - 使用它可以把你的形象显示在所有频道，伴随你的穿着显示在所有人的屏幕上，并有燃烧背景哦
Array(5390000, 10, 15000), Array(5390000, 50, 75000), Array(5390000, 100, 150000),
// 绚烂情景喇叭 - 使用它可以把你的形象显示在所有频道，伴随你的穿着显示在所有人的屏幕上，并有明亮背景哦
Array(5390001, 10, 15000), Array(5390001, 50, 75000), Array(5390001, 100, 150000),
// 爱心情景喇叭 - 使用它可以把你的形象显示在所有频道，伴随你的穿着显示在所有人的屏幕上，并有爱心背景哦
Array(5390002, 10, 15000), Array(5390002, 50, 75000), Array(5390002, 100, 150000),
// 小老虎情景喇叭 - 使用该道具,会出现小老虎背景,全服务器的人都可以看得见的可爱的情景喇叭哦!
Array(5390005, 10, 15000), Array(5390005, 50, 75000), Array(5390005, 100, 150000),
// 咆哮老虎情景喇叭 - 虎年专用情景喇叭,有老虎咆哮效果.全服务器的人都可以看得见的帅气的情景喇叭哦!
Array(5390006, 10, 20000), Array(5390006, 50, 100000), Array(5390006, 100, 200000),
// 球进了!情景喇叭 - "进球的激动时刻,向大家呐喊""球进了!"" 你的角色形象将显示在屏幕右上方."
Array(5390007, 10, 20000), Array(5390007, 50, 100000), Array(5390007, 100, 200000),
// 世界杯情景喇叭 - "为世界杯喝彩!  你的角色形象将显示在屏幕右上方."
Array(5390008, 10, 20000), Array(5390008, 50, 100000), Array(5390008, 100, 200000),
// 鬼出没情景喇叭 - 使用它可以把你的形象显示在所有频道，伴随你的穿着显示在所有人的屏幕上，并有幽灵背景哦。
Array(5390010, 10, 25000), Array(5390010, 50, 130000), Array(5390010, 100, 250000),
Array(5390013, 10, 30000), Array(5390013, 50, 150000), Array(5390013, 100, 300000),
Array(5390012, 10, 50000), Array(5390012, 50, 250000), Array(5390012, 100, 500000),
Array(5390011, 10, 60000), Array(5390011, 50, 300000), Array(5390011, 100, 600000));
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的道具：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x (" + itemList[i][1] + ")   #r" + itemList[i][2] * 3 +  "#k点卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            selectedCost = item[2] * 3;
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷？");
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
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            if (cm.canHold(selectedItem, selequantity)) {
                cm.gainNX( - selectedCost );
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『点卷商城』 " + cm.getName() + " 玩家在点卷商城购买道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷。");
        }
        cm.dispose();
    }
}