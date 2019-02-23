/*
 Made by Pungin
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.resetMap(ms.getMapId());
        ms.spawnReactorOnGroundBelow(1008010, 365, 216);
        ms.getDirectionStatus(true);
        ms.EnableUI(1);
        ms.DisableUI(true);
        ms.getDirectionInfo(1, 3000);
    } else if (status == 1) {
        ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/3", 2100, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1800);
    } else {
        ms.topMsg("按[Ctrl]可進行一般攻擊.");
        ms.EnableUI(0);
        ms.dispose();
    }
}