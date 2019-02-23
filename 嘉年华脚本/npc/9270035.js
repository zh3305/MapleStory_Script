/* Joyce
 Event NPC
 */

var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (cm.getPlayer().getLevel() < 10 && cm.getPlayer().getJob() != 200) {
        cm.sendOk("10级后才能使用哟.");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.dispose();
        cm.openNpc(9310362);
    }
}
