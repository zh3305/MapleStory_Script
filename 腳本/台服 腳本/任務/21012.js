var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("大英雄！您好！您說怎麼知道您是英雄嗎？前面有三個人大聲的叫喊，當然知道啊。這個島上已經流傳著英雄回來的消息。");
    } else if (status == 1) {
        if (mode == 1) {
            qm.sendNextPrev("總之，英雄的臉色怎麼會這麼難看呢？您有什麼困難嗎？您說您不曉得自己是不是真正的英雄嗎？ 英雄喪失記憶了嗎？怎麼會這樣…應該是數百年來被困在冰雪之中的副作用。");
        } else {
            qm.sendNext("嗯…用這個方法也不能恢復記憶嗎？可是沒試過也不曉得，您再考慮看看吧。");
            qm.dispose();
        }
    } else if (status == 2) {
        qm.sendYesNo("啊！既然您是英雄，只要揮揮劍應該會想起些什麼吧！您想不想去 #b獵捕怪物#k呢？");
    } else if (status == 3) {
        qm.forceStartQuest();
        qm.sendNext("正好這附近有很多 #r#o9300383##k，請您去擊退  #r3隻#k。搞不好會想起些什麼。");
    } else if (status == 4) {
        qm.sendNextPrevS("啊，該不會連技能使用法都忘光了吧？ #b將技能放入快捷欄就可以輕鬆使用#k。不只是技能，連消耗道具也可以放進去，請多加利用 。", 1);
    } else if (status == 5) {
        qm.summonMsg(17);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == -1) {
        qm.sendNext("什麼…？不喜歡藥水嗎？");
        qm.dispose();
    } else if (status == 0) {
        qm.sendYesNo("嗯…看您的表情，似乎什麼都沒想起來…可是請不要擔心。總有一天會好起來的。來，請您喝下這些藥水打起精神來： \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# #t2000022# 10個 \r\n#i2000023# #t2000023# 10個 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 57 exp");
    } else if (status == 1) {
        qm.gainItem(2000022, 10);
        qm.gainItem(2000023, 10);
        qm.gainExp(57);
        qm.forceCompleteQuest();
        qm.sendOkS("#b(就算我是真正的英雄…可是什麼能力都沒有的英雄還有用處嗎？)#k", 2);
        qm.dispose();
    }
}