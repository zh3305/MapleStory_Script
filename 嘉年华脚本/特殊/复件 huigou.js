var icon0 = "#fUI/Basic.img/VScr7/enabled/thumb0#";//小图标
var icon1 = "#fUI/ChatBalloon.img/pet/16/nw#";//小黄鸡
var icon2 = "#fUI/ChatBalloon.img/pet/16/ne#";//小黄鸡
var icon3 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#";//发呆
var icon4 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#";//愤怒
var icon5 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#";//大笑
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#";//大笑

var status;
var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = new Array();
var listq = Array(
	1,3, 5, 8
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
            var txt = "#e#b\t\t\t\t　道具回购中心#k#n\r\n\r\n";
            txt += icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + "\r\n\r\n";
            txt += "　　　　 #d#L0#" + icon3 + " 回购说明 [ #r新手必看#d ] " + icon3 + "#l#k\r\n";
            txt += "　　　　 #d#L1#" + icon6 + " 回购道具 [ #r□单项□#d ] " + icon6 + "#l#k\r\n";
            txt += "　　　　 #d#L2#" + icon4 + " 回购道具 [ #r□金币□#d ] " + icon4 + "#l#k\r\n";
            txt += "　　　　 #d#L3#" + icon5 + " 回购道具 [ #r□道具□#d ] " + icon5 + "#l#k\r\n\r\n\r\n";
            txt += icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + "\r\n\r\n";
            cm.sendSimpleS(txt, 2);
        } else if (status == 1) {
            switch (selection) {
                case 0:
                    text = icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + "\r\n";
                    text += icon6 + "　　　　　　　　　　　　　　　　　　　　　　　　" + icon6 + "\r\n";
                    text += icon6 + "　　　　　　#b回购说明 -  仔细阅读 #k　　　　　　　 " + icon6 + "\r\n";
                    text += icon6 + " #d[ 050 ] 到 [ 129 ] 回购 #r予#d 1  个金牙  1 个咒语 " + icon6 + "\r\n";
                    text += icon6 + " #d[ 130 ] 到 [ 139 ] 回购 #r予#d 5  个金牙  5 个咒语 " + icon6 + "\r\n";
                    text += icon6 + " #d[ 140 ] 到 [ 149 ] 回购 #r予#d 20 个金牙  8 个咒语 " + icon6 + "\r\n";
                    text += icon6 + " #r选择 金币 渠道的回购将给予固定的金币 [ 2000W ] " + icon6 + "\r\n";
                    text += icon6 + " #r选择 单项 渠道的回购将默认道具的模式 [ 2000W ] " + icon6 + "\r\n";
                    text += icon6 + "　　　　　　　　　　　　　　　　　　　　　　　　" + icon6 + "\r\n";
                    text += icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + "\r\n";
                    cm.sendOkS(text,2);
                    status = -1;
                    break;
                case 1:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#r　" + icon4 + " 请选择需回购的道具 " + icon4 + "#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel < 050 || reqLevel > 150)
                            continue;
                        newItemList[item.getPosition()] = item.getItemId();
                    }
                    for (var key in newItemList) {
                        text += "#L" + key + "##v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 5 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    typed = 1;
                    cm.sendSimpleS(text,2);
                    break;
                case 2:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#r" + icon6 + " [ 金币 ] 是否将这些道具进行回购 "+icon6+"#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel >=20 && reqLevel < 150) {
                            newItemList[item.getPosition()] = item.getItemId();
                            beDeletedArr.push(item.getPosition());
                        }
                    }
                    for (var key in newItemList) {
                        text += "#v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 10 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    text += "\r\n\r\n#r\t回购操作不可逆　请确认是否要回购这些道具 ？#n#k";
                    typed = 2;
                    cm.sendYesNoS(text,2);
                    break;
                case 3:
                    inventoryType = 1;
                    var list = cm.getInventory(inventoryType).list();
                    itemList = list.iterator();
                    text = "\t\t#r" + icon6 + " [ 道具 ] 是否将这些道具进行回购 " + icon6 + "#n\r\n\r\n#b";
                    var indexof = 1;
                    var newItemList = Array();
                    while (itemList.hasNext()) {
                        var item = itemList.next();
                        if (cm.isCash(item.getItemId()))
                            continue;
                        var reqLevel = cm.getReqLevel(item.getItemId());
                        if (reqLevel >= 100 && reqLevel < 149) {
                            newItemList[item.getPosition()] = item.getItemId();
                            beDeletedArr.push(item.getPosition());
                        }
                    }
                    for (var key in newItemList) {
                        text += "#v" + newItemList[key] + "#";
                        if (indexof > 1 && indexof % 10 == 0) {
                            text += "\r\n";
                        }
                        indexof++;
                    }
                    text += "\r\n\r\n#r\t回购操作不可逆　请确认是否要回购这些道具 ？#n#k";
                    typed = 3;
                    cm.sendYesNoS(text, 2);
                    break;
            }
        } else if (status == 2) {
            if (typed == 1) {
                var item = cm.getInventory(inventoryType).getItem(selection);
                deleteSlot = selection;
                deleteQuantity = item.getQuantity();
                var reqLevel = cm.getReqLevel(item.getItemId());
                itemq = getType(reqLevel);
                if (cm.getSpace(4) < 2) {
                    cm.sendOk("其他栏格子不足，请整理后回购。");
                    cm.dispose();
                    return;
                }
                text = "#b确定将 #r#v" + item.getItemId() + "# #z" + item.getItemId() + "# [ " + deleteQuantity + " ] 个 #b道具进行回购吗？#k";
                cm.sendNextPrev(text);
            } else if (typed == 3) {
                itemq = getType(130);
                var count = beDeletedArr.length * itemq;
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainItem(4000082, count);
                cm.gainItem(4001832, count);
                text = "#e#r回购完毕 -领到了 #v4000082# 与 #v4001832# 每样 [ " + count + " ] 个";
                cm.sendOkS(text,2);
                cm.dispose();
            }
            else if (typed == 2) {
                itemq = getType(40);
                var count = beDeletedArr.length * itemq;
                for (var key in beDeletedArr) {
                    cm.removeSlot(1, beDeletedArr[key], 1);
                }
                cm.gainMeso(20000000 * count)
                text = "#e#r回购完毕 - 共领到 " + 20000000 * count + " 金币";
                cm.sendOkS(text, 2);
                cm.dispose();
            }
        } else if (status == 3) {
            if (typed == 1) {
                cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
                cm.gainItem(4000082, itemq);    
                cm.gainItem(4001832, itemq);
                text = "#e#r回购成功，获得了#v4000082#和#v4001832#每种" + itemq + "个";
                cm.sendOk(text);
                cm.dispose();
            }
        }
    }
}

function getType(reqLevel) {
       if (reqLevel == 40) {
        return listq[0];
    }else if (reqLevel >= 050 && reqLevel < 129) {
        return listq[1];
    } else if (reqLevel >= 130 && reqLevel < 139) {
        return listq[2];
    } else if (reqLevel >= 140 && reqLevel < 149) {
        return listq[3];
    } else {
        return 0;
    }
}