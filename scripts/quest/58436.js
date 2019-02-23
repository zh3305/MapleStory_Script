
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                qm.dispose();
                return;
            } else if (status == 1) {
                qm.sendOk("真的没人来救我了吗？呜呜……");
                qm.dispose();
            }
            status--;
        }
        if (status == 0) {
            qm.sendNext("你好啊, 我名为「K」. #b#h0##k, 你愿意听我一言吗？");
        } else if (status == 1) {
            qm.warp(814000000, 0);
			qm.dispose();
        } 
    }
}

function end(mode, type, selection) {
    qm.dispose();
}