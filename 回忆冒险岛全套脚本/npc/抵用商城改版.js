var status = -1;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var itemList = Array(
	//道具代码，抵用券，数量， 次数：-1为不限制
	Array(5062000, 1000, 1, 30),
	Array(5050000, 15000, 100, -1),
	Array(5062002, 5000, 1, 5),
	Array(5062500, 6000, 1, 5),
	Array(5062009, 7000, 1, 5),
	Array(5062010, 7000, 1, 5),
	Array(2340000, 3000, 1, 10),
	Array(5064000, 3000, 1, 2),
	Array(2049116, 3000, 1, 10),
	Array(2049124, 3000, 1, 10),
	Array(2049402, 2000, 1, 10),
	Array(2049704, 5000, 1, 1),
	Array(5076000, 2000, 1, -1),
	Array(5072000, 1000, 1, -1)
);
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
		var text = "欢迎来到#e#b抵用商城#k#n，请选择你要购买的物品，部分物品有次数限制哦！\r\n";
		for(var key in itemList) {
			var itemid = itemList[key][0];
			var itemquantity = itemList[key][2];
			var limitcount = itemList[key][3];
			var price = itemList[key][1];
			text+="#L"+key+"#"+aaa+"#r"+price+"抵用券#d兑换#b#z"+itemid+"# #d["+itemquantity+"个]#k ";
			if (limitcount != -1) {
				text+="#d( "+cm.getBossLog("抵用券"+cm.getItemName(itemid))+" / "+limitcount+"次)#k#l\r\n";
			} else {
				text+="#l\r\n";
			}
		}
		cm.sendOk(text);
		cm.dispose();
	}
}