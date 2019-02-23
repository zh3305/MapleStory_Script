var status = -1;

function start() {
    if (!cm.isQuestActive(23202)) {
        cm.dispose();
        return;
    }
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        cm.forceCompleteQuest(23202);
        cm.getDirectionStatus(true);
        cm.EnableUI(1);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/4", [1000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [1000]);
    } else if (status == 1) {
        cm.sendNextS("#b這是…#k", 3);
    } else if (status == 2) {
        cm.showMapEffect("demonSlayer/pendant");
        cm.getDirectionEffect(1, "", [4200]);
    } else if (status == 3) {
        cm.sendNextS("#b媽媽… 戴維安…#k", 3);
    } else if (status == 4) {
        cm.sendNextS("#b...#k", 3);
    } else if (status == 5) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/5", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [2000]);
    } else if (status == 6) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/6", [2000, 0, -150, 0, 0]);
        cm.getDirectionEffect(1, "", [2000]);
    } else {
        cm.EnableUI(0);
        cm.dispose();
        cm.warp(927000081, 0);
    }
}