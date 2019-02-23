/* global qm */

function start(mode, type, selection) {
    if (qm.canHold(1142375)) {
        qm.gainItem(1142375, 1)
        qm.forceCompleteQuest();
    } else {
        qm.topMsg("裝備欄位不足。請空出 1格以上的空位。");
    }
    qm.dispose();
}