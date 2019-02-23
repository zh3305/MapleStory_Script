/* Dawnveil
    To Rien
	Puro
    Made by Daenerys
*/
function start() {
    cm.sendYesNo("Are you thinking about leaving Victoria Island and heading to our town? If you board this ship, I can take you to #bRien#k... But you must pay a #bfee of 80#k Mesos. Would you like to go to Rien? It'll take about a minute to get there.");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendNext("Hmm... Make sure you have #b80#k Mesos. I can't take you if you don't pay the fee.");
	} else {
    if(cm.getPlayer().getMeso() >= 80) {
	cm.gainMeso(-80);
	cm.warp(140000000,0);
    }
    cm.dispose();
}
}