/* RED Zero
    Crane
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendSimple("Hello there. How's the traveling so far? I've been transporting other travelers like you to other regions in no time, and... are you interested? If so, then select the town you'd like to head to.\r\n#b#L0# Mu Lung(1500 mesos)#l");
    } else if (status == 1) {
        sel = selection;
	if (selection == 0) {		
	    cm.warp(250000100,0);
		cm.gainMeso(-1500);
		cm.dispose();
  }
}