/*
装备出售
 */
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var status;
var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed=0;
var beDeletedArr = new Array();
var listq = Array(
	2, 5, 20
);
var itemq = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            text = head+"我可以帮助你分解130~150的装备，分解装备可以获得#b冬季限量币#k。\r\n\r\n";
            text += "#b#L0#"+icon+" 了解分解说明#l\r\n";
			text += "#b#L1#"+icon+" 分解指定装备#l\r\n";
			text += "#b#L2#"+icon+" 一键分解130至139装备#l\r\n";
            cm.sendSimple(text);
		} else if (status == 1){
			if (selection == -1)
				selection = 1;
			switch(selection) {
				case 0:
					text = "#e#d分解说明#n#k：\r\n";
					text += "只有130以上的装备可以进行分解。\r\n";
					text += "130-139装备分解后可获得2个#v4310129#\r\n";
					text += "140-149装备分解后可获得5个#v4310129#\r\n";
					text += "150-159装备分解后可获得20个#v4310129#\r\n";
					cm.sendOk(text);
					cm.dispose();
				break;
				case 1:
					inventoryType = 1;
					var list = cm.getInventory(inventoryType).list();
					itemList = list.iterator();
					text = "\t\t#e- 请选择要分解的装备 -#n\r\n\r\n#b";
					var indexof = 1;
					var newItemList = Array();
					while (itemList.hasNext()) {
						var item = itemList.next();
						if (cm.isCash(item.getItemId()))
							continue;
						var reqLevel = cm.getReqLevel(item.getItemId());
						if (reqLevel < 130 || reqLevel > 150)
							continue;
						newItemList[item.getPosition()]=item.getItemId();
					}
					for(var key in newItemList) {
						text += "#L" + key + "##v" + newItemList[key] + "#";
						if (indexof > 1 && indexof % 5 == 0) {
							text += "\r\n";
						}
						indexof++;
					}
					if (newItemList.length <= 0) {
						cm.sendSimple("您没有可以分解的装备。");
						status = -1;
						return;
					}
					typed=1;
					cm.sendSimple(text);
				break;
				case 2:
					inventoryType = 1;
					var list = cm.getInventory(inventoryType).list();
					itemList = list.iterator();
					text = "\t\t#e- 以下是准备分解的装备,请核对仔细 -#n\r\n\r\n#b";
					var indexof = 1;
					var newItemList = Array();
					while (itemList.hasNext()) {
						var item = itemList.next();
						if (cm.isCash(item.getItemId()))
							continue;
						var reqLevel = cm.getReqLevel(item.getItemId());
						if (reqLevel >= 130 && reqLevel <140) {
							newItemList[item.getPosition()]=item.getItemId();
							beDeletedArr.push(item.getPosition());
						}
					}
					for(var key in newItemList) {
						text += "#v" + newItemList[key] + "#";
						indexof++;
					}
					text+="\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
					typed=2;
					if (newItemList.length <= 0) {
						cm.sendSimple("您没有可以分解的装备。");
						status = -1;
						return;
					}
					cm.sendYesNo(text);
				break;
			}
		} else if (status == 2) {
			if (typed==1) {
				var item = cm.getInventory(inventoryType).getItem(selection);
				deleteSlot = selection;
				deleteQuantity = item.getQuantity();
				var reqLevel = cm.getReqLevel(item.getItemId());
				itemq = getType(reqLevel);
				if (cm.getSpace(4)<2) {
					cm.sendOk("其他栏格子不足，请整理后分解。");
					cm.dispose();
					return ;
				}
				text = "#e确定要分解#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "个 #k吗？#k";
				cm.sendNextPrev(text);
			} else if (typed==2) {
				itemq=getType(130);
				var count = beDeletedArr.length*itemq;
				for(var key in beDeletedArr) {
					cm.removeSlot(1, beDeletedArr[key], 1);
				}
				cm.gainItem(4310129, count);
				//cm.gainItem(4001832, count);
				text="分解成功，获得了#v4310129#"+count+"个";
				cm.sendOk(text);
				cm.dispose();
			}
		} else if (status == 3) {
			if (typed==1) {
				cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
				//cm.gainItem(4001832, itemq);
				cm.gainItem(4310129, itemq);
				text="分解成功，获得了#v4310129#"+itemq+"个";
				cm.sendOk(text);
				cm.dispose();
			}
		}
    }
}

function getType(reqLevel) {
	if (reqLevel >= 130 && reqLevel < 139) {
		return listq[0];
	} else if (reqLevel >= 140 && reqLevel < 149) {
		return listq[1];
	} else if (reqLevel >= 150 && reqLevel < 159) {
		return listq[2];
	} else {
		return 0;
	}
}