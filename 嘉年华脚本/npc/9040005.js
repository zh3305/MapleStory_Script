var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.sendOk("祝你能顺利的通过家族任务！");
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        if (cm.isPlayerInstance()) {
            cm.sendSimple("你想做什么？#b\r\n #L0#离开这里。#l");
        } else {
            cm.sendOk("抱歉,我不能为你做些什么!");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.sendYesNo("你确定你要离开吗？离开之后就不能再回到这里来了。");
    } else if (status == 2) {
        if (cm.isPlayerInstance()) {
            cm.getPlayer().getEventInstance().removePlayer(cm.getPlayer());
        }
        cm.dispose();
        return;
    }
}
