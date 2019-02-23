//增加墜飾欄位：永久

function start() {
    if (!im.haveItem(2432845)) {
        im.sendOk("出現未知錯誤");
        im.dispose();
        return;
    }
    if (im.getQuestCustomData(122700) == "0") {
        im.sendNext("你當前墜飾欄已經是永久狀態");
    } else {
        im.gainItem(2432845, -1);
        im.setPendantSlot(0);
    }
    im.dispose();
}