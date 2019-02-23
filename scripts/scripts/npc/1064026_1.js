/* 鲁塔比斯 */

var selType;
var status = -1;

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
        cm.sendSimple("#e<鲁塔比斯>#n\r\n关于鲁塔比斯，你有什么事情吗？#b\r\n#L0#到鲁塔比斯去。#l\r\n#L2#了解有关鲁塔比斯的事情。#l");
    } else if (status == 1) {
        selType = selection;
        if (selType == 0) { //到鲁塔比斯去
            cm.sendNext("好的，我马上用神兽的力量把你送到鲁塔比斯。在鲁塔比斯可以通过出口回到现在所在的地方。祝你好运。");
        } else {
            cm.sendNext("鲁比塔斯原来是世界树为了恢复在和黑魔法师的战斗中消耗的生命力量而沉睡的地方。但是不久前，鲁比塔斯被一群来历不明的魔族所占领，世界树被封印在了巨大的树根里。");
        }
    } else if (status == 2) {
        if (selType == 0) { //到鲁塔比斯去
            cm.saveReturnLocation("ROOT");
            cm.warp(105200000, 0);
        } else {
            cm.sendPrev("现在鲁塔比斯充满了黑暗的气息，这对拥有生命力量的世界树来说是致命的。请在世界树被黑暗力量侵蚀之前，消灭掉封印守护者，解开世界树的封印，救出世界树。");
        }
        cm.dispose();
    }
}