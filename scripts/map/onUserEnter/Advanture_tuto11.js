/*
    Made by Pungin
*/

var status = -1;

function action(mode, type, selection) {
	if (mode > 0) {
		status++;
	} else {
		status--;
	}

	if (status == 0) {
		ms.getDirectionStatus(true);
		ms.EnableUI(1);
		ms.environmentChange("maplemap/enter/10000", 13);
		ms.getDirectionInfo(1, 1000);
		ms.getDirectionStatus(true);
	} else if (status == 1) {
		ms.spawnNPCRequestController(10300, -240, 220);
		ms.setNPCSpecialAction(10300, "summon");
		ms.getNPCDirectionEffect(10300, "Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120);
		ms.getDirectionInfo(1, 1800);
	} else if (status == 2) {
		ms.updateNPCSpecialAction(10300, 1, 1000, 100);
		ms.getDirectionInfoNew(0, 200, 200, 200);
	} else if (status == 3) {
		ms.getDirectionInfo(1, 4542);
	} else if (status == 4) {
		ms.getDirectionInfoNew(1, 0);
	} else if (status == 5) {
		ms.getDirectionInfo(1, 900);
	} else if (status == 6) {
		ms.sendSelfTalk("剛剛那女生是誰啊?為什麼看到我就逃走?");
	} else if (status == 7) {
		ms.sendSelfTalk("我也先到那邊看看吧.");
	} else if (status == 8) {
		ms.removeNPCRequestController(10300);
		ms.introEnableUI(0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}