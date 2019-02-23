var status = 0;
var minLevel = 180;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
var XZ;
var name0 = "[系列]武陵组队任务";
var name = Array(
		Array("[执行]武陵-仙人修炼场","仙人修炼场","NewEvent13",100,110),//执行显示的名字、事件记录、事件脚本名称、帐号次数、怪物等级
		Array("[执行]武陵-通天林","通天林","NewEvent14",100,140),
		Array("[执行]武陵-熊之领域","熊之领域","NewEvent15",100,170),
		Array("[执行]武陵-药草田","药草田","NewEvent16",100,190),
		Array("[执行]武陵-海盗团巢穴","海盗团巢穴","NewEvent17",100,210)
);
var Q = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
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
	if (cm.getPlayer().getClient().getChannel() == 1 || cm.getPlayer().getClient().getChannel() == 2 || cm.getPlayer().getClient().getChannel() == 3) {
        if (status == 0) {
			var txt = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，"+ name0 +":\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r1,2,3线可挑战。\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r所属队长与我对话执行。\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#组队员等级必须要在" + minLevel + "级以上。\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。#b\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n";
			for (var i = 0;i<name.length ;i++ ){
				txt+= "#L"+i+"#"+Q+""+ name[i][0] +"#l\r\n"
			}
            cm.sendSimple(txt);
		} else if (status == 1) {
			XZ = selection;
			if (cm.haveItem(4000664,20)){
				var txt= "检测到你有可以开启BOSS乱入的道具 #v4000664#X20，是否使用？\r\n";
					txt+= "#L999#是#l\r\n";
					txt+= "#L998#否#l\r\n";
			}else{
				var txt= "系统没有检测到有开启乱入BOSS证明 #v4000664#X20，请点击下一步开始。（无证明会有5%几率出现乱入）";
			}
			cm.sendSimple(txt);
        } else if (status == 2) {
                if (cm.getParty() == null) { // 没有组队
                    cm.sendOk("请组队后和我谈话。");
                    cm.dispose();
                } else if (!cm.isLeader()) { // 不是队长
                    cm.sendOk("队长必须在这里。请让他和我说话。");
                    cm.dispose();
                } else  {
		if (cm.getEventCount(name[XZ][1]) < name[XZ][3]){
		if (cm.checkPartyEventCount(name[XZ][1],name[XZ][3])){
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
                        var em = cm.getEventManager(name[XZ][2]);
                        if (em == null) {
                            cm.sendOk("此任务正在建设当中。");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
								if (selection==999){
									em.setProperty("leader","true");
									cm.gainItem(4000664,-20);
								}
                                em.startInstance(cm.getParty(), cm.getMap(), name[XZ][4]);
								cm.setPartyEventCount(name[XZ][1]);
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk(""+ name[XZ][0] +"任务里面已经有人了，请稍等！");
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                        cm.dispose();
                    }
                } else {
			cm.sendOk("请检查队伍中是否存在已完成次数#b队员#k。");
			cm.dispose();
			}
                } else {
			cm.sendOk("对不起，该帐号每天只能进入"+name[XZ][3]+"次。\r\n");
			cm.dispose();
			}
		} //判断组队
        }
		 } else {
        		cm.dispose();
        		cm.sendOk("只有在1,2,3频道才可以参加"+ name[XZ][0] +"。");
	}
    }
}