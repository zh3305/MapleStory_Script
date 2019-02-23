var status = -1;
var sel = -1;
var items = Array(5251004, 5251005, 5251006);
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    var ii = cm.getPlayer().getOneInfo(160002, "id");
    if (status == 0) {
        if (cm.isMarried()) {
            cm.sendOk("我负责帮助客人预约婚礼。你好像不需要婚礼预约啊。");
        } else {
            cm.sendSimple("你好啊，今天天气真好啊。我是负责预约婚礼的玛嘉莱修女。需要我帮忙吗？\r\n\r\n#b#L0# 想预约婚礼需要做些什么？#l\r\n#L1# 我想预约简朴婚礼。#l\r\n#L2# 我想预约甜美婚礼。#l\r\n#L3# 我想预约豪华婚礼。#l\r\n#L4# 预约婚礼出现问题。#l");
        }
    } else if (status == 1) {
        sel = selection;
        switch (sel) {
            case 0:
                cm.sendNext("想预约婚礼，还需要先领取#b结婚券#k和#b订婚戒指#k等定情信物。当然，两位是否相爱则是必要条件了。如果集齐了这些东西，就和#b订婚对象组成2人组队#k，去预约婚礼吧。预约之后会获得几样有关婚礼预约的物品，所以记得在#b其他栏空出2格以上的空间#k。");
                break;
            case 1: //我想预约简朴婚礼
            case 2://我想预约甜美婚礼
            case 3://我想预约豪华婚礼
                //判断组队
                var ii = cm.getPlayer().getOneInfo(160002, "id");
                if (cm.getParty() == null || cm.getPartySize() != 2 || ii == null || !cm.isChrInParty(parseInt(ii))) {
                    cm.sendNext("想要完成婚礼预约，就先#b和订婚对象组成2人组队#k吧。");
                    cm.dispose();
                } else if (!cm.allMembersHere()) {
                    cm.sendNext("你的另一半不在这里哟!");
                    cm.dispose();
                } else {
                    cm.sendNext("在完成预约之前，你可以制作一个目录，来填写希望从宾客那里得到的结婚礼物。婚礼结束之后去找#b安琪莉可#k小姐，就可以领取结婚礼物了哦。");
                }
                break;
            case 4:
                var marr = cm.getQuestRecord(160001);
                if (!cm.isMarried() && data != null && (data.equals("2"))) {
                    marr.setCustomData("0");
                    cm.sendNext("恩..已经帮你解决了这个问题了");
                } else {
                    cm.sendNext("恩..看起来并没有出现什么问题呢..");
                }
                cm.dispose();
                break;
        }
    } else if (status == 2) {
        switch (sel) {
            case 0:
                cm.sendNext("对了！预约婚礼之后就#b不能取消预约，也不能取消订婚。#k所以请你慎重考虑之后再来预约。");
                cm.dispose();
                break;
            case 1: //我想预约简朴婚礼
            case 2://我想预约甜美婚礼
            case 3://我想预约豪华婚礼
                var ii = cm.getPlayer().getOneInfo(160002, "id");
                if (ii == null || parseInt(ii) == 0) {
                    cm.sendOk("你还没有订婚.");
                }
                var other = parseInt(ii);
                var chr = cm.getMap().getCharacterById(other);
                if (!cm.canHold(4150000, 10 * sel)) {
                    cm.sendOk("你和你的爱人都需要在其他栏空出2格以上来接受预约收据和请柬。请确认其他栏是否有剩余空间。");
                } else if (!cm.haveItem(items[sel - 1], 1)) {
                    cm.sendOk("请确认点券栏，如果没有婚礼券，就请去现金商店购买。");
                } else {
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
                        var num = 10 * sel;
                        if (cm.haveItem(items[sel - 1], 1)) {
                            cm.gainItem(items[sel - 1], -1);
                        }
                        cm.setQuestRecord(cm.getPlayer(), 160002, num + "");
                        cm.setQuestRecord(chr, 160002, num + "");
                        cm.gainItemPeriod(4150000, num, 1);
                        cm.sendNext("你现在已经预约了婚礼。这里是婚礼邀请，你想邀请的客人都需要他们。");
                    } else {
                        cm.sendOk("我负责帮助客人预约婚礼。你好像不需要婚礼预约啊。");
                    }
                }
                cm.dispose();
        }
    }
}
