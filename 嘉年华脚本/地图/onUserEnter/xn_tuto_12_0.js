/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
        status++;

    if (status == 0) {
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
        ms.spawnNPCRequestController(2159377, -889,-311);
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 30);
    } else if (status == 1) {
	ms.getDirectionStatus(true);
        ms.getDirectionInfo(3, 2);
        ms.getDirectionInfo(1, 30);
    } else if (status == 2) {
        ms.getDirectionInfo(3, 0);
        ms.spawnNPCRequestController(2159381,-1040, 20);
        ms.setNPCSpecialAction(2159381, "summon");
        ms.spawnNPCRequestController(2159384,-990 ,20);
        ms.setNPCSpecialAction(2159384, "summon");
        ms.spawnNPCRequestController(2159379, -780, 20);
        ms.setNPCSpecialAction(2159379, "summon");
        ms.spawnNPCRequestController(2159385, -470,20);
        ms.setNPCSpecialAction(2159385, "summon");
        ms.spawnNPCRequestController(2159386, -550,20);
        ms.setNPCSpecialAction(2159386, "summon");
        ms.spawnNPCRequestController(2159387, -370,20);
        ms.setNPCSpecialAction(2159387, "summon");
        ms.spawnNPCRequestController(2159388, -620,20);
        ms.setNPCSpecialAction(2159388, "summon");
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg2/17", 900, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 2400);
    } else if (status == 3) {
        ms.getNPCDirectionEffect(2159385, "Effect/Direction12.img/effect/tuto/BalloonMsg2/18", 1500, 0, -145);
        ms.getDirectionInfo(1, 1380);
    } else if (status == 4) {
        ms.sendSelfTalk(1, 2159384, "各位！");
    } else if (status == 5) {
        ms.sendSelfTalk(1, 2159387, "吉格蒙特，我来救你了。我们等回去之后再寒暄吧。啊哈！");
    } else if (status == 6) {
        ms.setNPCSpecialAction(2159387, "shoot");
        ms.getDirectionInfo(1, 720);
    } else if (status == 7) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/smogStart", 900, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1050);
    } else if (status == 8) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/smog", 900, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1500);
    } else if (status == 9) {
        ms.removeNPCRequestController(2159381);
        ms.removeNPCRequestController(2159384);
        ms.removeNPCRequestController(2159385);
        ms.removeNPCRequestController(2159386);
        ms.removeNPCRequestController(2159387);
        ms.removeNPCRequestController(2159388);
        ms.getDirectionInfo(9, 1);
        ms.getDirectionInfo(1, 2220);
    } else if (status == 10) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/smogEnd",900, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 420);
    } else if (status == 11) {
        ms.getDirectionInfo(1, 600);
    } else if (status == 12) {
        ms.getDirectionInfo(1, 600);
    } else if (status == 13) {
        ms.getNPCDirectionEffect(2159379, "Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 1200, 0, -120);
        ms.getDirectionInfo(1, 1200);
    } else {
        ms.removeNPCRequestController(2159379);
        ms.EnableUI(0);
	ms.DisableUI(false);
        ms.dispose();
        ms.warp(931060070, 0);
        ms.enableActions();
    }
}

