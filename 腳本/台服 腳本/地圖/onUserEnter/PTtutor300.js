/* global ms */

var status = -1;

function action(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.resetMap(ms.getMapId());
        ms.showEffect(false, "phantom/mapname2");
        ms.spawnMob(9300498, -2050, -1294);
        ms.spawnMob(9300507, -2420, -1054);
        ms.spawnMob(9300498, -2070, -772);
        ms.spawnMob(9300507, -2070, -491);
        ms.spawnMob(9300498, -2430, -210);
        ms.getAdviceTalk(["UI/tutorial.img/phantom/0/0"]);
    } else if (status === i++) {
        ms.getAdviceTalk(["UI/tutorial.img/phantom/1/0"]);
    } else if (status === i++) {
        ms.getAdviceTalk(["UI/tutorial.img/phantom/2/0"]);
    } else if (status === i++) {
        ms.getAdviceTalk(["UI/tutorial.img/phantom/3/0"]);
    } else if (status === i++) {
        ms.getAdviceTalk(["UI/tutorial.img/phantom/4/0"]);
    } else if (status === i++) {
        ms.dispose();
    } else {
        ms.dispose();
    }
}