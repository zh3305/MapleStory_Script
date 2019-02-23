importPackage(net.sf.odinms.client);

function start(ms) {
	ms.lockUI();
	if (ms.getPlayer().getGender() == 0) {
		ms.showWZEffect("Effect/Direction4.img/meetWithDragon/Scene0", -1);
	} else {
		ms.showWZEffect("Effect/Direction4.img/meetWithDragon/Scene1", -1);
	}
}