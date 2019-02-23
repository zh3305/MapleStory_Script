var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendNext("#b(就算是阿班，应该也不会躲在这里吧……应该不会吧？)#k");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("#b(看起来很可疑的洞。不知道阿班会不会躲在里面。要进去看看吗?？)#k");
        } else if (status == 1) {
            cm.gainExp(35);
            cm.warp(931000010, 0);
            cm.dispose();
        }
    }
}