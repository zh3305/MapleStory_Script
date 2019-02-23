var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("哼，那些该死的东西……竟敢逃走？");
    } else if (status == 1) {
        cm.sendNextPrevS("啊，被发现了！", 2);
    } else if (status == 2) {
        cm.sendNextPrev("再逃也逃不过我的手掌心。不要做无谓的反抗，快投降吧。实验体能到哪里去呢……咦？虽然后面的家伙看上去很可疑……不过你好像不是实验体啊！什么？是村里人吗？");
    } else if (status == 3) {
        cm.sendNextPrevS("是的！我是埃德尔斯坦的居民！", 2);
    } else if (status == 4) {
        cm.sendNextPrev("切……我好几次叮嘱这里的人不要让小孩子靠近矿山，他们却听不进去。愚蠢的村民……没办法。我不能让你回村里去散布和实验室有关的消息，我得把你抓起来。");
    } else if (status == 5) {
        cm.sendNextPrevS("什么？你以为我会束手就擒吗？", 2);
    } else if (status == 6) {
        cm.sendNextPrev("哼，真狂妄……我倒要看看你能狂妄到什么时候。");
    } else if (status == 7) {
        if (cm.c.getPlayer().getHp() >= 50) {
            cm.c.getPlayer().setHp(25);
            cm.c.getPlayer().updateSingleStat(MapleStat.HP, 25);
        }
        cm.sendNextPrev("#b(受到了席勒的攻击，体力降到了一半！该怎么办呢？正面作战的话好像没办法打败他！)#k");
    } else if (status == 8) {
        cm.sendNextPrev("这下嘴上不敢再逞能了吧？我要建议格里梅尔在你身上做点更厉害的实验。呵呵呵……乖乖投降吧！");
    } else if (status == 9) {
        cm.sendNextPrevS("等等！", 4, 2159010);
    } else if (status == 10) {
        cm.c.getPlayer().setHp(50);
        cm.c.getPlayer().updateSingleStat(MapleStat.HP, 50);
        cm.warp(931000021, 1);
        cm.dispose();
    }
}