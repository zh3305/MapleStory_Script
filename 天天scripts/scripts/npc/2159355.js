var status = 0;
var minLevel = 200;
var maxLevel = 255;
var minPartySize = 2;
var maxPartySize = 6;

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
        if (cm.getPlayer().getClient().getChannel() == 4) {
            if (status == 0) {
                cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，[暴君]麦格纳斯:\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r4线可挑战。\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r所属队长与我对话执行。\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#组队员等级必须要在" + minLevel + "级以上。\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。#b\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L0##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[执行]暴君麦格拉斯#l")
            } else if (status == 1) {
                if (selection == 0) {
                    if (cm.getParty() == null) { // 没有组队
                        cm.sendOk("请组队后和我谈话。");
                        cm.dispose();
                    } else if (!cm.isLeader()) { // 不是队长
                        cm.sendOk("队长必须在这里。请让他和我说话。");
                        cm.dispose();
                    } else {
                    	if (!cm.allMembersHere()) {
                    		cm.sendOk("有队员不在这里。");
                    		cm.dispose();
                    		return;
                    	}
                        var party = cm.getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var levelValid = 0;
                        var inMap = 0;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var bosslog = cm.getMap().getCharacterById(cPlayer.getId()).getBossLog("麦格纳斯");
                            if (bosslog > 2) {
                                cm.sendOk("对不起，玩家 #r" + cPlayer.getName() + "#k 今天进入次数已超过2次。");
                                cm.dispose();
                                return;
                            }
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
                            var em = cm.getEventManager("ZChaosPQ1");
                            if (em == null) {
                                cm.sendOk("此任务正在建设当中。");
                            } else {
                                var prop = em.getProperty("state");
                                if (prop == "0" || prop == null) {
                                    it = party.iterator();
                                    while (it.hasNext()) {
                                        var cPlayer = cm.getMap().getCharacterById(it.next().getId());
                                        cPlayer.setBossLog("麦格纳斯");
                                    }
                                    em.startInstance(cm.getParty(), cm.getMap(), 198);
                                    cm.dispose();
                                    return;
                                } else {
                                    cm.sendOk("[暴君]麦格拉斯里面已经有人了，请稍等！");
                                }
                            }
                            cm.dispose();
                        } else {
                            cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                            cm.dispose();
                        }
                    } //判断组队
                } else if (selection == 1) {
                    cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
            cm.sendOk("只有在4频道才可以参加[暴君]麦格纳斯挑战。");
        }
    }
}