var status = -1;
var em=null;
var typed = 0;
var currentMap = 0;
var currentMapId = 0;
var currentChannel = 0;
function start() {
	if (em==null)
		em = cm.getEventManager("NewEvent45");
	currentMapId = cm.getPlayer().getMapId();
	currentChannel = cm.getPlayer().getClient().getChannel();
	action(1, 0, 0);
}

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
	if (status == 0) {
		var text = "请选择在线发放的奖励：\r\n";
		text+="#b#L1#发放点卷#l\r\n";
		text+="#b#L2#发放抵用券#l\r\n";
		text+="#b#L3#发放雪花币#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		typed = selection;
		var text = "请选择在线发放的类型：\r\n";
		text+="#b#L0#指定发放给当前地图的玩家#l\r\n";
		text+="#b#L1#全频道发放#l\r\n";
		cm.sendSimple(text);
	} else if (status == 2) {
		currentMap = selection;
		//cm.sendSimple(text);
		
		cm.sendGetNumber("请输入发放的数值：\r\n",0,1,999999); 
	} else if (status == 3) {
		giftByGM(typed, selection, currentMap);
		cm.sendOk("发放成功");
		cm.dispose();
	}
}
function giftByGM(type, points, currentMap) {
	var allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();
	allPlayers = allPlayers.iterator();
	while (allPlayers.hasNext()) {//循环每一个玩家
		var player = allPlayers.next();
		if (currentMap == 0) {
			if (player.getClient().getChannel() != currentChannel)
				continue;
			if (player.getMapId() != currentMapId)
				continue;
		}
		if (type <= 2) {
			player.modifyCSPoints(type, points);
		} else {
			em.addById(player.getClient(), 4310014, points, "GM在线发放");
		}
		var typeName = "";
		switch(type) {
			case 1:
				typeName = "点卷";
				break;
			case 2:
				typeName = "抵用券";
				break;
			case 3:
				typeName = "雪花币";
				break;
		}
		var text = "你获得了管理员送出的"+points+typeName;
		player.dropMessage(1,text);	
	}
}