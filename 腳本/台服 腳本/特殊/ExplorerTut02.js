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
        cm.sendNext("準備好打擊怪物的話就跟我說話.");
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.sendYesNo("我現在送你進去,把在裡面作亂的怪物消滅吧!");
    } else if (status == 1) {
        cm.warp(4000033, 0);
        cm.dispose();
    }
}