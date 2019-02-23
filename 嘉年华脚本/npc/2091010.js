var status = -1;

function start() {
    cm.sendSimple("#b#L0#确认全体排名#l\r\n#L1#确认职业排名#l");
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

    switch (selection) {
        case 0:
            cm.showDoJangRank(1);
            cm.dispose();
            break;
        case 1:
            cm.showDoJangRank(3);
            cm.dispose();
            break;
    }
}
