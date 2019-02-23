var status = 0;
var minLevel = 120;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 1;
var shen = 1000;

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
        if (mode == 1) status++;
        else status--;
	if (cm.getPlayer().getClient().getChannel() == 1) {
        if (status == 0) {
            cm.sendSimple("#e<单挑任务：神秘领域>#n\r\n在吗，各位十字猎人！出问题了。冒险岛世界各个地方出现了新的时空门。危险的能量正在涌来，好像即将有不寻常的事情发生……如果想挑战的话，请让#b所属组队的队长#k来和我说话。\r\n#b#L0#我想执行单挑任务。#l\r\n#L1#我想听一下说明。#l")
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // 没有组队
                    cm.sendOk("请组队后和我谈话。");
                    cm.dispose();
                } else if (!cm.isLeader()) { // 不是队长
                    cm.sendOk("队长必须在这里。请让他和我说话。");
                    cm.dispose();
                    } else  {
		if (cm.getBossLog("神秘领域") < shen){
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
                        var em = cm.getEventManager("ShenmlyBoss");
                        if (em == null) {
                            cm.sendOk("此任务正在建设当中。");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
                                em.startInstance(cm.getParty(), cm.getMap(), 120);
		    cm.setBossLog("神秘领域");
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("神秘领域里面已经有人了，请稍等！");
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                        cm.dispose();
                    }
                } else {
			cm.sendOk("对不起，一天只能进入1000次。");
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
        		cm.sendOk("只有在1频道才可以参加神秘领域。");
	}
    }
}