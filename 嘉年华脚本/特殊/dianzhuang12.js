var status = 0;
var giftContent = Array(
	Array("11周年枫叶套装", 99, Array(
		Array(1052953, 1),
		Array(1082659, 1),
		Array(1004556, 1),
		Array(1702598, 1),
		Array(1070024, 1)
	)), 
	Array("怪盗幻影[男款]套装", 70, Array(
		Array(1702347, 1),
		Array(1003436, 1),
		Array(1102355, 1),
		Array(1112745, 1),
		Array(1050226, 1),
		Array(1070024, 1)
	)), 
	Array("怪盗幻影[女款]套装", 70, Array(
		Array(1702347, 1),
		Array(1003436, 1),
		Array(1102355, 1),
		Array(1112745, 1),
		Array(1051276, 1),
		Array(1071036, 1)
	)),
	Array("死亡之刃-男套餐", 70, Array(
		Array(1702565, 1),
		Array(1004450, 1),
		Array(1050356, 1),
		Array(1102809, 1),
		Array(1073041, 1)
	)),
	Array("死亡之刃-女套餐", 70, Array(
		Array(1702565, 1),
		Array(1004450, 1),
		Array(1051426, 1),
		Array(1102809, 1),
		Array(1073041, 1)
	)),
	Array("咯咯嗒小鸡套装", 60, Array(
		Array(1003965, 1),
		Array(1052661, 1),
		Array(1082549, 1),
		Array(1702461, 1)
	)),
	Array("海豹白白套装", 88, Array(
		Array(1003713, 1),
		Array(1052550, 1),
		Array(1082493, 1),
		Array(1702454, 1)
	)),
	Array("阿拉丁[男款]套装",50, Array(
		Array(1003666, 1),
		Array(1052372, 1),
		Array(1082448, 1),
		Array(1072680, 1),
		Array(1702379, 1)
	)),
	Array("阿拉丁[女款]套装", 50, Array(
		Array(1003667, 1),
		Array(1052373, 1),
		Array(1082448, 1),
		Array(1072681, 1),
		Array(1702379, 1)
	)),
	Array("血腥套装", 60, Array(
		Array(1003934, 1),
		Array(1052644, 1),
		Array(1052643, 1),
		Array(1102605, 1),
		Array(1702444, 1),
		Array(1072848, 1)
	)),
	Array("夏日海洋套装", 99, Array(
		Array(1003636, 1),
		Array(1702375, 1),
		Array(1052536, 1),
		Array(1102491, 1),
		Array(1072893, 1)
	)),
	Array("波比魔法[男款]套装", 60, Array(
		Array(1102583, 1),
		Array(1003892, 1),
		Array(1050285, 1),
		Array(1072831, 1),
		Array(1702433, 1)
	)),
	Array("波比魔法[女款]套装", 60, Array(
		Array(1102583, 1),
		Array(1003892, 1),
		Array(1050352, 1),
		Array(1072831, 1),
		Array(1702433, 1)
	)),
	Array("蝴蝶套装", 81, Array(
		Array(1102453, 1),
		Array(1003581, 1),
		Array(1042241, 1),
		Array(1062156, 1),
		Array(1702367, 1)
	)), 
	Array("巧克力精灵套装", 66, Array(
		Array(1003460, 1),
		Array(1052438, 1),
		Array(1072749, 1),
		Array(1102488, 1)
	))
);
var giftId = -1;
var gifts = null;
var price = 999;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		var text = "";
		text += "欢迎来到礼包商城，点击可以查看礼包内容哦！\r\n";
		for(var key in giftContent) {
			text+="#b#L"+key+"##v2433245# 购买【#r#e"+giftContent[key][0]+"#n#b】 需要#e#d"+giftContent[key][1]+"个中介#n#b#l#k\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		giftId = parseInt(selection);
		price = giftContent[giftId][1];
		gifts = giftContent[giftId][2];
		var text="#r#e"+giftContent[giftId][0]+"#n#b内容：\r\n";
		for(var key in gifts) {
			var itemId = gifts[key][0];
			var itemQuantity = gifts[key][1];
			text+="#i"+itemId+":##b#z"+itemId+"##k #rx "+itemQuantity+"#k\r\n";
		}
		text+="\r\n#d是否花费#e#r"+price+"#n#d个中介币购买该礼包？#k";
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (giftId!=-1 && gifts != null) {
			if (cm.getSpace(1) < 8 || cm.getSpace(2) < 8 || cm.getSpace(3) < 8 || cm.getSpace(4) < 8 || cm.getSpace(5) < 8) {
				cm.sendOk("您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。");
				cm.dispose();
				return ;
			}
			if (!cm.haveItem(4000463, price)) {
				cm.sendOk("您的中介币不足，请先充值后再购买。");
				cm.dispose();
				return ;
			}
			for(var key in gifts) {
				var itemId = gifts[key][0];
				var itemQuantity = gifts[key][1];
				cm.gainItem(itemId, itemQuantity);
			}
			cm.gainItem(4000463, -price);
			cm.sendOk("恭喜您，购买成功！");
			cm.dispose();
		} else {
			cm.sendOk("购买错误！请联系管理员！");
			cm.dispose();
		}
	}
}
