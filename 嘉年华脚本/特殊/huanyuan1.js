var icon = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var icon2 = "#fUI/Basic.img/BtMin2/normal/0#";
var typed=1;
var cost = 10;
var inventoryType=1;
var item=null;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if (status == 0) {
		//expiredate
		var text="你好，在我这里可以进行装备还原，将装备所有属性初始化成标准值并且#b保留潜能属性#k，使用前请将要还原的道具放在#e#d装备栏的第一格#n。\r\n#b";
		text+="#L1#"+icon2+" 使用说明#l\r\n";
		text+="#L2#"+icon2+" 开始还原#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1){
		if (selection == 1) {
			typed=1;
			status = -1;
			var text="将道具除潜能以外的所有属性初始化成标准值，使用前请将要还原的道具放在装备栏的第一格，现金道具不可还原。还原将消耗点卷进行，不同等级消耗的点卷数量不同。";
			cm.sendSimple(text);
		} else if (selection == 2) {
			typed=2;
			item = cm.getInventory(1).getItem(1);
			if (item==null) {
				cm.sendOk("你确认你包裹的第一栏有装备存在？");
				cm.dispose();
				return;
			}
			if (item.getOwner().indexOf("★")>=0) {
				cm.sendOk("提升过品级的装备无法还原。");
				cm.dispose();
				return;
			}
			cost = cost*cm.getReqLevel(item.getItemId())+500;
			var text="这将花费掉你#r"+cost+"#k的点卷为你的装备进行还原，还原前请注意以下几点：\r\n\r\n#r1.请确认需要还原的装备已经放置在装备栏的第一格\r\n2.还原是个不可逆的操作，无法进行恢复\r\n3.玩家所造成的失误不予以赔偿\r\n\r\n#k是否继续？";
			cm.sendYesNo(text);
		} 
 	}  else if (status == 2) {
		if (cm.getPlayer().getCSPoints(1) < cost) {
			cm.sendOk("你好像没有#r"+cost+"#k点卷。");
			cm.dispose();
			return;
		}
		//var item = cm.getInventory(1).getItem(1);
		
		if (cm.isCash(item.getItemId())) {
			cm.sendOk("只有非现金道具才能进行还原");
			cm.dispose();
			return;
		}
		var deleteQuantity = item.getQuantity();
		var ii = cm.getItemInfo();					
		var toDrop = ii.randomizeStats(ii.getEquipById(item.getItemId())).copy(); // 生成一个Equip类
		toDrop.setPotential1(item.getPotential1());
		toDrop.setPotential2(item.getPotential2());
		toDrop.setPotential3(item.getPotential3()); 
		toDrop.setPotential4(item.getPotential4());
		toDrop.setPotential5(item.getPotential5());
		toDrop.setPotential6(item.getPotential6());
		toDrop.setExpiration(item.getExpiration());                 
		cm.removeSlot(1, 1, deleteQuantity);
		cm.addFromDrop(cm.getC(), toDrop, false);
		cm.gainNX(-cost);
		cm.sendOk("还原成功了。");
		cm.dispose();
	}
}
