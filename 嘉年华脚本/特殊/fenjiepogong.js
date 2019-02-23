/*
	装备分解系统
	@Author AND
 */
var xxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var xx = "#fEffect/CharacterEff/1102232/1/0#"; //星系
var status;
var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed=0;
var Jinbi=0;
var Dianjuan=0;
var beDeletedArr = new Array();
var listq = Array(
	2, 5, 20
);
var itemq = 0;
var FFN = Array(1212063,1222058,1232057,
1242060,1242061,1262016,1302275,1312153,
1322203,1332225,1342082,1362090,1372177,
1382208,1402196,1412135,1422140,1432167,
1442223,1452205,1462193,1472214,1482168,
1492179,1522094,1532098,1582016,1252015,
1542063,1552063);
var LimitA = Math.floor(Math.random()*300000);
var LimitB = Math.floor(Math.random()*3000000)+3000000;
var Limit;
var How=0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
	} else {
		if (status >= 1) {
			status = 1;
			cm.dispose();
			return;
		} else {
			cm.dispose();
			return;
		}
		status--;
	}

        if (status == 0) {
            text = "		"+xx+"#e装备分解系统#n"+xx+"#k\r\n\r\n";
            text += "#b#L0#"+xxx+"#r了解分解说明(必看)#e#l\r\n";
			if (cm.haveItem(2430865)){
				text += "#b#L2#"+xxx+"分解装备#r（一键分解装备）#k#l\r\n";
			}
			text += "#b#L1#"+xxx+"分解装备#r（单独分解装备）#k#l\r\n";
            cm.sendSimple(text);
		} else if (status == 1){
			if (selection == -1)
				selection = 1;
			switch(selection) {
				case 0:
					text = "#e#d分解说明#n#k：\r\n";
					text += "分解135~150装备及武器随机获得1~30w破功。#r（注意）分解FFN防具和AS武器及AS防具也是这么多破功，一定看清楚再分解，此过程不可逆转，分解错了不要找我！#e\r\n\r\n";
					text += "分解FFN武器是100%获得300~600W的破功\r\n";
					text+="一键分解功能只对会员开放！\r\n\r\n";
					text +="最后注意：分解后的破攻值是加在当前所持武器上面的！请仔细确认是否为当前武器破功。\r\n";
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
						if (reqLevel < 135 || reqLevel > 150)
							continue;
						newItemList[item.getPosition()]=item.getItemId();
						beDeletedArr.push(item.getPosition());
					}
					for(var key in newItemList) {
						text += "#L" + key + "##v" + newItemList[key] + "#";
						if (indexof > 1 && indexof % 5 == 0) {
							text += "\r\n";
						}
						indexof++;
					}
					if (beDeletedArr.length==0){
						cm.sendOk("请检查背包里有没有符合条件的装备！");
						cm.dispose();
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
						if (reqLevel >= 135 && reqLevel <=150) {
							for (var i =0;i<FFN.length ;i++ ){
								if (item.getItemId()==FFN[i]){
									How = How+1;
								}
							}
							newItemList[item.getPosition()]=item.getItemId();
							beDeletedArr.push(item.getPosition());
						}
					}
					for(var key in newItemList) {
						text += "#v" + newItemList[key] + "#";
						if (indexof > 1 && indexof % 5 == 0) {
							text += "\r\n";
						}
						indexof++;
					}
					if (beDeletedArr.length==0){
						cm.sendOk("请检查背包里有没有符合条件的装备！");
						cm.dispose();
						return;
					}
					text+="\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
					typed=2;
					cm.sendYesNo(text);
				break;
			}
		} else if (status == 2) {
			if (typed==1) {
				var item = cm.getInventory(inventoryType).getItem(selection);
				deleteSlot = selection;
				Limit=LimitA;
				for (var i =0;i<FFN.length ;i++ ){
					if (item.getItemId()==FFN[i]){
						Limit = LimitB;
					}
				}
				text = "#e确定要分解#r#v" + item.getItemId() + "##z" + item.getItemId() + "#  #k吗？#k";
				cm.sendNextPrev(text);
			} else if (typed==2) {
				var count = (beDeletedArr.length-How);
				Limit = count*LimitA+(How*LimitB);
				if (cm.WeaponLimitBreak(Limit)) {
					for(var key in beDeletedArr) {
						cm.removeSlot(1, beDeletedArr[key], 1);
					}
					cm.sendOk("分解成功！此次增加上限值为：#r"+Limit);
					cm.worldSpouseMessage(0x0F,"[分解系统]: VIP玩家 "+ cm.getChar().getName() +"分解了一堆高级装备,他的武器上限又增加了"+Limit);
				} else {
					cm.sendOk("请确认是否有佩戴武器或武器已经达到系统限制.");
				}
				cm.dispose();
			}
		} else if (status == 3) {
			if (typed==1) {
				if (cm.WeaponLimitBreak(Limit)) {
					cm.removeSlot(inventoryType, deleteSlot, 1);
					cm.sendOk("分解成功！此次增加上限值为：#r"+Limit);
					cm.worldSpouseMessage(0x0F,"[分解系统]:玩家 "+ cm.getChar().getName() +"分解了高级装备,他的武器上限又增加了"+Limit);
				} else {
					cm.sendOk("请确认是否有佩戴武器或武器已经达到系统限制.");
				}
				cm.dispose();
			}
		}
    }