var status = -1;

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("MapleWing世界的冒险家 你好哦！ 我很想吃年糕呐.....#b\r\n#L0#我给你一些年糕#l\r\n#L1#这是那里？#l \r\n#L2#我想离开#l#k#k");
    } else if (status == 1) {
        if (selection == 0) {
            if (!cm.isLeader()) {
                cm.sendNext("Only the leader may bring me Rice Cake.");
            } else {
                if (cm.haveItem(4001101, 10)) {
                    cm.achievement(100);
                    cm.removeAll(4001101);
                    cm.givePartyExp_PQ(70, 1.5);
                    cm.givePartyNX(10);
                    cm.addPartyTrait("will", 5);
                    cm.addPartyTrait("sense", 1);
                    cm.endPartyQuest(1200);
                    cm.warpParty(910010300);
                } else {
                    cm.sendNext("你没有10个年糕~.. ");
                }
            }
        } else if (selection == 1) {
            cm.sendNext("额，这个...我也不知道要怎么和你解释...\r\n（咳咳....英文不过关...）\r\n所以你懂的.....");
        } else if (selection == 2) {
           cm.warp(910010500);
        }



        cm.dispose();
    }
}