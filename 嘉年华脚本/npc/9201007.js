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

    var eim = cm.getEventInstance();
    if (eim == null) {
        cm.sendOk("配置出错,请联系管理员。");
        cm.dispose();
        return;
    }
    var partyid = parseInt(eim.getProperty("partyID"));
    if (cm.getPartyID() <= 0 || cm.getPartyID() != partyid) {
        cm.sendOk("让我们一起祝福这对新人吧!~");
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (eim.getProperty("done").equals("1")) {
            cm.sendOk("你可以继续享受婚礼的喜悦，也可以去找巴兰蒂娜修女商量下一步安排。");
            cm.dispose();
        } else if (eim.getProperty("on").equals("0")) {
            cm.sendYesNo("两位实在太配了，现在就要举行婚礼吗？");
        } else {
            cm.sendOk("婚礼正在进行中!!~");
            cm.dispose();
        }
    } else if (status == 1) {
        var other = 0;
        var marr = cm.getQuestRecord(160001);
        var data = marr.getCustomData();
        var ii = cm.getPlayer().getOneInfo(160002, "id");
        if (data == null || ii == null) {
            marr.setCustomData("0");
            data = "0";
        }
        if (ii != null) {
            other = parseInt(ii);
        }
        if (data.equals("1")) {
            if (other == 0) {
                cm.sendOk("发生了一些错误：你没有与任何人订婚。");
                cm.dispose();
                return;
            }
            var chr = cm.getMap().getCharacterById(other);
            if (chr == null) {
                cm.sendOk("请确认你的另一半在这里");
                cm.dispose();
                return;
            }
            marr.setCustomData("2_");
            cm.setQuestRecord(chr, 160001, "2_");
            var eim = cm.getEventInstance();
            if (cm.doWeddingEffect(chr) && eim != null) {
                cm.sendMarriedBefore();
                eim.schedule("doWedding", 500);
            }
        } else if (data.equals("2_") || data.equals("2")) {
            if (cm.getPlayer().getMarriageId() <= 0) {
                cm.sendOk("发生了一些错误：你没有与任何人订婚。");
                cm.dispose();
                return;
            }
            var chr = cm.getMap().getCharacterById(other);
            if (chr == null) {
                cm.sendOk("请确认你的另一半在这里.");
                cm.dispose();
                return;
            }
            cm.setQuestRecord(cm.getPlayer(), 160001, "3");
            cm.setQuestRecord(chr, 160001, "3");
            var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
            if (dat > 10) {
                cm.warpMap(680000300, 0);
            } else {
                cm.setQuestRecord(chr, 160002, "0");
                cm.setQuestRecord(cm.getPlayer(), 160002, "0");
                cm.warpMap(680000500, 0);
            }
        } else {
            cm.sendOk("你还没结婚！");
        }
        cm.dispose();
    }
}
