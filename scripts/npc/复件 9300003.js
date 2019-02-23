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
    if (cm.getMapId() != 700000100) {
        cm.sendOk("如果你想结婚.请到结婚的地方来找我~");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendYesNo("你想开始结婚吗?");
    } else if (status == 1) {
        var marr = cm.getQuestRecord(160001);
        var data = marr.getCustomData();
        if (data == null) {
            marr.setCustomData("0");
            data = "0";
        }
        if (data.equals("1")) {
            if (cm.getPlayer().getMarriageId() <= 0) {
                cm.sendOk("Something wrong has happened: you aren't engaged with anybody.");
                cm.dispose();
                return;
            }
            var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
            if (chr == null) {
                cm.sendOk("Make sure your partner is in the map.");
                cm.dispose();
                return;
            }
            marr.setCustomData("2_");
            cm.setQuestRecord(chr, 160001, "2_");
            cm.doWeddingEffect(chr);
        } else if (data.equals("2_") || data.equals("2")) {
            if (cm.getPlayer().getMarriageId() <= 0) {
                cm.sendOk("Something wrong has happened: you aren't engaged with anybody.");
                cm.dispose();
                return;
            }
            var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
            if (chr == null) {
                cm.sendOk("Make sure your partner is in the map.");
                cm.dispose();
                return;
            }
            cm.setQuestRecord(cm.getPlayer(), 160001, "3");
            cm.setQuestRecord(chr, 160001, "3");
            var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
            if (dat > 10) {
                cm.warpMap(700000200, 0);
            } else {
                cm.setQuestRecord(chr, 160002, "0");
                cm.setQuestRecord(cm.getPlayer(), 160002, "0");
                cm.warpMap(700000300, 0);
            }
        } else {
            cm.sendOk("你不能结婚!");
        }
        cm.dispose();
    }
}