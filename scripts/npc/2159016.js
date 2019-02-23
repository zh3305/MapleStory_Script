var status = -1;

function action(mode, type, selection) {
    status++;
    if (cm.getInfoQuest(23999).indexOf("exp4=1") != -1) {
        cm.sendNext("反正被发现了，我要吃颗糖了。");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext("嗯？被发现了吗？我人这么小，你却这么快就找到了。真是厉害。\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3 exp");
    } else if (status == 1) {
        cm.gainExp(3);
        if (cm.getInfoQuest(23999).equals("")) {
            cm.updateInfoQuest(23999, "exp4=1");
        } else {
            cm.updateInfoQuest(23999, cm.getInfoQuest(23999) + ";exp4=1");
        }
        cm.dispose();
    }
}