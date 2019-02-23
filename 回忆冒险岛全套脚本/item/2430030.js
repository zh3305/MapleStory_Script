var status = -1;
var questid = 200100;
var playerid = 0;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			im.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		playerid = im.getPlayer().getId();
		if (im.getPlayer().MissionStatus(playerid, questid, 0, 4)) {  // 判断是否接取了任务
			if (!im.getPlayer().MissionStatus(playerid, questid, 0, 0)) { // 判断是否完成任务
				var mapid = im.getPlayer().MissionGetMobId(playerid, questid);
				im.warp(mapid);
				im.remove(1);
				im.dispose();
				im.getPlayer().dropMessage(1, "快打开口袋看看，藏着什么好东西！");
			} else {
				im.sendOk("你还没有接取寻宝任务呢，想去哪？");
				im.dispose();
			}
		} else {
			im.sendOk("你还没有接取寻宝任务呢，想去哪？");
			im.dispose();
		}
	}
}