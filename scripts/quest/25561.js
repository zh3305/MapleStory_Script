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
		qm.sendSimple("Choose #dDark Side#k or #gLight Side#k for You\r\n#e#L0##s27000207#\tDark\r\n#L1##s27000106#\tLight\r\n",9010000);
    } else if (status == 1){
		if (selection == 0){
		qm.teachSkill(27000207,1);
		qm.teachSkill(27001201,1);
		qm.teachSkill(27000106,1);
		qm.teachSkill(27001100,1);
		qm.getPlayer().dropMessage(-1,"You Choose Dark Side");	
		qm.getPlayer().forceCompleteQuest(25561);
		qm.dispose();
		} else {
		qm.teachSkill(27000106,1);
		qm.teachSkill(27001100,1);
		qm.teachSkill(27000207,1);
		qm.teachSkill(27001201,1);
		qm.getPlayer().dropMessage(-1,"You Choose Light Side");	
		qm.getPlayer().forceCompleteQuest(25561);
		qm.dispose();
		}
	}
}