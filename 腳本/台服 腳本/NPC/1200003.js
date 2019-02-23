/* Dawnveil
    To Victoria Island
	Puro
    Made by Daenerys
*/
function start() {
    cm.sendYesNo("Next stop, Lith Harbor! Hold your horses for about a minute.");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendNext("Hmm... Make sure you have #b80#k Mesos. I can't take you if you don't pay the fee.");
	} else {
    if(cm.getPlayer().getMeso() >= 80) {
	cm.gainMeso(-80);
	cm.warp(104000000,0);
    }
    cm.dispose();
}
}