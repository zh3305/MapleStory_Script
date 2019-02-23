/*
 RED 1st impact
 Port
 Made by Pungin
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (status == 0) {
        cm.sendNext("準備好出發再跟我說話吧.");
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.sendYesNo("多虧你,所有出航準備都結束了.要上船嗎?");
    } else if (status == 1) {
        cm.warp(4000032, 0);
        cm.dispose();
    }
}