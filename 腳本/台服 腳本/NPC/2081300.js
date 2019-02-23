/*  NPC : Legor
 Bowman 4th job advancement
 Forest of the priest (240010501)
 */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (!(cm.getJob() == 311 || cm.getJob() == 321)) {
            cm.sendOk("你為什麼想見我？我沒有你想知道的事。");
            cm.dispose();
            return;
        } else if (cm.getQuestStatus(1455) == 1) {
            cm.sendSimple("我可以將你傳送到格瑞芬多或噴火龍所在地, 那麼你想去 \r\n#b#L0# 噴火龍森林#l\r\n#b#L1# 格瑞芬多森林#l");
        } else {
            cm.sendOk("你還不夠強大走弓箭手頂尖的道路。等你變得更強壯再來找我吧。");
            cm.dispose();
            return;
        }
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.haveItem(4031514, 1)) {
                cm.sendOk("你已經有#b#t4031514##k了");
            } else {
                cm.resetMap(924000200);
                cm.warp(924000200);
            }
        } else {
            if (cm.haveItem(4031515, 1)) {
                cm.sendOk("你已經有#b#t4031515##k了");
            } else {
                cm.resetMap(924000201);
                cm.warp(924000201);
            }
        }
        cm.dispose();
    }
}