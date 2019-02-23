//女神之血滴
var status = 0;
var itemPosition=0;
//升级消耗的个数
var expendNum = -1;
var meso = 0;
var typed = 0;
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
		im.sendSimple("你想让神话耳环变的更强大吗？#b\r\n#L1#兑换神话耳环#l\r\n#L2#升级神话耳环#l");
	} else if (status == 1) {
		if (selection == 1) {
			if (im.haveItem(2432014, 10)) {
				im.sendYesNo("你是否想用10滴女神血滴兑换一个初级神话耳环？");
				typed=1;
			} else {
				im.sendOk("兑换失败，兑换神话耳环至少要有10滴女神血滴。");
				im.dispose();
			}
		} else if (selection == 2) {
			typed=2;
			var itemList = im.getInventory(1).list().iterator();
			var text = "请选择您要升级的耳环：\r\n";
			var indexof = 0;
			while(itemList.hasNext()) {
				var item = itemList.next();
				var flag = true;
				switch(item.getItemId()) {
					case 1032205: // 神话耳环 - (无描述)
						expendNum=10;
						break;
					case 1032206: // 神话耳环复原第1阶段 - (无描述)
						expendNum=20;
						break;
					case 1032207: // 神话耳环复原第2阶段 - (无描述)
						expendNum=50;
					case 1032208: // 神话耳环复原第3阶段 - (无描述)
						expendNum=100
					case 1032209: // 神话耳环复原第4阶段 - (无描述)
						expendNum=200;
						meso = 1500000000;
						break;
					default:
						flag=false;
					//1032219 // 遗忘之神话耳环 - (无描述)
				}
				if (!flag)
					continue;
				if (indexof > 1 && indexof % 5 == 0) {
					text += "\r\n";
				}
				indexof++;
				text += "#L"+item.getPosition()+"##v"+item.getItemId()+"##l";
			}
			if (indexof==0) {
				status = -1;
				text = "没有可以进行升级的神话耳环";
			}
			im.sendSimple(text);
		}
	} else if (status == 2) {
		if (typed == 1) {
			im.gainItem(1032205, 1);
			im.gainItem(2432014, -10);
			im.sendOk("兑换成功！");
			im.dispose();
		} else if (typed == 2) {
			itemPosition = selection;
			itemId = im.getInventory(1).getItem(itemPosition).getItemId();
			var upgradeItemId = (itemId == 1032209) ? parseInt(itemId)+10 : parseInt(itemId)+1;
			var mesoTip = "。";
			if (meso>0) {
				mesoTip = "和"+meso+"游戏币！";
			}
			im.sendYesNo("将#b#v"+itemId+"##k升级为#b#v"+upgradeItemId+"#需要消耗"+expendNum+"个女神之血滴"+mesoTip+"，是否升级？");
		}
	} else if (status == 3) {
		if (im.haveItem(2432014, expendNum) && im.getMeso() >= meso) {
			//itemPosition = selection;
			itemId = im.getInventory(1).getItem(itemPosition).getItemId();
			var upgradeItemId = (itemId == 1032209) ? parseInt(itemId)+10 : parseInt(itemId)+1;
			im.removeSlot(1, itemPosition, 1);
			im.gainItem(upgradeItemId, 1);
			if (upgradeItemId == 1032219)
				im.worldSpouseMessage(0x15, "[神话耳环] : 恭喜 " + im.getChar().getName() + " 成功将 神话耳环复原第4阶段 升级为 遗忘之神话耳环！");
			im.sendOk("恭喜你，得到了#v"+upgradeItemId+"#");
			im.gainItem(2432014, -expendNum);
			im.safeDispose();
		} else {
			var mesoTip = "。";
			if (meso>0) {
				mesoTip = "和"+meso+"游戏币！";
			}
			im.sendOk("您的女神血滴不足，当前升级需要#r"+expendNum+"#k个女神血滴"+mesoTip);
			im.dispose();
		}
	}
}