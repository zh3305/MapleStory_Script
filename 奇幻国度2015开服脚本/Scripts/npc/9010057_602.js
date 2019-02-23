/* 充值奖励大转盘 */
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = head + "请选择你要控制的转盘（" + cm.getTrueServerName() + "好礼大赠送）:\r\n\r\n#b#L0#" + icon + "我要转300的(累计充值幻币到300可以转)#l\r\n#L1#" + icon + "我要转30的(累计充值幻币到30可以转)#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9010057, 801);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9010057, 802);
            break;
        }
    }
}