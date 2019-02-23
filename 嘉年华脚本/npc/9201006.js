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
    if (cm.getMapId() != 680000200) {
        cm.dispose();
        cm.openNpc(9201006, "WeddingExit");
        return;
    }
    if (status == 0) {
        cm.sendSimple("需要我帮忙吗？\r\n#b#L0# 我准备好结婚了。#l\r\n#L1# 我被邀请参加婚礼了！#l#k");
    } else if (status == 1) {
        var em = cm.getEventManager("WeddingEvent");
        if (em == null) {
            cm.sendOk("配置文件不存在,请联系管理员。");
            cm.dispose();
            return;
        }
        if (selection == 0) {
            var ii = cm.getPlayer().getOneInfo(160002, "id");
            var marr = cm.getQuestRecord(160001);
            var data = marr.getCustomData();
            if (data == null) {
                marr.setCustomData("0");
                data = "0";
            }
            if (data.equals("1")) {
                if (ii == null || parseInt(ii) == 0) {
                    cm.sendOk("你没有和任何人订婚呀!");
                    cm.dispose();
                    return;
                }
                var other = parseInt(ii);
                var chr = cm.getMap().getCharacterById(other);
                if (chr == null) {
                    cm.sendOk("请确认你的另一半也在这里!.");
                    cm.dispose();
                    return;
                }
                var maps = Array(680000210, 680000300, 680000401);
                for (var i = 0; i < maps.length; i++) {
                    if (cm.getMap(maps[i]).getCharactersSize() > 0) {
                        cm.sendNext("已经有人在进行婚礼,请稍后再来.");
                        cm.dispose();
                        return;
                    }
                }
                var prop = em.getProperty("state");
                if (prop == null || prop.equals("0")) {
                    em.startInstance(cm.getParty(), cm.getMap());
                    cm.worldMessage(5, cm.getPlayer().getName() + " 和 " + chr.getName() + "的婚宴将在" + cm.getClient().getChannel() + "频道大教堂举行．");
                }
                cm.dispose();
            } else {
                cm.sendOk("恩..你好像没有预定婚礼哟!!");
                cm.dispose();
            }
        } else {
            var prop = em.getProperty("state");
            if (prop == null || prop.equals("0") || prop.equals("2") || !cm.haveItem(4150000)) {
                cm.sendNext("对不起，没有你可以参加婚礼。可能的原因：\r\n1、你并未受邀参加婚礼；\r\n2、你受邀参加的婚礼，新人尚未举办婚礼；\r\n3、你受邀参加的婚礼，不在本频道举行；\r\n4、你受邀参加的婚礼，新人仪式已开始无法进入。");
                cm.dispose();
                return;
            }
            var eim = cm.getEIMbyEvenName("WeddingEvent");
            if (eim != null) {
                cm.removeItem(4150000);
                eim.registerPlayer(cm.getPlayer());
            } else {
                cm.sendOk(1, "执行错误,请联系管理员。");
            }
            cm.dispose();
        }
    }
}
