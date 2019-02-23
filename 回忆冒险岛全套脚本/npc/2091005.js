/*
	内容：武陵道场6层
	地图：925060600
*/

var status = 0;
var text;
var baseMapId = 925060000;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		return;
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}

		if (status == 0) {
			text = "累坏了吧，来泡个澡休息一下~\r\n\r\n#b";
			if (((cm.getMapId() - 925060000) / 100) % 6 == 0) {
				text += "#L0#继续挑战下一层#l\r\n";
			}
			text += "#L1#购买增益BUFF#l\r\n#L2#退出挑战#l";
			cm.sendNext(text);
		} else if (status == 1) {
			if (selection == 0) {
				var eim = cm.getPlayer().getEventInstance();
				var maps = eim.getObjectProperty("maps");
				if (maps == null) {
					java.lang.System.out.println("maps获取失败");
					eim.dispose();
					return;
				}

				for (var i = 1; i < maps.length; i++) {
					if (maps[i][0] == cm.getPlayer().getMapId() + 100) {
						cm.getPlayer().changeMap(maps[i][1], maps[i][1].getPortal(0));
						break;
					}
				}
			} else if (selection == 1) {
				cm.sendOk("暂时没什么东西卖的……");
			} else {
				cm.warp(925020001);
			}
			cm.dispose();
		}
	}
}