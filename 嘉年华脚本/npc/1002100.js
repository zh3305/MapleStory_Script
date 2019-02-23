/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  
 *  NPC名称：简
 *  功能：任务
 *  @Author Kent 
 */

var status = 0;
var amount = -1;
var item;
var cost;
var rec;
var recName;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status <= 2 && mode == 0) {
        cm.dispose();
        return;
    } else if (status >= 3 && mode == 0) {
        cm.sendNext("如果下次还有需要在来找我吧。");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        if (cm.getQuestStatus(2013) == 2) {
            cm.sendNext("谢谢你能够帮助我,我可以低价出售你一些东西。");
        } else {
            if (cm.getQuestStatus(2010) == 2)
                cm.sendNext("如果你能帮助我说服父亲让我去冒险,我可以低价出售一些药品作为补偿。");
            else
                cm.sendOk("我的梦想是到处旅行，就像你一样。然而我的父亲，不允许我这样做！因为他认为这是很危险的。但是，如果我给他一些证明，他就会让我去,你能帮帮我吗?");
            cm.dispose();
        }
    } else if (status == 1) {
        var selStr = "#b你想从我这里购买什么：";
        var items = new Array(2000002, 2022003, 2022000, 2001000);
        var costs = new Array(310, 1060, 1600, 3120);
        for (var i = 0; i < items.length; i++) {
            selStr += "\r\n#L" + i + "##z" + items[i] + "# (售价 : " + costs[i] + " 金币)#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        var itemSet = new Array(2000002, 2022003, 2022000, 2001000);
        var costSet = new Array(310, 1060, 1600, 3120);
        var recHpMp = new Array(300, 1000, 800, 1000);
        var recNames = new Array("HP", "HP", "MP", "HP & MP");
        item = itemSet[selection];
        cost = costSet[selection];
        rec = recHpMp[selection];
        recName = recNames[selection];
        cm.sendGetNumber("#b#t" + item + "##k? #t" + item + "# 回复 " + rec + " " + recName + "选择你想要购买的数量吧。", 1, 1, 100);
    } else if (status == 3) {
        cm.sendYesNo("Will you purchase #r" + selection + "#k #b#t" + item + "#(s)#k? #t" + item + "# costs " + cost + " mesos for one, so the total comes out to be #r" + cost * selection + "#k mesos.");
        amount = selection;
    } else if (status == 4) {
        if (cm.getMeso() < cost * amount || !cm.canHold(item)) {
            cm.sendNext("请确认你有#r" + cost * amount + "#k 金币，并确认背包空间是否足够.");
        } else {
            cm.gainMeso(-cost * amount);
            cm.gainItem(item, amount);
            cm.sendNext("购买好了,赶快检查你的背包吧。");
        }
        cm.dispose();
    }
}
