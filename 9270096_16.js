var status = -1;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var buyId = -1;
var item = null;
var itemList = Array(
	//道具代码，抵用券，数量， 次数：-1为不限制
	Array(5220040, 3000, 10, -1),
	//Array(5152210, 12000, 10, -1),
	//Array(5150135, 12000, 10, -1),
	Array(5062000, 6000, 10, 3),
	Array(5050000, 50000, 100, -1),
	Array(5062002, 12000, 10, 1),
	Array(5062500, 15000, 10, 1),
	//Array(5062010, 20000, 10, 1),
	Array(5062009, 20000, 10, 1),
	Array(2340000, 20000, 10, 1),
	Array(5064000, 30000, 10, 1),
	Array(2049116, 8000, 1, 3),
	Array(2049124, 8000, 1, 3),
	Array(2049402, 2500, 1, 10),
	//Array(2049704, 5000, 1, 1),
	Array(5076000, 800, 1, -1),
	Array(5072000, 500, 1, -1)
);
function start() {
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
		var text = "欢迎来到#e#b抵用商城#k#n，请选择你要购买的物品，部分物品有次数限制哦！\r\n";
		for(var key in itemList) {
			var itemid = itemList[key][0];
			var itemquantity = itemList[key][2];
			var limitcount = itemList[key][3];
			var price = itemList[key][1];
			text+="#L"+key+"#"+aaa+" #r"+price+"抵用券#d兑换#b#z"+itemid+"# #d"+itemquantity+"个#k ";
			if (limitcount != -1) {
				var currentTimes = cm.getBossLogAcc("抵用券"+cm.getItemName(itemid));
				if (currentTimes >= limitcount)
					text+="#r("+currentTimes+"/"+limitcount+"次)#k#l\r\n";
				else
					text+="#g("+currentTimes+"/"+limitcount+"次)#k#l\r\n";
			} else {
				text+="#l\r\n";
			}
		}
		cm.sendSimple(text);
		//cm.dispose();
	} else if (status == 1) {
		buyId = selection;
		item = itemList[buyId];
		var itemid = item[0];
		var itemquantity = item[2];
		var price = item[1];
		cm.sendYesNo("是否需要花费#r"+price+"抵用券#k购买"+itemquantity+"个#b#z"+itemid+"##k？");
	} else if (status == 2) {
		var itemid = item[0];
		var itemquantity = item[2];
		var limitcount = item[3];
		var price = item[1];
		var currentTimes = cm.getBossLogAcc("抵用券"+cm.getItemName(itemid));
		var myNx = cm.getPlayer().getCSPoints(2);
		if (myNx < price) {
			cm.sendOk("您的抵用券余额不足，无法完成购买。");
			cm.dispose();
			return;
		}
		if (limitcount!=-1 && currentTimes>=limitcount) {
			cm.sendOk("您今天无法再购买该物品。");
			cm.dispose();
			return;
		}
		if (cm.getSpace(Math.floor(itemid/1000000))<=2) {
			cm.sendOk("您的背包空间不足，请整理后再购买。");
			cm.dispose();
			return; 
		}
		cm.gainItem(itemid, itemquantity);
		cm.gainNX(2, -price);
		if (limitcount!=-1) {
			cm.setBossLogAcc("抵用券"+cm.getItemName(itemid))
		}
		cm.sendOk("恭喜您购买成功！");
		cm.dispose();
	}
}