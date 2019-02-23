var status = -1;
function action(mode, type, selection) {
    status++;
    if (cm.getInfoQuest(23999).indexOf("exp3=1") != -1) {
        cm.sendNext("哈哈哈…很會躲吧？");
        cm.dispose();
        return;
    }

    if (status == 0) {
        cm.sendNext("哎喲，被發現了！哇…真會找，好厲害喔！\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3 exp");
    } else if (status == 1) {
        cm.gainExp(3);
        if (cm.getInfoQuest(23999).equals("")) {
            cm.updateInfoQuest(23999, "exp3=1");
        } else {
            cm.updateInfoQuest(23999, cm.getInfoQuest(23999) + ";exp3=1");
        }
        cm.dispose();
    }
}