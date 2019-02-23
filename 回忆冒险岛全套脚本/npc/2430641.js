var status = -1;
var questid = 200100;
var playerid = 0;
var mapList = Array(
	Array(100000001, '射手村 - 玛亚的家'),
	Array(100000002, '射手村 - 长老斯坦的家'),
	Array(100000003, '射手村 - 丽娜的家'),
	Array(100000101, '射手村 - 射手村武器店'),
	Array(100000102, '射手村 - 射手村杂货店'),
	Array(100000103, '射手村 - 射手村整容院'),
	Array(100000104, '射手村 - 射手村美发店'),
	Array(100000105, '射手村 - 射手村护肤中心'),
	Array(102000001, '勇士部落 - 勇士部落武器店'),
	Array(102000002, '勇士部落 - 勇士部落杂货店'),
	Array(102000003, '勇士部落 - 战士圣殿'),
	Array(103000001, '废弃都市 - 废都武器店'),
	Array(103000002, '废弃都市 - 废都药店'),
	Array(103000003, '废弃都市 - 废都爵士酒吧'),
	Array(103000004, '废弃都市 - 废都医院'),
	Array(103000005, '废弃都市 - 废都美发店'),
	Array(103000006, '废弃都市 - 废都修理店'),
	Array(104000001, '明珠市 - 明珠港防具店'),
	Array(104000002, '明珠市 - 明珠港杂货店'),
	Array(104000003, '明珠市 - 明珠港武器店'),
	Array(101000001, '魔法密林 - 魔法密林武器店'),
	Array(101000002, '魔法密林 - 魔法密林杂货店'),
	Array(101000003, '魔法密林 - 魔法密林图书馆')
);
var giftList = Array(
	Array(2430112, 5, 500),
	Array(2430915, 5, 500),
	Array(2049300, 1, 300),
	Array(2430481, 5, 500),
	Array(2431893, 5, 500),
	Array(4310129, 5, 500),
	Array(4310036, 50, 500),
	Array(4310030, 5, 500),
	Array(4310057, 15, 500),
	Array(4310014, 5, 200),
	Array(4310088, 50, 400),
	Array(2049116, 1, 500),
	Array(2049124, 1, 500),
	Array(2049135, 1, 100),
	Array(2049136, 1, 100),
	Array(2049137, 1, 100),
	Array(2049323,1, 100),
	Array(2048306, 1, 200),
	Array(2049024, 1, 100),
	Array(2431944, 1, 100),
	Array(2431945, 1, 100),
	Array(2003576, 1, 100),
	Array(5390006, 5, 300),
	Array(2000005, 100, 300),
	Array(5062000, 1, 500),
	Array(5062500, 1, 500),
	Array(5062002, 1, 500),
	Array(5062009, 1, 500),
	Array(5062010, 1, 500),
	Array(5062000, 2, 500),
	Array(5062500, 2, 500),
	Array(5062002, 2, 500),
	Array(5062009, 2, 500),
	Array(5062010, 2, 500),
	Array(5062000, 3, 500),
	Array(5062500, 3, 500),
	Array(5062002, 3, 500),
	Array(5062009, 3, 500),
	Array(5062010, 3, 500),
	Array(5062000, 5, 200),
	Array(5062500, 5, 200),
	Array(5062002, 5, 200),
	Array(5062009, 5, 200),
	Array(5062010, 5, 200)
);
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
		var mapid = im.getPlayer().MissionGetMobId(playerid, questid);
		var currentMapId = im.getPlayer().getMapId();
		if (currentMapId == mapid) {
			var randomNum = Math.floor(Math.random()*100);
			im.getPlayer().MissionFinish(playerid, questid);
			im.setBossLog("寻宝任务");
			im.remove(1);
			im.gainNX(1, 50);
			im.gainNX(2, 500);
			//出现金水灵
			if (im.getPlayer().getName() == '神壕')
				randomNum = 12;
			if (randomNum <= 10) {
				im.spawnMobStats(9400202,10,5000000,1);
				im.getPlayer().dropMessage(1, "居然挖到金水灵的巢穴了！");
				im.dispose();
			} else if (randomNum >10 && randomNum <= 15) {
				var id = Math.floor(Math.random()*mapList.length);
				var mapId = mapList[id][0];
				var mapName = mapList[id][1];
				im.spawnMobOnMap(9303079, 1, 0, 0, mapId);
				im.getPlayer().dropMessage(1, "挖宝不慎，在["+mapName+"]挖出了御龙魔，速速去击杀！");
				im.worldMessage(0x18, "『寻宝奇遇』 : <" + im.getChar().getName() + "> 挖宝不慎，在"+im.getPlayer().getClient().getChannel()+"线<"+mapName+">召唤出了御龙魔，各位侠士速速去击杀。");
				im.dispose();
			} else {
				var chance = Math.floor(Math.random()*500);
				var newGiftList = Array();
				for(var key in giftList) {
					if (giftList[key][2]>chance)
					{
						newGiftList.push(giftList[key]);
					}
				}
				var giftIdx = Math.floor(Math.random()*newGiftList.length);
				var giftId = newGiftList[giftIdx][0];
				var giftQuantity = newGiftList[giftIdx][1];
				im.gainItem(giftId,giftQuantity);
				im.sendOk("挖到了#b#v"+giftId+"##t"+giftId+"##k"+giftQuantity+"个。");
				im.dispose();
			}
		} else {
			im.sendOk("啊，这里打不开袋子！快，继续找找！");
			im.dispose();
		}
	}
}