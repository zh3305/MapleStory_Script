//OLD
var status = -1;

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendSimple("你好, 我是兴儿,我想要 #b年糕#k...#b\r\n#L0#我给你带来了年糕!#l\r\n#L1#在这里需要做些什么?#l#k");
    } else if (status == 1) {
        if (selection == 0) {
            if (!cm.isLeader()) {
                cm.sendNext("我只接受组队长的年糕..");
            } else {
                if (cm.haveItem(4001101, 20)) {
                    cm.achievement(100);
                    cm.gainItem(4001101, -20);
                    cm.givePartyExp_PQ(70, 1.5);
                    cm.givePartyNX(250);
                    cm.addPartyTrait("will", 5);
                    cm.addPartyTrait("sense", 1);
                    cm.endPartyQuest(1200);
                    cm.warpParty(933009000);
                } else {
                    cm.sendNext("你们没有收集到20个年糕.. ");
                }
            }
        } else if (selection == 1) {
            cm.sendNext("这里是迎月花山丘,月妙会在满月的时候制作#b年糕#k.,在月亮周围种下迎月花的种子,就会出现满月了.,  The #r你必须保护他,防止其他怪物来攻击他#k. 如果#b月妙#k死亡了, 任务将会失败...我会再次变得饥饿...");
        }
        cm.dispose();
    }
}
