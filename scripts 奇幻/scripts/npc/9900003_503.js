/*
装备出售
 */

var status;
var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed=0;
var price = Array(600000, 4800000, 200000000);
var gainMoney = 0;

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
            text = "您好，在我这里可以直接出售130~150的装备。\r\n\r\n";
            text += "#b#L0#查看当前物价对照表#l\r\n";
			text += "#b#L1#我要出售装备#l\r\n\r\n";
            cm.sendSimple(text);
		} else if (status == 1){
			if (selection == -1)
				selection = 1;
			switch(selection) {
				case 0:
					text = "物价参照表：\r\n";
					text += "130-139装备回收价格：#b"+price[0]+"#k 游戏币\r\n";
					text += "140-149装备回收价格：#b"+price[1]+"#k 游戏币\r\n";
					text += "150-159装备回收价格：#b"+price[2]+"#k 游戏币\r\n";
					cm.sendOk(text);
					cm.dispose();
				break;
				case 1:
					inventoryType = 1;
					var list = cm.getInventory(inventoryType).list();
					itemList = list.iterator();
					text = "\t\t#e- 请选择要出售的装备 -#n\r\n\r\n#b";
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
					typed=1;
					cm.sendSimple(text);
				break;
			}
		} else if (status == 2) {
			if (typed==1) {
				var item = cm.getInventory(inventoryType).getItem(selection);
				deleteSlot = selection;
				deleteQuantity = item.getQuantity();
				var reqLevel = cm.getReqLevel(item.getItemId());
				gainMoney = getPrice(reqLevel);
				if (cm.getMeso()+gainMoney >= 2100000000) {
					cm.sendOk("身上的钱太多了，无法出售道具");
					cm.dispose();
					return ;
				}
				text = "#e确定要出售#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "个 #k吗？出售后可以获得游戏币 #r"+gainMoney+"#k";
				cm.sendNextPrev(text);
			}
		} else if (status == 3) {
			if (typed==1) {
				cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
				cm.gainMeso(gainMoney);
				cm.sendOk("出售成功，获得了#r"+gainMoney+"#k游戏币~");
				cm.dispose();
			}
		}
    }
}

function getPrice(reqLevel) {
	if (reqLevel >= 130 && reqLevel < 139) {
		return price[0];
	} else if (reqLevel >= 140 && reqLevel < 149) {
		return price[1];
	} else if (reqLevel >= 150 && reqLevel < 159) {
		return price[2];
	} else {
		return 0;
	}
}