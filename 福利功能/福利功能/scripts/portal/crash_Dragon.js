function start(ms) {
	ms.lockUI();
	if(ms.getPlayer().getGender() == 0)
		ms.showWZEffect("Effect/Direction4.img/crash/Scene0", -1);
	else
		ms.showWZEffect("Effect/Direction4.img/crash/Scene1", -1);
}