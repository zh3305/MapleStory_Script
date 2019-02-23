var yaoDai = 1132211;
var jianShi = 1152120;
var boxId = -1;
var status = -1;
var select = -1;
var chance = [350, 200, 100, 35];

function start() {
	var menu = "";
	for (var i = 0 ; i < 5 ; i++) {
		var itemId = yaoDai + i;
		menu += "#L" + itemId + "##i" + itemId + "# #t" + itemId + "#\r\n";
	}
	for (var i = 0 ; i < 5 ; i++) {
		var itemId = jianShi + i;
		menu += "#L" + itemId + "##i" + itemId + "# #t" + itemId + "#\r\n";
	}
	cm.sendSimple("你好，我可以帮你强化意志腰带或肩饰，但是需要意志盒，下面选择你想要的装备。\r\n#b" + menu);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	if (status == 0) {
		if (select == -1)
			select = selection
		if (cm.haveItem(4033667)) {
			boxId = 4033667;
		} else if (cm.haveItem(4310090)) {
			boxId = 4310090;
		}
		if (boxId == -1) {
			cm.sendOk("你好像没有#i4033667# #t4033667#，我无法帮你做什么。");
			cm.dispose();
		} else if ((select<yaoDai&&select>yaoDai+4) || (select<jianShi&&select>jianShi+4)) {
			cm.sendOk("出现未知错误。");
			cm.dispose();
		} else {
			var haveItemId = -1;
			var success = true;
			if (select != yaoDai && select != jianShi) {
				haveItemId = select - 1;
				if (!cm.haveItem(haveItemId)) {
					cm.sendOk("你好像没有#i" + haveItemId + "# #t" + haveItemId + "#，我无法帮你做什么。");
					cm.dispose();
					return;
				}
				var i = -1;
				if (parseInt(haveItemId/100, 10) == parseInt(yaoDai/100, 10)) {
					i = haveItemId%10-1;
				} else if (parseInt(haveItemId/100, 10) == parseInt(jianShi/100, 10)) {
					i = haveItemId%10;
				}
				if (i == -1 || !cm.haveItem(boxId)) {
					cm.sendOk("出现未知错误。"+parseInt(haveItemId/100, 10));
					cm.dispose();
					return;
				}
				var random = new java.util.Random();
				if (random.nextInt(1000) > chance[i]) {
					success = false;
				}
			}
			if (success) {
				if(cm.canHold(select) && cm.haveItem(boxId)) {
					cm.gainItem(boxId, -1);
					if (haveItemId == -1) {
						cm.gainItem(select, 1);
					} else if (cm.haveItem(haveItemId)) {
						cm.gainItem(haveItemId, -1);
						cm.gainGachaponItem(select, 1, "星缘意志强化");
					} else {
						cm.sendOk("出现未知错误。");
						cm.dispose();
						return;
					}
					cm.sendOk("你获得了#i" + select + "# #t" + select + "#，恭喜你！");
				} else {
					cm.sendOk("请确认你背包有足够的空间。");
				}
			} else {
				cm.gainItem(boxId, -1);
				cm.sendOk("强化失败。");
			}
			cm.dispose();
		}
	} else {
		cm.dispose();
	}
}
