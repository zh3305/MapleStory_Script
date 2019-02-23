/*
传送NPC
*/

function start() {
    cm.sendYesNo("你想去冰雪之岛#b里恩#k吗?");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("看来你还有事情没有办完,等事情处理好在来找我吧!");
    } else {
	cm.warp(140000000,0);
    }
    cm.dispose();
}
