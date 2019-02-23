/*
 脚本功能：宠物复活
 */

var a = 0;

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
			else
			a--;
		if (a == -1) {
			cm.dispose();
		} else if (a == 0) {
			var text="嗨，有什么可以帮助你吗？\r\n";
			text+="#b#L2#怎样复活宠物？\r\n";
			text+="#b#L1#复活宠物#l\r\n";
			cm.sendSimple(text);
		} else if (a == 1) {
			if (selection == 2) {
				a = -1;
				cm.sendSimple("复活宠物需要完成#b射手村跳跳跳#k及#b玩具城跳跳跳#k副本，完成之后来找我，给我#r2000万#k游戏币和#r3#k个冬季限量币我就可以为你的爱宠延长#r30天#k的寿命哦！");
			} else {
				var text = "请选择您要复活的宠物：\r\n";
				var list = cm.getInventory(5).list();
				var petList = list.iterator();
				var petItemList = Array();
				var timeStamp = java.lang.System.currentTimeMillis();
				while (petList.hasNext()) {
					var pet = petList.next();
					if (Math.floor(pet.getItemId()/10000)!=500)
						continue;
					if (pet.getExpiration()>=timeStamp)
						continue;
					petItemList[pet.getPosition()]=pet.getItemId();
				}
				var indexof=0;
				for(var key in petItemList) {
					text += "#L" + key + "##v" + petItemList[key] + "#";
					if (indexof > 1 && indexof % 5 == 0) {
						text += "\r\n";
					}
					indexof++;
				}
				if (petItemList.length==0) {
					cm.sendOk("你好像没有需要复活的宠物哦！");
					cm.dispose();
					return;
				}
				cm.sendSimple(text);
			}
		} else if (a == 2) {
			if (cm.getMeso()<20000000) {
				cm.sendOk("你没有那么多游戏币，我没法为你服务。");
				cm.dispose();
				return ;
			}
			if (!cm.haveItem(4310066, 3)) {
				cm.sendOk("你没有那么多冬季限量币，我没法为你服务。");
				cm.dispose();
				return ;
			}
			if (cm.getBossLog("射手跳跳")<=0 || cm.getBossLog("玩具跳跳") <= 0) {
				cm.sendOk("你还没有完成射手跳跳和玩具跳跳副本，无法复活宠物！");
				cm.dispose();
				return ;
			}
			var pos = selection;
			var  item = cm.getInventory(5).getItem(pos);
			var toDrop = item.copy();
			var timeStamp = java.lang.System.currentTimeMillis();
			var expirationDate = timeStamp+30*86400*1000;
			toDrop.setExpiration(expirationDate);
			cm.removeSlot(5, pos, 1)
			cm.addFromDrop(cm.getC(), toDrop, false);
			cm.gainMeso(-20000000);
			cm.gainItem(4310066, -3);
			cm.sendOk("复活成功啦！你的爱宠又增加了30天的寿命！");
			cm.dispose();
		}
	}//mode
}//f

