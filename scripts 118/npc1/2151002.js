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
            cm.sendNext("嗯……对话……我真的很喜欢动物。特别是像猫咪一样的动物。看上去很优雅不是吗？");
            cm.dispose();
        }
    }
}