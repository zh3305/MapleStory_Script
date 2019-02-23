var superMob = new Array(9300216, 9100000, 9100008, 9300692);


function enter(pi) {
    if (!checkMob(pi)) {
        pi.playerMessage("还有剩下的怪物。");
    } else {
        pi.dojo_getUp();
        pi.getMap().setReactorState();
    }
}

function checkMob(pi) {
	var monsters = pi.getMap().getAllMonster();
	if (monsters.size() == 0) {
		return true;
	}
	var it = monsters.iterator();
	while (it.hasNext()) {
		var monster = it.next();
		var isIn = false;
		for (var i = 0; i < superMob.length; i++) {
			if (monster.getId() == superMob[i]) {
				return true;
			}
		}
		if (!isIn) {
			break;
		}
	}
	return false;
}