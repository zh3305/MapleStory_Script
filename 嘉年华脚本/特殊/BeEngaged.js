var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            var ii = cm.getPlayer().getOneInfo(160002, "id");
            if (ii == null || parseInt(ii) == 0) {
                cm.sendOk("你还没有订婚.");
            } else if (!cm.canHold(4150000, 60)) {
                cm.sendOk("请确定其他空间.");
            } else if (!cm.haveItem(5251004, 1) && !cm.haveItem(5251005, 1) && !cm.haveItem(5251006, 1)) {
                cm.sendOk("请确认点券栏，如果没有婚礼券，就请去现金商店购买。");
            } else {
                var other = parseInt(ii);
                var chr = cm.getMap().getCharacterById(other);
                if (chr == null) {
                    cm.sendOk("请确认你的另一半也在这里.");
                    cm.dispose();
                    return;
                }
                var marr = cm.getQuestRecord(160001);
                var data = marr.getCustomData();
                if (data == null) {
                    marr.setCustomData("0");
                    data = "0";
                }
                if (data.equals("0")) {
                    marr.setCustomData("1");
                    cm.setQuestRecord(chr, 160001, "1");
                    var num = 0;
                    if (cm.haveItem(5251006, 1)) {
                        cm.gainItem(5251006, -1);
                        num = 60;
                    } else if (cm.haveItem(5251005, 1)) {
                        cm.gainItem(5251005, -1);
                        num = 30;
                    } else if (cm.haveItem(5251004, 1)) {
                        cm.gainItem(5251004, -1);
                        num = 10;
                    }
                    cm.setQuestRecord(cm.getPlayer(), 160002, num + "");
                    cm.setQuestRecord(chr, 160002, num + "");
                    cm.sendNext("你现在已经预约了婚礼。这里是婚礼邀请，你想邀请的客人都需要他们。");
                    cm.gainItemPeriod(4150000, num, 1);
                } else {
                    cm.sendOk("我负责帮助客人预约婚礼。你好像不需要婚礼预约啊。");
                }
            }
            cm.dispose();
            break;
        case 1: //
            cm.dispose();//这是结束脚本，请按照实际情况使用
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
