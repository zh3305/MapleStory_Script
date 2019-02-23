/* 
传送NPC
*/
function start() {
    cm.sendYesNo("你想前往金银岛明珠港吗?");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendNext("手续会收取1000金币,有足够的金币在来找我把。");
	} else {
    if(cm.getPlayer().getMeso() >= 1000) {
	cm.gainMeso(-1000);
	cm.warp(104000000,0);
    }
    cm.dispose();
}
}
