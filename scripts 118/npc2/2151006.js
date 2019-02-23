var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNext("你是不需要治疗吗？");
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendNext("你是不需要治疗吗？");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("你没有受伤吧？快去接受治疗吧。只要是反抗者的人，我随时会免费为你们治疗。");
        } else if (status == 1) {
            cm.getPlayer().getStat().heal(cm.getPlayer());
            cm.sendOk("好了，治疗结束了。");
            cm.dispose();
        }
    }
}