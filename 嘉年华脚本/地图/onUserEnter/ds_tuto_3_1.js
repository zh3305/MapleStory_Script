/*
 Author: Pungin
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        ms.DisableUI(true);
        ms.EnableUI(1);
        ms.spawnNPCRequestController(2159340, 175, 0);
        ms.setNPCSpecialAction(2159340, "summon");
        ms.spawnNPCRequestController(2159341, 300, 0);
        ms.setNPCSpecialAction(2159341, "summon");
        ms.spawnNPCRequestController(2159342, 600, 0);
        ms.setNPCSpecialAction(2159342, "summon");
        ms.setNPCSpecialAction(2159340, "panic");
        ms.setNPCSpecialAction(2159341, "panic");
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1500, 0, -100, 1, 1, 0, 0, 5417499);
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1500, 0, -100, 1, 1, 0, 0, 5417497);
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1500, 0, -100, 1, 1, 0, 0, 5417498);
        ms.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg2/0", 1500, 0, -100, 0, 0);
        ms.getDirectionInfo(1, 1500);
    } else {
        ms.dispose();
        ms.openNpc(2159340);
    }
}
