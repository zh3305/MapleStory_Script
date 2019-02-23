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
        ms.spawnMonster(9300730, 3, -354, -6);
        ms.dispose();
    }
}
