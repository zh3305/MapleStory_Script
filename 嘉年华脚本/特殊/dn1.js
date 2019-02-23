/* 
 * 西班牙斗牛
 */
   //-----------------//
  //　Careless 制作  //
 // qq 50009219     //
//-----------------//
var status = -1;
var minLevel = 120;
var maxLevel = 250;
var minPartySize = 1;
var maxPartySize = 6;

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
        if (cm.getEventCount("西班牙斗牛") <= 10) {
            cm.sendYesNoS("\t\t\t\t#r#e西班牙斗牛\r\n\r\n#n#d小技巧 - 不一定要杀死斗牛！您可以选择躲避三分钟\r\n每天前十回免费 -后续 会员-500抵用 普通-1000抵用进入\r\n\t\t\t　确认进入斗牛场吗？#k#n\r\n", 4, 9390474);
        } else if (cm.haveItem(2430865)) {
            if (cm.getPlayer().getCSPoints(2) >= 500) {
                cm.sendYesNoS("\t\t\t\t#r#e西班牙斗牛\r\n\r\n#n#d小技巧 - 不一定要杀死斗牛！您可以选择躲避三分钟\r\n每天前十回免费 -后续 会员-500抵用 普通-1000抵用进入\r\n\t\t\t　确认进入斗牛场吗？#k#n\r\n", 4, 9390474);
            } else {
                cm.sendOk("\r\n\r\n\r\n#e#d抱歉！您的抵用卷数量不足！无法进入斗牛场！！#k#n");
                cm.dispose();
            }
        } else {
            if (cm.getPlayer().getCSPoints(2) >= 1000) {
                cm.sendYesNoS("\t\t\t\t#r#e西班牙斗牛\r\n\r\n#n#d小技巧 - 不一定要杀死斗牛！您可以选择躲避三分钟\r\n每天前十回免费 -后续 会员-500抵用 普通-1000抵用进入\r\n\t\t\t　确认进入斗牛场吗？#k#n\r\n", 4, 9390474);
            } else {
                cm.sendOk("\r\n\r\n\r\n#e#d抱歉！您的抵用卷数量不足！无法进入斗牛场！！#k#n");
                cm.dispose();
            }
        }
    } else if (status == 1) {
        if (cm.getPlayer().getParty() == null) {
            cm.sendOkS("#d#e抱歉!请组队并且保持一人！！#k#n", 0, 9390474);
        } else if (!cm.isLeader()) {
            cm.sendOkS("\r\n\r\n\t#e#d请确认您是否是此队伍的队长！如若不是,请喊队长来对话！#k#n", 0, 9390474);
        } else {
            var party = cm.getPlayer().getParty().getMembers();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var levelValid = 0;
            var inMap = 0;
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if (ccPlayer != null) {
                    if (ccPlayer.getLevel() >= minLevel && ccPlayer.getLevel() <= maxLevel) {
                        levelValid += 1;
                    }
                    if (ccPlayer.getMapId() == mapId) {
                        inMap += (ccPlayer.isGM() ? 3 : 1);
                    }
                    if (cPlayer.getChannel() != cm.getPlayer().getClient().getChannel() || cPlayer.getMapid() != cm.getMapId() || cm.getPlayer().getClient().getChannel() != 1) {
                        next = false;
                    }
                } else {
                    next = false;
                }
            }
            if (party.size() > maxPartySize || inMap < minPartySize) {
                next = false;
            }
            if (next) {
                var em = cm.getEventManager("xbydn");
                if (em == null) {
                    cm.sendOkS("脚本错误，请联系管理员", 0, 9390474);
                    cm.dispose();
                    return;
                }
                var prop = em.getProperty("state");
                if (prop == null || prop.equals("0")) {
                    em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                    if (cm.getEventCount("西班牙斗牛") > 10) {
                        if (cm.haveItem(2430865)) {
                            cm.gainNX(2, -500);
                        } else {
                            cm.gainNX(2, -1000);
                        }
                    }
                    cm.worldSpouseMessage(0x8, "≡时代怪兽新闻≡　　玩家 " + cm.getChar().getName() + " 等级 " + cm.getChar().getLevel() + "　挑战单人副本[ 西班牙斗牛 ★★★ ]");
                    cm.sendOk("#d#e尊敬的勇士 [ #r#h ##d ]\r\n\r\n预祝您 旗开得胜！！！");
                } else {
                    cm.sendOkS("\r\n\r\n\r\n\t\t#d#e当前频道已有人再斗牛!请等待或变更频道！！#k#n", 0, 9390474);
                }
            } else {
                cm.sendOkS("你所属的组队人数在" + minPartySize + "人以下，没办法进去。必须有" + minLevel + "级以上的角色" + minPartySize + "个以上才能进去。并且队员要在相同频道和地图,并且该怪物只能在1线挑战！\r\n请确认一下，然后再来找我。", 0, 9390474);
            }
        }
        cm.dispose();
    }
}