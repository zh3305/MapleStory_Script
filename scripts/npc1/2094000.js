

function action(mode, type, selection) {
	cm.removeAll(4001117);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("队长必须在这里。请让他和我说话。");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 255) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("Pirate");
			if (em == null) {
				cm.sendOk("请稍后再试。");
			} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 120);
		    } else {
			cm.sendOk("该频道任务进行中。");
		    }
			}
		} else {
			cm.sendOk("所有队员必须在70级以上。");
		}
	    }
	cm.dispose();
}