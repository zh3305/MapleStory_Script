var status = 0;
var bossid = "等级礼包1";
var giftLevel = Array(1,30,60,100,150);
var giftContent = Array(
							// 1级礼包
							Array(2001516, 100, 1),
							Array(2002036, 100, 1),
							Array(5040005, 100, 1),
							Array(2100900, 1, 1),
							Array(3010013, 1, 1),
							// 30级礼包
							Array(2002036, 100, 2),
							Array(5062000, 30, 2),
							Array(2001505, 100, 2),
							Array(2001556, 100, 2), // 包治百病药
							Array(2001537, 50, 2),
							Array(2001538, 50, 2),
							Array(2001539, 50, 2),
							Array(2100900, 2, 2),
							Array(3010037, 1, 2),
							Array(-1, 1000, 2),
							// 60级礼包
							Array(2002036, 100, 3),
							Array(5062000, 30, 3),
							Array(5062002, 10, 3),
							Array(2001505, 300, 3),
							Array(2001556, 100, 3),
							Array(2100900, 3, 3),
							Array(3010038, 1, 3),
							Array(-1, 2000, 3),
							// 100级礼包
							Array(2002036, 100, 4),
							Array(5062000, 40, 4),
							Array(2001505, 300, 4),
							Array(5062002, 20, 4),
							Array(2001556, 200, 4),
							Array(2100900, 4, 4),
							Array(3010046, 1, 4),
							Array(-1, 3000, 4),
							// 150级礼包
							Array(2002036, 100, 5),
							Array(5062000, 50, 5),
							Array(5062002, 30, 5),
							Array(2001505, 300, 5),
							Array(2001556, 200, 5),
							Array(2100900, 5, 5),
							Array(-1, 4000, 5),
							Array(3010045, 1, 5)
							);
var giftId = -1;
var giftToken = Array();
var gifts = null;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		var text = "";
		text += "#r【特殊超值礼包礼物箱】\r\n\r\n#d打开后可获得下列物品：\r\n\r\n";
		for(var key in giftLevel) {
			var tips = "";
			giftToken[key]=false;
			if (im.getChar().getLevel()>=giftLevel[key]) {
				if (im.getPQLog(bossid+key) >= 0) {
					tips = "(可领取)";
					giftToken[key]=true;
				} else {
					tips = "#g(已领取)#b";
				}
			} else {
				tips = "#r(等级不足)#b";
			}
			text+="#b#L"+(parseInt(key)+1)+"#领取#r#e"+giftLevel[key]+"#n#b级等级礼包 "+tips+"#l#k\r\n";
		}
		im.sendSimple(text);
	} else if (status == 1) {
		giftId = parseInt(selection);
		var text="#r#e"+giftLevel[giftId-1]+"#n#b级礼包内容：\r\n";
		gifts = getGift(giftId);
		for(var key in gifts) {
			var itemId = gifts[key][0];
			var itemQuantity = gifts[key][1];
			text+="#v"+itemId+"##b#t"+itemId+"##k #rx "+itemQuantity+"#k\r\n";
		}
		text+="\r\n#d是否现在就领取该礼包？#k";
		im.sendYesNo(text);
	} else if (status == 2) {
		if (giftId!=-1 && gifts != null) {
			if (im.getSpace(1) < 8 || im.getSpace(2) < 8 || im.getSpace(3) < 8 || im.getSpace(4) < 8 || im.getSpace(5) < 8) {
				im.playerMessage(1, "您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。");
				im.dispose();
				return ;
			}
			if (giftToken[giftId-1]) {
				im.setPQLog(bossid+(giftId-1),0,-2);
				for(var key in gifts) {
					var itemId = gifts[key][0];
					var itemQuantity = gifts[key][1];
					im.gainItem(itemId, itemQuantity);
				}
				im.playerMessage(1, "恭喜您，领取成功！快打开包裹看看吧！");
				im.dispose();
			} else {
				status = -1;
				im.playerMessage(1, "您已经领过了该礼包或者等级未达到要求，无法领取。");
			}
		} else {
			im.playerMessage(1, "领取错误！请联系管理员！");
			im.dispose();
		}
	}
}
function getGift(id) {
	var lastGiftContent = Array();
	for (var key in giftContent) {
		if (giftContent[key][2]==id)
			lastGiftContent.push(giftContent[key]);
	}
	return lastGiftContent;
}