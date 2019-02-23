/* Dawnveil
	The 5 paths 
	Mai
    Made by Daenerys
*/
var status = -1;
var sel = 0;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
		qm.getPlayer().dropMessage(-1,"Complete ..");
		qm.getPlayer().forceCompleteQuest(25562);
		qm.dispose();
	}
}