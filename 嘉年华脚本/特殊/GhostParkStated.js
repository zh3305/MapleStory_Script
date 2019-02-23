var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            cm.sendNextN("#b鬼魂公园#k是继怪物公园之后开张的第二个休彼德蔓主题公园! \r\n在这个让人毛骨悚然的地方可以体验到童话村的各种鬼, 呵呵. ");
            break;
        case 1: //
            cm.sendNextN("#b鬼魂公园#k并不仅仅只像是个鬼屋, \r\n这里的鬼是集聚毁掉童话村的#r邪恶气息#k并将其实体化后制作而成的.");
            break;
        case 2:
            cm.sendNextN("你若是消灭了鬼, 也算是净化了童话村的#r邪恶气息#k. \r\n光是享受#b鬼魂公园#k的乐趣, 也算是对童话村的安定做出了贡献! \r\n怎么样, 是不是很厉害啊? 哈哈!");
            break;
        case 3:
            cm.sendNextN("你问我是如何将#r邪恶气息#k实体化后变成鬼的? \r\n这是#d我专属的秘密#k, 我可不能告诉你, 呵呵, \r\n而我会将你净化的气息收集起来……");
            break;
        case 4:
            cm.sendNextN("呵呵, 我越说越多了呢. \r\n总之, 好好享受吧, 呵呵. ");
            cm.dispose();
            break;
    }
}
