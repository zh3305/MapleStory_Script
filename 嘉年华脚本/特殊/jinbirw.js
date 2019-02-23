var status = -1;
var typed = 0;

var needItems = Array(
	//Array(1002357, 1, " 普通扎昆获得"),
	Array(4000686, 50, "大海贼"), // - 恭 - 卡珊德拉的新年护符材料。
	Array(4000110, 80, "骑兵"), // - 发 - 卡珊德拉的新年护符材料。
	Array(4000439, 60, "石板~") // - 财 - 卡珊德拉的新年护符材料。
);

var mPoints = 5000000; //奖励金币

var maxCount = 1; //每日做几次

var bossId = "金币任务奖励";

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = "\t\t\t\t\t#d金币任务\r\n";
		text += "\t\t#d#e※   活动要求请仔细阅读   ※#n#k#b\r\n\r\n";
		text += "※ 当前已完成 [ #r" + cm.getPQLog(bossId) + "#b ]\t\t\t今天可参与 [ #r"+(maxCount- cm.getPQLog(bossId))+"#b ]\r\n";
		text += "※ 收集如下道具";
		for(var i in needItems) {
			var itemid = needItems[i][0];
			text += "[ #t"+itemid+"# ] ";
		}
		text += "\r\n";
		for(var i in needItems) {
			var itemid = needItems[i][0];
			var quantity = needItems[i][1];
			text += "#b"+rightPadding("※ 当前拥有"+cm.getItemName(itemid)+"数量：", 30) +  ((cm.getItemQuantity(itemid)>=quantity) ? "#g" : "#r") + cm.getItemQuantity(itemid)   + " / " + quantity + " 个 #r"+(needItems[i][2])+"#b\r\n";
		}
		text += "\r\n\t\t\t#d今日已累计获得金币数量：#r"+(cm.getPQLog(bossId) * mPoints)+"#d ";
		
		cm.sendYesNoS(text, 2);
	} else if (status == 1){
		
		if (cm.getPQLog(bossId) >= maxCount) {
			cm.sendOkS("您今日已经完成过该任务了！", 2);
			cm.dispose();
			return;
		}
		
		var next = true;
		for(var i in needItems) {
			var itemid = needItems[i][0];
			var quantity = needItems[i][1];
			if (cm.getItemQuantity(itemid) < quantity) {
				next = false;
				break;
			}
		}
		if (next) {
			cm.setPQLog(bossId);
			for(var i in needItems) {
				var itemid = needItems[i][0];
				var quantity = needItems[i][1];
				cm.gainItem(itemid, -quantity);
			}
			cm.gainMeso(5000000);
                        cm.gainItem(4310176, 1);
			cm.getPlayer().dropMessage(1, "成功领取"+mPoints+"金币！");
			cm.dispose();
		} else {
			cm.sendOkS("您的道具不足，无法领取奖励。", 2);
			cm.dispose();
		}
	}
}

function len(s) {
	var l = 0;
	var a = s.split("");
	for (var i = 1; i < a.length; i++) {
		if (a[i].charCodeAt(0) < 299) {
			l++;
			//java.lang.System.out.println("1:"+a[i]);
		} else {
			l+= 2;
			//java.lang.System.out.println("2:"+a[i]);
		}
	}
	return l;
}

function rightPadding(text, padding) {
	var length = len(text);
	var lastLength = padding-length;
	if (lastLength>0) {
		for(var i=0; i<lastLength; i++) {
			text+=" ";
		}
	}
	return text;
}
