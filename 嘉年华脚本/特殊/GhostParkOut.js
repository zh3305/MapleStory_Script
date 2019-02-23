var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            cm.sendYesNoN("#b怎么? 这就要走了吗? 你难道是因为害怕才要走的吗? ");
            break;
        case 1: //
            cm.warp(956100000);
            cm.dispose();
            break;
    }
}
