var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendSimple("什么事情？\r\n\r\n#b#L0#想和你对话。#l");
        } else if (status == 1) {
            cm.sendNext("是啊……我口才也不怎么好……真没意思。");
            cm.dispose();
        }
    }
}