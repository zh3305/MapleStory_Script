/*
 Made by Pungin
 */

var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.getDirectionStatus(true);
        ms.EnableUI(1, 0);
        ms.sendNextSNew("喔喔~ 這裡就是 '異世界'嗎? 是個非常和平的村莊耶? 話說怎麼在屋頂上阿…需要先去找個安全下去路線吧…", 0x39, 1);
    } else if (status == 1) {
        ms.getDirectionInfo(1, 1000);
    } else if (status == 2) {
        ms.getDirectionInfoNew(0, 4000, 3402, 184);
    } else if (status == 3) {
        ms.getDirectionInfo(1, 1000);
    } else if (status == 4) {
        ms.sendNextSNew("阿! 那邊有個梯子，另用那個爬下去到地上吧！", 0x39, 1);
    } else if (status == 5) {
        ms.trembleEffect(0, 300);
        ms.getDirectionInfo(1, 1000);
    } else if (status == 6) {
        ms.getDirectionInfoNew(1, 3000);
    } else if (status == 7) {
        ms.getDirectionInfo(1, 1000);
    } else if (status == 8) {
        ms.sendNextSNew("哇啊！什麼呢！？", 0x39, 1);
    } else if (status == 9) {
        ms.getDirectionInfoNew(0, 2000, -800, 184);
    } else if (status == 10) {
        ms.spawnMonster(9460029, -800, 395);
        ms.getDirectionInfo(1, 2000);
    } else if (status == 11) {
        ms.getDirectionInfoNew(1, 2000);
    } else if (status == 12) {
        ms.getDirectionInfo(1, 1000);
    } else if (status == 13) {
        ms.sendNextSNew("到底是什麼什麼事情了？那是巨人？竟然在吃人！？不管如何這裡很危險！使用那梯子先逃吧！！", 0x39, 1);
    } else if (status == 14) {
        ms.killMob(9460029);
        ms.EnableUI(0);
        ms.warp(814000200, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}