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
		qm.sendNext("I have a Mission for you",9900001);
		qm.forceStartQuest(25568);
		qm.dispose();
	}
}