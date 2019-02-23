var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("您好 #r#h ##k 请选择您要查看排名的类型:\r\n#b#L0#查看所有职业排名#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendNext(cm.getRankingInformation(-1));
        } else if (selection == 1) {
            cm.sendNext(cm.getRankingInformation(30));
        } else if (selection == 2) {
            cm.sendNext(cm.getRankingInformation(32));
        }
        cm.dispose();
    }
}