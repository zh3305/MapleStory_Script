var status = 0;
var minLevel = 180;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#e<火爆任务：挑战可劳德>#n\r\n你想挑战我吗？击败我，你就可以获得我多年收藏的宝藏……。\r\n#b#L0#我想执行组队任务。#l\r\n#L1#我想听一下说明。#l")
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // 没有组队
                    cm.sendOk("请组队后和我谈话。");
                    cm.dispose();
                } else if (!cm.isLeader()) { // 不是队长
                    cm.sendOk("请叫队长和我谈话。");
                    cm.dispose();
                } else {
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += 1;
                        }
                    }
                    if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                        next = false;
                    }
                    if (next) {
                        var em = cm.getEventManager("Zkld");
                        //cm.worldMessage(cm.getChar().getName() + "   带领他的队伍进入了玩具城101副本挑战任务.想去的快去组织队伍吧！");
                        if (em == null) {
                            cm.sendOk("此任务正在建设当中。");
                        } else {
                            if (cm.getPlayerCount(861000000) == 0) {
                                em.startInstance(cm.getParty(), cm.getMap());
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("目前该频道已经有人在挑战，请换个频道重新进入。");
                                cm.dispose();
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                        cm.dispose();
                    }
                } //判断组队
            } else if (selection == 1) {
                cm.sendOk("击败克劳德后，可找彬博士领取#b神奇魔方、高级神奇魔方、大师附加神奇魔方、征服币以及#e法弗纳武器箱子兑换币#n#k等等，并且你还有几率获得#r稀有椅子、极真系列装备、法弗纳武器#k\r\n执行任务的条件：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n3、执行副本需要交纳10个雪花币\r\n4、副本每天一次，VIP可进行一次重置\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                cm.dispose();
            }
        }
    }
}