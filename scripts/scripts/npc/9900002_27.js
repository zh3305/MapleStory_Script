/*
 便捷功能
 */

var status;
var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            text = "\t\t\t\t#e- 便捷功能 -#n\r\n\r\n#b";
            text += "\t\t\t#L0#回收包裹内指定道具#l\r\n";
            //text += "\t\t\t#L1#整体回收包裹内道具#l\r\n";
            cm.sendSimple(text);
        } else {
            if (selstatus == -1) {
                selstatus = selection;
            }
            switch (selstatus) {
                case 0:
                    deleteItemBySlot(selection);
                    break;
                case 1:
                    deleteItemBySlotAll(selection);
					break;
            }
        }
    }
}

function deleteItemBySlot(selection) {
    if (status == 1) {
        text = "\t\t#e- 请选择要回收的道具类型 -#n\r\n\r\n#b";
        text += "\t\t\t\t#L1#装备栏#l\r\n";
        text += "\t\t\t\t#L2#消耗栏#l\r\n";
        text += "\t\t\t\t#L4#其它栏#l\r\n";
        text += "\t\t\t\t#L3#设置栏#l\r\n";
        text += "\t\t\t\t#L5#特殊栏#l\r\n";
        cm.sendSimple(text);
    } else if (status == 2) {
        inventoryType = selection;
        itemList = cm.getInventory(inventoryType).list().iterator();
        text = "\t\t#e- 请选择要回收的道具 -#n\r\n\r\n#b";
        var indexof = 1;
        while (itemList.hasNext()) {
            var item = itemList.next();
            text += "#L" + item.getPosition() + "##v" + item.getItemId() + "#";
            if (indexof > 1 && indexof % 5 == 0) {
                text += "\r\n";
            }
            indexof++;
        }
        cm.sendSimple(text);
    } else if (status == 3) {
        var item = cm.getInventory(inventoryType).getItem(selection);
        deleteSlot = selection;
        deleteQuantity = item.getQuantity();
        text = "#e确定要回收#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "个 #k吗？";
        cm.sendNextPrev(text);
    } else if (status == 4) {
        cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
        cm.sendOk("回收成功，祝你游戏愉快~");
        status = 0;
    }
}

function deleteItemBySlotAll(selection) {
        if (status == 1) {
            var text = "#e你好,我这里可以为你清理一下你的背包哟,但是需要注意,清理掉后可不能复原的哟!\r\n";
            text += "#b#L1#我要考虑清理装备栏全部的装备#l\r\n";
            text += "#r#L2#我要考虑清理消耗栏全部的装备#l\r\n";
            text += "#g#L3#我要考虑清理设置栏全部的装备#l\r\n";
            text += "#r#L4#我要考虑清理其他栏全部的装备#l\r\n";
            text += "#b#L5#我要考虑清理特殊栏全部的装备#l\r\n";
            cm.sendSimple(text);

        } else if (status == 2) {
            if (selection == 1 || selection == 2 || selection == 3 || selection == 4 || selection == 5) {
                fstype = selection;//把装备类型赋值到fstype变量,传给下面的方法
                cm.sendYesNo("你确定让我为你删除装备吗?");
            }
        } else if (status == 3) {
		var item = cm.getInventory(fstype).getItem();
		 deleteQuantity = item.getQuantity();
		 itemList = cm.getInventory(fstype).list().iterator();
            cm.removeSlot(fstype, itemList, deleteQuantity);//调用服务端内删除装备方法
            cm.sendOk("回收成功，祝你游戏愉快~");
            status = 0;
        }
    }