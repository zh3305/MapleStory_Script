/*¸±±¾3rdjob NPC */
importPackage(net.sf.odinms.client);


function start() {
	if (cm.getQuestStatus(100101).equals(MapleQuestStatus.Status.STARTED) && !cm.haveItem(4031059)) {
		var em = cm.getEventManager("3rdjob");
		if (em == null) {
			cm.sendOk("Sorry, but everything is broken.");
		} else {
			em.newInstance(cm.getChar().getName()).registerPlayer(cm.getChar());
		}
	} else {
		cm.sendOk("lul.");
	}
	cm.dispose();
}

function action(mode, type, selection) {

}