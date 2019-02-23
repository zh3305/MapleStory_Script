
var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        if (status == 2) {
            qm.dispose();
            return;
        }
        status--;
    }

    if (status == 0)
        qm.sendNext("一大早就笑了半天。哈哈哈。對了不要再說奇怪的話了，快點拿早餐給 #p1013102#。");
    else if (status == 1)
        qm.sendNextPrevS("#b咦？那不是 #p1013101#要做的工作嗎？", 2);
    else if (status == 2)
        qm.sendYesNo("這個傢伙！居然這樣叫哥哥！你又不是不知道 #p1013102#有多討厭我。靠近的話一定會咬我。獵犬喜歡你，你拿去啦。");
    else if (status == 3) {
        qm.gainItem(4032447, 1);
        qm.sendNext("快點到#b左邊#k去把飼料拿給 #b#p1013102##k再回來。那隻狗從剛剛開始汪汪叫，可能是肚子餓了。");
        qm.forceStartQuest();
    } else if (status == 4) {
        qm.sendPrev("把飼料拿給#p1013102#吃快點回來。");
    } else {
        qm.dispose();
    }
}