var status = -1;

function action(mode, type, selection) {
    status++;
    if (cm.getInfoQuest(23999).indexOf("exp3=1") != -1) {
        cm.sendNext("嘿嘿嘿……我会再躲得隐蔽一点的。");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext("哎呀，被发现了！哇……你好像很会找嘛。真厉害！\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3 exp");
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