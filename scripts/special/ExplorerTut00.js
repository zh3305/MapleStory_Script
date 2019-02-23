/*
传送NPC
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } 

	if (status == 0) {
	    cm.sendNextS("……这里是枫树？",16);
		cm.forceStartQuest(32201);
		cm.forceCompleteQuest(32201);
    } else if (status == 1) {	
	    cm.sendNextS("先到下面去吧。",16);
		cm.dispose();
	} 

}
