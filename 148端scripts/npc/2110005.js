var status = -1;

function start() {

    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        if (cm.getMapId() == 260020000 || cm.getMapId() == 260000000)
            cm.sendYesNo("Do you want to move to Magatia?");
        else if (cm.getMapId() == 260020700 || cm.getMapId() == 261000000)
            cm.sendYesNo("Do you want to move to Ariant?");
    } else if (status == 1) {
        cm.warp((cm.getMapId() == 260020000 || cm.getMapId() == 260000000) ? 261000000 : (cm.getMapId() == 260020700 || cm.getMapId()) == 261000000 ? 260000000 : 260000000);
        cm.dispose();
    }
}