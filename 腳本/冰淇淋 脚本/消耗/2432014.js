//女神之血滴
var status = 0;
var itemPosition=0;
//升级消耗的个数
var expendNum = 3;

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
		if (!im.haveItem(2432014, expendNum))
		{
			im.sendOk("你需要"+expendNum+"滴#b女神之血滴#k才可以进行神话耳环升级");
			im.dispose();
			return;
		}
		var itemList = im.getInventory(1).list().iterator();
		var text = "请选择您要升级的耳环：\r\n";
		var indexof = 0;
		while(itemList.hasNext()) {
			var item = itemList.next();
			var flag = false;
			switch(item.getItemId()) {
				case 1032205: // 神话耳环 - (无描述)
				case 1032206: // 神话耳环复原第1阶段 - (无描述)
				case 1032207: // 神话耳环复原第2阶段 - (无描述)
				case 1032208: // 神话耳环复原第3阶段 - (无描述)
				case 1032209: // 神话耳环复原第4阶段 - (无描述)
					flag = true;
					break;
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
		text+="\r\n\r\n#d升级成功率#r100%#k";
		if (indexof==0)
			text = "没有可以进行升级的神话耳环";
		im.sendSimple(text);
	} else if (status == 1) {
		itemPosition = selection;
		itemId = im.getInventory(1).getItem(itemPosition).getItemId();
		var upgradeItemId = (itemId == 1032209) ? parseInt(itemId)+10 : parseInt(itemId)+1;
		im.removeSlot(1, itemPosition, 1);
		im.gainItem(upgradeItemId, 1);
		if (upgradeItemId == 1032219)
			im.worldMessage( "[神话耳环] : 恭喜 " + im.getChar().getName() + " 成功将 神话耳环复原第4阶段 升级为 遗忘之神话耳环！");
		im.sendOk("恭喜你，得到了#v"+upgradeItemId+"#");
		im.gainItem(2432014, -expendNum);
		im.dispose();
	}
}