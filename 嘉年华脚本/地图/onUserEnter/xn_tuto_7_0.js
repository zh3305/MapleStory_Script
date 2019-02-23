/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
        status++;

   if (status == 0) {
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 30);
    } else if (status == 1) {
	ms.getDirectionStatus(true);
        ms.getDirectionInfo(3, 2);
        ms.getDirectionInfo(1, 30);
    } else if (status == 2) {
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 1200);
    } else if (status == 3) {
        ms.getDirectionInfo(3, 1);
        ms.getDirectionInfo(1, 210);
    } else if (status == 4) {
        ms.getDirectionInfo(3, 2);
        ms.getDirectionInfo(1, 420);
    } else if (status == 5) {
        ms.getDirectionInfo(3, 1);
        ms.getDirectionInfo(1, 420);
    } else if (status == 6) {
        ms.getDirectionInfo(3, 2);
        ms.getDirectionInfo(1, 420);
    } else if (status == 7) {
        ms.getDirectionInfo(3, 0);
        ms.sendSelfTalk(3, 2159377, "刚才的奇怪场面到底是什么呢？一回想脑海中就会出现噪音，让人无法继续回想。之前好像没有发生过这种事情啊……。");
    } else if (status == 8) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 1200, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1200);
    } else if (status == 9) {
        ms.sendSelfTalk(3, 2159377, "在格里梅尔博士回来之前，必须见见刚才那个人。她现在应该被关在监狱里。");
    } else {
        ms.getDirectionInfo(3, 2);
	ms.getDirectionStatus(true);
        ms.EnableUI(0);
        ms.dispose();
        ms.warp(931050960, 0);
        ms.enableActions();
    }
}

