/*
废弃副本脚本,小桑端专用
*/

var status = 0;

var minLevel = 150;
var maxLevel = 200;

var minPartySize = 3;
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
		if (status == 0) {
			// Lakelis has no preamble, directly checks if you're in a party
			if (cm.getParty() == null) { // No Party
				cm.sendOk("您想要挑战#b废弃都市组队修炼#k吗?那么您必须要有一个组队噢!\r\n最低等级要求:#b151\r\n#k可获得:#b邮票(可用于家族增加GP).圣杯(转生使用).");
				cm.dispose();
			} else if (!cm.isLeader()) { // Not Party Leader
				cm.sendOk("如果想要挑战#b废弃都市组队修炼#k请让你们的#b组队长#k来找我吧!.");
				cm.dispose();
			} else {
				// Check if all party members are within PQ levels
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
					var em = cm.getEventManager("KerningPQ");
					if (em == null) {
						cm.sendOk("任务副本正在维护中...请期待开放.");
					} else {
						if (em.getProperty("entryPossible") != "false") {
							// Begin the PQ.
							em.startInstance(cm.getParty(),cm.getPlayer().getMap());
							// Remove Passes and Coupons
							
							cm.removeAll(4001008);
							cm.removeAll(4001007);
							if(cm.partyMemberHasItem(4001008) || cm.partyMemberHasItem(4001007)) { 
								cm.getPlayer().getEventInstance().setProperty("smugglers", "true"); 
								cm.partyNotice("Your smuggling attempt has been detected. We will allow the attempt, but you will not get any NX cash from this run.");

							}
							em.setProperty("entryPossible", "false");
							cm.getPlayer().getEventInstance().setProperty("startTime", new java.util.Date().getTime());
						} else { // Check if the PQ really has people inside
							var playersInPQ = 0;
							for (var mapid = 103000800; mapid <= 103000805; mapid++) {
								playersInPQ += cm.countPlayersInMap(mapid);
							}
							if (playersInPQ <= 1)
								em.setProperty("entryPossible", "true");
							cm.sendOk("Another party has already entered the #rKerning Party Quest#k in this channel. Please try another channel, or wait for the current party to finish.");
						}
					}
					cm.dispose();
				} else {
					cm.sendNext("您的组队必须有#b3#k名队员,并且都在此地图中\r\n等级必须在#b151-#b200#k级之间!\r\n目前只有#b" + inMap + "#k在此地图!.");
					cm.dispose();
				}
			}
		}
	}
}